(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e721d3f"],{"0459":function(t,e,n){t.exports=n.p+"img/banner1.70dfebf1.jpg"},"11e9":function(t,e,n){var r=n("52a7"),a=n("4630"),c=n("6821"),i=n("6a99"),s=n("69a8"),o=n("c69a"),f=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?f:function(t,e){if(t=c(t),e=i(e,!0),o)try{return f(t,e)}catch(n){}if(s(t,e))return a(!r.f.call(t,e),t[e])}},1385:function(t,e,n){"use strict";var r=n("f33b"),a=n.n(r);a.a},"25d0":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"recommend"},[n("Banner",{staticClass:"banner"}),t._l(t.newsList,function(t,e){return n("Article",{key:e,staticClass:"article",attrs:{src:t.News_images,title:t.News_title,count:t.News_count}})})],2)},a=[],c=n("84af"),i=n("3e3e"),s=n("41f1"),o={name:"Science",mixins:[s["a"]],components:{Banner:c["a"],Article:i["a"]}},f=o,u=(n("35b8"),n("2877")),l=Object(u["a"])(f,r,a,!1,null,"83f3e77c",null);e["default"]=l.exports},"35b8":function(t,e,n){"use strict";var r=n("6bc5"),a=n.n(r);a.a},"3e3e":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{staticClass:"article flex content-between",attrs:{to:{path:"/detail",query:{cate:t.cate,name:t.content}},tag:"div"}},[n("div",{staticClass:"left flex"},[n("img",{staticClass:"img",attrs:{src:t.src,alt:t.alt}})]),n("div",{staticClass:"right flex-a flex column content-between"},[n("em",{staticClass:"title"},[t._v(t._s(t.title))]),n("div",{staticClass:"bottom flex content-between"},[n("div",{staticClass:"answer"},[t._v("问答")]),n("div",{staticClass:"comment flex items-center"},[n("i",{staticClass:"icon"}),n("p",[t._v(t._s(t.count))])])])])])},a=[],c=(n("c5f6"),{name:"Article",props:{src:{type:String,default:""},alt:{type:String,default:"图片"},title:{type:String,default:""},content:{type:String,default:""},cate:{type:String,default:""},count:{type:[String,Number],default:0}}}),i=c,s=(n("1385"),n("2877")),o=Object(s["a"])(i,r,a,!1,null,"04cfb22a",null);e["a"]=o.exports},"41f1":function(t,e,n){"use strict";e["a"]={data:function(){return{bannerList:[],newsList:[]}},created:function(){this.getInfo()},methods:{getInfo:function(){var t=this;this.$http([this.getBannerInfo(),this.getList()]).then(function(e){t.bannerList=e[0],t.newsList=e[1]})},getBannerInfo:function(){var t=this.$path.get_banner;return this.$http(t).then(function(t){return t})},getList:function(){var t=this.$path.list;return t.params={cate:this.$route.meta.cate},this.$http(t).then(function(t){var e=t.code,n=t.data;return"0"===e?n:t})}}}},"5dbc":function(t,e,n){var r=n("d3f4"),a=n("8b97").set;t.exports=function(t,e,n){var c,i=e.constructor;return i!==n&&"function"==typeof i&&(c=i.prototype)!==n.prototype&&r(c)&&a&&a(t,c),t}},"641d":function(t,e,n){"use strict";var r=n("eff4"),a=n.n(r);a.a},"6bc5":function(t,e,n){},"84af":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"banner flex"},[r("img",{staticClass:"img flex-a",attrs:{src:n("0459"),alt:"banner1"}})])}],c={name:"Banner",components:{}},i=c,s=(n("641d"),n("2877")),o=Object(s["a"])(i,r,a,!1,null,"0b465dac",null);e["a"]=o.exports},"8b97":function(t,e,n){var r=n("d3f4"),a=n("cb7c"),c=function(t,e){if(a(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(a){e=!0}return function(t,n){return c(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:c}},9093:function(t,e,n){var r=n("ce10"),a=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,a)}},aa77:function(t,e,n){var r=n("5ca1"),a=n("be13"),c=n("79e5"),i=n("fdef"),s="["+i+"]",o="​",f=RegExp("^"+s+s+"*"),u=RegExp(s+s+"*$"),l=function(t,e,n){var a={},s=c(function(){return!!i[t]()||o[t]()!=o}),f=a[t]=s?e(p):i[t];n&&(a[n]=f),r(r.P+r.F*s,"String",a)},p=l.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(u,"")),t};t.exports=l},c5f6:function(t,e,n){"use strict";var r=n("7726"),a=n("69a8"),c=n("2d95"),i=n("5dbc"),s=n("6a99"),o=n("79e5"),f=n("9093").f,u=n("11e9").f,l=n("86cc").f,p=n("aa77").trim,b="Number",d=r[b],h=d,v=d.prototype,_=c(n("2aeb")(v))==b,g="trim"in String.prototype,m=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){e=g?e.trim():p(e,3);var n,r,a,c=e.charCodeAt(0);if(43===c||45===c){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+e}for(var i,o=e.slice(2),f=0,u=o.length;f<u;f++)if(i=o.charCodeAt(f),i<48||i>a)return NaN;return parseInt(o,r)}}return+e};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof d&&(_?o(function(){v.valueOf.call(n)}):c(n)!=b)?i(new h(m(e)),n,d):m(e)};for(var y,N=n("9e1e")?f(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;N.length>I;I++)a(h,y=N[I])&&!a(d,y)&&l(d,y,u(h,y));d.prototype=v,v.constructor=d,n("2aba")(r,b,d)}},eff4:function(t,e,n){},f33b:function(t,e,n){},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-6e721d3f.9e07aef9.js.map