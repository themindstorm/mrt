parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"REI2":[function(require,module,exports) {
function e(e,n,t){return{id:e,type:"line",source:{type:"geojson",data:{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:n}}},layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":t,"line-width":3}}}
},{}],"p7kT":[function(require,module,exports) {
"use strict";var e=require("./functions");mapboxgl.accessToken="pk.eyJ1IjoidGhlbWluZHN0b3JtIiwiYSI6ImNqemI5dTE4czAzM20zb3BsYzAzaDVrOXAifQ.SydstlfTME2vjERTmPo3XA";var o=new mapboxgl.Map({container:"map",style:"mapbox://styles/themindstorm/ck5ui9vow1mei1inw89olbhs5/draft",center:[103.8,1.351],zoom:11});o.on("load",function(){o.addControl(new mapboxgl.GeolocateControl({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0})),o.addControl(new mapboxgl.NavigationControl),o.addLayer((0,e.mrtLine)("ew",[["103.9492348","1.3729837740000002"],["103.94511750000001","1.353301356"],["103.9533387","1.343202895"],["103.94631609999999","1.327187135"],["103.9299587","1.323979969"],["103.9129282","1.321038249"],["103.9032339","1.319778952"],["103.8930446","1.318112082"],["103.88289300000001","1.316432612"],["103.87137659999999","1.31148891"],["103.8628215","1.30735702"],["103.8557007","1.3004650759999998"],["103.852581","1.292936243"],["103.8514572","1.284125611"],["103.8458611","1.276521247"],["103.8395732","1.279764543"],["103.827021","1.286193393"],["103.8168209","1.289562726"],["103.8058913","1.294860933"],["103.7983136","1.302438735"],["103.79020279999999","1.307183467"],["103.7786522","1.311405293"],["103.7653168","1.314954492"],["103.7423112","1.33315262"],["103.7326244","1.342352821"],["103.7209802","1.344259249"],["103.7060994","1.3386040540000002"],["103.69735859999999","1.337586882"],["103.6784167","1.327717173"],["103.6605988","1.319505215"],["103.6491245","1.321026553"],["103.63966620000001","1.3299890890000001"],["103.6369324","1.3404637659999998"]],"#00ff00")),o.addLayer((0,e.mrtLine)("ns",[["103.7423112","1.33315262"],["103.74959","1.349034109"],["103.75191640000001","1.358761857"],["103.74436700000001","1.3853616930000001"],["103.74743070000001","1.3975350180000001"],["103.7621874","1.425177699"],["103.77409","1.432514421"],["103.78649990000001","1.436875128"],["103.80099820000001","1.4405850009999999"],["103.82005040000001","1.449050821"],["103.83500450000001","1.4294430809999998"],["103.83298","1.41738337"],["103.8449439","1.381756046"],["103.8495535","1.369933175"],["103.8481398","1.350838988"],["103.8467942","1.3404716840000002"],["103.84749790000001","1.332628987"],["103.8438228","1.320440791"],["103.83798409999999","1.3123201"],["103.8322417","1.303981012"],["103.83907370000001","1.300260055"],["103.84611190000001","1.298701307"],["103.852581","1.292936243"],["103.8514572","1.284125611"],["103.85459250000001","1.276427355"],["103.8628525","1.271336711"]],"#ff0000")),o.addLayer((0,e.mrtLine)("ce",[["103.8462358","1.2988428159999998"],["103.8506629","1.296861687"],["103.8554985","1.293321608"],["103.8609921","1.293218051"],["103.8636292","1.299766835"],["103.8753395","1.30284063"],["103.8825153","1.306201905"],["103.888648","1.30838264"],["103.89216329999999","1.317430268"],["103.8902718","1.326345372"],["103.88818","1.335433322"],["103.8797462","1.3428283380000001"],["103.87235720000001","1.3505952559999999"],["103.8641434","1.351612171"],["103.84915","1.35130868"],["103.8394214","1.348707263"],["103.8395281","1.3376745079999999"],["103.83069029999999","1.333728882"],["103.8149876","1.3221101929999999"],["103.8075929","1.317510612"],["103.79620159999999","1.31183479"],["103.7906645","1.3064916690000001"],["103.7874693","1.299759879"],["103.7846438","1.2934626329999999"],["103.78182340000001","1.282542157"],["103.79136070000001","1.276213523"],["103.8029471","1.272332732"],["103.80975440000002","1.270753211"],["103.821446","1.26547264"]],"#ff9700")),o.addLayer((0,e.mrtLine)("dt",[["103.7615559","1.379002117"],["103.764714","1.369369831"],["103.7674369","1.362344869"],["103.77580999999999","1.341223176"],["103.78382009999999","1.335665121"],["103.7972561","1.330786387"],["103.8073292","1.3258832090000001"],["103.8161362","1.322423979"],["103.8260263","1.320065557"],["103.8378098","1.313607102"],["103.8524167","1.3039164840000002"],["103.8496427","1.306800025"],["103.8568623","1.299550746"],["103.860846","1.292891552"],["103.8590733","1.281873788"],["103.85283559999999","1.27944619"],["103.84829909999999","1.282289536"],["103.8444484","1.284748969"],["103.8443255","1.292478928"],["103.85037990000001","1.29886427"],["103.8554713","1.305403642"],["103.8629702","1.313672233"],["103.87189040000001","1.321505838"],["103.8832341","1.326876715"],["103.8893356","1.326076883"],["103.8992348","1.3299568259999999"],["103.9084393","1.3349673020000001"],["103.9179554","1.334742117"],["103.9322077","1.33660783"],["103.938408","1.345515305"],["103.94302979999999","1.355077429"],["103.9546005","1.3561914830000001"],["103.96143670000001","1.341737484"],["103.9623407","1.335382137"]],"#0000ff")),o.addLayer((0,e.mrtLine)("ne",[["103.821446","1.26547264"],["103.839125","1.28140498"],["103.84342420000002","1.284359578"],["103.84655190000001","1.288386024"],["103.84548509999999","1.2997054590000001"],["103.8485807","1.3071982229999999"],["103.85417170000001","1.31235984"],["103.86167900000001","1.319395706"],["103.869046","1.331379525"],["103.87080809999999","1.339190046"],["103.8735637","1.349707875"],["103.8850503","1.360179171"],["103.8923636","1.371292292"],["103.8931042","1.382877858"],["103.8954664","1.391694626"],["103.902052","1.4045467280000001"]],"#791594"))});
},{"./functions":"REI2"}]},{},["p7kT"], null)
//# sourceMappingURL=/script.48fcc52e.js.map