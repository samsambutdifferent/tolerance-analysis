(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"3bdb":function(t,o,e){"use strict";var s=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("div",{staticClass:"container page-content"},[t.products[0]?e("div",{staticClass:"row"},[e("div",{staticClass:"col",attrs:{id:"text-block-one"}},[e("div",[e("h2",{staticClass:"title-text"},[t._v(t._s(t.products[0].product_name))]),e("hr",{staticClass:"line",style:{"background-color":this.$store.state.primary_colour}})]),t.products[0].product_description?e("div",[t._v("\n            "+t._s(t.products[0].product_description)+"\n          ")]):t._e()])]):t._e(),t._l(t.products,function(t,o){return e("div",{key:o,staticClass:"row"},[e("div",{staticClass:"container-fluid banner",attrs:{id:"three-bar"}},[e("div",{staticClass:"container page-content"},[e("product",{attrs:{product:t}})],1)])])})],2)])},a=[],n=(e("7f7f"),e("ac6a"),function(){var t=this,o=t.$createElement,e=t._self._c||o;return t.product?e("div",[e("b-card-group",{attrs:{deck:""}},[e("b-card",{staticClass:"cardy",staticStyle:{"border-radius":"0px","border-width":"0px"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[t.product.post_title?e("h4",[t._v("\n              "+t._s(t.product.post_title)+"\n            ")]):t._e(),e("b-card-text",{staticClass:"card-text"},[t.product.acf.top_text?e("span",[t._v("\n                    "+t._s(t.product.acf.top_text)+"\n                ")]):t._e()])],1),e("div",{staticClass:"col-xs-3 mx-auto title-text-alternative text-center"},[t.product.acf.image?e("div",[e("img",{attrs:{src:t.product.acf.image.url}})]):t._e(),t.product.acf.collapsable?e("button",{staticClass:"flat-butt butt",style:{"background-color":this.$store.state.quarternary_colour},attrs:{type:"submit",id:"product-butt"},on:{click:function(o){t.showCollapse=!t.showCollapse}}},[t._v("\n              "+t._s(t.product.acf.collapsable)+"\n            ")]):t._e(),t.product.acf.Scroll_contactform_button?e("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#contact-area",expression:"'#contact-area'"}],staticClass:"flat-butt butt",style:{"background-color":this.$store.state.tertiary_colour},attrs:{id:"product-butt"}},[e("font-awesome-icon",{attrs:{icon:"cogs"}}),e("span",{staticStyle:{"padding-left":"10px"}},[t._v(t._s(t.product.acf.Scroll_contactform_button))])],1):t._e(),t.downloadPresent&&!t.cardIsCollapsable?e("button",{staticClass:"flat-butt butt",style:{"background-color":this.$store.state.tertiary_colour},on:{click:function(o){return t.handleDownload(t.product.acf.download_file)}}},[t._v("\n                    "+t._s(t.product.acf.download_button)+"\n            ")]):t._e()])]),e("div",[t.cardIsCollapsable?e("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse-4 collapse-section"},model:{value:t.showCollapse,callback:function(o){t.showCollapse=o},expression:"showCollapse"}},[e("div",[e("div",[e("span",{staticClass:"content-styles",domProps:{innerHTML:t._s(t.product.post_content)}})]),t.product.acf.collapse_span?e("b",{staticClass:"flat-butt text-center butt",style:{"background-color":this.$store.state.tertiary_colour}},[t._v("\n                  "+t._s(t.product.acf.collapse_span)+"\n                ")]):t._e(),t.downloadPresent?e("b",{staticClass:"flat-butt text-center butt",style:{"background-color":this.$store.state.tertiary_colour},on:{click:function(o){return t.handleDownload(t.product.acf.download_file)}}},[t._v("\n                        "+t._s(t.product.acf.download_button)+"\n                ")]):t._e()])]):t._e(),e("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse-4 collapse-section"},model:{value:t.showForm,callback:function(o){t.showForm=o},expression:"showForm"}},[e("div",{staticClass:"row justify-content-center"},[e("p",[e("b",[t._v("Please enter your details to download the file")])])]),e("contact-form",{attrs:{formType:"Download request",location:this.location,enquiryPresent:!1,buttonText:"Request Download",isDownload:!0}})],1)],1)])],1)],1):t._e()}),r=[],c=e("77de"),i=e("5a93"),l={mixins:[c["a"]],components:{ContactForm:i["a"]},props:{product:{type:Object}},computed:{cardIsCollapsable:function(){return""!=this.product.acf.collapsable},downloadPresent:function(){return""!=this.product.acf.download_button&&this.product.acf.download_file},location:function(){return 0!=this.product.acf.download_file?this.product.acf.download_file:""}},data:function(){return{showCollapse:!1,showForm:!1}},methods:{collapsableClick:function(){this.product.acf.download_file&&this.navigateTo(this.product.acf.download_file)},handleDownload:function(){this.product.acf.download_form?this.showForm=!this.showForm:this.navigateTo(this.product.acf.download_file)}}},u=l,d=(e("bbde"),e("2877")),p=Object(d["a"])(u,n,r,!1,null,"5d676675",null),f=p.exports,_={name:"ProductBlock",components:{Product:f},props:{productName:{type:String}},computed:{title:function(){return"get the title"},text:function(){return"some text"},posts:function(){return this.$store.state.posts},products:function(){var t=this,o=this.$store.getters.sortedPosts,e=[];return o.forEach(function(o){o.tags.forEach(function(s){s.slug==t.productName&&(o.product_name=s.name,o.product_description=s.description,e.push(o))})}),e}}},b=_,h=Object(d["a"])(b,s,a,!1,null,"2ce22574",null);o["a"]=h.exports},"3dfe":function(t,o,e){},"5deb":function(t,o,e){},"93b9":function(t,o,e){"use strict";e.r(o);var s=function(){var t=this,o=t.$createElement,e=t._self._c||o;return this.$store.state.pages?e("div",{staticClass:"container page-content"},[e("div",{staticClass:"row"},[e("page-content",{attrs:{contentProp:t.resources.post_content,sidebarProp:t.resources.acf.sidebar,slideToTextProp:t.resources.acf.slide_to_button_text}})],1),t.productList.length>0?e("div",t._l(t.productList,function(t,o){return e("div",{key:o},[e("product-block",{attrs:{productName:t}})],1)}),0):t._e()]):t._e()},a=[],n=(e("28a5"),e("3484")),r=e("3bdb"),c={components:{ProductBlock:r["a"],PageContent:n["a"]},computed:{resources:function(){return this.$store.getters.resourcesPage},productList:function(){return this.resources.acf.products.split(" ")}}},i=c,l=e("2877"),u=Object(l["a"])(i,s,a,!1,null,"e4ed20d4",null);o["default"]=u.exports},"9d28":function(t,o,e){"use strict";var s=e("3dfe"),a=e.n(s);a.a},a1594:function(t,o,e){"use strict";e.r(o);var s=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"container page-content"},[e("div",{staticClass:"row"},[e("page-content",{attrs:{contentProp:t.softwareSolutions.post_content,sidebarProp:t.softwareSolutions.acf.sidebar,slideToTextProp:t.softwareSolutions.acf.slide_to_button_text}})],1),t.productList.length>0?e("div",t._l(t.productList,function(t,o){return e("div",{key:o},[e("product-block",{attrs:{productName:t}})],1)}),0):t._e()])},a=[],n=(e("28a5"),e("3484")),r=e("3bdb"),c={components:{PageContent:n["a"],ProductBlock:r["a"]},computed:{softwareSolutions:function(){return this.$store.getters.softwareSolutionsPage},productList:function(){return this.softwareSolutions.acf.products.split(" ")}}},i=c,l=e("2877"),u=Object(l["a"])(i,s,a,!1,null,"07e93451",null);o["default"]=u.exports},b8fa:function(t,o,e){"use strict";e.r(o);var s=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[this.$store.state.pages?e("div",{staticClass:"container page-content"},[e("div",{staticClass:"row"},[e("page-content",{attrs:{contentProp:t.ContactPage.post_content,sidebarProp:t.ContactPage.acf.sidebar,slideToTextProp:t.ContactPage.acf.slide_to_button_text}})],1)]):t._e(),e("div",[e("Maps",{attrs:{id:"map-area"}})],1)])},a=[],n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("gmap-map",{staticStyle:{width:"100%",height:"400px"},attrs:{center:t.center,zoom:12}},t._l(t.markers,function(o,s){return e("gmap-marker",{key:s,attrs:{position:o.position},on:{click:function(e){t.center=o.position}}})}),1)],1)},r=[],c=[{position:{lat:52.385466,lng:-1.557249}}],i={data:function(){return{center:{lat:52.385466,lng:-1.557249},markers:c,places:[]}},methods:{setPlace:function(t){this.currentPlace=t},addMarker:function(){if(this.currentPlace){var t={lat:this.currentPlace.geometry.location.lat(),lng:this.currentPlace.geometry.location.lng()};this.markers.push({position:t}),this.places.push(this.currentPlace),this.center=t,this.currentPlace=null}},geolocate:function(){var t=this;navigator.geolocation.getCurrentPosition(function(o){t.center={lat:o.coords.latitude,lng:o.coords.longitude}})}}},l=i,u=e("2877"),d=Object(u["a"])(l,n,r,!1,null,null,null),p=d.exports,f=e("3484"),_={components:{Maps:p,PageContent:f["a"]},computed:{ContactPage:function(){return this.$store.getters.contactPage}}},b=_,h=(e("9d28"),Object(u["a"])(b,s,a,!1,null,"d9747c14",null));o["default"]=h.exports},bbde:function(t,o,e){"use strict";var s=e("5deb"),a=e.n(s);a.a},c3a6:function(t,o,e){"use strict";e.r(o);var s=function(){var t=this,o=t.$createElement,e=t._self._c||o;return this.$store.state.pages?e("div",{staticClass:"container page-content"},[e("div",{staticClass:"row"},[e("page-content",{attrs:{contentProp:t.trainingCourses.post_content,sidebarProp:t.trainingCourses.acf.sidebar,slideToTextProp:t.trainingCourses.acf.slide_to_button_text}})],1),t.productList.length>0?e("div",t._l(t.productList,function(t,o){return e("div",{key:o},[e("product-block",{attrs:{productName:t}})],1)}),0):t._e()]):t._e()},a=[],n=(e("28a5"),e("3484")),r=e("3bdb"),c={components:{PageContent:n["a"],ProductBlock:r["a"]},computed:{trainingCourses:function(){return this.$store.getters.trainingCoursesPage},productList:function(){return this.trainingCourses.acf.products.split(" ")}}},i=c,l=e("2877"),u=Object(l["a"])(i,s,a,!1,null,"686f53eb",null);o["default"]=u.exports},eb08:function(t,o,e){"use strict";e.r(o);var s=function(){var t=this,o=t.$createElement,e=t._self._c||o;return this.$store.state.pages?e("div",{staticClass:"container page-content"},[e("div",{staticClass:"row"},[e("page-content",{attrs:{contentProp:t.Consultancy.post_content,sidebarProp:t.Consultancy.acf.sidebar,slideToTextProp:t.Consultancy.acf.slide_to_button_text}})],1)]):t._e()},a=[],n=e("3484"),r={components:{PageContent:n["a"]},computed:{Consultancy:function(){return this.$store.getters.consultancyPage}}},c=r,i=e("2877"),l=Object(i["a"])(c,s,a,!1,null,"313566a6",null);o["default"]=l.exports}}]);
//# sourceMappingURL=about.517c9a6b.js.map