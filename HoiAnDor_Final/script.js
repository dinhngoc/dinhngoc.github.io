TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "frames": [
   {
    "thumbnailUrl": "media/panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
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
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
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
     },
     {
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 100,
           "width": 81,
           "class": "ImageResourceLevel",
           "url": "media/panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "hfov": 11.67,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 1.46,
        "pitch": -4.9
       }
      ],
      "id": "overlay_305D80C4_3C32_C9AD_41CD_C92E2612E11E",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_0FD85D6E_0673_DED7_40FD_D23817113C40, this.camera_4660DADE_4A58_A328_41AF_19D93CFB0333); this.mainPlayList.set('selectedIndex', 1); eval('localStorage.setItem(\"displayIndex\", 1);');"
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
           "height": 200,
           "width": 162,
           "class": "ImageResourceLevel",
           "url": "media/panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D_0_HS_2_0.png"
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
  "cardboardMenu": {
   "selectedBackgroundColor": "#202020",
   "fontFamily": "Arial",
   "rollOverBackgroundColor": "#000000",
   "label": "Media",
   "backgroundColor": "#404040",
   "opacity": 0.4,
   "class": "Menu",
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
   "id": "Menu_46FD68F7_4A58_A0F9_41C7_319B2B5B8962",
   "rollOverFontColor": "#FFFFFF"
  },
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D_t.jpg",
  "class": "Panorama",
  "hfovMin": 60,
  "label": "C01",
  "id": "panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D",
  "mapLocations": [
   {
    "x": 311.43,
    "class": "PanoramaMapLocation",
    "y": 133.97,
    "angle": 111.8,
    "map": {
     "fieldOfViewOverlayInsideColor": "#10A8B3",
     "fieldOfViewOverlayInsideOpacity": 0.6,
     "width": 1021,
     "class": "Map",
     "height": 652,
     "minimumZoomFactor": 0.5,
     "fieldOfViewOverlayRadiusScale": 0.05,
     "fieldOfViewOverlayOutsideColor": "#00FF99",
     "thumbnailUrl": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_t.png",
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 652,
        "width": 1021,
        "class": "ImageResourceLevel",
        "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799.png"
       },
       {
        "height": 326,
        "width": 510,
        "class": "ImageResourceLevel",
        "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_lq.png",
        "grayscale": true
       }
      ]
     },
     "id": "map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799",
     "fieldOfViewOverlayOutsideOpacity": 0,
     "label": "FloorPlan",
     "overlays": [
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_2F1D3B3B_3FEA_3F13_41C8_94B28D48FE56",
       "map": {
        "offsetY": 0,
        "x": 300.32,
        "width": 21.5,
        "class": "HotspotMapOverlayMap",
        "y": 122.79,
        "height": 21.92,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_46_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "image": {
        "x": 300.32,
        "y": 122.79,
        "width": 21.5,
        "class": "HotspotMapOverlayImage",
        "height": 21.92,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_46.png"
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
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_2F1CCB3B_3FEA_3F13_41A5_F89560AB6BE4",
       "map": {
        "offsetY": 0,
        "x": 345.16,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 142.14,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_47_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "image": {
        "x": 345.16,
        "y": 142.14,
        "width": 21,
        "class": "HotspotMapOverlayImage",
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_47.png"
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
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_2F1CDB3B_3FEA_3F13_41C7_954F616FADFF",
       "map": {
        "offsetY": 0,
        "x": 392.22,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 161.35,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_48_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "image": {
        "x": 392.22,
        "y": 161.35,
        "width": 21,
        "class": "HotspotMapOverlayImage",
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_48.png"
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
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_2F1CEB3B_3FEA_3F13_41B9_540F108BAE8A",
       "map": {
        "offsetY": 0,
        "x": 443.05,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 184.18,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_49_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "image": {
        "x": 443.05,
        "y": 184.18,
        "width": 21,
        "class": "HotspotMapOverlayImage",
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_49.png"
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
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_2F1CFB3B_3FEA_3F13_41B9_A207A65471C8",
       "map": {
        "offsetY": 0,
        "x": 502.89,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 203.39,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_50_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "image": {
        "x": 502.89,
        "y": 203.39,
        "width": 21,
        "class": "HotspotMapOverlayImage",
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_50.png"
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
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_2F1C8B3B_3FEA_3F13_41CE_8DE5F5E5198B",
       "map": {
        "offsetY": 0,
        "x": 536.36,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 217.57,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_51_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "image": {
        "x": 536.36,
        "y": 217.57,
        "width": 21,
        "class": "HotspotMapOverlayImage",
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_51.png"
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
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_2F1C9B3C_3FEA_3F15_41A2_29A259D7E0E6",
       "map": {
        "offsetY": 0,
        "x": 574.85,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 245.35,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_52_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "image": {
        "x": 574.85,
        "y": 245.35,
        "width": 21,
        "class": "HotspotMapOverlayImage",
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_52.png"
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
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_2F1CAB3C_3FEA_3F15_41CA_198DAA8D1C71",
       "map": {
        "offsetY": 0,
        "x": 625.31,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 208.34,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_53_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "image": {
        "x": 625.31,
        "y": 208.34,
        "width": 21,
        "class": "HotspotMapOverlayImage",
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_53.png"
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
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_2F1C4B3C_3FEA_3F15_41C4_DB1A2E53C8A4",
       "map": {
        "offsetY": 0,
        "x": 624.13,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 147.76,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_54_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "image": {
        "x": 624.13,
        "y": 147.76,
        "width": 21,
        "class": "HotspotMapOverlayImage",
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_54.png"
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
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_2F1C5B3C_3FEA_3F15_41CF_4074A93C96C6",
       "map": {
        "offsetY": 0,
        "x": 675.4,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 239.74,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_55_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "image": {
        "x": 675.4,
        "y": 239.74,
        "width": 21,
        "class": "HotspotMapOverlayImage",
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_55.png"
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
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_2F1C6B3C_3FEA_3F15_41B9_19D38B52E075",
       "map": {
        "offsetY": 0,
        "x": 736.79,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 239,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_56_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "image": {
        "x": 736.79,
        "y": 239,
        "width": 21,
        "class": "HotspotMapOverlayImage",
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_56.png"
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
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_2F1C0B3C_3FEA_3F15_41C5_2F0BA3E5E3D1",
       "map": {
        "offsetY": 0,
        "x": 801.58,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 239.74,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_57_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "image": {
        "x": 801.58,
        "y": 239.74,
        "width": 21,
        "class": "HotspotMapOverlayImage",
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_57.png"
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
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_2F1C1B3C_3FEA_3F15_41C6_9B5397747DDE",
       "map": {
        "offsetY": 0,
        "x": 847.24,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 239.74,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_58_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "image": {
        "x": 847.24,
        "y": 239.74,
        "width": 21,
        "class": "HotspotMapOverlayImage",
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_58.png"
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
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_2F1C2B3C_3FEA_3F15_41C5_38FDC514C895",
       "map": {
        "offsetY": 0,
        "x": 887.94,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 242.54,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_59_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "image": {
        "x": 887.94,
        "y": 242.54,
        "width": 21,
        "class": "HotspotMapOverlayImage",
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_59.png"
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
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_2F1C3B3C_3FEA_3F15_41CA_E63E755E4528",
       "map": {
        "offsetY": 0,
        "x": 936.41,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 241.14,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_60_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "image": {
        "x": 936.41,
        "y": 241.14,
        "width": 21,
        "class": "HotspotMapOverlayImage",
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_60.png"
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
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_2EE3CB3C_3FEA_3F15_41CE_5FE33CB3A992",
       "map": {
        "offsetY": 0,
        "x": 617.77,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 299.8,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_61_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "image": {
        "x": 617.77,
        "y": 299.8,
        "width": 21,
        "class": "HotspotMapOverlayImage",
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_61.png"
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
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_2EE3DB3C_3FEA_3F15_41C7_0CF0266FD3E9",
       "map": {
        "offsetY": 0,
        "x": 665.42,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 305.93,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_62_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "image": {
        "x": 665.42,
        "y": 305.93,
        "width": 21,
        "class": "HotspotMapOverlayImage",
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_62.png"
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
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_2EE3EB3C_3FEA_3F15_41C0_F4A5B8FC5CA9",
       "map": {
        "offsetY": 0,
        "x": 664.02,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 333.19,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_63_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "image": {
        "x": 664.02,
        "y": 333.19,
        "width": 21,
        "class": "HotspotMapOverlayImage",
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_63.png"
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
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_2EE3FB3C_3FEA_3F15_41BA_DE40AF8987B4",
       "map": {
        "offsetY": 0,
        "x": 659.81,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 375.97,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_64_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "image": {
        "x": 659.81,
        "y": 375.97,
        "width": 21,
        "class": "HotspotMapOverlayImage",
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_64.png"
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
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_2EE39B3C_3FEA_3F15_41CF_AE5CE5A26D54",
       "map": {
        "offsetY": 0,
        "x": 673.99,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 424.36,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_65_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "image": {
        "x": 673.99,
        "y": 424.36,
        "width": 21,
        "class": "HotspotMapOverlayImage",
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_65.png"
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
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_2EE3BB3C_3FEA_3F15_41BA_E510AF188848",
       "map": {
        "offsetY": 0,
        "x": 626.12,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 331.79,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_66_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "image": {
        "x": 626.12,
        "y": 331.79,
        "width": 21,
        "class": "HotspotMapOverlayImage",
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_66.png"
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
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_2EE34B3C_3FEA_3F15_41C9_2C3CBE09C98E",
       "map": {
        "offsetY": 0,
        "x": 586.82,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 345.16,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_67_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "image": {
        "x": 586.82,
        "y": 345.16,
        "width": 21,
        "class": "HotspotMapOverlayImage",
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_67.png"
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
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_2F1CCB3D_3FEA_3F17_4199_9E79BDD719A8",
       "map": {
        "offsetY": 0,
        "x": 559.7,
        "width": 21,
        "class": "HotspotMapOverlayMap",
        "y": 360.97,
        "height": 21,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 10,
           "width": 10,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_68_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "image": {
        "x": 559.7,
        "y": 360.97,
        "width": 21,
        "class": "HotspotMapOverlayImage",
        "height": 21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799_HS_68.png"
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
     "scaleMode": "fit_inside",
     "maximumZoomFactor": 1.2,
     "initialZoomFactor": 1
    }
   }
  ],
  "hfovMax": 120,
  "hfov": 360,
  "adjacentPanoramas": [
   {
    "panorama": {
     "frames": [
      {
       "thumbnailUrl": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_t.jpg",
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
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
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
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
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
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
        },
        {
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 107,
              "width": 160,
              "class": "ImageResourceLevel",
              "url": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_0_HS_4_0_0_map.gif"
             }
            ]
           },
           "hfov": 23.04,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 0.64,
           "pitch": -5.15
          }
         ],
         "id": "overlay_311D0F38_3C32_38E6_41B9_16CD7FB2884F",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544, this.camera_46CD9B6C_4A58_A1E8_419E_4CA2912C1113); this.mainPlayList.set('selectedIndex', 2); eval('localStorage.setItem(\"displayIndex\", 2);');"
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
              "height": 214,
              "width": 321,
              "class": "ImageResourceLevel",
              "url": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_0_HS_4_0.png"
             }
            ]
           },
           "pitch": -5.15
          }
         ]
        },
        {
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 82,
              "width": 109,
              "class": "ImageResourceLevel",
              "url": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_0_HS_5_0_0_map.gif"
             }
            ]
           },
           "hfov": 15.74,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -179.67,
           "pitch": -0.88
          }
         ],
         "id": "overlay_3114B52C_3C32_48FE_41B5_406CC4DEDCA5",
         "useHandCursor": true,
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D, this.camera_46C2FB7C_4A58_A1E8_41C3_4D5D01F60812); this.mainPlayList.set('selectedIndex', 0); eval('localStorage.setItem(\"displayIndex\", 0);');"
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
              "height": 165,
              "width": 218,
              "class": "ImageResourceLevel",
              "url": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_0_HS_5_0.png"
             }
            ]
           },
           "pitch": -0.88
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
     "cardboardMenu": "this.Menu_46FD68F7_4A58_A0F9_41C7_319B2B5B8962",
     "partial": false,
     "pitch": 0,
     "thumbnailUrl": "media/panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_t.jpg",
     "class": "Panorama",
     "hfovMin": 60,
     "label": "C02",
     "id": "panorama_0FD85D6E_0673_DED7_40FD_D23817113C40",
     "mapLocations": [
      {
       "x": 356.03,
       "class": "PanoramaMapLocation",
       "y": 152.86,
       "angle": 108.43,
       "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
      }
     ],
     "hfovMax": 120,
     "hfov": 360,
     "adjacentPanoramas": [
      {
       "panorama": {
        "frames": [
         {
          "thumbnailUrl": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_t.jpg",
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
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
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
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
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
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
           },
           {
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 93,
                 "width": 76,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_4_0_0_map.gif"
                }
               ]
              },
              "hfov": 10.99,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -177.99,
              "pitch": -5.9
             }
            ],
            "id": "overlay_31745591_3C35_CBA6_41C4_8DB2A929AC58",
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24, this.camera_46B2CBE9_4A58_A0E9_41A3_3AA6A79D69BC); this.mainPlayList.set('selectedIndex', 3)"
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
                 "height": 186,
                 "width": 153,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_4_0.png"
                }
               ]
              },
              "pitch": -5.9
             }
            ]
           },
           {
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 100,
                 "width": 97,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_5_0_0_map.gif"
                }
               ]
              },
              "hfov": 13.93,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 0.35,
              "pitch": -6.41
             }
            ],
            "id": "overlay_311F0A3C_3C35_F8DE_41B4_7AAC3D3CC66B",
            "useHandCursor": true,
            "enabledInCardboard": true,
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_0FD85D6E_0673_DED7_40FD_D23817113C40, this.camera_46A53BF9_4A58_A0E9_41C1_847BB605A924); this.mainPlayList.set('selectedIndex', 1)"
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
                 "height": 200,
                 "width": 194,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_0_HS_5_0.png"
                }
               ]
              },
              "pitch": -6.41
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
        "cardboardMenu": "this.Menu_46FD68F7_4A58_A0F9_41C7_319B2B5B8962",
        "partial": false,
        "pitch": 0,
        "thumbnailUrl": "media/panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_t.jpg",
        "class": "Panorama",
        "hfovMin": 60,
        "label": "C03",
        "id": "panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
        "mapLocations": [
         {
          "x": 403.09,
          "class": "PanoramaMapLocation",
          "y": 172.15,
          "angle": -70.14,
          "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
         }
        ],
        "hfovMax": 120,
        "hfov": 360,
        "adjacentPanoramas": [
         {
          "panorama": {
           "frames": [
            {
             "thumbnailUrl": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_t.jpg",
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
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
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
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
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
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
              },
              {
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 86,
                    "width": 58,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_0_HS_4_0_0_map.gif"
                   }
                  ]
                 },
                 "hfov": 8.42,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -179.28,
                 "pitch": -6.91
                }
               ],
               "id": "overlay_31032CAC_3C36_39FD_41C9_8B987E7CD4B2",
               "useHandCursor": true,
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544, this.camera_4766AC47_4A58_A719_41A7_83679BC6DA67); this.mainPlayList.set('selectedIndex', 2)"
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
                    "height": 172,
                    "width": 117,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_0_HS_4_0.png"
                   }
                  ]
                 },
                 "pitch": -6.91
                }
               ]
              },
              {
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 79,
                    "width": 79,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_0_HS_5_0_0_map.gif"
                   }
                  ]
                 },
                 "hfov": 11.33,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -2.21,
                 "pitch": -6.66
                }
               ],
               "id": "overlay_31610C45_3C36_78AF_41B2_40154727DEF2",
               "useHandCursor": true,
               "enabledInCardboard": true,
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA, this.camera_4719BC57_4A58_A739_41A8_41F4BD4EE5BB); this.mainPlayList.set('selectedIndex', 4)"
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
                    "height": 158,
                    "width": 158,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_0_HS_5_0.png"
                   }
                  ]
                 },
                 "pitch": -6.66
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
           "cardboardMenu": "this.Menu_46FD68F7_4A58_A0F9_41C7_319B2B5B8962",
           "partial": false,
           "pitch": 0,
           "thumbnailUrl": "media/panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_t.jpg",
           "class": "Panorama",
           "hfovMin": 60,
           "label": "C04",
           "id": "panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
           "mapLocations": [
            {
             "x": 453.77,
             "class": "PanoramaMapLocation",
             "y": 194.9,
             "angle": 107.74,
             "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
            }
           ],
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
                "class": "SphericPanoramaFrame",
                "overlays": [
                 {
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
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
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
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
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
                 },
                 {
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 81,
                       "width": 82,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_4_0_0_map.gif"
                      }
                     ]
                    },
                    "hfov": 11.73,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -179.87,
                    "pitch": -7.29
                   }
                  ],
                  "id": "overlay_31600C5C_3C36_D95D_41BC_E9F7D4587C95",
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4, this.camera_4681F984_4A58_A11F_41D0_340F8F26A81D); this.mainPlayList.set('selectedIndex', 5)"
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
                       "height": 162,
                       "width": 164,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_4_0.png"
                      }
                     ]
                    },
                    "pitch": -7.29
                   }
                  ]
                 },
                 {
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 84,
                       "width": 69,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_5_0_0_map.gif"
                      }
                     ]
                    },
                    "hfov": 9.92,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -2.69,
                    "pitch": -4.02
                   }
                  ],
                  "id": "overlay_3177AF77_3C36_D76A_41B0_BA478D445CA5",
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24, this.camera_468B4969_4A58_A1E8_41D0_6342BB1AC5BD); this.mainPlayList.set('selectedIndex', 3)"
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
                       "height": 169,
                       "width": 138,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_0_HS_5_0.png"
                      }
                     ]
                    },
                    "pitch": -4.02
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
              "cardboardMenu": "this.Menu_46FD68F7_4A58_A0F9_41C7_319B2B5B8962",
              "partial": false,
              "pitch": 0,
              "thumbnailUrl": "media/panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_t.jpg",
              "class": "Panorama",
              "hfovMin": 60,
              "label": "C05",
              "id": "panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
              "mapLocations": [
               {
                "x": 513.69,
                "class": "PanoramaMapLocation",
                "y": 214.18,
                "angle": -68.2,
                "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
               }
              ],
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
                   "class": "SphericPanoramaFrame",
                   "overlays": [
                    {
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
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
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
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
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
                    },
                    {
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 98,
                          "width": 86,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_4_0_0_map.gif"
                         }
                        ]
                       },
                       "hfov": 12.32,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -178.55,
                       "pitch": -8.04
                      }
                     ],
                     "id": "overlay_310FDBE1_3C36_5F66_41BB_BDA464171CC9",
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA, this.camera_476FEA19_4A58_A329_41C3_E024FEBF7E1C); this.mainPlayList.set('selectedIndex', 4)"
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
                          "height": 197,
                          "width": 172,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_4_0.png"
                         }
                        ]
                       },
                       "pitch": -8.04
                      }
                     ]
                    },
                    {
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 89,
                          "width": 73,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_5_0_0_map.gif"
                         }
                        ]
                       },
                       "hfov": 10.58,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 7.93,
                       "pitch": -2.89
                      }
                     ],
                     "id": "overlay_310CF005_3C36_48AF_41C4_A7D692E40CF8",
                     "useHandCursor": true,
                     "enabledInCardboard": true,
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_477B5A04_4A58_A31F_41D2_07E9081E9026); this.mainPlayList.set('selectedIndex', 6)"
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
                          "height": 179,
                          "width": 147,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_0_HS_5_0.png"
                         }
                        ]
                       },
                       "pitch": -2.89
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
                 "cardboardMenu": "this.Menu_46FD68F7_4A58_A0F9_41C7_319B2B5B8962",
                 "partial": false,
                 "pitch": 0,
                 "thumbnailUrl": "media/panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_t.jpg",
                 "class": "Panorama",
                 "hfovMin": 60,
                 "label": "C06",
                 "id": "panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
                 "mapLocations": [
                  {
                   "x": 547.15,
                   "class": "PanoramaMapLocation",
                   "y": 228.44,
                   "angle": 109.18,
                   "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
                  }
                 ],
                 "hfovMax": 120,
                 "hfov": 360,
                 "adjacentPanoramas": [
                  {
                   "panorama": {
                    "frames": [
                     {
                      "thumbnailUrl": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_t.jpg",
                      "class": "SphericPanoramaFrame",
                      "overlays": [
                       {
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
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
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
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
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
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
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
                       },
                       {
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 98,
                             "width": 130,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_18_0_0_map.gif"
                            }
                           ]
                          },
                          "hfov": 18.69,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -96.27,
                          "pitch": -4.02
                         }
                        ],
                        "id": "overlay_31577B6A_3C37_DF7A_41CA_69C6508E3410",
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4, this.camera_46E2BBAB_4A58_A169_41CC_3B75D524288B); this.mainPlayList.set('selectedIndex', 5)"
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
                             "height": 197,
                             "width": 260,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_18_0.png"
                            }
                           ]
                          },
                          "pitch": -4.02
                         }
                        ]
                       },
                       {
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 73,
                             "width": 53,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_19_0_0_map.gif"
                            }
                           ]
                          },
                          "hfov": 7.66,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 4.74,
                          "pitch": -2.68
                         }
                        ],
                        "id": "overlay_31666916_3C37_D8AD_41BF_0E759A3A4B57",
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_46EEEB9C_4A58_A12F_41D0_1FCD34FF1AD2); this.mainPlayList.set('selectedIndex', 7)"
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
                             "height": 146,
                             "width": 106,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_19_0.png"
                            }
                           ]
                          },
                          "pitch": -2.68
                         }
                        ]
                       },
                       {
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 50,
                             "width": 45,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_20_0_0_map.gif"
                            }
                           ]
                          },
                          "hfov": 6.56,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 156.92,
                          "pitch": -1.22
                         }
                        ],
                        "id": "overlay_324F6236_3C36_48ED_419C_6AA2CE6648A0",
                        "useHandCursor": true,
                        "enabledInCardboard": true,
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_46F7DB8C_4A58_A128_41AF_10FD1D4C5E57); this.mainPlayList.set('selectedIndex', 15)"
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
                             "height": 100,
                             "width": 91,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_0_HS_20_0.png"
                            }
                           ]
                          },
                          "pitch": -1.22
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
                    "cardboardMenu": "this.Menu_46FD68F7_4A58_A0F9_41C7_319B2B5B8962",
                    "partial": false,
                    "pitch": 0,
                    "thumbnailUrl": "media/panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_t.jpg",
                    "class": "Panorama",
                    "hfovMin": 60,
                    "label": "C07",
                    "id": "panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
                    "mapLocations": [
                     {
                      "x": 585.64,
                      "class": "PanoramaMapLocation",
                      "y": 256.29,
                      "angle": 41.19,
                      "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
                     }
                    ],
                    "hfovMax": 120,
                    "hfov": 360,
                    "adjacentPanoramas": [
                     {
                      "panorama": {
                       "frames": [
                        {
                         "thumbnailUrl": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_t.jpg",
                         "class": "SphericPanoramaFrame",
                         "overlays": [
                          {
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
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
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
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
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
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
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
                          },
                          {
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 104,
                                "width": 76,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_16_0_0_map.gif"
                               }
                              ]
                             },
                             "hfov": 11.08,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -174.64,
                             "pitch": -1.2
                            }
                           ],
                           "id": "overlay_3195499F_3C32_3BDA_41C9_4DAE277EAE88",
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_475359DD_4A58_A129_41B3_F68A61CCB723); this.mainPlayList.set('selectedIndex', 22)"
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
                                "height": 208,
                                "width": 153,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_16_0.png"
                               }
                              ]
                             },
                             "pitch": -1.2
                            }
                           ]
                          },
                          {
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 64,
                                "width": 44,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_17_0_0_map.gif"
                               }
                              ]
                             },
                             "hfov": 6.46,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -18.92,
                             "pitch": -1.79
                            }
                           ],
                           "id": "overlay_31A28EB8_3C32_59E6_41CB_4E8D47D0B41B",
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_474829F3_4A58_A0F9_41CB_CE49CFB0A81A); this.mainPlayList.set('selectedIndex', 6)"
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
                                "height": 129,
                                "width": 89,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_17_0.png"
                               }
                              ]
                             },
                             "pitch": -1.79
                            }
                           ]
                          },
                          {
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 67,
                                "width": 59,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_18_0_0_map.gif"
                               }
                              ]
                             },
                             "hfov": 8.52,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 113.51,
                             "pitch": -1.39
                            }
                           ],
                           "id": "overlay_326C1794_3C32_57AE_41C8_76690F8BD429",
                           "useHandCursor": true,
                           "enabledInCardboard": true,
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_46A039C5_4A58_A119_41B5_57E472EA6C5F); this.mainPlayList.set('selectedIndex', 16)"
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
                                "height": 134,
                                "width": 118,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_0_HS_18_0.png"
                               }
                              ]
                             },
                             "pitch": -1.39
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
                       "cardboardMenu": "this.Menu_46FD68F7_4A58_A0F9_41C7_319B2B5B8962",
                       "partial": false,
                       "pitch": 0,
                       "thumbnailUrl": "media/panorama_0FD82345_0671_EAD5_4173_8B63686C1397_t.jpg",
                       "class": "Panorama",
                       "hfovMin": 60,
                       "label": "C16",
                       "id": "panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
                       "mapLocations": [
                        {
                         "x": 628.49,
                         "class": "PanoramaMapLocation",
                         "y": 310.59,
                         "angle": 0,
                         "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
                        }
                       ],
                       "hfovMax": 120,
                       "hfov": 360,
                       "adjacentPanoramas": [
                        {
                         "panorama": {
                          "frames": [
                           {
                            "thumbnailUrl": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_t.jpg",
                            "class": "SphericPanoramaFrame",
                            "overlays": [
                             {
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
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
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
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
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
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
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
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 80,
                                   "width": 61,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_16_0_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 8.92,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -107.62,
                                "pitch": -2.5
                               }
                              ],
                              "id": "overlay_31813653_3C3D_C8AA_4193_CAA24AD6D388",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_472E1C89_4A58_A729_41D1_8FEA99581A53); this.mainPlayList.set('selectedIndex', 15)"
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
                                   "height": 161,
                                   "width": 123,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_16_0.png"
                                  }
                                 ]
                                },
                                "pitch": -2.5
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 110,
                                   "width": 80,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_17_0_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 11.57,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 152.96,
                                "pitch": -3.67
                               }
                              ],
                              "id": "overlay_318BEE4E_3C3D_F8BA_41C0_DB0A84F563D6",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_473B6C78_4A58_A7F7_41CA_05F509D1B8F6); this.mainPlayList.set('selectedIndex', 17)"
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
                                   "height": 221,
                                   "width": 160,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_17_0.png"
                                  }
                                 ]
                                },
                                "pitch": -3.67
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 85,
                                   "width": 77,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_18_0_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 11.11,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 25.67,
                                "pitch": -1.26
                               }
                              ],
                              "id": "overlay_326062D4_3C3D_C9AE_41C8_820B84085DB2",
                              "useHandCursor": true,
                              "enabledInCardboard": true,
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_470A2C67_4A58_A718_41C0_9819C1C7E06C); this.mainPlayList.set('selectedIndex', 9)"
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
                                   "height": 170,
                                   "width": 154,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_0_HS_18_0.png"
                                  }
                                 ]
                                },
                                "pitch": -1.26
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
                          "cardboardMenu": "this.Menu_46FD68F7_4A58_A0F9_41C7_319B2B5B8962",
                          "partial": false,
                          "pitch": 0,
                          "thumbnailUrl": "media/panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_t.jpg",
                          "class": "Panorama",
                          "hfovMin": 60,
                          "label": "C17",
                          "id": "panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                          "mapLocations": [
                           {
                            "x": 676.22,
                            "class": "PanoramaMapLocation",
                            "y": 316.87,
                            "angle": 0,
                            "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
                           }
                          ],
                          "hfovMax": 120,
                          "hfov": 360,
                          "adjacentPanoramas": [
                           {
                            "panorama": {
                             "frames": [
                              {
                               "thumbnailUrl": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_t.jpg",
                               "class": "SphericPanoramaFrame",
                               "overlays": [
                                {
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
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
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
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
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
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
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
                                },
                                {
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 85,
                                      "width": 98,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_18_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 14.11,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -143.14,
                                   "pitch": -4.05
                                  }
                                 ],
                                 "id": "overlay_31A7661B_3C32_48DA_41BD_C27EC3BCDDC9",
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_46324B2D_4A58_A169_4198_FD984E9D2DD5); this.mainPlayList.set('selectedIndex', 7)"
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
                                      "height": 170,
                                      "width": 196,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_18_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -4.05
                                  }
                                 ]
                                },
                                {
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 88,
                                      "width": 80,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_19_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 11.51,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -0.88,
                                   "pitch": -5.02
                                  }
                                 ],
                                 "id": "overlay_31B78775_3C32_776F_41C6_8E114C1EBBB9",
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2, this.camera_462A3B3E_4A58_A16B_41B8_EF5A565DEE9E); this.mainPlayList.set('selectedIndex', 10)"
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
                                      "height": 176,
                                      "width": 160,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_19_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -5.02
                                  }
                                 ]
                                },
                                {
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 78,
                                      "width": 64,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_20_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 9.34,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 81.58,
                                   "pitch": -0.33
                                  }
                                 ],
                                 "id": "overlay_31BE2ED2_3C32_59A5_41C5_8CE1DF322D9B",
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_463C0B1D_4A58_A129_41C3_4FB6D7110418); this.mainPlayList.set('selectedIndex', 16)"
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
                                      "height": 156,
                                      "width": 129,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_0_HS_20_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -0.33
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
                             "cardboardMenu": "this.Menu_46FD68F7_4A58_A0F9_41C7_319B2B5B8962",
                             "partial": false,
                             "pitch": 0,
                             "thumbnailUrl": "media/panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_t.jpg",
                             "class": "Panorama",
                             "hfovMin": 60,
                             "label": "C10",
                             "id": "panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                             "mapLocations": [
                              {
                               "x": 686.27,
                               "class": "PanoramaMapLocation",
                               "y": 250.53,
                               "angle": 91.91,
                               "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
                              }
                             ],
                             "hfovMax": 120,
                             "hfov": 360,
                             "adjacentPanoramas": [
                              {
                               "panorama": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
                               "class": "AdjacentPanorama",
                               "yaw": 81.58,
                               "backwardYaw": 25.67,
                               "distance": 1
                              },
                              {
                               "panorama": {
                                "frames": [
                                 {
                                  "thumbnailUrl": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_t.jpg",
                                  "class": "SphericPanoramaFrame",
                                  "overlays": [
                                   {
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
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
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
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
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
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
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
                                   },
                                   {
                                    "maps": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 62,
                                         "width": 52,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_12_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "hfov": 7.67,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": -154.28,
                                      "pitch": -3.38
                                     }
                                    ],
                                    "id": "overlay_31B3B513_3C36_48AA_41C2_639E02762ACD",
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82, this.camera_468AFBC8_4A58_A117_41C7_6A096E928325); this.mainPlayList.set('selectedIndex', 8)"
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
                                         "height": 124,
                                         "width": 104,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_12_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -3.38
                                     }
                                    ]
                                   },
                                   {
                                    "maps": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 75,
                                         "width": 77,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_13_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "hfov": 11.33,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": -42.13,
                                      "pitch": -1.48
                                     }
                                    ],
                                    "id": "overlay_314A48B2_3C36_D9E5_41C2_F12297588075",
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_4697BBB9_4A58_A169_41C6_D2A39578ACD6); this.mainPlayList.set('selectedIndex', 9)"
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
                                         "height": 150,
                                         "width": 154,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_13_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -1.48
                                     }
                                    ]
                                   },
                                   {
                                    "maps": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 71,
                                         "width": 42,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_14_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "hfov": 6.29,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 36.85,
                                      "pitch": -2.58
                                     }
                                    ],
                                    "id": "overlay_314A418A_3C36_CBA5_41C7_919875A1128F",
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA, this.camera_46BE5BD9_4A58_A129_41C1_A5D5D82656C6); this.mainPlayList.set('selectedIndex', 6)"
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
                                         "height": 142,
                                         "width": 85,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_0_HS_14_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -2.58
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
                                "cardboardMenu": "this.Menu_46FD68F7_4A58_A0F9_41C7_319B2B5B8962",
                                "partial": false,
                                "pitch": 0,
                                "thumbnailUrl": "media/panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_t.jpg",
                                "class": "Panorama",
                                "hfovMin": 60,
                                "label": "C08",
                                "id": "panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
                                "mapLocations": [
                                 {
                                  "x": 636.25,
                                  "class": "PanoramaMapLocation",
                                  "y": 219.13,
                                  "angle": 180.55,
                                  "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
                                 }
                                ],
                                "hfovMax": 120,
                                "hfov": 360,
                                "adjacentPanoramas": [
                                 {
                                  "panorama": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
                                  "class": "AdjacentPanorama",
                                  "yaw": -42.13,
                                  "backwardYaw": -143.14,
                                  "distance": 1
                                 },
                                 {
                                  "panorama": {
                                   "frames": [
                                    {
                                     "thumbnailUrl": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_t.jpg",
                                     "class": "SphericPanoramaFrame",
                                     "overlays": [
                                      {
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
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
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
                                      },
                                      {
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 35,
                                            "width": 36,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_8_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 5.41,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 129.09,
                                         "pitch": 0.09
                                        }
                                       ],
                                       "id": "overlay_31A6E59F_3C36_4BDA_41B0_1CFF384201CA",
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F, this.camera_46AB69AF_4A58_A169_41B2_4EC850AEDFE6); this.mainPlayList.set('selectedIndex', 7)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "yaw": 129.09,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 5.41,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 70,
                                            "width": 73,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_0_HS_8_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": 0.09
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
                                   "cardboardMenu": "this.Menu_46FD68F7_4A58_A0F9_41C7_319B2B5B8962",
                                   "partial": false,
                                   "pitch": 0,
                                   "thumbnailUrl": "media/panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_t.jpg",
                                   "class": "Panorama",
                                   "hfovMin": 60,
                                   "label": "C09",
                                   "id": "panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
                                   "mapLocations": [
                                    {
                                     "x": 634.92,
                                     "class": "PanoramaMapLocation",
                                     "y": 158.55,
                                     "angle": 35.54,
                                     "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
                                    }
                                   ],
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
                                 }
                                ],
                                "vfov": 180
                               },
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
                                  "class": "SphericPanoramaFrame",
                                  "overlays": [
                                   {
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
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
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
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
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
                                   },
                                   {
                                    "maps": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 112,
                                         "width": 79,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_4_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "hfov": 11.41,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": -0.95,
                                      "pitch": -0.25
                                     }
                                    ],
                                    "id": "overlay_31B10D7A_3C32_DB5A_41A1_B6DFD3B7AB9B",
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53, this.camera_47D25CAA_4A58_A76B_41AF_426BA6BEA21E); this.mainPlayList.set('selectedIndex', 9)"
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
                                         "height": 225,
                                         "width": 158,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_4_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -0.25
                                     }
                                    ]
                                   },
                                   {
                                    "maps": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 98,
                                         "width": 125,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_5_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "hfov": 17.82,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 177.7,
                                      "pitch": -8.29
                                     }
                                    ],
                                    "id": "overlay_31A10589_3C32_CBA6_41B4_4595385EB844",
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E, this.camera_4720BC9B_4A58_A729_41C1_1494820624B3); this.mainPlayList.set('selectedIndex', 11)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "yaw": 177.7,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 17.82,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 197,
                                         "width": 250,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_0_HS_5_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -8.29
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
                                "cardboardMenu": "this.Menu_46FD68F7_4A58_A0F9_41C7_319B2B5B8962",
                                "partial": false,
                                "pitch": 0,
                                "thumbnailUrl": "media/panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_t.jpg",
                                "class": "Panorama",
                                "hfovMin": 60,
                                "label": "C11",
                                "id": "panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
                                "mapLocations": [
                                 {
                                  "x": 747.51,
                                  "class": "PanoramaMapLocation",
                                  "y": 249.79,
                                  "angle": -86.82,
                                  "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
                                 }
                                ],
                                "hfovMax": 120,
                                "hfov": 360,
                                "adjacentPanoramas": [
                                 {
                                  "panorama": {
                                   "frames": [
                                    {
                                     "thumbnailUrl": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_t.jpg",
                                     "class": "SphericPanoramaFrame",
                                     "overlays": [
                                      {
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
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
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
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
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
                                      },
                                      {
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 94,
                                            "width": 76,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_4_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 10.93,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 0.03,
                                         "pitch": -5.02
                                        }
                                       ],
                                       "id": "overlay_31BBE3A6_3C33_CFED_41C6_0527EAB56766",
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2, this.camera_4668BACE_4A58_A328_4155_97855DC26EA2); this.mainPlayList.set('selectedIndex', 10)"
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
                                            "height": 189,
                                            "width": 152,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_4_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -5.02
                                        }
                                       ]
                                      },
                                      {
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 112,
                                            "width": 89,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_5_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 12.62,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -178.02,
                                         "pitch": -10.03
                                        }
                                       ],
                                       "id": "overlay_31BBF526_3C33_C8ED_41CC_EDB14C8AC409",
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778, this.camera_466EAABF_4A58_A368_41AA_5BE5273F6FB9); this.mainPlayList.set('selectedIndex', 12)"
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
                                            "height": 224,
                                            "width": 178,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_0_HS_5_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -10.03
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
                                   "cardboardMenu": "this.Menu_46FD68F7_4A58_A0F9_41C7_319B2B5B8962",
                                   "partial": false,
                                   "pitch": 0,
                                   "thumbnailUrl": "media/panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_t.jpg",
                                   "class": "Panorama",
                                   "hfovMin": 60,
                                   "label": "C12",
                                   "id": "panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
                                   "mapLocations": [
                                    {
                                     "x": 812.45,
                                     "class": "PanoramaMapLocation",
                                     "y": 250.53,
                                     "angle": -88.57,
                                     "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
                                    }
                                   ],
                                   "hfovMax": 120,
                                   "hfov": 360,
                                   "adjacentPanoramas": [
                                    {
                                     "panorama": {
                                      "frames": [
                                       {
                                        "thumbnailUrl": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_t.jpg",
                                        "class": "SphericPanoramaFrame",
                                        "overlays": [
                                         {
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
                                          "rollOverDisplay": false,
                                          "class": "HotspotPanoramaOverlay",
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
                                          "rollOverDisplay": false,
                                          "class": "HotspotPanoramaOverlay",
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
                                         },
                                         {
                                          "maps": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 121,
                                               "width": 100,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_4_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "hfov": 14.38,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": -0.18,
                                            "pitch": -5.9
                                           }
                                          ],
                                          "id": "overlay_31BB30F3_3C33_C96A_4188_186FB6E0302F",
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "class": "HotspotPanoramaOverlay",
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741, this.camera_4715BA43_4A58_A319_41D2_0E2CA09924D5); this.mainPlayList.set('selectedIndex', 13)"
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
                                               "height": 242,
                                               "width": 200,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_4_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -5.9
                                           }
                                          ]
                                         },
                                         {
                                          "maps": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 114,
                                               "width": 132,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_5_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "hfov": 18.94,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": -178.74,
                                            "pitch": -7.41
                                           }
                                          ],
                                          "id": "overlay_31BE4255_3C32_48AF_41BF_D5F61B49D926",
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "class": "HotspotPanoramaOverlay",
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E, this.camera_4763FA2E_4A58_A36B_41A8_1A02D470C0C7); this.mainPlayList.set('selectedIndex', 11)"
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
                                               "height": 228,
                                               "width": 265,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_0_HS_5_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -7.41
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
                                      "cardboardMenu": "this.Menu_46FD68F7_4A58_A0F9_41C7_319B2B5B8962",
                                      "partial": false,
                                      "pitch": 0,
                                      "thumbnailUrl": "media/panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_t.jpg",
                                      "class": "Panorama",
                                      "hfovMin": 60,
                                      "label": "C13",
                                      "id": "panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
                                      "mapLocations": [
                                       {
                                        "x": 858.03,
                                        "class": "PanoramaMapLocation",
                                        "y": 250.53,
                                        "angle": 86.73,
                                        "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
                                       }
                                      ],
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
                                           "class": "SphericPanoramaFrame",
                                           "overlays": [
                                            {
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
                                             "rollOverDisplay": false,
                                             "class": "HotspotPanoramaOverlay",
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
                                             "rollOverDisplay": false,
                                             "class": "HotspotPanoramaOverlay",
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
                                            },
                                            {
                                             "maps": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 166,
                                                  "width": 147,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_4_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "hfov": 21.2,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": -178.42,
                                               "pitch": -3.64
                                              }
                                             ],
                                             "id": "overlay_31B80EA2_3C32_79EA_41CD_2CA7EF8ADC1D",
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "class": "HotspotPanoramaOverlay",
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778, this.camera_46E0B93E_4A58_A16B_41B6_E41913DE65A6); this.mainPlayList.set('selectedIndex', 12)"
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
                                                  "height": 333,
                                                  "width": 295,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_4_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": -3.64
                                              }
                                             ]
                                            },
                                            {
                                             "maps": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 171,
                                                  "width": 116,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_5_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "hfov": 16.77,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": -0.27,
                                               "pitch": -3.52
                                              }
                                             ],
                                             "id": "overlay_31BE0D81_3C32_5BA6_41B7_6DFB73181369",
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "class": "HotspotPanoramaOverlay",
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC, this.camera_46963953_4A58_A138_41D0_7082290212FC); this.mainPlayList.set('selectedIndex', 14)"
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
                                                  "height": 343,
                                                  "width": 233,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_0_HS_5_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": -3.52
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
                                         "cardboardMenu": "this.Menu_46FD68F7_4A58_A0F9_41C7_319B2B5B8962",
                                         "partial": false,
                                         "pitch": 0,
                                         "thumbnailUrl": "media/panorama_0F98F446_0671_2ED7_4191_DEC01556F741_t.jpg",
                                         "class": "Panorama",
                                         "hfovMin": 60,
                                         "label": "C14",
                                         "id": "panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
                                         "mapLocations": [
                                          {
                                           "x": 898.74,
                                           "class": "PanoramaMapLocation",
                                           "y": 253.41,
                                           "angle": 88.03,
                                           "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
                                          }
                                         ],
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
                                              "class": "SphericPanoramaFrame",
                                              "overlays": [
                                               {
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
                                                "rollOverDisplay": false,
                                                "class": "HotspotPanoramaOverlay",
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
                                               },
                                               {
                                                "maps": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 122,
                                                     "width": 123,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_0_HS_2_0_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 17.81,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": 0.25,
                                                  "pitch": -3.27
                                                 }
                                                ],
                                                "id": "overlay_31A78791_3C32_D7A7_419E_CA932C83A3E7",
                                                "useHandCursor": true,
                                                "enabledInCardboard": true,
                                                "rollOverDisplay": false,
                                                "class": "HotspotPanoramaOverlay",
                                                "areas": [
                                                 {
                                                  "mapColor": "#FF0000",
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741, this.camera_474EDC18_4A58_A737_41A7_CE83B4C98172); this.mainPlayList.set('selectedIndex', 13)"
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
                                                     "height": 245,
                                                     "width": 247,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_0_HS_2_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "pitch": -3.27
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
                                            "cardboardMenu": "this.Menu_46FD68F7_4A58_A0F9_41C7_319B2B5B8962",
                                            "partial": false,
                                            "pitch": 0,
                                            "thumbnailUrl": "media/panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_t.jpg",
                                            "class": "Panorama",
                                            "hfovMin": 60,
                                            "label": "C15",
                                            "id": "panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
                                            "mapLocations": [
                                             {
                                              "x": 947.2,
                                              "class": "PanoramaMapLocation",
                                              "y": 251.93,
                                              "angle": -86.35,
                                              "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
                                             }
                                            ],
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
                            "yaw": 25.67,
                            "backwardYaw": 81.58,
                            "distance": 1
                           },
                           {
                            "panorama": {
                             "frames": [
                              {
                               "thumbnailUrl": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_t.jpg",
                               "class": "SphericPanoramaFrame",
                               "overlays": [
                                {
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
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
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
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
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
                                },
                                {
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 76,
                                      "width": 73,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_16_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 10.6,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 7.69,
                                   "pitch": 0.41
                                  }
                                 ],
                                 "id": "overlay_31FF256B_3C3E_4B7A_41C4_007A0322B0E3",
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_46D6CB5D_4A58_A129_41D2_2B8189B92529); this.mainPlayList.set('selectedIndex', 18)"
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
                                      "height": 152,
                                      "width": 147,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_16_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": 0.41
                                  }
                                 ]
                                },
                                {
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 97,
                                      "width": 80,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_17_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 11.58,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -143.45,
                                   "pitch": 0.45
                                  }
                                 ],
                                 "id": "overlay_31FA7D5A_3C3E_5B5A_41CB_09D056C34B23",
                                 "useHandCursor": true,
                                 "enabledInCardboard": true,
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2, this.camera_4620AB4E_4A58_A128_41CC_F2F4404AA1AC); this.mainPlayList.set('selectedIndex', 16)"
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
                                      "height": 195,
                                      "width": 160,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_0_HS_17_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": 0.45
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
                             "cardboardMenu": "this.Menu_46FD68F7_4A58_A0F9_41C7_319B2B5B8962",
                             "partial": false,
                             "pitch": 0,
                             "thumbnailUrl": "media/panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_t.jpg",
                             "class": "Panorama",
                             "hfovMin": 60,
                             "label": "C18",
                             "id": "panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
                             "mapLocations": [
                              {
                               "x": 674.74,
                               "class": "PanoramaMapLocation",
                               "y": 343.99,
                               "angle": 163.35,
                               "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
                              }
                             ],
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
                                  "class": "SphericPanoramaFrame",
                                  "overlays": [
                                   {
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
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
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
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
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
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "yaw": 168.89,
                                      "class": "HotspotPanoramaOverlayImage",
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
                                   },
                                   {
                                    "maps": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 111,
                                         "width": 116,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_16_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "hfov": 16.61,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": -53.03,
                                      "pitch": -8.19
                                     }
                                    ],
                                    "id": "overlay_318E48FC_3C3E_D95E_41C8_D67E6535535C",
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_460FAAFE_4A58_A0EB_41CC_4C75CC83BEED); this.mainPlayList.set('selectedIndex', 22)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "yaw": -53.03,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 16.61,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 222,
                                         "width": 233,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_16_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -8.19
                                     }
                                    ]
                                   },
                                   {
                                    "maps": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 115,
                                         "width": 93,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_17_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "hfov": 13.33,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 24.89,
                                      "pitch": -8.66
                                     }
                                    ],
                                    "id": "overlay_31EDADC4_3C3E_3BAD_41AB_C9F7B53B7D40",
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC, this.camera_4605FB0E_4A58_A12B_41C0_54A0136FE3E1); this.mainPlayList.set('selectedIndex', 17)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "yaw": 24.89,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 13.33,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 230,
                                         "width": 187,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_17_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": -8.66
                                     }
                                    ]
                                   },
                                   {
                                    "maps": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 107,
                                         "width": 88,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_18_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "hfov": 12.81,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 165.15,
                                      "pitch": 0.78
                                     }
                                    ],
                                    "id": "overlay_297A31D6_3CE7_18C9_41C7_8645573E8D7F",
                                    "useHandCursor": true,
                                    "enabledInCardboard": true,
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D, this.camera_4619BAED_4A58_A0E8_41BC_70EEFE1A16C6); this.mainPlayList.set('selectedIndex', 19)"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "yaw": 165.15,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 12.81,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 214,
                                         "width": 177,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_0_HS_18_0.png"
                                        }
                                       ]
                                      },
                                      "pitch": 0.78
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
                                "cardboardMenu": "this.Menu_46FD68F7_4A58_A0F9_41C7_319B2B5B8962",
                                "partial": false,
                                "pitch": 0,
                                "thumbnailUrl": "media/panorama_0F84F19D_0671_6675_4191_5761B2287855_t.jpg",
                                "class": "Panorama",
                                "hfovMin": 60,
                                "label": "C19",
                                "id": "panorama_0F84F19D_0671_6675_4191_5761B2287855",
                                "mapLocations": [
                                 {
                                  "x": 670.6,
                                  "class": "PanoramaMapLocation",
                                  "y": 386.76,
                                  "angle": 0,
                                  "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
                                 }
                                ],
                                "hfovMax": 120,
                                "hfov": 360,
                                "adjacentPanoramas": [
                                 {
                                  "panorama": {
                                   "frames": [
                                    {
                                     "thumbnailUrl": "media/panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D_t.jpg",
                                     "class": "SphericPanoramaFrame",
                                     "overlays": [
                                      {
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
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
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
                                      },
                                      {
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 88,
                                            "width": 78,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D_0_HS_2_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 11.3,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -174.74,
                                         "pitch": -0.44
                                        }
                                       ],
                                       "id": "overlay_31FEF583_3C3F_CBAA_41CA_B71528649943",
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_475B3C08_4A58_A717_41B8_430452F6594E); this.mainPlayList.set('selectedIndex', 18)"
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
                                            "height": 177,
                                            "width": 156,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D_0_HS_2_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -0.44
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
                                   "cardboardMenu": "this.Menu_46FD68F7_4A58_A0F9_41C7_319B2B5B8962",
                                   "partial": false,
                                   "pitch": 0,
                                   "thumbnailUrl": "media/panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D_t.jpg",
                                   "class": "Panorama",
                                   "hfovMin": 60,
                                   "label": "C20",
                                   "id": "panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D",
                                   "mapLocations": [
                                    {
                                     "x": 684.79,
                                     "class": "PanoramaMapLocation",
                                     "y": 435.23,
                                     "angle": 181.22,
                                     "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
                                    }
                                   ],
                                   "hfovMax": 120,
                                   "hfov": 360,
                                   "adjacentPanoramas": [
                                    {
                                     "panorama": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
                                     "class": "AdjacentPanorama",
                                     "yaw": -174.74,
                                     "backwardYaw": 165.15,
                                     "distance": 1
                                    }
                                   ],
                                   "vfov": 180
                                  },
                                  "class": "AdjacentPanorama",
                                  "yaw": 165.15,
                                  "backwardYaw": -174.74,
                                  "distance": 1
                                 },
                                 {
                                  "panorama": {
                                   "frames": [
                                    {
                                     "thumbnailUrl": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_t.jpg",
                                     "class": "SphericPanoramaFrame",
                                     "overlays": [
                                      {
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
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
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
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
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
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "yaw": -168.6,
                                         "class": "HotspotPanoramaOverlayImage",
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
                                      },
                                      {
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 79,
                                            "width": 84,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_20_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 12.09,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -172.27,
                                         "pitch": -4.19
                                        }
                                       ],
                                       "id": "overlay_3184A9AF_3C3E_5BFA_4193_1D078062DEF6",
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397, this.camera_47089A59_4A58_A329_41CF_DE6C685D6FC6); this.mainPlayList.set('selectedIndex', 15)"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "yaw": -172.27,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 12.09,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 159,
                                            "width": 168,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_20_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -4.19
                                        }
                                       ]
                                      },
                                      {
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 74,
                                            "width": 83,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_21_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 12.01,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -6.68,
                                         "pitch": 0.98
                                        }
                                       ],
                                       "id": "overlay_318F2744_3C3E_48AD_41CD_20BCB5DBAA95",
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0F84F19D_0671_6675_4191_5761B2287855, this.camera_46729AB0_4A58_A377_41CF_A7EB634D3812); this.mainPlayList.set('selectedIndex', 18)"
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
                                            "height": 149,
                                            "width": 166,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_21_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": 0.98
                                        }
                                       ]
                                      },
                                      {
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 96,
                                            "width": 68,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_22_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 9.82,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 87.82,
                                         "pitch": -4.77
                                        }
                                       ],
                                       "id": "overlay_31A91C84_3C3D_D9AD_41C5_CD5CBB0A6D17",
                                       "useHandCursor": true,
                                       "enabledInCardboard": true,
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67, this.camera_46761AA1_4A58_A318_41B3_146BCD4DA272); this.mainPlayList.set('selectedIndex', 21)"
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
                                            "height": 192,
                                            "width": 136,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_0_HS_22_0.png"
                                           }
                                          ]
                                         },
                                         "pitch": -4.77
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
                                   "cardboardMenu": "this.Menu_46FD68F7_4A58_A0F9_41C7_319B2B5B8962",
                                   "partial": false,
                                   "pitch": 0,
                                   "thumbnailUrl": "media/panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_t.jpg",
                                   "class": "Panorama",
                                   "hfovMin": 60,
                                   "label": "C23",
                                   "id": "panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
                                   "mapLocations": [
                                    {
                                     "x": 636.99,
                                     "class": "PanoramaMapLocation",
                                     "y": 342.51,
                                     "angle": 144.87,
                                     "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
                                    }
                                   ],
                                   "hfovMax": 120,
                                   "hfov": 360,
                                   "adjacentPanoramas": [
                                    {
                                     "panorama": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
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
                                        "class": "SphericPanoramaFrame",
                                        "overlays": [
                                         {
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
                                          "rollOverDisplay": false,
                                          "class": "HotspotPanoramaOverlay",
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
                                          "rollOverDisplay": false,
                                          "class": "HotspotPanoramaOverlay",
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
                                         },
                                         {
                                          "maps": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 128,
                                               "width": 142,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_0_HS_4_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "hfov": 20.49,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": -179.27,
                                            "pitch": -4.42
                                           }
                                          ],
                                          "id": "overlay_319C20C7_3C3E_C9AA_41CD_3CE2491B7454",
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "class": "HotspotPanoramaOverlay",
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754, this.camera_47744C37_4A58_A779_41C6_62B44CEDE7DE); this.mainPlayList.set('selectedIndex', 20)"
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
                                               "height": 257,
                                               "width": 285,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_0_HS_4_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -4.42
                                           }
                                          ]
                                         },
                                         {
                                          "maps": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 129,
                                               "width": 78,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_0_HS_5_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "hfov": 11.26,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": 4.77,
                                            "pitch": -4.76
                                           }
                                          ],
                                          "id": "overlay_3194C5EC_3C3E_CB7D_41C9_0F6F04D6B4CA",
                                          "useHandCursor": true,
                                          "enabledInCardboard": true,
                                          "rollOverDisplay": false,
                                          "class": "HotspotPanoramaOverlay",
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894, this.camera_4741CC27_4A58_A719_41CD_2FB2502B3ADE); this.mainPlayList.set('selectedIndex', 22)"
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
                                               "height": 259,
                                               "width": 156,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_0_HS_5_0.png"
                                              }
                                             ]
                                            },
                                            "pitch": -4.76
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
                                      "cardboardMenu": "this.Menu_46FD68F7_4A58_A0F9_41C7_319B2B5B8962",
                                      "partial": false,
                                      "pitch": 0,
                                      "thumbnailUrl": "media/panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_t.jpg",
                                      "class": "Panorama",
                                      "hfovMin": 60,
                                      "label": "C22",
                                      "id": "panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
                                      "mapLocations": [
                                       {
                                        "x": 597.76,
                                        "class": "PanoramaMapLocation",
                                        "y": 356.03,
                                        "angle": 71.57,
                                        "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
                                       }
                                      ],
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
                                           "class": "SphericPanoramaFrame",
                                           "overlays": [
                                            {
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
                                             "rollOverDisplay": false,
                                             "class": "HotspotPanoramaOverlay",
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
                                            },
                                            {
                                             "maps": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 187,
                                                  "width": 151,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_0_HS_2_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "hfov": 21.31,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": -179.93,
                                               "pitch": -11.43
                                              }
                                             ],
                                             "id": "overlay_3189D767_3C3E_576B_41B9_B7E24D9E032C",
                                             "useHandCursor": true,
                                             "enabledInCardboard": true,
                                             "rollOverDisplay": false,
                                             "class": "HotspotPanoramaOverlay",
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67, this.camera_46B7799A_4A58_A12B_41BB_2258ED4A401C); this.mainPlayList.set('selectedIndex', 21)"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "yaw": -179.93,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 21.31,
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 375,
                                                  "width": 302,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_0_HS_2_0.png"
                                                 }
                                                ]
                                               },
                                               "pitch": -11.43
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
                                         "cardboardMenu": "this.Menu_46FD68F7_4A58_A0F9_41C7_319B2B5B8962",
                                         "partial": false,
                                         "pitch": 0,
                                         "thumbnailUrl": "media/panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_t.jpg",
                                         "class": "Panorama",
                                         "hfovMin": 60,
                                         "label": "C21",
                                         "id": "panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
                                         "mapLocations": [
                                          {
                                           "x": 570.65,
                                           "class": "PanoramaMapLocation",
                                           "y": 371.77,
                                           "angle": 249.33,
                                           "map": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799"
                                          }
                                         ],
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
                                  "panorama": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
                                  "class": "AdjacentPanorama",
                                  "yaw": 24.89,
                                  "backwardYaw": 7.69,
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
                      "yaw": 156.92,
                      "backwardYaw": -18.92,
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
                  },
                  {
                   "panorama": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
                   "class": "AdjacentPanorama",
                   "yaw": -178.55,
                   "backwardYaw": -179.87,
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
  "class": "PanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "gyroscopeVerticalDraggingEnabled": true,
  "displayPlaybackBar": true,
  "mouseControlMode": "drag_acceleration",
  "id": "MainViewerPanoramaPlayer",
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
   "paddingLeft": 0,
   "progressBarOpacity": 1,
   "toolTipPaddingBottom": 4,
   "progressRight": 0,
   "toolTipBorderSize": 1,
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "toolTipShadowOpacity": 1,
   "toolTipOpacity": 1,
   "playbackBarBorderColor": "#FFFFFF",
   "playbackBarHeight": 10,
   "toolTipShadowVerticalLength": 0,
   "toolTipTextShadowColor": "#000000",
   "playbackBarHeadWidth": 6,
   "toolTipFontStyle": "normal",
   "shadow": false,
   "playbackBarProgressBorderSize": 0,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "progressBottom": 2,
   "playbackBarBackgroundColorDirection": "vertical",
   "paddingBottom": 0,
   "playbackBarRight": 0,
   "toolTipBackgroundColor": "#F6F6F6",
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
   "minHeight": 74,
   "progressBackgroundOpacity": 1,
   "toolTipFontColor": "#606060",
   "playbackBarBorderRadius": 0,
   "playbackBarHeadShadow": true,
   "playbackBarProgressBorderColor": "#000000",
   "minWidth": 107,
   "toolTipPaddingRight": 6,
   "width": "71.739%",
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "playbackBarHeadBorderRadius": 0,
   "toolTipTextShadowOpacity": 0,
   "height": "37.861%",
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
   "playbackBarHeadShadowHorizontalLength": 0,
   "playbackBarBackgroundOpacity": 1,
   "playbackBarBorderSize": 0,
   "toolTipBorderRadius": 3,
   "playbackBarHeadShadowOpacity": 0.7,
   "playbackBarHeadHeight": 15,
   "top": 1,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "playbackBarHeadShadowColor": "#000000",
   "toolTipFontWeight": "normal",
   "class": "ViewerArea",
   "toolTipTextShadowBlurRadius": 3,
   "progressBarBorderColor": "#000000",
   "id": "MapViewer",
   "playbackBarHeadOpacity": 1,
   "playbackBarHeadBorderSize": 0,
   "progressBackgroundColorDirection": "vertical",
   "toolTipShadowHorizontalLength": 0,
   "progressBarBackgroundColorRatios": [
    0
   ],
   "progressHeight": 10,
   "left": 7,
   "progressBorderColor": "#000000",
   "playbackBarHeadShadowVerticalLength": 0,
   "playbackBarBottom": 0,
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "toolTipFontFamily": "Arial",
   "progressOpacity": 1
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D_camera",
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
 "this.panorama_0FD85D6E_0673_DED7_40FD_D23817113C40",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_camera",
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
 "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -175.84,
   "pitch": 3.87
  },
  "id": "panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_camera",
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
 "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_camera",
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
 "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -175.31,
   "pitch": -3.25
  },
  "id": "panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_camera",
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
 "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_camera",
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
 "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_camera",
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
 "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -162.78,
   "pitch": 5.39
  },
  "id": "panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_camera",
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
 "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_camera",
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
 "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_camera",
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
 "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 176.32,
   "pitch": -2.81
  },
  "id": "panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_camera",
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
 "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -177.92,
   "pitch": -0.89
  },
  "id": "panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_camera",
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
 "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_camera",
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
 "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_0F98F446_0671_2ED7_4191_DEC01556F741_camera",
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
 "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.16,
   "pitch": -4.17
  },
  "id": "panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_camera",
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
 "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_0FD82345_0671_EAD5_4173_8B63686C1397_camera",
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
 "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_camera",
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
 "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 6.48,
   "pitch": 4.56
  },
  "id": "panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_camera",
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
   "yaw": -10.35,
   "pitch": 5.96
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D_camera"
 },
 "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -175.58,
   "pitch": 2.88
  },
  "id": "panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_camera",
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
 "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_camera",
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
 "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_camera",
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
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_46C9C8E4_4A58_AF1F_41D1_48670FCF8A38, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_46C9C8E4_4A58_AF1F_41D1_48670FCF8A38",
    "camera": "this.panorama_0C5F0BFE_0673_59B7_4157_C15F289CED2D_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FD85D6E_0673_DED7_40FD_D23817113C40",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_46C458E9_4A58_A0E9_419F_8BD2E4373D4A, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_46C458E9_4A58_A0E9_419F_8BD2E4373D4A",
    "camera": "this.panorama_0FD85D6E_0673_DED7_40FD_D23817113C40_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_46C438EA_4A58_A0EB_41CB_7161FC0CE081, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_46C438EA_4A58_A0EB_41CB_7161FC0CE081",
    "camera": "this.panorama_0FDDECDB_0673_FFFD_4192_A5DD1F1D9544_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_46C488EB_4A58_A0E9_41CE_3BE0FBF9C829, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_46C488EB_4A58_A0E9_41CE_3BE0FBF9C829",
    "camera": "this.panorama_0FDA99B5_0673_D9B5_417F_B1B5EF3D6F24_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_46C358EB_4A58_A0E9_41C8_B96999B38263, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_46C358EB_4A58_A0E9_41C8_B96999B38263",
    "camera": "this.panorama_0FD8B8AB_0673_265D_4181_2D7C532277BA_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_46C3D8EC_4A58_A0EF_41C4_E19C5CBE87E2, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_46C3D8EC_4A58_A0EF_41C4_E19C5CBE87E2",
    "camera": "this.panorama_0FDA2779_0673_2ABD_418B_39A919E068D4_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_46C3B8EC_4A58_A0EF_41CB_19BC78C52C06, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_46C3B8EC_4A58_A0EF_41CB_19BC78C52C06",
    "camera": "this.panorama_0FD89647_0673_6AD6_4154_A2A4B7E324CA_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_46C218ED_4A58_A0E9_41C5_0365A67DDE97, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_46C218ED_4A58_A0E9_41C5_0365A67DDE97",
    "camera": "this.panorama_0FC59EC7_0673_5BD5_418C_9E501F68352F_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_46C2E8EE_4A58_A0EB_41C6_C62E6813241C, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_46C2E8EE_4A58_A0EB_41C6_C62E6813241C",
    "camera": "this.panorama_0FD8BF35_0670_DA4A_4198_9ED2057DCD82_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_46C178EE_4A58_A0EB_41CE_565FC5CBC22B, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_46C178EE_4A58_A0EB_41CE_565FC5CBC22B",
    "camera": "this.panorama_0FD9C056_0671_26F6_418B_F405A95C2C53_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_46C248EF_4A58_A0E9_41C2_0D90B01E7739, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_46C248EF_4A58_A0E9_41C2_0D90B01E7739",
    "camera": "this.panorama_0FD93B7C_0671_5ABA_4189_CFFD7DFC2BA2_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_46C238EF_4A58_A0E9_41BB_A622A2B98672, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_46C238EF_4A58_A0E9_41BB_A622A2B98672",
    "camera": "this.panorama_0FD8B41B_0671_6E7D_4192_F88E02AED08E_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_46C298F0_4A58_A0F7_41CB_8F4230159A4F, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_46C298F0_4A58_A0F7_41CB_8F4230159A4F",
    "camera": "this.panorama_0FA644EC_0671_2FDA_4139_EE20ADB4A778_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_46C178F1_4A58_A0F9_41CB_8303EA9B1E0F, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_46C178F1_4A58_A0F9_41CB_8303EA9B1E0F",
    "camera": "this.panorama_0F98F446_0671_2ED7_4191_DEC01556F741_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_46C1C8F1_4A58_A0F9_41C7_1AB6E403863F, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_46C1C8F1_4A58_A0F9_41C7_1AB6E403863F",
    "camera": "this.panorama_0FC77285_0671_EA55_418C_E84406FDB1AC_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_46C1A8F2_4A58_A0FB_41CC_B000E4B83E24, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_46C1A8F2_4A58_A0FB_41CC_B000E4B83E24",
    "camera": "this.panorama_0FD82345_0671_EAD5_4173_8B63686C1397_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_46C018F3_4A58_A0F9_4195_7A643DFD0BA0, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_46C018F3_4A58_A0F9_4195_7A643DFD0BA0",
    "camera": "this.panorama_0FD8A2CE_0671_2BD7_4160_F4B5F5CFE5F2_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_46C0F8F3_4A58_A0F8_41D1_01BA77723AFA, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_46C0F8F3_4A58_A0F8_41D1_01BA77723AFA",
    "camera": "this.panorama_0FDFB3D8_0671_29FB_4184_5CA02F7358EC_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_46FF58F4_4A58_A0FF_41CC_4F4119C3469D, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_46FF58F4_4A58_A0FF_41CC_4F4119C3469D",
    "camera": "this.panorama_0F84F19D_0671_6675_4191_5761B2287855_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_46FF38F5_4A58_A0F9_41C0_B6638D35D65A, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_46FF38F5_4A58_A0F9_41C0_B6638D35D65A",
    "camera": "this.panorama_0FDE1F49_0671_7ADD_4191_EF61FA36243D_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_46FFA8F5_4A58_A0F9_41B1_1BAB2F7CE8DC, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_46FFA8F5_4A58_A0F9_41B1_1BAB2F7CE8DC",
    "camera": "this.panorama_0FDE5C8B_0671_5E5E_4133_C1F37F047754_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_46FE78F6_4A58_A0FB_41C0_DDB2FD0865AC, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_46FE78F6_4A58_A0FB_41C0_DDB2FD0865AC",
    "camera": "this.panorama_0FAACA9F_0671_3A75_4192_41B2767D1D67_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 0)",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_46FEE8F6_4A58_A0FB_41B9_87987E0E9106, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_46FEE8F6_4A58_A0FB_41B9_87987E0E9106",
    "camera": "this.panorama_0C7DC9D9_0670_D9FD_413A_2F4D6689A894_camera"
   }
  ]
 },
 "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799",
 {
  "class": "PlayList",
  "id": "playList_46CC48DD_4A58_AF29_41D1_E625BD924FDD",
  "items": [
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
    "class": "MapPlayListItem",
    "media": "this.map_2F1D2B3B_3FEA_3F13_41C5_B87C855D8799",
    "player": "this.MapViewerMapPlayer"
   }
  ]
 },
 "this.Menu_46FD68F7_4A58_A0F9_41C7_319B2B5B8962",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 179.82,
   "pitch": 0
  },
  "id": "camera_46E0B93E_4A58_A16B_41B6_E41913DE65A6",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.75,
   "pitch": 0
  },
  "id": "camera_46963953_4A58_A138_41D0_7082290212FC",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 177.79,
   "pitch": 0
  },
  "id": "camera_468B4969_4A58_A1E8_41D0_6342BB1AC5BD",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 1.45,
   "pitch": 0
  },
  "id": "camera_4681F984_4A58_A11F_41D0_340F8F26A81D",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.73,
   "pitch": 0
  },
  "id": "camera_46B7799A_4A58_A12B_41BB_2258ED4A401C",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 25.72,
   "pitch": 0
  },
  "id": "camera_46AB69AF_4A58_A169_41B2_4EC850AEDFE6",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 72.38,
   "pitch": 0
  },
  "id": "camera_46A039C5_4A58_A119_41B5_57E472EA6C5F",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.73,
   "pitch": 0
  },
  "id": "camera_475359DD_4A58_A129_41B3_F68A61CCB723",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -23.08,
   "pitch": 0
  },
  "id": "camera_474829F3_4A58_A0F9_41CB_CE49CFB0A81A",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 83.73,
   "pitch": 0
  },
  "id": "camera_477B5A04_4A58_A31F_41D2_07E9081E9026",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.13,
   "pitch": 0
  },
  "id": "camera_476FEA19_4A58_A329_41C3_E024FEBF7E1C",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 1.98,
   "pitch": 0
  },
  "id": "camera_4763FA2E_4A58_A36B_41A8_1A02D470C0C7",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 1.58,
   "pitch": 0
  },
  "id": "camera_4715BA43_4A58_A319_41D2_0E2CA09924D5",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 5.36,
   "pitch": 0
  },
  "id": "camera_47089A59_4A58_A329_41CF_DE6C685D6FC6",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -175.23,
   "pitch": 0
  },
  "id": "camera_46761AA1_4A58_A318_41B3_146BCD4DA272",
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
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 126.97,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "id": "camera_46729AB0_4A58_A377_41CF_A7EB634D3812"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 1.26,
   "pitch": 0
  },
  "id": "camera_466EAABF_4A58_A368_41AA_5BE5273F6FB9",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -2.3,
   "pitch": 0
  },
  "id": "camera_4668BACE_4A58_A328_4155_97855DC26EA2",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.33,
   "pitch": 0
  },
  "id": "camera_4660DADE_4A58_A328_41AF_19D93CFB0333",
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
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 5.26,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "id": "camera_4619BAED_4A58_A0E8_41BC_70EEFE1A16C6"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 173.32,
   "pitch": 0
  },
  "id": "camera_460FAAFE_4A58_A0EB_41CC_4C75CC83BEED",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -172.31,
   "pitch": 0
  },
  "id": "camera_4605FB0E_4A58_A12B_41C0_54A0136FE3E1",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -154.33,
   "pitch": 0
  },
  "id": "camera_463C0B1D_4A58_A129_41C3_4FB6D7110418",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 137.87,
   "pitch": 0
  },
  "id": "camera_46324B2D_4A58_A169_4198_FD984E9D2DD5",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 179.05,
   "pitch": 0
  },
  "id": "camera_462A3B3E_4A58_A16B_41B8_EF5A565DEE9E",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -27.04,
   "pitch": 0
  },
  "id": "camera_4620AB4E_4A58_A128_41CC_F2F4404AA1AC",
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
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -155.11,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "id": "camera_46D6CB5D_4A58_A129_41D2_2B8189B92529"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.65,
   "pitch": 0
  },
  "id": "camera_46CD9B6C_4A58_A1E8_419E_4CA2912C1113",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -178.54,
   "pitch": 0
  },
  "id": "camera_46C2FB7C_4A58_A1E8_41C3_4D5D01F60812",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 161.08,
   "pitch": 0
  },
  "id": "camera_46F7DB8C_4A58_A128_41AF_10FD1D4C5E57",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -143.15,
   "pitch": 0
  },
  "id": "camera_46EEEB9C_4A58_A12F_41D0_1FCD34FF1AD2",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -172.07,
   "pitch": 0
  },
  "id": "camera_46E2BBAB_4A58_A169_41CC_3B75D524288B",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 36.86,
   "pitch": 0
  },
  "id": "camera_4697BBB9_4A58_A169_41C6_D2A39578ACD6",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -50.91,
   "pitch": 0
  },
  "id": "camera_468AFBC8_4A58_A117_41C7_6A096E928325",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -175.26,
   "pitch": 0
  },
  "id": "camera_46BE5BD9_4A58_A129_41C1_A5D5D82656C6",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.72,
   "pitch": 0
  },
  "id": "camera_46B2CBE9_4A58_A0E9_41A3_3AA6A79D69BC",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.36,
   "pitch": 0
  },
  "id": "camera_46A53BF9_4A58_A0E9_41C1_847BB605A924",
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
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -14.85,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "id": "camera_475B3C08_4A58_A717_41B8_430452F6594E"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 179.73,
   "pitch": 0
  },
  "id": "camera_474EDC18_4A58_A737_41A7_CE83B4C98172",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -92.18,
   "pitch": 0
  },
  "id": "camera_4741CC27_4A58_A719_41CD_2FB2502B3ADE",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.07,
   "pitch": 0
  },
  "id": "camera_47744C37_4A58_A779_41C6_62B44CEDE7DE",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 2.01,
   "pitch": 0
  },
  "id": "camera_4766AC47_4A58_A719_41A7_83679BC6DA67",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 177.31,
   "pitch": 0
  },
  "id": "camera_4719BC57_4A58_A739_41A8_41F4BD4EE5BB",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -98.42,
   "pitch": 0
  },
  "id": "camera_470A2C67_4A58_A718_41C0_9819C1C7E06C",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 36.55,
   "pitch": 0
  },
  "id": "camera_473B6C78_4A58_A7F7_41CA_05F509D1B8F6",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -66.49,
   "pitch": 0
  },
  "id": "camera_472E1C89_4A58_A729_41D1_8FEA99581A53",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.97,
   "pitch": 0
  },
  "id": "camera_4720BC9B_4A58_A729_41C1_1494820624B3",
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
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 179.12,
   "pitch": 0
  },
  "id": "camera_47D25CAA_4A58_A76B_41AF_426BA6BEA21E",
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
 }
], "children": [
 {
  "progressBorderRadius": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "paddingRight": 0,
  "paddingLeft": 0,
  "progressBarOpacity": 1,
  "toolTipPaddingBottom": 4,
  "progressRight": 0,
  "toolTipBorderSize": 1,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipShadowOpacity": 1,
  "toolTipOpacity": 1,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarHeight": 10,
  "toolTipShadowVerticalLength": 0,
  "toolTipTextShadowColor": "#000000",
  "playbackBarHeadWidth": 6,
  "toolTipFontStyle": "normal",
  "shadow": false,
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBottom": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "paddingBottom": 0,
  "playbackBarRight": 0,
  "toolTipBackgroundColor": "#F6F6F6",
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
  "minHeight": 50,
  "progressBackgroundOpacity": 1,
  "toolTipFontColor": "#606060",
  "playbackBarBorderRadius": 0,
  "playbackBarHeadShadow": true,
  "playbackBarProgressBorderColor": "#000000",
  "minWidth": 100,
  "toolTipPaddingRight": 6,
  "width": "100%",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
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
  "playbackBarHeadShadowHorizontalLength": 0,
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
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "bottom": "0%",
  "toolTipFontWeight": "normal",
  "class": "ViewerArea",
  "toolTipTextShadowBlurRadius": 3,
  "progressBarBorderColor": "#000000",
  "id": "MainViewer",
  "playbackBarHeadOpacity": 1,
  "playbackBarHeadBorderSize": 0,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressHeight": 10,
  "left": 0,
  "toolTipShadowHorizontalLength": 0,
  "progressBorderColor": "#000000",
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarBottom": 5,
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
  "minWidth": 1,
  "paddingLeft": 0,
  "height": 132.11,
  "width": "96.924%",
  "borderRadius": 0,
  "borderSize": 0,
  "gap": 12,
  "contentOpaque": false,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "shadow": false,
  "horizontalAlign": "center",
  "paddingBottom": 0,
  "bottom": "1.95%",
  "class": "Container",
  "layout": "vertical",
  "id": "Container_03BF4D6F_10EF_82D8_41A4_FC17EDB0E403",
  "paddingTop": 0,
  "minHeight": 1,
  "backgroundOpacity": 0,
  "right": "1.51%",
  "children": [
   {
    "backgroundColorDirection": "vertical",
    "overflow": "scroll",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "minWidth": 1,
    "width": 314,
    "scrollBarColor": "#000000",
    "paddingLeft": 0,
    "height": 73,
    "borderRadius": 9,
    "borderSize": 0,
    "gap": 12,
    "contentOpaque": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "backgroundColor": [
     "#000000",
     "#000000"
    ],
    "shadow": false,
    "horizontalAlign": "center",
    "paddingBottom": 0,
    "backgroundColorRatios": [
     0,
     1
    ],
    "class": "Container",
    "layout": "horizontal",
    "id": "Container_1F218FBB_3BC2_A700_4191_230DA2F5BB68",
    "paddingTop": 0,
    "minHeight": 1,
    "backgroundOpacity": 0.59,
    "children": [
     {
      "paddingRight": 0,
      "minWidth": 1,
      "mode": "push",
      "width": 42,
      "paddingLeft": 0,
      "iconURL": "skin/IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0.png",
      "height": 57,
      "transparencyActive": false,
      "borderRadius": 0,
      "borderSize": 0,
      "maxWidth": 42,
      "rollOverIconURL": "skin/IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0_rollover.png",
      "shadow": false,
      "horizontalAlign": "center",
      "click": "this.mainPlayList.set('selectedIndex', 0)",
      "cursor": "hand",
      "paddingBottom": 0,
      "class": "IconButton",
      "maxHeight": 57,
      "id": "IconButton_1F3C6B8A_3A42_AF00_41B0_DC4E356C5CB0",
      "paddingTop": 0,
      "minHeight": 1,
      "backgroundOpacity": 0,
      "verticalAlign": "middle"
     },
     {
      "paddingRight": 0,
      "minWidth": 1,
      "mode": "push",
      "width": 42,
      "paddingLeft": 0,
      "iconURL": "skin/IconButton_1808CC36_3A41_E900_4183_CE565B25106A.png",
      "height": 57,
      "transparencyActive": false,
      "borderRadius": 0,
      "borderSize": 0,
      "maxWidth": 42,
      "rollOverIconURL": "skin/IconButton_1808CC36_3A41_E900_4183_CE565B25106A_rollover.png",
      "shadow": false,
      "horizontalAlign": "center",
      "click": "this.mainPlayList.set('selectedIndex', 2)",
      "cursor": "hand",
      "paddingBottom": 0,
      "class": "IconButton",
      "maxHeight": 57,
      "id": "IconButton_1808CC36_3A41_E900_4183_CE565B25106A",
      "paddingTop": 0,
      "minHeight": 1,
      "backgroundOpacity": 0,
      "verticalAlign": "middle"
     },
     {
      "paddingRight": 0,
      "minWidth": 1,
      "mode": "push",
      "width": 42,
      "paddingLeft": 0,
      "iconURL": "skin/IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE.png",
      "height": 57,
      "transparencyActive": false,
      "borderRadius": 0,
      "borderSize": 0,
      "maxWidth": 1047,
      "rollOverIconURL": "skin/IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE_rollover.png",
      "shadow": false,
      "horizontalAlign": "center",
      "click": "this.mainPlayList.set('selectedIndex', 4)",
      "cursor": "hand",
      "paddingBottom": 0,
      "class": "IconButton",
      "maxHeight": 1052,
      "id": "IconButton_182B284E_3A4E_A903_41CC_2D8AB3BD11BE",
      "paddingTop": 0,
      "minHeight": 1,
      "backgroundOpacity": 0,
      "verticalAlign": "middle"
     },
     {
      "paddingRight": 0,
      "minWidth": 1,
      "mode": "push",
      "width": 42,
      "paddingLeft": 0,
      "iconURL": "skin/IconButton_1FCDD1EC_3A41_BB00_41C5_40B934E107FD.png",
      "height": 57,
      "transparencyActive": false,
      "borderRadius": 0,
      "borderSize": 0,
      "maxWidth": 42,
      "rollOverIconURL": "skin/IconButton_1FCDD1EC_3A41_BB00_41C5_40B934E107FD_rollover.png",
      "shadow": false,
      "horizontalAlign": "center",
      "click": "this.mainPlayList.set('selectedIndex', 6)",
      "cursor": "hand",
      "paddingBottom": 0,
      "class": "IconButton",
      "maxHeight": 57,
      "id": "IconButton_1FCDD1EC_3A41_BB00_41C5_40B934E107FD",
      "paddingTop": 0,
      "minHeight": 1,
      "backgroundOpacity": 0,
      "verticalAlign": "middle"
     },
     {
      "paddingRight": 0,
      "minWidth": 1,
      "mode": "push",
      "width": 42,
      "paddingLeft": 0,
      "iconURL": "skin/IconButton_1F60FA0A_3A41_A900_41B0_37806583DDFA.png",
      "height": 57,
      "transparencyActive": false,
      "borderRadius": 0,
      "borderSize": 0,
      "maxWidth": 42,
      "rollOverIconURL": "skin/IconButton_1F60FA0A_3A41_A900_41B0_37806583DDFA_rollover.png",
      "shadow": false,
      "horizontalAlign": "center",
      "click": "this.mainPlayList.set('selectedIndex', 8)",
      "cursor": "hand",
      "paddingBottom": 0,
      "class": "IconButton",
      "maxHeight": 57,
      "id": "IconButton_1F60FA0A_3A41_A900_41B0_37806583DDFA",
      "paddingTop": 0,
      "minHeight": 1,
      "backgroundOpacity": 0,
      "verticalAlign": "middle"
     },
     {
      "paddingRight": 0,
      "minWidth": 1,
      "mode": "push",
      "width": 42,
      "paddingLeft": 0,
      "iconURL": "skin/IconButton_1F6F3FC2_3A42_6703_41B1_8F08A62DBDEF.png",
      "height": 57,
      "transparencyActive": false,
      "borderRadius": 0,
      "borderSize": 0,
      "maxWidth": 42,
      "rollOverIconURL": "skin/IconButton_1F6F3FC2_3A42_6703_41B1_8F08A62DBDEF_rollover.png",
      "shadow": false,
      "horizontalAlign": "center",
      "click": "this.mainPlayList.set('selectedIndex', 9)",
      "cursor": "hand",
      "paddingBottom": 0,
      "class": "IconButton",
      "maxHeight": 57,
      "id": "IconButton_1F6F3FC2_3A42_6703_41B1_8F08A62DBDEF",
      "paddingTop": 0,
      "minHeight": 1,
      "backgroundOpacity": 0,
      "verticalAlign": "middle"
     },
     {
      "paddingRight": 0,
      "minWidth": 1,
      "mode": "push",
      "width": 42,
      "paddingLeft": 0,
      "iconURL": "skin/IconButton_19D163A9_3C7E_F3DE_41A3_87FA2E93B35E.png",
      "height": 57,
      "transparencyActive": false,
      "borderRadius": 0,
      "borderSize": 0,
      "maxWidth": 42,
      "rollOverIconURL": "skin/IconButton_19D163A9_3C7E_F3DE_41A3_87FA2E93B35E_rollover.png",
      "shadow": false,
      "horizontalAlign": "center",
      "click": "this.mainPlayList.set('selectedIndex', 11)",
      "cursor": "hand",
      "paddingBottom": 0,
      "class": "IconButton",
      "maxHeight": 57,
      "id": "IconButton_19D163A9_3C7E_F3DE_41A3_87FA2E93B35E",
      "paddingTop": 0,
      "minHeight": 1,
      "backgroundOpacity": 0,
      "verticalAlign": "middle"
     },
     {
      "paddingRight": 0,
      "minWidth": 1,
      "mode": "push",
      "width": 42,
      "paddingLeft": 0,
      "iconURL": "skin/IconButton_1FB96738_3C7E_733E_41C6_983EE3914862.png",
      "height": 57,
      "transparencyActive": false,
      "borderRadius": 0,
      "borderSize": 0,
      "maxWidth": 42,
      "rollOverIconURL": "skin/IconButton_1FB96738_3C7E_733E_41C6_983EE3914862_rollover.png",
      "shadow": false,
      "horizontalAlign": "center",
      "click": "this.mainPlayList.set('selectedIndex', 14)",
      "cursor": "hand",
      "paddingBottom": 0,
      "class": "IconButton",
      "maxHeight": 57,
      "id": "IconButton_1FB96738_3C7E_733E_41C6_983EE3914862",
      "paddingTop": 0,
      "minHeight": 1,
      "backgroundOpacity": 0,
      "verticalAlign": "middle"
     },
     {
      "paddingRight": 0,
      "minWidth": 1,
      "mode": "push",
      "width": 42,
      "paddingLeft": 0,
      "iconURL": "skin/IconButton_1847A9CB_3C7E_DF51_419A_4CF09BBDE896.png",
      "height": 57,
      "transparencyActive": false,
      "borderRadius": 0,
      "borderSize": 0,
      "maxWidth": 42,
      "rollOverIconURL": "skin/IconButton_1847A9CB_3C7E_DF51_419A_4CF09BBDE896_rollover.png",
      "shadow": false,
      "horizontalAlign": "center",
      "click": "this.mainPlayList.set('selectedIndex', 17)",
      "cursor": "hand",
      "paddingBottom": 0,
      "class": "IconButton",
      "maxHeight": 57,
      "id": "IconButton_1847A9CB_3C7E_DF51_419A_4CF09BBDE896",
      "paddingTop": 0,
      "minHeight": 1,
      "backgroundOpacity": 0,
      "verticalAlign": "middle"
     },
     {
      "paddingRight": 0,
      "minWidth": 1,
      "mode": "push",
      "width": 42,
      "paddingLeft": 0,
      "iconURL": "skin/IconButton_1EBE6D84_3C7A_D7D6_41B3_9EAE2E7C9BD7.png",
      "height": 57,
      "transparencyActive": false,
      "borderRadius": 0,
      "borderSize": 0,
      "maxWidth": 42,
      "rollOverIconURL": "skin/IconButton_1EBE6D84_3C7A_D7D6_41B3_9EAE2E7C9BD7_rollover.png",
      "shadow": false,
      "horizontalAlign": "center",
      "click": "this.mainPlayList.set('selectedIndex', 19)",
      "cursor": "hand",
      "paddingBottom": 0,
      "class": "IconButton",
      "maxHeight": 57,
      "id": "IconButton_1EBE6D84_3C7A_D7D6_41B3_9EAE2E7C9BD7",
      "paddingTop": 0,
      "minHeight": 1,
      "backgroundOpacity": 0,
      "verticalAlign": "middle"
     },
     {
      "paddingRight": 0,
      "minWidth": 1,
      "mode": "push",
      "width": 42,
      "paddingLeft": 0,
      "iconURL": "skin/IconButton_1F48A18A_3C7B_EFD2_4197_7BC93E0D00E8.png",
      "height": 57,
      "transparencyActive": false,
      "borderRadius": 0,
      "borderSize": 0,
      "maxWidth": 42,
      "rollOverIconURL": "skin/IconButton_1F48A18A_3C7B_EFD2_4197_7BC93E0D00E8_rollover.png",
      "shadow": false,
      "horizontalAlign": "center",
      "click": "this.mainPlayList.set('selectedIndex', 20)",
      "cursor": "hand",
      "paddingBottom": 0,
      "class": "IconButton",
      "maxHeight": 57,
      "id": "IconButton_1F48A18A_3C7B_EFD2_4197_7BC93E0D00E8",
      "paddingTop": 0,
      "minHeight": 1,
      "backgroundOpacity": 0,
      "verticalAlign": "middle"
     },
     {
      "paddingRight": 0,
      "minWidth": 1,
      "mode": "push",
      "width": 42,
      "paddingLeft": 0,
      "iconURL": "skin/IconButton_1ED2DB23_3C7A_5CD2_41CC_37ABD2998C29.png",
      "height": 57,
      "transparencyActive": false,
      "borderRadius": 0,
      "borderSize": 0,
      "maxWidth": 42,
      "rollOverIconURL": "skin/IconButton_1ED2DB23_3C7A_5CD2_41CC_37ABD2998C29_rollover.png",
      "shadow": false,
      "horizontalAlign": "center",
      "click": "this.mainPlayList.set('selectedIndex', 22)",
      "cursor": "hand",
      "paddingBottom": 0,
      "class": "IconButton",
      "maxHeight": 57,
      "id": "IconButton_1ED2DB23_3C7A_5CD2_41CC_37ABD2998C29",
      "paddingTop": 0,
      "minHeight": 1,
      "backgroundOpacity": 0,
      "verticalAlign": "middle"
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
    "minWidth": 1,
    "paddingLeft": 0,
    "height": 42,
    "width": "100%",
    "borderRadius": 0,
    "borderSize": 0,
    "gap": 10,
    "contentOpaque": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "shadow": false,
    "horizontalAlign": "left",
    "paddingBottom": 0,
    "class": "Container",
    "layout": "horizontal",
    "id": "Container_1E119C21_3A42_6900_41C0_3CA47D3C242A",
    "paddingTop": 0,
    "minHeight": 1,
    "backgroundOpacity": 0,
    "children": [
     {
      "paddingRight": 0,
      "minWidth": 1,
      "mode": "push",
      "width": 35,
      "paddingLeft": 0,
      "iconURL": "skin/IconButton_249849C4_3A42_EB07_41C4_34AFE0395A2F.png",
      "height": 35,
      "transparencyActive": false,
      "borderRadius": 0,
      "borderSize": 0,
      "maxWidth": 84,
      "shadow": false,
      "horizontalAlign": "center",
      "click": "this.setComponentVisibility(this.IconButton_2803122B_3A42_5901_4195_B932A21E4536, true, 0, null, null, false); this.setComponentVisibility(this.Container_048CC2F3_11E9_4B79_4186_517CBA014E52, true, 0, null, null, false); this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1, false, 0, null, null, false)",
      "cursor": "hand",
      "paddingBottom": 0,
      "class": "IconButton",
      "maxHeight": 84,
      "id": "IconButton_249849C4_3A42_EB07_41C4_34AFE0395A2F",
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
  "verticalAlign": "middle",
  "scrollBarVisible": "rollOver"
 },
 {
  "scrollBarColor": "#000000",
  "overflow": "hidden",
  "scrollBarOpacity": 0.5,
  "paddingRight": 0,
  "minWidth": 1,
  "paddingLeft": 0,
  "height": "100%",
  "width": "99.337%",
  "borderRadius": 0,
  "borderSize": 0,
  "gap": 3,
  "contentOpaque": false,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "shadow": false,
  "horizontalAlign": "left",
  "top": "0%",
  "paddingBottom": 0,
  "class": "Container",
  "layout": "absolute",
  "id": "Container_0A0F57B0_11E6_8E48_4165_04342D4A22BC",
  "paddingTop": 0,
  "minHeight": 1,
  "backgroundOpacity": 0,
  "right": "0%",
  "children": [
   {
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "minWidth": 1,
    "width": 38.1,
    "paddingLeft": 0,
    "height": "99.332%",
    "borderRadius": 0,
    "borderSize": 0,
    "contentOpaque": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "shadow": false,
    "horizontalAlign": "left",
    "top": 0,
    "paddingBottom": 0,
    "class": "Container",
    "gap": 10,
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
      "mode": "push",
      "width": 35,
      "paddingLeft": 0,
      "iconURL": "skin/IconButton_29D9B918_3A5E_6B0F_41A2_1E183D537C65.png",
      "height": 35,
      "transparencyActive": false,
      "borderRadius": 0,
      "borderSize": 0,
      "maxWidth": 108,
      "shadow": false,
      "horizontalAlign": "center",
      "top": "0%",
      "click": "this.setComponentVisibility(this.IconButton_29D9B918_3A5E_6B0F_41A2_1E183D537C65, false, 0, null, null, false); this.setComponentVisibility(this.MapViewer, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2803122B_3A42_5901_4195_B932A21E4536, true, 0, null, null, false)",
      "cursor": "hand",
      "visible": false,
      "paddingBottom": 0,
      "class": "IconButton",
      "maxHeight": 108,
      "id": "IconButton_29D9B918_3A5E_6B0F_41A2_1E183D537C65",
      "paddingTop": 0,
      "left": "0%",
      "minHeight": 1,
      "backgroundOpacity": 0,
      "verticalAlign": "middle"
     },
     {
      "paddingRight": 0,
      "minWidth": 1,
      "mode": "push",
      "width": 35,
      "paddingLeft": 0,
      "iconURL": "skin/IconButton_2803122B_3A42_5901_4195_B932A21E4536.png",
      "height": 35,
      "transparencyActive": false,
      "borderRadius": 0,
      "borderSize": 0,
      "maxWidth": 108,
      "shadow": false,
      "horizontalAlign": "center",
      "top": "3.5%",
      "click": "this.setComponentVisibility(this.IconButton_2803122B_3A42_5901_4195_B932A21E4536, false, 0, null, null, false); this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1, true, 0, null, null, false)",
      "cursor": "hand",
      "paddingBottom": 0,
      "class": "IconButton",
      "maxHeight": 108,
      "id": "IconButton_2803122B_3A42_5901_4195_B932A21E4536",
      "paddingTop": 0,
      "minHeight": 1,
      "backgroundOpacity": 0,
      "right": "0.5%",
      "verticalAlign": "middle"
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
    "minWidth": 1,
    "paddingLeft": 0,
    "height": "61.03%",
    "width": "97.748%",
    "borderRadius": 9,
    "borderSize": 0,
    "gap": 4,
    "contentOpaque": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "shadow": false,
    "horizontalAlign": "left",
    "top": "2.66%",
    "visible": false,
    "paddingBottom": 0,
    "class": "Container",
    "layout": "absolute",
    "id": "Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943",
    "paddingTop": 0,
    "minHeight": 1,
    "backgroundOpacity": 0,
    "right": "0%",
    "children": [
     "this.MapViewer",
     {
      "paddingRight": 0,
      "minWidth": 1,
      "mode": "push",
      "width": 35,
      "paddingLeft": 0,
      "iconURL": "skin/IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1.png",
      "height": 35,
      "transparencyActive": false,
      "borderRadius": 0,
      "borderSize": 0,
      "maxWidth": 108,
      "shadow": false,
      "horizontalAlign": "center",
      "top": "0.85%",
      "click": "this.setComponentVisibility(this.Container_1AB4455A_0BF1_936B_41A2_A51AA1B21943, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_2803122B_3A42_5901_4195_B932A21E4536, true, 0, null, null, false)",
      "cursor": "hand",
      "paddingBottom": 0,
      "class": "IconButton",
      "maxHeight": 108,
      "id": "IconButton_2A917736_3BBA_3332_41BD_5ACFC04AF2D1",
      "paddingTop": 0,
      "left": "1.88%",
      "minHeight": 1,
      "backgroundOpacity": 0,
      "verticalAlign": "middle"
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
  "minWidth": 1,
  "paddingRight": 0,
  "scrollBarColor": "#000000",
  "paddingLeft": 0,
  "height": "100%",
  "width": "100%",
  "borderRadius": 0,
  "borderSize": 0,
  "gap": 10,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "contentOpaque": false,
  "shadow": false,
  "horizontalAlign": "center",
  "top": "0%",
  "visible": false,
  "paddingBottom": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "class": "Container",
  "layout": "absolute",
  "id": "Container_048CC2F3_11E9_4B79_4186_517CBA014E52",
  "paddingTop": 0,
  "left": "0%",
  "minHeight": 1,
  "backgroundOpacity": 0.3,
  "children": [
   {
    "paddingRight": 0,
    "minWidth": 1,
    "paddingLeft": 0,
    "height": "100%",
    "width": "100%",
    "borderRadius": 0,
    "borderSize": 0,
    "url": "skin/Image_19B2F4BC_0BF1_B12F_419C_772DA37A7B15.png",
    "horizontalAlign": "center",
    "scaleMode": "fit_outside",
    "click": "eval('setTimeout(()=>{ this.setComponentVisibility(this.Container_048CC2F3_11E9_4B79_4186_517CBA014E52, false, 0, null, null, false); }, 5000);');",
    "shadow": false,
    "top": 0,
    "paddingBottom": 0,
    "class": "Image",
    "id": "Image_19B2F4BC_0BF1_B12F_419C_772DA37A7B15",
    "paddingTop": 0,
    "left": -0.04,
    "minHeight": 1,
    "backgroundOpacity": 0,
    "verticalAlign": "middle"
   },
   {
    "scrollBarColor": "#000000",
    "overflow": "scroll",
    "scrollBarOpacity": 0.5,
    "paddingRight": 0,
    "minWidth": 1,
    "paddingLeft": 0,
    "height": "88.587%",
    "width": "60.736%",
    "borderRadius": 0,
    "borderSize": 0,
    "gap": 4,
    "contentOpaque": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "shadow": false,
    "horizontalAlign": "center",
    "top": "2.62%",
    "paddingBottom": 0,
    "class": "Container",
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
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "minWidth": 1,
      "paddingLeft": 0,
      "height": "10.152%",
      "width": "92.083%",
      "borderRadius": 0,
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "shadow": false,
      "horizontalAlign": "center",
      "paddingBottom": 0,
      "class": "Container",
      "layout": "horizontal",
      "id": "Container_3764A1B8_3A04_0061_41BF_1DB9D8261A18",
      "paddingTop": 0,
      "minHeight": 1,
      "backgroundOpacity": 0,
      "children": [
       {
        "paddingRight": 0,
        "minWidth": 1,
        "paddingLeft": 0,
        "height": "73.333%",
        "width": "79.193%",
        "borderRadius": 0,
        "borderSize": 0,
        "url": "skin/Image_374B2C06_3A0C_0020_41B2_5F6D50FC5E5F.png",
        "maxWidth": 500,
        "horizontalAlign": "center",
        "scaleMode": "fit_inside",
        "shadow": false,
        "paddingBottom": 0,
        "class": "Image",
        "maxHeight": 61,
        "id": "Image_374B2C06_3A0C_0020_41B2_5F6D50FC5E5F",
        "paddingTop": 0,
        "minHeight": 1,
        "backgroundOpacity": 0,
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
      "minWidth": 1,
      "paddingLeft": 0,
      "height": "1.764%",
      "width": "100%",
      "borderRadius": 0,
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "shadow": false,
      "horizontalAlign": "left",
      "paddingBottom": 0,
      "class": "Container",
      "layout": "absolute",
      "id": "Container_37A327EA_3A3C_0FE1_4199_D3E659A2D12F",
      "paddingTop": 0,
      "minHeight": 1,
      "backgroundOpacity": 0,
      "verticalAlign": "top",
      "scrollBarVisible": "rollOver"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "visible",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "minWidth": 1,
      "paddingLeft": 0,
      "height": "7.327%",
      "width": "99.94%",
      "borderRadius": 0,
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "shadow": false,
      "horizontalAlign": "center",
      "paddingBottom": 0,
      "class": "Container",
      "layout": "horizontal",
      "id": "Container_37118E52_3A43_A900_41B3_99441E93A49B",
      "paddingTop": 0,
      "minHeight": 1,
      "backgroundOpacity": 0,
      "children": [
       {
        "scrollBarColor": "#000000",
        "overflow": "visible",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "minWidth": 1,
        "paddingLeft": 0,
        "height": "86.667%",
        "width": "99.901%",
        "borderRadius": 0,
        "borderSize": 0,
        "gap": 6,
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "horizontalAlign": "center",
        "paddingBottom": 0,
        "class": "Container",
        "layout": "horizontal",
        "id": "Container_3783528D_3A0C_0023_417F_D3D15240B4C7",
        "paddingTop": 0,
        "minHeight": 1,
        "backgroundOpacity": 0,
        "children": [
         {
          "scrollBarColor": "#000000",
          "overflow": "scroll",
          "scrollBarOpacity": 0.5,
          "paddingRight": 0,
          "minWidth": 1,
          "paddingLeft": 0,
          "height": "97.297%",
          "width": "10.55%",
          "borderRadius": 0,
          "borderSize": 0,
          "gap": 10,
          "contentOpaque": false,
          "maxWidth": 300,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "shadow": false,
          "horizontalAlign": "center",
          "paddingBottom": 0,
          "class": "Container",
          "maxHeight": 300,
          "id": "Container_3716DC42_3A42_6903_41C0_A36003727C4F",
          "paddingTop": 0,
          "layout": "horizontal",
          "minHeight": 1,
          "backgroundOpacity": 0,
          "children": [
           {
            "paddingRight": 0,
            "minWidth": 1,
            "paddingLeft": 0,
            "height": "96%",
            "width": "95.833%",
            "borderRadius": 0,
            "borderSize": 0,
            "url": "skin/Image_3540BF2F_3A0C_007F_41C4_9B80703F60DF.png",
            "maxWidth": 108,
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "shadow": false,
            "paddingBottom": 0,
            "class": "Image",
            "maxHeight": 108,
            "id": "Image_3540BF2F_3A0C_007F_41C4_9B80703F60DF",
            "paddingTop": 0,
            "minHeight": 1,
            "backgroundOpacity": 0,
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
          "minWidth": 1,
          "paddingLeft": 0,
          "height": "97.297%",
          "width": "10.549%",
          "borderRadius": 0,
          "borderSize": 0,
          "gap": 10,
          "contentOpaque": false,
          "maxWidth": 300,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "shadow": false,
          "horizontalAlign": "center",
          "paddingBottom": 0,
          "class": "Container",
          "maxHeight": 300,
          "id": "Container_3695443E_3A42_B900_41BB_420473422841",
          "paddingTop": 0,
          "layout": "horizontal",
          "minHeight": 1,
          "backgroundOpacity": 0,
          "children": [
           {
            "paddingRight": 0,
            "minWidth": 1,
            "paddingLeft": 0,
            "height": "96%",
            "width": "95.83%",
            "borderRadius": 0,
            "borderSize": 0,
            "url": "skin/Image_37E178D8_3A0C_0021_41C9_1ABD150FD584.png",
            "maxWidth": 108,
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "shadow": false,
            "paddingBottom": 0,
            "class": "Image",
            "maxHeight": 108,
            "id": "Image_37E178D8_3A0C_0021_41C9_1ABD150FD584",
            "paddingTop": 0,
            "minHeight": 1,
            "backgroundOpacity": 0,
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
          "minWidth": 1,
          "paddingLeft": 0,
          "height": "97.297%",
          "width": "46.753%",
          "borderRadius": 0,
          "borderSize": 0,
          "gap": 10,
          "contentOpaque": false,
          "maxWidth": 1000,
          "scrollBarWidth": 10,
          "scrollBarMargin": 2,
          "shadow": false,
          "horizontalAlign": "center",
          "paddingBottom": 0,
          "class": "Container",
          "layout": "horizontal",
          "id": "Container_377230ED_3A43_B900_4161_0C9E912D04EC",
          "paddingTop": 0,
          "minHeight": 1,
          "backgroundOpacity": 0,
          "children": [
           {
            "paddingRight": 0,
            "minWidth": 1,
            "paddingLeft": 0,
            "height": "70.59%",
            "width": "99.138%",
            "borderRadius": 0,
            "borderSize": 0,
            "url": "skin/Image_37D83EB6_3A0C_0061_41C6_D666B149EE07.png",
            "maxWidth": 275,
            "horizontalAlign": "center",
            "scaleMode": "fit_inside",
            "shadow": false,
            "paddingBottom": 0,
            "class": "Image",
            "maxHeight": 40,
            "id": "Image_37D83EB6_3A0C_0061_41C6_D666B149EE07",
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
      "minWidth": 1,
      "paddingLeft": 0,
      "height": "1.227%",
      "width": "99.858%",
      "borderRadius": 0,
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "shadow": false,
      "horizontalAlign": "center",
      "paddingBottom": 0,
      "class": "Container",
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
        "borderSize": 0,
        "url": "skin/Image_285CB42E_3BF6_D4D3_41A3_9A8D7F05B2C3.png",
        "maxWidth": 726,
        "horizontalAlign": "center",
        "scaleMode": "fit_inside",
        "shadow": false,
        "paddingBottom": 0,
        "class": "Image",
        "maxHeight": 2,
        "id": "Image_285CB42E_3BF6_D4D3_41A3_9A8D7F05B2C3",
        "paddingTop": 0,
        "minHeight": 1,
        "backgroundOpacity": 0,
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
      "minWidth": 1,
      "paddingLeft": 0,
      "height": "4.417%",
      "width": "100%",
      "borderRadius": 0,
      "borderSize": 0,
      "gap": 5,
      "contentOpaque": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "shadow": false,
      "horizontalAlign": "center",
      "paddingBottom": 0,
      "class": "Container",
      "layout": "horizontal",
      "id": "Container_34FB5B25_3A3C_0063_41C8_57AAEAD2087C",
      "paddingTop": 0,
      "minHeight": 1,
      "backgroundOpacity": 0,
      "children": [
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "minWidth": 1,
        "paddingLeft": 0,
        "height": "100%",
        "width": "13.477%",
        "borderRadius": 0,
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "horizontalAlign": "center",
        "paddingBottom": 0,
        "class": "Container",
        "layout": "horizontal",
        "id": "Container_357D9BEA_3AC2_AF00_41CB_19180254F021",
        "paddingTop": 0,
        "minHeight": 1,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "minWidth": 1,
          "paddingLeft": 0,
          "height": "97.14%",
          "width": "86.03%",
          "borderRadius": 0,
          "borderSize": 0,
          "url": "skin/Image_37917A60_3A0C_00E1_41C5_991EF69487EC.png",
          "maxWidth": 117,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "paddingBottom": 0,
          "class": "Image",
          "maxHeight": 45,
          "id": "Image_37917A60_3A0C_00E1_41C5_991EF69487EC",
          "paddingTop": 0,
          "minHeight": 1,
          "backgroundOpacity": 0,
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
        "minWidth": 1,
        "paddingLeft": 0,
        "height": "100%",
        "width": "14.091%",
        "borderRadius": 0,
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "horizontalAlign": "center",
        "paddingBottom": 0,
        "class": "Container",
        "layout": "horizontal",
        "id": "Container_3571F98A_3AC6_AB00_41C5_660EE04AD975",
        "paddingTop": 0,
        "minHeight": 1,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "minWidth": 1,
          "paddingLeft": 0,
          "height": "100%",
          "width": "97.183%",
          "borderRadius": 0,
          "borderSize": 0,
          "url": "skin/Image_34518027_3A04_006F_41BB_EE3C665B25DF.png",
          "maxWidth": 258,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "paddingBottom": 0,
          "class": "Image",
          "maxHeight": 243,
          "id": "Image_34518027_3A04_006F_41BB_EE3C665B25DF",
          "paddingTop": 0,
          "minHeight": 1,
          "backgroundOpacity": 0,
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
        "minWidth": 1,
        "paddingLeft": 0,
        "height": "100%",
        "width": "39.063%",
        "borderRadius": 0,
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "horizontalAlign": "center",
        "paddingBottom": 0,
        "class": "Container",
        "layout": "horizontal",
        "id": "Container_2A91CA77_3AC7_A900_41B9_43489B29B672",
        "paddingTop": 0,
        "minHeight": 1,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "minWidth": 1,
          "paddingLeft": 0,
          "height": "97.14%",
          "width": "99.491%",
          "borderRadius": 0,
          "borderSize": 0,
          "url": "skin/Image_3427C160_3A0C_00E0_41C0_462626DB2AAE.png",
          "maxWidth": 408,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "paddingBottom": 0,
          "class": "Image",
          "maxHeight": 45,
          "id": "Image_3427C160_3A0C_00E0_41C0_462626DB2AAE",
          "paddingTop": 0,
          "minHeight": 1,
          "backgroundOpacity": 0,
          "verticalAlign": "middle"
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
        "minWidth": 1,
        "paddingLeft": 0,
        "height": "100%",
        "width": "15.139%",
        "borderRadius": 0,
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "horizontalAlign": "center",
        "paddingBottom": 0,
        "class": "Container",
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
          "height": "100%",
          "borderRadius": 0,
          "borderSize": 0,
          "maxWidth": 300,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "paddingBottom": 0,
          "class": "Image",
          "url": "skin/Image_34309FE8_3A0C_7FE1_41C0_E4200753053D.png",
          "maxHeight": 300,
          "id": "Image_34309FE8_3A0C_7FE1_41C0_E4200753053D",
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
      "verticalAlign": "middle",
      "scrollBarVisible": "rollOver"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "visible",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "minWidth": 1,
      "paddingLeft": 0,
      "height": "7.276%",
      "width": "100%",
      "borderRadius": 0,
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "shadow": false,
      "horizontalAlign": "center",
      "paddingBottom": 0,
      "class": "Container",
      "layout": "horizontal",
      "id": "Container_36B2B434_3A4E_B907_41BF_2EF267CB899D",
      "paddingTop": 0,
      "minHeight": 1,
      "backgroundOpacity": 0,
      "children": [
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "minWidth": 1,
        "paddingLeft": 0,
        "height": "97.67%",
        "width": "83.008%",
        "borderRadius": 0,
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "horizontalAlign": "center",
        "paddingBottom": 0,
        "class": "Container",
        "layout": "horizontal",
        "id": "Container_2A9982D6_3AC2_B903_4196_183817BA9826",
        "paddingTop": 0,
        "minHeight": 1,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "minWidth": 1,
          "paddingLeft": 0,
          "height": "64.407%",
          "width": "87.799%",
          "borderRadius": 0,
          "borderSize": 0,
          "url": "skin/Image_34A3C85B_3A0C_0027_41B6_C09A77E73AB1.png",
          "maxWidth": 734,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "paddingBottom": 0,
          "class": "Image",
          "maxHeight": 49,
          "id": "Image_34A3C85B_3A0C_0027_41B6_C09A77E73AB1",
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
      "verticalAlign": "middle",
      "scrollBarVisible": "rollOver"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "hidden",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "minWidth": 1,
      "paddingLeft": 0,
      "height": "2.454%",
      "width": "100%",
      "borderRadius": 0,
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "shadow": false,
      "horizontalAlign": "center",
      "paddingBottom": 0,
      "class": "Container",
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
        "borderSize": 0,
        "url": "skin/Image_2A70BEF1_3BFA_754E_41A1_D377ED2E5E7C.png",
        "maxWidth": 726,
        "horizontalAlign": "center",
        "scaleMode": "fit_inside",
        "shadow": false,
        "paddingBottom": 0,
        "class": "Image",
        "maxHeight": 2,
        "id": "Image_2A70BEF1_3BFA_754E_41A1_D377ED2E5E7C",
        "paddingTop": 0,
        "minHeight": 1,
        "backgroundOpacity": 0,
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
      "minWidth": 1,
      "paddingLeft": 0,
      "height": "6.937%",
      "width": "100%",
      "borderRadius": 0,
      "borderSize": 0,
      "gap": 4,
      "contentOpaque": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "shadow": false,
      "horizontalAlign": "center",
      "paddingBottom": 0,
      "class": "Container",
      "layout": "horizontal",
      "id": "Container_34AD67FD_3A04_0FE3_41CA_6C2C56155F84",
      "paddingTop": 0,
      "minHeight": 1,
      "backgroundOpacity": 0,
      "children": [
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "minWidth": 1,
        "paddingLeft": 0,
        "height": "62.5%",
        "width": "13.505%",
        "borderRadius": 0,
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "horizontalAlign": "center",
        "paddingBottom": 0,
        "class": "Container",
        "layout": "horizontal",
        "id": "Container_2ABC116A_3AC3_DB00_4194_EFC4CB10B92F",
        "paddingTop": 0,
        "minHeight": 1,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "minWidth": 1,
          "paddingLeft": 0,
          "height": "97.14%",
          "width": "86.03%",
          "borderRadius": 0,
          "borderSize": 0,
          "url": "skin/Image_346BFEE5_3A04_01E0_41C6_7BF64C950C0A.png",
          "maxWidth": 117,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "paddingBottom": 0,
          "class": "Image",
          "maxHeight": 45,
          "id": "Image_346BFEE5_3A04_01E0_41C6_7BF64C950C0A",
          "paddingTop": 0,
          "minHeight": 1,
          "backgroundOpacity": 0,
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
        "minWidth": 1,
        "paddingLeft": 0,
        "height": "100%",
        "width": "12.891%",
        "borderRadius": 0,
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "horizontalAlign": "center",
        "paddingBottom": 0,
        "class": "Container",
        "layout": "horizontal",
        "id": "Container_2AD5AA08_3AC6_A90F_41C9_220344DA9D3F",
        "paddingTop": 0,
        "minHeight": 1,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "minWidth": 1,
          "paddingLeft": 0,
          "height": "83.33%",
          "width": "85.42%",
          "borderRadius": 0,
          "borderSize": 0,
          "url": "skin/Image_2A4B2A14_3A04_0021_41BB_15D62AD6CC93.png",
          "maxWidth": 222,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "paddingBottom": 0,
          "class": "Image",
          "maxHeight": 222,
          "id": "Image_2A4B2A14_3A04_0021_41BB_15D62AD6CC93",
          "paddingTop": 0,
          "minHeight": 1,
          "backgroundOpacity": 0,
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
        "minWidth": 1,
        "paddingLeft": 0,
        "height": "67.857%",
        "width": "54.618%",
        "borderRadius": 0,
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "horizontalAlign": "center",
        "paddingBottom": 0,
        "class": "Container",
        "layout": "horizontal",
        "id": "Container_2A20B5B4_3AC6_5B00_41C3_40F3BE7BE1C5",
        "paddingTop": 0,
        "minHeight": 1,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "minWidth": 1,
          "paddingLeft": 0,
          "height": "84.211%",
          "width": "83.455%",
          "borderRadius": 0,
          "borderSize": 0,
          "url": "skin/Image_37EAE4A5_3A04_0062_41C3_451CBF5B96AA.png",
          "maxWidth": 459,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "paddingBottom": 0,
          "class": "Image",
          "maxHeight": 41,
          "id": "Image_37EAE4A5_3A04_0062_41C3_451CBF5B96AA",
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
      "verticalAlign": "middle",
      "scrollBarVisible": "rollOver"
     },
     {
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "scrollBarOpacity": 0.5,
      "paddingRight": 0,
      "minWidth": 1,
      "paddingLeft": 0,
      "height": "5.834%",
      "width": "100%",
      "borderRadius": 0,
      "borderSize": 0,
      "gap": 10,
      "contentOpaque": false,
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "shadow": false,
      "horizontalAlign": "center",
      "paddingBottom": 0,
      "class": "Container",
      "layout": "horizontal",
      "id": "Container_37E2874E_3A1C_0021_41C0_98E65FDF63B2",
      "paddingTop": 0,
      "minHeight": 1,
      "backgroundOpacity": 0,
      "children": [
       {
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "scrollBarOpacity": 0.5,
        "paddingRight": 0,
        "minWidth": 1,
        "paddingLeft": 0,
        "height": "100%",
        "width": "33.984%",
        "borderRadius": 0,
        "borderSize": 0,
        "gap": 10,
        "contentOpaque": false,
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "shadow": false,
        "horizontalAlign": "center",
        "paddingBottom": 0,
        "class": "Container",
        "layout": "horizontal",
        "id": "Container_2ADC0983_3AC2_6B01_41CA_4E98B5357DFD",
        "paddingTop": 0,
        "minHeight": 1,
        "backgroundOpacity": 0,
        "children": [
         {
          "paddingRight": 0,
          "minWidth": 1,
          "paddingLeft": 0,
          "height": "70.833%",
          "width": "86.842%",
          "borderRadius": 0,
          "borderSize": 0,
          "url": "skin/Image_348B3F6A_3A1C_00E1_41C6_ECDDCEC7AD0A.png",
          "maxWidth": 297,
          "horizontalAlign": "center",
          "scaleMode": "fit_inside",
          "shadow": false,
          "paddingBottom": 0,
          "class": "Image",
          "maxHeight": 44,
          "id": "Image_348B3F6A_3A1C_00E1_41C6_ECDDCEC7AD0A",
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
    "minWidth": 1,
    "paddingLeft": 0,
    "height": "12.935%",
    "width": "100%",
    "borderRadius": 0,
    "borderSize": 0,
    "gap": 10,
    "contentOpaque": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "shadow": false,
    "horizontalAlign": "left",
    "top": "0%",
    "paddingBottom": 0,
    "class": "Container",
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
      "mode": "push",
      "width": 43,
      "paddingLeft": 0,
      "iconURL": "skin/IconButton_2F7858C6_3CDB_08C9_41C0_F9AC14933CBC.png",
      "height": 44,
      "transparencyActive": false,
      "borderRadius": 0,
      "borderSize": 0,
      "maxWidth": 72,
      "shadow": false,
      "horizontalAlign": "center",
      "top": "21.85%",
      "click": "this.setComponentVisibility(this.Container_048CC2F3_11E9_4B79_4186_517CBA014E52, false, 0, null, null, false)",
      "cursor": "hand",
      "paddingBottom": 0,
      "class": "IconButton",
      "maxHeight": 72,
      "id": "IconButton_2F7858C6_3CDB_08C9_41C0_F9AC14933CBC",
      "paddingTop": 0,
      "left": "4.31%",
      "minHeight": 1,
      "backgroundOpacity": 0,
      "verticalAlign": "middle"
     }
    ],
    "verticalAlign": "top",
    "scrollBarVisible": "rollOver"
   }
  ],
  "verticalAlign": "middle",
  "scrollBarVisible": "rollOver"
 }
], 
 "overflow": "visible",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "mouseWheelEnabled": true,
 "minWidth": 20,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "height": "100%",
 "width": "100%",
 "borderRadius": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "shadow": false,
 "horizontalAlign": "left",
 "backgroundPreloadEnabled": true,
 "paddingBottom": 0,
 "scripts": {
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "registerKey": function(key, value){  window[key] = value; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "unregisterKey": function(key){  delete window[key]; },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "existsKey": function(key){  return key in window; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getKey": function(key){  return window[key]; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } }
 },
 "class": "Player",
 "gap": 10,
 "layout": "absolute",
 "vrPolyfillScale": 1,
 "id": "rootPlayer",
 "paddingTop": 0,
 "minHeight": 20,
 "start": "this.mainPlayList.set('selectedIndex', 0); this.playList_46CC48DD_4A58_AF29_41D1_E625BD924FDD.set('selectedIndex', 0); var self = this; var autotriggerFunc = function(){ self.Image_19B2F4BC_0BF1_B12F_419C_772DA37A7B15.trigger('click') }; this.autotriggerAtStart(this.MainViewerPanoramaPlayer, autotriggerFunc)",
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver"
})