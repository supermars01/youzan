webpackJsonp([6],{10:function(t,n){},11:function(t,n){},12:function(t,n,a){function e(t){a(11)}var i=a(5)(a(6),a(15),e,null,null);t.exports=i.exports},13:function(t,n,a){function e(t){a(10)}var i=a(5)(a(7),a(14),e,null,null);t.exports=i.exports},14:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"swiper-container"},[a("div",{staticClass:"swiper-wrapper"},t._l(t.lists,function(t){return a("div",{staticClass:"swp-page swiper-slide"},[a("a",{staticClass:"js-no-follow",attrs:{href:t.clickUrl}},[a("img",{staticClass:"goods-main-photo fadeIn",attrs:{src:t.image}})])])})),t._v(" "),a("div",{staticClass:"swiper-pagination"})])},staticRenderFns:[]}},15:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"bottom-nav"},[a("ul",t._l(t.navConfig,function(n,e){return a("li",{class:{active:e==t.curIndex},on:{click:function(a){t.changNav(n,e)}}},[a("a",[a("i",{class:n.icon}),t._v(" "),a("div",[t._v(t._s(n.name))])])])}))])},staticRenderFns:[]}},18:function(t,n){},2:function(t,n,a){"use strict";var e={hotLists:"/index/hotLists",banner:"/index/banner",topList:"/category/topList",subList:"/category/subList",rank:"/category/rank",searchList:"/search/list",details:"/goods/details",deal:"/goods/deal",cartAdd:"/cart/add",cartRemove:" /cart/reduce",cartUpdate:"/cart/update",cartReduc:"/cart/reduce",cartList:"/cart/list",memberList:"/member/list-test"};for(var i in e)e.hasOwnProperty(i)&&(e[i]="http://rapapi.org/mockjsdata/24170"+e[i]);n.a=e},3:function(t,n,a){"use strict";var e=a(17),i=a.n(e),s=a(8),o=(a.n(s),a(20)),r=a.n(o),c=a(0),u=a(1),l=a.n(u),d=a(12),f=a.n(d),p=a(13),h=a.n(p);c.default.use(r.a);var v={methods:{getLists:function(t,n){var a=this;console.log(t,n),this.allLoaded||(this.loading=!0,l.a.post(t,n).then(function(t){var n=t.data.lists;if(n.length<a.pageSize&&(a.allLoaded=!0),a.lists){var e;(e=a.lists).push.apply(e,i()(n))}else a.lists=n;a.pageNum++,a.loading=!1}))}},filters:{currency:function(t){var n=""+t;if(n.indexOf(".")>-1){var a=n.split(".");return a[0]+"."+(a[1]+"0").substr(0,2)}return n+".00"}},components:{Foot:f.a,Swipe:h.a}};n.a=v},58:function(t,n){},6:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a(16),i=a.n(e),s=i.a.parse(location.search.substr(1)),o=s.index,r=[{name:"有赞",icon:"icon-home",href:"index.html"},{name:"分类",icon:"icon-category",href:"category.html"},{name:"购物车",icon:"icon-cart",href:"cart.html"},{name:"我",icon:"icon-user",href:"member.html"}];n.default={data:function(){return{navConfig:r,curIndex:parseInt(o)||0}},methods:{changNav:function(t,n){location.href=t.href+"?index="+n}}}},7:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a(21),i=a.n(e),s=a(9);a.n(s);n.default={name:"swipe",props:["lists","name"],created:function(){},mounted:function(){new i.a(".swiper-container",{loop:!0,autoplay:2e3,pagination:".swiper-pagination"})}}},8:function(t,n){},89:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a(18),i=(a.n(e),a(58)),s=(a.n(i),a(0)),o=a(1),r=a.n(o),c=a(2),u=a(3);new s.default({el:"#app",data:{topLists:null,topIndex:0,subData:null,rankData:null},created:function(){this.getTopList(),this.getSubList(0)},methods:{getTopList:function(){var t=this;r.a.post(c.a.topList).then(function(n){console.log(n),t.topLists=n.data.lists}).catch(function(t){new Error(t)})},getSubList:function(t,n){var a=this;this.topIndex=t,0===t?this.getRank():r.a.post(c.a.subList,{id:n}).then(function(t){a.subData=t.data.data}).catch(function(t){new Error(t)})},getRank:function(){var t=this;r.a.post(c.a.rank).then(function(n){t.rankData=n.data.data}).catch(function(t){new Error(t)})},toSearch:function(t){location.href="search.html?keyword="+t.name+"&id="+t.id}},mixins:[u.a]})},9:function(t,n){}},[89]);
//# sourceMappingURL=category.38dfe5c66a8831b4578f.js.map