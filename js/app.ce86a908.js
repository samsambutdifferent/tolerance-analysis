(function(t){function e(e){for(var n,r,i=e[0],c=e[1],l=e[2],u=0,p=[];u<i.length;u++)r=i[u],a[r]&&p.push(a[r][0]),a[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],n=!0,r=1;r<o.length;r++){var c=o[r];0!==a[c]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},a={app:0},s=[];function r(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"9ed65bc3"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.e=function(t){var e=[],o=a[t];if(0!==o)if(o)e.push(o[2]);else{var n=new Promise(function(e,n){o=a[t]=[e,n]});e.push(o[2]=n);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=r(t),s=function(e){c.onerror=c.onload=null,clearTimeout(l);var o=a[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+n+": "+s+")");r.type=n,r.request=s,o[1](r)}a[t]=void 0}};var l=setTimeout(function(){s({type:"timeout",target:c})},12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("64a9"),a=o.n(n);a.a},1376:function(t,e,o){"use strict";var n=o("e74d"),a=o.n(n);a.a},"1a8b":function(t,e,o){},"1cc1":function(t,e,o){},"23c3":function(t,e,o){"use strict";var n=o("1a8b"),a=o.n(n);a.a},2451:function(t,e,o){},"37a7":function(t,e,o){"use strict";var n=o("bfe2"),a=o.n(n);a.a},"39ac":function(t,e,o){},"4b80":function(t,e,o){},"4ebb":function(t,e,o){},"546f":function(t,e,o){"use strict";var n=o("9569"),a=o.n(n);a.a},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),a=o("f13c"),s=o.n(a),r=o("ecee"),i=o("c074"),c=o("ad3d");r["c"].add(i["a"]),n["default"].component("font-awesome-icon",c["a"]);var l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("nav-bar"),this.$store.state.posts.length>0&&this.$store.state.pages.length>0?o("div",[o("router-view",{attrs:{id:"displayed-page"}}),o("footer-area")],1):o("div",[o("div",{staticClass:"container"},[o("div",{staticClass:"row justify-content-center",staticStyle:{"padding-top":"100px"}},[o("pulse-loader",{attrs:{color:"#003b7d"}})],1)])])],1)},u=[],d=(o("96cf"),o("3b8d")),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"view intro hm-purple-light"},[n("b-navbar",{staticClass:"bg-transparent",attrs:{toggleable:"lg",type:"dark",variant:"info"}},[n("b-navbar-brand",{attrs:{href:"#"}},[n("img",{attrs:{id:"nav-logo-img",src:o("b640"),alt:"enginsoft-logo"}}),n("span",{attrs:{id:"nav-logo-text"}},[t._v("Tolerance Analysis")])]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",{staticClass:"ml-auto"},[this.$store.getters.homePage?n("b-nav-item",[n("router-link",{attrs:{to:"/"}},[t._v("Home")])],1):t._e(),this.$store.getters.softwareSolutionsPage?n("b-nav-item",[n("router-link",{attrs:{to:"/softwaresolutions"}},[t._v("Software Solutions")])],1):t._e(),this.$store.getters.trainingCoursesPage?n("b-nav-item",[n("router-link",{attrs:{to:"/trainingcourses"}},[t._v("Training Courses")])],1):t._e(),this.$store.getters.servicesPage?n("b-nav-item",[n("router-link",{attrs:{to:"/Services"}},[t._v("Services")])],1):t._e(),this.$store.getters.resourcesPage?n("b-nav-item",[n("router-link",{attrs:{to:"/Resources"}},[t._v("Resources")])],1):t._e(),this.$store.getters.consultancyPage?n("b-nav-item",[n("router-link",{attrs:{to:"/Consultancy"}},[t._v("Consultancy")])],1):t._e(),this.$store.getters.contactPage?n("b-nav-item",[n("router-link",{attrs:{to:"/Contact"}},[t._v("Contact")])],1):t._e()],1)],1)],1),n("div",{staticClass:"container-fluid banner",attrs:{id:"top"}},[n("div",{staticClass:"container",attrs:{id:"text"}},[n("div",{staticClass:"col-md-5"},[n("h1",[t._v("\n          "+t._s(t.siteTitle)+"\n        ")]),n("hr"),n("p",[t._v(t._s(t.siteDescription))])])])])],1)},f=[],m={name:"navbar",data:function(){return{siteTitle:"TOLERANCE ANALYSIS",siteDescription:"EnginSoft are experts in tolerance analysis for engineering design and manufacturing companies that assemble multi-component products."}}},h=m,v=(o("23c3"),o("2877")),_=Object(v["a"])(h,p,f,!1,null,"59a0d748",null),b=_.exports,g=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("quote"),o("div",{staticClass:"view intro hm-purple-light",style:{backgroundImage:"url('"+this.$store.state.contact_area_background_image.url+"')"}},[o("div",{staticClass:"container",attrs:{id:""}},[o("div",{staticClass:"row align-items-center"},[o("div",{staticClass:"col-8 mx-auto",attrs:{id:"contact-area"}},[o("div",[t._m(0),o("contact-form",{attrs:{formType:"Enquiry",location:"",enquiryPresent:!0,buttonText:"Submit Your Enquiry",isDownload:!1}})],1)])])])]),o("div",{staticClass:"container-fluid",style:{"background-color":this.$store.state.footer_area_colour},attrs:{id:"contact-bar"}},[o("div",{staticClass:"container"},[o("div",{staticClass:"row justify-content-start"},[o("div",{staticClass:"col content-styles"},[o("h2",[t._v("Contact")]),o("hr"),o("span",{domProps:{innerHTML:t._s(t.ContactInfo.acf.address)}}),o("div",{attrs:{id:"phone-email-section"}},[o("p",[o("font-awesome-icon",{attrs:{id:"icon",icon:t.ContactInfo.acf.phone_icon}}),t._v(t._s(t.ContactInfo.acf.phone_number)+"\n            ")],1),o("p",[o("font-awesome-icon",{attrs:{id:"icon",icon:t.ContactInfo.acf.email_icon}}),t._v(t._s(t.ContactInfo.acf.email_address)+"\n            ")],1)])])])])])],1)},y=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row justify-content-center banner-text"},[o("p",[o("b",[t._v("Find the solution to meet your requirements or request a demo")])]),o("p",[t._v("Please call EnginSoft on +44 (0)2476 997160 or use the form below")])])}],C=(o("28a5"),o("7514"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"row",attrs:{id:"quote"}},[o("div",{staticClass:"col-12"},[o("transition",{attrs:{name:"fade",mode:"out-in"}},[o("div",{key:t.quote},[o("h1",{staticClass:"text-center",domProps:{innerHTML:t._s(t.quote)}})])]),o("transition",{attrs:{name:"fade",mode:"out-in"}},[o("div",{key:t.author},[o("h3",{staticClass:"text-center"},[t._v(t._s(t.author))])])])],1)])])}),w=[],x=(o("ac6a"),{data:function(){return{quotes:[],quote:"",author:"",index:0}},mounted:function(){var t=this;this.$store.state.posts.forEach(function(e){e.categories.forEach(function(o){"Quote"==o.cat_name&&t.quotes.push(e)})}),this.quotes.length<1||(this.quote=this.quotes[0].post_content,this.author=this.quotes[0].post_title,this.$nextTick(function(){var t=this;window.setInterval(function(){t.countDown()},3e4)}))},methods:{countDown:function(){this.index>=this.quotes.length&&(this.index=0),this.quote=this.quotes[this.index].post_content,this.author=this.quotes[this.index].post_title,this.index++}}}),P=x,k=(o("e774"),Object(v["a"])(P,C,w,!1,null,null,null)),S=k.exports,T=o("5a93"),$={name:"FooterArea",components:{Quote:S,ContactForm:T["a"]},computed:{ContactInfo:function(){var t=this.$store.state.posts.find(function(t){return"Contact Info"==t.post_title}),e=t.acf.address.split("\r"),o="<p>"+e.join(" <p/> <p>")+"<g(p/>";return t.acf.address=o,t}}},j=$,q=(o("f329"),Object(v["a"])(j,g,y,!1,null,"d51ee3b0",null)),E=q.exports,B=o("8a5d"),A={components:{NavBar:b,FooterArea:E,PulseLoader:B["a"]},beforeMount:function(){var t=Object(d["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return console.log("TA"),t.next=3,this.$store.dispatch("getSettings");case 3:return t.next=5,this.$store.dispatch("getPosts");case 5:return t.next=7,this.$store.dispatch("getPages");case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},O=A,I=(o("034f"),Object(v["a"])(O,l,u,!1,null,null,null)),V=I.exports,D=o("8c4f"),M=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.homePage?o("div",[o("page",{attrs:{pageProp:t.homePage}})],1):t._e()},N=[],R=o("e833"),F={name:"home",components:{Page:R["a"]},computed:{homePage:function(){return this.$store.getters.homePage}}},L=F,H=Object(v["a"])(L,M,N,!1,null,"508ddbe1",null),J=H.exports;n["default"].use(D["a"]);var z=new D["a"]({mode:"hash",base:"",routes:[{path:"/",name:"home",component:J},{path:"/softwaresolutions",name:"softwaresolutions",component:function(){return o.e("about").then(o.bind(null,"a1594"))}},{path:"/trainingcourses",name:"trainingcourses",component:function(){return o.e("about").then(o.bind(null,"c3a6"))}},{path:"/services",name:"Services",component:function(){return o.e("about").then(o.bind(null,"f23e"))}},{path:"/resources",name:"recources",component:function(){return o.e("about").then(o.bind(null,"93b9"))}},{path:"/consultancy",name:"Consultancy",component:function(){return o.e("about").then(o.bind(null,"eb08"))}},{path:"/contact",name:"contact",component:function(){return o.e("about").then(o.bind(null,"b8fa"))}}]}),Y=(o("55dd"),o("2f62")),Z=o("bc3a"),G=o.n(Z),Q="https://cms.tolerance-analysis.co.uk/wp-json/",K="TA";n["default"].use(Y["a"]);var U=new Y["a"].Store({state:{pages:[],posts:[],primary_colour:"",secondary_colour:"",tertiary_colour:"",quarternary_colour:"",footer_area_colour:"",contact_area_background_image:{}},getters:{homePage:function(t){return t.pages.find(function(t){return"Home"==t.post_title})},softwareSolutionsPage:function(t){return t.pages.find(function(t){return"Software Solutions"==t.post_title})},trainingCoursesPage:function(t){return t.pages.find(function(t){return"Training Courses"==t.post_title})},resourcesPage:function(t){return t.pages.find(function(t){return"Resources"==t.post_title})},consultancyPage:function(t){return t.pages.find(function(t){return"Consultancy"==t.post_title})},contactPage:function(t){return t.pages.find(function(t){return"Contact"==t.post_title})},servicesPage:function(t){return t.pages.find(function(t){return"Services"==t.post_title})},sortedPosts:function(t){return t.posts.sort(function(t,e){return t.acf.order-e.acf.order})}},mutations:{addSettings:function(t,e){var o=e.find(function(t){return"settingspage.php"==t.template});t.primary_colour=o.acf.primary_colour,t.secondary_colour=o.acf.secondary_colour,t.tertiary_colour=o.acf.tertiary_colour,t.quarternary_colour=o.acf.quarternary_colour,t.footer_area_colour=o.acf.footer_area_colour,t.contact_area_background_image=o.acf.contact_area_background_image},addPages:function(t,e){t.pages=e},addPosts:function(t,e){t.posts=e}},actions:{getSettings:function(){var t=Object(d["a"])(regeneratorRuntime.mark(function t(e){var o,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return o=e.commit,n={},t.next=4,G.a.get(Q+K+"/settings").then(function(t){n=t.data,o("addSettings",n)}).catch(function(t){console.log(t)});case 4:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),getPages:function(){var t=Object(d["a"])(regeneratorRuntime.mark(function t(e){var o,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return o=e.commit,n={},t.next=4,G.a.get(Q+K+"/pages").then(function(t){n=t.data,o("addPages",n)}).catch(function(t){console.log(t)});case 4:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),getPosts:function(){var t=Object(d["a"])(regeneratorRuntime.mark(function t(e){var o,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return o=e.commit,n={},t.next=4,G.a.get(Q+K+"/posts").then(function(t){n=t.data,o("addPosts",n)}).catch(function(t){console.log(t)});case 4:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}()}}),W=o("5f5b"),X=(o("f9e3"),o("2dd8"),o("755e"));n["default"].use(s.a,{container:"body",duration:500,easing:"ease",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0}),n["default"].use(W["a"]),n["default"].use(X,{load:{key:"AIzaSyAa5TSKIY7nhJ0VZV8koYtxJeH8_Ia7Gi8"}}),n["default"].config.productionTip=!1,new n["default"]({router:z,store:U,render:function(t){return t(V)}}).$mount("#app")},"5a93":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",[o("form",[o("div",{staticClass:"form-row justify-content-center"},[o("div",{staticClass:"col-md"},[o("div",{staticClass:"col form-item"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control form-input",attrs:{type:"text",placeholder:"Name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),o("div",{staticClass:"col form-item"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.company,expression:"company"}],staticClass:"form-control form-input",attrs:{type:"text",placeholder:"Company"},domProps:{value:t.company},on:{input:function(e){e.target.composing||(t.company=e.target.value)}}})]),o("div",{staticClass:"col form-item"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.jobTitle,expression:"jobTitle"}],staticClass:"form-control form-input",attrs:{type:"text",placeholder:"Job Title"},domProps:{value:t.jobTitle},on:{input:function(e){e.target.composing||(t.jobTitle=e.target.value)}}})]),o("div",{staticClass:"col form-item"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control form-input",attrs:{type:"text",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),o("div",{staticClass:"col form-item"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.number,expression:"number"}],staticClass:"form-control form-input",attrs:{type:"text",placeholder:"Phone"},domProps:{value:t.number},on:{keypress:function(e){return t.isNumber(e)},input:function(e){e.target.composing||(t.number=e.target.value)}}})])]),o("div",{staticClass:"col-md"},[t.enquiryPresent?o("div",{staticClass:"col form-item"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.enquiryArea,expression:"enquiryArea"}],staticClass:"form-control form-input",attrs:{placeholder:"Enquiry"},domProps:{value:t.enquiryArea},on:{input:function(e){e.target.composing||(t.enquiryArea=e.target.value)}}})]):t._e(),o("div",{staticClass:"col form-item"},[o("button",{staticClass:"flat-butt",style:{"background-color":this.$store.state.quarternary_colour},attrs:{type:"button"},on:{click:function(e){return t.postValue()}}},[t._v(t._s(t.buttonText))])]),t.errors?o("div",t._l(t.errors,function(e,n){return o("b-alert",{key:n,attrs:{variant:"danger",show:t.errors!=[]}},[t._v(t._s(e))])}),1):t._e()])])])])])},a=[],s=(o("7f7f"),o("77de")),r=o("bc3a"),i=o.n(r),c={mixins:[s["a"]],props:{formType:String,location:String,enquiryPresent:Boolean,buttonText:String,isDownload:Boolean},data:function(){return{name:"",company:"",jobTitle:"",email:"",number:"",enquiryArea:"",errors:[],reg:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/}},methods:{postValue:function(){var t=this;this.errors=[];var e=this.validateFormValues();if(""==e){var o=this.enquiryPresent?"\r\nEnquiry: ".concat(this.enquiryArea):"",n="";n=""!=this.location?"https://tolerance-analysis.co.uk/#".concat(this.location):"https://tolerance-analysis.co.uk/#".concat(this.$route.path);var a="Enquiry Type: ".concat(this.formType," form submission\r\nName :  ").concat(this.name,"\r\nEmail :  ").concat(this.email,"\r\nCompany :  ").concat(this.company,"\r\nJob Title: ").concat(this.jobTitle,"\r\nPhone Number: ").concat(this.number).concat(o,"\r\nLocation:/").concat(n),s={post:"19",author_email:this.email,content:a,author_name:this.name};i.a.post("https://cms.tolerance-analysis.co.uk/wp-json/wp/v2/comments",s).then(function(e){t.resetValues()}).catch(function(e){console.log(e),t.errors.push("Sorry, form not submitted. Possible double submission. Please try again")})}else this.errors.push(e)},validateFormValues:function(){return""==this.name?"Please enter name value":""==this.email?"Please enter an email":this.isEmailValid(this.email)?""==this.number?"Please enter a phone number":"":"Please enter a valid email format"},isEmailValid:function(t){return""==t?"":!!this.reg.test(this.email)},resetValues:function(){this.name="",this.company="",this.jobTitle="",this.email="",this.number="",this.enquiryArea="",this.isDownload&&this.navigateTo(this.location)},isNumber:function(t){t=t||window.event;var e=t.which?t.which:t.keyCode;if(!(e>31&&(e<48||e>57)&&46!==e&&43!=e))return!0;t.preventDefault()}}},l=c,u=(o("c9dc"),o("2877")),d=Object(u["a"])(l,n,a,!1,null,"96a371aa",null);e["a"]=d.exports},"5deb":function(t,e,o){},"64a9":function(t,e,o){},7191:function(t,e,o){},"77de":function(t,e,o){"use strict";e["a"]={methods:{navigateTo:function(t){window.open(t,"_blank")}}}},9569:function(t,e,o){},b640:function(t,e,o){t.exports=o.p+"img/logo.e5ff8fc2.jpg"},bbde:function(t,e,o){"use strict";var n=o("5deb"),a=o.n(n);a.a},bfe2:function(t,e,o){},c9dc:function(t,e,o){"use strict";var n=o("4ebb"),a=o.n(n);a.a},ded2:function(t,e,o){"use strict";var n=o("4b80"),a=o.n(n);a.a},e74d:function(t,e,o){},e774:function(t,e,o){"use strict";var n=o("1cc1"),a=o.n(n);a.a},e833:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.pageProp.acf.three_bar_banner?o("three-bar-banner",{staticStyle:{"padding-bottom":"3%"}}):t._e(),this.$store.state.pages?o("div",{staticClass:"container page-content"},[o("div",{staticClass:"row"},[o("page-content",{attrs:{contentProp:t.pageProp.post_content,sidebarProp:t.pageProp.acf.sidebar,slideToTextProp:t.pageProp.acf.slide_to_button_text}})],1),t.productList.length>0?o("div",t._l(t.productList,function(t,e){return o("div",{key:e},[o("product-block",{attrs:{productName:t}})],1)}),0):t._e()]):t._e(),t.pageProp.acf.map_present?o("div",[o("Maps",{attrs:{id:"map-area"}})],1):t._e()],1)},a=[],s=(o("28a5"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.contentProp&&t.sidebarProp?o("div",{staticClass:"container page-content"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-8"},[o("div",{staticClass:"col",attrs:{id:"text-block-one"}},[o("span",{staticClass:"content-styles",domProps:{innerHTML:t._s(t.post_content)}})])]),o("div",{staticClass:"col-lg-4"},[o("div",{staticClass:"col"},[t.sidebar.includes("SocialMedia")?o("div",{staticClass:"col right-row"},[o("social-media")],1):t._e(),t.sidebar.includes("Slide to Contact")?o("div",{staticClass:"col right-row"},[o("SidebarA",{attrs:{nameValue:"Slide To",slideToTextProp:t.slideToTextProp}})],1):t._e(),o("div",{staticClass:"col right-row"},[t.sidebar.includes("Route To")?o("div",{staticClass:"form-row"},[o("SidebarButton",{attrs:{nameValue:"Route To"}})],1):t._e()]),t.sidebar.includes("AboutEnginSoft")?o("div",{staticClass:"col right-row"},[o("about-enginsoft")],1):t._e(),t.sidebar.includes("ContactBox")?o("div",{staticClass:"col right-row"},[o("address-area")],1):t._e()])])]),o("div")]):t._e()}),r=[],i={methods:{routeTo:function(t){this.$router.push(t)}}},c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"form-row",style:{"border-color":this.$store.state.primary_colour},attrs:{id:"box"}},[o("div",{staticClass:"container"},[o("div",{staticClass:"row justify-content-center",attrs:{id:"social-box"}},[o("AddThis",{attrs:{publicId:"ra-5d20c9b245909795"}})],1)])])])},l=[],u=o("91c5"),d=o.n(u),p={components:{AddThis:d.a}},f=p,m=(o("f600"),o("2877")),h=Object(m["a"])(f,c,l,!1,null,"1ceef73b",null),v=h.exports,_=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.aboutEnginSoft?o("div",{staticClass:"form-row"},[o("div",{staticClass:"col-md",style:{"border-color":this.$store.state.primary_colour},attrs:{id:"box"}},[o("div",{staticClass:"banner-text",style:{"background-color":this.$store.state.primary_colour},attrs:{id:"top-bar"}},[o("font-awesome-icon",{attrs:{icon:"comments"}}),t._v("\n             "+t._s(t.aboutEnginSoft.acf.title)+"\n        ")],1),o("div",{staticClass:"col form-item text-one"},[o("p",[t._v(t._s(t.aboutEnginSoft.acf.text))])]),o("div",{staticClass:"col form-item"},[o("button",{staticClass:"flat-butt",staticStyle:{},style:{"background-color":this.$store.state.quarternary_colour},attrs:{type:"submit"},on:{click:function(e){return t.navigateTo(t.aboutEnginSoft.acf.link)}}},[t._v("\n            "+t._s(t.aboutEnginSoft.acf.buttontext)+"\n          ")])])])]):t._e()])},b=[],g=(o("7514"),o("77de")),y={mixins:[g["a"]],computed:{aboutEnginSoft:function(){return this.$store.state.posts.find(function(t){return"About EnginSoft"==t.post_title})}}},C=y,w=(o("1376"),Object(m["a"])(C,_,b,!1,null,"b5c353ec",null)),x=w.exports,P=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.buttonValue?o("button",{staticClass:"flat-butt",style:{"background-color":this.$store.state.secondary_colour},on:{click:function(e){return t.routeTo(t.buttonValue.acf.route_to_path)}}},[o("font-awesome-icon",{staticClass:"btn-icon",attrs:{icon:t.buttonValue.acf.icon}}),o("span",{staticStyle:{"padding-left":"10px"}},[t._v(t._s(t.buttonValue.acf.text))])],1):t._e()},k=[],S={mixins:[i],props:{nameValue:String},computed:{buttonValue:function(){var t=this;return this.$store.state.posts.find(function(e){return e.post_title==t.nameValue})}}},T=S,$=Object(m["a"])(T,P,k,!1,null,"f849c4b2",null),j=$.exports,q=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.value?o("div",{staticClass:"form-row title-text-alternative text-center"},[o("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#contact-area",expression:"'#contact-area'"}],staticClass:"flat-butt",style:{"background-color":this.$store.state.tertiary_colour}},[o("font-awesome-icon",{attrs:{icon:t.value.acf.icon}}),o("span",{staticStyle:{"padding-left":"10px"}},[t._v(t._s(t.slideToText))])],1)]):t._e()},E=[],B={props:{nameValue:String,slideToTextProp:String},computed:{value:function(){var t=this;return this.$store.state.posts.find(function(e){return e.post_title==t.nameValue})},slideToText:function(){return""!=this.slideToTextProp?this.slideToTextProp:this.value.acf.text}}},A=B,O=Object(m["a"])(A,q,E,!1,null,"4c9739f5",null),I=O.exports,V=function(){var t=this,e=t.$createElement,o=t._self._c||e;return this.$store.state.posts?o("div",[o("div",{staticClass:"form-row",style:{"border-color":this.$store.state.primary_colour},attrs:{id:"box"}},[o("div",{staticClass:"container"},[o("h4",{domProps:{innerHTML:t._s(t.ContactInfo.post_content)}}),o("hr"),o("div",{staticClass:"row content",staticStyle:{margin:"10px"}},[o("div",{staticClass:"col-s marg"},[o("font-awesome-icon",{attrs:{icon:t.ContactInfo.acf.phone_icon}})],1),o("div",{staticClass:"col-s"},[t._v(t._s(t.ContactInfo.acf.phone_number))])]),o("div",{staticClass:"row content",staticStyle:{margin:"10px"}},[o("div",{staticClass:"col-s marg"},[o("font-awesome-icon",{attrs:{icon:t.ContactInfo.acf.email_icon}})],1),o("div",{staticClass:"col-s content"},[t._v(t._s(t.ContactInfo.acf.email_address))])]),o("div",{staticClass:"row content",staticStyle:{margin:"10px"}},[o("div",{staticClass:"col-s marg"},[o("font-awesome-icon",{attrs:{icon:t.ContactInfo.acf.address_icon}})],1),o("div",{staticClass:"col-s",domProps:{innerHTML:t._s(t.ContactInfo.acf.address)}})])])])]):t._e()},D=[],M={computed:{ContactInfo:function(){var t=this.$store.state.posts.find(function(t){return"Contact Info"==t.post_title}),e=t.acf.address.split("\r").join(" <br/>");return t.acf.address=e,t}}},N=M,R=(o("ded2"),Object(m["a"])(N,V,D,!1,null,"737043b8",null)),F=R.exports,L={mixins:[i],components:{SocialMedia:v,AboutEnginsoft:x,SidebarButton:j,SidebarA:I,AddressArea:F},props:{contentProp:String,sidebarProp:Array,slideToTextProp:String},computed:{post_content:function(){return this.contentProp},sidebar:function(){return this.sidebarProp}}},H=L,J=(o("37a7"),Object(m["a"])(H,s,r,!1,null,"57e283d0",null)),z=J.exports,Y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"container page-content"},[t.products[0]?o("div",{staticClass:"row"},[o("div",{staticClass:"col",attrs:{id:"text-block-one"}},[o("div",[o("h2",{staticClass:"title-text"},[t._v(t._s(t.products[0].product_name))]),o("hr",{staticClass:"line",style:{"background-color":this.$store.state.primary_colour}})]),t.products[0].product_description?o("div",[t._v("\n            "+t._s(t.products[0].product_description)+"\n          ")]):t._e()])]):t._e(),t._l(t.products,function(t,e){return o("div",{key:e,staticClass:"row"},[o("div",{staticClass:"container-fluid banner",attrs:{id:"three-bar"}},[o("div",{staticClass:"container page-content"},[o("product",{attrs:{product:t}})],1)])])})],2)])},Z=[],G=(o("7f7f"),o("ac6a"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.product?o("div",[o("b-card-group",{attrs:{deck:""}},[o("b-card",{staticClass:"cardy",staticStyle:{"border-radius":"0px","border-width":"0px"}},[o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[t.product.post_title?o("h4",[t._v("\n              "+t._s(t.product.post_title)+"\n            ")]):t._e(),o("b-card-text",{staticClass:"card-text"},[t.product.acf.top_text?o("span",[t._v("\n                    "+t._s(t.product.acf.top_text)+"\n                ")]):t._e()])],1),o("div",{staticClass:"col-xs-3 mx-auto title-text-alternative text-center"},[t.product.acf.image?o("div",[o("img",{attrs:{src:t.product.acf.image.url}})]):t._e(),t.product.acf.collapsable?o("button",{staticClass:"flat-butt butt",style:{"background-color":this.$store.state.quarternary_colour},attrs:{type:"submit",id:"product-butt"},on:{click:function(e){t.showCollapse=!t.showCollapse}}},[t._v("\n              "+t._s(t.product.acf.collapsable)+"\n            ")]):t._e(),t.product.acf.Scroll_contactform_button?o("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#contact-area",expression:"'#contact-area'"}],staticClass:"flat-butt butt",style:{"background-color":this.$store.state.tertiary_colour},attrs:{id:"product-butt"}},[o("font-awesome-icon",{attrs:{icon:"cogs"}}),o("span",{staticStyle:{"padding-left":"10px"}},[t._v(t._s(t.product.acf.Scroll_contactform_button))])],1):t._e(),t.downloadPresent&&!t.cardIsCollapsable?o("button",{staticClass:"flat-butt butt",style:{"background-color":this.$store.state.tertiary_colour},on:{click:function(e){return t.handleDownload(t.product.acf.download_file)}}},[t._v("\n                    "+t._s(t.product.acf.download_button)+"\n            ")]):t._e()])]),o("div",[t.cardIsCollapsable?o("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse-4 collapse-section"},model:{value:t.showCollapse,callback:function(e){t.showCollapse=e},expression:"showCollapse"}},[o("div",[o("div",[o("span",{staticClass:"content-styles",domProps:{innerHTML:t._s(t.product.post_content)}})]),t.product.acf.collapse_span?o("b",{staticClass:"flat-butt text-center butt",style:{"background-color":this.$store.state.tertiary_colour}},[t._v("\n                  "+t._s(t.product.acf.collapse_span)+"\n                ")]):t._e(),t.downloadPresent?o("b",{staticClass:"flat-butt text-center butt",style:{"background-color":this.$store.state.tertiary_colour},on:{click:function(e){return t.handleDownload(t.product.acf.download_file)}}},[t._v("\n                        "+t._s(t.product.acf.download_button)+"\n                ")]):t._e()])]):t._e(),o("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse-4 collapse-section"},model:{value:t.showForm,callback:function(e){t.showForm=e},expression:"showForm"}},[o("div",{staticClass:"row justify-content-center"},[o("p",[o("b",[t._v("Please enter your details to download the file")])])]),o("contact-form",{attrs:{formType:"Download request",location:this.location,enquiryPresent:!1,buttonText:"Request Download",isDownload:!0}})],1)],1)])],1)],1):t._e()}),Q=[],K=o("5a93"),U={mixins:[g["a"]],components:{ContactForm:K["a"]},props:{product:{type:Object}},computed:{cardIsCollapsable:function(){return""!=this.product.acf.collapsable},downloadPresent:function(){return""!=this.product.acf.download_button&&this.product.acf.download_file},location:function(){return 0!=this.product.acf.download_file?this.product.acf.download_file:""}},data:function(){return{showCollapse:!1,showForm:!1}},methods:{collapsableClick:function(){this.product.acf.download_file&&this.navigateTo(this.product.acf.download_file)},handleDownload:function(){this.product.acf.download_form?this.showForm=!this.showForm:this.navigateTo(this.product.acf.download_file)}}},W=U,X=(o("bbde"),Object(m["a"])(W,G,Q,!1,null,"5d676675",null)),tt=X.exports,et={name:"ProductBlock",components:{Product:tt},props:{productName:{type:String}},computed:{title:function(){return"get the title"},text:function(){return"some text"},posts:function(){return this.$store.state.posts},products:function(){var t=this,e=this.$store.getters.sortedPosts,o=[];return e.forEach(function(e){e.categories.forEach(function(n){n.slug==t.productName&&(e.product_name=n.name,e.product_description=n.description,o.push(e))})}),o}}},ot=et,nt=Object(m["a"])(ot,Y,Z,!1,null,"2d79ea77",null),at=nt.exports,st=function(){var t=this,e=t.$createElement,o=t._self._c||e;return this.$store.state.posts?o("div",[o("div",{staticClass:"container-fluid banner",attrs:{id:"three-bar"}},[o("div",{staticClass:"container"},[o("b-card-group",{attrs:{deck:""}},[o("b-card",{staticClass:"cardy pointer",staticStyle:{"border-radius":"0px","border-width":"0px"},style:{"background-color":this.$store.state.secondary_colour},on:{click:function(e){t.showCollapse=!t.showCollapse}}},[o("div",{staticClass:"text-center"},[o("h4",{staticClass:"title-text-alternative"},[t._v(t._s(t.threeBarBanner.acf.title_one))])]),o("b-card-text",[o("h6",{staticStyle:{color:"white"}},[o("p",[t._v(t._s(t.threeBarBanner.acf.text_one))]),o("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse-4"},model:{value:t.showCollapse,callback:function(e){t.showCollapse=e},expression:"showCollapse"}},[t.threeBarBanner.acf.sub_text_one?o("p",[t._v(t._s(t.threeBarBanner.acf.sub_text_one))]):t._e(),o("ul",{staticClass:"card-body"},[o("li",[t._v("Check the input data and create clear work process")]),o("li",[t._v("Develop a working model within the Tolerance Analysis software")]),o("li",[t._v("Identify the true cause of the problems")]),o("li",[t._v("Define failure conditions")])])])],1)])],1),o("b-card",{staticClass:"cardy pointer",staticStyle:{"border-radius":"0px","border-width":"0px"},style:{"background-color":this.$store.state.primary_colour},on:{click:function(e){t.showCollapse=!t.showCollapse}}},[o("div",{staticClass:"text-center"},[o("h4",{staticClass:"title-text-alternative"},[t._v(t._s(t.threeBarBanner.acf.title_two))])]),o("b-card-text",[o("h6",{staticStyle:{color:"white"}},[o("p",[t._v(t._s(t.threeBarBanner.acf.text_two))]),o("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse-4"},model:{value:t.showCollapse,callback:function(e){t.showCollapse=e},expression:"showCollapse"}},[t.threeBarBanner.acf.sub_text_two?o("p",[t._v(t._s(t.threeBarBanner.acf.sub_text_two))]):t._e(),o("ul",{staticClass:"card-body"},[o("li",[t._v("The customer requirements")]),o("li",[t._v("The design intent was not understood or described correctly")]),o("li",[t._v("Manufacturers were not manufacturing to design")]),o("li",[t._v("Raw materials being supplied with incorrect tolerances")]),o("li",[t._v("Failure conditions defined")]),o("li",[t._v("Understanding consequences of variation")]),o("li",[t._v("Identify the sensitivities of the design to reduce tolerances")]),o("li",[t._v("Convert the requirements to product technical specification")]),o("li",[t._v("Convert these specifications into Assembly/Subassembly dimensional requirements")]),o("li",[t._v("Assign component dimensions to fit the Assembly/Subassembly requirements")])])])],1)])],1),o("b-card",{staticClass:"cardy pointer",staticStyle:{"border-radius":"0px","border-width":"0px"},style:{"background-color":this.$store.state.secondary_colour},on:{click:function(e){t.showCollapse=!t.showCollapse}}},[o("div",{staticClass:"text-center"},[o("h4",{staticClass:"title-text-alternative"},[t._v(t._s(t.threeBarBanner.acf.title_three))])]),o("b-card-text",[o("h6",{staticStyle:{color:"white"}},[o("p",[t._v(t._s(t.threeBarBanner.acf.text_three))]),o("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse-4"},model:{value:t.showCollapse,callback:function(e){t.showCollapse=e},expression:"showCollapse"}},[t.threeBarBanner.acf.sub_text_three?o("p",[t._v(t._s(t.threeBarBanner.acf.sub_text_three))]):t._e(),o("ul",{staticClass:"card-body"},[o("li",[t._v("Designing for intent")]),o("li",[t._v("Design for function and Manufacture to design")]),o("li",[t._v("Functional dimensioning defines a part based on how it functions in the final product")]),o("li",[t._v("Interruptions in manufacturing flows reduced")]),o("li",[t._v("Assemblies fitting together")]),o("li",[t._v("Massive savings in reduced scrap")]),o("li",[t._v("Clients receive their orders faster")]),o("li",[t._v("Reduced costs in all areas of the design and manufacturing process")]),o("li",[t._v("Provide solutions to the individual challenges")]),o("li",[t._v("Give the client a new discipline and route map to improve their design and simulation")])])])],1)])],1)],1)],1)])]):t._e()},rt=[],it={data:function(){return{showCollapse:!1}},computed:{threeBarBanner:function(){return this.$store.state.posts.find(function(t){return t.categories.find(function(t){return"three-bar-banner"===t.cat_name})})}}},ct=it,lt=(o("ed0e"),Object(m["a"])(ct,st,rt,!1,null,"b9985230",null)),ut=lt.exports,dt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("gmap-map",{staticStyle:{width:"100%",height:"400px"},attrs:{center:t.center,zoom:12}},t._l(t.markers,function(e,n){return o("gmap-marker",{key:n,attrs:{position:e.position},on:{click:function(o){t.center=e.position}}})}),1)],1)},pt=[],ft=[{position:{lat:52.385466,lng:-1.557249}}],mt={data:function(){return{center:{lat:52.385466,lng:-1.557249},markers:ft,places:[]}},methods:{setPlace:function(t){this.currentPlace=t},addMarker:function(){if(this.currentPlace){var t={lat:this.currentPlace.geometry.location.lat(),lng:this.currentPlace.geometry.location.lng()};this.markers.push({position:t}),this.places.push(this.currentPlace),this.center=t,this.currentPlace=null}},geolocate:function(){var t=this;navigator.geolocation.getCurrentPosition(function(e){t.center={lat:e.coords.latitude,lng:e.coords.longitude}})}}},ht=mt,vt=Object(m["a"])(ht,dt,pt,!1,null,null,null),_t=vt.exports,bt={components:{ProductBlock:at,PageContent:z,ThreeBarBanner:ut,Maps:_t},props:{pageProp:Object},computed:{productList:function(){return this.pageProp.acf.products.split(" ")}}},gt=bt,yt=(o("546f"),Object(m["a"])(gt,n,a,!1,null,"393df5a6",null));e["a"]=yt.exports},ed0e:function(t,e,o){"use strict";var n=o("39ac"),a=o.n(n);a.a},f329:function(t,e,o){"use strict";var n=o("7191"),a=o.n(n);a.a},f600:function(t,e,o){"use strict";var n=o("2451"),a=o.n(n);a.a}});
//# sourceMappingURL=app.ce86a908.js.map