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
      "useHandCursor": true,
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_0FD85D6E_0673_DED7_40FD_D23817113C40, this.camera_269FD5CD_3C57_F751_4195_FB215BF91020); this.mainPlayList.set('selectedIndex', 1); eval('localStorage.setItem(\"displayIndex\", 1);');"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 1.46,
        "hfov": 11.67,
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
      "useHandCursor": true,
      "enabledInCardboard": true,
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
        "hfov": 10.99,
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
  "cardboardMenu": {
   "rollOverOpacity": 0.8,
   "class": "Menu",
   "fontColor": "#FFFFFF",
   "rollOverFontColor": "#FFFFFF",
   "label": "Media",
   "backgroundColor": "#404040",
   "fontFamily": "Arial",
   "opacity": 0.4,
   "rollOverBackgroundColor": "#000000",
   "id": "Menu_20C69536_3C57_F732_41A8_C38557D6B811",
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
   "selectedBackgroundColor": "#202020"
  },
  "pitch": 0,
  "thumbnailUrl": "media/panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D_t.jpg",
  "hfovMin": 60,
  "id": "panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D",
  "mapLocations": [
   {
    "x": 311.48,
    "class": "PanoramaMapLocation",
    "y": 134.01,
    "angle": 111.8,
    "map": {
     "class": "Map",
     "fieldOfViewOverlayInsideColor": "#10A8B3",
     "minimumZoomFactor": 0.5,
     "width": 1021,
     "id": "map_29873A27_3A46_6901_41B5_9F01B5E5FBDE",
     "fieldOfViewOverlayInsideOpacity": 0.6,
     "thumbnailUrl": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_t.png",
     "maximumZoomFactor": 1.2,
     "fieldOfViewOverlayRadiusScale": 0.05,
     "height": 652,
     "label": "FloorPlan",
     "fieldOfViewOverlayOutsideOpacity": 0,
     "overlays": [
      {
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_29AEA040_3A41_D900_41A4_C065DF834BAD",
       "map": {
        "offsetY": 0,
        "x": 300.73,
        "width": 21.5,
        "class": "HotspotMapOverlayMap",
        "y": 123.05,
        "height": 21.92,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_46_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 300.73,
        "class": "HotspotMapOverlayImage",
        "y": 123.05,
        "width": 21.5,
        "height": 21.92,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_46.png"
          }
         ]
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
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_2FE028EB_3A7E_6901_41C5_355757798066",
       "map": {
        "offsetY": 0,
        "x": 345.6,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 142.39,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_47_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 345.6,
        "class": "HotspotMapOverlayImage",
        "y": 142.39,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_47.png"
          }
         ]
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
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_2E611FBB_3A7E_A700_41C9_8B6D1C26D8C6",
       "map": {
        "offsetY": 0,
        "x": 392.63,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 161.68,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_48_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 392.63,
        "class": "HotspotMapOverlayImage",
        "y": 161.68,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_48.png"
          }
         ]
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
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_2F94B01B_3A41_F901_41B2_A7221CDA962E",
       "map": {
        "offsetY": 0,
        "x": 443.29,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 184.43,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_49_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 443.29,
        "class": "HotspotMapOverlayImage",
        "y": 184.43,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_49.png"
          }
         ]
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
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_2F2AF091_3A42_F901_41C2_278D59616BE9",
       "map": {
        "offsetY": 0,
        "x": 503.2,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 203.72,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_50_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 503.2,
        "class": "HotspotMapOverlayImage",
        "y": 203.72,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_50.png"
          }
         ]
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
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_2FD7D2D0_3A42_791F_41C1_A52580DFABE3",
       "map": {
        "offsetY": 0,
        "x": 536.73,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 217.96,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_51_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 536.73,
        "class": "HotspotMapOverlayImage",
        "y": 217.96,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_51.png"
          }
         ]
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
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_2CD436D3_3A42_7901_41B6_BA932CFA9D4F",
       "map": {
        "offsetY": 0,
        "x": 575.19,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 245.81,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_52_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 575.19,
        "class": "HotspotMapOverlayImage",
        "y": 245.81,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_52.png"
          }
         ]
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
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_2C2FAA19_3A46_A901_41AF_52E4607E0002",
       "map": {
        "offsetY": 0,
        "x": 625.79,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 208.65,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_53_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 625.79,
        "class": "HotspotMapOverlayImage",
        "y": 208.65,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_53.png"
          }
         ]
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
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_2DAFDF3D_3A47_E701_41C7_6C42516C32F9",
       "map": {
        "offsetY": 0,
        "x": 624.43,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 148.12,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_54_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 624.43,
        "class": "HotspotMapOverlayImage",
        "y": 148.12,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_54.png"
          }
         ]
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
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_2DB3429C_3A46_D907_41A1_5F52442CB33F",
       "map": {
        "offsetY": 0,
        "x": 675.77,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 240.08,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_55_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 675.77,
        "class": "HotspotMapOverlayImage",
        "y": 240.08,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_55.png"
          }
         ]
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
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_2C24E640_3A42_7900_41A1_0CAFF542BF8E",
       "map": {
        "offsetY": 0,
        "x": 737.04,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 239.35,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_56_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 737.04,
        "class": "HotspotMapOverlayImage",
        "y": 239.35,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_56.png"
          }
         ]
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
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_22971B09_3A43_AF01_415B_60C5EA13E0A8",
       "map": {
        "offsetY": 0,
        "x": 802,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 240.08,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_57_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 802,
        "class": "HotspotMapOverlayImage",
        "y": 240.08,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_57.png"
          }
         ]
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
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_22A39430_3A42_F91F_41C1_EF59BA985426",
       "map": {
        "offsetY": 0,
        "x": 847.61,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 240.08,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_58_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 847.61,
        "class": "HotspotMapOverlayImage",
        "y": 240.08,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_58.png"
          }
         ]
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
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_2285876A_3A41_A700_41B5_22CAD315240C",
       "map": {
        "offsetY": 0,
        "x": 888.28,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 242.92,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_59_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 888.28,
        "class": "HotspotMapOverlayImage",
        "y": 242.92,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_59.png"
          }
         ]
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
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_223AD664_3A4E_5900_4197_EBC53DA866E6",
       "map": {
        "offsetY": 0,
        "x": 936.73,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 241.5,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_60_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 936.73,
        "class": "HotspotMapOverlayImage",
        "y": 241.5,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_60.png"
          }
         ]
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
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_228F5BAB_3A4E_6F00_41BC_F466D72D81AF",
       "map": {
        "offsetY": 0,
        "x": 618.02,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 300.1,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_61_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 618.02,
        "class": "HotspotMapOverlayImage",
        "y": 300.1,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_61.png"
          }
         ]
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
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_22D1DDE7_3A4E_6B01_41AF_CB4B35E43873",
       "map": {
        "offsetY": 0,
        "x": 665.73,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 306.4,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_62_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 665.73,
        "class": "HotspotMapOverlayImage",
        "y": 306.4,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_62.png"
          }
         ]
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
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_23B489C3_3A4E_6B01_41A7_3A7F463CF95C",
       "map": {
        "offsetY": 0,
        "x": 664.31,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 333.52,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_63_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 664.31,
        "class": "HotspotMapOverlayImage",
        "y": 333.52,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_63.png"
          }
         ]
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
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_239497FF_3A42_A701_41C8_697189C38707",
       "map": {
        "offsetY": 0,
        "x": 660.11,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 376.29,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_64_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 660.11,
        "class": "HotspotMapOverlayImage",
        "y": 376.29,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_64.png"
          }
         ]
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
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_23D8CC03_3A43_A900_41A4_600962EFA975",
       "map": {
        "offsetY": 0,
        "x": 674.35,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 424.8,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_65_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 674.35,
        "class": "HotspotMapOverlayImage",
        "y": 424.8,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_65.png"
          }
         ]
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
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_20D27634_3A42_B907_41BF_E598077A4320",
       "map": {
        "offsetY": 0,
        "x": 626.53,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 332.04,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_66_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 626.53,
        "class": "HotspotMapOverlayImage",
        "y": 332.04,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_66.png"
          }
         ]
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
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_20209BFB_3A41_AF01_41A6_1453590B5263",
       "map": {
        "offsetY": 0,
        "x": 587.33,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 345.6,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_67_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 587.33,
        "class": "HotspotMapOverlayImage",
        "y": 345.6,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_67.png"
          }
         ]
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
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_20EFB36E_3A46_5F03_41A3_9A6D758385F0",
       "map": {
        "offsetY": 0,
        "x": 560.21,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 361.32,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_68_map.gif"
          }
         ]
        }
       },
       "image": {
        "x": 560.21,
        "class": "HotspotMapOverlayImage",
        "y": 361.32,
        "width": 21,
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_HS_68.png"
          }
         ]
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
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 652,
        "width": 1021,
        "class": "ImageResourceLevel",
        "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE.png"
       },
       {
        "height": 326,
        "width": 510,
        "class": "ImageResourceLevel",
        "url": "media/map_29873A27_3A46_6901_41B5_9F01B5E5FBDE_lq.png",
        "grayscale": true
       }
      ]
     },
     "fieldOfViewOverlayOutsideColor": "#00FF99",
     "scaleMode": "fit_inside",
     "initialZoomFactor": 1
    }
   }
  ],
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
         "useHandCursor": true,
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544, this.camera_2715A6E5_3C57_F556_41CB_9FE4D37F2931); this.mainPlayList.set('selectedIndex', 2); eval('localStorage.setItem(\"displayIndex\", 2);');"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 0.64,
           "hfov": 23.04,
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
         "useHandCursor": true,
         "enabledInCardboard": true,
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
           "hfov": 10.94,
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
         "useHandCursor": true,
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D, this.camera_270D56D8_3C57_F57E_41C9_755C3FD8A0C6); this.mainPlayList.set('selectedIndex', 0); eval('localStorage.setItem(\"displayIndex\", 0);');"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -179.67,
           "hfov": 15.74,
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
         "useHandCursor": true,
         "enabledInCardboard": true,
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
           "hfov": 11.44,
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
     "cardboardMenu": "this.Menu_20C69536_3C57_F732_41A8_C38557D6B811",
     "pitch": 0,
     "thumbnailUrl": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_t.jpg",
     "hfovMin": 60,
     "id": "panorama_0FD85D6E_0673_DED7_40FD_D23817113C40",
     "mapLocations": [
      {
       "x": 356.1,
       "class": "PanoramaMapLocation",
       "y": 152.89,
       "angle": 108.43,
       "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE"
      }
     ],
     "label": "C02",
     "hfovMax": 120,
     "hfov": 360,
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D",
       "class": "AdjacentPanorama",
       "yaw": -179.67,
       "distance": 1,
       "backwardYaw": 1.46
      },
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
            "useHandCursor": true,
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_0FD85D6E_0673_DED7_40FD_D23817113C40, this.camera_2772E780_3C57_F3CF_41C3_A0723518C188); this.mainPlayList.set('selectedIndex', 1)"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 0.35,
              "hfov": 13.93,
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
            "useHandCursor": true,
            "enabledInCardboard": true,
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
              "hfov": 11.17,
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
            "useHandCursor": true,
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24, this.camera_277E678E_3C57_F3D3_4197_D7CC53EA06E6); this.mainPlayList.set('selectedIndex', 3)"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -177.99,
              "hfov": 10.99,
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
            "useHandCursor": true,
            "enabledInCardboard": true,
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
              "hfov": 10.19,
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
        "cardboardMenu": "this.Menu_20C69536_3C57_F732_41A8_C38557D6B811",
        "pitch": 0,
        "thumbnailUrl": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_t.jpg",
        "hfovMin": 60,
        "id": "panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
        "mapLocations": [
         {
          "x": 403.13,
          "class": "PanoramaMapLocation",
          "y": 172.18,
          "angle": -70.14,
          "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE"
         }
        ],
        "label": "C03",
        "hfovMax": 120,
        "hfov": 360,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_0FD85D6E_0673_DED7_40FD_D23817113C40",
          "class": "AdjacentPanorama",
          "yaw": 0.35,
          "distance": 1,
          "backwardYaw": 0.64
         },
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
               "useHandCursor": true,
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA, this.camera_27EF980C_3C57_FCD6_41C2_957CA25333EC); this.mainPlayList.set('selectedIndex', 4)"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -2.21,
                 "hfov": 11.33,
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
               "useHandCursor": true,
               "enabledInCardboard": true,
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
                 "hfov": 10.72,
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
               "useHandCursor": true,
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544, this.camera_27FB281A_3C57_FCF2_4177_B6EB3F1C2B86); this.mainPlayList.set('selectedIndex', 2)"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -179.28,
                 "hfov": 8.42,
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
               "useHandCursor": true,
               "enabledInCardboard": true,
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
                 "hfov": 10.42,
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
           "cardboardMenu": "this.Menu_20C69536_3C57_F732_41A8_C38557D6B811",
           "pitch": 0,
           "thumbnailUrl": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_t.jpg",
           "hfovMin": 60,
           "id": "panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
           "mapLocations": [
            {
             "x": 453.79,
             "class": "PanoramaMapLocation",
             "y": 194.93,
             "angle": 107.74,
             "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE"
            }
           ],
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
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24, this.camera_2789579C_3C57_F3F7_41BF_A98897187E95); this.mainPlayList.set('selectedIndex', 3)"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -2.69,
                    "hfov": 9.92,
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
                  "useHandCursor": true,
                  "enabledInCardboard": true,
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
                    "hfov": 11.08,
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
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4, this.camera_2796A7AA_3C57_F3D3_41BC_DD7F12D23F23); this.mainPlayList.set('selectedIndex', 5)"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -179.87,
                    "hfov": 11.73,
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
                  "useHandCursor": true,
                  "enabledInCardboard": true,
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
                    "hfov": 10.89,
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
              "cardboardMenu": "this.Menu_20C69536_3C57_F732_41A8_C38557D6B811",
              "pitch": 0,
              "thumbnailUrl": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_t.jpg",
              "hfovMin": 60,
              "id": "panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
              "mapLocations": [
               {
                "x": 513.7,
                "class": "PanoramaMapLocation",
                "y": 214.22,
                "angle": -68.2,
                "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE"
               }
              ],
              "label": "C05",
              "hfovMax": 120,
              "hfov": 360,
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
                "class": "AdjacentPanorama",
                "yaw": -2.69,
                "distance": 1,
                "backwardYaw": -2.21
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
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_26E40683_3C57_F5D2_41C4_5CCC96DA56EC); this.mainPlayList.set('selectedIndex', 6)"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 7.93,
                       "hfov": 10.58,
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
                     "useHandCursor": true,
                     "enabledInCardboard": true,
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
                       "hfov": 10.12,
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
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA, this.camera_26DD0675_3C57_F536_41C8_8827044F4CE7); this.mainPlayList.set('selectedIndex', 4)"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -178.55,
                       "hfov": 12.32,
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
                     "useHandCursor": true,
                     "enabledInCardboard": true,
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
                       "hfov": 10.54,
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
                 "cardboardMenu": "this.Menu_20C69536_3C57_F732_41A8_C38557D6B811",
                 "pitch": 0,
                 "thumbnailUrl": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_t.jpg",
                 "hfovMin": 60,
                 "id": "panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
                 "mapLocations": [
                  {
                   "x": 547.23,
                   "class": "PanoramaMapLocation",
                   "y": 228.46,
                   "angle": 109.18,
                   "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE"
                  }
                 ],
                 "label": "C06",
                 "hfovMax": 120,
                 "hfov": 360,
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
                   "class": "AdjacentPanorama",
                   "yaw": -178.55,
                   "distance": 1,
                   "backwardYaw": -179.87
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
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_26B80613_3C57_F4F1_41C2_A558331B818F); this.mainPlayList.set('selectedIndex', 7)"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 4.74,
                          "hfov": 7.66,
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
                        "useHandCursor": true,
                        "enabledInCardboard": true,
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
                          "hfov": 6.67,
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
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_26B3C606_3C57_F4D3_41A5_42D938287E46); this.mainPlayList.set('selectedIndex', 15)"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 156.92,
                          "hfov": 6.56,
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
                        "useHandCursor": true,
                        "enabledInCardboard": true,
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
                          "hfov": 7,
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
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4, this.camera_26BDB622_3C57_F4D3_41BA_F5222F227441); this.mainPlayList.set('selectedIndex', 5)"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": -96.27,
                          "hfov": 18.69,
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
                        "useHandCursor": true,
                        "enabledInCardboard": true,
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
                          "hfov": 11.05,
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
                    "cardboardMenu": "this.Menu_20C69536_3C57_F732_41A8_C38557D6B811",
                    "pitch": 0,
                    "thumbnailUrl": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_t.jpg",
                    "hfovMin": 60,
                    "id": "panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                    "mapLocations": [
                     {
                      "x": 585.69,
                      "class": "PanoramaMapLocation",
                      "y": 256.31,
                      "angle": 41.19,
                      "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE"
                     }
                    ],
                    "label": "C07",
                    "hfovMax": 120,
                    "hfov": 360,
                    "adjacentPanoramas": [
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
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_26EA6691_3C57_F5CE_4188_590F2854799E); this.mainPlayList.set('selectedIndex', 22)"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": -174.64,
                             "hfov": 11.08,
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
                           "useHandCursor": true,
                           "enabledInCardboard": true,
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
                             "hfov": 8.18,
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
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_26F2F6A0_3C57_F5CE_41C3_D394051C0B58); this.mainPlayList.set('selectedIndex', 6)"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": -18.92,
                             "hfov": 6.46,
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
                           "useHandCursor": true,
                           "enabledInCardboard": true,
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
                             "hfov": 8.46,
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
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_26F8E6AE_3C57_F5D2_41CA_907D7A2C7289); this.mainPlayList.set('selectedIndex', 16)"
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": 113.51,
                             "hfov": 8.52,
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
                           "useHandCursor": true,
                           "enabledInCardboard": true,
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
                             "hfov": 6.94,
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
                             "pitch": -6.29
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
                       "cardboardMenu": "this.Menu_20C69536_3C57_F732_41A8_C38557D6B811",
                       "pitch": 0,
                       "thumbnailUrl": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_t.jpg",
                       "hfovMin": 60,
                       "id": "panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                       "mapLocations": [
                        {
                         "x": 628.52,
                         "class": "PanoramaMapLocation",
                         "y": 310.6,
                         "angle": 0,
                         "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE"
                        }
                       ],
                       "label": "C16",
                       "hfovMax": 120,
                       "hfov": 360,
                       "adjacentPanoramas": [
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
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67, this.camera_27BBF7D4_3C57_F376_41C8_5F452876400A); this.mainPlayList.set('selectedIndex', 21)"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": 87.82,
                                "hfov": 9.82,
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
                              "useHandCursor": true,
                              "enabledInCardboard": true,
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
                                "hfov": 9.41,
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
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_27ADB7C5_3C57_F356_41C6_DE4E98F16ECB); this.mainPlayList.set('selectedIndex', 18)"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -6.68,
                                "hfov": 12.01,
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
                              "useHandCursor": true,
                              "enabledInCardboard": true,
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
                                "hfov": 7.27,
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
                                   "height": 79,
                                   "width": 84,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_18_0_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 12.09,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -169.25,
                                "pitch": -4.19
                               }
                              ],
                              "id": "overlay_2D332042_21FB_FAB8_41C0_7FD391BDA82E",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_27A237B8_3C57_F33F_41C1_373304DE47D0); this.mainPlayList.set('selectedIndex', 15)"
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -169.25,
                                "hfov": 12.09,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 159,
                                   "width": 168,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_18_0.png"
                                  }
                                 ]
                                },
                                "pitch": -4.19
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
                                   "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_19_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 11.22,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -168.6,
                                "pitch": -10.52
                               }
                              ],
                              "id": "overlay_2C7EB04D_21FB_7ABB_4179_D08D1BA68999",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
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
                                "yaw": -168.6,
                                "hfov": 11.22,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 93,
                                   "width": 158,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_19_0.png"
                                  }
                                 ]
                                },
                                "pitch": -10.52
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
                          "cardboardMenu": "this.Menu_20C69536_3C57_F732_41A8_C38557D6B811",
                          "pitch": 0,
                          "thumbnailUrl": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_t.jpg",
                          "hfovMin": 60,
                          "id": "panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                          "mapLocations": [
                           {
                            "x": 637.03,
                            "class": "PanoramaMapLocation",
                            "y": 342.54,
                            "angle": 144.87,
                            "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE"
                           }
                          ],
                          "label": "C23",
                          "hfovMax": 120,
                          "hfov": 360,
                          "adjacentPanoramas": [
                           {
                            "panorama": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                            "class": "AdjacentPanorama",
                            "yaw": -169.25,
                            "distance": 1,
                            "backwardYaw": -174.64
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
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_272A670F_3C57_F4D2_41CB_3F0232D82E0F); this.mainPlayList.set('selectedIndex', 17)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": 29.17,
                                   "hfov": 10.89,
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
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
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
                                   "hfov": 8.31,
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
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_271B26F4_3C57_F536_41BF_6BF3DFDD6500); this.mainPlayList.set('selectedIndex', 22)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": -53.28,
                                   "hfov": 18.67,
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
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
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
                                   "hfov": 7.97,
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
                                      "height": 107,
                                      "width": 88,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_14_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 12.8,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 168.9,
                                   "pitch": 2.09
                                  }
                                 ],
                                 "id": "overlay_05D41018_12AB_46B7_41A1_DDBF885F6640",
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D, this.camera_27227701_3C57_F4CE_41CD_F62F0054B221); this.mainPlayList.set('selectedIndex', 19)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": 168.9,
                                   "hfov": 12.8,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 214,
                                      "width": 177,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_14_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": 2.09
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
                                      "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_15_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 9.38,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 168.89,
                                   "pitch": -5.96
                                  }
                                 ],
                                 "id": "overlay_0ADD07F7_12A8_C979_419E_40680DB583A7",
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
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
                                   "yaw": 168.89,
                                   "hfov": 9.38,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 80,
                                      "width": 131,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_15_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -5.96
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
                             "cardboardMenu": "this.Menu_20C69536_3C57_F732_41A8_C38557D6B811",
                             "pitch": 0,
                             "thumbnailUrl": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_t.jpg",
                             "hfovMin": 60,
                             "id": "panorama_0F84F19D_0671_6675_4191_5761B2287855",
                             "mapLocations": [
                              {
                               "x": 670.61,
                               "class": "PanoramaMapLocation",
                               "y": 386.79,
                               "angle": 0,
                               "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE"
                              }
                             ],
                             "label": "C19",
                             "hfovMax": 120,
                             "hfov": 360,
                             "adjacentPanoramas": [
                              {
                               "panorama": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                               "class": "AdjacentPanorama",
                               "yaw": -53.28,
                               "distance": 1,
                               "backwardYaw": -6.68
                              },
                              {
                               "panorama": {
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
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_27E157FE_3C57_F332_41CA_54D2446C0A30); this.mainPlayList.set('selectedIndex', 18)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": -174.74,
                                      "hfov": 11.3,
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
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
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
                                      "hfov": 8.44,
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
                                "cardboardMenu": "this.Menu_20C69536_3C57_F732_41A8_C38557D6B811",
                                "pitch": 0,
                                "thumbnailUrl": "media/panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D_t.jpg",
                                "hfovMin": 60,
                                "id": "panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D",
                                "mapLocations": [
                                 {
                                  "x": 684.85,
                                  "class": "PanoramaMapLocation",
                                  "y": 435.3,
                                  "angle": 181.22,
                                  "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE"
                                 }
                                ],
                                "label": "C20",
                                "hfovMax": 120,
                                "hfov": 360,
                                "adjacentPanoramas": [
                                 {
                                  "panorama": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
                                  "class": "AdjacentPanorama",
                                  "yaw": -174.74,
                                  "distance": 1,
                                  "backwardYaw": 168.9
                                 }
                                ],
                                "vfov": 180
                               },
                               "class": "AdjacentPanorama",
                               "yaw": 168.9,
                               "distance": 1,
                               "backwardYaw": -174.74
                              },
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
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_26D78667_3C57_F552_41C1_D59C40C84C7A); this.mainPlayList.set('selectedIndex', 16)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": -143.45,
                                      "hfov": 11.58,
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
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
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
                                      "hfov": 7.99,
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
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_26D2B659_3C57_F57E_4174_51700750204B); this.mainPlayList.set('selectedIndex', 18)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": 7.69,
                                      "hfov": 10.6,
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
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
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
                                      "hfov": 7.72,
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
                                      "pitch": -4.9
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
                                "cardboardMenu": "this.Menu_20C69536_3C57_F732_41A8_C38557D6B811",
                                "pitch": 0,
                                "thumbnailUrl": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_t.jpg",
                                "hfovMin": 60,
                                "id": "panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
                                "mapLocations": [
                                 {
                                  "x": 674.81,
                                  "class": "PanoramaMapLocation",
                                  "y": 344.02,
                                  "angle": 163.35,
                                  "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE"
                                 }
                                ],
                                "label": "C18",
                                "hfovMax": 120,
                                "hfov": 360,
                                "adjacentPanoramas": [
                                 {
                                  "panorama": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
                                  "class": "AdjacentPanorama",
                                  "yaw": 7.69,
                                  "distance": 1,
                                  "backwardYaw": 29.17
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
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_2691E5A4_3C57_F7D6_4171_EFE9614C49A0); this.mainPlayList.set('selectedIndex', 9)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": 25.67,
                                         "hfov": 11.11,
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
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
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
                                         "hfov": 6.78,
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
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_269975C0_3C57_F74E_41C7_A9888B4F1F68); this.mainPlayList.set('selectedIndex', 17)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": 152.96,
                                         "hfov": 11.57,
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
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
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
                                         "hfov": 7.37,
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
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_269555B2_3C57_F732_41C2_11319F835E36); this.mainPlayList.set('selectedIndex', 15)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": -107.62,
                                         "hfov": 8.92,
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
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
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
                                         "hfov": 9.3,
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
                                         "pitch": -8.27
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
                                   "cardboardMenu": "this.Menu_20C69536_3C57_F732_41A8_C38557D6B811",
                                   "pitch": 0,
                                   "thumbnailUrl": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_t.jpg",
                                   "hfovMin": 60,
                                   "id": "panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                                   "mapLocations": [
                                    {
                                     "x": 676.23,
                                     "class": "PanoramaMapLocation",
                                     "y": 316.9,
                                     "angle": 0,
                                     "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE"
                                    }
                                   ],
                                   "label": "C17",
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
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2, this.camera_26A9D5EA_3C57_F753_41B0_295E89B010B4); this.mainPlayList.set('selectedIndex', 10)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": -0.88,
                                            "hfov": 11.51,
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
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
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
                                            "hfov": 11.22,
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
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_26ADB5F8_3C57_F73F_416F_CB848B6BC360); this.mainPlayList.set('selectedIndex', 7)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": -143.14,
                                            "hfov": 14.11,
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
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
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
                                            "hfov": 8.33,
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
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_26A365DB_3C57_F771_41BD_6245ED3B703D); this.mainPlayList.set('selectedIndex', 16)"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": 81.58,
                                            "hfov": 9.34,
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
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
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
                                            "hfov": 8.38,
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
                                            "pitch": -7.4
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
                                      "cardboardMenu": "this.Menu_20C69536_3C57_F732_41A8_C38557D6B811",
                                      "pitch": 0,
                                      "thumbnailUrl": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_t.jpg",
                                      "hfovMin": 60,
                                      "id": "panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                                      "mapLocations": [
                                       {
                                        "x": 686.27,
                                        "class": "PanoramaMapLocation",
                                        "y": 250.58,
                                        "angle": 91.91,
                                        "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE"
                                       }
                                      ],
                                      "label": "C10",
                                      "hfovMax": 120,
                                      "hfov": 360,
                                      "adjacentPanoramas": [
                                       {
                                        "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                                        "class": "AdjacentPanorama",
                                        "yaw": 81.58,
                                        "distance": 1,
                                        "backwardYaw": 25.67
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
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_26CDC64C_3C57_F557_41C7_0BC92831FE5A); this.mainPlayList.set('selectedIndex', 9)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": -0.95,
                                               "hfov": 11.41,
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
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
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
                                               "hfov": 11.36,
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
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E, this.camera_26C7863E_3C57_F533_41B1_BDE65495A80B); this.mainPlayList.set('selectedIndex', 11)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": 178.45,
                                               "hfov": 22.44,
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
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
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
                                               "hfov": 10.52,
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
                                         "cardboardMenu": "this.Menu_20C69536_3C57_F732_41A8_C38557D6B811",
                                         "pitch": 0,
                                         "thumbnailUrl": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_t.jpg",
                                         "hfovMin": 60,
                                         "id": "panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
                                         "mapLocations": [
                                          {
                                           "x": 747.54,
                                           "class": "PanoramaMapLocation",
                                           "y": 249.85,
                                           "angle": -86.82,
                                           "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE"
                                          }
                                         ],
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
                                                "useHandCursor": true,
                                                "enabledInCardboard": true,
                                                "class": "HotspotPanoramaOverlay",
                                                "areas": [
                                                 {
                                                  "mapColor": "#FF0000",
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2, this.camera_27C827E2_3C57_F352_41CD_EED890CD4F9E); this.mainPlayList.set('selectedIndex', 10)"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "yaw": 0.03,
                                                  "hfov": 10.93,
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
                                                "useHandCursor": true,
                                                "enabledInCardboard": true,
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
                                                  "hfov": 10.83,
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
                                                "useHandCursor": true,
                                                "enabledInCardboard": true,
                                                "class": "HotspotPanoramaOverlay",
                                                "areas": [
                                                 {
                                                  "mapColor": "#FF0000",
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778, this.camera_27D437F0_3C57_F34E_41BC_5F00DB342F17); this.mainPlayList.set('selectedIndex', 12)"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "yaw": -178.02,
                                                  "hfov": 12.62,
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
                                                "useHandCursor": true,
                                                "enabledInCardboard": true,
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
                                                  "hfov": 10.33,
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
                                            "cardboardMenu": "this.Menu_20C69536_3C57_F732_41A8_C38557D6B811",
                                            "pitch": 0,
                                            "thumbnailUrl": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_t.jpg",
                                            "hfovMin": 60,
                                            "id": "panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
                                            "mapLocations": [
                                             {
                                              "x": 812.5,
                                              "class": "PanoramaMapLocation",
                                              "y": 250.58,
                                              "angle": -88.57,
                                              "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE"
                                             }
                                            ],
                                            "label": "C12",
                                            "hfovMax": 120,
                                            "hfov": 360,
                                            "adjacentPanoramas": [
                                             {
                                              "panorama": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
                                              "class": "AdjacentPanorama",
                                              "yaw": 0.03,
                                              "distance": 1,
                                              "backwardYaw": 178.45
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
                                                   "useHandCursor": true,
                                                   "enabledInCardboard": true,
                                                   "class": "HotspotPanoramaOverlay",
                                                   "areas": [
                                                    {
                                                     "mapColor": "#FF0000",
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "click": "this.startPanoramaWithCamera(this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741, this.camera_27467747_3C57_F351_41AA_C9D67D4216FB); this.mainPlayList.set('selectedIndex', 13)"
                                                    }
                                                   ],
                                                   "items": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "yaw": -0.18,
                                                     "hfov": 14.38,
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
                                                   "useHandCursor": true,
                                                   "enabledInCardboard": true,
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
                                                     "hfov": 11.09,
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
                                                   "useHandCursor": true,
                                                   "enabledInCardboard": true,
                                                   "class": "HotspotPanoramaOverlay",
                                                   "areas": [
                                                    {
                                                     "mapColor": "#FF0000",
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "click": "this.startPanoramaWithCamera(this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E, this.camera_273E573A_3C57_F332_41BC_C2C77A256BBE); this.mainPlayList.set('selectedIndex', 11)"
                                                    }
                                                   ],
                                                   "items": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "yaw": -178.74,
                                                     "hfov": 18.94,
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
                                                   "useHandCursor": true,
                                                   "enabledInCardboard": true,
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
                                                     "hfov": 10.5,
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
                                               "cardboardMenu": "this.Menu_20C69536_3C57_F732_41A8_C38557D6B811",
                                               "pitch": 0,
                                               "thumbnailUrl": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_t.jpg",
                                               "hfovMin": 60,
                                               "id": "panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
                                               "mapLocations": [
                                                {
                                                 "x": 858.11,
                                                 "class": "PanoramaMapLocation",
                                                 "y": 250.58,
                                                 "angle": 86.73,
                                                 "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE"
                                                }
                                               ],
                                               "label": "C13",
                                               "hfovMax": 120,
                                               "hfov": 360,
                                               "adjacentPanoramas": [
                                                {
                                                 "panorama": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
                                                 "class": "AdjacentPanorama",
                                                 "yaw": -178.74,
                                                 "distance": 1,
                                                 "backwardYaw": -178.02
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
                                                      "useHandCursor": true,
                                                      "enabledInCardboard": true,
                                                      "class": "HotspotPanoramaOverlay",
                                                      "areas": [
                                                       {
                                                        "mapColor": "#FF0000",
                                                        "class": "HotspotPanoramaOverlayArea",
                                                        "click": "this.startPanoramaWithCamera(this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC, this.camera_2730471D_3C57_F4F6_4199_608B80BE2EFB); this.mainPlayList.set('selectedIndex', 14)"
                                                       }
                                                      ],
                                                      "items": [
                                                       {
                                                        "class": "HotspotPanoramaOverlayImage",
                                                        "yaw": -0.27,
                                                        "hfov": 16.77,
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
                                                      "useHandCursor": true,
                                                      "enabledInCardboard": true,
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
                                                        "hfov": 10.69,
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
                                                      "useHandCursor": true,
                                                      "enabledInCardboard": true,
                                                      "class": "HotspotPanoramaOverlay",
                                                      "areas": [
                                                       {
                                                        "mapColor": "#FF0000",
                                                        "class": "HotspotPanoramaOverlayArea",
                                                        "click": "this.startPanoramaWithCamera(this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778, this.camera_2738672B_3C57_F4D2_41B2_CD2C7E1A76CB); this.mainPlayList.set('selectedIndex', 12)"
                                                       }
                                                      ],
                                                      "items": [
                                                       {
                                                        "class": "HotspotPanoramaOverlayImage",
                                                        "yaw": -178.42,
                                                        "hfov": 21.2,
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
                                                      "useHandCursor": true,
                                                      "enabledInCardboard": true,
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
                                                        "hfov": 10.61,
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
                                                  "cardboardMenu": "this.Menu_20C69536_3C57_F732_41A8_C38557D6B811",
                                                  "pitch": 0,
                                                  "thumbnailUrl": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_t.jpg",
                                                  "hfovMin": 60,
                                                  "id": "panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
                                                  "mapLocations": [
                                                   {
                                                    "x": 898.78,
                                                    "class": "PanoramaMapLocation",
                                                    "y": 253.42,
                                                    "angle": 88.03,
                                                    "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE"
                                                   }
                                                  ],
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
                                                         "useHandCursor": true,
                                                         "enabledInCardboard": true,
                                                         "class": "HotspotPanoramaOverlay",
                                                         "areas": [
                                                          {
                                                           "mapColor": "#FF0000",
                                                           "class": "HotspotPanoramaOverlayArea",
                                                           "click": "this.startPanoramaWithCamera(this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741, this.camera_20E6B556_3C57_F772_41AE_B99FDF20B687); this.mainPlayList.set('selectedIndex', 13)"
                                                          }
                                                         ],
                                                         "items": [
                                                          {
                                                           "class": "HotspotPanoramaOverlayImage",
                                                           "yaw": 0.25,
                                                           "hfov": 17.81,
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
                                                         "useHandCursor": true,
                                                         "enabledInCardboard": true,
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
                                                           "hfov": 10.93,
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
                                                     "cardboardMenu": "this.Menu_20C69536_3C57_F732_41A8_C38557D6B811",
                                                     "pitch": 0,
                                                     "thumbnailUrl": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_t.jpg",
                                                     "hfovMin": 60,
                                                     "id": "panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
                                                     "mapLocations": [
                                                      {
                                                       "x": 947.23,
                                                       "class": "PanoramaMapLocation",
                                                       "y": 252,
                                                       "angle": -86.35,
                                                       "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE"
                                                      }
                                                     ],
                                                     "label": "C15",
                                                     "hfovMax": 120,
                                                     "hfov": 360,
                                                     "adjacentPanoramas": [
                                                      {
                                                       "panorama": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
                                                       "class": "AdjacentPanorama",
                                                       "yaw": 0.25,
                                                       "distance": 1,
                                                       "backwardYaw": -0.27
                                                      }
                                                     ],
                                                     "vfov": 180
                                                    },
                                                    "class": "AdjacentPanorama",
                                                    "yaw": -0.27,
                                                    "distance": 1,
                                                    "backwardYaw": 0.25
                                                   },
                                                   {
                                                    "panorama": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
                                                    "class": "AdjacentPanorama",
                                                    "yaw": -178.42,
                                                    "distance": 1,
                                                    "backwardYaw": -0.18
                                                   }
                                                  ],
                                                  "vfov": 180
                                                 },
                                                 "class": "AdjacentPanorama",
                                                 "yaw": -0.18,
                                                 "distance": 1,
                                                 "backwardYaw": -178.42
                                                }
                                               ],
                                               "vfov": 180
                                              },
                                              "class": "AdjacentPanorama",
                                              "yaw": -178.02,
                                              "distance": 1,
                                              "backwardYaw": -178.74
                                             }
                                            ],
                                            "vfov": 180
                                           },
                                           "class": "AdjacentPanorama",
                                           "yaw": 178.45,
                                           "distance": 1,
                                           "backwardYaw": 0.03
                                          },
                                          {
                                           "panorama": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                                           "class": "AdjacentPanorama",
                                           "yaw": -0.95,
                                           "distance": 1,
                                           "backwardYaw": -0.88
                                          }
                                         ],
                                         "vfov": 180
                                        },
                                        "class": "AdjacentPanorama",
                                        "yaw": -0.88,
                                        "distance": 1,
                                        "backwardYaw": -0.95
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
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82, this.camera_27500756_3C57_F373_41C0_D31A018ABDCF); this.mainPlayList.set('selectedIndex', 8)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": -154.28,
                                               "hfov": 7.67,
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
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
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
                                               "hfov": 7.28,
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
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_27663772_3C57_F333_41B9_967245D91578); this.mainPlayList.set('selectedIndex', 9)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": -42.13,
                                               "hfov": 11.33,
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
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
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
                                               "hfov": 8.76,
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
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_275A6764_3C57_F357_41CC_227C5E87C03F); this.mainPlayList.set('selectedIndex', 6)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": 36.85,
                                               "hfov": 6.29,
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
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
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
                                               "hfov": 6.76,
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
                                               "pitch": -6.88
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
                                         "cardboardMenu": "this.Menu_20C69536_3C57_F732_41A8_C38557D6B811",
                                         "pitch": 0,
                                         "thumbnailUrl": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_t.jpg",
                                         "hfovMin": 60,
                                         "id": "panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                                         "mapLocations": [
                                          {
                                           "x": 636.29,
                                           "class": "PanoramaMapLocation",
                                           "y": 219.15,
                                           "angle": 180.55,
                                           "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE"
                                          }
                                         ],
                                         "label": "C08",
                                         "hfovMax": 120,
                                         "hfov": 360,
                                         "adjacentPanoramas": [
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
                                                "useHandCursor": true,
                                                "enabledInCardboard": true,
                                                "class": "HotspotPanoramaOverlay",
                                                "areas": [
                                                 {
                                                  "mapColor": "#FF0000",
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_2009A828_3C57_FCDE_41C6_F74B57ED2E73); this.mainPlayList.set('selectedIndex', 7)"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "yaw": 130.14,
                                                  "hfov": 5.41,
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
                                                "useHandCursor": true,
                                                "enabledInCardboard": true,
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
                                                  "hfov": 4.75,
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
                                            "cardboardMenu": "this.Menu_20C69536_3C57_F732_41A8_C38557D6B811",
                                            "pitch": 0,
                                            "thumbnailUrl": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_t.jpg",
                                            "hfovMin": 60,
                                            "id": "panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
                                            "mapLocations": [
                                             {
                                              "x": 634.93,
                                              "class": "PanoramaMapLocation",
                                              "y": 158.62,
                                              "angle": 35.54,
                                              "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE"
                                             }
                                            ],
                                            "label": "C09",
                                            "hfovMax": 120,
                                            "hfov": 360,
                                            "adjacentPanoramas": [
                                             {
                                              "panorama": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                                              "class": "AdjacentPanorama",
                                              "yaw": 130.14,
                                              "distance": 1,
                                              "backwardYaw": -154.28
                                             }
                                            ],
                                            "vfov": 180
                                           },
                                           "class": "AdjacentPanorama",
                                           "yaw": -154.28,
                                           "distance": 1,
                                           "backwardYaw": 130.14
                                          },
                                          {
                                           "panorama": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                                           "class": "AdjacentPanorama",
                                           "yaw": 36.85,
                                           "distance": 1,
                                           "backwardYaw": 4.74
                                          },
                                          {
                                           "panorama": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                                           "class": "AdjacentPanorama",
                                           "yaw": -42.13,
                                           "distance": 1,
                                           "backwardYaw": -143.14
                                          }
                                         ],
                                         "vfov": 180
                                        },
                                        "class": "AdjacentPanorama",
                                        "yaw": -143.14,
                                        "distance": 1,
                                        "backwardYaw": -42.13
                                       }
                                      ],
                                      "vfov": 180
                                     },
                                     "class": "AdjacentPanorama",
                                     "yaw": 25.67,
                                     "distance": 1,
                                     "backwardYaw": 81.58
                                    },
                                    {
                                     "panorama": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                                     "class": "AdjacentPanorama",
                                     "yaw": -107.62,
                                     "distance": 1,
                                     "backwardYaw": 113.51
                                    },
                                    {
                                     "panorama": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
                                     "class": "AdjacentPanorama",
                                     "yaw": 152.96,
                                     "distance": 1,
                                     "backwardYaw": -143.45
                                    }
                                   ],
                                   "vfov": 180
                                  },
                                  "class": "AdjacentPanorama",
                                  "yaw": -143.45,
                                  "distance": 1,
                                  "backwardYaw": 152.96
                                 }
                                ],
                                "vfov": 180
                               },
                               "class": "AdjacentPanorama",
                               "yaw": 29.17,
                               "distance": 1,
                               "backwardYaw": 7.69
                              }
                             ],
                             "vfov": 180
                            },
                            "class": "AdjacentPanorama",
                            "yaw": -6.68,
                            "distance": 1,
                            "backwardYaw": -53.28
                           },
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
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_2706E6CA_3C57_F552_41C8_240CEC6E8E9E); this.mainPlayList.set('selectedIndex', 22)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": 4.77,
                                   "hfov": 11.26,
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
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
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
                                   "hfov": 8.33,
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
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754, this.camera_26FF26BB_3C57_F532_41BE_D1BC3E323691); this.mainPlayList.set('selectedIndex', 20)"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": -179.27,
                                   "hfov": 20.49,
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
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
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
                                   "hfov": 8.48,
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
                             "cardboardMenu": "this.Menu_20C69536_3C57_F732_41A8_C38557D6B811",
                             "pitch": 0,
                             "thumbnailUrl": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_t.jpg",
                             "hfovMin": 60,
                             "id": "panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
                             "mapLocations": [
                              {
                               "x": 597.83,
                               "class": "PanoramaMapLocation",
                               "y": 356.1,
                               "angle": 71.57,
                               "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE"
                              }
                             ],
                             "label": "C22",
                             "hfovMax": 120,
                             "hfov": 360,
                             "adjacentPanoramas": [
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
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67, this.camera_26C3E630_3C57_F4CF_41C8_721BE8CDB11A); this.mainPlayList.set('selectedIndex', 21)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": -178.3,
                                      "hfov": 28.75,
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
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
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
                                      "hfov": 9.76,
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
                                "cardboardMenu": "this.Menu_20C69536_3C57_F732_41A8_C38557D6B811",
                                "pitch": 0,
                                "thumbnailUrl": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_t.jpg",
                                "hfovMin": 60,
                                "id": "panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
                                "mapLocations": [
                                 {
                                  "x": 570.71,
                                  "class": "PanoramaMapLocation",
                                  "y": 371.82,
                                  "angle": 249.33,
                                  "map": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE"
                                 }
                                ],
                                "label": "C21",
                                "hfovMax": 120,
                                "hfov": 360,
                                "adjacentPanoramas": [
                                 {
                                  "panorama": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
                                  "class": "AdjacentPanorama",
                                  "yaw": -178.3,
                                  "distance": 1,
                                  "backwardYaw": -179.27
                                 }
                                ],
                                "vfov": 180
                               },
                               "class": "AdjacentPanorama",
                               "yaw": -179.27,
                               "distance": 1,
                               "backwardYaw": -178.3
                              },
                              {
                               "panorama": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                               "class": "AdjacentPanorama",
                               "yaw": 4.77,
                               "distance": 1,
                               "backwardYaw": 87.82
                              }
                             ],
                             "vfov": 180
                            },
                            "class": "AdjacentPanorama",
                            "yaw": 87.82,
                            "distance": 1,
                            "backwardYaw": 4.77
                           }
                          ],
                          "vfov": 180
                         },
                         "class": "AdjacentPanorama",
                         "yaw": -174.64,
                         "distance": 1,
                         "backwardYaw": -169.25
                        },
                        {
                         "panorama": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                         "class": "AdjacentPanorama",
                         "yaw": -18.92,
                         "distance": 1,
                         "backwardYaw": 156.92
                        },
                        {
                         "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                         "class": "AdjacentPanorama",
                         "yaw": 113.51,
                         "distance": 1,
                         "backwardYaw": -107.62
                        }
                       ],
                       "vfov": 180
                      },
                      "class": "AdjacentPanorama",
                      "yaw": 156.92,
                      "distance": 1,
                      "backwardYaw": -18.92
                     },
                     {
                      "panorama": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                      "class": "AdjacentPanorama",
                      "yaw": 4.74,
                      "distance": 1,
                      "backwardYaw": 36.85
                     },
                     {
                      "panorama": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
                      "class": "AdjacentPanorama",
                      "yaw": -96.27,
                      "distance": 1,
                      "backwardYaw": 7.93
                     }
                    ],
                    "vfov": 180
                   },
                   "class": "AdjacentPanorama",
                   "yaw": 7.93,
                   "distance": 1,
                   "backwardYaw": -96.27
                  }
                 ],
                 "vfov": 180
                },
                "class": "AdjacentPanorama",
                "yaw": -179.87,
                "distance": 1,
                "backwardYaw": -178.55
               }
              ],
              "vfov": 180
             },
             "class": "AdjacentPanorama",
             "yaw": -2.21,
             "distance": 1,
             "backwardYaw": -2.69
            },
            {
             "panorama": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
             "class": "AdjacentPanorama",
             "yaw": -179.28,
             "distance": 1,
             "backwardYaw": -177.99
            }
           ],
           "vfov": 180
          },
          "class": "AdjacentPanorama",
          "yaw": -177.99,
          "distance": 1,
          "backwardYaw": -179.28
         }
        ],
        "vfov": 180
       },
       "class": "AdjacentPanorama",
       "yaw": 0.64,
       "distance": 1,
       "backwardYaw": 0.35
      }
     ],
     "vfov": 180
    },
    "class": "AdjacentPanorama",
    "yaw": 1.46,
    "distance": 1,
    "backwardYaw": -179.67
   }
  ],
  "vfov": 180
 },
 {
  "viewerArea": "this.MainViewer",
  "class": "PanoramaPlayer",
  "gyroscopeEnabled": true,
  "preloadEnabled": false,
  "displayPlaybackBar": true,
  "gyroscopeVerticalDraggingEnabled": true,
  "mouseControlMode": "drag_acceleration",
  "touchControlMode": "drag_rotation",
  "id": "MainViewerPanoramaPlayer"
 },
 {
  "viewerArea": {
   "toolTipFontWeight": "normal",
   "toolTipFontSize": 12,
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "paddingRight": 0,
   "minHeight": 224,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "playbackBarHeight": 10,
   "toolTipPaddingBottom": 4,
   "playbackBarHeadWidth": 6,
   "progressBorderRadius": 0,
   "playbackBarBackgroundColorDirection": "vertical",
   "playbackBarProgressBorderSize": 0,
   "playbackBarRight": 0,
   "playbackBarHeadShadow": true,
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "toolTipTextShadowOpacity": 0,
   "progressBarBorderSize": 0,
   "shadow": false,
   "progressBackgroundOpacity": 1,
   "toolTipShadowSpread": 0,
   "paddingBottom": 0,
   "toolTipShadowBlurRadius": 3,
   "progressBarBorderRadius": 0,
   "playbackBarProgressBorderRadius": 0,
   "toolTipShadowColor": "#333333",
   "transitionMode": "blending",
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "playbackBarHeadShadowVerticalLength": 0,
   "toolTipFontColor": "#606060",
   "paddingTop": 0,
   "playbackBarBorderRadius": 0,
   "playbackBarProgressBorderColor": "#000000",
   "toolTipShadowVerticalLength": 0,
   "toolTipPaddingRight": 6,
   "playbackBarBorderColor": "#FFFFFF",
   "playbackBarHeadShadowHorizontalLength": 0,
   "class": "ViewerArea",
   "toolTipBorderRadius": 3,
   "toolTipOpacity": 1,
   "toolTipFontStyle": "normal",
   "progressBackgroundColorRatios": [
    0
   ],
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipBorderSize": 1,
   "progressLeft": 0,
   "toolTipPaddingLeft": 6,
   "height": 224,
   "width": 348,
   "paddingLeft": 0,
   "playbackBarHeadShadowBlurRadius": 3,
   "toolTipBorderColor": "#767676",
   "toolTipPaddingTop": 4,
   "playbackBarBorderSize": 0,
   "borderRadius": 10,
   "playbackBarHeadHeight": 15,
   "playbackBarBackgroundOpacity": 1,
   "playbackBarHeadBorderColor": "#000000",
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "borderSize": 0,
   "progressHeight": 10,
   "playbackBarProgressOpacity": 1,
   "toolTipTextShadowBlurRadius": 3,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarLeft": 0,
   "progressBorderSize": 0,
   "playbackBarHeadShadowColor": "#000000",
   "progressBarBorderColor": "#000000",
   "progressRight": 0,
   "playbackBarOpacity": 1,
   "progressBarBackgroundColorRatios": [
    0
   ],
   "top": 0,
   "progressBottom": 2,
   "playbackBarHeadOpacity": 1,
   "playbackBarHeadBorderSize": 0,
   "progressOpacity": 1,
   "progressBackgroundColorDirection": "vertical",
   "toolTipShadowHorizontalLength": 0,
   "playbackBarHeadBorderRadius": 0,
   "progressBarBackgroundColorDirection": "vertical",
   "id": "MapViewer",
   "playbackBarBottom": 0,
   "toolTipFontFamily": "Arial",
   "progressBorderColor": "#000000",
   "toolTipShadowOpacity": 1,
   "minWidth": 321,
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "left": 25,
   "playbackBarHeadShadowOpacity": 0.7,
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "toolTipTextShadowColor": "#000000",
   "progressBarOpacity": 1
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
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
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
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
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
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
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
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
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
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
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
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
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
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
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
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
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
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
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
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
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
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
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
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
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
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
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
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
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
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
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
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
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
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
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
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 161.16,
   "pitch": 2.07
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_0F84F19D_0671_6675_4191_5761B2287855_camera"
 },
 "this.panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D",
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -155.88,
   "pitch": -1.95
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D_camera"
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
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
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
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
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
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "camera": "this.panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_20B28529_3C57_F4DE_41CB_4B8C0EB40976, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "id": "PanoramaPlayListItem_20B28529_3C57_F4DE_41CB_4B8C0EB40976",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FD85D6E_0673_DED7_40FD_D23817113C40",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_20B38529_3C57_F4DE_41B2_A9A03B238124, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "id": "PanoramaPlayListItem_20B38529_3C57_F4DE_41B2_A9A03B238124",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_20B4852A_3C57_F4D2_41CA_E830FA73604D, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "id": "PanoramaPlayListItem_20B4852A_3C57_F4D2_41CA_E830FA73604D",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_20B5B52B_3C57_F4D2_41AC_D04527E5B02C, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "id": "PanoramaPlayListItem_20B5B52B_3C57_F4D2_41AC_D04527E5B02C",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_20B6E52C_3C57_F4D6_41A1_F44DBA13C365, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "id": "PanoramaPlayListItem_20B6E52C_3C57_F4D6_41A1_F44DBA13C365",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_20B7E52C_3C57_F4D6_41A6_DF51303370B9, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "id": "PanoramaPlayListItem_20B7E52C_3C57_F4D6_41A6_DF51303370B9",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_20B7052D_3C57_F4D6_41B2_2E602BD4DDE2, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "id": "PanoramaPlayListItem_20B7052D_3C57_F4D6_41B2_2E602BD4DDE2",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_20B8252D_3C57_F4D6_415C_6994F4871254, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "id": "PanoramaPlayListItem_20B8252D_3C57_F4D6_415C_6994F4871254",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_20B9252E_3C57_F4D2_41BB_71707D747951, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "id": "PanoramaPlayListItem_20B9252E_3C57_F4D2_41BB_71707D747951",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_20BA552E_3C57_F4D2_41BE_D481A5D2190F, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "id": "PanoramaPlayListItem_20BA552E_3C57_F4D2_41BE_D481A5D2190F",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_20BB452F_3C57_F4D2_419C_3B9F472E7222, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "id": "PanoramaPlayListItem_20BB452F_3C57_F4D2_419C_3B9F472E7222",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_20BCB52F_3C57_F4D2_41C2_B5C59A0576FB, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "id": "PanoramaPlayListItem_20BCB52F_3C57_F4D2_41C2_B5C59A0576FB",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_20BDD530_3C57_F4CE_41CD_29141F3213FA, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "id": "PanoramaPlayListItem_20BDD530_3C57_F4CE_41CD_29141F3213FA",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_20BEF531_3C57_F4CE_41C6_28F4C129DEA5, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "id": "PanoramaPlayListItem_20BEF531_3C57_F4CE_41C6_28F4C129DEA5",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_20BE1531_3C57_F4CE_41C0_7E6FC1D5AD22, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "id": "PanoramaPlayListItem_20BE1531_3C57_F4CE_41C0_7E6FC1D5AD22",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_20BF3532_3C57_F732_41A3_B57E6B34D65C, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "id": "PanoramaPlayListItem_20BF3532_3C57_F732_41A3_B57E6B34D65C",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_20C04532_3C57_F732_41AE_8E0B1C9A6BE6, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "id": "PanoramaPlayListItem_20C04532_3C57_F732_41AE_8E0B1C9A6BE6",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_20C17533_3C57_F732_41C7_84C48155CF54, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "id": "PanoramaPlayListItem_20C17533_3C57_F732_41C7_84C48155CF54",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_20C28533_3C57_F732_41C2_6CE5A99F7481, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
    "id": "PanoramaPlayListItem_20C28533_3C57_F732_41C2_6CE5A99F7481",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_20C3D534_3C57_F736_41CD_140519F6E9D7, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
    "id": "PanoramaPlayListItem_20C3D534_3C57_F736_41CD_140519F6E9D7",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_20C33534_3C57_F736_41C3_2281F2D2A9B3, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
    "id": "PanoramaPlayListItem_20C33534_3C57_F736_41C3_2281F2D2A9B3",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_20C47535_3C57_F736_41C5_B76D69111D15, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
    "id": "PanoramaPlayListItem_20C47535_3C57_F736_41C5_B76D69111D15",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_20C54535_3C57_F736_41B7_32D6E17571FE, this.MapViewerMapPlayer)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 0)",
    "id": "PanoramaPlayListItem_20C54535_3C57_F736_41B7_32D6E17571FE",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE",
 {
  "class": "PlayList",
  "id": "playList_20B18528_3C57_F4DE_41B4_FCC032E367CA",
  "items": [
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
    "class": "MapPlayListItem",
    "media": "this.map_29873A27_3A46_6901_41B5_9F01B5E5FBDE",
    "player": "this.MapViewerMapPlayer"
   }
  ]
 },
 "this.Menu_20C69536_3C57_F732_41A8_C38557D6B811",
 {
  "class": "PanoramaCamera",
  "id": "camera_20E6B556_3C57_F772_41AE_B99FDF20B687",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 179.73,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_2691E5A4_3C57_F7D6_4171_EFE9614C49A0",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -98.42,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_269555B2_3C57_F732_41C2_11319F835E36",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -66.49,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_269975C0_3C57_F74E_41C7_A9888B4F1F68",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 36.55,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_269FD5CD_3C57_F751_4195_FB215BF91020",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.33,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_26A365DB_3C57_F771_41BD_6245ED3B703D",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -154.33,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_26A9D5EA_3C57_F753_41B0_295E89B010B4",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 179.05,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_26ADB5F8_3C57_F73F_416F_CB848B6BC360",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 137.87,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_26B3C606_3C57_F4D3_41A5_42D938287E46",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 161.08,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_26B80613_3C57_F4F1_41C2_A558331B818F",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -143.15,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_26BDB622_3C57_F4D3_41BA_F5222F227441",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -172.07,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_26C3E630_3C57_F4CF_41C8_721BE8CDB11A",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.73,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_26C7863E_3C57_F533_41B1_BDE65495A80B",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.97,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_26CDC64C_3C57_F557_41C7_0BC92831FE5A",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 179.12,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -150.83,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "id": "camera_26D2B659_3C57_F57E_4174_51700750204B"
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_26D78667_3C57_F552_41C1_D59C40C84C7A",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -27.04,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_26DD0675_3C57_F536_41C8_8827044F4CE7",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.13,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_26E40683_3C57_F5D2_41C4_5CCC96DA56EC",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 83.73,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_26EA6691_3C57_F5CE_4188_590F2854799E",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 10.75,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_26F2F6A0_3C57_F5CE_41C3_D394051C0B58",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -23.08,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_26F8E6AE_3C57_F5D2_41CA_907D7A2C7289",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 72.38,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_26FF26BB_3C57_F532_41BE_D1BC3E323691",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 1.7,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_2706E6CA_3C57_F552_41C8_240CEC6E8E9E",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -92.18,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_270D56D8_3C57_F57E_41C9_755C3FD8A0C6",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -178.54,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_2715A6E5_3C57_F556_41CB_9FE4D37F2931",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.65,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_271B26F4_3C57_F536_41BF_6BF3DFDD6500",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 173.32,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 5.26,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "id": "camera_27227701_3C57_F4CE_41CD_F62F0054B221"
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_272A670F_3C57_F4D2_41CB_3F0232D82E0F",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -172.31,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_2730471D_3C57_F4F6_4199_608B80BE2EFB",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.75,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_2738672B_3C57_F4D2_41B2_CD2C7E1A76CB",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 179.82,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_273E573A_3C57_F332_41BC_C2C77A256BBE",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 1.98,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_27467747_3C57_F351_41AA_C9D67D4216FB",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 1.58,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_27500756_3C57_F373_41C0_D31A018ABDCF",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -49.86,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_275A6764_3C57_F357_41CC_227C5E87C03F",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -175.26,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_27663772_3C57_F333_41B9_967245D91578",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 36.86,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_2772E780_3C57_F3CF_41C3_A0723518C188",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.36,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_277E678E_3C57_F3D3_4197_D7CC53EA06E6",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.72,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_2789579C_3C57_F3F7_41BF_A98897187E95",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 177.79,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_2796A7AA_3C57_F3D3_41BC_DD7F12D23F23",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 1.45,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_27A237B8_3C57_F33F_41C1_373304DE47D0",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 5.36,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 126.72,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "id": "camera_27ADB7C5_3C57_F356_41C6_DE4E98F16ECB"
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_27BBF7D4_3C57_F376_41C8_5F452876400A",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -175.23,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_27C827E2_3C57_F352_41CD_EED890CD4F9E",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -1.55,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_27D437F0_3C57_F34E_41BC_5F00DB342F17",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 1.26,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -11.1,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "id": "camera_27E157FE_3C57_F332_41CA_54D2446C0A30"
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_27EF980C_3C57_FCD6_41C2_957CA25333EC",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 177.31,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_27FB281A_3C57_FCF2_4177_B6EB3F1C2B86",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 2.01,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_2009A828_3C57_FCDE_41C6_F74B57ED2E73",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 25.72,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 }
], "children": [
 {
  "toolTipFontWeight": "normal",
  "toolTipFontSize": 12,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "paddingRight": 0,
  "minHeight": 50,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarHeight": 10,
  "toolTipPaddingBottom": 4,
  "playbackBarHeadWidth": 6,
  "progressBorderRadius": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadShadow": true,
  "playbackBarRight": 0,
  "toolTipTextShadowOpacity": 0,
  "progressBarBorderSize": 0,
  "shadow": false,
  "progressBackgroundOpacity": 1,
  "toolTipShadowSpread": 0,
  "paddingBottom": 0,
  "toolTipShadowBlurRadius": 3,
  "progressBarBorderRadius": 0,
  "playbackBarProgressBorderRadius": 0,
  "toolTipShadowColor": "#333333",
  "transitionMode": "blending",
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipFontColor": "#606060",
  "paddingTop": 0,
  "playbackBarBorderRadius": 0,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipPaddingRight": 6,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipShadowVerticalLength": 0,
  "class": "ViewerArea",
  "toolTipBorderRadius": 3,
  "toolTipOpacity": 1,
  "toolTipFontStyle": "normal",
  "progressBackgroundColorRatios": [
   0
  ],
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipBorderSize": 1,
  "progressLeft": 0,
  "toolTipPaddingLeft": 6,
  "toolTipBorderColor": "#767676",
  "playbackBarProgressOpacity": 1,
  "paddingLeft": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarHeadBorderColor": "#000000",
  "toolTipPaddingTop": 4,
  "playbackBarBorderSize": 0,
  "borderRadius": 0,
  "playbackBarHeadHeight": 15,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadBorderRadius": 0,
  "borderSize": 0,
  "progressHeight": 10,
  "width": "100%",
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarLeft": 0,
  "progressBorderSize": 0,
  "playbackBarHeadShadowColor": "#000000",
  "progressBarBorderColor": "#000000",
  "progressRight": 0,
  "playbackBarOpacity": 1,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "top": 0,
  "progressBottom": 0,
  "playbackBarHeadOpacity": 1,
  "playbackBarHeadBorderSize": 0,
  "progressOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "toolTipShadowHorizontalLength": 0,
  "bottom": "0%",
  "id": "MainViewer",
  "playbackBarBottom": 5,
  "toolTipFontFamily": "Arial",
  "progressBarBackgroundColorDirection": "vertical",
  "progressBorderColor": "#000000",
  "toolTipShadowOpacity": 1,
  "minWidth": 100,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "left": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipTextShadowColor": "#000000",
  "progressBarOpacity": 1
 },
 {
  "class": "Container",
  "paddingRight": 0,
  "minHeight": 1,
  "width": "96.924%",
  "paddingLeft": 0,
  "scrollBarWidth": 10,
  "verticalAlign": "middle",
  "scrollBarMargin": 2,
  "borderSize": 0,
  "gap": 12,
  "borderRadius": 0,
  "layout": "vertical",
  "height": 132.11,
  "overflow": "scroll",
  "contentOpaque": false,
  "horizontalAlign": "center",
  "shadow": false,
  "paddingBottom": 0,
  "bottom": "1.95%",
  "backgroundOpacity": 0,
  "id": "Container_03BF4D6F_10EF_82D8_41A4_FC17EDB0E403",
  "scrollBarColor": "#000000",
  "paddingTop": 0,
  "minWidth": 1,
  "scrollBarVisible": "rollOver",
  "right": "1.51%",
  "children": [
   {
    "class": "Container",
    "backgroundColor": [
     "#000000",
     "#000000"
    ],
    "minHeight": 1,
    "width": 369,
    "paddingLeft": 0,
    "scrollBarWidth": 10,
    "height": 73,
    "verticalAlign": "middle",
    "paddingRight": 0,
    "scrollBarMargin": 2,
    "borderSize": 0,
    "gap": 12,
    "borderRadius": 9,
    "layout": "horizontal",
    "overflow": "scroll",
    "backgroundColorRatios": [
     0,
     1
    ],
    "backgroundColorDirection": "vertical",
    "contentOpaque": false,
    "horizontalAlign": "center",
    "shadow": false,
    "paddingBottom": 0,
    "backgroundOpacity": 0.59,
    "id": "Container_1F218FBB_3BC2_A700_4191_230DA2F5BB68",
    "scrollBarColor": "#000000",
    "paddingTop": 0,
    "minWidth": 1,
    "scrollBarVisible": "always",
    "children": [
     {
      "class": "IconButton",
      "iconURL": "skin/IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0.png",
      "paddingRight": 0,
      "mode": "push",
      "minHeight": 1,
      "width": 42,
      "paddingLeft": 0,
      "height": 57,
      "transparencyActive": false,
      "borderSize": 0,
      "borderRadius": 0,
      "maxHeight": 1052,
      "horizontalAlign": "center",
      "shadow": false,
      "paddingBottom": 0,
      "cursor": "hand",
      "backgroundOpacity": 0,
      "id": "IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0",
      "paddingTop": 0,
      "minWidth": 1,
      "maxWidth": 1047,
      "verticalAlign": "middle"
     },
     {
      "class": "IconButton",
      "iconURL": "skin/IconButton_1808CC36_3A41_E900_4183_CE565B25106A.png",
      "paddingRight": 0,
      "mode": "push",
      "minHeight": 1,
      "width": 42,
      "paddingLeft": 0,
      "height": 57,
      "transparencyActive": false,
      "borderSize": 0,
      "borderRadius": 0,
      "maxHeight": 1052,
      "horizontalAlign": "center",
      "shadow": false,
      "paddingBottom": 0,
      "cursor": "hand",
      "backgroundOpacity": 0,
      "id": "IconButton_1808CC36_3A41_E900_4183_CE565B25106A",
      "paddingTop": 0,
      "minWidth": 1,
      "maxWidth": 1047,
      "verticalAlign": "middle"
     },
     {
      "class": "IconButton",
      "iconURL": "skin/IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE.png",
      "paddingRight": 0,
      "mode": "push",
      "minHeight": 1,
      "width": 42,
      "paddingLeft": 0,
      "height": 57,
      "transparencyActive": false,
      "borderSize": 0,
      "borderRadius": 0,
      "maxHeight": 1052,
      "horizontalAlign": "center",
      "shadow": false,
      "paddingBottom": 0,
      "cursor": "hand",
      "backgroundOpacity": 0,
      "id": "IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE",
      "paddingTop": 0,
      "minWidth": 1,
      "maxWidth": 1047,
      "verticalAlign": "middle"
     },
     {
      "class": "IconButton",
      "iconURL": "skin/IconButton_1FCDD1EC_3A41_BB00_41C5_40B934E107FD.png",
      "paddingRight": 0,
      "mode": "push",
      "minHeight": 1,
      "width": 42,
      "paddingLeft": 0,
      "height": 57,
      "transparencyActive": false,
      "borderSize": 0,
      "borderRadius": 0,
      "maxHeight": 1052,
      "horizontalAlign": "center",
      "shadow": false,
      "paddingBottom": 0,
      "cursor": "hand",
      "backgroundOpacity": 0,
      "id": "IconButton_1FCDD1EC_3A41_BB00_41C5_40B934E107FD",
      "paddingTop": 0,
      "minWidth": 1,
      "maxWidth": 1047,
      "verticalAlign": "middle"
     },
     {
      "class": "IconButton",
      "iconURL": "skin/IconButton_1F60FA0A_3A41_A900_41B0_37806583DDFA.png",
      "paddingRight": 0,
      "mode": "push",
      "minHeight": 1,
      "width": 42,
      "paddingLeft": 0,
      "height": 57,
      "transparencyActive": false,
      "borderSize": 0,
      "borderRadius": 0,
      "maxHeight": 1052,
      "horizontalAlign": "center",
      "shadow": false,
      "paddingBottom": 0,
      "cursor": "hand",
      "backgroundOpacity": 0,
      "id": "IconButton_1F60FA0A_3A41_A900_41B0_37806583DDFA",
      "paddingTop": 0,
      "minWidth": 1,
      "maxWidth": 1047,
      "verticalAlign": "middle"
     },
     {
      "class": "IconButton",
      "iconURL": "skin/IconButton_1F6F3FC2_3A42_6703_41B1_8F08A62DBDEF.png",
      "paddingRight": 0,
      "mode": "push",
      "minHeight": 1,
      "width": 41,
      "paddingLeft": 0,
      "height": 57,
      "transparencyActive": false,
      "borderSize": 0,
      "borderRadius": 0,
      "maxHeight": 1052,
      "horizontalAlign": "center",
      "shadow": false,
      "paddingBottom": 0,
      "cursor": "hand",
      "backgroundOpacity": 0,
      "id": "IconButton_1F6F3FC2_3A42_6703_41B1_8F08A62DBDEF",
      "paddingTop": 0,
      "minWidth": 1,
      "maxWidth": 1047,
      "verticalAlign": "middle"
     }
    ],
    "scrollBarOpacity": 0.5
   },
   {
    "class": "Container",
    "paddingRight": 0,
    "minHeight": 1,
    "width": "100%",
    "paddingLeft": 0,
    "scrollBarWidth": 10,
    "verticalAlign": "middle",
    "scrollBarMargin": 2,
    "borderSize": 0,
    "gap": 10,
    "borderRadius": 0,
    "layout": "horizontal",
    "height": "31.818%",
    "contentOpaque": false,
    "horizontalAlign": "left",
    "shadow": false,
    "overflow": "scroll",
    "paddingBottom": 0,
    "backgroundOpacity": 0,
    "id": "Container_1E119C21_3A42_6900_41C0_3CA47D3C242A",
    "scrollBarColor": "#000000",
    "paddingTop": 0,
    "minWidth": 1,
    "scrollBarVisible": "rollOver",
    "scrollBarOpacity": 0.5,
    "children": [
     {
      "class": "IconButton",
      "iconURL": "skin/IconButton_249849C4_3A42_EB07_41C4_34AFE0395A2F.png",
      "paddingRight": 0,
      "mode": "push",
      "minHeight": 1,
      "width": 35,
      "paddingLeft": 0,
      "height": 35,
      "verticalAlign": "middle",
      "transparencyActive": false,
      "borderSize": 0,
      "borderRadius": 0,
      "click": "this.setComponentVisibility(this.Container_048CC2F3_11E9_4B79_4186_517CBA014E52, true, 0, null, null, false)",
      "maxHeight": 84,
      "horizontalAlign": "center",
      "shadow": false,
      "paddingBottom": 0,
      "cursor": "hand",
      "backgroundOpacity": 0,
      "id": "IconButton_249849C4_3A42_EB07_41C4_34AFE0395A2F",
      "paddingTop": 0,
      "minWidth": 1,
      "maxWidth": 84
     }
    ]
   }
  ],
  "scrollBarOpacity": 0.5
 },
 {
  "class": "Container",
  "paddingRight": 0,
  "minHeight": 1,
  "width": "99.337%",
  "paddingLeft": 0,
  "scrollBarWidth": 10,
  "verticalAlign": "top",
  "scrollBarMargin": 2,
  "borderSize": 0,
  "gap": 3,
  "borderRadius": 0,
  "layout": "absolute",
  "height": "48.804%",
  "contentOpaque": false,
  "horizontalAlign": "left",
  "top": "2.92%",
  "overflow": "hidden",
  "paddingBottom": 0,
  "shadow": false,
  "backgroundOpacity": 0,
  "id": "Container_0A0F57B0_11E6_8E48_4165_04342D4A22BC",
  "scrollBarColor": "#000000",
  "paddingTop": 0,
  "minWidth": 1,
  "scrollBarVisible": "rollOver",
  "right": "0%",
  "children": [
   {
    "class": "Container",
    "paddingRight": 0,
    "minHeight": 1,
    "width": 38.1,
    "paddingLeft": 0,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "verticalAlign": "top",
    "borderRadius": 0,
    "borderSize": 0,
    "layout": "absolute",
    "height": "99.332%",
    "gap": 10,
    "contentOpaque": false,
    "horizontalAlign": "left",
    "top": 0,
    "overflow": "visible",
    "paddingBottom": 0,
    "shadow": false,
    "backgroundOpacity": 0,
    "id": "Container_03416CBF_1280_710E_4175_84AC659A193B",
    "scrollBarColor": "#000000",
    "paddingTop": 0,
    "minWidth": 1,
    "scrollBarVisible": "rollOver",
    "left": 14,
    "children": [
     {
      "class": "IconButton",
      "iconURL": "skin/IconButton_29D9B918_3A5E_6B0F_41A2_1E183D537C65.png",
      "paddingRight": 0,
      "mode": "push",
      "minHeight": 1,
      "height": 35,
      "width": 35,
      "paddingLeft": 0,
      "verticalAlign": "middle",
      "borderRadius": 0,
      "transparencyActive": false,
      "borderSize": 0,
      "click": "this.setComponentVisibility(this.IconButton_29D9B918_3A5E_6B0F_41A2_1E183D537C65, false, 0, null, null, false); this.setComponentVisibility(this.MapViewer, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2803122B_3A42_5901_4195_B932A21E4536, true, 0, null, null, false)",
      "maxHeight": 108,
      "horizontalAlign": "center",
      "top": "0%",
      "visible": false,
      "paddingBottom": 0,
      "shadow": false,
      "cursor": "hand",
      "backgroundOpacity": 0,
      "id": "IconButton_29D9B918_3A5E_6B0F_41A2_1E183D537C65",
      "paddingTop": 0,
      "minWidth": 1,
      "left": "0%",
      "maxWidth": 108
     },
     {
      "class": "IconButton",
      "iconURL": "skin/IconButton_2803122B_3A42_5901_4195_B932A21E4536.png",
      "paddingRight": 0,
      "mode": "push",
      "minHeight": 1,
      "height": 35,
      "width": 35,
      "paddingLeft": 0,
      "verticalAlign": "middle",
      "transparencyActive": false,
      "borderSize": 0,
      "borderRadius": 0,
      "click": "this.setComponentVisibility(this.IconButton_2803122B_3A42_5901_4195_B932A21E4536, false, 0, null, null, false); this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1, true, 0, null, null, false)",
      "maxHeight": 108,
      "horizontalAlign": "center",
      "top": "0%",
      "paddingBottom": 0,
      "shadow": false,
      "cursor": "hand",
      "backgroundOpacity": 0,
      "id": "IconButton_2803122B_3A42_5901_4195_B932A21E4536",
      "paddingTop": 0,
      "minWidth": 1,
      "right": "-2.13%",
      "maxWidth": 108
     }
    ],
    "scrollBarOpacity": 0.5
   }
  ],
  "scrollBarOpacity": 0.5
 },
 {
  "class": "Container",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "minHeight": 1,
  "width": "100%",
  "paddingLeft": 0,
  "scrollBarWidth": 10,
  "verticalAlign": "middle",
  "paddingRight": 0,
  "scrollBarMargin": 2,
  "borderSize": 0,
  "gap": 10,
  "borderRadius": 0,
  "layout": "absolute",
  "height": "100%",
  "backgroundColorRatios": [
   0,
   1
  ],
  "backgroundColorDirection": "vertical",
  "contentOpaque": false,
  "horizontalAlign": "center",
  "top": "0%",
  "overflow": "scroll",
  "paddingBottom": 0,
  "shadow": false,
  "backgroundOpacity": 0.3,
  "id": "Container_048CC2F3_11E9_4B79_4186_517CBA014E52",
  "scrollBarColor": "#000000",
  "paddingTop": 0,
  "minWidth": 1,
  "scrollBarVisible": "rollOver",
  "left": "0%",
  "children": [
   {
    "class": "Image",
    "paddingRight": 0,
    "minHeight": 1,
    "width": "100%",
    "paddingLeft": 0,
    "horizontalAlign": "center",
    "borderSize": 0,
    "url": "skin/Image_19B2F4BC_0BF1_B12F_419C_772DA37A7B15.png",
    "borderRadius": 0,
    "height": "100%",
    "click": "eval('var frame=+location.search.replace(\"?\", \"\");if (!frame) {frame = 0;}if (typeof setMediaByIndex === \"function\") {localStorage.setItem(\"displayIndex\", frame);setMediaByIndex(frame);}');",
    "scaleMode": "fit_outside",
    "top": 0,
    "paddingBottom": 0,
    "shadow": false,
    "backgroundOpacity": 0,
    "id": "Image_19B2F4BC_0BF1_B12F_419C_772DA37A7B15",
    "paddingTop": 0,
    "minWidth": 1,
    "left": -0.04,
    "verticalAlign": "middle"
   },
   {
    "class": "Container",
    "paddingRight": 0,
    "minHeight": 1,
    "width": "60.736%",
    "paddingLeft": 0,
    "scrollBarWidth": 10,
    "verticalAlign": "middle",
    "scrollBarMargin": 2,
    "borderSize": 0,
    "gap": 4,
    "borderRadius": 0,
    "layout": "vertical",
    "height": "88.587%",
    "contentOpaque": false,
    "horizontalAlign": "center",
    "top": "2.62%",
    "overflow": "scroll",
    "paddingBottom": 0,
    "shadow": false,
    "backgroundOpacity": 0,
    "id": "Container_3533313B_3A04_0067_41CC_CF6BC934FA11",
    "scrollBarColor": "#000000",
    "paddingTop": 0,
    "minWidth": 1,
    "scrollBarVisible": "rollOver",
    "left": "18.69%",
    "children": [
     {
      "class": "Container",
      "paddingRight": 0,
      "minHeight": 1,
      "width": "92.083%",
      "paddingLeft": 0,
      "scrollBarWidth": 10,
      "verticalAlign": "bottom",
      "scrollBarMargin": 2,
      "borderSize": 0,
      "gap": 10,
      "borderRadius": 0,
      "layout": "horizontal",
      "height": "10.152%",
      "contentOpaque": false,
      "horizontalAlign": "center",
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "id": "Container_3764A1B8_3A04_0061_41BF_1DB9D8261A18",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "minWidth": 1,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Image",
        "paddingRight": 0,
        "minHeight": 1,
        "width": "79.193%",
        "paddingLeft": 0,
        "verticalAlign": "middle",
        "horizontalAlign": "center",
        "borderSize": 0,
        "url": "skin/Image_374B2C06_3A0C_0020_41B2_5F6D50FC5E5F.png",
        "borderRadius": 0,
        "height": "73.333%",
        "scaleMode": "fit_inside",
        "maxHeight": 61,
        "shadow": false,
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Image_374B2C06_3A0C_0020_41B2_5F6D50FC5E5F",
        "paddingTop": 0,
        "minWidth": 1,
        "maxWidth": 500
       }
      ]
     },
     {
      "class": "Container",
      "paddingRight": 0,
      "minHeight": 1,
      "width": "100%",
      "paddingLeft": 0,
      "scrollBarWidth": 10,
      "verticalAlign": "top",
      "scrollBarMargin": 2,
      "borderSize": 0,
      "gap": 10,
      "borderRadius": 0,
      "layout": "absolute",
      "height": "1.764%",
      "contentOpaque": false,
      "horizontalAlign": "left",
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "id": "Container_37A327EA_3A3C_0FE1_4199_D3E659A2D12F",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "minWidth": 1,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5
     },
     {
      "class": "Container",
      "paddingRight": 0,
      "minHeight": 1,
      "width": "99.94%",
      "paddingLeft": 0,
      "scrollBarWidth": 10,
      "verticalAlign": "middle",
      "scrollBarMargin": 2,
      "borderSize": 0,
      "gap": 10,
      "borderRadius": 0,
      "layout": "horizontal",
      "height": "7.327%",
      "contentOpaque": false,
      "horizontalAlign": "center",
      "shadow": false,
      "overflow": "visible",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "id": "Container_37118E52_3A43_A900_41B3_99441E93A49B",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "minWidth": 1,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Container",
        "paddingRight": 0,
        "minHeight": 1,
        "width": "99.901%",
        "paddingLeft": 0,
        "scrollBarWidth": 10,
        "verticalAlign": "middle",
        "scrollBarMargin": 2,
        "borderSize": 0,
        "gap": 6,
        "borderRadius": 0,
        "layout": "horizontal",
        "height": "86.667%",
        "contentOpaque": false,
        "horizontalAlign": "center",
        "shadow": false,
        "overflow": "visible",
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Container_3783528D_3A0C_0023_417F_D3D15240B4C7",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "minWidth": 1,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Container",
          "paddingRight": 0,
          "minHeight": 1,
          "width": "10.55%",
          "paddingLeft": 0,
          "scrollBarWidth": 10,
          "verticalAlign": "middle",
          "scrollBarMargin": 2,
          "borderSize": 0,
          "gap": 10,
          "borderRadius": 0,
          "layout": "horizontal",
          "height": "97.297%",
          "contentOpaque": false,
          "horizontalAlign": "center",
          "shadow": false,
          "overflow": "scroll",
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Container_3716DC42_3A42_6903_41C0_A36003727C4F",
          "scrollBarColor": "#000000",
          "paddingTop": 0,
          "minWidth": 1,
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "class": "Image",
            "paddingRight": 0,
            "minHeight": 1,
            "width": "95.833%",
            "paddingLeft": 0,
            "verticalAlign": "middle",
            "horizontalAlign": "center",
            "borderSize": 0,
            "url": "skin/Image_3540BF2F_3A0C_007F_41C4_9B80703F60DF.png",
            "borderRadius": 0,
            "height": "96%",
            "scaleMode": "fit_inside",
            "maxHeight": 108,
            "shadow": false,
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Image_3540BF2F_3A0C_007F_41C4_9B80703F60DF",
            "paddingTop": 0,
            "minWidth": 1,
            "maxWidth": 108
           }
          ]
         },
         {
          "class": "Container",
          "paddingRight": 0,
          "minHeight": 1,
          "width": "10.549%",
          "paddingLeft": 0,
          "scrollBarWidth": 10,
          "verticalAlign": "middle",
          "scrollBarMargin": 2,
          "borderSize": 0,
          "gap": 10,
          "borderRadius": 0,
          "layout": "horizontal",
          "height": "97.297%",
          "contentOpaque": false,
          "horizontalAlign": "center",
          "shadow": false,
          "overflow": "scroll",
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Container_3695443E_3A42_B900_41BB_420473422841",
          "scrollBarColor": "#000000",
          "paddingTop": 0,
          "minWidth": 1,
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "class": "Image",
            "paddingRight": 0,
            "minHeight": 1,
            "width": "95.83%",
            "paddingLeft": 0,
            "verticalAlign": "middle",
            "horizontalAlign": "center",
            "borderSize": 0,
            "url": "skin/Image_37E178D8_3A0C_0021_41C9_1ABD150FD584.png",
            "borderRadius": 0,
            "height": "96%",
            "scaleMode": "fit_inside",
            "maxHeight": 108,
            "shadow": false,
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Image_37E178D8_3A0C_0021_41C9_1ABD150FD584",
            "paddingTop": 0,
            "minWidth": 1,
            "maxWidth": 108
           }
          ]
         },
         {
          "class": "Container",
          "paddingRight": 0,
          "minHeight": 1,
          "width": "46.753%",
          "paddingLeft": 0,
          "scrollBarWidth": 10,
          "verticalAlign": "middle",
          "scrollBarMargin": 2,
          "borderSize": 0,
          "gap": 10,
          "borderRadius": 0,
          "layout": "horizontal",
          "height": "97.297%",
          "contentOpaque": false,
          "horizontalAlign": "center",
          "shadow": false,
          "overflow": "scroll",
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Container_377230ED_3A43_B900_4161_0C9E912D04EC",
          "scrollBarColor": "#000000",
          "paddingTop": 0,
          "minWidth": 1,
          "scrollBarVisible": "rollOver",
          "scrollBarOpacity": 0.5,
          "children": [
           {
            "class": "Image",
            "paddingRight": 0,
            "minHeight": 1,
            "width": "99.138%",
            "paddingLeft": 0,
            "horizontalAlign": "center",
            "borderSize": 0,
            "url": "skin/Image_37D83EB6_3A0C_0061_41C6_D666B149EE07.png",
            "borderRadius": 0,
            "height": 36,
            "scaleMode": "fit_inside",
            "maxHeight": 40,
            "shadow": false,
            "paddingBottom": 0,
            "backgroundOpacity": 0,
            "id": "Image_37D83EB6_3A0C_0061_41C6_D666B149EE07",
            "paddingTop": 0,
            "minWidth": 1,
            "maxWidth": 275,
            "verticalAlign": "middle"
           }
          ]
         }
        ]
       }
      ]
     },
     {
      "class": "Container",
      "paddingRight": 0,
      "minHeight": 1,
      "width": "99.858%",
      "paddingLeft": 0,
      "scrollBarWidth": 10,
      "verticalAlign": "middle",
      "scrollBarMargin": 2,
      "borderSize": 0,
      "gap": 10,
      "borderRadius": 0,
      "layout": "horizontal",
      "height": "1.227%",
      "contentOpaque": false,
      "horizontalAlign": "center",
      "shadow": false,
      "overflow": "hidden",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "id": "Container_290A2AD9_3BF6_5D7E_41C3_1E444A5BBC71",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "minWidth": 1,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Image",
        "paddingRight": 0,
        "minHeight": 1,
        "width": 726,
        "paddingLeft": 0,
        "height": 2,
        "horizontalAlign": "center",
        "borderSize": 0,
        "url": "skin/Image_285CB42E_3BF6_D4D3_41A3_9A8D7F05B2C3.png",
        "borderRadius": 0,
        "scaleMode": "fit_inside",
        "maxHeight": 2,
        "shadow": false,
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Image_285CB42E_3BF6_D4D3_41A3_9A8D7F05B2C3",
        "paddingTop": 0,
        "minWidth": 1,
        "maxWidth": 726,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "class": "Container",
      "paddingRight": 0,
      "minHeight": 1,
      "width": "100%",
      "paddingLeft": 0,
      "scrollBarWidth": 10,
      "verticalAlign": "middle",
      "scrollBarMargin": 2,
      "borderSize": 0,
      "gap": 5,
      "borderRadius": 0,
      "layout": "horizontal",
      "height": "4.342%",
      "contentOpaque": false,
      "horizontalAlign": "center",
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "id": "Container_34FB5B25_3A3C_0063_41C8_57AAEAD2087C",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "minWidth": 1,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Container",
        "paddingRight": 0,
        "minHeight": 1,
        "width": "13.477%",
        "paddingLeft": 0,
        "scrollBarWidth": 10,
        "verticalAlign": "middle",
        "scrollBarMargin": 2,
        "borderSize": 0,
        "gap": 10,
        "borderRadius": 0,
        "layout": "horizontal",
        "height": "100%",
        "contentOpaque": false,
        "horizontalAlign": "center",
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Container_357D9BEA_3AC2_AF00_41CB_19180254F021",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "minWidth": 1,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
          "minHeight": 1,
          "width": "100%",
          "paddingLeft": 0,
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_37917A60_3A0C_00E1_41C5_991EF69487EC.png",
          "borderRadius": 0,
          "height": 25,
          "scaleMode": "fit_inside",
          "maxHeight": 45,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_37917A60_3A0C_00E1_41C5_991EF69487EC",
          "paddingTop": 0,
          "minWidth": 1,
          "maxWidth": 117,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "class": "Container",
        "paddingRight": 0,
        "minHeight": 1,
        "width": "14.091%",
        "paddingLeft": 0,
        "scrollBarWidth": 10,
        "verticalAlign": "middle",
        "scrollBarMargin": 2,
        "borderSize": 0,
        "gap": 10,
        "borderRadius": 0,
        "layout": "horizontal",
        "height": "100%",
        "contentOpaque": false,
        "horizontalAlign": "center",
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Container_3571F98A_3AC6_AB00_41C5_660EE04AD975",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "minWidth": 1,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
          "minHeight": 1,
          "width": "97.183%",
          "paddingLeft": 0,
          "verticalAlign": "middle",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_34518027_3A04_006F_41BB_EE3C665B25DF.png",
          "borderRadius": 0,
          "height": "100%",
          "scaleMode": "fit_inside",
          "maxHeight": 243,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_34518027_3A04_006F_41BB_EE3C665B25DF",
          "paddingTop": 0,
          "minWidth": 1,
          "maxWidth": 258
         }
        ]
       },
       {
        "class": "Container",
        "paddingRight": 0,
        "minHeight": 1,
        "width": "39.063%",
        "paddingLeft": 0,
        "scrollBarWidth": 10,
        "verticalAlign": "middle",
        "scrollBarMargin": 2,
        "borderSize": 0,
        "gap": 10,
        "borderRadius": 0,
        "layout": "horizontal",
        "height": "100%",
        "contentOpaque": false,
        "horizontalAlign": "center",
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Container_2A91CA77_3AC7_A900_41B9_43489B29B672",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "minWidth": 1,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
          "minHeight": 1,
          "width": "99.44%",
          "paddingLeft": 0,
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_3427C160_3A0C_00E0_41C0_462626DB2AAE.png",
          "borderRadius": 0,
          "height": 25,
          "scaleMode": "fit_inside",
          "maxHeight": 45,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_3427C160_3A0C_00E0_41C0_462626DB2AAE",
          "paddingTop": 0,
          "minWidth": 1,
          "maxWidth": 408,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "class": "Container",
        "paddingRight": 0,
        "minHeight": 1,
        "width": "12.305%",
        "paddingLeft": 0,
        "scrollBarWidth": 10,
        "verticalAlign": "middle",
        "scrollBarMargin": 2,
        "borderSize": 0,
        "gap": 10,
        "borderRadius": 0,
        "layout": "horizontal",
        "height": "100%",
        "contentOpaque": false,
        "horizontalAlign": "center",
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Container_35A8B233_3AC6_B900_41A6_1E7D94E0E689",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "minWidth": 1,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
          "minHeight": 1,
          "width": "100%",
          "paddingLeft": 0,
          "verticalAlign": "middle",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_34309FE8_3A0C_7FE1_41C0_E4200753053D.png",
          "borderRadius": 0,
          "height": "100%",
          "scaleMode": "fit_inside",
          "maxHeight": 1094,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_34309FE8_3A0C_7FE1_41C0_E4200753053D",
          "paddingTop": 0,
          "minWidth": 1,
          "maxWidth": 1096
         }
        ]
       }
      ]
     },
     {
      "class": "Container",
      "paddingRight": 0,
      "minHeight": 1,
      "width": "100%",
      "paddingLeft": 0,
      "scrollBarWidth": 10,
      "verticalAlign": "middle",
      "scrollBarMargin": 2,
      "borderSize": 0,
      "gap": 10,
      "borderRadius": 0,
      "layout": "horizontal",
      "height": "7.276%",
      "contentOpaque": false,
      "horizontalAlign": "center",
      "shadow": false,
      "overflow": "visible",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "id": "Container_36B2B434_3A4E_B907_41BF_2EF267CB899D",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "minWidth": 1,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Container",
        "paddingRight": 0,
        "minHeight": 1,
        "width": "83.008%",
        "paddingLeft": 0,
        "scrollBarWidth": 10,
        "verticalAlign": "middle",
        "scrollBarMargin": 2,
        "borderSize": 0,
        "gap": 10,
        "borderRadius": 0,
        "layout": "horizontal",
        "height": "97.67%",
        "contentOpaque": false,
        "horizontalAlign": "center",
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Container_2A9982D6_3AC2_B903_4196_183817BA9826",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "minWidth": 1,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
          "minHeight": 1,
          "width": "99.857%",
          "paddingLeft": 0,
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_34A3C85B_3A0C_0027_41B6_C09A77E73AB1.png",
          "borderRadius": 0,
          "height": 49,
          "scaleMode": "fit_inside",
          "maxHeight": 49,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_34A3C85B_3A0C_0027_41B6_C09A77E73AB1",
          "paddingTop": 0,
          "minWidth": 1,
          "maxWidth": 734,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "class": "Container",
      "paddingRight": 0,
      "minHeight": 1,
      "width": "100%",
      "paddingLeft": 0,
      "scrollBarWidth": 10,
      "verticalAlign": "middle",
      "scrollBarMargin": 2,
      "borderSize": 0,
      "gap": 10,
      "borderRadius": 0,
      "layout": "horizontal",
      "height": "2.454%",
      "contentOpaque": false,
      "horizontalAlign": "center",
      "shadow": false,
      "overflow": "hidden",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "id": "Container_29B9E995_3BFA_DFF1_41C5_B692E7663F76",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "minWidth": 1,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Image",
        "paddingRight": 0,
        "minHeight": 1,
        "width": 726,
        "paddingLeft": 0,
        "height": 2,
        "horizontalAlign": "center",
        "borderSize": 0,
        "url": "skin/Image_2A70BEF1_3BFA_754E_41A1_D377ED2E5E7C.png",
        "borderRadius": 0,
        "scaleMode": "fit_inside",
        "maxHeight": 2,
        "shadow": false,
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Image_2A70BEF1_3BFA_754E_41A1_D377ED2E5E7C",
        "paddingTop": 0,
        "minWidth": 1,
        "maxWidth": 726,
        "verticalAlign": "middle"
       }
      ]
     },
     {
      "class": "Container",
      "paddingRight": 0,
      "minHeight": 1,
      "width": "100%",
      "paddingLeft": 0,
      "scrollBarWidth": 10,
      "verticalAlign": "middle",
      "scrollBarMargin": 2,
      "borderSize": 0,
      "gap": 4,
      "borderRadius": 0,
      "layout": "horizontal",
      "height": "6.937%",
      "contentOpaque": false,
      "horizontalAlign": "center",
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "id": "Container_34AD67FD_3A04_0FE3_41CA_6C2C56155F84",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "minWidth": 1,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Container",
        "paddingRight": 0,
        "minHeight": 1,
        "width": "16.797%",
        "paddingLeft": 0,
        "scrollBarWidth": 10,
        "verticalAlign": "middle",
        "scrollBarMargin": 2,
        "borderSize": 0,
        "gap": 10,
        "borderRadius": 0,
        "layout": "horizontal",
        "height": "66.667%",
        "contentOpaque": false,
        "horizontalAlign": "center",
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Container_2ABC116A_3AC3_DB00_4194_EFC4CB10B92F",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "minWidth": 1,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
          "minHeight": 1,
          "width": "89.53%",
          "paddingLeft": 0,
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_346BFEE5_3A04_01E0_41C6_7BF64C950C0A.png",
          "borderRadius": 0,
          "height": 25,
          "scaleMode": "fit_inside",
          "maxHeight": 45,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_346BFEE5_3A04_01E0_41C6_7BF64C950C0A",
          "paddingTop": 0,
          "minWidth": 1,
          "maxWidth": 117,
          "verticalAlign": "middle"
         }
        ]
       },
       {
        "class": "Container",
        "paddingRight": 0,
        "minHeight": 1,
        "width": "12.891%",
        "paddingLeft": 0,
        "scrollBarWidth": 10,
        "verticalAlign": "middle",
        "scrollBarMargin": 2,
        "borderSize": 0,
        "gap": 10,
        "borderRadius": 0,
        "layout": "horizontal",
        "height": "100%",
        "contentOpaque": false,
        "horizontalAlign": "center",
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Container_2AD5AA08_3AC6_A90F_41C9_220344DA9D3F",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "minWidth": 1,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
          "minHeight": 1,
          "width": "85.42%",
          "paddingLeft": 0,
          "verticalAlign": "middle",
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_2A4B2A14_3A04_0021_41BB_15D62AD6CC93.png",
          "borderRadius": 0,
          "height": "83.33%",
          "scaleMode": "fit_inside",
          "maxHeight": 222,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_2A4B2A14_3A04_0021_41BB_15D62AD6CC93",
          "paddingTop": 0,
          "minWidth": 1,
          "maxWidth": 222
         }
        ]
       },
       {
        "class": "Container",
        "paddingRight": 0,
        "minHeight": 1,
        "width": "39.063%",
        "paddingLeft": 0,
        "scrollBarWidth": 10,
        "verticalAlign": "middle",
        "scrollBarMargin": 2,
        "borderSize": 0,
        "gap": 10,
        "borderRadius": 0,
        "layout": "horizontal",
        "height": "56.25%",
        "contentOpaque": false,
        "horizontalAlign": "center",
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Container_2A20B5B4_3AC6_5B00_41C3_40F3BE7BE1C5",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "minWidth": 1,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
          "minHeight": 1,
          "width": "100%",
          "paddingLeft": 0,
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_37EAE4A5_3A04_0062_41C3_451CBF5B96AA.png",
          "borderRadius": 0,
          "height": 25,
          "scaleMode": "fit_inside",
          "maxHeight": 41,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_37EAE4A5_3A04_0062_41C3_451CBF5B96AA",
          "paddingTop": 0,
          "minWidth": 1,
          "maxWidth": 459,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     },
     {
      "class": "Container",
      "paddingRight": 0,
      "minHeight": 1,
      "width": "100%",
      "paddingLeft": 0,
      "scrollBarWidth": 10,
      "verticalAlign": "middle",
      "scrollBarMargin": 2,
      "borderSize": 0,
      "gap": 10,
      "borderRadius": 0,
      "layout": "horizontal",
      "height": "5.834%",
      "contentOpaque": false,
      "horizontalAlign": "center",
      "shadow": false,
      "overflow": "scroll",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "id": "Container_37E2874E_3A1C_0021_41C0_98E65FDF63B2",
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "minWidth": 1,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "class": "Container",
        "paddingRight": 0,
        "minHeight": 1,
        "width": "33.984%",
        "paddingLeft": 0,
        "scrollBarWidth": 10,
        "verticalAlign": "middle",
        "scrollBarMargin": 2,
        "borderSize": 0,
        "gap": 10,
        "borderRadius": 0,
        "layout": "horizontal",
        "height": "100%",
        "contentOpaque": false,
        "horizontalAlign": "center",
        "shadow": false,
        "overflow": "scroll",
        "paddingBottom": 0,
        "backgroundOpacity": 0,
        "id": "Container_2ADC0983_3AC2_6B01_41CA_4E98B5357DFD",
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "minWidth": 1,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "children": [
         {
          "class": "Image",
          "paddingRight": 0,
          "minHeight": 1,
          "width": "100%",
          "paddingLeft": 0,
          "horizontalAlign": "center",
          "borderSize": 0,
          "url": "skin/Image_348B3F6A_3A1C_00E1_41C6_ECDDCEC7AD0A.png",
          "borderRadius": 0,
          "height": 25,
          "scaleMode": "fit_inside",
          "maxHeight": 44,
          "shadow": false,
          "paddingBottom": 0,
          "backgroundOpacity": 0,
          "id": "Image_348B3F6A_3A1C_00E1_41C6_ECDDCEC7AD0A",
          "paddingTop": 0,
          "minWidth": 1,
          "maxWidth": 297,
          "verticalAlign": "middle"
         }
        ]
       }
      ]
     }
    ],
    "scrollBarOpacity": 0.5
   },
   {
    "class": "Container",
    "paddingRight": 0,
    "minHeight": 1,
    "width": "7.66%",
    "paddingLeft": 0,
    "scrollBarWidth": 10,
    "verticalAlign": "bottom",
    "scrollBarMargin": 2,
    "borderSize": 0,
    "gap": 10,
    "borderRadius": 0,
    "layout": "horizontal",
    "height": "11.413%",
    "contentOpaque": false,
    "horizontalAlign": "right",
    "top": "0%",
    "overflow": "visible",
    "paddingBottom": 0,
    "shadow": false,
    "backgroundOpacity": 0,
    "id": "Container_374175DE_3A41_DB00_41A6_956534949930",
    "scrollBarColor": "#000000",
    "paddingTop": 0,
    "minWidth": 1,
    "scrollBarVisible": "rollOver",
    "left": "0%",
    "children": [
     {
      "class": "IconButton",
      "iconURL": "skin/IconButton_3733F6B1_3A43_D900_41C0_740B1687B1C2.png",
      "paddingRight": 0,
      "mode": "push",
      "minHeight": 1,
      "width": "58.67%",
      "paddingLeft": 0,
      "verticalAlign": "middle",
      "transparencyActive": false,
      "borderSize": 0,
      "borderRadius": 0,
      "height": "52%",
      "click": "this.setComponentVisibility(this.Container_048CC2F3_11E9_4B79_4186_517CBA014E52, false, 0, null, null, false)",
      "maxHeight": 72,
      "horizontalAlign": "center",
      "shadow": false,
      "paddingBottom": 0,
      "cursor": "hand",
      "backgroundOpacity": 0,
      "id": "IconButton_3733F6B1_3A43_D900_41C0_740B1687B1C2",
      "paddingTop": 0,
      "minWidth": 1,
      "maxWidth": 72
     }
    ],
    "scrollBarOpacity": 0.5
   }
  ],
  "scrollBarOpacity": 0.5
 },
 {
  "class": "Container",
  "paddingRight": 0,
  "minHeight": 1,
  "width": 680,
  "paddingLeft": 0,
  "scrollBarWidth": 10,
  "height": 265,
  "verticalAlign": "top",
  "borderRadius": 9,
  "scrollBarMargin": 2,
  "borderSize": 0,
  "layout": "absolute",
  "overflow": "visible",
  "gap": 4,
  "contentOpaque": false,
  "horizontalAlign": "left",
  "top": "2.48%",
  "visible": false,
  "paddingBottom": 0,
  "shadow": false,
  "backgroundOpacity": 0,
  "id": "Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943",
  "scrollBarColor": "#000000",
  "paddingTop": 0,
  "minWidth": 1,
  "scrollBarVisible": "rollOver",
  "left": "0.05%",
  "children": [
   "this.MapViewer",
   {
    "class": "IconButton",
    "iconURL": "skin/IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1.png",
    "paddingRight": 0,
    "mode": "push",
    "minHeight": 1,
    "height": 35,
    "width": 35,
    "paddingLeft": 0,
    "verticalAlign": "middle",
    "borderRadius": 0,
    "transparencyActive": false,
    "borderSize": 0,
    "click": "this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2803122B_3A42_5901_4195_B932A21E4536, true, 0, null, null, false)",
    "maxHeight": 108,
    "horizontalAlign": "center",
    "top": "0.85%",
    "paddingBottom": 0,
    "shadow": false,
    "cursor": "hand",
    "backgroundOpacity": 0,
    "id": "IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1",
    "paddingTop": 0,
    "minWidth": 1,
    "left": "4.08%",
    "maxWidth": 108
   }
  ],
  "scrollBarOpacity": 0.5
 }
], 
 "class": "Player",
 "minHeight": 20,
 "vrPolyfillScale": 1,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "gap": 10,
 "borderRadius": 0,
 "mouseWheelEnabled": true,
 "backgroundPreloadEnabled": true,
 "height": "100%",
 "scripts": {
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "unregisterKey": function(key){  delete window[key]; },
  "existsKey": function(key){  return key in window; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getKey": function(key){  return window[key]; },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "registerKey": function(key, value){  window[key] = value; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); }
 },
 "contentOpaque": false,
 "horizontalAlign": "left",
 "shadow": false,
 "overflow": "visible",
 "paddingBottom": 0,
 "width": "100%",
 "id": "rootPlayer",
 "scrollBarColor": "#000000",
 "paddingTop": 0,
 "minWidth": 20,
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "start": "this.mainPlayList.set('selectedIndex', 0); this.playList_20B18528_3C57_F4DE_41B4_FCC032E367CA.set('selectedIndex', 0)",
 "scrollBarOpacity": 0.5
})