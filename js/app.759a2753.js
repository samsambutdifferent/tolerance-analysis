(function(t){function e(e){for(var o,r,i=e[0],c=e[1],l=e[2],d=0,p=[];d<i.length;d++)r=i[d],n[r]&&p.push(n[r][0]),n[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],o=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(o=!1)}o&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var o={},n={app:0},s=[];function r(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=o,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(a,o,function(e){return t[e]}.bind(null,o));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var o=a("64a9"),n=a.n(o);n.a},"092b":function(t,e,a){},"0def":function(t,e,a){"use strict";var o=a("f9a6"),n=a.n(o);n.a},"15a6":function(t,e,a){"use strict";var o=a("b3ab"),n=a.n(o);n.a},"1cc1":function(t,e,a){},"1fac":function(t,e,a){},"206a":function(t,e,a){"use strict";var o=a("ad01"),n=a.n(o);n.a},"35f6":function(t,e,a){"use strict";var o=a("a18e"),n=a.n(o);n.a},"3bed":function(t,e,a){"use strict";var o=a("617d"),n=a.n(o);n.a},"4f2d":function(t,e,a){},"503c":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var o=a("2b0e"),n=a("f13c"),s=a.n(n),r=a("ecee"),i=a("c074"),c=a("ad3d");r["c"].add(i["a"]),o["default"].component("font-awesome-icon",c["a"]);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("nav-bar"),this.$store.state.posts.length>0&&this.$store.state.pages.length>0?a("div",[a("router-view",{attrs:{id:"displayed-page"}}),a("footer-area")],1):a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center",staticStyle:{"padding-top":"100px"}},[a("pulse-loader",{attrs:{color:"#003b7d"}})],1)])])],1)},u=[],d=(a("96cf"),a("3b8d")),p=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"view intro hm-purple-light",attrs:{id:t.siteBanner}},[o("b-navbar",{staticClass:"bg-transparent",attrs:{toggleable:"lg",type:"dark",variant:"info"}},[o("b-navbar-brand",{attrs:{href:"#"}},[o("img",{attrs:{id:"nav-logo-img",src:a("b640"),alt:"enginsoft-logo"}}),o("span",{attrs:{id:"nav-logo-text"}},[t._v(t._s(t.siteTitle))])]),o("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),o("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[o("b-navbar-nav",{staticClass:"ml-auto"},[this.$store.getters.homePage?o("b-nav-item",[o("router-link",{attrs:{to:"/"}},[t._v("Home")])],1):t._e(),t._l(this.routes,function(e,a){return o("span",{key:a},[e.acf.show_in_navbar?o("b-nav-item",[o("router-link",{attrs:{to:e.post_title.toLowerCase().replace(/\s/g,"")}},[t._v("\n              "+t._s(e.post_title)+"\n            ")])],1):t._e()],1)})],2)],1)],1),o("div",{staticClass:"container-fluid banner",attrs:{id:"top"}},[o("div",{staticClass:"container",attrs:{id:"text"}},[o("div",{staticClass:"col-md-5"},[o("h1",[t._v(t._s(t.siteTitle))]),o("hr"),o("p",[t._v(t._s(t.siteDescription))])])])])],1)},f=[],m=(a("a481"),a("17fb")),h=a.n(m),v={name:"navbar",data:function(){return{siteTitle:"TOLERANCE ANALYSIS",siteDescription:"EnginSoft are experts in tolerance analysis for engineering design and manufacturing companies that assemble multi-component products."}},computed:{routes:function(){var t=h.a.sortBy(this.$store.state.pages,"menu_order");return t.filter(function(t){return"home"!=t.post_title.toLowerCase().replace(/\s/g,"")})},siteBanner:function(){return"ta_view"}}},_=v,b=(a("35f6"),a("2877")),g=Object(b["a"])(_,p,f,!1,null,"728bf6bc",null),y=g.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("quote"),a("div",{staticClass:"view intro hm-purple-light",style:{backgroundImage:"url('"+this.$store.state.contact_area_background_image.url+"')"}},[a("div",{staticClass:"container",attrs:{id:""}},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-8 mx-auto",attrs:{id:"contact-area"}},[a("div",[t._m(0),a("contact-form",{attrs:{formType:"Enquiry",location:"",enquiryPresent:!0,buttonText:"Submit Your Enquiry",isDownload:!1}})],1)])])])]),a("div",{staticClass:"container-fluid",style:{"background-color":this.$store.state.footer_area_colour},attrs:{id:"contact-bar"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-start"},[a("div",{staticClass:"col content-styles"},[a("h2",[t._v("Contact")]),a("hr"),a("span",{domProps:{innerHTML:t._s(t.ContactInfo.acf.address)}}),a("div",{attrs:{id:"phone-email-section"}},[a("p",[a("font-awesome-icon",{attrs:{id:"icon",icon:t.ContactInfo.acf.phone_icon}}),t._v(t._s(t.ContactInfo.acf.phone_number)+"\n            ")],1),a("p",[a("font-awesome-icon",{attrs:{id:"icon",icon:t.ContactInfo.acf.email_icon}}),t._v(t._s(t.ContactInfo.acf.email_address)+"\n            ")],1)])])])])])],1)},C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row justify-content-center banner-text"},[a("p",[a("b",[t._v("Find the solution to meet your requirements or request a demo")])]),a("p",[t._v("Please call EnginSoft on +44 (0)2476 997160 or use the form below")])])}],x=(a("28a5"),a("7514"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row",attrs:{id:"quote"}},[a("div",{staticClass:"col-12"},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("div",{key:t.quote},[a("h1",{staticClass:"text-center",domProps:{innerHTML:t._s(t.quote)}})])]),a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("div",{key:t.author},[a("h3",{staticClass:"text-center"},[t._v(t._s(t.author))])])])],1)])])}),k=[],P=(a("ac6a"),{data:function(){return{quotes:[],quote:"",author:"",index:0}},mounted:function(){var t=this;this.$store.state.posts.forEach(function(e){e.categories.forEach(function(a){"Quote"==a.cat_name&&t.quotes.push(e)})}),this.quotes.length<1||(this.quote=this.quotes[0].post_content,this.author=this.quotes[0].post_title,this.$nextTick(function(){var t=this;window.setInterval(function(){t.countDown()},3e4)}))},methods:{countDown:function(){this.index>=this.quotes.length&&(this.index=0),this.quote=this.quotes[this.index].post_content,this.author=this.quotes[this.index].post_title,this.index++}}}),S=P,T=(a("e774"),Object(b["a"])(S,x,k,!1,null,null,null)),$=T.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("form",[a("div",{staticClass:"form-row justify-content-center"},[a("div",{staticClass:"col-md"},[a("div",{staticClass:"col form-item"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control form-input",attrs:{type:"text",placeholder:"Name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),a("div",{staticClass:"col form-item"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.company,expression:"company"}],staticClass:"form-control form-input",attrs:{type:"text",placeholder:"Company"},domProps:{value:t.company},on:{input:function(e){e.target.composing||(t.company=e.target.value)}}})]),a("div",{staticClass:"col form-item"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.jobTitle,expression:"jobTitle"}],staticClass:"form-control form-input",attrs:{type:"text",placeholder:"Job Title"},domProps:{value:t.jobTitle},on:{input:function(e){e.target.composing||(t.jobTitle=e.target.value)}}})]),a("div",{staticClass:"col form-item"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control form-input",attrs:{type:"text",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),a("div",{staticClass:"col form-item"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.number,expression:"number"}],staticClass:"form-control form-input",attrs:{type:"text",placeholder:"Phone"},domProps:{value:t.number},on:{keypress:function(e){return t.isNumber(e)},input:function(e){e.target.composing||(t.number=e.target.value)}}})])]),a("div",{staticClass:"col-md"},[t.enquiryPresent?a("div",{staticClass:"col form-item"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.enquiryArea,expression:"enquiryArea"}],staticClass:"form-control form-input",attrs:{placeholder:"Enquiry"},domProps:{value:t.enquiryArea},on:{input:function(e){e.target.composing||(t.enquiryArea=e.target.value)}}})]):t._e(),a("div",{staticClass:"col form-item"},[a("button",{staticClass:"flat-butt",style:{"background-color":this.$store.state.quarternary_colour},attrs:{type:"button"},on:{click:function(e){return t.postValue()}}},[t._v(t._s(t.buttonText))])]),t.errors?a("div",t._l(t.errors,function(e,o){return a("b-alert",{key:o,attrs:{variant:"danger",show:t.errors!=[]}},[t._v(t._s(e))])}),1):t._e()])])])])])},j=[],q=(a("7f7f"),{methods:{omitEvent:function(t){this.$gtm.trackEvent({event:"file: "+t})}}}),B={methods:{navigateTo:function(t){window.open(t,"_blank")}}},A=a("bc3a"),O=a.n(A),I={mixins:[B,q],props:{formType:String,location:String,enquiryPresent:Boolean,buttonText:String,isDownload:Boolean},data:function(){return{name:"",company:"",jobTitle:"",email:"",number:"",enquiryArea:"",errors:[],reg:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/}},methods:{postValue:function(){var t=this;this.errors=[];var e=this.validateFormValues();if(""==e){var a=this.enquiryPresent?"\r\nEnquiry: ".concat(this.enquiryArea):"",o="";o=""!=this.location?"https://tolerance-analysis.co.uk/#".concat(this.location):"https://tolerance-analysis.co.uk/#".concat(this.$route.path);var n="Enquiry Type: ".concat(this.formType," form submission\r\nName :  ").concat(this.name,"\r\nEmail :  ").concat(this.email,"\r\nCompany :  ").concat(this.company,"\r\nJob Title: ").concat(this.jobTitle,"\r\nPhone Number: ").concat(this.number).concat(a,"\r\nLocation:/").concat(o),s={post:"19",author_email:this.email,content:n,author_name:this.name};O.a.post("https://cms.tolerance-analysis.co.uk/wp-json/wp/v2/comments",s).then(function(e){t.resetValues()}).catch(function(e){t.errors.push("Sorry, form not submitted. Possible double submission. Please try again")})}else this.errors.push(e)},validateFormValues:function(){return""==this.name?"Please enter name value":""==this.email?"Please enter an email":this.isEmailValid(this.email)?""==this.number?"Please enter a phone number":"":"Please enter a valid email format"},isEmailValid:function(t){return""==t?"":!!this.reg.test(this.email)},resetValues:function(){this.name="",this.company="",this.jobTitle="",this.email="",this.number="",this.enquiryArea="",this.isDownload&&(this.omitEvent(this.location),this.navigateTo(this.location))},isNumber:function(t){t=t||window.event;var e=t.which?t.which:t.keyCode;if(!(e>31&&(e<48||e>57)&&46!==e&&43!=e))return!0;t.preventDefault()}}},D=I,V=(a("e7e7"),Object(b["a"])(D,E,j,!1,null,"ece0ca82",null)),M=V.exports,N={name:"FooterArea",components:{Quote:$,ContactForm:M},computed:{ContactInfo:function(){var t=this.$store.state.posts.find(function(t){return"Contact Info"==t.post_title}),e=t.acf.address.split("\r"),a="<p>"+e.join(" <p/> <p>")+"<g(p/>";return t.acf.address=a,t}}},R=N,F=(a("7f8e"),Object(b["a"])(R,w,C,!1,null,"5ee10742",null)),L=F.exports,G=a("8a5d"),H={components:{NavBar:y,FooterArea:L,PulseLoader:G["a"]},beforeMount:function(){var t=Object(d["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("getSettings");case 2:return t.next=4,this.$store.dispatch("getPosts");case 4:return t.next=6,this.$store.dispatch("getPages");case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},J=H,z=(a("034f"),Object(b["a"])(J,l,u,!1,null,null,null)),Z=z.exports,Y=a("8c4f"),K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.pageContent?a("div",[a("page",{attrs:{pageProp:t.pageContent}})],1):t._e()},Q=[],W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.pageProp.acf.three_bar_banner?a("three-bar-banner",{staticStyle:{"padding-bottom":"3%"}}):t._e(),this.$store.state.pages?a("div",{staticClass:"container page-content"},[a("div",{staticClass:"row"},[a("page-content",{attrs:{contentProp:t.pageProp.post_content,sidebarProp:t.pageProp.acf.sidebar,slideToTextProp:t.pageProp.acf.slide_to_button_text}})],1),t.productList.length>0?a("div",t._l(t.productList,function(t,e){return a("div",{key:e},[a("product-block",{attrs:{productName:t}})],1)}),0):t._e()]):t._e(),t.pageProp.acf.map_present?a("div",[a("Maps",{attrs:{id:"map-area"}})],1):t._e()],1)},U=[],X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.contentProp&&t.sidebarProp?a("div",{staticClass:"container page-content"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg"},[a("div",{staticClass:"col",attrs:{id:"text-block-one"}},[a("GutenbergDisplay",{attrs:{blocksRaw:t.post_content}})],1)]),t.sidebar.length>0?a("div",{staticClass:"col-lg-4"},[a("div",{staticClass:"col"},[t.sidebar.includes("SocialMedia")?a("div",{staticClass:"col right-row"},[a("social-media")],1):t._e(),t.sidebar.includes("Slide to Contact")?a("div",{staticClass:"col right-row"},[a("SidebarA",{attrs:{nameValue:"Slide To",slideToTextProp:t.slideToTextProp}})],1):t._e(),a("div",{staticClass:"col right-row"},[t.sidebar.includes("Route To")?a("div",{staticClass:"form-row"},[a("SidebarButton",{attrs:{nameValue:"Route To"}})],1):t._e()]),t.sidebar.includes("AboutEnginSoft")?a("div",{staticClass:"col right-row"},[a("about-enginsoft")],1):t._e(),t.sidebar.includes("ContactBox")?a("div",{staticClass:"col right-row"},[a("address-area")],1):t._e()])]):t._e()]),a("div")]):t._e()},tt=[],et={methods:{routeTo:function(t){this.$router.push(t)}}},at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"form-row",style:{"border-color":this.$store.state.primary_colour},attrs:{id:"box"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center",attrs:{id:"social-box"}},[a("AddThis",{attrs:{publicId:"ra-5d20c9b245909795"}})],1)])])])},ot=[],nt=a("91c5"),st=a.n(nt),rt={components:{AddThis:st.a}},it=rt,ct=(a("15a6"),Object(b["a"])(it,at,ot,!1,null,"7a93db2d",null)),lt=ct.exports,ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.aboutEnginSoft?a("div",{staticClass:"form-row"},[a("div",{staticClass:"col-md",style:{"border-color":this.$store.state.primary_colour},attrs:{id:"box"}},[a("div",{staticClass:"banner-text",style:{"background-color":this.$store.state.primary_colour},attrs:{id:"top-bar"}},[a("font-awesome-icon",{attrs:{icon:"comments"}}),t._v("\n             "+t._s(t.aboutEnginSoft.acf.title)+"\n        ")],1),a("div",{staticClass:"col form-item text-one"},[a("p",[t._v(t._s(t.aboutEnginSoft.acf.text))])]),a("div",{staticClass:"col form-item"},[a("button",{staticClass:"flat-butt",staticStyle:{},style:{"background-color":this.$store.state.quarternary_colour},attrs:{type:"submit"},on:{click:function(e){return t.navigateTo(t.aboutEnginSoft.acf.link)}}},[t._v("\n            "+t._s(t.aboutEnginSoft.acf.buttontext)+"\n          ")])])])]):t._e()])},dt=[],pt={mixins:[B],computed:{aboutEnginSoft:function(){return this.$store.state.posts.find(function(t){return"About EnginSoft"==t.post_title})}}},ft=pt,mt=(a("0def"),Object(b["a"])(ft,ut,dt,!1,null,"1804b6d2",null)),ht=mt.exports,vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.buttonValue?a("button",{staticClass:"flat-butt",style:{"background-color":this.$store.state.secondary_colour},on:{click:function(e){return t.routeTo(t.buttonValue.acf.route_to_path)}}},[a("font-awesome-icon",{staticClass:"btn-icon",attrs:{icon:t.buttonValue.acf.icon}}),a("span",{staticStyle:{"padding-left":"10px"}},[t._v(t._s(t.buttonValue.acf.text))])],1):t._e()},_t=[],bt={mixins:[et],props:{nameValue:String},computed:{buttonValue:function(){var t=this;return this.$store.state.posts.find(function(e){return e.post_title==t.nameValue})}}},gt=bt,yt=Object(b["a"])(gt,vt,_t,!1,null,"4e9056cd",null),wt=yt.exports,Ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.value?a("div",{staticClass:"form-row title-text-alternative text-center"},[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#contact-area",expression:"'#contact-area'"}],staticClass:"flat-butt",style:{"background-color":this.$store.state.tertiary_colour}},[a("font-awesome-icon",{attrs:{icon:t.value.acf.icon}}),a("span",{staticStyle:{"padding-left":"10px"}},[t._v(t._s(t.slideToText))])],1)]):t._e()},xt=[],kt={props:{nameValue:String,slideToTextProp:String},computed:{value:function(){var t=this;return this.$store.state.posts.find(function(e){return e.post_title==t.nameValue})},slideToText:function(){return""!=this.slideToTextProp?this.slideToTextProp:this.value.acf.text}}},Pt=kt,St=Object(b["a"])(Pt,Ct,xt,!1,null,"7fdf318c",null),Tt=St.exports,$t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return this.$store.state.posts?a("div",[a("div",{staticClass:"form-row",style:{"border-color":this.$store.state.primary_colour},attrs:{id:"box"}},[a("div",{staticClass:"container"},[a("GutenbergDisplay",{attrs:{blocksRaw:t.ContactInfo.post_content}}),a("hr"),a("div",{staticClass:"row content",staticStyle:{margin:"10px"}},[a("div",{staticClass:"col-s marg"},[a("font-awesome-icon",{attrs:{icon:t.ContactInfo.acf.phone_icon}})],1),a("div",{staticClass:"col-s"},[t._v(t._s(t.ContactInfo.acf.phone_number))])]),a("div",{staticClass:"row content",staticStyle:{margin:"10px"}},[a("div",{staticClass:"col-s marg"},[a("font-awesome-icon",{attrs:{icon:t.ContactInfo.acf.email_icon}})],1),a("div",{staticClass:"col-s content"},[t._v(t._s(t.ContactInfo.acf.email_address))])]),a("div",{staticClass:"row content",staticStyle:{margin:"10px"}},[a("div",{staticClass:"col-s marg"},[a("font-awesome-icon",{attrs:{icon:t.ContactInfo.acf.address_icon}})],1),a("div",{staticClass:"col-s",domProps:{innerHTML:t._s(t.ContactInfo.acf.address)}})])],1)])]):t._e()},Et=[],jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-styles"},t._l(t.blocksFormatted,function(e,o){return a("div",{key:o},[a("span",{staticClass:"content-styles",domProps:{innerHTML:t._s(e)}})])}),0)},qt=[],Bt=(a("6762"),a("2fdb"),a("4917"),{methods:{extract_gp_blocks:function(t,e){var a=this.split(t);return this.formatBlocks(a,e)},split:function(t){var e=t.replace(/(\r\n|\n|\r)/gm,""),a=/(?<=<!-- wp:[a-zA-Z-/]*({? [\s\S]*})? -->)(.*?)(?=<!-- \/wp:[a-zA-Z-/]* -->)/g;return e.match(a)},formatBlocks:function(t,e){return t.forEach(function(a,o){if(a.includes("wp-block-embed-youtube")){var n=/(?<=">https:\/\/)(.*?)(?=<\/div>)/g,s=null!=a.match(n)?a.match(n)[0]:"",r=/(?<=<figcaption>)(.*?)(?=<\/figcaption>)/g,i=null!=a.match(r)?a.match(r)[0]:"",c=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/,l=s.match(c),u=l&&11===l[2].length?l[2]:null;t[o]='<div class="video-box text-center"><div class="iframe-container"><iframe src="//www.youtube.com/embed/'+u+'?modestbranding=1&autohide=1&showinfo=0&controls=0&rel=0" frameborder="0" allowfullscreen></iframe> </div><p class=\'figureCaption\'>'+i+"</p></div>"}if(a.includes("wp-block-button")){var d=/(?<=href=")(.*?)(?=">)/g,p=null!=a.match(d)?a.match(d)[0]:"",f=/(?<=href="[^]*">)(.*?)(?=<\/a><\/div>)/g,m=null!=a.match(f)?a.match(f)[0]:"",h=a.includes("#")?"":'target="_blank" ';t[o]='<div class="text-center"><a class="flat-butt text-center" style="max-width: 560px; align: center; background-color: '+e+'" '+h+' href="'+p+'" ><span style="padding-left: 10px;"> '+m+'</span></a></div">'}}),t}}}),At={mixins:[Bt],props:{blocksRaw:String},computed:{blocksFormatted:function(){return this.extract_gp_blocks(this.blocksRaw,this.$store.state.tertiary_colour)}}},Ot=At,It=(a("a2b0"),Object(b["a"])(Ot,jt,qt,!1,null,"6ac9988b",null)),Dt=It.exports,Vt={components:{GutenbergDisplay:Dt},computed:{ContactInfo:function(){var t=this.$store.state.posts.find(function(t){return"Contact Info"==t.post_title}),e=t.acf.address.split("\r").join(" <br/>");return t.acf.address=e,t}}},Mt=Vt,Nt=(a("84d8"),Object(b["a"])(Mt,$t,Et,!1,null,"63768c05",null)),Rt=Nt.exports,Ft={mixins:[et],components:{SocialMedia:lt,AboutEnginsoft:ht,SidebarButton:wt,SidebarA:Tt,AddressArea:Rt,GutenbergDisplay:Dt},props:{contentProp:String,sidebarProp:Array,slideToTextProp:String},computed:{post_content:function(){return this.contentProp},sidebar:function(){return this.sidebarProp}}},Lt=Ft,Gt=(a("3bed"),Object(b["a"])(Lt,X,tt,!1,null,"ae3d5ffc",null)),Ht=Gt.exports,Jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container page-content"},[t.products[0]?a("div",{staticClass:"row"},[a("div",{staticClass:"col",attrs:{id:"text-block-one"}},[a("div",[a("h2",{staticClass:"title-text"},[t._v(t._s(t.products[0].product_name))]),a("hr",{staticClass:"line",style:{"background-color":this.$store.state.primary_colour}})]),t.products[0].product_description?a("div",[t._v("\n            "+t._s(t.products[0].product_description)+"\n          ")]):t._e()])]):t._e(),t._l(t.products,function(t,e){return a("div",{key:e,staticClass:"row"},[a("div",{staticClass:"container-fluid banner",attrs:{id:"three-bar"}},[a("div",{staticClass:"container page-content"},[a("product",{attrs:{product:t}})],1)])])})],2)])},zt=[],Zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.product?a("div",[a("b-card-group",{attrs:{deck:""}},[a("b-card",{staticClass:"cardy",staticStyle:{"border-radius":"0px","border-width":"0px"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[t.product.post_title?a("h4",[t._v(t._s(t.product.post_title))]):t._e(),a("b-card-text",{staticClass:"card-text"},[t.product.acf.top_text?a("span",[t._v(t._s(t.product.acf.top_text))]):t._e()])],1),a("div",{staticClass:"col-xs-3 mx-auto title-text-alternative text-center"},[t.product.acf.image?a("div",[a("img",{attrs:{src:t.product.acf.image.url}})]):t._e(),t.product.acf.collapsable?a("button",{staticClass:"flat-butt butt",style:{"background-color":this.$store.state.quarternary_colour},attrs:{type:"submit",id:"product-butt"},on:{click:function(e){t.showCollapse=!t.showCollapse,t.showForm=!1}}},[t._v(t._s(t.product.acf.collapsable))]):t._e(),t.product.acf.Scroll_contactform_button?a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#contact-area",expression:"'#contact-area'"}],staticClass:"flat-butt butt",style:{"background-color":this.$store.state.tertiary_colour},attrs:{id:"product-butt"}},[a("font-awesome-icon",{attrs:{icon:"cogs"}}),a("span",{staticStyle:{"padding-left":"10px"}},[t._v("\n              "+t._s(t.product.acf.Scroll_contactform_button)+"\n            ")])],1):t._e(),t.downloadPresent&&!t.cardIsCollapsable?a("button",{staticClass:"download_button flat-butt butt",style:{"background-color":this.$store.state.tertiary_colour},attrs:{id:t.product.acf.download_file},on:{click:function(e){return t.handleDownload(t.product.acf.download_file)}}},[t._v(t._s(t.product.acf.download_button))]):t._e()])]),a("div",[t.cardIsCollapsable?a("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse-4 collapse-section"},model:{value:t.showCollapse,callback:function(e){t.showCollapse=e},expression:"showCollapse"}},[a("div",[a("div",{staticClass:"content-styles"},[a("GutenbergDisplay",{attrs:{blocksRaw:t.product.post_content}})],1),t.product.acf.collapse_span?a("b",{staticClass:"flat-butt text-center butt",style:{"background-color":this.$store.state.tertiary_colour}},[t._v(t._s(t.product.acf.collapse_span))]):t._e(),t.downloadPresent?a("b",{staticClass:"flat-butt text-center butt",style:{"background-color":this.$store.state.tertiary_colour},on:{click:function(e){return t.handleDownload(t.product.acf.download_file)}}},[t._v(t._s(t.product.acf.download_button))]):t._e()])]):t._e(),a("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse-4 collapse-section"},model:{value:t.showForm,callback:function(e){t.showForm=e},expression:"showForm"}},[a("div",{staticClass:"row justify-content-center"},[a("p",[a("b",[t._v("Please enter your details to download the file")])])]),a("contact-form",{attrs:{formType:"Download request",location:this.location,enquiryPresent:!1,buttonText:"Request Download",isDownload:!0}})],1)],1)])],1)],1):t._e()},Yt=[],Kt={mixins:[B,q],components:{ContactForm:M,GutenbergDisplay:Dt},props:{product:{type:Object}},computed:{cardIsCollapsable:function(){return""!=this.product.acf.collapsable},downloadPresent:function(){return""!=this.product.acf.download_button&&this.product.acf.download_file},location:function(){return 0!=this.product.acf.download_file?this.product.acf.download_file:""}},data:function(){return{showCollapse:!1,showForm:!1}},methods:{collapsableClick:function(){this.product.acf.download_file&&this.navigateTo(this.product.acf.download_file)},handleDownload:function(){this.product.acf.download_form?this.showForm=!this.showForm:(this.omitEvent(this.product.acf.download_file),this.navigateTo(this.product.acf.download_file))}}},Qt=Kt,Wt=(a("206a"),Object(b["a"])(Qt,Zt,Yt,!1,null,"1642b798",null)),Ut=Wt.exports,Xt={name:"ProductBlock",components:{Product:Ut},props:{productName:{type:String}},computed:{title:function(){return"get the title"},text:function(){return"some text"},posts:function(){return this.$store.state.posts},products:function(){var t=this,e=this.$store.getters.sortedPosts,a=[];return e.forEach(function(e){e.categories.forEach(function(o){o.slug==t.productName&&(e.product_name=o.name,e.product_description=o.description,a.push(e))})}),a}}},te=Xt,ee=Object(b["a"])(te,Jt,zt,!1,null,"6fce3380",null),ae=ee.exports,oe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return this.$store.state.posts?a("div",[a("div",{staticClass:"container-fluid banner",attrs:{id:"three-bar"}},[a("div",{staticClass:"container"},[a("b-card-group",{attrs:{deck:""}},[a("b-card",{staticClass:"cardy pointer",staticStyle:{"border-radius":"0px","border-width":"0px"},style:{"background-color":this.$store.state.secondary_colour},on:{click:function(e){t.showCollapse=!t.showCollapse}}},[a("div",{staticClass:"text-center"},[a("h4",{staticClass:"title-text-alternative"},[t._v(t._s(t.threeBarBanner.acf.title_one))])]),a("b-card-text",[a("h6",{staticStyle:{color:"white"}},[a("p",[t._v(t._s(t.threeBarBanner.acf.text_one))]),a("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse-4"},model:{value:t.showCollapse,callback:function(e){t.showCollapse=e},expression:"showCollapse"}},[t.threeBarBanner.acf.sub_text_one?a("p",[t._v(t._s(t.threeBarBanner.acf.sub_text_one))]):t._e(),a("ul",{staticClass:"card-body"},[a("li",[t._v("Check the input data and create clear work process")]),a("li",[t._v("Develop a working model within the Tolerance Analysis software")]),a("li",[t._v("Identify the true cause of the problems")]),a("li",[t._v("Define failure conditions")])])])],1)])],1),a("b-card",{staticClass:"cardy pointer",staticStyle:{"border-radius":"0px","border-width":"0px"},style:{"background-color":this.$store.state.primary_colour},on:{click:function(e){t.showCollapse=!t.showCollapse}}},[a("div",{staticClass:"text-center"},[a("h4",{staticClass:"title-text-alternative"},[t._v(t._s(t.threeBarBanner.acf.title_two))])]),a("b-card-text",[a("h6",{staticStyle:{color:"white"}},[a("p",[t._v(t._s(t.threeBarBanner.acf.text_two))]),a("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse-4"},model:{value:t.showCollapse,callback:function(e){t.showCollapse=e},expression:"showCollapse"}},[t.threeBarBanner.acf.sub_text_two?a("p",[t._v(t._s(t.threeBarBanner.acf.sub_text_two))]):t._e(),a("ul",{staticClass:"card-body"},[a("li",[t._v("The customer requirements")]),a("li",[t._v("The design intent was not understood or described correctly")]),a("li",[t._v("Manufacturers were not manufacturing to design")]),a("li",[t._v("Raw materials being supplied with incorrect tolerances")]),a("li",[t._v("Failure conditions defined")]),a("li",[t._v("Understanding consequences of variation")]),a("li",[t._v("Identify the sensitivities of the design to reduce tolerances")]),a("li",[t._v("Convert the requirements to product technical specification")]),a("li",[t._v("Convert these specifications into Assembly/Subassembly dimensional requirements")]),a("li",[t._v("Assign component dimensions to fit the Assembly/Subassembly requirements")])])])],1)])],1),a("b-card",{staticClass:"cardy pointer",staticStyle:{"border-radius":"0px","border-width":"0px"},style:{"background-color":this.$store.state.secondary_colour},on:{click:function(e){t.showCollapse=!t.showCollapse}}},[a("div",{staticClass:"text-center"},[a("h4",{staticClass:"title-text-alternative"},[t._v(t._s(t.threeBarBanner.acf.title_three))])]),a("b-card-text",[a("h6",{staticStyle:{color:"white"}},[a("p",[t._v(t._s(t.threeBarBanner.acf.text_three))]),a("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse-4"},model:{value:t.showCollapse,callback:function(e){t.showCollapse=e},expression:"showCollapse"}},[t.threeBarBanner.acf.sub_text_three?a("p",[t._v(t._s(t.threeBarBanner.acf.sub_text_three))]):t._e(),a("ul",{staticClass:"card-body"},[a("li",[t._v("Designing for intent")]),a("li",[t._v("Design for function and Manufacture to design")]),a("li",[t._v("Functional dimensioning defines a part based on how it functions in the final product")]),a("li",[t._v("Interruptions in manufacturing flows reduced")]),a("li",[t._v("Assemblies fitting together")]),a("li",[t._v("Massive savings in reduced scrap")]),a("li",[t._v("Clients receive their orders faster")]),a("li",[t._v("Reduced costs in all areas of the design and manufacturing process")]),a("li",[t._v("Provide solutions to the individual challenges")]),a("li",[t._v("Give the client a new discipline and route map to improve their design and simulation")])])])],1)])],1)],1)],1)])]):t._e()},ne=[],se={data:function(){return{showCollapse:!1}},computed:{threeBarBanner:function(){return this.$store.state.posts.find(function(t){return t.categories.find(function(t){return"three-bar-banner"===t.cat_name})})}}},re=se,ie=(a("b0ee"),Object(b["a"])(re,oe,ne,!1,null,"01f48676",null)),ce=ie.exports,le=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ue=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container-fluid",attrs:{id:"map"}},[a("div",{staticClass:"embed-responsive embed-responsive-21by9"},[a("iframe",{staticStyle:{border:"0"},attrs:{frameborder:"0",src:"https://www.google.com/maps/embed/v1/place?q=The%20Venture%20Centre%20%20Sir%20William%20Lyons%20Rd%20%20Coventry%20%20CV4%207EZ&key=AIzaSyBEVi8IMJaOP4MGM7vVGDcWG4SeESPB7E8",allowfullscreen:""}})])])])}],de=[{position:{lat:52.385466,lng:-1.557249}}],pe={data:function(){return{center:{lat:52.385466,lng:-1.557249},markers:de,places:[]}},methods:{setPlace:function(t){this.currentPlace=t},addMarker:function(){if(this.currentPlace){var t={lat:this.currentPlace.geometry.location.lat(),lng:this.currentPlace.geometry.location.lng()};this.markers.push({position:t}),this.places.push(this.currentPlace),this.center=t,this.currentPlace=null}},geolocate:function(){var t=this;navigator.geolocation.getCurrentPosition(function(e){t.center={lat:e.coords.latitude,lng:e.coords.longitude}})}}},fe=pe,me=(a("d16f"),Object(b["a"])(fe,le,ue,!1,null,"1bbdfa1f",null)),he=me.exports,ve={components:{ProductBlock:ae,PageContent:Ht,ThreeBarBanner:ce,Maps:he},props:{pageProp:Object},computed:{productList:function(){return this.pageProp.acf.products.split(" ")}}},_e=ve,be=(a("75a1"),Object(b["a"])(_e,W,U,!1,null,"7ffce976",null)),ge=be.exports,ye={name:"home",props:["name"],components:{Page:ge},computed:{pageContent:function(){var t=this;return this.$store.state.pages.find(function(e){return e.post_title.toLowerCase().replace(/\s/g,"")==t.componentName.toLowerCase()})},componentName:function(){return void 0==this.name?"home":this.name.toLowerCase().replace(/\s/g,"")}}},we=ye,Ce=Object(b["a"])(we,K,Q,!1,null,"055f6ff2",null),xe=Ce.exports;o["default"].use(Y["a"]);var ke=new Y["a"]({mode:"hash",base:"",routes:[{path:"/",name:"home",component:xe},{path:"/:name",name:"home",props:!0,component:xe}]}),Pe=(a("55dd"),a("2f62")),Se="https://cms.tolerance-analysis.co.uk/wp-json/",Te="TA";o["default"].use(Pe["a"]);var $e=new Pe["a"].Store({state:{pages:[],posts:[],primary_colour:"",secondary_colour:"",tertiary_colour:"",quarternary_colour:"",footer_area_colour:"",contact_area_background_image:{}},getters:{homePage:function(t){return t.pages.find(function(t){return"Home"==t.post_title})},sortedPosts:function(t){return t.posts.sort(function(t,e){return t.acf.order-e.acf.order})}},mutations:{addSettings:function(t,e){var a=e.find(function(t){return"settingspage.php"==t.template});t.primary_colour=a.acf.primary_colour,t.secondary_colour=a.acf.secondary_colour,t.tertiary_colour=a.acf.tertiary_colour,t.quarternary_colour=a.acf.quarternary_colour,t.footer_area_colour=a.acf.footer_area_colour,t.contact_area_background_image=a.acf.contact_area_background_image},addPages:function(t,e){t.pages=e},addPosts:function(t,e){t.posts=e}},actions:{getSettings:function(){var t=Object(d["a"])(regeneratorRuntime.mark(function t(e){var a,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,o={},t.next=4,O.a.get(Se+Te+"/settings").then(function(t){o=t.data,a("addSettings",o)}).catch(function(t){console.log(t)});case 4:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),getPages:function(){var t=Object(d["a"])(regeneratorRuntime.mark(function t(e){var a,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,o={},t.next=4,O.a.get(Se+Te+"/pages").then(function(t){o=t.data,a("addPages",o)}).catch(function(t){console.log(t)});case 4:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),getPosts:function(){var t=Object(d["a"])(regeneratorRuntime.mark(function t(e){var a,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,o={},t.next=4,O.a.get(Se+Te+"/posts").then(function(t){o=t.data,a("addPosts",o)}).catch(function(t){console.log(t)});case 4:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}()}}),Ee=a("5f5b"),je=(a("f9e3"),a("2dd8"),a("755e")),qe=a("1ad2"),Be=a.n(qe);o["default"].use(Be.a,{id:"GTM-K5CMD7R"}),o["default"].use(s.a,{container:"body",duration:500,easing:"ease",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0}),o["default"].use(Ee["a"]),o["default"].use(je,{load:{key:"AIzaSyAa5TSKIY7nhJ0VZV8koYtxJeH8_Ia7Gi8"}}),o["default"].config.productionTip=!1,new o["default"]({router:ke,store:$e,render:function(t){return t(Z)}}).$mount("#app")},"5de7":function(t,e,a){},"617d":function(t,e,a){},"64a9":function(t,e,a){},"75a1":function(t,e,a){"use strict";var o=a("f822"),n=a.n(o);n.a},"7f8e":function(t,e,a){"use strict";var o=a("5de7"),n=a.n(o);n.a},"84d8":function(t,e,a){"use strict";var o=a("092b"),n=a.n(o);n.a},a18e:function(t,e,a){},a2b0:function(t,e,a){"use strict";var o=a("1fac"),n=a.n(o);n.a},a5fd:function(t,e,a){},ad01:function(t,e,a){},b0ee:function(t,e,a){"use strict";var o=a("503c"),n=a.n(o);n.a},b3ab:function(t,e,a){},b640:function(t,e,a){t.exports=a.p+"img/logo.e5ff8fc2.jpg"},d16f:function(t,e,a){"use strict";var o=a("a5fd"),n=a.n(o);n.a},e774:function(t,e,a){"use strict";var o=a("1cc1"),n=a.n(o);n.a},e7e7:function(t,e,a){"use strict";var o=a("4f2d"),n=a.n(o);n.a},f822:function(t,e,a){},f9a6:function(t,e,a){}});
//# sourceMappingURL=app.759a2753.js.map