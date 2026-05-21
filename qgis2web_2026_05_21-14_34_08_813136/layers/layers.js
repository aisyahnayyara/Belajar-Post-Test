var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_BatasAdministrasi_1 = new ol.format.GeoJSON();
var features_BatasAdministrasi_1 = format_BatasAdministrasi_1.readFeatures(json_BatasAdministrasi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasi_1.addFeatures(features_BatasAdministrasi_1);
var lyr_BatasAdministrasi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasi_1, 
                style: style_BatasAdministrasi_1,
                popuplayertitle: 'Batas Administrasi',
                interactive: true,
                title: '<img src="styles/legend/BatasAdministrasi_1.png" /> Batas Administrasi'
            });
var format_Jaringan_Transportasi_2 = new ol.format.GeoJSON();
var features_Jaringan_Transportasi_2 = format_Jaringan_Transportasi_2.readFeatures(json_Jaringan_Transportasi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jaringan_Transportasi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jaringan_Transportasi_2.addFeatures(features_Jaringan_Transportasi_2);
var lyr_Jaringan_Transportasi_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jaringan_Transportasi_2, 
                style: style_Jaringan_Transportasi_2,
                popuplayertitle: 'Jaringan_Transportasi',
                interactive: true,
                title: '<img src="styles/legend/Jaringan_Transportasi_2.png" /> Jaringan_Transportasi'
            });
var format_Radius800_3 = new ol.format.GeoJSON();
var features_Radius800_3 = format_Radius800_3.readFeatures(json_Radius800_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Radius800_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Radius800_3.addFeatures(features_Radius800_3);
var lyr_Radius800_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Radius800_3, 
                style: style_Radius800_3,
                popuplayertitle: 'Radius 800',
                interactive: true,
                title: '<img src="styles/legend/Radius800_3.png" /> Radius 800'
            });
var format_Radius400_4 = new ol.format.GeoJSON();
var features_Radius400_4 = format_Radius400_4.readFeatures(json_Radius400_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Radius400_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Radius400_4.addFeatures(features_Radius400_4);
var lyr_Radius400_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Radius400_4, 
                style: style_Radius400_4,
                popuplayertitle: 'Radius 400',
                interactive: true,
                title: '<img src="styles/legend/Radius400_4.png" /> Radius 400'
            });
var format_AreaPerumahanTerjangkau_5 = new ol.format.GeoJSON();
var features_AreaPerumahanTerjangkau_5 = format_AreaPerumahanTerjangkau_5.readFeatures(json_AreaPerumahanTerjangkau_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaPerumahanTerjangkau_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaPerumahanTerjangkau_5.addFeatures(features_AreaPerumahanTerjangkau_5);
var lyr_AreaPerumahanTerjangkau_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaPerumahanTerjangkau_5, 
                style: style_AreaPerumahanTerjangkau_5,
                popuplayertitle: 'Area Perumahan Terjangkau',
                interactive: true,
                title: '<img src="styles/legend/AreaPerumahanTerjangkau_5.png" /> Area Perumahan Terjangkau'
            });
var format_AreaKomersilTerjangkau_6 = new ol.format.GeoJSON();
var features_AreaKomersilTerjangkau_6 = format_AreaKomersilTerjangkau_6.readFeatures(json_AreaKomersilTerjangkau_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaKomersilTerjangkau_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaKomersilTerjangkau_6.addFeatures(features_AreaKomersilTerjangkau_6);
var lyr_AreaKomersilTerjangkau_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaKomersilTerjangkau_6, 
                style: style_AreaKomersilTerjangkau_6,
                popuplayertitle: 'Area Komersil Terjangkau',
                interactive: true,
                title: '<img src="styles/legend/AreaKomersilTerjangkau_6.png" /> Area Komersil Terjangkau'
            });
var format_AreaPublikTerjangkau_7 = new ol.format.GeoJSON();
var features_AreaPublikTerjangkau_7 = format_AreaPublikTerjangkau_7.readFeatures(json_AreaPublikTerjangkau_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaPublikTerjangkau_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaPublikTerjangkau_7.addFeatures(features_AreaPublikTerjangkau_7);
var lyr_AreaPublikTerjangkau_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaPublikTerjangkau_7, 
                style: style_AreaPublikTerjangkau_7,
                popuplayertitle: 'Area Publik Terjangkau',
                interactive: true,
                title: '<img src="styles/legend/AreaPublikTerjangkau_7.png" /> Area Publik Terjangkau'
            });
var format_HaltediKediri_8 = new ol.format.GeoJSON();
var features_HaltediKediri_8 = format_HaltediKediri_8.readFeatures(json_HaltediKediri_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HaltediKediri_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HaltediKediri_8.addFeatures(features_HaltediKediri_8);
var lyr_HaltediKediri_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HaltediKediri_8, 
                style: style_HaltediKediri_8,
                popuplayertitle: 'Halte di Kediri',
                interactive: true,
                title: '<img src="styles/legend/HaltediKediri_8.png" /> Halte di Kediri'
            });

lyr_Positron_0.setVisible(true);lyr_BatasAdministrasi_1.setVisible(true);lyr_Jaringan_Transportasi_2.setVisible(true);lyr_Radius800_3.setVisible(true);lyr_Radius400_4.setVisible(true);lyr_AreaPerumahanTerjangkau_5.setVisible(true);lyr_AreaKomersilTerjangkau_6.setVisible(true);lyr_AreaPublikTerjangkau_7.setVisible(true);lyr_HaltediKediri_8.setVisible(true);
var layersList = [lyr_Positron_0,lyr_BatasAdministrasi_1,lyr_Jaringan_Transportasi_2,lyr_Radius800_3,lyr_Radius400_4,lyr_AreaPerumahanTerjangkau_5,lyr_AreaKomersilTerjangkau_6,lyr_AreaPublikTerjangkau_7,lyr_HaltediKediri_8];
lyr_BatasAdministrasi_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SUMBER': 'SUMBER', 'LUASHA': 'LUASHA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Jaringan_Transportasi_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'ORDE01': 'ORDE01', 'ORDE02': 'ORDE02', 'ORDE03': 'ORDE03', 'ORDE04': 'ORDE04', 'JNSRSR': 'JNSRSR', 'STSJRN': 'STSJRN', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'REMARK': 'REMARK', 'SBDATA': 'SBDATA', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', });
lyr_Radius800_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'ID': 'ID', 'type': 'type', 'start': 'start', 'Luas m2': 'Luas m2', });
lyr_Radius400_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'ID': 'ID', 'type': 'type', 'start': 'start', 'Luas m2': 'Luas m2', });
lyr_AreaPerumahanTerjangkau_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'ID': 'ID', 'type': 'type', 'start': 'start', 'Luas m2': 'Luas m2', 'Luas Layan': 'Luas Layan', 'Persentase': 'Persentase', });
lyr_AreaKomersilTerjangkau_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'ID': 'ID', 'type': 'type', 'start': 'start', 'Luas m2': 'Luas m2', 'Luas Layan': 'Luas Layan', 'Persentase': 'Persentase', });
lyr_AreaPublikTerjangkau_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'ID': 'ID', 'type': 'type', 'start': 'start', 'Luas m2': 'Luas m2', 'Luas Layan': 'Luas Layan', 'Persentase': 'Persentase', });
lyr_HaltediKediri_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'ID': 'ID', 'Foto': 'Foto', });
lyr_BatasAdministrasi_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SUMBER': 'TextEdit', 'LUASHA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Jaringan_Transportasi_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'TextEdit', 'ORDE02': 'TextEdit', 'ORDE03': 'TextEdit', 'ORDE04': 'TextEdit', 'JNSRSR': 'TextEdit', 'STSJRN': 'TextEdit', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_Radius800_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'REMARK': 'TextEdit', 'ID': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', 'Luas m2': 'TextEdit', });
lyr_Radius400_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'REMARK': 'TextEdit', 'ID': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', 'Luas m2': 'TextEdit', });
lyr_AreaPerumahanTerjangkau_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'REMARK': 'TextEdit', 'ID': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', 'Luas m2': 'TextEdit', 'Luas Layan': 'TextEdit', 'Persentase': 'TextEdit', });
lyr_AreaKomersilTerjangkau_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'REMARK': 'TextEdit', 'ID': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', 'Luas m2': 'TextEdit', 'Luas Layan': 'TextEdit', 'Persentase': 'TextEdit', });
lyr_AreaPublikTerjangkau_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'REMARK': 'TextEdit', 'ID': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', 'Luas m2': 'TextEdit', 'Luas Layan': 'TextEdit', 'Persentase': 'TextEdit', });
lyr_HaltediKediri_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'REMARK': 'TextEdit', 'ID': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_BatasAdministrasi_1.set('fieldLabels', {'OBJECTID': 'no label', 'WADMKD': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SUMBER': 'no label', 'LUASHA': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Jaringan_Transportasi_2.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'ORDE01': 'no label', 'ORDE02': 'no label', 'ORDE03': 'no label', 'ORDE04': 'no label', 'JNSRSR': 'no label', 'STSJRN': 'no label', 'WADMPR': 'no label', 'WADMKK': 'no label', 'REMARK': 'no label', 'SBDATA': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', });
lyr_Radius800_3.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'no label', 'REMARK': 'no label', 'ID': 'no label', 'type': 'no label', 'start': 'no label', 'Luas m2': 'no label', });
lyr_Radius400_4.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'no label', 'REMARK': 'no label', 'ID': 'no label', 'type': 'no label', 'start': 'no label', 'Luas m2': 'no label', });
lyr_AreaPerumahanTerjangkau_5.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'no label', 'REMARK': 'no label', 'ID': 'no label', 'type': 'no label', 'start': 'no label', 'Luas m2': 'no label', 'Luas Layan': 'no label', 'Persentase': 'no label', });
lyr_AreaKomersilTerjangkau_6.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'no label', 'REMARK': 'no label', 'ID': 'no label', 'type': 'no label', 'start': 'no label', 'Luas m2': 'no label', 'Luas Layan': 'no label', 'Persentase': 'no label', });
lyr_AreaPublikTerjangkau_7.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'no label', 'REMARK': 'no label', 'ID': 'no label', 'type': 'no label', 'start': 'no label', 'Luas m2': 'no label', 'Luas Layan': 'no label', 'Persentase': 'no label', });
lyr_HaltediKediri_8.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'no label', 'REMARK': 'no label', 'ID': 'no label', 'Foto': 'no label', });
lyr_HaltediKediri_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});