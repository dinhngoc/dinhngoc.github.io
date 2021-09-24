TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMax": 120,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 88,
           "width": 78,
           "url": "media/panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D_0_HS_0_0_0_map.gif",
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
      "id": "overlay_3BC93817_0791_6C7A_418F_0EA64F0A4B5B",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_1AD5685C_15B5_B85C_41AA_2D612CDAB2FD); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": -174.74,
        "pitch": -0.44,
        "hfov": 11.3,
        "image": {
         "levels": [
          {
           "height": 177,
           "width": 156,
           "url": "media/panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage"
       }
      ]
     },
     {
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
      "id": "overlay_305C5588_0793_2456_418A_8A6507C5DC0F",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": -174.68,
        "pitch": -6.59,
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
        "class": "HotspotPanoramaOverlayImage"
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
  "mapLocations": [
   {
    "x": 1022.77,
    "class": "PanoramaMapLocation",
    "y": 832.35,
    "angle": 170.51,
    "map": {
     "initialZoomFactor": 1,
     "fieldOfViewOverlayInsideColor": "#009966",
     "fieldOfViewOverlayInsideOpacity": 0.27,
     "width": 1832,
     "id": "map_04171D1A_107E_8278_4197_9875AF5B32BE",
     "height": 1291,
     "minimumZoomFactor": 0.5,
     "image": {
      "levels": [
       {
        "height": 1127,
        "width": 1600,
        "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE.png",
        "class": "ImageResourceLevel"
       },
       {
        "height": 563,
        "width": 800,
        "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_lq.png",
        "class": "ImageResourceLevel",
        "grayscale": true
       }
      ],
      "class": "ImageResource"
     },
     "fieldOfViewOverlayOutsideColor": "#00FF99",
     "thumbnailUrl": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_t.png",
     "fieldOfViewOverlayOutsideOpacity": 0,
     "label": "FloorPlan",
     "overlays": [
      {
       "id": "overlay_04170D1A_107E_8278_4187_A18E09DA2DDE",
       "map": {
        "offsetY": 0,
        "x": 565.16,
        "width": 30,
        "y": 401.05,
        "height": 47.91,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 20,
           "width": 13,
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_0_map.gif",
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
        "x": 565.16,
        "class": "HotspotMapOverlayImage",
        "y": 401,
        "width": 30,
        "height": 47.91,
        "image": {
         "levels": [
          {
           "height": 41,
           "width": 26,
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_0.png",
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
       "id": "overlay_04173D1A_107E_8278_4191_986A08F23E08",
       "map": {
        "offsetY": 0,
        "x": 622.55,
        "width": 30,
        "y": 432.09,
        "height": 42.29,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 18,
           "width": 13,
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_1_map.gif",
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
        "x": 622.49,
        "class": "HotspotMapOverlayImage",
        "y": 432.09,
        "width": 30,
        "height": 42.29,
        "image": {
         "levels": [
          {
           "height": 36,
           "width": 26,
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_1.png",
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
       "id": "overlay_04172D1A_107E_8278_4194_33D3CE428AB1",
       "map": {
        "offsetY": 0,
        "x": 680.64,
        "width": 30,
        "y": 458.97,
        "height": 45.33,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 19,
           "width": 13,
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_2_map.gif",
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
        "x": 680.62,
        "class": "HotspotMapOverlayImage",
        "y": 458.92,
        "width": 30,
        "height": 45.33,
        "image": {
         "levels": [
          {
           "height": 39,
           "width": 26,
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_2.png",
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
       "id": "overlay_04175D1A_107E_8278_416C_E94CEC26B852",
       "map": {
        "offsetY": 0,
        "x": 735.11,
        "width": 30,
        "y": 488.82,
        "height": 44,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 19,
           "width": 13,
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_3_map.gif",
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
        "x": 735.08,
        "class": "HotspotMapOverlayImage",
        "y": 488.78,
        "width": 30,
        "height": 44,
        "image": {
         "levels": [
          {
           "height": 38,
           "width": 26,
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_3.png",
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
       "id": "overlay_04174D1A_107E_8278_4180_10D7F38B245C",
       "map": {
        "offsetY": 0,
        "x": 799.54,
        "width": 30,
        "y": 523.8,
        "height": 30,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 13,
           "width": 13,
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_4_map.gif",
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
        "x": 799.48,
        "class": "HotspotMapOverlayImage",
        "y": 523.76,
        "width": 30,
        "height": 30,
        "image": {
         "levels": [
          {
           "height": 26,
           "width": 26,
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_4.png",
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
       "id": "overlay_04176D1B_107E_8278_41B0_BA881B76259B",
       "map": {
        "offsetY": 0,
        "x": 862.86,
        "width": 30,
        "y": 547.53,
        "height": 41.63,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 18,
           "width": 13,
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_5_map.gif",
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
        "x": 862.81,
        "class": "HotspotMapOverlayImage",
        "y": 547.48,
        "width": 30,
        "height": 41.63,
        "image": {
         "levels": [
          {
           "height": 36,
           "width": 26,
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_5.png",
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
       "id": "overlay_04169D1B_107E_8278_41A6_EB3D534D2F2B",
       "map": {
        "offsetY": 0,
        "x": 897.88,
        "width": 31.95,
        "y": 590.04,
        "height": 41.12,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 17,
           "width": 13,
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_6_map.gif",
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
        "x": 897.86,
        "class": "HotspotMapOverlayImage",
        "y": 590.04,
        "width": 31.95,
        "height": 41.12,
        "image": {
         "levels": [
          {
           "height": 35,
           "width": 27,
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_6.png",
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
       "id": "overlay_04168D1B_107E_8278_4181_7D9B1E08F2D2",
       "map": {
        "offsetY": 0,
        "x": 960.05,
        "width": 30,
        "y": 540.54,
        "height": 30,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 13,
           "width": 13,
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_7_map.gif",
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
        "x": 960.03,
        "class": "HotspotMapOverlayImage",
        "y": 540.49,
        "width": 30,
        "height": 30,
        "image": {
         "levels": [
          {
           "height": 26,
           "width": 26,
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_7.png",
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
       "id": "overlay_0416BD1B_107E_8278_41AA_BA5FC9F9FA15",
       "map": {
        "offsetY": 0,
        "x": 1005.71,
        "width": 30,
        "y": 477.75,
        "height": 42,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 18,
           "width": 13,
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_8_map.gif",
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
        "x": 1005.68,
        "class": "HotspotMapOverlayImage",
        "y": 477.74,
        "width": 30,
        "height": 42,
        "image": {
         "levels": [
          {
           "height": 36,
           "width": 26,
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_8.png",
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
       "id": "overlay_0416CD1B_107E_8278_41AE_8DC0019B370A",
       "map": {
        "offsetY": 0,
        "x": 1034.54,
        "width": 30,
        "y": 585.75,
        "height": 42.18,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 18,
           "width": 13,
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_9_map.gif",
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
        "x": 1034.53,
        "class": "HotspotMapOverlayImage",
        "y": 585.71,
        "width": 30,
        "height": 42.18,
        "image": {
         "levels": [
          {
           "height": 36,
           "width": 26,
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_9.png",
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
       "id": "overlay_0416FD1B_107E_8278_41AF_1298D7350757",
       "map": {
        "offsetY": 0,
        "x": 1105.65,
        "width": 30,
        "y": 590.18,
        "height": 43,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 18,
           "width": 13,
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_10_map.gif",
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
        "x": 1105.64,
        "class": "HotspotMapOverlayImage",
        "y": 590.11,
        "width": 30,
        "height": 43,
        "image": {
         "levels": [
          {
           "height": 37,
           "width": 26,
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_10.png",
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
       "id": "overlay_0416ED1B_107E_8278_418E_ED976FE6EF6F",
       "map": {
        "offsetY": 0,
        "x": 1185.27,
        "width": 30,
        "y": 596.42,
        "height": 44,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 19,
           "width": 13,
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_11_map.gif",
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
        "x": 1185.2,
        "class": "HotspotMapOverlayImage",
        "y": 596.38,
        "width": 30,
        "height": 44,
        "image": {
         "levels": [
          {
           "height": 38,
           "width": 26,
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_11.png",
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
       "id": "overlay_04160D1B_107E_8278_41AA_A49F6E8699C8",
       "map": {
        "offsetY": 0,
        "x": 1233.62,
        "width": 30.02,
        "y": 601.82,
        "height": 42.04,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 18,
           "width": 13,
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_12_map.gif",
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
        "x": 1233.59,
        "class": "HotspotMapOverlayImage",
        "y": 601.79,
        "width": 30.02,
        "height": 42.04,
        "image": {
         "levels": [
          {
           "height": 36,
           "width": 26,
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_12.png",
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
       "id": "overlay_04163D1B_107E_8278_41AF_3D0826F34423",
       "map": {
        "offsetY": 0,
        "x": 1280.12,
        "width": 30,
        "y": 608.91,
        "height": 30,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 13,
           "width": 13,
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_13_map.gif",
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
        "x": 1280.11,
        "class": "HotspotMapOverlayImage",
        "y": 608.86,
        "width": 30,
        "height": 30,
        "image": {
         "levels": [
          {
           "height": 26,
           "width": 26,
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_13.png",
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
       "id": "overlay_04162D1B_107E_8278_4198_39D6CEC3B0F0",
       "map": {
        "offsetY": 0,
        "x": 1341.98,
        "width": 30,
        "y": 605.72,
        "height": 41.81,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 18,
           "width": 13,
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_14_map.gif",
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
        "x": 1341.92,
        "class": "HotspotMapOverlayImage",
        "y": 605.69,
        "width": 30,
        "height": 41.81,
        "image": {
         "levels": [
          {
           "height": 36,
           "width": 26,
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_14.png",
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
       "id": "overlay_04167D1B_107E_8278_41A0_87F2806C6E62",
       "map": {
        "offsetY": 0,
        "x": 1009.21,
        "width": 30,
        "y": 666.3,
        "height": 30,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 13,
           "width": 13,
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_15_map.gif",
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
        "x": 1009.14,
        "class": "HotspotMapOverlayImage",
        "y": 666.27,
        "width": 30,
        "height": 30,
        "image": {
         "levels": [
          {
           "height": 26,
           "width": 26,
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_15.png",
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
       "id": "overlay_04166D1B_107E_8278_41AE_16A37D4CC6E2",
       "map": {
        "offsetY": 0,
        "x": 1001.24,
        "width": 30,
        "y": 698.75,
        "height": 42.29,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 18,
           "width": 13,
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_16_map.gif",
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
        "x": 1001.21,
        "class": "HotspotMapOverlayImage",
        "y": 698.73,
        "width": 30,
        "height": 42.29,
        "image": {
         "levels": [
          {
           "height": 36,
           "width": 26,
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_16.png",
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
       "id": "overlay_04159D1B_107E_8278_41A4_37C4AA2BA6CC",
       "map": {
        "offsetY": 0,
        "x": 994.55,
        "width": 30,
        "y": 757.12,
        "height": 30,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 13,
           "width": 13,
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_17_map.gif",
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
        "x": 994.5,
        "class": "HotspotMapOverlayImage",
        "y": 757.07,
        "width": 30,
        "height": 30,
        "image": {
         "levels": [
          {
           "height": 26,
           "width": 26,
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_17.png",
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
       "id": "overlay_0415BD1B_107E_8278_418E_97557A0862E9",
       "map": {
        "offsetY": 0,
        "x": 1007.79,
        "width": 30,
        "y": 809.23,
        "height": 46.26,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 20,
           "width": 13,
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_18_map.gif",
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
        "x": 1007.77,
        "class": "HotspotMapOverlayImage",
        "y": 809.22,
        "width": 30,
        "height": 46.26,
        "image": {
         "levels": [
          {
           "height": 40,
           "width": 26,
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_18.png",
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
       "id": "overlay_0415AD1B_107E_8278_41AC_30B7F7C6821A",
       "map": {
        "offsetY": 0,
        "x": 959.57,
        "width": 29.8,
        "y": 701.68,
        "height": 42.94,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 18,
           "width": 13,
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_19_map.gif",
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
        "x": 959.52,
        "class": "HotspotMapOverlayImage",
        "y": 701.61,
        "width": 29.8,
        "height": 42.94,
        "image": {
         "levels": [
          {
           "height": 37,
           "width": 26,
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_19.png",
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
       "id": "overlay_0415DD1B_107E_8278_4190_C17CD3ADB853",
       "map": {
        "offsetY": 0,
        "x": 948.63,
        "width": 30,
        "y": 651.86,
        "height": 46.79,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 20,
           "width": 13,
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_20_map.gif",
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
        "x": 948.56,
        "class": "HotspotMapOverlayImage",
        "y": 651.85,
        "width": 30,
        "height": 46.79,
        "image": {
         "levels": [
          {
           "height": 40,
           "width": 26,
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_20.png",
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
       "id": "overlay_0415FD1B_107E_8278_4186_267461C29CD9",
       "map": {
        "offsetY": 0,
        "x": 910.37,
        "width": 30,
        "y": 705.53,
        "height": 46.39,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 20,
           "width": 13,
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_21_map.gif",
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
        "x": 910.34,
        "class": "HotspotMapOverlayImage",
        "y": 705.51,
        "width": 30,
        "height": 46.39,
        "image": {
         "levels": [
          {
           "height": 40,
           "width": 26,
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_21.png",
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
       "id": "overlay_0415ED1C_107E_8278_418F_803D5C1425DD",
       "map": {
        "offsetY": 0,
        "x": 874.86,
        "width": 30,
        "y": 720.41,
        "height": 45.56,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 19,
           "width": 13,
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_22_map.gif",
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
        "x": 874.85,
        "class": "HotspotMapOverlayImage",
        "y": 720.36,
        "width": 30,
        "height": 45.56,
        "image": {
         "levels": [
          {
           "height": 39,
           "width": 26,
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_22.png",
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
  "cardboardMenu": {
   "selectedBackgroundColor": "#202020",
   "fontFamily": "Arial",
   "rollOverBackgroundColor": "#000000",
   "label": "Media",
   "backgroundColor": "#404040",
   "rollOverFontColor": "#FFFFFF",
   "opacity": 0.4,
   "id": "Menu_183372DF_15B5_485C_4183_BACB2E49FC28",
   "rollOverOpacity": 0.8,
   "selectedFontColor": "#FFFFFF",
   "children": [
    {
     "label": "C20",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 0)"
    },
    {
     "label": "C19",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 1)"
    },
    {
     "label": "C18",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 2)"
    },
    {
     "label": "C17",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 3)"
    },
    {
     "label": "C10",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 4)"
    },
    {
     "label": "C11",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 5)"
    },
    {
     "label": "C12",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 6)"
    },
    {
     "label": "C13",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 7)"
    },
    {
     "label": "C14",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 8)"
    },
    {
     "label": "C15",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 9)"
    },
    {
     "label": "C09",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 10)"
    },
    {
     "label": "C08",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 11)"
    },
    {
     "label": "C07",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 12)"
    },
    {
     "label": "C06",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 13)"
    },
    {
     "label": "C05",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 14)"
    },
    {
     "label": "C04",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 15)"
    },
    {
     "label": "C03",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 16)"
    },
    {
     "label": "C02",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 17)"
    },
    {
     "label": "C01",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 18)"
    },
    {
     "label": "C16",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 19)"
    },
    {
     "label": "C23",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 20)"
    },
    {
     "label": "C22",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 21)"
    },
    {
     "label": "C21",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 22)"
    }
   ],
   "fontColor": "#FFFFFF",
   "class": "Menu"
  },
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D_t.jpg",
  "id": "panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D",
  "hfovMin": 60,
  "label": "C20",
  "hfov": 360,
  "adjacentPanoramas": [
   {
    "panorama": {
     "hfovMax": 120,
     "frames": [
      {
       "thumbnailUrl": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_t.jpg",
       "overlays": [
        {
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 41,
              "width": 35,
              "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 5.09,
           "yaw": 5.89,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -0.32
          }
         ],
         "id": "overlay_3E3B8D53_0793_24FA_4187_9D3A8F1D1D8B",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.mainPlayList.set('selectedIndex', 10)"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": 5.89,
           "pitch": -0.32,
           "hfov": 5.09,
           "image": {
            "levels": [
             {
              "height": 83,
              "width": 70,
              "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage"
          }
         ]
        },
        {
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 16,
              "width": 24,
              "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_1_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 4.94,
           "yaw": 5.83,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -3.54
          }
         ],
         "id": "overlay_3B323082_0791_1C5A_416C_891FD9C1AFF8",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": 5.83,
           "pitch": -3.54,
           "hfov": 4.94,
           "image": {
            "levels": [
             {
              "height": 45,
              "width": 68,
              "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage"
          }
         ]
        },
        {
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 115,
              "width": 76,
              "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_2_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 10.89,
           "yaw": 29.17,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -6.91
          }
         ],
         "id": "overlay_33ADB319_0791_1C76_4194_3AD41C851323",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_1830C5FC_15B5_4863_41B3_4A161E76C7CD); this.mainPlayList.set('selectedIndex', 2)"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": 29.17,
           "pitch": -6.91,
           "hfov": 10.89,
           "image": {
            "levels": [
             {
              "height": 230,
              "width": 152,
              "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_2_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage"
          }
         ]
        },
        {
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
         "id": "overlay_33D2C3E4_078F_23DE_417D_A6B689D41EEC",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": 28.93,
           "pitch": -13.39,
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
           "class": "HotspotPanoramaOverlayImage"
          }
         ]
        },
        {
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 83,
              "width": 59,
              "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_4_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 8.57,
           "yaw": 18.34,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -2.39
          }
         ],
         "id": "overlay_3B68623F_078F_FCAA_4115_F9A6F52B8B88",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_183DD608_15B5_4BA4_4128_FBF63FB1CC20); this.mainPlayList.set('selectedIndex', 3)"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": 18.34,
           "pitch": -2.39,
           "hfov": 8.57,
           "image": {
            "levels": [
             {
              "height": 166,
              "width": 119,
              "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_4_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage"
          }
         ]
        },
        {
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 16,
              "width": 25,
              "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_5_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 7.19,
           "yaw": 18.77,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -8.2
          }
         ],
         "id": "overlay_3FBEE0F4_078F_1DBE_417F_7F3C0E1C77B9",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": 18.77,
           "pitch": -8.2,
           "hfov": 7.19,
           "image": {
            "levels": [
             {
              "height": 62,
              "width": 100,
              "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_5_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage"
          }
         ]
        },
        {
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 147,
              "width": 130,
              "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_6_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 18.67,
           "yaw": -53.28,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -6.56
          }
         ],
         "id": "overlay_320E5953_07F1_2CFB_4198_E69AA92B2C0B",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_181C6630_15B5_4BE4_41A9_8E1B9FB05598); this.mainPlayList.set('selectedIndex', 20)"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": -53.28,
           "pitch": -6.56,
           "hfov": 18.67,
           "image": {
            "levels": [
             {
              "height": 295,
              "width": 261,
              "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_6_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage"
          }
         ]
        },
        {
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
         "id": "overlay_32A61C12_07F3_647A_4188_FF9DAE655EAC",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": -54.01,
           "pitch": -16.02,
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
           "class": "HotspotPanoramaOverlayImage"
          }
         ]
        },
        {
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 83,
              "width": 93,
              "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_8_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 13.52,
           "yaw": -34.31,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -0.66
          }
         ],
         "id": "overlay_3EC875E4_07F3_67DE_419C_0D8FCC133A45",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_1811F61C_15B5_4BDC_41A2_671A21DDA676); this.mainPlayList.set('selectedIndex', 19)"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": -34.31,
           "pitch": -0.66,
           "hfov": 13.52,
           "image": {
            "levels": [
             {
              "height": 166,
              "width": 187,
              "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_8_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage"
          }
         ]
        },
        {
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 16,
              "width": 24,
              "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_9_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 7.25,
           "yaw": -33.66,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -5.59
          }
         ],
         "id": "overlay_31996F4E_07F1_24EA_419A_EEA7DD65B1C6",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": -33.66,
           "pitch": -5.59,
           "hfov": 7.25,
           "image": {
            "levels": [
             {
              "height": 66,
              "width": 101,
              "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_9_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage"
          }
         ]
        },
        {
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 51,
              "width": 33,
              "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_10_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 4.82,
           "yaw": -22.73,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": 0.95
          }
         ],
         "id": "overlay_3DF559C6_07F7_2FDA_4174_D608913B20E5",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_182AA612_15B5_4BA4_41AB_27F3630E59BC); this.mainPlayList.set('selectedIndex', 12)"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": -22.73,
           "pitch": 0.95,
           "hfov": 4.82,
           "image": {
            "levels": [
             {
              "height": 103,
              "width": 66,
              "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_10_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage"
          }
         ]
        },
        {
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 16,
              "width": 23,
              "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_11_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 5.74,
           "yaw": -22.49,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -2.41
          }
         ],
         "id": "overlay_3D38EF6C_07F7_E4AE_4195_5AB8257757E6",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": -22.49,
           "pitch": -2.41,
           "hfov": 5.74,
           "image": {
            "levels": [
             {
              "height": 53,
              "width": 79,
              "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_11_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage"
          }
         ]
        },
        {
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 31,
              "width": 30,
              "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_12_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 4.45,
           "yaw": -11.81,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": 0.61
          }
         ],
         "id": "overlay_3057C0B3_07F1_FDBA_419A_E7F4D38B825B",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.mainPlayList.set('selectedIndex', 11)"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": -11.81,
           "pitch": 0.61,
           "hfov": 4.45,
           "image": {
            "levels": [
             {
              "height": 63,
              "width": 61,
              "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_12_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage"
          }
         ]
        },
        {
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 16,
              "width": 25,
              "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_13_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 4.95,
           "yaw": -11.93,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -1.66
          }
         ],
         "id": "overlay_3869236A_07F1_1CAA_416D_FDE79EB0341C",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": -11.93,
           "pitch": -1.66,
           "hfov": 4.95,
           "image": {
            "levels": [
             {
              "height": 42,
              "width": 68,
              "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_13_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage"
          }
         ]
        },
        {
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 107,
              "width": 88,
              "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_14_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 12.8,
           "yaw": 168.9,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": 2.09
          }
         ],
         "id": "overlay_05D41018_12AB_46B7_41A1_DDBF885F6640",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D, this.camera_1808263A_15B5_4BE4_41B5_A6D8F0E0BAB3); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": 168.9,
           "pitch": 2.09,
           "hfov": 12.8,
           "image": {
            "levels": [
             {
              "height": 214,
              "width": 177,
              "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_14_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage"
          }
         ]
        },
        {
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
         "id": "overlay_0ADD07F7_12A8_C979_419E_40680DB583A7",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "items": [
          {
           "yaw": 168.89,
           "pitch": -5.96,
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
           "class": "HotspotPanoramaOverlayImage"
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
     "mapLocations": [
      {
       "x": 1009.5,
       "class": "PanoramaMapLocation",
       "y": 772.07,
       "angle": 0,
       "map": "this.map_04171D1A_107E_8278_4197_9875AF5B32BE"
      }
     ],
     "cardboardMenu": "this.Menu_183372DF_15B5_485C_4183_BACB2E49FC28",
     "partial": false,
     "pitch": 0,
     "thumbnailUrl": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_t.jpg",
     "id": "panorama_0F84F19D_0671_6675_4191_5761B2287855",
     "hfovMin": 60,
     "label": "C19",
     "hfov": 360,
     "adjacentPanoramas": [
      {
       "panorama": {
        "hfovMax": 120,
        "frames": [
         {
          "thumbnailUrl": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_t.jpg",
          "overlays": [
           {
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 62,
                 "width": 57,
                 "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_0_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 8.33,
              "yaw": -171.11,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": 0.49
             }
            ],
            "id": "overlay_3D896377_07F1_3CBA_4196_6B85D37E8066",
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82, this.camera_186083D6_15B5_48AC_41B0_9AF75298D38D); this.mainPlayList.set('selectedIndex', 10)"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": -171.11,
              "pitch": 0.49,
              "hfov": 8.33,
              "image": {
               "levels": [
                {
                 "height": 125,
                 "width": 115,
                 "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage"
             }
            ]
           },
           {
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 16,
                 "width": 25,
                 "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_1_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 5.8,
              "yaw": -171.22,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -3.9
             }
            ],
            "id": "overlay_3DDB42AD_07F1_7DAE_417C_3217DBA16CA0",
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": -171.22,
              "pitch": -3.9,
              "hfov": 5.8,
              "image": {
               "levels": [
                {
                 "height": 50,
                 "width": 80,
                 "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_1_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage"
             }
            ]
           },
           {
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 77,
                 "width": 51,
                 "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_2_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 7.37,
              "yaw": -156.98,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": 0.2
             }
            ],
            "id": "overlay_30B29713_07FF_647A_4195_98CB1B9AE925",
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_1BA2944A_15B5_4FA4_41A5_2225B3D8B856); this.mainPlayList.set('selectedIndex', 4)"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": -156.98,
              "pitch": 0.2,
              "hfov": 7.37,
              "image": {
               "levels": [
                {
                 "height": 154,
                 "width": 102,
                 "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_2_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage"
             }
            ]
           },
           {
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 16,
                 "width": 29,
                 "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_3_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 6.39,
              "yaw": -157.08,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -4.48
             }
            ],
            "id": "overlay_471BF631_07F1_64B6_4179_076F9D5C7C81",
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": -157.08,
              "pitch": -4.48,
              "hfov": 6.39,
              "image": {
               "levels": [
                {
                 "height": 48,
                 "width": 89,
                 "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_3_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage"
             }
            ]
           },
           {
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 97,
                 "width": 80,
                 "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_4_0_0_map.gif",
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
            "id": "overlay_3A437876_07F3_2CBA_4181_B5A3247326F7",
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_185E140C_15B5_4FBC_41A1_61B0DF7F1258); this.mainPlayList.set('selectedIndex', 3)"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": -143.45,
              "pitch": 0.45,
              "hfov": 11.58,
              "image": {
               "levels": [
                {
                 "height": 195,
                 "width": 160,
                 "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_4_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage"
             }
            ]
           },
           {
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
            "id": "overlay_3F187E51_07F3_24F6_4184_039DFE14256A",
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": -143.5,
              "pitch": -6.13,
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
              "class": "HotspotPanoramaOverlayImage"
             }
            ]
           },
           {
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 76,
                 "width": 73,
                 "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_6_0_0_map.gif",
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
            "id": "overlay_3D40439D_07F1_1C6E_417C_39C62324FAAA",
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_186873E6_15B5_486C_41B1_0ED65CD01CBB); this.mainPlayList.set('selectedIndex', 1)"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": 7.69,
              "pitch": 0.41,
              "hfov": 10.6,
              "image": {
               "levels": [
                {
                 "height": 152,
                 "width": 147,
                 "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_6_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage"
             }
            ]
           },
           {
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
            "id": "overlay_3B75B8EC_07F7_6DAE_4194_C7A60FEE48CD",
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": 7.47,
              "pitch": -4.9,
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
              "class": "HotspotPanoramaOverlayImage"
             }
            ]
           },
           {
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 56,
                 "width": 77,
                 "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_8_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 11.12,
              "yaw": 139.53,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": 0.07
             }
            ],
            "id": "overlay_3F97BC8D_07F0_E46E_4193_CFB84B9D9D04",
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_184AF42B_15B5_4FE4_41A2_87C586112C8E); this.mainPlayList.set('selectedIndex', 12)"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": 139.53,
              "pitch": 0.07,
              "hfov": 11.12,
              "image": {
               "levels": [
                {
                 "height": 113,
                 "width": 154,
                 "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_8_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage"
             }
            ]
           },
           {
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 16,
                 "width": 26,
                 "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_9_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 6.85,
              "yaw": 139.29,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -4.35
             }
            ],
            "id": "overlay_3FD40B45_07F1_2CDE_4191_E116460D8792",
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": 139.29,
              "pitch": -4.35,
              "hfov": 6.85,
              "image": {
               "levels": [
                {
                 "height": 57,
                 "width": 95,
                 "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_9_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage"
             }
            ]
           },
           {
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 79,
                 "width": 71,
                 "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_10_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 10.33,
              "yaw": 122.75,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -2.21
             }
            ],
            "id": "overlay_3BBEDA8D_07F1_2C6E_4176_E7A74D97365E",
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_185633FC_15B5_485C_41A7_E61E3DFAE836); this.mainPlayList.set('selectedIndex', 19)"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": 122.75,
              "pitch": -2.21,
              "hfov": 10.33,
              "image": {
               "levels": [
                {
                 "height": 158,
                 "width": 143,
                 "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_10_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage"
             }
            ]
           },
           {
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 16,
                 "width": 28,
                 "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_11_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 9.97,
              "yaw": 123.38,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -7.86
             }
            ],
            "id": "overlay_3E80029C_07F3_7C6E_4197_A7D5C07DE7E8",
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": 123.38,
              "pitch": -7.86,
              "hfov": 9.97,
              "image": {
               "levels": [
                {
                 "height": 79,
                 "width": 139,
                 "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_11_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage"
             }
            ]
           },
           {
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 91,
                 "width": 93,
                 "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_12_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 13.43,
              "yaw": 81.83,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -3.02
             }
            ],
            "id": "overlay_3E9CAFB2_07F1_63BA_4187_5BB18F2E2D6C",
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_1BADD45A_15B5_4FA4_41B4_AC2ADC55C70F); this.mainPlayList.set('selectedIndex', 20)"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": 81.83,
              "pitch": -3.02,
              "hfov": 13.43,
              "image": {
               "levels": [
                {
                 "height": 182,
                 "width": 186,
                 "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_12_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage"
             }
            ]
           },
           {
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 16,
                 "width": 23,
                 "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_13_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 8.1,
              "yaw": 82.04,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -9.23
             }
            ],
            "id": "overlay_3C63BEBB_078F_25AA_4191_DE10C64B795B",
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": 82.04,
              "pitch": -9.23,
              "hfov": 8.1,
              "image": {
               "levels": [
                {
                 "height": 77,
                 "width": 113,
                 "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_13_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage"
             }
            ]
           },
           {
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 57,
                 "width": 58,
                 "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_14_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 8.47,
              "yaw": 171.48,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": 0.13
             }
            ],
            "id": "overlay_3E9F1C95_0790_E47E_417B_80352FF053CC",
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_1BB7B43B_15B5_4FE5_41B1_874D9D86ADAF); this.mainPlayList.set('selectedIndex', 11)"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": 171.48,
              "pitch": 0.13,
              "hfov": 8.47,
              "image": {
               "levels": [
                {
                 "height": 115,
                 "width": 117,
                 "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_14_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage"
             }
            ]
           },
           {
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 16,
                 "width": 26,
                 "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_15_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 6.22,
              "yaw": 171.5,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -4.38
             }
            ],
            "id": "overlay_3D26B6FA_0791_25AA_4194_6DF41F112E9C",
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "items": [
             {
              "yaw": 171.5,
              "pitch": -4.38,
              "hfov": 6.22,
              "image": {
               "levels": [
                {
                 "height": 51,
                 "width": 86,
                 "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_15_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage"
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
        "mapLocations": [
         {
          "x": 1016.21,
          "class": "PanoramaMapLocation",
          "y": 719.87,
          "angle": 170.04,
          "map": "this.map_04171D1A_107E_8278_4197_9875AF5B32BE"
         }
        ],
        "cardboardMenu": "this.Menu_183372DF_15B5_485C_4183_BACB2E49FC28",
        "partial": false,
        "pitch": 0,
        "thumbnailUrl": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_t.jpg",
        "id": "panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
        "hfovMin": 60,
        "label": "C18",
        "hfov": 360,
        "adjacentPanoramas": [
         {
          "panorama": {
           "hfovMax": 120,
           "frames": [
            {
             "thumbnailUrl": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_t.jpg",
             "overlays": [
              {
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "height": 42,
                    "width": 37,
                    "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_0_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 5.56,
                 "yaw": 105.38,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": 0.66
                }
               ],
               "id": "overlay_1E557066_06B1_FCDA_4191_0771B40B46DF",
               "useHandCursor": true,
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_18D465CC_15B5_48BC_4191_5D3008F8AC88); this.mainPlayList.set('selectedIndex', 4)"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": 105.38,
                 "pitch": 0.66,
                 "hfov": 5.56,
                 "image": {
                  "levels": [
                   {
                    "height": 84,
                    "width": 75,
                    "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayImage"
                }
               ]
              },
              {
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "height": 16,
                    "width": 24,
                    "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_1_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 6.77,
                 "yaw": 105.71,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -3.51
                }
               ],
               "id": "overlay_1E6BC9CE_06B0_EFEA_4194_3DB640A87052",
               "useHandCursor": true,
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": 105.71,
                 "pitch": -3.51,
                 "hfov": 6.77,
                 "image": {
                  "levels": [
                   {
                    "height": 59,
                    "width": 92,
                    "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_1_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayImage"
                }
               ]
              },
              {
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "height": 36,
                    "width": 32,
                    "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_2_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 4.85,
                 "yaw": 116.4,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": 1.05
                }
               ],
               "id": "overlay_1FA961C0_068F_FFD6_4187_D2C8F16F2FF8",
               "useHandCursor": true,
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_18C9F5EB_15B5_4864_4161_6EF7D5B83D42); this.mainPlayList.set('selectedIndex', 3)"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": 116.4,
                 "pitch": 1.05,
                 "hfov": 4.85,
                 "image": {
                  "levels": [
                   {
                    "height": 72,
                    "width": 65,
                    "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_2_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayImage"
                }
               ]
              },
              {
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "height": 16,
                    "width": 26,
                    "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_3_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 6.2,
                 "yaw": 116.87,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -2.03
                }
               ],
               "id": "overlay_1DFE33B1_0691_63B6_416C_46BDA8C7F5D9",
               "useHandCursor": true,
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": 116.87,
                 "pitch": -2.03,
                 "hfov": 6.2,
                 "image": {
                  "levels": [
                   {
                    "height": 51,
                    "width": 84,
                    "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_3_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayImage"
                }
               ]
              },
              {
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "height": 32,
                    "width": 35,
                    "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_4_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 5.2,
                 "yaw": 121.73,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": 1.1
                }
               ],
               "id": "overlay_1C1E18E0_0693_2DD6_4185_66053E805808",
               "useHandCursor": true,
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_18C335DB_15B5_48A4_4194_000A70D0FC4B); this.mainPlayList.set('selectedIndex', 2)"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": 121.73,
                 "pitch": 1.1,
                 "hfov": 5.2,
                 "image": {
                  "levels": [
                   {
                    "height": 65,
                    "width": 70,
                    "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_4_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayImage"
                }
               ]
              },
              {
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "height": 16,
                    "width": 24,
                    "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_5_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 4.74,
                 "yaw": 121.85,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -1.12
                }
               ],
               "id": "overlay_1A8360BA_0693_3DAA_4197_01959E37D013",
               "useHandCursor": true,
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": 121.85,
                 "pitch": -1.12,
                 "hfov": 4.74,
                 "image": {
                  "levels": [
                   {
                    "height": 42,
                    "width": 64,
                    "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_5_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayImage"
                }
               ]
              },
              {
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "height": 35,
                    "width": 36,
                    "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_6_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 5.41,
                 "yaw": 130.14,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": 0.09
                }
               ],
               "id": "overlay_1F9A2A07_0691_EC5A_4197_D42F6DB80195",
               "useHandCursor": true,
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_18EE75BC_15B5_48DC_4195_E20216380023); this.mainPlayList.set('selectedIndex', 11)"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": 130.14,
                 "pitch": 0.09,
                 "hfov": 5.41,
                 "image": {
                  "levels": [
                   {
                    "height": 70,
                    "width": 73,
                    "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_6_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayImage"
                }
               ]
              },
              {
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
               "id": "overlay_1A54EB2C_0691_2CAE_414E_FD4A85E449B8",
               "useHandCursor": true,
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "items": [
                {
                 "yaw": 130.1,
                 "pitch": -2.92,
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
                 "class": "HotspotPanoramaOverlayImage"
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
           "mapLocations": [
            {
             "x": 1020.68,
             "class": "PanoramaMapLocation",
             "y": 498.74,
             "angle": 60.97,
             "map": "this.map_04171D1A_107E_8278_4197_9875AF5B32BE"
            }
           ],
           "cardboardMenu": "this.Menu_183372DF_15B5_485C_4183_BACB2E49FC28",
           "partial": false,
           "pitch": 0,
           "thumbnailUrl": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_t.jpg",
           "id": "panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
           "hfovMin": 60,
           "label": "C09",
           "hfov": 360,
           "adjacentPanoramas": [
            {
             "panorama": {
              "hfovMax": 120,
              "frames": [
               {
                "thumbnailUrl": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_t.jpg",
                "overlays": [
                 {
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "height": 62,
                       "width": 52,
                       "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_0_0_0_map.gif",
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
                  "id": "overlay_108FC976_06B1_6CBA_4194_C8910C228778",
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82, this.camera_1B59879C_15B5_48DC_4184_05BC4AF31A97); this.mainPlayList.set('selectedIndex', 10)"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": -154.28,
                    "pitch": -3.38,
                    "hfov": 7.67,
                    "image": {
                     "levels": [
                      {
                       "height": 124,
                       "width": 104,
                       "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayImage"
                   }
                  ]
                 },
                 {
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
                  "id": "overlay_1C9800E4_06BF_3DDE_4173_59F64E3E5D64",
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": -153.92,
                    "pitch": -8.41,
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
                    "class": "HotspotPanoramaOverlayImage"
                   }
                  ]
                 },
                 {
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "height": 75,
                       "width": 77,
                       "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_2_0_0_map.gif",
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
                  "id": "overlay_1E29306F_06BF_3CAA_4193_DFD053E8C52C",
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_1A9DC813_15B5_47A4_41B2_C47F117076CE); this.mainPlayList.set('selectedIndex', 4)"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": -42.13,
                    "pitch": -1.48,
                    "hfov": 11.33,
                    "image": {
                     "levels": [
                      {
                       "height": 150,
                       "width": 154,
                       "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_2_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayImage"
                   }
                  ]
                 },
                 {
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
                  "id": "overlay_112FAD06_06B0_E45A_4192_19B5F480919F",
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": -41.81,
                    "pitch": -7.26,
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
                    "class": "HotspotPanoramaOverlayImage"
                   }
                  ]
                 },
                 {
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "height": 71,
                       "width": 42,
                       "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_4_0_0_map.gif",
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
                  "id": "overlay_11493BE4_06B1_23DE_4184_2C2532225ED0",
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_1A92B801_15B5_47A4_41A5_51DE669C1EAB); this.mainPlayList.set('selectedIndex', 12)"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": 36.85,
                    "pitch": -2.58,
                    "hfov": 6.29,
                    "image": {
                     "levels": [
                      {
                       "height": 142,
                       "width": 85,
                       "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_4_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayImage"
                   }
                  ]
                 },
                 {
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
                  "id": "overlay_1FA8ED9A_06B1_646A_4196_2926CB7FBF93",
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": 36.94,
                    "pitch": -6.88,
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
                    "class": "HotspotPanoramaOverlayImage"
                   }
                  ]
                 },
                 {
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "height": 56,
                       "width": 31,
                       "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_6_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 4.69,
                    "yaw": 12.62,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 0.41
                   }
                  ],
                  "id": "overlay_1C896D16_06B3_647D_419A_5B670D605F0F",
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_1B4497C4_15B5_48AC_4189_B409BEE1A29E); this.mainPlayList.set('selectedIndex', 19)"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": 12.62,
                    "pitch": 0.41,
                    "hfov": 4.69,
                    "image": {
                     "levels": [
                      {
                       "height": 112,
                       "width": 63,
                       "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_6_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayImage"
                   }
                  ]
                 },
                 {
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "height": 16,
                       "width": 23,
                       "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_7_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 5.61,
                    "yaw": 12.53,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -3.06
                   }
                  ],
                  "id": "overlay_1D2E6CB7_06B3_25BA_4193_701A9B0FB2FB",
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": 12.53,
                    "pitch": -3.06,
                    "hfov": 5.61,
                    "image": {
                     "levels": [
                      {
                       "height": 51,
                       "width": 76,
                       "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_7_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayImage"
                   }
                  ]
                 },
                 {
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "height": 51,
                       "width": 59,
                       "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_8_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 8.76,
                    "yaw": -22.68,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -0.34
                   }
                  ],
                  "id": "overlay_11694CCB_06B1_25EA_4174_4C81369B945A",
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_1AA007ED_15B5_487C_41AD_6B65E4B65235); this.mainPlayList.set('selectedIndex', 3)"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": -22.68,
                    "pitch": -0.34,
                    "hfov": 8.76,
                    "image": {
                     "levels": [
                      {
                       "height": 103,
                       "width": 119,
                       "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_8_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayImage"
                   }
                  ]
                 },
                 {
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "height": 16,
                       "width": 26,
                       "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_9_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 7.24,
                    "yaw": -22.91,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -5.14
                   }
                  ],
                  "id": "overlay_1FD2C4F5_06B1_65BE_4181_9DD8225286DD",
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": -22.91,
                    "pitch": -5.14,
                    "hfov": 7.24,
                    "image": {
                     "levels": [
                      {
                       "height": 59,
                       "width": 98,
                       "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_9_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayImage"
                   }
                  ]
                 },
                 {
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "height": 34,
                       "width": 34,
                       "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_10_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 5,
                    "yaw": -15.07,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 0.68
                   }
                  ],
                  "id": "overlay_1AA96E8F_06B7_246A_4191_88C07BFE428F",
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_1AB517D7_15B5_48AD_4166_4EA5250ED44C); this.mainPlayList.set('selectedIndex', 2)"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": -15.07,
                    "pitch": 0.68,
                    "hfov": 5,
                    "image": {
                     "levels": [
                      {
                       "height": 68,
                       "width": 68,
                       "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_10_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayImage"
                   }
                  ]
                 },
                 {
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "height": 16,
                       "width": 22,
                       "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_11_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 6.67,
                    "yaw": -15.09,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -3.07
                   }
                  ],
                  "id": "overlay_1C689D2D_06B7_24AE_4189_12E4D57756A6",
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "items": [
                   {
                    "yaw": -15.09,
                    "pitch": -3.07,
                    "hfov": 6.67,
                    "image": {
                     "levels": [
                      {
                       "height": 63,
                       "width": 90,
                       "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_11_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayImage"
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
              "mapLocations": [
               {
                "x": 975.03,
                "class": "PanoramaMapLocation",
                "y": 555.49,
                "angle": 190.27,
                "map": "this.map_04171D1A_107E_8278_4197_9875AF5B32BE"
               }
              ],
              "cardboardMenu": "this.Menu_183372DF_15B5_485C_4183_BACB2E49FC28",
              "partial": false,
              "pitch": 0,
              "thumbnailUrl": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_t.jpg",
              "id": "panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
              "hfovMin": 60,
              "label": "C08",
              "hfov": 360,
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
                "yaw": -154.28,
                "class": "AdjacentPanorama",
                "backwardYaw": 130.14,
                "distance": 1
               },
               {
                "panorama": {
                 "hfovMax": 120,
                 "frames": [
                  {
                   "thumbnailUrl": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_t.jpg",
                   "overlays": [
                    {
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "height": 104,
                          "width": 76,
                          "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_0_0_0_map.gif",
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
                     "id": "overlay_30BC7838_07B1_2CB6_4188_1F368EE0331C",
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.mainPlayList.set('selectedIndex', 20)"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": -174.64,
                       "pitch": -1.2,
                       "hfov": 11.08,
                       "image": {
                        "levels": [
                         {
                          "height": 208,
                          "width": 153,
                          "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_0_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage"
                      }
                     ]
                    },
                    {
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
                     "id": "overlay_3619F023_078F_1C5A_419A_DDBC83BEE9D1",
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": -174.7,
                       "pitch": -8.9,
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
                       "class": "HotspotPanoramaOverlayImage"
                      }
                     ]
                    },
                    {
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "height": 64,
                          "width": 44,
                          "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_2_0_0_map.gif",
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
                     "id": "overlay_363321E9_0790_FFD6_419B_CF80D5A53966",
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_1BB0068B_15B5_48A4_41A9_74829BC3BE4C); this.mainPlayList.set('selectedIndex', 12)"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": -18.92,
                       "pitch": -1.79,
                       "hfov": 6.46,
                       "image": {
                        "levels": [
                         {
                          "height": 129,
                          "width": 89,
                          "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_2_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage"
                      }
                     ]
                    },
                    {
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
                     "id": "overlay_33FE544D_0791_24EE_4186_5CC6F6EE735D",
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": -18.8,
                       "pitch": -6.24,
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
                       "class": "HotspotPanoramaOverlayImage"
                      }
                     ]
                    },
                    {
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "height": 52,
                          "width": 41,
                          "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_4_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 5.96,
                       "yaw": 11.76,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -0.08
                      }
                     ],
                     "id": "overlay_3E711B46_0790_ECDA_4187_B01EE563934E",
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_1BA3469E_15B5_48DF_4176_6321AF4D7050); this.mainPlayList.set('selectedIndex', 11)"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": 11.76,
                       "pitch": -0.08,
                       "hfov": 5.96,
                       "image": {
                        "levels": [
                         {
                          "height": 105,
                          "width": 82,
                          "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_4_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage"
                      }
                     ]
                    },
                    {
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "height": 16,
                          "width": 26,
                          "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_5_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 7.7,
                       "yaw": 11.97,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -4.28
                      }
                     ],
                     "id": "overlay_31C9D706_0793_245A_4166_1CA387F63591",
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": 11.97,
                       "pitch": -4.28,
                       "hfov": 7.7,
                       "image": {
                        "levels": [
                         {
                          "height": 65,
                          "width": 107,
                          "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_5_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage"
                      }
                     ]
                    },
                    {
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "height": 41,
                          "width": 30,
                          "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_6_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 4.4,
                       "yaw": 26.56,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -1.38
                      }
                     ],
                     "id": "overlay_36B555D6_0793_67FA_4178_6B0BA1AD50F2",
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.mainPlayList.set('selectedIndex', 10)"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": 26.56,
                       "pitch": -1.38,
                       "hfov": 4.4,
                       "image": {
                        "levels": [
                         {
                          "height": 83,
                          "width": 61,
                          "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_6_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage"
                      }
                     ]
                    },
                    {
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "height": 16,
                          "width": 28,
                          "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_7_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 6.84,
                       "yaw": 26.86,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -5.2
                      }
                     ],
                     "id": "overlay_35E51298_0791_7C76_4198_40BC383ED8CF",
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": 26.86,
                       "pitch": -5.2,
                       "hfov": 6.84,
                       "image": {
                        "levels": [
                         {
                          "height": 54,
                          "width": 95,
                          "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_7_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage"
                      }
                     ]
                    },
                    {
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "height": 71,
                          "width": 61,
                          "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_8_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 8.85,
                       "yaw": 59.08,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -0.44
                      }
                     ],
                     "id": "overlay_3015CF23_0791_245A_4192_56944CCEC538",
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_1BAD36AA_15B5_48E4_416A_21FED853182A); this.mainPlayList.set('selectedIndex', 4)"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": 59.08,
                       "pitch": -0.44,
                       "hfov": 8.85,
                       "image": {
                        "levels": [
                         {
                          "height": 143,
                          "width": 122,
                          "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_8_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage"
                      }
                     ]
                    },
                    {
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "height": 16,
                          "width": 27,
                          "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_9_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 8.79,
                       "yaw": 58.85,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -6.48
                      }
                     ],
                     "id": "overlay_3F6B9A60_079F_ECD6_4197_948570BFCE54",
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": 58.85,
                       "pitch": -6.48,
                       "hfov": 8.79,
                       "image": {
                        "levels": [
                         {
                          "height": 71,
                          "width": 122,
                          "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_9_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage"
                      }
                     ]
                    },
                    {
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "height": 67,
                          "width": 59,
                          "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_10_0_0_map.gif",
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
                     "id": "overlay_35E18CCC_0790_E5EE_4197_CADFEF31780A",
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_18445681_15B5_48A4_41A0_6FAA1F332F69); this.mainPlayList.set('selectedIndex', 3)"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": 113.51,
                       "pitch": -1.39,
                       "hfov": 8.52,
                       "image": {
                        "levels": [
                         {
                          "height": 134,
                          "width": 118,
                          "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_10_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage"
                      }
                     ]
                    },
                    {
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
                     "id": "overlay_35DB4DB5_0791_27BE_4183_7C63065DE16E",
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": 114.19,
                       "pitch": -6.29,
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
                       "class": "HotspotPanoramaOverlayImage"
                      }
                     ]
                    },
                    {
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "height": 68,
                          "width": 58,
                          "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_12_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 8.4,
                       "yaw": 140.71,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -0.39
                      }
                     ],
                     "id": "overlay_3431079C_0791_646E_416B_E85EA27EFB4D",
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_18592675_15B5_486C_41A3_2C4E73215A9B); this.mainPlayList.set('selectedIndex', 2)"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": 140.71,
                       "pitch": -0.39,
                       "hfov": 8.4,
                       "image": {
                        "levels": [
                         {
                          "height": 137,
                          "width": 116,
                          "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_12_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage"
                      }
                     ]
                    },
                    {
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "height": 16,
                          "width": 26,
                          "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_13_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 6.6,
                       "yaw": 141.31,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -5.64
                      }
                     ],
                     "id": "overlay_347C62F9_0793_1DB6_419B_1F3665A646DA",
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": 141.31,
                       "pitch": -5.64,
                       "hfov": 6.6,
                       "image": {
                        "levels": [
                         {
                          "height": 56,
                          "width": 92,
                          "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_13_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage"
                      }
                     ]
                    },
                    {
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "height": 57,
                          "width": 48,
                          "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_14_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 6.96,
                       "yaw": 168.59,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": 0
                      }
                     ],
                     "id": "overlay_34AF6FA5_0790_E45E_418E_0B039F637C1F",
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_186D8663_15B5_4864_41AA_6A6A709277C2); this.mainPlayList.set('selectedIndex', 1)"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": 168.59,
                       "pitch": 0,
                       "hfov": 6.96,
                       "image": {
                        "levels": [
                         {
                          "height": 114,
                          "width": 96,
                          "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_14_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage"
                      }
                     ]
                    },
                    {
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "height": 16,
                          "width": 25,
                          "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_15_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 5.93,
                       "yaw": 169.02,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -4.04
                      }
                     ],
                     "id": "overlay_30B9CD54_0797_24FE_416B_E44F95B2DACF",
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "items": [
                      {
                       "yaw": 169.02,
                       "pitch": -4.04,
                       "hfov": 5.93,
                       "image": {
                        "levels": [
                         {
                          "height": 52,
                          "width": 82,
                          "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_15_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage"
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
                 "mapLocations": [
                  {
                   "x": 963.56,
                   "class": "PanoramaMapLocation",
                   "y": 675.24,
                   "angle": 11.4,
                   "map": "this.map_04171D1A_107E_8278_4197_9875AF5B32BE"
                  }
                 ],
                 "cardboardMenu": "this.Menu_183372DF_15B5_485C_4183_BACB2E49FC28",
                 "partial": false,
                 "pitch": 0,
                 "thumbnailUrl": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_t.jpg",
                 "id": "panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                 "hfovMin": 60,
                 "label": "C16",
                 "hfov": 360,
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
                   "yaw": 168.59,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -34.31,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
                   "yaw": 140.71,
                   "class": "AdjacentPanorama",
                   "backwardYaw": 122.75,
                   "distance": 1
                  },
                  {
                   "panorama": {
                    "hfovMax": 120,
                    "frames": [
                     {
                      "thumbnailUrl": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_t.jpg",
                      "overlays": [
                       {
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "height": 87,
                             "width": 102,
                             "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_0_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 14.79,
                          "yaw": 2.53,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": 0.84
                         }
                        ],
                        "id": "overlay_3B1920B6_0793_1DBA_4192_C46B5E5F935C",
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82, this.camera_1B9AD6B4_15B5_48EC_41B4_E13B4AEE40AB); this.mainPlayList.set('selectedIndex', 10)"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": 2.53,
                          "pitch": 0.84,
                          "hfov": 14.79,
                          "image": {
                           "levels": [
                            {
                             "height": 175,
                             "width": 205,
                             "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_0_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayImage"
                         }
                        ]
                       },
                       {
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "height": 16,
                             "width": 30,
                             "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_1_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 7.35,
                          "yaw": 2.81,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -5.39
                         }
                        ],
                        "id": "overlay_45381DDF_0793_27EA_418B_A8C1322CFBB9",
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": 2.81,
                          "pitch": -5.39,
                          "hfov": 7.35,
                          "image": {
                           "levels": [
                            {
                             "height": 54,
                             "width": 102,
                             "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_1_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayImage"
                         }
                        ]
                       },
                       {
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "height": 85,
                             "width": 77,
                             "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_2_0_0_map.gif",
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
                        "id": "overlay_442E80D6_0790_FDFA_4199_6BEACB7B4BE4",
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_1BC8A703_15B5_49A5_41AA_F59CD5C71AAB); this.mainPlayList.set('selectedIndex', 4)"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": 25.67,
                          "pitch": -1.26,
                          "hfov": 11.11,
                          "image": {
                           "levels": [
                            {
                             "height": 170,
                             "width": 154,
                             "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_2_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayImage"
                         }
                        ]
                       },
                       {
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
                        "id": "overlay_469A773A_0791_24AA_4191_D2BE6DDF9602",
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": 25.2,
                          "pitch": -7.06,
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
                          "class": "HotspotPanoramaOverlayImage"
                         }
                        ]
                       },
                       {
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "height": 110,
                             "width": 80,
                             "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_4_0_0_map.gif",
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
                        "id": "overlay_4585C0BA_0797_1DAA_4199_443A4ACDED94",
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_1BF666D0_15B5_48A4_419C_4B341B9A86C6); this.mainPlayList.set('selectedIndex', 2)"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": 152.96,
                          "pitch": -3.67,
                          "hfov": 11.57,
                          "image": {
                           "levels": [
                            {
                             "height": 221,
                             "width": 160,
                             "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_4_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayImage"
                         }
                        ]
                       },
                       {
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
                        "id": "overlay_41D6FB68_0797_6CD6_417A_18E907D050C5",
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": 153.29,
                          "pitch": -10.96,
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
                          "class": "HotspotPanoramaOverlayImage"
                         }
                        ]
                       },
                       {
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "height": 98,
                             "width": 100,
                             "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_6_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 14.42,
                          "yaw": -16.75,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": 1.78
                         }
                        ],
                        "id": "overlay_410F0DA3_0793_645A_4196_3EEE05D8D8D4",
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_1BDE46F8_15B5_4864_41B3_6961FA0AE472); this.mainPlayList.set('selectedIndex', 11)"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": -16.75,
                          "pitch": 1.78,
                          "hfov": 14.42,
                          "image": {
                           "levels": [
                            {
                             "height": 197,
                             "width": 200,
                             "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_6_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayImage"
                         }
                        ]
                       },
                       {
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "height": 16,
                             "width": 24,
                             "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_7_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 7.49,
                          "yaw": -16.47,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -5.39
                         }
                        ],
                        "id": "overlay_4276C9EC_0791_2FAE_4179_BF32F6E2E991",
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": -16.47,
                          "pitch": -5.39,
                          "hfov": 7.49,
                          "image": {
                           "levels": [
                            {
                             "height": 69,
                             "width": 104,
                             "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_7_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayImage"
                         }
                        ]
                       },
                       {
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "height": 76,
                             "width": 50,
                             "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_8_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 7.26,
                          "yaw": -55.84,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -0.21
                         }
                        ],
                        "id": "overlay_44114CF6_0790_E5BA_4194_D0E5B766DD33",
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_1BD346E6_15B5_486C_4183_2E07763CF9F4); this.mainPlayList.set('selectedIndex', 12)"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": -55.84,
                          "pitch": -0.21,
                          "hfov": 7.26,
                          "image": {
                           "levels": [
                            {
                             "height": 153,
                             "width": 100,
                             "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_8_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayImage"
                         }
                        ]
                       },
                       {
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "height": 16,
                             "width": 32,
                             "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_9_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 9.26,
                          "yaw": -55.09,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -5.83
                         }
                        ],
                        "id": "overlay_4238B560_079F_24D6_419C_7D3BB8306A1E",
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": -55.09,
                          "pitch": -5.83,
                          "hfov": 9.26,
                          "image": {
                           "levels": [
                            {
                             "height": 63,
                             "width": 129,
                             "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_9_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayImage"
                         }
                        ]
                       },
                       {
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "height": 80,
                             "width": 61,
                             "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_10_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 8.92,
                          "yaw": -107.62,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -2.51
                         }
                        ],
                        "id": "overlay_46F083CA_079F_23EA_418E_ACDC664F1975",
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_1BE136DC_15B5_485C_4170_BDA16F9DF844); this.mainPlayList.set('selectedIndex', 19)"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": -107.62,
                          "pitch": -2.51,
                          "hfov": 8.92,
                          "image": {
                           "levels": [
                            {
                             "height": 161,
                             "width": 123,
                             "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_10_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayImage"
                         }
                        ]
                       },
                       {
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
                        "id": "overlay_43AEE268_0791_1CD6_4190_956303B44CDE",
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": -107.29,
                          "pitch": -8.27,
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
                          "class": "HotspotPanoramaOverlayImage"
                         }
                        ]
                       },
                       {
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "height": 79,
                             "width": 55,
                             "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_12_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 7.89,
                          "yaw": -146.68,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -5.07
                         }
                        ],
                        "id": "overlay_44A3D555_0791_64FE_4198_4A9374AD4A83",
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_1B39170F_15B5_49BC_41B2_A349B1EA2710); this.mainPlayList.set('selectedIndex', 20)"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": -146.68,
                          "pitch": -5.07,
                          "hfov": 7.89,
                          "image": {
                           "levels": [
                            {
                             "height": 158,
                             "width": 110,
                             "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_12_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayImage"
                         }
                        ]
                       },
                       {
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "height": 16,
                             "width": 26,
                             "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_13_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 8.87,
                          "yaw": -146.65,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -10.64
                         }
                        ],
                        "id": "overlay_42873502_0793_645A_419B_08499A73BBB4",
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": -146.65,
                          "pitch": -10.64,
                          "hfov": 8.87,
                          "image": {
                           "levels": [
                            {
                             "height": 75,
                             "width": 125,
                             "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_13_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayImage"
                         }
                        ]
                       },
                       {
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "height": 86,
                             "width": 54,
                             "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_14_0_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 7.87,
                          "yaw": 174.53,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -0.39
                         }
                        ],
                        "id": "overlay_39A1D981_0791_6C56_4167_5B8F31E9A8D4",
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_1B85C6BE_15B5_48DC_4181_F06E1DD0E0A0); this.mainPlayList.set('selectedIndex', 1)"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": 174.53,
                          "pitch": -0.39,
                          "hfov": 7.87,
                          "image": {
                           "levels": [
                            {
                             "height": 173,
                             "width": 109,
                             "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_14_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayImage"
                         }
                        ]
                       },
                       {
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "height": 16,
                             "width": 26,
                             "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_15_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 6.83,
                          "yaw": 174.39,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -5.68
                         }
                        ],
                        "id": "overlay_44100C1A_0791_E46A_419B_68D0401A44F0",
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "items": [
                         {
                          "yaw": 174.39,
                          "pitch": -5.68,
                          "hfov": 6.83,
                          "image": {
                           "levels": [
                            {
                             "height": 57,
                             "width": 95,
                             "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_15_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "class": "HotspotPanoramaOverlayImage"
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
                    "mapLocations": [
                     {
                      "x": 1024.14,
                      "class": "PanoramaMapLocation",
                      "y": 681.27,
                      "angle": 0,
                      "map": "this.map_04171D1A_107E_8278_4197_9875AF5B32BE"
                     }
                    ],
                    "cardboardMenu": "this.Menu_183372DF_15B5_485C_4183_BACB2E49FC28",
                    "partial": false,
                    "pitch": 0,
                    "thumbnailUrl": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_t.jpg",
                    "id": "panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                    "hfovMin": 60,
                    "label": "C17",
                    "hfov": 360,
                    "adjacentPanoramas": [
                     {
                      "panorama": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
                      "yaw": 2.53,
                      "class": "AdjacentPanorama",
                      "backwardYaw": 116.4,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
                      "yaw": 174.53,
                      "class": "AdjacentPanorama",
                      "backwardYaw": 18.34,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
                      "yaw": 152.96,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -143.45,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                      "yaw": -107.62,
                      "class": "AdjacentPanorama",
                      "backwardYaw": 113.51,
                      "distance": 1
                     },
                     {
                      "panorama": {
                       "hfovMax": 120,
                       "frames": [
                        {
                         "thumbnailUrl": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_t.jpg",
                         "overlays": [
                          {
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "height": 73,
                                "width": 53,
                                "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_0_0_0_map.gif",
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
                           "id": "overlay_1333B95D_0697_2CEE_4194_7F372605A06C",
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_181D9343_15B5_49A4_41B4_418354FC3A11); this.mainPlayList.set('selectedIndex', 11)"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": 4.74,
                             "pitch": -2.68,
                             "hfov": 7.66,
                             "image": {
                              "levels": [
                               {
                                "height": 146,
                                "width": 106,
                                "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_0_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayImage"
                            }
                           ]
                          },
                          {
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
                           "id": "overlay_1092C51A_0697_246A_4172_39E7152EFDF5",
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": 4.7,
                             "pitch": -8.76,
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
                             "class": "HotspotPanoramaOverlayImage"
                            }
                           ]
                          },
                          {
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "height": 53,
                                "width": 38,
                                "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_2_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 5.6,
                             "yaw": 12.61,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -1.07
                            }
                           ],
                           "id": "overlay_13AD4E3C_0691_64AE_4142_65BF2B2097A0",
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.mainPlayList.set('selectedIndex', 10)"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": 12.61,
                             "pitch": -1.07,
                             "hfov": 5.6,
                             "image": {
                              "levels": [
                               {
                                "height": 107,
                                "width": 77,
                                "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_2_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayImage"
                            }
                           ]
                          },
                          {
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "height": 16,
                                "width": 27,
                                "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_3_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 5.45,
                             "yaw": 13.04,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -5.63
                            }
                           ],
                           "id": "overlay_106E4805_0691_EC5E_4130_FDB4211F1678",
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": 13.04,
                             "pitch": -5.63,
                             "hfov": 5.45,
                             "image": {
                              "levels": [
                               {
                                "height": 45,
                                "width": 76,
                                "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_3_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayImage"
                            }
                           ]
                          },
                          {
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "height": 59,
                                "width": 66,
                                "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_4_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 9.57,
                             "yaw": 66.31,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -1.12
                            }
                           ],
                           "id": "overlay_13C882E8_0691_3DD6_4186_867D67D1ACA5",
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_1800E353_15B5_49A4_41B3_8BB82D3FD6C3); this.mainPlayList.set('selectedIndex', 4)"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": 66.31,
                             "pitch": -1.12,
                             "hfov": 9.57,
                             "image": {
                              "levels": [
                               {
                                "height": 118,
                                "width": 132,
                                "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_4_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayImage"
                            }
                           ]
                          },
                          {
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "height": 16,
                                "width": 25,
                                "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_5_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 7,
                             "yaw": 66.28,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -5.89
                            }
                           ],
                           "id": "overlay_1E9BB315_0693_1C7E_415E_4DA4763AE3A6",
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": 66.28,
                             "pitch": -5.89,
                             "hfov": 7,
                             "image": {
                              "levels": [
                               {
                                "height": 62,
                                "width": 97,
                                "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_5_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayImage"
                            }
                           ]
                          },
                          {
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "height": 59,
                                "width": 48,
                                "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_6_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 6.92,
                             "yaw": 107.11,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": 1.22
                            }
                           ],
                           "id": "overlay_151CF646_0693_24DA_416D_8D0286472AEE",
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_181B2333_15B5_49E4_41A9_26CCD2AA4198); this.mainPlayList.set('selectedIndex', 3)"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": 107.11,
                             "pitch": 1.22,
                             "hfov": 6.92,
                             "image": {
                              "levels": [
                               {
                                "height": 118,
                                "width": 96,
                                "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_6_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayImage"
                            }
                           ]
                          },
                          {
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "height": 16,
                                "width": 28,
                                "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_7_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 7.5,
                             "yaw": 107.35,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -4.01
                            }
                           ],
                           "id": "overlay_118C7373_0690_FCBA_4191_5EC42FBDA8F2",
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": 107.35,
                             "pitch": -4.01,
                             "hfov": 7.5,
                             "image": {
                              "levels": [
                               {
                                "height": 59,
                                "width": 104,
                                "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_7_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayImage"
                            }
                           ]
                          },
                          {
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "height": 66,
                                "width": 44,
                                "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_8_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 6.42,
                             "yaw": 124.98,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": 1.64
                            }
                           ],
                           "id": "overlay_1F155413_069F_E47A_417D_DC481E61927D",
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_182F331D_15B5_49DC_41B4_E630803E88B1); this.mainPlayList.set('selectedIndex', 2)"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": 124.98,
                             "pitch": 1.64,
                             "hfov": 6.42,
                             "image": {
                              "levels": [
                               {
                                "height": 133,
                                "width": 89,
                                "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_8_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayImage"
                            }
                           ]
                          },
                          {
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "height": 16,
                                "width": 25,
                                "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_9_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 6.97,
                             "yaw": 125.04,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -3.3
                            }
                           ],
                           "id": "overlay_11875053_0691_3CFA_4188_191F1826EC2B",
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": 125.04,
                             "pitch": -3.3,
                             "hfov": 6.97,
                             "image": {
                              "levels": [
                               {
                                "height": 61,
                                "width": 96,
                                "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_9_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayImage"
                            }
                           ]
                          },
                          {
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "height": 50,
                                "width": 45,
                                "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_10_0_0_map.gif",
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
                           "id": "overlay_11AFC364_0693_1CDE_418A_DEE26D1887D0",
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_1811F32D_15B5_49FC_41A4_0FDA514369D9); this.mainPlayList.set('selectedIndex', 19)"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": 156.92,
                             "pitch": -1.22,
                             "hfov": 6.56,
                             "image": {
                              "levels": [
                               {
                                "height": 100,
                                "width": 91,
                                "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_10_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayImage"
                            }
                           ]
                          },
                          {
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
                           "id": "overlay_11D3D443_0693_24DA_4192_5962A59207B3",
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": 157.26,
                             "pitch": -5.87,
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
                             "class": "HotspotPanoramaOverlayImage"
                            }
                           ]
                          },
                          {
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "height": 41,
                                "width": 35,
                                "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_12_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 5.14,
                             "yaw": 149.3,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": 1.92
                            }
                           ],
                           "id": "overlay_11AD6E0E_0693_646A_4187_2F4CE059F6D0",
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_18731382_15B5_48A7_41B2_6671866DCD16); this.mainPlayList.set('selectedIndex', 20)"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": 149.3,
                             "pitch": 1.92,
                             "hfov": 5.14,
                             "image": {
                              "levels": [
                               {
                                "height": 83,
                                "width": 71,
                                "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_12_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayImage"
                            }
                           ]
                          },
                          {
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "height": 16,
                                "width": 26,
                                "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_13_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 7.67,
                             "yaw": 149.55,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -2.39
                            }
                           ],
                           "id": "overlay_101B7B09_06B0_EC56_4196_DF7A51BE6DEB",
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": 149.55,
                             "pitch": -2.39,
                             "hfov": 7.67,
                             "image": {
                              "levels": [
                               {
                                "height": 64,
                                "width": 106,
                                "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_13_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayImage"
                            }
                           ]
                          },
                          {
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "height": 44,
                                "width": 47,
                                "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_14_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 6.77,
                             "yaw": 136.61,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": 0.78
                            }
                           ],
                           "id": "overlay_11BB0487_06B3_245A_417D_497BBA79B69B",
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_1826030E_15B5_49BC_41B2_225A2CB547F3); this.mainPlayList.set('selectedIndex', 1)"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": 136.61,
                             "pitch": 0.78,
                             "hfov": 6.77,
                             "image": {
                              "levels": [
                               {
                                "height": 89,
                                "width": 94,
                                "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_14_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayImage"
                            }
                           ]
                          },
                          {
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "height": 16,
                                "width": 25,
                                "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_15_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 6.92,
                             "yaw": 136.39,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -3.17
                            }
                           ],
                           "id": "overlay_10EB5DB3_06B0_E7BB_4193_4B3DE5CAB7DE",
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": 136.39,
                             "pitch": -3.17,
                             "hfov": 6.92,
                             "image": {
                              "levels": [
                               {
                                "height": 60,
                                "width": 96,
                                "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_15_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayImage"
                            }
                           ]
                          },
                          {
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "height": 98,
                                "width": 130,
                                "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_16_0_0_map.gif",
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
                           "id": "overlay_1C974485_06B3_E45E_4182_73908E649E3E",
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4, this.camera_18098372_15B5_4864_41B4_C7E3498A66DC); this.mainPlayList.set('selectedIndex', 13)"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": -96.27,
                             "pitch": -4.02,
                             "hfov": 18.69,
                             "image": {
                              "levels": [
                               {
                                "height": 197,
                                "width": 260,
                                "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_16_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "class": "HotspotPanoramaOverlayImage"
                            }
                           ]
                          },
                          {
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
                           "id": "overlay_1CA3866A_06B3_24AA_418F_9F19B27231FA",
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "items": [
                            {
                             "yaw": -96.47,
                             "pitch": -12.25,
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
                             "class": "HotspotPanoramaOverlayImage"
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
                       "mapLocations": [
                        {
                         "x": 913.83,
                         "class": "PanoramaMapLocation",
                         "y": 610.6,
                         "angle": 51.84,
                         "map": "this.map_04171D1A_107E_8278_4197_9875AF5B32BE"
                        }
                       ],
                       "cardboardMenu": "this.Menu_183372DF_15B5_485C_4183_BACB2E49FC28",
                       "partial": false,
                       "pitch": 0,
                       "thumbnailUrl": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_t.jpg",
                       "id": "panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                       "hfovMin": 60,
                       "label": "C07",
                       "hfov": 360,
                       "adjacentPanoramas": [
                        {
                         "panorama": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
                         "yaw": 136.61,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -22.73,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
                         "yaw": 124.98,
                         "class": "AdjacentPanorama",
                         "backwardYaw": 139.53,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                         "yaw": 156.92,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -18.92,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                         "yaw": 107.11,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -55.84,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                         "yaw": 4.74,
                         "class": "AdjacentPanorama",
                         "backwardYaw": 36.85,
                         "distance": 1
                        },
                        {
                         "panorama": {
                          "hfovMax": 120,
                          "frames": [
                           {
                            "thumbnailUrl": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_t.jpg",
                            "overlays": [
                             {
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 88,
                                   "width": 80,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_0_0_0_map.gif",
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
                              "id": "overlay_1DD571FD_0697_7FAE_4181_ACF228D0DFF0",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2, this.camera_1898F548_15B5_49A4_41A7_D0170A790CFC); this.mainPlayList.set('selectedIndex', 5)"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": -0.88,
                                "pitch": -5.02,
                                "hfov": 11.51,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 176,
                                   "width": 160,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_0_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage"
                               }
                              ]
                             },
                             {
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
                              "id": "overlay_1AA3E219_0690_FC76_4175_20A3657C4FB3",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": -0.63,
                                "pitch": -13.75,
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
                                "class": "HotspotPanoramaOverlayImage"
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 67,
                                   "width": 76,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_2_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 11.01,
                                "yaw": -98.62,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": 0.5
                               }
                              ],
                              "id": "overlay_1D2D051B_0691_246A_4189_C6535106E464",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82, this.camera_18AFE522_15B5_49E4_41B0_202BC9E5FB45); this.mainPlayList.set('selectedIndex', 10)"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": -98.62,
                                "pitch": 0.5,
                                "hfov": 11.01,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 134,
                                   "width": 152,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_2_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage"
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 16,
                                   "width": 24,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_3_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 7.5,
                                "yaw": -98.4,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -5.05
                               }
                              ],
                              "id": "overlay_1C690E50_0691_24F6_4184_01C5EAD7BDD5",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": -98.4,
                                "pitch": -5.05,
                                "hfov": 7.5,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 69,
                                   "width": 104,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_3_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage"
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 85,
                                   "width": 98,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_4_0_0_map.gif",
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
                              "id": "overlay_18A73425_0693_245E_418A_37979A1889C3",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_1884F567_15B5_486C_41A4_6165408519AD); this.mainPlayList.set('selectedIndex', 11)"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": -143.14,
                                "pitch": -4.05,
                                "hfov": 14.11,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 170,
                                   "width": 196,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_4_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage"
                               }
                              ]
                             },
                             {
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
                              "id": "overlay_19A3F664_0691_64DE_4190_3B68066071FF",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": -143.14,
                                "pitch": -10.7,
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
                                "class": "HotspotPanoramaOverlayImage"
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 66,
                                   "width": 78,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_6_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 11.36,
                                "yaw": -175.54,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": 0.3
                               }
                              ],
                              "id": "overlay_1C2C9020_0691_1C55_4184_1AF07E41E0E0",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.mainPlayList.set('selectedIndex', 13)"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": -175.54,
                                "pitch": 0.3,
                                "hfov": 11.36,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 133,
                                   "width": 157,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_6_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage"
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 16,
                                   "width": 26,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_7_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 6.21,
                                "yaw": -175.23,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -4.6
                               }
                              ],
                              "id": "overlay_1B2224D4_069F_65FE_4193_6A229FF6AF52",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": -175.23,
                                "pitch": -4.6,
                                "hfov": 6.21,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 51,
                                   "width": 86,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_7_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage"
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 78,
                                   "width": 64,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_8_0_0_map.gif",
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
                              "id": "overlay_1BE145D8_0691_27F6_4190_205F4E3ADD47",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_18942538_15B5_49E4_41A0_985B9C615664); this.mainPlayList.set('selectedIndex', 3)"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": 81.58,
                                "pitch": -0.33,
                                "hfov": 9.34,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 156,
                                   "width": 129,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_8_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage"
                               }
                              ]
                             },
                             {
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
                              "id": "overlay_1B759D4A_0691_24EA_4156_A2B44DC73C69",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": 81.59,
                                "pitch": -7.4,
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
                                "class": "HotspotPanoramaOverlayImage"
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 80,
                                   "width": 58,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_10_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 8.46,
                                "yaw": 134.41,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": 0.74
                               }
                              ],
                              "id": "overlay_1D6A549A_0691_246A_418D_D65D9C424427",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_18921529_15B5_49E4_4190_B911770F800A); this.mainPlayList.set('selectedIndex', 19)"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": 134.41,
                                "pitch": 0.74,
                                "hfov": 8.46,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 160,
                                   "width": 117,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_10_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage"
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 16,
                                   "width": 25,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_11_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 8.76,
                                "yaw": 134.8,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -5.74
                               }
                              ],
                              "id": "overlay_1A1B934E_0693_1CEA_4141_5D146278C1B0",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": 134.8,
                                "pitch": -5.74,
                                "hfov": 8.76,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 76,
                                   "width": 122,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_11_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage"
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 61,
                                   "width": 43,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_12_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 6.26,
                                "yaw": 112.76,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": 0.01
                               }
                              ],
                              "id": "overlay_2653DB6D_0693_2CAE_4125_0137B1B6A064",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_188E1577_15B5_486C_41AF_F69C5C75F64E); this.mainPlayList.set('selectedIndex', 2)"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": 112.76,
                                "pitch": 0.01,
                                "hfov": 6.26,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 122,
                                   "width": 86,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_12_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage"
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 16,
                                   "width": 24,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_13_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 7.24,
                                "yaw": 112.63,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -5.26
                               }
                              ],
                              "id": "overlay_1ABE7F5E_0691_24EA_4192_B3DF921024E3",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": 112.63,
                                "pitch": -5.26,
                                "hfov": 7.24,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 67,
                                   "width": 101,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_13_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage"
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 50,
                                   "width": 61,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_14_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 8.91,
                                "yaw": 89.94,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -0.1
                               }
                              ],
                              "id": "overlay_1B4E345F_0697_24EA_4196_62B67CEB01DE",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.mainPlayList.set('selectedIndex', 1)"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": 89.94,
                                "pitch": -0.1,
                                "hfov": 8.91,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 100,
                                   "width": 123,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_14_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage"
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 16,
                                   "width": 23,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_15_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 5.83,
                                "yaw": 90.09,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -4.23
                               }
                              ],
                              "id": "overlay_18669A33_0691_6CBA_4186_E1486D225611",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": 90.09,
                                "pitch": -4.23,
                                "hfov": 5.83,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 55,
                                   "width": 81,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_15_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage"
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 61,
                                   "width": 46,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_16_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 6.64,
                                "yaw": 171.29,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -0.74
                               }
                              ],
                              "id": "overlay_1848DECF_0691_25EA_419B_19155919B309",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_18829558_15B5_49A4_41AD_A55D04EB287B); this.mainPlayList.set('selectedIndex', 12)"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": 171.29,
                                "pitch": -0.74,
                                "hfov": 6.64,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 122,
                                   "width": 92,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_16_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage"
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 16,
                                   "width": 24,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_17_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 5.82,
                                "yaw": 171.31,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -5.61
                               }
                              ],
                              "id": "overlay_19097AFB_0693_6DAA_418F_751FBC951B23",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": 171.31,
                                "pitch": -5.61,
                                "hfov": 5.82,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 54,
                                   "width": 81,
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_17_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage"
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
                          "mapLocations": [
                           {
                            "x": 1049.53,
                            "class": "PanoramaMapLocation",
                            "y": 606.8,
                            "angle": 91.01,
                            "map": "this.map_04171D1A_107E_8278_4197_9875AF5B32BE"
                           }
                          ],
                          "cardboardMenu": "this.Menu_183372DF_15B5_485C_4183_BACB2E49FC28",
                          "partial": false,
                          "pitch": 0,
                          "thumbnailUrl": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_t.jpg",
                          "id": "panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                          "hfovMin": 60,
                          "label": "C10",
                          "hfov": 360,
                          "adjacentPanoramas": [
                           {
                            "panorama": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
                            "yaw": -98.62,
                            "class": "AdjacentPanorama",
                            "backwardYaw": 105.38,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                            "yaw": 134.41,
                            "class": "AdjacentPanorama",
                            "backwardYaw": 59.08,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                            "yaw": 81.58,
                            "class": "AdjacentPanorama",
                            "backwardYaw": 25.67,
                            "distance": 1
                           },
                           {
                            "panorama": {
                             "hfovMax": 120,
                             "frames": [
                              {
                               "thumbnailUrl": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_t.jpg",
                               "overlays": [
                                {
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 112,
                                      "width": 79,
                                      "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_0_0_0_map.gif",
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
                                 "id": "overlay_1BCAA3DB_0690_E3EA_4175_AE03DFBDF79F",
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_1BF5F480_15B5_48A3_418C_EC0D028DD278); this.mainPlayList.set('selectedIndex', 4)"
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": -0.95,
                                   "pitch": -0.25,
                                   "hfov": 11.41,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 225,
                                      "width": 158,
                                      "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_0_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayImage"
                                  }
                                 ]
                                },
                                {
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
                                 "id": "overlay_1B81FB3A_0691_6CAA_4185_C2AB290A08A0",
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": -1.13,
                                   "pitch": -10.61,
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
                                   "class": "HotspotPanoramaOverlayImage"
                                  }
                                 ]
                                },
                                {
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 138,
                                      "width": 156,
                                      "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_2_0_0_map.gif",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "hfov": 22.44,
                                   "yaw": 178.45,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -5.15
                                  }
                                 ],
                                 "id": "overlay_192EAB21_068F_2C56_4193_6F3905BD0334",
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E, this.camera_1BE6048F_15B5_48BC_41A1_2F9AA3B4D87C); this.mainPlayList.set('selectedIndex', 6)"
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": 178.45,
                                   "pitch": -5.15,
                                   "hfov": 22.44,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 277,
                                      "width": 312,
                                      "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_2_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayImage"
                                  }
                                 ]
                                },
                                {
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
                                 "id": "overlay_19EDC174_0671_3CBE_4196_DE5883AFB8CF",
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": 177.74,
                                   "pitch": -17.9,
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
                                   "class": "HotspotPanoramaOverlayImage"
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
                             "mapLocations": [
                              {
                               "x": 1120.64,
                               "class": "PanoramaMapLocation",
                               "y": 611.61,
                               "angle": -84.86,
                               "map": "this.map_04171D1A_107E_8278_4197_9875AF5B32BE"
                              }
                             ],
                             "cardboardMenu": "this.Menu_183372DF_15B5_485C_4183_BACB2E49FC28",
                             "partial": false,
                             "pitch": 0,
                             "thumbnailUrl": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_t.jpg",
                             "id": "panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
                             "hfovMin": 60,
                             "label": "C11",
                             "hfov": 360,
                             "adjacentPanoramas": [
                              {
                               "panorama": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                               "yaw": -0.95,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -0.88,
                               "distance": 1
                              },
                              {
                               "panorama": {
                                "hfovMax": 120,
                                "frames": [
                                 {
                                  "thumbnailUrl": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_t.jpg",
                                  "overlays": [
                                   {
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 94,
                                         "width": 76,
                                         "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_0_0_0_map.gif",
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
                                    "id": "overlay_1B28455D_0671_24EE_418A_324E3B2D36DB",
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2, this.camera_187EF3A7_15B5_48EC_41A8_0770ECBC92ED); this.mainPlayList.set('selectedIndex', 5)"
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "items": [
                                     {
                                      "yaw": 0.03,
                                      "pitch": -5.02,
                                      "hfov": 10.93,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 189,
                                         "width": 152,
                                         "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_0_0.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "class": "HotspotPanoramaOverlayImage"
                                     }
                                    ]
                                   },
                                   {
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
                                    "id": "overlay_1B0FFE2E_0673_24AA_4193_33375BC7C00A",
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "items": [
                                     {
                                      "yaw": -0.12,
                                      "pitch": -13.62,
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
                                      "class": "HotspotPanoramaOverlayImage"
                                     }
                                    ]
                                   },
                                   {
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 112,
                                         "width": 89,
                                         "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_2_0_0_map.gif",
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
                                    "id": "overlay_24B0C757_0673_64FA_4196_101EB1688FEE",
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778, this.camera_1875D398_15B5_48A4_41AB_7D5B670E0CAA); this.mainPlayList.set('selectedIndex', 7)"
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "items": [
                                     {
                                      "yaw": -178.02,
                                      "pitch": -10.03,
                                      "hfov": 12.62,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 224,
                                         "width": 178,
                                         "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_2_0.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "class": "HotspotPanoramaOverlayImage"
                                     }
                                    ]
                                   },
                                   {
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
                                    "id": "overlay_27CC6293_0671_3C7B_419A_6F5AB828C77E",
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "items": [
                                     {
                                      "yaw": -177.02,
                                      "pitch": -21.2,
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
                                      "class": "HotspotPanoramaOverlayImage"
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
                                "mapLocations": [
                                 {
                                  "x": 1200.2,
                                  "class": "PanoramaMapLocation",
                                  "y": 618.38,
                                  "angle": -84.4,
                                  "map": "this.map_04171D1A_107E_8278_4197_9875AF5B32BE"
                                 }
                                ],
                                "cardboardMenu": "this.Menu_183372DF_15B5_485C_4183_BACB2E49FC28",
                                "partial": false,
                                "pitch": 0,
                                "thumbnailUrl": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_t.jpg",
                                "id": "panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
                                "hfovMin": 60,
                                "label": "C12",
                                "hfov": 360,
                                "adjacentPanoramas": [
                                 {
                                  "panorama": {
                                   "hfovMax": 120,
                                   "frames": [
                                    {
                                     "thumbnailUrl": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_t.jpg",
                                     "overlays": [
                                      {
                                       "maps": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 121,
                                            "width": 100,
                                            "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_0_0_0_map.gif",
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
                                       "id": "overlay_18238646_0671_24DA_4160_F47269F55E5C",
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741, this.camera_1A8E7827_15B5_47EC_41B4_06A1F457272C); this.mainPlayList.set('selectedIndex', 8)"
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "items": [
                                        {
                                         "yaw": -0.18,
                                         "pitch": -5.9,
                                         "hfov": 14.38,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 242,
                                            "width": 200,
                                            "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_0_0.png",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "class": "HotspotPanoramaOverlayImage"
                                        }
                                       ]
                                      },
                                      {
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
                                       "id": "overlay_197E9710_0677_6476_4185_152F2BE62FC4",
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "items": [
                                        {
                                         "yaw": -0.63,
                                         "pitch": -16.39,
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
                                         "class": "HotspotPanoramaOverlayImage"
                                        }
                                       ]
                                      },
                                      {
                                       "maps": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 114,
                                            "width": 132,
                                            "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_2_0_0_map.gif",
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
                                       "id": "overlay_27454FDC_0677_23EE_4173_4743024C71AA",
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E, this.camera_1AF8C83E_15B5_47DF_41B5_6F58D0987AC9); this.mainPlayList.set('selectedIndex', 6)"
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "items": [
                                        {
                                         "yaw": -178.74,
                                         "pitch": -7.41,
                                         "hfov": 18.94,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 228,
                                            "width": 265,
                                            "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_2_0.png",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "class": "HotspotPanoramaOverlayImage"
                                        }
                                       ]
                                      },
                                      {
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
                                       "id": "overlay_27F0BA0A_0670_EC6A_4198_E6CE799B31CB",
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "items": [
                                        {
                                         "yaw": -179.25,
                                         "pitch": -18.28,
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
                                         "class": "HotspotPanoramaOverlayImage"
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
                                   "mapLocations": [
                                    {
                                     "x": 1248.6,
                                     "class": "PanoramaMapLocation",
                                     "y": 622.81,
                                     "angle": 90,
                                     "map": "this.map_04171D1A_107E_8278_4197_9875AF5B32BE"
                                    }
                                   ],
                                   "cardboardMenu": "this.Menu_183372DF_15B5_485C_4183_BACB2E49FC28",
                                   "partial": false,
                                   "pitch": 0,
                                   "thumbnailUrl": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_t.jpg",
                                   "id": "panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
                                   "hfovMin": 60,
                                   "label": "C13",
                                   "hfov": 360,
                                   "adjacentPanoramas": [
                                    {
                                     "panorama": {
                                      "hfovMax": 120,
                                      "frames": [
                                       {
                                        "thumbnailUrl": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_t.jpg",
                                        "overlays": [
                                         {
                                          "maps": [
                                           {
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 171,
                                               "width": 116,
                                               "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_0_0_0_map.gif",
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
                                          "id": "overlay_263EBD9B_0671_246A_4191_F49A95B9E74E",
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC, this.camera_1B165737_15B5_49EC_41A2_3427C57BA206); this.mainPlayList.set('selectedIndex', 9)"
                                           }
                                          ],
                                          "class": "HotspotPanoramaOverlay",
                                          "items": [
                                           {
                                            "yaw": -0.27,
                                            "pitch": -3.52,
                                            "hfov": 16.77,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 343,
                                               "width": 233,
                                               "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_0_0.png",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "class": "HotspotPanoramaOverlayImage"
                                           }
                                          ]
                                         },
                                         {
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
                                          "id": "overlay_257E93A3_067F_3C5A_4187_58F778D35045",
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "class": "HotspotPanoramaOverlay",
                                          "items": [
                                           {
                                            "yaw": 0.63,
                                            "pitch": -14.76,
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
                                            "class": "HotspotPanoramaOverlayImage"
                                           }
                                          ]
                                         },
                                         {
                                          "maps": [
                                           {
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 166,
                                               "width": 147,
                                               "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_2_0_0_map.gif",
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
                                          "id": "overlay_27045473_0671_24BA_4195_EE4719C004CC",
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778, this.camera_1B243723_15B5_49E4_419E_88DA8C4C69A5); this.mainPlayList.set('selectedIndex', 7)"
                                           }
                                          ],
                                          "class": "HotspotPanoramaOverlay",
                                          "items": [
                                           {
                                            "yaw": -178.42,
                                            "pitch": -3.64,
                                            "hfov": 21.2,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 333,
                                               "width": 295,
                                               "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_2_0.png",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "class": "HotspotPanoramaOverlayImage"
                                           }
                                          ]
                                         },
                                         {
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
                                          "id": "overlay_26FD3107_0671_7C5A_4196_ED67E7BBC774",
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "class": "HotspotPanoramaOverlay",
                                          "items": [
                                           {
                                            "yaw": -177.99,
                                            "pitch": -16.27,
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
                                            "class": "HotspotPanoramaOverlayImage"
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
                                      "mapLocations": [
                                       {
                                        "x": 1295.11,
                                        "class": "PanoramaMapLocation",
                                        "y": 623.86,
                                        "angle": 95.6,
                                        "map": "this.map_04171D1A_107E_8278_4197_9875AF5B32BE"
                                       }
                                      ],
                                      "cardboardMenu": "this.Menu_183372DF_15B5_485C_4183_BACB2E49FC28",
                                      "partial": false,
                                      "pitch": 0,
                                      "thumbnailUrl": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_t.jpg",
                                      "id": "panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
                                      "hfovMin": 60,
                                      "label": "C14",
                                      "hfov": 360,
                                      "adjacentPanoramas": [
                                       {
                                        "panorama": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
                                        "yaw": -178.42,
                                        "class": "AdjacentPanorama",
                                        "backwardYaw": -0.18,
                                        "distance": 1
                                       },
                                       {
                                        "panorama": {
                                         "hfovMax": 120,
                                         "frames": [
                                          {
                                           "thumbnailUrl": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_t.jpg",
                                           "overlays": [
                                            {
                                             "maps": [
                                              {
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 122,
                                                  "width": 123,
                                                  "url": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_0_HS_0_0_0_map.gif",
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
                                             "id": "overlay_2742F976_0673_2CBA_4192_B1253893FD9B",
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741, this.camera_18F0D577_15B5_486C_41A0_DD14BC363EF2); this.mainPlayList.set('selectedIndex', 8)"
                                              }
                                             ],
                                             "class": "HotspotPanoramaOverlay",
                                             "items": [
                                              {
                                               "yaw": 0.25,
                                               "pitch": -3.27,
                                               "hfov": 17.81,
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 245,
                                                  "width": 247,
                                                  "url": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_0_HS_0_0.png",
                                                  "class": "ImageResourceLevel"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "class": "HotspotPanoramaOverlayImage"
                                              }
                                             ]
                                            },
                                            {
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
                                             "id": "overlay_26A0F6B7_0673_E5BA_4197_F90E8A3A011E",
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "class": "HotspotPanoramaOverlay",
                                             "items": [
                                              {
                                               "yaw": 0.25,
                                               "pitch": -14.76,
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
                                               "class": "HotspotPanoramaOverlayImage"
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
                                         "mapLocations": [
                                          {
                                           "x": 1356.92,
                                           "class": "PanoramaMapLocation",
                                           "y": 626.59,
                                           "angle": -88.59,
                                           "map": "this.map_04171D1A_107E_8278_4197_9875AF5B32BE"
                                          }
                                         ],
                                         "cardboardMenu": "this.Menu_183372DF_15B5_485C_4183_BACB2E49FC28",
                                         "partial": false,
                                         "pitch": 0,
                                         "thumbnailUrl": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_t.jpg",
                                         "id": "panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
                                         "hfovMin": 60,
                                         "label": "C15",
                                         "hfov": 360,
                                         "adjacentPanoramas": [
                                          {
                                           "panorama": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
                                           "yaw": 0.25,
                                           "class": "AdjacentPanorama",
                                           "backwardYaw": -0.27,
                                           "distance": 1
                                          }
                                         ],
                                         "class": "Panorama",
                                         "vfov": 180
                                        },
                                        "yaw": -0.27,
                                        "class": "AdjacentPanorama",
                                        "backwardYaw": 0.25,
                                        "distance": 1
                                       }
                                      ],
                                      "class": "Panorama",
                                      "vfov": 180
                                     },
                                     "yaw": -0.18,
                                     "class": "AdjacentPanorama",
                                     "backwardYaw": -178.42,
                                     "distance": 1
                                    },
                                    {
                                     "panorama": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
                                     "yaw": -178.74,
                                     "class": "AdjacentPanorama",
                                     "backwardYaw": -178.02,
                                     "distance": 1
                                    }
                                   ],
                                   "class": "Panorama",
                                   "vfov": 180
                                  },
                                  "yaw": -178.02,
                                  "class": "AdjacentPanorama",
                                  "backwardYaw": -178.74,
                                  "distance": 1
                                 },
                                 {
                                  "panorama": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
                                  "yaw": 0.03,
                                  "class": "AdjacentPanorama",
                                  "backwardYaw": 178.45,
                                  "distance": 1
                                 }
                                ],
                                "class": "Panorama",
                                "vfov": 180
                               },
                               "yaw": 178.45,
                               "class": "AdjacentPanorama",
                               "backwardYaw": 0.03,
                               "distance": 1
                              }
                             ],
                             "class": "Panorama",
                             "vfov": 180
                            },
                            "yaw": -0.88,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -0.95,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                            "yaw": 171.29,
                            "class": "AdjacentPanorama",
                            "backwardYaw": 66.31,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                            "yaw": -143.14,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -42.13,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
                            "yaw": 112.76,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -156.98,
                            "distance": 1
                           }
                          ],
                          "class": "Panorama",
                          "vfov": 180
                         },
                         "yaw": 66.31,
                         "class": "AdjacentPanorama",
                         "backwardYaw": 171.29,
                         "distance": 1
                        },
                        {
                         "panorama": {
                          "hfovMax": 120,
                          "frames": [
                           {
                            "thumbnailUrl": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_t.jpg",
                            "overlays": [
                             {
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 89,
                                   "width": 73,
                                   "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_0_0_0_map.gif",
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
                              "id": "overlay_14EB4A70_068F_6CB6_4190_049216A52BD8",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_1B988460_15B5_4864_41A9_834A6F070D68); this.mainPlayList.set('selectedIndex', 12)"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": 7.93,
                                "pitch": -2.89,
                                "hfov": 10.58,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 179,
                                   "width": 147,
                                   "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_0_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage"
                               }
                              ]
                             },
                             {
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
                              "id": "overlay_15D28AE0_068F_2DD6_4190_19CBC3F443F6",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": 7.54,
                                "pitch": -10.87,
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
                                "class": "HotspotPanoramaOverlayImage"
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 98,
                                   "width": 86,
                                   "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_2_0_0_map.gif",
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
                              "id": "overlay_13A44599_0691_2476_4189_7D56D283ED40",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA, this.camera_1B8AF470_15B5_4864_41AB_76A8772109E2); this.mainPlayList.set('selectedIndex', 14)"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": -178.55,
                                "pitch": -8.04,
                                "hfov": 12.32,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 197,
                                   "width": 172,
                                   "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_2_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage"
                               }
                              ]
                             },
                             {
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
                              "id": "overlay_1302EAF9_0691_2DB6_4188_E41C59F609C1",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": -178.74,
                                "pitch": -17.52,
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
                                "class": "HotspotPanoramaOverlayImage"
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
                          "mapLocations": [
                           {
                            "x": 877.81,
                            "class": "PanoramaMapLocation",
                            "y": 568.3,
                            "angle": 103.06,
                            "map": "this.map_04171D1A_107E_8278_4197_9875AF5B32BE"
                           }
                          ],
                          "cardboardMenu": "this.Menu_183372DF_15B5_485C_4183_BACB2E49FC28",
                          "partial": false,
                          "pitch": 0,
                          "thumbnailUrl": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_t.jpg",
                          "id": "panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
                          "hfovMin": 60,
                          "label": "C06",
                          "hfov": 360,
                          "adjacentPanoramas": [
                           {
                            "panorama": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                            "yaw": 7.93,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -96.27,
                            "distance": 1
                           },
                           {
                            "panorama": {
                             "hfovMax": 120,
                             "frames": [
                              {
                               "thumbnailUrl": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_t.jpg",
                               "overlays": [
                                {
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 84,
                                      "width": 69,
                                      "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_0_0_0_map.gif",
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
                                 "id": "overlay_15E7DB16_06F3_2C7A_4199_963496BA8F47",
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24, this.camera_18A5E513_15B5_49A4_41A3_604FE2B086CD); this.mainPlayList.set('selectedIndex', 15)"
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": -2.69,
                                   "pitch": -4.02,
                                   "hfov": 9.92,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 169,
                                      "width": 138,
                                      "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_0_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayImage"
                                  }
                                 ]
                                },
                                {
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
                                 "id": "overlay_1382DAC3_06F3_EDDA_4199_4640AB09737B",
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": -3.01,
                                   "pitch": -11.37,
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
                                   "class": "HotspotPanoramaOverlayImage"
                                  }
                                 ]
                                },
                                {
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 81,
                                      "width": 82,
                                      "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_2_0_0_map.gif",
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
                                 "id": "overlay_1470B197_06F3_3C7A_418B_F6F6C4B06850",
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4, this.camera_18A18503_15B5_49A4_4173_A2F8E71F8225); this.mainPlayList.set('selectedIndex', 13)"
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": -179.87,
                                   "pitch": -7.29,
                                   "hfov": 11.73,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 162,
                                      "width": 164,
                                      "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_2_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayImage"
                                  }
                                 ]
                                },
                                {
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
                                 "id": "overlay_121F44F8_06F1_25B6_416C_4F213A9D0F56",
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": -179.37,
                                   "pitch": -15.51,
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
                                   "class": "HotspotPanoramaOverlayImage"
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
                             "mapLocations": [
                              {
                               "x": 814.48,
                               "class": "PanoramaMapLocation",
                               "y": 538.76,
                               "angle": 289.23,
                               "map": "this.map_04171D1A_107E_8278_4197_9875AF5B32BE"
                              }
                             ],
                             "cardboardMenu": "this.Menu_183372DF_15B5_485C_4183_BACB2E49FC28",
                             "partial": false,
                             "pitch": 0,
                             "thumbnailUrl": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_t.jpg",
                             "id": "panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
                             "hfovMin": 60,
                             "label": "C05",
                             "hfov": 360,
                             "adjacentPanoramas": [
                              {
                               "panorama": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
                               "yaw": -179.87,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -178.55,
                               "distance": 1
                              },
                              {
                               "panorama": {
                                "hfovMax": 120,
                                "frames": [
                                 {
                                  "thumbnailUrl": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_t.jpg",
                                  "overlays": [
                                   {
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 79,
                                         "width": 79,
                                         "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_0_HS_0_0_0_map.gif",
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
                                    "id": "overlay_1591595B_06F7_2CEA_4193_33DDF4028068",
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA, this.camera_18FCE59D_15B5_48DC_4196_53C0BF22AC3C); this.mainPlayList.set('selectedIndex', 14)"
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "items": [
                                     {
                                      "yaw": -2.21,
                                      "pitch": -6.66,
                                      "hfov": 11.33,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 158,
                                         "width": 158,
                                         "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_0_HS_0_0.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "class": "HotspotPanoramaOverlayImage"
                                     }
                                    ]
                                   },
                                   {
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
                                    "id": "overlay_15F363E3_06F7_E3DA_4166_E1ADD25A8F16",
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "items": [
                                     {
                                      "yaw": -2.39,
                                      "pitch": -14.13,
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
                                      "class": "HotspotPanoramaOverlayImage"
                                     }
                                    ]
                                   },
                                   {
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 86,
                                         "width": 58,
                                         "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_0_HS_2_0_0_map.gif",
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
                                    "id": "overlay_1286252F_06F1_24AA_4180_65D537174EB2",
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544, this.camera_18FBC58D_15B5_48BC_41A7_8AC0EA4FFC89); this.mainPlayList.set('selectedIndex', 16)"
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "items": [
                                     {
                                      "yaw": -179.28,
                                      "pitch": -6.91,
                                      "hfov": 8.42,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 172,
                                         "width": 117,
                                         "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_0_HS_2_0.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "class": "HotspotPanoramaOverlayImage"
                                     }
                                    ]
                                   },
                                   {
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
                                    "id": "overlay_122DE14B_06F1_1CEA_4197_5318700943E8",
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "items": [
                                     {
                                      "yaw": -179.62,
                                      "pitch": -15.39,
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
                                      "class": "HotspotPanoramaOverlayImage"
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
                                "mapLocations": [
                                 {
                                  "x": 750.08,
                                  "class": "PanoramaMapLocation",
                                  "y": 510.78,
                                  "angle": 113.96,
                                  "map": "this.map_04171D1A_107E_8278_4197_9875AF5B32BE"
                                 }
                                ],
                                "cardboardMenu": "this.Menu_183372DF_15B5_485C_4183_BACB2E49FC28",
                                "partial": false,
                                "pitch": 0,
                                "thumbnailUrl": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_t.jpg",
                                "id": "panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
                                "hfovMin": 60,
                                "label": "C04",
                                "hfov": 360,
                                "adjacentPanoramas": [
                                 {
                                  "panorama": {
                                   "hfovMax": 120,
                                   "frames": [
                                    {
                                     "thumbnailUrl": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_t.jpg",
                                     "overlays": [
                                      {
                                       "maps": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 100,
                                            "width": 97,
                                            "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_0_0_0_map.gif",
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
                                       "id": "overlay_147A8E68_06F3_64D6_4183_F7E4E488AEE0",
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FD85D6E_0673_DED7_40FD_D23817113C40, this.camera_1875364F_15B5_4BBC_41B5_AD4039DB6262); this.mainPlayList.set('selectedIndex', 17)"
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "items": [
                                        {
                                         "yaw": 0.35,
                                         "pitch": -6.41,
                                         "hfov": 13.93,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 200,
                                            "width": 194,
                                            "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_0_0.png",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "class": "HotspotPanoramaOverlayImage"
                                        }
                                       ]
                                      },
                                      {
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
                                       "id": "overlay_15ADB079_06F3_1CB6_418B_9B6CDA887ED8",
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "items": [
                                        {
                                         "yaw": 0.38,
                                         "pitch": -14.88,
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
                                         "class": "HotspotPanoramaOverlayImage"
                                        }
                                       ]
                                      },
                                      {
                                       "maps": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 93,
                                            "width": 76,
                                            "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_2_0_0_map.gif",
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
                                       "id": "overlay_14376EDE_06F1_25ED_416E_3CD4528DB12E",
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24, this.camera_1861E659_15B5_4BA4_41AE_2CEEADB96D04); this.mainPlayList.set('selectedIndex', 15)"
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "items": [
                                        {
                                         "yaw": -177.99,
                                         "pitch": -5.9,
                                         "hfov": 10.99,
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 186,
                                            "width": 153,
                                            "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_2_0.png",
                                            "class": "ImageResourceLevel"
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "class": "HotspotPanoramaOverlayImage"
                                        }
                                       ]
                                      },
                                      {
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
                                       "id": "overlay_157DAC36_06F1_24BA_4180_B0CB15CF6B9B",
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "items": [
                                        {
                                         "yaw": -177.74,
                                         "pitch": -15.01,
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
                                         "class": "HotspotPanoramaOverlayImage"
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
                                   "mapLocations": [
                                    {
                                     "x": 695.62,
                                     "class": "PanoramaMapLocation",
                                     "y": 481.58,
                                     "angle": -63.43,
                                     "map": "this.map_04171D1A_107E_8278_4197_9875AF5B32BE"
                                    }
                                   ],
                                   "cardboardMenu": "this.Menu_183372DF_15B5_485C_4183_BACB2E49FC28",
                                   "partial": false,
                                   "pitch": 0,
                                   "thumbnailUrl": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_t.jpg",
                                   "id": "panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
                                   "hfovMin": 60,
                                   "label": "C03",
                                   "hfov": 360,
                                   "adjacentPanoramas": [
                                    {
                                     "panorama": {
                                      "hfovMax": 120,
                                      "frames": [
                                       {
                                        "thumbnailUrl": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_t.jpg",
                                        "overlays": [
                                         {
                                          "maps": [
                                           {
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 107,
                                               "width": 160,
                                               "url": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_0_HS_0_0_0_map.gif",
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
                                          "id": "overlay_14B6E9F3_06FF_6FBA_4191_BB523B46F728",
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544, this.camera_1B01474B_15B5_49A4_41AC_152C01094D01); this.mainPlayList.set('selectedIndex', 16); eval('localStorage.setItem(\"displayIndex\", 2);');"
                                           }
                                          ],
                                          "class": "HotspotPanoramaOverlay",
                                          "items": [
                                           {
                                            "yaw": 0.64,
                                            "pitch": -5.15,
                                            "hfov": 23.04,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 214,
                                               "width": 321,
                                               "url": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_0_HS_0_0.png",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "class": "HotspotPanoramaOverlayImage"
                                           }
                                          ]
                                         },
                                         {
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
                                          "id": "overlay_12BCBCD9_06FF_E5F6_4132_6BD2D8AC4E5A",
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "class": "HotspotPanoramaOverlay",
                                          "items": [
                                           {
                                            "yaw": 1,
                                            "pitch": -14.51,
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
                                            "class": "HotspotPanoramaOverlayImage"
                                           }
                                          ]
                                         },
                                         {
                                          "maps": [
                                           {
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 82,
                                               "width": 109,
                                               "url": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_0_HS_2_0_0_map.gif",
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
                                          "id": "overlay_16333A58_06F0_ECF6_418E_5831E3934A02",
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D, this.camera_1B73D75F_15B5_485C_41AD_B25F3CCE0F84); this.mainPlayList.set('selectedIndex', 18); eval('localStorage.setItem(\"displayIndex\", 0);');"
                                           }
                                          ],
                                          "class": "HotspotPanoramaOverlay",
                                          "items": [
                                           {
                                            "yaw": -179.67,
                                            "pitch": -0.88,
                                            "hfov": 15.74,
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 165,
                                               "width": 218,
                                               "url": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_0_HS_2_0.png",
                                               "class": "ImageResourceLevel"
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "class": "HotspotPanoramaOverlayImage"
                                           }
                                          ]
                                         },
                                         {
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
                                          "id": "overlay_1690DD0C_06F1_246E_4197_6AD3CD66470D",
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "class": "HotspotPanoramaOverlay",
                                          "items": [
                                           {
                                            "yaw": -177.99,
                                            "pitch": -7.98,
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
                                            "class": "HotspotPanoramaOverlayImage"
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
                                      "mapLocations": [
                                       {
                                        "x": 637.49,
                                        "class": "PanoramaMapLocation",
                                        "y": 453.23,
                                        "angle": 118.07,
                                        "map": "this.map_04171D1A_107E_8278_4197_9875AF5B32BE"
                                       }
                                      ],
                                      "cardboardMenu": "this.Menu_183372DF_15B5_485C_4183_BACB2E49FC28",
                                      "partial": false,
                                      "pitch": 0,
                                      "thumbnailUrl": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_t.jpg",
                                      "id": "panorama_0FD85D6E_0673_DED7_40FD_D23817113C40",
                                      "hfovMin": 60,
                                      "label": "C02",
                                      "hfov": 360,
                                      "adjacentPanoramas": [
                                       {
                                        "panorama": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
                                        "yaw": 0.64,
                                        "class": "AdjacentPanorama",
                                        "backwardYaw": 0.35,
                                        "distance": 1
                                       },
                                       {
                                        "panorama": {
                                         "hfovMax": 120,
                                         "frames": [
                                          {
                                           "thumbnailUrl": "media/panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D_t.jpg",
                                           "overlays": [
                                            {
                                             "maps": [
                                              {
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 100,
                                                  "width": 81,
                                                  "url": "media/panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D_0_HS_0_0_0_map.gif",
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
                                             "id": "overlay_1669253C_06F1_24AE_417D_AD87447571F8",
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FD85D6E_0673_DED7_40FD_D23817113C40, this.camera_18E435AC_15B5_48FC_415A_B113353689D6); this.mainPlayList.set('selectedIndex', 17); eval('localStorage.setItem(\"displayIndex\", 1);');"
                                              }
                                             ],
                                             "class": "HotspotPanoramaOverlay",
                                             "items": [
                                              {
                                               "yaw": 1.46,
                                               "pitch": -4.9,
                                               "hfov": 11.67,
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 200,
                                                  "width": 162,
                                                  "url": "media/panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D_0_HS_0_0.png",
                                                  "class": "ImageResourceLevel"
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "class": "HotspotPanoramaOverlayImage"
                                              }
                                             ]
                                            },
                                            {
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
                                             "id": "overlay_1723D9CD_06F1_2FEE_4195_F17AB1536320",
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "class": "HotspotPanoramaOverlay",
                                             "items": [
                                              {
                                               "yaw": 1.51,
                                               "pitch": -13.63,
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
                                               "class": "HotspotPanoramaOverlayImage"
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
                                         "mapLocations": [
                                          {
                                           "x": 580.16,
                                           "class": "PanoramaMapLocation",
                                           "y": 424.96,
                                           "angle": 115.84,
                                           "map": "this.map_04171D1A_107E_8278_4197_9875AF5B32BE"
                                          }
                                         ],
                                         "cardboardMenu": "this.Menu_183372DF_15B5_485C_4183_BACB2E49FC28",
                                         "partial": false,
                                         "pitch": 0,
                                         "thumbnailUrl": "media/panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D_t.jpg",
                                         "id": "panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D",
                                         "hfovMin": 60,
                                         "label": "C01",
                                         "hfov": 360,
                                         "adjacentPanoramas": [
                                          {
                                           "panorama": "this.panorama_0FD85D6E_0673_DED7_40FD_D23817113C40",
                                           "yaw": 1.46,
                                           "class": "AdjacentPanorama",
                                           "backwardYaw": -179.67,
                                           "distance": 1
                                          }
                                         ],
                                         "class": "Panorama",
                                         "vfov": 180
                                        },
                                        "yaw": -179.67,
                                        "class": "AdjacentPanorama",
                                        "backwardYaw": 1.46,
                                        "distance": 1
                                       }
                                      ],
                                      "class": "Panorama",
                                      "vfov": 180
                                     },
                                     "yaw": 0.35,
                                     "class": "AdjacentPanorama",
                                     "backwardYaw": 0.64,
                                     "distance": 1
                                    },
                                    {
                                     "panorama": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
                                     "yaw": -177.99,
                                     "class": "AdjacentPanorama",
                                     "backwardYaw": -179.28,
                                     "distance": 1
                                    }
                                   ],
                                   "class": "Panorama",
                                   "vfov": 180
                                  },
                                  "yaw": -179.28,
                                  "class": "AdjacentPanorama",
                                  "backwardYaw": -177.99,
                                  "distance": 1
                                 },
                                 {
                                  "panorama": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
                                  "yaw": -2.21,
                                  "class": "AdjacentPanorama",
                                  "backwardYaw": -2.69,
                                  "distance": 1
                                 }
                                ],
                                "class": "Panorama",
                                "vfov": 180
                               },
                               "yaw": -2.69,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -2.21,
                               "distance": 1
                              }
                             ],
                             "class": "Panorama",
                             "vfov": 180
                            },
                            "yaw": -178.55,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -179.87,
                            "distance": 1
                           }
                          ],
                          "class": "Panorama",
                          "vfov": 180
                         },
                         "yaw": -96.27,
                         "class": "AdjacentPanorama",
                         "backwardYaw": 7.93,
                         "distance": 1
                        },
                        {
                         "panorama": {
                          "hfovMax": 120,
                          "frames": [
                           {
                            "thumbnailUrl": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_t.jpg",
                            "overlays": [
                             {
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 96,
                                   "width": 68,
                                   "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_0_0_0_map.gif",
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
                              "id": "overlay_28127D26_07B7_245A_419B_9501F89DF9B5",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67, this.camera_18BFC4F3_15B5_4864_4197_C901DB004326); this.mainPlayList.set('selectedIndex', 21)"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": 87.82,
                                "pitch": -4.77,
                                "hfov": 9.82,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 192,
                                   "width": 136,
                                   "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_0_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage"
                               }
                              ]
                             },
                             {
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
                              "id": "overlay_3348BEEF_07B7_25AA_4181_4163771F00E4",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": 88.54,
                                "pitch": -11.24,
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
                                "class": "HotspotPanoramaOverlayImage"
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 74,
                                   "width": 83,
                                   "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_2_0_0_map.gif",
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
                              "id": "overlay_323E1FCA_07B1_63EA_4193_83E40670F67D",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_1BD1649F_15B5_48DC_418E_AC2F9B7CC906); this.mainPlayList.set('selectedIndex', 1)"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": -6.68,
                                "pitch": 0.98,
                                "hfov": 12.01,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 149,
                                   "width": 166,
                                   "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_2_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage"
                               }
                              ]
                             },
                             {
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
                              "id": "overlay_2AA8BEF2_07B1_25BA_417C_0F0A2C84C244",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": -7.29,
                                "pitch": -4.21,
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
                                "class": "HotspotPanoramaOverlayImage"
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 74,
                                   "width": 76,
                                   "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_4_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 11.01,
                                "yaw": -0.15,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": 0.98
                               }
                              ],
                              "id": "overlay_2AAB5210_07B3_3C76_4192_5556455ECCE9",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.mainPlayList.set('selectedIndex', 0)"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": -0.15,
                                "pitch": 0.98,
                                "hfov": 11.01,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 149,
                                   "width": 152,
                                   "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_4_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage"
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 16,
                                   "width": 21,
                                   "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_5_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 7.27,
                                "yaw": -0.5,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -4.21
                               }
                              ],
                              "id": "overlay_3410637F_07B3_1CAA_4199_EF11CF962ED4",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": -0.5,
                                "pitch": -4.21,
                                "hfov": 7.27,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 76,
                                   "width": 101,
                                   "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_5_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage"
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 135,
                                   "width": 111,
                                   "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_6_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 16,
                                "yaw": -91.84,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": 3.36
                               }
                              ],
                              "id": "overlay_3248E155_07B1_3CFE_4191_2A1EF3C7948D",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_18B764E4_15B5_486C_41B1_F7F0B9881F7B); this.mainPlayList.set('selectedIndex', 3)"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": -91.84,
                                "pitch": 3.36,
                                "hfov": 16,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 271,
                                   "width": 222,
                                   "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_6_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage"
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 16,
                                   "width": 23,
                                   "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_7_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 8.25,
                                "yaw": -92.25,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -5.89
                               }
                              ],
                              "id": "overlay_319930C9_07BF_7DD6_4184_70BEFA17F169",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": -92.25,
                                "pitch": -5.89,
                                "hfov": 8.25,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 80,
                                   "width": 115,
                                   "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_7_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage"
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 139,
                                   "width": 128,
                                   "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_8_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 18.54,
                                "yaw": -44.11,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": 1.35
                               }
                              ],
                              "id": "overlay_29CF0F49_07BF_64D6_4194_075A672440E3",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_1BDC64AE_15B5_48FC_41A0_25A050929E65); this.mainPlayList.set('selectedIndex', 2)"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": -44.11,
                                "pitch": 1.35,
                                "hfov": 18.54,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 278,
                                   "width": 257,
                                   "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_8_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage"
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 16,
                                   "width": 26,
                                   "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_9_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 8.16,
                                "yaw": -44.05,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -7.95
                               }
                              ],
                              "id": "overlay_3690B529_07B1_2456_4170_FB18B300B8BE",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": -44.05,
                                "pitch": -7.95,
                                "hfov": 8.16,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 69,
                                   "width": 114,
                                   "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_9_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage"
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 78,
                                   "width": 78,
                                   "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_10_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 11.24,
                                "yaw": -119.35,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": 3.24
                               }
                              ],
                              "id": "overlay_29F810AC_07B1_1DAE_4196_F3B00F4402F8",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.mainPlayList.set('selectedIndex', 4)"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": -119.35,
                                "pitch": 3.24,
                                "hfov": 11.24,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 156,
                                   "width": 156,
                                   "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_10_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage"
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 16,
                                   "width": 22,
                                   "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_11_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 7.27,
                                "yaw": -120.08,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -3.58
                               }
                              ],
                              "id": "overlay_345241C4_07B1_1FDE_4141_F43DE640110C",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": -120.08,
                                "pitch": -3.58,
                                "hfov": 7.27,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 73,
                                   "width": 101,
                                   "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_11_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage"
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 74,
                                   "width": 79,
                                   "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_12_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 11.49,
                                "yaw": -142.34,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": 3.49
                               }
                              ],
                              "id": "overlay_2846DD14_07B3_247E_4180_11493C9F62DC",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.mainPlayList.set('selectedIndex', 10)"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": -142.34,
                                "pitch": 3.49,
                                "hfov": 11.49,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 149,
                                   "width": 159,
                                   "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_12_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage"
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 16,
                                   "width": 24,
                                   "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_13_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 6.11,
                                "yaw": -142.38,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -3.21
                               }
                              ],
                              "id": "overlay_3243643A_07B3_64AA_416E_5E6A6CC616CF",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": -142.38,
                                "pitch": -3.21,
                                "hfov": 6.11,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 56,
                                   "width": 84,
                                   "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_13_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage"
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 62,
                                   "width": 48,
                                   "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_14_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 7.03,
                                "yaw": -155.72,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": 1.78
                               }
                              ],
                              "id": "overlay_28838F7F_07B1_24AB_4195_41028F4BB6DF",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.mainPlayList.set('selectedIndex', 11)"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": -155.72,
                                "pitch": 1.78,
                                "hfov": 7.03,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 124,
                                   "width": 97,
                                   "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_14_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage"
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 16,
                                   "width": 22,
                                   "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_15_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 6.21,
                                "yaw": -155.63,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -3.14
                               }
                              ],
                              "id": "overlay_32D333AE_07B1_23AA_418E_BE767942BB63",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": -155.63,
                                "pitch": -3.14,
                                "hfov": 6.21,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 61,
                                   "width": 86,
                                   "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_15_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage"
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 60,
                                   "width": 56,
                                   "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_16_0_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 8.13,
                                "yaw": -177.33,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": 0.78
                               }
                              ],
                              "id": "overlay_28E2BF47_07B7_E4DA_4192_A2BCC94840F3",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_18B494E4_15B5_486C_4192_ADDC777CAD06); this.mainPlayList.set('selectedIndex', 12)"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": -177.33,
                                "pitch": 0.78,
                                "hfov": 8.13,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 121,
                                   "width": 112,
                                   "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_16_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage"
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 16,
                                   "width": 23,
                                   "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_17_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 6.85,
                                "yaw": -177.46,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -4.52
                               }
                              ],
                              "id": "overlay_327900C5_07B1_1DDE_4192_5EF31F5CD0B1",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "items": [
                               {
                                "yaw": -177.46,
                                "pitch": -4.52,
                                "hfov": 6.85,
                                "image": {
                                 "levels": [
                                  {
                                   "height": 66,
                                   "width": 95,
                                   "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_17_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage"
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
                          "mapLocations": [
                           {
                            "x": 974.42,
                            "class": "PanoramaMapLocation",
                            "y": 723.08,
                            "angle": 161.69,
                            "map": "this.map_04171D1A_107E_8278_4197_9875AF5B32BE"
                           }
                          ],
                          "cardboardMenu": "this.Menu_183372DF_15B5_485C_4183_BACB2E49FC28",
                          "partial": false,
                          "pitch": 0,
                          "thumbnailUrl": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_t.jpg",
                          "id": "panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                          "hfovMin": 60,
                          "label": "C23",
                          "hfov": 360,
                          "adjacentPanoramas": [
                           {
                            "panorama": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
                            "yaw": -6.68,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -53.28,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
                            "yaw": -44.11,
                            "class": "AdjacentPanorama",
                            "backwardYaw": 81.83,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                            "yaw": -91.84,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -146.68,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                            "yaw": -177.33,
                            "class": "AdjacentPanorama",
                            "backwardYaw": 149.3,
                            "distance": 1
                           },
                           {
                            "panorama": {
                             "hfovMax": 120,
                             "frames": [
                              {
                               "thumbnailUrl": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_t.jpg",
                               "overlays": [
                                {
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 129,
                                      "width": 78,
                                      "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_0_HS_0_0_0_map.gif",
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
                                 "id": "overlay_37A1EC15_07B0_E47E_4165_18EF7B4CF1F7",
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_1B7EC774_15B5_486C_41B0_CC0FC2E13D42); this.mainPlayList.set('selectedIndex', 20)"
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": 4.77,
                                   "pitch": -4.76,
                                   "hfov": 11.26,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 259,
                                      "width": 156,
                                      "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_0_HS_0_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayImage"
                                  }
                                 ]
                                },
                                {
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
                                 "id": "overlay_282E1707_07B3_E45A_4184_0F5F576BAFA8",
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": 4.65,
                                   "pitch": -12.75,
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
                                   "class": "HotspotPanoramaOverlayImage"
                                  }
                                 ]
                                },
                                {
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 128,
                                      "width": 142,
                                      "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_0_HS_2_0_0_map.gif",
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
                                 "id": "overlay_37C3639F_07B3_3C6A_418A_4F59AF831D03",
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754, this.camera_1B6F5788_15B5_48A4_41B4_3653836CF934); this.mainPlayList.set('selectedIndex', 22)"
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": -179.27,
                                   "pitch": -4.42,
                                   "hfov": 20.49,
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 257,
                                      "width": 285,
                                      "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_0_HS_2_0.png",
                                      "class": "ImageResourceLevel"
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayImage"
                                  }
                                 ]
                                },
                                {
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
                                 "id": "overlay_36A27374_07B1_1CBE_4183_F00116B379C1",
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "items": [
                                  {
                                   "yaw": -179.12,
                                   "pitch": -15.39,
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
                                   "class": "HotspotPanoramaOverlayImage"
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
                             "mapLocations": [
                              {
                               "x": 925.34,
                               "class": "PanoramaMapLocation",
                               "y": 728.7,
                               "angle": 65.25,
                               "map": "this.map_04171D1A_107E_8278_4197_9875AF5B32BE"
                              }
                             ],
                             "cardboardMenu": "this.Menu_183372DF_15B5_485C_4183_BACB2E49FC28",
                             "partial": false,
                             "pitch": 0,
                             "thumbnailUrl": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_t.jpg",
                             "id": "panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
                             "hfovMin": 60,
                             "label": "C22",
                             "hfov": 360,
                             "adjacentPanoramas": [
                              {
                               "panorama": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                               "yaw": 4.77,
                               "class": "AdjacentPanorama",
                               "backwardYaw": 87.82,
                               "distance": 1
                              },
                              {
                               "panorama": {
                                "hfovMax": 120,
                                "frames": [
                                 {
                                  "thumbnailUrl": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_t.jpg",
                                  "overlays": [
                                   {
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 191,
                                         "width": 200,
                                         "url": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_0_HS_0_0_0_map.gif",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "hfov": 28.75,
                                      "yaw": -178.3,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": -8.04
                                     }
                                    ],
                                    "id": "overlay_281B5193_07B1_1C7A_418A_7B0CC86E139C",
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67, this.camera_1AEBC850_15B5_47A4_41A5_3B98D3632922); this.mainPlayList.set('selectedIndex', 21)"
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "items": [
                                     {
                                      "yaw": -178.3,
                                      "pitch": -8.04,
                                      "hfov": 28.75,
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 385,
                                         "width": 403,
                                         "url": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_0_HS_0_0.png",
                                         "class": "ImageResourceLevel"
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "class": "HotspotPanoramaOverlayImage"
                                     }
                                    ]
                                   },
                                   {
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
                                    "id": "overlay_36D89562_07B1_24DA_4181_B5F7392CD10A",
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "items": [
                                     {
                                      "yaw": -178.49,
                                      "pitch": -22.3,
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
                                      "class": "HotspotPanoramaOverlayImage"
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
                                "mapLocations": [
                                 {
                                  "x": 889.85,
                                  "class": "PanoramaMapLocation",
                                  "y": 743.14,
                                  "angle": 248.2,
                                  "map": "this.map_04171D1A_107E_8278_4197_9875AF5B32BE"
                                 }
                                ],
                                "cardboardMenu": "this.Menu_183372DF_15B5_485C_4183_BACB2E49FC28",
                                "partial": false,
                                "pitch": 0,
                                "thumbnailUrl": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_t.jpg",
                                "id": "panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
                                "hfovMin": 60,
                                "label": "C21",
                                "hfov": 360,
                                "adjacentPanoramas": [
                                 {
                                  "panorama": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
                                  "yaw": -178.3,
                                  "class": "AdjacentPanorama",
                                  "backwardYaw": -179.27,
                                  "distance": 1
                                 }
                                ],
                                "class": "Panorama",
                                "vfov": 180
                               },
                               "yaw": -179.27,
                               "class": "AdjacentPanorama",
                               "backwardYaw": -178.3,
                               "distance": 1
                              }
                             ],
                             "class": "Panorama",
                             "vfov": 180
                            },
                            "yaw": 87.82,
                            "class": "AdjacentPanorama",
                            "backwardYaw": 4.77,
                            "distance": 1
                           }
                          ],
                          "class": "Panorama",
                          "vfov": 180
                         },
                         "yaw": 149.3,
                         "class": "AdjacentPanorama",
                         "backwardYaw": -177.33,
                         "distance": 1
                        }
                       ],
                       "class": "Panorama",
                       "vfov": 180
                      },
                      "yaw": -55.84,
                      "class": "AdjacentPanorama",
                      "backwardYaw": 107.11,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                      "yaw": -16.75,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -22.68,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                      "yaw": 25.67,
                      "class": "AdjacentPanorama",
                      "backwardYaw": 81.58,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                      "yaw": -146.68,
                      "class": "AdjacentPanorama",
                      "backwardYaw": -91.84,
                      "distance": 1
                     }
                    ],
                    "class": "Panorama",
                    "vfov": 180
                   },
                   "yaw": 113.51,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -107.62,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                   "yaw": -18.92,
                   "class": "AdjacentPanorama",
                   "backwardYaw": 156.92,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                   "yaw": 11.76,
                   "class": "AdjacentPanorama",
                   "backwardYaw": 12.62,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                   "yaw": 59.08,
                   "class": "AdjacentPanorama",
                   "backwardYaw": 134.41,
                   "distance": 1
                  }
                 ],
                 "class": "Panorama",
                 "vfov": 180
                },
                "yaw": 12.62,
                "class": "AdjacentPanorama",
                "backwardYaw": 11.76,
                "distance": 1
               },
               {
                "panorama": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
                "yaw": -15.07,
                "class": "AdjacentPanorama",
                "backwardYaw": 171.48,
                "distance": 1
               },
               {
                "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                "yaw": -22.68,
                "class": "AdjacentPanorama",
                "backwardYaw": -16.75,
                "distance": 1
               },
               {
                "panorama": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                "yaw": 36.85,
                "class": "AdjacentPanorama",
                "backwardYaw": 4.74,
                "distance": 1
               },
               {
                "panorama": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                "yaw": -42.13,
                "class": "AdjacentPanorama",
                "backwardYaw": -143.14,
                "distance": 1
               }
              ],
              "class": "Panorama",
              "vfov": 180
             },
             "yaw": 130.14,
             "class": "AdjacentPanorama",
             "backwardYaw": -154.28,
             "distance": 1
            },
            {
             "panorama": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
             "yaw": 105.38,
             "class": "AdjacentPanorama",
             "backwardYaw": -98.62,
             "distance": 1
            },
            {
             "panorama": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
             "yaw": 121.73,
             "class": "AdjacentPanorama",
             "backwardYaw": -171.11,
             "distance": 1
            },
            {
             "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
             "yaw": 116.4,
             "class": "AdjacentPanorama",
             "backwardYaw": 2.53,
             "distance": 1
            }
           ],
           "class": "Panorama",
           "vfov": 180
          },
          "yaw": -171.11,
          "class": "AdjacentPanorama",
          "backwardYaw": 121.73,
          "distance": 1
         },
         {
          "panorama": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
          "yaw": 7.69,
          "class": "AdjacentPanorama",
          "backwardYaw": 29.17,
          "distance": 1
         },
         {
          "panorama": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
          "yaw": 122.75,
          "class": "AdjacentPanorama",
          "backwardYaw": 140.71,
          "distance": 1
         },
         {
          "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
          "yaw": -143.45,
          "class": "AdjacentPanorama",
          "backwardYaw": 152.96,
          "distance": 1
         },
         {
          "panorama": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
          "yaw": 139.53,
          "class": "AdjacentPanorama",
          "backwardYaw": 124.98,
          "distance": 1
         },
         {
          "panorama": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
          "yaw": 171.48,
          "class": "AdjacentPanorama",
          "backwardYaw": -15.07,
          "distance": 1
         },
         {
          "panorama": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
          "yaw": -156.98,
          "class": "AdjacentPanorama",
          "backwardYaw": 112.76,
          "distance": 1
         },
         {
          "panorama": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
          "yaw": 81.83,
          "class": "AdjacentPanorama",
          "backwardYaw": -44.11,
          "distance": 1
         }
        ],
        "class": "Panorama",
        "vfov": 180
       },
       "yaw": 29.17,
       "class": "AdjacentPanorama",
       "backwardYaw": 7.69,
       "distance": 1
      },
      {
       "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
       "yaw": 18.34,
       "class": "AdjacentPanorama",
       "backwardYaw": 174.53,
       "distance": 1
      },
      {
       "panorama": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
       "yaw": -22.73,
       "class": "AdjacentPanorama",
       "backwardYaw": 136.61,
       "distance": 1
      },
      {
       "panorama": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
       "yaw": -34.31,
       "class": "AdjacentPanorama",
       "backwardYaw": 168.59,
       "distance": 1
      },
      {
       "panorama": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
       "yaw": -53.28,
       "class": "AdjacentPanorama",
       "backwardYaw": -6.68,
       "distance": 1
      },
      {
       "panorama": "this.panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D",
       "yaw": 168.9,
       "class": "AdjacentPanorama",
       "backwardYaw": -174.74,
       "distance": 1
      }
     ],
     "class": "Panorama",
     "vfov": 180
    },
    "yaw": -174.74,
    "class": "AdjacentPanorama",
    "backwardYaw": 168.9,
    "distance": 1
   }
  ],
  "class": "Panorama",
  "vfov": 180
 },
 {
  "gyroscopeEnabled": true,
  "id": "MainViewerPanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "gyroscopeVerticalDraggingEnabled": true,
  "displayPlaybackBar": true,
  "mouseControlMode": "drag_acceleration",
  "class": "PanoramaPlayer",
  "touchControlMode": "drag_rotation",
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
   "progressBarOpacity": 1,
   "toolTipPaddingBottom": 4,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "progressRight": 0,
   "toolTipBorderSize": 1,
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "playbackBarHeadShadowVerticalLength": 0,
   "toolTipShadowOpacity": 1,
   "toolTipOpacity": 1,
   "playbackBarBorderColor": "#FFFFFF",
   "playbackBarHeight": 10,
   "toolTipShadowVerticalLength": 0,
   "toolTipTextShadowColor": "#000000",
   "playbackBarHeadWidth": 6,
   "shadow": false,
   "toolTipFontStyle": "normal",
   "class": "ViewerArea",
   "playbackBarProgressBorderSize": 0,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "progressBottom": 2,
   "playbackBarBackgroundColorDirection": "vertical",
   "paddingBottom": 0,
   "playbackBarRight": 0,
   "toolTipBackgroundColor": "#F6F6F6",
   "playbackBarHeadShadowHorizontalLength": 0,
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
   "progressBackgroundOpacity": 1,
   "toolTipFontColor": "#606060",
   "playbackBarBorderRadius": 0,
   "playbackBarHeadShadow": true,
   "playbackBarProgressBorderColor": "#000000",
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "toolTipPaddingRight": 6,
   "width": 321,
   "height": 224,
   "toolTipTextShadowOpacity": 0,
   "playbackBarHeadBorderRadius": 0,
   "toolTipPaddingTop": 4,
   "borderRadius": 0,
   "paddingLeft": 0,
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
   "playbackBarBackgroundOpacity": 1,
   "playbackBarBorderSize": 0,
   "toolTipBorderRadius": 3,
   "minHeight": 224,
   "playbackBarHeadShadowOpacity": 0.7,
   "playbackBarHeadHeight": 15,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "visible": false,
   "playbackBarHeadBorderSize": 0,
   "playbackBarHeadShadowColor": "#000000",
   "toolTipFontWeight": "normal",
   "id": "MapViewer",
   "toolTipTextShadowBlurRadius": 3,
   "progressBarBorderColor": "#000000",
   "toolTipShadowHorizontalLength": 0,
   "playbackBarHeadOpacity": 1,
   "progressBarBackgroundColorRatios": [
    0
   ],
   "progressBackgroundColorDirection": "vertical",
   "progressHeight": 10,
   "playbackBarBottom": 0,
   "minWidth": 321,
   "progressBorderColor": "#000000",
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
  "id": "panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -155.88,
   "class": "PanoramaCameraPosition",
   "pitch": -1.95
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
 {
  "id": "panorama_0F84F19D_0671_6675_4191_5761B2287855_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 161.16,
   "class": "PanoramaCameraPosition",
   "pitch": 2.07
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
 {
  "id": "panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_camera",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
 {
  "id": "panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_camera",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
 {
  "id": "panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_camera",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
 {
  "id": "panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_camera",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
 {
  "id": "panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_camera",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
 {
  "id": "panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_camera",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
 {
  "id": "panorama_0F98F446_0671_2ED7_4191_DEC01556F741_camera",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
 {
  "id": "panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_camera",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
 {
  "id": "panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_camera",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
 {
  "id": "panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_camera",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
 {
  "id": "panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_camera",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
 {
  "id": "panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_camera",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
 {
  "id": "panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_camera",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
 {
  "id": "panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_camera",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
 {
  "id": "panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_camera",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_0FD85D6E_0673_DED7_40FD_D23817113C40",
 {
  "id": "panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_camera",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D",
 {
  "id": "panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D_camera",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
 {
  "id": "panorama_0FD82345_0671_EAD5_4173_8B63686C1397_camera",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
 {
  "id": "panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_camera",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
 {
  "id": "panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_camera",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
 {
  "id": "panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_camera",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "id": "PanoramaPlayListItem_18C442DF_15B5_485C_41B3_3A9AD9A52E66",
    "media": "this.panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_18C442DF_15B5_485C_41B3_3A9AD9A52E66, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D_camera"
   },
   {
    "id": "PanoramaPlayListItem_18C4F2DF_15B5_485C_41B4_17FFBD9087F7",
    "media": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_18C4F2DF_15B5_485C_41B4_17FFBD9087F7, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855_camera"
   },
   {
    "id": "PanoramaPlayListItem_18CB22DF_15B5_485C_41AC_C28E55C6B80F",
    "media": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_18CB22DF_15B5_485C_41AC_C28E55C6B80F, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_camera"
   },
   {
    "id": "PanoramaPlayListItem_18CBA2DF_15B5_485C_41B0_B718E4B08296",
    "media": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_18CBA2DF_15B5_485C_41B0_B718E4B08296, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_camera"
   },
   {
    "id": "PanoramaPlayListItem_18CBE2DF_15B5_485C_41B5_0BF9E5904126",
    "media": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_18CBE2DF_15B5_485C_41B5_0BF9E5904126, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_camera"
   },
   {
    "id": "PanoramaPlayListItem_18CA72DF_15B5_485C_41AE_A32B1BFCA762",
    "media": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_18CA72DF_15B5_485C_41AE_A32B1BFCA762, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_camera"
   },
   {
    "id": "PanoramaPlayListItem_18CAA2DF_15B5_485C_41A7_1C1D8EF6C6B3",
    "media": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_18CAA2DF_15B5_485C_41A7_1C1D8EF6C6B3, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_camera"
   },
   {
    "id": "PanoramaPlayListItem_18C932DF_15B5_485C_41AE_D7A1DF5B7BEF",
    "media": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_18C932DF_15B5_485C_41AE_D7A1DF5B7BEF, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_camera"
   },
   {
    "id": "PanoramaPlayListItem_18C962DF_15B5_485C_41AF_A210930668A7",
    "media": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_18C962DF_15B5_485C_41AF_A210930668A7, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741_camera"
   },
   {
    "id": "PanoramaPlayListItem_18C982DF_15B5_485C_418D_28A506DBCBD0",
    "media": "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_18C982DF_15B5_485C_418D_28A506DBCBD0, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_camera"
   },
   {
    "id": "PanoramaPlayListItem_18C822DF_15B5_485C_418A_81D8C68A7523",
    "media": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_18C822DF_15B5_485C_418A_81D8C68A7523, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_camera"
   },
   {
    "id": "PanoramaPlayListItem_18C852DF_15B5_485C_41B1_DCAF5CEDEF67",
    "media": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_18C852DF_15B5_485C_41B1_DCAF5CEDEF67, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_camera"
   },
   {
    "id": "PanoramaPlayListItem_18C8F2DF_15B5_485C_4191_6FECBF0E5850",
    "media": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_18C8F2DF_15B5_485C_4191_6FECBF0E5850, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_camera"
   },
   {
    "id": "PanoramaPlayListItem_18CF12DF_15B5_485C_4183_E695EF78105A",
    "media": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_18CF12DF_15B5_485C_4183_E695EF78105A, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_camera"
   },
   {
    "id": "PanoramaPlayListItem_18CFB2DF_15B5_485C_41A4_7B48BCB04950",
    "media": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_18CFB2DF_15B5_485C_41A4_7B48BCB04950, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_camera"
   },
   {
    "id": "PanoramaPlayListItem_18CFC2DF_15B5_485C_41B3_76722E059629",
    "media": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_18CFC2DF_15B5_485C_41B3_76722E059629, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_camera"
   },
   {
    "id": "PanoramaPlayListItem_18CE42DF_15B5_485C_41B2_08A1584A6B63",
    "media": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_18CE42DF_15B5_485C_41B2_08A1584A6B63, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_camera"
   },
   {
    "id": "PanoramaPlayListItem_18CEE2DF_15B5_485C_4189_D3A7603CC230",
    "media": "this.panorama_0FD85D6E_0673_DED7_40FD_D23817113C40",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_18CEE2DF_15B5_485C_4189_D3A7603CC230, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_camera"
   },
   {
    "id": "PanoramaPlayListItem_18CD12DF_15B5_485C_41B3_27546765C5C3",
    "media": "this.panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_18CD12DF_15B5_485C_41B3_27546765C5C3, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D_camera"
   },
   {
    "id": "PanoramaPlayListItem_18CDA2DF_15B5_485C_4199_8A178F6FCAB8",
    "media": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_18CDA2DF_15B5_485C_4199_8A178F6FCAB8, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397_camera"
   },
   {
    "id": "PanoramaPlayListItem_18CC32DF_15B5_485C_419F_1A38911D1B9A",
    "media": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_18CC32DF_15B5_485C_419F_1A38911D1B9A, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_camera"
   },
   {
    "id": "PanoramaPlayListItem_18CC42DF_15B5_485C_41AF_35D561445DB3",
    "media": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_18CC42DF_15B5_485C_41AF_35D561445DB3, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_camera"
   },
   {
    "id": "PanoramaPlayListItem_18CCE2DF_15B5_485C_41B1_98C3F5BD1358",
    "media": "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_18CCE2DF_15B5_485C_41B1_98C3F5BD1358, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 0)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_camera"
   }
  ]
 },
 "this.map_04171D1A_107E_8278_4197_9875AF5B32BE",
 {
  "id": "playList_18C5F2DF_15B5_485C_41AF_08FB111A00CD",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MapViewerMapPlayer",
    "class": "MapPlayListItem",
    "media": "this.map_04171D1A_107E_8278_4197_9875AF5B32BE",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ]
 },
 "this.Menu_183372DF_15B5_485C_4183_BACB2E49FC28",
 {
  "id": "camera_1826030E_15B5_49BC_41B2_225A2CB547F3",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 157.27,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_182F331D_15B5_49DC_41B4_E630803E88B1",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -40.47,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1811F32D_15B5_49FC_41A4_0FDA514369D9",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 161.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_181B2333_15B5_49E4_41A9_26CCD2AA4198",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 124.16,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_181D9343_15B5_49A4_41B4_418354FC3A11",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -143.15,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1800E353_15B5_49A4_41B3_8BB82D3FD6C3",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -8.71,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_18098372_15B5_4864_41B4_C7E3498A66DC",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -172.07,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_18731382_15B5_48A7_41B2_6671866DCD16",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 2.67,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1875D398_15B5_48A4_41AB_7D5B670E0CAA",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 1.26,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_187EF3A7_15B5_48EC_41A8_0770ECBC92ED",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -1.55,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_186083D6_15B5_48AC_41B0_9AF75298D38D",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -58.27,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_186873E6_15B5_486C_41B1_0ED65CD01CBB",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -150.83,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_185633FC_15B5_485C_41A7_E61E3DFAE836",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -39.29,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_185E140C_15B5_4FBC_41A1_61B0DF7F1258",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -27.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_184AF42B_15B5_4FE4_41A2_87C586112C8E",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -55.02,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1BB7B43B_15B5_4FE5_41B1_874D9D86ADAF",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 164.93,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1BA2944A_15B5_4FA4_41A5_2225B3D8B856",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -67.24,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1BADD45A_15B5_4FA4_41B4_AC2ADC55C70F",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 135.89,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1B988460_15B5_4864_41A9_834A6F070D68",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 83.73,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1B8AF470_15B5_4864_41AB_76A8772109E2",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0.13,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1BF5F480_15B5_48A3_418C_EC0D028DD278",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 179.12,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1BE6048F_15B5_48BC_41A1_2F9AA3B4D87C",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -179.97,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1BD1649F_15B5_48DC_418E_AC2F9B7CC906",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 126.72,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1BDC64AE_15B5_48FC_41A0_25A050929E65",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -98.17,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_18B764E4_15B5_486C_41B1_F7F0B9881F7B",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 33.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_18B494E4_15B5_486C_4192_ADDC777CAD06",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -30.7,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_18BFC4F3_15B5_4864_4197_C901DB004326",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -175.23,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_18A18503_15B5_49A4_4173_A2F8E71F8225",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 1.45,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_18A5E513_15B5_49A4_41A3_604FE2B086CD",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 177.79,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_18AFE522_15B5_49E4_41B0_202BC9E5FB45",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -74.62,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_18921529_15B5_49E4_4190_B911770F800A",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -120.92,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_18942538_15B5_49E4_41A0_985B9C615664",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -154.33,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1898F548_15B5_49A4_41A7_D0170A790CFC",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 179.05,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_18829558_15B5_49A4_41AD_A55D04EB287B",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -113.69,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1884F567_15B5_486C_41A4_6165408519AD",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 137.87,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_188E1577_15B5_486C_41AF_F69C5C75F64E",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 23.02,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_18F0D577_15B5_486C_41A0_DD14BC363EF2",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 179.73,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_18FBC58D_15B5_48BC_41A7_8AC0EA4FFC89",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 2.01,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_18FCE59D_15B5_48DC_4196_53C0BF22AC3C",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 177.31,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_18E435AC_15B5_48FC_415A_B113353689D6",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0.33,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_18EE75BC_15B5_48DC_4195_E20216380023",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 25.72,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_18D465CC_15B5_48BC_4191_5D3008F8AC88",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 81.38,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_18C335DB_15B5_48A4_4194_000A70D0FC4B",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 8.89,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_18C9F5EB_15B5_4864_4161_6EF7D5B83D42",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -177.47,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1830C5FC_15B5_4863_41B3_4A161E76C7CD",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -172.31,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_183DD608_15B5_4BA4_4128_FBF63FB1CC20",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -5.47,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_182AA612_15B5_4BA4_41AB_27F3630E59BC",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -43.39,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1811F61C_15B5_4BDC_41A2_671A21DDA676",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -11.41,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_181C6630_15B5_4BE4_41A9_8E1B9FB05598",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 173.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1808263A_15B5_4BE4_41B5_A6D8F0E0BAB3",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 5.26,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1875364F_15B5_4BBC_41B5_AD4039DB6262",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -179.36,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1861E659_15B5_4BA4_41AE_2CEEADB96D04",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0.72,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_186D8663_15B5_4864_41AA_6A6A709277C2",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 145.69,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_18592675_15B5_486C_41A3_2C4E73215A9B",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -57.25,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_18445681_15B5_48A4_41A0_6FAA1F332F69",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 72.38,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1BB0068B_15B5_48A4_41A9_74829BC3BE4C",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -23.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1BA3469E_15B5_48DF_4176_6321AF4D7050",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -167.38,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1BAD36AA_15B5_48E4_416A_21FED853182A",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -45.59,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1B9AD6B4_15B5_48EC_41B4_E13B4AEE40AB",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -63.6,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1B85C6BE_15B5_48DC_4181_F06E1DD0E0A0",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -161.66,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1BF666D0_15B5_48A4_419C_4B341B9A86C6",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 36.55,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1BE136DC_15B5_485C_4170_BDA16F9DF844",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -66.49,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1BD346E6_15B5_486C_4183_2E07763CF9F4",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -72.89,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1BDE46F8_15B5_4864_41B3_6961FA0AE472",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 157.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1BC8A703_15B5_49A5_41AA_F59CD5C71AAB",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -98.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1B39170F_15B5_49BC_41B2_A349B1EA2710",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 88.16,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1B243723_15B5_49E4_419E_88DA8C4C69A5",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 179.82,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1B165737_15B5_49EC_41A2_3427C57BA206",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -179.75,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1B01474B_15B5_49A4_41AC_152C01094D01",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -179.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1B73D75F_15B5_485C_41AD_B25F3CCE0F84",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -178.54,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1B7EC774_15B5_486C_41B0_CC0FC2E13D42",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -92.18,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1B6F5788_15B5_48A4_41B4_3653836CF934",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 1.7,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1B59879C_15B5_48DC_4184_05BC4AF31A97",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -49.86,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1B4497C4_15B5_48AC_4189_B409BEE1A29E",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -168.24,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1AB517D7_15B5_48AD_4166_4EA5250ED44C",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -8.52,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1AA007ED_15B5_487C_41AD_6B65E4B65235",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 163.25,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1A92B801_15B5_47A4_41A5_51DE669C1EAB",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -175.26,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1A9DC813_15B5_47A4_41B2_C47F117076CE",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 36.86,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1A8E7827_15B5_47EC_41B4_06A1F457272C",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 1.58,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1AF8C83E_15B5_47DF_41B5_6F58D0987AC9",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 1.98,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1AEBC850_15B5_47A4_41A5_3B98D3632922",
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
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0.73,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "camera_1AD5685C_15B5_B85C_41AA_2D612CDAB2FD",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -11.1,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
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
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipShadowOpacity": 1,
  "toolTipOpacity": 1,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarHeight": 10,
  "toolTipShadowVerticalLength": 0,
  "toolTipTextShadowColor": "#000000",
  "playbackBarHeadWidth": 6,
  "shadow": false,
  "toolTipFontStyle": "normal",
  "class": "ViewerArea",
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBottom": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "paddingBottom": 0,
  "playbackBarRight": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeadShadowHorizontalLength": 0,
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
  "progressBackgroundOpacity": 1,
  "toolTipFontColor": "#606060",
  "playbackBarBorderRadius": 0,
  "playbackBarHeadShadow": true,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipPaddingRight": 6,
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
  "playbackBarLeft": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipPaddingLeft": 6,
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarBackgroundOpacity": 1,
  "playbackBarBorderSize": 0,
  "toolTipBorderRadius": 3,
  "minHeight": 50,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarHeadHeight": 15,
  "top": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadBorderSize": 0,
  "bottom": "0%",
  "toolTipFontWeight": "normal",
  "toolTipTextShadowBlurRadius": 3,
  "progressBarBorderColor": "#000000",
  "id": "MainViewer",
  "playbackBarHeadOpacity": 1,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowColor": "#000000",
  "progressHeight": 10,
  "left": 0,
  "minWidth": 100,
  "toolTipShadowHorizontalLength": 0,
  "progressBorderColor": "#000000",
  "playbackBarBottom": 5,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "right": 0,
  "toolTipFontFamily": "Arial",
  "progressOpacity": 1,
  "progressBarBackgroundColor": [
   "#3399FF"
  ]
 },
 {
  "scrollBarColor": "#000000",
  "overflow": "scroll",
  "scrollBarOpacity": 0.5,
  "paddingRight": 0,
  "layout": "horizontal",
  "height": "8.261%",
  "width": "100%",
  "borderRadius": 0,
  "borderSize": 0,
  "gap": 30,
  "paddingLeft": 0,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "contentOpaque": false,
  "shadow": false,
  "minHeight": 1,
  "horizontalAlign": "center",
  "paddingBottom": 0,
  "class": "Container",
  "bottom": "2.38%",
  "id": "Container_03BF4D6F_10EF_82D8_41A4_FC17EDB0E403",
  "paddingTop": 0,
  "left": "0%",
  "minWidth": 1,
  "backgroundOpacity": 0,
  "children": [
   {
    "maxWidth": 364,
    "paddingRight": 0,
    "mode": "push",
    "iconURL": "skin/IconButton_1948F4E2_15AD_4864_418E_8BE59E6C1650.png",
    "height": "100%",
    "width": "21.95%",
    "paddingLeft": 0,
    "transparencyActive": false,
    "borderRadius": 0,
    "borderSize": 0,
    "shadow": false,
    "minHeight": 1,
    "horizontalAlign": "center",
    "click": "eval('var type=\"prev\";var screenUpdate={\t\"0\":{\"next\":1},\t\"1\":{\"next\":2, \"prev\": 0}, \t\"2\":{\"next\":3, \"prev\": 1}, \t\"3\":{\"next\":4, \"prev\": 2},\"4\":{\"next\":5, \"prev\": 3},\"5\":{\"next\":6, \"prev\": 4},\"6\":{\"next\":7, \"prev\": 5},\"7\":{\"next\":8, \"prev\": 6},\"8\":{\"next\":9, \"prev\": 7},\"9\":{ \"next\":10,\"prev\": 8},\"10\":{\"next\":11, \"prev\": 9},\"11\":{\"next\":12, \"prev\": 10},\"12\":{\"next\":13, \"prev\": 11},\"13\":{\"next\":14, \"prev\": 12},\"14\":{\"next\":15, \"prev\": 13},\"15\":{ \"next\":16,\"prev\": 14},\"16\":{\"next\":17, \"prev\": 15},\"17\":{ \"next\":18,\"prev\": 16},\"18\":{\"next\":19, \"prev\": 17},\"19\":{\"next\":20, \"prev\": 18},\"20\":{\"next\":21, \"prev\": 19},\"21\":{\"next\":22, \"prev\": 20},\"22\":{\"next\":0, \"prev\": 21}};var displayIndex = localStorage.getItem(\"displayIndex\");if (!displayIndex) {\tdisplayIndex = 0;}displayIndex+=\"\";if (screenUpdate.hasOwnProperty(displayIndex)) {\tif (screenUpdate[displayIndex].hasOwnProperty(type)) {\t\tlocalStorage.setItem(\"displayIndex\", screenUpdate[displayIndex][type]);\t\tsetMediaByIndex(screenUpdate[displayIndex][type]);\t}}');",
    "cursor": "hand",
    "paddingBottom": 0,
    "class": "IconButton",
    "id": "IconButton_1948F4E2_15AD_4864_418E_8BE59E6C1650",
    "paddingTop": 0,
    "minWidth": 1,
    "backgroundOpacity": 0,
    "verticalAlign": "middle",
    "maxHeight": 376
   },
   {
    "maxWidth": 364,
    "paddingRight": 0,
    "mode": "push",
    "iconURL": "skin/IconButton_19CC7E37_15AC_BBEC_41AB_69F6D0CFF351.png",
    "height": "100%",
    "width": "21.95%",
    "paddingLeft": 0,
    "transparencyActive": false,
    "borderRadius": 0,
    "borderSize": 0,
    "shadow": false,
    "minHeight": 1,
    "horizontalAlign": "center",
    "click": "eval('var type=\"next\";var screenUpdate={\t\"0\":{\"next\":1},\t\"1\":{\"next\":2, \"prev\": 0}, \t\"2\":{\"next\":3, \"prev\": 1}, \t\"3\":{\"next\":4, \"prev\": 2},\"4\":{\"next\":5, \"prev\": 3},\"5\":{\"next\":6, \"prev\": 4},\"6\":{\"next\":7, \"prev\": 5},\"7\":{\"next\":8, \"prev\": 6},\"8\":{\"next\":9, \"prev\": 7},\"9\":{ \"next\":10,\"prev\": 8},\"10\":{\"next\":11, \"prev\": 9},\"11\":{\"next\":12, \"prev\": 10},\"12\":{\"next\":13, \"prev\": 11},\"13\":{\"next\":14, \"prev\": 12},\"14\":{\"next\":15, \"prev\": 13},\"15\":{ \"next\":16,\"prev\": 14},\"16\":{\"next\":17, \"prev\": 15},\"17\":{ \"next\":18,\"prev\": 16},\"18\":{\"next\":19, \"prev\": 17},\"19\":{\"next\":20, \"prev\": 18},\"20\":{\"next\":21, \"prev\": 19},\"21\":{\"next\":22, \"prev\": 20},\"22\":{\"next\":0, \"prev\": 21}};var displayIndex = localStorage.getItem(\"displayIndex\");if (!displayIndex) {\tdisplayIndex = 0;}displayIndex+=\"\";if (screenUpdate.hasOwnProperty(displayIndex)) {\tif (screenUpdate[displayIndex].hasOwnProperty(type)) {\t\tlocalStorage.setItem(\"displayIndex\", screenUpdate[displayIndex][type]);\t\tsetMediaByIndex(screenUpdate[displayIndex][type]);\t}}');",
    "cursor": "hand",
    "paddingBottom": 0,
    "class": "IconButton",
    "id": "IconButton_19CC7E37_15AC_BBEC_41AB_69F6D0CFF351",
    "paddingTop": 0,
    "minWidth": 1,
    "backgroundOpacity": 0,
    "verticalAlign": "middle",
    "maxHeight": 376
   }
  ],
  "verticalAlign": "middle",
  "scrollBarVisible": "rollOver"
 },
 {
  "scrollBarColor": "#000000",
  "overflow": "hidden",
  "scrollBarOpacity": 0.5,
  "paddingRight": 0,
  "layout": "horizontal",
  "height": "48.804%",
  "width": "99.517%",
  "borderRadius": 0,
  "borderSize": 0,
  "gap": 3,
  "paddingLeft": 0,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "contentOpaque": false,
  "shadow": false,
  "minHeight": 1,
  "horizontalAlign": "left",
  "paddingBottom": 0,
  "top": "2.92%",
  "class": "Container",
  "id": "Container_0A0F57B0_11E6_8E48_4165_04342D4A22BC",
  "paddingTop": 0,
  "minWidth": 1,
  "backgroundOpacity": 0,
  "right": "0%",
  "children": [
   {
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "width": 25.1,
    "layout": "absolute",
    "height": "99.332%",
    "paddingLeft": 0,
    "borderRadius": 0,
    "borderSize": 0,
    "contentOpaque": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "shadow": false,
    "minHeight": 1,
    "horizontalAlign": "left",
    "class": "Container",
    "paddingBottom": 0,
    "gap": 10,
    "id": "Container_03416CBF_1280_710E_4175_84AC659A193B",
    "paddingTop": 0,
    "minWidth": 1,
    "backgroundOpacity": 0,
    "children": [
     {
      "maxWidth": 364,
      "paddingRight": 0,
      "mode": "push",
      "width": 25.35,
      "iconURL": "skin/IconButton_03775ED6_1281_F11E_4198_31CF988810B5.png",
      "height": 32,
      "transparencyActive": false,
      "borderRadius": 0,
      "paddingLeft": 0,
      "borderSize": 0,
      "shadow": false,
      "minHeight": 1,
      "horizontalAlign": "left",
      "top": "0%",
      "click": "this.setComponentVisibility(this.IconButton_0376DABC_1280_B112_41A3_B02A29D9F291, true, 0, null, null, false); this.setComponentVisibility(this.MapViewer, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_03775ED6_1281_F11E_4198_31CF988810B5, false, 0, null, null, false)",
      "cursor": "hand",
      "paddingBottom": 0,
      "class": "IconButton",
      "id": "IconButton_03775ED6_1281_F11E_4198_31CF988810B5",
      "paddingTop": 0,
      "left": "0.38%",
      "minWidth": 1,
      "backgroundOpacity": 0,
      "verticalAlign": "top",
      "maxHeight": 376
     },
     {
      "maxWidth": 364,
      "paddingRight": 0,
      "mode": "push",
      "width": 24,
      "iconURL": "skin/IconButton_0376DABC_1280_B112_41A3_B02A29D9F291.png",
      "height": 28,
      "transparencyActive": false,
      "borderRadius": 0,
      "paddingLeft": 0,
      "borderSize": 0,
      "shadow": false,
      "minHeight": 1,
      "horizontalAlign": "left",
      "top": "0%",
      "click": "this.setComponentVisibility(this.IconButton_0376DABC_1280_B112_41A3_B02A29D9F291, false, 0, null, null, false); this.setComponentVisibility(this.MapViewer, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_03775ED6_1281_F11E_4198_31CF988810B5, true, 0, null, null, false)",
      "cursor": "hand",
      "visible": false,
      "paddingBottom": 0,
      "class": "IconButton",
      "id": "IconButton_0376DABC_1280_B112_41A3_B02A29D9F291",
      "paddingTop": 0,
      "left": "0%",
      "minWidth": 1,
      "backgroundOpacity": 0,
      "verticalAlign": "top",
      "maxHeight": 376
     }
    ],
    "verticalAlign": "top",
    "scrollBarVisible": "rollOver"
   },
   {
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "width": 692,
    "layout": "horizontal",
    "height": 240,
    "paddingLeft": 0,
    "borderRadius": 0,
    "borderSize": 0,
    "contentOpaque": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "shadow": false,
    "minHeight": 1,
    "horizontalAlign": "left",
    "class": "Container",
    "paddingBottom": 0,
    "id": "Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943",
    "gap": 4,
    "paddingTop": 0,
    "minWidth": 1,
    "backgroundOpacity": 0,
    "children": [
     "this.MapViewer"
    ],
    "verticalAlign": "top",
    "scrollBarVisible": "rollOver"
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
   "#FFFFFF"
  ],
  "paddingRight": 0,
  "scrollBarColor": "#000000",
  "height": "100%",
  "width": "100%",
  "layout": "horizontal",
  "borderRadius": 0,
  "paddingLeft": 0,
  "borderSize": 0,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "contentOpaque": false,
  "shadow": false,
  "minHeight": 1,
  "horizontalAlign": "center",
  "top": "0%",
  "paddingBottom": 0,
  "class": "Container",
  "backgroundColorRatios": [
   0,
   1
  ],
  "gap": 10,
  "id": "Container_048CC2F3_11E9_4B79_4186_517CBA014E52",
  "paddingTop": 0,
  "left": "0%",
  "minWidth": 1,
  "backgroundOpacity": 0.3,
  "children": [
   {
    "paddingRight": 0,
    "height": "100%",
    "width": "100%",
    "paddingLeft": 0,
    "borderRadius": 0,
    "borderSize": 0,
    "horizontalAlign": "center",
    "scaleMode": "fit_to_height",
    "shadow": false,
    "minHeight": 1,
    "click": "eval('var frame=+location.search.replace(\"?\", \"\");if (!frame) {frame = 0;}if (typeof setMediaByIndex === \"function\") {localStorage.setItem(\"displayIndex\", frame);setMediaByIndex(frame);}');; this.setComponentVisibility(this.Container_048CC2F3_11E9_4B79_4186_517CBA014E52, false, 0, null, null, false); this.setComponentVisibility(this.Image_19B2F4BC_0BF1_B12F_419C_772DA37A7B15, false, 0, null, null, false)",
    "paddingBottom": 0,
    "class": "Image",
    "url": "skin/Image_19B2F4BC_0BF1_B12F_419C_772DA37A7B15.jpg",
    "id": "Image_19B2F4BC_0BF1_B12F_419C_772DA37A7B15",
    "paddingTop": 0,
    "minWidth": 1,
    "backgroundOpacity": 0,
    "verticalAlign": "middle",
    "maxHeight": 1000
   }
  ],
  "verticalAlign": "middle",
  "scrollBarVisible": "rollOver"
 }
], 
 "overflow": "visible",
 "scrollBarOpacity": 0.5,
 "mouseWheelEnabled": true,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "height": "100%",
 "width": "100%",
 "layout": "absolute",
 "borderRadius": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadow": false,
 "minHeight": 20,
 "horizontalAlign": "left",
 "backgroundPreloadEnabled": true,
 "paddingBottom": 0,
 "class": "Player",
 "scripts": {
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "existsKey": function(key){  return key in window; },
  "unregisterKey": function(key){  delete window[key]; },
  "registerKey": function(key, value){  window[key] = value; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getKey": function(key){  return window[key]; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); }
 },
 "gap": 10,
 "vrPolyfillScale": 1,
 "id": "rootPlayer",
 "paddingTop": 0,
 "minWidth": 20,
 "start": "this.mainPlayList.set('selectedIndex', 0); this.playList_18C5F2DF_15B5_485C_41AF_08FB111A00CD.set('selectedIndex', 0)",
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver"
})