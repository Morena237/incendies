ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([11.804522, 4.262364, 12.252969, 4.533074]);
var wms_layers = [];


        var lyr_EsriTopoWorld_0 = new ol.layer.Tile({
            'title': 'Esri Topo World',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Repre_1 = new ol.format.GeoJSON();
var features_Repre_1 = format_Repre_1.readFeatures(json_Repre_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Repre_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Repre_1.addFeatures(features_Repre_1);
var lyr_Repre_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Repre_1, 
                style: style_Repre_1,
                popuplayertitle: 'Repère',
                interactive: true,
                title: '<img src="styles/legend/Repre_1.png" /> Repère'
            });
var format_Pisteprincipale_2 = new ol.format.GeoJSON();
var features_Pisteprincipale_2 = format_Pisteprincipale_2.readFeatures(json_Pisteprincipale_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Pisteprincipale_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pisteprincipale_2.addFeatures(features_Pisteprincipale_2);
var lyr_Pisteprincipale_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pisteprincipale_2, 
                style: style_Pisteprincipale_2,
                popuplayertitle: 'Piste principale',
                interactive: false,
                title: '<img src="styles/legend/Pisteprincipale_2.png" /> Piste principale'
            });
var format_PisteprinciMbjNkt_3 = new ol.format.GeoJSON();
var features_PisteprinciMbjNkt_3 = format_PisteprinciMbjNkt_3.readFeatures(json_PisteprinciMbjNkt_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PisteprinciMbjNkt_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PisteprinciMbjNkt_3.addFeatures(features_PisteprinciMbjNkt_3);
var lyr_PisteprinciMbjNkt_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PisteprinciMbjNkt_3, 
                style: style_PisteprinciMbjNkt_3,
                popuplayertitle: 'Piste princi Mbj-Nkt',
                interactive: false,
                title: '<img src="styles/legend/PisteprinciMbjNkt_3.png" /> Piste princi Mbj-Nkt'
            });
var format_Pistecommunale_4 = new ol.format.GeoJSON();
var features_Pistecommunale_4 = format_Pistecommunale_4.readFeatures(json_Pistecommunale_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Pistecommunale_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pistecommunale_4.addFeatures(features_Pistecommunale_4);
var lyr_Pistecommunale_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pistecommunale_4, 
                style: style_Pistecommunale_4,
                popuplayertitle: 'Piste communale',
                interactive: false,
                title: '<img src="styles/legend/Pistecommunale_4.png" /> Piste communale'
            });
var format_usines_5 = new ol.format.GeoJSON();
var features_usines_5 = format_usines_5.readFeatures(json_usines_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_usines_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_usines_5.addFeatures(features_usines_5);
cluster_usines_5 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_usines_5
});
var lyr_usines_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_usines_5, 
                style: style_usines_5,
                popuplayertitle: 'usines',
                interactive: false,
                title: '<img src="styles/legend/usines_5.png" /> usines'
            });
var format_Surfacebrul_6 = new ol.format.GeoJSON();
var features_Surfacebrul_6 = format_Surfacebrul_6.readFeatures(json_Surfacebrul_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Surfacebrul_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Surfacebrul_6.addFeatures(features_Surfacebrul_6);
var lyr_Surfacebrul_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Surfacebrul_6, 
                style: style_Surfacebrul_6,
                popuplayertitle: 'Surface brulé',
                interactive: true,
                title: '<img src="styles/legend/Surfacebrul_6.png" /> Surface brulé'
            });
var format_Incendiedetiers_7 = new ol.format.GeoJSON();
var features_Incendiedetiers_7 = format_Incendiedetiers_7.readFeatures(json_Incendiedetiers_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Incendiedetiers_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Incendiedetiers_7.addFeatures(features_Incendiedetiers_7);
var lyr_Incendiedetiers_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Incendiedetiers_7, 
                style: style_Incendiedetiers_7,
                popuplayertitle: 'Incendie de tiers',
                interactive: true,
                title: '<img src="styles/legend/Incendiedetiers_7.png" /> Incendie de tiers'
            });

lyr_EsriTopoWorld_0.setVisible(true);lyr_Repre_1.setVisible(true);lyr_Pisteprincipale_2.setVisible(true);lyr_PisteprinciMbjNkt_3.setVisible(true);lyr_Pistecommunale_4.setVisible(true);lyr_usines_5.setVisible(true);lyr_Surfacebrul_6.setVisible(true);lyr_Incendiedetiers_7.setVisible(true);
var layersList = [lyr_EsriTopoWorld_0,lyr_Repre_1,lyr_Pisteprincipale_2,lyr_PisteprinciMbjNkt_3,lyr_Pistecommunale_4,lyr_usines_5,lyr_Surfacebrul_6,lyr_Incendiedetiers_7];
lyr_Repre_1.set('fieldAliases', {'Repère': 'Repère', 'Caract._pa': 'Caract. parcelle', 'Site_géo.': 'Site Géo.', 'Plateau': 'Plateau', 'Site_Entre': 'Site Entretien', 'Perimetre': 'Périmètre', 'Variété': 'Variété', 'Période_p': 'Période de plantation', 'Catégorie': 'Catégorie', 'Nb_an_vege': 'Nbr année végétatives', 'Date_d\'imp': 'Date d\'implantation', 'Dist._Us_S': 'Dist. Usine-SSC1(km)', 'Dist._Us_1': 'Dist. Usine-SSC2(km)', 'Sup_sous_c': 'Superficie sous-canne', 'Non_récol': 'Non récoltable', 'Divers_non': 'Divers non récoltable', 'GC': 'GC', 'Récoltabl': 'Récoltable', 'Projec_TC/': 'Projection TC/ha', 'TC_24-25': 'TC 24-25', 'Epandage_T': 'Épandage théorique', 'Délai_mat': 'Délai maturateur théorique', 'S%C': 'S%C', 'TS': 'TS', 'TS/ha': 'TS/ha', 'Classe_Rdt': 'Classe de rdt', });
lyr_Pisteprincipale_2.set('fieldAliases', {'Id_SSC': 'Id_SSC', 'Plateau': 'Plateau', 'Subdivisio': 'Subdivisio', 'Bloc': 'Bloc', 'Largeur': 'Largeur', 'Longueur': 'Longueur', 'Origine_do': 'Origine_do', 'Date_MAJ': 'Date_MAJ', });
lyr_PisteprinciMbjNkt_3.set('fieldAliases', {'Id_SSC': 'Id_SSC', 'Largeur': 'Largeur', 'Longueur': 'Longueur', 'Origine_do': 'Origine_do', 'Date_MAJ': 'Date_MAJ', });
lyr_Pistecommunale_4.set('fieldAliases', {'Id_SSC': 'Id_SSC', 'Plateau': 'Plateau', 'Subdivisio': 'Subdivisio', 'Bloc': 'Bloc', 'Largeur': 'Largeur', 'Longueur': 'Longueur', 'Origine_do': 'Origine_do', 'Date_MAJ': 'Date_MAJ', });
lyr_usines_5.set('fieldAliases', {'id': 'id', 'Nmaz': 'Nmaz', });
lyr_Surfacebrul_6.set('fieldAliases', {'id': 'id', 'Parcelle': 'Parcelle', 'Site': 'Site', 'Heure': 'Heure', 'Classe': 'Classe', 'Superf_bru': 'Superficie brûlé', 'Date': 'Date', 'Date2': 'Date du brûlage', });
lyr_Incendiedetiers_7.set('fieldAliases', {'id': 'id', 'Name': 'Parcelle', });
lyr_Repre_1.set('fieldImages', {'Repère': 'TextEdit', 'Caract._pa': 'TextEdit', 'Site_géo.': 'TextEdit', 'Plateau': 'TextEdit', 'Site_Entre': 'TextEdit', 'Perimetre': 'TextEdit', 'Variété': 'TextEdit', 'Période_p': 'TextEdit', 'Catégorie': 'TextEdit', 'Nb_an_vege': 'TextEdit', 'Date_d\'imp': 'TextEdit', 'Dist._Us_S': 'TextEdit', 'Dist._Us_1': 'TextEdit', 'Sup_sous_c': 'TextEdit', 'Non_récol': 'TextEdit', 'Divers_non': 'TextEdit', 'GC': 'TextEdit', 'Récoltabl': 'TextEdit', 'Projec_TC/': 'TextEdit', 'TC_24-25': 'TextEdit', 'Epandage_T': 'TextEdit', 'Délai_mat': 'TextEdit', 'S%C': 'TextEdit', 'TS': 'TextEdit', 'TS/ha': 'TextEdit', 'Classe_Rdt': 'TextEdit', });
lyr_Pisteprincipale_2.set('fieldImages', {'Id_SSC': 'TextEdit', 'Plateau': 'TextEdit', 'Subdivisio': 'TextEdit', 'Bloc': 'TextEdit', 'Largeur': 'TextEdit', 'Longueur': 'TextEdit', 'Origine_do': 'TextEdit', 'Date_MAJ': 'DateTime', });
lyr_PisteprinciMbjNkt_3.set('fieldImages', {'Id_SSC': 'TextEdit', 'Largeur': 'TextEdit', 'Longueur': 'TextEdit', 'Origine_do': 'TextEdit', 'Date_MAJ': 'DateTime', });
lyr_Pistecommunale_4.set('fieldImages', {'Id_SSC': 'TextEdit', 'Plateau': 'TextEdit', 'Subdivisio': 'TextEdit', 'Bloc': 'TextEdit', 'Largeur': 'TextEdit', 'Longueur': 'TextEdit', 'Origine_do': 'TextEdit', 'Date_MAJ': 'DateTime', });
lyr_usines_5.set('fieldImages', {'id': 'TextEdit', 'Nmaz': 'TextEdit', });
lyr_Surfacebrul_6.set('fieldImages', {'id': 'Hidden', 'Parcelle': 'TextEdit', 'Site': 'TextEdit', 'Heure': 'TextEdit', 'Classe': 'TextEdit', 'Superf_bru': 'TextEdit', 'Date': 'Hidden', 'Date2': 'DateTime', });
lyr_Incendiedetiers_7.set('fieldImages', {'id': 'Hidden', 'Name': 'TextEdit', });
lyr_Repre_1.set('fieldLabels', {'Repère': 'inline label - visible with data', 'Caract._pa': 'inline label - visible with data', 'Site_géo.': 'inline label - visible with data', 'Plateau': 'inline label - visible with data', 'Site_Entre': 'inline label - visible with data', 'Perimetre': 'inline label - visible with data', 'Variété': 'inline label - visible with data', 'Période_p': 'inline label - visible with data', 'Catégorie': 'inline label - visible with data', 'Nb_an_vege': 'inline label - visible with data', 'Date_d\'imp': 'inline label - visible with data', 'Dist._Us_S': 'inline label - visible with data', 'Dist._Us_1': 'inline label - visible with data', 'Sup_sous_c': 'inline label - visible with data', 'Non_récol': 'inline label - visible with data', 'Divers_non': 'inline label - visible with data', 'GC': 'inline label - visible with data', 'Récoltabl': 'inline label - visible with data', 'Projec_TC/': 'inline label - visible with data', 'TC_24-25': 'inline label - visible with data', 'Epandage_T': 'inline label - visible with data', 'Délai_mat': 'inline label - visible with data', 'S%C': 'inline label - visible with data', 'TS': 'inline label - visible with data', 'TS/ha': 'inline label - visible with data', 'Classe_Rdt': 'inline label - visible with data', });
lyr_Pisteprincipale_2.set('fieldLabels', {'Id_SSC': 'no label', 'Plateau': 'no label', 'Subdivisio': 'no label', 'Bloc': 'no label', 'Largeur': 'no label', 'Longueur': 'no label', 'Origine_do': 'no label', 'Date_MAJ': 'no label', });
lyr_PisteprinciMbjNkt_3.set('fieldLabels', {'Id_SSC': 'no label', 'Largeur': 'no label', 'Longueur': 'no label', 'Origine_do': 'no label', 'Date_MAJ': 'no label', });
lyr_Pistecommunale_4.set('fieldLabels', {'Id_SSC': 'no label', 'Plateau': 'no label', 'Subdivisio': 'no label', 'Bloc': 'no label', 'Largeur': 'no label', 'Longueur': 'no label', 'Origine_do': 'no label', 'Date_MAJ': 'no label', });
lyr_usines_5.set('fieldLabels', {'id': 'no label', 'Nmaz': 'no label', });
lyr_Surfacebrul_6.set('fieldLabels', {'Parcelle': 'inline label - visible with data', 'Site': 'inline label - visible with data', 'Heure': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'Superf_bru': 'inline label - visible with data', 'Date2': 'inline label - visible with data', });
lyr_Incendiedetiers_7.set('fieldLabels', {'Name': 'inline label - visible with data', });
lyr_Incendiedetiers_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});