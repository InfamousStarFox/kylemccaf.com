"use strict";(self.webpackChunkkylemccaf_com=self.webpackChunkkylemccaf_com||[]).push([[691],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,r=/([\p{Alpha}\p{N}_]|$)/u,l=/[_.\- ]+/,i=new RegExp("^"+l.source),c=new RegExp(l.source+r.source,"gu"),o=new RegExp("\\d+"+r.source,"gu"),s=(e,r)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(r={pascalCase:!1,preserveConsecutiveUppercase:!1,...r},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const l=!1===r.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(r.locale),s=!1===r.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(r.locale);if(1===e.length)return r.pascalCase?s(e):l(e);return e!==l(e)&&(e=((e,n,r)=>{let l=!1,i=!1,c=!1;for(let o=0;o<e.length;o++){const s=e[o];l&&t.test(s)?(e=e.slice(0,o)+"-"+e.slice(o),l=!1,c=i,i=!0,o++):i&&c&&a.test(s)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),c=i,i=!1,l=!0):(l=n(s)===s&&r(s)!==s,c=i,i=r(s)===s&&n(s)!==s)}return e})(e,l,s)),e=e.replace(i,""),e=r.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,(e=>t(e)))))(e,l):l(e),r.pascalCase&&(e=s(e.charAt(0))+e.slice(1)),((e,t)=>(c.lastIndex=0,o.lastIndex=0,e.replace(c,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,s)};e.exports=s,e.exports.default=s},8032:function(e,t,a){a.d(t,{L:function(){return p},M:function(){return v},P:function(){return w},S:function(){return G},_:function(){return c},a:function(){return i},b:function(){return m},g:function(){return u},h:function(){return o}});var n=a(7294),r=(a(3204),a(5697)),l=a.n(r);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function c(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t.indexOf(a=l[n])>=0||(r[a]=e[a]);return r}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function s(e,t,a){const n={};let r="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:n}}function m(e,t,a,n,r){return void 0===r&&(r={}),i({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:i({},r,{opacity:t?1:0})})}function u(e,t,a,n,r,l,c,o){const s={};l&&(s.backgroundColor=l,"fixed"===a?(s.width=n,s.height=r,s.backgroundColor=l,s.position="relative"):("constrained"===a||"fullWidth"===a)&&(s.position="absolute",s.top=0,s.left=0,s.bottom=0,s.right=0)),c&&(s.objectFit=c),o&&(s.objectPosition=o);const m=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},s)});return m}const d=["children"],g=function(e){let{layout:t,width:a,height:r}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+r+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){let{children:t}=e,a=c(e,d);return n.createElement(n.Fragment,null,n.createElement(g,i({},a)),t,null)},A=["src","srcSet","loading","alt","shouldLoad"],E=["fallback","sources","shouldLoad"],h=function(e){let{src:t,srcSet:a,loading:r,alt:l="",shouldLoad:o}=e,s=c(e,A);return n.createElement("img",i({},s,{decoding:"async",loading:r,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:l}))},f=function(e){let{fallback:t,sources:a=[],shouldLoad:r=!0}=e,l=c(e,E);const o=l.sizes||(null==t?void 0:t.sizes),s=n.createElement(h,i({},l,t,{sizes:o,shouldLoad:r}));return a.length?n.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:l}=e;return n.createElement("source",{key:t+"-"+l+"-"+a,type:l,media:t,srcSet:r?a:void 0,"data-srcset":r?void 0:a,sizes:o})})),s):s};var b;h.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},f.displayName="Picture",f.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};const y=["fallback"],w=function(e){let{fallback:t}=e,a=c(e,y);return t?n.createElement(f,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",i({},a))};w.displayName="Placeholder",w.propTypes={fallback:r.string,sources:null==(b=f.propTypes)?void 0:b.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const v=function(e){return n.createElement(n.Fragment,null,n.createElement(f,i({},e)),n.createElement("noscript",null,n.createElement(f,i({},e,{shouldLoad:!0}))))};v.displayName="MainImage",v.propTypes=f.propTypes;const C=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],F=["style","className"],S=e=>e.replace(/\n/g,""),k=function(e,t,a){for(var n=arguments.length,r=new Array(n>3?n-3:0),i=3;i<n;i++)r[i-3]=arguments[i];return e.alt||""===e.alt?l().string.apply(l(),[e,t,a].concat(r)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},B={image:l().object.isRequired,alt:k},Q=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],L=["style","className"],R=new Set;let x,I;const T=function(e){let{as:t="div",image:r,style:l,backgroundColor:m,className:u,class:d,onStartLoad:g,onLoad:p,onError:A}=e,E=c(e,Q);const{width:h,height:f,layout:b}=r,y=s(h,f,b),{style:w,className:v}=y,C=c(y,L),F=(0,n.useRef)(),S=(0,n.useMemo)((()=>JSON.stringify(r.images)),[r.images]);d&&(u=d);const k=function(e,t,a){let n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(b,h,f);return(0,n.useEffect)((()=>{x||(x=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return I=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=F.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==g||g({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void R.add(S);if(I&&R.has(S))return;let t,n;return x.then((e=>{let{renderImageToString:a,swapPlaceholderImage:c}=e;F.current&&(F.current.innerHTML=a(i({isLoading:!0,isLoaded:R.has(S),image:r},E)),R.has(S)||(t=requestAnimationFrame((()=>{F.current&&(n=c(F.current,S,R,l,g,p,A))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[r]),(0,n.useLayoutEffect)((()=>{R.has(S)&&I&&(F.current.innerHTML=I(i({isLoading:R.has(S),isLoaded:R.has(S),image:r},E)),null==g||g({wasCached:!0}),null==p||p({wasCached:!0}))}),[r]),(0,n.createElement)(t,i({},C,{style:i({},w,l,{backgroundColor:m}),className:v+(u?" "+u:""),ref:F,dangerouslySetInnerHTML:{__html:k},suppressHydrationWarning:!0}))},D=(0,n.memo)((function(e){return e.image?(0,n.createElement)(T,e):null}));D.propTypes=B,D.displayName="GatsbyImage";const N=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function M(e){return function(t){let{src:a,__imageData:r,__error:l}=t,o=c(t,N);return l&&console.warn(l),r?n.createElement(e,i({image:r},o)):(console.warn("Image not loaded",a),null)}}const U=M((function(e){let{as:t="div",className:a,class:r,style:l,image:o,loading:d="lazy",imgClassName:g,imgStyle:A,backgroundColor:E,objectFit:h,objectPosition:f}=e,b=c(e,C);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;r&&(a=r),A=i({objectFit:h,objectPosition:f,backgroundColor:E},A);const{width:y,height:k,layout:B,images:Q,placeholder:L,backgroundColor:R}=o,x=s(y,k,B),{style:I,className:T}=x,D=c(x,F),N={fallback:void 0,sources:[]};return Q.fallback&&(N.fallback=i({},Q.fallback,{srcSet:Q.fallback.srcSet?S(Q.fallback.srcSet):void 0})),Q.sources&&(N.sources=Q.sources.map((e=>i({},e,{srcSet:S(e.srcSet)})))),n.createElement(t,i({},D,{style:i({},I,l,{backgroundColor:E}),className:T+(a?" "+a:"")}),n.createElement(p,{layout:B,width:y,height:k},n.createElement(w,i({},u(L,!1,B,y,k,R,h,f))),n.createElement(v,i({"data-gatsby-image-ssr":"",className:g},b,m("eager"===d,!1,N,d,A)))))})),P=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?l().number.apply(l(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},j=new Set(["fixed","fullWidth","constrained"]),W={src:l().string.isRequired,alt:k,width:P,height:P,sizes:l().string,layout:e=>{if(void 0!==e.layout&&!j.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};U.displayName="StaticImage",U.propTypes=W;const G=M(D);G.displayName="StaticImage",G.propTypes=W},5262:function(e,t,a){a.r(t),a.d(t,{default:function(){return w}});var n=a(7294),r=a(8032);const l=e=>n.createElement("div",{className:"Navbar-module--nav--6b3a0",style:{left:"home"!==e.page?"0%":"15%"}},n.createElement("ul",{className:"Navbar-module--list--3503d"},[{title:"Home",page:"home"},{title:"About",page:"about"},{title:"Experience",page:"experience"},{title:"Projects",page:"projects"},{title:"Contact",page:"contact"}].map((t=>n.createElement("li",{key:t.page},n.createElement("a",{onClick:()=>e.setPage(t.page),className:e.page===t.page?"Navbar-module--active--9ba6a":"",role:"button",tabIndex:0,title:t.title},t.title))))));var i=a(7814),c=a(9417),o=a(3767);const s=e=>n.createElement("div",{className:"CardItem-module--item--0ae3a"},e.title?n.createElement("h3",{className:"CardItem-module--title--e6181"},e.title):null,e.time?n.createElement("h4",{className:"CardItem-module--time--1dc47"},e.time):null,e.description?n.createElement("div",{className:"CardItem-module--description--a2530"},e.description):null);function m(e){return n.createElement(o.Z,{active:e.active,title:"About Kyle",children:n.createElement(n.Fragment,null,n.createElement(s,{title:n.createElement(n.Fragment,null,n.createElement(i.G,{icon:c.Xf_}),"  Education"),time:n.createElement(n.Fragment,null,"Western Washington University - Class of 2019",n.createElement("br",null),"Bachelor Degree of Science"),description:n.createElement(n.Fragment,null,n.createElement("p",null,"Computer Science Major"),n.createElement("p",null,"Mathematics Minor",n.createElement("br",null),"Psychology Minor"),n.createElement("p",null,"E-Commerce Development Certificate"))}),n.createElement(s,{title:n.createElement(n.Fragment,null,n.createElement(i.G,{icon:c.Xj}),"  Location"),description:n.createElement(n.Fragment,null,n.createElement("p",null,"Based in the greater Seattle area."))}),n.createElement(s,{title:n.createElement(n.Fragment,null,n.createElement(i.G,{icon:c.FVb}),"  Organizations"),description:n.createElement(n.Fragment,null,n.createElement("p",null,"Association for Computing Machinery (ACM)",n.createElement("br",null),"Collegiate Cyber Defense Club",n.createElement("br",null),"WWU Artificial Intelligence Association",n.createElement("br",null),"WWU Formula SAE Racing Engineering Team"))}),n.createElement(s,{title:n.createElement(n.Fragment,null,n.createElement(i.G,{icon:c.$b3}),"  Community"),description:n.createElement(n.Fragment,null,n.createElement("p",null,"Eagle Scout, BSA Troop 4006",n.createElement("br",null),"Civil Air Patrol, CAP-015",n.createElement("br",null),"American Red Cross Community Response Hero - saved a classmate from drowning"))}),n.createElement(s,{title:n.createElement(n.Fragment,null,n.createElement(i.G,{icon:c.l9D}),"  Hobbies"),description:n.createElement(n.Fragment,null,n.createElement("p",null,"Eagle Scout, avid hiker and camper",n.createElement("br",null),"Theatre Technician, sound & light design",n.createElement("br",null),"Competitive Fencer",n.createElement("br",null),"Ham Radio, Technician Rating"))}))})}var u=a(3024),d=a(5113);const g=e=>n.createElement("a",Object.assign({role:"link",style:{display:"block",padding:"5px 0px"},target:"_blank"},e)),p=e=>{const{0:t,1:a}=(0,n.useState)(!1);return n.createElement(o.Z,{active:e.active,title:"Work Experience",children:n.createElement(n.Fragment,null,n.createElement(s,{title:"Liberty Mutual",time:n.createElement(n.Fragment,null,"Senior Software Engineer",n.createElement("br",null),"2022 - Present"),description:n.createElement(n.Fragment,null,n.createElement("p",null,"Full stack, senior developer; React, TypeScript, and GraphQL. Interface design and construction for agents across the world to interact with customer data."))}),n.createElement(s,{title:"Doosan GridTech",time:n.createElement(n.Fragment,null,"Software Development Engineer",n.createElement("br",null),"2019 - 2022"),description:n.createElement(n.Fragment,null,n.createElement("p",null,"Full stack engineer, building a React Native application to control a Distributed Energy Resource Optimizer (DERO) system using TypeScript, GraphQL, and PWA technologies."))}),n.createElement(s,{title:"Western Region, BSA",time:n.createElement(n.Fragment,null,"Technology Team Lead",n.createElement("br",null),"2016 - 2018"),description:n.createElement(n.Fragment,null,n.createElement("p",null,"Led a team of 10 to build and maintain a MySQL database program using PHP, JSON, and AJAX. Used Slack, JIRA, Git, and Zoom to coordinate team members and maintain project timeline."))}),n.createElement(s,{title:"Freelance Web Design Design",time:"2014 - 2019",description:n.createElement(n.Fragment,null,n.createElement("p",null,n.createElement(g,{href:"https://western.oa-bsa.org/"},"Western Region, BSA"),n.createElement(g,{href:"https://github.com/OAWest/wp-theme",title:"GitHub"}," ",n.createElement(i.G,{icon:u.zhw})," WordPress Theme"),n.createElement(g,{href:"https://whatcomroofing.com/"},"Whatcom Roofing"),n.createElement(g,{href:"https://oa-bsa.org/"},"Order of the Arrow, BSA"),n.createElement(g,{href:"https://jonathanstyle.com/"},"Jonathan O'Brien Interior Design")))}),t&&n.createElement(n.Fragment,null,n.createElement(s,{title:"Jonathan O'Brien Interior Design",time:"May 2017 - June 2019",description:n.createElement(n.Fragment,null,n.createElement("p",null,"The lead technology assistant for this local Bellingham company. Duties include social media & brand management, website maintenance, SEO, and advertising."))}),n.createElement(s,{title:"Section W-1N",time:"April 2015 - Sep 2017",description:n.createElement(n.Fragment,null,n.createElement("p",null,"Chief of this local non-profit organization which focuses on community service. Duties included organizing yearly training events in Alaska and Washington with 200-500 participants, leading quartly board meetings, and managing both the external and internal communications."))}),n.createElement(s,{title:"Childcare Worldwide",time:"Summer 2016",description:n.createElement(n.Fragment,null,n.createElement("p",null,"Telemarketer for the Ugandan Kids Choir. Duties involved calling organizations, filing paperwork, and attending meetings"))}),n.createElement(s,{title:"Zodiac Aerospace",time:"Summer 2015",description:n.createElement(n.Fragment,null,n.createElement("p",null,"Inventory control and database management for the finished goods warehouse and shipping department."))}),n.createElement(s,{title:"Salvation Army",time:"Summer 2014",description:n.createElement(n.Fragment,null,n.createElement("p",null,"Served as a cabin counselor, where I created fun and engaging ways to keep energetic youth entertained."))}),n.createElement(s,{title:"Fire Mountain Scout Camp",time:"Summer 2011-2013",description:n.createElement(n.Fragment,null,n.createElement("p",null,"Taught leadership and communication skills to youth through a fun, adventures manner."))})),n.createElement(d.z,{onClick:()=>a(!t),children:n.createElement(n.Fragment,null,"Show ",t?"Less":"More")}))})};var A={prefix:"far",iconName:"compass",icon:[512,512,[129517],"f14e","M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},E={prefix:"far",iconName:"file-pdf",icon:[512,512,[],"f1c1","M64 464l48 0 0 48-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 304l-48 0 0-144-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z"]};const h=e=>n.createElement(o.Z,{active:e.active,title:"Projects",children:n.createElement(n.Fragment,null,n.createElement(s,{title:n.createElement(n.Fragment,null,n.createElement(i.G,{icon:c.wKO,transform:{rotate:-45}}),"  Skygenda - Flight Scheduling Software"),description:n.createElement(n.Fragment,null,n.createElement("p",null,"Built a Progressive Web App (PWA) scheduling website using NodeJS, Express, Vuex, and Bulma, which allows Civil Air Patrol pilots and cadets to enter and find matching availability."))}),n.createElement(s,{title:n.createElement(n.Fragment,null,n.createElement(i.G,{icon:A}),"  Radio Direction Finding"),description:n.createElement(n.Fragment,null,n.createElement("p",null,"Using an array of four software defined radio receivers (RTL-SDR), this project calculates the bearing and direction of a signal, then plots it on a map in real time. The code has been featured on several hackaday projects."),n.createElement(g,{href:"https://github.com/InfamousStarFox/kerberossdr"},n.createElement(i.G,{icon:u.zhw})," GitHub Repository"))}),n.createElement(s,{title:n.createElement(n.Fragment,null,n.createElement(i.G,{icon:c.kWN}),"  WWU ACM Hackathon"),time:n.createElement(n.Fragment,null,"1st Place Wining Team",n.createElement("br",null),"November 2017"),description:n.createElement(n.Fragment,null,n.createElement("p",null,"Led the development team of four, which built a PHP/MySQL website for students to connect with mentors and collaborate on projects and assignments."))}),n.createElement(s,{title:n.createElement(n.Fragment,null,n.createElement(i.G,{icon:c.kWN}),"  Intel HackOA Hackathon"),time:n.createElement(n.Fragment,null,"1st Place Wining Team",n.createElement("br",null),"October 2017"),description:n.createElement(n.Fragment,null,n.createElement("p",null,"Led a team of four to develop a program in C which reduced the amount of https packets and bandwidth necessary to serve websites via localized caching."),n.createElement(g,{href:"https://devpost.com/software/project-a-l-l-a-n-6ftjzl"},"Learn more at DevPost"))}))}),f=e=>n.createElement(o.Z,{active:e.active,title:"Contact",children:n.createElement(n.Fragment,null,n.createElement(s,{title:"Connect",description:n.createElement(n.Fragment,null,n.createElement("p",null,n.createElement(i.G,{icon:u.D9H}),"  LinkedIn: ",n.createElement("a",{href:"https://www.linkedin.com/in/kylemccaf/",target:"_blank"},"linkedin.com/in/kylemccaf/")),n.createElement("p",null,n.createElement(i.G,{icon:u.pUg}),"  GitHub: ",n.createElement("a",{href:"https://github.com/InfamousStarFox/",target:"_blank"},"github.com/InfamousStarFox/")))}),n.createElement(s,{title:"Share",description:n.createElement(n.Fragment,null,n.createElement("p",null,n.createElement(i.G,{icon:E})," Printable Resume: ",n.createElement("a",{href:"/Kyle McCaffery Resume.pdf",target:"_blank"},"Kyle McCaffery Resume.pdf")))}))});var b=a(7181),y=a(9137);function w(){const{0:e,1:t}=(0,n.useState)("home");return n.createElement(y.Z,null,n.createElement(l,{page:e,setPage:t}),n.createElement(o.n,{style:{left:"home"!==e?"15%":"30%"}},n.createElement(r.S,{src:"../images/profile.jpg",alt:"Kyle McCaffery",placeholder:"blurred",width:190,height:190,quality:90,style:{overflow:"hidden",borderRadius:"100%",border:"6px solid #ddd",marginBottom:20},__imageData:a(9970)}),n.createElement(b.D,{text:["Kyle","McCaffery"]}),n.createElement("div",{style:{marginBottom:20}},n.createElement("h2",{style:{marginBottom:20,fontSize:"1rem"}},"Senior Software Developer"),n.createElement("p",null,"Senior Software Developer in Seattle WA."),n.createElement("p",null,"React, TypeScript, GraphQL, & more.")),n.createElement(d.h,{icon:c.gSj,children:"Download my Resume",href:"/Kyle McCaffery Resume.pdf"}),n.createElement(d.h,{icon:u.hwn,children:"Connect on LinkedIn",href:"https://www.linkedin.com/in/kylemccaf/"})),n.createElement(m,{active:"about"===e}),n.createElement(p,{active:"experience"===e}),n.createElement(h,{active:"projects"===e}),n.createElement(f,{active:"contact"===e}))}},9970:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAYFBwj/xAAXAQEBAQEAAAAAAAAAAAAAAAACAwQF/9oADAMBAAIQAxAAAAHq+HK5Uen1RMFHzZNlc9eA/wD/xAAcEAABBQADAAAAAAAAAAAAAAADAQIEBQYRITH/2gAIAQEAAQUCJygYoTR5zk70GvDTRrHXBqDRLYNsDQuV9632jmFDF//EABoRAAICAwAAAAAAAAAAAAAAAAECABAREjH/2gAIAQMBAT8BXUo2aPYJ/8QAFhEBAQEAAAAAAAAAAAAAAAAAAREQ/9oACAECAQE/AY0mGf/EACYQAAEDAwMCBwAAAAAAAAAAAAECAwQAERIQIUEiIzJRUmGBscH/2gAIAQEABj8CWU+K21FBlvy2Vt5d9vHE6LYbOU5SekW2R7moTrLwmNOJu4236ePm9CRHUS2fPYg1NvwR9aLCVWGf4K//xAAdEAEBAAMAAgMAAAAAAAAAAAABEQAhMUFRcZGx/9oACAEBAAE/IVe4bBd/HnN2YgVU4geHk1MPPtA2bc/eY1kQQNG1eZah4wwuiZdNiPphuX/o2Yf/2gAMAwEAAgADAAAAEHP3Pv/EABgRAAMBAQAAAAAAAAAAAAAAAAABETHw/9oACAEDAQE/EEcaUndRKqmw7iP/xAAXEQADAQAAAAAAAAAAAAAAAAAAATFR/9oACAECAQE/EHiCEIdP/8QAGxABAQADAQEBAAAAAAAAAAAAAREAIUExYcH/2gAIAQEAAT8Qo42x9NJ0PZ2THkCIfrDCKj7B45UqGISK+aUOmFBqoWGGV2Mxu00LGCUQpHpSu5HraT4o0R3iwrqOAYYACBrhkAzc9h+Z/9k="},"images":{"fallback":{"src":"/static/1b39b7ac8466f5e1ba774e85feb33b36/5deac/profile.jpg","srcSet":"/static/1b39b7ac8466f5e1ba774e85feb33b36/5e99f/profile.jpg 48w,\\n/static/1b39b7ac8466f5e1ba774e85feb33b36/8a89a/profile.jpg 95w,\\n/static/1b39b7ac8466f5e1ba774e85feb33b36/5deac/profile.jpg 190w,\\n/static/1b39b7ac8466f5e1ba774e85feb33b36/19e0a/profile.jpg 380w","sizes":"(min-width: 190px) 190px, 100vw"},"sources":[{"srcSet":"/static/1b39b7ac8466f5e1ba774e85feb33b36/d0131/profile.webp 48w,\\n/static/1b39b7ac8466f5e1ba774e85feb33b36/47227/profile.webp 95w,\\n/static/1b39b7ac8466f5e1ba774e85feb33b36/4b0f3/profile.webp 190w,\\n/static/1b39b7ac8466f5e1ba774e85feb33b36/3a7db/profile.webp 380w","type":"image/webp","sizes":"(min-width: 190px) 190px, 100vw"}]},"width":190,"height":190}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-bbd8147425dc7f0c27e5.js.map