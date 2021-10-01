TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "frames": [
   {
    "thumbnailUrl": "media/panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "id": "overlay_1723D9CD_06F1_2FEE_4195_F17AB1536320",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
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
        "hfov": 10.99,
        "pitch": -13.63
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
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
        "pitch": -13.63
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_305D80C4_3C32_C9AD_41CD_C92E2612E11E",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
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
        "hfov": 11.67,
        "pitch": -4.9
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_0FD85D6E_0673_DED7_40FD_D23817113C40, this.camera_2F36F0EB_3C4D_F925_41CB_ADB98AE7F1AB); this.mainPlayList.set('selectedIndex', 1); eval('localStorage.setItem(\"displayIndex\", 1);');"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
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
  "class": "Panorama",
  "cardboardMenu": {
   "selectedBackgroundColor": "#202020",
   "class": "Menu",
   "fontFamily": "Arial",
   "rollOverBackgroundColor": "#000000",
   "label": "Media",
   "backgroundColor": "#404040",
   "opacity": 0.4,
   "id": "Menu_2E7CEF52_3C4C_0767_41A7_471523985684",
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
   "rollOverFontColor": "#FFFFFF"
  },
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D_t.jpg",
  "id": "panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D",
  "mapLocations": [
   {
    "x": 311.48,
    "y": 134.01,
    "class": "PanoramaMapLocation",
    "angle": 111.8,
    "map": {
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
        "class": "ImageResourceLevel",
        "grayscale": true
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
       "rollOverDisplay": false,
       "id": "overlay_29AEA040_3A41_D900_41A4_C065DF834BAD",
       "map": {
        "offsetY": 0,
        "x": 300.73,
        "width": 21.5,
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
        "y": 123.05,
        "height": 21.92,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0
       },
       "class": "AreaHotspotMapOverlay",
       "image": {
        "x": 300.73,
        "y": 123.05,
        "width": 21.5,
        "height": 21.92,
        "class": "HotspotMapOverlayImage",
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
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 0)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_2FE028EB_3A7E_6901_41C5_355757798066",
       "map": {
        "offsetY": 0,
        "x": 345.6,
        "width": 21,
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
        "y": 142.39,
        "height": 21,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0
       },
       "class": "AreaHotspotMapOverlay",
       "image": {
        "x": 345.6,
        "y": 142.39,
        "width": 21,
        "height": 21,
        "class": "HotspotMapOverlayImage",
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
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 1)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_2E611FBB_3A7E_A700_41C9_8B6D1C26D8C6",
       "map": {
        "offsetY": 0,
        "x": 392.63,
        "width": 21,
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
        "y": 161.68,
        "height": 21,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0
       },
       "class": "AreaHotspotMapOverlay",
       "image": {
        "x": 392.63,
        "y": 161.68,
        "width": 21,
        "height": 21,
        "class": "HotspotMapOverlayImage",
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
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 2)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_2F94B01B_3A41_F901_41B2_A7221CDA962E",
       "map": {
        "offsetY": 0,
        "x": 443.29,
        "width": 21,
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
        "y": 184.43,
        "height": 21,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0
       },
       "class": "AreaHotspotMapOverlay",
       "image": {
        "x": 443.29,
        "y": 184.43,
        "width": 21,
        "height": 21,
        "class": "HotspotMapOverlayImage",
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
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 3)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_2F2AF091_3A42_F901_41C2_278D59616BE9",
       "map": {
        "offsetY": 0,
        "x": 503.2,
        "width": 21,
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
        "y": 203.72,
        "height": 21,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0
       },
       "class": "AreaHotspotMapOverlay",
       "image": {
        "x": 503.2,
        "y": 203.72,
        "width": 21,
        "height": 21,
        "class": "HotspotMapOverlayImage",
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
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 4)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_2FD7D2D0_3A42_791F_41C1_A52580DFABE3",
       "map": {
        "offsetY": 0,
        "x": 536.73,
        "width": 21,
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
        "y": 217.96,
        "height": 21,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0
       },
       "class": "AreaHotspotMapOverlay",
       "image": {
        "x": 536.73,
        "y": 217.96,
        "width": 21,
        "height": 21,
        "class": "HotspotMapOverlayImage",
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
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 5)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_2CD436D3_3A42_7901_41B6_BA932CFA9D4F",
       "map": {
        "offsetY": 0,
        "x": 575.19,
        "width": 21,
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
        "y": 245.81,
        "height": 21,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0
       },
       "class": "AreaHotspotMapOverlay",
       "image": {
        "x": 575.19,
        "y": 245.81,
        "width": 21,
        "height": 21,
        "class": "HotspotMapOverlayImage",
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
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 6)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_2C2FAA19_3A46_A901_41AF_52E4607E0002",
       "map": {
        "offsetY": 0,
        "x": 625.79,
        "width": 21,
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
        "y": 208.65,
        "height": 21,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0
       },
       "class": "AreaHotspotMapOverlay",
       "image": {
        "x": 625.79,
        "y": 208.65,
        "width": 21,
        "height": 21,
        "class": "HotspotMapOverlayImage",
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
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 7)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_2DAFDF3D_3A47_E701_41C7_6C42516C32F9",
       "map": {
        "offsetY": 0,
        "x": 624.43,
        "width": 21,
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
        "y": 148.12,
        "height": 21,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0
       },
       "class": "AreaHotspotMapOverlay",
       "image": {
        "x": 624.43,
        "y": 148.12,
        "width": 21,
        "height": 21,
        "class": "HotspotMapOverlayImage",
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
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 8)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_2DB3429C_3A46_D907_41A1_5F52442CB33F",
       "map": {
        "offsetY": 0,
        "x": 675.77,
        "width": 21,
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
        "y": 240.08,
        "height": 21,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0
       },
       "class": "AreaHotspotMapOverlay",
       "image": {
        "x": 675.77,
        "y": 240.08,
        "width": 21,
        "height": 21,
        "class": "HotspotMapOverlayImage",
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
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 9)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_2C24E640_3A42_7900_41A1_0CAFF542BF8E",
       "map": {
        "offsetY": 0,
        "x": 737.04,
        "width": 21,
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
        "y": 239.35,
        "height": 21,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0
       },
       "class": "AreaHotspotMapOverlay",
       "image": {
        "x": 737.04,
        "y": 239.35,
        "width": 21,
        "height": 21,
        "class": "HotspotMapOverlayImage",
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
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 10)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_22971B09_3A43_AF01_415B_60C5EA13E0A8",
       "map": {
        "offsetY": 0,
        "x": 802,
        "width": 21,
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
        "y": 240.08,
        "height": 21,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0
       },
       "class": "AreaHotspotMapOverlay",
       "image": {
        "x": 802,
        "y": 240.08,
        "width": 21,
        "height": 21,
        "class": "HotspotMapOverlayImage",
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
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 11)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_22A39430_3A42_F91F_41C1_EF59BA985426",
       "map": {
        "offsetY": 0,
        "x": 847.61,
        "width": 21,
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
        "y": 240.08,
        "height": 21,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0
       },
       "class": "AreaHotspotMapOverlay",
       "image": {
        "x": 847.61,
        "y": 240.08,
        "width": 21,
        "height": 21,
        "class": "HotspotMapOverlayImage",
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
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 12)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_2285876A_3A41_A700_41B5_22CAD315240C",
       "map": {
        "offsetY": 0,
        "x": 888.28,
        "width": 21,
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
        "y": 242.92,
        "height": 21,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0
       },
       "class": "AreaHotspotMapOverlay",
       "image": {
        "x": 888.28,
        "y": 242.92,
        "width": 21,
        "height": 21,
        "class": "HotspotMapOverlayImage",
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
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 13)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_223AD664_3A4E_5900_4197_EBC53DA866E6",
       "map": {
        "offsetY": 0,
        "x": 936.73,
        "width": 21,
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
        "y": 241.5,
        "height": 21,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0
       },
       "class": "AreaHotspotMapOverlay",
       "image": {
        "x": 936.73,
        "y": 241.5,
        "width": 21,
        "height": 21,
        "class": "HotspotMapOverlayImage",
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
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 14)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_228F5BAB_3A4E_6F00_41BC_F466D72D81AF",
       "map": {
        "offsetY": 0,
        "x": 618.02,
        "width": 21,
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
        "y": 300.1,
        "height": 21,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0
       },
       "class": "AreaHotspotMapOverlay",
       "image": {
        "x": 618.02,
        "y": 300.1,
        "width": 21,
        "height": 21,
        "class": "HotspotMapOverlayImage",
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
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 15)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_22D1DDE7_3A4E_6B01_41AF_CB4B35E43873",
       "map": {
        "offsetY": 0,
        "x": 665.73,
        "width": 21,
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
        "y": 306.4,
        "height": 21,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0
       },
       "class": "AreaHotspotMapOverlay",
       "image": {
        "x": 665.73,
        "y": 306.4,
        "width": 21,
        "height": 21,
        "class": "HotspotMapOverlayImage",
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
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 16)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_23B489C3_3A4E_6B01_41A7_3A7F463CF95C",
       "map": {
        "offsetY": 0,
        "x": 664.31,
        "width": 21,
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
        "y": 333.52,
        "height": 21,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0
       },
       "class": "AreaHotspotMapOverlay",
       "image": {
        "x": 664.31,
        "y": 333.52,
        "width": 21,
        "height": 21,
        "class": "HotspotMapOverlayImage",
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
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 17)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_239497FF_3A42_A701_41C8_697189C38707",
       "map": {
        "offsetY": 0,
        "x": 660.11,
        "width": 21,
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
        "y": 376.29,
        "height": 21,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0
       },
       "class": "AreaHotspotMapOverlay",
       "image": {
        "x": 660.11,
        "y": 376.29,
        "width": 21,
        "height": 21,
        "class": "HotspotMapOverlayImage",
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
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 18)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_23D8CC03_3A43_A900_41A4_600962EFA975",
       "map": {
        "offsetY": 0,
        "x": 674.35,
        "width": 21,
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
        "y": 424.8,
        "height": 21,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0
       },
       "class": "AreaHotspotMapOverlay",
       "image": {
        "x": 674.35,
        "y": 424.8,
        "width": 21,
        "height": 21,
        "class": "HotspotMapOverlayImage",
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
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 19)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_20D27634_3A42_B907_41BF_E598077A4320",
       "map": {
        "offsetY": 0,
        "x": 626.53,
        "width": 21,
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
        "y": 332.04,
        "height": 21,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0
       },
       "class": "AreaHotspotMapOverlay",
       "image": {
        "x": 626.53,
        "y": 332.04,
        "width": 21,
        "height": 21,
        "class": "HotspotMapOverlayImage",
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
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 22)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_20209BFB_3A41_AF01_41A6_1453590B5263",
       "map": {
        "offsetY": 0,
        "x": 587.33,
        "width": 21,
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
        "y": 345.6,
        "height": 21,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0
       },
       "class": "AreaHotspotMapOverlay",
       "image": {
        "x": 587.33,
        "y": 345.6,
        "width": 21,
        "height": 21,
        "class": "HotspotMapOverlayImage",
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
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 21)"
        }
       ],
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_20EFB36E_3A46_5F03_41A3_9A6D758385F0",
       "map": {
        "offsetY": 0,
        "x": 560.21,
        "width": 21,
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
        "y": 361.32,
        "height": 21,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0
       },
       "class": "AreaHotspotMapOverlay",
       "image": {
        "x": 560.21,
        "y": 361.32,
        "width": 21,
        "height": 21,
        "class": "HotspotMapOverlayImage",
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
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 20)"
        }
       ],
       "useHandCursor": true
      }
     ],
     "fieldOfViewOverlayRadiusScale": 0.05,
     "scaleMode": "fit_inside",
     "maximumZoomFactor": 1.2,
     "class": "Map",
     "initialZoomFactor": 1
    }
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
       "thumbnailUrl": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_t.jpg",
       "overlays": [
        {
         "rollOverDisplay": false,
         "id": "overlay_12BCBCD9_06FF_E5F6_4132_6BD2D8AC4E5A",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
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
           "hfov": 10.94,
           "pitch": -14.51
          }
         ],
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
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
           "pitch": -14.51
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_1690DD0C_06F1_246E_4197_6AD3CD66470D",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
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
           "hfov": 11.44,
           "pitch": -7.98
          }
         ],
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
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
           "pitch": -7.98
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_311D0F38_3C32_38E6_41B9_16CD7FB2884F",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
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
           "hfov": 23.04,
           "pitch": -5.15
          }
         ],
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544, this.camera_286141BF_3C4D_FB1C_41C3_90C15F4DD594); this.mainPlayList.set('selectedIndex', 2); eval('localStorage.setItem(\"displayIndex\", 2);');"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
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
           "pitch": -5.15
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_3114B52C_3C32_48FE_41B5_406CC4DEDCA5",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
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
           "hfov": 15.74,
           "pitch": -0.88
          }
         ],
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D, this.camera_287EA1CA_3C4D_FB67_41CA_A281E4BB0A20); this.mainPlayList.set('selectedIndex', 0); eval('localStorage.setItem(\"displayIndex\", 0);');"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
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
     "class": "Panorama",
     "cardboardMenu": "this.Menu_2E7CEF52_3C4C_0767_41A7_471523985684",
     "partial": false,
     "pitch": 0,
     "thumbnailUrl": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_t.jpg",
     "id": "panorama_0FD85D6E_0673_DED7_40FD_D23817113C40",
     "mapLocations": [
      {
       "x": 356.1,
       "y": 152.89,
       "class": "PanoramaMapLocation",
       "angle": 108.43,
       "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE"
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
          "thumbnailUrl": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_t.jpg",
          "overlays": [
           {
            "rollOverDisplay": false,
            "id": "overlay_15ADB079_06F3_1CB6_418B_9B6CDA887ED8",
            "useHandCursor": true,
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
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
              "hfov": 11.17,
              "pitch": -14.88
             }
            ],
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
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
              "pitch": -14.88
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "id": "overlay_157DAC36_06F1_24BA_4180_B0CB15CF6B9B",
            "useHandCursor": true,
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
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
              "hfov": 10.19,
              "pitch": -15.01
             }
            ],
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
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
              "pitch": -15.01
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "id": "overlay_31745591_3C35_CBA6_41C4_8DB2A929AC58",
            "useHandCursor": true,
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
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
              "hfov": 10.99,
              "pitch": -5.9
             }
            ],
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24, this.camera_2EF2CFF5_3C4C_072D_41CD_5FC848B746F0); this.mainPlayList.set('selectedIndex', 3)"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
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
              "pitch": -5.9
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "id": "overlay_311F0A3C_3C35_F8DE_41B4_7AAC3D3CC66B",
            "useHandCursor": true,
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
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
              "hfov": 13.93,
              "pitch": -6.41
             }
            ],
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_0FD85D6E_0673_DED7_40FD_D23817113C40, this.camera_2E80100B_3C4D_F8E5_419B_5D94ECA1A00F); this.mainPlayList.set('selectedIndex', 1)"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
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
        "class": "Panorama",
        "cardboardMenu": "this.Menu_2E7CEF52_3C4C_0767_41A7_471523985684",
        "partial": false,
        "pitch": 0,
        "thumbnailUrl": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_t.jpg",
        "id": "panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
        "mapLocations": [
         {
          "x": 403.13,
          "y": 172.18,
          "class": "PanoramaMapLocation",
          "angle": -70.14,
          "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE"
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
             "thumbnailUrl": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_t.jpg",
             "overlays": [
              {
               "rollOverDisplay": false,
               "id": "overlay_15F363E3_06F7_E3DA_4166_E1ADD25A8F16",
               "useHandCursor": true,
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
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
                 "hfov": 10.72,
                 "pitch": -14.13
                }
               ],
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
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
                 "pitch": -14.13
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "id": "overlay_122DE14B_06F1_1CEA_4197_5318700943E8",
               "useHandCursor": true,
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
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
                 "hfov": 10.42,
                 "pitch": -15.39
                }
               ],
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
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
                 "pitch": -15.39
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "id": "overlay_31032CAC_3C36_39FD_41C9_8B987E7CD4B2",
               "useHandCursor": true,
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
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
                 "hfov": 8.42,
                 "pitch": -6.91
                }
               ],
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544, this.camera_2FFFA132_3C4D_FB27_41AB_CCA3D88F7C8B); this.mainPlayList.set('selectedIndex', 2)"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
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
                 "pitch": -6.91
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "id": "overlay_31610C45_3C36_78AF_41B2_40154727DEF2",
               "useHandCursor": true,
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
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
                 "hfov": 11.33,
                 "pitch": -6.66
                }
               ],
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA, this.camera_2F8CF146_3C4D_FB6F_41C8_400000F13E2C); this.mainPlayList.set('selectedIndex', 4)"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
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
           "class": "Panorama",
           "cardboardMenu": "this.Menu_2E7CEF52_3C4C_0767_41A7_471523985684",
           "partial": false,
           "pitch": 0,
           "thumbnailUrl": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_t.jpg",
           "id": "panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
           "mapLocations": [
            {
             "x": 453.79,
             "y": 194.93,
             "class": "PanoramaMapLocation",
             "angle": 107.74,
             "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE"
            }
           ],
           "hfovMin": 60,
           "label": "C04",
           "hfovMax": 120,
           "hfov": 360,
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
             "class": "AdjacentPanorama",
             "yaw": -179.28,
             "backwardYaw": -177.99,
             "distance": 1
            },
            {
             "panorama": {
              "frames": [
               {
                "thumbnailUrl": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_t.jpg",
                "overlays": [
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_1382DAC3_06F3_EDDA_4199_4640AB09737B",
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
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
                    "hfov": 11.08,
                    "pitch": -11.37
                   }
                  ],
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
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
                    "pitch": -11.37
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_121F44F8_06F1_25B6_416C_4F213A9D0F56",
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
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
                    "hfov": 10.89,
                    "pitch": -15.51
                   }
                  ],
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
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
                    "pitch": -15.51
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_31600C5C_3C36_D95D_41BC_E9F7D4587C95",
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
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
                    "hfov": 11.73,
                    "pitch": -7.29
                   }
                  ],
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4, this.camera_2853B1AB_3C4D_FB24_4170_B2F7762057C6); this.mainPlayList.set('selectedIndex', 5)"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
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
                    "pitch": -7.29
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_3177AF77_3C36_D76A_41B0_BA478D445CA5",
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
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
                    "hfov": 9.92,
                    "pitch": -4.02
                   }
                  ],
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24, this.camera_284501A1_3C4D_FB25_4152_F3CF3D5D0FF0); this.mainPlayList.set('selectedIndex', 3)"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
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
              "class": "Panorama",
              "cardboardMenu": "this.Menu_2E7CEF52_3C4C_0767_41A7_471523985684",
              "partial": false,
              "pitch": 0,
              "thumbnailUrl": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_t.jpg",
              "id": "panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
              "mapLocations": [
               {
                "x": 513.7,
                "y": 214.22,
                "class": "PanoramaMapLocation",
                "angle": -68.2,
                "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE"
               }
              ],
              "hfovMin": 60,
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
                 "frames": [
                  {
                   "thumbnailUrl": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_t.jpg",
                   "overlays": [
                    {
                     "rollOverDisplay": false,
                     "id": "overlay_15D28AE0_068F_2DD6_4190_19CBC3F443F6",
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
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
                       "hfov": 10.12,
                       "pitch": -10.87
                      }
                     ],
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
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
                       "pitch": -10.87
                      }
                     ]
                    },
                    {
                     "rollOverDisplay": false,
                     "id": "overlay_1302EAF9_0691_2DB6_4188_E41C59F609C1",
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
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
                       "hfov": 10.54,
                       "pitch": -17.52
                      }
                     ],
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
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
                       "pitch": -17.52
                      }
                     ]
                    },
                    {
                     "rollOverDisplay": false,
                     "id": "overlay_310FDBE1_3C36_5F66_41BB_BDA464171CC9",
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
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
                       "hfov": 12.32,
                       "pitch": -8.04
                      }
                     ],
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA, this.camera_2F496049_3C4D_F964_41BB_B0A13B02E43B); this.mainPlayList.set('selectedIndex', 4)"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
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
                       "pitch": -8.04
                      }
                     ]
                    },
                    {
                     "rollOverDisplay": false,
                     "id": "overlay_310CF005_3C36_48AF_41C4_A7D692E40CF8",
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
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
                       "hfov": 10.58,
                       "pitch": -2.89
                      }
                     ],
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_2F465059_3C4D_F965_41A4_353729CCEE22); this.mainPlayList.set('selectedIndex', 6)"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
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
                 "class": "Panorama",
                 "cardboardMenu": "this.Menu_2E7CEF52_3C4C_0767_41A7_471523985684",
                 "partial": false,
                 "pitch": 0,
                 "thumbnailUrl": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_t.jpg",
                 "id": "panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
                 "mapLocations": [
                  {
                   "x": 547.23,
                   "y": 228.46,
                   "class": "PanoramaMapLocation",
                   "angle": 109.18,
                   "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE"
                  }
                 ],
                 "hfovMin": 60,
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
                    "frames": [
                     {
                      "thumbnailUrl": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_t.jpg",
                      "overlays": [
                       {
                        "rollOverDisplay": false,
                        "id": "overlay_1092C51A_0697_246A_4172_39E7152EFDF5",
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
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
                          "hfov": 6.67,
                          "pitch": -8.76
                         }
                        ],
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
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
                          "pitch": -8.76
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "id": "overlay_11D3D443_0693_24DA_4192_5962A59207B3",
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
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
                          "hfov": 7,
                          "pitch": -5.87
                         }
                        ],
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
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
                          "pitch": -5.87
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "id": "overlay_1CA3866A_06B3_24AA_418F_9F19B27231FA",
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
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
                          "hfov": 11.05,
                          "pitch": -12.25
                         }
                        ],
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
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
                          "pitch": -12.25
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "id": "overlay_31577B6A_3C37_DF7A_41CA_69C6508E3410",
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
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
                          "hfov": 18.69,
                          "pitch": -4.02
                         }
                        ],
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4, this.camera_2ED66FD5_3C4C_076C_41AD_830CDE631C7A); this.mainPlayList.set('selectedIndex', 5)"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
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
                          "pitch": -4.02
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "id": "overlay_31666916_3C37_D8AD_41BF_0E759A3A4B57",
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
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
                          "hfov": 7.66,
                          "pitch": -2.68
                         }
                        ],
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_2ECABFB6_3C4C_072C_41C5_28DCE755468D); this.mainPlayList.set('selectedIndex', 7)"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
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
                          "pitch": -2.68
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "id": "overlay_324F6236_3C36_48ED_419C_6AA2CE6648A0",
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
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
                          "hfov": 6.56,
                          "pitch": -1.22
                         }
                        ],
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_2ED96FC6_3C4C_076F_41B9_2EF5782642F7); this.mainPlayList.set('selectedIndex', 15)"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
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
                    "class": "Panorama",
                    "cardboardMenu": "this.Menu_2E7CEF52_3C4C_0767_41A7_471523985684",
                    "partial": false,
                    "pitch": 0,
                    "thumbnailUrl": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_t.jpg",
                    "id": "panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                    "mapLocations": [
                     {
                      "x": 585.69,
                      "y": 256.31,
                      "class": "PanoramaMapLocation",
                      "angle": 41.19,
                      "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE"
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
                         "thumbnailUrl": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_t.jpg",
                         "overlays": [
                          {
                           "rollOverDisplay": false,
                           "id": "overlay_1C9800E4_06BF_3DDE_4173_59F64E3E5D64",
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
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
                             "hfov": 7.28,
                             "pitch": -8.41
                            }
                           ],
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
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
                             "pitch": -8.41
                            }
                           ]
                          },
                          {
                           "rollOverDisplay": false,
                           "id": "overlay_112FAD06_06B0_E45A_4192_19B5F480919F",
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
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
                             "hfov": 8.76,
                             "pitch": -7.26
                            }
                           ],
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
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
                             "pitch": -7.26
                            }
                           ]
                          },
                          {
                           "rollOverDisplay": false,
                           "id": "overlay_1FA8ED9A_06B1_646A_4196_2926CB7FBF93",
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
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
                             "hfov": 6.76,
                             "pitch": -6.88
                            }
                           ],
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
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
                             "pitch": -6.88
                            }
                           ]
                          },
                          {
                           "rollOverDisplay": false,
                           "id": "overlay_31B3B513_3C36_48AA_41C2_639E02762ACD",
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
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
                             "hfov": 7.67,
                             "pitch": -3.38
                            }
                           ],
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82, this.camera_33A6F276_3C4D_F92F_41C8_0943251F53AB); this.mainPlayList.set('selectedIndex', 8)"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
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
                             "pitch": -3.38
                            }
                           ]
                          },
                          {
                           "rollOverDisplay": false,
                           "id": "overlay_314A48B2_3C36_D9E5_41C2_F12297588075",
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
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
                             "hfov": 11.33,
                             "pitch": -1.48
                            }
                           ],
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_33B25292_3C4D_F9E7_41C2_C0EBE8FA53CB); this.mainPlayList.set('selectedIndex', 9)"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
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
                             "pitch": -1.48
                            }
                           ]
                          },
                          {
                           "rollOverDisplay": false,
                           "id": "overlay_314A418A_3C36_CBA5_41C7_919875A1128F",
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
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
                             "hfov": 6.29,
                             "pitch": -2.58
                            }
                           ],
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_33BDD280_3C4D_F9E3_41C7_8158B7AC88E7); this.mainPlayList.set('selectedIndex', 6)"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
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
                       "class": "Panorama",
                       "cardboardMenu": "this.Menu_2E7CEF52_3C4C_0767_41A7_471523985684",
                       "partial": false,
                       "pitch": 0,
                       "thumbnailUrl": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_t.jpg",
                       "id": "panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                       "mapLocations": [
                        {
                         "x": 636.29,
                         "y": 219.15,
                         "class": "PanoramaMapLocation",
                         "angle": 180.55,
                         "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE"
                        }
                       ],
                       "hfovMin": 60,
                       "label": "C08",
                       "hfovMax": 120,
                       "hfov": 360,
                       "adjacentPanoramas": [
                        {
                         "panorama": {
                          "frames": [
                           {
                            "thumbnailUrl": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_t.jpg",
                            "overlays": [
                             {
                              "rollOverDisplay": false,
                              "id": "overlay_1A54EB2C_0691_2CAE_414E_FD4A85E449B8",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "class": "HotspotPanoramaOverlay",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
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
                                "hfov": 4.75,
                                "pitch": -2.92
                               }
                              ],
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
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
                                "pitch": -2.92
                               }
                              ]
                             },
                             {
                              "rollOverDisplay": false,
                              "id": "overlay_31A6E59F_3C36_4BDA_41B0_1CFF384201CA",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "class": "HotspotPanoramaOverlay",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
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
                                "hfov": 5.41,
                                "pitch": 0.09
                               }
                              ],
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_339AB225_3C4D_F92D_41C3_795576376FF5); this.mainPlayList.set('selectedIndex', 7)"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
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
                          "class": "Panorama",
                          "cardboardMenu": "this.Menu_2E7CEF52_3C4C_0767_41A7_471523985684",
                          "partial": false,
                          "pitch": 0,
                          "thumbnailUrl": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_t.jpg",
                          "id": "panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
                          "mapLocations": [
                           {
                            "x": 634.93,
                            "y": 158.62,
                            "class": "PanoramaMapLocation",
                            "angle": 35.54,
                            "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE"
                           }
                          ],
                          "hfovMin": 60,
                          "label": "C09",
                          "hfovMax": 120,
                          "hfov": 360,
                          "adjacentPanoramas": [
                           {
                            "panorama": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                            "class": "AdjacentPanorama",
                            "yaw": 129.09,
                            "backwardYaw": -154.28,
                            "distance": 1
                           }
                          ],
                          "vfov": 180
                         },
                         "class": "AdjacentPanorama",
                         "yaw": -154.28,
                         "backwardYaw": 129.09,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                         "class": "AdjacentPanorama",
                         "yaw": 36.85,
                         "backwardYaw": 4.74,
                         "distance": 1
                        },
                        {
                         "panorama": {
                          "frames": [
                           {
                            "thumbnailUrl": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_t.jpg",
                            "overlays": [
                             {
                              "rollOverDisplay": false,
                              "id": "overlay_1AA3E219_0690_FC76_4175_20A3657C4FB3",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "class": "HotspotPanoramaOverlay",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
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
                                "hfov": 11.22,
                                "pitch": -13.75
                               }
                              ],
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
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
                                "pitch": -13.75
                               }
                              ]
                             },
                             {
                              "rollOverDisplay": false,
                              "id": "overlay_19A3F664_0691_64DE_4190_3B68066071FF",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "class": "HotspotPanoramaOverlay",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
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
                                "hfov": 8.33,
                                "pitch": -10.7
                               }
                              ],
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
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
                                "pitch": -10.7
                               }
                              ]
                             },
                             {
                              "rollOverDisplay": false,
                              "id": "overlay_1B759D4A_0691_24EA_4156_A2B44DC73C69",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "class": "HotspotPanoramaOverlay",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
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
                                "hfov": 8.38,
                                "pitch": -7.4
                               }
                              ],
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
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
                                "pitch": -7.4
                               }
                              ]
                             },
                             {
                              "rollOverDisplay": false,
                              "id": "overlay_31A7661B_3C32_48DA_41BD_C27EC3BCDDC9",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "class": "HotspotPanoramaOverlay",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
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
                                "hfov": 14.11,
                                "pitch": -4.05
                               }
                              ],
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_2FA6B179_3C4D_FB25_41A8_9D27F08A90FE); this.mainPlayList.set('selectedIndex', 7)"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
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
                                "pitch": -4.05
                               }
                              ]
                             },
                             {
                              "rollOverDisplay": false,
                              "id": "overlay_31B78775_3C32_776F_41C6_8E114C1EBBB9",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "class": "HotspotPanoramaOverlay",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
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
                                "hfov": 11.51,
                                "pitch": -5.02
                               }
                              ],
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2, this.camera_2FB7C18D_3C4D_FBFD_41C2_9BA965CF7039); this.mainPlayList.set('selectedIndex', 10)"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
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
                                "pitch": -5.02
                               }
                              ]
                             },
                             {
                              "rollOverDisplay": false,
                              "id": "overlay_31BE2ED2_3C32_59A5_41C5_8CE1DF322D9B",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "class": "HotspotPanoramaOverlay",
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
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
                                "hfov": 9.34,
                                "pitch": -0.33
                               }
                              ],
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_2FAB116E_3C4D_FB3C_41C7_035B4958FA45); this.mainPlayList.set('selectedIndex', 16)"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
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
                          "class": "Panorama",
                          "cardboardMenu": "this.Menu_2E7CEF52_3C4C_0767_41A7_471523985684",
                          "partial": false,
                          "pitch": 0,
                          "thumbnailUrl": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_t.jpg",
                          "id": "panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                          "mapLocations": [
                           {
                            "x": 686.27,
                            "y": 250.58,
                            "class": "PanoramaMapLocation",
                            "angle": 91.91,
                            "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE"
                           }
                          ],
                          "hfovMin": 60,
                          "label": "C10",
                          "hfovMax": 120,
                          "hfov": 360,
                          "adjacentPanoramas": [
                           {
                            "panorama": {
                             "frames": [
                              {
                               "thumbnailUrl": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_t.jpg",
                               "overlays": [
                                {
                                 "rollOverDisplay": false,
                                 "id": "overlay_469A773A_0791_24AA_4191_D2BE6DDF9602",
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
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
                                   "hfov": 6.78,
                                   "pitch": -7.06
                                  }
                                 ],
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
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
                                   "pitch": -7.06
                                  }
                                 ]
                                },
                                {
                                 "rollOverDisplay": false,
                                 "id": "overlay_41D6FB68_0797_6CD6_417A_18E907D050C5",
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
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
                                   "hfov": 7.37,
                                   "pitch": -10.96
                                  }
                                 ],
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
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
                                   "pitch": -10.96
                                  }
                                 ]
                                },
                                {
                                 "rollOverDisplay": false,
                                 "id": "overlay_43AEE268_0791_1CD6_4190_956303B44CDE",
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
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
                                   "hfov": 9.3,
                                   "pitch": -8.27
                                  }
                                 ],
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
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
                                   "pitch": -8.27
                                  }
                                 ]
                                },
                                {
                                 "rollOverDisplay": false,
                                 "id": "overlay_31813653_3C3D_C8AA_4193_CAA24AD6D388",
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
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
                                   "hfov": 8.92,
                                   "pitch": -2.5
                                  }
                                 ],
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_2C5E62BA_3C4D_F924_41A8_BA08289B5730); this.mainPlayList.set('selectedIndex', 15)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
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
                                   "pitch": -2.5
                                  }
                                 ]
                                },
                                {
                                 "rollOverDisplay": false,
                                 "id": "overlay_318BEE4E_3C3D_F8BA_41C0_DB0A84F563D6",
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
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
                                   "hfov": 11.57,
                                   "pitch": -3.67
                                  }
                                 ],
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_2C4DF29E_3C4D_F91C_41B4_ED6FAC3605D0); this.mainPlayList.set('selectedIndex', 17)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
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
                                   "pitch": -3.67
                                  }
                                 ]
                                },
                                {
                                 "rollOverDisplay": false,
                                 "id": "overlay_326062D4_3C3D_C9AE_41C8_820B84085DB2",
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
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
                                   "hfov": 11.11,
                                   "pitch": -1.26
                                  }
                                 ],
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_2C4462A8_3C4D_F924_41B4_1C2D9C50190D); this.mainPlayList.set('selectedIndex', 9)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
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
                             "class": "Panorama",
                             "cardboardMenu": "this.Menu_2E7CEF52_3C4C_0767_41A7_471523985684",
                             "partial": false,
                             "pitch": 0,
                             "thumbnailUrl": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_t.jpg",
                             "id": "panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                             "mapLocations": [
                              {
                               "x": 676.23,
                               "y": 316.9,
                               "class": "PanoramaMapLocation",
                               "angle": 0,
                               "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE"
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
                                  "thumbnailUrl": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_t.jpg",
                                  "overlays": [
                                   {
                                    "rollOverDisplay": false,
                                    "id": "overlay_3F187E51_07F3_24F6_4184_039DFE14256A",
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
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
                                      "hfov": 7.99,
                                      "pitch": -6.13
                                     }
                                    ],
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
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
                                      "pitch": -6.13
                                     }
                                    ]
                                   },
                                   {
                                    "rollOverDisplay": false,
                                    "id": "overlay_3B75B8EC_07F7_6DAE_4194_C7A60FEE48CD",
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
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
                                      "hfov": 7.72,
                                      "pitch": -4.9
                                     }
                                    ],
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
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
                                      "pitch": -4.9
                                     }
                                    ]
                                   },
                                   {
                                    "rollOverDisplay": false,
                                    "id": "overlay_31FF256B_3C3E_4B7A_41C4_007A0322B0E3",
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
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
                                      "hfov": 10.6,
                                      "pitch": 0.41
                                     }
                                    ],
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_33953239_3C4D_F925_41A0_67B3B5470F9A); this.mainPlayList.set('selectedIndex', 18)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
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
                                      "pitch": 0.41
                                     }
                                    ]
                                   },
                                   {
                                    "rollOverDisplay": false,
                                    "id": "overlay_31FA7D5A_3C3E_5B5A_41CB_09D056C34B23",
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
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
                                      "hfov": 11.58,
                                      "pitch": 0.45
                                     }
                                    ],
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_339E922F_3C4D_F93D_41CC_572198228135); this.mainPlayList.set('selectedIndex', 16)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
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
                                "class": "Panorama",
                                "cardboardMenu": "this.Menu_2E7CEF52_3C4C_0767_41A7_471523985684",
                                "partial": false,
                                "pitch": 0,
                                "thumbnailUrl": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_t.jpg",
                                "id": "panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
                                "mapLocations": [
                                 {
                                  "x": 674.81,
                                  "y": 344.02,
                                  "class": "PanoramaMapLocation",
                                  "angle": 163.35,
                                  "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE"
                                 }
                                ],
                                "hfovMin": 60,
                                "label": "C18",
                                "hfovMax": 120,
                                "hfov": 360,
                                "adjacentPanoramas": [
                                 {
                                  "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                                  "class": "AdjacentPanorama",
                                  "yaw": -143.45,
                                  "backwardYaw": 152.96,
                                  "distance": 1
                                 },
                                 {
                                  "panorama": {
                                   "frames": [
                                    {
                                     "thumbnailUrl": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_t.jpg",
                                     "overlays": [
                                      {
                                       "rollOverDisplay": false,
                                       "id": "overlay_33D2C3E4_078F_23DE_417D_A6B689D41EEC",
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
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
                                         "hfov": 8.31,
                                         "pitch": -13.39
                                        }
                                       ],
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
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
                                         "pitch": -13.39
                                        }
                                       ]
                                      },
                                      {
                                       "rollOverDisplay": false,
                                       "id": "overlay_32A61C12_07F3_647A_4188_FF9DAE655EAC",
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
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
                                         "hfov": 7.97,
                                         "pitch": -16.02
                                        }
                                       ],
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
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
                                         "pitch": -16.02
                                        }
                                       ]
                                      },
                                      {
                                       "rollOverDisplay": false,
                                       "id": "overlay_05D41018_12AB_46B7_41A1_DDBF885F6640",
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
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
                                         "hfov": 12.8,
                                         "pitch": 2.09
                                        }
                                       ],
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D, this.camera_2FE0711D_3C4D_FB1C_41C4_941EB7DC98C8); this.mainPlayList.set('selectedIndex', 19)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": 168.9,
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
                                         "pitch": 2.09
                                        }
                                       ]
                                      },
                                      {
                                       "rollOverDisplay": false,
                                       "id": "overlay_0ADD07F7_12A8_C979_419E_40680DB583A7",
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
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
                                         "hfov": 9.38,
                                         "pitch": -5.96
                                        }
                                       ],
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
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
                                         "pitch": -5.96
                                        }
                                       ]
                                      },
                                      {
                                       "rollOverDisplay": false,
                                       "id": "overlay_318E48FC_3C3E_D95E_41C8_D67E6535535C",
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
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
                                         "hfov": 16.61,
                                         "pitch": -8.19
                                        }
                                       ],
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_2FD2F113_3C4D_F8E4_41CA_BF8582D2F542); this.mainPlayList.set('selectedIndex', 22)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
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
                                         "pitch": -8.19
                                        }
                                       ]
                                      },
                                      {
                                       "rollOverDisplay": false,
                                       "id": "overlay_31EDADC4_3C3E_3BAD_41AB_C9F7B53B7D40",
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
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
                                         "hfov": 13.33,
                                         "pitch": -8.66
                                        }
                                       ],
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_2FC420FF_3C4D_F91D_41C5_CC19CAEA03CE); this.mainPlayList.set('selectedIndex', 17)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
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
                                         "pitch": -8.66
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
                                   "class": "Panorama",
                                   "cardboardMenu": "this.Menu_2E7CEF52_3C4C_0767_41A7_471523985684",
                                   "partial": false,
                                   "pitch": 0,
                                   "thumbnailUrl": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_t.jpg",
                                   "id": "panorama_0F84F19D_0671_6675_4191_5761B2287855",
                                   "mapLocations": [
                                    {
                                     "x": 670.61,
                                     "y": 386.79,
                                     "class": "PanoramaMapLocation",
                                     "angle": 0,
                                     "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE"
                                    }
                                   ],
                                   "hfovMin": 60,
                                   "label": "C19",
                                   "hfovMax": 120,
                                   "hfov": 360,
                                   "adjacentPanoramas": [
                                    {
                                     "panorama": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
                                     "class": "AdjacentPanorama",
                                     "yaw": 24.89,
                                     "backwardYaw": 7.69,
                                     "distance": 1
                                    },
                                    {
                                     "panorama": {
                                      "frames": [
                                       {
                                        "thumbnailUrl": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_t.jpg",
                                        "overlays": [
                                         {
                                          "rollOverDisplay": false,
                                          "id": "overlay_3348BEEF_07B7_25AA_4181_4163771F00E4",
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
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
                                            "hfov": 9.41,
                                            "pitch": -11.24
                                           }
                                          ],
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
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
                                            "pitch": -11.24
                                           }
                                          ]
                                         },
                                         {
                                          "rollOverDisplay": false,
                                          "id": "overlay_2AA8BEF2_07B1_25BA_417C_0F0A2C84C244",
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
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
                                            "hfov": 7.27,
                                            "pitch": -4.21
                                           }
                                          ],
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
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
                                            "pitch": -4.21
                                           }
                                          ]
                                         },
                                         {
                                          "rollOverDisplay": false,
                                          "id": "overlay_2C7EB04D_21FB_7ABB_4179_D08D1BA68999",
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
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
                                            "hfov": 11.22,
                                            "pitch": -10.52
                                           }
                                          ],
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
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
                                            "pitch": -10.52
                                           }
                                          ]
                                         },
                                         {
                                          "rollOverDisplay": false,
                                          "id": "overlay_3184A9AF_3C3E_5BFA_4193_1D078062DEF6",
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
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
                                            "hfov": 12.09,
                                            "pitch": -4.19
                                           }
                                          ],
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_2F70F09A_3C4D_F9E7_41C1_CD2CC4A1E985); this.mainPlayList.set('selectedIndex', 15)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
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
                                            "pitch": -4.19
                                           }
                                          ]
                                         },
                                         {
                                          "rollOverDisplay": false,
                                          "id": "overlay_318F2744_3C3E_48AD_41CD_20BCB5DBAA95",
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
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
                                            "hfov": 12.01,
                                            "pitch": 0.98
                                           }
                                          ],
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_2F1D90B8_3C4D_F923_41CB_C7B4C4607B5B); this.mainPlayList.set('selectedIndex', 18)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
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
                                            "pitch": 0.98
                                           }
                                          ]
                                         },
                                         {
                                          "rollOverDisplay": false,
                                          "id": "overlay_31A91C84_3C3D_D9AD_41C5_CD5CBB0A6D17",
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
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
                                            "hfov": 9.82,
                                            "pitch": -4.77
                                           }
                                          ],
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67, this.camera_2F0E80AE_3C4D_F93F_418B_4C69D1DF285F); this.mainPlayList.set('selectedIndex', 21)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
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
                                      "class": "Panorama",
                                      "cardboardMenu": "this.Menu_2E7CEF52_3C4C_0767_41A7_471523985684",
                                      "partial": false,
                                      "pitch": 0,
                                      "thumbnailUrl": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_t.jpg",
                                      "id": "panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                                      "mapLocations": [
                                       {
                                        "x": 637.03,
                                        "y": 342.54,
                                        "class": "PanoramaMapLocation",
                                        "angle": 144.87,
                                        "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE"
                                       }
                                      ],
                                      "hfovMin": 60,
                                      "label": "C23",
                                      "hfovMax": 120,
                                      "hfov": 360,
                                      "adjacentPanoramas": [
                                       {
                                        "panorama": {
                                         "frames": [
                                          {
                                           "thumbnailUrl": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_t.jpg",
                                           "overlays": [
                                            {
                                             "rollOverDisplay": false,
                                             "id": "overlay_3619F023_078F_1C5A_419A_DDBC83BEE9D1",
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
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
                                               "hfov": 8.18,
                                               "pitch": -8.9
                                              }
                                             ],
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
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
                                               "pitch": -8.9
                                              }
                                             ]
                                            },
                                            {
                                             "rollOverDisplay": false,
                                             "id": "overlay_33FE544D_0791_24EE_4186_5CC6F6EE735D",
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
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
                                               "hfov": 8.46,
                                               "pitch": -6.24
                                              }
                                             ],
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
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
                                               "pitch": -6.24
                                              }
                                             ]
                                            },
                                            {
                                             "rollOverDisplay": false,
                                             "id": "overlay_35DB4DB5_0791_27BE_4183_7C63065DE16E",
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
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
                                               "hfov": 6.94,
                                               "pitch": -6.29
                                              }
                                             ],
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
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
                                               "pitch": -6.29
                                              }
                                             ]
                                            },
                                            {
                                             "rollOverDisplay": false,
                                             "id": "overlay_3195499F_3C32_3BDA_41C9_4DAE277EAE88",
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
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
                                               "hfov": 11.08,
                                               "pitch": -1.2
                                              }
                                             ],
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_2EADC02A_3C4D_F927_4153_451B0D845703); this.mainPlayList.set('selectedIndex', 22)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
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
                                               "pitch": -1.2
                                              }
                                             ]
                                            },
                                            {
                                             "rollOverDisplay": false,
                                             "id": "overlay_31A28EB8_3C32_59E6_41CB_4E8D47D0B41B",
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
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
                                               "hfov": 6.46,
                                               "pitch": -1.79
                                              }
                                             ],
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_2EBA303A_3C4D_F927_41C8_2E68E6F95CD0); this.mainPlayList.set('selectedIndex', 6)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
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
                                               "pitch": -1.79
                                              }
                                             ]
                                            },
                                            {
                                             "rollOverDisplay": false,
                                             "id": "overlay_326C1794_3C32_57AE_41C8_76690F8BD429",
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
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
                                               "hfov": 8.52,
                                               "pitch": -1.39
                                              }
                                             ],
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_2E9E601A_3C4D_F8E4_41C6_35A29336EE05); this.mainPlayList.set('selectedIndex', 16)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
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
                                         "class": "Panorama",
                                         "cardboardMenu": "this.Menu_2E7CEF52_3C4C_0767_41A7_471523985684",
                                         "partial": false,
                                         "pitch": 0,
                                         "thumbnailUrl": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_t.jpg",
                                         "id": "panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                                         "mapLocations": [
                                          {
                                           "x": 628.52,
                                           "y": 310.6,
                                           "class": "PanoramaMapLocation",
                                           "angle": 0,
                                           "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE"
                                          }
                                         ],
                                         "hfovMin": 60,
                                         "label": "C16",
                                         "hfovMax": 120,
                                         "hfov": 360,
                                         "adjacentPanoramas": [
                                          {
                                           "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                                           "class": "AdjacentPanorama",
                                           "yaw": 113.51,
                                           "backwardYaw": -107.62,
                                           "distance": 1
                                          },
                                          {
                                           "panorama": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                                           "class": "AdjacentPanorama",
                                           "yaw": -174.64,
                                           "backwardYaw": -172.27,
                                           "distance": 1
                                          },
                                          {
                                           "panorama": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                                           "class": "AdjacentPanorama",
                                           "yaw": -18.92,
                                           "backwardYaw": 156.92,
                                           "distance": 1
                                          }
                                         ],
                                         "vfov": 180
                                        },
                                        "class": "AdjacentPanorama",
                                        "yaw": -172.27,
                                        "backwardYaw": -174.64,
                                        "distance": 1
                                       },
                                       {
                                        "panorama": {
                                         "frames": [
                                          {
                                           "thumbnailUrl": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_t.jpg",
                                           "overlays": [
                                            {
                                             "rollOverDisplay": false,
                                             "id": "overlay_282E1707_07B3_E45A_4184_0F5F576BAFA8",
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
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
                                               "hfov": 8.33,
                                               "pitch": -12.75
                                              }
                                             ],
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
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
                                               "pitch": -12.75
                                              }
                                             ]
                                            },
                                            {
                                             "rollOverDisplay": false,
                                             "id": "overlay_36A27374_07B1_1CBE_4183_F00116B379C1",
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
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
                                               "hfov": 8.48,
                                               "pitch": -15.39
                                              }
                                             ],
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
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
                                               "pitch": -15.39
                                              }
                                             ]
                                            },
                                            {
                                             "rollOverDisplay": false,
                                             "id": "overlay_319C20C7_3C3E_C9AA_41CD_3CE2491B7454",
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
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
                                               "hfov": 20.49,
                                               "pitch": -4.42
                                              }
                                             ],
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754, this.camera_33A33269_3C4D_F924_41C3_728736FDC7C4); this.mainPlayList.set('selectedIndex', 20)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
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
                                               "pitch": -4.42
                                              }
                                             ]
                                            },
                                            {
                                             "rollOverDisplay": false,
                                             "id": "overlay_3194C5EC_3C3E_CB7D_41C9_0F6F04D6B4CA",
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
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
                                               "hfov": 11.26,
                                               "pitch": -4.76
                                              }
                                             ],
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_33ACC257_3C4D_F96C_41A0_BB14118239E8); this.mainPlayList.set('selectedIndex', 22)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
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
                                         "class": "Panorama",
                                         "cardboardMenu": "this.Menu_2E7CEF52_3C4C_0767_41A7_471523985684",
                                         "partial": false,
                                         "pitch": 0,
                                         "thumbnailUrl": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_t.jpg",
                                         "id": "panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
                                         "mapLocations": [
                                          {
                                           "x": 597.83,
                                           "y": 356.1,
                                           "class": "PanoramaMapLocation",
                                           "angle": 71.57,
                                           "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE"
                                          }
                                         ],
                                         "hfovMin": 60,
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
                                            "frames": [
                                             {
                                              "thumbnailUrl": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_t.jpg",
                                              "overlays": [
                                               {
                                                "rollOverDisplay": false,
                                                "id": "overlay_36D89562_07B1_24DA_4181_B5F7392CD10A",
                                                "useHandCursor": true,
                                                "enabledInCardboard": true,
                                                "class": "HotspotPanoramaOverlay",
                                                "maps": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayMap",
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
                                                  "hfov": 9.76,
                                                  "pitch": -22.3
                                                 }
                                                ],
                                                "areas": [
                                                 {
                                                  "mapColor": "#FF0000",
                                                  "class": "HotspotPanoramaOverlayArea"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayImage",
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
                                                  "pitch": -22.3
                                                 }
                                                ]
                                               },
                                               {
                                                "rollOverDisplay": false,
                                                "id": "overlay_3189D767_3C3E_576B_41B9_B7E24D9E032C",
                                                "useHandCursor": true,
                                                "enabledInCardboard": true,
                                                "class": "HotspotPanoramaOverlay",
                                                "maps": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayMap",
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
                                                  "hfov": 21.31,
                                                  "pitch": -11.43
                                                 }
                                                ],
                                                "areas": [
                                                 {
                                                  "mapColor": "#FF0000",
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67, this.camera_2EE5FFE5_3C4C_072D_41B5_118525617974); this.mainPlayList.set('selectedIndex', 21)"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayImage",
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
                                            "class": "Panorama",
                                            "cardboardMenu": "this.Menu_2E7CEF52_3C4C_0767_41A7_471523985684",
                                            "partial": false,
                                            "pitch": 0,
                                            "thumbnailUrl": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_t.jpg",
                                            "id": "panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
                                            "mapLocations": [
                                             {
                                              "x": 570.71,
                                              "y": 371.82,
                                              "class": "PanoramaMapLocation",
                                              "angle": 249.33,
                                              "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE"
                                             }
                                            ],
                                            "hfovMin": 60,
                                            "label": "C21",
                                            "hfovMax": 120,
                                            "hfov": 360,
                                            "adjacentPanoramas": [
                                             {
                                              "panorama": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
                                              "class": "AdjacentPanorama",
                                              "yaw": -179.93,
                                              "backwardYaw": -179.27,
                                              "distance": 1
                                             }
                                            ],
                                            "vfov": 180
                                           },
                                           "class": "AdjacentPanorama",
                                           "yaw": -179.27,
                                           "backwardYaw": -179.93,
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
                                        "panorama": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
                                        "class": "AdjacentPanorama",
                                        "yaw": -6.68,
                                        "backwardYaw": -53.03,
                                        "distance": 1
                                       }
                                      ],
                                      "vfov": 180
                                     },
                                     "class": "AdjacentPanorama",
                                     "yaw": -53.03,
                                     "backwardYaw": -6.68,
                                     "distance": 1
                                    },
                                    {
                                     "panorama": {
                                      "frames": [
                                       {
                                        "thumbnailUrl": "media/panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D_t.jpg",
                                        "overlays": [
                                         {
                                          "rollOverDisplay": false,
                                          "id": "overlay_305C5588_0793_2456_418A_8A6507C5DC0F",
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
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
                                            "hfov": 8.44,
                                            "pitch": -6.59
                                           }
                                          ],
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
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
                                            "pitch": -6.59
                                           }
                                          ]
                                         },
                                         {
                                          "rollOverDisplay": false,
                                          "id": "overlay_31FEF583_3C3F_CBAA_41CA_B71528649943",
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
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
                                            "hfov": 11.3,
                                            "pitch": -0.44
                                           }
                                          ],
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_2F9A3158_3C4D_FB63_41C0_B8385717D2DF); this.mainPlayList.set('selectedIndex', 18)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
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
                                      "class": "Panorama",
                                      "cardboardMenu": "this.Menu_2E7CEF52_3C4C_0767_41A7_471523985684",
                                      "partial": false,
                                      "pitch": 0,
                                      "thumbnailUrl": "media/panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D_t.jpg",
                                      "id": "panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D",
                                      "mapLocations": [
                                       {
                                        "x": 684.85,
                                        "y": 435.3,
                                        "class": "PanoramaMapLocation",
                                        "angle": 181.22,
                                        "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE"
                                       }
                                      ],
                                      "hfovMin": 60,
                                      "label": "C20",
                                      "hfovMax": 120,
                                      "hfov": 360,
                                      "adjacentPanoramas": [
                                       {
                                        "panorama": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
                                        "class": "AdjacentPanorama",
                                        "yaw": -174.74,
                                        "backwardYaw": 168.9,
                                        "distance": 1
                                       }
                                      ],
                                      "vfov": 180
                                     },
                                     "class": "AdjacentPanorama",
                                     "yaw": 168.9,
                                     "backwardYaw": -174.74,
                                     "distance": 1
                                    }
                                   ],
                                   "vfov": 180
                                  },
                                  "class": "AdjacentPanorama",
                                  "yaw": 7.69,
                                  "backwardYaw": 24.89,
                                  "distance": 1
                                 }
                                ],
                                "vfov": 180
                               },
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
                            "panorama": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                            "class": "AdjacentPanorama",
                            "yaw": -143.14,
                            "backwardYaw": -42.13,
                            "distance": 1
                           },
                           {
                            "panorama": {
                             "frames": [
                              {
                               "thumbnailUrl": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_t.jpg",
                               "overlays": [
                                {
                                 "rollOverDisplay": false,
                                 "id": "overlay_1B81FB3A_0691_6CAA_4185_C2AB290A08A0",
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
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
                                   "hfov": 11.36,
                                   "pitch": -10.61
                                  }
                                 ],
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
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
                                   "pitch": -10.61
                                  }
                                 ]
                                },
                                {
                                 "rollOverDisplay": false,
                                 "id": "overlay_19EDC174_0671_3CBE_4196_DE5883AFB8CF",
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
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
                                   "hfov": 10.52,
                                   "pitch": -17.9
                                  }
                                 ],
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
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
                                   "pitch": -17.9
                                  }
                                 ]
                                },
                                {
                                 "rollOverDisplay": false,
                                 "id": "overlay_31B10D7A_3C32_DB5A_41A1_B6DFD3B7AB9B",
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
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
                                   "hfov": 11.41,
                                   "pitch": -0.25
                                  }
                                 ],
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_2C6372D9_3C4D_F965_41AE_7D3ABFA05D57); this.mainPlayList.set('selectedIndex', 9)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
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
                                   "pitch": -0.25
                                  }
                                 ]
                                },
                                {
                                 "rollOverDisplay": false,
                                 "id": "overlay_31A10589_3C32_CBA6_41B4_4595385EB844",
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "maps": [
                                  {
                                   "class": "HotspotPanoramaOverlayMap",
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
                                   "hfov": 17.82,
                                   "pitch": -8.29
                                  }
                                 ],
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E, this.camera_2C6922C7_3C4D_F96D_41C4_1326902F813C); this.mainPlayList.set('selectedIndex', 11)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
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
                             "class": "Panorama",
                             "cardboardMenu": "this.Menu_2E7CEF52_3C4C_0767_41A7_471523985684",
                             "partial": false,
                             "pitch": 0,
                             "thumbnailUrl": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_t.jpg",
                             "id": "panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
                             "mapLocations": [
                              {
                               "x": 747.54,
                               "y": 249.85,
                               "class": "PanoramaMapLocation",
                               "angle": -86.82,
                               "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE"
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
                                  "thumbnailUrl": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_t.jpg",
                                  "overlays": [
                                   {
                                    "rollOverDisplay": false,
                                    "id": "overlay_1B0FFE2E_0673_24AA_4193_33375BC7C00A",
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
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
                                      "hfov": 10.83,
                                      "pitch": -13.62
                                     }
                                    ],
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
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
                                      "pitch": -13.62
                                     }
                                    ]
                                   },
                                   {
                                    "rollOverDisplay": false,
                                    "id": "overlay_27CC6293_0671_3C7B_419A_6F5AB828C77E",
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
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
                                      "hfov": 10.33,
                                      "pitch": -21.2
                                     }
                                    ],
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
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
                                      "pitch": -21.2
                                     }
                                    ]
                                   },
                                   {
                                    "rollOverDisplay": false,
                                    "id": "overlay_31BBE3A6_3C33_CFED_41C6_0527EAB56766",
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
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
                                      "hfov": 10.93,
                                      "pitch": -5.02
                                     }
                                    ],
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2, this.camera_2F3810D6_3C4D_F96C_41C6_4E15B02BDB89); this.mainPlayList.set('selectedIndex', 10)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
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
                                      "pitch": -5.02
                                     }
                                    ]
                                   },
                                   {
                                    "rollOverDisplay": false,
                                    "id": "overlay_31BBF526_3C33_C8ED_41CC_EDB14C8AC409",
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "maps": [
                                     {
                                      "class": "HotspotPanoramaOverlayMap",
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
                                      "hfov": 12.62,
                                      "pitch": -10.03
                                     }
                                    ],
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778, this.camera_2F2AD0CC_3C4D_F97C_41C6_6912BF82F770); this.mainPlayList.set('selectedIndex', 12)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
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
                                "class": "Panorama",
                                "cardboardMenu": "this.Menu_2E7CEF52_3C4C_0767_41A7_471523985684",
                                "partial": false,
                                "pitch": 0,
                                "thumbnailUrl": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_t.jpg",
                                "id": "panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
                                "mapLocations": [
                                 {
                                  "x": 812.5,
                                  "y": 250.58,
                                  "class": "PanoramaMapLocation",
                                  "angle": -88.57,
                                  "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE"
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
                                     "thumbnailUrl": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_t.jpg",
                                     "overlays": [
                                      {
                                       "rollOverDisplay": false,
                                       "id": "overlay_197E9710_0677_6476_4185_152F2BE62FC4",
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
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
                                         "hfov": 11.09,
                                         "pitch": -16.39
                                        }
                                       ],
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
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
                                         "pitch": -16.39
                                        }
                                       ]
                                      },
                                      {
                                       "rollOverDisplay": false,
                                       "id": "overlay_27F0BA0A_0670_EC6A_4198_E6CE799B31CB",
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
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
                                         "hfov": 10.5,
                                         "pitch": -18.28
                                        }
                                       ],
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
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
                                         "pitch": -18.28
                                        }
                                       ]
                                      },
                                      {
                                       "rollOverDisplay": false,
                                       "id": "overlay_31BB30F3_3C33_C96A_4188_186FB6E0302F",
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
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
                                         "hfov": 14.38,
                                         "pitch": -5.9
                                        }
                                       ],
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741, this.camera_2F625085_3C4D_F9EC_41CD_8804C24BEB7B); this.mainPlayList.set('selectedIndex', 13)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
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
                                         "pitch": -5.9
                                        }
                                       ]
                                      },
                                      {
                                       "rollOverDisplay": false,
                                       "id": "overlay_31BE4255_3C32_48AF_41BF_D5F61B49D926",
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "maps": [
                                        {
                                         "class": "HotspotPanoramaOverlayMap",
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
                                         "hfov": 18.94,
                                         "pitch": -7.41
                                        }
                                       ],
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E, this.camera_2F559079_3C4D_F924_41BC_A7709A855F73); this.mainPlayList.set('selectedIndex', 11)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
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
                                   "class": "Panorama",
                                   "cardboardMenu": "this.Menu_2E7CEF52_3C4C_0767_41A7_471523985684",
                                   "partial": false,
                                   "pitch": 0,
                                   "thumbnailUrl": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_t.jpg",
                                   "id": "panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
                                   "mapLocations": [
                                    {
                                     "x": 858.11,
                                     "y": 250.58,
                                     "class": "PanoramaMapLocation",
                                     "angle": 86.73,
                                     "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE"
                                    }
                                   ],
                                   "hfovMin": 60,
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
                                      "frames": [
                                       {
                                        "thumbnailUrl": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_t.jpg",
                                        "overlays": [
                                         {
                                          "rollOverDisplay": false,
                                          "id": "overlay_257E93A3_067F_3C5A_4187_58F778D35045",
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
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
                                            "hfov": 10.69,
                                            "pitch": -14.76
                                           }
                                          ],
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
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
                                            "pitch": -14.76
                                           }
                                          ]
                                         },
                                         {
                                          "rollOverDisplay": false,
                                          "id": "overlay_26FD3107_0671_7C5A_4196_ED67E7BBC774",
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
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
                                            "hfov": 10.61,
                                            "pitch": -16.27
                                           }
                                          ],
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
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
                                            "pitch": -16.27
                                           }
                                          ]
                                         },
                                         {
                                          "rollOverDisplay": false,
                                          "id": "overlay_31B80EA2_3C32_79EA_41CD_2CA7EF8ADC1D",
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
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
                                            "hfov": 21.2,
                                            "pitch": -3.64
                                           }
                                          ],
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778, this.camera_2E2E1F90_3C4C_07E4_41C4_E525D83A7652); this.mainPlayList.set('selectedIndex', 12)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
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
                                            "pitch": -3.64
                                           }
                                          ]
                                         },
                                         {
                                          "rollOverDisplay": false,
                                          "id": "overlay_31BE0D81_3C32_5BA6_41B7_6DFB73181369",
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "maps": [
                                           {
                                            "class": "HotspotPanoramaOverlayMap",
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
                                            "hfov": 16.77,
                                            "pitch": -3.52
                                           }
                                          ],
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC, this.camera_2E3DBFA6_3C4C_072C_41C1_EDFA09C5CBDF); this.mainPlayList.set('selectedIndex', 14)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
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
                                      "class": "Panorama",
                                      "cardboardMenu": "this.Menu_2E7CEF52_3C4C_0767_41A7_471523985684",
                                      "partial": false,
                                      "pitch": 0,
                                      "thumbnailUrl": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_t.jpg",
                                      "id": "panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
                                      "mapLocations": [
                                       {
                                        "x": 898.78,
                                        "y": 253.42,
                                        "class": "PanoramaMapLocation",
                                        "angle": 88.03,
                                        "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE"
                                       }
                                      ],
                                      "hfovMin": 60,
                                      "label": "C14",
                                      "hfovMax": 120,
                                      "hfov": 360,
                                      "adjacentPanoramas": [
                                       {
                                        "panorama": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
                                        "class": "AdjacentPanorama",
                                        "yaw": -178.42,
                                        "backwardYaw": -0.18,
                                        "distance": 1
                                       },
                                       {
                                        "panorama": {
                                         "frames": [
                                          {
                                           "thumbnailUrl": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_t.jpg",
                                           "overlays": [
                                            {
                                             "rollOverDisplay": false,
                                             "id": "overlay_26A0F6B7_0673_E5BA_4197_F90E8A3A011E",
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
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
                                               "hfov": 10.93,
                                               "pitch": -14.76
                                              }
                                             ],
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
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
                                               "pitch": -14.76
                                              }
                                             ]
                                            },
                                            {
                                             "rollOverDisplay": false,
                                             "id": "overlay_31A78791_3C32_D7A7_419E_CA932C83A3E7",
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "maps": [
                                              {
                                               "class": "HotspotPanoramaOverlayMap",
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
                                               "hfov": 17.81,
                                               "pitch": -3.27
                                              }
                                             ],
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741, this.camera_33A9124D_3C4D_F97C_41B0_DFE70F7E73B3); this.mainPlayList.set('selectedIndex', 13)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
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
                                         "class": "Panorama",
                                         "cardboardMenu": "this.Menu_2E7CEF52_3C4C_0767_41A7_471523985684",
                                         "partial": false,
                                         "pitch": 0,
                                         "thumbnailUrl": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_t.jpg",
                                         "id": "panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
                                         "mapLocations": [
                                          {
                                           "x": 947.23,
                                           "y": 252,
                                           "class": "PanoramaMapLocation",
                                           "angle": -86.35,
                                           "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE"
                                          }
                                         ],
                                         "hfovMin": 60,
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
                                 },
                                 {
                                  "panorama": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
                                  "class": "AdjacentPanorama",
                                  "yaw": 0.03,
                                  "backwardYaw": 177.7,
                                  "distance": 1
                                 }
                                ],
                                "vfov": 180
                               },
                               "class": "AdjacentPanorama",
                               "yaw": 177.7,
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
                           }
                          ],
                          "vfov": 180
                         },
                         "class": "AdjacentPanorama",
                         "yaw": -42.13,
                         "backwardYaw": -143.14,
                         "distance": 1
                        }
                       ],
                       "vfov": 180
                      },
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
                     },
                     {
                      "panorama": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
                      "class": "AdjacentPanorama",
                      "yaw": -96.27,
                      "backwardYaw": 7.93,
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
  "class": "MapPlayer",
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
   "playbackBarProgressBorderColor": "#000000",
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
   "playbackBarHeadBorderSize": 0,
   "playbackBarHeadShadowColor": "#000000",
   "toolTipFontWeight": "normal",
   "id": "MapViewer",
   "toolTipTextShadowBlurRadius": 3,
   "playbackBarHeadShadowVerticalLength": 0,
   "progressBarBorderColor": "#000000",
   "toolTipShadowHorizontalLength": 0,
   "playbackBarHeadOpacity": 1,
   "minHeight": 224,
   "progressBackgroundColorDirection": "vertical",
   "playbackBarHeadShadowHorizontalLength": 0,
   "progressBarBackgroundColorRatios": [
    0
   ],
   "progressHeight": 10,
   "left": 25,
   "progressBorderColor": "#000000",
   "playbackBarBottom": 0,
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "toolTipFontFamily": "Arial",
   "class": "ViewerArea",
   "progressOpacity": 1
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_0FD85D6E_0673_DED7_40FD_D23817113C40",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0F98F446_0671_2ED7_4191_DEC01556F741_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FD82345_0671_EAD5_4173_8B63686C1397_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0F84F19D_0671_6675_4191_5761B2287855_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 161.16,
   "pitch": 2.07
  }
 },
 "this.panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -155.88,
   "pitch": -1.95
  }
 },
 "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
 {
  "class": "PanoramaCamera",
  "id": "panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "id": "PanoramaPlayListItem_2E53CF42_3C4C_0764_41AA_8585E6844DBE",
    "media": "this.panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2E53CF42_3C4C_0764_41AA_8585E6844DBE, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D_camera"
   },
   {
    "id": "PanoramaPlayListItem_2E69FF42_3C4C_0764_41C3_A4A023AD47AA",
    "media": "this.panorama_0FD85D6E_0673_DED7_40FD_D23817113C40",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2E69FF42_3C4C_0764_41C3_A4A023AD47AA, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_camera"
   },
   {
    "id": "PanoramaPlayListItem_2E691F42_3C4C_0764_41B8_D731EDD31845",
    "media": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2E691F42_3C4C_0764_41B8_D731EDD31845, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_camera"
   },
   {
    "id": "PanoramaPlayListItem_2E6A1F42_3C4C_0764_41BA_89B17E29CD06",
    "media": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2E6A1F42_3C4C_0764_41BA_89B17E29CD06, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_camera"
   },
   {
    "id": "PanoramaPlayListItem_2E6B2F42_3C4C_0764_41BA_D2E68B1DFD12",
    "media": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2E6B2F42_3C4C_0764_41BA_D2E68B1DFD12, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_camera"
   },
   {
    "id": "PanoramaPlayListItem_2E6C4F42_3C4C_0764_41A7_B8A9D8B11730",
    "media": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2E6C4F42_3C4C_0764_41A7_B8A9D8B11730, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_camera"
   },
   {
    "id": "PanoramaPlayListItem_2E6D4F42_3C4C_0764_41C5_8A0B3783578B",
    "media": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2E6D4F42_3C4C_0764_41C5_8A0B3783578B, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_camera"
   },
   {
    "id": "PanoramaPlayListItem_2E6FDF52_3C4C_0767_41C8_7B5F95A73BFE",
    "media": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2E6FDF52_3C4C_0767_41C8_7B5F95A73BFE, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_camera"
   },
   {
    "id": "PanoramaPlayListItem_2E6E6F52_3C4C_0767_41C8_41894F7A4217",
    "media": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2E6E6F52_3C4C_0767_41C8_41894F7A4217, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_camera"
   },
   {
    "id": "PanoramaPlayListItem_2E6F9F52_3C4C_0767_41CA_DA607328BE2F",
    "media": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2E6F9F52_3C4C_0767_41CA_DA607328BE2F, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_camera"
   },
   {
    "id": "PanoramaPlayListItem_2E60BF52_3C4C_0767_41C1_A23B62BBF1FC",
    "media": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2E60BF52_3C4C_0767_41C1_A23B62BBF1FC, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_camera"
   },
   {
    "id": "PanoramaPlayListItem_2E61DF52_3C4C_0767_41C6_1C63309F88E5",
    "media": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2E61DF52_3C4C_0767_41C6_1C63309F88E5, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_camera"
   },
   {
    "id": "PanoramaPlayListItem_2E62EF52_3C4C_0767_41A9_C5D9946538AE",
    "media": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2E62EF52_3C4C_0767_41A9_C5D9946538AE, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_camera"
   },
   {
    "id": "PanoramaPlayListItem_2E622F52_3C4C_0767_41C0_130F97FE7DE2",
    "media": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2E622F52_3C4C_0767_41C0_130F97FE7DE2, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741_camera"
   },
   {
    "id": "PanoramaPlayListItem_2E633F52_3C4C_0767_41CA_F10FAB573AE8",
    "media": "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2E633F52_3C4C_0767_41CA_F10FAB573AE8, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_camera"
   },
   {
    "id": "PanoramaPlayListItem_2E646F52_3C4C_0767_41A0_FC526098AB1C",
    "media": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2E646F52_3C4C_0767_41A0_FC526098AB1C, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397_camera"
   },
   {
    "id": "PanoramaPlayListItem_2E656F52_3C4C_0767_41C4_C443986C02B9",
    "media": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2E656F52_3C4C_0767_41C4_C443986C02B9, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_camera"
   },
   {
    "id": "PanoramaPlayListItem_2E666F52_3C4C_0767_419F_C97F4100611F",
    "media": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2E666F52_3C4C_0767_419F_C97F4100611F, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_camera"
   },
   {
    "id": "PanoramaPlayListItem_2E673F52_3C4C_0767_41C0_B10B623439A8",
    "media": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2E673F52_3C4C_0767_41C0_B10B623439A8, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855_camera"
   },
   {
    "id": "PanoramaPlayListItem_2E787F52_3C4C_0767_41A5_9520D5EF1E5B",
    "media": "this.panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2E787F52_3C4C_0767_41A5_9520D5EF1E5B, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D_camera"
   },
   {
    "id": "PanoramaPlayListItem_2E79DF52_3C4C_0767_41C0_94527A1A453A",
    "media": "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2E79DF52_3C4C_0767_41C0_94527A1A453A, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_camera"
   },
   {
    "id": "PanoramaPlayListItem_2E790F52_3C4C_0767_4165_54869CA4A05A",
    "media": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2E790F52_3C4C_0767_4165_54869CA4A05A, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_camera"
   },
   {
    "id": "PanoramaPlayListItem_2E7A0F52_3C4C_0767_41A6_8A0BBA41A79A",
    "media": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2E7A0F52_3C4C_0767_41A6_8A0BBA41A79A, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 0)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_camera"
   }
  ]
 },
 "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE",
 {
  "class": "PlayList",
  "id": "playList_2E50CF42_3C4C_0764_41B8_74BD09F2923B",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ]
 },
 "this.Menu_2E7CEF52_3C4C_0767_41A7_471523985684",
 {
  "class": "PanoramaCamera",
  "id": "camera_2E2E1F90_3C4C_07E4_41C4_E525D83A7652",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 179.82,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_2E3DBFA6_3C4C_072C_41C1_EDFA09C5CBDF",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.75,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_2ECABFB6_3C4C_072C_41C5_28DCE755468D",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -143.15,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_2ED96FC6_3C4C_076F_41B9_2EF5782642F7",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 161.08,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_2ED66FD5_3C4C_076C_41AD_830CDE631C7A",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -172.07,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_2EE5FFE5_3C4C_072D_41B5_118525617974",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.73,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_2EF2CFF5_3C4C_072D_41CD_5FC848B746F0",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.72,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_2E80100B_3C4D_F8E5_419B_5D94ECA1A00F",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.36,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_2E9E601A_3C4D_F8E4_41C6_35A29336EE05",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 72.38,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_2EADC02A_3C4D_F927_4153_451B0D845703",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.73,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_2EBA303A_3C4D_F927_41C8_2E68E6F95CD0",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -23.08,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_2F496049_3C4D_F964_41BB_B0A13B02E43B",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.13,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_2F465059_3C4D_F965_41A4_353729CCEE22",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 83.73,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_2F559079_3C4D_F924_41BC_A7709A855F73",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 1.98,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_2F625085_3C4D_F9EC_41CD_8804C24BEB7B",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 1.58,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_2F70F09A_3C4D_F9E7_41C1_CD2CC4A1E985",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 5.36,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_2F0E80AE_3C4D_F93F_418B_4C69D1DF285F",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -175.23,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_2F1D90B8_3C4D_F923_41CB_C7B4C4607B5B",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 126.97,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_2F2AD0CC_3C4D_F97C_41C6_6912BF82F770",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 1.26,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_2F3810D6_3C4D_F96C_41C6_4E15B02BDB89",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -2.3,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_2F36F0EB_3C4D_F925_41CB_ADB98AE7F1AB",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.33,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_2FC420FF_3C4D_F91D_41C5_CC19CAEA03CE",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -172.31,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_2FD2F113_3C4D_F8E4_41CA_BF8582D2F542",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 173.32,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_2FE0711D_3C4D_FB1C_41C4_941EB7DC98C8",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 5.26,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_2FFFA132_3C4D_FB27_41AB_CCA3D88F7C8B",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 2.01,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_2F8CF146_3C4D_FB6F_41C8_400000F13E2C",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 177.31,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_2F9A3158_3C4D_FB63_41C0_B8385717D2DF",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -11.1,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_2FAB116E_3C4D_FB3C_41C7_035B4958FA45",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -154.33,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_2FA6B179_3C4D_FB25_41A8_9D27F08A90FE",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 137.87,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_2FB7C18D_3C4D_FBFD_41C2_9BA965CF7039",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 179.05,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_284501A1_3C4D_FB25_4152_F3CF3D5D0FF0",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 177.79,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_2853B1AB_3C4D_FB24_4170_B2F7762057C6",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 1.45,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_286141BF_3C4D_FB1C_41C3_90C15F4DD594",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.65,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_287EA1CA_3C4D_FB67_41CA_A281E4BB0A20",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -178.54,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_339AB225_3C4D_F92D_41C3_795576376FF5",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 25.72,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_339E922F_3C4D_F93D_41CC_572198228135",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -27.04,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_33953239_3C4D_F925_41A0_67B3B5470F9A",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -155.11,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_33A9124D_3C4D_F97C_41B0_DFE70F7E73B3",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 179.73,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_33ACC257_3C4D_F96C_41A0_BB14118239E8",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -92.18,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_33A33269_3C4D_F924_41C3_728736FDC7C4",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.07,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_33A6F276_3C4D_F92F_41C8_0943251F53AB",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -50.91,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_33BDD280_3C4D_F9E3_41C7_8158B7AC88E7",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -175.26,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_33B25292_3C4D_F9E7_41C2_C0EBE8FA53CB",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 36.86,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_2C4DF29E_3C4D_F91C_41B4_ED6FAC3605D0",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 36.55,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_2C4462A8_3C4D_F924_41B4_1C2D9C50190D",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -98.42,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_2C5E62BA_3C4D_F924_41A8_BA08289B5730",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -66.49,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_2C6922C7_3C4D_F96D_41C4_1326902F813C",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.97,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_2C6372D9_3C4D_F965_41AE_7D3ABFA05D57",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 179.12,
   "pitch": 0
  }
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
  "playbackBarHeadBorderSize": 0,
  "bottom": "0%",
  "toolTipFontWeight": "normal",
  "id": "MainViewer",
  "minHeight": 50,
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBarBorderColor": "#000000",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadOpacity": 1,
  "toolTipTextShadowBlurRadius": 3,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarHeadShadowHorizontalLength": 0,
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
  "class": "ViewerArea",
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
    "scrollBarColor": "#000000",
    "width": 314,
    "paddingLeft": 0,
    "height": 73,
    "layout": "horizontal",
    "paddingRight": 0,
    "borderRadius": 9,
    "borderSize": 0,
    "contentOpaque": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "horizontalAlign": "center",
    "paddingBottom": 0,
    "minWidth": 1,
    "backgroundColorRatios": [
     0,
     1
    ],
    "id": "Container_1F218FBB_3BC2_A700_4191_230DA2F5BB68",
    "gap": 12,
    "minHeight": 1,
    "shadow": false,
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
      "id": "IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0",
      "minHeight": 1,
      "shadow": false,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "maxWidth": 1047,
      "class": "IconButton"
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
      "id": "IconButton_1808CC36_3A41_E900_4183_CE565B25106A",
      "minHeight": 1,
      "shadow": false,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "maxWidth": 1047,
      "class": "IconButton"
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
      "id": "IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE",
      "minHeight": 1,
      "shadow": false,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "maxWidth": 1047,
      "class": "IconButton"
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
      "id": "IconButton_1FCDD1EC_3A41_BB00_41C5_40B934E107FD",
      "minHeight": 1,
      "shadow": false,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "maxWidth": 1047,
      "class": "IconButton"
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
      "id": "IconButton_1F60FA0A_3A41_A900_41B0_37806583DDFA",
      "minHeight": 1,
      "shadow": false,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "maxWidth": 1047,
      "class": "IconButton"
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
      "id": "IconButton_1F6F3FC2_3A42_6703_41B1_8F08A62DBDEF",
      "minHeight": 1,
      "shadow": false,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "maxWidth": 1047,
      "class": "IconButton"
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
      "id": "IconButton_19D163A9_3C7E_F3DE_41A3_87FA2E93B35E",
      "minHeight": 1,
      "shadow": false,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "maxWidth": 1047,
      "class": "IconButton"
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
      "id": "IconButton_1FB96738_3C7E_733E_41C6_983EE3914862",
      "minHeight": 1,
      "shadow": false,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "maxWidth": 1047,
      "class": "IconButton"
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
      "id": "IconButton_1847A9CB_3C7E_DF51_419A_4CF09BBDE896",
      "minHeight": 1,
      "shadow": false,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "maxWidth": 1047,
      "class": "IconButton"
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
      "id": "IconButton_1EBE6D84_3C7A_D7D6_41B3_9EAE2E7C9BD7",
      "minHeight": 1,
      "shadow": false,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "maxWidth": 1047,
      "class": "IconButton"
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
      "id": "IconButton_1F48A18A_3C7B_EFD2_4197_7BC93E0D00E8",
      "minHeight": 1,
      "shadow": false,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "maxWidth": 1047,
      "class": "IconButton"
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
      "id": "IconButton_1ED2DB23_3C7A_5CD2_41CC_37ABD2998C29",
      "minHeight": 1,
      "shadow": false,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "maxWidth": 1047,
      "class": "IconButton"
     }
    ],
    "class": "Container",
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
      "id": "IconButton_249849C4_3A42_EB07_41C4_34AFE0395A2F",
      "minHeight": 1,
      "shadow": false,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "maxWidth": 84,
      "class": "IconButton"
     }
    ],
    "class": "Container",
    "verticalAlign": "middle",
    "scrollBarVisible": "rollOver"
   }
  ],
  "class": "Container",
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
    "id": "Container_03416CBF_1280_710E_4175_84AC659A193B",
    "minHeight": 1,
    "shadow": false,
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
      "id": "IconButton_29D9B918_3A5E_6B0F_41A2_1E183D537C65",
      "minHeight": 1,
      "shadow": false,
      "paddingTop": 0,
      "left": "0%",
      "backgroundOpacity": 0,
      "maxWidth": 108,
      "class": "IconButton"
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
      "minHeight": 1,
      "shadow": false,
      "id": "IconButton_2803122B_3A42_5901_4195_B932A21E4536",
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "maxWidth": 108,
      "right": "-2.13%",
      "class": "IconButton"
     }
    ],
    "class": "Container",
    "verticalAlign": "top",
    "scrollBarVisible": "rollOver"
   }
  ],
  "class": "Container",
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
  "minHeight": 1,
  "shadow": false,
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
    "minHeight": 1,
    "paddingTop": 0,
    "left": -0.04,
    "backgroundOpacity": 0,
    "class": "Image",
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
        "minHeight": 1,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "maxWidth": 500,
        "class": "Image",
        "verticalAlign": "middle"
       }
      ],
      "class": "Container",
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
      "minHeight": 1,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "class": "Container",
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
            "minHeight": 1,
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "maxWidth": 108,
            "class": "Image",
            "verticalAlign": "middle"
           }
          ],
          "class": "Container",
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
            "minHeight": 1,
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "maxWidth": 108,
            "class": "Image",
            "verticalAlign": "middle"
           }
          ],
          "class": "Container",
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
          "minHeight": 1,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "children": [
           {
            "paddingRight": 0,
            "paddingLeft": 0,
            "height": 36,
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
            "minHeight": 1,
            "paddingTop": 0,
            "backgroundOpacity": 0,
            "maxWidth": 275,
            "class": "Image",
            "verticalAlign": "middle"
           }
          ],
          "class": "Container",
          "verticalAlign": "middle",
          "scrollBarVisible": "rollOver"
         }
        ],
        "class": "Container",
        "verticalAlign": "middle",
        "scrollBarVisible": "rollOver"
       }
      ],
      "class": "Container",
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
        "id": "Image_285CB42E_3BF6_D4D3_41A3_9A8D7F05B2C3",
        "minHeight": 1,
        "shadow": false,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "maxWidth": 726,
        "class": "Image",
        "verticalAlign": "middle"
       }
      ],
      "class": "Container",
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
        "minHeight": 1,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "paddingLeft": 0,
          "height": 25,
          "width": "100%",
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
          "minHeight": 1,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "maxWidth": 117,
          "class": "Image",
          "verticalAlign": "middle"
         }
        ],
        "class": "Container",
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
          "minHeight": 1,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "maxWidth": 258,
          "class": "Image",
          "verticalAlign": "middle"
         }
        ],
        "class": "Container",
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
        "minHeight": 1,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "paddingLeft": 0,
          "height": 25,
          "width": "99.44%",
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
          "minHeight": 1,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "maxWidth": 408,
          "class": "Image",
          "verticalAlign": "middle"
         }
        ],
        "class": "Container",
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
          "minHeight": 1,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "maxWidth": 1096,
          "class": "Image",
          "verticalAlign": "middle"
         }
        ],
        "class": "Container",
        "verticalAlign": "middle",
        "scrollBarVisible": "rollOver"
       }
      ],
      "class": "Container",
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
        "minHeight": 1,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "paddingLeft": 0,
          "height": 49,
          "width": "99.857%",
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
          "minHeight": 1,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "maxWidth": 734,
          "class": "Image",
          "verticalAlign": "middle"
         }
        ],
        "class": "Container",
        "verticalAlign": "middle",
        "scrollBarVisible": "rollOver"
       }
      ],
      "class": "Container",
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
        "id": "Image_2A70BEF1_3BFA_754E_41A1_D377ED2E5E7C",
        "minHeight": 1,
        "shadow": false,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "maxWidth": 726,
        "class": "Image",
        "verticalAlign": "middle"
       }
      ],
      "class": "Container",
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
        "height": "76.786%",
        "width": "15.767%",
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
        "minHeight": 1,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "paddingLeft": 0,
          "height": 40,
          "width": "80.137%",
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
          "minHeight": 1,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "maxWidth": 117,
          "class": "Image",
          "verticalAlign": "middle"
         }
        ],
        "class": "Container",
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
          "minHeight": 1,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "maxWidth": 222,
          "class": "Image",
          "verticalAlign": "middle"
         }
        ],
        "class": "Container",
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
        "width": "54.644%",
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
        "minHeight": 1,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "paddingLeft": 0,
          "height": 41,
          "width": "94.251%",
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
          "minHeight": 1,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "maxWidth": 459,
          "class": "Image",
          "verticalAlign": "middle"
         }
        ],
        "class": "Container",
        "verticalAlign": "middle",
        "scrollBarVisible": "rollOver"
       }
      ],
      "class": "Container",
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
        "minHeight": 1,
        "paddingTop": 0,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "paddingLeft": 0,
          "height": 25,
          "width": "100%",
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
          "minHeight": 1,
          "paddingTop": 0,
          "backgroundOpacity": 0,
          "maxWidth": 297,
          "class": "Image",
          "verticalAlign": "middle"
         }
        ],
        "class": "Container",
        "verticalAlign": "middle",
        "scrollBarVisible": "rollOver"
       }
      ],
      "class": "Container",
      "verticalAlign": "middle",
      "scrollBarVisible": "rollOver"
     }
    ],
    "class": "Container",
    "verticalAlign": "middle",
    "scrollBarVisible": "rollOver"
   },
   {
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "paddingLeft": 0,
    "height": "8.043%",
    "width": "4.946%",
    "borderRadius": 0,
    "borderSize": 0,
    "gap": 10,
    "contentOpaque": false,
    "layout": "horizontal",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "horizontalAlign": "right",
    "top": "2.81%",
    "paddingBottom": 0,
    "minWidth": 1,
    "shadow": false,
    "id": "Container_374175DE_3A41_DB00_41A6_956534949930",
    "minHeight": 1,
    "paddingTop": 0,
    "left": "2.58%",
    "backgroundOpacity": 0,
    "children": [
     {
      "verticalAlign": "middle",
      "paddingRight": 0,
      "mode": "push",
      "paddingLeft": 0,
      "height": "77.027%",
      "width": "74.39%",
      "iconURL": "skin/IconButton_3733F6B1_3A43_D900_41C0_740B1687B1C2.png",
      "transparencyActive": false,
      "borderRadius": 0,
      "borderSize": 0,
      "click": "this.setComponentVisibility(this.Container_048CC2F3_11E9_4B79_4186_517CBA014E52, false, 0, null, null, false)",
      "horizontalAlign": "center",
      "cursor": "hand",
      "paddingBottom": 0,
      "maxHeight": 72,
      "minWidth": 1,
      "shadow": false,
      "id": "IconButton_3733F6B1_3A43_D900_41C0_740B1687B1C2",
      "minHeight": 1,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "maxWidth": 72,
      "class": "IconButton"
     }
    ],
    "class": "Container",
    "verticalAlign": "bottom",
    "scrollBarVisible": "rollOver"
   }
  ],
  "class": "Container",
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
  "id": "Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943",
  "minHeight": 1,
  "shadow": false,
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
    "id": "IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1",
    "minHeight": 1,
    "shadow": false,
    "paddingTop": 0,
    "left": "4.08%",
    "backgroundOpacity": 0,
    "maxWidth": 108,
    "class": "IconButton"
   }
  ],
  "class": "Container",
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
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "existsKey": function(key){  return key in window; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "registerKey": function(key, value){  window[key] = value; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "getKey": function(key){  return window[key]; },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); }
 },
 "id": "rootPlayer",
 "minHeight": 20,
 "vrPolyfillScale": 1,
 "shadow": false,
 "paddingTop": 0,
 "start": "this.mainPlayList.set('selectedIndex', 0); this.playList_2E50CF42_3C4C_0764_41B8_74BD09F2923B.set('selectedIndex', 0)",
 "class": "Player",
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver"
})