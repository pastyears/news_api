(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fdc63dd8"],{"0418":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header flex"},[n("div",{staticClass:"back flex items-center",on:{click:t.goBack}},[n("i",{staticClass:"icon"}),n("span",[t._v("返回")])]),n("div",{staticClass:"title flex-a"},[t._v("\n    "+t._s(t.title)+"\n  ")])])},r=[],c={name:"Header",props:{title:{type:String,default:""}},methods:{goBack:function(){this.$router.back()}}},s=c,i=(n("a2c4"),n("2877")),o=Object(i["a"])(s,a,r,!1,null,"1ab360a6",null);e["a"]=o.exports},"06f6":function(t,e,n){},"0b70":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hot"},[n("Header",{attrs:{title:"热门"}}),n("div",{staticClass:"content"},t._l(20,function(t,e){return n("Article",{key:e,staticClass:"article"})}),1),n("Footer")],1)},r=[],c=n("0418"),s=n("fd2d"),i=n("3e3e"),o={name:"Hot",components:{Header:c["a"],Footer:s["a"],Article:i["a"]}},l=o,f=(n("ad00"),n("2877")),u=Object(f["a"])(l,a,r,!1,null,"36b9638d",null);e["default"]=u.exports},"11e9":function(t,e,n){var a=n("52a7"),r=n("4630"),c=n("6821"),s=n("6a99"),i=n("69a8"),o=n("c69a"),l=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?l:function(t,e){if(t=c(t),e=s(e,!0),o)try{return l(t,e)}catch(n){}if(i(t,e))return r(!a.f.call(t,e),t[e])}},"3e3e":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{staticClass:"article flex content-between",attrs:{to:"/",tag:"div"}},[n("div",{staticClass:"left flex"},[n("img",{staticClass:"img",attrs:{src:t.src,alt:t.alt}})]),n("div",{staticClass:"right flex-a flex column content-between"},[n("em",{staticClass:"title"},[t._v(t._s(t.title))]),n("div",{staticClass:"bottom flex content-between"},[n("div",{staticClass:"answer"},[t._v("问答")]),n("div",{staticClass:"comment flex items-center"},[n("i",{staticClass:"icon"}),n("p",[t._v(t._s(t.count))])])])])])},r=[],c=(n("c5f6"),{name:"Article",props:{src:{type:String,default:""},alt:{type:String,default:"图片"},title:{type:String,default:"为什么程序员用的都是Mac？"},count:{type:[String,Number],default:0}}}),s=c,i=(n("7c0e"),n("2877")),o=Object(i["a"])(s,a,r,!1,null,"7058aa76",null);e["a"]=o.exports},"5dbc":function(t,e,n){var a=n("d3f4"),r=n("8b97").set;t.exports=function(t,e,n){var c,s=e.constructor;return s!==n&&"function"==typeof s&&(c=s.prototype)!==n.prototype&&a(c)&&r&&r(t,c),t}},"666c":function(t,e,n){},"7c0e":function(t,e,n){"use strict";var a=n("666c"),r=n.n(a);r.a},"8b97":function(t,e,n){var a=n("d3f4"),r=n("cb7c"),c=function(t,e){if(r(t),!a(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,a){try{a=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),a(t,[]),e=!(t instanceof Array)}catch(r){e=!0}return function(t,n){return c(t,n),e?t.__proto__=n:a(t,n),t}}({},!1):void 0),check:c}},9093:function(t,e,n){var a=n("ce10"),r=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return a(t,r)}},a2c4:function(t,e,n){"use strict";var a=n("06f6"),r=n.n(a);r.a},aa77:function(t,e,n){var a=n("5ca1"),r=n("be13"),c=n("79e5"),s=n("fdef"),i="["+s+"]",o="​",l=RegExp("^"+i+i+"*"),f=RegExp(i+i+"*$"),u=function(t,e,n){var r={},i=c(function(){return!!s[t]()||o[t]()!=o}),l=r[t]=i?e(p):s[t];n&&(r[n]=l),a(a.P+a.F*i,"String",r)},p=u.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(f,"")),t};t.exports=u},ad00:function(t,e,n){"use strict";var a=n("d98d"),r=n.n(a);r.a},c5f6:function(t,e,n){"use strict";var a=n("7726"),r=n("69a8"),c=n("2d95"),s=n("5dbc"),i=n("6a99"),o=n("79e5"),l=n("9093").f,f=n("11e9").f,u=n("86cc").f,p=n("aa77").trim,d="Number",v=a[d],_=v,m=v.prototype,b=c(n("2aeb")(m))==d,C="trim"in String.prototype,h=function(t){var e=i(t,!1);if("string"==typeof e&&e.length>2){e=C?e.trim():p(e,3);var n,a,r,c=e.charCodeAt(0);if(43===c||45===c){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+e}for(var s,o=e.slice(2),l=0,f=o.length;l<f;l++)if(s=o.charCodeAt(l),s<48||s>r)return NaN;return parseInt(o,a)}}return+e};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof v&&(b?o(function(){m.valueOf.call(n)}):c(n)!=d)?s(new _(h(e)),n,v):h(e)};for(var g,x=n("9e1e")?l(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;x.length>y;y++)r(_,g=x[y])&&!r(v,g)&&u(v,g,f(_,g));v.prototype=m,m.constructor=v,n("2aba")(a,d,v)}},d98d:function(t,e,n){},ea7d:function(t,e,n){"use strict";var a=n("ff61"),r=n.n(a);r.a},fd2d:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer flex items-center content-around"},[n("div",{staticClass:"home"},[n("router-link",{staticClass:"link flex column",attrs:{to:"/home"}},[n("i",{staticClass:"icon"}),n("span",[t._v("首页")])])],1),n("div",{staticClass:"hot"},[n("router-link",{staticClass:"link flex column",attrs:{to:"/hot"}},[n("i",{staticClass:"icon"}),n("span",[t._v("热门")])])],1),n("div",{staticClass:"discover"},[n("router-link",{staticClass:"link flex column",attrs:{to:"/discover"}},[n("i",{staticClass:"icon"}),n("span",[t._v("发现")])])],1),n("div",{staticClass:"mine"},[n("router-link",{staticClass:"link flex column",attrs:{to:"/mine"}},[n("i",{staticClass:"icon"}),n("span",[t._v("我的")])])],1)])},r=[],c={name:"Footer",components:{}},s=c,i=(n("ea7d"),n("2877")),o=Object(i["a"])(s,a,r,!1,null,"0ea0beac",null);e["a"]=o.exports},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},ff61:function(t,e,n){}}]);
//# sourceMappingURL=chunk-fdc63dd8.b8c98697.js.map