TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "frames": [
   {
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
    },
    "thumbnailUrl": "media/panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D_t.jpg",
    "overlays": [
     {
      "useHandCursor": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 10.99,
        "yaw": 1.51,
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
        "pitch": -13.63
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_1723D9CD_06F1_2FEE_4195_F17AB1536320",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "hfov": 10.99,
        "yaw": 1.51,
        "class": "HotspotPanoramaOverlayImage",
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
        "pitch": -13.63
       }
      ]
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 11.67,
        "yaw": 1.46,
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
        "pitch": -4.9
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "id": "overlay_305D80C4_3C32_C9AD_41CD_C92E2612E11E",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_0FD85D6E_0673_DED7_40FD_D23817113C40, this.camera_3105450F_3C59_075D_4181_8A69E8794445); this.mainPlayList.set('selectedIndex', 1); eval('localStorage.setItem(\"displayIndex\", 1);');",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "hfov": 11.67,
        "yaw": 1.46,
        "class": "HotspotPanoramaOverlayImage",
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
        "pitch": -4.9
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ],
  "class": "Panorama",
  "cardboardMenu": {
   "selectedBackgroundColor": "#202020",
   "fontFamily": "Arial",
   "rollOverBackgroundColor": "#000000",
   "label": "Media",
   "backgroundColor": "#404040",
   "class": "Menu",
   "opacity": 0.4,
   "id": "Menu_32E453CA_3C59_02C7_41C9_8DEC5CD4E8DE",
   "rollOverOpacity": 0.8,
   "selectedFontColor": "#FFFFFF",
   "children": [
    {
     "label": "C01",
     "click": "this.mainPlayList.set('selectedIndex', 0)",
     "class": "MenuItem"
    },
    {
     "label": "C02",
     "click": "this.mainPlayList.set('selectedIndex', 1)",
     "class": "MenuItem"
    },
    {
     "label": "C03",
     "click": "this.mainPlayList.set('selectedIndex', 2)",
     "class": "MenuItem"
    },
    {
     "label": "C04",
     "click": "this.mainPlayList.set('selectedIndex', 3)",
     "class": "MenuItem"
    },
    {
     "label": "C05",
     "click": "this.mainPlayList.set('selectedIndex', 4)",
     "class": "MenuItem"
    },
    {
     "label": "C06",
     "click": "this.mainPlayList.set('selectedIndex', 5)",
     "class": "MenuItem"
    },
    {
     "label": "C07",
     "click": "this.mainPlayList.set('selectedIndex', 6)",
     "class": "MenuItem"
    },
    {
     "label": "C08",
     "click": "this.mainPlayList.set('selectedIndex', 7)",
     "class": "MenuItem"
    },
    {
     "label": "C09",
     "click": "this.mainPlayList.set('selectedIndex', 8)",
     "class": "MenuItem"
    },
    {
     "label": "C10",
     "click": "this.mainPlayList.set('selectedIndex', 9)",
     "class": "MenuItem"
    },
    {
     "label": "C11",
     "click": "this.mainPlayList.set('selectedIndex', 10)",
     "class": "MenuItem"
    },
    {
     "label": "C12",
     "click": "this.mainPlayList.set('selectedIndex', 11)",
     "class": "MenuItem"
    },
    {
     "label": "C13",
     "click": "this.mainPlayList.set('selectedIndex', 12)",
     "class": "MenuItem"
    },
    {
     "label": "C14",
     "click": "this.mainPlayList.set('selectedIndex', 13)",
     "class": "MenuItem"
    },
    {
     "label": "C15",
     "click": "this.mainPlayList.set('selectedIndex', 14)",
     "class": "MenuItem"
    },
    {
     "label": "C16",
     "click": "this.mainPlayList.set('selectedIndex', 15)",
     "class": "MenuItem"
    },
    {
     "label": "C17",
     "click": "this.mainPlayList.set('selectedIndex', 16)",
     "class": "MenuItem"
    },
    {
     "label": "C18",
     "click": "this.mainPlayList.set('selectedIndex', 17)",
     "class": "MenuItem"
    },
    {
     "label": "C19",
     "click": "this.mainPlayList.set('selectedIndex', 18)",
     "class": "MenuItem"
    },
    {
     "label": "C20",
     "click": "this.mainPlayList.set('selectedIndex', 19)",
     "class": "MenuItem"
    },
    {
     "label": "C21",
     "click": "this.mainPlayList.set('selectedIndex', 20)",
     "class": "MenuItem"
    },
    {
     "label": "C22",
     "click": "this.mainPlayList.set('selectedIndex', 21)",
     "class": "MenuItem"
    },
    {
     "label": "C23",
     "click": "this.mainPlayList.set('selectedIndex', 22)",
     "class": "MenuItem"
    }
   ],
   "fontColor": "#FFFFFF",
   "rollOverFontColor": "#FFFFFF"
  },
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D_t.jpg",
  "id": "panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D",
  "mapLocations": [
   {
    "x": 311.48,
    "map": {
     "class": "Map",
     "fieldOfViewOverlayInsideColor": "#10A8B3",
     "fieldOfViewOverlayInsideOpacity": 0.6,
     "width": 1021,
     "id": "map_29873A27_3A46_6901_41B5_9F01B5E5FBDE",
     "height": 652,
     "minimumZoomFactor": 0.5,
     "image": {
      "levels": [
       {
        "height": 652,
        "width": 1021,
        "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE.png",
        "class": "ImageResourceLevel"
       },
       {
        "height": 326,
        "width": 510,
        "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_lq.png",
        "grayscale": true,
        "class": "ImageResourceLevel"
       }
      ],
      "class": "ImageResource"
     },
     "fieldOfViewOverlayOutsideColor": "#00FF99",
     "thumbnailUrl": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_t.png",
     "fieldOfViewOverlayOutsideOpacity": 0,
     "label": "FloorPlan",
     "overlays": [
      {
       "id": "overlay_29AEA040_3A41_D900_41A4_C065DF834BAD",
       "map": {
        "offsetY": 0,
        "x": 300.73,
        "width": 21.5,
        "y": 123.05,
        "height": 21.92,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_46_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "image": {
        "x": 300.73,
        "y": 123.05,
        "class": "HotspotMapOverlayImage",
        "width": 21.5,
        "height": 21.92,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_46.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 0)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "useHandCursor": true
      },
      {
       "id": "overlay_2FE028EB_3A7E_6901_41C5_355757798066",
       "map": {
        "offsetY": 0,
        "x": 345.6,
        "width": 21,
        "y": 142.39,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_47_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "image": {
        "x": 345.6,
        "y": 142.39,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_47.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 1)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "useHandCursor": true
      },
      {
       "id": "overlay_2E611FBB_3A7E_A700_41C9_8B6D1C26D8C6",
       "map": {
        "offsetY": 0,
        "x": 392.63,
        "width": 21,
        "y": 161.68,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_48_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "image": {
        "x": 392.63,
        "y": 161.68,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_48.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 2)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "useHandCursor": true
      },
      {
       "id": "overlay_2F94B01B_3A41_F901_41B2_A7221CDA962E",
       "map": {
        "offsetY": 0,
        "x": 443.29,
        "width": 21,
        "y": 184.43,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_49_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "image": {
        "x": 443.29,
        "y": 184.43,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_49.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 3)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "useHandCursor": true
      },
      {
       "id": "overlay_2F2AF091_3A42_F901_41C2_278D59616BE9",
       "map": {
        "offsetY": 0,
        "x": 503.2,
        "width": 21,
        "y": 203.72,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_50_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "image": {
        "x": 503.2,
        "y": 203.72,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_50.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 4)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "useHandCursor": true
      },
      {
       "id": "overlay_2FD7D2D0_3A42_791F_41C1_A52580DFABE3",
       "map": {
        "offsetY": 0,
        "x": 536.73,
        "width": 21,
        "y": 217.96,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_51_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "image": {
        "x": 536.73,
        "y": 217.96,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_51.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 5)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "useHandCursor": true
      },
      {
       "id": "overlay_2CD436D3_3A42_7901_41B6_BA932CFA9D4F",
       "map": {
        "offsetY": 0,
        "x": 575.19,
        "width": 21,
        "y": 245.81,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_52_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "image": {
        "x": 575.19,
        "y": 245.81,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_52.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 6)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "useHandCursor": true
      },
      {
       "id": "overlay_2C2FAA19_3A46_A901_41AF_52E4607E0002",
       "map": {
        "offsetY": 0,
        "x": 625.79,
        "width": 21,
        "y": 208.65,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_53_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "image": {
        "x": 625.79,
        "y": 208.65,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_53.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 7)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "useHandCursor": true
      },
      {
       "id": "overlay_2DAFDF3D_3A47_E701_41C7_6C42516C32F9",
       "map": {
        "offsetY": 0,
        "x": 624.43,
        "width": 21,
        "y": 148.12,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_54_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "image": {
        "x": 624.43,
        "y": 148.12,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_54.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 8)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "useHandCursor": true
      },
      {
       "id": "overlay_2DB3429C_3A46_D907_41A1_5F52442CB33F",
       "map": {
        "offsetY": 0,
        "x": 675.77,
        "width": 21,
        "y": 240.08,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_55_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "image": {
        "x": 675.77,
        "y": 240.08,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_55.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 9)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "useHandCursor": true
      },
      {
       "id": "overlay_2C24E640_3A42_7900_41A1_0CAFF542BF8E",
       "map": {
        "offsetY": 0,
        "x": 737.04,
        "width": 21,
        "y": 239.35,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_56_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "image": {
        "x": 737.04,
        "y": 239.35,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_56.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 10)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "useHandCursor": true
      },
      {
       "id": "overlay_22971B09_3A43_AF01_415B_60C5EA13E0A8",
       "map": {
        "offsetY": 0,
        "x": 802,
        "width": 21,
        "y": 240.08,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_57_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "image": {
        "x": 802,
        "y": 240.08,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_57.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 11)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "useHandCursor": true
      },
      {
       "id": "overlay_22A39430_3A42_F91F_41C1_EF59BA985426",
       "map": {
        "offsetY": 0,
        "x": 847.61,
        "width": 21,
        "y": 240.08,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_58_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "image": {
        "x": 847.61,
        "y": 240.08,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_58.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 12)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "useHandCursor": true
      },
      {
       "id": "overlay_2285876A_3A41_A700_41B5_22CAD315240C",
       "map": {
        "offsetY": 0,
        "x": 888.28,
        "width": 21,
        "y": 242.92,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_59_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "image": {
        "x": 888.28,
        "y": 242.92,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_59.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 13)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "useHandCursor": true
      },
      {
       "id": "overlay_223AD664_3A4E_5900_4197_EBC53DA866E6",
       "map": {
        "offsetY": 0,
        "x": 936.73,
        "width": 21,
        "y": 241.5,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_60_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "image": {
        "x": 936.73,
        "y": 241.5,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_60.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 14)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "useHandCursor": true
      },
      {
       "id": "overlay_228F5BAB_3A4E_6F00_41BC_F466D72D81AF",
       "map": {
        "offsetY": 0,
        "x": 618.02,
        "width": 21,
        "y": 300.1,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_61_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "image": {
        "x": 618.02,
        "y": 300.1,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_61.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 15)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "useHandCursor": true
      },
      {
       "id": "overlay_22D1DDE7_3A4E_6B01_41AF_CB4B35E43873",
       "map": {
        "offsetY": 0,
        "x": 665.73,
        "width": 21,
        "y": 306.4,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_62_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "image": {
        "x": 665.73,
        "y": 306.4,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_62.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 16)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "useHandCursor": true
      },
      {
       "id": "overlay_23B489C3_3A4E_6B01_41A7_3A7F463CF95C",
       "map": {
        "offsetY": 0,
        "x": 664.31,
        "width": 21,
        "y": 333.52,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_63_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "image": {
        "x": 664.31,
        "y": 333.52,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_63.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 17)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "useHandCursor": true
      },
      {
       "id": "overlay_239497FF_3A42_A701_41C8_697189C38707",
       "map": {
        "offsetY": 0,
        "x": 660.11,
        "width": 21,
        "y": 376.29,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_64_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "image": {
        "x": 660.11,
        "y": 376.29,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_64.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 18)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "useHandCursor": true
      },
      {
       "id": "overlay_23D8CC03_3A43_A900_41A4_600962EFA975",
       "map": {
        "offsetY": 0,
        "x": 674.35,
        "width": 21,
        "y": 424.8,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_65_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "image": {
        "x": 674.35,
        "y": 424.8,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_65.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 19)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "useHandCursor": true
      },
      {
       "id": "overlay_20D27634_3A42_B907_41BF_E598077A4320",
       "map": {
        "offsetY": 0,
        "x": 626.53,
        "width": 21,
        "y": 332.04,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_66_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "image": {
        "x": 626.53,
        "y": 332.04,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_66.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 22)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "useHandCursor": true
      },
      {
       "id": "overlay_20209BFB_3A41_AF01_41A6_1453590B5263",
       "map": {
        "offsetY": 0,
        "x": 587.33,
        "width": 21,
        "y": 345.6,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_67_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "image": {
        "x": 587.33,
        "y": 345.6,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_67.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 21)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "useHandCursor": true
      },
      {
       "id": "overlay_20EFB36E_3A46_5F03_41A3_9A6D758385F0",
       "map": {
        "offsetY": 0,
        "x": 560.21,
        "width": 21,
        "y": 361.32,
        "height": 21,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 10,
           "width": 10,
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_68_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "image": {
        "x": 560.21,
        "y": 361.32,
        "class": "HotspotMapOverlayImage",
        "width": 21,
        "height": 21,
        "image": {
         "levels": [
          {
           "height": 21,
           "width": 21,
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_68.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        }
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 20)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "useHandCursor": true
      }
     ],
     "fieldOfViewOverlayRadiusScale": 0.05,
     "scaleMode": "fit_inside",
     "maximumZoomFactor": 1.2,
     "initialZoomFactor": 1
    },
    "angle": 111.8,
    "y": 134.01,
    "class": "PanoramaMapLocation"
   }
  ],
  "hfovMin": 60,
  "label": "C01",
  "hfovMax": 120,
  "hfov": 360,
  "adjacentPanoramas": [
   {
    "panorama": {
     "frames": [
      {
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
       },
       "thumbnailUrl": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_t.jpg",
       "overlays": [
        {
         "useHandCursor": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 10.94,
           "yaw": 1,
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
           "pitch": -14.51
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "id": "overlay_12BCBCD9_06FF_E5F6_4132_6BD2D8AC4E5A",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "hfov": 10.94,
           "yaw": 1,
           "class": "HotspotPanoramaOverlayImage",
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
           "pitch": -14.51
          }
         ]
        },
        {
         "useHandCursor": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 11.44,
           "yaw": -177.99,
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
           "pitch": -7.98
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "id": "overlay_1690DD0C_06F1_246E_4197_6AD3CD66470D",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "hfov": 11.44,
           "yaw": -177.99,
           "class": "HotspotPanoramaOverlayImage",
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
           "pitch": -7.98
          }
         ]
        },
        {
         "useHandCursor": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 23.04,
           "yaw": 0.64,
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
           "pitch": -5.15
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "id": "overlay_311D0F38_3C32_38E6_41B9_16CD7FB2884F",
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544, this.camera_31E8F57E_3C59_07BF_41CA_7D4A6AD3F899); this.mainPlayList.set('selectedIndex', 2); eval('localStorage.setItem(\"displayIndex\", 2);');",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "hfov": 23.04,
           "yaw": 0.64,
           "class": "HotspotPanoramaOverlayImage",
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
           "pitch": -5.15
          }
         ]
        },
        {
         "useHandCursor": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 15.74,
           "yaw": -179.67,
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
           "pitch": -0.88
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "id": "overlay_3114B52C_3C32_48FE_41B5_406CC4DEDCA5",
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D, this.camera_319FB588_3C59_0744_4189_EF4C9023B35A); this.mainPlayList.set('selectedIndex', 0); eval('localStorage.setItem(\"displayIndex\", 0);');",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "hfov": 15.74,
           "yaw": -179.67,
           "class": "HotspotPanoramaOverlayImage",
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
           "pitch": -0.88
          }
         ]
        }
       ],
       "class": "SphericPanoramaFrame"
      }
     ],
     "class": "Panorama",
     "cardboardMenu": "this.Menu_32E453CA_3C59_02C7_41C9_8DEC5CD4E8DE",
     "partial": false,
     "pitch": 0,
     "thumbnailUrl": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_t.jpg",
     "id": "panorama_0FD85D6E_0673_DED7_40FD_D23817113C40",
     "mapLocations": [
      {
       "x": 356.1,
       "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE",
       "angle": 108.43,
       "y": 152.89,
       "class": "PanoramaMapLocation"
      }
     ],
     "hfovMin": 60,
     "label": "C02",
     "hfovMax": 120,
     "hfov": 360,
     "adjacentPanoramas": [
      {
       "panorama": {
        "frames": [
         {
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
          },
          "thumbnailUrl": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_t.jpg",
          "overlays": [
           {
            "useHandCursor": true,
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 11.17,
              "yaw": 0.38,
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
              "pitch": -14.88
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "id": "overlay_15ADB079_06F3_1CB6_418B_9B6CDA887ED8",
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "hfov": 11.17,
              "yaw": 0.38,
              "class": "HotspotPanoramaOverlayImage",
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
              "pitch": -14.88
             }
            ]
           },
           {
            "useHandCursor": true,
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 10.19,
              "yaw": -177.74,
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
              "pitch": -15.01
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "id": "overlay_157DAC36_06F1_24BA_4180_B0CB15CF6B9B",
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "hfov": 10.19,
              "yaw": -177.74,
              "class": "HotspotPanoramaOverlayImage",
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
              "pitch": -15.01
             }
            ]
           },
           {
            "useHandCursor": true,
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 10.99,
              "yaw": -177.99,
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
              "pitch": -5.9
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "id": "overlay_31745591_3C35_CBA6_41C4_8DB2A929AC58",
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24, this.camera_327D35EE_3C59_06DF_41B2_562E8511DBE5); this.mainPlayList.set('selectedIndex', 3)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "hfov": 10.99,
              "yaw": -177.99,
              "class": "HotspotPanoramaOverlayImage",
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
              "pitch": -5.9
             }
            ]
           },
           {
            "useHandCursor": true,
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 13.93,
              "yaw": 0.35,
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
              "pitch": -6.41
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "id": "overlay_311F0A3C_3C35_F8DE_41B4_7AAC3D3CC66B",
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_0FD85D6E_0673_DED7_40FD_D23817113C40, this.camera_327055F8_3C59_06C3_41C9_75162C9870F3); this.mainPlayList.set('selectedIndex', 1)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "hfov": 13.93,
              "yaw": 0.35,
              "class": "HotspotPanoramaOverlayImage",
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
              "pitch": -6.41
             }
            ]
           }
          ],
          "class": "SphericPanoramaFrame"
         }
        ],
        "class": "Panorama",
        "cardboardMenu": "this.Menu_32E453CA_3C59_02C7_41C9_8DEC5CD4E8DE",
        "partial": false,
        "pitch": 0,
        "thumbnailUrl": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_t.jpg",
        "id": "panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
        "mapLocations": [
         {
          "x": 403.13,
          "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE",
          "angle": -70.14,
          "y": 172.18,
          "class": "PanoramaMapLocation"
         }
        ],
        "hfovMin": 60,
        "label": "C03",
        "hfovMax": 120,
        "hfov": 360,
        "adjacentPanoramas": [
         {
          "panorama": {
           "frames": [
            {
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
             },
             "thumbnailUrl": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_t.jpg",
             "overlays": [
              {
               "useHandCursor": true,
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 10.72,
                 "yaw": -2.39,
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
                 "pitch": -14.13
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "id": "overlay_15F363E3_06F7_E3DA_4166_E1ADD25A8F16",
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "hfov": 10.72,
                 "yaw": -2.39,
                 "class": "HotspotPanoramaOverlayImage",
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
                 "pitch": -14.13
                }
               ]
              },
              {
               "useHandCursor": true,
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 10.42,
                 "yaw": -179.62,
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
                 "pitch": -15.39
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "id": "overlay_122DE14B_06F1_1CEA_4197_5318700943E8",
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "hfov": 10.42,
                 "yaw": -179.62,
                 "class": "HotspotPanoramaOverlayImage",
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
                 "pitch": -15.39
                }
               ]
              },
              {
               "useHandCursor": true,
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 8.42,
                 "yaw": -179.28,
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
                 "pitch": -6.91
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "id": "overlay_31032CAC_3C36_39FD_41C9_8B987E7CD4B2",
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544, this.camera_32DDC679_3C59_05C5_41C5_3F8FD2372B7C); this.mainPlayList.set('selectedIndex', 2)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "hfov": 8.42,
                 "yaw": -179.28,
                 "class": "HotspotPanoramaOverlayImage",
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
                 "pitch": -6.91
                }
               ]
              },
              {
               "useHandCursor": true,
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 11.33,
                 "yaw": -2.21,
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
                 "pitch": -6.66
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "id": "overlay_31610C45_3C36_78AF_41B2_40154727DEF2",
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA, this.camera_32D2468F_3C59_055C_41B7_C8EDFDCB5705); this.mainPlayList.set('selectedIndex', 4)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "hfov": 11.33,
                 "yaw": -2.21,
                 "class": "HotspotPanoramaOverlayImage",
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
                 "pitch": -6.66
                }
               ]
              }
             ],
             "class": "SphericPanoramaFrame"
            }
           ],
           "class": "Panorama",
           "cardboardMenu": "this.Menu_32E453CA_3C59_02C7_41C9_8DEC5CD4E8DE",
           "partial": false,
           "pitch": 0,
           "thumbnailUrl": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_t.jpg",
           "id": "panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
           "mapLocations": [
            {
             "x": 453.79,
             "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE",
             "angle": 107.74,
             "y": 194.93,
             "class": "PanoramaMapLocation"
            }
           ],
           "hfovMin": 60,
           "label": "C04",
           "hfovMax": 120,
           "hfov": 360,
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
             "yaw": -179.28,
             "backwardYaw": -177.99,
             "distance": 1,
             "class": "AdjacentPanorama"
            },
            {
             "panorama": {
              "frames": [
               {
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
                },
                "thumbnailUrl": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_t.jpg",
                "overlays": [
                 {
                  "useHandCursor": true,
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 11.08,
                    "yaw": -3.01,
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
                    "pitch": -11.37
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "id": "overlay_1382DAC3_06F3_EDDA_4199_4640AB09737B",
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "hfov": 11.08,
                    "yaw": -3.01,
                    "class": "HotspotPanoramaOverlayImage",
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
                    "pitch": -11.37
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 10.89,
                    "yaw": -179.37,
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
                    "pitch": -15.51
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "id": "overlay_121F44F8_06F1_25B6_416C_4F213A9D0F56",
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "hfov": 10.89,
                    "yaw": -179.37,
                    "class": "HotspotPanoramaOverlayImage",
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
                    "pitch": -15.51
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 11.73,
                    "yaw": -179.87,
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
                    "pitch": -7.29
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "id": "overlay_31600C5C_3C36_D95D_41BC_E9F7D4587C95",
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4, this.camera_32A6D418_3C59_0543_41C7_A918AFBD81DB); this.mainPlayList.set('selectedIndex', 5)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "hfov": 11.73,
                    "yaw": -179.87,
                    "class": "HotspotPanoramaOverlayImage",
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
                    "pitch": -7.29
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 9.92,
                    "yaw": -2.69,
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
                    "pitch": -4.02
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "id": "overlay_3177AF77_3C36_D76A_41B0_BA478D445CA5",
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24, this.camera_32ADC418_3C59_0543_41CC_5716309646BF); this.mainPlayList.set('selectedIndex', 3)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "hfov": 9.92,
                    "yaw": -2.69,
                    "class": "HotspotPanoramaOverlayImage",
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
                    "pitch": -4.02
                   }
                  ]
                 }
                ],
                "class": "SphericPanoramaFrame"
               }
              ],
              "class": "Panorama",
              "cardboardMenu": "this.Menu_32E453CA_3C59_02C7_41C9_8DEC5CD4E8DE",
              "partial": false,
              "pitch": 0,
              "thumbnailUrl": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_t.jpg",
              "id": "panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
              "mapLocations": [
               {
                "x": 513.7,
                "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE",
                "angle": -68.2,
                "y": 214.22,
                "class": "PanoramaMapLocation"
               }
              ],
              "hfovMin": 60,
              "label": "C05",
              "hfovMax": 120,
              "hfov": 360,
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
                "yaw": -2.69,
                "backwardYaw": -2.21,
                "distance": 1,
                "class": "AdjacentPanorama"
               },
               {
                "panorama": {
                 "frames": [
                  {
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
                   },
                   "thumbnailUrl": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_t.jpg",
                   "overlays": [
                    {
                     "useHandCursor": true,
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 10.12,
                       "yaw": 7.54,
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
                       "pitch": -10.87
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "id": "overlay_15D28AE0_068F_2DD6_4190_19CBC3F443F6",
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "items": [
                      {
                       "hfov": 10.12,
                       "yaw": 7.54,
                       "class": "HotspotPanoramaOverlayImage",
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
                       "pitch": -10.87
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 10.54,
                       "yaw": -178.74,
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
                       "pitch": -17.52
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "id": "overlay_1302EAF9_0691_2DB6_4188_E41C59F609C1",
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "items": [
                      {
                       "hfov": 10.54,
                       "yaw": -178.74,
                       "class": "HotspotPanoramaOverlayImage",
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
                       "pitch": -17.52
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 12.32,
                       "yaw": -178.55,
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
                       "pitch": -8.04
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "id": "overlay_310FDBE1_3C36_5F66_41BB_BDA464171CC9",
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA, this.camera_314834A7_3C59_054C_41C3_126F7C089A57); this.mainPlayList.set('selectedIndex', 4)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "items": [
                      {
                       "hfov": 12.32,
                       "yaw": -178.55,
                       "class": "HotspotPanoramaOverlayImage",
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
                       "pitch": -8.04
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 10.58,
                       "yaw": 7.93,
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
                       "pitch": -2.89
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "id": "overlay_310CF005_3C36_48AF_41C4_A7D692E40CF8",
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_31524495_3C59_054C_419B_300771B097E6); this.mainPlayList.set('selectedIndex', 6)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "items": [
                      {
                       "hfov": 10.58,
                       "yaw": 7.93,
                       "class": "HotspotPanoramaOverlayImage",
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
                       "pitch": -2.89
                      }
                     ]
                    }
                   ],
                   "class": "SphericPanoramaFrame"
                  }
                 ],
                 "class": "Panorama",
                 "cardboardMenu": "this.Menu_32E453CA_3C59_02C7_41C9_8DEC5CD4E8DE",
                 "partial": false,
                 "pitch": 0,
                 "thumbnailUrl": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_t.jpg",
                 "id": "panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
                 "mapLocations": [
                  {
                   "x": 547.23,
                   "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE",
                   "angle": 109.18,
                   "y": 228.46,
                   "class": "PanoramaMapLocation"
                  }
                 ],
                 "hfovMin": 60,
                 "label": "C06",
                 "hfovMax": 120,
                 "hfov": 360,
                 "adjacentPanoramas": [
                  {
                   "panorama": {
                    "frames": [
                     {
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
                      },
                      "thumbnailUrl": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_t.jpg",
                      "overlays": [
                       {
                        "useHandCursor": true,
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 6.67,
                          "yaw": 4.7,
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
                          "pitch": -8.76
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "id": "overlay_1092C51A_0697_246A_4172_39E7152EFDF5",
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "items": [
                         {
                          "hfov": 6.67,
                          "yaw": 4.7,
                          "class": "HotspotPanoramaOverlayImage",
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
                          "pitch": -8.76
                         }
                        ]
                       },
                       {
                        "useHandCursor": true,
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 7,
                          "yaw": 157.26,
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
                          "pitch": -5.87
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "id": "overlay_11D3D443_0693_24DA_4192_5962A59207B3",
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "items": [
                         {
                          "hfov": 7,
                          "yaw": 157.26,
                          "class": "HotspotPanoramaOverlayImage",
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
                          "pitch": -5.87
                         }
                        ]
                       },
                       {
                        "useHandCursor": true,
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 11.05,
                          "yaw": -96.47,
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
                          "pitch": -12.25
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "id": "overlay_1CA3866A_06B3_24AA_418F_9F19B27231FA",
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "items": [
                         {
                          "hfov": 11.05,
                          "yaw": -96.47,
                          "class": "HotspotPanoramaOverlayImage",
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
                          "pitch": -12.25
                         }
                        ]
                       },
                       {
                        "useHandCursor": true,
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 18.69,
                          "yaw": -96.27,
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
                          "pitch": -4.02
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "id": "overlay_31577B6A_3C37_DF7A_41CA_69C6508E3410",
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4, this.camera_31B435B1_3C59_0745_41B1_430ADB4C73C6); this.mainPlayList.set('selectedIndex', 5)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "items": [
                         {
                          "hfov": 18.69,
                          "yaw": -96.27,
                          "class": "HotspotPanoramaOverlayImage",
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
                          "pitch": -4.02
                         }
                        ]
                       },
                       {
                        "useHandCursor": true,
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 7.66,
                          "yaw": 4.74,
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
                          "pitch": -2.68
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "id": "overlay_31666916_3C37_D8AD_41BF_0E759A3A4B57",
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_318625A7_3C59_074D_41C8_E83B91A6967B); this.mainPlayList.set('selectedIndex', 7)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "items": [
                         {
                          "hfov": 7.66,
                          "yaw": 4.74,
                          "class": "HotspotPanoramaOverlayImage",
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
                          "pitch": -2.68
                         }
                        ]
                       },
                       {
                        "useHandCursor": true,
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 6.56,
                          "yaw": 156.92,
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
                          "pitch": -1.22
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "id": "overlay_324F6236_3C36_48ED_419C_6AA2CE6648A0",
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_3190859D_3C59_077D_41B8_94E66CC51CE7); this.mainPlayList.set('selectedIndex', 15)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "items": [
                         {
                          "hfov": 6.56,
                          "yaw": 156.92,
                          "class": "HotspotPanoramaOverlayImage",
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
                          "pitch": -1.22
                         }
                        ]
                       }
                      ],
                      "class": "SphericPanoramaFrame"
                     }
                    ],
                    "class": "Panorama",
                    "cardboardMenu": "this.Menu_32E453CA_3C59_02C7_41C9_8DEC5CD4E8DE",
                    "partial": false,
                    "pitch": 0,
                    "thumbnailUrl": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_t.jpg",
                    "id": "panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                    "mapLocations": [
                     {
                      "x": 585.69,
                      "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE",
                      "angle": 41.19,
                      "y": 256.31,
                      "class": "PanoramaMapLocation"
                     }
                    ],
                    "hfovMin": 60,
                    "label": "C07",
                    "hfovMax": 120,
                    "hfov": 360,
                    "adjacentPanoramas": [
                     {
                      "panorama": {
                       "frames": [
                        {
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
                         },
                         "thumbnailUrl": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_t.jpg",
                         "overlays": [
                          {
                           "useHandCursor": true,
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 8.18,
                             "yaw": -174.7,
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
                             "pitch": -8.9
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "id": "overlay_3619F023_078F_1C5A_419A_DDBC83BEE9D1",
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "items": [
                            {
                             "hfov": 8.18,
                             "yaw": -174.7,
                             "class": "HotspotPanoramaOverlayImage",
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
                             "pitch": -8.9
                            }
                           ]
                          },
                          {
                           "useHandCursor": true,
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 8.46,
                             "yaw": -18.8,
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
                             "pitch": -6.24
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "id": "overlay_33FE544D_0791_24EE_4186_5CC6F6EE735D",
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "items": [
                            {
                             "hfov": 8.46,
                             "yaw": -18.8,
                             "class": "HotspotPanoramaOverlayImage",
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
                             "pitch": -6.24
                            }
                           ]
                          },
                          {
                           "useHandCursor": true,
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 6.94,
                             "yaw": 114.19,
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
                             "pitch": -6.29
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "id": "overlay_35DB4DB5_0791_27BE_4183_7C63065DE16E",
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "items": [
                            {
                             "hfov": 6.94,
                             "yaw": 114.19,
                             "class": "HotspotPanoramaOverlayImage",
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
                             "pitch": -6.29
                            }
                           ]
                          },
                          {
                           "useHandCursor": true,
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 11.08,
                             "yaw": -174.64,
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
                             "pitch": -1.2
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "id": "overlay_3195499F_3C32_3BDA_41C9_4DAE277EAE88",
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_31585477_3C59_05CD_41AF_6CFB54EFF341); this.mainPlayList.set('selectedIndex', 22)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "items": [
                            {
                             "hfov": 11.08,
                             "yaw": -174.64,
                             "class": "HotspotPanoramaOverlayImage",
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
                             "pitch": -1.2
                            }
                           ]
                          },
                          {
                           "useHandCursor": true,
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 6.46,
                             "yaw": -18.92,
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
                             "pitch": -1.79
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "id": "overlay_31A28EB8_3C32_59E6_41CB_4E8D47D0B41B",
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_3157F48B_3C59_0545_41B5_7EF6F01C77E8); this.mainPlayList.set('selectedIndex', 6)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "items": [
                            {
                             "hfov": 6.46,
                             "yaw": -18.92,
                             "class": "HotspotPanoramaOverlayImage",
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
                             "pitch": -1.79
                            }
                           ]
                          },
                          {
                           "useHandCursor": true,
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "hfov": 8.52,
                             "yaw": 113.51,
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
                             "pitch": -1.39
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "id": "overlay_326C1794_3C32_57AE_41C8_76690F8BD429",
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_315C546D_3C59_05DD_41C0_3013B85EAE66); this.mainPlayList.set('selectedIndex', 16)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "items": [
                            {
                             "hfov": 8.52,
                             "yaw": 113.51,
                             "class": "HotspotPanoramaOverlayImage",
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
                             "pitch": -1.39
                            }
                           ]
                          }
                         ],
                         "class": "SphericPanoramaFrame"
                        }
                       ],
                       "class": "Panorama",
                       "cardboardMenu": "this.Menu_32E453CA_3C59_02C7_41C9_8DEC5CD4E8DE",
                       "partial": false,
                       "pitch": 0,
                       "thumbnailUrl": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_t.jpg",
                       "id": "panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                       "mapLocations": [
                        {
                         "x": 628.52,
                         "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE",
                         "angle": 0,
                         "y": 310.6,
                         "class": "PanoramaMapLocation"
                        }
                       ],
                       "hfovMin": 60,
                       "label": "C16",
                       "hfovMax": 120,
                       "hfov": 360,
                       "adjacentPanoramas": [
                        {
                         "panorama": {
                          "frames": [
                           {
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
                            },
                            "thumbnailUrl": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_t.jpg",
                            "overlays": [
                             {
                              "useHandCursor": true,
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 6.78,
                                "yaw": 25.2,
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
                                "pitch": -7.06
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "id": "overlay_469A773A_0791_24AA_4191_D2BE6DDF9602",
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "items": [
                               {
                                "hfov": 6.78,
                                "yaw": 25.2,
                                "class": "HotspotPanoramaOverlayImage",
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
                                "pitch": -7.06
                               }
                              ]
                             },
                             {
                              "useHandCursor": true,
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 7.37,
                                "yaw": 153.29,
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
                                "pitch": -10.96
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "id": "overlay_41D6FB68_0797_6CD6_417A_18E907D050C5",
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "items": [
                               {
                                "hfov": 7.37,
                                "yaw": 153.29,
                                "class": "HotspotPanoramaOverlayImage",
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
                                "pitch": -10.96
                               }
                              ]
                             },
                             {
                              "useHandCursor": true,
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 9.3,
                                "yaw": -107.29,
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
                                "pitch": -8.27
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "id": "overlay_43AEE268_0791_1CD6_4190_956303B44CDE",
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "items": [
                               {
                                "hfov": 9.3,
                                "yaw": -107.29,
                                "class": "HotspotPanoramaOverlayImage",
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
                                "pitch": -8.27
                               }
                              ]
                             },
                             {
                              "useHandCursor": true,
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 8.92,
                                "yaw": -107.62,
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
                                "pitch": -2.5
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "id": "overlay_31813653_3C3D_C8AA_4193_CAA24AD6D388",
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_32E706CC_3C59_02C3_41C1_49A3ABAFA5DD); this.mainPlayList.set('selectedIndex', 15)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "items": [
                               {
                                "hfov": 8.92,
                                "yaw": -107.62,
                                "class": "HotspotPanoramaOverlayImage",
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
                                "pitch": -2.5
                               }
                              ]
                             },
                             {
                              "useHandCursor": true,
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 11.57,
                                "yaw": 152.96,
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
                                "pitch": -3.67
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "id": "overlay_318BEE4E_3C3D_F8BA_41C0_DB0A84F563D6",
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_32F616B8_3C59_0543_41C8_B6A355E60728); this.mainPlayList.set('selectedIndex', 17)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "items": [
                               {
                                "hfov": 11.57,
                                "yaw": 152.96,
                                "class": "HotspotPanoramaOverlayImage",
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
                                "pitch": -3.67
                               }
                              ]
                             },
                             {
                              "useHandCursor": true,
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "hfov": 11.11,
                                "yaw": 25.67,
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
                                "pitch": -1.26
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "id": "overlay_326062D4_3C3D_C9AE_41C8_820B84085DB2",
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_32C146A4_3C59_0543_41C2_CEE666632178); this.mainPlayList.set('selectedIndex', 9)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "items": [
                               {
                                "hfov": 11.11,
                                "yaw": 25.67,
                                "class": "HotspotPanoramaOverlayImage",
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
                                "pitch": -1.26
                               }
                              ]
                             }
                            ],
                            "class": "SphericPanoramaFrame"
                           }
                          ],
                          "class": "Panorama",
                          "cardboardMenu": "this.Menu_32E453CA_3C59_02C7_41C9_8DEC5CD4E8DE",
                          "partial": false,
                          "pitch": 0,
                          "thumbnailUrl": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_t.jpg",
                          "id": "panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                          "mapLocations": [
                           {
                            "x": 676.23,
                            "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE",
                            "angle": 0,
                            "y": 316.9,
                            "class": "PanoramaMapLocation"
                           }
                          ],
                          "hfovMin": 60,
                          "label": "C17",
                          "hfovMax": 120,
                          "hfov": 360,
                          "adjacentPanoramas": [
                           {
                            "panorama": {
                             "frames": [
                              {
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
                               },
                               "thumbnailUrl": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_t.jpg",
                               "overlays": [
                                {
                                 "useHandCursor": true,
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 11.22,
                                   "yaw": -0.63,
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
                                   "pitch": -13.75
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "id": "overlay_1AA3E219_0690_FC76_4175_20A3657C4FB3",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "hfov": 11.22,
                                   "yaw": -0.63,
                                   "class": "HotspotPanoramaOverlayImage",
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
                                   "pitch": -13.75
                                  }
                                 ]
                                },
                                {
                                 "useHandCursor": true,
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 8.33,
                                   "yaw": -143.14,
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
                                   "pitch": -10.7
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "id": "overlay_19A3F664_0691_64DE_4190_3B68066071FF",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "hfov": 8.33,
                                   "yaw": -143.14,
                                   "class": "HotspotPanoramaOverlayImage",
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
                                   "pitch": -10.7
                                  }
                                 ]
                                },
                                {
                                 "useHandCursor": true,
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 8.38,
                                   "yaw": 81.59,
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
                                   "pitch": -7.4
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "id": "overlay_1B759D4A_0691_24EA_4156_A2B44DC73C69",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "hfov": 8.38,
                                   "yaw": 81.59,
                                   "class": "HotspotPanoramaOverlayImage",
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
                                   "pitch": -7.4
                                  }
                                 ]
                                },
                                {
                                 "useHandCursor": true,
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 14.11,
                                   "yaw": -143.14,
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
                                   "pitch": -4.05
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "id": "overlay_31A7661B_3C32_48DA_41BD_C27EC3BCDDC9",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_31CFF556_3C59_07CF_41CC_239807876B77); this.mainPlayList.set('selectedIndex', 7)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "hfov": 14.11,
                                   "yaw": -143.14,
                                   "class": "HotspotPanoramaOverlayImage",
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
                                   "pitch": -4.05
                                  }
                                 ]
                                },
                                {
                                 "useHandCursor": true,
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 11.51,
                                   "yaw": -0.88,
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
                                   "pitch": -5.02
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "id": "overlay_31B78775_3C32_776F_41C6_8E114C1EBBB9",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2, this.camera_31C24560_3C59_07C3_41B3_77A1329721CE); this.mainPlayList.set('selectedIndex', 10)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "hfov": 11.51,
                                   "yaw": -0.88,
                                   "class": "HotspotPanoramaOverlayImage",
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
                                   "pitch": -5.02
                                  }
                                 ]
                                },
                                {
                                 "useHandCursor": true,
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 9.34,
                                   "yaw": 81.58,
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
                                   "pitch": -0.33
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "id": "overlay_31BE2ED2_3C32_59A5_41C5_8CE1DF322D9B",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_31DAE54C_3C59_07C3_41B6_640B78E49109); this.mainPlayList.set('selectedIndex', 16)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "hfov": 9.34,
                                   "yaw": 81.58,
                                   "class": "HotspotPanoramaOverlayImage",
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
                                   "pitch": -0.33
                                  }
                                 ]
                                }
                               ],
                               "class": "SphericPanoramaFrame"
                              }
                             ],
                             "class": "Panorama",
                             "cardboardMenu": "this.Menu_32E453CA_3C59_02C7_41C9_8DEC5CD4E8DE",
                             "partial": false,
                             "pitch": 0,
                             "thumbnailUrl": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_t.jpg",
                             "id": "panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                             "mapLocations": [
                              {
                               "x": 686.27,
                               "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE",
                               "angle": 91.91,
                               "y": 250.58,
                               "class": "PanoramaMapLocation"
                              }
                             ],
                             "hfovMin": 60,
                             "label": "C10",
                             "hfovMax": 120,
                             "hfov": 360,
                             "adjacentPanoramas": [
                              {
                               "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                               "yaw": 81.58,
                               "backwardYaw": 25.67,
                               "distance": 1,
                               "class": "AdjacentPanorama"
                              },
                              {
                               "panorama": {
                                "frames": [
                                 {
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
                                  },
                                  "thumbnailUrl": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_t.jpg",
                                  "overlays": [
                                   {
                                    "useHandCursor": true,
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 7.28,
                                      "yaw": -153.92,
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
                                      "pitch": -8.41
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "id": "overlay_1C9800E4_06BF_3DDE_4173_59F64E3E5D64",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "hfov": 7.28,
                                      "yaw": -153.92,
                                      "class": "HotspotPanoramaOverlayImage",
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
                                      "pitch": -8.41
                                     }
                                    ]
                                   },
                                   {
                                    "useHandCursor": true,
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 8.76,
                                      "yaw": -41.81,
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
                                      "pitch": -7.26
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "id": "overlay_112FAD06_06B0_E45A_4192_19B5F480919F",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "hfov": 8.76,
                                      "yaw": -41.81,
                                      "class": "HotspotPanoramaOverlayImage",
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
                                      "pitch": -7.26
                                     }
                                    ]
                                   },
                                   {
                                    "useHandCursor": true,
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 6.76,
                                      "yaw": 36.94,
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
                                      "pitch": -6.88
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "id": "overlay_1FA8ED9A_06B1_646A_4196_2926CB7FBF93",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "hfov": 6.76,
                                      "yaw": 36.94,
                                      "class": "HotspotPanoramaOverlayImage",
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
                                      "pitch": -6.88
                                     }
                                    ]
                                   },
                                   {
                                    "useHandCursor": true,
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 7.67,
                                      "yaw": -154.28,
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
                                      "pitch": -3.38
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "id": "overlay_31B3B513_3C36_48AA_41C2_639E02762ACD",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82, this.camera_3259B5CF_3C59_06DC_41CD_8685358D7D30); this.mainPlayList.set('selectedIndex', 8)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "hfov": 7.67,
                                      "yaw": -154.28,
                                      "class": "HotspotPanoramaOverlayImage",
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
                                      "pitch": -3.38
                                     }
                                    ]
                                   },
                                   {
                                    "useHandCursor": true,
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 11.33,
                                      "yaw": -42.13,
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
                                      "pitch": -1.48
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "id": "overlay_314A48B2_3C36_D9E5_41C2_F12297588075",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_31AB35C5_3C59_06CD_41BC_73FB2A483D37); this.mainPlayList.set('selectedIndex', 9)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "hfov": 11.33,
                                      "yaw": -42.13,
                                      "class": "HotspotPanoramaOverlayImage",
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
                                      "pitch": -1.48
                                     }
                                    ]
                                   },
                                   {
                                    "useHandCursor": true,
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 6.29,
                                      "yaw": 36.85,
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
                                      "pitch": -2.58
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "id": "overlay_314A418A_3C36_CBA5_41C7_919875A1128F",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_324CB5E2_3C59_06C7_41C5_B05CCF7955A2); this.mainPlayList.set('selectedIndex', 6)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "hfov": 6.29,
                                      "yaw": 36.85,
                                      "class": "HotspotPanoramaOverlayImage",
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
                                      "pitch": -2.58
                                     }
                                    ]
                                   }
                                  ],
                                  "class": "SphericPanoramaFrame"
                                 }
                                ],
                                "class": "Panorama",
                                "cardboardMenu": "this.Menu_32E453CA_3C59_02C7_41C9_8DEC5CD4E8DE",
                                "partial": false,
                                "pitch": 0,
                                "thumbnailUrl": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_t.jpg",
                                "id": "panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                                "mapLocations": [
                                 {
                                  "x": 636.29,
                                  "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE",
                                  "angle": 180.55,
                                  "y": 219.15,
                                  "class": "PanoramaMapLocation"
                                 }
                                ],
                                "hfovMin": 60,
                                "label": "C08",
                                "hfovMax": 120,
                                "hfov": 360,
                                "adjacentPanoramas": [
                                 {
                                  "panorama": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                                  "yaw": -42.13,
                                  "backwardYaw": -143.14,
                                  "distance": 1,
                                  "class": "AdjacentPanorama"
                                 },
                                 {
                                  "panorama": {
                                   "frames": [
                                    {
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
                                     },
                                     "thumbnailUrl": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_t.jpg",
                                     "overlays": [
                                      {
                                       "useHandCursor": true,
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 4.75,
                                         "yaw": 130.1,
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
                                         "pitch": -2.92
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "id": "overlay_1A54EB2C_0691_2CAE_414E_FD4A85E449B8",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "hfov": 4.75,
                                         "yaw": 130.1,
                                         "class": "HotspotPanoramaOverlayImage",
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
                                         "pitch": -2.92
                                        }
                                       ]
                                      },
                                      {
                                       "useHandCursor": true,
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 5.41,
                                         "yaw": 129.09,
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
                                         "pitch": 0.09
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "id": "overlay_31A6E59F_3C36_4BDA_41B0_1CFF384201CA",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_30A16463_3C59_05C5_41B7_DB815530D8FB); this.mainPlayList.set('selectedIndex', 7)",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "hfov": 5.41,
                                         "yaw": 129.09,
                                         "class": "HotspotPanoramaOverlayImage",
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
                                         "pitch": 0.09
                                        }
                                       ]
                                      }
                                     ],
                                     "class": "SphericPanoramaFrame"
                                    }
                                   ],
                                   "class": "Panorama",
                                   "cardboardMenu": "this.Menu_32E453CA_3C59_02C7_41C9_8DEC5CD4E8DE",
                                   "partial": false,
                                   "pitch": 0,
                                   "thumbnailUrl": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_t.jpg",
                                   "id": "panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
                                   "mapLocations": [
                                    {
                                     "x": 634.93,
                                     "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE",
                                     "angle": 35.54,
                                     "y": 158.62,
                                     "class": "PanoramaMapLocation"
                                    }
                                   ],
                                   "hfovMin": 60,
                                   "label": "C09",
                                   "hfovMax": 120,
                                   "hfov": 360,
                                   "adjacentPanoramas": [
                                    {
                                     "panorama": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                                     "yaw": 129.09,
                                     "backwardYaw": -154.28,
                                     "distance": 1,
                                     "class": "AdjacentPanorama"
                                    }
                                   ],
                                   "vfov": 180
                                  },
                                  "yaw": -154.28,
                                  "backwardYaw": 129.09,
                                  "distance": 1,
                                  "class": "AdjacentPanorama"
                                 },
                                 {
                                  "panorama": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                                  "yaw": 36.85,
                                  "backwardYaw": 4.74,
                                  "distance": 1,
                                  "class": "AdjacentPanorama"
                                 }
                                ],
                                "vfov": 180
                               },
                               "yaw": -143.14,
                               "backwardYaw": -42.13,
                               "distance": 1,
                               "class": "AdjacentPanorama"
                              },
                              {
                               "panorama": {
                                "frames": [
                                 {
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
                                  },
                                  "thumbnailUrl": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_t.jpg",
                                  "overlays": [
                                   {
                                    "useHandCursor": true,
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 11.36,
                                      "yaw": -1.13,
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
                                      "pitch": -10.61
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "id": "overlay_1B81FB3A_0691_6CAA_4185_C2AB290A08A0",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "hfov": 11.36,
                                      "yaw": -1.13,
                                      "class": "HotspotPanoramaOverlayImage",
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
                                      "pitch": -10.61
                                     }
                                    ]
                                   },
                                   {
                                    "useHandCursor": true,
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 10.52,
                                      "yaw": 177.74,
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
                                      "pitch": -17.9
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "id": "overlay_19EDC174_0671_3CBE_4196_DE5883AFB8CF",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "hfov": 10.52,
                                      "yaw": 177.74,
                                      "class": "HotspotPanoramaOverlayImage",
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
                                      "pitch": -17.9
                                     }
                                    ]
                                   },
                                   {
                                    "useHandCursor": true,
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 11.41,
                                      "yaw": -0.95,
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
                                      "pitch": -0.25
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "id": "overlay_31B10D7A_3C32_DB5A_41A1_B6DFD3B7AB9B",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_328886F5_3C59_02CD_41C4_7620BFD68A32); this.mainPlayList.set('selectedIndex', 9)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "hfov": 11.41,
                                      "yaw": -0.95,
                                      "class": "HotspotPanoramaOverlayImage",
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
                                      "pitch": -0.25
                                     }
                                    ]
                                   },
                                   {
                                    "useHandCursor": true,
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 17.82,
                                      "yaw": 177.7,
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
                                      "pitch": -8.29
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "id": "overlay_31A10589_3C32_CBA6_41B4_4595385EB844",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E, this.camera_329A16E0_3C59_02C4_41CA_03C647598DA8); this.mainPlayList.set('selectedIndex', 11)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "hfov": 17.82,
                                      "yaw": 177.7,
                                      "class": "HotspotPanoramaOverlayImage",
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
                                      "pitch": -8.29
                                     }
                                    ]
                                   }
                                  ],
                                  "class": "SphericPanoramaFrame"
                                 }
                                ],
                                "class": "Panorama",
                                "cardboardMenu": "this.Menu_32E453CA_3C59_02C7_41C9_8DEC5CD4E8DE",
                                "partial": false,
                                "pitch": 0,
                                "thumbnailUrl": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_t.jpg",
                                "id": "panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
                                "mapLocations": [
                                 {
                                  "x": 747.54,
                                  "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE",
                                  "angle": -86.82,
                                  "y": 249.85,
                                  "class": "PanoramaMapLocation"
                                 }
                                ],
                                "hfovMin": 60,
                                "label": "C11",
                                "hfovMax": 120,
                                "hfov": 360,
                                "adjacentPanoramas": [
                                 {
                                  "panorama": {
                                   "frames": [
                                    {
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
                                     },
                                     "thumbnailUrl": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_t.jpg",
                                     "overlays": [
                                      {
                                       "useHandCursor": true,
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 10.83,
                                         "yaw": -0.12,
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
                                         "pitch": -13.62
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "id": "overlay_1B0FFE2E_0673_24AA_4193_33375BC7C00A",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "hfov": 10.83,
                                         "yaw": -0.12,
                                         "class": "HotspotPanoramaOverlayImage",
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
                                         "pitch": -13.62
                                        }
                                       ]
                                      },
                                      {
                                       "useHandCursor": true,
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 10.33,
                                         "yaw": -177.02,
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
                                         "pitch": -21.2
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "id": "overlay_27CC6293_0671_3C7B_419A_6F5AB828C77E",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "hfov": 10.33,
                                         "yaw": -177.02,
                                         "class": "HotspotPanoramaOverlayImage",
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
                                         "pitch": -21.2
                                        }
                                       ]
                                      },
                                      {
                                       "useHandCursor": true,
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 10.93,
                                         "yaw": 0.03,
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
                                         "pitch": -5.02
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "id": "overlay_31BBE3A6_3C33_CFED_41C6_0527EAB56766",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2, this.camera_31119505_3C59_074D_41B8_FD7448CDD8DC); this.mainPlayList.set('selectedIndex', 10)",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "hfov": 10.93,
                                         "yaw": 0.03,
                                         "class": "HotspotPanoramaOverlayImage",
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
                                         "pitch": -5.02
                                        }
                                       ]
                                      },
                                      {
                                       "useHandCursor": true,
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 12.62,
                                         "yaw": -178.02,
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
                                         "pitch": -10.03
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "id": "overlay_31BBF526_3C33_C8ED_41CC_EDB14C8AC409",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778, this.camera_311EB4F8_3C59_06C4_41CB_E30A54599CBA); this.mainPlayList.set('selectedIndex', 12)",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "hfov": 12.62,
                                         "yaw": -178.02,
                                         "class": "HotspotPanoramaOverlayImage",
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
                                         "pitch": -10.03
                                        }
                                       ]
                                      }
                                     ],
                                     "class": "SphericPanoramaFrame"
                                    }
                                   ],
                                   "class": "Panorama",
                                   "cardboardMenu": "this.Menu_32E453CA_3C59_02C7_41C9_8DEC5CD4E8DE",
                                   "partial": false,
                                   "pitch": 0,
                                   "thumbnailUrl": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_t.jpg",
                                   "id": "panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
                                   "mapLocations": [
                                    {
                                     "x": 812.5,
                                     "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE",
                                     "angle": -88.57,
                                     "y": 250.58,
                                     "class": "PanoramaMapLocation"
                                    }
                                   ],
                                   "hfovMin": 60,
                                   "label": "C12",
                                   "hfovMax": 120,
                                   "hfov": 360,
                                   "adjacentPanoramas": [
                                    {
                                     "panorama": {
                                      "frames": [
                                       {
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
                                        },
                                        "thumbnailUrl": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_t.jpg",
                                        "overlays": [
                                         {
                                          "useHandCursor": true,
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 11.09,
                                            "yaw": -0.63,
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
                                            "pitch": -16.39
                                           }
                                          ],
                                          "class": "HotspotPanoramaOverlay",
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "id": "overlay_197E9710_0677_6476_4185_152F2BE62FC4",
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "hfov": 11.09,
                                            "yaw": -0.63,
                                            "class": "HotspotPanoramaOverlayImage",
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
                                            "pitch": -16.39
                                           }
                                          ]
                                         },
                                         {
                                          "useHandCursor": true,
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 10.5,
                                            "yaw": -179.25,
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
                                            "pitch": -18.28
                                           }
                                          ],
                                          "class": "HotspotPanoramaOverlay",
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "id": "overlay_27F0BA0A_0670_EC6A_4198_E6CE799B31CB",
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "hfov": 10.5,
                                            "yaw": -179.25,
                                            "class": "HotspotPanoramaOverlayImage",
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
                                            "pitch": -18.28
                                           }
                                          ]
                                         },
                                         {
                                          "useHandCursor": true,
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 14.38,
                                            "yaw": -0.18,
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
                                            "pitch": -5.9
                                           }
                                          ],
                                          "class": "HotspotPanoramaOverlay",
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "id": "overlay_31BB30F3_3C33_C96A_4188_186FB6E0302F",
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741, this.camera_314274BE_3C59_06BF_41C4_CBB662018A09); this.mainPlayList.set('selectedIndex', 13)",
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "hfov": 14.38,
                                            "yaw": -0.18,
                                            "class": "HotspotPanoramaOverlayImage",
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
                                            "pitch": -5.9
                                           }
                                          ]
                                         },
                                         {
                                          "useHandCursor": true,
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 18.94,
                                            "yaw": -178.74,
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
                                            "pitch": -7.41
                                           }
                                          ],
                                          "class": "HotspotPanoramaOverlay",
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "id": "overlay_31BE4255_3C32_48AF_41BF_D5F61B49D926",
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E, this.camera_3147F4B4_3C59_0543_41C6_8FED1693EB2A); this.mainPlayList.set('selectedIndex', 11)",
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "hfov": 18.94,
                                            "yaw": -178.74,
                                            "class": "HotspotPanoramaOverlayImage",
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
                                            "pitch": -7.41
                                           }
                                          ]
                                         }
                                        ],
                                        "class": "SphericPanoramaFrame"
                                       }
                                      ],
                                      "class": "Panorama",
                                      "cardboardMenu": "this.Menu_32E453CA_3C59_02C7_41C9_8DEC5CD4E8DE",
                                      "partial": false,
                                      "pitch": 0,
                                      "thumbnailUrl": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_t.jpg",
                                      "id": "panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
                                      "mapLocations": [
                                       {
                                        "x": 858.11,
                                        "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE",
                                        "angle": 86.73,
                                        "y": 250.58,
                                        "class": "PanoramaMapLocation"
                                       }
                                      ],
                                      "hfovMin": 60,
                                      "label": "C13",
                                      "hfovMax": 120,
                                      "hfov": 360,
                                      "adjacentPanoramas": [
                                       {
                                        "panorama": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
                                        "yaw": -178.74,
                                        "backwardYaw": -178.02,
                                        "distance": 1,
                                        "class": "AdjacentPanorama"
                                       },
                                       {
                                        "panorama": {
                                         "frames": [
                                          {
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
                                           },
                                           "thumbnailUrl": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_t.jpg",
                                           "overlays": [
                                            {
                                             "useHandCursor": true,
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "hfov": 10.69,
                                               "yaw": 0.63,
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
                                               "pitch": -14.76
                                              }
                                             ],
                                             "class": "HotspotPanoramaOverlay",
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "id": "overlay_257E93A3_067F_3C5A_4187_58F778D35045",
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "hfov": 10.69,
                                               "yaw": 0.63,
                                               "class": "HotspotPanoramaOverlayImage",
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
                                               "pitch": -14.76
                                              }
                                             ]
                                            },
                                            {
                                             "useHandCursor": true,
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "hfov": 10.61,
                                               "yaw": -177.99,
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
                                               "pitch": -16.27
                                              }
                                             ],
                                             "class": "HotspotPanoramaOverlay",
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "id": "overlay_26FD3107_0671_7C5A_4196_ED67E7BBC774",
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "hfov": 10.61,
                                               "yaw": -177.99,
                                               "class": "HotspotPanoramaOverlayImage",
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
                                               "pitch": -16.27
                                              }
                                             ]
                                            },
                                            {
                                             "useHandCursor": true,
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "hfov": 21.2,
                                               "yaw": -178.42,
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
                                               "pitch": -3.64
                                              }
                                             ],
                                             "class": "HotspotPanoramaOverlay",
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "id": "overlay_31B80EA2_3C32_79EA_41CD_2CA7EF8ADC1D",
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778, this.camera_3281E3F8_3C59_02C4_41A6_6D3146966E42); this.mainPlayList.set('selectedIndex', 12)",
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "hfov": 21.2,
                                               "yaw": -178.42,
                                               "class": "HotspotPanoramaOverlayImage",
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
                                               "pitch": -3.64
                                              }
                                             ]
                                            },
                                            {
                                             "useHandCursor": true,
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "hfov": 16.77,
                                               "yaw": -0.27,
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
                                               "pitch": -3.52
                                              }
                                             ],
                                             "class": "HotspotPanoramaOverlay",
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "id": "overlay_31BE0D81_3C32_5BA6_41B7_6DFB73181369",
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC, this.camera_32BAC408_3C59_0543_41B8_AF111FAEB396); this.mainPlayList.set('selectedIndex', 14)",
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "hfov": 16.77,
                                               "yaw": -0.27,
                                               "class": "HotspotPanoramaOverlayImage",
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
                                               "pitch": -3.52
                                              }
                                             ]
                                            }
                                           ],
                                           "class": "SphericPanoramaFrame"
                                          }
                                         ],
                                         "class": "Panorama",
                                         "cardboardMenu": "this.Menu_32E453CA_3C59_02C7_41C9_8DEC5CD4E8DE",
                                         "partial": false,
                                         "pitch": 0,
                                         "thumbnailUrl": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_t.jpg",
                                         "id": "panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
                                         "mapLocations": [
                                          {
                                           "x": 898.78,
                                           "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE",
                                           "angle": 88.03,
                                           "y": 253.42,
                                           "class": "PanoramaMapLocation"
                                          }
                                         ],
                                         "hfovMin": 60,
                                         "label": "C14",
                                         "hfovMax": 120,
                                         "hfov": 360,
                                         "adjacentPanoramas": [
                                          {
                                           "panorama": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
                                           "yaw": -178.42,
                                           "backwardYaw": -0.18,
                                           "distance": 1,
                                           "class": "AdjacentPanorama"
                                          },
                                          {
                                           "panorama": {
                                            "frames": [
                                             {
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
                                              },
                                              "thumbnailUrl": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_t.jpg",
                                              "overlays": [
                                               {
                                                "useHandCursor": true,
                                                "maps": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "hfov": 10.93,
                                                  "yaw": 0.25,
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
                                                  "pitch": -14.76
                                                 }
                                                ],
                                                "class": "HotspotPanoramaOverlay",
                                                "enabledInCardboard": true,
                                                "rollOverDisplay": false,
                                                "id": "overlay_26A0F6B7_0673_E5BA_4197_F90E8A3A011E",
                                                "areas": [
                                                 {
                                                  "mapColor": "#FF0000",
                                                  "class": "HotspotPanoramaOverlayArea"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "hfov": 10.93,
                                                  "yaw": 0.25,
                                                  "class": "HotspotPanoramaOverlayImage",
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
                                                  "pitch": -14.76
                                                 }
                                                ]
                                               },
                                               {
                                                "useHandCursor": true,
                                                "maps": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "hfov": 17.81,
                                                  "yaw": 0.25,
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
                                                  "pitch": -3.27
                                                 }
                                                ],
                                                "class": "HotspotPanoramaOverlay",
                                                "enabledInCardboard": true,
                                                "rollOverDisplay": false,
                                                "id": "overlay_31A78791_3C32_D7A7_419E_CA932C83A3E7",
                                                "areas": [
                                                 {
                                                  "mapColor": "#FF0000",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741, this.camera_320BA63F_3C59_05BD_41BA_712FA650FB3B); this.mainPlayList.set('selectedIndex', 13)",
                                                  "class": "HotspotPanoramaOverlayArea"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "hfov": 17.81,
                                                  "yaw": 0.25,
                                                  "class": "HotspotPanoramaOverlayImage",
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
                                                  "pitch": -3.27
                                                 }
                                                ]
                                               }
                                              ],
                                              "class": "SphericPanoramaFrame"
                                             }
                                            ],
                                            "class": "Panorama",
                                            "cardboardMenu": "this.Menu_32E453CA_3C59_02C7_41C9_8DEC5CD4E8DE",
                                            "partial": false,
                                            "pitch": 0,
                                            "thumbnailUrl": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_t.jpg",
                                            "id": "panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
                                            "mapLocations": [
                                             {
                                              "x": 947.23,
                                              "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE",
                                              "angle": -86.35,
                                              "y": 252,
                                              "class": "PanoramaMapLocation"
                                             }
                                            ],
                                            "hfovMin": 60,
                                            "label": "C15",
                                            "hfovMax": 120,
                                            "hfov": 360,
                                            "adjacentPanoramas": [
                                             {
                                              "panorama": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
                                              "yaw": 0.25,
                                              "backwardYaw": -0.27,
                                              "distance": 1,
                                              "class": "AdjacentPanorama"
                                             }
                                            ],
                                            "vfov": 180
                                           },
                                           "yaw": -0.27,
                                           "backwardYaw": 0.25,
                                           "distance": 1,
                                           "class": "AdjacentPanorama"
                                          }
                                         ],
                                         "vfov": 180
                                        },
                                        "yaw": -0.18,
                                        "backwardYaw": -178.42,
                                        "distance": 1,
                                        "class": "AdjacentPanorama"
                                       }
                                      ],
                                      "vfov": 180
                                     },
                                     "yaw": -178.02,
                                     "backwardYaw": -178.74,
                                     "distance": 1,
                                     "class": "AdjacentPanorama"
                                    },
                                    {
                                     "panorama": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
                                     "yaw": 0.03,
                                     "backwardYaw": 177.7,
                                     "distance": 1,
                                     "class": "AdjacentPanorama"
                                    }
                                   ],
                                   "vfov": 180
                                  },
                                  "yaw": 177.7,
                                  "backwardYaw": 0.03,
                                  "distance": 1,
                                  "class": "AdjacentPanorama"
                                 },
                                 {
                                  "panorama": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                                  "yaw": -0.95,
                                  "backwardYaw": -0.88,
                                  "distance": 1,
                                  "class": "AdjacentPanorama"
                                 }
                                ],
                                "vfov": 180
                               },
                               "yaw": -0.88,
                               "backwardYaw": -0.95,
                               "distance": 1,
                               "class": "AdjacentPanorama"
                              }
                             ],
                             "vfov": 180
                            },
                            "yaw": 25.67,
                            "backwardYaw": 81.58,
                            "distance": 1,
                            "class": "AdjacentPanorama"
                           },
                           {
                            "panorama": {
                             "frames": [
                              {
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
                               },
                               "thumbnailUrl": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_t.jpg",
                               "overlays": [
                                {
                                 "useHandCursor": true,
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 7.99,
                                   "yaw": -143.5,
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
                                   "pitch": -6.13
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "id": "overlay_3F187E51_07F3_24F6_4184_039DFE14256A",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "hfov": 7.99,
                                   "yaw": -143.5,
                                   "class": "HotspotPanoramaOverlayImage",
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
                                   "pitch": -6.13
                                  }
                                 ]
                                },
                                {
                                 "useHandCursor": true,
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 7.72,
                                   "yaw": 7.47,
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
                                   "pitch": -4.9
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "id": "overlay_3B75B8EC_07F7_6DAE_4194_C7A60FEE48CD",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "hfov": 7.72,
                                   "yaw": 7.47,
                                   "class": "HotspotPanoramaOverlayImage",
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
                                   "pitch": -4.9
                                  }
                                 ]
                                },
                                {
                                 "useHandCursor": true,
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 10.6,
                                   "yaw": 7.69,
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
                                   "pitch": 0.41
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "id": "overlay_31FF256B_3C3E_4B7A_41C4_007A0322B0E3",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_3214062A_3C59_0544_41BE_809EC5B27425); this.mainPlayList.set('selectedIndex', 18)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "hfov": 10.6,
                                   "yaw": 7.69,
                                   "class": "HotspotPanoramaOverlayImage",
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
                                   "pitch": 0.41
                                  }
                                 ]
                                },
                                {
                                 "useHandCursor": true,
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
                                   "hfov": 11.58,
                                   "yaw": -143.45,
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
                                   "pitch": 0.45
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "id": "overlay_31FA7D5A_3C3E_5B5A_41CB_09D056C34B23",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_3266C616_3C59_054C_41C2_82C371418833); this.mainPlayList.set('selectedIndex', 16)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "hfov": 11.58,
                                   "yaw": -143.45,
                                   "class": "HotspotPanoramaOverlayImage",
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
                                   "pitch": 0.45
                                  }
                                 ]
                                }
                               ],
                               "class": "SphericPanoramaFrame"
                              }
                             ],
                             "class": "Panorama",
                             "cardboardMenu": "this.Menu_32E453CA_3C59_02C7_41C9_8DEC5CD4E8DE",
                             "partial": false,
                             "pitch": 0,
                             "thumbnailUrl": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_t.jpg",
                             "id": "panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
                             "mapLocations": [
                              {
                               "x": 674.81,
                               "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE",
                               "angle": 163.35,
                               "y": 344.02,
                               "class": "PanoramaMapLocation"
                              }
                             ],
                             "hfovMin": 60,
                             "label": "C18",
                             "hfovMax": 120,
                             "hfov": 360,
                             "adjacentPanoramas": [
                              {
                               "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                               "yaw": -143.45,
                               "backwardYaw": 152.96,
                               "distance": 1,
                               "class": "AdjacentPanorama"
                              },
                              {
                               "panorama": {
                                "frames": [
                                 {
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
                                  },
                                  "thumbnailUrl": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_t.jpg",
                                  "overlays": [
                                   {
                                    "useHandCursor": true,
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 8.31,
                                      "yaw": 28.93,
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
                                      "pitch": -13.39
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "id": "overlay_33D2C3E4_078F_23DE_417D_A6B689D41EEC",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "hfov": 8.31,
                                      "yaw": 28.93,
                                      "class": "HotspotPanoramaOverlayImage",
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
                                      "pitch": -13.39
                                     }
                                    ]
                                   },
                                   {
                                    "useHandCursor": true,
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 7.97,
                                      "yaw": -54.01,
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
                                      "pitch": -16.02
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "id": "overlay_32A61C12_07F3_647A_4188_FF9DAE655EAC",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "hfov": 7.97,
                                      "yaw": -54.01,
                                      "class": "HotspotPanoramaOverlayImage",
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
                                      "pitch": -16.02
                                     }
                                    ]
                                   },
                                   {
                                    "useHandCursor": true,
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 12.8,
                                      "yaw": 168.9,
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
                                      "pitch": 2.09
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "id": "overlay_05D41018_12AB_46B7_41A1_DDBF885F6640",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D, this.camera_31265537_3C59_074D_41B6_0DF3EF928591); this.mainPlayList.set('selectedIndex', 19)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "hfov": 12.8,
                                      "yaw": 168.9,
                                      "class": "HotspotPanoramaOverlayImage",
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
                                      "pitch": 2.09
                                     }
                                    ]
                                   },
                                   {
                                    "useHandCursor": true,
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 9.38,
                                      "yaw": 168.89,
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
                                      "pitch": -5.96
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "id": "overlay_0ADD07F7_12A8_C979_419E_40680DB583A7",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "hfov": 9.38,
                                      "yaw": 168.89,
                                      "class": "HotspotPanoramaOverlayImage",
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
                                      "pitch": -5.96
                                     }
                                    ]
                                   },
                                   {
                                    "useHandCursor": true,
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 16.61,
                                      "yaw": -53.03,
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
                                      "pitch": -8.19
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "id": "overlay_318E48FC_3C3E_D95E_41C8_D67E6535535C",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_3132A52D_3C59_075D_41C5_6037A04FE0A6); this.mainPlayList.set('selectedIndex', 22)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "hfov": 16.61,
                                      "yaw": -53.03,
                                      "class": "HotspotPanoramaOverlayImage",
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
                                      "pitch": -8.19
                                     }
                                    ]
                                   },
                                   {
                                    "useHandCursor": true,
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
                                      "hfov": 13.33,
                                      "yaw": 24.89,
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
                                      "pitch": -8.66
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "id": "overlay_31EDADC4_3C3E_3BAD_41AB_C9F7B53B7D40",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_3139E523_3C59_0745_41AD_97BEB1FEC0A0); this.mainPlayList.set('selectedIndex', 17)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "hfov": 13.33,
                                      "yaw": 24.89,
                                      "class": "HotspotPanoramaOverlayImage",
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
                                      "pitch": -8.66
                                     }
                                    ]
                                   }
                                  ],
                                  "class": "SphericPanoramaFrame"
                                 }
                                ],
                                "class": "Panorama",
                                "cardboardMenu": "this.Menu_32E453CA_3C59_02C7_41C9_8DEC5CD4E8DE",
                                "partial": false,
                                "pitch": 0,
                                "thumbnailUrl": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_t.jpg",
                                "id": "panorama_0F84F19D_0671_6675_4191_5761B2287855",
                                "mapLocations": [
                                 {
                                  "x": 670.61,
                                  "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE",
                                  "angle": 0,
                                  "y": 386.79,
                                  "class": "PanoramaMapLocation"
                                 }
                                ],
                                "hfovMin": 60,
                                "label": "C19",
                                "hfovMax": 120,
                                "hfov": 360,
                                "adjacentPanoramas": [
                                 {
                                  "panorama": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
                                  "yaw": 24.89,
                                  "backwardYaw": 7.69,
                                  "distance": 1,
                                  "class": "AdjacentPanorama"
                                 },
                                 {
                                  "panorama": {
                                   "frames": [
                                    {
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
                                     },
                                     "thumbnailUrl": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_t.jpg",
                                     "overlays": [
                                      {
                                       "useHandCursor": true,
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 9.41,
                                         "yaw": 88.54,
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
                                         "pitch": -11.24
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "id": "overlay_3348BEEF_07B7_25AA_4181_4163771F00E4",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "hfov": 9.41,
                                         "yaw": 88.54,
                                         "class": "HotspotPanoramaOverlayImage",
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
                                         "pitch": -11.24
                                        }
                                       ]
                                      },
                                      {
                                       "useHandCursor": true,
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 7.27,
                                         "yaw": -7.29,
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
                                         "pitch": -4.21
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "id": "overlay_2AA8BEF2_07B1_25BA_417C_0F0A2C84C244",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "hfov": 7.27,
                                         "yaw": -7.29,
                                         "class": "HotspotPanoramaOverlayImage",
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
                                         "pitch": -4.21
                                        }
                                       ]
                                      },
                                      {
                                       "useHandCursor": true,
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 11.22,
                                         "yaw": -168.6,
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
                                         "pitch": -10.52
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "id": "overlay_2C7EB04D_21FB_7ABB_4179_D08D1BA68999",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "hfov": 11.22,
                                         "yaw": -168.6,
                                         "class": "HotspotPanoramaOverlayImage",
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
                                         "pitch": -10.52
                                        }
                                       ]
                                      },
                                      {
                                       "useHandCursor": true,
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 12.09,
                                         "yaw": -172.27,
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
                                         "pitch": -4.19
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "id": "overlay_3184A9AF_3C3E_5BFA_4193_1D078062DEF6",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_317AD4D0_3C59_06C3_41C9_E35C25349139); this.mainPlayList.set('selectedIndex', 15)",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "hfov": 12.09,
                                         "yaw": -172.27,
                                         "class": "HotspotPanoramaOverlayImage",
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
                                         "pitch": -4.19
                                        }
                                       ]
                                      },
                                      {
                                       "useHandCursor": true,
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 12.01,
                                         "yaw": -6.68,
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
                                         "pitch": 0.98
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "id": "overlay_318F2744_3C3E_48AD_41CD_20BCB5DBAA95",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_316444E4_3C59_06C3_41C2_0DC92204128D); this.mainPlayList.set('selectedIndex', 18)",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "hfov": 12.01,
                                         "yaw": -6.68,
                                         "class": "HotspotPanoramaOverlayImage",
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
                                         "pitch": 0.98
                                        }
                                       ]
                                      },
                                      {
                                       "useHandCursor": true,
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 9.82,
                                         "yaw": 87.82,
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
                                         "pitch": -4.77
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "id": "overlay_31A91C84_3C3D_D9AD_41C5_CD5CBB0A6D17",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67, this.camera_316D24DC_3C59_06C3_41CB_BB0DCF7879AB); this.mainPlayList.set('selectedIndex', 21)",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "hfov": 9.82,
                                         "yaw": 87.82,
                                         "class": "HotspotPanoramaOverlayImage",
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
                                         "pitch": -4.77
                                        }
                                       ]
                                      }
                                     ],
                                     "class": "SphericPanoramaFrame"
                                    }
                                   ],
                                   "class": "Panorama",
                                   "cardboardMenu": "this.Menu_32E453CA_3C59_02C7_41C9_8DEC5CD4E8DE",
                                   "partial": false,
                                   "pitch": 0,
                                   "thumbnailUrl": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_t.jpg",
                                   "id": "panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                                   "mapLocations": [
                                    {
                                     "x": 637.03,
                                     "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE",
                                     "angle": 144.87,
                                     "y": 342.54,
                                     "class": "PanoramaMapLocation"
                                    }
                                   ],
                                   "hfovMin": 60,
                                   "label": "C23",
                                   "hfovMax": 120,
                                   "hfov": 360,
                                   "adjacentPanoramas": [
                                    {
                                     "panorama": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                                     "yaw": -172.27,
                                     "backwardYaw": -174.64,
                                     "distance": 1,
                                     "class": "AdjacentPanorama"
                                    },
                                    {
                                     "panorama": {
                                      "frames": [
                                       {
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
                                        },
                                        "thumbnailUrl": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_t.jpg",
                                        "overlays": [
                                         {
                                          "useHandCursor": true,
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 8.33,
                                            "yaw": 4.65,
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
                                            "pitch": -12.75
                                           }
                                          ],
                                          "class": "HotspotPanoramaOverlay",
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "id": "overlay_282E1707_07B3_E45A_4184_0F5F576BAFA8",
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "hfov": 8.33,
                                            "yaw": 4.65,
                                            "class": "HotspotPanoramaOverlayImage",
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
                                            "pitch": -12.75
                                           }
                                          ]
                                         },
                                         {
                                          "useHandCursor": true,
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 8.48,
                                            "yaw": -179.12,
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
                                            "pitch": -15.39
                                           }
                                          ],
                                          "class": "HotspotPanoramaOverlay",
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "id": "overlay_36A27374_07B1_1CBE_4183_F00116B379C1",
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "hfov": 8.48,
                                            "yaw": -179.12,
                                            "class": "HotspotPanoramaOverlayImage",
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
                                            "pitch": -15.39
                                           }
                                          ]
                                         },
                                         {
                                          "useHandCursor": true,
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 20.49,
                                            "yaw": -179.27,
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
                                            "pitch": -4.42
                                           }
                                          ],
                                          "class": "HotspotPanoramaOverlay",
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "id": "overlay_319C20C7_3C3E_C9AA_41CD_3CE2491B7454",
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754, this.camera_322EA667_3C59_05CD_41C9_1E25A727E3E7); this.mainPlayList.set('selectedIndex', 20)",
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "hfov": 20.49,
                                            "yaw": -179.27,
                                            "class": "HotspotPanoramaOverlayImage",
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
                                            "pitch": -4.42
                                           }
                                          ]
                                         },
                                         {
                                          "useHandCursor": true,
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
                                            "hfov": 11.26,
                                            "yaw": 4.77,
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
                                            "pitch": -4.76
                                           }
                                          ],
                                          "class": "HotspotPanoramaOverlay",
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "id": "overlay_3194C5EC_3C3E_CB7D_41C9_0F6F04D6B4CA",
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_32383653_3C59_05C5_41C8_F94B284835FC); this.mainPlayList.set('selectedIndex', 22)",
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "hfov": 11.26,
                                            "yaw": 4.77,
                                            "class": "HotspotPanoramaOverlayImage",
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
                                            "pitch": -4.76
                                           }
                                          ]
                                         }
                                        ],
                                        "class": "SphericPanoramaFrame"
                                       }
                                      ],
                                      "class": "Panorama",
                                      "cardboardMenu": "this.Menu_32E453CA_3C59_02C7_41C9_8DEC5CD4E8DE",
                                      "partial": false,
                                      "pitch": 0,
                                      "thumbnailUrl": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_t.jpg",
                                      "id": "panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
                                      "mapLocations": [
                                       {
                                        "x": 597.83,
                                        "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE",
                                        "angle": 71.57,
                                        "y": 356.1,
                                        "class": "PanoramaMapLocation"
                                       }
                                      ],
                                      "hfovMin": 60,
                                      "label": "C22",
                                      "hfovMax": 120,
                                      "hfov": 360,
                                      "adjacentPanoramas": [
                                       {
                                        "panorama": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                                        "yaw": 4.77,
                                        "backwardYaw": 87.82,
                                        "distance": 1,
                                        "class": "AdjacentPanorama"
                                       },
                                       {
                                        "panorama": {
                                         "frames": [
                                          {
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
                                           },
                                           "thumbnailUrl": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_t.jpg",
                                           "overlays": [
                                            {
                                             "useHandCursor": true,
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "hfov": 9.76,
                                               "yaw": -178.49,
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
                                               "pitch": -22.3
                                              }
                                             ],
                                             "class": "HotspotPanoramaOverlay",
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "id": "overlay_36D89562_07B1_24DA_4181_B5F7392CD10A",
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "hfov": 9.76,
                                               "yaw": -178.49,
                                               "class": "HotspotPanoramaOverlayImage",
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
                                               "pitch": -22.3
                                              }
                                             ]
                                            },
                                            {
                                             "useHandCursor": true,
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
                                               "hfov": 21.31,
                                               "yaw": -179.93,
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
                                               "pitch": -11.43
                                              }
                                             ],
                                             "class": "HotspotPanoramaOverlay",
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "id": "overlay_3189D767_3C3E_576B_41B9_B7E24D9E032C",
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67, this.camera_30A4344E_3C59_05DC_41C9_A09EDA96063C); this.mainPlayList.set('selectedIndex', 21)",
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "hfov": 21.31,
                                               "yaw": -179.93,
                                               "class": "HotspotPanoramaOverlayImage",
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
                                               "pitch": -11.43
                                              }
                                             ]
                                            }
                                           ],
                                           "class": "SphericPanoramaFrame"
                                          }
                                         ],
                                         "class": "Panorama",
                                         "cardboardMenu": "this.Menu_32E453CA_3C59_02C7_41C9_8DEC5CD4E8DE",
                                         "partial": false,
                                         "pitch": 0,
                                         "thumbnailUrl": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_t.jpg",
                                         "id": "panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
                                         "mapLocations": [
                                          {
                                           "x": 570.71,
                                           "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE",
                                           "angle": 249.33,
                                           "y": 371.82,
                                           "class": "PanoramaMapLocation"
                                          }
                                         ],
                                         "hfovMin": 60,
                                         "label": "C21",
                                         "hfovMax": 120,
                                         "hfov": 360,
                                         "adjacentPanoramas": [
                                          {
                                           "panorama": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
                                           "yaw": -179.93,
                                           "backwardYaw": -179.27,
                                           "distance": 1,
                                           "class": "AdjacentPanorama"
                                          }
                                         ],
                                         "vfov": 180
                                        },
                                        "yaw": -179.27,
                                        "backwardYaw": -179.93,
                                        "distance": 1,
                                        "class": "AdjacentPanorama"
                                       }
                                      ],
                                      "vfov": 180
                                     },
                                     "yaw": 87.82,
                                     "backwardYaw": 4.77,
                                     "distance": 1,
                                     "class": "AdjacentPanorama"
                                    },
                                    {
                                     "panorama": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
                                     "yaw": -6.68,
                                     "backwardYaw": -53.03,
                                     "distance": 1,
                                     "class": "AdjacentPanorama"
                                    }
                                   ],
                                   "vfov": 180
                                  },
                                  "yaw": -53.03,
                                  "backwardYaw": -6.68,
                                  "distance": 1,
                                  "class": "AdjacentPanorama"
                                 },
                                 {
                                  "panorama": {
                                   "frames": [
                                    {
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
                                     },
                                     "thumbnailUrl": "media/panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D_t.jpg",
                                     "overlays": [
                                      {
                                       "useHandCursor": true,
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 8.44,
                                         "yaw": -174.68,
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
                                         "pitch": -6.59
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "id": "overlay_305C5588_0793_2456_418A_8A6507C5DC0F",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "hfov": 8.44,
                                         "yaw": -174.68,
                                         "class": "HotspotPanoramaOverlayImage",
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
                                         "pitch": -6.59
                                        }
                                       ]
                                      },
                                      {
                                       "useHandCursor": true,
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
                                         "hfov": 11.3,
                                         "yaw": -174.74,
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
                                         "pitch": -0.44
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "id": "overlay_31FEF583_3C3F_CBAA_41CA_B71528649943",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_31F7C572_3C59_07C7_41C6_5294FC573DF1); this.mainPlayList.set('selectedIndex', 18)",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "hfov": 11.3,
                                         "yaw": -174.74,
                                         "class": "HotspotPanoramaOverlayImage",
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
                                         "pitch": -0.44
                                        }
                                       ]
                                      }
                                     ],
                                     "class": "SphericPanoramaFrame"
                                    }
                                   ],
                                   "class": "Panorama",
                                   "cardboardMenu": "this.Menu_32E453CA_3C59_02C7_41C9_8DEC5CD4E8DE",
                                   "partial": false,
                                   "pitch": 0,
                                   "thumbnailUrl": "media/panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D_t.jpg",
                                   "id": "panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D",
                                   "mapLocations": [
                                    {
                                     "x": 684.85,
                                     "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE",
                                     "angle": 181.22,
                                     "y": 435.3,
                                     "class": "PanoramaMapLocation"
                                    }
                                   ],
                                   "hfovMin": 60,
                                   "label": "C20",
                                   "hfovMax": 120,
                                   "hfov": 360,
                                   "adjacentPanoramas": [
                                    {
                                     "panorama": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
                                     "yaw": -174.74,
                                     "backwardYaw": 168.9,
                                     "distance": 1,
                                     "class": "AdjacentPanorama"
                                    }
                                   ],
                                   "vfov": 180
                                  },
                                  "yaw": 168.9,
                                  "backwardYaw": -174.74,
                                  "distance": 1,
                                  "class": "AdjacentPanorama"
                                 }
                                ],
                                "vfov": 180
                               },
                               "yaw": 7.69,
                               "backwardYaw": 24.89,
                               "distance": 1,
                               "class": "AdjacentPanorama"
                              }
                             ],
                             "vfov": 180
                            },
                            "yaw": 152.96,
                            "backwardYaw": -143.45,
                            "distance": 1,
                            "class": "AdjacentPanorama"
                           },
                           {
                            "panorama": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                            "yaw": -107.62,
                            "backwardYaw": 113.51,
                            "distance": 1,
                            "class": "AdjacentPanorama"
                           }
                          ],
                          "vfov": 180
                         },
                         "yaw": 113.51,
                         "backwardYaw": -107.62,
                         "distance": 1,
                         "class": "AdjacentPanorama"
                        },
                        {
                         "panorama": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                         "yaw": -174.64,
                         "backwardYaw": -172.27,
                         "distance": 1,
                         "class": "AdjacentPanorama"
                        },
                        {
                         "panorama": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                         "yaw": -18.92,
                         "backwardYaw": 156.92,
                         "distance": 1,
                         "class": "AdjacentPanorama"
                        }
                       ],
                       "vfov": 180
                      },
                      "yaw": 156.92,
                      "backwardYaw": -18.92,
                      "distance": 1,
                      "class": "AdjacentPanorama"
                     },
                     {
                      "panorama": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                      "yaw": 4.74,
                      "backwardYaw": 36.85,
                      "distance": 1,
                      "class": "AdjacentPanorama"
                     },
                     {
                      "panorama": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
                      "yaw": -96.27,
                      "backwardYaw": 7.93,
                      "distance": 1,
                      "class": "AdjacentPanorama"
                     }
                    ],
                    "vfov": 180
                   },
                   "yaw": 7.93,
                   "backwardYaw": -96.27,
                   "distance": 1,
                   "class": "AdjacentPanorama"
                  },
                  {
                   "panorama": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
                   "yaw": -178.55,
                   "backwardYaw": -179.87,
                   "distance": 1,
                   "class": "AdjacentPanorama"
                  }
                 ],
                 "vfov": 180
                },
                "yaw": -179.87,
                "backwardYaw": -178.55,
                "distance": 1,
                "class": "AdjacentPanorama"
               }
              ],
              "vfov": 180
             },
             "yaw": -2.21,
             "backwardYaw": -2.69,
             "distance": 1,
             "class": "AdjacentPanorama"
            }
           ],
           "vfov": 180
          },
          "yaw": -177.99,
          "backwardYaw": -179.28,
          "distance": 1,
          "class": "AdjacentPanorama"
         },
         {
          "panorama": "this.panorama_0FD85D6E_0673_DED7_40FD_D23817113C40",
          "yaw": 0.35,
          "backwardYaw": 0.64,
          "distance": 1,
          "class": "AdjacentPanorama"
         }
        ],
        "vfov": 180
       },
       "yaw": 0.64,
       "backwardYaw": 0.35,
       "distance": 1,
       "class": "AdjacentPanorama"
      },
      {
       "panorama": "this.panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D",
       "yaw": -179.67,
       "backwardYaw": 1.46,
       "distance": 1,
       "class": "AdjacentPanorama"
      }
     ],
     "vfov": 180
    },
    "yaw": 1.46,
    "backwardYaw": -179.67,
    "distance": 1,
    "class": "AdjacentPanorama"
   }
  ],
  "vfov": 180
 },
 {
  "gyroscopeEnabled": true,
  "id": "MainViewerPanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "gyroscopeVerticalDraggingEnabled": true,
  "class": "PanoramaPlayer",
  "displayPlaybackBar": true,
  "mouseControlMode": "drag_acceleration",
  "touchControlMode": "drag_rotation",
  "preloadEnabled": false
 },
 {
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
   "playbackBarHeadShadowVerticalLength": 0,
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
   "playbackBarProgressBorderColor": "#000000",
   "playbackBarHeadShadowHorizontalLength": 0,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "toolTipPaddingRight": 6,
   "width": 348,
   "paddingLeft": 0,
   "height": 224,
   "toolTipTextShadowOpacity": 0,
   "playbackBarHeadBorderRadius": 0,
   "toolTipPaddingTop": 4,
   "borderRadius": 10,
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
   "playbackBarHeadShadowOpacity": 0.7,
   "playbackBarHeadHeight": 15,
   "top": 0,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "minWidth": 321,
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "playbackBarHeadShadowColor": "#000000",
   "toolTipFontWeight": "normal",
   "id": "MapViewer",
   "class": "ViewerArea",
   "progressBarBorderColor": "#000000",
   "toolTipShadowHorizontalLength": 0,
   "playbackBarHeadOpacity": 1,
   "minHeight": 224,
   "progressBackgroundColorDirection": "vertical",
   "progressBarBackgroundColorRatios": [
    0
   ],
   "playbackBarHeadBorderSize": 0,
   "left": 25,
   "progressBorderColor": "#000000",
   "progressHeight": 10,
   "playbackBarBottom": 0,
   "toolTipTextShadowBlurRadius": 3,
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "toolTipFontFamily": "Arial",
   "progressOpacity": 1
  },
  "class": "MapPlayer"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D_camera",
  "class": "PanoramaCamera"
 },
 "this.panorama_0FD85D6E_0673_DED7_40FD_D23817113C40",
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_camera",
  "class": "PanoramaCamera"
 },
 "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_camera",
  "class": "PanoramaCamera"
 },
 "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_camera",
  "class": "PanoramaCamera"
 },
 "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_camera",
  "class": "PanoramaCamera"
 },
 "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_camera",
  "class": "PanoramaCamera"
 },
 "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_camera",
  "class": "PanoramaCamera"
 },
 "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_camera",
  "class": "PanoramaCamera"
 },
 "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_camera",
  "class": "PanoramaCamera"
 },
 "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_camera",
  "class": "PanoramaCamera"
 },
 "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_camera",
  "class": "PanoramaCamera"
 },
 "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_camera",
  "class": "PanoramaCamera"
 },
 "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_camera",
  "class": "PanoramaCamera"
 },
 "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_0F98F446_0671_2ED7_4191_DEC01556F741_camera",
  "class": "PanoramaCamera"
 },
 "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_camera",
  "class": "PanoramaCamera"
 },
 "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_0FD82345_0671_EAD5_4173_8B63686C1397_camera",
  "class": "PanoramaCamera"
 },
 "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_camera",
  "class": "PanoramaCamera"
 },
 "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_camera",
  "class": "PanoramaCamera"
 },
 "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 161.16,
   "pitch": 2.07
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_0F84F19D_0671_6675_4191_5761B2287855_camera",
  "class": "PanoramaCamera"
 },
 "this.panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -155.88,
   "pitch": -1.95
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D_camera",
  "class": "PanoramaCamera"
 },
 "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_camera",
  "class": "PanoramaCamera"
 },
 "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_camera",
  "class": "PanoramaCamera"
 },
 "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_camera",
  "class": "PanoramaCamera"
 },
 {
  "items": [
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_32F8E3A4_3C59_0343_419A_560FA1BC85CE, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "id": "PanoramaPlayListItem_32F8E3A4_3C59_0343_419A_560FA1BC85CE",
    "camera": "this.panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D_camera"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_32FBA3A4_3C59_0343_41C1_366E81C66AED, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FD85D6E_0673_DED7_40FD_D23817113C40",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "id": "PanoramaPlayListItem_32FBA3A4_3C59_0343_41C1_366E81C66AED",
    "camera": "this.panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_camera"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_32FA93B3_3C59_0344_41C9_48935AB1CB34, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "id": "PanoramaPlayListItem_32FA93B3_3C59_0344_41C9_48935AB1CB34",
    "camera": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_camera"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_32F533B3_3C59_0344_41AD_DACADEF81753, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "id": "PanoramaPlayListItem_32F533B3_3C59_0344_41AD_DACADEF81753",
    "camera": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_camera"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_32F5E3B3_3C59_0344_41C7_364632CF4F4C, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "id": "PanoramaPlayListItem_32F5E3B3_3C59_0344_41C7_364632CF4F4C",
    "camera": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_camera"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_32F4A3B3_3C59_0344_41A2_C030E7D475F6, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "id": "PanoramaPlayListItem_32F4A3B3_3C59_0344_41A2_C030E7D475F6",
    "camera": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_camera"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_32F793B3_3C59_0344_41A2_868E069537F6, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "id": "PanoramaPlayListItem_32F793B3_3C59_0344_41A2_868E069537F6",
    "camera": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_camera"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_32F623B3_3C59_0344_41C7_634C83FB800D, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "id": "PanoramaPlayListItem_32F623B3_3C59_0344_41C7_634C83FB800D",
    "camera": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_camera"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_32F113B3_3C59_0344_41C6_DD7CD0553F43, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "id": "PanoramaPlayListItem_32F113B3_3C59_0344_41C6_DD7CD0553F43",
    "camera": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_camera"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_32F183B3_3C59_0344_418C_E4F82919EFC7, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "id": "PanoramaPlayListItem_32F183B3_3C59_0344_418C_E4F82919EFC7",
    "camera": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_camera"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_32F073B3_3C59_0344_41CC_F44E6C88C68C, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "id": "PanoramaPlayListItem_32F073B3_3C59_0344_41CC_F44E6C88C68C",
    "camera": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_camera"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_32F363B3_3C59_0344_41CE_01AFB6B7BD4F, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "id": "PanoramaPlayListItem_32F363B3_3C59_0344_41CE_01AFB6B7BD4F",
    "camera": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_camera"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_32F263B3_3C59_0344_41C3_291604777DA1, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "id": "PanoramaPlayListItem_32F263B3_3C59_0344_41C3_291604777DA1",
    "camera": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_camera"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_32ED23B3_3C59_0344_41CC_E79F5D3845FE, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "id": "PanoramaPlayListItem_32ED23B3_3C59_0344_41CC_E79F5D3845FE",
    "camera": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741_camera"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_32EC23B3_3C59_0344_41BC_184E6711D0C1, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "id": "PanoramaPlayListItem_32EC23B3_3C59_0344_41BC_184E6711D0C1",
    "camera": "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_camera"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_32EF13B3_3C59_0344_41C7_692477497C5B, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "id": "PanoramaPlayListItem_32EF13B3_3C59_0344_41C7_692477497C5B",
    "camera": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397_camera"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_32EE03B3_3C59_0344_41C8_F1C7C6FF5E6B, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "id": "PanoramaPlayListItem_32EE03B3_3C59_0344_41C8_F1C7C6FF5E6B",
    "camera": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_camera"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_32EEE3B3_3C59_0344_41B3_9CA5F9AEAC6A, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "id": "PanoramaPlayListItem_32EEE3B3_3C59_0344_41B3_9CA5F9AEAC6A",
    "camera": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_camera"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_32E9E3C3_3C59_02C5_41C3_32F271952B1A, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
    "id": "PanoramaPlayListItem_32E9E3C3_3C59_02C5_41C3_32F271952B1A",
    "camera": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855_camera"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_32E8A3C3_3C59_02C5_41C6_E0366C47D64C, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
    "id": "PanoramaPlayListItem_32E8A3C3_3C59_02C5_41C6_E0366C47D64C",
    "camera": "this.panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D_camera"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_32EB93C3_3C59_02C5_41AE_8CD40A89D679, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
    "id": "PanoramaPlayListItem_32EB93C3_3C59_02C5_41AE_8CD40A89D679",
    "camera": "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_camera"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_32EA23C3_3C59_02C5_41C8_4432B08ED30F, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
    "id": "PanoramaPlayListItem_32EA23C3_3C59_02C5_41C8_4432B08ED30F",
    "camera": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_camera"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_32E523C3_3C59_02C5_41A8_6563101AD1FC, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 0)",
    "id": "PanoramaPlayListItem_32E523C3_3C59_02C5_41A8_6563101AD1FC",
    "camera": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_camera"
   }
  ],
  "id": "mainPlayList",
  "class": "PlayList"
 },
 "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE",
 {
  "items": [
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE",
    "class": "MapPlayListItem"
   }
  ],
  "id": "playList_32F9E3A4_3C59_0343_418C_B4407EB758E6",
  "class": "PlayList"
 },
 "this.Menu_32E453CA_3C59_02C7_41C9_8DEC5CD4E8DE",
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 179.82,
   "pitch": 0
  },
  "id": "camera_3281E3F8_3C59_02C4_41A6_6D3146966E42",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.75,
   "pitch": 0
  },
  "id": "camera_32BAC408_3C59_0543_41B8_AF111FAEB396",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 177.79,
   "pitch": 0
  },
  "id": "camera_32ADC418_3C59_0543_41CC_5716309646BF",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 1.45,
   "pitch": 0
  },
  "id": "camera_32A6D418_3C59_0543_41C7_A918AFBD81DB",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.73,
   "pitch": 0
  },
  "id": "camera_30A4344E_3C59_05DC_41C9_A09EDA96063C",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 25.72,
   "pitch": 0
  },
  "id": "camera_30A16463_3C59_05C5_41B7_DB815530D8FB",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 72.38,
   "pitch": 0
  },
  "id": "camera_315C546D_3C59_05DD_41C0_3013B85EAE66",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.73,
   "pitch": 0
  },
  "id": "camera_31585477_3C59_05CD_41AF_6CFB54EFF341",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -23.08,
   "pitch": 0
  },
  "id": "camera_3157F48B_3C59_0545_41B5_7EF6F01C77E8",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 83.73,
   "pitch": 0
  },
  "id": "camera_31524495_3C59_054C_419B_300771B097E6",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.13,
   "pitch": 0
  },
  "id": "camera_314834A7_3C59_054C_41C3_126F7C089A57",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 1.98,
   "pitch": 0
  },
  "id": "camera_3147F4B4_3C59_0543_41C6_8FED1693EB2A",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 1.58,
   "pitch": 0
  },
  "id": "camera_314274BE_3C59_06BF_41C4_CBB662018A09",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 5.36,
   "pitch": 0
  },
  "id": "camera_317AD4D0_3C59_06C3_41C9_E35C25349139",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -175.23,
   "pitch": 0
  },
  "id": "camera_316D24DC_3C59_06C3_41CB_BB0DCF7879AB",
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 126.97,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "id": "camera_316444E4_3C59_06C3_41C2_0DC92204128D",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 1.26,
   "pitch": 0
  },
  "id": "camera_311EB4F8_3C59_06C4_41CB_E30A54599CBA",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -2.3,
   "pitch": 0
  },
  "id": "camera_31119505_3C59_074D_41B8_FD7448CDD8DC",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.33,
   "pitch": 0
  },
  "id": "camera_3105450F_3C59_075D_4181_8A69E8794445",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -172.31,
   "pitch": 0
  },
  "id": "camera_3139E523_3C59_0745_41AD_97BEB1FEC0A0",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 173.32,
   "pitch": 0
  },
  "id": "camera_3132A52D_3C59_075D_41C5_6037A04FE0A6",
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 5.26,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "id": "camera_31265537_3C59_074D_41B6_0DF3EF928591",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -154.33,
   "pitch": 0
  },
  "id": "camera_31DAE54C_3C59_07C3_41B6_640B78E49109",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 137.87,
   "pitch": 0
  },
  "id": "camera_31CFF556_3C59_07CF_41CC_239807876B77",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 179.05,
   "pitch": 0
  },
  "id": "camera_31C24560_3C59_07C3_41B3_77A1329721CE",
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -11.1,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "id": "camera_31F7C572_3C59_07C7_41C6_5294FC573DF1",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.65,
   "pitch": 0
  },
  "id": "camera_31E8F57E_3C59_07BF_41CA_7D4A6AD3F899",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -178.54,
   "pitch": 0
  },
  "id": "camera_319FB588_3C59_0744_4189_EF4C9023B35A",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 161.08,
   "pitch": 0
  },
  "id": "camera_3190859D_3C59_077D_41B8_94E66CC51CE7",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -143.15,
   "pitch": 0
  },
  "id": "camera_318625A7_3C59_074D_41C8_E83B91A6967B",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -172.07,
   "pitch": 0
  },
  "id": "camera_31B435B1_3C59_0745_41B1_430ADB4C73C6",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 36.86,
   "pitch": 0
  },
  "id": "camera_31AB35C5_3C59_06CD_41BC_73FB2A483D37",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -50.91,
   "pitch": 0
  },
  "id": "camera_3259B5CF_3C59_06DC_41CD_8685358D7D30",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -175.26,
   "pitch": 0
  },
  "id": "camera_324CB5E2_3C59_06C7_41C5_B05CCF7955A2",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.72,
   "pitch": 0
  },
  "id": "camera_327D35EE_3C59_06DF_41B2_562E8511DBE5",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.36,
   "pitch": 0
  },
  "id": "camera_327055F8_3C59_06C3_41C9_75162C9870F3",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -27.04,
   "pitch": 0
  },
  "id": "camera_3266C616_3C59_054C_41C2_82C371418833",
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -155.11,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "id": "camera_3214062A_3C59_0544_41BE_809EC5B27425",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 179.73,
   "pitch": 0
  },
  "id": "camera_320BA63F_3C59_05BD_41BA_712FA650FB3B",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -92.18,
   "pitch": 0
  },
  "id": "camera_32383653_3C59_05C5_41C8_F94B284835FC",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.07,
   "pitch": 0
  },
  "id": "camera_322EA667_3C59_05CD_41C9_1E25A727E3E7",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 2.01,
   "pitch": 0
  },
  "id": "camera_32DDC679_3C59_05C5_41C5_3F8FD2372B7C",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 177.31,
   "pitch": 0
  },
  "id": "camera_32D2468F_3C59_055C_41B7_C8EDFDCB5705",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -98.42,
   "pitch": 0
  },
  "id": "camera_32C146A4_3C59_0543_41C2_CEE666632178",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 36.55,
   "pitch": 0
  },
  "id": "camera_32F616B8_3C59_0543_41C8_B6A355E60728",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -66.49,
   "pitch": 0
  },
  "id": "camera_32E706CC_3C59_02C3_41C1_49A3ABAFA5DD",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.97,
   "pitch": 0
  },
  "id": "camera_329A16E0_3C59_02C4_41CA_03C647598DA8",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialSequence": {
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
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 179.12,
   "pitch": 0
  },
  "id": "camera_328886F5_3C59_02CD_41C4_7620BFD68A32",
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
  "playbackBarHeadShadowVerticalLength": 0,
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
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadShadowHorizontalLength": 0,
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
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarHeadHeight": 15,
  "top": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "minWidth": 100,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "bottom": "0%",
  "toolTipFontWeight": "normal",
  "id": "MainViewer",
  "class": "ViewerArea",
  "progressBarBorderColor": "#000000",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadOpacity": 1,
  "minHeight": 50,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadBorderSize": 0,
  "left": 0,
  "progressBorderColor": "#000000",
  "progressHeight": 10,
  "playbackBarBottom": 5,
  "toolTipTextShadowBlurRadius": 3,
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
  "height": 132.11,
  "width": "96.924%",
  "borderRadius": 0,
  "borderSize": 0,
  "gap": 12,
  "contentOpaque": false,
  "layout": "vertical",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "horizontalAlign": "center",
  "paddingBottom": 0,
  "minWidth": 1,
  "bottom": "1.95%",
  "shadow": false,
  "id": "Container_03BF4D6F_10EF_82D8_41A4_FC17EDB0E403",
  "class": "Container",
  "minHeight": 1,
  "paddingTop": 0,
  "backgroundOpacity": 0,
  "right": "1.51%",
  "children": [
   {
    "backgroundColorDirection": "vertical",
    "overflow": "scroll",
    "scrollBarOpacity": 0.5,
    "backgroundColor": [
     "#000000",
     "#000000"
    ],
    "paddingRight": 0,
    "scrollBarColor": "#000000",
    "paddingLeft": 0,
    "height": 73,
    "width": 314,
    "borderRadius": 9,
    "borderSize": 0,
    "gap": 12,
    "contentOpaque": false,
    "layout": "horizontal",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "horizontalAlign": "center",
    "paddingBottom": 0,
    "minWidth": 1,
    "class": "Container",
    "backgroundColorRatios": [
     0,
     1
    ],
    "shadow": false,
    "id": "Container_1F218FBB_3BC2_A700_4191_230DA2F5BB68",
    "minHeight": 1,
    "paddingTop": 0,
    "backgroundOpacity": 0.59,
    "children": [
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "push",
      "width": 42,
      "paddingLeft": 0,
      "height": 57,
      "iconURL": "skin/IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0.png",
      "transparencyActive": false,
      "borderRadius": 0,
      "borderSize": 0,
      "rollOverIconURL": "skin/IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0_rollover.png",
      "horizontalAlign": "center",
      "click": "this.mainPlayList.set('selectedIndex', 0)",
      "cursor": "hand",
      "paddingBottom": 0,
      "maxHeight": 1052,
      "minWidth": 1,
      "class": "IconButton",
      "shadow": false,
      "id": "IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0",
      "minHeight": 1,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "maxWidth": 1047
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "push",
      "width": 42,
      "paddingLeft": 0,
      "height": 57,
      "iconURL": "skin/IconButton_1808CC36_3A41_E900_4183_CE565B25106A.png",
      "transparencyActive": false,
      "borderRadius": 0,
      "borderSize": 0,
      "rollOverIconURL": "skin/IconButton_1808CC36_3A41_E900_4183_CE565B25106A_rollover.png",
      "horizontalAlign": "center",
      "click": "this.mainPlayList.set('selectedIndex', 2)",
      "cursor": "hand",
      "paddingBottom": 0,
      "maxHeight": 1052,
      "minWidth": 1,
      "class": "IconButton",
      "shadow": false,
      "id": "IconButton_1808CC36_3A41_E900_4183_CE565B25106A",
      "minHeight": 1,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "maxWidth": 1047
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "push",
      "width": 42,
      "paddingLeft": 0,
      "height": 57,
      "iconURL": "skin/IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE.png",
      "transparencyActive": false,
      "borderRadius": 0,
      "borderSize": 0,
      "rollOverIconURL": "skin/IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE_rollover.png",
      "horizontalAlign": "center",
      "click": "this.mainPlayList.set('selectedIndex', 4)",
      "cursor": "hand",
      "paddingBottom": 0,
      "maxHeight": 1052,
      "minWidth": 1,
      "class": "IconButton",
      "shadow": false,
      "id": "IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE",
      "minHeight": 1,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "maxWidth": 1047
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "push",
      "width": 42,
      "paddingLeft": 0,
      "height": 57,
      "iconURL": "skin/IconButton_1FCDD1EC_3A41_BB00_41C5_40B934E107FD.png",
      "transparencyActive": false,
      "borderRadius": 0,
      "borderSize": 0,
      "rollOverIconURL": "skin/IconButton_1FCDD1EC_3A41_BB00_41C5_40B934E107FD_rollover.png",
      "horizontalAlign": "center",
      "click": "this.mainPlayList.set('selectedIndex', 6)",
      "cursor": "hand",
      "paddingBottom": 0,
      "maxHeight": 1052,
      "minWidth": 1,
      "class": "IconButton",
      "shadow": false,
      "id": "IconButton_1FCDD1EC_3A41_BB00_41C5_40B934E107FD",
      "minHeight": 1,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "maxWidth": 1047
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "push",
      "width": 42,
      "paddingLeft": 0,
      "height": 57,
      "iconURL": "skin/IconButton_1F60FA0A_3A41_A900_41B0_37806583DDFA.png",
      "transparencyActive": false,
      "borderRadius": 0,
      "borderSize": 0,
      "rollOverIconURL": "skin/IconButton_1F60FA0A_3A41_A900_41B0_37806583DDFA_rollover.png",
      "horizontalAlign": "center",
      "click": "this.mainPlayList.set('selectedIndex', 8)",
      "cursor": "hand",
      "paddingBottom": 0,
      "maxHeight": 1052,
      "minWidth": 1,
      "class": "IconButton",
      "shadow": false,
      "id": "IconButton_1F60FA0A_3A41_A900_41B0_37806583DDFA",
      "minHeight": 1,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "maxWidth": 1047
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "push",
      "width": 42,
      "paddingLeft": 0,
      "height": 57,
      "iconURL": "skin/IconButton_1F6F3FC2_3A42_6703_41B1_8F08A62DBDEF.png",
      "transparencyActive": false,
      "borderRadius": 0,
      "borderSize": 0,
      "rollOverIconURL": "skin/IconButton_1F6F3FC2_3A42_6703_41B1_8F08A62DBDEF_rollover.png",
      "horizontalAlign": "center",
      "click": "this.mainPlayList.set('selectedIndex', 9)",
      "cursor": "hand",
      "paddingBottom": 0,
      "maxHeight": 1052,
      "minWidth": 1,
      "class": "IconButton",
      "shadow": false,
      "id": "IconButton_1F6F3FC2_3A42_6703_41B1_8F08A62DBDEF",
      "minHeight": 1,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "maxWidth": 1047
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "push",
      "width": 42,
      "paddingLeft": 0,
      "height": 57,
      "iconURL": "skin/IconButton_19D163A9_3C7E_F3DE_41A3_87FA2E93B35E.png",
      "transparencyActive": false,
      "borderRadius": 0,
      "borderSize": 0,
      "rollOverIconURL": "skin/IconButton_19D163A9_3C7E_F3DE_41A3_87FA2E93B35E_rollover.png",
      "horizontalAlign": "center",
      "click": "this.mainPlayList.set('selectedIndex', 11)",
      "cursor": "hand",
      "paddingBottom": 0,
      "maxHeight": 1052,
      "minWidth": 1,
      "class": "IconButton",
      "shadow": false,
      "id": "IconButton_19D163A9_3C7E_F3DE_41A3_87FA2E93B35E",
      "minHeight": 1,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "maxWidth": 1047
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "push",
      "width": 42,
      "paddingLeft": 0,
      "height": 57,
      "iconURL": "skin/IconButton_1FB96738_3C7E_733E_41C6_983EE3914862.png",
      "transparencyActive": false,
      "borderRadius": 0,
      "borderSize": 0,
      "rollOverIconURL": "skin/IconButton_1FB96738_3C7E_733E_41C6_983EE3914862_rollover.png",
      "horizontalAlign": "center",
      "click": "this.mainPlayList.set('selectedIndex', 14)",
      "cursor": "hand",
      "paddingBottom": 0,
      "maxHeight": 1052,
      "minWidth": 1,
      "class": "IconButton",
      "shadow": false,
      "id": "IconButton_1FB96738_3C7E_733E_41C6_983EE3914862",
      "minHeight": 1,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "maxWidth": 1047
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "push",
      "width": 42,
      "paddingLeft": 0,
      "height": 57,
      "iconURL": "skin/IconButton_1847A9CB_3C7E_DF51_419A_4CF09BBDE896.png",
      "transparencyActive": false,
      "borderRadius": 0,
      "borderSize": 0,
      "rollOverIconURL": "skin/IconButton_1847A9CB_3C7E_DF51_419A_4CF09BBDE896_rollover.png",
      "horizontalAlign": "center",
      "click": "this.mainPlayList.set('selectedIndex', 17)",
      "cursor": "hand",
      "paddingBottom": 0,
      "maxHeight": 1052,
      "minWidth": 1,
      "class": "IconButton",
      "shadow": false,
      "id": "IconButton_1847A9CB_3C7E_DF51_419A_4CF09BBDE896",
      "minHeight": 1,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "maxWidth": 1047
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "push",
      "width": 42,
      "paddingLeft": 0,
      "height": 57,
      "iconURL": "skin/IconButton_1EBE6D84_3C7A_D7D6_41B3_9EAE2E7C9BD7.png",
      "transparencyActive": false,
      "borderRadius": 0,
      "borderSize": 0,
      "rollOverIconURL": "skin/IconButton_1EBE6D84_3C7A_D7D6_41B3_9EAE2E7C9BD7_rollover.png",
      "horizontalAlign": "center",
      "click": "this.mainPlayList.set('selectedIndex', 19)",
      "cursor": "hand",
      "paddingBottom": 0,
      "maxHeight": 1052,
      "minWidth": 1,
      "class": "IconButton",
      "shadow": false,
      "id": "IconButton_1EBE6D84_3C7A_D7D6_41B3_9EAE2E7C9BD7",
      "minHeight": 1,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "maxWidth": 1047
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "push",
      "width": 42,
      "paddingLeft": 0,
      "height": 57,
      "iconURL": "skin/IconButton_1F48A18A_3C7B_EFD2_4197_7BC93E0D00E8.png",
      "transparencyActive": false,
      "borderRadius": 0,
      "borderSize": 0,
      "rollOverIconURL": "skin/IconButton_1F48A18A_3C7B_EFD2_4197_7BC93E0D00E8_rollover.png",
      "horizontalAlign": "center",
      "click": "this.mainPlayList.set('selectedIndex', 20)",
      "cursor": "hand",
      "paddingBottom": 0,
      "maxHeight": 1052,
      "minWidth": 1,
      "class": "IconButton",
      "shadow": false,
      "id": "IconButton_1F48A18A_3C7B_EFD2_4197_7BC93E0D00E8",
      "minHeight": 1,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "maxWidth": 1047
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "push",
      "width": 42,
      "paddingLeft": 0,
      "height": 57,
      "iconURL": "skin/IconButton_1ED2DB23_3C7A_5CD2_41CC_37ABD2998C29.png",
      "transparencyActive": false,
      "borderRadius": 0,
      "borderSize": 0,
      "rollOverIconURL": "skin/IconButton_1ED2DB23_3C7A_5CD2_41CC_37ABD2998C29_rollover.png",
      "horizontalAlign": "center",
      "click": "this.mainPlayList.set('selectedIndex', 22)",
      "cursor": "hand",
      "paddingBottom": 0,
      "maxHeight": 1052,
      "minWidth": 1,
      "class": "IconButton",
      "shadow": false,
      "id": "IconButton_1ED2DB23_3C7A_5CD2_41CC_37ABD2998C29",
      "minHeight": 1,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "maxWidth": 1047
     }
    ],
    "verticalAlign": "middle",
    "scrollBarVisible": "always"
   },
   {
    "scrollBarColor": "#000000",
    "overflow": "scroll",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "paddingLeft": 0,
    "height": "31.818%",
    "width": "100%",
    "borderRadius": 0,
    "borderSize": 0,
    "gap": 10,
    "contentOpaque": false,
    "layout": "horizontal",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "horizontalAlign": "left",
    "paddingBottom": 0,
    "minWidth": 1,
    "shadow": false,
    "id": "Container_1E119C21_3A42_6900_41C0_3CA47D3C242A",
    "class": "Container",
    "minHeight": 1,
    "paddingTop": 0,
    "backgroundOpacity": 0,
    "children": [
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "push",
      "width": 35,
      "paddingLeft": 0,
      "height": 35,
      "iconURL": "skin/IconButton_249849C4_3A42_EB07_41C4_34AFE0395A2F.png",
      "transparencyActive": false,
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "click": "this.setComponentVisibility(this.Container_048CC2F3_11E9_4B79_4186_517CBA014E52, true, 0, null, null, false); this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1, false, 0, null, null, false)",
      "cursor": "hand",
      "paddingBottom": 0,
      "maxHeight": 84,
      "minWidth": 1,
      "class": "IconButton",
      "shadow": false,
      "id": "IconButton_249849C4_3A42_EB07_41C4_34AFE0395A2F",
      "minHeight": 1,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "maxWidth": 84
     }
    ],
    "verticalAlign": "middle",
    "scrollBarVisible": "rollOver"
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
  "paddingLeft": 0,
  "height": "48.804%",
  "width": "99.337%",
  "borderRadius": 0,
  "borderSize": 0,
  "gap": 3,
  "contentOpaque": false,
  "layout": "absolute",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "horizontalAlign": "left",
  "top": "2.92%",
  "paddingBottom": 0,
  "minWidth": 1,
  "shadow": false,
  "id": "Container_0A0F57B0_11E6_8E48_4165_04342D4A22BC",
  "class": "Container",
  "minHeight": 1,
  "paddingTop": 0,
  "backgroundOpacity": 0,
  "right": "0%",
  "children": [
   {
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "width": 38.1,
    "paddingLeft": 0,
    "height": "99.332%",
    "layout": "absolute",
    "borderRadius": 0,
    "borderSize": 0,
    "gap": 10,
    "contentOpaque": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "horizontalAlign": "left",
    "top": 0,
    "paddingBottom": 0,
    "minWidth": 1,
    "class": "Container",
    "shadow": false,
    "id": "Container_03416CBF_1280_710E_4175_84AC659A193B",
    "minHeight": 1,
    "paddingTop": 0,
    "left": 14,
    "backgroundOpacity": 0,
    "children": [
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "push",
      "width": 35,
      "paddingLeft": 0,
      "height": 35,
      "iconURL": "skin/IconButton_29D9B918_3A5E_6B0F_41A2_1E183D537C65.png",
      "transparencyActive": false,
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "top": "0%",
      "click": "this.setComponentVisibility(this.IconButton_29D9B918_3A5E_6B0F_41A2_1E183D537C65, false, 0, null, null, false); this.setComponentVisibility(this.MapViewer, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2803122B_3A42_5901_4195_B932A21E4536, true, 0, null, null, false)",
      "cursor": "hand",
      "visible": false,
      "paddingBottom": 0,
      "maxHeight": 108,
      "minWidth": 1,
      "class": "IconButton",
      "shadow": false,
      "id": "IconButton_29D9B918_3A5E_6B0F_41A2_1E183D537C65",
      "minHeight": 1,
      "paddingTop": 0,
      "left": "0%",
      "backgroundOpacity": 0,
      "maxWidth": 108
     },
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "push",
      "width": 35,
      "paddingLeft": 0,
      "height": 35,
      "iconURL": "skin/IconButton_2803122B_3A42_5901_4195_B932A21E4536.png",
      "transparencyActive": false,
      "borderRadius": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "top": "0%",
      "click": "this.setComponentVisibility(this.IconButton_2803122B_3A42_5901_4195_B932A21E4536, false, 0, null, null, false); this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1, true, 0, null, null, false)",
      "cursor": "hand",
      "paddingBottom": 0,
      "maxHeight": 108,
      "minWidth": 1,
      "class": "IconButton",
      "shadow": false,
      "id": "IconButton_2803122B_3A42_5901_4195_B932A21E4536",
      "minHeight": 1,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "maxWidth": 108,
      "right": "-2.13%"
     }
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
  "paddingLeft": 0,
  "height": "100%",
  "width": "100%",
  "borderRadius": 0,
  "borderSize": 0,
  "gap": 10,
  "contentOpaque": false,
  "layout": "absolute",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "horizontalAlign": "center",
  "top": "0%",
  "paddingBottom": 0,
  "minWidth": 1,
  "backgroundColorRatios": [
   0,
   1
  ],
  "id": "Container_048CC2F3_11E9_4B79_4186_517CBA014E52",
  "class": "Container",
  "shadow": false,
  "minHeight": 1,
  "paddingTop": 0,
  "left": "0%",
  "backgroundOpacity": 0.3,
  "children": [
   {
    "paddingRight": 0,
    "paddingLeft": 0,
    "height": "100%",
    "width": "100%",
    "borderRadius": 0,
    "borderSize": 0,
    "url": "skin/Image_19B2F4BC_0BF1_B12F_419C_772DA37A7B15.png",
    "horizontalAlign": "center",
    "scaleMode": "fit_outside",
    "click": "eval('var frame=+location.search.replace(\"?\", \"\");if (!frame) {frame = 0;}if (typeof setMediaByIndex === \"function\") {localStorage.setItem(\"displayIndex\", frame);setMediaByIndex(frame);}');",
    "top": 0,
    "paddingBottom": 0,
    "minWidth": 1,
    "shadow": false,
    "id": "Image_19B2F4BC_0BF1_B12F_419C_772DA37A7B15",
    "class": "Image",
    "minHeight": 1,
    "paddingTop": 0,
    "left": -0.04,
    "backgroundOpacity": 0,
    "verticalAlign": "middle"
   },
   {
    "scrollBarColor": "#000000",
    "overflow": "scroll",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "paddingLeft": 0,
    "height": "88.587%",
    "width": "60.736%",
    "borderRadius": 0,
    "borderSize": 0,
    "gap": 4,
    "contentOpaque": false,
    "layout": "vertical",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "horizontalAlign": "center",
    "top": "2.62%",
    "paddingBottom": 0,
    "minWidth": 1,
    "shadow": false,
    "id": "Container_3533313B_3A04_0067_41CC_CF6BC934FA11",
    "class": "Container",
    "minHeight": 1,
    "paddingTop": 0,
    "left": "18.69%",
    "backgroundOpacity": 0,
    "children": [
     {
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "paddingLeft": 0,
      "height": "10.152%",
      "width": "92.083%",
      "borderRadius": 0,
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "layout": "horizontal",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "horizontalAlign": "center",
      "paddingBottom": 0,
      "minWidth": 1,
      "shadow": false,
      "id": "Container_3764A1B8_3A04_0061_41BF_1DB9D8261A18",
      "class": "Container",
      "minHeight": 1,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "children": [
       {
        "paddingRight": 0,
        "paddingLeft": 0,
        "height": "73.333%",
        "width": "79.193%",
        "borderRadius": 0,
        "borderSize": 0,
        "url": "skin/Image_374B2C06_3A0C_0020_41B2_5F6D50FC5E5F.png",
        "horizontalAlign": "center",
        "scaleMode": "fit_inside",
        "paddingBottom": 0,
        "maxHeight": 61,
        "minWidth": 1,
        "shadow": false,
        "id": "Image_374B2C06_3A0C_0020_41B2_5F6D50FC5E5F",
        "class": "Image",
        "minHeight": 1,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "maxWidth": 500,
        "verticalAlign": "middle"
       }
      ],
      "verticalAlign": "bottom",
      "scrollBarVisible": "rollOver"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "paddingLeft": 0,
      "height": "1.764%",
      "width": "100%",
      "borderRadius": 0,
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "layout": "absolute",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "horizontalAlign": "left",
      "paddingBottom": 0,
      "minWidth": 1,
      "shadow": false,
      "id": "Container_37A327EA_3A3C_0FE1_4199_D3E659A2D12F",
      "class": "Container",
      "minHeight": 1,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "verticalAlign": "top",
      "scrollBarVisible": "rollOver"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "visible",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "paddingLeft": 0,
      "height": "7.327%",
      "width": "99.94%",
      "borderRadius": 0,
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "layout": "horizontal",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "horizontalAlign": "center",
      "paddingBottom": 0,
      "minWidth": 1,
      "shadow": false,
      "id": "Container_37118E52_3A43_A900_41B3_99441E93A49B",
      "class": "Container",
      "minHeight": 1,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "children": [
       {
        "scrollBarColor": "#000000",
        "overflow": "visible",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "paddingLeft": 0,
        "height": "86.667%",
        "width": "99.901%",
        "borderRadius": 0,
        "borderSize": 0,
        "gap": 6,
        "contentOpaque": false,
        "layout": "horizontal",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "horizontalAlign": "center",
        "paddingBottom": 0,
        "minWidth": 1,
        "shadow": false,
        "id": "Container_3783528D_3A0C_0023_417F_D3D15240B4C7",
        "class": "Container",
        "minHeight": 1,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "scrollBarColor": "#000000",
          "overflow": "scroll",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "paddingLeft": 0,
          "height": "97.297%",
          "width": "10.55%",
          "borderRadius": 0,
          "borderSize": 0,
          "gap": 10,
          "contentOpaque": false,
          "layout": "horizontal",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "horizontalAlign": "center",
          "paddingBottom": 0,
          "minWidth": 1,
          "shadow": false,
          "id": "Container_3716DC42_3A42_6903_41C0_A36003727C4F",
          "class": "Container",
          "minHeight": 1,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "children": [
           {
            "paddingRight": 0,
            "paddingLeft": 0,
            "height": "96%",
            "width": "95.833%",
            "borderRadius": 0,
            "borderSize": 0,
            "url": "skin/Image_3540BF2F_3A0C_007F_41C4_9B80703F60DF.png",
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "paddingBottom": 0,
            "maxHeight": 108,
            "minWidth": 1,
            "shadow": false,
            "id": "Image_3540BF2F_3A0C_007F_41C4_9B80703F60DF",
            "class": "Image",
            "minHeight": 1,
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "maxWidth": 108,
            "verticalAlign": "middle"
           }
          ],
          "verticalAlign": "middle",
          "scrollBarVisible": "rollOver"
         },
         {
          "scrollBarColor": "#000000",
          "overflow": "scroll",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "paddingLeft": 0,
          "height": "97.297%",
          "width": "10.549%",
          "borderRadius": 0,
          "borderSize": 0,
          "gap": 10,
          "contentOpaque": false,
          "layout": "horizontal",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "horizontalAlign": "center",
          "paddingBottom": 0,
          "minWidth": 1,
          "shadow": false,
          "id": "Container_3695443E_3A42_B900_41BB_420473422841",
          "class": "Container",
          "minHeight": 1,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "children": [
           {
            "paddingRight": 0,
            "paddingLeft": 0,
            "height": "96%",
            "width": "95.83%",
            "borderRadius": 0,
            "borderSize": 0,
            "url": "skin/Image_37E178D8_3A0C_0021_41C9_1ABD150FD584.png",
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "paddingBottom": 0,
            "maxHeight": 108,
            "minWidth": 1,
            "shadow": false,
            "id": "Image_37E178D8_3A0C_0021_41C9_1ABD150FD584",
            "class": "Image",
            "minHeight": 1,
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "maxWidth": 108,
            "verticalAlign": "middle"
           }
          ],
          "verticalAlign": "middle",
          "scrollBarVisible": "rollOver"
         },
         {
          "scrollBarColor": "#000000",
          "overflow": "scroll",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "paddingLeft": 0,
          "height": "97.297%",
          "width": "46.753%",
          "borderRadius": 0,
          "borderSize": 0,
          "gap": 10,
          "contentOpaque": false,
          "layout": "horizontal",
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "horizontalAlign": "center",
          "paddingBottom": 0,
          "minWidth": 1,
          "shadow": false,
          "id": "Container_377230ED_3A43_B900_4161_0C9E912D04EC",
          "class": "Container",
          "minHeight": 1,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "children": [
           {
            "paddingRight": 0,
            "paddingLeft": 0,
            "height": "70.59%",
            "width": "99.138%",
            "borderRadius": 0,
            "borderSize": 0,
            "url": "skin/Image_37D83EB6_3A0C_0061_41C6_D666B149EE07.png",
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "paddingBottom": 0,
            "maxHeight": 40,
            "minWidth": 1,
            "shadow": false,
            "id": "Image_37D83EB6_3A0C_0061_41C6_D666B149EE07",
            "class": "Image",
            "minHeight": 1,
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "maxWidth": 275,
            "verticalAlign": "middle"
           }
          ],
          "verticalAlign": "middle",
          "scrollBarVisible": "rollOver"
         }
        ],
        "verticalAlign": "middle",
        "scrollBarVisible": "rollOver"
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
      "paddingLeft": 0,
      "height": "1.227%",
      "width": "99.858%",
      "borderRadius": 0,
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "layout": "horizontal",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "horizontalAlign": "center",
      "paddingBottom": 0,
      "minWidth": 1,
      "shadow": false,
      "id": "Container_290A2AD9_3BF6_5D7E_41C3_1E444A5BBC71",
      "class": "Container",
      "minHeight": 1,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "children": [
       {
        "paddingRight": 0,
        "width": 726,
        "paddingLeft": 0,
        "height": 2,
        "borderRadius": 0,
        "borderSize": 0,
        "url": "skin/Image_285CB42E_3BF6_D4D3_41A3_9A8D7F05B2C3.png",
        "horizontalAlign": "center",
        "scaleMode": "fit_inside",
        "paddingBottom": 0,
        "maxHeight": 2,
        "minWidth": 1,
        "class": "Image",
        "shadow": false,
        "id": "Image_285CB42E_3BF6_D4D3_41A3_9A8D7F05B2C3",
        "minHeight": 1,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "maxWidth": 726,
        "verticalAlign": "middle"
       }
      ],
      "verticalAlign": "middle",
      "scrollBarVisible": "rollOver"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "paddingLeft": 0,
      "height": "4.342%",
      "width": "100%",
      "borderRadius": 0,
      "borderSize": 0,
      "gap": 5,
      "contentOpaque": false,
      "layout": "horizontal",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "horizontalAlign": "center",
      "paddingBottom": 0,
      "minWidth": 1,
      "shadow": false,
      "id": "Container_34FB5B25_3A3C_0063_41C8_57AAEAD2087C",
      "class": "Container",
      "minHeight": 1,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "children": [
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "paddingLeft": 0,
        "height": "100%",
        "width": "13.477%",
        "borderRadius": 0,
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "layout": "horizontal",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "horizontalAlign": "center",
        "paddingBottom": 0,
        "minWidth": 1,
        "shadow": false,
        "id": "Container_357D9BEA_3AC2_AF00_41CB_19180254F021",
        "class": "Container",
        "minHeight": 1,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "paddingLeft": 0,
          "height": "97.14%",
          "width": "86.03%",
          "borderRadius": 0,
          "borderSize": 0,
          "url": "skin/Image_37917A60_3A0C_00E1_41C5_991EF69487EC.png",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "paddingBottom": 0,
          "maxHeight": 45,
          "minWidth": 1,
          "shadow": false,
          "id": "Image_37917A60_3A0C_00E1_41C5_991EF69487EC",
          "class": "Image",
          "minHeight": 1,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "maxWidth": 117,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle",
        "scrollBarVisible": "rollOver"
       },
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "paddingLeft": 0,
        "height": "100%",
        "width": "14.091%",
        "borderRadius": 0,
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "layout": "horizontal",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "horizontalAlign": "center",
        "paddingBottom": 0,
        "minWidth": 1,
        "shadow": false,
        "id": "Container_3571F98A_3AC6_AB00_41C5_660EE04AD975",
        "class": "Container",
        "minHeight": 1,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "paddingLeft": 0,
          "height": "100%",
          "width": "97.183%",
          "borderRadius": 0,
          "borderSize": 0,
          "url": "skin/Image_34518027_3A04_006F_41BB_EE3C665B25DF.png",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "paddingBottom": 0,
          "maxHeight": 243,
          "minWidth": 1,
          "shadow": false,
          "id": "Image_34518027_3A04_006F_41BB_EE3C665B25DF",
          "class": "Image",
          "minHeight": 1,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "maxWidth": 258,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle",
        "scrollBarVisible": "rollOver"
       },
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "paddingLeft": 0,
        "height": "100%",
        "width": "39.063%",
        "borderRadius": 0,
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "layout": "horizontal",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "horizontalAlign": "center",
        "paddingBottom": 0,
        "minWidth": 1,
        "shadow": false,
        "id": "Container_2A91CA77_3AC7_A900_41B9_43489B29B672",
        "class": "Container",
        "minHeight": 1,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "paddingLeft": 0,
          "height": "97.14%",
          "width": "99.491%",
          "borderRadius": 0,
          "borderSize": 0,
          "url": "skin/Image_3427C160_3A0C_00E0_41C0_462626DB2AAE.png",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "paddingBottom": 0,
          "maxHeight": 45,
          "minWidth": 1,
          "shadow": false,
          "id": "Image_3427C160_3A0C_00E0_41C0_462626DB2AAE",
          "class": "Image",
          "minHeight": 1,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "maxWidth": 408,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle",
        "scrollBarVisible": "rollOver"
       },
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "paddingLeft": 0,
        "height": "100%",
        "width": "12.305%",
        "borderRadius": 0,
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "layout": "horizontal",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "horizontalAlign": "center",
        "paddingBottom": 0,
        "minWidth": 1,
        "shadow": false,
        "id": "Container_35A8B233_3AC6_B900_41A6_1E7D94E0E689",
        "class": "Container",
        "minHeight": 1,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "paddingLeft": 0,
          "height": "100%",
          "width": "100%",
          "borderRadius": 0,
          "borderSize": 0,
          "url": "skin/Image_34309FE8_3A0C_7FE1_41C0_E4200753053D.png",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "paddingBottom": 0,
          "maxHeight": 1094,
          "minWidth": 1,
          "shadow": false,
          "id": "Image_34309FE8_3A0C_7FE1_41C0_E4200753053D",
          "class": "Image",
          "minHeight": 1,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "maxWidth": 1096,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle",
        "scrollBarVisible": "rollOver"
       }
      ],
      "verticalAlign": "middle",
      "scrollBarVisible": "rollOver"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "visible",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "paddingLeft": 0,
      "height": "7.276%",
      "width": "100%",
      "borderRadius": 0,
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "layout": "horizontal",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "horizontalAlign": "center",
      "paddingBottom": 0,
      "minWidth": 1,
      "shadow": false,
      "id": "Container_36B2B434_3A4E_B907_41BF_2EF267CB899D",
      "class": "Container",
      "minHeight": 1,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "children": [
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "paddingLeft": 0,
        "height": "97.67%",
        "width": "83.008%",
        "borderRadius": 0,
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "layout": "horizontal",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "horizontalAlign": "center",
        "paddingBottom": 0,
        "minWidth": 1,
        "shadow": false,
        "id": "Container_2A9982D6_3AC2_B903_4196_183817BA9826",
        "class": "Container",
        "minHeight": 1,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "paddingLeft": 0,
          "height": "64.407%",
          "width": "87.799%",
          "borderRadius": 0,
          "borderSize": 0,
          "url": "skin/Image_34A3C85B_3A0C_0027_41B6_C09A77E73AB1.png",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "paddingBottom": 0,
          "maxHeight": 49,
          "minWidth": 1,
          "shadow": false,
          "id": "Image_34A3C85B_3A0C_0027_41B6_C09A77E73AB1",
          "class": "Image",
          "minHeight": 1,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "maxWidth": 734,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle",
        "scrollBarVisible": "rollOver"
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
      "paddingLeft": 0,
      "height": "2.454%",
      "width": "100%",
      "borderRadius": 0,
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "layout": "horizontal",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "horizontalAlign": "center",
      "paddingBottom": 0,
      "minWidth": 1,
      "shadow": false,
      "id": "Container_29B9E995_3BFA_DFF1_41C5_B692E7663F76",
      "class": "Container",
      "minHeight": 1,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "children": [
       {
        "paddingRight": 0,
        "width": 726,
        "paddingLeft": 0,
        "height": 2,
        "borderRadius": 0,
        "borderSize": 0,
        "url": "skin/Image_2A70BEF1_3BFA_754E_41A1_D377ED2E5E7C.png",
        "horizontalAlign": "center",
        "scaleMode": "fit_inside",
        "paddingBottom": 0,
        "maxHeight": 2,
        "minWidth": 1,
        "class": "Image",
        "shadow": false,
        "id": "Image_2A70BEF1_3BFA_754E_41A1_D377ED2E5E7C",
        "minHeight": 1,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "maxWidth": 726,
        "verticalAlign": "middle"
       }
      ],
      "verticalAlign": "middle",
      "scrollBarVisible": "rollOver"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "paddingLeft": 0,
      "height": "6.937%",
      "width": "100%",
      "borderRadius": 0,
      "borderSize": 0,
      "gap": 4,
      "contentOpaque": false,
      "layout": "horizontal",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "horizontalAlign": "center",
      "paddingBottom": 0,
      "minWidth": 1,
      "shadow": false,
      "id": "Container_34AD67FD_3A04_0FE3_41CA_6C2C56155F84",
      "class": "Container",
      "minHeight": 1,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "children": [
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "paddingLeft": 0,
        "height": "62.5%",
        "width": "13.505%",
        "borderRadius": 0,
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "layout": "horizontal",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "horizontalAlign": "center",
        "paddingBottom": 0,
        "minWidth": 1,
        "shadow": false,
        "id": "Container_2ABC116A_3AC3_DB00_4194_EFC4CB10B92F",
        "class": "Container",
        "minHeight": 1,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "paddingLeft": 0,
          "height": "97.14%",
          "width": "86.03%",
          "borderRadius": 0,
          "borderSize": 0,
          "url": "skin/Image_346BFEE5_3A04_01E0_41C6_7BF64C950C0A.png",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "paddingBottom": 0,
          "maxHeight": 45,
          "minWidth": 1,
          "shadow": false,
          "id": "Image_346BFEE5_3A04_01E0_41C6_7BF64C950C0A",
          "class": "Image",
          "minHeight": 1,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "maxWidth": 117,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle",
        "scrollBarVisible": "rollOver"
       },
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "paddingLeft": 0,
        "height": "100%",
        "width": "12.891%",
        "borderRadius": 0,
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "layout": "horizontal",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "horizontalAlign": "center",
        "paddingBottom": 0,
        "minWidth": 1,
        "shadow": false,
        "id": "Container_2AD5AA08_3AC6_A90F_41C9_220344DA9D3F",
        "class": "Container",
        "minHeight": 1,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "paddingLeft": 0,
          "height": "83.33%",
          "width": "85.42%",
          "borderRadius": 0,
          "borderSize": 0,
          "url": "skin/Image_2A4B2A14_3A04_0021_41BB_15D62AD6CC93.png",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "paddingBottom": 0,
          "maxHeight": 222,
          "minWidth": 1,
          "shadow": false,
          "id": "Image_2A4B2A14_3A04_0021_41BB_15D62AD6CC93",
          "class": "Image",
          "minHeight": 1,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "maxWidth": 222,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle",
        "scrollBarVisible": "rollOver"
       },
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "paddingLeft": 0,
        "height": "67.857%",
        "width": "54.618%",
        "borderRadius": 0,
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "layout": "horizontal",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "horizontalAlign": "center",
        "paddingBottom": 0,
        "minWidth": 1,
        "shadow": false,
        "id": "Container_2A20B5B4_3AC6_5B00_41C3_40F3BE7BE1C5",
        "class": "Container",
        "minHeight": 1,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "paddingLeft": 0,
          "height": "84.211%",
          "width": "83.455%",
          "borderRadius": 0,
          "borderSize": 0,
          "url": "skin/Image_37EAE4A5_3A04_0062_41C3_451CBF5B96AA.png",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "paddingBottom": 0,
          "maxHeight": 41,
          "minWidth": 1,
          "shadow": false,
          "id": "Image_37EAE4A5_3A04_0062_41C3_451CBF5B96AA",
          "class": "Image",
          "minHeight": 1,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "maxWidth": 459,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle",
        "scrollBarVisible": "rollOver"
       }
      ],
      "verticalAlign": "middle",
      "scrollBarVisible": "rollOver"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "paddingLeft": 0,
      "height": "5.834%",
      "width": "100%",
      "borderRadius": 0,
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "layout": "horizontal",
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "horizontalAlign": "center",
      "paddingBottom": 0,
      "minWidth": 1,
      "shadow": false,
      "id": "Container_37E2874E_3A1C_0021_41C0_98E65FDF63B2",
      "class": "Container",
      "minHeight": 1,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "children": [
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "paddingLeft": 0,
        "height": "100%",
        "width": "33.984%",
        "borderRadius": 0,
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "layout": "horizontal",
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "horizontalAlign": "center",
        "paddingBottom": 0,
        "minWidth": 1,
        "shadow": false,
        "id": "Container_2ADC0983_3AC2_6B01_41CA_4E98B5357DFD",
        "class": "Container",
        "minHeight": 1,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "paddingLeft": 0,
          "height": "70.833%",
          "width": "86.842%",
          "borderRadius": 0,
          "borderSize": 0,
          "url": "skin/Image_348B3F6A_3A1C_00E1_41C6_ECDDCEC7AD0A.png",
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "paddingBottom": 0,
          "maxHeight": 44,
          "minWidth": 1,
          "shadow": false,
          "id": "Image_348B3F6A_3A1C_00E1_41C6_ECDDCEC7AD0A",
          "class": "Image",
          "minHeight": 1,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "maxWidth": 297,
          "verticalAlign": "middle"
         }
        ],
        "verticalAlign": "middle",
        "scrollBarVisible": "rollOver"
       }
      ],
      "verticalAlign": "middle",
      "scrollBarVisible": "rollOver"
     }
    ],
    "verticalAlign": "middle",
    "scrollBarVisible": "rollOver"
   },
   {
    "scrollBarColor": "#000000",
    "overflow": "scroll",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "paddingLeft": 0,
    "height": "12.935%",
    "width": "100%",
    "borderRadius": 0,
    "borderSize": 0,
    "gap": 10,
    "contentOpaque": false,
    "layout": "absolute",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "horizontalAlign": "left",
    "top": "0%",
    "paddingBottom": 0,
    "minWidth": 1,
    "shadow": false,
    "id": "Container_3038C9F6_3C5B_0ECF_41CA_CAE8FB6F0CE1",
    "class": "Container",
    "minHeight": 1,
    "paddingTop": 0,
    "left": "0%",
    "backgroundOpacity": 0,
    "children": [
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "push",
      "paddingLeft": 0,
      "height": "24.299%",
      "width": "8.444%",
      "iconURL": "skin/IconButton_3733F6B1_3A43_D900_41C0_740B1687B1C2.png",
      "transparencyActive": false,
      "borderRadius": 0,
      "borderSize": 0,
      "click": "this.setComponentVisibility(this.Container_048CC2F3_11E9_4B79_4186_517CBA014E52, false, 0, null, null, false)",
      "horizontalAlign": "center",
      "top": "23.36%",
      "cursor": "hand",
      "paddingBottom": 0,
      "maxHeight": 72,
      "minWidth": 1,
      "shadow": false,
      "id": "IconButton_3733F6B1_3A43_D900_41C0_740B1687B1C2",
      "class": "IconButton",
      "minHeight": 1,
      "paddingTop": 0,
      "left": "2.46%",
      "backgroundOpacity": 0,
      "maxWidth": 72
     }
    ],
    "verticalAlign": "top",
    "scrollBarVisible": "rollOver"
   }
  ],
  "verticalAlign": "middle",
  "scrollBarVisible": "rollOver"
 },
 {
  "scrollBarColor": "#000000",
  "overflow": "visible",
  "scrollBarOpacity": 0.5,
  "paddingRight": 0,
  "width": 680,
  "paddingLeft": 0,
  "height": 265,
  "layout": "absolute",
  "borderRadius": 9,
  "borderSize": 0,
  "gap": 4,
  "contentOpaque": false,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "horizontalAlign": "left",
  "top": "2.48%",
  "visible": false,
  "paddingBottom": 0,
  "minWidth": 1,
  "class": "Container",
  "shadow": false,
  "id": "Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943",
  "minHeight": 1,
  "paddingTop": 0,
  "left": "0.05%",
  "backgroundOpacity": 0,
  "children": [
   "this.MapViewer",
   {
    "verticalAlign": "middle",
    "paddingRight": 0,
    "mode": "push",
    "width": 35,
    "paddingLeft": 0,
    "height": 35,
    "iconURL": "skin/IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1.png",
    "transparencyActive": false,
    "borderRadius": 0,
    "borderSize": 0,
    "horizontalAlign": "center",
    "top": "0.85%",
    "click": "this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2803122B_3A42_5901_4195_B932A21E4536, true, 0, null, null, false)",
    "cursor": "hand",
    "paddingBottom": 0,
    "maxHeight": 108,
    "minWidth": 1,
    "class": "IconButton",
    "shadow": false,
    "id": "IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1",
    "minHeight": 1,
    "paddingTop": 0,
    "left": "4.08%",
    "backgroundOpacity": 0,
    "maxWidth": 108
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
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "backgroundPreloadEnabled": true,
 "paddingBottom": 0,
 "minWidth": 20,
 "scripts": {
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "existsKey": function(key){  return key in window; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "unregisterKey": function(key){  delete window[key]; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getKey": function(key){  return window[key]; },
  "registerKey": function(key, value){  window[key] = value; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); }
 },
 "id": "rootPlayer",
 "class": "Player",
 "vrPolyfillScale": 1,
 "shadow": false,
 "minHeight": 20,
 "paddingTop": 0,
 "start": "this.mainPlayList.set('selectedIndex', 0); this.playList_32F9E3A4_3C59_0343_418C_B4407EB758E6.set('selectedIndex', 0)",
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver"
})