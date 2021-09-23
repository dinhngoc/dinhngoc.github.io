TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "class": "Panorama",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "rollOverDisplay": false,
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 100,
           "width": 81,
           "class": "ImageResourceLevel",
           "url": "media/panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "hfov": 11.67,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 1.46,
        "pitch": -4.9
       }
      ],
      "id": "overlay_1669253C_06F1_24AE_417D_AD87447571F8",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_0FD85D6E_0673_DED7_40FD_D23817113C40, this.camera_0BA625D2_11E1_8DC8_4163_AC834CD070F4); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 1.46,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 200,
           "width": 162,
           "class": "ImageResourceLevel",
           "url": "media/panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D_0_HS_0_0.png"
          }
         ]
        },
        "hfov": 11.67,
        "pitch": -4.9
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D_0_HS_1_0_map.gif"
          }
         ]
        },
        "hfov": 10.99,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 1.51,
        "pitch": -13.63
       }
      ],
      "id": "overlay_1723D9CD_06F1_2FEE_4195_F17AB1536320",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 1.51,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 115,
           "width": 157,
           "class": "ImageResourceLevel",
           "url": "media/panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D_0_HS_1_0.png"
          }
         ]
        },
        "hfov": 10.99,
        "pitch": -13.63
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "class": "ImageResourceLevel",
       "url": "media/panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D_hq.jpeg"
      },
      {
       "height": 1608,
       "width": 3217,
       "class": "ImageResourceLevel",
       "url": "media/panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D.jpeg"
      }
     ]
    }
   }
  ],
  "partial": false,
  "hfovMin": 60,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D_t.jpg",
  "id": "panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D",
  "mapLocations": [
   {
    "x": 580.16,
    "class": "PanoramaMapLocation",
    "y": 425.01,
    "angle": 115.84,
    "map": {
     "class": "Map",
     "fieldOfViewOverlayInsideColor": "#009966",
     "minimumZoomFactor": 0.5,
     "width": 1832,
     "id": "map_04171D1A_107E_8278_4197_9875AF5B32BE",
     "maximumZoomFactor": 1.2,
     "fieldOfViewOverlayInsideOpacity": 0.27,
     "thumbnailUrl": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_t.png",
     "fieldOfViewOverlayRadiusScale": 0.05,
     "height": 1291,
     "label": "FloorPlan",
     "fieldOfViewOverlayOutsideOpacity": 0,
     "overlays": [
      {
       "rollOverDisplay": false,
       "image": {
        "x": 565.16,
        "class": "HotspotMapOverlayImage",
        "y": 401.05,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 41,
           "width": 26,
           "class": "ImageResourceLevel",
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_0.png"
          }
         ]
        },
        "width": 30,
        "height": 47.91
       },
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 565.16,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "width": 13,
           "class": "ImageResourceLevel",
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_0_map.gif"
          }
         ]
        },
        "width": 30,
        "class": "HotspotMapOverlayMap",
        "y": 401.05,
        "height": 47.91,
        "offsetX": 0
       },
       "id": "overlay_04170D1A_107E_8278_4187_A18E09DA2DDE",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 0)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "image": {
        "x": 622.55,
        "class": "HotspotMapOverlayImage",
        "y": 432.09,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 36,
           "width": 26,
           "class": "ImageResourceLevel",
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_1.png"
          }
         ]
        },
        "width": 30,
        "height": 42.29
       },
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 622.55,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 18,
           "width": 13,
           "class": "ImageResourceLevel",
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_1_map.gif"
          }
         ]
        },
        "width": 30,
        "class": "HotspotMapOverlayMap",
        "y": 432.09,
        "height": 42.29,
        "offsetX": 0
       },
       "id": "overlay_04173D1A_107E_8278_4191_986A08F23E08",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 1)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "image": {
        "x": 680.64,
        "class": "HotspotMapOverlayImage",
        "y": 458.97,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 39,
           "width": 26,
           "class": "ImageResourceLevel",
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_2.png"
          }
         ]
        },
        "width": 30,
        "height": 45.33
       },
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 680.64,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 19,
           "width": 13,
           "class": "ImageResourceLevel",
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_2_map.gif"
          }
         ]
        },
        "width": 30,
        "class": "HotspotMapOverlayMap",
        "y": 458.97,
        "height": 45.33,
        "offsetX": 0
       },
       "id": "overlay_04172D1A_107E_8278_4194_33D3CE428AB1",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 2)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "image": {
        "x": 735.11,
        "class": "HotspotMapOverlayImage",
        "y": 488.82,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 38,
           "width": 26,
           "class": "ImageResourceLevel",
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_3.png"
          }
         ]
        },
        "width": 30,
        "height": 44
       },
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 735.11,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 19,
           "width": 13,
           "class": "ImageResourceLevel",
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_3_map.gif"
          }
         ]
        },
        "width": 30,
        "class": "HotspotMapOverlayMap",
        "y": 488.82,
        "height": 44,
        "offsetX": 0
       },
       "id": "overlay_04175D1A_107E_8278_416C_E94CEC26B852",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 3)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "image": {
        "x": 799.54,
        "class": "HotspotMapOverlayImage",
        "y": 523.8,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 26,
           "width": 26,
           "class": "ImageResourceLevel",
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_4.png"
          }
         ]
        },
        "width": 30,
        "height": 30
       },
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 799.54,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 13,
           "width": 13,
           "class": "ImageResourceLevel",
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_4_map.gif"
          }
         ]
        },
        "width": 30,
        "class": "HotspotMapOverlayMap",
        "y": 523.8,
        "height": 30,
        "offsetX": 0
       },
       "id": "overlay_04174D1A_107E_8278_4180_10D7F38B245C",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 4)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "image": {
        "x": 862.86,
        "class": "HotspotMapOverlayImage",
        "y": 547.53,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 36,
           "width": 26,
           "class": "ImageResourceLevel",
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_5.png"
          }
         ]
        },
        "width": 30,
        "height": 41.63
       },
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 862.86,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 18,
           "width": 13,
           "class": "ImageResourceLevel",
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_5_map.gif"
          }
         ]
        },
        "width": 30,
        "class": "HotspotMapOverlayMap",
        "y": 547.53,
        "height": 41.63,
        "offsetX": 0
       },
       "id": "overlay_04176D1B_107E_8278_41B0_BA881B76259B",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 5)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "image": {
        "x": 897.88,
        "class": "HotspotMapOverlayImage",
        "y": 590.04,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 35,
           "width": 27,
           "class": "ImageResourceLevel",
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_6.png"
          }
         ]
        },
        "width": 31.95,
        "height": 41.12
       },
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 897.88,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 17,
           "width": 13,
           "class": "ImageResourceLevel",
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_6_map.gif"
          }
         ]
        },
        "width": 31.95,
        "class": "HotspotMapOverlayMap",
        "y": 590.04,
        "height": 41.12,
        "offsetX": 0
       },
       "id": "overlay_04169D1B_107E_8278_41A6_EB3D534D2F2B",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 6)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "image": {
        "x": 960.05,
        "class": "HotspotMapOverlayImage",
        "y": 540.54,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 26,
           "width": 26,
           "class": "ImageResourceLevel",
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_7.png"
          }
         ]
        },
        "width": 30,
        "height": 30
       },
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 960.05,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 13,
           "width": 13,
           "class": "ImageResourceLevel",
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_7_map.gif"
          }
         ]
        },
        "width": 30,
        "class": "HotspotMapOverlayMap",
        "y": 540.54,
        "height": 30,
        "offsetX": 0
       },
       "id": "overlay_04168D1B_107E_8278_4181_7D9B1E08F2D2",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 7)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "image": {
        "x": 1005.71,
        "class": "HotspotMapOverlayImage",
        "y": 477.75,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 36,
           "width": 26,
           "class": "ImageResourceLevel",
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_8.png"
          }
         ]
        },
        "width": 30,
        "height": 42
       },
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 1005.71,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 18,
           "width": 13,
           "class": "ImageResourceLevel",
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_8_map.gif"
          }
         ]
        },
        "width": 30,
        "class": "HotspotMapOverlayMap",
        "y": 477.75,
        "height": 42,
        "offsetX": 0
       },
       "id": "overlay_0416BD1B_107E_8278_41AA_BA5FC9F9FA15",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 8)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "image": {
        "x": 1034.54,
        "class": "HotspotMapOverlayImage",
        "y": 585.75,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 36,
           "width": 26,
           "class": "ImageResourceLevel",
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_9.png"
          }
         ]
        },
        "width": 30,
        "height": 42.18
       },
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 1034.54,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 18,
           "width": 13,
           "class": "ImageResourceLevel",
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_9_map.gif"
          }
         ]
        },
        "width": 30,
        "class": "HotspotMapOverlayMap",
        "y": 585.75,
        "height": 42.18,
        "offsetX": 0
       },
       "id": "overlay_0416CD1B_107E_8278_41AE_8DC0019B370A",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 9)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "image": {
        "x": 1105.65,
        "class": "HotspotMapOverlayImage",
        "y": 590.18,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 37,
           "width": 26,
           "class": "ImageResourceLevel",
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_10.png"
          }
         ]
        },
        "width": 30,
        "height": 43
       },
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 1105.65,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 18,
           "width": 13,
           "class": "ImageResourceLevel",
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_10_map.gif"
          }
         ]
        },
        "width": 30,
        "class": "HotspotMapOverlayMap",
        "y": 590.18,
        "height": 43,
        "offsetX": 0
       },
       "id": "overlay_0416FD1B_107E_8278_41AF_1298D7350757",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 10)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "image": {
        "x": 1185.27,
        "class": "HotspotMapOverlayImage",
        "y": 596.42,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 38,
           "width": 26,
           "class": "ImageResourceLevel",
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_11.png"
          }
         ]
        },
        "width": 30,
        "height": 44
       },
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 1185.27,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 19,
           "width": 13,
           "class": "ImageResourceLevel",
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_11_map.gif"
          }
         ]
        },
        "width": 30,
        "class": "HotspotMapOverlayMap",
        "y": 596.42,
        "height": 44,
        "offsetX": 0
       },
       "id": "overlay_0416ED1B_107E_8278_418E_ED976FE6EF6F",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 11)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "image": {
        "x": 1233.62,
        "class": "HotspotMapOverlayImage",
        "y": 601.82,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 36,
           "width": 26,
           "class": "ImageResourceLevel",
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_12.png"
          }
         ]
        },
        "width": 30.02,
        "height": 42.04
       },
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 1233.62,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 18,
           "width": 13,
           "class": "ImageResourceLevel",
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_12_map.gif"
          }
         ]
        },
        "width": 30.02,
        "class": "HotspotMapOverlayMap",
        "y": 601.82,
        "height": 42.04,
        "offsetX": 0
       },
       "id": "overlay_04160D1B_107E_8278_41AA_A49F6E8699C8",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 12)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "image": {
        "x": 1280.12,
        "class": "HotspotMapOverlayImage",
        "y": 608.91,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 26,
           "width": 26,
           "class": "ImageResourceLevel",
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_13.png"
          }
         ]
        },
        "width": 30,
        "height": 30
       },
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 1280.12,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 13,
           "width": 13,
           "class": "ImageResourceLevel",
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_13_map.gif"
          }
         ]
        },
        "width": 30,
        "class": "HotspotMapOverlayMap",
        "y": 608.91,
        "height": 30,
        "offsetX": 0
       },
       "id": "overlay_04163D1B_107E_8278_41AF_3D0826F34423",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 13)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "image": {
        "x": 1341.98,
        "class": "HotspotMapOverlayImage",
        "y": 605.72,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 36,
           "width": 26,
           "class": "ImageResourceLevel",
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_14.png"
          }
         ]
        },
        "width": 30,
        "height": 41.81
       },
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 1341.98,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 18,
           "width": 13,
           "class": "ImageResourceLevel",
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_14_map.gif"
          }
         ]
        },
        "width": 30,
        "class": "HotspotMapOverlayMap",
        "y": 605.72,
        "height": 41.81,
        "offsetX": 0
       },
       "id": "overlay_04162D1B_107E_8278_4198_39D6CEC3B0F0",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 14)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "image": {
        "x": 1009.21,
        "class": "HotspotMapOverlayImage",
        "y": 666.3,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 26,
           "width": 26,
           "class": "ImageResourceLevel",
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_15.png"
          }
         ]
        },
        "width": 30,
        "height": 30
       },
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 1009.21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 13,
           "width": 13,
           "class": "ImageResourceLevel",
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_15_map.gif"
          }
         ]
        },
        "width": 30,
        "class": "HotspotMapOverlayMap",
        "y": 666.3,
        "height": 30,
        "offsetX": 0
       },
       "id": "overlay_04167D1B_107E_8278_41A0_87F2806C6E62",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 16)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "image": {
        "x": 1001.24,
        "class": "HotspotMapOverlayImage",
        "y": 698.75,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 36,
           "width": 26,
           "class": "ImageResourceLevel",
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_16.png"
          }
         ]
        },
        "width": 30,
        "height": 42.29
       },
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 1001.24,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 18,
           "width": 13,
           "class": "ImageResourceLevel",
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_16_map.gif"
          }
         ]
        },
        "width": 30,
        "class": "HotspotMapOverlayMap",
        "y": 698.75,
        "height": 42.29,
        "offsetX": 0
       },
       "id": "overlay_04166D1B_107E_8278_41AE_16A37D4CC6E2",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 17)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "image": {
        "x": 994.55,
        "class": "HotspotMapOverlayImage",
        "y": 757.12,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 26,
           "width": 26,
           "class": "ImageResourceLevel",
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_17.png"
          }
         ]
        },
        "width": 30,
        "height": 30
       },
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 994.55,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 13,
           "width": 13,
           "class": "ImageResourceLevel",
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_17_map.gif"
          }
         ]
        },
        "width": 30,
        "class": "HotspotMapOverlayMap",
        "y": 757.12,
        "height": 30,
        "offsetX": 0
       },
       "id": "overlay_04159D1B_107E_8278_41A4_37C4AA2BA6CC",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 18)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "image": {
        "x": 1007.79,
        "class": "HotspotMapOverlayImage",
        "y": 809.23,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 40,
           "width": 26,
           "class": "ImageResourceLevel",
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_18.png"
          }
         ]
        },
        "width": 30,
        "height": 46.26
       },
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 1007.79,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "width": 13,
           "class": "ImageResourceLevel",
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_18_map.gif"
          }
         ]
        },
        "width": 30,
        "class": "HotspotMapOverlayMap",
        "y": 809.23,
        "height": 46.26,
        "offsetX": 0
       },
       "id": "overlay_0415BD1B_107E_8278_418E_97557A0862E9",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 19)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "image": {
        "x": 959.57,
        "class": "HotspotMapOverlayImage",
        "y": 701.68,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 37,
           "width": 26,
           "class": "ImageResourceLevel",
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_19.png"
          }
         ]
        },
        "width": 29.8,
        "height": 42.94
       },
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 959.57,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 18,
           "width": 13,
           "class": "ImageResourceLevel",
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_19_map.gif"
          }
         ]
        },
        "width": 29.8,
        "class": "HotspotMapOverlayMap",
        "y": 701.68,
        "height": 42.94,
        "offsetX": 0
       },
       "id": "overlay_0415AD1B_107E_8278_41AC_30B7F7C6821A",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 22)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "image": {
        "x": 948.63,
        "class": "HotspotMapOverlayImage",
        "y": 651.86,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 40,
           "width": 26,
           "class": "ImageResourceLevel",
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_20.png"
          }
         ]
        },
        "width": 30,
        "height": 46.79
       },
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 948.63,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "width": 13,
           "class": "ImageResourceLevel",
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_20_map.gif"
          }
         ]
        },
        "width": 30,
        "class": "HotspotMapOverlayMap",
        "y": 651.86,
        "height": 46.79,
        "offsetX": 0
       },
       "id": "overlay_0415DD1B_107E_8278_4190_C17CD3ADB853",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 15)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "image": {
        "x": 910.37,
        "class": "HotspotMapOverlayImage",
        "y": 705.53,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 40,
           "width": 26,
           "class": "ImageResourceLevel",
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_21.png"
          }
         ]
        },
        "width": 30,
        "height": 46.39
       },
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 910.37,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "width": 13,
           "class": "ImageResourceLevel",
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_21_map.gif"
          }
         ]
        },
        "width": 30,
        "class": "HotspotMapOverlayMap",
        "y": 705.53,
        "height": 46.39,
        "offsetX": 0
       },
       "id": "overlay_0415FD1B_107E_8278_4186_267461C29CD9",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 21)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "image": {
        "x": 874.86,
        "class": "HotspotMapOverlayImage",
        "y": 720.41,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 39,
           "width": 26,
           "class": "ImageResourceLevel",
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_22.png"
          }
         ]
        },
        "width": 30,
        "height": 45.56
       },
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 874.86,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 19,
           "width": 13,
           "class": "ImageResourceLevel",
           "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_HS_22_map.gif"
          }
         ]
        },
        "width": 30,
        "class": "HotspotMapOverlayMap",
        "y": 720.41,
        "height": 45.56,
        "offsetX": 0
       },
       "id": "overlay_0415ED1C_107E_8278_418F_803D5C1425DD",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 20)"
        }
       ],
       "useHandCursor": true
      }
     ],
     "initialZoomFactor": 1,
     "fieldOfViewOverlayOutsideColor": "#00FF99",
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 1127,
        "width": 1600,
        "class": "ImageResourceLevel",
        "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE.png"
       },
       {
        "height": 563,
        "width": 800,
        "class": "ImageResourceLevel",
        "url": "media/map_04171D1A_107E_8278_4197_9875AF5B32BE_lq.png",
        "grayscale": true
       }
      ]
     },
     "scaleMode": "fit_inside"
    }
   }
  ],
  "cardboardMenu": {
   "class": "Menu",
   "rollOverOpacity": 0.8,
   "selectedFontColor": "#FFFFFF",
   "label": "Media",
   "backgroundColor": "#404040",
   "fontFamily": "Arial",
   "rollOverFontColor": "#FFFFFF",
   "opacity": 0.4,
   "selectedBackgroundColor": "#202020",
   "id": "Menu_0BB18192_11E1_8248_41A7_4C7BE41C6C8A",
   "rollOverBackgroundColor": "#000000",
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
   "fontColor": "#FFFFFF"
  },
  "label": "C01",
  "hfovMax": 120,
  "hfov": 360,
  "adjacentPanoramas": [
   {
    "panorama": {
     "class": "Panorama",
     "frames": [
      {
       "thumbnailUrl": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_t.jpg",
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "rollOverDisplay": false,
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 107,
              "width": 160,
              "class": "ImageResourceLevel",
              "url": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "hfov": 23.04,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 0.64,
           "pitch": -5.15
          }
         ],
         "id": "overlay_14B6E9F3_06FF_6FBA_4191_BB523B46F728",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544, this.camera_0BB69603_11E1_8E48_419A_423F6F97CF15); this.mainPlayList.set('selectedIndex', 2)"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 0.64,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 214,
              "width": 321,
              "class": "ImageResourceLevel",
              "url": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_0_HS_0_0.png"
             }
            ]
           },
           "hfov": 23.04,
           "pitch": -5.15
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 16,
              "width": 24,
              "class": "ImageResourceLevel",
              "url": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_0_HS_1_0_map.gif"
             }
            ]
           },
           "hfov": 10.94,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 1,
           "pitch": -14.51
          }
         ],
         "id": "overlay_12BCBCD9_06FF_E5F6_4132_6BD2D8AC4E5A",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 1,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 104,
              "width": 157,
              "class": "ImageResourceLevel",
              "url": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_0_HS_1_0.png"
             }
            ]
           },
           "hfov": 10.94,
           "pitch": -14.51
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 82,
              "width": 109,
              "class": "ImageResourceLevel",
              "url": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_0_HS_2_0_0_map.gif"
             }
            ]
           },
           "hfov": 15.74,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -179.67,
           "pitch": -0.88
          }
         ],
         "id": "overlay_16333A58_06F0_ECF6_418E_5831E3934A02",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D, this.camera_0BBB9613_11E1_8E48_41A6_8A6587073B0C); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -179.67,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 165,
              "width": 218,
              "class": "ImageResourceLevel",
              "url": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_0_HS_2_0.png"
             }
            ]
           },
           "hfov": 15.74,
           "pitch": -0.88
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 16,
              "width": 26,
              "class": "ImageResourceLevel",
              "url": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_0_HS_3_0_map.gif"
             }
            ]
           },
           "hfov": 11.44,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -177.99,
           "pitch": -7.98
          }
         ],
         "id": "overlay_1690DD0C_06F1_246E_4197_6AD3CD66470D",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -177.99,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 97,
              "width": 160,
              "class": "ImageResourceLevel",
              "url": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_0_HS_3_0.png"
             }
            ]
           },
           "hfov": 11.44,
           "pitch": -7.98
          }
         ]
        }
       ],
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 2500,
          "width": 5000,
          "class": "ImageResourceLevel",
          "url": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_hq.jpeg"
         },
         {
          "height": 1608,
          "width": 3217,
          "class": "ImageResourceLevel",
          "url": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40.jpeg"
         }
        ]
       }
      }
     ],
     "partial": false,
     "hfovMin": 60,
     "pitch": 0,
     "thumbnailUrl": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_t.jpg",
     "id": "panorama_0FD85D6E_0673_DED7_40FD_D23817113C40",
     "mapLocations": [
      {
       "x": 637.55,
       "class": "PanoramaMapLocation",
       "y": 453.24,
       "angle": 118.07,
       "map": "this.map_04171D1A_107E_8278_4197_9875AF5B32BE"
      }
     ],
     "cardboardMenu": "this.Menu_0BB18192_11E1_8248_41A7_4C7BE41C6C8A",
     "label": "C02",
     "hfovMax": 120,
     "hfov": 360,
     "adjacentPanoramas": [
      {
       "panorama": {
        "class": "Panorama",
        "frames": [
         {
          "thumbnailUrl": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_t.jpg",
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "rollOverDisplay": false,
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 100,
                 "width": 97,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "hfov": 13.93,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 0.35,
              "pitch": -6.41
             }
            ],
            "id": "overlay_147A8E68_06F3_64D6_4183_F7E4E488AEE0",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_0FD85D6E_0673_DED7_40FD_D23817113C40, this.camera_0BFEB24E_11E1_86D8_4181_96A0D828DD30); this.mainPlayList.set('selectedIndex', 1)"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 0.35,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 200,
                 "width": 194,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_0_0.png"
                }
               ]
              },
              "hfov": 13.93,
              "pitch": -6.41
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 16,
                 "width": 20,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_1_0_map.gif"
                }
               ]
              },
              "hfov": 11.17,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 0.38,
              "pitch": -14.88
             }
            ],
            "id": "overlay_15ADB079_06F3_1CB6_418B_9B6CDA887ED8",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 0.38,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 122,
                 "width": 160,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_1_0.png"
                }
               ]
              },
              "hfov": 11.17,
              "pitch": -14.88
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 93,
                 "width": 76,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_2_0_0_map.gif"
                }
               ]
              },
              "hfov": 10.99,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -177.99,
              "pitch": -5.9
             }
            ],
            "id": "overlay_14376EDE_06F1_25ED_416E_3CD4528DB12E",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24, this.camera_0BF78240_11E1_86C8_41A6_B442B8F64864); this.mainPlayList.set('selectedIndex', 3)"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -177.99,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 186,
                 "width": 153,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_2_0.png"
                }
               ]
              },
              "hfov": 10.99,
              "pitch": -5.9
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 16,
                 "width": 19,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_3_0_map.gif"
                }
               ]
              },
              "hfov": 10.19,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -177.74,
              "pitch": -15.01
             }
            ],
            "id": "overlay_157DAC36_06F1_24BA_4180_B0CB15CF6B9B",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -177.74,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 118,
                 "width": 146,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_3_0.png"
                }
               ]
              },
              "hfov": 10.19,
              "pitch": -15.01
             }
            ]
           }
          ],
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 2500,
             "width": 5000,
             "class": "ImageResourceLevel",
             "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_hq.jpeg"
            },
            {
             "height": 1608,
             "width": 3217,
             "class": "ImageResourceLevel",
             "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544.jpeg"
            }
           ]
          }
         }
        ],
        "partial": false,
        "hfovMin": 60,
        "pitch": 0,
        "thumbnailUrl": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_t.jpg",
        "id": "panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
        "mapLocations": [
         {
          "x": 695.64,
          "class": "PanoramaMapLocation",
          "y": 481.64,
          "angle": -63.43,
          "map": "this.map_04171D1A_107E_8278_4197_9875AF5B32BE"
         }
        ],
        "cardboardMenu": "this.Menu_0BB18192_11E1_8248_41A7_4C7BE41C6C8A",
        "label": "C03",
        "hfovMax": 120,
        "hfov": 360,
        "adjacentPanoramas": [
         {
          "panorama": {
           "class": "Panorama",
           "frames": [
            {
             "thumbnailUrl": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_t.jpg",
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "rollOverDisplay": false,
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 79,
                    "width": 79,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "hfov": 11.33,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -2.21,
                 "pitch": -6.66
                }
               ],
               "id": "overlay_1591595B_06F7_2CEA_4193_33DDF4028068",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA, this.camera_0B7D356B_11E1_82D9_41A2_8AB7F213E524); this.mainPlayList.set('selectedIndex', 4)"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -2.21,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 158,
                    "width": 158,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_0_HS_0_0.png"
                   }
                  ]
                 },
                 "hfov": 11.33,
                 "pitch": -6.66
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 16,
                    "width": 21,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_0_HS_1_0_map.gif"
                   }
                  ]
                 },
                 "hfov": 10.72,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -2.39,
                 "pitch": -14.13
                }
               ],
               "id": "overlay_15F363E3_06F7_E3DA_4166_E1ADD25A8F16",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -2.39,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 115,
                    "width": 153,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_0_HS_1_0.png"
                   }
                  ]
                 },
                 "hfov": 10.72,
                 "pitch": -14.13
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 86,
                    "width": 58,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_0_HS_2_0_0_map.gif"
                   }
                  ]
                 },
                 "hfov": 8.42,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -179.28,
                 "pitch": -6.91
                }
               ],
               "id": "overlay_1286252F_06F1_24AA_4180_65D537174EB2",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544, this.camera_0B47357A_11E1_82BB_41B0_224A7E8AD281); this.mainPlayList.set('selectedIndex', 2)"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -179.28,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 172,
                    "width": 117,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_0_HS_2_0.png"
                   }
                  ]
                 },
                 "hfov": 8.42,
                 "pitch": -6.91
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 16,
                    "width": 23,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_0_HS_3_0_map.gif"
                   }
                  ]
                 },
                 "hfov": 10.42,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -179.62,
                 "pitch": -15.39
                }
               ],
               "id": "overlay_122DE14B_06F1_1CEA_4197_5318700943E8",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -179.62,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 101,
                    "width": 150,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_0_HS_3_0.png"
                   }
                  ]
                 },
                 "hfov": 10.42,
                 "pitch": -15.39
                }
               ]
              }
             ],
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 2500,
                "width": 5000,
                "class": "ImageResourceLevel",
                "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_hq.jpeg"
               },
               {
                "height": 1608,
                "width": 3217,
                "class": "ImageResourceLevel",
                "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24.jpeg"
               }
              ]
             }
            }
           ],
           "partial": false,
           "hfovMin": 60,
           "pitch": 0,
           "thumbnailUrl": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_t.jpg",
           "id": "panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
           "mapLocations": [
            {
             "x": 750.11,
             "class": "PanoramaMapLocation",
             "y": 510.82,
             "angle": 113.96,
             "map": "this.map_04171D1A_107E_8278_4197_9875AF5B32BE"
            }
           ],
           "cardboardMenu": "this.Menu_0BB18192_11E1_8248_41A7_4C7BE41C6C8A",
           "label": "C04",
           "hfovMax": 120,
           "hfov": 360,
           "adjacentPanoramas": [
            {
             "panorama": {
              "class": "Panorama",
              "frames": [
               {
                "thumbnailUrl": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_t.jpg",
                "class": "SphericPanoramaFrame",
                "overlays": [
                 {
                  "rollOverDisplay": false,
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 84,
                       "width": 69,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "hfov": 9.92,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -2.69,
                    "pitch": -4.02
                   }
                  ],
                  "id": "overlay_15E7DB16_06F3_2C7A_4199_963496BA8F47",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24, this.camera_0BABC5E3_11E1_8DC8_41A4_4AA2BEFCC790); this.mainPlayList.set('selectedIndex', 3)"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -2.69,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 169,
                       "width": 138,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_0_0.png"
                      }
                     ]
                    },
                    "hfov": 9.92,
                    "pitch": -4.02
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 16,
                       "width": 23,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_1_0_map.gif"
                      }
                     ]
                    },
                    "hfov": 11.08,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -3.01,
                    "pitch": -11.37
                   }
                  ],
                  "id": "overlay_1382DAC3_06F3_EDDA_4199_4640AB09737B",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -3.01,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 108,
                       "width": 156,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_1_0.png"
                      }
                     ]
                    },
                    "hfov": 11.08,
                    "pitch": -11.37
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 81,
                       "width": 82,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_2_0_0_map.gif"
                      }
                     ]
                    },
                    "hfov": 11.73,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -179.87,
                    "pitch": -7.29
                   }
                  ],
                  "id": "overlay_1470B197_06F3_3C7A_418B_F6F6C4B06850",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4, this.camera_0BACF5F3_11E1_8DC8_4196_C83D8B8E518A); this.mainPlayList.set('selectedIndex', 5)"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -179.87,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 162,
                       "width": 164,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_2_0.png"
                      }
                     ]
                    },
                    "hfov": 11.73,
                    "pitch": -7.29
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 16,
                       "width": 24,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_3_0_map.gif"
                      }
                     ]
                    },
                    "hfov": 10.89,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -179.37,
                    "pitch": -15.51
                   }
                  ],
                  "id": "overlay_121F44F8_06F1_25B6_416C_4F213A9D0F56",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -179.37,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 104,
                       "width": 157,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_3_0.png"
                      }
                     ]
                    },
                    "hfov": 10.89,
                    "pitch": -15.51
                   }
                  ]
                 }
                ],
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 2500,
                   "width": 5000,
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_hq.jpeg"
                  },
                  {
                   "height": 1608,
                   "width": 3217,
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA.jpeg"
                  }
                 ]
                }
               }
              ],
              "partial": false,
              "hfovMin": 60,
              "pitch": 0,
              "thumbnailUrl": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_t.jpg",
              "id": "panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
              "mapLocations": [
               {
                "x": 814.54,
                "class": "PanoramaMapLocation",
                "y": 538.8,
                "angle": 289.23,
                "map": "this.map_04171D1A_107E_8278_4197_9875AF5B32BE"
               }
              ],
              "cardboardMenu": "this.Menu_0BB18192_11E1_8248_41A7_4C7BE41C6C8A",
              "label": "C05",
              "hfovMax": 120,
              "hfov": 360,
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
                "class": "AdjacentPanorama",
                "yaw": -2.69,
                "backwardYaw": -2.21,
                "distance": 1
               },
               {
                "panorama": {
                 "class": "Panorama",
                 "frames": [
                  {
                   "thumbnailUrl": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_t.jpg",
                   "class": "SphericPanoramaFrame",
                   "overlays": [
                    {
                     "rollOverDisplay": false,
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 89,
                          "width": 73,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_0_0_0_map.gif"
                         }
                        ]
                       },
                       "hfov": 10.58,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 7.93,
                       "pitch": -2.89
                      }
                     ],
                     "id": "overlay_14EB4A70_068F_6CB6_4190_049216A52BD8",
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_0A00A32D_11E1_8658_41A6_0FDB2F1F6EB1); this.mainPlayList.set('selectedIndex', 6)"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 7.93,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 179,
                          "width": 147,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_0_0.png"
                         }
                        ]
                       },
                       "hfov": 10.58,
                       "pitch": -2.89
                      }
                     ]
                    },
                    {
                     "rollOverDisplay": false,
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 16,
                          "width": 22,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_1_0_map.gif"
                         }
                        ]
                       },
                       "hfov": 10.12,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 7.54,
                       "pitch": -10.87
                      }
                     ],
                     "id": "overlay_15D28AE0_068F_2DD6_4190_19CBC3F443F6",
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 7.54,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 101,
                          "width": 143,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_1_0.png"
                         }
                        ]
                       },
                       "hfov": 10.12,
                       "pitch": -10.87
                      }
                     ]
                    },
                    {
                     "rollOverDisplay": false,
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 98,
                          "width": 86,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_2_0_0_map.gif"
                         }
                        ]
                       },
                       "hfov": 12.32,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -178.55,
                       "pitch": -8.04
                      }
                     ],
                     "id": "overlay_13A44599_0691_2476_4189_7D56D283ED40",
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA, this.camera_0A38D307_11E1_8648_418A_3ADE6521E459); this.mainPlayList.set('selectedIndex', 4)"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -178.55,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 197,
                          "width": 172,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_2_0.png"
                         }
                        ]
                       },
                       "hfov": 12.32,
                       "pitch": -8.04
                      }
                     ]
                    },
                    {
                     "rollOverDisplay": false,
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 16,
                          "width": 19,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_3_0_map.gif"
                         }
                        ]
                       },
                       "hfov": 10.54,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -178.74,
                       "pitch": -17.52
                      }
                     ],
                     "id": "overlay_1302EAF9_0691_2DB6_4188_E41C59F609C1",
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -178.74,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 125,
                          "width": 153,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_3_0.png"
                         }
                        ]
                       },
                       "hfov": 10.54,
                       "pitch": -17.52
                      }
                     ]
                    }
                   ],
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "height": 2500,
                      "width": 5000,
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_hq.jpeg"
                     },
                     {
                      "height": 1608,
                      "width": 3217,
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4.jpeg"
                     }
                    ]
                   }
                  }
                 ],
                 "partial": false,
                 "hfovMin": 60,
                 "pitch": 0,
                 "thumbnailUrl": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_t.jpg",
                 "id": "panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
                 "mapLocations": [
                  {
                   "x": 877.86,
                   "class": "PanoramaMapLocation",
                   "y": 568.35,
                   "angle": 103.06,
                   "map": "this.map_04171D1A_107E_8278_4197_9875AF5B32BE"
                  }
                 ],
                 "cardboardMenu": "this.Menu_0BB18192_11E1_8248_41A7_4C7BE41C6C8A",
                 "label": "C06",
                 "hfovMax": 120,
                 "hfov": 360,
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
                   "class": "AdjacentPanorama",
                   "yaw": -178.55,
                   "backwardYaw": -179.87,
                   "distance": 1
                  },
                  {
                   "panorama": {
                    "class": "Panorama",
                    "frames": [
                     {
                      "thumbnailUrl": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_t.jpg",
                      "class": "SphericPanoramaFrame",
                      "overlays": [
                       {
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 73,
                             "width": 53,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_0_0_0_map.gif"
                            }
                           ]
                          },
                          "hfov": 7.66,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 4.74,
                          "pitch": -2.68
                         }
                        ],
                        "id": "overlay_1333B95D_0697_2CEE_4194_7F372605A06C",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_0BEB8224_11E1_8648_41AB_43CFC63441F0); this.mainPlayList.set('selectedIndex', 7)"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 4.74,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 146,
                             "width": 106,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_0_0.png"
                            }
                           ]
                          },
                          "hfov": 7.66,
                          "pitch": -2.68
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 16,
                             "width": 25,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_1_0_map.gif"
                            }
                           ]
                          },
                          "hfov": 6.67,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 4.7,
                          "pitch": -8.76
                         }
                        ],
                        "id": "overlay_1092C51A_0697_246A_4172_39E7152EFDF5",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 4.7,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 59,
                             "width": 93,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_1_0.png"
                            }
                           ]
                          },
                          "hfov": 6.67,
                          "pitch": -8.76
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 53,
                             "width": 38,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_2_0_0_map.gif"
                            }
                           ]
                          },
                          "hfov": 5.6,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 12.61,
                          "pitch": -1.07
                         }
                        ],
                        "id": "overlay_13AD4E3C_0691_64AE_4142_65BF2B2097A0",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.mainPlayList.set('selectedIndex', 8)"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 12.61,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 107,
                             "width": 77,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_2_0.png"
                            }
                           ]
                          },
                          "hfov": 5.6,
                          "pitch": -1.07
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 16,
                             "width": 27,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_3_0_map.gif"
                            }
                           ]
                          },
                          "hfov": 5.45,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 13.04,
                          "pitch": -5.63
                         }
                        ],
                        "id": "overlay_106E4805_0691_EC5E_4130_FDB4211F1678",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 13.04,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 45,
                             "width": 76,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_3_0.png"
                            }
                           ]
                          },
                          "hfov": 5.45,
                          "pitch": -5.63
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 59,
                             "width": 66,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_4_0_0_map.gif"
                            }
                           ]
                          },
                          "hfov": 9.57,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 66.31,
                          "pitch": -1.12
                         }
                        ],
                        "id": "overlay_13C882E8_0691_3DD6_4186_867D67D1ACA5",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_0B95C1F8_11E1_85B8_41B0_64223D03908F); this.mainPlayList.set('selectedIndex', 9)"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 66.31,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 118,
                             "width": 132,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_4_0.png"
                            }
                           ]
                          },
                          "hfov": 9.57,
                          "pitch": -1.12
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 16,
                             "width": 25,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_5_0_map.gif"
                            }
                           ]
                          },
                          "hfov": 7,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 66.28,
                          "pitch": -5.89
                         }
                        ],
                        "id": "overlay_1E9BB315_0693_1C7E_415E_4DA4763AE3A6",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 66.28,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 62,
                             "width": 97,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_5_0.png"
                            }
                           ]
                          },
                          "hfov": 7,
                          "pitch": -5.89
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 59,
                             "width": 48,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_6_0_0_map.gif"
                            }
                           ]
                          },
                          "hfov": 6.92,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 107.11,
                          "pitch": 1.22
                         }
                        ],
                        "id": "overlay_151CF646_0693_24DA_416D_8D0286472AEE",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_0B8F91DC_11E1_85F8_41B0_955ED95032B5); this.mainPlayList.set('selectedIndex', 16)"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 107.11,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 118,
                             "width": 96,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_6_0.png"
                            }
                           ]
                          },
                          "hfov": 6.92,
                          "pitch": 1.22
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 16,
                             "width": 28,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_7_0_map.gif"
                            }
                           ]
                          },
                          "hfov": 7.5,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 107.35,
                          "pitch": -4.01
                         }
                        ],
                        "id": "overlay_118C7373_0690_FCBA_4191_5EC42FBDA8F2",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 107.35,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 59,
                             "width": 104,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_7_0.png"
                            }
                           ]
                          },
                          "hfov": 7.5,
                          "pitch": -4.01
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 66,
                             "width": 44,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_8_0_0_map.gif"
                            }
                           ]
                          },
                          "hfov": 6.42,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 124.98,
                          "pitch": 1.64
                         }
                        ],
                        "id": "overlay_1F155413_069F_E47A_417D_DC481E61927D",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_0B8BA1CE_11E1_85D8_4196_5DE13EC0E592); this.mainPlayList.set('selectedIndex', 17)"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 124.98,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 133,
                             "width": 89,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_8_0.png"
                            }
                           ]
                          },
                          "hfov": 6.42,
                          "pitch": 1.64
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 16,
                             "width": 25,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_9_0_map.gif"
                            }
                           ]
                          },
                          "hfov": 6.97,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 125.04,
                          "pitch": -3.3
                         }
                        ],
                        "id": "overlay_11875053_0691_3CFA_4188_191F1826EC2B",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 125.04,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 61,
                             "width": 96,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_9_0.png"
                            }
                           ]
                          },
                          "hfov": 6.97,
                          "pitch": -3.3
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 50,
                             "width": 45,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_10_0_0_map.gif"
                            }
                           ]
                          },
                          "hfov": 6.56,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 156.92,
                          "pitch": -1.22
                         }
                        ],
                        "id": "overlay_11AFC364_0693_1CDE_418A_DEE26D1887D0",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_0BF24232_11E1_8648_41A9_EDC8B18E81D2); this.mainPlayList.set('selectedIndex', 15)"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 156.92,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 100,
                             "width": 91,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_10_0.png"
                            }
                           ]
                          },
                          "hfov": 6.56,
                          "pitch": -1.22
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 16,
                             "width": 26,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_11_0_map.gif"
                            }
                           ]
                          },
                          "hfov": 7,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 157.26,
                          "pitch": -5.87
                         }
                        ],
                        "id": "overlay_11D3D443_0693_24DA_4192_5962A59207B3",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 157.26,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 59,
                             "width": 97,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_11_0.png"
                            }
                           ]
                          },
                          "hfov": 7,
                          "pitch": -5.87
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 41,
                             "width": 35,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_12_0_0_map.gif"
                            }
                           ]
                          },
                          "hfov": 5.14,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 149.3,
                          "pitch": 1.92
                         }
                        ],
                        "id": "overlay_11AD6E0E_0693_646A_4187_2F4CE059F6D0",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_0BE6B215_11E1_8648_41AB_B210C9B6898F); this.mainPlayList.set('selectedIndex', 22)"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 149.3,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 83,
                             "width": 71,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_12_0.png"
                            }
                           ]
                          },
                          "hfov": 5.14,
                          "pitch": 1.92
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 16,
                             "width": 26,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_13_0_map.gif"
                            }
                           ]
                          },
                          "hfov": 7.67,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 149.55,
                          "pitch": -2.39
                         }
                        ],
                        "id": "overlay_101B7B09_06B0_EC56_4196_DF7A51BE6DEB",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 149.55,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 64,
                             "width": 106,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_13_0.png"
                            }
                           ]
                          },
                          "hfov": 7.67,
                          "pitch": -2.39
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 44,
                             "width": 47,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_14_0_0_map.gif"
                            }
                           ]
                          },
                          "hfov": 6.77,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 136.61,
                          "pitch": 0.78
                         }
                        ],
                        "id": "overlay_11BB0487_06B3_245A_417D_497BBA79B69B",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_0B9C3207_11E1_8648_417D_B636CA1C031D); this.mainPlayList.set('selectedIndex', 18)"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 136.61,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 89,
                             "width": 94,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_14_0.png"
                            }
                           ]
                          },
                          "hfov": 6.77,
                          "pitch": 0.78
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 16,
                             "width": 25,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_15_0_map.gif"
                            }
                           ]
                          },
                          "hfov": 6.92,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 136.39,
                          "pitch": -3.17
                         }
                        ],
                        "id": "overlay_10EB5DB3_06B0_E7BB_4193_4B3DE5CAB7DE",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 136.39,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 60,
                             "width": 96,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_15_0.png"
                            }
                           ]
                          },
                          "hfov": 6.92,
                          "pitch": -3.17
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 98,
                             "width": 130,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_16_0_0_map.gif"
                            }
                           ]
                          },
                          "hfov": 18.69,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -96.27,
                          "pitch": -4.02
                         }
                        ],
                        "id": "overlay_1C974485_06B3_E45E_4182_73908E649E3E",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4, this.camera_0B9141EA_11E1_85D8_419B_3A73F9DF7987); this.mainPlayList.set('selectedIndex', 5)"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": -96.27,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 197,
                             "width": 260,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_16_0.png"
                            }
                           ]
                          },
                          "hfov": 18.69,
                          "pitch": -4.02
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 16,
                             "width": 22,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_17_0_map.gif"
                            }
                           ]
                          },
                          "hfov": 11.05,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -96.47,
                          "pitch": -12.25
                         }
                        ],
                        "id": "overlay_1CA3866A_06B3_24AA_418F_9F19B27231FA",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": -96.47,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 111,
                             "width": 157,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_17_0.png"
                            }
                           ]
                          },
                          "hfov": 11.05,
                          "pitch": -12.25
                         }
                        ]
                       }
                      ],
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "height": 2500,
                         "width": 5000,
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_hq.jpeg"
                        },
                        {
                         "height": 1608,
                         "width": 3217,
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA.jpeg"
                        }
                       ]
                      }
                     }
                    ],
                    "partial": false,
                    "hfovMin": 60,
                    "pitch": 0,
                    "thumbnailUrl": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_t.jpg",
                    "id": "panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                    "mapLocations": [
                     {
                      "x": 913.86,
                      "class": "PanoramaMapLocation",
                      "y": 610.6,
                      "angle": 51.84,
                      "map": "this.map_04171D1A_107E_8278_4197_9875AF5B32BE"
                     }
                    ],
                    "cardboardMenu": "this.Menu_0BB18192_11E1_8248_41A7_4C7BE41C6C8A",
                    "label": "C07",
                    "hfovMax": 120,
                    "hfov": 360,
                    "adjacentPanoramas": [
                     {
                      "panorama": {
                       "class": "Panorama",
                       "frames": [
                        {
                         "thumbnailUrl": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_t.jpg",
                         "class": "SphericPanoramaFrame",
                         "overlays": [
                          {
                           "rollOverDisplay": false,
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 62,
                                "width": 57,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_0_0_0_map.gif"
                               }
                              ]
                             },
                             "hfov": 8.33,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -171.11,
                             "pitch": 0.49
                            }
                           ],
                           "id": "overlay_3D896377_07F1_3CBA_4196_6B85D37E8066",
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82, this.camera_0A7713FC_11E1_85BF_41AF_B065583F3306); this.mainPlayList.set('selectedIndex', 8)"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": -171.11,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 125,
                                "width": 115,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_0_0.png"
                               }
                              ]
                             },
                             "hfov": 8.33,
                             "pitch": 0.49
                            }
                           ]
                          },
                          {
                           "rollOverDisplay": false,
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 16,
                                "width": 25,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_1_0_map.gif"
                               }
                              ]
                             },
                             "hfov": 5.8,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -171.22,
                             "pitch": -3.9
                            }
                           ],
                           "id": "overlay_3DDB42AD_07F1_7DAE_417C_3217DBA16CA0",
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": -171.22,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 50,
                                "width": 80,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_1_0.png"
                               }
                              ]
                             },
                             "hfov": 5.8,
                             "pitch": -3.9
                            }
                           ]
                          },
                          {
                           "rollOverDisplay": false,
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 77,
                                "width": 51,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_2_0_0_map.gif"
                               }
                              ]
                             },
                             "hfov": 7.37,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -156.98,
                             "pitch": 0.2
                            }
                           ],
                           "id": "overlay_30B29713_07FF_647A_4195_98CB1B9AE925",
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_0A1563A4_11E1_8648_41AE_F2180936F188); this.mainPlayList.set('selectedIndex', 9)"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": -156.98,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 154,
                                "width": 102,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_2_0.png"
                               }
                              ]
                             },
                             "hfov": 7.37,
                             "pitch": 0.2
                            }
                           ]
                          },
                          {
                           "rollOverDisplay": false,
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 16,
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_3_0_map.gif"
                               }
                              ]
                             },
                             "hfov": 6.39,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -157.08,
                             "pitch": -4.48
                            }
                           ],
                           "id": "overlay_471BF631_07F1_64B6_4179_076F9D5C7C81",
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": -157.08,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 48,
                                "width": 89,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_3_0.png"
                               }
                              ]
                             },
                             "hfov": 6.39,
                             "pitch": -4.48
                            }
                           ]
                          },
                          {
                           "rollOverDisplay": false,
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 97,
                                "width": 80,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_4_0_0_map.gif"
                               }
                              ]
                             },
                             "hfov": 11.58,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -143.45,
                             "pitch": 0.45
                            }
                           ],
                           "id": "overlay_3A437876_07F3_2CBA_4181_B5A3247326F7",
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_0A47441B_11E1_8278_41AC_3AC399C5D76D); this.mainPlayList.set('selectedIndex', 16)"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": -143.45,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 195,
                                "width": 160,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_4_0.png"
                               }
                              ]
                             },
                             "hfov": 11.58,
                             "pitch": 0.45
                            }
                           ]
                          },
                          {
                           "rollOverDisplay": false,
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 16,
                                "width": 25,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_5_0_map.gif"
                               }
                              ]
                             },
                             "hfov": 7.99,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -143.5,
                             "pitch": -6.13
                            }
                           ],
                           "id": "overlay_3F187E51_07F3_24F6_4184_039DFE14256A",
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": -143.5,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 69,
                                "width": 111,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_5_0.png"
                               }
                              ]
                             },
                             "hfov": 7.99,
                             "pitch": -6.13
                            }
                           ]
                          },
                          {
                           "rollOverDisplay": false,
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 76,
                                "width": 73,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_6_0_0_map.gif"
                               }
                              ]
                             },
                             "hfov": 10.6,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 7.69,
                             "pitch": 0.41
                            }
                           ],
                           "id": "overlay_3D40439D_07F1_1C6E_417C_39C62324FAAA",
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_0A6F03ED_11E1_85D8_4172_D22294BBADBE); this.mainPlayList.set('selectedIndex', 18)"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": 7.69,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 152,
                                "width": 147,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_6_0.png"
                               }
                              ]
                             },
                             "hfov": 10.6,
                             "pitch": 0.41
                            }
                           ]
                          },
                          {
                           "rollOverDisplay": false,
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 16,
                                "width": 26,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_7_0_map.gif"
                               }
                              ]
                             },
                             "hfov": 7.72,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 7.47,
                             "pitch": -4.9
                            }
                           ],
                           "id": "overlay_3B75B8EC_07F7_6DAE_4194_C7A60FEE48CD",
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": 7.47,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 65,
                                "width": 107,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_7_0.png"
                               }
                              ]
                             },
                             "hfov": 7.72,
                             "pitch": -4.9
                            }
                           ]
                          },
                          {
                           "rollOverDisplay": false,
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 56,
                                "width": 77,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_8_0_0_map.gif"
                               }
                              ]
                             },
                             "hfov": 11.12,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 139.53,
                             "pitch": 0.07
                            }
                           ],
                           "id": "overlay_3F97BC8D_07F0_E46E_4193_CFB84B9D9D04",
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_0A1D33CC_11E1_85D8_41A5_77D8578853A0); this.mainPlayList.set('selectedIndex', 6)"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": 139.53,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 113,
                                "width": 154,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_8_0.png"
                               }
                              ]
                             },
                             "hfov": 11.12,
                             "pitch": 0.07
                            }
                           ]
                          },
                          {
                           "rollOverDisplay": false,
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 16,
                                "width": 26,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_9_0_map.gif"
                               }
                              ]
                             },
                             "hfov": 6.85,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 139.29,
                             "pitch": -4.35
                            }
                           ],
                           "id": "overlay_3FD40B45_07F1_2CDE_4191_E116460D8792",
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": 139.29,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 57,
                                "width": 95,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_9_0.png"
                               }
                              ]
                             },
                             "hfov": 6.85,
                             "pitch": -4.35
                            }
                           ]
                          },
                          {
                           "rollOverDisplay": false,
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 79,
                                "width": 71,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_10_0_0_map.gif"
                               }
                              ]
                             },
                             "hfov": 10.33,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 122.75,
                             "pitch": -2.21
                            }
                           ],
                           "id": "overlay_3BBEDA8D_07F1_2C6E_4176_E7A74D97365E",
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_0A4F442B_11E1_8258_41A6_D4AC1CF1EBBC); this.mainPlayList.set('selectedIndex', 15)"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": 122.75,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 158,
                                "width": 143,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_10_0.png"
                               }
                              ]
                             },
                             "hfov": 10.33,
                             "pitch": -2.21
                            }
                           ]
                          },
                          {
                           "rollOverDisplay": false,
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 16,
                                "width": 28,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_11_0_map.gif"
                               }
                              ]
                             },
                             "hfov": 9.97,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 123.38,
                             "pitch": -7.86
                            }
                           ],
                           "id": "overlay_3E80029C_07F3_7C6E_4197_A7D5C07DE7E8",
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": 123.38,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 79,
                                "width": 139,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_11_0.png"
                               }
                              ]
                             },
                             "hfov": 9.97,
                             "pitch": -7.86
                            }
                           ]
                          },
                          {
                           "rollOverDisplay": false,
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 91,
                                "width": 93,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_12_0_0_map.gif"
                               }
                              ]
                             },
                             "hfov": 13.43,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 81.83,
                             "pitch": -3.02
                            }
                           ],
                           "id": "overlay_3E9CAFB2_07F1_63BA_4187_5BB18F2E2D6C",
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_0A79C40B_11E1_8258_41A0_C830D0C736C2); this.mainPlayList.set('selectedIndex', 22)"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": 81.83,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 182,
                                "width": 186,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_12_0.png"
                               }
                              ]
                             },
                             "hfov": 13.43,
                             "pitch": -3.02
                            }
                           ]
                          },
                          {
                           "rollOverDisplay": false,
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 16,
                                "width": 23,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_13_0_map.gif"
                               }
                              ]
                             },
                             "hfov": 8.1,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 82.04,
                             "pitch": -9.23
                            }
                           ],
                           "id": "overlay_3C63BEBB_078F_25AA_4191_DE10C64B795B",
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": 82.04,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 77,
                                "width": 113,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_13_0.png"
                               }
                              ]
                             },
                             "hfov": 8.1,
                             "pitch": -9.23
                            }
                           ]
                          },
                          {
                           "rollOverDisplay": false,
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 57,
                                "width": 58,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_14_0_0_map.gif"
                               }
                              ]
                             },
                             "hfov": 8.47,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 171.48,
                             "pitch": 0.13
                            }
                           ],
                           "id": "overlay_3E9F1C95_0790_E47E_417B_80352FF053CC",
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_0A64E3DF_11E1_85F8_41AA_E4CD54C13D06); this.mainPlayList.set('selectedIndex', 7)"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": 171.48,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 115,
                                "width": 117,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_14_0.png"
                               }
                              ]
                             },
                             "hfov": 8.47,
                             "pitch": 0.13
                            }
                           ]
                          },
                          {
                           "rollOverDisplay": false,
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 16,
                                "width": 26,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_15_0_map.gif"
                               }
                              ]
                             },
                             "hfov": 6.22,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 171.5,
                             "pitch": -4.38
                            }
                           ],
                           "id": "overlay_3D26B6FA_0791_25AA_4194_6DF41F112E9C",
                           "enabledInCardboard": true,
                           "useHandCursor": true,
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": 171.5,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 51,
                                "width": 86,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_15_0.png"
                               }
                              ]
                             },
                             "hfov": 6.22,
                             "pitch": -4.38
                            }
                           ]
                          }
                         ],
                         "sphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "height": 2500,
                            "width": 5000,
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_hq.jpeg"
                           },
                           {
                            "height": 1608,
                            "width": 3217,
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC.jpeg"
                           }
                          ]
                         }
                        }
                       ],
                       "partial": false,
                       "hfovMin": 60,
                       "pitch": 0,
                       "thumbnailUrl": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_t.jpg",
                       "id": "panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
                       "mapLocations": [
                        {
                         "x": 1016.24,
                         "class": "PanoramaMapLocation",
                         "y": 719.9,
                         "angle": 170.04,
                         "map": "this.map_04171D1A_107E_8278_4197_9875AF5B32BE"
                        }
                       ],
                       "cardboardMenu": "this.Menu_0BB18192_11E1_8248_41A7_4C7BE41C6C8A",
                       "label": "C18",
                       "hfovMax": 120,
                       "hfov": 360,
                       "adjacentPanoramas": [
                        {
                         "panorama": {
                          "class": "Panorama",
                          "frames": [
                           {
                            "thumbnailUrl": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_t.jpg",
                            "class": "SphericPanoramaFrame",
                            "overlays": [
                             {
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 88,
                                   "width": 80,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_0_0_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 11.51,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -0.88,
                                "pitch": -5.02
                               }
                              ],
                              "id": "overlay_1DD571FD_0697_7FAE_4181_ACF228D0DFF0",
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2, this.camera_0A33E720_11E1_8E48_416D_88EAC6634E90); this.mainPlayList.set('selectedIndex', 10)"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -0.88,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 176,
                                   "width": 160,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_0_0.png"
                                  }
                                 ]
                                },
                                "hfov": 11.51,
                                "pitch": -5.02
                               }
                              ]
                             },
                             {
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 16,
                                   "width": 23,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_1_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 11.22,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -0.63,
                                "pitch": -13.75
                               }
                              ],
                              "id": "overlay_1AA3E219_0690_FC76_4175_20A3657C4FB3",
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -0.63,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 111,
                                   "width": 160,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_1_0.png"
                                  }
                                 ]
                                },
                                "hfov": 11.22,
                                "pitch": -13.75
                               }
                              ]
                             },
                             {
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 67,
                                   "width": 76,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_2_0_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 11.01,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -98.62,
                                "pitch": 0.5
                               }
                              ],
                              "id": "overlay_1D2D051B_0691_246A_4189_C6535106E464",
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82, this.camera_0A02173E_11E1_8EB8_41AF_001C966C3560); this.mainPlayList.set('selectedIndex', 8)"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -98.62,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 134,
                                   "width": 152,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_2_0.png"
                                  }
                                 ]
                                },
                                "hfov": 11.01,
                                "pitch": 0.5
                               }
                              ]
                             },
                             {
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 16,
                                   "width": 24,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_3_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 7.5,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -98.4,
                                "pitch": -5.05
                               }
                              ],
                              "id": "overlay_1C690E50_0691_24F6_4184_01C5EAD7BDD5",
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -98.4,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 69,
                                   "width": 104,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_3_0.png"
                                  }
                                 ]
                                },
                                "hfov": 7.5,
                                "pitch": -5.05
                               }
                              ]
                             },
                             {
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 85,
                                   "width": 98,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_4_0_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 14.11,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -143.14,
                                "pitch": -4.05
                               }
                              ],
                              "id": "overlay_18A73425_0693_245E_418A_37979A1889C3",
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_0A12275C_11E1_8EF8_41AE_CD79A82DCC7D); this.mainPlayList.set('selectedIndex', 7)"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -143.14,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 170,
                                   "width": 196,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_4_0.png"
                                  }
                                 ]
                                },
                                "hfov": 14.11,
                                "pitch": -4.05
                               }
                              ]
                             },
                             {
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 16,
                                   "width": 25,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_5_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 8.33,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -143.14,
                                "pitch": -10.7
                               }
                              ],
                              "id": "overlay_19A3F664_0691_64DE_4190_3B68066071FF",
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -143.14,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 73,
                                   "width": 117,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_5_0.png"
                                  }
                                 ]
                                },
                                "hfov": 8.33,
                                "pitch": -10.7
                               }
                              ]
                             },
                             {
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 66,
                                   "width": 78,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_6_0_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 11.36,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -175.54,
                                "pitch": 0.3
                               }
                              ],
                              "id": "overlay_1C2C9020_0691_1C55_4184_1AF07E41E0E0",
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.mainPlayList.set('selectedIndex', 5)"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -175.54,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 133,
                                   "width": 157,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_6_0.png"
                                  }
                                 ]
                                },
                                "hfov": 11.36,
                                "pitch": 0.3
                               }
                              ]
                             },
                             {
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 16,
                                   "width": 26,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_7_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 6.21,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -175.23,
                                "pitch": -4.6
                               }
                              ],
                              "id": "overlay_1B2224D4_069F_65FE_4193_6A229FF6AF52",
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -175.23,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 51,
                                   "width": 86,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_7_0.png"
                                  }
                                 ]
                                },
                                "hfov": 6.21,
                                "pitch": -4.6
                               }
                              ]
                             },
                             {
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 78,
                                   "width": 64,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_8_0_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 9.34,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 81.58,
                                "pitch": -0.33
                               }
                              ],
                              "id": "overlay_1BE145D8_0691_27F6_4190_205F4E3ADD47",
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_0A3BC72E_11E1_8E58_41A2_317498D9D964); this.mainPlayList.set('selectedIndex', 16)"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": 81.58,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 156,
                                   "width": 129,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_8_0.png"
                                  }
                                 ]
                                },
                                "hfov": 9.34,
                                "pitch": -0.33
                               }
                              ]
                             },
                             {
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 16,
                                   "width": 21,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_9_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 8.38,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 81.59,
                                "pitch": -7.4
                               }
                              ],
                              "id": "overlay_1B759D4A_0691_24EA_4156_A2B44DC73C69",
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": 81.59,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 88,
                                   "width": 117,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_9_0.png"
                                  }
                                 ]
                                },
                                "hfov": 8.38,
                                "pitch": -7.4
                               }
                              ]
                             },
                             {
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 80,
                                   "width": 58,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_10_0_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 8.46,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 134.41,
                                "pitch": 0.74
                               }
                              ],
                              "id": "overlay_1D6A549A_0691_246A_418D_D65D9C424427",
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_0A14976A_11E1_8ED8_417C_6A9BBC0BF771); this.mainPlayList.set('selectedIndex', 15)"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": 134.41,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 160,
                                   "width": 117,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_10_0.png"
                                  }
                                 ]
                                },
                                "hfov": 8.46,
                                "pitch": 0.74
                               }
                              ]
                             },
                             {
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 16,
                                   "width": 25,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_11_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 8.76,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 134.8,
                                "pitch": -5.74
                               }
                              ],
                              "id": "overlay_1A1B934E_0693_1CEA_4141_5D146278C1B0",
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": 134.8,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 76,
                                   "width": 122,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_11_0.png"
                                  }
                                 ]
                                },
                                "hfov": 8.76,
                                "pitch": -5.74
                               }
                              ]
                             },
                             {
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 61,
                                   "width": 43,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_12_0_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 6.26,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 112.76,
                                "pitch": 0.01
                               }
                              ],
                              "id": "overlay_2653DB6D_0693_2CAE_4125_0137B1B6A064",
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_0A29A711_11E1_8E48_4180_3FA5D641F437); this.mainPlayList.set('selectedIndex', 17)"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": 112.76,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 122,
                                   "width": 86,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_12_0.png"
                                  }
                                 ]
                                },
                                "hfov": 6.26,
                                "pitch": 0.01
                               }
                              ]
                             },
                             {
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 16,
                                   "width": 24,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_13_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 7.24,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 112.63,
                                "pitch": -5.26
                               }
                              ],
                              "id": "overlay_1ABE7F5E_0691_24EA_4192_B3DF921024E3",
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": 112.63,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 67,
                                   "width": 101,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_13_0.png"
                                  }
                                 ]
                                },
                                "hfov": 7.24,
                                "pitch": -5.26
                               }
                              ]
                             },
                             {
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 50,
                                   "width": 61,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_14_0_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 8.91,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 89.94,
                                "pitch": -0.1
                               }
                              ],
                              "id": "overlay_1B4E345F_0697_24EA_4196_62B67CEB01DE",
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.mainPlayList.set('selectedIndex', 18)"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": 89.94,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 100,
                                   "width": 123,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_14_0.png"
                                  }
                                 ]
                                },
                                "hfov": 8.91,
                                "pitch": -0.1
                               }
                              ]
                             },
                             {
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 16,
                                   "width": 23,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_15_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 5.83,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 90.09,
                                "pitch": -4.23
                               }
                              ],
                              "id": "overlay_18669A33_0691_6CBA_4186_E1486D225611",
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": 90.09,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 55,
                                   "width": 81,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_15_0.png"
                                  }
                                 ]
                                },
                                "hfov": 5.83,
                                "pitch": -4.23
                               }
                              ]
                             },
                             {
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 61,
                                   "width": 46,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_16_0_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 6.64,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 171.29,
                                "pitch": -0.74
                               }
                              ],
                              "id": "overlay_1848DECF_0691_25EA_419B_19155919B309",
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_0A0A274E_11E1_8ED8_41AF_3851F909DB03); this.mainPlayList.set('selectedIndex', 6)"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": 171.29,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 122,
                                   "width": 92,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_16_0.png"
                                  }
                                 ]
                                },
                                "hfov": 6.64,
                                "pitch": -0.74
                               }
                              ]
                             },
                             {
                              "rollOverDisplay": false,
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 16,
                                   "width": 24,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_17_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 5.82,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 171.31,
                                "pitch": -5.61
                               }
                              ],
                              "id": "overlay_19097AFB_0693_6DAA_418F_751FBC951B23",
                              "enabledInCardboard": true,
                              "useHandCursor": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": 171.31,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 54,
                                   "width": 81,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_17_0.png"
                                  }
                                 ]
                                },
                                "hfov": 5.82,
                                "pitch": -5.61
                               }
                              ]
                             }
                            ],
                            "sphere": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "height": 2500,
                               "width": 5000,
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_hq.jpeg"
                              },
                              {
                               "height": 1608,
                               "width": 3217,
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53.jpeg"
                              }
                             ]
                            }
                           }
                          ],
                          "partial": false,
                          "hfovMin": 60,
                          "pitch": 0,
                          "thumbnailUrl": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_t.jpg",
                          "id": "panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                          "mapLocations": [
                           {
                            "x": 1049.54,
                            "class": "PanoramaMapLocation",
                            "y": 606.84,
                            "angle": 91.01,
                            "map": "this.map_04171D1A_107E_8278_4197_9875AF5B32BE"
                           }
                          ],
                          "cardboardMenu": "this.Menu_0BB18192_11E1_8248_41A7_4C7BE41C6C8A",
                          "label": "C10",
                          "hfovMax": 120,
                          "hfov": 360,
                          "adjacentPanoramas": [
                           {
                            "panorama": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
                            "class": "AdjacentPanorama",
                            "yaw": 112.76,
                            "backwardYaw": -156.98,
                            "distance": 1
                           },
                           {
                            "panorama": {
                             "class": "Panorama",
                             "frames": [
                              {
                               "thumbnailUrl": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_t.jpg",
                               "class": "SphericPanoramaFrame",
                               "overlays": [
                                {
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 112,
                                      "width": 79,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_0_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 11.41,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -0.95,
                                   "pitch": -0.25
                                  }
                                 ],
                                 "id": "overlay_1BCAA3DB_0690_E3EA_4175_AE03DFBDF79F",
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_0AA37449_11E1_82D8_41A4_B7D03DF159DE); this.mainPlayList.set('selectedIndex', 9)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": -0.95,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 225,
                                      "width": 158,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_0_0.png"
                                     }
                                    ]
                                   },
                                   "hfov": 11.41,
                                   "pitch": -0.25
                                  }
                                 ]
                                },
                                {
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 16,
                                      "width": 22,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_1_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 11.36,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -1.13,
                                   "pitch": -10.61
                                  }
                                 ],
                                 "id": "overlay_1B81FB3A_0691_6CAA_4185_C2AB290A08A0",
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": -1.13,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 115,
                                      "width": 160,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_1_0.png"
                                     }
                                    ]
                                   },
                                   "hfov": 11.36,
                                   "pitch": -10.61
                                  }
                                 ]
                                },
                                {
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 138,
                                      "width": 156,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_2_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 22.44,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 178.45,
                                   "pitch": -5.15
                                  }
                                 ],
                                 "id": "overlay_192EAB21_068F_2C56_4193_6F3905BD0334",
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E, this.camera_0A55B43A_11E1_82B8_41AE_8174FF5AC3F0); this.mainPlayList.set('selectedIndex', 11)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": 178.45,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 277,
                                      "width": 312,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_2_0.png"
                                     }
                                    ]
                                   },
                                   "hfov": 22.44,
                                   "pitch": -5.15
                                  }
                                 ]
                                },
                                {
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 16,
                                      "width": 21,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_3_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 10.52,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 177.74,
                                   "pitch": -17.9
                                  }
                                 ],
                                 "id": "overlay_19EDC174_0671_3CBE_4196_DE5883AFB8CF",
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": 177.74,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 115,
                                      "width": 153,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_3_0.png"
                                     }
                                    ]
                                   },
                                   "hfov": 10.52,
                                   "pitch": -17.9
                                  }
                                 ]
                                }
                               ],
                               "sphere": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "height": 2500,
                                  "width": 5000,
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_hq.jpeg"
                                 },
                                 {
                                  "height": 1608,
                                  "width": 3217,
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2.jpeg"
                                 }
                                ]
                               }
                              }
                             ],
                             "partial": false,
                             "hfovMin": 60,
                             "pitch": 0,
                             "thumbnailUrl": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_t.jpg",
                             "id": "panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
                             "mapLocations": [
                              {
                               "x": 1120.65,
                               "class": "PanoramaMapLocation",
                               "y": 611.68,
                               "angle": -84.86,
                               "map": "this.map_04171D1A_107E_8278_4197_9875AF5B32BE"
                              }
                             ],
                             "cardboardMenu": "this.Menu_0BB18192_11E1_8248_41A7_4C7BE41C6C8A",
                             "label": "C11",
                             "hfovMax": 120,
                             "hfov": 360,
                             "adjacentPanoramas": [
                              {
                               "panorama": {
                                "class": "Panorama",
                                "frames": [
                                 {
                                  "thumbnailUrl": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_t.jpg",
                                  "class": "SphericPanoramaFrame",
                                  "overlays": [
                                   {
                                    "rollOverDisplay": false,
                                    "maps": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 94,
                                         "width": 76,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_0_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "hfov": 10.93,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 0.03,
                                      "pitch": -5.02
                                     }
                                    ],
                                    "id": "overlay_1B28455D_0671_24EE_418A_324E3B2D36DB",
                                    "enabledInCardboard": true,
                                    "useHandCursor": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2, this.camera_0A0B6356_11E1_86C8_416F_DDED525157EE); this.mainPlayList.set('selectedIndex', 10)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": 0.03,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 189,
                                         "width": 152,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_0_0.png"
                                        }
                                       ]
                                      },
                                      "hfov": 10.93,
                                      "pitch": -5.02
                                     }
                                    ]
                                   },
                                   {
                                    "rollOverDisplay": false,
                                    "maps": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 16,
                                         "width": 23,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_1_0_map.gif"
                                        }
                                       ]
                                      },
                                      "hfov": 10.83,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": -0.12,
                                      "pitch": -13.62
                                     }
                                    ],
                                    "id": "overlay_1B0FFE2E_0673_24AA_4193_33375BC7C00A",
                                    "enabledInCardboard": true,
                                    "useHandCursor": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": -0.12,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 104,
                                         "width": 154,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_1_0.png"
                                        }
                                       ]
                                      },
                                      "hfov": 10.83,
                                      "pitch": -13.62
                                     }
                                    ]
                                   },
                                   {
                                    "rollOverDisplay": false,
                                    "maps": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 112,
                                         "width": 89,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_2_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "hfov": 12.62,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": -178.02,
                                      "pitch": -10.03
                                     }
                                    ],
                                    "id": "overlay_24B0C757_0673_64FA_4196_101EB1688FEE",
                                    "enabledInCardboard": true,
                                    "useHandCursor": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778, this.camera_0A13337B_11E1_86B8_4186_271DC0F552DB); this.mainPlayList.set('selectedIndex', 12)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": -178.02,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 224,
                                         "width": 178,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_2_0.png"
                                        }
                                       ]
                                      },
                                      "hfov": 12.62,
                                      "pitch": -10.03
                                     }
                                    ]
                                   },
                                   {
                                    "rollOverDisplay": false,
                                    "maps": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 16,
                                         "width": 21,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_3_0_map.gif"
                                        }
                                       ]
                                      },
                                      "hfov": 10.33,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": -177.02,
                                      "pitch": -21.2
                                     }
                                    ],
                                    "id": "overlay_27CC6293_0671_3C7B_419A_6F5AB828C77E",
                                    "enabledInCardboard": true,
                                    "useHandCursor": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": -177.02,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 113,
                                         "width": 153,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_3_0.png"
                                        }
                                       ]
                                      },
                                      "hfov": 10.33,
                                      "pitch": -21.2
                                     }
                                    ]
                                   }
                                  ],
                                  "sphere": {
                                   "class": "ImageResource",
                                   "levels": [
                                    {
                                     "height": 2500,
                                     "width": 5000,
                                     "class": "ImageResourceLevel",
                                     "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_hq.jpeg"
                                    },
                                    {
                                     "height": 1608,
                                     "width": 3217,
                                     "class": "ImageResourceLevel",
                                     "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E.jpeg"
                                    }
                                   ]
                                  }
                                 }
                                ],
                                "partial": false,
                                "hfovMin": 60,
                                "pitch": 0,
                                "thumbnailUrl": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_t.jpg",
                                "id": "panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
                                "mapLocations": [
                                 {
                                  "x": 1200.27,
                                  "class": "PanoramaMapLocation",
                                  "y": 618.42,
                                  "angle": -84.4,
                                  "map": "this.map_04171D1A_107E_8278_4197_9875AF5B32BE"
                                 }
                                ],
                                "cardboardMenu": "this.Menu_0BB18192_11E1_8248_41A7_4C7BE41C6C8A",
                                "label": "C12",
                                "hfovMax": 120,
                                "hfov": 360,
                                "adjacentPanoramas": [
                                 {
                                  "panorama": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
                                  "class": "AdjacentPanorama",
                                  "yaw": 0.03,
                                  "backwardYaw": 178.45,
                                  "distance": 1
                                 },
                                 {
                                  "panorama": {
                                   "class": "Panorama",
                                   "frames": [
                                    {
                                     "thumbnailUrl": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_t.jpg",
                                     "class": "SphericPanoramaFrame",
                                     "overlays": [
                                      {
                                       "rollOverDisplay": false,
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 121,
                                            "width": 100,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_0_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 14.38,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -0.18,
                                         "pitch": -5.9
                                        }
                                       ],
                                       "id": "overlay_18238646_0671_24DA_4160_F47269F55E5C",
                                       "enabledInCardboard": true,
                                       "useHandCursor": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741, this.camera_0AB17468_11E1_82D8_41AB_A0CBFE567E14); this.mainPlayList.set('selectedIndex', 13)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": -0.18,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 242,
                                            "width": 200,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_0_0.png"
                                           }
                                          ]
                                         },
                                         "hfov": 14.38,
                                         "pitch": -5.9
                                        }
                                       ]
                                      },
                                      {
                                       "rollOverDisplay": false,
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 16,
                                            "width": 22,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_1_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 11.09,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -0.63,
                                         "pitch": -16.39
                                        }
                                       ],
                                       "id": "overlay_197E9710_0677_6476_4185_152F2BE62FC4",
                                       "enabledInCardboard": true,
                                       "useHandCursor": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": -0.63,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 115,
                                            "width": 160,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_1_0.png"
                                           }
                                          ]
                                         },
                                         "hfov": 11.09,
                                         "pitch": -16.39
                                        }
                                       ]
                                      },
                                      {
                                       "rollOverDisplay": false,
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 114,
                                            "width": 132,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_2_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 18.94,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -178.74,
                                         "pitch": -7.41
                                        }
                                       ],
                                       "id": "overlay_27454FDC_0677_23EE_4173_4743024C71AA",
                                       "enabledInCardboard": true,
                                       "useHandCursor": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E, this.camera_0AAB4457_11E1_82C8_41AD_EEBC6EEFD29E); this.mainPlayList.set('selectedIndex', 11)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": -178.74,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 228,
                                            "width": 265,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_2_0.png"
                                           }
                                          ]
                                         },
                                         "hfov": 18.94,
                                         "pitch": -7.41
                                        }
                                       ]
                                      },
                                      {
                                       "rollOverDisplay": false,
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 16,
                                            "width": 20,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_3_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 10.5,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -179.25,
                                         "pitch": -18.28
                                        }
                                       ],
                                       "id": "overlay_27F0BA0A_0670_EC6A_4198_E6CE799B31CB",
                                       "enabledInCardboard": true,
                                       "useHandCursor": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": -179.25,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 118,
                                            "width": 153,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_3_0.png"
                                           }
                                          ]
                                         },
                                         "hfov": 10.5,
                                         "pitch": -18.28
                                        }
                                       ]
                                      }
                                     ],
                                     "sphere": {
                                      "class": "ImageResource",
                                      "levels": [
                                       {
                                        "height": 2500,
                                        "width": 5000,
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_hq.jpeg"
                                       },
                                       {
                                        "height": 1608,
                                        "width": 3217,
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778.jpeg"
                                       }
                                      ]
                                     }
                                    }
                                   ],
                                   "partial": false,
                                   "hfovMin": 60,
                                   "pitch": 0,
                                   "thumbnailUrl": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_t.jpg",
                                   "id": "panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
                                   "mapLocations": [
                                    {
                                     "x": 1248.63,
                                     "class": "PanoramaMapLocation",
                                     "y": 622.84,
                                     "angle": 90,
                                     "map": "this.map_04171D1A_107E_8278_4197_9875AF5B32BE"
                                    }
                                   ],
                                   "cardboardMenu": "this.Menu_0BB18192_11E1_8248_41A7_4C7BE41C6C8A",
                                   "label": "C13",
                                   "hfovMax": 120,
                                   "hfov": 360,
                                   "adjacentPanoramas": [
                                    {
                                     "panorama": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
                                     "class": "AdjacentPanorama",
                                     "yaw": -178.74,
                                     "backwardYaw": -178.02,
                                     "distance": 1
                                    },
                                    {
                                     "panorama": {
                                      "class": "Panorama",
                                      "frames": [
                                       {
                                        "thumbnailUrl": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_t.jpg",
                                        "class": "SphericPanoramaFrame",
                                        "overlays": [
                                         {
                                          "rollOverDisplay": false,
                                          "maps": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 171,
                                               "width": 116,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_0_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "hfov": 16.77,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": -0.27,
                                            "pitch": -3.52
                                           }
                                          ],
                                          "id": "overlay_263EBD9B_0671_246A_4191_F49A95B9E74E",
                                          "enabledInCardboard": true,
                                          "useHandCursor": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC, this.camera_0BEB5681_11E1_8E48_41AF_C22660E70E9A); this.mainPlayList.set('selectedIndex', 14)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": -0.27,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 343,
                                               "width": 233,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_0_0.png"
                                              }
                                             ]
                                            },
                                            "hfov": 16.77,
                                            "pitch": -3.52
                                           }
                                          ]
                                         },
                                         {
                                          "rollOverDisplay": false,
                                          "maps": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 16,
                                               "width": 25,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_1_0_map.gif"
                                              }
                                             ]
                                            },
                                            "hfov": 10.69,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": 0.63,
                                            "pitch": -14.76
                                           }
                                          ],
                                          "id": "overlay_257E93A3_067F_3C5A_4187_58F778D35045",
                                          "enabledInCardboard": true,
                                          "useHandCursor": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": 0.63,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 97,
                                               "width": 153,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_1_0.png"
                                              }
                                             ]
                                            },
                                            "hfov": 10.69,
                                            "pitch": -14.76
                                           }
                                          ]
                                         },
                                         {
                                          "rollOverDisplay": false,
                                          "maps": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 166,
                                               "width": 147,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_2_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "hfov": 21.2,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": -178.42,
                                            "pitch": -3.64
                                           }
                                          ],
                                          "id": "overlay_27045473_0671_24BA_4195_EE4719C004CC",
                                          "enabledInCardboard": true,
                                          "useHandCursor": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778, this.camera_0BF37690_11E1_8E48_4197_13D6C9171CCE); this.mainPlayList.set('selectedIndex', 12)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": -178.42,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 333,
                                               "width": 295,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_2_0.png"
                                              }
                                             ]
                                            },
                                            "hfov": 21.2,
                                            "pitch": -3.64
                                           }
                                          ]
                                         },
                                         {
                                          "rollOverDisplay": false,
                                          "maps": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 16,
                                               "width": 25,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_3_0_map.gif"
                                              }
                                             ]
                                            },
                                            "hfov": 10.61,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": -177.99,
                                            "pitch": -16.27
                                           }
                                          ],
                                          "id": "overlay_26FD3107_0671_7C5A_4196_ED67E7BBC774",
                                          "enabledInCardboard": true,
                                          "useHandCursor": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": -177.99,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 97,
                                               "width": 153,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_3_0.png"
                                              }
                                             ]
                                            },
                                            "hfov": 10.61,
                                            "pitch": -16.27
                                           }
                                          ]
                                         }
                                        ],
                                        "sphere": {
                                         "class": "ImageResource",
                                         "levels": [
                                          {
                                           "height": 2500,
                                           "width": 5000,
                                           "class": "ImageResourceLevel",
                                           "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_hq.jpeg"
                                          },
                                          {
                                           "height": 1608,
                                           "width": 3217,
                                           "class": "ImageResourceLevel",
                                           "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741.jpeg"
                                          }
                                         ]
                                        }
                                       }
                                      ],
                                      "partial": false,
                                      "hfovMin": 60,
                                      "pitch": 0,
                                      "thumbnailUrl": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_t.jpg",
                                      "id": "panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
                                      "mapLocations": [
                                       {
                                        "x": 1295.12,
                                        "class": "PanoramaMapLocation",
                                        "y": 623.91,
                                        "angle": 95.6,
                                        "map": "this.map_04171D1A_107E_8278_4197_9875AF5B32BE"
                                       }
                                      ],
                                      "cardboardMenu": "this.Menu_0BB18192_11E1_8248_41A7_4C7BE41C6C8A",
                                      "label": "C14",
                                      "hfovMax": 120,
                                      "hfov": 360,
                                      "adjacentPanoramas": [
                                       {
                                        "panorama": {
                                         "class": "Panorama",
                                         "frames": [
                                          {
                                           "thumbnailUrl": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_t.jpg",
                                           "class": "SphericPanoramaFrame",
                                           "overlays": [
                                            {
                                             "rollOverDisplay": false,
                                             "maps": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 122,
                                                  "width": 123,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_0_HS_0_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "hfov": 17.81,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": 0.25,
                                               "pitch": -3.27
                                              }
                                             ],
                                             "id": "overlay_2742F976_0673_2CBA_4192_B1253893FD9B",
                                             "enabledInCardboard": true,
                                             "useHandCursor": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741, this.camera_0B8641BD_11E1_85B8_41A5_2A9F9D41A63E); this.mainPlayList.set('selectedIndex', 13)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": 0.25,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 245,
                                                  "width": 247,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_0_HS_0_0.png"
                                                 }
                                                ]
                                               },
                                               "hfov": 17.81,
                                               "pitch": -3.27
                                              }
                                             ]
                                            },
                                            {
                                             "rollOverDisplay": false,
                                             "maps": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 16,
                                                  "width": 20,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_0_HS_1_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "hfov": 10.93,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": 0.25,
                                               "pitch": -14.76
                                              }
                                             ],
                                             "id": "overlay_26A0F6B7_0673_E5BA_4197_F90E8A3A011E",
                                             "enabledInCardboard": true,
                                             "useHandCursor": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": 0.25,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 125,
                                                  "width": 157,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_0_HS_1_0.png"
                                                 }
                                                ]
                                               },
                                               "hfov": 10.93,
                                               "pitch": -14.76
                                              }
                                             ]
                                            }
                                           ],
                                           "sphere": {
                                            "class": "ImageResource",
                                            "levels": [
                                             {
                                              "height": 2500,
                                              "width": 5000,
                                              "class": "ImageResourceLevel",
                                              "url": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_hq.jpeg"
                                             },
                                             {
                                              "height": 1608,
                                              "width": 3217,
                                              "class": "ImageResourceLevel",
                                              "url": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC.jpeg"
                                             }
                                            ]
                                           }
                                          }
                                         ],
                                         "partial": false,
                                         "hfovMin": 60,
                                         "pitch": 0,
                                         "thumbnailUrl": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_t.jpg",
                                         "id": "panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
                                         "mapLocations": [
                                          {
                                           "x": 1356.98,
                                           "class": "PanoramaMapLocation",
                                           "y": 626.62,
                                           "angle": -88.59,
                                           "map": "this.map_04171D1A_107E_8278_4197_9875AF5B32BE"
                                          }
                                         ],
                                         "cardboardMenu": "this.Menu_0BB18192_11E1_8248_41A7_4C7BE41C6C8A",
                                         "label": "C15",
                                         "hfovMax": 120,
                                         "hfov": 360,
                                         "adjacentPanoramas": [
                                          {
                                           "panorama": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
                                           "class": "AdjacentPanorama",
                                           "yaw": 0.25,
                                           "backwardYaw": -0.27,
                                           "distance": 1
                                          }
                                         ],
                                         "vfov": 180
                                        },
                                        "class": "AdjacentPanorama",
                                        "yaw": -0.27,
                                        "backwardYaw": 0.25,
                                        "distance": 1
                                       },
                                       {
                                        "panorama": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
                                        "class": "AdjacentPanorama",
                                        "yaw": -178.42,
                                        "backwardYaw": -0.18,
                                        "distance": 1
                                       }
                                      ],
                                      "vfov": 180
                                     },
                                     "class": "AdjacentPanorama",
                                     "yaw": -0.18,
                                     "backwardYaw": -178.42,
                                     "distance": 1
                                    }
                                   ],
                                   "vfov": 180
                                  },
                                  "class": "AdjacentPanorama",
                                  "yaw": -178.02,
                                  "backwardYaw": -178.74,
                                  "distance": 1
                                 }
                                ],
                                "vfov": 180
                               },
                               "class": "AdjacentPanorama",
                               "yaw": 178.45,
                               "backwardYaw": 0.03,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                               "class": "AdjacentPanorama",
                               "yaw": -0.95,
                               "backwardYaw": -0.88,
                               "distance": 1
                              }
                             ],
                             "vfov": 180
                            },
                            "class": "AdjacentPanorama",
                            "yaw": -0.88,
                            "backwardYaw": -0.95,
                            "distance": 1
                           },
                           {
                            "panorama": {
                             "class": "Panorama",
                             "frames": [
                              {
                               "thumbnailUrl": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_t.jpg",
                               "class": "SphericPanoramaFrame",
                               "overlays": [
                                {
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 87,
                                      "width": 102,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_0_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 14.79,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 2.53,
                                   "pitch": 0.84
                                  }
                                 ],
                                 "id": "overlay_3B1920B6_0793_1DBA_4192_C46B5E5F935C",
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82, this.camera_0BD20279_11E1_86B9_4191_49302568054E); this.mainPlayList.set('selectedIndex', 8)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": 2.53,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 175,
                                      "width": 205,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_0_0.png"
                                     }
                                    ]
                                   },
                                   "hfov": 14.79,
                                   "pitch": 0.84
                                  }
                                 ]
                                },
                                {
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 16,
                                      "width": 30,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_1_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 7.35,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 2.81,
                                   "pitch": -5.39
                                  }
                                 ],
                                 "id": "overlay_45381DDF_0793_27EA_418B_A8C1322CFBB9",
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": 2.81,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 54,
                                      "width": 102,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_1_0.png"
                                     }
                                    ]
                                   },
                                   "hfov": 7.35,
                                   "pitch": -5.39
                                  }
                                 ]
                                },
                                {
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 85,
                                      "width": 77,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_2_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 11.11,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 25.67,
                                   "pitch": -1.26
                                  }
                                 ],
                                 "id": "overlay_442E80D6_0790_FDFA_4199_6BEACB7B4BE4",
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_0BCB126B_11E1_86D8_41AF_E17691E30FDA); this.mainPlayList.set('selectedIndex', 9)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": 25.67,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 170,
                                      "width": 154,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_2_0.png"
                                     }
                                    ]
                                   },
                                   "hfov": 11.11,
                                   "pitch": -1.26
                                  }
                                 ]
                                },
                                {
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 16,
                                      "width": 24,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_3_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 6.78,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 25.2,
                                   "pitch": -7.06
                                  }
                                 ],
                                 "id": "overlay_469A773A_0791_24AA_4191_D2BE6DDF9602",
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": 25.2,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 62,
                                      "width": 94,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_3_0.png"
                                     }
                                    ]
                                   },
                                   "hfov": 6.78,
                                   "pitch": -7.06
                                  }
                                 ]
                                },
                                {
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 110,
                                      "width": 80,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_4_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 11.57,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 152.96,
                                   "pitch": -3.67
                                  }
                                 ],
                                 "id": "overlay_4585C0BA_0797_1DAA_4199_443A4ACDED94",
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_0BC3E25C_11E1_86F8_41AA_965374563185); this.mainPlayList.set('selectedIndex', 17)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": 152.96,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 221,
                                      "width": 160,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_4_0.png"
                                     }
                                    ]
                                   },
                                   "hfov": 11.57,
                                   "pitch": -3.67
                                  }
                                 ]
                                },
                                {
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 16,
                                      "width": 28,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_5_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 7.37,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 153.29,
                                   "pitch": -10.96
                                  }
                                 ],
                                 "id": "overlay_41D6FB68_0797_6CD6_417A_18E907D050C5",
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": 153.29,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 58,
                                      "width": 104,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_5_0.png"
                                     }
                                    ]
                                   },
                                   "hfov": 7.37,
                                   "pitch": -10.96
                                  }
                                 ]
                                },
                                {
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 98,
                                      "width": 100,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_6_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 14.42,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -16.75,
                                   "pitch": 1.78
                                  }
                                 ],
                                 "id": "overlay_410F0DA3_0793_645A_4196_3EEE05D8D8D4",
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_0A2E52B5_11E1_8648_4183_52B11CE50C8D); this.mainPlayList.set('selectedIndex', 7)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": -16.75,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 197,
                                      "width": 200,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_6_0.png"
                                     }
                                    ]
                                   },
                                   "hfov": 14.42,
                                   "pitch": 1.78
                                  }
                                 ]
                                },
                                {
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 16,
                                      "width": 24,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_7_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 7.49,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -16.47,
                                   "pitch": -5.39
                                  }
                                 ],
                                 "id": "overlay_4276C9EC_0791_2FAE_4179_BF32F6E2E991",
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": -16.47,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 69,
                                      "width": 104,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_7_0.png"
                                     }
                                    ]
                                   },
                                   "hfov": 7.49,
                                   "pitch": -5.39
                                  }
                                 ]
                                },
                                {
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 76,
                                      "width": 50,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_8_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 7.26,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -55.84,
                                   "pitch": -0.21
                                  }
                                 ],
                                 "id": "overlay_44114CF6_0790_E5BA_4194_D0E5B766DD33",
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_0BDC7296_11E1_8648_41A0_44C121D8C13B); this.mainPlayList.set('selectedIndex', 6)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": -55.84,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 153,
                                      "width": 100,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_8_0.png"
                                     }
                                    ]
                                   },
                                   "hfov": 7.26,
                                   "pitch": -0.21
                                  }
                                 ]
                                },
                                {
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 16,
                                      "width": 32,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_9_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 9.26,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -55.09,
                                   "pitch": -5.83
                                  }
                                 ],
                                 "id": "overlay_4238B560_079F_24D6_419C_7D3BB8306A1E",
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": -55.09,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 63,
                                      "width": 129,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_9_0.png"
                                     }
                                    ]
                                   },
                                   "hfov": 9.26,
                                   "pitch": -5.83
                                  }
                                 ]
                                },
                                {
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 80,
                                      "width": 61,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_10_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 8.92,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -107.62,
                                   "pitch": -2.51
                                  }
                                 ],
                                 "id": "overlay_46F083CA_079F_23EA_418E_ACDC664F1975",
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_0A30C2D5_11E1_87C8_41A4_19F290B9615E); this.mainPlayList.set('selectedIndex', 15)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": -107.62,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 161,
                                      "width": 123,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_10_0.png"
                                     }
                                    ]
                                   },
                                   "hfov": 8.92,
                                   "pitch": -2.51
                                  }
                                 ]
                                },
                                {
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 16,
                                      "width": 28,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_11_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 9.3,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -107.29,
                                   "pitch": -8.27
                                  }
                                 ],
                                 "id": "overlay_43AEE268_0791_1CD6_4190_956303B44CDE",
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": -107.29,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 73,
                                      "width": 130,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_11_0.png"
                                     }
                                    ]
                                   },
                                   "hfov": 9.3,
                                   "pitch": -8.27
                                  }
                                 ]
                                },
                                {
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 79,
                                      "width": 55,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_12_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 7.89,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -146.68,
                                   "pitch": -5.07
                                  }
                                 ],
                                 "id": "overlay_44A3D555_0791_64FE_4198_4A9374AD4A83",
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_0A26A2A5_11E1_8648_4169_41C72A013F68); this.mainPlayList.set('selectedIndex', 22)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": -146.68,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 158,
                                      "width": 110,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_12_0.png"
                                     }
                                    ]
                                   },
                                   "hfov": 7.89,
                                   "pitch": -5.07
                                  }
                                 ]
                                },
                                {
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 16,
                                      "width": 26,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_13_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 8.87,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -146.65,
                                   "pitch": -10.64
                                  }
                                 ],
                                 "id": "overlay_42873502_0793_645A_419B_08499A73BBB4",
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": -146.65,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 75,
                                      "width": 125,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_13_0.png"
                                     }
                                    ]
                                   },
                                   "hfov": 8.87,
                                   "pitch": -10.64
                                  }
                                 ]
                                },
                                {
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 86,
                                      "width": 54,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_14_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 7.87,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 174.53,
                                   "pitch": -0.39
                                  }
                                 ],
                                 "id": "overlay_39A1D981_0791_6C56_4167_5B8F31E9A8D4",
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_0BD41287_11E1_8649_4184_73E6C5A4A71A); this.mainPlayList.set('selectedIndex', 18)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": 174.53,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 173,
                                      "width": 109,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_14_0.png"
                                     }
                                    ]
                                   },
                                   "hfov": 7.87,
                                   "pitch": -0.39
                                  }
                                 ]
                                },
                                {
                                 "rollOverDisplay": false,
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 16,
                                      "width": 26,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_15_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 6.83,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 174.39,
                                   "pitch": -5.68
                                  }
                                 ],
                                 "id": "overlay_44100C1A_0791_E46A_419B_68D0401A44F0",
                                 "enabledInCardboard": true,
                                 "useHandCursor": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": 174.39,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 57,
                                      "width": 95,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_15_0.png"
                                     }
                                    ]
                                   },
                                   "hfov": 6.83,
                                   "pitch": -5.68
                                  }
                                 ]
                                }
                               ],
                               "sphere": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "height": 2500,
                                  "width": 5000,
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_hq.jpeg"
                                 },
                                 {
                                  "height": 1608,
                                  "width": 3217,
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2.jpeg"
                                 }
                                ]
                               }
                              }
                             ],
                             "partial": false,
                             "hfovMin": 60,
                             "pitch": 0,
                             "thumbnailUrl": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_t.jpg",
                             "id": "panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                             "mapLocations": [
                              {
                               "x": 1024.21,
                               "class": "PanoramaMapLocation",
                               "y": 681.3,
                               "angle": 0,
                               "map": "this.map_04171D1A_107E_8278_4197_9875AF5B32BE"
                              }
                             ],
                             "cardboardMenu": "this.Menu_0BB18192_11E1_8248_41A7_4C7BE41C6C8A",
                             "label": "C17",
                             "hfovMax": 120,
                             "hfov": 360,
                             "adjacentPanoramas": [
                              {
                               "panorama": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
                               "class": "AdjacentPanorama",
                               "yaw": 152.96,
                               "backwardYaw": -143.45,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                               "class": "AdjacentPanorama",
                               "yaw": 25.67,
                               "backwardYaw": 81.58,
                               "distance": 1
                              },
                              {
                               "panorama": {
                                "class": "Panorama",
                                "frames": [
                                 {
                                  "thumbnailUrl": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_t.jpg",
                                  "class": "SphericPanoramaFrame",
                                  "overlays": [
                                   {
                                    "rollOverDisplay": false,
                                    "maps": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 42,
                                         "width": 37,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_0_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "hfov": 5.56,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 105.38,
                                      "pitch": 0.66
                                     }
                                    ],
                                    "id": "overlay_1E557066_06B1_FCDA_4191_0771B40B46DF",
                                    "enabledInCardboard": true,
                                    "useHandCursor": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_0B96E652_11E1_8EC8_4178_A910A8C82A34); this.mainPlayList.set('selectedIndex', 9)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": 105.38,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 84,
                                         "width": 75,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_0_0.png"
                                        }
                                       ]
                                      },
                                      "hfov": 5.56,
                                      "pitch": 0.66
                                     }
                                    ]
                                   },
                                   {
                                    "rollOverDisplay": false,
                                    "maps": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 16,
                                         "width": 24,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_1_0_map.gif"
                                        }
                                       ]
                                      },
                                      "hfov": 6.77,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 105.71,
                                      "pitch": -3.51
                                     }
                                    ],
                                    "id": "overlay_1E6BC9CE_06B0_EFEA_4194_3DB640A87052",
                                    "enabledInCardboard": true,
                                    "useHandCursor": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": 105.71,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 59,
                                         "width": 92,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_1_0.png"
                                        }
                                       ]
                                      },
                                      "hfov": 6.77,
                                      "pitch": -3.51
                                     }
                                    ]
                                   },
                                   {
                                    "rollOverDisplay": false,
                                    "maps": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 36,
                                         "width": 32,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_2_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "hfov": 4.85,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 116.4,
                                      "pitch": 1.05
                                     }
                                    ],
                                    "id": "overlay_1FA961C0_068F_FFD6_4187_D2C8F16F2FF8",
                                    "enabledInCardboard": true,
                                    "useHandCursor": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_0B84F632_11E1_8E48_4191_4832156BF2B9); this.mainPlayList.set('selectedIndex', 16)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": 116.4,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 72,
                                         "width": 65,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_2_0.png"
                                        }
                                       ]
                                      },
                                      "hfov": 4.85,
                                      "pitch": 1.05
                                     }
                                    ]
                                   },
                                   {
                                    "rollOverDisplay": false,
                                    "maps": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 16,
                                         "width": 26,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_3_0_map.gif"
                                        }
                                       ]
                                      },
                                      "hfov": 6.2,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 116.87,
                                      "pitch": -2.03
                                     }
                                    ],
                                    "id": "overlay_1DFE33B1_0691_63B6_416C_46BDA8C7F5D9",
                                    "enabledInCardboard": true,
                                    "useHandCursor": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": 116.87,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 51,
                                         "width": 84,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_3_0.png"
                                        }
                                       ]
                                      },
                                      "hfov": 6.2,
                                      "pitch": -2.03
                                     }
                                    ]
                                   },
                                   {
                                    "rollOverDisplay": false,
                                    "maps": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 32,
                                         "width": 35,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_4_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "hfov": 5.2,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 121.73,
                                      "pitch": 1.1
                                     }
                                    ],
                                    "id": "overlay_1C1E18E0_0693_2DD6_4185_66053E805808",
                                    "enabledInCardboard": true,
                                    "useHandCursor": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_0B821622_11E1_8E48_41B0_642F22683E7C); this.mainPlayList.set('selectedIndex', 17)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": 121.73,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 65,
                                         "width": 70,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_4_0.png"
                                        }
                                       ]
                                      },
                                      "hfov": 5.2,
                                      "pitch": 1.1
                                     }
                                    ]
                                   },
                                   {
                                    "rollOverDisplay": false,
                                    "maps": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 16,
                                         "width": 24,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_5_0_map.gif"
                                        }
                                       ]
                                      },
                                      "hfov": 4.74,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 121.85,
                                      "pitch": -1.12
                                     }
                                    ],
                                    "id": "overlay_1A8360BA_0693_3DAA_4197_01959E37D013",
                                    "enabledInCardboard": true,
                                    "useHandCursor": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": 121.85,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 42,
                                         "width": 64,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_5_0.png"
                                        }
                                       ]
                                      },
                                      "hfov": 4.74,
                                      "pitch": -1.12
                                     }
                                    ]
                                   },
                                   {
                                    "rollOverDisplay": false,
                                    "maps": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 35,
                                         "width": 36,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_6_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "hfov": 5.41,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 130.14,
                                      "pitch": 0.09
                                     }
                                    ],
                                    "id": "overlay_1F9A2A07_0691_EC5A_4197_D42F6DB80195",
                                    "enabledInCardboard": true,
                                    "useHandCursor": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_0B8F2642_11E1_8EC8_41AA_25F7186071AA); this.mainPlayList.set('selectedIndex', 7)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": 130.14,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 70,
                                         "width": 73,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_6_0.png"
                                        }
                                       ]
                                      },
                                      "hfov": 5.41,
                                      "pitch": 0.09
                                     }
                                    ]
                                   },
                                   {
                                    "rollOverDisplay": false,
                                    "maps": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 16,
                                         "width": 23,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_7_0_map.gif"
                                        }
                                       ]
                                      },
                                      "hfov": 4.75,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 130.1,
                                      "pitch": -2.92
                                     }
                                    ],
                                    "id": "overlay_1A54EB2C_0691_2CAE_414E_FD4A85E449B8",
                                    "enabledInCardboard": true,
                                    "useHandCursor": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": 130.1,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 43,
                                         "width": 64,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_7_0.png"
                                        }
                                       ]
                                      },
                                      "hfov": 4.75,
                                      "pitch": -2.92
                                     }
                                    ]
                                   }
                                  ],
                                  "sphere": {
                                   "class": "ImageResource",
                                   "levels": [
                                    {
                                     "height": 2450,
                                     "width": 4900,
                                     "class": "ImageResourceLevel",
                                     "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_hq.jpeg"
                                    },
                                    {
                                     "height": 1608,
                                     "width": 3217,
                                     "class": "ImageResourceLevel",
                                     "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82.jpeg"
                                    }
                                   ]
                                  }
                                 }
                                ],
                                "partial": false,
                                "hfovMin": 60,
                                "pitch": 0,
                                "thumbnailUrl": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_t.jpg",
                                "id": "panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
                                "mapLocations": [
                                 {
                                  "x": 1020.71,
                                  "class": "PanoramaMapLocation",
                                  "y": 498.75,
                                  "angle": 60.97,
                                  "map": "this.map_04171D1A_107E_8278_4197_9875AF5B32BE"
                                 }
                                ],
                                "cardboardMenu": "this.Menu_0BB18192_11E1_8248_41A7_4C7BE41C6C8A",
                                "label": "C09",
                                "hfovMax": 120,
                                "hfov": 360,
                                "adjacentPanoramas": [
                                 {
                                  "panorama": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
                                  "class": "AdjacentPanorama",
                                  "yaw": 121.73,
                                  "backwardYaw": -171.11,
                                  "distance": 1
                                 },
                                 {
                                  "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                                  "class": "AdjacentPanorama",
                                  "yaw": 116.4,
                                  "backwardYaw": 2.53,
                                  "distance": 1
                                 },
                                 {
                                  "panorama": {
                                   "class": "Panorama",
                                   "frames": [
                                    {
                                     "thumbnailUrl": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_t.jpg",
                                     "class": "SphericPanoramaFrame",
                                     "overlays": [
                                      {
                                       "rollOverDisplay": false,
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 62,
                                            "width": 52,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_0_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 7.67,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -154.28,
                                         "pitch": -3.38
                                        }
                                       ],
                                       "id": "overlay_108FC976_06B1_6CBA_4194_C8910C228778",
                                       "enabledInCardboard": true,
                                       "useHandCursor": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82, this.camera_0BC506BB_11E1_8FB8_4140_F407C7039FF7); this.mainPlayList.set('selectedIndex', 8)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": -154.28,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 124,
                                            "width": 104,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_0_0.png"
                                           }
                                          ]
                                         },
                                         "hfov": 7.67,
                                         "pitch": -3.38
                                        }
                                       ]
                                      },
                                      {
                                       "rollOverDisplay": false,
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 16,
                                            "width": 25,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_1_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 7.28,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -153.92,
                                         "pitch": -8.41
                                        }
                                       ],
                                       "id": "overlay_1C9800E4_06BF_3DDE_4173_59F64E3E5D64",
                                       "enabledInCardboard": true,
                                       "useHandCursor": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": -153.92,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 64,
                                            "width": 100,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_1_0.png"
                                           }
                                          ]
                                         },
                                         "hfov": 7.28,
                                         "pitch": -8.41
                                        }
                                       ]
                                      },
                                      {
                                       "rollOverDisplay": false,
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 75,
                                            "width": 77,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_2_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 11.33,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -42.13,
                                         "pitch": -1.48
                                        }
                                       ],
                                       "id": "overlay_1E29306F_06BF_3CAA_4193_DFD053E8C52C",
                                       "enabledInCardboard": true,
                                       "useHandCursor": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_0BFDB6AD_11E1_8E58_41A1_D4B111B28786); this.mainPlayList.set('selectedIndex', 9)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": -42.13,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 150,
                                            "width": 154,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_2_0.png"
                                           }
                                          ]
                                         },
                                         "hfov": 11.33,
                                         "pitch": -1.48
                                        }
                                       ]
                                      },
                                      {
                                       "rollOverDisplay": false,
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 16,
                                            "width": 27,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_3_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 8.76,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -41.81,
                                         "pitch": -7.26
                                        }
                                       ],
                                       "id": "overlay_112FAD06_06B0_E45A_4192_19B5F480919F",
                                       "enabledInCardboard": true,
                                       "useHandCursor": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": -41.81,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 71,
                                            "width": 120,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_3_0.png"
                                           }
                                          ]
                                         },
                                         "hfov": 8.76,
                                         "pitch": -7.26
                                        }
                                       ]
                                      },
                                      {
                                       "rollOverDisplay": false,
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 71,
                                            "width": 42,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_4_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 6.29,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 36.85,
                                         "pitch": -2.58
                                        }
                                       ],
                                       "id": "overlay_11493BE4_06B1_23DE_4184_2C2532225ED0",
                                       "enabledInCardboard": true,
                                       "useHandCursor": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_0BFAE69F_11E1_8E78_415C_3497A8BE0CB4); this.mainPlayList.set('selectedIndex', 6)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": 36.85,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 142,
                                            "width": 85,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_4_0.png"
                                           }
                                          ]
                                         },
                                         "hfov": 6.29,
                                         "pitch": -2.58
                                        }
                                       ]
                                      },
                                      {
                                       "rollOverDisplay": false,
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 16,
                                            "width": 26,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_5_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 6.76,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 36.94,
                                         "pitch": -6.88
                                        }
                                       ],
                                       "id": "overlay_1FA8ED9A_06B1_646A_4196_2926CB7FBF93",
                                       "enabledInCardboard": true,
                                       "useHandCursor": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": 36.94,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 55,
                                            "width": 92,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_5_0.png"
                                           }
                                          ]
                                         },
                                         "hfov": 6.76,
                                         "pitch": -6.88
                                        }
                                       ]
                                      },
                                      {
                                       "rollOverDisplay": false,
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 56,
                                            "width": 31,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_6_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 4.69,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 12.62,
                                         "pitch": 0.41
                                        }
                                       ],
                                       "id": "overlay_1C896D16_06B3_647D_419A_5B670D605F0F",
                                       "enabledInCardboard": true,
                                       "useHandCursor": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_0BD9D6F6_11E1_8FCB_4167_DEC460716738); this.mainPlayList.set('selectedIndex', 15)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": 12.62,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 112,
                                            "width": 63,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_6_0.png"
                                           }
                                          ]
                                         },
                                         "hfov": 4.69,
                                         "pitch": 0.41
                                        }
                                       ]
                                      },
                                      {
                                       "rollOverDisplay": false,
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 16,
                                            "width": 23,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_7_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 5.61,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 12.53,
                                         "pitch": -3.06
                                        }
                                       ],
                                       "id": "overlay_1D2E6CB7_06B3_25BA_4193_701A9B0FB2FB",
                                       "enabledInCardboard": true,
                                       "useHandCursor": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": 12.53,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 51,
                                            "width": 76,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_7_0.png"
                                           }
                                          ]
                                         },
                                         "hfov": 5.61,
                                         "pitch": -3.06
                                        }
                                       ]
                                      },
                                      {
                                       "rollOverDisplay": false,
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 51,
                                            "width": 59,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_8_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 8.76,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -22.68,
                                         "pitch": -0.34
                                        }
                                       ],
                                       "id": "overlay_11694CCB_06B1_25EA_4174_4C81369B945A",
                                       "enabledInCardboard": true,
                                       "useHandCursor": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_0BD7A6D8_11E1_8FC7_41A3_C9558BA788F2); this.mainPlayList.set('selectedIndex', 16)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": -22.68,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 103,
                                            "width": 119,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_8_0.png"
                                           }
                                          ]
                                         },
                                         "hfov": 8.76,
                                         "pitch": -0.34
                                        }
                                       ]
                                      },
                                      {
                                       "rollOverDisplay": false,
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 16,
                                            "width": 26,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_9_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 7.24,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -22.91,
                                         "pitch": -5.14
                                        }
                                       ],
                                       "id": "overlay_1FD2C4F5_06B1_65BE_4181_9DD8225286DD",
                                       "enabledInCardboard": true,
                                       "useHandCursor": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": -22.91,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 59,
                                            "width": 98,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_9_0.png"
                                           }
                                          ]
                                         },
                                         "hfov": 7.24,
                                         "pitch": -5.14
                                        }
                                       ]
                                      },
                                      {
                                       "rollOverDisplay": false,
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 34,
                                            "width": 34,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_10_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 5,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -15.07,
                                         "pitch": 0.68
                                        }
                                       ],
                                       "id": "overlay_1AA96E8F_06B7_246A_4191_88C07BFE428F",
                                       "enabledInCardboard": true,
                                       "useHandCursor": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_0BCF96C9_11E1_8FD8_4188_14CED55F3BE0); this.mainPlayList.set('selectedIndex', 17)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": -15.07,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 68,
                                            "width": 68,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_10_0.png"
                                           }
                                          ]
                                         },
                                         "hfov": 5,
                                         "pitch": 0.68
                                        }
                                       ]
                                      },
                                      {
                                       "rollOverDisplay": false,
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 16,
                                            "width": 22,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_11_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 6.67,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -15.09,
                                         "pitch": -3.07
                                        }
                                       ],
                                       "id": "overlay_1C689D2D_06B7_24AE_4189_12E4D57756A6",
                                       "enabledInCardboard": true,
                                       "useHandCursor": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": -15.09,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 63,
                                            "width": 90,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_11_0.png"
                                           }
                                          ]
                                         },
                                         "hfov": 6.67,
                                         "pitch": -3.07
                                        }
                                       ]
                                      }
                                     ],
                                     "sphere": {
                                      "class": "ImageResource",
                                      "levels": [
                                       {
                                        "height": 2450,
                                        "width": 4900,
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_hq.jpeg"
                                       },
                                       {
                                        "height": 1608,
                                        "width": 3217,
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F.jpeg"
                                       }
                                      ]
                                     }
                                    }
                                   ],
                                   "partial": false,
                                   "hfovMin": 60,
                                   "pitch": 0,
                                   "thumbnailUrl": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_t.jpg",
                                   "id": "panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                                   "mapLocations": [
                                    {
                                     "x": 975.05,
                                     "class": "PanoramaMapLocation",
                                     "y": 555.54,
                                     "angle": 190.27,
                                     "map": "this.map_04171D1A_107E_8278_4197_9875AF5B32BE"
                                    }
                                   ],
                                   "cardboardMenu": "this.Menu_0BB18192_11E1_8248_41A7_4C7BE41C6C8A",
                                   "label": "C08",
                                   "hfovMax": 120,
                                   "hfov": 360,
                                   "adjacentPanoramas": [
                                    {
                                     "panorama": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                                     "class": "AdjacentPanorama",
                                     "yaw": 36.85,
                                     "backwardYaw": 4.74,
                                     "distance": 1
                                    },
                                    {
                                     "panorama": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                                     "class": "AdjacentPanorama",
                                     "yaw": -42.13,
                                     "backwardYaw": -143.14,
                                     "distance": 1
                                    },
                                    {
                                     "panorama": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
                                     "class": "AdjacentPanorama",
                                     "yaw": -154.28,
                                     "backwardYaw": 130.14,
                                     "distance": 1
                                    },
                                    {
                                     "panorama": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
                                     "class": "AdjacentPanorama",
                                     "yaw": -15.07,
                                     "backwardYaw": 171.48,
                                     "distance": 1
                                    },
                                    {
                                     "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                                     "class": "AdjacentPanorama",
                                     "yaw": -22.68,
                                     "backwardYaw": -16.75,
                                     "distance": 1
                                    },
                                    {
                                     "panorama": {
                                      "class": "Panorama",
                                      "frames": [
                                       {
                                        "thumbnailUrl": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_t.jpg",
                                        "class": "SphericPanoramaFrame",
                                        "overlays": [
                                         {
                                          "rollOverDisplay": false,
                                          "maps": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 104,
                                               "width": 76,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_0_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "hfov": 11.08,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": -174.64,
                                            "pitch": -1.2
                                           }
                                          ],
                                          "id": "overlay_30BC7838_07B1_2CB6_4188_1F368EE0331C",
                                          "enabledInCardboard": true,
                                          "useHandCursor": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.mainPlayList.set('selectedIndex', 22)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": -174.64,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 208,
                                               "width": 153,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_0_0.png"
                                              }
                                             ]
                                            },
                                            "hfov": 11.08,
                                            "pitch": -1.2
                                           }
                                          ]
                                         },
                                         {
                                          "rollOverDisplay": false,
                                          "maps": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 16,
                                               "width": 22,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_1_0_map.gif"
                                              }
                                             ]
                                            },
                                            "hfov": 8.18,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": -174.7,
                                            "pitch": -8.9
                                           }
                                          ],
                                          "id": "overlay_3619F023_078F_1C5A_419A_DDBC83BEE9D1",
                                          "enabledInCardboard": true,
                                          "useHandCursor": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": -174.7,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 80,
                                               "width": 114,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_1_0.png"
                                              }
                                             ]
                                            },
                                            "hfov": 8.18,
                                            "pitch": -8.9
                                           }
                                          ]
                                         },
                                         {
                                          "rollOverDisplay": false,
                                          "maps": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 64,
                                               "width": 44,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_2_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "hfov": 6.46,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": -18.92,
                                            "pitch": -1.79
                                           }
                                          ],
                                          "id": "overlay_363321E9_0790_FFD6_419B_CF80D5A53966",
                                          "enabledInCardboard": true,
                                          "useHandCursor": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_0B60E513_11E1_8248_41A0_A685CBCAFF2A); this.mainPlayList.set('selectedIndex', 6)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": -18.92,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 129,
                                               "width": 89,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_2_0.png"
                                              }
                                             ]
                                            },
                                            "hfov": 6.46,
                                            "pitch": -1.79
                                           }
                                          ]
                                         },
                                         {
                                          "rollOverDisplay": false,
                                          "maps": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 16,
                                               "width": 26,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_3_0_map.gif"
                                              }
                                             ]
                                            },
                                            "hfov": 8.46,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": -18.8,
                                            "pitch": -6.24
                                           }
                                          ],
                                          "id": "overlay_33FE544D_0791_24EE_4186_5CC6F6EE735D",
                                          "enabledInCardboard": true,
                                          "useHandCursor": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": -18.8,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 72,
                                               "width": 118,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_3_0.png"
                                              }
                                             ]
                                            },
                                            "hfov": 8.46,
                                            "pitch": -6.24
                                           }
                                          ]
                                         },
                                         {
                                          "rollOverDisplay": false,
                                          "maps": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 52,
                                               "width": 41,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_4_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "hfov": 5.96,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": 11.76,
                                            "pitch": -0.08
                                           }
                                          ],
                                          "id": "overlay_3E711B46_0790_ECDA_4187_B01EE563934E",
                                          "enabledInCardboard": true,
                                          "useHandCursor": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_0B76E54E_11E1_82D8_41A9_2F64C5A74A2E); this.mainPlayList.set('selectedIndex', 7)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": 11.76,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 105,
                                               "width": 82,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_4_0.png"
                                              }
                                             ]
                                            },
                                            "hfov": 5.96,
                                            "pitch": -0.08
                                           }
                                          ]
                                         },
                                         {
                                          "rollOverDisplay": false,
                                          "maps": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 16,
                                               "width": 26,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_5_0_map.gif"
                                              }
                                             ]
                                            },
                                            "hfov": 7.7,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": 11.97,
                                            "pitch": -4.28
                                           }
                                          ],
                                          "id": "overlay_31C9D706_0793_245A_4166_1CA387F63591",
                                          "enabledInCardboard": true,
                                          "useHandCursor": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": 11.97,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 65,
                                               "width": 107,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_5_0.png"
                                              }
                                             ]
                                            },
                                            "hfov": 7.7,
                                            "pitch": -4.28
                                           }
                                          ]
                                         },
                                         {
                                          "rollOverDisplay": false,
                                          "maps": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 41,
                                               "width": 30,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_6_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "hfov": 4.4,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": 26.56,
                                            "pitch": -1.38
                                           }
                                          ],
                                          "id": "overlay_36B555D6_0793_67FA_4178_6B0BA1AD50F2",
                                          "enabledInCardboard": true,
                                          "useHandCursor": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.mainPlayList.set('selectedIndex', 8)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": 26.56,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 83,
                                               "width": 61,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_6_0.png"
                                              }
                                             ]
                                            },
                                            "hfov": 4.4,
                                            "pitch": -1.38
                                           }
                                          ]
                                         },
                                         {
                                          "rollOverDisplay": false,
                                          "maps": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 16,
                                               "width": 28,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_7_0_map.gif"
                                              }
                                             ]
                                            },
                                            "hfov": 6.84,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": 26.86,
                                            "pitch": -5.2
                                           }
                                          ],
                                          "id": "overlay_35E51298_0791_7C76_4198_40BC383ED8CF",
                                          "enabledInCardboard": true,
                                          "useHandCursor": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": 26.86,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 54,
                                               "width": 95,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_7_0.png"
                                              }
                                             ]
                                            },
                                            "hfov": 6.84,
                                            "pitch": -5.2
                                           }
                                          ]
                                         },
                                         {
                                          "rollOverDisplay": false,
                                          "maps": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 71,
                                               "width": 61,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_8_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "hfov": 8.85,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": 59.08,
                                            "pitch": -0.44
                                           }
                                          ],
                                          "id": "overlay_3015CF23_0791_245A_4192_56944CCEC538",
                                          "enabledInCardboard": true,
                                          "useHandCursor": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_0B7B155D_11E1_82F8_419C_E96368EC1791); this.mainPlayList.set('selectedIndex', 9)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": 59.08,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 143,
                                               "width": 122,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_8_0.png"
                                              }
                                             ]
                                            },
                                            "hfov": 8.85,
                                            "pitch": -0.44
                                           }
                                          ]
                                         },
                                         {
                                          "rollOverDisplay": false,
                                          "maps": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 16,
                                               "width": 27,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_9_0_map.gif"
                                              }
                                             ]
                                            },
                                            "hfov": 8.79,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": 58.85,
                                            "pitch": -6.48
                                           }
                                          ],
                                          "id": "overlay_3F6B9A60_079F_ECD6_4197_948570BFCE54",
                                          "enabledInCardboard": true,
                                          "useHandCursor": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": 58.85,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 71,
                                               "width": 122,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_9_0.png"
                                              }
                                             ]
                                            },
                                            "hfov": 8.79,
                                            "pitch": -6.48
                                           }
                                          ]
                                         },
                                         {
                                          "rollOverDisplay": false,
                                          "maps": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 67,
                                               "width": 59,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_10_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "hfov": 8.52,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": 113.51,
                                            "pitch": -1.39
                                           }
                                          ],
                                          "id": "overlay_35E18CCC_0790_E5EE_4197_CADFEF31780A",
                                          "enabledInCardboard": true,
                                          "useHandCursor": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_0B67F522_11E1_8248_419F_064D796D7B0D); this.mainPlayList.set('selectedIndex', 16)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": 113.51,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 134,
                                               "width": 118,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_10_0.png"
                                              }
                                             ]
                                            },
                                            "hfov": 8.52,
                                            "pitch": -1.39
                                           }
                                          ]
                                         },
                                         {
                                          "rollOverDisplay": false,
                                          "maps": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 16,
                                               "width": 29,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_11_0_map.gif"
                                              }
                                             ]
                                            },
                                            "hfov": 6.94,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": 114.19,
                                            "pitch": -6.29
                                           }
                                          ],
                                          "id": "overlay_35DB4DB5_0791_27BE_4183_7C63065DE16E",
                                          "enabledInCardboard": true,
                                          "useHandCursor": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": 114.19,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 52,
                                               "width": 97,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_11_0.png"
                                              }
                                             ]
                                            },
                                            "hfov": 6.94,
                                            "pitch": -6.29
                                           }
                                          ]
                                         },
                                         {
                                          "rollOverDisplay": false,
                                          "maps": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 68,
                                               "width": 58,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_12_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "hfov": 8.4,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": 140.71,
                                            "pitch": -0.39
                                           }
                                          ],
                                          "id": "overlay_3431079C_0791_646E_416B_E85EA27EFB4D",
                                          "enabledInCardboard": true,
                                          "useHandCursor": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_0B6CC540_11E1_82C8_41A2_93B8CEF5A027); this.mainPlayList.set('selectedIndex', 17)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": 140.71,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 137,
                                               "width": 116,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_12_0.png"
                                              }
                                             ]
                                            },
                                            "hfov": 8.4,
                                            "pitch": -0.39
                                           }
                                          ]
                                         },
                                         {
                                          "rollOverDisplay": false,
                                          "maps": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 16,
                                               "width": 26,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_13_0_map.gif"
                                              }
                                             ]
                                            },
                                            "hfov": 6.6,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": 141.31,
                                            "pitch": -5.64
                                           }
                                          ],
                                          "id": "overlay_347C62F9_0793_1DB6_419B_1F3665A646DA",
                                          "enabledInCardboard": true,
                                          "useHandCursor": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": 141.31,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 56,
                                               "width": 92,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_13_0.png"
                                              }
                                             ]
                                            },
                                            "hfov": 6.6,
                                            "pitch": -5.64
                                           }
                                          ]
                                         },
                                         {
                                          "rollOverDisplay": false,
                                          "maps": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 57,
                                               "width": 48,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_14_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "hfov": 6.96,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": 168.59,
                                            "pitch": 0
                                           }
                                          ],
                                          "id": "overlay_34AF6FA5_0790_E45E_418E_0B039F637C1F",
                                          "enabledInCardboard": true,
                                          "useHandCursor": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_0B68E531_11E1_8248_4180_E38DD90BEAD1); this.mainPlayList.set('selectedIndex', 18)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": 168.59,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 114,
                                               "width": 96,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_14_0.png"
                                              }
                                             ]
                                            },
                                            "hfov": 6.96,
                                            "pitch": 0
                                           }
                                          ]
                                         },
                                         {
                                          "rollOverDisplay": false,
                                          "maps": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 16,
                                               "width": 25,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_15_0_map.gif"
                                              }
                                             ]
                                            },
                                            "hfov": 5.93,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": 169.02,
                                            "pitch": -4.04
                                           }
                                          ],
                                          "id": "overlay_30B9CD54_0797_24FE_416B_E44F95B2DACF",
                                          "enabledInCardboard": true,
                                          "useHandCursor": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": 169.02,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 52,
                                               "width": 82,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_15_0.png"
                                              }
                                             ]
                                            },
                                            "hfov": 5.93,
                                            "pitch": -4.04
                                           }
                                          ]
                                         }
                                        ],
                                        "sphere": {
                                         "class": "ImageResource",
                                         "levels": [
                                          {
                                           "height": 2500,
                                           "width": 5000,
                                           "class": "ImageResourceLevel",
                                           "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_hq.jpeg"
                                          },
                                          {
                                           "height": 1608,
                                           "width": 3217,
                                           "class": "ImageResourceLevel",
                                           "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397.jpeg"
                                          }
                                         ]
                                        }
                                       }
                                      ],
                                      "partial": false,
                                      "hfovMin": 60,
                                      "pitch": 0,
                                      "thumbnailUrl": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_t.jpg",
                                      "id": "panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                                      "mapLocations": [
                                       {
                                        "x": 963.63,
                                        "class": "PanoramaMapLocation",
                                        "y": 675.25,
                                        "angle": 11.4,
                                        "map": "this.map_04171D1A_107E_8278_4197_9875AF5B32BE"
                                       }
                                      ],
                                      "cardboardMenu": "this.Menu_0BB18192_11E1_8248_41A7_4C7BE41C6C8A",
                                      "label": "C16",
                                      "hfovMax": 120,
                                      "hfov": 360,
                                      "adjacentPanoramas": [
                                       {
                                        "panorama": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                                        "class": "AdjacentPanorama",
                                        "yaw": -18.92,
                                        "backwardYaw": 156.92,
                                        "distance": 1
                                       },
                                       {
                                        "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                                        "class": "AdjacentPanorama",
                                        "yaw": 113.51,
                                        "backwardYaw": -107.62,
                                        "distance": 1
                                       },
                                       {
                                        "panorama": {
                                         "class": "Panorama",
                                         "frames": [
                                          {
                                           "thumbnailUrl": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_t.jpg",
                                           "class": "SphericPanoramaFrame",
                                           "overlays": [
                                            {
                                             "rollOverDisplay": false,
                                             "maps": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 41,
                                                  "width": 35,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_0_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "hfov": 5.09,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": 5.89,
                                               "pitch": -0.32
                                              }
                                             ],
                                             "id": "overlay_3E3B8D53_0793_24FA_4187_9D3A8F1D1D8B",
                                             "enabledInCardboard": true,
                                             "useHandCursor": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.mainPlayList.set('selectedIndex', 8)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": 5.89,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 83,
                                                  "width": 70,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_0_0.png"
                                                 }
                                                ]
                                               },
                                               "hfov": 5.09,
                                               "pitch": -0.32
                                              }
                                             ]
                                            },
                                            {
                                             "rollOverDisplay": false,
                                             "maps": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 16,
                                                  "width": 24,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_1_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "hfov": 4.94,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": 5.83,
                                               "pitch": -3.54
                                              }
                                             ],
                                             "id": "overlay_3B323082_0791_1C5A_416C_891FD9C1AFF8",
                                             "enabledInCardboard": true,
                                             "useHandCursor": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": 5.83,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 45,
                                                  "width": 68,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_1_0.png"
                                                 }
                                                ]
                                               },
                                               "hfov": 4.94,
                                               "pitch": -3.54
                                              }
                                             ]
                                            },
                                            {
                                             "rollOverDisplay": false,
                                             "maps": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 115,
                                                  "width": 76,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_2_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "hfov": 10.89,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": 29.17,
                                               "pitch": -6.91
                                              }
                                             ],
                                             "id": "overlay_33ADB319_0791_1C76_4194_3AD41C851323",
                                             "enabledInCardboard": true,
                                             "useHandCursor": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_0ABE2477_11E1_82C8_4176_D1BE1B57E381); this.mainPlayList.set('selectedIndex', 17)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": 29.17,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 230,
                                                  "width": 152,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_2_0.png"
                                                 }
                                                ]
                                               },
                                               "hfov": 10.89,
                                               "pitch": -6.91
                                              }
                                             ]
                                            },
                                            {
                                             "rollOverDisplay": false,
                                             "maps": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 16,
                                                  "width": 25,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_3_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "hfov": 8.31,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": 28.93,
                                               "pitch": -13.39
                                              }
                                             ],
                                             "id": "overlay_33D2C3E4_078F_23DE_417D_A6B689D41EEC",
                                             "enabledInCardboard": true,
                                             "useHandCursor": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": 28.93,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 73,
                                                  "width": 118,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_3_0.png"
                                                 }
                                                ]
                                               },
                                               "hfov": 8.31,
                                               "pitch": -13.39
                                              }
                                             ]
                                            },
                                            {
                                             "rollOverDisplay": false,
                                             "maps": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 83,
                                                  "width": 59,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_4_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "hfov": 8.57,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": 18.34,
                                               "pitch": -2.39
                                              }
                                             ],
                                             "id": "overlay_3B68623F_078F_FCAA_4115_F9A6F52B8B88",
                                             "enabledInCardboard": true,
                                             "useHandCursor": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_0A9914A8_11E1_8258_41AF_0C7EA393FF5C); this.mainPlayList.set('selectedIndex', 16)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": 18.34,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 166,
                                                  "width": 119,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_4_0.png"
                                                 }
                                                ]
                                               },
                                               "hfov": 8.57,
                                               "pitch": -2.39
                                              }
                                             ]
                                            },
                                            {
                                             "rollOverDisplay": false,
                                             "maps": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 16,
                                                  "width": 25,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_5_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "hfov": 7.19,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": 18.77,
                                               "pitch": -8.2
                                              }
                                             ],
                                             "id": "overlay_3FBEE0F4_078F_1DBE_417F_7F3C0E1C77B9",
                                             "enabledInCardboard": true,
                                             "useHandCursor": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": 18.77,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 62,
                                                  "width": 100,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_5_0.png"
                                                 }
                                                ]
                                               },
                                               "hfov": 7.19,
                                               "pitch": -8.2
                                              }
                                             ]
                                            },
                                            {
                                             "rollOverDisplay": false,
                                             "maps": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 147,
                                                  "width": 130,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_6_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "hfov": 18.67,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": -53.28,
                                               "pitch": -6.56
                                              }
                                             ],
                                             "id": "overlay_320E5953_07F1_2CFB_4198_E69AA92B2C0B",
                                             "enabledInCardboard": true,
                                             "useHandCursor": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_0A92A497_11E1_8248_41A4_14724C512864); this.mainPlayList.set('selectedIndex', 22)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": -53.28,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 295,
                                                  "width": 261,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_6_0.png"
                                                 }
                                                ]
                                               },
                                               "hfov": 18.67,
                                               "pitch": -6.56
                                              }
                                             ]
                                            },
                                            {
                                             "rollOverDisplay": false,
                                             "maps": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 16,
                                                  "width": 24,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_7_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "hfov": 7.97,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": -54.01,
                                               "pitch": -16.02
                                              }
                                             ],
                                             "id": "overlay_32A61C12_07F3_647A_4188_FF9DAE655EAC",
                                             "enabledInCardboard": true,
                                             "useHandCursor": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": -54.01,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 76,
                                                  "width": 115,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_7_0.png"
                                                 }
                                                ]
                                               },
                                               "hfov": 7.97,
                                               "pitch": -16.02
                                              }
                                             ]
                                            },
                                            {
                                             "rollOverDisplay": false,
                                             "maps": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 83,
                                                  "width": 93,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_8_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "hfov": 13.52,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": -34.31,
                                               "pitch": -0.66
                                              }
                                             ],
                                             "id": "overlay_3EC875E4_07F3_67DE_419C_0D8FCC133A45",
                                             "enabledInCardboard": true,
                                             "useHandCursor": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_0B1D1504_11E1_8248_416E_775417AAC804); this.mainPlayList.set('selectedIndex', 15)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": -34.31,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 166,
                                                  "width": 187,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_8_0.png"
                                                 }
                                                ]
                                               },
                                               "hfov": 13.52,
                                               "pitch": -0.66
                                              }
                                             ]
                                            },
                                            {
                                             "rollOverDisplay": false,
                                             "maps": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 16,
                                                  "width": 24,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_9_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "hfov": 7.25,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": -33.66,
                                               "pitch": -5.59
                                              }
                                             ],
                                             "id": "overlay_31996F4E_07F1_24EA_419A_EEA7DD65B1C6",
                                             "enabledInCardboard": true,
                                             "useHandCursor": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": -33.66,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 66,
                                                  "width": 101,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_9_0.png"
                                                 }
                                                ]
                                               },
                                               "hfov": 7.25,
                                               "pitch": -5.59
                                              }
                                             ]
                                            },
                                            {
                                             "rollOverDisplay": false,
                                             "maps": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 51,
                                                  "width": 33,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_10_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "hfov": 4.82,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": -22.73,
                                               "pitch": 0.95
                                              }
                                             ],
                                             "id": "overlay_3DF559C6_07F7_2FDA_4174_D608913B20E5",
                                             "enabledInCardboard": true,
                                             "useHandCursor": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_0A857487_11E1_8248_41B1_0790FEFBBD00); this.mainPlayList.set('selectedIndex', 6)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": -22.73,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 103,
                                                  "width": 66,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_10_0.png"
                                                 }
                                                ]
                                               },
                                               "hfov": 4.82,
                                               "pitch": 0.95
                                              }
                                             ]
                                            },
                                            {
                                             "rollOverDisplay": false,
                                             "maps": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 16,
                                                  "width": 23,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_11_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "hfov": 5.74,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": -22.49,
                                               "pitch": -2.41
                                              }
                                             ],
                                             "id": "overlay_3D38EF6C_07F7_E4AE_4195_5AB8257757E6",
                                             "enabledInCardboard": true,
                                             "useHandCursor": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": -22.49,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 53,
                                                  "width": 79,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_11_0.png"
                                                 }
                                                ]
                                               },
                                               "hfov": 5.74,
                                               "pitch": -2.41
                                              }
                                             ]
                                            },
                                            {
                                             "rollOverDisplay": false,
                                             "maps": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 31,
                                                  "width": 30,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_12_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "hfov": 4.45,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": -11.81,
                                               "pitch": 0.61
                                              }
                                             ],
                                             "id": "overlay_3057C0B3_07F1_FDBA_419A_E7F4D38B825B",
                                             "enabledInCardboard": true,
                                             "useHandCursor": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.mainPlayList.set('selectedIndex', 7)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": -11.81,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 63,
                                                  "width": 61,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_12_0.png"
                                                 }
                                                ]
                                               },
                                               "hfov": 4.45,
                                               "pitch": 0.61
                                              }
                                             ]
                                            },
                                            {
                                             "rollOverDisplay": false,
                                             "maps": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 16,
                                                  "width": 25,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_13_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "hfov": 4.95,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": -11.93,
                                               "pitch": -1.66
                                              }
                                             ],
                                             "id": "overlay_3869236A_07F1_1CAA_416D_FDE79EB0341C",
                                             "enabledInCardboard": true,
                                             "useHandCursor": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": -11.93,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 42,
                                                  "width": 68,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_13_0.png"
                                                 }
                                                ]
                                               },
                                               "hfov": 4.95,
                                               "pitch": -1.66
                                              }
                                             ]
                                            }
                                           ],
                                           "sphere": {
                                            "class": "ImageResource",
                                            "levels": [
                                             {
                                              "height": 2500,
                                              "width": 5000,
                                              "class": "ImageResourceLevel",
                                              "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_hq.jpeg"
                                             },
                                             {
                                              "height": 1608,
                                              "width": 3217,
                                              "class": "ImageResourceLevel",
                                              "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855.jpeg"
                                             }
                                            ]
                                           }
                                          }
                                         ],
                                         "partial": false,
                                         "hfovMin": 60,
                                         "pitch": 0,
                                         "thumbnailUrl": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_t.jpg",
                                         "id": "panorama_0F84F19D_0671_6675_4191_5761B2287855",
                                         "mapLocations": [
                                          {
                                           "x": 1009.55,
                                           "class": "PanoramaMapLocation",
                                           "y": 772.12,
                                           "angle": 0,
                                           "map": "this.map_04171D1A_107E_8278_4197_9875AF5B32BE"
                                          }
                                         ],
                                         "cardboardMenu": "this.Menu_0BB18192_11E1_8248_41A7_4C7BE41C6C8A",
                                         "label": "C19",
                                         "hfovMax": 120,
                                         "hfov": 360,
                                         "adjacentPanoramas": [
                                          {
                                           "panorama": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
                                           "class": "AdjacentPanorama",
                                           "yaw": 29.17,
                                           "backwardYaw": 7.69,
                                           "distance": 1
                                          },
                                          {
                                           "panorama": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                                           "class": "AdjacentPanorama",
                                           "yaw": -22.73,
                                           "backwardYaw": 136.61,
                                           "distance": 1
                                          },
                                          {
                                           "panorama": {
                                            "class": "Panorama",
                                            "frames": [
                                             {
                                              "thumbnailUrl": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_t.jpg",
                                              "class": "SphericPanoramaFrame",
                                              "overlays": [
                                               {
                                                "rollOverDisplay": false,
                                                "maps": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 96,
                                                     "width": 68,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_0_0_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 9.82,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": 87.82,
                                                  "pitch": -4.77
                                                 }
                                                ],
                                                "id": "overlay_28127D26_07B7_245A_419B_9501F89DF9B5",
                                                "enabledInCardboard": true,
                                                "useHandCursor": true,
                                                "class": "HotspotPanoramaOverlay",
                                                "areas": [
                                                 {
                                                  "mapColor": "#FF0000",
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67, this.camera_0B4BB587_11E1_8248_41AA_2E7CAF9D6C3A); this.mainPlayList.set('selectedIndex', 21)"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "yaw": 87.82,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 192,
                                                     "width": 136,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_0_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 9.82,
                                                  "pitch": -4.77
                                                 }
                                                ]
                                               },
                                               {
                                                "rollOverDisplay": false,
                                                "maps": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 16,
                                                     "width": 30,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_1_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 9.41,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": 88.54,
                                                  "pitch": -11.24
                                                 }
                                                ],
                                                "id": "overlay_3348BEEF_07B7_25AA_4181_4163771F00E4",
                                                "enabledInCardboard": true,
                                                "useHandCursor": true,
                                                "class": "HotspotPanoramaOverlay",
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "yaw": 88.54,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 70,
                                                     "width": 133,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_1_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 9.41,
                                                  "pitch": -11.24
                                                 }
                                                ]
                                               },
                                               {
                                                "rollOverDisplay": false,
                                                "maps": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 74,
                                                     "width": 83,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_2_0_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 12.01,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": -6.68,
                                                  "pitch": 0.98
                                                 }
                                                ],
                                                "id": "overlay_323E1FCA_07B1_63EA_4193_83E40670F67D",
                                                "enabledInCardboard": true,
                                                "useHandCursor": true,
                                                "class": "HotspotPanoramaOverlay",
                                                "areas": [
                                                 {
                                                  "mapColor": "#FF0000",
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_0B5195A5_11E1_8248_41A3_825FCC8D5584); this.mainPlayList.set('selectedIndex', 18)"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "yaw": -6.68,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 149,
                                                     "width": 166,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_2_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 12.01,
                                                  "pitch": 0.98
                                                 }
                                                ]
                                               },
                                               {
                                                "rollOverDisplay": false,
                                                "maps": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 16,
                                                     "width": 21,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_3_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 7.27,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": -7.29,
                                                  "pitch": -4.21
                                                 }
                                                ],
                                                "id": "overlay_2AA8BEF2_07B1_25BA_417C_0F0A2C84C244",
                                                "enabledInCardboard": true,
                                                "useHandCursor": true,
                                                "class": "HotspotPanoramaOverlay",
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "yaw": -7.29,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 76,
                                                     "width": 101,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_3_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 7.27,
                                                  "pitch": -4.21
                                                 }
                                                ]
                                               },
                                               {
                                                "rollOverDisplay": false,
                                                "maps": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 74,
                                                     "width": 76,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_4_0_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 11.01,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": -0.15,
                                                  "pitch": 0.98
                                                 }
                                                ],
                                                "id": "overlay_2AAB5210_07B3_3C76_4192_5556455ECCE9",
                                                "enabledInCardboard": true,
                                                "useHandCursor": true,
                                                "class": "HotspotPanoramaOverlay",
                                                "areas": [
                                                 {
                                                  "mapColor": "#FF0000",
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "click": "this.mainPlayList.set('selectedIndex', 19)"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "yaw": -0.15,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 149,
                                                     "width": 152,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_4_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 11.01,
                                                  "pitch": 0.98
                                                 }
                                                ]
                                               },
                                               {
                                                "rollOverDisplay": false,
                                                "maps": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 16,
                                                     "width": 21,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_5_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 7.27,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": -0.5,
                                                  "pitch": -4.21
                                                 }
                                                ],
                                                "id": "overlay_3410637F_07B3_1CAA_4199_EF11CF962ED4",
                                                "enabledInCardboard": true,
                                                "useHandCursor": true,
                                                "class": "HotspotPanoramaOverlay",
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "yaw": -0.5,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 76,
                                                     "width": 101,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_5_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 7.27,
                                                  "pitch": -4.21
                                                 }
                                                ]
                                               },
                                               {
                                                "rollOverDisplay": false,
                                                "maps": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 135,
                                                     "width": 111,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_6_0_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 16,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": -91.84,
                                                  "pitch": 3.36
                                                 }
                                                ],
                                                "id": "overlay_3248E155_07B1_3CFE_4191_2A1EF3C7948D",
                                                "enabledInCardboard": true,
                                                "useHandCursor": true,
                                                "class": "HotspotPanoramaOverlay",
                                                "areas": [
                                                 {
                                                  "mapColor": "#FF0000",
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_0B5D95C4_11E1_8DC8_4177_EBA2A9045845); this.mainPlayList.set('selectedIndex', 16)"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "yaw": -91.84,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 271,
                                                     "width": 222,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_6_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 16,
                                                  "pitch": 3.36
                                                 }
                                                ]
                                               },
                                               {
                                                "rollOverDisplay": false,
                                                "maps": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 16,
                                                     "width": 23,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_7_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 8.25,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": -92.25,
                                                  "pitch": -5.89
                                                 }
                                                ],
                                                "id": "overlay_319930C9_07BF_7DD6_4184_70BEFA17F169",
                                                "enabledInCardboard": true,
                                                "useHandCursor": true,
                                                "class": "HotspotPanoramaOverlay",
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "yaw": -92.25,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 80,
                                                     "width": 115,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_7_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 8.25,
                                                  "pitch": -5.89
                                                 }
                                                ]
                                               },
                                               {
                                                "rollOverDisplay": false,
                                                "maps": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 139,
                                                     "width": 128,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_8_0_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 18.54,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": -44.11,
                                                  "pitch": 1.35
                                                 }
                                                ],
                                                "id": "overlay_29CF0F49_07BF_64D6_4194_075A672440E3",
                                                "enabledInCardboard": true,
                                                "useHandCursor": true,
                                                "class": "HotspotPanoramaOverlay",
                                                "areas": [
                                                 {
                                                  "mapColor": "#FF0000",
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_0B4D5597_11E1_8248_41AF_A6D8BCDE2BDA); this.mainPlayList.set('selectedIndex', 17)"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "yaw": -44.11,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 278,
                                                     "width": 257,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_8_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 18.54,
                                                  "pitch": 1.35
                                                 }
                                                ]
                                               },
                                               {
                                                "rollOverDisplay": false,
                                                "maps": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 16,
                                                     "width": 26,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_9_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 8.16,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": -44.05,
                                                  "pitch": -7.95
                                                 }
                                                ],
                                                "id": "overlay_3690B529_07B1_2456_4170_FB18B300B8BE",
                                                "enabledInCardboard": true,
                                                "useHandCursor": true,
                                                "class": "HotspotPanoramaOverlay",
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "yaw": -44.05,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 69,
                                                     "width": 114,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_9_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 8.16,
                                                  "pitch": -7.95
                                                 }
                                                ]
                                               },
                                               {
                                                "rollOverDisplay": false,
                                                "maps": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 78,
                                                     "width": 78,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_10_0_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 11.24,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": -119.35,
                                                  "pitch": 3.24
                                                 }
                                                ],
                                                "id": "overlay_29F810AC_07B1_1DAE_4196_F3B00F4402F8",
                                                "enabledInCardboard": true,
                                                "useHandCursor": true,
                                                "class": "HotspotPanoramaOverlay",
                                                "areas": [
                                                 {
                                                  "mapColor": "#FF0000",
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "click": "this.mainPlayList.set('selectedIndex', 9)"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "yaw": -119.35,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 156,
                                                     "width": 156,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_10_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 11.24,
                                                  "pitch": 3.24
                                                 }
                                                ]
                                               },
                                               {
                                                "rollOverDisplay": false,
                                                "maps": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 16,
                                                     "width": 22,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_11_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 7.27,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": -120.08,
                                                  "pitch": -3.58
                                                 }
                                                ],
                                                "id": "overlay_345241C4_07B1_1FDE_4141_F43DE640110C",
                                                "enabledInCardboard": true,
                                                "useHandCursor": true,
                                                "class": "HotspotPanoramaOverlay",
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "yaw": -120.08,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 73,
                                                     "width": 101,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_11_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 7.27,
                                                  "pitch": -3.58
                                                 }
                                                ]
                                               },
                                               {
                                                "rollOverDisplay": false,
                                                "maps": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 74,
                                                     "width": 79,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_12_0_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 11.49,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": -142.34,
                                                  "pitch": 3.49
                                                 }
                                                ],
                                                "id": "overlay_2846DD14_07B3_247E_4180_11493C9F62DC",
                                                "enabledInCardboard": true,
                                                "useHandCursor": true,
                                                "class": "HotspotPanoramaOverlay",
                                                "areas": [
                                                 {
                                                  "mapColor": "#FF0000",
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "click": "this.mainPlayList.set('selectedIndex', 8)"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "yaw": -142.34,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 149,
                                                     "width": 159,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_12_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 11.49,
                                                  "pitch": 3.49
                                                 }
                                                ]
                                               },
                                               {
                                                "rollOverDisplay": false,
                                                "maps": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 16,
                                                     "width": 24,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_13_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 6.11,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": -142.38,
                                                  "pitch": -3.21
                                                 }
                                                ],
                                                "id": "overlay_3243643A_07B3_64AA_416E_5E6A6CC616CF",
                                                "enabledInCardboard": true,
                                                "useHandCursor": true,
                                                "class": "HotspotPanoramaOverlay",
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "yaw": -142.38,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 56,
                                                     "width": 84,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_13_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 6.11,
                                                  "pitch": -3.21
                                                 }
                                                ]
                                               },
                                               {
                                                "rollOverDisplay": false,
                                                "maps": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 62,
                                                     "width": 48,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_14_0_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 7.03,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": -155.72,
                                                  "pitch": 1.78
                                                 }
                                                ],
                                                "id": "overlay_28838F7F_07B1_24AB_4195_41028F4BB6DF",
                                                "enabledInCardboard": true,
                                                "useHandCursor": true,
                                                "class": "HotspotPanoramaOverlay",
                                                "areas": [
                                                 {
                                                  "mapColor": "#FF0000",
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "click": "this.mainPlayList.set('selectedIndex', 7)"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "yaw": -155.72,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 124,
                                                     "width": 97,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_14_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 7.03,
                                                  "pitch": 1.78
                                                 }
                                                ]
                                               },
                                               {
                                                "rollOverDisplay": false,
                                                "maps": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 16,
                                                     "width": 22,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_15_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 6.21,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": -155.63,
                                                  "pitch": -3.14
                                                 }
                                                ],
                                                "id": "overlay_32D333AE_07B1_23AA_418E_BE767942BB63",
                                                "enabledInCardboard": true,
                                                "useHandCursor": true,
                                                "class": "HotspotPanoramaOverlay",
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "yaw": -155.63,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 61,
                                                     "width": 86,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_15_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 6.21,
                                                  "pitch": -3.14
                                                 }
                                                ]
                                               },
                                               {
                                                "rollOverDisplay": false,
                                                "maps": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 60,
                                                     "width": 56,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_16_0_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 8.13,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": -177.33,
                                                  "pitch": 0.78
                                                 }
                                                ],
                                                "id": "overlay_28E2BF47_07B7_E4DA_4192_A2BCC94840F3",
                                                "enabledInCardboard": true,
                                                "useHandCursor": true,
                                                "class": "HotspotPanoramaOverlay",
                                                "areas": [
                                                 {
                                                  "mapColor": "#FF0000",
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_0B5B85B5_11E1_8248_4188_E72B47ED5354); this.mainPlayList.set('selectedIndex', 6)"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "yaw": -177.33,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 121,
                                                     "width": 112,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_16_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 8.13,
                                                  "pitch": 0.78
                                                 }
                                                ]
                                               },
                                               {
                                                "rollOverDisplay": false,
                                                "maps": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 16,
                                                     "width": 23,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_17_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 6.85,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": -177.46,
                                                  "pitch": -4.52
                                                 }
                                                ],
                                                "id": "overlay_327900C5_07B1_1DDE_4192_5EF31F5CD0B1",
                                                "enabledInCardboard": true,
                                                "useHandCursor": true,
                                                "class": "HotspotPanoramaOverlay",
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "yaw": -177.46,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 66,
                                                     "width": 95,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_17_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 6.85,
                                                  "pitch": -4.52
                                                 }
                                                ]
                                               }
                                              ],
                                              "sphere": {
                                               "class": "ImageResource",
                                               "levels": [
                                                {
                                                 "height": 2500,
                                                 "width": 5000,
                                                 "class": "ImageResourceLevel",
                                                 "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_hq.jpeg"
                                                },
                                                {
                                                 "height": 1608,
                                                 "width": 3217,
                                                 "class": "ImageResourceLevel",
                                                 "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894.jpeg"
                                                }
                                               ]
                                              }
                                             }
                                            ],
                                            "partial": false,
                                            "hfovMin": 60,
                                            "pitch": 0,
                                            "thumbnailUrl": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_t.jpg",
                                            "id": "panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                                            "mapLocations": [
                                             {
                                              "x": 974.47,
                                              "class": "PanoramaMapLocation",
                                              "y": 723.15,
                                              "angle": 161.69,
                                              "map": "this.map_04171D1A_107E_8278_4197_9875AF5B32BE"
                                             }
                                            ],
                                            "cardboardMenu": "this.Menu_0BB18192_11E1_8248_41A7_4C7BE41C6C8A",
                                            "label": "C23",
                                            "hfovMax": 120,
                                            "hfov": 360,
                                            "adjacentPanoramas": [
                                             {
                                              "panorama": {
                                               "class": "Panorama",
                                               "frames": [
                                                {
                                                 "thumbnailUrl": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_t.jpg",
                                                 "class": "SphericPanoramaFrame",
                                                 "overlays": [
                                                  {
                                                   "rollOverDisplay": false,
                                                   "maps": [
                                                    {
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "height": 129,
                                                        "width": 78,
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_0_HS_0_0_0_map.gif"
                                                       }
                                                      ]
                                                     },
                                                     "hfov": 11.26,
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "yaw": 4.77,
                                                     "pitch": -4.76
                                                    }
                                                   ],
                                                   "id": "overlay_37A1EC15_07B0_E47E_4165_18EF7B4CF1F7",
                                                   "enabledInCardboard": true,
                                                   "useHandCursor": true,
                                                   "class": "HotspotPanoramaOverlay",
                                                   "areas": [
                                                    {
                                                     "mapColor": "#FF0000",
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_0B993661_11E1_8EC8_41AA_4AAF92167222); this.mainPlayList.set('selectedIndex', 22)"
                                                    }
                                                   ],
                                                   "items": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "yaw": 4.77,
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "height": 259,
                                                        "width": 156,
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_0_HS_0_0.png"
                                                       }
                                                      ]
                                                     },
                                                     "hfov": 11.26,
                                                     "pitch": -4.76
                                                    }
                                                   ]
                                                  },
                                                  {
                                                   "rollOverDisplay": false,
                                                   "maps": [
                                                    {
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "height": 16,
                                                        "width": 24,
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_0_HS_1_0_map.gif"
                                                       }
                                                      ]
                                                     },
                                                     "hfov": 8.33,
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "yaw": 4.65,
                                                     "pitch": -12.75
                                                    }
                                                   ],
                                                   "id": "overlay_282E1707_07B3_E45A_4184_0F5F576BAFA8",
                                                   "enabledInCardboard": true,
                                                   "useHandCursor": true,
                                                   "class": "HotspotPanoramaOverlay",
                                                   "areas": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "mapColor": "#FF0000"
                                                    }
                                                   ],
                                                   "items": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "yaw": 4.65,
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "height": 76,
                                                        "width": 118,
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_0_HS_1_0.png"
                                                       }
                                                      ]
                                                     },
                                                     "hfov": 8.33,
                                                     "pitch": -12.75
                                                    }
                                                   ]
                                                  },
                                                  {
                                                   "rollOverDisplay": false,
                                                   "maps": [
                                                    {
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "height": 128,
                                                        "width": 142,
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_0_HS_2_0_0_map.gif"
                                                       }
                                                      ]
                                                     },
                                                     "hfov": 20.49,
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "yaw": -179.27,
                                                     "pitch": -4.42
                                                    }
                                                   ],
                                                   "id": "overlay_37C3639F_07B3_3C6A_418A_4F59AF831D03",
                                                   "enabledInCardboard": true,
                                                   "useHandCursor": true,
                                                   "class": "HotspotPanoramaOverlay",
                                                   "areas": [
                                                    {
                                                     "mapColor": "#FF0000",
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "click": "this.startPanoramaWithCamera(this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754, this.camera_0BE0E671_11E1_8EC8_4162_949AE69DE2FB); this.mainPlayList.set('selectedIndex', 20)"
                                                    }
                                                   ],
                                                   "items": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "yaw": -179.27,
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "height": 257,
                                                        "width": 285,
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_0_HS_2_0.png"
                                                       }
                                                      ]
                                                     },
                                                     "hfov": 20.49,
                                                     "pitch": -4.42
                                                    }
                                                   ]
                                                  },
                                                  {
                                                   "rollOverDisplay": false,
                                                   "maps": [
                                                    {
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "height": 16,
                                                        "width": 18,
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_0_HS_3_0_map.gif"
                                                       }
                                                      ]
                                                     },
                                                     "hfov": 8.48,
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "yaw": -179.12,
                                                     "pitch": -15.39
                                                    }
                                                   ],
                                                   "id": "overlay_36A27374_07B1_1CBE_4183_F00116B379C1",
                                                   "enabledInCardboard": true,
                                                   "useHandCursor": true,
                                                   "class": "HotspotPanoramaOverlay",
                                                   "areas": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "mapColor": "#FF0000"
                                                    }
                                                   ],
                                                   "items": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "yaw": -179.12,
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "height": 108,
                                                        "width": 122,
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_0_HS_3_0.png"
                                                       }
                                                      ]
                                                     },
                                                     "hfov": 8.48,
                                                     "pitch": -15.39
                                                    }
                                                   ]
                                                  }
                                                 ],
                                                 "sphere": {
                                                  "class": "ImageResource",
                                                  "levels": [
                                                   {
                                                    "height": 2500,
                                                    "width": 5000,
                                                    "class": "ImageResourceLevel",
                                                    "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_hq.jpeg"
                                                   },
                                                   {
                                                    "height": 1608,
                                                    "width": 3217,
                                                    "class": "ImageResourceLevel",
                                                    "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67.jpeg"
                                                   }
                                                  ]
                                                 }
                                                }
                                               ],
                                               "partial": false,
                                               "hfovMin": 60,
                                               "pitch": 0,
                                               "thumbnailUrl": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_t.jpg",
                                               "id": "panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
                                               "mapLocations": [
                                                {
                                                 "x": 925.37,
                                                 "class": "PanoramaMapLocation",
                                                 "y": 728.72,
                                                 "angle": 65.25,
                                                 "map": "this.map_04171D1A_107E_8278_4197_9875AF5B32BE"
                                                }
                                               ],
                                               "cardboardMenu": "this.Menu_0BB18192_11E1_8248_41A7_4C7BE41C6C8A",
                                               "label": "C22",
                                               "hfovMax": 120,
                                               "hfov": 360,
                                               "adjacentPanoramas": [
                                                {
                                                 "panorama": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                                                 "class": "AdjacentPanorama",
                                                 "yaw": 4.77,
                                                 "backwardYaw": 87.82,
                                                 "distance": 1
                                                },
                                                {
                                                 "panorama": {
                                                  "class": "Panorama",
                                                  "frames": [
                                                   {
                                                    "thumbnailUrl": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_t.jpg",
                                                    "class": "SphericPanoramaFrame",
                                                    "overlays": [
                                                     {
                                                      "rollOverDisplay": false,
                                                      "maps": [
                                                       {
                                                        "image": {
                                                         "class": "ImageResource",
                                                         "levels": [
                                                          {
                                                           "height": 191,
                                                           "width": 200,
                                                           "class": "ImageResourceLevel",
                                                           "url": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_0_HS_0_0_0_map.gif"
                                                          }
                                                         ]
                                                        },
                                                        "hfov": 28.75,
                                                        "class": "HotspotPanoramaOverlayMap",
                                                        "yaw": -178.3,
                                                        "pitch": -8.04
                                                       }
                                                      ],
                                                      "id": "overlay_281B5193_07B1_1C7A_418A_7B0CC86E139C",
                                                      "enabledInCardboard": true,
                                                      "useHandCursor": true,
                                                      "class": "HotspotPanoramaOverlay",
                                                      "areas": [
                                                       {
                                                        "mapColor": "#FF0000",
                                                        "class": "HotspotPanoramaOverlayArea",
                                                        "click": "this.startPanoramaWithCamera(this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67, this.camera_0A214703_11E1_8E48_4185_4BCD3ACE7D10); this.mainPlayList.set('selectedIndex', 21)"
                                                       }
                                                      ],
                                                      "items": [
                                                       {
                                                        "class": "HotspotPanoramaOverlayImage",
                                                        "yaw": -178.3,
                                                        "image": {
                                                         "class": "ImageResource",
                                                         "levels": [
                                                          {
                                                           "height": 385,
                                                           "width": 403,
                                                           "class": "ImageResourceLevel",
                                                           "url": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_0_HS_0_0.png"
                                                          }
                                                         ]
                                                        },
                                                        "hfov": 28.75,
                                                        "pitch": -8.04
                                                       }
                                                      ]
                                                     },
                                                     {
                                                      "rollOverDisplay": false,
                                                      "maps": [
                                                       {
                                                        "image": {
                                                         "class": "ImageResource",
                                                         "levels": [
                                                          {
                                                           "height": 16,
                                                           "width": 22,
                                                           "class": "ImageResourceLevel",
                                                           "url": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_0_HS_1_0_map.gif"
                                                          }
                                                         ]
                                                        },
                                                        "hfov": 9.76,
                                                        "class": "HotspotPanoramaOverlayMap",
                                                        "yaw": -178.49,
                                                        "pitch": -22.3
                                                       }
                                                      ],
                                                      "id": "overlay_36D89562_07B1_24DA_4181_B5F7392CD10A",
                                                      "enabledInCardboard": true,
                                                      "useHandCursor": true,
                                                      "class": "HotspotPanoramaOverlay",
                                                      "areas": [
                                                       {
                                                        "class": "HotspotPanoramaOverlayArea",
                                                        "mapColor": "#FF0000"
                                                       }
                                                      ],
                                                      "items": [
                                                       {
                                                        "class": "HotspotPanoramaOverlayImage",
                                                        "yaw": -178.49,
                                                        "image": {
                                                         "class": "ImageResource",
                                                         "levels": [
                                                          {
                                                           "height": 104,
                                                           "width": 146,
                                                           "class": "ImageResourceLevel",
                                                           "url": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_0_HS_1_0.png"
                                                          }
                                                         ]
                                                        },
                                                        "hfov": 9.76,
                                                        "pitch": -22.3
                                                       }
                                                      ]
                                                     }
                                                    ],
                                                    "sphere": {
                                                     "class": "ImageResource",
                                                     "levels": [
                                                      {
                                                       "height": 2500,
                                                       "width": 5000,
                                                       "class": "ImageResourceLevel",
                                                       "url": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_hq.jpeg"
                                                      },
                                                      {
                                                       "height": 1608,
                                                       "width": 3217,
                                                       "class": "ImageResourceLevel",
                                                       "url": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754.jpeg"
                                                      }
                                                     ]
                                                    }
                                                   }
                                                  ],
                                                  "partial": false,
                                                  "hfovMin": 60,
                                                  "pitch": 0,
                                                  "thumbnailUrl": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_t.jpg",
                                                  "id": "panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
                                                  "mapLocations": [
                                                   {
                                                    "x": 889.86,
                                                    "class": "PanoramaMapLocation",
                                                    "y": 743.19,
                                                    "angle": 248.2,
                                                    "map": "this.map_04171D1A_107E_8278_4197_9875AF5B32BE"
                                                   }
                                                  ],
                                                  "cardboardMenu": "this.Menu_0BB18192_11E1_8248_41A7_4C7BE41C6C8A",
                                                  "label": "C21",
                                                  "hfovMax": 120,
                                                  "hfov": 360,
                                                  "adjacentPanoramas": [
                                                   {
                                                    "panorama": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
                                                    "class": "AdjacentPanorama",
                                                    "yaw": -178.3,
                                                    "backwardYaw": -179.27,
                                                    "distance": 1
                                                   }
                                                  ],
                                                  "vfov": 180
                                                 },
                                                 "class": "AdjacentPanorama",
                                                 "yaw": -179.27,
                                                 "backwardYaw": -178.3,
                                                 "distance": 1
                                                }
                                               ],
                                               "vfov": 180
                                              },
                                              "class": "AdjacentPanorama",
                                              "yaw": 87.82,
                                              "backwardYaw": 4.77,
                                              "distance": 1
                                             },
                                             {
                                              "panorama": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
                                              "class": "AdjacentPanorama",
                                              "yaw": -44.11,
                                              "backwardYaw": 81.83,
                                              "distance": 1
                                             },
                                             {
                                              "panorama": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
                                              "class": "AdjacentPanorama",
                                              "yaw": -6.68,
                                              "backwardYaw": -53.28,
                                              "distance": 1
                                             },
                                             {
                                              "panorama": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                                              "class": "AdjacentPanorama",
                                              "yaw": -177.33,
                                              "backwardYaw": 149.3,
                                              "distance": 1
                                             },
                                             {
                                              "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                                              "class": "AdjacentPanorama",
                                              "yaw": -91.84,
                                              "backwardYaw": -146.68,
                                              "distance": 1
                                             }
                                            ],
                                            "vfov": 180
                                           },
                                           "class": "AdjacentPanorama",
                                           "yaw": -53.28,
                                           "backwardYaw": -6.68,
                                           "distance": 1
                                          },
                                          {
                                           "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                                           "class": "AdjacentPanorama",
                                           "yaw": 18.34,
                                           "backwardYaw": 174.53,
                                           "distance": 1
                                          },
                                          {
                                           "panorama": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                                           "class": "AdjacentPanorama",
                                           "yaw": -34.31,
                                           "backwardYaw": 168.59,
                                           "distance": 1
                                          }
                                         ],
                                         "vfov": 180
                                        },
                                        "class": "AdjacentPanorama",
                                        "yaw": 168.59,
                                        "backwardYaw": -34.31,
                                        "distance": 1
                                       },
                                       {
                                        "panorama": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
                                        "class": "AdjacentPanorama",
                                        "yaw": 140.71,
                                        "backwardYaw": 122.75,
                                        "distance": 1
                                       },
                                       {
                                        "panorama": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                                        "class": "AdjacentPanorama",
                                        "yaw": 11.76,
                                        "backwardYaw": 12.62,
                                        "distance": 1
                                       },
                                       {
                                        "panorama": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                                        "class": "AdjacentPanorama",
                                        "yaw": 59.08,
                                        "backwardYaw": 134.41,
                                        "distance": 1
                                       }
                                      ],
                                      "vfov": 180
                                     },
                                     "class": "AdjacentPanorama",
                                     "yaw": 12.62,
                                     "backwardYaw": 11.76,
                                     "distance": 1
                                    }
                                   ],
                                   "vfov": 180
                                  },
                                  "class": "AdjacentPanorama",
                                  "yaw": 130.14,
                                  "backwardYaw": -154.28,
                                  "distance": 1
                                 },
                                 {
                                  "panorama": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                                  "class": "AdjacentPanorama",
                                  "yaw": 105.38,
                                  "backwardYaw": -98.62,
                                  "distance": 1
                                 }
                                ],
                                "vfov": 180
                               },
                               "class": "AdjacentPanorama",
                               "yaw": 2.53,
                               "backwardYaw": 116.4,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
                               "class": "AdjacentPanorama",
                               "yaw": 174.53,
                               "backwardYaw": 18.34,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                               "class": "AdjacentPanorama",
                               "yaw": -55.84,
                               "backwardYaw": 107.11,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                               "class": "AdjacentPanorama",
                               "yaw": -146.68,
                               "backwardYaw": -91.84,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                               "class": "AdjacentPanorama",
                               "yaw": -16.75,
                               "backwardYaw": -22.68,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                               "class": "AdjacentPanorama",
                               "yaw": -107.62,
                               "backwardYaw": 113.51,
                               "distance": 1
                              }
                             ],
                             "vfov": 180
                            },
                            "class": "AdjacentPanorama",
                            "yaw": 81.58,
                            "backwardYaw": 25.67,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
                            "class": "AdjacentPanorama",
                            "yaw": -98.62,
                            "backwardYaw": 105.38,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                            "class": "AdjacentPanorama",
                            "yaw": 171.29,
                            "backwardYaw": 66.31,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                            "class": "AdjacentPanorama",
                            "yaw": -143.14,
                            "backwardYaw": -42.13,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                            "class": "AdjacentPanorama",
                            "yaw": 134.41,
                            "backwardYaw": 59.08,
                            "distance": 1
                           }
                          ],
                          "vfov": 180
                         },
                         "class": "AdjacentPanorama",
                         "yaw": -156.98,
                         "backwardYaw": 112.76,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                         "class": "AdjacentPanorama",
                         "yaw": 139.53,
                         "backwardYaw": 124.98,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                         "class": "AdjacentPanorama",
                         "yaw": 171.48,
                         "backwardYaw": -15.07,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
                         "class": "AdjacentPanorama",
                         "yaw": 7.69,
                         "backwardYaw": 29.17,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
                         "class": "AdjacentPanorama",
                         "yaw": -171.11,
                         "backwardYaw": 121.73,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                         "class": "AdjacentPanorama",
                         "yaw": 81.83,
                         "backwardYaw": -44.11,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                         "class": "AdjacentPanorama",
                         "yaw": -143.45,
                         "backwardYaw": 152.96,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                         "class": "AdjacentPanorama",
                         "yaw": 122.75,
                         "backwardYaw": 140.71,
                         "distance": 1
                        }
                       ],
                       "vfov": 180
                      },
                      "class": "AdjacentPanorama",
                      "yaw": 124.98,
                      "backwardYaw": 139.53,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                      "class": "AdjacentPanorama",
                      "yaw": 107.11,
                      "backwardYaw": -55.84,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
                      "class": "AdjacentPanorama",
                      "yaw": -96.27,
                      "backwardYaw": 7.93,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                      "class": "AdjacentPanorama",
                      "yaw": 66.31,
                      "backwardYaw": 171.29,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
                      "class": "AdjacentPanorama",
                      "yaw": 136.61,
                      "backwardYaw": -22.73,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                      "class": "AdjacentPanorama",
                      "yaw": 149.3,
                      "backwardYaw": -177.33,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                      "class": "AdjacentPanorama",
                      "yaw": 4.74,
                      "backwardYaw": 36.85,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                      "class": "AdjacentPanorama",
                      "yaw": 156.92,
                      "backwardYaw": -18.92,
                      "distance": 1
                     }
                    ],
                    "vfov": 180
                   },
                   "class": "AdjacentPanorama",
                   "yaw": 7.93,
                   "backwardYaw": -96.27,
                   "distance": 1
                  }
                 ],
                 "vfov": 180
                },
                "class": "AdjacentPanorama",
                "yaw": -179.87,
                "backwardYaw": -178.55,
                "distance": 1
               }
              ],
              "vfov": 180
             },
             "class": "AdjacentPanorama",
             "yaw": -2.21,
             "backwardYaw": -2.69,
             "distance": 1
            },
            {
             "panorama": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
             "class": "AdjacentPanorama",
             "yaw": -179.28,
             "backwardYaw": -177.99,
             "distance": 1
            }
           ],
           "vfov": 180
          },
          "class": "AdjacentPanorama",
          "yaw": -177.99,
          "backwardYaw": -179.28,
          "distance": 1
         },
         {
          "panorama": "this.panorama_0FD85D6E_0673_DED7_40FD_D23817113C40",
          "class": "AdjacentPanorama",
          "yaw": 0.35,
          "backwardYaw": 0.64,
          "distance": 1
         }
        ],
        "vfov": 180
       },
       "class": "AdjacentPanorama",
       "yaw": 0.64,
       "backwardYaw": 0.35,
       "distance": 1
      },
      {
       "panorama": "this.panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D",
       "class": "AdjacentPanorama",
       "yaw": -179.67,
       "backwardYaw": 1.46,
       "distance": 1
      }
     ],
     "vfov": 180
    },
    "class": "AdjacentPanorama",
    "yaw": 1.46,
    "backwardYaw": -179.67,
    "distance": 1
   }
  ],
  "vfov": 180
 },
 {
  "viewerArea": "this.MainViewer",
  "class": "PanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "preloadEnabled": false,
  "displayPlaybackBar": true,
  "gyroscopeVerticalDraggingEnabled": true,
  "id": "MainViewerPanoramaPlayer",
  "mouseControlMode": "drag_acceleration",
  "gyroscopeEnabled": true
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
   "toolTipFontSize": 12,
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
   "transitionMode": "blending",
   "paddingTop": 0,
   "progressHeight": 10,
   "playbackBarHeadShadowVerticalLength": 0,
   "playbackBarBorderRadius": 0,
   "playbackBarProgressBorderColor": "#000000",
   "toolTipPaddingRight": 6,
   "class": "ViewerArea",
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
   "playbackBarHeadShadowHorizontalLength": 0,
   "playbackBarProgressOpacity": 1,
   "paddingLeft": 0,
   "toolTipBorderColor": "#767676",
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "height": "100%",
   "toolTipTextShadowColor": "#000000",
   "toolTipBorderSize": 1,
   "playbackBarHeadHeight": 15,
   "playbackBarBackgroundOpacity": 1,
   "playbackBarBorderSize": 0,
   "borderSize": 0,
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipPaddingLeft": 6,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "toolTipOpacity": 1,
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
   "progressBarBorderColor": "#000000",
   "progressRight": 0,
   "playbackBarHeadBorderSize": 0,
   "progressBarBackgroundColorRatios": [
    0
   ],
   "progressOpacity": 1,
   "playbackBarHeadOpacity": 1,
   "visible": false,
   "progressBackgroundColorDirection": "vertical",
   "minHeight": 1,
   "bottom": "-0.03%",
   "id": "MapViewer",
   "progressBarBackgroundColorDirection": "vertical",
   "progressBorderColor": "#000000",
   "toolTipFontFamily": "Arial",
   "playbackBarBottom": 0,
   "toolTipShadowHorizontalLength": 0,
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
  "movementMode": "constrained",
  "class": "MapPlayer",
  "id": "MapViewerMapPlayer"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D_camera",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 "this.panorama_0FD85D6E_0673_DED7_40FD_D23817113C40",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_camera",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_camera",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_camera",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_camera",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_camera",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_camera",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_camera",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_camera",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_camera",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_camera",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_camera",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_camera",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0F98F446_0671_2ED7_4191_DEC01556F741_camera",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_camera",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FD82345_0671_EAD5_4173_8B63686C1397_camera",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_camera",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_camera",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0F84F19D_0671_6675_4191_5761B2287855_camera",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "Panorama",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "rollOverDisplay": false,
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 88,
           "width": 78,
           "class": "ImageResourceLevel",
           "url": "media/panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "hfov": 11.3,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -174.74,
        "pitch": -0.44
       }
      ],
      "id": "overlay_3BC93817_0791_6C7A_418F_0EA64F0A4B5B",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 18)"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -174.74,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 177,
           "width": 156,
           "class": "ImageResourceLevel",
           "url": "media/panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D_0_HS_0_0.png"
          }
         ]
        },
        "hfov": 11.3,
        "pitch": -0.44
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 29,
           "class": "ImageResourceLevel",
           "url": "media/panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D_0_HS_1_0_map.gif"
          }
         ]
        },
        "hfov": 8.44,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -174.68,
        "pitch": -6.59
       }
      ],
      "id": "overlay_305C5588_0793_2456_418A_8A6507C5DC0F",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -174.68,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 64,
           "width": 117,
           "class": "ImageResourceLevel",
           "url": "media/panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D_0_HS_1_0.png"
          }
         ]
        },
        "hfov": 8.44,
        "pitch": -6.59
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2500,
       "width": 5000,
       "class": "ImageResourceLevel",
       "url": "media/panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D_hq.jpeg"
      },
      {
       "height": 1608,
       "width": 3217,
       "class": "ImageResourceLevel",
       "url": "media/panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D.jpeg"
      }
     ]
    }
   }
  ],
  "partial": false,
  "hfovMin": 60,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D_t.jpg",
  "id": "panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D",
  "mapLocations": [
   {
    "x": 1022.79,
    "class": "PanoramaMapLocation",
    "y": 832.37,
    "angle": 170.51,
    "map": "this.map_04171D1A_107E_8278_4197_9875AF5B32BE"
   }
  ],
  "cardboardMenu": "this.Menu_0BB18192_11E1_8248_41A7_4C7BE41C6C8A",
  "label": "C20",
  "hfovMax": 120,
  "hfov": 360,
  "vfov": 180
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D_camera",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_camera",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_camera",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_camera",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0BAE6183_11E1_8248_41A8_B0E331A9409F, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D_camera",
    "id": "PanoramaPlayListItem_0BAE6183_11E1_8248_41A8_B0E331A9409F",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0BAEF183_11E1_8248_4177_07624F210915, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FD85D6E_0673_DED7_40FD_D23817113C40",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_camera",
    "id": "PanoramaPlayListItem_0BAEF183_11E1_8248_4177_07624F210915",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0BAF2184_11E1_8248_41AC_2DB9B783C758, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_camera",
    "id": "PanoramaPlayListItem_0BAF2184_11E1_8248_41AC_2DB9B783C758",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0BAF6184_11E1_8248_41A4_17BD4BFC109A, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_camera",
    "id": "PanoramaPlayListItem_0BAF6184_11E1_8248_41A4_17BD4BFC109A",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0BAF9185_11E1_8248_419B_C459029E40C1, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_camera",
    "id": "PanoramaPlayListItem_0BAF9185_11E1_8248_419B_C459029E40C1",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0BAFC186_11E1_8248_419B_F6B558CC3DA9, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_camera",
    "id": "PanoramaPlayListItem_0BAFC186_11E1_8248_419B_F6B558CC3DA9",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0BAC7186_11E1_8248_41AC_2E2F8CD83374, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_camera",
    "id": "PanoramaPlayListItem_0BAC7186_11E1_8248_41AC_2E2F8CD83374",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0BACA187_11E1_8248_4170_079B872E0706, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_camera",
    "id": "PanoramaPlayListItem_0BACA187_11E1_8248_4170_079B872E0706",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0BACD188_11E1_8258_4192_F1B2F4C98C48, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_camera",
    "id": "PanoramaPlayListItem_0BACD188_11E1_8258_4192_F1B2F4C98C48",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0BAD0188_11E1_8258_417B_2B110AB16D36, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_camera",
    "id": "PanoramaPlayListItem_0BAD0188_11E1_8258_417B_2B110AB16D36",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0BAD4189_11E1_8258_41A6_623646F5A9B1, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_camera",
    "id": "PanoramaPlayListItem_0BAD4189_11E1_8258_41A6_623646F5A9B1",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0BADF18A_11E1_8258_419B_78F12D18D0ED, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_camera",
    "id": "PanoramaPlayListItem_0BADF18A_11E1_8258_419B_78F12D18D0ED",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0BB2218B_11E1_8258_41A9_76DB5B552798, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_camera",
    "id": "PanoramaPlayListItem_0BB2218B_11E1_8258_41A9_76DB5B552798",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0BB2518B_11E1_8258_41A5_2F1B4DE70FD3, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741_camera",
    "id": "PanoramaPlayListItem_0BB2518B_11E1_8258_41A5_2F1B4DE70FD3",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0BB2818C_11E1_8258_4191_6031413DD338, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_camera",
    "id": "PanoramaPlayListItem_0BB2818C_11E1_8258_4191_6031413DD338",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0BB3318C_11E1_8258_41A3_BF31B0B5FD7D, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397_camera",
    "id": "PanoramaPlayListItem_0BB3318C_11E1_8258_41A3_BF31B0B5FD7D",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0BB3618D_11E1_8258_419A_2A130B915786, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_camera",
    "id": "PanoramaPlayListItem_0BB3618D_11E1_8258_419A_2A130B915786",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0BB3A18E_11E1_8258_41A5_7067A329E34F, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_camera",
    "id": "PanoramaPlayListItem_0BB3A18E_11E1_8258_41A5_7067A329E34F",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0BB3D18F_11E1_8258_41B0_CC37AC967C39, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855_camera",
    "id": "PanoramaPlayListItem_0BB3D18F_11E1_8258_41B0_CC37AC967C39",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0BB00190_11E1_8248_418A_54658110221C, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D_camera",
    "id": "PanoramaPlayListItem_0BB00190_11E1_8248_418A_54658110221C",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0BB0B190_11E1_8248_41A8_3F91C441BED0, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_camera",
    "id": "PanoramaPlayListItem_0BB0B190_11E1_8248_41A8_3F91C441BED0",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0BB0D191_11E1_8248_41AC_D53C7160852F, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_camera",
    "id": "PanoramaPlayListItem_0BB0D191_11E1_8248_41AC_D53C7160852F",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_0BB17191_11E1_8248_4189_B3B439BC2AF5, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_camera",
    "id": "PanoramaPlayListItem_0BB17191_11E1_8248_4189_B3B439BC2AF5",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 0)"
   }
  ]
 },
 "this.map_04171D1A_107E_8278_4197_9875AF5B32BE",
 {
  "class": "PlayList",
  "id": "DropDown_034DDF9B_1061_BE78_4191_EAA68851158B_playlist",
  "items": [
   {
    "class": "MapPlayListItem",
    "media": "this.map_04171D1A_107E_8278_4197_9875AF5B32BE",
    "player": "this.MapViewerMapPlayer",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ]
 },
 "this.Menu_0BB18192_11E1_8248_41A7_4C7BE41C6C8A",
 {
  "easing": "linear",
  "class": "SlideOutEffect",
  "id": "effect_049B5F3A_10BE_FEB8_417C_9EA8C17B5139",
  "to": "left",
  "duration": 300
 },
 {
  "easing": "linear",
  "from": "left",
  "class": "SlideInEffect",
  "id": "effect_0BF584B3_11E2_8248_41A9_C2FECDE4F2B5",
  "duration": 300
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0B8641BD_11E1_85B8_41A5_2A9F9D41A63E",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0B8BA1CE_11E1_85D8_4196_5DE13EC0E592",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0B8F91DC_11E1_85F8_41B0_955ED95032B5",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0B9141EA_11E1_85D8_419B_3A73F9DF7987",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0B95C1F8_11E1_85B8_41B0_64223D03908F",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0B9C3207_11E1_8648_417D_B636CA1C031D",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0BE6B215_11E1_8648_41AB_B210C9B6898F",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0BEB8224_11E1_8648_41AB_43CFC63441F0",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0BF24232_11E1_8648_41A9_EDC8B18E81D2",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0BF78240_11E1_86C8_41A6_B442B8F64864",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0BFEB24E_11E1_86D8_4181_96A0D828DD30",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0BC3E25C_11E1_86F8_41AA_965374563185",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0BCB126B_11E1_86D8_41AF_E17691E30FDA",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0BD20279_11E1_86B9_4191_49302568054E",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0BD41287_11E1_8649_4184_73E6C5A4A71A",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0BDC7296_11E1_8648_41A0_44C121D8C13B",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0A26A2A5_11E1_8648_4169_41C72A013F68",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0A2E52B5_11E1_8648_4183_52B11CE50C8D",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0A30C2D5_11E1_87C8_41A4_19F290B9615E",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0A38D307_11E1_8648_418A_3ADE6521E459",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0A00A32D_11E1_8658_41A6_0FDB2F1F6EB1",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0A0B6356_11E1_86C8_416F_DDED525157EE",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0A13337B_11E1_86B8_4186_271DC0F552DB",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0A1563A4_11E1_8648_41AE_F2180936F188",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0A1D33CC_11E1_85D8_41A5_77D8578853A0",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0A64E3DF_11E1_85F8_41AA_E4CD54C13D06",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0A6F03ED_11E1_85D8_4172_D22294BBADBE",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0A7713FC_11E1_85BF_41AF_B065583F3306",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0A79C40B_11E1_8258_41A0_C830D0C736C2",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0A47441B_11E1_8278_41AC_3AC399C5D76D",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0A4F442B_11E1_8258_41A6_D4AC1CF1EBBC",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0A55B43A_11E1_82B8_41AE_8174FF5AC3F0",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0AA37449_11E1_82D8_41A4_B7D03DF159DE",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0AAB4457_11E1_82C8_41AD_EEBC6EEFD29E",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0AB17468_11E1_82D8_41AB_A0CBFE567E14",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0ABE2477_11E1_82C8_4176_D1BE1B57E381",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0A857487_11E1_8248_41B1_0790FEFBBD00",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0A92A497_11E1_8248_41A4_14724C512864",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0A9914A8_11E1_8258_41AF_0C7EA393FF5C",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0B1D1504_11E1_8248_416E_775417AAC804",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0B60E513_11E1_8248_41A0_A685CBCAFF2A",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0B67F522_11E1_8248_419F_064D796D7B0D",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0B68E531_11E1_8248_4180_E38DD90BEAD1",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0B6CC540_11E1_82C8_41A2_93B8CEF5A027",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0B76E54E_11E1_82D8_41A9_2F64C5A74A2E",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0B7B155D_11E1_82F8_419C_E96368EC1791",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0B7D356B_11E1_82D9_41A2_8AB7F213E524",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0B47357A_11E1_82BB_41B0_224A7E8AD281",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0B4BB587_11E1_8248_41AA_2E7CAF9D6C3A",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0B4D5597_11E1_8248_41AF_A6D8BCDE2BDA",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0B5195A5_11E1_8248_41A3_825FCC8D5584",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0B5B85B5_11E1_8248_4188_E72B47ED5354",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0B5D95C4_11E1_8DC8_4177_EBA2A9045845",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0BA625D2_11E1_8DC8_4163_AC834CD070F4",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0BABC5E3_11E1_8DC8_41A4_4AA2BEFCC790",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0BACF5F3_11E1_8DC8_4196_C83D8B8E518A",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0BB69603_11E1_8E48_419A_423F6F97CF15",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0BBB9613_11E1_8E48_41A6_8A6587073B0C",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0B821622_11E1_8E48_41B0_642F22683E7C",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0B84F632_11E1_8E48_4191_4832156BF2B9",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0B8F2642_11E1_8EC8_41AA_25F7186071AA",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0B96E652_11E1_8EC8_4178_A910A8C82A34",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0B993661_11E1_8EC8_41AA_4AAF92167222",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0BE0E671_11E1_8EC8_4162_949AE69DE2FB",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0BEB5681_11E1_8E48_41AF_C22660E70E9A",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0BF37690_11E1_8E48_4197_13D6C9171CCE",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0BFAE69F_11E1_8E78_415C_3497A8BE0CB4",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0BFDB6AD_11E1_8E58_41A1_D4B111B28786",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0BC506BB_11E1_8FB8_4140_F407C7039FF7",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0BCF96C9_11E1_8FD8_4188_14CED55F3BE0",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0BD7A6D8_11E1_8FC7_41A3_C9558BA788F2",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0BD9D6F6_11E1_8FCB_4167_DEC460716738",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0A214703_11E1_8E48_4185_4BCD3ACE7D10",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0A29A711_11E1_8E48_4180_3FA5D641F437",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0A33E720_11E1_8E48_416D_88EAC6634E90",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0A3BC72E_11E1_8E58_41A2_317498D9D964",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0A02173E_11E1_8EB8_41AF_001C966C3560",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0A0A274E_11E1_8ED8_41AF_3851F909DB03",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0A12275C_11E1_8EF8_41AE_CD79A82DCC7D",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0A14976A_11E1_8ED8_417C_6A9BBC0BF771",
  "automaticZoomSpeed": 10,
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
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96
    }
   ]
  }
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
  "playbackBarBackgroundColorDirection": "vertical",
  "minWidth": 100,
  "playbackBarHeadShadow": true,
  "playbackBarRight": 0,
  "toolTipPaddingBottom": 4,
  "progressBackgroundOpacity": 1,
  "progressBarBorderSize": 0,
  "shadow": false,
  "progressBarBorderRadius": 0,
  "progressBorderRadius": 0,
  "toolTipFontWeight": "normal",
  "paddingBottom": 0,
  "toolTipFontSize": 12,
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
  "transitionMode": "blending",
  "paddingTop": 0,
  "progressHeight": 10,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarBorderRadius": 0,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipPaddingRight": 6,
  "class": "ViewerArea",
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
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarProgressOpacity": 1,
  "paddingLeft": 0,
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "toolTipTextShadowColor": "#000000",
  "toolTipBorderSize": 1,
  "playbackBarHeadHeight": 15,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarBorderSize": 0,
  "borderSize": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipPaddingLeft": 6,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipOpacity": 1,
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
  "progressBarBorderColor": "#000000",
  "progressRight": 0,
  "playbackBarHeadBorderSize": 0,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "top": 0,
  "playbackBarHeadOpacity": 1,
  "progressOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "minHeight": 50,
  "bottom": 0,
  "id": "MainViewer",
  "progressBarBackgroundColorDirection": "vertical",
  "progressBorderColor": "#000000",
  "toolTipFontFamily": "Arial",
  "playbackBarBottom": 5,
  "toolTipShadowHorizontalLength": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "left": 0,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBorderSize": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipPaddingTop": 4,
  "toolTipFontStyle": "normal"
 },
 {
  "class": "Container",
  "paddingRight": 0,
  "verticalAlign": "top",
  "layout": "absolute",
  "height": "50.87%",
  "width": "29.192%",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "paddingLeft": 0,
  "borderSize": 0,
  "horizontalAlign": "left",
  "minWidth": 1,
  "gap": 10,
  "borderRadius": 0,
  "shadow": false,
  "contentOpaque": false,
  "top": "0.76%",
  "minHeight": 1,
  "paddingBottom": 0,
  "id": "Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943",
  "scrollBarColor": "#000000",
  "backgroundOpacity": 0,
  "paddingTop": 0,
  "scrollBarVisible": "rollOver",
  "overflow": "scroll",
  "left": "0.42%",
  "scrollBarOpacity": 0.5,
  "children": [
   "this.MapViewer",
   {
    "class": "IconButton",
    "paddingRight": 0,
    "verticalAlign": "middle",
    "mode": "push",
    "width": 65,
    "height": 59,
    "maxHeight": 376,
    "paddingLeft": 0,
    "transparencyActive": false,
    "borderSize": 0,
    "borderRadius": 0,
    "horizontalAlign": "center",
    "minWidth": 1,
    "click": "this.setComponentVisibility(this.IconButton_0344BD92_10A1_8248_41AC_148AEC7148E2, false, 0, null, null, false); this.setComponentVisibility(this.MapViewer, false, 0, this.effect_049B5F3A_10BE_FEB8_417C_9EA8C17B5139, 'hideEffect', false); this.setComponentVisibility(this.IconButton_03E1C6B5_10A6_8E48_418F_2FE2B8F75DA0, true, 0, null, null, false)",
    "shadow": false,
    "maxWidth": 364,
    "top": "17.09%",
    "minHeight": 1,
    "cursor": "hand",
    "visible": false,
    "paddingBottom": 0,
    "id": "IconButton_0344BD92_10A1_8248_41AC_148AEC7148E2",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "iconURL": "skin/IconButton_0344BD92_10A1_8248_41AC_148AEC7148E2.png",
    "left": "0%"
   },
   {
    "class": "IconButton",
    "paddingRight": 0,
    "verticalAlign": "middle",
    "mode": "push",
    "width": 181,
    "height": 245,
    "maxHeight": 376,
    "paddingLeft": 0,
    "transparencyActive": false,
    "borderSize": 0,
    "borderRadius": 0,
    "horizontalAlign": "center",
    "minWidth": 1,
    "click": "this.setComponentVisibility(this.IconButton_03E1C6B5_10A6_8E48_418F_2FE2B8F75DA0, false, 0, null, null, false); this.setComponentVisibility(this.MapViewer, true, 0, this.effect_0BF584B3_11E2_8248_41A9_C2FECDE4F2B5, 'showEffect', false); this.setComponentVisibility(this.IconButton_0344BD92_10A1_8248_41AC_148AEC7148E2, true, 0, null, null, false)",
    "shadow": false,
    "maxWidth": 364,
    "top": "16.88%",
    "minHeight": 1,
    "cursor": "hand",
    "paddingBottom": 0,
    "id": "IconButton_03E1C6B5_10A6_8E48_418F_2FE2B8F75DA0",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "iconURL": "skin/IconButton_03E1C6B5_10A6_8E48_418F_2FE2B8F75DA0.png",
    "left": "0%"
   },
   {
    "class": "IconButton",
    "paddingRight": 0,
    "verticalAlign": "middle",
    "mode": "push",
    "width": 57,
    "height": 91,
    "transparencyActive": false,
    "paddingLeft": 0,
    "pressedIconURL": "skin/IconButton_0B1D163F_11E2_8EB8_41A6_28F9FC522A8C_pressed.png",
    "borderSize": 0,
    "horizontalAlign": "center",
    "minWidth": 0,
    "click": "this.setComponentVisibility(this.MapViewer, true, 0, null, null, false)",
    "borderRadius": 0,
    "top": "29.49%",
    "minHeight": 0,
    "cursor": "hand",
    "paddingBottom": 0,
    "shadow": false,
    "id": "IconButton_0B1D163F_11E2_8EB8_41A6_28F9FC522A8C",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "iconURL": "skin/IconButton_0B1D163F_11E2_8EB8_41A6_28F9FC522A8C.png",
    "rollOverIconURL": "skin/IconButton_0B1D163F_11E2_8EB8_41A6_28F9FC522A8C_rollover.png",
    "right": "34.71%"
   }
  ]
 },
 {
  "class": "Container",
  "backgroundColor": [
   "#FFFFFF",
   "#000000",
   "#FFFFFF"
  ],
  "verticalAlign": "top",
  "paddingRight": 0,
  "layout": "absolute",
  "height": "99.457%",
  "paddingLeft": 0,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "borderSize": 0,
  "width": "99.879%",
  "horizontalAlign": "left",
  "minWidth": 1,
  "gap": 10,
  "borderRadius": 0,
  "shadow": false,
  "contentOpaque": false,
  "top": "0.22%",
  "backgroundColorDirection": "vertical",
  "visible": false,
  "paddingBottom": 0,
  "backgroundColorRatios": [
   0,
   0.4,
   1
  ],
  "minHeight": 1,
  "id": "Container_1A2848B5_0BF1_913E_41A0_AEBC76BAD483",
  "scrollBarColor": "#000000",
  "backgroundOpacity": 0.15,
  "paddingTop": 0,
  "scrollBarVisible": "rollOver",
  "overflow": "scroll",
  "left": "0%",
  "scrollBarOpacity": 0.5,
  "children": [
   {
    "class": "Image",
    "paddingRight": 0,
    "verticalAlign": "middle",
    "height": "100%",
    "maxHeight": 1000,
    "width": "97.041%",
    "paddingLeft": 0,
    "borderSize": 0,
    "horizontalAlign": "center",
    "minWidth": 1,
    "url": "skin/Image_19B2F4BC_0BF1_B12F_419C_772DA37A7B15.jpg",
    "borderRadius": 0,
    "scaleMode": "fit_inside",
    "top": "0%",
    "click": "eval('var frame=+location.search.replace(\"?\", \"\");if (!frame) {frame = 0;}if (typeof setMediaByIndex === \"function\") {setMediaByIndex(frame);}');; this.setComponentVisibility(this.Container_1A2848B5_0BF1_913E_41A0_AEBC76BAD483, false, 0, null, null, false)",
    "minHeight": 1,
    "paddingBottom": 0,
    "shadow": false,
    "id": "Image_19B2F4BC_0BF1_B12F_419C_772DA37A7B15",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "right": "0.66%"
   }
  ]
 },
 {
  "gap": 0,
  "popUpShadowBlurRadius": 6,
  "class": "DropDown",
  "popUpBackgroundOpacity": 0.84,
  "backgroundColor": [
   "#333333",
   "#000000"
  ],
  "fontSize": 14,
  "popUpShadow": false,
  "paddingRight": 5,
  "textDecoration": "none",
  "selectedPopUpFontColor": "#FFFFFF",
  "paddingLeft": 5,
  "popUpBackgroundColor": "#999999",
  "height": "2.174%",
  "playList": "this.DropDown_034DDF9B_1061_BE78_4191_EAA68851158B_playlist",
  "borderSize": 0,
  "popUpShadowSpread": 1,
  "minWidth": 200,
  "fontFamily": "Arial",
  "selectedPopUpBackgroundColor": "#333333",
  "borderRadius": 4,
  "fontWeight": "normal",
  "arrowBeforeLabel": false,
  "popUpBorderRadius": 0,
  "top": "2.07%",
  "backgroundColorDirection": "vertical",
  "visible": false,
  "paddingBottom": 0,
  "shadow": false,
  "backgroundColorRatios": [
   0,
   1
  ],
  "minHeight": 20,
  "id": "DropDown_034DDF9B_1061_BE78_4191_EAA68851158B",
  "backgroundOpacity": 0.84,
  "rollOverPopUpBackgroundColor": "#FFFFFF",
  "popUpShadowOpacity": 0,
  "paddingTop": 0,
  "fontStyle": "normal",
  "popUpShadowColor": "#000000",
  "arrowColor": "#FFFFFF",
  "popUpFontColor": "#000000",
  "fontColor": "#FFFFFF",
  "width": "12.063%",
  "right": "42.52%"
 },
 {
  "class": "Container",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "verticalAlign": "middle",
  "paddingRight": 0,
  "layout": "horizontal",
  "height": "16.196%",
  "paddingLeft": 0,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "borderSize": 0,
  "width": "100%",
  "horizontalAlign": "center",
  "minWidth": 1,
  "gap": 10,
  "borderRadius": 0,
  "shadow": false,
  "contentOpaque": false,
  "backgroundColorDirection": "vertical",
  "paddingBottom": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "minHeight": 1,
  "bottom": "0%",
  "id": "Container_03BF4D6F_10EF_82D8_41A4_FC17EDB0E403",
  "scrollBarColor": "#000000",
  "backgroundOpacity": 0.05,
  "paddingTop": 0,
  "scrollBarVisible": "rollOver",
  "overflow": "scroll",
  "left": "0%",
  "scrollBarOpacity": 0.5,
  "children": [
   {
    "class": "IconButton",
    "paddingRight": 0,
    "verticalAlign": "middle",
    "mode": "push",
    "width": 114.35,
    "height": 116,
    "maxHeight": 512,
    "transparencyActive": false,
    "paddingLeft": 0,
    "borderSize": 0,
    "borderRadius": 0,
    "horizontalAlign": "center",
    "minWidth": 1,
    "click": "this.loadFromCurrentMediaPlayList(this.mainPlayList, 1)",
    "maxWidth": 512,
    "shadow": false,
    "minHeight": 1,
    "cursor": "hand",
    "paddingBottom": 0,
    "id": "IconButton_03BDA4BD_10FE_83B8_4180_30D73A4AC842",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "iconURL": "skin/IconButton_03BDA4BD_10FE_83B8_4180_30D73A4AC842.png"
   },
   {
    "class": "Container",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "verticalAlign": "bottom",
    "paddingRight": 0,
    "layout": "horizontal",
    "height": "100%",
    "paddingLeft": 0,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "borderSize": 0,
    "width": "12.123%",
    "horizontalAlign": "center",
    "minWidth": 1,
    "gap": 10,
    "borderRadius": 0,
    "contentOpaque": false,
    "shadow": false,
    "backgroundColorDirection": "vertical",
    "paddingBottom": 0,
    "backgroundColorRatios": [
     0,
     1
    ],
    "minHeight": 1,
    "id": "Container_0B2A17ED_11A1_8DD8_41A3_CF24B2B64A90",
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0.3,
    "paddingTop": 0,
    "scrollBarVisible": "rollOver",
    "overflow": "scroll",
    "scrollBarOpacity": 0.5,
    "children": [
     {
      "class": "IconButton",
      "paddingRight": 0,
      "verticalAlign": "middle",
      "mode": "push",
      "width": 106.45,
      "height": 105.05,
      "maxHeight": 512,
      "transparencyActive": false,
      "paddingLeft": 0,
      "borderSize": 0,
      "borderRadius": 0,
      "horizontalAlign": "center",
      "minWidth": 1,
      "click": "this.loadFromCurrentMediaPlayList(this.mainPlayList, -1)",
      "maxWidth": 512,
      "shadow": false,
      "minHeight": 1,
      "cursor": "hand",
      "paddingBottom": 0,
      "id": "IconButton_04A4B788_10EF_8E47_41AD_EBF91CD8B9D4",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "iconURL": "skin/IconButton_04A4B788_10EF_8E47_41AD_EBF91CD8B9D4.png"
     }
    ]
   }
  ]
 }
], 
 "class": "Player",
 "verticalAlign": "top",
 "paddingRight": 0,
 "layout": "absolute",
 "mouseWheelEnabled": true,
 "height": "100%",
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "backgroundPreloadEnabled": true,
 "borderSize": 0,
 "vrPolyfillScale": 1,
 "horizontalAlign": "left",
 "minWidth": 20,
 "gap": 10,
 "borderRadius": 0,
 "scripts": {
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "unregisterKey": function(key){  delete window[key]; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "existsKey": function(key){  return key in window; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getKey": function(key){  return window[key]; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "registerKey": function(key, value){  window[key] = value; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } }
 },
 "contentOpaque": false,
 "shadow": false,
 "paddingBottom": 0,
 "minHeight": 20,
 "id": "rootPlayer",
 "scrollBarColor": "#000000",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "start": "this.syncPlaylists([this.DropDown_034DDF9B_1061_BE78_4191_EAA68851158B_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.DropDown_034DDF9B_1061_BE78_4191_EAA68851158B_playlist.set('selectedIndex', 0)"
})