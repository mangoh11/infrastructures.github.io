ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'Open Street Map ',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_COURSDEAU_1 = new ol.format.GeoJSON();
var features_COURSDEAU_1 = format_COURSDEAU_1.readFeatures(json_COURSDEAU_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_COURSDEAU_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COURSDEAU_1.addFeatures(features_COURSDEAU_1);
var lyr_COURSDEAU_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COURSDEAU_1, 
                style: style_COURSDEAU_1,
                popuplayertitle: "COURS D'EAU",
                interactive: true,
                title: '<img src="styles/legend/COURSDEAU_1.png" /> COURS D\'EAU'
            });
var format_Routescommunales_2 = new ol.format.GeoJSON();
var features_Routescommunales_2 = format_Routescommunales_2.readFeatures(json_Routescommunales_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Routescommunales_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Routescommunales_2.addFeatures(features_Routescommunales_2);
var lyr_Routescommunales_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Routescommunales_2, 
                style: style_Routescommunales_2,
                popuplayertitle: "Routescommunales",
                interactive: true,
                title: '<img src="styles/legend/Routescommunales_2.png" /> Routescommunales'
            });
var format_TrajetNdokottipk14_3 = new ol.format.GeoJSON();
var features_TrajetNdokottipk14_3 = format_TrajetNdokottipk14_3.readFeatures(json_TrajetNdokottipk14_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TrajetNdokottipk14_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrajetNdokottipk14_3.addFeatures(features_TrajetNdokottipk14_3);
var lyr_TrajetNdokottipk14_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrajetNdokottipk14_3, 
                style: style_TrajetNdokottipk14_3,
                popuplayertitle: "Trajet Ndokotti-pk14",
                interactive: true,
                title: '<img src="styles/legend/TrajetNdokottipk14_3.png" /> Trajet Ndokotti-pk14'
            });
var format_routeslocales_4 = new ol.format.GeoJSON();
var features_routeslocales_4 = format_routeslocales_4.readFeatures(json_routeslocales_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_routeslocales_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_routeslocales_4.addFeatures(features_routeslocales_4);
var lyr_routeslocales_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_routeslocales_4, 
                style: style_routeslocales_4,
                popuplayertitle: "routeslocales",
                interactive: true,
                title: '<img src="styles/legend/routeslocales_4.png" /> routeslocales'
            });
var format_Routessecondaires_5 = new ol.format.GeoJSON();
var features_Routessecondaires_5 = format_Routessecondaires_5.readFeatures(json_Routessecondaires_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Routessecondaires_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Routessecondaires_5.addFeatures(features_Routessecondaires_5);
var lyr_Routessecondaires_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Routessecondaires_5, 
                style: style_Routessecondaires_5,
                popuplayertitle: "Routessecondaires",
                interactive: true,
                title: '<img src="styles/legend/Routessecondaires_5.png" /> Routessecondaires'
            });
var format_arteres_6 = new ol.format.GeoJSON();
var features_arteres_6 = format_arteres_6.readFeatures(json_arteres_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_arteres_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_arteres_6.addFeatures(features_arteres_6);
var lyr_arteres_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_arteres_6, 
                style: style_arteres_6,
                popuplayertitle: "arteres",
                interactive: true,
                title: '<img src="styles/legend/arteres_6.png" /> arteres'
            });
var format_dalots_7 = new ol.format.GeoJSON();
var features_dalots_7 = format_dalots_7.readFeatures(json_dalots_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_dalots_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dalots_7.addFeatures(features_dalots_7);
var lyr_dalots_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dalots_7, 
                style: style_dalots_7,
                popuplayertitle: "dalots",
                interactive: true,
                title: '<img src="styles/legend/dalots_7.png" /> dalots'
            });
var format_ponts_8 = new ol.format.GeoJSON();
var features_ponts_8 = format_ponts_8.readFeatures(json_ponts_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ponts_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ponts_8.addFeatures(features_ponts_8);
var lyr_ponts_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ponts_8, 
                style: style_ponts_8,
                popuplayertitle: "ponts",
                interactive: true,
                title: '<img src="styles/legend/ponts_8.png" /> ponts'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_COURSDEAU_1.setVisible(true);lyr_Routescommunales_2.setVisible(true);lyr_TrajetNdokottipk14_3.setVisible(true);lyr_routeslocales_4.setVisible(true);lyr_Routessecondaires_5.setVisible(true);lyr_arteres_6.setVisible(true);lyr_dalots_7.setVisible(true);lyr_ponts_8.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_COURSDEAU_1,lyr_Routescommunales_2,lyr_TrajetNdokottipk14_3,lyr_routeslocales_4,lyr_Routessecondaires_5,lyr_arteres_6,lyr_dalots_7,lyr_ponts_8];
lyr_COURSDEAU_1.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'width': 'width', });
lyr_Routescommunales_2.set('fieldAliases', {'longueur': 'longueur', 'id': 'id', 'NOM': 'NOM', });
lyr_TrajetNdokottipk14_3.set('fieldAliases', {'id': 'id', 'ROUTE P': 'ROUTE P', 'NOM': 'NOM', 'LONGUEUR': 'LONGUEUR', });
lyr_routeslocales_4.set('fieldAliases', {'id': 'id', 'ROUTE LOCA': 'ROUTE LOCA', 'LONGUEUR': 'LONGUEUR', 'NOM': 'NOM', });
lyr_Routessecondaires_5.set('fieldAliases', {'id': 'id', 'ROUTE SECO': 'ROUTE SECO', 'NOM': 'NOM', 'LONGUEUR': 'LONGUEUR', });
lyr_arteres_6.set('fieldAliases', {'id': 'id', 'ARTERE': 'ARTERE', 'LONGUEUR': 'LONGUEUR', 'NOM': 'NOM', });
lyr_dalots_7.set('fieldAliases', {'id': 'id', 'DALLOT': 'DALLOT', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', });
lyr_ponts_8.set('fieldAliases', {'id': 'id', 'PT': 'PT', 'LONGITUDE': 'LONGITUDE', 'LATITUDE': 'LATITUDE', });
lyr_COURSDEAU_1.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'width': 'Range', });
lyr_Routescommunales_2.set('fieldImages', {'longueur': 'TextEdit', 'id': 'TextEdit', 'NOM': 'TextEdit', });
lyr_TrajetNdokottipk14_3.set('fieldImages', {'id': 'TextEdit', 'ROUTE P': 'TextEdit', 'NOM': 'TextEdit', 'LONGUEUR': 'TextEdit', });
lyr_routeslocales_4.set('fieldImages', {'id': 'TextEdit', 'ROUTE LOCA': 'TextEdit', 'LONGUEUR': 'TextEdit', 'NOM': 'TextEdit', });
lyr_Routessecondaires_5.set('fieldImages', {'id': 'TextEdit', 'ROUTE SECO': 'TextEdit', 'NOM': 'TextEdit', 'LONGUEUR': 'TextEdit', });
lyr_arteres_6.set('fieldImages', {'id': 'TextEdit', 'ARTERE': 'TextEdit', 'LONGUEUR': 'TextEdit', 'NOM': 'TextEdit', });
lyr_dalots_7.set('fieldImages', {'id': 'TextEdit', 'DALLOT': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', });
lyr_ponts_8.set('fieldImages', {'id': 'TextEdit', 'PT': 'TextEdit', 'LONGITUDE': 'TextEdit', 'LATITUDE': 'TextEdit', });
lyr_COURSDEAU_1.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'type': 'header label - visible with data', 'width': 'no label', });
lyr_Routescommunales_2.set('fieldLabels', {'longueur': 'inline label - always visible', 'id': 'inline label - always visible', 'NOM': 'inline label - always visible', });
lyr_TrajetNdokottipk14_3.set('fieldLabels', {'id': 'inline label - always visible', 'ROUTE P': 'inline label - always visible', 'NOM': 'header label - always visible', 'LONGUEUR': 'inline label - always visible', });
lyr_routeslocales_4.set('fieldLabels', {'id': 'no label', 'ROUTE LOCA': 'no label', 'LONGUEUR': 'no label', 'NOM': 'no label', });
lyr_Routessecondaires_5.set('fieldLabels', {'id': 'inline label - always visible', 'ROUTE SECO': 'inline label - always visible', 'NOM': 'inline label - always visible', 'LONGUEUR': 'inline label - always visible', });
lyr_arteres_6.set('fieldLabels', {'id': 'inline label - always visible', 'ARTERE': 'inline label - always visible', 'LONGUEUR': 'inline label - always visible', 'NOM': 'inline label - always visible', });
lyr_dalots_7.set('fieldLabels', {'id': 'inline label - always visible', 'DALLOT': 'inline label - always visible', 'LATITUDE': 'inline label - always visible', 'LONGITUDE': 'inline label - always visible', });
lyr_ponts_8.set('fieldLabels', {'id': 'inline label - always visible', 'PT': 'inline label - always visible', 'LONGITUDE': 'inline label - always visible', 'LATITUDE': 'inline label - always visible', });
lyr_ponts_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});