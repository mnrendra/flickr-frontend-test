(this["webpackJsonpflickr-frontend-test"]=this["webpackJsonpflickr-frontend-test"]||[]).push([[0],{16:function(e,t,n){e.exports=n.p+"static/media/flickr-loading.cea2bf04.gif"},31:function(e,t,n){e.exports=n.p+"static/media/flickr.b9c8ddfc.png"},33:function(e,t,n){e.exports=n(71)},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(12),u=n.n(c),o=n(8),i=n(6),s=n(32),l="CHANGE_SECTION",f="BACK_SECTION",m="HOME_SECTION",E="SEARCH_SECTION",h={GET:"GET_FEED",SET:"SET_FEED"},d={GET:"GET_SEARCH",SET:"SET_SEARCH",GET_MORE:"GET_MORE_SEARCH",SET_MORE:"SET_MORE_SEARCH"},p="SET_QUERY",v={prev:m,current:m},g=n(20),b=Object(o.c)({section:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.section;switch(n){case l:return{current:r,prev:e.current};case f:return{current:e.prev};default:return e}},feedImages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.feedImages;switch(n){case h.SET:return r.images;default:return e}},searchImages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.searchImages;switch(n){case d.SET:return r.images;case d.SET_MORE:return[].concat(Object(g.a)(e),Object(g.a)(r.images));default:return e}},query:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.query;switch(n){case p:return r;default:return e}},page:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0,n=t.type;switch(n){case d.GET_MORE:return e+1;case d.GET:case h.GET:return 1;default:return e}},loadingHome:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,n=t.type;switch(n){case h.GET:return!0;case h.SET:return!1;default:return e}},loadingSearch:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,n=t.type;switch(n){case d.GET:return!0;case d.SET:return!1;default:return e}},loadingSearchMore:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,n=t.type;switch(n){case d.GET_MORE:return!0;case d.SET_MORE:return!1;default:return e}}}),S=n(4),O=n.n(S),y=n(5),w=function(e){return{type:h.SET,feedImages:e}},k=function(e){return{type:d.GET,query:e}},T=function(e){return{type:d.SET,searchImages:e}},x=function(e){return{type:d.SET_MORE,searchImages:e}},j=n(14),C=n(15),M=n.n(C),N="http://ec2-54-179-136-166.ap-southeast-1.compute.amazonaws.com:4000",_=function(){var e=Object(j.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M()("".concat(N));case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(0),new Error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),G=O.a.mark(R),I=O.a.mark(H);function R(){var e;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(y.a)(_);case 3:return e=t.sent,t.next=6,Object(y.c)(w(e));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,console.log(t.t0.toString());case 12:case"end":return t.stop()}}),G,null,[[0,8]])}function H(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.e)(h.GET,R);case 2:case"end":return e.stop()}}),I)}var q=function(){var e=Object(j.a)(O.a.mark((function e(t){var n,r,a,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.query,r=t.page,e.prev=1,e.next=4,M()("".concat(N,"/").concat(n||"home","/30/").concat(r));case 4:return a=e.sent,c=a.data,e.abrupt("return",c);case 9:throw e.prev=9,e.t0=e.catch(1),new Error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),z=O.a.mark(L),A=O.a.mark(U);function L(e){var t,n,r;return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.query,a.prev=1,a.next=4,Object(y.d)((function(e){return e.page}));case 4:return n=a.sent,a.next=7,Object(y.a)(q,{query:t,page:n});case 7:return r=a.sent,a.next=10,Object(y.c)(T(r));case 10:a.next=16;break;case 12:return a.prev=12,a.t0=a.catch(1),a.next=16,console.log(a.t0.toString());case 16:case"end":return a.stop()}}),z,null,[[1,12]])}function U(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.e)(d.GET,L);case 2:case"end":return e.stop()}}),A)}var B=O.a.mark(F),D=O.a.mark(Q);function F(){var e,t,n;return O.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(y.d)((function(e){return e.query}));case 3:return e=r.sent,r.next=6,Object(y.d)((function(e){return e.page}));case 6:return t=r.sent,r.next=9,Object(y.a)(q,{query:e,page:t});case 9:return n=r.sent,r.next=12,Object(y.c)(x(n));case 12:r.next=18;break;case 14:return r.prev=14,r.t0=r.catch(0),r.next=18,console.log(r.t0.toString());case 18:case"end":return r.stop()}}),B,null,[[0,14]])}function Q(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.e)(d.GET_MORE,F);case 2:case"end":return e.stop()}}),D)}var J=O.a.mark(K);function K(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.b)(H);case 2:return e.next=4,Object(y.b)(U);case 4:return e.next=6,Object(y.b)(Q);case 6:case"end":return e.stop()}}),J)}n(61),n(62),n(63),n(64);var W=function(e){var t=e.onClick;return a.a.createElement("svg",{className:"icon right",onClick:t},a.a.createElement("path",{fill:"inherit",d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),a.a.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}))},Y=n(31),$=n.n(Y),P=Object(i.b)(null,(function(e){return{changeSection:function(t){return e(function(e){return{type:l,section:e}}(t))}}}))((function(e){var t=e.changeSection;return a.a.createElement("div",{className:"home-header"},a.a.createElement("img",{src:$.a,alt:"flickr"}),a.a.createElement(W,{onClick:function(){return t(E)}}))})),V=(n(65),function(e){var t=e.onClick;return a.a.createElement("svg",{className:"icon",onClick:t},a.a.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),a.a.createElement("path",{fill:"inherit",d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}))}),X=function(e){var t=e.onClick;return a.a.createElement("svg",{className:"icon right",onClick:t},a.a.createElement("path",{fill:"inherit",d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),a.a.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}))},Z=Object(i.b)((function(e){return{query:e.query}}),(function(e){return{backSection:function(){return e({type:f})},getSearch:function(t){return e(k(t))},setQuery:function(t){return e({type:p,query:t})}}}))((function(e){var t=e.query,n=e.setQuery,r=e.backSection,c=e.getSearch,u=function(e){var n=e.type,r=e.key;return("click"===n||"Enter"===r)&&c(t)};return a.a.createElement("div",{className:"search-header"},a.a.createElement(V,{onClick:r}),a.a.createElement("input",{type:"text",placeholder:"search",spellCheck:"false",onChange:function(e){var t=e.target;return n(t.value)},onKeyDown:u,value:t}),a.a.createElement(X,{onClick:u}))})),ee=Object(i.b)((function(e){return{section:e.section.current}}))((function(e){var t=e.section;return a.a.createElement("div",{className:"header"},function(){switch(t){case E:return a.a.createElement(Z,null);case m:default:return a.a.createElement(P,null)}}())})),te=(n(66),n(67),n(68),function(e){var t=e.imageUrl;return a.a.createElement("div",{className:"item"},a.a.createElement("div",{className:"img",style:{background:"#EEEEEE url(".concat(t,") center no-repeat")},alt:""}))}),ne=n(16),re=n.n(ne),ae=Object(i.b)((function(e){return{feedImages:e.feedImages,loadingHome:e.loadingHome}}))((function(e){var t=e.feedImages,n=e.loadingHome;return a.a.createElement("div",{className:"home-main"},n?a.a.createElement("img",{className:"loading",src:re.a,alt:""}):t&&t.map((function(e){var t=e.image;return a.a.createElement(te,{key:t,imageUrl:t})})))})),ce=(n(69),n(70),function(e){var t=e.imageUrl;return a.a.createElement("div",{className:"item"},a.a.createElement("div",{className:"img",style:{background:"#EEEEEE url(".concat(t,") center no-repeat")},alt:""}))}),ue=Object(i.b)((function(e){return{searchImages:e.searchImages,loadingSearch:e.loadingSearch,loadingSearchMore:e.loadingSearchMore}}),(function(e){return{getSearchMore:function(){return e({type:d.GET_MORE})}}}))((function(e){var t=e.searchImages,n=e.getSearchMore,r=e.loadingSearch,c=e.loadingSearchMore,u=function(){return n()};return a.a.createElement("div",{className:"search-main"},r?a.a.createElement("img",{className:"loading",src:re.a,alt:""}):a.a.createElement(a.a.Fragment,null,t&&t.map((function(e){return a.a.createElement(ce,{key:e.image,imageUrl:e.image})})),a.a.createElement("button",{className:"load-more",onClick:u},c?"Loading...":"Load More")))})),oe=Object(i.b)((function(e){return{section:e.section.current}}))((function(e){var t=e.section;return a.a.createElement("div",{className:"main"},function(){switch(t){case E:return a.a.createElement(ue,null);case m:default:return a.a.createElement(ae,null)}}())})),ie=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(ee,null),a.a.createElement(oe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var se=Object(s.a)(),le=Object(o.e)(b,Object(o.a)(se));se.run(K),u.a.render(a.a.createElement(i.a,{store:le},a.a.createElement(ie,null)),document.getElementById("root")),le.dispatch({type:h.GET}),le.dispatch(k("")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.f05851b4.chunk.js.map