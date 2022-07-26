
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "GoogleRoad_0": {
            "type": "raster",
            "tiles": ["https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"],
            "tileSize": 256
        },
        "TRIAL_TABLE_1": {
            "type": "geojson",
            "data": json_TRIAL_TABLE_1
        }
                    ,
        "AC_Parcel_polygon_2": {
            "type": "geojson",
            "data": json_AC_Parcel_polygon_2
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_GoogleRoad_0_0",
            "type": "raster",
            "source": "GoogleRoad_0"
        },
        {
            "id": "lyr_TRIAL_TABLE_1_0",
            "type": "circle",
            "source": "TRIAL_TABLE_1",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#becf50', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_AC_Parcel_polygon_2_0",
            "type": "fill",
            "source": "AC_Parcel_polygon_2",
            "layout": {},
            "paint": {'fill-opacity': 0.525, 'fill-color': '#7d8b8f'}
        }
],
}