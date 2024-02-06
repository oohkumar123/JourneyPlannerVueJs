(function(){"use strict";var e={3300:function(e,t,o){var s=o(7764),a=o(4108);function n(e,t){const o=(0,a.E1)("router-view");return(0,a.Wz)(),(0,a.Az)(o)}var r=o(4100);const i={},l=(0,r.c)(i,[["render",n]]);var c=l,d=o(7464);const u={class:"wrapper"};function p(e,t,o,s,n,r){const i=(0,a.E1)("Map"),l=(0,a.E1)("Destinations");return(0,a.Wz)(),(0,a.An)("div",u,[(0,a.K2)(i),(0,a.K2)(l)])}var m=o(9096);const f={id:"map",ref:"map"},g={id:"search-bar"},h=(0,a.QD)("label",{for:"typeaddress"}," Type address: ",-1),v={key:0};function y(e,t,o,n,r,i){return(0,a.Wz)(),(0,a.An)(a.ae,null,[(0,a.QD)("div",f,null,512),(0,a.QD)("div",g,[h,(0,a.wt)((0,a.QD)("input",{type:"text",id:"address","onUpdate:modelValue":t[0]||(t[0]=e=>r.address=e)},null,512),[[s.Og,r.address]]),(0,a.QD)("button",{onClick:t[1]||(t[1]=t=>i.searchAddress(e.myMap))},"Go"),r.address?((0,a.Wz)(),(0,a.An)("p",v,(0,m.WA)(r.address),1)):(0,a.g1)("",!0)])],64)}var D=o(1264),k={data(){return{address:"420 Monte Vista Avenue, Mill Valley 94941",map:{}}},async mounted(){await this.loadMap(),this.addClick()},methods:{async loadMap(){this.loader=new D.c1({apiKey:"AIzaSyDlLrLnR2kTGVYhjtbu9ylIUm7eVTin2bk",version:"weekly"});let{Map:e}=await this.loader.importLibrary("maps");this.map=new e(this.$refs.map,{center:{lat:37.9107347,lng:-122.5640172},zoom:14,mapId:"4504f8b37365c3d0"}),this.$store.commit("storeMap",this.map)},addClick(){this.map.addListener("click",(e=>{const t=new window.google.maps.Geocoder;t.geocode({location:e.latLng},((t,o)=>{let s=this.addmarker(e.latLng,t[0].formatted_address);console.info("%cmarker 2: %o","color: red;font-size:12px",s),this.$store.dispatch("addPlaceId",{placeId:t[0].place_id,marker:s})}))}))},searchAddress(){const e=new window.google.maps.Geocoder;e.geocode({address:this.address},((e,t)=>{let o=this.addmarker(e[0].geometry.location,e[0].formatted_address);this.$store.dispatch("addPlaceId",{placeId:e[0].place_id,marker:o})}))},addmarker(e,t){var o=new google.maps.Marker({position:e,label:{text:t,className:"address-marker",map:this.map}});return console.info("%cmarker 1: %o","color: red;font-size:12px",o),o.setMap(this.map),()=>o.setMap(null)}}};const b=(0,r.c)(k,[["render",y]]);var w=b;const I={key:0,id:"destinations"},M={class:"title"},A=(0,a.QD)("div",{class:"space"}," ",-1),C={class:"destinations-list sortable-list",ref:"sortableList"},T=["data-placeId"],x=(0,a.QD)("br",null,null,-1),z={class:"details"},Q={class:"order"},L={class:"address"},W={class:"street"},j=(0,a.QD)("br",null,null,-1),O=(0,a.QD)("p",{class:"latlon"},null,-1),S={class:"updown"},E=["onClick"],P=["onClick"],$=["onClick"];function _(e,t,o,s,n,r){const i=(0,a.E1)("JourneySummary");return(0,a.Wz)(),(0,a.An)(a.ae,null,[r.listDestinations().length?((0,a.Wz)(),(0,a.An)("div",I,[(0,a.QD)("div",M,[A,(0,a.QD)("h2",{onClick:t[0]||(t[0]=(...e)=>r.getMap&&r.getMap(...e))},"Destinations List "),(0,a.QD)("div",{class:"clear-all",onClick:t[1]||(t[1]=t=>e.window.location.reload())},"Clear all")]),(0,a.QD)("div",C,[((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(r.listDestinations(),((e,t)=>((0,a.Wz)(),(0,a.An)("article",{class:"item","data-placeId":e.placeId,draggable:"true",ref_for:!0,ref:"item",key:t},[e.stats?((0,a.Wz)(),(0,a.An)("div",{key:0,class:"stats",style:(0,m.MN)({background:e.stats.backgroundColor})},[(0,a.mY)(" Distance: "+(0,m.WA)(e.stats.distanceText)+" ",1),x,(0,a.mY)(" Duration: "+(0,m.WA)(e.stats.durationText),1)],4)):(0,a.g1)("",!0),(0,a.QD)("div",z,[(0,a.QD)("div",Q,[(0,a.QD)("p",null,(0,m.WA)(t+1),1)]),(0,a.QD)("div",L,[(0,a.QD)("p",W,[(0,a.mY)((0,m.WA)(e.address)+" ",1),j,(0,a.mY)(" "+(0,m.WA)(e.latlng),1)]),O]),(0,a.QD)("div",S,[t>0?((0,a.Wz)(),(0,a.An)("div",{key:0,class:"up",onClick:e=>r.moveUp(t)},"↑",8,E)):(0,a.g1)("",!0),(0,a.QD)("div",{class:"delete",onClick:e=>r.deleteLoc(t)},"✪",8,P),t!=r.listDestinations().length-1?((0,a.Wz)(),(0,a.An)("div",{key:1,class:"down",onClick:e=>r.moveDown(t)},"↓",8,$)):(0,a.g1)("",!0)])])],8,T)))),128))],512)])):(0,a.g1)("",!0),r.listDestinations().length>1?((0,a.Wz)(),(0,a.Az)(i,{key:1,totalTime:n.totalTime,totalDistance:n.totalDistance,fuelCost:n.fuelCost},null,8,["totalTime","totalDistance","fuelCost"])):(0,a.g1)("",!0)],64)}const G={key:0,id:"journey-summary"},U=(0,a.QD)("h2",null,"Journey Summary ",-1),V=(0,a.QD)("br",null,null,-1),Y=(0,a.QD)("br",null,null,-1),F=(0,a.QD)("br",null,null,-1);function N(e,t,o,s,n,r){return(0,a.Wz)(),(0,a.An)("div",G,[U,(0,a.QD)("p",null,"Distance: "+(0,m.WA)(o.totalDistance),1),(0,a.mY)(),V,(0,a.QD)("p",null,"Total time: "+(0,m.WA)(o.totalTime),1),(0,a.mY)(),Y,(0,a.QD)("p",null,"Fuel cost: "+(0,m.WA)(o.fuelCost),1),F])}var R={name:"JourneySummary",props:["totalTime","totalDistance","fuelCost"]};const K=(0,r.c)(R,[["render",N]]);var J=K,q={components:{JourneySummary:J},data(){return{totalTime:"",totalDistance:"",fuelCost:"",milesConvert:1609.34,costPerGallon:5.5,map:[]}},updated(){},mounted(){},methods:{getMap(){this.map=this.$store.getters.getMap,console.info("%cmap 2: %o","color: red;font-size:12px",this.map)},deleteAll(){this.$store.dispatch("deleteAll")},deleteLoc(e){this.$store.dispatch("deleteLoc",e)},moveUp(e){this.$store.dispatch("moveUp",e)},moveDown(e){this.$store.dispatch("moveDown",e)},listDestinations(){return this.calculateTotals(this.$store.getters.addressesList),this.$store.getters.addressesList},calculateTotals(e){let t=0,o=0;e.forEach((e=>{e?.stats&&(t+=e.stats.durationSeconds,o+=e.stats.distanceMeters)})),this.totalTime=this.getTotalTime(t),this.totalDistance=this.getTotalDistance(o),this.fuelCost=this.getTotalFuelCost(o)},getTotalTime(e){const t=Math.floor(e/3600),o=Math.floor(e%3600/60);return t?t+" hours "+o+" minutes":o+" minutes"},getTotalDistance(e){const t=e/this.milesConvert;return t.toFixed(1)+" miles"},getTotalFuelCost(e){const t=e/this.milesConvert,o=t/21,s=this.costPerGallon*o;return"$"+s.toFixed(2)+" at $"+this.costPerGallon+" per gallon"}},computed:{}};const B=(0,r.c)(q,[["render",_]]);var H=B,X={components:{Map:w,Destinations:H}};const Z=(0,r.c)(X,[["render",p]]);var ee=Z;const te=[{path:"/",name:"Home",component:ee},{path:"/about",name:"About",component:()=>o.e(152).then(o.bind(o,4251))}],oe=(0,d.gv)({history:(0,d.Ow)(),routes:te});var se=oe,ae=(o(3248),o(7192)),ne=(0,ae.eC)({state:{placeIds:[],placeIdsUpdated:[],addresses:[],previous:0,loader:new D.c1({apiKey:"AIzaSyDlLrLnR2kTGVYhjtbu9ylIUm7eVTin2bk",version:"weekly"}),map:[],count:0},getters:{addressesList:e=>e.addresses,getMap:e=>e.map,count:e=>e.count},mutations:{storeMap(e,t){e.map=t,console.info("%cstate.map: %o","color: red;font-size:12px",e.map)},updateCount(e){console.info("%cLocation: %o","color: green;font-size:12px","updateCount"),e.count++,console.info("%cstate.count: %o","color: red;font-size:12px",e.count)}},modules:{},actions:{deleteAll:e=>{e.state.placeIds.forEach((e=>{console.info("%cplaceId: %o","color: red;font-size:12px",e),e.marker()})),e.state.addresses.forEach((e=>{console.info("%cplaceId: %o","color: red;font-size:12px",e)}))},deleteLoc:async(e,t)=>{let o=await e.state.placeIds[t].marker;o.setMap(null);let s=e.state.placeIds.filter(((e,o)=>o!==t));e.state.placeIds=s,e.state.addresses=[],e.dispatch("processMap")},moveUp(e,t){let o=e.state.placeIds[t];e.state.placeIds[t]=e.state.placeIds[t-1],e.state.placeIds[t-1]=o,e.dispatch("processMap")},moveDown(e,t){let o=e.state.placeIds[t];e.state.placeIds[t]=e.state.placeIds[t+1],e.state.placeIds[t+1]=o,e.dispatch("processMap")},addPlaceId:(e,t)=>{e.state.placeIds.push(t),e.dispatch("processMap")},processMap:async e=>{let t,o=e.state.placeIds,s=[],a=(e.state.map,["red","green","blue","yellow","orange","pink"]);for(let l=0;l<o.length;l++){let c=await(new google.maps.Geocoder).geocode({placeId:o[l].placeId});if(s=c.results[0],t){const o=new google.maps.LatLng(t.geometry.location),c=new google.maps.LatLng(s.geometry.location),d=new google.maps.DistanceMatrixService;let u=await d.getDistanceMatrix({origins:[o],destinations:[c],travelMode:"DRIVING",unitSystem:google.maps.UnitSystem.IMPERIAL});var n=new google.maps.DirectionsService,r=new google.maps.DirectionsRenderer({map:e.state.map,polylineOptions:{strokeColor:a[l-1],strokeWeight:5,strokeOpacity:.7}});if("OK"==u.rows[0].elements[0].status){var i={origin:o,destination:c,travelMode:"DRIVING"};n.route(i,(function(t,n){"OK"==n&&(r.setDirections(t),e.state.addresses[l]={placeId:s.place_id,address:s.formatted_address,latlng:s.geometry.location,stats:{distanceText:u.rows[0].elements[0].distance.text,durationText:u.rows[0].elements[0].duration.text,distanceMeters:u.rows[0].elements[0].distance.value,durationSeconds:u.rows[0].elements[0].duration.value,origin:o,destination:c,backgroundColor:a[l-1],directionsRend:()=>r.setDirections(null)}},console.info("%ccontext.state.addresses[i]: %o","color: red;font-size:12px",e.state.addresses[l]))})),t=s}}else e.state.addresses[l]={placeId:s.place_id,address:s.formatted_address,latlng:s.geometry.location},t=s}}}});const re=(0,s.W0)(c);re.use(ne).use(se).mount("#app")}},t={};function o(s){var a=t[s];if(void 0!==a)return a.exports;var n=t[s]={exports:{}};return e[s].call(n.exports,n,n.exports,o),n.exports}o.m=e,function(){var e=[];o.O=function(t,s,a,n){if(!s){var r=1/0;for(d=0;d<e.length;d++){s=e[d][0],a=e[d][1],n=e[d][2];for(var i=!0,l=0;l<s.length;l++)(!1&n||r>=n)&&Object.keys(o.O).every((function(e){return o.O[e](s[l])}))?s.splice(l--,1):(i=!1,n<r&&(r=n));if(i){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[s,a,n]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,s){return o.f[s](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/about.9111eef8.js"}}(),function(){o.miniCssF=function(e){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="journeyplannervuejs:";o.l=function(s,a,n,r){if(e[s])e[s].push(a);else{var i,l;if(void 0!==n)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==s||u.getAttribute("data-webpack")==t+n){i=u;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.setAttribute("data-webpack",t+n),i.src=s),e[s]=[a];var p=function(t,o){i.onerror=i.onload=null,clearTimeout(m);var a=e[s];if(delete e[s],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((function(e){return e(o)})),t)return t(o)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p=""}(),function(){var e={524:0};o.f.j=function(t,s){var a=o.o(e,t)?e[t]:void 0;if(0!==a)if(a)s.push(a[2]);else{var n=new Promise((function(o,s){a=e[t]=[o,s]}));s.push(a[2]=n);var r=o.p+o.u(t),i=new Error,l=function(s){if(o.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var n=s&&("load"===s.type?"missing":s.type),r=s&&s.target&&s.target.src;i.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",i.name="ChunkLoadError",i.type=n,i.request=r,a[1](i)}};o.l(r,l,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,s){var a,n,r=s[0],i=s[1],l=s[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(a in i)o.o(i,a)&&(o.m[a]=i[a]);if(l)var d=l(o)}for(t&&t(s);c<r.length;c++)n=r[c],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(d)},s=self["webpackChunkjourneyplannervuejs"]=self["webpackChunkjourneyplannervuejs"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=o.O(void 0,[999],(function(){return o(3300)}));s=o.O(s)})();
//# sourceMappingURL=app.e12b2d8f.js.map