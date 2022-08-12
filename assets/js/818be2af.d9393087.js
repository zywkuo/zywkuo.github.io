"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3394],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>y});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),i=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=i(e.components);return r.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=i(t),y=a,k=u["".concat(p,".").concat(y)]||u[y]||m[y]||l;return t?r.createElement(k,o(o({ref:n},c),{},{components:t})):r.createElement(k,o({ref:n},c))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var i=2;i<l;i++)o[i]=t[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4712:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var r=t(7462),a=(t(7294),t(3905));const l={title:"koa+mysql",date:new Date("2020-07-14T00:00:00.000Z"),categories:"js",tags:["koa","mysql"]},o=void 0,s={permalink:"/blog/2020/07/14/koa+mysql",source:"@site/blog/2020-07-14-koa+mysql/index.md",title:"koa+mysql",description:"\u597d\u4e45\u4e0d\u89c1\uff0c\u597d\u5fd9\uff0c\u524d\u6bb5\u65f6\u95f4\u642d\u4e86\u4e00\u5957electron-vue\u5ba2\u6237\u7aef\uff0c\u5c31\u60f3\u7740\u7528node\u628a\u540e\u53f0\u4e5f\u4e00\u8d77\u641e\u641e\uff0ckoa+mysql\u3002",date:"2020-07-14T00:00:00.000Z",formattedDate:"2020\u5e747\u670814\u65e5",tags:[{label:"koa",permalink:"/blog/tags/koa"},{label:"mysql",permalink:"/blog/tags/mysql"}],readingTime:3.72,hasTruncateMarker:!1,authors:[],frontMatter:{title:"koa+mysql",date:"2020-07-14T00:00:00.000Z",categories:"js",tags:["koa","mysql"]},prevItem:{title:"Hello Docusaurus",permalink:"/blog/2022/08/11/Hello Docusaurus"},nextItem:{title:"qs \u5e8f\u5217\u5316\u6570\u636e\u4f7f\u7528",permalink:"/blog/2019/12/11/qs"}},p={authorsImageUrls:[]},i=[{value:"mysql \u5b89\u88c5",id:"mysql-\u5b89\u88c5",level:2},{value:"koa \u5b89\u88c5",id:"koa-\u5b89\u88c5",level:2},{value:"koa \u8fde\u63a5 mysql",id:"koa-\u8fde\u63a5-mysql",level:2}],c={toc:i};function m(e){let{components:n,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u597d\u4e45\u4e0d\u89c1\uff0c\u597d\u5fd9\uff0c\u524d\u6bb5\u65f6\u95f4\u642d\u4e86\u4e00\u5957electron-vue\u5ba2\u6237\u7aef\uff0c\u5c31\u60f3\u7740\u7528node\u628a\u540e\u53f0\u4e5f\u4e00\u8d77\u641e\u641e\uff0ckoa+mysql\u3002"),(0,a.kt)("h2",{id:"mysql-\u5b89\u88c5"},"mysql \u5b89\u88c5"),(0,a.kt)("p",null,"\u672c\u5730\u5f00\u53d1\u73af\u5883\u4e3amac\uff0c",(0,a.kt)("a",{parentName:"p",href:"https://dev.mysql.com/downloads/mysql/"},"mysql\u4e0b\u8f7d\u5730\u5740"),"\uff0c\u4e0b\u8f7d\u5b89\u88c5\u5c31\u53ef\u4ee5\u4e86\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"mysql",src:t(816).Z,width:"1336",height:"1096"})),(0,a.kt)("p",null,"\u901a\u8fc7Navicat\u8fde\u63a5\u67e5\u770b\uff0c\u65b0\u5efa\u4e86\u4e00\u4e2a\u540d\u4e3aelectron_vue\u7684\u6570\u636e\u5e93\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"mysql",src:t(1819).Z,width:"2556",height:"1756"})),(0,a.kt)("h2",{id:"koa-\u5b89\u88c5"},"koa \u5b89\u88c5"),(0,a.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/koa-generator"},"koa-generator\u811a\u624b\u67b6\u76f4\u63a5\u5b89\u88c5\u4f7f\u7528->\u4f20\u9001\u95e8")),(0,a.kt)("p",null,"\u811a\u624b\u67b6\u4e0b\u8f7d\u540e",(0,a.kt)("inlineCode",{parentName:"p"},"npm install"),"\u5b89\u8f6c\u4f9d\u8d56\u6a21\u5757\uff0c\u5b89\u88c5\u540e\u76ee\u5f55\u5c55\u793a\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"koa",src:t(9162).Z,width:"484",height:"400"})),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"npm start"),"\u542f\u52a8\u540e\uff0c\u6d4f\u89c8\u5668\u8bbf\u95ee",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/"),"\u662f\u8fd9\u4e2a\u6837\u5b50\u7684\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"koa",src:t(5797).Z,width:"924",height:"512"})),(0,a.kt)("h2",{id:"koa-\u8fde\u63a5-mysql"},"koa \u8fde\u63a5 mysql"),(0,a.kt)("p",null,"\u9996\u5148\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"npm install mysql -S"),"\uff0c\u5f15\u5165mysql\u4f9d\u8d56\u3002"),(0,a.kt)("p",null,"\u6839\u76ee\u5f55\u4e0b\u65b0\u5efa",(0,a.kt)("inlineCode",{parentName:"p"},"config"),"\u6587\u4ef6\u5939\uff0c\u6587\u4ef6\u5939\u4e0b\u65b0\u5efa",(0,a.kt)("inlineCode",{parentName:"p"},"mysql_config.js"),"\u6587\u4ef6\uff0c\u6dfb\u52a0\u76f8\u5173\u914d\u7f6e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'const mysqlConfig = {\n  host: "localhost",\n  port: 3306,\n  user: "root", // mysql\u7528\u6237\u540d\n  password: "4231", // \u81ea\u5df1\u8bbe\u7f6e\u7684mysql\u5bc6\u7801\n  database: "electron_vue", // mysql\u6570\u636e\u5e93\u540d\u79f0\n};\n\nmodule.exports = mysqlConfig;\n')),(0,a.kt)("p",null,"\u6839\u76ee\u5f55\u4e0b\u65b0\u5efa",(0,a.kt)("inlineCode",{parentName:"p"},"utils"),"\u6587\u4ef6\u5939\uff0c\u65b0\u5efa",(0,a.kt)("inlineCode",{parentName:"p"},"query.js"),"\u53ca",(0,a.kt)("inlineCode",{parentName:"p"},"sql.js"),"\uff0c\u5206\u522b\u52a0\u5165\u5982\u4e0b\u4ee3\u7801\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'// query.js\nconst mysql = require("mysql");\nconst MYSQL_CONFIG = require("../config/mysql_config"); // \u6570\u636e\u5e93\u914d\u7f6e\n\n// mysql\nconst pool = mysql.createPool(MYSQL_CONFIG);\n\n// query sql\u8bed\u53e5\u5165\u53e3\nconst query = (sql, val) => {\n  return new Promise((resolve, reject) => {\n    pool.getConnection(function (err, connection) {\n      if (err) {\n        reject(err);\n      } else {\n        connection.query(sql, val, (err, fields) => {\n          if (err) reject(err);\n          else resolve(fields);\n          connection.release();\n        });\n      }\n    });\n  });\n};\n\nmodule.exports = {\n  query,\n};\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'// sql.js\n// \u521b\u5efa\u6570\u636e\u5e93\nconst CREATE_TABLE = `CREATE TABLE IF NOT EXISTS user(\n  user_id INT(5) NOT NULL AUTO_INCREMENT,\n  user_name VARCHAR(255) NOT NULL,\n  user_phone VARCHAR(255) NOT NULL,\n  PRIMARY KEY (user_id)\n);`.replace(/[\\r\\n]/g, "");\n\n// \u67e5\u8be2\u6570\u636e\u8868\nconst QUERY_TABLE = (tableName) => `SELECT * FROM ${tableName}`;\n\n// \u63d2\u5165\u6570\u636e\nconst INSERT_TABLE = (tableName, { key, val }) =>\n  `INSERT INTO ${tableName}(${key}) VALUES (${val})`;\n\n// \u66f4\u65b0\u6570\u636e\nconst UPDATE_TABLE = (tableName, { primaryKey, primaryVal }, { key, value }) =>\n  `UPDATE ${tableName} SET ${key}=${val} WHERE(${primaryKey}=${primaryVal});`;\n\n// \u5220\u9664\u6570\u636e\nconst DELETE_TABLE = (tableName, { primaryKey, primaryVal }) =>\n  `DELETE FROM user WHERE(${primaryKey}=${primaryVal});`;\n\nmodule.exports = {\n  CREATE_TABLE,\n  INSERT_TABLE,\n  UPDATE_TABLE,\n  DELETE_TABLE,\n};\n')),(0,a.kt)("p",null,"\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"routers/index.js"),"\u4e2d\u5f15\u5165\uff0c\u5148\u521b\u5efa\u4e00\u5f20\u8868\u8bd5\u4e00\u4e0b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'const router = require("koa-router")();\n\nconst { query } = require("../utils/query");\nconst {\n  CREATE_TABLE,\n  INSERT_TABLE,\n  UPDATE_TABLE,\n  DELETE_TABLE,\n} = require("../utils/sql");\n\nquery(CREATE_TABLE);\n\n// ....\u7701\u7565\u4e86\n\nmodule.exports = router;\n')),(0,a.kt)("p",null,"\u542f\u52a8\u540e\u53f0\u53d1\u73b0\u62a5\u9519\u5982\u4e0b\uff08\u636e\u8bf4\u662fmysql8\u5ba2\u6237\u7aef\u9519\u8bef\uff09"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"run",src:t(5078).Z,width:"2990",height:"1122"})),(0,a.kt)("p",null,"\u9700\u8981\u5728mysql\u4e2d\u6267\u884c\u6b64\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '\u6b64\u5904\u586b\u5199\u6570\u636e\u5e93\u5bc6\u7801\uff01';\nFLUSH PRIVILEGES;\n")),(0,a.kt)("p",null,"\u6211\u662f\u5728Navicat\u4e2d\u6267\u884c\u7684\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"run",src:t(7333).Z,width:"1726",height:"554"})),(0,a.kt)("p",null,"\u5728\u91cd\u65b0\u542f\u52a8\uff0c\u4f1a\u53d1\u73b0\u6570\u636e\u5e93\u4e2d\u65b0\u5efa\u4e86\u4e00\u5f20\u540d\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"user"),"\u7684\u8868\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"run",src:t(9470).Z,width:"2078",height:"254"})),(0,a.kt)("p",null,"\u81f3\u6b64\uff0c\u57fa\u672c\u7684koa\u8fde\u63a5\u4f7f\u7528mysql\u5c31\u5b8c\u6210\u4e86\u3002"),(0,a.kt)("p",null,"ps:"),(0,a.kt)("p",null,"\u5347\u7ea7\u4e86mysql\u52308\u4e4b\u540e\uff0c\u53d1\u73b0\uff0ckoa mysql\u6a21\u5757\u8fde\u63a5\u4e0d\u4e0amysql"),(0,a.kt)("p",null,"\u62a5\u9519\u5982\u4e0b(\u5fd8\u8bb0\u622a\u56fe\u4e86\u3002\u3002\u3002)\uff1a"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"UnhandledPromiseRejectionWarning: Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client")),(0,a.kt)("p",null,"\u539f\u56e0\u662f\u6700\u65b0\u7684mysql\u6a21\u5757\u5e76\u672a\u5b8c\u5168\u652f\u6301MySQL 8\u7684\u201ccaching_sha2_password\u201d\u52a0\u5bc6\u65b9\u5f0f\uff0c\u800c\u201ccaching_sha2_password\u201d\u5728MySQL 8\u4e2d\u662f\u9ed8\u8ba4\u7684\u52a0\u5bc6\u65b9\u5f0f\u3002\u56e0\u6b64\uff0c\u4e0b\u9762\u7684\u65b9\u5f0f\u547d\u4ee4\u662f\u9ed8\u8ba4\u5df2\u7ecf\u4f7f\u7528\u4e86\u201ccaching_sha2_password\u201d\u52a0\u5bc6\u65b9\u5f0f\uff0c\u8be5\u8d26\u53f7\u3001\u5bc6\u7801\u65e0\u6cd5\u5728mysql\u6a21\u5757\u4e2d\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u9700\u8981\u91cd\u65b0\u4fee\u6539mysql root\u7684\u5bc6\u7801\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.jianshu.com/p/98801a280b25"},"\u53c2\u8003\u5730\u5740 koa+mysql"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://waylau.com/node.js-mysql-client-does-not-support-authentication-protocol/"},"\u53c2\u8003\u5730\u5740 mysql8\u4fee\u6539\u52a0\u5bc6\u65b9\u5f0f")))}m.isMDXComponent=!0},816:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/1-cce017256db3e5c08716f29fc622d388.png"},1819:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/2-7771f0d341c9c5cbedcf7e2f3b6d15ba.png"},9162:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/3-de5a01eda94bd99d66a018f549027563.png"},5797:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/4-21b2259ae7b23209159bf361b4e711a7.png"},5078:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/5-048c68229b72069be6be16909960756b.png"},7333:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/6-85cdbc050f29cb681ee7e8a8e9950282.png"},9470:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/7-4761aed1bb5ddd627fc4e90904467a5c.png"}}]);