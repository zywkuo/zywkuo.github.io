"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[711],{49613:(e,a,t)=>{t.d(a,{Zo:()=>k,kt:()=>u});var n=t(59496);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var m=n.createContext({}),p=function(e){var a=n.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},k=function(e){var a=p(e.components);return n.createElement(m.Provider,{value:a},e.children)},o={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,l=e.originalType,m=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),c=p(t),u=s,d=c["".concat(m,".").concat(u)]||c[u]||o[u]||l;return t?n.createElement(d,r(r({ref:a},k),{},{components:t})):n.createElement(d,r({ref:a},k))}));function u(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var l=t.length,r=new Array(l);r[0]=c;var i={};for(var m in a)hasOwnProperty.call(a,m)&&(i[m]=a[m]);i.originalType=e,i.mdxType="string"==typeof e?e:s,r[1]=i;for(var p=2;p<l;p++)r[p]=t[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},93100:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>r,default:()=>o,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=t(62081),s=(t(59496),t(49613));const l={title:"var() and mask",date:new Date("2018-10-19T00:00:00.000Z"),categories:"css",tags:["var","mask"]},r=void 0,i={permalink:"/blog/2018/10/19/cssstudy",source:"@site/blog/2018-10-19-cssstudy/index.md",title:"var() and mask",description:"\u7a7a\u95f2\u65f6\u95f4\u770b\u5230\u4fe9CSS\uff0cvar()\u3001mask \u6ca1\u9047\u5230\u8fc7\uff0c\u6bd4\u8f83\u597d\u5947\uff0c\u5b66\u4e60\u4e00\u4e0b\u3002",date:"2018-10-19T00:00:00.000Z",formattedDate:"2018\u5e7410\u670819\u65e5",tags:[{label:"var",permalink:"/blog/tags/var"},{label:"mask",permalink:"/blog/tags/mask"}],readingTime:8.205,hasTruncateMarker:!1,authors:[],frontMatter:{title:"var() and mask",date:"2018-10-19T00:00:00.000Z",categories:"css",tags:["var","mask"]},prevItem:{title:"radio\u3001checkbox \u81ea\u5b9a\u4e49\u6837\u5f0f",permalink:"/blog/2018/11/16/radioCheckbox"},nextItem:{title:"CSS \u7f51\u683c\u5e03\u5c40(Grid Layout)",permalink:"/blog/2018/10/17/grid"}},m={authorsImageUrls:[]},p=[{value:"mask-image",id:"mask-image",level:2},{value:"mask-repeat",id:"mask-repeat",level:2},{value:"mask-position",id:"mask-position",level:2},{value:"mask-clip",id:"mask-clip",level:2},{value:"mask-origin",id:"mask-origin",level:2},{value:"mask-size",id:"mask-size",level:2},{value:"mask-type",id:"mask-type",level:2},{value:"mask-composite",id:"mask-composite",level:2},{value:"mask-mode",id:"mask-mode",level:2}],k={toc:p};function o(e){let{components:a,...l}=e;return(0,s.kt)("wrapper",(0,n.Z)({},k,l,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"\u7a7a\u95f2\u65f6\u95f4\u770b\u5230\u4fe9CSS\uff0cvar()\u3001mask \u6ca1\u9047\u5230\u8fc7\uff0c\u6bd4\u8f83\u597d\u5947\uff0c\u5b66\u4e60\u4e00\u4e0b\u3002"),(0,s.kt)("h1",{id:"css\u53d8\u91cfvar\u8bed\u6cd5"},"CSS\u53d8\u91cfvar()\u8bed\u6cd5"),(0,s.kt)("p",null,"\u4e0a\u6765\u5148\u770b\u770b\u662f\u600e\u4e48\u5199\u7684\uff0c\u6211\u5c31\u662f\u88ab\u8fd9\u60ca\u5947\u7684\u5199\u6cd5\u5438\u5f15\u5230\u4e86\u3002"),(0,s.kt)("p",{"data-height":"265","data-theme-id":"0","data-slug-hash":"EdLmJj","data-default-tab":"css,result","data-user":"zywkuo","data-pen-title":"var()",class:"codepen"},"See the Pen ",(0,s.kt)("a",{href:"https://codepen.io/zywkuo/pen/EdLmJj/"},"var()")," by \u5468\u8273\u4f1f (",(0,s.kt)("a",{href:"https://codepen.io/zywkuo"},"@zywkuo"),") on ",(0,s.kt)("a",{href:"https://codepen.io"},"CodePen"),"."),(0,s.kt)("script",{async:!0,src:"https://static.codepen.io/assets/embed/ei.js"}),(0,s.kt)("p",null,"var \u54c7 css\u600e\u4e48\u7528\u5230\u4e86var\uff0c\u4ec0\u4e48\u9b3c\u3002"),(0,s.kt)("p",null,"\u539f\u6765\u8fd9\u662fcss\u539f\u751f\u7684\u53d8\u91cf\uff0cCSS\u4e2d\u539f\u751f\u7684\u53d8\u91cf\u5b9a\u4e49\u8bed\u6cd5\u662f\uff1a--",(0,s.kt)("em",{parentName:"p"},"\uff0c\u53d8\u91cf\u4f7f\u7528\u8bed\u6cd5\u662f\uff1avar(--"),")\uff0c\u5176\u4e2d*\u8868\u793a\u6211\u4eec\u7684\u53d8\u91cf\u540d\u79f0\u3002\u5173\u4e8e\u547d\u540d\u8fd9\u4e2a\u4e1c\u897f\uff0c\u5404\u79cd\u8bed\u8a00\u90fd\u6709\u4e9b\u663e\u793a\uff0c\u4f8b\u5982CSS\u9009\u62e9\u5668\u4e0d\u80fd\u662f\u6570\u5b57\u5f00\u5934\uff0cJS\u4e2d\u7684\u53d8\u91cf\u662f\u4e0d\u80fd\u76f4\u63a5\u6570\u503c\u7684\uff0c\u4f46\u662f\uff0c\u5728CSS\u53d8\u91cf\u4e2d\uff0c\u8fd9\u4e9b\u9650\u5236\u901a\u901a\u6ca1\u6709"),(0,s.kt)("p",null,"\u4f46\u662f\uff0c\u4e0d\u80fd\u5305\u542b$\uff0c[\uff0c^\uff0c(\uff0c%\u7b49\u5b57\u7b26\uff0c\u666e\u901a\u5b57\u7b26\u5c40\u9650\u5728\u53ea\u8981\u662f\u201c\u6570\u5b57","[0-9]","\u201d\u201c\u5b57\u6bcd","[a-zA-Z]","\u201d\u201c\u4e0b\u5212\u7ebf_\u201d\u548c\u201c\u77ed\u6a2a\u7ebf-\u201d\u8fd9\u4e9b\u7ec4\u5408\uff0c\u4f46\u662f\u53ef\u4ee5\u662f\u4e2d\u6587\uff0c\u65e5\u6587\u6216\u8005\u97e9\u6587\u3002"),(0,s.kt)("p",null,"\u770b\u4e00\u4e0b\u517c\u5bb9\u6027 ",(0,s.kt)("img",{src:t(67089).Z,width:"2534",height:"1036"})),(0,s.kt)("p",null,"\u6211\u4eec\u5e7f\u5927\u7684\u733f\u53cb\u4eec\uff0c\u52aa\u52aa\u529b\u5427IE\u5e72\u6389\u5427\u3002"),(0,s.kt)("p",null,"\u6709\u60f3\u4e86\u89e3\u66f4\u591a\u7684\uff0c\u8bf7\u6765\u5f20\u946b\u65ed\uff0c\u5f20\u5927\u5927\u7a7a\u95f4\uff0c\u770b\u770b\u4ed6\u7684\u8fd9\u7bc7\u6587\u7ae0",(0,s.kt)("a",{parentName:"p",href:"https://www.zhangxinxu.com/wordpress/2016/11/css-css3-variables-var/"},"https://www.zhangxinxu.com/wordpress/2016/11/css-css3-variables-var/")),(0,s.kt)("p",null," ",(0,s.kt)("inlineCode",{parentName:"p"},"\u58f0\u660e\u4e00\u4e0b\uff0c\u4e0a\u9762\u548c\u4e0b\u9762\u4e00\u70b9\u5173\u7cfb\u90fd\u6ca1\u6709\uff0c\u53ea\u662f\u540c\u65f6\u770b\u5230\u4e86\uff0c\u5c31\u4e00\u8d77\u5b66\u4e60\u4e00\u4e0b\u3002")),(0,s.kt)("h1",{id:"mask"},"mask"),(0,s.kt)("p",null,"\u906e\u7f69mask\u7684\u529f\u80fd\u5c31\u662f\u4f7f\u7528\u900f\u660e\u7684\u56fe\u7247\u6216\u6e10\u53d8\u906e\u7f69\u5143\u7d20\u7684\u80cc\u666f.\n\u6211\u7528\u6211\u7684\u5927\u767d\u8bdd\u7406\u89e3\u4e00\u4e0b\uff0c\u5c31\u662f\u628a\u56fe\u7247\u7684\u900f\u660e\u5904\u53d8\u4e3a\u4e0d\u900f\u660e\uff0c\u4e0d\u900f\u660e\u7684\u5730\u65b9\u53d8\u6210\u900f\u660e\u3002\uff08\u5982\u6709\u9519\u8bef\uff0c\u6b22\u8fce\u6307\u6b63\u3002\uff09\u6240\u4ee5jpg\u7684\u8fd8\u662f\u5c31\u7b97\u4e86\u5427\uff0c\u653e\u4e86\u4e5f\u662f\u5168\u900f\u660e\uff0c\u6ca1\u4ec0\u4e48\u6548\u679c\uff0c\u5f00\u59cb\u6211\u653e\u4e86jpg\u7684\uff0c\u627e\u4e86\u534a\u5929\u539f\u56e0\u3002"),(0,s.kt)("p",null,"\u906e\u7f69mask\u662f\u4e00\u4e2a\u590d\u5408\u5c5e\u6027"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"mask-image"),(0,s.kt)("li",{parentName:"ul"},"mask-mode"),(0,s.kt)("li",{parentName:"ul"},"mask-repeat"),(0,s.kt)("li",{parentName:"ul"},"mask-position"),(0,s.kt)("li",{parentName:"ul"},"mask-clip"),(0,s.kt)("li",{parentName:"ul"},"mask-origin"),(0,s.kt)("li",{parentName:"ul"},"mask-size"),(0,s.kt)("li",{parentName:"ul"},"mask-type"),(0,s.kt)("li",{parentName:"ul"},"mask-composite")),(0,s.kt)("h2",{id:"mask-image"},"mask-image"),(0,s.kt)("p",null,"\u9ed8\u8ba4\u503c\u4e3anone\uff0c\u503c\u4e3a\u900f\u660e\u56fe\u7247\uff0c\u6216\u900f\u660e\u6e10\u53d8\nmask-image\u906e\u7f69\u6240\u652f\u6301\u7684\u56fe\u7247\u7c7b\u578b\u975e\u5e38\u7684\u5e7f\u6cdb\uff0c\u53ef\u4ee5\u662furl()\u9759\u6001\u56fe\u7247\u8d44\u6e90\uff0c\u683c\u5f0f\u5305\u62ecJPG\uff0cPNG\u4ee5\u53caSVG\u7b49\u90fd\u662f\u652f\u6301\u7684\uff1b\u4e5f\u53ef\u4ee5\u662f\u52a8\u6001\u751f\u6210\u7684\u56fe\u7247\uff0c\u4f8b\u5982\u4f7f\u7528\u5404\u79cdCSS3\u6e10\u53d8\u7ed8\u5236\u7684\u56fe\u7247\u3002\u8bed\u6cd5\u4e0a\u652f\u6301CSS3\u5404\u7c7b\u6e10\u53d8\uff0c\u4ee5\u53caurl()\u529f\u80fd\u7b26\uff0cimage()\u529f\u80fd\u7b26\uff0c\u751a\u81f3element()\u529f\u80fd\u7b26\u3002\u540c\u65f6\u8fd8\u652f\u6301\u591a\u80cc\u666f\uff0c\u56e0\u6b64\u7406\u8bba\u4e0a\uff0c\u4f7f\u7528mask-image\u6211\u4eec\u53ef\u4ee5\u906e\u7f69\u51fa\u4efb\u610f\u6211\u4eec\u60f3\u8981\u7684\u56fe\u5f62\uff0c\u975e\u5e38\u5f3a\u5927\u3002"),(0,s.kt)("p",null,"html"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'<img src="1.jpg" alt="" class="mask">\n')),(0,s.kt)("p",null,"1.jpg\u56fe\u7247\u662f\u8fd9\u4e2a\n",(0,s.kt)("img",{src:t(62717).Z,width:"300",height:"179"})),(0,s.kt)("p",null,"\u653e\u4e0a\u8fd9\u6bb5css"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},".mask {\n    width: 600px;\n    -webkit-mask-image: url(3.svg);\n    mask-image: url(3.svg);\n}\n")),(0,s.kt)("p",null,"3.svg\u957f\u8fd9\u6837\n",(0,s.kt)("img",{src:t(8447).Z,width:"80",height:"80"})),(0,s.kt)("p",null,"\u8fd0\u884c\u7ed3\u679c\u8fd9\u6837\n",(0,s.kt)("img",{src:t(52138).Z,width:"300",height:"179"})),(0,s.kt)("h2",{id:"mask-repeat"},"mask-repeat"),(0,s.kt)("p",null,"mask-repeat\u5c5e\u6027\u7684\u9ed8\u8ba4\u503c\u662frepeat\uff0c\u884c\u4e3a\u7c7b\u4f3c\u4e8ebackground-repeat\u5c5e\u6027\u3002"),(0,s.kt)("p",null,"\u5c5e\u6027"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"mask-repeat: repeat-x;      //\u6c34\u5e73x\u5e73\u94fa\nmask-repeat: repeat-y;      //\u5782\u76f4y\u5e73\u94fa\u3002\nmask-repeat: repeat;        //\u9ed8\u8ba4\u503c\uff0c\u6c34\u5e73\u548c\u5782\u76f4\u5e73\u94fa\u3002\nmask-repeat: no-repeat;     //\u4e0d\u5e73\u94fa\nmask-repeat: space;         //\u8868\u793a\u906e\u7f69\u56fe\u7247\u5c3d\u53ef\u80fd\u7684\u5e73\u94fa\u540c\u65f6\u4e0d\u53d1\u751f\u4efb\u4f55\u526a\u88c1\u3002\nmask-repeat: round;         //\u8868\u793a\u906e\u7f69\u56fe\u7247\u5c3d\u53ef\u80fd\u9760\u5728\u4e00\u8d77\u6ca1\u6709\u4efb\u4f55\u95f4\u9699\uff0c\u540c\u65f6\u4e0d\u53d1\u751f\u4efb\u4f55\u526a\u88c1\u3002\n")),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(95197).Z,width:"600",height:"387"})),(0,s.kt)("h2",{id:"mask-position"},"mask-position"),(0,s.kt)("p",null,"mask-position\u548cbackground-position\u652f\u6301\u7684\u5c5e\u6027\u503c\u548c\u8868\u73b0\u57fa\u672c\u4e0a\u90fd\u662f\u4e00\u6a21\u4e00\u6837\u7684\u3002\n\u4f8b\u5982,mask-position\u9ed8\u8ba4\u8ba1\u7b97\u503c\u662f0% 0%\uff0c\u4e5f\u5c31\u662f\u76f8\u5bf9\u5de6\u4e0a\u89d2\u5b9a\u4f4d\u3002"),(0,s.kt)("p",null,"\u652f\u6301\u5355\u4e2a\u5173\u952e\u5b57\uff08\u7f3a\u7701\u5173\u952e\u5b57\u7684\u89e3\u6790\u4e3acenter\uff09\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"mask-position: top;\nmask-position: bottom;\nmask-position: left;\nmask-position: right;\nmask-position: center;\n")),(0,s.kt)("p",null,"\u652f\u6301\u5782\u76f4\u548c\u6c34\u5e73\u65b9\u5411\u4e24\u4e2a\u5173\u952e\u5b57\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"mask-position: right top;\n")),(0,s.kt)("p",null,"\u652f\u6301\u5404\u7c7b\u6570\u503c\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"mask-position: 30% 50%;<\nmask-position: 10px 5rem;\n")),(0,s.kt)("p",null,"\u7531\u4e8emask-image\u652f\u6301\u591a\u906e\u7f69\u56fe\u7247\uff0c\u56e0\u6b64\uff0cmask-position\u4e5f\u652f\u6301\u591a\u5c5e\u6027\u503c\uff0c\u4f8b\u5982\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"mask-position: 0 0, center;\n")),(0,s.kt)("p",null,"\u8fd9\u4e2a\u6211\u5c31\u4e0d\u5177\u4f53\u4e0a\u56fe\u7247\u4e86\uff0c\u60f3\u5fc5\u5927\u5bb6\u90fd\u61c2\u4e86\u3002\n\u60f3\u770b\u7684\u8bf7\u8df3\u5230\u5f20\u5927\u5927\u8fd9\u91cc\u770b\u4e00\u4e0b\u5427\uff0c",(0,s.kt)("a",{parentName:"p",href:"https://www.zhangxinxu.com/study/201711/mask-position-png.html"},"https://www.zhangxinxu.com/study/201711/mask-position-png.html")),(0,s.kt)("h2",{id:"mask-clip"},"mask-clip"),(0,s.kt)("p",null,"mask-clip\u5c5e\u6027\u6027\u8d28\u4e0a\u548cbackground-clip\u7c7b\u4f3c\uff0c\u4f46\u662fmask-clip\u652f\u6301\u7684\u5c5e\u6027\u503c\u8981\u591a\u4e00\u70b9\uff0c\u4e3b\u8981\u662f\u591a\u4e86\u4e2aSVG\u5143\u7d20\u7684mask-clip\u652f\u6301\u3002"),(0,s.kt)("p",null,"\u5c5e\u6027\u503c"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"mask-clip: content-box;\nmask-clip: padding-box;\nmask-clip: border-box;\nmask-clip: fill-box;\nmask-clip: stroke-box;\nmask-clip: view-box;\nmask-clip: no-clip;\n")),(0,s.kt)("p",null,"\u5176\u4e2d\u9ed8\u8ba4\u503c\u662fborder-box\u548cbackground-clip\u7c7b\u4f3c\u3002\u540c\u6837\u4e5f\u652f\u6301\u591a\u5c5e\u6027\u503c\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"mask-clip: content-box, border-box;\n")),(0,s.kt)("p",null,"\u8c37\u6b4c\u6d4b\u8bd5\u4e86\u4e00\u4e0b\uff0c\u5168\u5458out\uff01\uff01\uff01\uff01\uff01\uff01\u6655\n\u706b\u72d0\u4e5f\u5168\u5458out\uff0c\u4ec0\u4e48\u9b3c\uff0c\u96be\u9053\u548c\u7b14\u8bb0\u672c\u6709\u5173\uff08\u6211\u7684\u662fmac\uff09..\u8fd9\u4e2a\u8fd8\u6709\u5f85\u6d4b\u8bd5\u3002"),(0,s.kt)("h2",{id:"mask-origin"},"mask-origin"),(0,s.kt)("p",null,"\u5c5e\u6027\u503c"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"mask-origin: content-box;\nmask-origin: padding-box;\nmask-origin: border-box;\nmask-origin: fill-box;\nmask-origin: stroke-box;\nmask-origin: view-box;\n")),(0,s.kt)("p",null,"\u5176\u4e2d\u9ed8\u8ba4\u503c\u662fborder-box\u548cbackground-origin\u7c7b\u4f3c\u3002\u540c\u6837\u4e5f\u652f\u6301\u591a\u5c5e\u6027\u503c\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"mask-origin: content-box, border-box;\n")),(0,s.kt)("p",null,"\u6d4b\u8bd5\u7ed3\u679c\u4f9d\u65e7\u5168\u5458out!!!!!!"),(0,s.kt)("h2",{id:"mask-size"},"mask-size"),(0,s.kt)("p",null,"mask-size\u5c5e\u6027\u6027\u8d28\u4e0a\u548cbackground-size\u7c7b\u4f3c\uff0c\u652f\u6301\u7684\u5c5e\u6027\u503c\u4e5f\u7c7b\u4f3c\uff0c\u4f5c\u7528\u662f\u63a7\u5236\u906e\u7f69\u56fe\u7247\u5c3a\u5bf8\u3002"),(0,s.kt)("p",null,"\u9ed8\u8ba4\u503c\u662fauto."),(0,s.kt)("p",null,"\u5c5e\u6027\u503c"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"mask-size: cover;\nmask-size: contain;\n")),(0,s.kt)("p",null,"\u652f\u6301\u5404\u7c7b\u6570\u503c\uff08\u7f3a\u7701\u9ad8\u5ea6\u4f1a\u81ea\u52a8\u8ba1\u7b97\u4e3aauto\uff09\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"mask-size: 50%;\nmask-size: 3em;\nmask-size: 12px;\n\nmask-size: 50% auto;\nmask-size: 3em 25%;\nmask-size: auto 6px;\n")),(0,s.kt)("p",null,"\u540c\u6837\u652f\u6301\u591a\u5c5e\u6027\u503c\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"mask-size: 50%, 25%, 25%;\nmask-size: 6px, auto, contain;\n")),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(66383).Z,width:"1992",height:"636"})),(0,s.kt)("h2",{id:"mask-type"},"mask-type"),(0,s.kt)("p",null,"mask-type\u5c5e\u6027\u529f\u80fd\u4e0a\u548cmask-mode\u7c7b\u4f3c\uff0c\u90fd\u662f\u8bbe\u7f6e\u4e0d\u540c\u7684\u906e\u7f69\u6a21\u5f0f\u3002\u4f46\u8fd8\u662f\u6709\u4e2a\u5f88\u5927\u7684\u533a\u522b\uff0c\u90a3\u5c31\u662fmask-type\u53ea\u80fd\u4f5c\u7528\u5728SVG\u5143\u7d20\u4e0a\uff0c\u672c\u8d28\u4e0a\u662f\u7531SVG\u5c5e\u6027\u6f14\u53d8\u800c\u6765\uff0c\u56e0\u6b64\uff0cChrome\u7b49\u6d4f\u89c8\u5668\u90fd\u662f\u652f\u6301\u7684\u3002\u4f46\u662fmask-mode\u662f\u4e00\u4e2a\u9488\u5bf9\u6240\u6709\u5143\u7d20\u7684CSS3\u5c5e\u6027\uff0cChrome\u7b49\u6d4f\u89c8\u5668\u5e76\u4e0d\u652f\u6301\uff0c\u76ee\u524d\u4ec5Firefox\u6d4f\u89c8\u5668\u652f\u6301\u3002"),(0,s.kt)("p",null,"\u7531\u4e8e\u53ea\u80fd\u4f5c\u7528\u5728SVG\u5143\u7d20\u4e0a\uff0c\u56e0\u6b64\u9ed8\u8ba4\u503c\u8868\u73b0\u4e3aSVG\u5143\u7d20\u9ed8\u8ba4\u906e\u7f69\u6a21\u5f0f\uff0c\u4e5f\u5c31\u662f\u9ed8\u8ba4\u503c\u662fluminance\uff0c\u4eae\u5ea6\u906e\u7f69\u6a21\u5f0f\u3002\u5982\u679c\u9700\u8981\u652f\u6301\u900f\u660e\u5ea6\u906e\u7f69\u6a21\u5f0f\uff0c\u53ef\u4ee5\u8fd9\u4e48\u8bbe\u7f6e\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"mask-type: alpha;\n")),(0,s.kt)("h2",{id:"mask-composite"},"mask-composite"),(0,s.kt)("p",null,"mask-composite\u8868\u793a\u5f53\u540c\u65f6\u4f7f\u7528\u591a\u4e2a\u56fe\u7247\u8fdb\u884c\u906e\u7f69\u65f6\u5019\u7684\u6df7\u5408\u65b9\u5f0f"),(0,s.kt)("p",null,"\u5c5e\u6027\u503c"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"mask-composite: add;            //\u906e\u7f69\u7d2f\u52a0\u3002\nmask-composite: subtract;       //\u906e\u7f69\u76f8\u51cf\u3002\u4e5f\u5c31\u662f\u906e\u7f69\u56fe\u7247\u91cd\u5408\u7684\u5730\u65b9\u4e0d\u663e\u793a\u3002\u610f\u5473\u7740\u906e\u7f69\u56fe\u7247\u8d8a\u591a\uff0c\u906e\u7f69\u533a\u57df\u8d8a\u5c0f\u3002\nmask-composite: intersect;      //\u906e\u7f69\u76f8\u4ea4\u3002\u4e5f\u5c31\u662f\u906e\u7f69\u56fe\u7247\u91cd\u5408\u7684\u5730\u65b9\u624d\u663e\u793a\u906e\u7f69\u3002\nmask-composite: exclude;        //\u906e\u7f69\u6392\u9664\u3002\u4e5f\u5c31\u662f\u540e\u9762\u906e\u7f69\u56fe\u7247\u91cd\u5408\u7684\u5730\u65b9\u6392\u9664\uff0c\u5f53\u4f5c\u900f\u660e\u5904\u7406\u3002\n")),(0,s.kt)("p",null,"\u8fd9\u4e2a\u5c5e\u6027\u6d4f\u89c8\u5668\u652f\u6301\u4e5f\u4e0d\u662f\u5f88\u597d\u3002\u3002\u3002"),(0,s.kt)("h2",{id:"mask-mode"},"mask-mode"),(0,s.kt)("p",null,"\u9ed8\u8ba4\u503c\u4e3amatch-source\uff0c\u610f\u601d\u662f\u6839\u636e\u8d44\u6e90\u7684\u7c7b\u578b\u81ea\u52a8\u91c7\u7528\u5408\u9002\u7684\u906e\u7f69\u6a21\u5f0f\u3002"),(0,s.kt)("p",null,"mask-mode\u652f\u6301\u4e0b\u97623\u4e2a\u5c5e\u6027\u503c\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},".mask {\n    mask-mode: alpha;\n    mask-mode: luminance;\n    mask-mode: match-source;\n}\n")),(0,s.kt)("p",null,"\u56e0\u4e3amask-image\u652f\u6301\u591a\u56fe\u7247\uff0c\u56e0\u6b64mask-mode\u4e5f\u652f\u6301\u591a\u5c5e\u6027\u503c\uff0c\u4f8b\u5982\uff1a"),(0,s.kt)("p",null,"mask-mode: alpha, match-source;"),(0,s.kt)("p",null,"\u8fd9\u4e2a\u5c5e\u6027\u6d4f\u89c8\u5668\u652f\u6301\u6548\u679c\u8fd8\u4e0d\u662f\u5f88\u597d\u3002"),(0,s.kt)("p",null,"\u770b\u4e00\u4e0b\u6d4f\u89c8\u5668\u517c\u5bb9\u6027\u5427\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(54114).Z,width:"2542",height:"958"})),(0,s.kt)("p",null,"\u867d\u7136\u652f\u6301\u8fd8\u4e0d\u662f\u5f88\u597d\uff0c\u4f46\u662f\u597d\u4e1c\u897f\u4e0d\u6015\u665a\uff0c\u6b22\u8fce\u6307\u6b63\u3002"),(0,s.kt)("p",null,"\u5b66\u4e60\u7684\u662f\u5f20\u946b\u65ed\uff0c\u5f20\u5927\u5927\u7684\u8fd9\u7bc7\u6587\u7ae0",(0,s.kt)("a",{parentName:"p",href:"https://www.zhangxinxu.com/wordpress/2016/11/css-css3-variables-var/"},"https://www.zhangxinxu.com/wordpress/2016/11/css-css3-variables-var/")))}o.isMDXComponent=!0},67089:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/1-f340853ef4858b322522bde152cfa273.png"},62717:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/2-63078dd332d3f2f08fa5620a9764d8d6.png"},8447:(e,a,t)=>{t.d(a,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTlDMjk3RjlDQjk2MTFFODgxREZBNzEzMUVDRjQ2MkEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTlDMjk3RkFDQjk2MTFFODgxREZBNzEzMUVDRjQ2MkEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5OUMyOTdGN0NCOTYxMUU4ODFERkE3MTMxRUNGNDYyQSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5OUMyOTdGOENCOTYxMUU4ODFERkE3MTMxRUNGNDYyQSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pgi1SRAAAAJzUExURePj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"},52138:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/4-475dd0a55a39f7e839d9ab2bf356e246.png"},95197:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/5-872df5367963e30223082771c389ce81.png"},66383:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/6-1e1bf5a3d7069d02f744361123fa4d4c.png"},54114:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/7-69603173b97bc4e8bab8b4e6b52b314e.png"}}]);