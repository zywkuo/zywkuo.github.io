"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8333],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=i(r),f=a,y=m["".concat(s,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(y,l(l({ref:t},p),{},{components:r})):n.createElement(y,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2111:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const o={title:"qs \u5e8f\u5217\u5316\u6570\u636e\u4f7f\u7528",date:new Date("2019-12-11T00:00:00.000Z"),categories:"qs",tags:["qs"]},l=void 0,c={permalink:"/blog/2019/12/11/qs",source:"@site/blog/2019-12-11-qs.md",title:"qs \u5e8f\u5217\u5316\u6570\u636e\u4f7f\u7528",description:"React\u3001Vue\u5728\u63a5\u53e3\u83b7\u53d6\u4f20\u8f93\u6570\u636e\u4f7f\u7528qs\u8fdb\u884c\u6570\u636e\u5e8f\u5217\u5316\u9047\u5230\u95ee\u9898\uff0c\u540e\u53f0\u67e5\u8be2\u5217\u8868\u9700\u8981\u62fc\u63a5\u5e26\u2019.\u2018\u7684\u53c2\u6570\u3002",date:"2019-12-11T00:00:00.000Z",formattedDate:"2019\u5e7412\u670811\u65e5",tags:[{label:"qs",permalink:"/blog/tags/qs"}],readingTime:.35,hasTruncateMarker:!1,authors:[],frontMatter:{title:"qs \u5e8f\u5217\u5316\u6570\u636e\u4f7f\u7528",date:"2019-12-11T00:00:00.000Z",categories:"qs",tags:["qs"]},prevItem:{title:"koa+mysql",permalink:"/blog/2020/07/14/koa+mysql"},nextItem:{title:"Docker\u79bb\u7ebf\u5b89\u88c5Nginx\u955c\u50cf",permalink:"/blog/2019/8/13/DockerNginx"}},s={authorsImageUrls:[]},i=[],p={toc:i};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"React\u3001Vue\u5728\u63a5\u53e3\u83b7\u53d6\u4f20\u8f93\u6570\u636e\u4f7f\u7528qs\u8fdb\u884c\u6570\u636e\u5e8f\u5217\u5316\u9047\u5230\u95ee\u9898\uff0c\u540e\u53f0\u67e5\u8be2\u5217\u8868\u9700\u8981\u62fc\u63a5\u5e26\u2019.\u2018\u7684\u53c2\u6570\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u53c2\u6570\u4e2d\u5b58\u5728\u2019.\u2018\u9700\u8981\u6dfb\u52a0allowDots\u5c5e\u6027,\u5141\u8bb8 dots\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"qs.stringify(params, {allowDots: true})\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ljharb/qs"},"qs\u53c2\u8003\u5730\u5740 https://github.com/ljharb/qs")))}u.isMDXComponent=!0}}]);