TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D_t.jpg",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_1669253C_06F1_24AE_417D_AD87447571F8",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 11.67,
        "yaw": 1.46,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 100,
           "width": 81,
           "url": "media/panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -4.9
       }
      ],
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_0FD85D6E_0673_DED7_40FD_D23817113C40, this.camera_19D0C1ED_0BD1_B329_417C_736FAA2C7ED8); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "items": [
       {
        "yaw": 1.46,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 11.67,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 162,
           "url": "media/panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -4.9
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_1723D9CD_06F1_2FEE_4195_F17AB1536320",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 10.99,
        "yaw": 1.51,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 21,
           "url": "media/panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D_0_HS_1_0_map.gif"
          }
         ]
        },
        "pitch": -13.63
       }
      ],
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "items": [
       {
        "yaw": 1.51,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.99,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 115,
           "width": 157,
           "url": "media/panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -13.63
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D.jpeg"
      }
     ]
    }
   }
  ],
  "cardboardMenu": {
   "selectedBackgroundColor": "#202020",
   "fontFamily": "Arial",
   "rollOverBackgroundColor": "#000000",
   "label": "Media",
   "backgroundColor": "#404040",
   "class": "Menu",
   "opacity": 0.4,
   "id": "Menu_18B37D98_0BD1_93F6_4188_E592649F61C1",
   "rollOverOpacity": 0.8,
   "selectedFontColor": "#FFFFFF",
   "children": [
    {
     "class": "MenuItem",
     "label": "C01",
     "click": "this.mainPlayList.set('selectedIndex', 0)"
    },
    {
     "class": "MenuItem",
     "label": "C02",
     "click": "this.mainPlayList.set('selectedIndex', 1)"
    },
    {
     "class": "MenuItem",
     "label": "C03",
     "click": "this.mainPlayList.set('selectedIndex', 2)"
    },
    {
     "class": "MenuItem",
     "label": "C04",
     "click": "this.mainPlayList.set('selectedIndex', 3)"
    },
    {
     "class": "MenuItem",
     "label": "C05",
     "click": "this.mainPlayList.set('selectedIndex', 4)"
    },
    {
     "class": "MenuItem",
     "label": "C06",
     "click": "this.mainPlayList.set('selectedIndex', 5)"
    },
    {
     "class": "MenuItem",
     "label": "C07",
     "click": "this.mainPlayList.set('selectedIndex', 6)"
    },
    {
     "class": "MenuItem",
     "label": "C08",
     "click": "this.mainPlayList.set('selectedIndex', 7)"
    },
    {
     "class": "MenuItem",
     "label": "C09",
     "click": "this.mainPlayList.set('selectedIndex', 8)"
    },
    {
     "class": "MenuItem",
     "label": "C10",
     "click": "this.mainPlayList.set('selectedIndex', 9)"
    },
    {
     "class": "MenuItem",
     "label": "C11",
     "click": "this.mainPlayList.set('selectedIndex', 10)"
    },
    {
     "class": "MenuItem",
     "label": "C12",
     "click": "this.mainPlayList.set('selectedIndex', 11)"
    },
    {
     "class": "MenuItem",
     "label": "C13",
     "click": "this.mainPlayList.set('selectedIndex', 12)"
    },
    {
     "class": "MenuItem",
     "label": "C14",
     "click": "this.mainPlayList.set('selectedIndex', 13)"
    },
    {
     "class": "MenuItem",
     "label": "C15",
     "click": "this.mainPlayList.set('selectedIndex', 14)"
    },
    {
     "class": "MenuItem",
     "label": "C16",
     "click": "this.mainPlayList.set('selectedIndex', 15)"
    },
    {
     "class": "MenuItem",
     "label": "C17",
     "click": "this.mainPlayList.set('selectedIndex', 16)"
    },
    {
     "class": "MenuItem",
     "label": "C18",
     "click": "this.mainPlayList.set('selectedIndex', 17)"
    },
    {
     "class": "MenuItem",
     "label": "C19",
     "click": "this.mainPlayList.set('selectedIndex', 18)"
    },
    {
     "class": "MenuItem",
     "label": "C20",
     "click": "this.mainPlayList.set('selectedIndex', 19)"
    },
    {
     "class": "MenuItem",
     "label": "C21",
     "click": "this.mainPlayList.set('selectedIndex', 20)"
    },
    {
     "class": "MenuItem",
     "label": "C22",
     "click": "this.mainPlayList.set('selectedIndex', 21)"
    },
    {
     "class": "MenuItem",
     "label": "C23",
     "click": "this.mainPlayList.set('selectedIndex', 22)"
    }
   ],
   "fontColor": "#FFFFFF",
   "rollOverFontColor": "#FFFFFF"
  },
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D_t.jpg",
  "id": "panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D",
  "hfovMin": 60,
  "label": "C01",
  "class": "Panorama",
  "hfovMax": 120,
  "hfov": 360,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_t.jpg",
       "overlays": [
        {
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_14B6E9F3_06FF_6FBA_4191_BB523B46F728",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 23.04,
           "yaw": 0.64,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 107,
              "width": 160,
              "url": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -5.15
          }
         ],
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544, this.camera_1EDA4125_0BD1_B0D9_419E_0E75BE994331); this.mainPlayList.set('selectedIndex', 2)"
          }
         ],
         "items": [
          {
           "yaw": 0.64,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 23.04,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 214,
              "width": 321,
              "url": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -5.15
          }
         ]
        },
        {
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_12BCBCD9_06FF_E5F6_4132_6BD2D8AC4E5A",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 10.94,
           "yaw": 1,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 16,
              "width": 24,
              "url": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_0_HS_1_0_map.gif"
             }
            ]
           },
           "pitch": -14.51
          }
         ],
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "items": [
          {
           "yaw": 1,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 10.94,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 104,
              "width": 157,
              "url": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -14.51
          }
         ]
        },
        {
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_16333A58_06F0_ECF6_418E_5831E3934A02",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 15.74,
           "yaw": -179.67,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 82,
              "width": 109,
              "url": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_0_HS_2_0_0_map.gif"
             }
            ]
           },
           "pitch": -0.88
          }
         ],
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D, this.camera_1ECDF139_0BD1_B329_415B_6C45403D6CBA); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "items": [
          {
           "yaw": -179.67,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 15.74,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 165,
              "width": 218,
              "url": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_0_HS_2_0.png"
             }
            ]
           },
           "pitch": -0.88
          }
         ]
        },
        {
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_1690DD0C_06F1_246E_4197_6AD3CD66470D",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 11.44,
           "yaw": -177.99,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 16,
              "width": 26,
              "url": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_0_HS_3_0_map.gif"
             }
            ]
           },
           "pitch": -7.98
          }
         ],
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "items": [
          {
           "yaw": -177.99,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 11.44,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 97,
              "width": 160,
              "url": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_0_HS_3_0.png"
             }
            ]
           },
           "pitch": -7.98
          }
         ]
        }
       ],
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 2500,
          "width": 5000,
          "url": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40.jpeg"
         }
        ]
       }
      }
     ],
     "cardboardMenu": "this.Menu_18B37D98_0BD1_93F6_4188_E592649F61C1",
     "partial": false,
     "pitch": 0,
     "thumbnailUrl": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_t.jpg",
     "id": "panorama_0FD85D6E_0673_DED7_40FD_D23817113C40",
     "hfovMin": 60,
     "label": "C02",
     "class": "Panorama",
     "hfovMax": 120,
     "hfov": 360,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_t.jpg",
          "overlays": [
           {
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_147A8E68_06F3_64D6_4183_F7E4E488AEE0",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 13.93,
              "yaw": 0.35,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 100,
                 "width": 97,
                 "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -6.41
             }
            ],
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_0FD85D6E_0673_DED7_40FD_D23817113C40, this.camera_19C6B203_0BD1_B0D9_418C_E5BE9E3C2A1C); this.mainPlayList.set('selectedIndex', 1)"
             }
            ],
            "items": [
             {
              "yaw": 0.35,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 13.93,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 200,
                 "width": 194,
                 "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -6.41
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_15ADB079_06F3_1CB6_418B_9B6CDA887ED8",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 11.17,
              "yaw": 0.38,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 16,
                 "width": 20,
                 "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_1_0_map.gif"
                }
               ]
              },
              "pitch": -14.88
             }
            ],
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "items": [
             {
              "yaw": 0.38,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 11.17,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 122,
                 "width": 160,
                 "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -14.88
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_14376EDE_06F1_25ED_416E_3CD4528DB12E",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 10.99,
              "yaw": -177.99,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 93,
                 "width": 76,
                 "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_2_0_0_map.gif"
                }
               ]
              },
              "pitch": -5.9
             }
            ],
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24, this.camera_19CA51F9_0BD1_B329_4199_09A2FA86C78B); this.mainPlayList.set('selectedIndex', 3)"
             }
            ],
            "items": [
             {
              "yaw": -177.99,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 10.99,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 186,
                 "width": 153,
                 "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_2_0.png"
                }
               ]
              },
              "pitch": -5.9
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_157DAC36_06F1_24BA_4180_B0CB15CF6B9B",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 10.19,
              "yaw": -177.74,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 16,
                 "width": 19,
                 "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_3_0_map.gif"
                }
               ]
              },
              "pitch": -15.01
             }
            ],
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "items": [
             {
              "yaw": -177.74,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 10.19,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 118,
                 "width": 146,
                 "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_3_0.png"
                }
               ]
              },
              "pitch": -15.01
             }
            ]
           }
          ],
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "height": 2500,
             "width": 5000,
             "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_hq.jpeg"
            },
            {
             "class": "ImageResourceLevel",
             "height": 1608,
             "width": 3217,
             "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544.jpeg"
            }
           ]
          }
         }
        ],
        "cardboardMenu": "this.Menu_18B37D98_0BD1_93F6_4188_E592649F61C1",
        "partial": false,
        "pitch": 0,
        "thumbnailUrl": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_t.jpg",
        "id": "panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
        "hfovMin": 60,
        "label": "C03",
        "class": "Panorama",
        "hfovMax": 120,
        "hfov": 360,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_t.jpg",
             "overlays": [
              {
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_1591595B_06F7_2CEA_4193_33DDF4028068",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 11.33,
                 "yaw": -2.21,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 79,
                    "width": 79,
                    "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -6.66
                }
               ],
               "useHandCursor": true,
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA, this.camera_190A32A5_0BD1_B1D9_41A0_01A283C65A23); this.mainPlayList.set('selectedIndex', 4)"
                }
               ],
               "items": [
                {
                 "yaw": -2.21,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 11.33,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 158,
                    "width": 158,
                    "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -6.66
                }
               ]
              },
              {
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_15F363E3_06F7_E3DA_4166_E1ADD25A8F16",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 10.72,
                 "yaw": -2.39,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 16,
                    "width": 21,
                    "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_0_HS_1_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -14.13
                }
               ],
               "useHandCursor": true,
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "items": [
                {
                 "yaw": -2.39,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 10.72,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 115,
                    "width": 153,
                    "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": -14.13
                }
               ]
              },
              {
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_1286252F_06F1_24AA_4180_65D537174EB2",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 8.42,
                 "yaw": -179.28,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 86,
                    "width": 58,
                    "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_0_HS_2_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -6.91
                }
               ],
               "useHandCursor": true,
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544, this.camera_19100291_0BD1_B1F9_417F_06A25A2AD252); this.mainPlayList.set('selectedIndex', 2)"
                }
               ],
               "items": [
                {
                 "yaw": -179.28,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 8.42,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 172,
                    "width": 117,
                    "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_0_HS_2_0.png"
                   }
                  ]
                 },
                 "pitch": -6.91
                }
               ]
              },
              {
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_122DE14B_06F1_1CEA_4197_5318700943E8",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 10.42,
                 "yaw": -179.62,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 16,
                    "width": 23,
                    "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_0_HS_3_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -15.39
                }
               ],
               "useHandCursor": true,
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "items": [
                {
                 "yaw": -179.62,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 10.42,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 101,
                    "width": 150,
                    "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_0_HS_3_0.png"
                   }
                  ]
                 },
                 "pitch": -15.39
                }
               ]
              }
             ],
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "height": 2500,
                "width": 5000,
                "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_hq.jpeg"
               },
               {
                "class": "ImageResourceLevel",
                "height": 1608,
                "width": 3217,
                "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24.jpeg"
               }
              ]
             }
            }
           ],
           "cardboardMenu": "this.Menu_18B37D98_0BD1_93F6_4188_E592649F61C1",
           "partial": false,
           "pitch": 0,
           "thumbnailUrl": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_t.jpg",
           "id": "panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
           "hfovMin": 60,
           "label": "C04",
           "class": "Panorama",
           "hfovMax": 120,
           "hfov": 360,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
             "yaw": -179.28,
             "backwardYaw": -177.99,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_t.jpg",
                "overlays": [
                 {
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_15E7DB16_06F3_2C7A_4199_963496BA8F47",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 9.92,
                    "yaw": -2.69,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 84,
                       "width": 69,
                       "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -4.02
                   }
                  ],
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24, this.camera_188F7DDD_0BD1_936E_4191_E0715BC7BAFD); this.mainPlayList.set('selectedIndex', 3)"
                   }
                  ],
                  "items": [
                   {
                    "yaw": -2.69,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 9.92,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 169,
                       "width": 138,
                       "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -4.02
                   }
                  ]
                 },
                 {
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_1382DAC3_06F3_EDDA_4199_4640AB09737B",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 11.08,
                    "yaw": -3.01,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 16,
                       "width": 23,
                       "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_1_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -11.37
                   }
                  ],
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "items": [
                   {
                    "yaw": -3.01,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 11.08,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 108,
                       "width": 156,
                       "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_1_0.png"
                      }
                     ]
                    },
                    "pitch": -11.37
                   }
                  ]
                 },
                 {
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_1470B197_06F3_3C7A_418B_F6F6C4B06850",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 11.73,
                    "yaw": -179.87,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 81,
                       "width": 82,
                       "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_2_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -7.29
                   }
                  ],
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4, this.camera_18889DEC_0BD1_932F_41A6_9E2D9033155A); this.mainPlayList.set('selectedIndex', 5)"
                   }
                  ],
                  "items": [
                   {
                    "yaw": -179.87,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 11.73,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 162,
                       "width": 164,
                       "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_2_0.png"
                      }
                     ]
                    },
                    "pitch": -7.29
                   }
                  ]
                 },
                 {
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_121F44F8_06F1_25B6_416C_4F213A9D0F56",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 10.89,
                    "yaw": -179.37,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 16,
                       "width": 24,
                       "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_3_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -15.51
                   }
                  ],
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "items": [
                   {
                    "yaw": -179.37,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 10.89,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 104,
                       "width": 157,
                       "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_3_0.png"
                      }
                     ]
                    },
                    "pitch": -15.51
                   }
                  ]
                 }
                ],
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "height": 2500,
                   "width": 5000,
                   "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_hq.jpeg"
                  },
                  {
                   "class": "ImageResourceLevel",
                   "height": 1608,
                   "width": 3217,
                   "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA.jpeg"
                  }
                 ]
                }
               }
              ],
              "cardboardMenu": "this.Menu_18B37D98_0BD1_93F6_4188_E592649F61C1",
              "partial": false,
              "pitch": 0,
              "thumbnailUrl": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_t.jpg",
              "id": "panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
              "hfovMin": 60,
              "label": "C05",
              "class": "Panorama",
              "hfovMax": 120,
              "hfov": 360,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
                "yaw": -2.69,
                "backwardYaw": -2.21,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "thumbnailUrl": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_t.jpg",
                   "overlays": [
                    {
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_14EB4A70_068F_6CB6_4190_049216A52BD8",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 10.58,
                       "yaw": 7.93,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 89,
                          "width": 73,
                          "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_0_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -2.89
                      }
                     ],
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_18173EB1_0BD1_9139_4183_1E11ADE89118); this.mainPlayList.set('selectedIndex', 6)"
                      }
                     ],
                     "items": [
                      {
                       "yaw": 7.93,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 10.58,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 179,
                          "width": 147,
                          "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_0_0.png"
                         }
                        ]
                       },
                       "pitch": -2.89
                      }
                     ]
                    },
                    {
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_15D28AE0_068F_2DD6_4190_19CBC3F443F6",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 10.12,
                       "yaw": 7.54,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 16,
                          "width": 22,
                          "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_1_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -10.87
                      }
                     ],
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "items": [
                      {
                       "yaw": 7.54,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 10.12,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 101,
                          "width": 143,
                          "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_1_0.png"
                         }
                        ]
                       },
                       "pitch": -10.87
                      }
                     ]
                    },
                    {
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_13A44599_0691_2476_4189_7D56D283ED40",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 12.32,
                       "yaw": -178.55,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 98,
                          "width": 86,
                          "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_2_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -8.04
                      }
                     ],
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA, this.camera_180FAEC3_0BD1_9159_4176_0AA5D13906F8); this.mainPlayList.set('selectedIndex', 4)"
                      }
                     ],
                     "items": [
                      {
                       "yaw": -178.55,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 12.32,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 197,
                          "width": 172,
                          "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_2_0.png"
                         }
                        ]
                       },
                       "pitch": -8.04
                      }
                     ]
                    },
                    {
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_1302EAF9_0691_2DB6_4188_E41C59F609C1",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 10.54,
                       "yaw": -178.74,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 16,
                          "width": 19,
                          "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_3_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -17.52
                      }
                     ],
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "items": [
                      {
                       "yaw": -178.74,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 10.54,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 125,
                          "width": 153,
                          "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_3_0.png"
                         }
                        ]
                       },
                       "pitch": -17.52
                      }
                     ]
                    }
                   ],
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "height": 2500,
                      "width": 5000,
                      "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_hq.jpeg"
                     },
                     {
                      "class": "ImageResourceLevel",
                      "height": 1608,
                      "width": 3217,
                      "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4.jpeg"
                     }
                    ]
                   }
                  }
                 ],
                 "cardboardMenu": "this.Menu_18B37D98_0BD1_93F6_4188_E592649F61C1",
                 "partial": false,
                 "pitch": 0,
                 "thumbnailUrl": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_t.jpg",
                 "id": "panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
                 "hfovMin": 60,
                 "label": "C06",
                 "class": "Panorama",
                 "hfovMax": 120,
                 "hfov": 360,
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": {
                    "frames": [
                     {
                      "class": "SphericPanoramaFrame",
                      "thumbnailUrl": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_t.jpg",
                      "overlays": [
                       {
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_1333B95D_0697_2CEE_4194_7F372605A06C",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 7.66,
                          "yaw": 4.74,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 73,
                             "width": 53,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_0_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -2.68
                         }
                        ],
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_1F942F90_0BD1_8FF6_4178_9BB2B82B7694); this.mainPlayList.set('selectedIndex', 7)"
                         }
                        ],
                        "items": [
                         {
                          "yaw": 4.74,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 7.66,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 146,
                             "width": 106,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_0_0.png"
                            }
                           ]
                          },
                          "pitch": -2.68
                         }
                        ]
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_1092C51A_0697_246A_4172_39E7152EFDF5",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 6.67,
                          "yaw": 4.7,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 16,
                             "width": 25,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_1_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -8.76
                         }
                        ],
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "items": [
                         {
                          "yaw": 4.7,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 6.67,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 59,
                             "width": 93,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_1_0.png"
                            }
                           ]
                          },
                          "pitch": -8.76
                         }
                        ]
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_13AD4E3C_0691_64AE_4142_65BF2B2097A0",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 5.6,
                          "yaw": 12.61,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 53,
                             "width": 38,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_2_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -1.07
                         }
                        ],
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.mainPlayList.set('selectedIndex', 8)"
                         }
                        ],
                        "items": [
                         {
                          "yaw": 12.61,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 5.6,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 107,
                             "width": 77,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_2_0.png"
                            }
                           ]
                          },
                          "pitch": -1.07
                         }
                        ]
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_106E4805_0691_EC5E_4130_FDB4211F1678",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 5.45,
                          "yaw": 13.04,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 16,
                             "width": 27,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_3_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -5.63
                         }
                        ],
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "items": [
                         {
                          "yaw": 13.04,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 5.45,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 45,
                             "width": 76,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_3_0.png"
                            }
                           ]
                          },
                          "pitch": -5.63
                         }
                        ]
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_13C882E8_0691_3DD6_4186_867D67D1ACA5",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 9.57,
                          "yaw": 66.31,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 59,
                             "width": 66,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_4_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -1.12
                         }
                        ],
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_1FFE2FB8_0BD1_8F37_41A7_57C05D3C2321); this.mainPlayList.set('selectedIndex', 9)"
                         }
                        ],
                        "items": [
                         {
                          "yaw": 66.31,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 9.57,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 118,
                             "width": 132,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_4_0.png"
                            }
                           ]
                          },
                          "pitch": -1.12
                         }
                        ]
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_1E9BB315_0693_1C7E_415E_4DA4763AE3A6",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 7,
                          "yaw": 66.28,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 16,
                             "width": 25,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_5_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -5.89
                         }
                        ],
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "items": [
                         {
                          "yaw": 66.28,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 7,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 62,
                             "width": 97,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_5_0.png"
                            }
                           ]
                          },
                          "pitch": -5.89
                         }
                        ]
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_151CF646_0693_24DA_416D_8D0286472AEE",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 6.92,
                          "yaw": 107.11,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 59,
                             "width": 48,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_6_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": 1.22
                         }
                        ],
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_1F8A4FA2_0BD1_8FDA_4175_975811F1D832); this.mainPlayList.set('selectedIndex', 16)"
                         }
                        ],
                        "items": [
                         {
                          "yaw": 107.11,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 6.92,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 118,
                             "width": 96,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_6_0.png"
                            }
                           ]
                          },
                          "pitch": 1.22
                         }
                        ]
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_118C7373_0690_FCBA_4191_5EC42FBDA8F2",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 7.5,
                          "yaw": 107.35,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 16,
                             "width": 28,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_7_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -4.01
                         }
                        ],
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "items": [
                         {
                          "yaw": 107.35,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 7.5,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 59,
                             "width": 104,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_7_0.png"
                            }
                           ]
                          },
                          "pitch": -4.01
                         }
                        ]
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_1F155413_069F_E47A_417D_DC481E61927D",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 6.42,
                          "yaw": 124.98,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 66,
                             "width": 44,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_8_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": 1.64
                         }
                        ],
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_1FE83FE1_0BD1_8F56_41A3_F6D1A3B982B6); this.mainPlayList.set('selectedIndex', 17)"
                         }
                        ],
                        "items": [
                         {
                          "yaw": 124.98,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 6.42,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 133,
                             "width": 89,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_8_0.png"
                            }
                           ]
                          },
                          "pitch": 1.64
                         }
                        ]
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_11875053_0691_3CFA_4188_191F1826EC2B",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 6.97,
                          "yaw": 125.04,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 16,
                             "width": 25,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_9_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -3.3
                         }
                        ],
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "items": [
                         {
                          "yaw": 125.04,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 6.97,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 61,
                             "width": 96,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_9_0.png"
                            }
                           ]
                          },
                          "pitch": -3.3
                         }
                        ]
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_11AFC364_0693_1CDE_418A_DEE26D1887D0",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 6.56,
                          "yaw": 156.92,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 50,
                             "width": 45,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_10_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -1.22
                         }
                        ],
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_1FC7F028_0BD1_B0D6_4147_7C514DD8EA60); this.mainPlayList.set('selectedIndex', 15)"
                         }
                        ],
                        "items": [
                         {
                          "yaw": 156.92,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 6.56,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 100,
                             "width": 91,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_10_0.png"
                            }
                           ]
                          },
                          "pitch": -1.22
                         }
                        ]
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_11D3D443_0693_24DA_4192_5962A59207B3",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 7,
                          "yaw": 157.26,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 16,
                             "width": 26,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_11_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -5.87
                         }
                        ],
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "items": [
                         {
                          "yaw": 157.26,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 7,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 59,
                             "width": 97,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_11_0.png"
                            }
                           ]
                          },
                          "pitch": -5.87
                         }
                        ]
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_11AD6E0E_0693_646A_4187_2F4CE059F6D0",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 5.14,
                          "yaw": 149.3,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 41,
                             "width": 35,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_12_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": 1.92
                         }
                        ],
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_1FF49FCC_0BD1_8F6F_4191_3DB27399AF9D); this.mainPlayList.set('selectedIndex', 22)"
                         }
                        ],
                        "items": [
                         {
                          "yaw": 149.3,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 5.14,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 83,
                             "width": 71,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_12_0.png"
                            }
                           ]
                          },
                          "pitch": 1.92
                         }
                        ]
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_101B7B09_06B0_EC56_4196_DF7A51BE6DEB",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 7.67,
                          "yaw": 149.55,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 16,
                             "width": 26,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_13_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -2.39
                         }
                        ],
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "items": [
                         {
                          "yaw": 149.55,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 7.67,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 64,
                             "width": 106,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_13_0.png"
                            }
                           ]
                          },
                          "pitch": -2.39
                         }
                        ]
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_11BB0487_06B3_245A_417D_497BBA79B69B",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 6.77,
                          "yaw": 136.61,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 44,
                             "width": 47,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_14_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": 0.78
                         }
                        ],
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_1FD27011_0BD1_B0F9_4194_905287DFE496); this.mainPlayList.set('selectedIndex', 18)"
                         }
                        ],
                        "items": [
                         {
                          "yaw": 136.61,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 6.77,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 89,
                             "width": 94,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_14_0.png"
                            }
                           ]
                          },
                          "pitch": 0.78
                         }
                        ]
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_10EB5DB3_06B0_E7BB_4193_4B3DE5CAB7DE",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 6.92,
                          "yaw": 136.39,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 16,
                             "width": 25,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_15_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -3.17
                         }
                        ],
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "items": [
                         {
                          "yaw": 136.39,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 6.92,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 60,
                             "width": 96,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_15_0.png"
                            }
                           ]
                          },
                          "pitch": -3.17
                         }
                        ]
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_1C974485_06B3_E45E_4182_73908E649E3E",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 18.69,
                          "yaw": -96.27,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 98,
                             "width": 130,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_16_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -4.02
                         }
                        ],
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4, this.camera_1FDC5FFF_0BD1_8F29_4177_2CB9C93CC4B4); this.mainPlayList.set('selectedIndex', 5)"
                         }
                        ],
                        "items": [
                         {
                          "yaw": -96.27,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 18.69,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 197,
                             "width": 260,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_16_0.png"
                            }
                           ]
                          },
                          "pitch": -4.02
                         }
                        ]
                       },
                       {
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_1CA3866A_06B3_24AA_418F_9F19B27231FA",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 11.05,
                          "yaw": -96.47,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 16,
                             "width": 22,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_17_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -12.25
                         }
                        ],
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "items": [
                         {
                          "yaw": -96.47,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 11.05,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 111,
                             "width": 157,
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_17_0.png"
                            }
                           ]
                          },
                          "pitch": -12.25
                         }
                        ]
                       }
                      ],
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "class": "ImageResourceLevel",
                         "height": 2500,
                         "width": 5000,
                         "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_hq.jpeg"
                        },
                        {
                         "class": "ImageResourceLevel",
                         "height": 1608,
                         "width": 3217,
                         "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA.jpeg"
                        }
                       ]
                      }
                     }
                    ],
                    "cardboardMenu": "this.Menu_18B37D98_0BD1_93F6_4188_E592649F61C1",
                    "partial": false,
                    "pitch": 0,
                    "thumbnailUrl": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_t.jpg",
                    "id": "panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                    "hfovMin": 60,
                    "label": "C07",
                    "class": "Panorama",
                    "hfovMax": 120,
                    "hfov": 360,
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "panorama": {
                       "frames": [
                        {
                         "class": "SphericPanoramaFrame",
                         "thumbnailUrl": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_t.jpg",
                         "overlays": [
                          {
                           "class": "HotspotPanoramaOverlay",
                           "id": "overlay_108FC976_06B1_6CBA_4194_C8910C228778",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 7.67,
                             "yaw": -154.28,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 62,
                                "width": 52,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_0_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -3.38
                            }
                           ],
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82, this.camera_1EE9E11B_0BD1_B0E9_41A6_C4CB1557D510); this.mainPlayList.set('selectedIndex', 8)"
                            }
                           ],
                           "items": [
                            {
                             "yaw": -154.28,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 7.67,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 124,
                                "width": 104,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_0_0.png"
                               }
                              ]
                             },
                             "pitch": -3.38
                            }
                           ]
                          },
                          {
                           "class": "HotspotPanoramaOverlay",
                           "id": "overlay_1C9800E4_06BF_3DDE_4173_59F64E3E5D64",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 7.28,
                             "yaw": -153.92,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 16,
                                "width": 25,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_1_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -8.41
                            }
                           ],
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "items": [
                            {
                             "yaw": -153.92,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 7.28,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 64,
                                "width": 100,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_1_0.png"
                               }
                              ]
                             },
                             "pitch": -8.41
                            }
                           ]
                          },
                          {
                           "class": "HotspotPanoramaOverlay",
                           "id": "overlay_1E29306F_06BF_3CAA_4193_DFD053E8C52C",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 11.33,
                             "yaw": -42.13,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 75,
                                "width": 77,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_2_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -1.48
                            }
                           ],
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_1E85F0FD_0BD1_B12E_4186_A27C9BD26414); this.mainPlayList.set('selectedIndex', 9)"
                            }
                           ],
                           "items": [
                            {
                             "yaw": -42.13,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 11.33,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 150,
                                "width": 154,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_2_0.png"
                               }
                              ]
                             },
                             "pitch": -1.48
                            }
                           ]
                          },
                          {
                           "class": "HotspotPanoramaOverlay",
                           "id": "overlay_112FAD06_06B0_E45A_4192_19B5F480919F",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 8.76,
                             "yaw": -41.81,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 16,
                                "width": 27,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_3_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -7.26
                            }
                           ],
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "items": [
                            {
                             "yaw": -41.81,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 8.76,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 71,
                                "width": 120,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_3_0.png"
                               }
                              ]
                             },
                             "pitch": -7.26
                            }
                           ]
                          },
                          {
                           "class": "HotspotPanoramaOverlay",
                           "id": "overlay_11493BE4_06B1_23DE_4184_2C2532225ED0",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 6.29,
                             "yaw": 36.85,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 71,
                                "width": 42,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_4_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -2.58
                            }
                           ],
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_1EF8C10F_0BD1_B0EA_418C_767C1FC5F643); this.mainPlayList.set('selectedIndex', 6)"
                            }
                           ],
                           "items": [
                            {
                             "yaw": 36.85,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 6.29,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 142,
                                "width": 85,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_4_0.png"
                               }
                              ]
                             },
                             "pitch": -2.58
                            }
                           ]
                          },
                          {
                           "class": "HotspotPanoramaOverlay",
                           "id": "overlay_1FA8ED9A_06B1_646A_4196_2926CB7FBF93",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 6.76,
                             "yaw": 36.94,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 16,
                                "width": 26,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_5_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -6.88
                            }
                           ],
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "items": [
                            {
                             "yaw": 36.94,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 6.76,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 55,
                                "width": 92,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_5_0.png"
                               }
                              ]
                             },
                             "pitch": -6.88
                            }
                           ]
                          },
                          {
                           "class": "HotspotPanoramaOverlay",
                           "id": "overlay_1C896D16_06B3_647D_419A_5B670D605F0F",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 4.69,
                             "yaw": 12.62,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 56,
                                "width": 31,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_6_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": 0.41
                            }
                           ],
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_1EA180E6_0BD1_B15B_419B_3C93A026869F); this.mainPlayList.set('selectedIndex', 15)"
                            }
                           ],
                           "items": [
                            {
                             "yaw": 12.62,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 4.69,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 112,
                                "width": 63,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_6_0.png"
                               }
                              ]
                             },
                             "pitch": 0.41
                            }
                           ]
                          },
                          {
                           "class": "HotspotPanoramaOverlay",
                           "id": "overlay_1D2E6CB7_06B3_25BA_4193_701A9B0FB2FB",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 5.61,
                             "yaw": 12.53,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 16,
                                "width": 23,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_7_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -3.06
                            }
                           ],
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "items": [
                            {
                             "yaw": 12.53,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 5.61,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 51,
                                "width": 76,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_7_0.png"
                               }
                              ]
                             },
                             "pitch": -3.06
                            }
                           ]
                          },
                          {
                           "class": "HotspotPanoramaOverlay",
                           "id": "overlay_11694CCB_06B1_25EA_4174_4C81369B945A",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 8.76,
                             "yaw": -22.68,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 51,
                                "width": 59,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_8_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -0.34
                            }
                           ],
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_1EB0D0D4_0BD1_B17F_4188_3B69D29C2CE2); this.mainPlayList.set('selectedIndex', 16)"
                            }
                           ],
                           "items": [
                            {
                             "yaw": -22.68,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 8.76,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 103,
                                "width": 119,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_8_0.png"
                               }
                              ]
                             },
                             "pitch": -0.34
                            }
                           ]
                          },
                          {
                           "class": "HotspotPanoramaOverlay",
                           "id": "overlay_1FD2C4F5_06B1_65BE_4181_9DD8225286DD",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 7.24,
                             "yaw": -22.91,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 16,
                                "width": 26,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_9_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -5.14
                            }
                           ],
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "items": [
                            {
                             "yaw": -22.91,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 7.24,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 59,
                                "width": 98,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_9_0.png"
                               }
                              ]
                             },
                             "pitch": -5.14
                            }
                           ]
                          },
                          {
                           "class": "HotspotPanoramaOverlay",
                           "id": "overlay_1AA96E8F_06B7_246A_4191_88C07BFE428F",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 5,
                             "yaw": -15.07,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 34,
                                "width": 34,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_10_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": 0.68
                            }
                           ],
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_1E9300F3_0BD1_B13A_418E_8CC9F7702326); this.mainPlayList.set('selectedIndex', 17)"
                            }
                           ],
                           "items": [
                            {
                             "yaw": -15.07,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 5,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 68,
                                "width": 68,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_10_0.png"
                               }
                              ]
                             },
                             "pitch": 0.68
                            }
                           ]
                          },
                          {
                           "class": "HotspotPanoramaOverlay",
                           "id": "overlay_1C689D2D_06B7_24AE_4189_12E4D57756A6",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 6.67,
                             "yaw": -15.09,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 16,
                                "width": 22,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_11_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -3.07
                            }
                           ],
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "items": [
                            {
                             "yaw": -15.09,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 6.67,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 63,
                                "width": 90,
                                "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_11_0.png"
                               }
                              ]
                             },
                             "pitch": -3.07
                            }
                           ]
                          }
                         ],
                         "sphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "class": "ImageResourceLevel",
                            "height": 2450,
                            "width": 4900,
                            "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_hq.jpeg"
                           },
                           {
                            "class": "ImageResourceLevel",
                            "height": 1608,
                            "width": 3217,
                            "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F.jpeg"
                           }
                          ]
                         }
                        }
                       ],
                       "cardboardMenu": "this.Menu_18B37D98_0BD1_93F6_4188_E592649F61C1",
                       "partial": false,
                       "pitch": 0,
                       "thumbnailUrl": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_t.jpg",
                       "id": "panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                       "hfovMin": 60,
                       "label": "C08",
                       "class": "Panorama",
                       "hfovMax": 120,
                       "hfov": 360,
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "panorama": {
                          "frames": [
                           {
                            "class": "SphericPanoramaFrame",
                            "thumbnailUrl": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_t.jpg",
                            "overlays": [
                             {
                              "class": "HotspotPanoramaOverlay",
                              "id": "overlay_3B1920B6_0793_1DBA_4192_C46B5E5F935C",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 14.79,
                                "yaw": 2.53,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 87,
                                   "width": 102,
                                   "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_0_0_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": 0.84
                               }
                              ],
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82, this.camera_1FA08F71_0BD1_8F39_41A3_7272047303AF); this.mainPlayList.set('selectedIndex', 8)"
                               }
                              ],
                              "items": [
                               {
                                "yaw": 2.53,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 14.79,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 175,
                                   "width": 205,
                                   "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_0_0.png"
                                  }
                                 ]
                                },
                                "pitch": 0.84
                               }
                              ]
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "id": "overlay_45381DDF_0793_27EA_418B_A8C1322CFBB9",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 7.35,
                                "yaw": 2.81,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 16,
                                   "width": 30,
                                   "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_1_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -5.39
                               }
                              ],
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "items": [
                               {
                                "yaw": 2.81,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 7.35,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 54,
                                   "width": 102,
                                   "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_1_0.png"
                                  }
                                 ]
                                },
                                "pitch": -5.39
                               }
                              ]
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "id": "overlay_442E80D6_0790_FDFA_4199_6BEACB7B4BE4",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 11.11,
                                "yaw": 25.67,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 85,
                                   "width": 77,
                                   "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_2_0_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -1.26
                               }
                              ],
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_1FB69F49_0BD1_8F69_4193_D550CD74924A); this.mainPlayList.set('selectedIndex', 9)"
                               }
                              ],
                              "items": [
                               {
                                "yaw": 25.67,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 11.11,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 170,
                                   "width": 154,
                                   "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_2_0.png"
                                  }
                                 ]
                                },
                                "pitch": -1.26
                               }
                              ]
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "id": "overlay_469A773A_0791_24AA_4191_D2BE6DDF9602",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 6.78,
                                "yaw": 25.2,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 16,
                                   "width": 24,
                                   "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_3_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -7.06
                               }
                              ],
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "items": [
                               {
                                "yaw": 25.2,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 6.78,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 62,
                                   "width": 94,
                                   "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_3_0.png"
                                  }
                                 ]
                                },
                                "pitch": -7.06
                               }
                              ]
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "id": "overlay_4585C0BA_0797_1DAA_4199_443A4ACDED94",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 11.57,
                                "yaw": 152.96,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 110,
                                   "width": 80,
                                   "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_4_0_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -3.67
                               }
                              ],
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_184C8F21_0BD1_90D6_4198_9252D928BFB8); this.mainPlayList.set('selectedIndex', 17)"
                               }
                              ],
                              "items": [
                               {
                                "yaw": 152.96,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 11.57,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 221,
                                   "width": 160,
                                   "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_4_0.png"
                                  }
                                 ]
                                },
                                "pitch": -3.67
                               }
                              ]
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "id": "overlay_41D6FB68_0797_6CD6_417A_18E907D050C5",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 7.37,
                                "yaw": 153.29,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 16,
                                   "width": 28,
                                   "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_5_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -10.96
                               }
                              ],
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "items": [
                               {
                                "yaw": 153.29,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 7.37,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 58,
                                   "width": 104,
                                   "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_5_0.png"
                                  }
                                 ]
                                },
                                "pitch": -10.96
                               }
                              ]
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "id": "overlay_410F0DA3_0793_645A_4196_3EEE05D8D8D4",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 14.42,
                                "yaw": -16.75,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 98,
                                   "width": 100,
                                   "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_6_0_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": 1.78
                               }
                              ],
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_186D1EEE_0BD1_912B_4194_3AAD26DB8714); this.mainPlayList.set('selectedIndex', 7)"
                               }
                              ],
                              "items": [
                               {
                                "yaw": -16.75,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 14.42,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 197,
                                   "width": 200,
                                   "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_6_0.png"
                                  }
                                 ]
                                },
                                "pitch": 1.78
                               }
                              ]
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "id": "overlay_4276C9EC_0791_2FAE_4179_BF32F6E2E991",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 7.49,
                                "yaw": -16.47,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 16,
                                   "width": 24,
                                   "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_7_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -5.39
                               }
                              ],
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "items": [
                               {
                                "yaw": -16.47,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 7.49,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 69,
                                   "width": 104,
                                   "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_7_0.png"
                                  }
                                 ]
                                },
                                "pitch": -5.39
                               }
                              ]
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "id": "overlay_44114CF6_0790_E5BA_4194_D0E5B766DD33",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 7.26,
                                "yaw": -55.84,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 76,
                                   "width": 50,
                                   "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_8_0_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -0.21
                               }
                              ],
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_1FAA5F5D_0BD1_8F69_4195_31371A624923); this.mainPlayList.set('selectedIndex', 6)"
                               }
                              ],
                              "items": [
                               {
                                "yaw": -55.84,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 7.26,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 153,
                                   "width": 100,
                                   "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_8_0.png"
                                  }
                                 ]
                                },
                                "pitch": -0.21
                               }
                              ]
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "id": "overlay_4238B560_079F_24D6_419C_7D3BB8306A1E",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 9.26,
                                "yaw": -55.09,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 16,
                                   "width": 32,
                                   "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_9_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -5.83
                               }
                              ],
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "items": [
                               {
                                "yaw": -55.09,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 9.26,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 63,
                                   "width": 129,
                                   "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_9_0.png"
                                  }
                                 ]
                                },
                                "pitch": -5.83
                               }
                              ]
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "id": "overlay_46F083CA_079F_23EA_418E_ACDC664F1975",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 8.92,
                                "yaw": -107.62,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 80,
                                   "width": 61,
                                   "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_10_0_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -2.51
                               }
                              ],
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_1862EEF8_0BD1_9137_41A6_2118CC85D110); this.mainPlayList.set('selectedIndex', 15)"
                               }
                              ],
                              "items": [
                               {
                                "yaw": -107.62,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 8.92,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 161,
                                   "width": 123,
                                   "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_10_0.png"
                                  }
                                 ]
                                },
                                "pitch": -2.51
                               }
                              ]
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "id": "overlay_43AEE268_0791_1CD6_4190_956303B44CDE",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 9.3,
                                "yaw": -107.29,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 16,
                                   "width": 28,
                                   "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_11_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -8.27
                               }
                              ],
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "items": [
                               {
                                "yaw": -107.29,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 9.3,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 73,
                                   "width": 130,
                                   "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_11_0.png"
                                  }
                                 ]
                                },
                                "pitch": -8.27
                               }
                              ]
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "id": "overlay_44A3D555_0791_64FE_4198_4A9374AD4A83",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 7.89,
                                "yaw": -146.68,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 79,
                                   "width": 55,
                                   "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_12_0_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -5.07
                               }
                              ],
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_1858DF0A_0BD1_90EB_4194_3D1AFC7889FE); this.mainPlayList.set('selectedIndex', 22)"
                               }
                              ],
                              "items": [
                               {
                                "yaw": -146.68,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 7.89,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 158,
                                   "width": 110,
                                   "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_12_0.png"
                                  }
                                 ]
                                },
                                "pitch": -5.07
                               }
                              ]
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "id": "overlay_42873502_0793_645A_419B_08499A73BBB4",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 8.87,
                                "yaw": -146.65,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 16,
                                   "width": 26,
                                   "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_13_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -10.64
                               }
                              ],
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "items": [
                               {
                                "yaw": -146.65,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 8.87,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 75,
                                   "width": 125,
                                   "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_13_0.png"
                                  }
                                 ]
                                },
                                "pitch": -10.64
                               }
                              ]
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "id": "overlay_39A1D981_0791_6C56_4167_5B8F31E9A8D4",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 7.87,
                                "yaw": 174.53,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 86,
                                   "width": 54,
                                   "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_14_0_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -0.39
                               }
                              ],
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_18429F35_0BD1_8F3E_41A5_78B2FF0F6711); this.mainPlayList.set('selectedIndex', 18)"
                               }
                              ],
                              "items": [
                               {
                                "yaw": 174.53,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 7.87,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 173,
                                   "width": 109,
                                   "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_14_0.png"
                                  }
                                 ]
                                },
                                "pitch": -0.39
                               }
                              ]
                             },
                             {
                              "class": "HotspotPanoramaOverlay",
                              "id": "overlay_44100C1A_0791_E46A_419B_68D0401A44F0",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 6.83,
                                "yaw": 174.39,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 16,
                                   "width": 26,
                                   "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_15_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -5.68
                               }
                              ],
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "items": [
                               {
                                "yaw": 174.39,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 6.83,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 57,
                                   "width": 95,
                                   "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_15_0.png"
                                  }
                                 ]
                                },
                                "pitch": -5.68
                               }
                              ]
                             }
                            ],
                            "sphere": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "class": "ImageResourceLevel",
                               "height": 2500,
                               "width": 5000,
                               "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_hq.jpeg"
                              },
                              {
                               "class": "ImageResourceLevel",
                               "height": 1608,
                               "width": 3217,
                               "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2.jpeg"
                              }
                             ]
                            }
                           }
                          ],
                          "cardboardMenu": "this.Menu_18B37D98_0BD1_93F6_4188_E592649F61C1",
                          "partial": false,
                          "pitch": 0,
                          "thumbnailUrl": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_t.jpg",
                          "id": "panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                          "hfovMin": 60,
                          "label": "C17",
                          "class": "Panorama",
                          "hfovMax": 120,
                          "hfov": 360,
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                            "yaw": -16.75,
                            "backwardYaw": -22.68,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": {
                             "frames": [
                              {
                               "class": "SphericPanoramaFrame",
                               "thumbnailUrl": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_t.jpg",
                               "overlays": [
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "id": "overlay_30BC7838_07B1_2CB6_4188_1F368EE0331C",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 11.08,
                                   "yaw": -174.64,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 104,
                                      "width": 76,
                                      "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_0_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -1.2
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.mainPlayList.set('selectedIndex', 22)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "yaw": -174.64,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 11.08,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 208,
                                      "width": 153,
                                      "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_0_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -1.2
                                  }
                                 ]
                                },
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "id": "overlay_3619F023_078F_1C5A_419A_DDBC83BEE9D1",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 8.18,
                                   "yaw": -174.7,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 16,
                                      "width": 22,
                                      "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_1_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -8.9
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "yaw": -174.7,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 8.18,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 80,
                                      "width": 114,
                                      "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_1_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -8.9
                                  }
                                 ]
                                },
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "id": "overlay_363321E9_0790_FFD6_419B_CF80D5A53966",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 6.46,
                                   "yaw": -18.92,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 64,
                                      "width": 44,
                                      "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_2_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -1.79
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_19D4C1DB_0BD1_B36A_419A_23FC73A265F0); this.mainPlayList.set('selectedIndex', 6)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "yaw": -18.92,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 6.46,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 129,
                                      "width": 89,
                                      "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_2_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -1.79
                                  }
                                 ]
                                },
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "id": "overlay_33FE544D_0791_24EE_4186_5CC6F6EE735D",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 8.46,
                                   "yaw": -18.8,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 16,
                                      "width": 26,
                                      "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_3_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -6.24
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "yaw": -18.8,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 8.46,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 72,
                                      "width": 118,
                                      "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_3_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -6.24
                                  }
                                 ]
                                },
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "id": "overlay_3E711B46_0790_ECDA_4187_B01EE563934E",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 5.96,
                                   "yaw": 11.76,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 52,
                                      "width": 41,
                                      "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_4_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -0.08
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_1E31914E_0BD1_B36A_4198_BA011107F267); this.mainPlayList.set('selectedIndex', 7)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "yaw": 11.76,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 5.96,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 105,
                                      "width": 82,
                                      "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_4_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -0.08
                                  }
                                 ]
                                },
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "id": "overlay_31C9D706_0793_245A_4166_1CA387F63591",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 7.7,
                                   "yaw": 11.97,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 16,
                                      "width": 26,
                                      "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_5_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -4.28
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "yaw": 11.97,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 7.7,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 65,
                                      "width": 107,
                                      "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_5_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -4.28
                                  }
                                 ]
                                },
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "id": "overlay_36B555D6_0793_67FA_4178_6B0BA1AD50F2",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 4.4,
                                   "yaw": 26.56,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 41,
                                      "width": 30,
                                      "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_6_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -1.38
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.mainPlayList.set('selectedIndex', 8)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "yaw": 26.56,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 4.4,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 83,
                                      "width": 61,
                                      "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_6_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -1.38
                                  }
                                 ]
                                },
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "id": "overlay_35E51298_0791_7C76_4198_40BC383ED8CF",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 6.84,
                                   "yaw": 26.86,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 16,
                                      "width": 28,
                                      "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_7_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -5.2
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "yaw": 26.86,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 6.84,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 54,
                                      "width": 95,
                                      "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_7_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -5.2
                                  }
                                 ]
                                },
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "id": "overlay_3015CF23_0791_245A_4192_56944CCEC538",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 8.85,
                                   "yaw": 59.08,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 71,
                                      "width": 61,
                                      "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_8_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -0.44
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_1E15416C_0BD1_B32E_41A4_841E6C441EA6); this.mainPlayList.set('selectedIndex', 9)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "yaw": 59.08,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 8.85,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 143,
                                      "width": 122,
                                      "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_8_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -0.44
                                  }
                                 ]
                                },
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "id": "overlay_3F6B9A60_079F_ECD6_4197_948570BFCE54",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 8.79,
                                   "yaw": 58.85,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 16,
                                      "width": 27,
                                      "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_9_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -6.48
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "yaw": 58.85,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 8.79,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 71,
                                      "width": 122,
                                      "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_9_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -6.48
                                  }
                                 ]
                                },
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "id": "overlay_35E18CCC_0790_E5EE_4197_CADFEF31780A",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 8.52,
                                   "yaw": 113.51,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 67,
                                      "width": 59,
                                      "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_10_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -1.39
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_1E226162_0BD1_B35A_4171_A1457A7F380E); this.mainPlayList.set('selectedIndex', 16)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "yaw": 113.51,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 8.52,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 134,
                                      "width": 118,
                                      "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_10_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -1.39
                                  }
                                 ]
                                },
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "id": "overlay_35DB4DB5_0791_27BE_4183_7C63065DE16E",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 6.94,
                                   "yaw": 114.19,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 16,
                                      "width": 29,
                                      "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_11_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -6.29
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "yaw": 114.19,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 6.94,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 52,
                                      "width": 97,
                                      "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_11_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -6.29
                                  }
                                 ]
                                },
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "id": "overlay_3431079C_0791_646E_416B_E85EA27EFB4D",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 8.4,
                                   "yaw": 140.71,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 68,
                                      "width": 58,
                                      "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_12_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -0.39
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_1E060176_0BD1_B33A_41A4_42A2A9268F04); this.mainPlayList.set('selectedIndex', 17)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "yaw": 140.71,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 8.4,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 137,
                                      "width": 116,
                                      "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_12_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -0.39
                                  }
                                 ]
                                },
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "id": "overlay_347C62F9_0793_1DB6_419B_1F3665A646DA",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 6.6,
                                   "yaw": 141.31,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 16,
                                      "width": 26,
                                      "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_13_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -5.64
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "yaw": 141.31,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 6.6,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 56,
                                      "width": 92,
                                      "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_13_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -5.64
                                  }
                                 ]
                                },
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "id": "overlay_34AF6FA5_0790_E45E_418E_0B039F637C1F",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 6.96,
                                   "yaw": 168.59,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 57,
                                      "width": 48,
                                      "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_14_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": 0
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_19D9D1D1_0BD1_B376_4186_D862EE2316F6); this.mainPlayList.set('selectedIndex', 18)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "yaw": 168.59,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 6.96,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 114,
                                      "width": 96,
                                      "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_14_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": 0
                                  }
                                 ]
                                },
                                {
                                 "class": "HotspotPanoramaOverlay",
                                 "id": "overlay_30B9CD54_0797_24FE_416B_E44F95B2DACF",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 5.93,
                                   "yaw": 169.02,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 16,
                                      "width": 25,
                                      "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_15_0_map.gif"
                                     }
                                    ]
                                   },
                                   "pitch": -4.04
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "yaw": 169.02,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 5.93,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "height": 52,
                                      "width": 82,
                                      "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_15_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -4.04
                                  }
                                 ]
                                }
                               ],
                               "sphere": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "class": "ImageResourceLevel",
                                  "height": 2500,
                                  "width": 5000,
                                  "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_hq.jpeg"
                                 },
                                 {
                                  "class": "ImageResourceLevel",
                                  "height": 1608,
                                  "width": 3217,
                                  "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397.jpeg"
                                 }
                                ]
                               }
                              }
                             ],
                             "cardboardMenu": "this.Menu_18B37D98_0BD1_93F6_4188_E592649F61C1",
                             "partial": false,
                             "pitch": 0,
                             "thumbnailUrl": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_t.jpg",
                             "id": "panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                             "hfovMin": 60,
                             "label": "C16",
                             "class": "Panorama",
                             "hfovMax": 120,
                             "hfov": 360,
                             "adjacentPanoramas": [
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                               "yaw": 11.76,
                               "backwardYaw": 12.62,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                               "yaw": 113.51,
                               "backwardYaw": -107.62,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": {
                                "frames": [
                                 {
                                  "class": "SphericPanoramaFrame",
                                  "thumbnailUrl": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_t.jpg",
                                  "overlays": [
                                   {
                                    "class": "HotspotPanoramaOverlay",
                                    "id": "overlay_1DD571FD_0697_7FAE_4181_ACF228D0DFF0",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 11.51,
                                      "yaw": -0.88,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 88,
                                         "width": 80,
                                         "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_0_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": -5.02
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2, this.camera_183C0E7D_0BD1_9129_41A2_A1F8ED4FFD9A); this.mainPlayList.set('selectedIndex', 10)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "yaw": -0.88,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 11.51,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 176,
                                         "width": 160,
                                         "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_0_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -5.02
                                     }
                                    ]
                                   },
                                   {
                                    "class": "HotspotPanoramaOverlay",
                                    "id": "overlay_1AA3E219_0690_FC76_4175_20A3657C4FB3",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 11.22,
                                      "yaw": -0.63,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 16,
                                         "width": 23,
                                         "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_1_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": -13.75
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "yaw": -0.63,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 11.22,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 111,
                                         "width": 160,
                                         "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_1_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -13.75
                                     }
                                    ]
                                   },
                                   {
                                    "class": "HotspotPanoramaOverlay",
                                    "id": "overlay_1D2D051B_0691_246A_4189_C6535106E464",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 11.01,
                                      "yaw": -98.62,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 67,
                                         "width": 76,
                                         "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_2_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": 0.5
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82, this.camera_18295E93_0BD1_91F9_417C_7580CF0EC92C); this.mainPlayList.set('selectedIndex', 8)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "yaw": -98.62,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 11.01,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 134,
                                         "width": 152,
                                         "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_2_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": 0.5
                                     }
                                    ]
                                   },
                                   {
                                    "class": "HotspotPanoramaOverlay",
                                    "id": "overlay_1C690E50_0691_24F6_4184_01C5EAD7BDD5",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 7.5,
                                      "yaw": -98.4,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 16,
                                         "width": 24,
                                         "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_3_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": -5.05
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "yaw": -98.4,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 7.5,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 69,
                                         "width": 104,
                                         "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_3_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -5.05
                                     }
                                    ]
                                   },
                                   {
                                    "class": "HotspotPanoramaOverlay",
                                    "id": "overlay_18A73425_0693_245E_418A_37979A1889C3",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 14.11,
                                      "yaw": -143.14,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 85,
                                         "width": 98,
                                         "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_4_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": -4.05
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_18DF9E42_0BD1_915B_415D_DD33CA878B50); this.mainPlayList.set('selectedIndex', 7)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "yaw": -143.14,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 14.11,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 170,
                                         "width": 196,
                                         "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_4_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -4.05
                                     }
                                    ]
                                   },
                                   {
                                    "class": "HotspotPanoramaOverlay",
                                    "id": "overlay_19A3F664_0691_64DE_4190_3B68066071FF",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 8.33,
                                      "yaw": -143.14,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 16,
                                         "width": 25,
                                         "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_5_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": -10.7
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "yaw": -143.14,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 8.33,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 73,
                                         "width": 117,
                                         "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_5_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -10.7
                                     }
                                    ]
                                   },
                                   {
                                    "class": "HotspotPanoramaOverlay",
                                    "id": "overlay_1C2C9020_0691_1C55_4184_1AF07E41E0E0",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 11.36,
                                      "yaw": -175.54,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 66,
                                         "width": 78,
                                         "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_6_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": 0.3
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.mainPlayList.set('selectedIndex', 5)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "yaw": -175.54,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 11.36,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 133,
                                         "width": 157,
                                         "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_6_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": 0.3
                                     }
                                    ]
                                   },
                                   {
                                    "class": "HotspotPanoramaOverlay",
                                    "id": "overlay_1B2224D4_069F_65FE_4193_6A229FF6AF52",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 6.21,
                                      "yaw": -175.23,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 16,
                                         "width": 26,
                                         "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_7_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": -4.6
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "yaw": -175.23,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 6.21,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 51,
                                         "width": 86,
                                         "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_7_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -4.6
                                     }
                                    ]
                                   },
                                   {
                                    "class": "HotspotPanoramaOverlay",
                                    "id": "overlay_1BE145D8_0691_27F6_4190_205F4E3ADD47",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 9.34,
                                      "yaw": 81.58,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 78,
                                         "width": 64,
                                         "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_8_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": -0.33
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_18D6BE4C_0BD1_916F_4194_A58C9A586C36); this.mainPlayList.set('selectedIndex', 16)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "yaw": 81.58,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 9.34,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 156,
                                         "width": 129,
                                         "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_8_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -0.33
                                     }
                                    ]
                                   },
                                   {
                                    "class": "HotspotPanoramaOverlay",
                                    "id": "overlay_1B759D4A_0691_24EA_4156_A2B44DC73C69",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 8.38,
                                      "yaw": 81.59,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 16,
                                         "width": 21,
                                         "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_9_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": -7.4
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "yaw": 81.59,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 8.38,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 88,
                                         "width": 117,
                                         "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_9_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -7.4
                                     }
                                    ]
                                   },
                                   {
                                    "class": "HotspotPanoramaOverlay",
                                    "id": "overlay_1D6A549A_0691_246A_418D_D65D9C424427",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 8.46,
                                      "yaw": 134.41,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 80,
                                         "width": 58,
                                         "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_10_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": 0.74
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_18CE7E5F_0BD1_916A_419F_2848342EF7F9); this.mainPlayList.set('selectedIndex', 15)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "yaw": 134.41,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 8.46,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 160,
                                         "width": 117,
                                         "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_10_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": 0.74
                                     }
                                    ]
                                   },
                                   {
                                    "class": "HotspotPanoramaOverlay",
                                    "id": "overlay_1A1B934E_0693_1CEA_4141_5D146278C1B0",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 8.76,
                                      "yaw": 134.8,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 16,
                                         "width": 25,
                                         "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_11_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": -5.74
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "yaw": 134.8,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 8.76,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 76,
                                         "width": 122,
                                         "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_11_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -5.74
                                     }
                                    ]
                                   },
                                   {
                                    "class": "HotspotPanoramaOverlay",
                                    "id": "overlay_2653DB6D_0693_2CAE_4125_0137B1B6A064",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 6.26,
                                      "yaw": 112.76,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 61,
                                         "width": 43,
                                         "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_12_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": 0.01
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_18C5EE6B_0BD1_912A_4197_9F49B9164EF8); this.mainPlayList.set('selectedIndex', 17)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "yaw": 112.76,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 6.26,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 122,
                                         "width": 86,
                                         "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_12_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": 0.01
                                     }
                                    ]
                                   },
                                   {
                                    "class": "HotspotPanoramaOverlay",
                                    "id": "overlay_1ABE7F5E_0691_24EA_4192_B3DF921024E3",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 7.24,
                                      "yaw": 112.63,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 16,
                                         "width": 24,
                                         "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_13_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": -5.26
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "yaw": 112.63,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 7.24,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 67,
                                         "width": 101,
                                         "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_13_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -5.26
                                     }
                                    ]
                                   },
                                   {
                                    "class": "HotspotPanoramaOverlay",
                                    "id": "overlay_1B4E345F_0697_24EA_4196_62B67CEB01DE",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 8.91,
                                      "yaw": 89.94,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 50,
                                         "width": 61,
                                         "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_14_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": -0.1
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.mainPlayList.set('selectedIndex', 18)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "yaw": 89.94,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 8.91,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 100,
                                         "width": 123,
                                         "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_14_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -0.1
                                     }
                                    ]
                                   },
                                   {
                                    "class": "HotspotPanoramaOverlay",
                                    "id": "overlay_18669A33_0691_6CBA_4186_E1486D225611",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 5.83,
                                      "yaw": 90.09,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 16,
                                         "width": 23,
                                         "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_15_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": -4.23
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "yaw": 90.09,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 5.83,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 55,
                                         "width": 81,
                                         "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_15_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -4.23
                                     }
                                    ]
                                   },
                                   {
                                    "class": "HotspotPanoramaOverlay",
                                    "id": "overlay_1848DECF_0691_25EA_419B_19155919B309",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 6.64,
                                      "yaw": 171.29,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 61,
                                         "width": 46,
                                         "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_16_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": -0.74
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_1833AE89_0BD1_91E9_418D_7E2DE55D4027); this.mainPlayList.set('selectedIndex', 6)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "yaw": 171.29,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 6.64,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 122,
                                         "width": 92,
                                         "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_16_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -0.74
                                     }
                                    ]
                                   },
                                   {
                                    "class": "HotspotPanoramaOverlay",
                                    "id": "overlay_19097AFB_0693_6DAA_418F_751FBC951B23",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 5.82,
                                      "yaw": 171.31,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 16,
                                         "width": 24,
                                         "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_17_0_map.gif"
                                        }
                                       ]
                                      },
                                      "pitch": -5.61
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "yaw": 171.31,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 5.82,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "height": 54,
                                         "width": 81,
                                         "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_17_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -5.61
                                     }
                                    ]
                                   }
                                  ],
                                  "sphere": {
                                   "class": "ImageResource",
                                   "levels": [
                                    {
                                     "class": "ImageResourceLevel",
                                     "height": 2500,
                                     "width": 5000,
                                     "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_hq.jpeg"
                                    },
                                    {
                                     "class": "ImageResourceLevel",
                                     "height": 1608,
                                     "width": 3217,
                                     "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53.jpeg"
                                    }
                                   ]
                                  }
                                 }
                                ],
                                "cardboardMenu": "this.Menu_18B37D98_0BD1_93F6_4188_E592649F61C1",
                                "partial": false,
                                "pitch": 0,
                                "thumbnailUrl": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_t.jpg",
                                "id": "panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                                "hfovMin": 60,
                                "label": "C10",
                                "class": "Panorama",
                                "hfovMax": 120,
                                "hfov": 360,
                                "adjacentPanoramas": [
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                                  "yaw": -143.14,
                                  "backwardYaw": -42.13,
                                  "distance": 1
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                                  "yaw": 81.58,
                                  "backwardYaw": 25.67,
                                  "distance": 1
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                                  "yaw": 134.41,
                                  "backwardYaw": 59.08,
                                  "distance": 1
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": {
                                   "frames": [
                                    {
                                     "class": "SphericPanoramaFrame",
                                     "thumbnailUrl": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_t.jpg",
                                     "overlays": [
                                      {
                                       "class": "HotspotPanoramaOverlay",
                                       "id": "overlay_3D896377_07F1_3CBA_4196_6B85D37E8066",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 8.33,
                                         "yaw": -171.11,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "height": 62,
                                            "width": 57,
                                            "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_0_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "pitch": 0.49
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82, this.camera_1EBEB0CA_0BD1_B16B_4183_7BAB3D02539A); this.mainPlayList.set('selectedIndex', 8)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "yaw": -171.11,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 8.33,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "height": 125,
                                            "width": 115,
                                            "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_0_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": 0.49
                                        }
                                       ]
                                      },
                                      {
                                       "class": "HotspotPanoramaOverlay",
                                       "id": "overlay_3DDB42AD_07F1_7DAE_417C_3217DBA16CA0",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 5.8,
                                         "yaw": -171.22,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "height": 16,
                                            "width": 25,
                                            "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_1_0_map.gif"
                                           }
                                          ]
                                         },
                                         "pitch": -3.9
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "yaw": -171.22,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 5.8,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "height": 50,
                                            "width": 80,
                                            "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_1_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -3.9
                                        }
                                       ]
                                      },
                                      {
                                       "class": "HotspotPanoramaOverlay",
                                       "id": "overlay_30B29713_07FF_647A_4195_98CB1B9AE925",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 7.37,
                                         "yaw": -156.98,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "height": 77,
                                            "width": 51,
                                            "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_2_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "pitch": 0.2
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_1F031083_0BD1_B1D9_4195_62ABD1A8DDA2); this.mainPlayList.set('selectedIndex', 9)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "yaw": -156.98,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 7.37,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "height": 154,
                                            "width": 102,
                                            "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_2_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": 0.2
                                        }
                                       ]
                                      },
                                      {
                                       "class": "HotspotPanoramaOverlay",
                                       "id": "overlay_471BF631_07F1_64B6_4179_076F9D5C7C81",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 6.39,
                                         "yaw": -157.08,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "height": 16,
                                            "width": 29,
                                            "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_3_0_map.gif"
                                           }
                                          ]
                                         },
                                         "pitch": -4.48
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "yaw": -157.08,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 6.39,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "height": 48,
                                            "width": 89,
                                            "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_3_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -4.48
                                        }
                                       ]
                                      },
                                      {
                                       "class": "HotspotPanoramaOverlay",
                                       "id": "overlay_3A437876_07F3_2CBA_4181_B5A3247326F7",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 11.58,
                                         "yaw": -143.45,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "height": 97,
                                            "width": 80,
                                            "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_4_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "pitch": 0.45
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_1F12B079_0BD1_B129_41A4_7A3AF285A6AB); this.mainPlayList.set('selectedIndex', 16)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "yaw": -143.45,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 11.58,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "height": 195,
                                            "width": 160,
                                            "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_4_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": 0.45
                                        }
                                       ]
                                      },
                                      {
                                       "class": "HotspotPanoramaOverlay",
                                       "id": "overlay_3F187E51_07F3_24F6_4184_039DFE14256A",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 7.99,
                                         "yaw": -143.5,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "height": 16,
                                            "width": 25,
                                            "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_5_0_map.gif"
                                           }
                                          ]
                                         },
                                         "pitch": -6.13
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "yaw": -143.5,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 7.99,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "height": 69,
                                            "width": 111,
                                            "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_5_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -6.13
                                        }
                                       ]
                                      },
                                      {
                                       "class": "HotspotPanoramaOverlay",
                                       "id": "overlay_3D40439D_07F1_1C6E_417C_39C62324FAAA",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 10.6,
                                         "yaw": 7.69,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "height": 76,
                                            "width": 73,
                                            "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_6_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "pitch": 0.41
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_1F5A50AC_0BD1_B12E_4186_C99ACE6AB305); this.mainPlayList.set('selectedIndex', 18)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "yaw": 7.69,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 10.6,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "height": 152,
                                            "width": 147,
                                            "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_6_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": 0.41
                                        }
                                       ]
                                      },
                                      {
                                       "class": "HotspotPanoramaOverlay",
                                       "id": "overlay_3B75B8EC_07F7_6DAE_4194_C7A60FEE48CD",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 7.72,
                                         "yaw": 7.47,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "height": 16,
                                            "width": 26,
                                            "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_7_0_map.gif"
                                           }
                                          ]
                                         },
                                         "pitch": -4.9
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "yaw": 7.47,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 7.72,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "height": 65,
                                            "width": 107,
                                            "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_7_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -4.9
                                        }
                                       ]
                                      },
                                      {
                                       "class": "HotspotPanoramaOverlay",
                                       "id": "overlay_3F97BC8D_07F0_E46E_4193_CFB84B9D9D04",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 11.12,
                                         "yaw": 139.53,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "height": 56,
                                            "width": 77,
                                            "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_8_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "pitch": 0.07
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_1F4CC0BE_0BD1_B12B_419B_00379EDFD866); this.mainPlayList.set('selectedIndex', 6)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "yaw": 139.53,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 11.12,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "height": 113,
                                            "width": 154,
                                            "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_8_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": 0.07
                                        }
                                       ]
                                      },
                                      {
                                       "class": "HotspotPanoramaOverlay",
                                       "id": "overlay_3FD40B45_07F1_2CDE_4191_E116460D8792",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 6.85,
                                         "yaw": 139.29,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "height": 16,
                                            "width": 26,
                                            "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_9_0_map.gif"
                                           }
                                          ]
                                         },
                                         "pitch": -4.35
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "yaw": 139.29,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 6.85,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "height": 57,
                                            "width": 95,
                                            "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_9_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -4.35
                                        }
                                       ]
                                      },
                                      {
                                       "class": "HotspotPanoramaOverlay",
                                       "id": "overlay_3BBEDA8D_07F1_2C6E_4176_E7A74D97365E",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 10.33,
                                         "yaw": 122.75,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "height": 79,
                                            "width": 71,
                                            "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_10_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "pitch": -2.21
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_1F76B095_0BD1_B1F9_41A6_29048747EB86); this.mainPlayList.set('selectedIndex', 15)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "yaw": 122.75,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 10.33,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "height": 158,
                                            "width": 143,
                                            "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_10_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -2.21
                                        }
                                       ]
                                      },
                                      {
                                       "class": "HotspotPanoramaOverlay",
                                       "id": "overlay_3E80029C_07F3_7C6E_4197_A7D5C07DE7E8",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 9.97,
                                         "yaw": 123.38,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "height": 16,
                                            "width": 28,
                                            "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_11_0_map.gif"
                                           }
                                          ]
                                         },
                                         "pitch": -7.86
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "yaw": 123.38,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 9.97,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "height": 79,
                                            "width": 139,
                                            "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_11_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -7.86
                                        }
                                       ]
                                      },
                                      {
                                       "class": "HotspotPanoramaOverlay",
                                       "id": "overlay_3E9CAFB2_07F1_63BA_4187_5BB18F2E2D6C",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 13.43,
                                         "yaw": 81.83,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "height": 91,
                                            "width": 93,
                                            "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_12_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "pitch": -3.02
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_1F6700A2_0BD1_B1DA_4192_66271BA41234); this.mainPlayList.set('selectedIndex', 22)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "yaw": 81.83,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 13.43,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "height": 182,
                                            "width": 186,
                                            "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_12_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -3.02
                                        }
                                       ]
                                      },
                                      {
                                       "class": "HotspotPanoramaOverlay",
                                       "id": "overlay_3C63BEBB_078F_25AA_4191_DE10C64B795B",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 8.1,
                                         "yaw": 82.04,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "height": 16,
                                            "width": 23,
                                            "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_13_0_map.gif"
                                           }
                                          ]
                                         },
                                         "pitch": -9.23
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "yaw": 82.04,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 8.1,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "height": 77,
                                            "width": 113,
                                            "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_13_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -9.23
                                        }
                                       ]
                                      },
                                      {
                                       "class": "HotspotPanoramaOverlay",
                                       "id": "overlay_3E9F1C95_0790_E47E_417B_80352FF053CC",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 8.47,
                                         "yaw": 171.48,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "height": 57,
                                            "width": 58,
                                            "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_14_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "pitch": 0.13
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_1F21E065_0BD1_B15E_41A7_6CE1F84AAC2D); this.mainPlayList.set('selectedIndex', 7)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "yaw": 171.48,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 8.47,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "height": 115,
                                            "width": 117,
                                            "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_14_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": 0.13
                                        }
                                       ]
                                      },
                                      {
                                       "class": "HotspotPanoramaOverlay",
                                       "id": "overlay_3D26B6FA_0791_25AA_4194_6DF41F112E9C",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 6.22,
                                         "yaw": 171.5,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "height": 16,
                                            "width": 26,
                                            "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_15_0_map.gif"
                                           }
                                          ]
                                         },
                                         "pitch": -4.38
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "yaw": 171.5,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 6.22,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "height": 51,
                                            "width": 86,
                                            "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_15_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -4.38
                                        }
                                       ]
                                      }
                                     ],
                                     "sphere": {
                                      "class": "ImageResource",
                                      "levels": [
                                       {
                                        "class": "ImageResourceLevel",
                                        "height": 2500,
                                        "width": 5000,
                                        "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_hq.jpeg"
                                       },
                                       {
                                        "class": "ImageResourceLevel",
                                        "height": 1608,
                                        "width": 3217,
                                        "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC.jpeg"
                                       }
                                      ]
                                     }
                                    }
                                   ],
                                   "cardboardMenu": "this.Menu_18B37D98_0BD1_93F6_4188_E592649F61C1",
                                   "partial": false,
                                   "pitch": 0,
                                   "thumbnailUrl": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_t.jpg",
                                   "id": "panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
                                   "hfovMin": 60,
                                   "label": "C18",
                                   "class": "Panorama",
                                   "hfovMax": 120,
                                   "hfov": 360,
                                   "adjacentPanoramas": [
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                                     "yaw": 171.48,
                                     "backwardYaw": -15.07,
                                     "distance": 1
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                                     "yaw": -143.45,
                                     "backwardYaw": 152.96,
                                     "distance": 1
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                                     "yaw": -156.98,
                                     "backwardYaw": 112.76,
                                     "distance": 1
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                                     "yaw": 122.75,
                                     "backwardYaw": 140.71,
                                     "distance": 1
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": {
                                      "frames": [
                                       {
                                        "class": "SphericPanoramaFrame",
                                        "thumbnailUrl": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_t.jpg",
                                        "overlays": [
                                         {
                                          "class": "HotspotPanoramaOverlay",
                                          "id": "overlay_28127D26_07B7_245A_419B_9501F89DF9B5",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 9.82,
                                            "yaw": 87.82,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 96,
                                               "width": 68,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_0_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": -4.77
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67, this.camera_192B624A_0BD1_B16B_4170_AA7516166EA3); this.mainPlayList.set('selectedIndex', 21)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "yaw": 87.82,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 9.82,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 192,
                                               "width": 136,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_0_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -4.77
                                           }
                                          ]
                                         },
                                         {
                                          "class": "HotspotPanoramaOverlay",
                                          "id": "overlay_3348BEEF_07B7_25AA_4181_4163771F00E4",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 9.41,
                                            "yaw": 88.54,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 16,
                                               "width": 30,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_1_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": -11.24
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "yaw": 88.54,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 9.41,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 70,
                                               "width": 133,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_1_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -11.24
                                           }
                                          ]
                                         },
                                         {
                                          "class": "HotspotPanoramaOverlay",
                                          "id": "overlay_323E1FCA_07B1_63EA_4193_83E40670F67D",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 12.01,
                                            "yaw": -6.68,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 74,
                                               "width": 83,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_2_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": 0.98
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_191B927B_0BD1_B12A_4197_9E1CB2A75071); this.mainPlayList.set('selectedIndex', 18)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "yaw": -6.68,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 12.01,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 149,
                                               "width": 166,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_2_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": 0.98
                                           }
                                          ]
                                         },
                                         {
                                          "class": "HotspotPanoramaOverlay",
                                          "id": "overlay_2AA8BEF2_07B1_25BA_417C_0F0A2C84C244",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 7.27,
                                            "yaw": -7.29,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 16,
                                               "width": 21,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_3_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": -4.21
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "yaw": -7.29,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 7.27,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 76,
                                               "width": 101,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_3_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -4.21
                                           }
                                          ]
                                         },
                                         {
                                          "class": "HotspotPanoramaOverlay",
                                          "id": "overlay_2AAB5210_07B3_3C76_4192_5556455ECCE9",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 11.01,
                                            "yaw": -0.15,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 74,
                                               "width": 76,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_4_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": 0.98
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.mainPlayList.set('selectedIndex', 19)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "yaw": -0.15,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 11.01,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 149,
                                               "width": 152,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_4_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": 0.98
                                           }
                                          ]
                                         },
                                         {
                                          "class": "HotspotPanoramaOverlay",
                                          "id": "overlay_3410637F_07B3_1CAA_4199_EF11CF962ED4",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 7.27,
                                            "yaw": -0.5,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 16,
                                               "width": 21,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_5_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": -4.21
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "yaw": -0.5,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 7.27,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 76,
                                               "width": 101,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_5_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -4.21
                                           }
                                          ]
                                         },
                                         {
                                          "class": "HotspotPanoramaOverlay",
                                          "id": "overlay_3248E155_07B1_3CFE_4191_2A1EF3C7948D",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 16,
                                            "yaw": -91.84,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 135,
                                               "width": 111,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_6_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": 3.36
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_1925625E_0BD1_B16B_4195_431BC05A6CCF); this.mainPlayList.set('selectedIndex', 16)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "yaw": -91.84,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 16,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 271,
                                               "width": 222,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_6_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": 3.36
                                           }
                                          ]
                                         },
                                         {
                                          "class": "HotspotPanoramaOverlay",
                                          "id": "overlay_319930C9_07BF_7DD6_4184_70BEFA17F169",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 8.25,
                                            "yaw": -92.25,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 16,
                                               "width": 23,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_7_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": -5.89
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "yaw": -92.25,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 8.25,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 80,
                                               "width": 115,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_7_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -5.89
                                           }
                                          ]
                                         },
                                         {
                                          "class": "HotspotPanoramaOverlay",
                                          "id": "overlay_29CF0F49_07BF_64D6_4194_075A672440E3",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 18.54,
                                            "yaw": -44.11,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 139,
                                               "width": 128,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_8_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": 1.35
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_1921E267_0BD1_B15A_4186_72D6EF87B92B); this.mainPlayList.set('selectedIndex', 17)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "yaw": -44.11,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 18.54,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 278,
                                               "width": 257,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_8_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": 1.35
                                           }
                                          ]
                                         },
                                         {
                                          "class": "HotspotPanoramaOverlay",
                                          "id": "overlay_3690B529_07B1_2456_4170_FB18B300B8BE",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 8.16,
                                            "yaw": -44.05,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 16,
                                               "width": 26,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_9_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": -7.95
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "yaw": -44.05,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 8.16,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 69,
                                               "width": 114,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_9_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -7.95
                                           }
                                          ]
                                         },
                                         {
                                          "class": "HotspotPanoramaOverlay",
                                          "id": "overlay_29F810AC_07B1_1DAE_4196_F3B00F4402F8",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 11.24,
                                            "yaw": -119.35,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 78,
                                               "width": 78,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_10_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": 3.24
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.mainPlayList.set('selectedIndex', 9)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "yaw": -119.35,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 11.24,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 156,
                                               "width": 156,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_10_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": 3.24
                                           }
                                          ]
                                         },
                                         {
                                          "class": "HotspotPanoramaOverlay",
                                          "id": "overlay_345241C4_07B1_1FDE_4141_F43DE640110C",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 7.27,
                                            "yaw": -120.08,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 16,
                                               "width": 22,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_11_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": -3.58
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "yaw": -120.08,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 7.27,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 73,
                                               "width": 101,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_11_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -3.58
                                           }
                                          ]
                                         },
                                         {
                                          "class": "HotspotPanoramaOverlay",
                                          "id": "overlay_2846DD14_07B3_247E_4180_11493C9F62DC",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 11.49,
                                            "yaw": -142.34,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 74,
                                               "width": 79,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_12_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": 3.49
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.mainPlayList.set('selectedIndex', 8)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "yaw": -142.34,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 11.49,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 149,
                                               "width": 159,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_12_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": 3.49
                                           }
                                          ]
                                         },
                                         {
                                          "class": "HotspotPanoramaOverlay",
                                          "id": "overlay_3243643A_07B3_64AA_416E_5E6A6CC616CF",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 6.11,
                                            "yaw": -142.38,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 16,
                                               "width": 24,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_13_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": -3.21
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "yaw": -142.38,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 6.11,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 56,
                                               "width": 84,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_13_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -3.21
                                           }
                                          ]
                                         },
                                         {
                                          "class": "HotspotPanoramaOverlay",
                                          "id": "overlay_28838F7F_07B1_24AB_4195_41028F4BB6DF",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 7.03,
                                            "yaw": -155.72,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 62,
                                               "width": 48,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_14_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": 1.78
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.mainPlayList.set('selectedIndex', 7)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "yaw": -155.72,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 7.03,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 124,
                                               "width": 97,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_14_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": 1.78
                                           }
                                          ]
                                         },
                                         {
                                          "class": "HotspotPanoramaOverlay",
                                          "id": "overlay_32D333AE_07B1_23AA_418E_BE767942BB63",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 6.21,
                                            "yaw": -155.63,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 16,
                                               "width": 22,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_15_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": -3.14
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "yaw": -155.63,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 6.21,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 61,
                                               "width": 86,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_15_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -3.14
                                           }
                                          ]
                                         },
                                         {
                                          "class": "HotspotPanoramaOverlay",
                                          "id": "overlay_28E2BF47_07B7_E4DA_4192_A2BCC94840F3",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 8.13,
                                            "yaw": -177.33,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 60,
                                               "width": 56,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_16_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": 0.78
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_19159287_0BD1_B1DA_4164_3EDEE9744114); this.mainPlayList.set('selectedIndex', 6)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "yaw": -177.33,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 8.13,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 121,
                                               "width": 112,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_16_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": 0.78
                                           }
                                          ]
                                         },
                                         {
                                          "class": "HotspotPanoramaOverlay",
                                          "id": "overlay_327900C5_07B1_1DDE_4192_5EF31F5CD0B1",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 6.85,
                                            "yaw": -177.46,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 16,
                                               "width": 23,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_17_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": -4.52
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "yaw": -177.46,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 6.85,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 66,
                                               "width": 95,
                                               "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_17_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -4.52
                                           }
                                          ]
                                         }
                                        ],
                                        "sphere": {
                                         "class": "ImageResource",
                                         "levels": [
                                          {
                                           "class": "ImageResourceLevel",
                                           "height": 2500,
                                           "width": 5000,
                                           "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_hq.jpeg"
                                          },
                                          {
                                           "class": "ImageResourceLevel",
                                           "height": 1608,
                                           "width": 3217,
                                           "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894.jpeg"
                                          }
                                         ]
                                        }
                                       }
                                      ],
                                      "cardboardMenu": "this.Menu_18B37D98_0BD1_93F6_4188_E592649F61C1",
                                      "partial": false,
                                      "pitch": 0,
                                      "thumbnailUrl": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_t.jpg",
                                      "id": "panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                                      "hfovMin": 60,
                                      "label": "C23",
                                      "class": "Panorama",
                                      "hfovMax": 120,
                                      "hfov": 360,
                                      "adjacentPanoramas": [
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": {
                                         "frames": [
                                          {
                                           "class": "SphericPanoramaFrame",
                                           "thumbnailUrl": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_t.jpg",
                                           "overlays": [
                                            {
                                             "class": "HotspotPanoramaOverlay",
                                             "id": "overlay_37A1EC15_07B0_E47E_4165_18EF7B4CF1F7",
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "hfov": 11.26,
                                               "yaw": 4.77,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 129,
                                                  "width": 78,
                                                  "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_0_HS_0_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "pitch": -4.76
                                              }
                                             ],
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_193A7222_0BD1_B0DA_41A5_6B349DD18C7E); this.mainPlayList.set('selectedIndex', 22)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "yaw": 4.77,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 11.26,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 259,
                                                  "width": 156,
                                                  "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_0_HS_0_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": -4.76
                                              }
                                             ]
                                            },
                                            {
                                             "class": "HotspotPanoramaOverlay",
                                             "id": "overlay_282E1707_07B3_E45A_4184_0F5F576BAFA8",
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "hfov": 8.33,
                                               "yaw": 4.65,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 16,
                                                  "width": 24,
                                                  "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_0_HS_1_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "pitch": -12.75
                                              }
                                             ],
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "yaw": 4.65,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 8.33,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 76,
                                                  "width": 118,
                                                  "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_0_HS_1_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": -12.75
                                              }
                                             ]
                                            },
                                            {
                                             "class": "HotspotPanoramaOverlay",
                                             "id": "overlay_37C3639F_07B3_3C6A_418A_4F59AF831D03",
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "hfov": 20.49,
                                               "yaw": -179.27,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 128,
                                                  "width": 142,
                                                  "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_0_HS_2_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "pitch": -4.42
                                              }
                                             ],
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754, this.camera_19C04218_0BD1_B0F6_41A4_A915EFB19662); this.mainPlayList.set('selectedIndex', 20)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "yaw": -179.27,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 20.49,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 257,
                                                  "width": 285,
                                                  "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_0_HS_2_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": -4.42
                                              }
                                             ]
                                            },
                                            {
                                             "class": "HotspotPanoramaOverlay",
                                             "id": "overlay_36A27374_07B1_1CBE_4183_F00116B379C1",
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "hfov": 8.48,
                                               "yaw": -179.12,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 16,
                                                  "width": 18,
                                                  "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_0_HS_3_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "pitch": -15.39
                                              }
                                             ],
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "yaw": -179.12,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 8.48,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 108,
                                                  "width": 122,
                                                  "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_0_HS_3_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": -15.39
                                              }
                                             ]
                                            }
                                           ],
                                           "sphere": {
                                            "class": "ImageResource",
                                            "levels": [
                                             {
                                              "class": "ImageResourceLevel",
                                              "height": 2500,
                                              "width": 5000,
                                              "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_hq.jpeg"
                                             },
                                             {
                                              "class": "ImageResourceLevel",
                                              "height": 1608,
                                              "width": 3217,
                                              "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67.jpeg"
                                             }
                                            ]
                                           }
                                          }
                                         ],
                                         "cardboardMenu": "this.Menu_18B37D98_0BD1_93F6_4188_E592649F61C1",
                                         "partial": false,
                                         "pitch": 0,
                                         "thumbnailUrl": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_t.jpg",
                                         "id": "panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
                                         "hfovMin": 60,
                                         "label": "C22",
                                         "class": "Panorama",
                                         "hfovMax": 120,
                                         "hfov": 360,
                                         "adjacentPanoramas": [
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": {
                                            "frames": [
                                             {
                                              "class": "SphericPanoramaFrame",
                                              "thumbnailUrl": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_t.jpg",
                                              "overlays": [
                                               {
                                                "class": "HotspotPanoramaOverlay",
                                                "id": "overlay_281B5193_07B1_1C7A_418A_7B0CC86E139C",
                                                "maps": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "hfov": 28.75,
                                                  "yaw": -178.3,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "height": 191,
                                                     "width": 200,
                                                     "url": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_0_HS_0_0_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -8.04
                                                 }
                                                ],
                                                "useHandCursor": true,
                                                "enabledInCardboard": true,
                                                "rollOverDisplay": false,
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67, this.camera_1E3E4143_0BD1_B359_41A6_01A68B53A1A7); this.mainPlayList.set('selectedIndex', 21)"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "yaw": -178.3,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "hfov": 28.75,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "height": 385,
                                                     "width": 403,
                                                     "url": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_0_HS_0_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -8.04
                                                 }
                                                ]
                                               },
                                               {
                                                "class": "HotspotPanoramaOverlay",
                                                "id": "overlay_36D89562_07B1_24DA_4181_B5F7392CD10A",
                                                "maps": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "hfov": 9.76,
                                                  "yaw": -178.49,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "height": 16,
                                                     "width": 22,
                                                     "url": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_0_HS_1_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -22.3
                                                 }
                                                ],
                                                "useHandCursor": true,
                                                "enabledInCardboard": true,
                                                "rollOverDisplay": false,
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "yaw": -178.49,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "hfov": 9.76,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "height": 104,
                                                     "width": 146,
                                                     "url": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_0_HS_1_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -22.3
                                                 }
                                                ]
                                               }
                                              ],
                                              "sphere": {
                                               "class": "ImageResource",
                                               "levels": [
                                                {
                                                 "class": "ImageResourceLevel",
                                                 "height": 2500,
                                                 "width": 5000,
                                                 "url": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_hq.jpeg"
                                                },
                                                {
                                                 "class": "ImageResourceLevel",
                                                 "height": 1608,
                                                 "width": 3217,
                                                 "url": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754.jpeg"
                                                }
                                               ]
                                              }
                                             }
                                            ],
                                            "cardboardMenu": "this.Menu_18B37D98_0BD1_93F6_4188_E592649F61C1",
                                            "partial": false,
                                            "pitch": 0,
                                            "thumbnailUrl": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_t.jpg",
                                            "id": "panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
                                            "hfovMin": 60,
                                            "label": "C21",
                                            "class": "Panorama",
                                            "hfovMax": 120,
                                            "hfov": 360,
                                            "adjacentPanoramas": [
                                             {
                                              "class": "AdjacentPanorama",
                                              "panorama": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
                                              "yaw": -178.3,
                                              "backwardYaw": -179.27,
                                              "distance": 1
                                             }
                                            ],
                                            "vfov": 180
                                           },
                                           "yaw": -179.27,
                                           "backwardYaw": -178.3,
                                           "distance": 1
                                          },
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                                           "yaw": 4.77,
                                           "backwardYaw": 87.82,
                                           "distance": 1
                                          }
                                         ],
                                         "vfov": 180
                                        },
                                        "yaw": 87.82,
                                        "backwardYaw": 4.77,
                                        "distance": 1
                                       },
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                                        "yaw": -91.84,
                                        "backwardYaw": -146.68,
                                        "distance": 1
                                       },
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
                                        "yaw": -44.11,
                                        "backwardYaw": 81.83,
                                        "distance": 1
                                       },
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": {
                                         "frames": [
                                          {
                                           "class": "SphericPanoramaFrame",
                                           "thumbnailUrl": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_t.jpg",
                                           "overlays": [
                                            {
                                             "class": "HotspotPanoramaOverlay",
                                             "id": "overlay_3E3B8D53_0793_24FA_4187_9D3A8F1D1D8B",
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "hfov": 5.09,
                                               "yaw": 5.89,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 41,
                                                  "width": 35,
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_0_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "pitch": -0.32
                                              }
                                             ],
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000",
                                               "click": "this.mainPlayList.set('selectedIndex', 8)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "yaw": 5.89,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 5.09,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 83,
                                                  "width": 70,
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_0_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": -0.32
                                              }
                                             ]
                                            },
                                            {
                                             "class": "HotspotPanoramaOverlay",
                                             "id": "overlay_3B323082_0791_1C5A_416C_891FD9C1AFF8",
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "hfov": 4.94,
                                               "yaw": 5.83,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 16,
                                                  "width": 24,
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_1_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "pitch": -3.54
                                              }
                                             ],
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "yaw": 5.83,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 4.94,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 45,
                                                  "width": 68,
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_1_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": -3.54
                                              }
                                             ]
                                            },
                                            {
                                             "class": "HotspotPanoramaOverlay",
                                             "id": "overlay_33ADB319_0791_1C76_4194_3AD41C851323",
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "hfov": 10.89,
                                               "yaw": 29.17,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 115,
                                                  "width": 76,
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_2_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "pitch": -6.91
                                              }
                                             ],
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_18ED0E24_0BD1_90DF_41A6_8785E8C41E22); this.mainPlayList.set('selectedIndex', 17)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "yaw": 29.17,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 10.89,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 230,
                                                  "width": 152,
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_2_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": -6.91
                                              }
                                             ]
                                            },
                                            {
                                             "class": "HotspotPanoramaOverlay",
                                             "id": "overlay_33D2C3E4_078F_23DE_417D_A6B689D41EEC",
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "hfov": 8.31,
                                               "yaw": 28.93,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 16,
                                                  "width": 25,
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_3_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "pitch": -13.39
                                              }
                                             ],
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "yaw": 28.93,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 8.31,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 73,
                                                  "width": 118,
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_3_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": -13.39
                                              }
                                             ]
                                            },
                                            {
                                             "class": "HotspotPanoramaOverlay",
                                             "id": "overlay_3B68623F_078F_FCAA_4115_F9A6F52B8B88",
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "hfov": 8.57,
                                               "yaw": 18.34,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 83,
                                                  "width": 59,
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_4_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "pitch": -2.39
                                              }
                                             ],
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_18827DFC_0BD1_932F_4190_1046E5A12278); this.mainPlayList.set('selectedIndex', 16)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "yaw": 18.34,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 8.57,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 166,
                                                  "width": 119,
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_4_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": -2.39
                                              }
                                             ]
                                            },
                                            {
                                             "class": "HotspotPanoramaOverlay",
                                             "id": "overlay_3FBEE0F4_078F_1DBE_417F_7F3C0E1C77B9",
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "hfov": 7.19,
                                               "yaw": 18.77,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 16,
                                                  "width": 25,
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_5_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "pitch": -8.2
                                              }
                                             ],
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "yaw": 18.77,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 7.19,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 62,
                                                  "width": 100,
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_5_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": -8.2
                                              }
                                             ]
                                            },
                                            {
                                             "class": "HotspotPanoramaOverlay",
                                             "id": "overlay_320E5953_07F1_2CFB_4198_E69AA92B2C0B",
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "hfov": 18.67,
                                               "yaw": -53.28,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 147,
                                                  "width": 130,
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_6_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "pitch": -6.56
                                              }
                                             ],
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_18F5DE1B_0BD1_90E9_419A_D23B2084B21C); this.mainPlayList.set('selectedIndex', 22)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "yaw": -53.28,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 18.67,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 295,
                                                  "width": 261,
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_6_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": -6.56
                                              }
                                             ]
                                            },
                                            {
                                             "class": "HotspotPanoramaOverlay",
                                             "id": "overlay_32A61C12_07F3_647A_4188_FF9DAE655EAC",
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "hfov": 7.97,
                                               "yaw": -54.01,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 16,
                                                  "width": 24,
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_7_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "pitch": -16.02
                                              }
                                             ],
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "yaw": -54.01,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 7.97,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 76,
                                                  "width": 115,
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_7_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": -16.02
                                              }
                                             ]
                                            },
                                            {
                                             "class": "HotspotPanoramaOverlay",
                                             "id": "overlay_3EC875E4_07F3_67DE_419C_0D8FCC133A45",
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "hfov": 13.52,
                                               "yaw": -34.31,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 83,
                                                  "width": 93,
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_8_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "pitch": -0.66
                                              }
                                             ],
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_18FBBE0C_0BD1_90EE_41A0_26A8A9E90F4D); this.mainPlayList.set('selectedIndex', 15)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "yaw": -34.31,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 13.52,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 166,
                                                  "width": 187,
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_8_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": -0.66
                                              }
                                             ]
                                            },
                                            {
                                             "class": "HotspotPanoramaOverlay",
                                             "id": "overlay_31996F4E_07F1_24EA_419A_EEA7DD65B1C6",
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "hfov": 7.25,
                                               "yaw": -33.66,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 16,
                                                  "width": 24,
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_9_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "pitch": -5.59
                                              }
                                             ],
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "yaw": -33.66,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 7.25,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 66,
                                                  "width": 101,
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_9_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": -5.59
                                              }
                                             ]
                                            },
                                            {
                                             "class": "HotspotPanoramaOverlay",
                                             "id": "overlay_3DF559C6_07F7_2FDA_4174_D608913B20E5",
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "hfov": 4.82,
                                               "yaw": -22.73,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 51,
                                                  "width": 33,
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_10_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "pitch": 0.95
                                              }
                                             ],
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_18E68E36_0BD1_913B_41A5_A7F3E79A0A03); this.mainPlayList.set('selectedIndex', 6)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "yaw": -22.73,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 4.82,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 103,
                                                  "width": 66,
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_10_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": 0.95
                                              }
                                             ]
                                            },
                                            {
                                             "class": "HotspotPanoramaOverlay",
                                             "id": "overlay_3D38EF6C_07F7_E4AE_4195_5AB8257757E6",
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "hfov": 5.74,
                                               "yaw": -22.49,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 16,
                                                  "width": 23,
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_11_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "pitch": -2.41
                                              }
                                             ],
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "yaw": -22.49,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 5.74,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 53,
                                                  "width": 79,
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_11_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": -2.41
                                              }
                                             ]
                                            },
                                            {
                                             "class": "HotspotPanoramaOverlay",
                                             "id": "overlay_3057C0B3_07F1_FDBA_419A_E7F4D38B825B",
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "hfov": 4.45,
                                               "yaw": -11.81,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 31,
                                                  "width": 30,
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_12_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "pitch": 0.61
                                              }
                                             ],
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000",
                                               "click": "this.mainPlayList.set('selectedIndex', 7)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "yaw": -11.81,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 4.45,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 63,
                                                  "width": 61,
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_12_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": 0.61
                                              }
                                             ]
                                            },
                                            {
                                             "class": "HotspotPanoramaOverlay",
                                             "id": "overlay_3869236A_07F1_1CAA_416D_FDE79EB0341C",
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "hfov": 4.95,
                                               "yaw": -11.93,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 16,
                                                  "width": 25,
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_13_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "pitch": -1.66
                                              }
                                             ],
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "yaw": -11.93,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 4.95,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 42,
                                                  "width": 68,
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_13_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": -1.66
                                              }
                                             ]
                                            }
                                           ],
                                           "sphere": {
                                            "class": "ImageResource",
                                            "levels": [
                                             {
                                              "class": "ImageResourceLevel",
                                              "height": 2500,
                                              "width": 5000,
                                              "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_hq.jpeg"
                                             },
                                             {
                                              "class": "ImageResourceLevel",
                                              "height": 1608,
                                              "width": 3217,
                                              "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855.jpeg"
                                             }
                                            ]
                                           }
                                          }
                                         ],
                                         "cardboardMenu": "this.Menu_18B37D98_0BD1_93F6_4188_E592649F61C1",
                                         "partial": false,
                                         "pitch": 0,
                                         "thumbnailUrl": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_t.jpg",
                                         "id": "panorama_0F84F19D_0671_6675_4191_5761B2287855",
                                         "hfovMin": 60,
                                         "label": "C19",
                                         "class": "Panorama",
                                         "hfovMax": 120,
                                         "hfov": 360,
                                         "adjacentPanoramas": [
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                                           "yaw": 18.34,
                                           "backwardYaw": 174.53,
                                           "distance": 1
                                          },
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                                           "yaw": -34.31,
                                           "backwardYaw": 168.59,
                                           "distance": 1
                                          },
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                                           "yaw": -53.28,
                                           "backwardYaw": -6.68,
                                           "distance": 1
                                          },
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
                                           "yaw": 29.17,
                                           "backwardYaw": 7.69,
                                           "distance": 1
                                          },
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                                           "yaw": -22.73,
                                           "backwardYaw": 136.61,
                                           "distance": 1
                                          }
                                         ],
                                         "vfov": 180
                                        },
                                        "yaw": -6.68,
                                        "backwardYaw": -53.28,
                                        "distance": 1
                                       },
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                                        "yaw": -177.33,
                                        "backwardYaw": 149.3,
                                        "distance": 1
                                       }
                                      ],
                                      "vfov": 180
                                     },
                                     "yaw": 81.83,
                                     "backwardYaw": -44.11,
                                     "distance": 1
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
                                     "yaw": 7.69,
                                     "backwardYaw": 29.17,
                                     "distance": 1
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                                     "yaw": 139.53,
                                     "backwardYaw": 124.98,
                                     "distance": 1
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": {
                                      "frames": [
                                       {
                                        "class": "SphericPanoramaFrame",
                                        "thumbnailUrl": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_t.jpg",
                                        "overlays": [
                                         {
                                          "class": "HotspotPanoramaOverlay",
                                          "id": "overlay_1E557066_06B1_FCDA_4191_0771B40B46DF",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 5.56,
                                            "yaw": 105.38,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 42,
                                               "width": 37,
                                               "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_0_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": 0.66
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_197A02CE_0BD1_B16A_41A7_3C79E3D85D7F); this.mainPlayList.set('selectedIndex', 9)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "yaw": 105.38,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 5.56,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 84,
                                               "width": 75,
                                               "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_0_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": 0.66
                                           }
                                          ]
                                         },
                                         {
                                          "class": "HotspotPanoramaOverlay",
                                          "id": "overlay_1E6BC9CE_06B0_EFEA_4194_3DB640A87052",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 6.77,
                                            "yaw": 105.71,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 16,
                                               "width": 24,
                                               "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_1_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": -3.51
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "yaw": 105.71,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 6.77,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 59,
                                               "width": 92,
                                               "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_1_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -3.51
                                           }
                                          ]
                                         },
                                         {
                                          "class": "HotspotPanoramaOverlay",
                                          "id": "overlay_1FA961C0_068F_FFD6_4187_D2C8F16F2FF8",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 4.85,
                                            "yaw": 116.4,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 36,
                                               "width": 32,
                                               "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_2_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": 1.05
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_1900F2C2_0BD1_B15A_41A0_22F1F0B86510); this.mainPlayList.set('selectedIndex', 16)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "yaw": 116.4,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 4.85,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 72,
                                               "width": 65,
                                               "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_2_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": 1.05
                                           }
                                          ]
                                         },
                                         {
                                          "class": "HotspotPanoramaOverlay",
                                          "id": "overlay_1DFE33B1_0691_63B6_416C_46BDA8C7F5D9",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 6.2,
                                            "yaw": 116.87,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 16,
                                               "width": 26,
                                               "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_3_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": -2.03
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "yaw": 116.87,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 6.2,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 51,
                                               "width": 84,
                                               "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_3_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -2.03
                                           }
                                          ]
                                         },
                                         {
                                          "class": "HotspotPanoramaOverlay",
                                          "id": "overlay_1C1E18E0_0693_2DD6_4185_66053E805808",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 5.2,
                                            "yaw": 121.73,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 32,
                                               "width": 35,
                                               "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_4_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": 1.1
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_197322D8_0BD1_B176_4159_62124C2833F8); this.mainPlayList.set('selectedIndex', 17)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "yaw": 121.73,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 5.2,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 65,
                                               "width": 70,
                                               "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_4_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": 1.1
                                           }
                                          ]
                                         },
                                         {
                                          "class": "HotspotPanoramaOverlay",
                                          "id": "overlay_1A8360BA_0693_3DAA_4197_01959E37D013",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 4.74,
                                            "yaw": 121.85,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 16,
                                               "width": 24,
                                               "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_5_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": -1.12
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "yaw": 121.85,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 4.74,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 42,
                                               "width": 64,
                                               "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_5_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -1.12
                                           }
                                          ]
                                         },
                                         {
                                          "class": "HotspotPanoramaOverlay",
                                          "id": "overlay_1F9A2A07_0691_EC5A_4197_D42F6DB80195",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 5.41,
                                            "yaw": 130.14,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 35,
                                               "width": 36,
                                               "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_6_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": 0.09
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_190652AF_0BD1_B129_4186_7007661B59EA); this.mainPlayList.set('selectedIndex', 7)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "yaw": 130.14,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 5.41,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 70,
                                               "width": 73,
                                               "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_6_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": 0.09
                                           }
                                          ]
                                         },
                                         {
                                          "class": "HotspotPanoramaOverlay",
                                          "id": "overlay_1A54EB2C_0691_2CAE_414E_FD4A85E449B8",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 4.75,
                                            "yaw": 130.1,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 16,
                                               "width": 23,
                                               "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_7_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": -2.92
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "yaw": 130.1,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 4.75,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 43,
                                               "width": 64,
                                               "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_7_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -2.92
                                           }
                                          ]
                                         }
                                        ],
                                        "sphere": {
                                         "class": "ImageResource",
                                         "levels": [
                                          {
                                           "class": "ImageResourceLevel",
                                           "height": 2450,
                                           "width": 4900,
                                           "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_hq.jpeg"
                                          },
                                          {
                                           "class": "ImageResourceLevel",
                                           "height": 1608,
                                           "width": 3217,
                                           "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82.jpeg"
                                          }
                                         ]
                                        }
                                       }
                                      ],
                                      "cardboardMenu": "this.Menu_18B37D98_0BD1_93F6_4188_E592649F61C1",
                                      "partial": false,
                                      "pitch": 0,
                                      "thumbnailUrl": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_t.jpg",
                                      "id": "panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
                                      "hfovMin": 60,
                                      "label": "C09",
                                      "class": "Panorama",
                                      "hfovMax": 120,
                                      "hfov": 360,
                                      "adjacentPanoramas": [
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                                        "yaw": 130.14,
                                        "backwardYaw": -154.28,
                                        "distance": 1
                                       },
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                                        "yaw": 116.4,
                                        "backwardYaw": 2.53,
                                        "distance": 1
                                       },
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                                        "yaw": 105.38,
                                        "backwardYaw": -98.62,
                                        "distance": 1
                                       },
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
                                        "yaw": 121.73,
                                        "backwardYaw": -171.11,
                                        "distance": 1
                                       }
                                      ],
                                      "vfov": 180
                                     },
                                     "yaw": -171.11,
                                     "backwardYaw": 121.73,
                                     "distance": 1
                                    }
                                   ],
                                   "vfov": 180
                                  },
                                  "yaw": 112.76,
                                  "backwardYaw": -156.98,
                                  "distance": 1
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": {
                                   "frames": [
                                    {
                                     "class": "SphericPanoramaFrame",
                                     "thumbnailUrl": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_t.jpg",
                                     "overlays": [
                                      {
                                       "class": "HotspotPanoramaOverlay",
                                       "id": "overlay_1BCAA3DB_0690_E3EA_4175_AE03DFBDF79F",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 11.41,
                                         "yaw": -0.95,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "height": 112,
                                            "width": 79,
                                            "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_0_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "pitch": -0.25
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_18034ED0_0BD1_9176_418E_9CD30FC4B515); this.mainPlayList.set('selectedIndex', 9)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "yaw": -0.95,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 11.41,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "height": 225,
                                            "width": 158,
                                            "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_0_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -0.25
                                        }
                                       ]
                                      },
                                      {
                                       "class": "HotspotPanoramaOverlay",
                                       "id": "overlay_1B81FB3A_0691_6CAA_4185_C2AB290A08A0",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 11.36,
                                         "yaw": -1.13,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "height": 16,
                                            "width": 22,
                                            "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_1_0_map.gif"
                                           }
                                          ]
                                         },
                                         "pitch": -10.61
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "yaw": -1.13,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 11.36,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "height": 115,
                                            "width": 160,
                                            "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_1_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -10.61
                                        }
                                       ]
                                      },
                                      {
                                       "class": "HotspotPanoramaOverlay",
                                       "id": "overlay_192EAB21_068F_2C56_4193_6F3905BD0334",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 22.44,
                                         "yaw": 178.45,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "height": 138,
                                            "width": 156,
                                            "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_2_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "pitch": -5.15
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E, this.camera_1878CEDA_0BD1_916A_4177_0AECA4634AAA); this.mainPlayList.set('selectedIndex', 11)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "yaw": 178.45,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 22.44,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "height": 277,
                                            "width": 312,
                                            "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_2_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -5.15
                                        }
                                       ]
                                      },
                                      {
                                       "class": "HotspotPanoramaOverlay",
                                       "id": "overlay_19EDC174_0671_3CBE_4196_DE5883AFB8CF",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 10.52,
                                         "yaw": 177.74,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "height": 16,
                                            "width": 21,
                                            "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_3_0_map.gif"
                                           }
                                          ]
                                         },
                                         "pitch": -17.9
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "yaw": 177.74,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 10.52,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "height": 115,
                                            "width": 153,
                                            "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_3_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -17.9
                                        }
                                       ]
                                      }
                                     ],
                                     "sphere": {
                                      "class": "ImageResource",
                                      "levels": [
                                       {
                                        "class": "ImageResourceLevel",
                                        "height": 2500,
                                        "width": 5000,
                                        "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_hq.jpeg"
                                       },
                                       {
                                        "class": "ImageResourceLevel",
                                        "height": 1608,
                                        "width": 3217,
                                        "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2.jpeg"
                                       }
                                      ]
                                     }
                                    }
                                   ],
                                   "cardboardMenu": "this.Menu_18B37D98_0BD1_93F6_4188_E592649F61C1",
                                   "partial": false,
                                   "pitch": 0,
                                   "thumbnailUrl": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_t.jpg",
                                   "id": "panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
                                   "hfovMin": 60,
                                   "label": "C11",
                                   "class": "Panorama",
                                   "hfovMax": 120,
                                   "hfov": 360,
                                   "adjacentPanoramas": [
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                                     "yaw": -0.95,
                                     "backwardYaw": -0.88,
                                     "distance": 1
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": {
                                      "frames": [
                                       {
                                        "class": "SphericPanoramaFrame",
                                        "thumbnailUrl": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_t.jpg",
                                        "overlays": [
                                         {
                                          "class": "HotspotPanoramaOverlay",
                                          "id": "overlay_1B28455D_0671_24EE_418A_324E3B2D36DB",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 10.93,
                                            "yaw": 0.03,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 94,
                                               "width": 76,
                                               "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_0_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": -5.02
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2, this.camera_1F3C703C_0BD1_B12E_4155_EA48EDB5E726); this.mainPlayList.set('selectedIndex', 10)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "yaw": 0.03,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 10.93,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 189,
                                               "width": 152,
                                               "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_0_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -5.02
                                           }
                                          ]
                                         },
                                         {
                                          "class": "HotspotPanoramaOverlay",
                                          "id": "overlay_1B0FFE2E_0673_24AA_4193_33375BC7C00A",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 10.83,
                                            "yaw": -0.12,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 16,
                                               "width": 23,
                                               "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_1_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": -13.62
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "yaw": -0.12,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 10.83,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 104,
                                               "width": 154,
                                               "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_1_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -13.62
                                           }
                                          ]
                                         },
                                         {
                                          "class": "HotspotPanoramaOverlay",
                                          "id": "overlay_24B0C757_0673_64FA_4196_101EB1688FEE",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 12.62,
                                            "yaw": -178.02,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 112,
                                               "width": 89,
                                               "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_2_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": -10.03
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778, this.camera_1F2E5051_0BD1_B176_412D_6CC4E4BF9D24); this.mainPlayList.set('selectedIndex', 12)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "yaw": -178.02,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 12.62,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 224,
                                               "width": 178,
                                               "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_2_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -10.03
                                           }
                                          ]
                                         },
                                         {
                                          "class": "HotspotPanoramaOverlay",
                                          "id": "overlay_27CC6293_0671_3C7B_419A_6F5AB828C77E",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 10.33,
                                            "yaw": -177.02,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 16,
                                               "width": 21,
                                               "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_3_0_map.gif"
                                              }
                                             ]
                                            },
                                            "pitch": -21.2
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "yaw": -177.02,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 10.33,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "height": 113,
                                               "width": 153,
                                               "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_3_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -21.2
                                           }
                                          ]
                                         }
                                        ],
                                        "sphere": {
                                         "class": "ImageResource",
                                         "levels": [
                                          {
                                           "class": "ImageResourceLevel",
                                           "height": 2500,
                                           "width": 5000,
                                           "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_hq.jpeg"
                                          },
                                          {
                                           "class": "ImageResourceLevel",
                                           "height": 1608,
                                           "width": 3217,
                                           "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E.jpeg"
                                          }
                                         ]
                                        }
                                       }
                                      ],
                                      "cardboardMenu": "this.Menu_18B37D98_0BD1_93F6_4188_E592649F61C1",
                                      "partial": false,
                                      "pitch": 0,
                                      "thumbnailUrl": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_t.jpg",
                                      "id": "panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
                                      "hfovMin": 60,
                                      "label": "C12",
                                      "class": "Panorama",
                                      "hfovMax": 120,
                                      "hfov": 360,
                                      "adjacentPanoramas": [
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
                                        "yaw": 0.03,
                                        "backwardYaw": 178.45,
                                        "distance": 1
                                       },
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": {
                                         "frames": [
                                          {
                                           "class": "SphericPanoramaFrame",
                                           "thumbnailUrl": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_t.jpg",
                                           "overlays": [
                                            {
                                             "class": "HotspotPanoramaOverlay",
                                             "id": "overlay_18238646_0671_24DA_4160_F47269F55E5C",
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "hfov": 14.38,
                                               "yaw": -0.18,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 121,
                                                  "width": 100,
                                                  "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_0_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "pitch": -5.9
                                              }
                                             ],
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741, this.camera_19368234_0BD1_B13E_41A5_537B9E722097); this.mainPlayList.set('selectedIndex', 13)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "yaw": -0.18,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 14.38,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 242,
                                                  "width": 200,
                                                  "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_0_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": -5.9
                                              }
                                             ]
                                            },
                                            {
                                             "class": "HotspotPanoramaOverlay",
                                             "id": "overlay_197E9710_0677_6476_4185_152F2BE62FC4",
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "hfov": 11.09,
                                               "yaw": -0.63,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 16,
                                                  "width": 22,
                                                  "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_1_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "pitch": -16.39
                                              }
                                             ],
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "yaw": -0.63,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 11.09,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 115,
                                                  "width": 160,
                                                  "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_1_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": -16.39
                                              }
                                             ]
                                            },
                                            {
                                             "class": "HotspotPanoramaOverlay",
                                             "id": "overlay_27454FDC_0677_23EE_4173_4743024C71AA",
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "hfov": 18.94,
                                               "yaw": -178.74,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 114,
                                                  "width": 132,
                                                  "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_2_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "pitch": -7.41
                                              }
                                             ],
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E, this.camera_19309240_0BD1_B157_416F_014B13DCEC30); this.mainPlayList.set('selectedIndex', 11)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "yaw": -178.74,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 18.94,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 228,
                                                  "width": 265,
                                                  "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_2_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": -7.41
                                              }
                                             ]
                                            },
                                            {
                                             "class": "HotspotPanoramaOverlay",
                                             "id": "overlay_27F0BA0A_0670_EC6A_4198_E6CE799B31CB",
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "hfov": 10.5,
                                               "yaw": -179.25,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 16,
                                                  "width": 20,
                                                  "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_3_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "pitch": -18.28
                                              }
                                             ],
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "yaw": -179.25,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 10.5,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "height": 118,
                                                  "width": 153,
                                                  "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_3_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": -18.28
                                              }
                                             ]
                                            }
                                           ],
                                           "sphere": {
                                            "class": "ImageResource",
                                            "levels": [
                                             {
                                              "class": "ImageResourceLevel",
                                              "height": 2500,
                                              "width": 5000,
                                              "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_hq.jpeg"
                                             },
                                             {
                                              "class": "ImageResourceLevel",
                                              "height": 1608,
                                              "width": 3217,
                                              "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778.jpeg"
                                             }
                                            ]
                                           }
                                          }
                                         ],
                                         "cardboardMenu": "this.Menu_18B37D98_0BD1_93F6_4188_E592649F61C1",
                                         "partial": false,
                                         "pitch": 0,
                                         "thumbnailUrl": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_t.jpg",
                                         "id": "panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
                                         "hfovMin": 60,
                                         "label": "C13",
                                         "class": "Panorama",
                                         "hfovMax": 120,
                                         "hfov": 360,
                                         "adjacentPanoramas": [
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": {
                                            "frames": [
                                             {
                                              "class": "SphericPanoramaFrame",
                                              "thumbnailUrl": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_t.jpg",
                                              "overlays": [
                                               {
                                                "class": "HotspotPanoramaOverlay",
                                                "id": "overlay_263EBD9B_0671_246A_4191_F49A95B9E74E",
                                                "maps": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "hfov": 16.77,
                                                  "yaw": -0.27,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "height": 171,
                                                     "width": 116,
                                                     "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_0_0_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -3.52
                                                 }
                                                ],
                                                "useHandCursor": true,
                                                "enabledInCardboard": true,
                                                "rollOverDisplay": false,
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC, this.camera_189B2DBE_0BD1_932A_41A1_2091582BD153); this.mainPlayList.set('selectedIndex', 14)"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "yaw": -0.27,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "hfov": 16.77,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "height": 343,
                                                     "width": 233,
                                                     "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_0_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -3.52
                                                 }
                                                ]
                                               },
                                               {
                                                "class": "HotspotPanoramaOverlay",
                                                "id": "overlay_257E93A3_067F_3C5A_4187_58F778D35045",
                                                "maps": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "hfov": 10.69,
                                                  "yaw": 0.63,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "height": 16,
                                                     "width": 25,
                                                     "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_1_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -14.76
                                                 }
                                                ],
                                                "useHandCursor": true,
                                                "enabledInCardboard": true,
                                                "rollOverDisplay": false,
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "yaw": 0.63,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "hfov": 10.69,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "height": 97,
                                                     "width": 153,
                                                     "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_1_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -14.76
                                                 }
                                                ]
                                               },
                                               {
                                                "class": "HotspotPanoramaOverlay",
                                                "id": "overlay_27045473_0671_24BA_4195_EE4719C004CC",
                                                "maps": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "hfov": 21.2,
                                                  "yaw": -178.42,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "height": 166,
                                                     "width": 147,
                                                     "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_2_0_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -3.64
                                                 }
                                                ],
                                                "useHandCursor": true,
                                                "enabledInCardboard": true,
                                                "rollOverDisplay": false,
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778, this.camera_1895DDCD_0BD1_9369_418D_F0D1194E90B8); this.mainPlayList.set('selectedIndex', 12)"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "yaw": -178.42,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "hfov": 21.2,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "height": 333,
                                                     "width": 295,
                                                     "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_2_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -3.64
                                                 }
                                                ]
                                               },
                                               {
                                                "class": "HotspotPanoramaOverlay",
                                                "id": "overlay_26FD3107_0671_7C5A_4196_ED67E7BBC774",
                                                "maps": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "hfov": 10.61,
                                                  "yaw": -177.99,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "height": 16,
                                                     "width": 25,
                                                     "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_3_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -16.27
                                                 }
                                                ],
                                                "useHandCursor": true,
                                                "enabledInCardboard": true,
                                                "rollOverDisplay": false,
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "yaw": -177.99,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "hfov": 10.61,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "height": 97,
                                                     "width": 153,
                                                     "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_3_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -16.27
                                                 }
                                                ]
                                               }
                                              ],
                                              "sphere": {
                                               "class": "ImageResource",
                                               "levels": [
                                                {
                                                 "class": "ImageResourceLevel",
                                                 "height": 2500,
                                                 "width": 5000,
                                                 "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_hq.jpeg"
                                                },
                                                {
                                                 "class": "ImageResourceLevel",
                                                 "height": 1608,
                                                 "width": 3217,
                                                 "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741.jpeg"
                                                }
                                               ]
                                              }
                                             }
                                            ],
                                            "cardboardMenu": "this.Menu_18B37D98_0BD1_93F6_4188_E592649F61C1",
                                            "partial": false,
                                            "pitch": 0,
                                            "thumbnailUrl": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_t.jpg",
                                            "id": "panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
                                            "hfovMin": 60,
                                            "label": "C14",
                                            "class": "Panorama",
                                            "hfovMax": 120,
                                            "hfov": 360,
                                            "adjacentPanoramas": [
                                             {
                                              "class": "AdjacentPanorama",
                                              "panorama": {
                                               "frames": [
                                                {
                                                 "class": "SphericPanoramaFrame",
                                                 "thumbnailUrl": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_t.jpg",
                                                 "overlays": [
                                                  {
                                                   "class": "HotspotPanoramaOverlay",
                                                   "id": "overlay_2742F976_0673_2CBA_4192_B1253893FD9B",
                                                   "maps": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "hfov": 17.81,
                                                     "yaw": 0.25,
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "class": "ImageResourceLevel",
                                                        "height": 122,
                                                        "width": 123,
                                                        "url": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_0_HS_0_0_0_map.gif"
                                                       }
                                                      ]
                                                     },
                                                     "pitch": -3.27
                                                    }
                                                   ],
                                                   "useHandCursor": true,
                                                   "enabledInCardboard": true,
                                                   "rollOverDisplay": false,
                                                   "areas": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "mapColor": "#FF0000",
                                                     "click": "this.startPanoramaWithCamera(this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741, this.camera_18214EA7_0BD1_91D9_41A4_49B202AB7D61); this.mainPlayList.set('selectedIndex', 13)"
                                                    }
                                                   ],
                                                   "items": [
                                                    {
                                                     "yaw": 0.25,
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "hfov": 17.81,
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "class": "ImageResourceLevel",
                                                        "height": 245,
                                                        "width": 247,
                                                        "url": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_0_HS_0_0.png"
                                                       }
                                                      ]
                                                     },
                                                     "pitch": -3.27
                                                    }
                                                   ]
                                                  },
                                                  {
                                                   "class": "HotspotPanoramaOverlay",
                                                   "id": "overlay_26A0F6B7_0673_E5BA_4197_F90E8A3A011E",
                                                   "maps": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "hfov": 10.93,
                                                     "yaw": 0.25,
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "class": "ImageResourceLevel",
                                                        "height": 16,
                                                        "width": 20,
                                                        "url": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_0_HS_1_0_map.gif"
                                                       }
                                                      ]
                                                     },
                                                     "pitch": -14.76
                                                    }
                                                   ],
                                                   "useHandCursor": true,
                                                   "enabledInCardboard": true,
                                                   "rollOverDisplay": false,
                                                   "areas": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "mapColor": "#FF0000"
                                                    }
                                                   ],
                                                   "items": [
                                                    {
                                                     "yaw": 0.25,
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "hfov": 10.93,
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "class": "ImageResourceLevel",
                                                        "height": 125,
                                                        "width": 157,
                                                        "url": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_0_HS_1_0.png"
                                                       }
                                                      ]
                                                     },
                                                     "pitch": -14.76
                                                    }
                                                   ]
                                                  }
                                                 ],
                                                 "sphere": {
                                                  "class": "ImageResource",
                                                  "levels": [
                                                   {
                                                    "class": "ImageResourceLevel",
                                                    "height": 2500,
                                                    "width": 5000,
                                                    "url": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_hq.jpeg"
                                                   },
                                                   {
                                                    "class": "ImageResourceLevel",
                                                    "height": 1608,
                                                    "width": 3217,
                                                    "url": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC.jpeg"
                                                   }
                                                  ]
                                                 }
                                                }
                                               ],
                                               "cardboardMenu": "this.Menu_18B37D98_0BD1_93F6_4188_E592649F61C1",
                                               "partial": false,
                                               "pitch": 0,
                                               "thumbnailUrl": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_t.jpg",
                                               "id": "panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
                                               "hfovMin": 60,
                                               "label": "C15",
                                               "class": "Panorama",
                                               "hfovMax": 120,
                                               "hfov": 360,
                                               "adjacentPanoramas": [
                                                {
                                                 "class": "AdjacentPanorama",
                                                 "panorama": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
                                                 "yaw": 0.25,
                                                 "backwardYaw": -0.27,
                                                 "distance": 1
                                                }
                                               ],
                                               "vfov": 180
                                              },
                                              "yaw": -0.27,
                                              "backwardYaw": 0.25,
                                              "distance": 1
                                             },
                                             {
                                              "class": "AdjacentPanorama",
                                              "panorama": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
                                              "yaw": -178.42,
                                              "backwardYaw": -0.18,
                                              "distance": 1
                                             }
                                            ],
                                            "vfov": 180
                                           },
                                           "yaw": -0.18,
                                           "backwardYaw": -178.42,
                                           "distance": 1
                                          },
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
                                           "yaw": -178.74,
                                           "backwardYaw": -178.02,
                                           "distance": 1
                                          }
                                         ],
                                         "vfov": 180
                                        },
                                        "yaw": -178.02,
                                        "backwardYaw": -178.74,
                                        "distance": 1
                                       }
                                      ],
                                      "vfov": 180
                                     },
                                     "yaw": 178.45,
                                     "backwardYaw": 0.03,
                                     "distance": 1
                                    }
                                   ],
                                   "vfov": 180
                                  },
                                  "yaw": -0.88,
                                  "backwardYaw": -0.95,
                                  "distance": 1
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                                  "yaw": 171.29,
                                  "backwardYaw": 66.31,
                                  "distance": 1
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
                                  "yaw": -98.62,
                                  "backwardYaw": 105.38,
                                  "distance": 1
                                 }
                                ],
                                "vfov": 180
                               },
                               "yaw": 59.08,
                               "backwardYaw": 134.41,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
                               "yaw": 140.71,
                               "backwardYaw": 122.75,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
                               "yaw": 168.59,
                               "backwardYaw": -34.31,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                               "yaw": -18.92,
                               "backwardYaw": 156.92,
                               "distance": 1
                              }
                             ],
                             "vfov": 180
                            },
                            "yaw": -107.62,
                            "backwardYaw": 113.51,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                            "yaw": -146.68,
                            "backwardYaw": -91.84,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
                            "yaw": 152.96,
                            "backwardYaw": -143.45,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
                            "yaw": 174.53,
                            "backwardYaw": 18.34,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                            "yaw": 25.67,
                            "backwardYaw": 81.58,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                            "yaw": -55.84,
                            "backwardYaw": 107.11,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
                            "yaw": 2.53,
                            "backwardYaw": 116.4,
                            "distance": 1
                           }
                          ],
                          "vfov": 180
                         },
                         "yaw": -22.68,
                         "backwardYaw": -16.75,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                         "yaw": 12.62,
                         "backwardYaw": 11.76,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
                         "yaw": -15.07,
                         "backwardYaw": 171.48,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                         "yaw": -42.13,
                         "backwardYaw": -143.14,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                         "yaw": 36.85,
                         "backwardYaw": 4.74,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
                         "yaw": -154.28,
                         "backwardYaw": 130.14,
                         "distance": 1
                        }
                       ],
                       "vfov": 180
                      },
                      "yaw": 4.74,
                      "backwardYaw": 36.85,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                      "yaw": 107.11,
                      "backwardYaw": -55.84,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                      "yaw": 66.31,
                      "backwardYaw": 171.29,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                      "yaw": 149.3,
                      "backwardYaw": -177.33,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
                      "yaw": 124.98,
                      "backwardYaw": 139.53,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
                      "yaw": -96.27,
                      "backwardYaw": 7.93,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
                      "yaw": 136.61,
                      "backwardYaw": -22.73,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                      "yaw": 156.92,
                      "backwardYaw": -18.92,
                      "distance": 1
                     }
                    ],
                    "vfov": 180
                   },
                   "yaw": 7.93,
                   "backwardYaw": -96.27,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
                   "yaw": -178.55,
                   "backwardYaw": -179.87,
                   "distance": 1
                  }
                 ],
                 "vfov": 180
                },
                "yaw": -179.87,
                "backwardYaw": -178.55,
                "distance": 1
               }
              ],
              "vfov": 180
             },
             "yaw": -2.21,
             "backwardYaw": -2.69,
             "distance": 1
            }
           ],
           "vfov": 180
          },
          "yaw": -177.99,
          "backwardYaw": -179.28,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_0FD85D6E_0673_DED7_40FD_D23817113C40",
          "yaw": 0.35,
          "backwardYaw": 0.64,
          "distance": 1
         }
        ],
        "vfov": 180
       },
       "yaw": 0.64,
       "backwardYaw": 0.35,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D",
       "yaw": -179.67,
       "backwardYaw": 1.46,
       "distance": 1
      }
     ],
     "vfov": 180
    },
    "yaw": 1.46,
    "backwardYaw": -179.67,
    "distance": 1
   }
  ],
  "vfov": 180
 },
 {
  "class": "PanoramaPlayer",
  "gyroscopeEnabled": true,
  "id": "MainViewerPanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "gyroscopeVerticalDraggingEnabled": true,
  "displayPlaybackBar": true,
  "mouseControlMode": "drag_acceleration",
  "touchControlMode": "drag_rotation",
  "preloadEnabled": false
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_0FD85D6E_0673_DED7_40FD_D23817113C40",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0F98F446_0671_2ED7_4191_DEC01556F741_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FD82345_0671_EAD5_4173_8B63686C1397_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0F84F19D_0671_6675_4191_5761B2287855_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D_t.jpg",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_3BC93817_0791_6C7A_418F_0EA64F0A4B5B",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 11.3,
        "yaw": -174.74,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 88,
           "width": 78,
           "url": "media/panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -0.44
       }
      ],
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 18)"
       }
      ],
      "items": [
       {
        "yaw": -174.74,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 11.3,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 177,
           "width": 156,
           "url": "media/panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -0.44
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_305C5588_0793_2456_418A_8A6507C5DC0F",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 8.44,
        "yaw": -174.68,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 29,
           "url": "media/panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D_0_HS_1_0_map.gif"
          }
         ]
        },
        "pitch": -6.59
       }
      ],
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "items": [
       {
        "yaw": -174.68,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 8.44,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 64,
           "width": 117,
           "url": "media/panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -6.59
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 2500,
       "width": 5000,
       "url": "media/panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D.jpeg"
      }
     ]
    }
   }
  ],
  "id": "panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D",
  "cardboardMenu": "this.Menu_18B37D98_0BD1_93F6_4188_E592649F61C1",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D_t.jpg",
  "hfovMin": 60,
  "label": "C20",
  "class": "Panorama",
  "hfovMax": 120,
  "hfov": 360,
  "vfov": 180
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_0FD85D6E_0673_DED7_40FD_D23817113C40",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "media": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "media": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "media": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "media": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "media": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "media": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "media": "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "media": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "media": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "media": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
    "media": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
    "media": "this.panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
    "media": "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
    "media": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 0)",
    "media": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_camera"
   }
  ]
 },
 {
  "fieldOfViewOverlayInsideColor": "#FFFFFF",
  "fieldOfViewOverlayInsideOpacity": 0.4,
  "width": 1144,
  "id": "map_08C0BB0B_06B0_EC6A_4151_B2D9B8E68168",
  "height": 1124,
  "minimumZoomFactor": 0.5,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "height": 1124,
     "width": 1144,
     "url": "media/map_08C0BB0B_06B0_EC6A_4151_B2D9B8E68168.png"
    },
    {
     "class": "ImageResourceLevel",
     "height": 562,
     "width": 572,
     "url": "media/map_08C0BB0B_06B0_EC6A_4151_B2D9B8E68168_lq.png",
     "grayscale": true
    }
   ]
  },
  "fieldOfViewOverlayOutsideColor": "#000000",
  "thumbnailUrl": "media/map_08C0BB0B_06B0_EC6A_4151_B2D9B8E68168_t.png",
  "fieldOfViewOverlayOutsideOpacity": 0,
  "label": "FloorPlan",
  "overlays": [
   {
    "class": "AreaHotspotMapOverlay",
    "id": "overlay_26BB8721_0671_2456_4195_D985F2668720",
    "map": {
     "class": "HotspotMapOverlayMap",
     "x": 362.74,
     "offsetY": 0,
     "width": 32.74,
     "y": 335.42,
     "height": 47.91,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "height": 23,
        "width": 16,
        "url": "media/map_08C0BB0B_06B0_EC6A_4151_B2D9B8E68168_HS_0_map.gif"
       }
      ]
     }
    },
    "rollOverDisplay": false,
    "image": {
     "x": 362.74,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "height": 47,
        "width": 32,
        "url": "media/map_08C0BB0B_06B0_EC6A_4151_B2D9B8E68168_HS_0.png"
       }
      ]
     },
     "y": 335.42,
     "class": "HotspotMapOverlayImage",
     "width": 32.74,
     "height": 47.91
    },
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000",
      "click": "this.mainPlayList.set('selectedIndex', 0)"
     }
    ],
    "useHandCursor": true
   },
   {
    "class": "AreaHotspotMapOverlay",
    "id": "overlay_24B29A38_0677_2CB6_419A_F745A4774F16",
    "map": {
     "class": "HotspotMapOverlayMap",
     "x": 408.93,
     "offsetY": 0,
     "width": 31.14,
     "y": 360.89,
     "height": 42.29,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "height": 21,
        "width": 15,
        "url": "media/map_08C0BB0B_06B0_EC6A_4151_B2D9B8E68168_HS_1_map.gif"
       }
      ]
     }
    },
    "rollOverDisplay": false,
    "image": {
     "x": 408.93,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "height": 42,
        "width": 31,
        "url": "media/map_08C0BB0B_06B0_EC6A_4151_B2D9B8E68168_HS_1.png"
       }
      ]
     },
     "y": 360.89,
     "class": "HotspotMapOverlayImage",
     "width": 31.14,
     "height": 42.29
    },
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000",
      "click": "this.mainPlayList.set('selectedIndex', 1)"
     }
    ],
    "useHandCursor": true
   },
   {
    "class": "AreaHotspotMapOverlay",
    "id": "overlay_260583E9_0677_63D6_4169_C21203665782",
    "map": {
     "class": "HotspotMapOverlayMap",
     "x": 457.74,
     "offsetY": 0,
     "width": 32.11,
     "y": 382.8,
     "height": 45.33,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "height": 22,
        "width": 16,
        "url": "media/map_08C0BB0B_06B0_EC6A_4151_B2D9B8E68168_HS_2_map.gif"
       }
      ]
     }
    },
    "rollOverDisplay": false,
    "image": {
     "x": 457.74,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "height": 45,
        "width": 32,
        "url": "media/map_08C0BB0B_06B0_EC6A_4151_B2D9B8E68168_HS_2.png"
       }
      ]
     },
     "y": 382.8,
     "class": "HotspotMapOverlayImage",
     "width": 32.11,
     "height": 45.33
    },
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000",
      "click": "this.mainPlayList.set('selectedIndex', 2)"
     }
    ],
    "useHandCursor": true
   },
   {
    "class": "AreaHotspotMapOverlay",
    "id": "overlay_25C1DF4B_0671_64EA_416C_C3AC19C15C5E",
    "map": {
     "class": "HotspotMapOverlayMap",
     "x": 506.1,
     "offsetY": 0,
     "width": 31.7,
     "y": 406.4,
     "height": 44.33,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "height": 22,
        "width": 15,
        "url": "media/map_08C0BB0B_06B0_EC6A_4151_B2D9B8E68168_HS_3_map.gif"
       }
      ]
     }
    },
    "rollOverDisplay": false,
    "image": {
     "x": 506.1,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "height": 44,
        "width": 31,
        "url": "media/map_08C0BB0B_06B0_EC6A_4151_B2D9B8E68168_HS_3.png"
       }
      ]
     },
     "y": 406.4,
     "class": "HotspotMapOverlayImage",
     "width": 31.7,
     "height": 44.33
    },
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000",
      "click": "this.mainPlayList.set('selectedIndex', 3)"
     }
    ],
    "useHandCursor": true
   },
   {
    "class": "AreaHotspotMapOverlay",
    "id": "overlay_2552B869_0671_2CD6_4198_4423B70FF101",
    "map": {
     "class": "HotspotMapOverlayMap",
     "x": 555.65,
     "offsetY": 0,
     "width": 32.18,
     "y": 431.31,
     "height": 43.08,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "height": 21,
        "width": 16,
        "url": "media/map_08C0BB0B_06B0_EC6A_4151_B2D9B8E68168_HS_4_map.gif"
       }
      ]
     }
    },
    "rollOverDisplay": false,
    "image": {
     "x": 555.65,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "height": 43,
        "width": 32,
        "url": "media/map_08C0BB0B_06B0_EC6A_4151_B2D9B8E68168_HS_4.png"
       }
      ]
     },
     "y": 431.31,
     "class": "HotspotMapOverlayImage",
     "width": 32.18,
     "height": 43.08
    },
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000",
      "click": "this.mainPlayList.set('selectedIndex', 4)"
     }
    ],
    "useHandCursor": true
   },
   {
    "class": "AreaHotspotMapOverlay",
    "id": "overlay_23ECF80C_0673_6C6E_4195_491DEEE5E36A",
    "map": {
     "class": "HotspotMapOverlayMap",
     "x": 607.44,
     "offsetY": 0,
     "width": 42.28,
     "y": 458.18,
     "height": 41.63,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "height": 20,
        "width": 21,
        "url": "media/map_08C0BB0B_06B0_EC6A_4151_B2D9B8E68168_HS_5_map.gif"
       }
      ]
     }
    },
    "rollOverDisplay": false,
    "image": {
     "x": 607.44,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "height": 41,
        "width": 42,
        "url": "media/map_08C0BB0B_06B0_EC6A_4151_B2D9B8E68168_HS_5.png"
       }
      ]
     },
     "y": 458.18,
     "class": "HotspotMapOverlayImage",
     "width": 42.28,
     "height": 41.63
    },
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000",
      "click": "this.mainPlayList.set('selectedIndex', 5)"
     }
    ],
    "useHandCursor": true
   },
   {
    "class": "AreaHotspotMapOverlay",
    "id": "overlay_249C246A_0671_24AA_4174_C31E60D769AC",
    "map": {
     "class": "HotspotMapOverlayMap",
     "x": 644.23,
     "offsetY": 0,
     "width": 31.95,
     "y": 485.33,
     "height": 41.12,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "height": 20,
        "width": 15,
        "url": "media/map_08C0BB0B_06B0_EC6A_4151_B2D9B8E68168_HS_6_map.gif"
       }
      ]
     }
    },
    "rollOverDisplay": false,
    "image": {
     "x": 644.23,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "height": 41,
        "width": 31,
        "url": "media/map_08C0BB0B_06B0_EC6A_4151_B2D9B8E68168_HS_6.png"
       }
      ]
     },
     "y": 485.33,
     "class": "HotspotMapOverlayImage",
     "width": 31.95,
     "height": 41.12
    },
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000",
      "click": "this.mainPlayList.set('selectedIndex', 6)"
     }
    ],
    "useHandCursor": true
   },
   {
    "class": "AreaHotspotMapOverlay",
    "id": "overlay_2152B4F6_078F_25BA_4195_889981504CC5",
    "map": {
     "class": "HotspotMapOverlayMap",
     "x": 697.83,
     "offsetY": 0,
     "width": 46.75,
     "y": 455.98,
     "height": 39.28,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "height": 19,
        "width": 23,
        "url": "media/map_08C0BB0B_06B0_EC6A_4151_B2D9B8E68168_HS_7_map.gif"
       }
      ]
     }
    },
    "rollOverDisplay": false,
    "image": {
     "x": 697.83,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "height": 39,
        "width": 46,
        "url": "media/map_08C0BB0B_06B0_EC6A_4151_B2D9B8E68168_HS_7.png"
       }
      ]
     },
     "y": 455.98,
     "class": "HotspotMapOverlayImage",
     "width": 46.75,
     "height": 39.28
    },
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000",
      "click": "this.mainPlayList.set('selectedIndex', 7)"
     }
    ],
    "useHandCursor": true
   },
   {
    "class": "AreaHotspotMapOverlay",
    "id": "overlay_2409B87B_078F_ECAA_418F_F144FFB86024",
    "map": {
     "class": "HotspotMapOverlayMap",
     "x": 711.73,
     "offsetY": 0,
     "width": 49.06,
     "y": 399.23,
     "height": 42.03,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "height": 21,
        "width": 24,
        "url": "media/map_08C0BB0B_06B0_EC6A_4151_B2D9B8E68168_HS_8_map.gif"
       }
      ]
     }
    },
    "rollOverDisplay": false,
    "image": {
     "x": 711.73,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "height": 42,
        "width": 49,
        "url": "media/map_08C0BB0B_06B0_EC6A_4151_B2D9B8E68168_HS_8.png"
       }
      ]
     },
     "y": 399.23,
     "class": "HotspotMapOverlayImage",
     "width": 49.06,
     "height": 42.03
    },
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000",
      "click": "this.mainPlayList.set('selectedIndex', 8)"
     }
    ],
    "useHandCursor": true
   },
   {
    "class": "AreaHotspotMapOverlay",
    "id": "overlay_20634931_0791_2CB6_4174_A18336AB29A4",
    "map": {
     "class": "HotspotMapOverlayMap",
     "x": 742.92,
     "offsetY": 0,
     "width": 31.88,
     "y": 484.52,
     "height": 42.18,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "height": 21,
        "width": 15,
        "url": "media/map_08C0BB0B_06B0_EC6A_4151_B2D9B8E68168_HS_9_map.gif"
       }
      ]
     }
    },
    "rollOverDisplay": false,
    "image": {
     "x": 742.92,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "height": 42,
        "width": 31,
        "url": "media/map_08C0BB0B_06B0_EC6A_4151_B2D9B8E68168_HS_9.png"
       }
      ]
     },
     "y": 484.52,
     "class": "HotspotMapOverlayImage",
     "width": 31.88,
     "height": 42.18
    },
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000",
      "click": "this.mainPlayList.set('selectedIndex', 9)"
     }
    ],
    "useHandCursor": true
   },
   {
    "class": "AreaHotspotMapOverlay",
    "id": "overlay_209FD103_0793_3C5A_419A_F7D330069040",
    "map": {
     "class": "HotspotMapOverlayMap",
     "x": 800.8,
     "offsetY": 0,
     "width": 31.8,
     "y": 487.77,
     "height": 43.65,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "height": 21,
        "width": 15,
        "url": "media/map_08C0BB0B_06B0_EC6A_4151_B2D9B8E68168_HS_10_map.gif"
       }
      ]
     }
    },
    "rollOverDisplay": false,
    "image": {
     "x": 800.8,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "height": 43,
        "width": 31,
        "url": "media/map_08C0BB0B_06B0_EC6A_4151_B2D9B8E68168_HS_10.png"
       }
      ]
     },
     "y": 487.77,
     "class": "HotspotMapOverlayImage",
     "width": 31.8,
     "height": 43.65
    },
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000",
      "click": "this.mainPlayList.set('selectedIndex', 10)"
     }
    ],
    "useHandCursor": true
   },
   {
    "class": "AreaHotspotMapOverlay",
    "id": "overlay_2EB66BF0_0791_23B6_4194_1E606DFBB3F2",
    "map": {
     "class": "HotspotMapOverlayMap",
     "x": 864.67,
     "offsetY": 0,
     "width": 31.2,
     "y": 491.82,
     "height": 44.74,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "height": 22,
        "width": 15,
        "url": "media/map_08C0BB0B_06B0_EC6A_4151_B2D9B8E68168_HS_11_map.gif"
       }
      ]
     }
    },
    "rollOverDisplay": false,
    "image": {
     "x": 864.67,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "height": 44,
        "width": 31,
        "url": "media/map_08C0BB0B_06B0_EC6A_4151_B2D9B8E68168_HS_11.png"
       }
      ]
     },
     "y": 491.82,
     "class": "HotspotMapOverlayImage",
     "width": 31.2,
     "height": 44.74
    },
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000",
      "click": "this.mainPlayList.set('selectedIndex', 11)"
     }
    ],
    "useHandCursor": true
   },
   {
    "class": "AreaHotspotMapOverlay",
    "id": "overlay_2FE54012_0797_1C7A_416E_FE9C9F13D7BF",
    "map": {
     "class": "HotspotMapOverlayMap",
     "x": 907.62,
     "offsetY": 0,
     "width": 30.02,
     "y": 495.36,
     "height": 42.04,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "height": 21,
        "width": 15,
        "url": "media/map_08C0BB0B_06B0_EC6A_4151_B2D9B8E68168_HS_12_map.gif"
       }
      ]
     }
    },
    "rollOverDisplay": false,
    "image": {
     "x": 907.62,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "height": 42,
        "width": 30,
        "url": "media/map_08C0BB0B_06B0_EC6A_4151_B2D9B8E68168_HS_12.png"
       }
      ]
     },
     "y": 495.36,
     "class": "HotspotMapOverlayImage",
     "width": 30.02,
     "height": 42.04
    },
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000",
      "click": "this.mainPlayList.set('selectedIndex', 12)"
     }
    ],
    "useHandCursor": true
   },
   {
    "class": "AreaHotspotMapOverlay",
    "id": "overlay_2FA73220_0797_1C56_4192_1EA879B28A73",
    "map": {
     "class": "HotspotMapOverlayMap",
     "x": 946.04,
     "offsetY": 0,
     "width": 31.69,
     "y": 496.58,
     "height": 42.81,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "height": 21,
        "width": 15,
        "url": "media/map_08C0BB0B_06B0_EC6A_4151_B2D9B8E68168_HS_13_map.gif"
       }
      ]
     }
    },
    "rollOverDisplay": false,
    "image": {
     "x": 946.04,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "height": 42,
        "width": 31,
        "url": "media/map_08C0BB0B_06B0_EC6A_4151_B2D9B8E68168_HS_13.png"
       }
      ]
     },
     "y": 496.58,
     "class": "HotspotMapOverlayImage",
     "width": 31.69,
     "height": 42.81
    },
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000",
      "click": "this.mainPlayList.set('selectedIndex', 12)"
     }
    ],
    "useHandCursor": true
   },
   {
    "class": "AreaHotspotMapOverlay",
    "id": "overlay_2C54299C_0797_2C6E_419B_C646418C3216",
    "map": {
     "class": "HotspotMapOverlayMap",
     "x": 997.5,
     "offsetY": 0,
     "width": 30.69,
     "y": 499.14,
     "height": 41.81,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "height": 20,
        "width": 15,
        "url": "media/map_08C0BB0B_06B0_EC6A_4151_B2D9B8E68168_HS_14_map.gif"
       }
      ]
     }
    },
    "rollOverDisplay": false,
    "image": {
     "x": 997.5,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "height": 41,
        "width": 30,
        "url": "media/map_08C0BB0B_06B0_EC6A_4151_B2D9B8E68168_HS_14.png"
       }
      ]
     },
     "y": 499.14,
     "class": "HotspotMapOverlayImage",
     "width": 30.69,
     "height": 41.81
    },
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000",
      "click": "this.mainPlayList.set('selectedIndex', 14)"
     }
    ],
    "useHandCursor": true
   },
   {
    "class": "AreaHotspotMapOverlay",
    "id": "overlay_2E763DAD_0791_27AE_4166_AC56F8D99336",
    "map": {
     "class": "HotspotMapOverlayMap",
     "x": 719.73,
     "offsetY": 0,
     "width": 44.6,
     "y": 530.45,
     "height": 44.55,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "height": 22,
        "width": 22,
        "url": "media/map_08C0BB0B_06B0_EC6A_4151_B2D9B8E68168_HS_15_map.gif"
       }
      ]
     }
    },
    "rollOverDisplay": false,
    "image": {
     "x": 719.73,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "height": 44,
        "width": 44,
        "url": "media/map_08C0BB0B_06B0_EC6A_4151_B2D9B8E68168_HS_15.png"
       }
      ]
     },
     "y": 530.45,
     "class": "HotspotMapOverlayImage",
     "width": 44.6,
     "height": 44.55
    },
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000",
      "click": "this.mainPlayList.set('selectedIndex', 16)"
     }
    ],
    "useHandCursor": true
   },
   {
    "class": "AreaHotspotMapOverlay",
    "id": "overlay_216C40B8_0791_1DB6_4192_48CCFAD277C0",
    "map": {
     "class": "HotspotMapOverlayMap",
     "x": 721.1,
     "offsetY": 0,
     "width": 33.61,
     "y": 568.13,
     "height": 42.29,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "height": 21,
        "width": 16,
        "url": "media/map_08C0BB0B_06B0_EC6A_4151_B2D9B8E68168_HS_16_map.gif"
       }
      ]
     }
    },
    "rollOverDisplay": false,
    "image": {
     "x": 721.1,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "height": 42,
        "width": 33,
        "url": "media/map_08C0BB0B_06B0_EC6A_4151_B2D9B8E68168_HS_16.png"
       }
      ]
     },
     "y": 568.13,
     "class": "HotspotMapOverlayImage",
     "width": 33.61,
     "height": 42.29
    },
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000",
      "click": "this.mainPlayList.set('selectedIndex', 17)"
     }
    ],
    "useHandCursor": true
   },
   {
    "class": "AreaHotspotMapOverlay",
    "id": "overlay_212B4795_079F_647E_4184_19723A3EFEF7",
    "map": {
     "class": "HotspotMapOverlayMap",
     "x": 706.49,
     "offsetY": 0,
     "width": 33.28,
     "y": 600.12,
     "height": 46.69,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "height": 23,
        "width": 16,
        "url": "media/map_08C0BB0B_06B0_EC6A_4151_B2D9B8E68168_HS_17_map.gif"
       }
      ]
     }
    },
    "rollOverDisplay": false,
    "image": {
     "x": 706.49,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "height": 46,
        "width": 33,
        "url": "media/map_08C0BB0B_06B0_EC6A_4151_B2D9B8E68168_HS_17.png"
       }
      ]
     },
     "y": 600.12,
     "class": "HotspotMapOverlayImage",
     "width": 33.28,
     "height": 46.69
    },
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000",
      "click": "this.mainPlayList.set('selectedIndex', 18)"
     }
    ],
    "useHandCursor": true
   },
   {
    "class": "AreaHotspotMapOverlay",
    "id": "overlay_2FF4AA02_079F_2C5A_414B_9DE61D9B5430",
    "map": {
     "class": "HotspotMapOverlayMap",
     "x": 721.99,
     "offsetY": 0,
     "width": 33.08,
     "y": 670.8,
     "height": 46.26,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "height": 23,
        "width": 16,
        "url": "media/map_08C0BB0B_06B0_EC6A_4151_B2D9B8E68168_HS_18_map.gif"
       }
      ]
     }
    },
    "rollOverDisplay": false,
    "image": {
     "x": 721.99,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "height": 46,
        "width": 33,
        "url": "media/map_08C0BB0B_06B0_EC6A_4151_B2D9B8E68168_HS_18.png"
       }
      ]
     },
     "y": 670.8,
     "class": "HotspotMapOverlayImage",
     "width": 33.08,
     "height": 46.26
    },
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000",
      "click": "this.mainPlayList.set('selectedIndex', 19)"
     }
    ],
    "useHandCursor": true
   },
   {
    "class": "AreaHotspotMapOverlay",
    "id": "overlay_21E7538B_0791_1C6A_4175_3535176D3FA5",
    "map": {
     "class": "HotspotMapOverlayMap",
     "x": 683.1,
     "offsetY": 0,
     "width": 29.8,
     "y": 578.07,
     "height": 42.94,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "height": 21,
        "width": 14,
        "url": "media/map_08C0BB0B_06B0_EC6A_4151_B2D9B8E68168_HS_19_map.gif"
       }
      ]
     }
    },
    "rollOverDisplay": false,
    "image": {
     "x": 683.1,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "height": 42,
        "width": 29,
        "url": "media/map_08C0BB0B_06B0_EC6A_4151_B2D9B8E68168_HS_19.png"
       }
      ]
     },
     "y": 578.07,
     "class": "HotspotMapOverlayImage",
     "width": 29.8,
     "height": 42.94
    },
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000",
      "click": "this.mainPlayList.set('selectedIndex', 22)"
     }
    ],
    "useHandCursor": true
   },
   {
    "class": "AreaHotspotMapOverlay",
    "id": "overlay_2DB08BD8_0793_63F6_4191_5EA7A538C3A0",
    "map": {
     "class": "HotspotMapOverlayMap",
     "x": 669.82,
     "offsetY": 0,
     "width": 32.96,
     "y": 530.92,
     "height": 46.79,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "height": 23,
        "width": 16,
        "url": "media/map_08C0BB0B_06B0_EC6A_4151_B2D9B8E68168_HS_20_map.gif"
       }
      ]
     }
    },
    "rollOverDisplay": false,
    "image": {
     "x": 669.82,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "height": 46,
        "width": 32,
        "url": "media/map_08C0BB0B_06B0_EC6A_4151_B2D9B8E68168_HS_20.png"
       }
      ]
     },
     "y": 530.92,
     "class": "HotspotMapOverlayImage",
     "width": 32.96,
     "height": 46.79
    },
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000",
      "click": "this.mainPlayList.set('selectedIndex', 15)"
     }
    ],
    "useHandCursor": true
   },
   {
    "class": "AreaHotspotMapOverlay",
    "id": "overlay_2DB6B4CD_0791_25EE_4196_8AE5DD45AE00",
    "map": {
     "class": "HotspotMapOverlayMap",
     "x": 642.41,
     "offsetY": 0,
     "width": 31.8,
     "y": 579.05,
     "height": 46.39,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "height": 23,
        "width": 15,
        "url": "media/map_08C0BB0B_06B0_EC6A_4151_B2D9B8E68168_HS_21_map.gif"
       }
      ]
     }
    },
    "rollOverDisplay": false,
    "image": {
     "x": 642.41,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "height": 46,
        "width": 31,
        "url": "media/map_08C0BB0B_06B0_EC6A_4151_B2D9B8E68168_HS_21.png"
       }
      ]
     },
     "y": 579.05,
     "class": "HotspotMapOverlayImage",
     "width": 31.8,
     "height": 46.39
    },
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000",
      "click": "this.mainPlayList.set('selectedIndex', 21)"
     }
    ],
    "useHandCursor": true
   },
   {
    "class": "AreaHotspotMapOverlay",
    "id": "overlay_2F33435B_0793_3CEA_4192_AED2F15ECB9B",
    "map": {
     "class": "HotspotMapOverlayMap",
     "x": 604.97,
     "offsetY": 0,
     "width": 32.99,
     "y": 593.81,
     "height": 45.56,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "height": 22,
        "width": 16,
        "url": "media/map_08C0BB0B_06B0_EC6A_4151_B2D9B8E68168_HS_22_map.gif"
       }
      ]
     }
    },
    "rollOverDisplay": false,
    "image": {
     "x": 604.97,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "height": 45,
        "width": 32,
        "url": "media/map_08C0BB0B_06B0_EC6A_4151_B2D9B8E68168_HS_22.png"
       }
      ]
     },
     "y": 593.81,
     "class": "HotspotMapOverlayImage",
     "width": 32.99,
     "height": 45.56
    },
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000",
      "click": "this.mainPlayList.set('selectedIndex', 20)"
     }
    ],
    "useHandCursor": true
   }
  ],
  "fieldOfViewOverlayRadiusScale": 0.3,
  "class": "Map",
  "scaleMode": "fit_inside",
  "maximumZoomFactor": 1.2,
  "initialZoomFactor": 1
 },
 {
  "class": "MapPlayer",
  "movementMode": "constrained",
  "id": "MapViewerMapPlayer",
  "viewerArea": {
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
   "toolTipShadowOpacity": 1,
   "toolTipOpacity": 1,
   "playbackBarBorderColor": "#FFFFFF",
   "playbackBarHeight": 10,
   "toolTipShadowVerticalLength": 0,
   "toolTipTextShadowColor": "#000000",
   "playbackBarHeadWidth": 6,
   "playbackBarHeadShadow": true,
   "toolTipFontStyle": "normal",
   "playbackBarProgressBorderSize": 0,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "shadow": false,
   "playbackBarBackgroundColorDirection": "vertical",
   "paddingBottom": 0,
   "playbackBarRight": 0,
   "toolTipBackgroundColor": "#F6F6F6",
   "progressBottom": 2,
   "progressBorderSize": 0,
   "progressBarBorderSize": 0,
   "progressBarBorderRadius": 0,
   "playbackBarOpacity": 1,
   "playbackBarProgressBorderRadius": 0,
   "paddingTop": 0,
   "transitionMode": "blending",
   "toolTipShadowSpread": 0,
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "toolTipFontColor": "#606060",
   "playbackBarBorderRadius": 0,
   "progressBackgroundOpacity": 1,
   "playbackBarHeadShadowVerticalLength": 0,
   "playbackBarProgressBorderColor": "#000000",
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "toolTipPaddingRight": 6,
   "width": "100%",
   "paddingLeft": 0,
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
   "class": "ViewerArea",
   "playbackBarHeadShadowBlurRadius": 3,
   "toolTipPaddingLeft": 6,
   "toolTipBorderColor": "#767676",
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "playbackBarLeft": 0,
   "playbackBarBackgroundOpacity": 1,
   "playbackBarBorderSize": 0,
   "toolTipBorderRadius": 3,
   "playbackBarHeadShadowOpacity": 0.7,
   "playbackBarHeadHeight": 15,
   "playbackBarHeadShadowHorizontalLength": 0,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "visible": false,
   "minWidth": 1,
   "playbackBarHeadBorderSize": 0,
   "bottom": "-0.03%",
   "toolTipFontWeight": "normal",
   "id": "MapViewer",
   "minHeight": 1,
   "progressBarBorderColor": "#000000",
   "toolTipShadowHorizontalLength": 0,
   "playbackBarHeadOpacity": 1,
   "toolTipTextShadowBlurRadius": 3,
   "progressBackgroundColorDirection": "vertical",
   "playbackBarHeadShadowColor": "#000000",
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
  }
 },
 {
  "class": "PlayList",
  "id": "playList_18BBDD98_0BD1_93F6_4185_A5D1C516211E",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_08C0BB0B_06B0_EC6A_4151_B2D9B8E68168",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ]
 },
 "this.Menu_18B37D98_0BD1_93F6_4188_E592649F61C1",
 {
  "class": "SlideInEffect",
  "easing": "linear",
  "from": "top",
  "id": "effect_1AFF4711_0BF1_90F9_41A1_23D8C24525DC",
  "duration": 300
 },
 {
  "class": "SlideOutEffect",
  "easing": "linear",
  "id": "effect_19812A6F_0BF0_9129_41A1_8370DA451C08",
  "duration": 300,
  "to": "top"
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_189B2DBE_0BD1_932A_41A1_2091582BD153",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.75,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1895DDCD_0BD1_9369_418D_F0D1194E90B8",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 179.82,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_188F7DDD_0BD1_936E_4191_E0715BC7BAFD",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 177.79,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_18889DEC_0BD1_932F_41A6_9E2D9033155A",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 1.45,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_18827DFC_0BD1_932F_4190_1046E5A12278",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -5.47,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_18FBBE0C_0BD1_90EE_41A0_26A8A9E90F4D",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -11.41,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_18F5DE1B_0BD1_90E9_419A_D23B2084B21C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 173.32,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_18ED0E24_0BD1_90DF_41A6_8785E8C41E22",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -172.31,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_18E68E36_0BD1_913B_41A5_A7F3E79A0A03",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -43.39,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_18DF9E42_0BD1_915B_415D_DD33CA878B50",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 137.87,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_18D6BE4C_0BD1_916F_4194_A58C9A586C36",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -154.33,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_18CE7E5F_0BD1_916A_419F_2848342EF7F9",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -120.92,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_18C5EE6B_0BD1_912A_4197_9F49B9164EF8",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 23.02,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_183C0E7D_0BD1_9129_41A2_A1F8ED4FFD9A",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 179.05,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1833AE89_0BD1_91E9_418D_7E2DE55D4027",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -113.69,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_18295E93_0BD1_91F9_417C_7580CF0EC92C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -74.62,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_18214EA7_0BD1_91D9_41A4_49B202AB7D61",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 179.73,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_18173EB1_0BD1_9139_4183_1E11ADE89118",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 83.73,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_180FAEC3_0BD1_9159_4176_0AA5D13906F8",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.13,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_18034ED0_0BD1_9176_418E_9CD30FC4B515",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 179.12,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1878CEDA_0BD1_916A_4177_0AECA4634AAA",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.97,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_186D1EEE_0BD1_912B_4194_3AAD26DB8714",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 157.32,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1862EEF8_0BD1_9137_41A6_2118CC85D110",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -66.49,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1858DF0A_0BD1_90EB_4194_3D1AFC7889FE",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 88.16,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_184C8F21_0BD1_90D6_4198_9252D928BFB8",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 36.55,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_18429F35_0BD1_8F3E_41A5_78B2FF0F6711",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -161.66,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1FB69F49_0BD1_8F69_4193_D550CD74924A",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -98.42,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1FAA5F5D_0BD1_8F69_4195_31371A624923",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -72.89,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1FA08F71_0BD1_8F39_41A3_7272047303AF",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -63.6,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1F942F90_0BD1_8FF6_4178_9BB2B82B7694",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -143.15,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1F8A4FA2_0BD1_8FDA_4175_975811F1D832",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 124.16,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1FFE2FB8_0BD1_8F37_41A7_57C05D3C2321",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -8.71,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1FF49FCC_0BD1_8F6F_4191_3DB27399AF9D",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 2.67,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1FE83FE1_0BD1_8F56_41A3_F6D1A3B982B6",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -40.47,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1FDC5FFF_0BD1_8F29_4177_2CB9C93CC4B4",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -172.07,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1FD27011_0BD1_B0F9_4194_905287DFE496",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 157.27,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1FC7F028_0BD1_B0D6_4147_7C514DD8EA60",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 161.08,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1F3C703C_0BD1_B12E_4155_EA48EDB5E726",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -1.55,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1F2E5051_0BD1_B176_412D_6CC4E4BF9D24",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 1.26,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1F21E065_0BD1_B15E_41A7_6CE1F84AAC2D",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 164.93,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1F12B079_0BD1_B129_41A4_7A3AF285A6AB",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -27.04,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1F031083_0BD1_B1D9_4195_62ABD1A8DDA2",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -67.24,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1F76B095_0BD1_B1F9_41A6_29048747EB86",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -39.29,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1F6700A2_0BD1_B1DA_4192_66271BA41234",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 135.89,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1F5A50AC_0BD1_B12E_4186_C99ACE6AB305",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -150.83,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1F4CC0BE_0BD1_B12B_419B_00379EDFD866",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -55.02,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1EBEB0CA_0BD1_B16B_4183_7BAB3D02539A",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -58.27,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1EB0D0D4_0BD1_B17F_4188_3B69D29C2CE2",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 163.25,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1EA180E6_0BD1_B15B_419B_3C93A026869F",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -168.24,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1E9300F3_0BD1_B13A_418E_8CC9F7702326",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -8.52,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1E85F0FD_0BD1_B12E_4186_A27C9BD26414",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 36.86,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1EF8C10F_0BD1_B0EA_418C_767C1FC5F643",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -175.26,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1EE9E11B_0BD1_B0E9_41A6_C4CB1557D510",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -49.86,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1EDA4125_0BD1_B0D9_419E_0E75BE994331",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.65,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1ECDF139_0BD1_B329_415B_6C45403D6CBA",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -178.54,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1E3E4143_0BD1_B359_41A6_01A68B53A1A7",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.73,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1E31914E_0BD1_B36A_4198_BA011107F267",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -167.38,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1E226162_0BD1_B35A_4171_A1457A7F380E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 72.38,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1E15416C_0BD1_B32E_41A4_841E6C441EA6",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -45.59,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1E060176_0BD1_B33A_41A4_42A2A9268F04",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -57.25,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_19D9D1D1_0BD1_B376_4186_D862EE2316F6",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 145.69,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_19D4C1DB_0BD1_B36A_419A_23FC73A265F0",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -23.08,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_19D0C1ED_0BD1_B329_417C_736FAA2C7ED8",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.33,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_19CA51F9_0BD1_B329_4199_09A2FA86C78B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.72,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_19C6B203_0BD1_B0D9_418C_E5BE9E3C2A1C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.36,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_19C04218_0BD1_B0F6_41A4_A915EFB19662",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 1.7,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_193A7222_0BD1_B0DA_41A5_6B349DD18C7E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -92.18,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_19368234_0BD1_B13E_41A5_537B9E722097",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 1.58,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_19309240_0BD1_B157_416F_014B13DCEC30",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 1.98,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_192B624A_0BD1_B16B_4170_AA7516166EA3",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -175.23,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1925625E_0BD1_B16B_4195_431BC05A6CCF",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 33.32,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1921E267_0BD1_B15A_4186_72D6EF87B92B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -98.17,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_191B927B_0BD1_B12A_4197_9E1CB2A75071",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 126.72,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_19159287_0BD1_B1DA_4164_3EDEE9744114",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -30.7,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_19100291_0BD1_B1F9_417F_06A25A2AD252",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 2.01,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_190A32A5_0BD1_B1D9_41A0_01A283C65A23",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 177.31,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_190652AF_0BD1_B129_4186_7007661B59EA",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 25.72,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_1900F2C2_0BD1_B15A_41A0_22F1F0B86510",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -177.47,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_197A02CE_0BD1_B16A_41A7_3C79E3D85D7F",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 81.38,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_197322D8_0BD1_B176_4159_62124C2833F8",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.89,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 }
], "children": [
 {
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
  "toolTipShadowOpacity": 1,
  "toolTipOpacity": 1,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarHeight": 10,
  "toolTipShadowVerticalLength": 0,
  "toolTipTextShadowColor": "#000000",
  "playbackBarHeadWidth": 6,
  "playbackBarHeadShadow": true,
  "toolTipFontStyle": "normal",
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "shadow": false,
  "playbackBarBackgroundColorDirection": "vertical",
  "paddingBottom": 0,
  "playbackBarRight": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBottom": 0,
  "progressBorderSize": 0,
  "progressBarBorderSize": 0,
  "progressBarBorderRadius": 0,
  "playbackBarOpacity": 1,
  "playbackBarProgressBorderRadius": 0,
  "paddingTop": 0,
  "transitionMode": "blending",
  "toolTipShadowSpread": 0,
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 3,
  "toolTipFontColor": "#606060",
  "playbackBarBorderRadius": 0,
  "progressBackgroundOpacity": 1,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipPaddingRight": 6,
  "width": "100%",
  "paddingLeft": 0,
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
  "class": "ViewerArea",
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipPaddingLeft": 6,
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarLeft": 0,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarBorderSize": 0,
  "toolTipBorderRadius": 3,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarHeadHeight": 15,
  "playbackBarHeadShadowHorizontalLength": 0,
  "top": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "minWidth": 100,
  "playbackBarHeadBorderSize": 0,
  "bottom": 0,
  "toolTipFontWeight": "normal",
  "id": "MainViewer",
  "minHeight": 50,
  "progressBarBorderColor": "#000000",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadOpacity": 1,
  "toolTipTextShadowBlurRadius": 3,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressHeight": 10,
  "left": 0,
  "progressBorderColor": "#000000",
  "playbackBarBottom": 5,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "toolTipFontFamily": "Arial",
  "progressOpacity": 1
 },
 {
  "scrollBarColor": "#000000",
  "overflow": "scroll",
  "scrollBarOpacity": 0.5,
  "paddingRight": 0,
  "paddingLeft": 0,
  "height": "50.87%",
  "width": "29.192%",
  "borderRadius": 0,
  "borderSize": 0,
  "gap": 10,
  "contentOpaque": false,
  "layout": "absolute",
  "class": "Container",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "horizontalAlign": "left",
  "top": "0%",
  "paddingBottom": 0,
  "minWidth": 1,
  "shadow": false,
  "id": "Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943",
  "minHeight": 1,
  "paddingTop": 0,
  "left": "0%",
  "backgroundOpacity": 0,
  "children": [
   "this.MapViewer",
   {
    "paddingRight": 0,
    "mode": "push",
    "width": 40,
    "paddingLeft": 0,
    "height": 40,
    "iconURL": "skin/IconButton_1B9387AF_0BF3_BF29_41A2_735AF3FAF9CA.png",
    "transparencyActive": true,
    "borderRadius": 0,
    "borderSize": 0,
    "class": "IconButton",
    "rollOverIconURL": "skin/IconButton_1B9387AF_0BF3_BF29_41A2_735AF3FAF9CA_rollover.png",
    "horizontalAlign": "center",
    "top": "2.72%",
    "click": "this.setComponentVisibility(this.MapViewer, true, 0, this.effect_1AFF4711_0BF1_90F9_41A1_23D8C24525DC, 'showEffect', false); this.setComponentVisibility(this.IconButton_1B68BFAF_0BF1_8F29_4196_2F7F2A2237DB, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_1B9387AF_0BF3_BF29_41A2_735AF3FAF9CA, false, 0, null, null, false)",
    "cursor": "hand",
    "paddingBottom": 0,
    "minWidth": 0,
    "minHeight": 0,
    "shadow": false,
    "id": "IconButton_1B9387AF_0BF3_BF29_41A2_735AF3FAF9CA",
    "paddingTop": 0,
    "pressedIconURL": "skin/IconButton_1B9387AF_0BF3_BF29_41A2_735AF3FAF9CA_pressed.png",
    "backgroundOpacity": 0,
    "right": "0.01%",
    "verticalAlign": "middle"
   },
   {
    "paddingRight": 0,
    "mode": "push",
    "width": 40,
    "paddingLeft": 0,
    "height": 40,
    "iconURL": "skin/IconButton_1B68BFAF_0BF1_8F29_4196_2F7F2A2237DB.png",
    "transparencyActive": true,
    "borderRadius": 0,
    "borderSize": 0,
    "class": "IconButton",
    "rollOverIconURL": "skin/IconButton_1B68BFAF_0BF1_8F29_4196_2F7F2A2237DB_rollover.png",
    "horizontalAlign": "center",
    "top": "2.69%",
    "click": "this.setComponentVisibility(this.MapViewer, false, 0, this.effect_19812A6F_0BF0_9129_41A1_8370DA451C08, 'hideEffect', false); this.setComponentVisibility(this.IconButton_1B68BFAF_0BF1_8F29_4196_2F7F2A2237DB, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_1B9387AF_0BF3_BF29_41A2_735AF3FAF9CA, true, 0, null, null, false)",
    "cursor": "hand",
    "visible": false,
    "paddingBottom": 0,
    "minWidth": 0,
    "minHeight": 0,
    "shadow": false,
    "id": "IconButton_1B68BFAF_0BF1_8F29_4196_2F7F2A2237DB",
    "paddingTop": 0,
    "pressedIconURL": "skin/IconButton_1B68BFAF_0BF1_8F29_4196_2F7F2A2237DB_pressed.png",
    "backgroundOpacity": 0,
    "right": "0.04%",
    "verticalAlign": "middle"
   }
  ],
  "verticalAlign": "top",
  "scrollBarVisible": "rollOver"
 },
 {
  "backgroundColorDirection": "vertical",
  "overflow": "scroll",
  "scrollBarOpacity": 0.5,
  "backgroundColor": [
   "#FFFFFF",
   "#000000",
   "#FFFFFF"
  ],
  "paddingRight": 0,
  "scrollBarColor": "#000000",
  "paddingLeft": 0,
  "height": "99.457%",
  "width": "99.879%",
  "borderRadius": 0,
  "borderSize": 0,
  "gap": 10,
  "contentOpaque": false,
  "layout": "absolute",
  "class": "Container",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "horizontalAlign": "left",
  "top": "0.22%",
  "paddingBottom": 0,
  "minWidth": 1,
  "backgroundColorRatios": [
   0,
   0.4,
   1
  ],
  "id": "Container_1A2848B5_0BF1_913E_41A0_AEBC76BAD483",
  "minHeight": 1,
  "shadow": false,
  "paddingTop": 0,
  "left": "0%",
  "backgroundOpacity": 0.15,
  "children": [
   {
    "paddingRight": 0,
    "paddingLeft": 0,
    "height": "100%",
    "width": "97.041%",
    "borderRadius": 0,
    "borderSize": 0,
    "url": "skin/Image_19B2F4BC_0BF1_B12F_419C_772DA37A7B15.jpg",
    "class": "Image",
    "horizontalAlign": "center",
    "scaleMode": "fit_inside",
    "click": "eval('var frame=+location.search.replace(\"?\", \"\");if (!frame) {frame = 0;}if (typeof setMediaByIndex === \"function\") {setMediaByIndex(frame);}');; this.setComponentVisibility(this.Container_1A2848B5_0BF1_913E_41A0_AEBC76BAD483, false, 0, null, null, false)",
    "top": "0%",
    "paddingBottom": 0,
    "maxHeight": 1000,
    "minWidth": 1,
    "shadow": false,
    "id": "Image_19B2F4BC_0BF1_B12F_419C_772DA37A7B15",
    "minHeight": 1,
    "paddingTop": 0,
    "backgroundOpacity": 0,
    "right": "0.66%",
    "verticalAlign": "middle"
   }
  ],
  "verticalAlign": "top",
  "scrollBarVisible": "rollOver"
 }
], 
 "overflow": "visible",
 "scrollBarOpacity": 0.5,
 "mouseWheelEnabled": true,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "height": "100%",
 "width": "100%",
 "borderRadius": 0,
 "borderSize": 0,
 "gap": 10,
 "contentOpaque": false,
 "layout": "absolute",
 "class": "Player",
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "backgroundPreloadEnabled": true,
 "paddingBottom": 0,
 "minWidth": 20,
 "scripts": {
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "unregisterKey": function(key){  delete window[key]; },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "registerKey": function(key, value){  window[key] = value; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "existsKey": function(key){  return key in window; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "getKey": function(key){  return window[key]; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } }
 },
 "id": "rootPlayer",
 "minHeight": 20,
 "vrPolyfillScale": 1,
 "shadow": false,
 "paddingTop": 0,
 "start": "this.mainPlayList.set('selectedIndex', 0); this.playList_18BBDD98_0BD1_93F6_4185_A5D1C516211E.set('selectedIndex', 0)",
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver"
})