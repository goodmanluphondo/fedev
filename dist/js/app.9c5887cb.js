(function(t){function s(s){for(var e,c,o=s[0],l=s[1],r=s[2],d=0,m=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&m.push(i[c][0]),i[c]=0;for(e in l)Object.prototype.hasOwnProperty.call(l,e)&&(t[e]=l[e]);u&&u(s);while(m.length)m.shift()();return n.push.apply(n,r||[]),a()}function a(){for(var t,s=0;s<n.length;s++){for(var a=n[s],e=!0,c=1;c<a.length;c++){var l=a[c];0!==i[l]&&(e=!1)}e&&(n.splice(s--,1),t=o(o.s=a[0]))}return t}var e={},i={app:0},n=[];function c(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"040f438d"}[t]+".js"}function o(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var s=[],a=i[t];if(0!==a)if(a)s.push(a[2]);else{var e=new Promise((function(s,e){a=i[t]=[s,e]}));s.push(a[2]=e);var n,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=c(t);var r=new Error;n=function(s){l.onerror=l.onload=null,clearTimeout(d);var a=i[t];if(0!==a){if(a){var e=s&&("load"===s.type?"missing":s.type),n=s&&s.target&&s.target.src;r.message="Loading chunk "+t+" failed.\n("+e+": "+n+")",r.name="ChunkLoadError",r.type=e,r.request=n,a[1](r)}i[t]=void 0}};var d=setTimeout((function(){n({type:"timeout",target:l})}),12e4);l.onerror=l.onload=n,document.head.appendChild(l)}return Promise.all(s)},o.m=t,o.c=e,o.d=function(t,s,a){o.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,s){if(1&s&&(t=o(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var e in t)o.d(a,e,function(s){return t[s]}.bind(null,e));return a},o.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(s,"a",s),s},o.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},o.p="/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=s,l=l.slice();for(var d=0;d<l.length;d++)s(l[d]);var u=r;n.push([0,"chunk-vendors"]),a()})({0:function(t,s,a){t.exports=a("56d7")},"02fd":function(t,s,a){"use strict";var e=a("0872"),i=a.n(e);i.a},"034f":function(t,s,a){"use strict";var e=a("85ec"),i=a.n(e);i.a},"05ec":function(t,s,a){},"0872":function(t,s,a){},"1d46":function(t,s,a){"use strict";var e=a("369f"),i=a.n(e);i.a},"369f":function(t,s,a){},"56d7":function(t,s,a){"use strict";a.r(s);a("e260"),a("e6cf"),a("cca6"),a("a79d");var e=a("2b0e"),i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"site",attrs:{id:"app"}},[t.modal?a("Modal"):t._e(),a("SiteHeader"),a("router-view")],1)},n=[],c=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"modal-wrapper",on:{click:function(s){return s.target!==s.currentTarget?null:t.closeModal()}}},[1==t.currentModalScreen?a("div",[a("div",{staticClass:"modal"},[a("div",{staticClass:"modal-close",on:{click:function(s){return t.closeModal()}}},[t._v("×")]),t._m(0),t._m(1),a("div",{staticClass:"modal-options"},[a("a",{staticClass:"modal-btn",attrs:{href:"#"},on:{click:function(s){return t.stepBack()}}},[t._v("Back")]),a("a",{staticClass:"modal-btn modal-btn-inverted",attrs:{href:"#"},on:{click:function(s){return t.stepForward()}}},[t._v("Next")])])])]):2==t.currentModalScreen?a("div",[a("div",{staticClass:"modal"},[a("div",{staticClass:"modal-close",on:{click:function(s){return t.closeModal()}}},[t._v("×")]),t._m(2),t._m(3),a("div",{staticClass:"modal-options"},[a("a",{staticClass:"modal-btn",attrs:{href:"#"},on:{click:function(s){return t.stepBack()}}},[t._v("No, Go Back")]),a("a",{staticClass:"modal-btn modal-btn-inverted",attrs:{href:"#"},on:{click:function(s){return t.stepForward()}}},[t._v("Yes, Rollback")])])])]):3==t.currentModalScreen?a("div",[a("div",{staticClass:"modal"},[a("div",{staticClass:"modal-close",on:{click:function(s){return t.closeModal()}}},[t._v("×")]),t._m(4),a("div",{staticClass:"modal-body"},[a("a",{staticClass:"modal-btn modal-btn-inverted",attrs:{href:"#"},on:{click:function(s){return t.closeModal()}}},[t._v("Go to Project")])])])]):t._e()])},o=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"modal-title"},[a("h2",[t._v("Project Rollback")]),a("span",{staticClass:"modal-title-description"},[t._v("Choose a deployment to roll back to")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"modal-body"},[a("ul",{staticClass:"list"},[a("li",{staticClass:"list-item"},[a("div",{staticClass:"list-item-column"},[a("span",{staticClass:"modal-commit-user"},[t._v("Frodo B")])]),a("div",{staticClass:"list-item-column"},[a("span",{staticClass:"modal-commit-number"},[t._v("#7a7df2e")])]),a("div",{staticClass:"list-item-column"},[t._v("15:25 25 09 2019")])]),a("li",{staticClass:"list-item"},[a("div",{staticClass:"list-item-column"},[a("span",{staticClass:"modal-commit-user"},[t._v("Arwen")])]),a("div",{staticClass:"list-item-column"},[a("span",{staticClass:"modal-commit-number"},[t._v("#7a7df2e")])]),a("div",{staticClass:"list-item-column"},[t._v("15:25 25 09 2019")])]),a("li",{staticClass:"list-item"},[a("div",{staticClass:"list-item-column"},[a("span",{staticClass:"modal-commit-user"},[t._v("Bilbo B")])]),a("div",{staticClass:"list-item-column"},[a("span",{staticClass:"modal-commit-number"},[t._v("#7a7df2e")])]),a("div",{staticClass:"list-item-column"},[t._v("15:25 25 09 2019")])]),a("li",{staticClass:"list-item"},[a("div",{staticClass:"list-item-column"},[a("span",{staticClass:"modal-commit-user"},[t._v("Pippin T")])]),a("div",{staticClass:"list-item-column"},[a("span",{staticClass:"modal-commit-number"},[t._v("#7a7df2e")])]),a("div",{staticClass:"list-item-column"},[t._v("15:25 25 09 2019")])]),a("li",{staticClass:"list-item"},[a("div",{staticClass:"list-item-column"},[a("span",{staticClass:"modal-commit-user"},[t._v("Gandalf")])]),a("div",{staticClass:"list-item-column"},[a("span",{staticClass:"modal-commit-number"},[t._v("#7a7df2e")])]),a("div",{staticClass:"list-item-column"},[t._v("15:25 25 09 2019")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"modal-title"},[a("h2",[t._v("Are you sure?")]),a("span",{staticClass:"modal-title-description"},[t._v("Are you sure you want to roll back?")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"modal-body"},[a("div",{staticClass:"modal-deployment"},[a("div",{staticClass:"modal-deployment-user"},[a("h4",[t._v("Pippin Took")]),a("p",[t._v(" This is a generc commit message to be replaced by a real commit message that contains details of the commit. ")])]),a("div",{staticClass:"modal-deployment-info"},[a("div",{staticClass:"modal-commit-time"},[t._v("15:25 25 09 2019")]),a("div",{staticClass:"modal-commit-number"},[t._v("#7a7df2e")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"modal-title"},[a("div",{staticClass:"modal-icon"},[a("div",{staticClass:"modal-icon-check"})]),a("h2",[t._v("Rollback successful")]),a("span",{staticClass:"modal-title-description"},[t._v("Fixed LTE has been rolled back successfully")])])}],l={methods:{closeModal:function(){this.$store.dispatch("closeModal")},stepBack:function(){if(1==this.currentModalScreen)this.$store.dispatch("closeModal");else{var t=this.currentModalScreen-1;this.$store.dispatch("updateModalScreen",t)}},stepForward:function(){var t=this.currentModalScreen+1;this.$store.dispatch("updateModalScreen",t)},handleModalClick:function(){console.log("you have clicked on the modal.")}},computed:{modal:function(){return this.$store.state.modal},currentModalScreen:function(){return this.$store.state.modalScreen}}},r=l,d=(a("c388"),a("2877")),u=Object(d["a"])(r,c,o,!1,null,"3da1117c",null),m=u.exports,v=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("header",[e("div",{staticClass:"logo"},[e("h1",[e("a",{attrs:{href:"#"}},[t._v("dploy")])])]),e("div",{staticClass:"menu"},[e("nav",{staticClass:"menu-links"},[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"menu-icon menu-icon-home"})]),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"menu-icon menu-icon-unknown menu-icon-active"})])])]),e("div",{staticClass:"info"},[e("div",{staticClass:"info-icon"}),e("div",{staticClass:"info-message"},[t._v(" Build on project name completed by person name ")])]),e("div",{staticClass:"menu"},[e("nav",{staticClass:"menu-links"},[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"menu-icon menu-icon-notifications"},[e("span",{staticClass:"menu-icon-option"},[t._v("2")])])]),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"menu-icon menu-icon-alerts"},[e("span",{staticClass:"menu-icon-option menu-icon-cross"},[t._v("×")])])])])]),e("div",{staticClass:"user"},[e("div",{staticClass:"user-details"},[e("div",{staticClass:"user-profile"},[e("div",{staticClass:"user-names"},[t._v("Frodo Baggins")]),e("div",{staticClass:"user-email"},[t._v("frodo@mordor.co")])]),e("div",{staticClass:"user-picture"},[e("img",{attrs:{src:a("c50b")}})])])])])}],f=(a("02fd"),{}),C=Object(d["a"])(f,v,p,!1,null,"541c456a",null),_=C.exports,h={name:"Home",data:function(){return{}},components:{Modal:m,SiteHeader:_},computed:{modal:function(){return this.$store.state.modal}}},b=h,g=(a("034f"),Object(d["a"])(b,i,n,!1,null,null,null)),y=g.exports,k=(a("d3b7"),a("8c4f")),M=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("div",{staticClass:"container"},[a("ProjectDetails"),a("ProjectDisplay")],1)])},w=[],j=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"project-details"},[t._m(0),t._m(1),t._m(2),a("div",{staticClass:"project-options"},[a("a",{staticClass:"btn",attrs:{href:"#"},on:{click:function(s){return t.rollback()}}},[t._v("Rollback")]),a("a",{staticClass:"btn btn-deploy",attrs:{href:"#"}},[t._v("Deploy Now")])]),a("a",{staticClass:"archive",attrs:{href:"#"}},[t._v("Archive Project")])])},S=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"avatar"},[e("img",{attrs:{src:a("7fb7")}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"nav-back"},[a("span",{staticClass:"nav-back-arrow"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"card project-card"},[a("h3",[t._v("Fixed LTE")]),a("p",{staticClass:"description"},[t._v("Node CMS | ~/repo/fixed-wireless")]),a("div",{staticClass:"details"},[a("div",{staticClass:"details-section"},[a("span",{},[t._v("Project ID: 234")]),a("a",{staticClass:"btn btn-gitlab",attrs:{href:"#"}},[t._v("view on gitlab")])]),a("div",{staticClass:"details-section"},[a("span",{},[t._v("Auto Deploy")]),a("span",{staticClass:"toggle"},[a("span",{staticClass:"toggle-switch switched-on"})])]),a("div",{staticClass:"details-section"},[a("span",{},[t._v("Slack Notifications")]),a("span",{staticClass:"toggle"},[a("span",{staticClass:"toggle-switch"})])])])])}],$={methods:{rollback:function(){this.modal||this.$store.dispatch("displayModal")}},computed:{modal:function(){return this.$store.state.modal}}},E=$,P=(a("849d"),Object(d["a"])(E,j,S,!1,null,"7b4d9940",null)),x=P.exports,O=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"project-display"},[a("div",{},[a("div",{staticClass:"section"},[t._m(0),a("div",{staticClass:"card script"},[t._m(1),a("p",[t._v(" if [-f artisan]"),a("br"),t._v(" then"),a("br"),a("span",{domProps:{innerHTML:t._s(t.tab)}}),t._v("php artisan migrate --force"),a("br"),a("span",{domProps:{innerHTML:t._s(t.tab)}}),t._v("php artisan horizon:terminate"),a("br"),t._v(" fi ")]),t._m(2),a("p",[t._v(" if [-f artisan]"),a("br"),t._v(" then"),a("br"),a("span",{domProps:{innerHTML:t._s(t.tab)}}),t._v("php artisan migrate --force"),a("br"),a("span",{domProps:{innerHTML:t._s(t.tab)}}),t._v("php artisan horizon:terminate"),a("br"),t._v(" fi ")])])]),t._m(3),t._m(4),t._m(5)])])},T=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"heading"},[a("h2",[t._v("Dploy Script")]),a("div",{},[a("a",{staticClass:"btn btn-graphical",attrs:{href:"#"}},[a("span",{},[t._v("Edit Script")]),a("span",{staticClass:"icon icon-pen"})])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v(" git pull origin master"),a("br"),t._v(" composer install --no-interaction --prefer-dist --optimize-autoloader"),a("br"),t._v(' echo "" | sudo -S service php7.3-fpm reload ')])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v(" yarn"),a("br"),t._v(" yarn prod ")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"section"},[a("div",{staticClass:"heading"},[a("h2",[t._v("Deployments")]),a("div",{},[a("a",{staticClass:"btn btn-graphical",attrs:{href:"#"}},[a("span",{},[t._v("View Deployment History")]),a("span",{staticClass:"icon icon-history"})])])]),a("div",{staticClass:"deployments"},[a("div",{staticClass:"container"},[a("div",{staticClass:"deployment-details"},[a("div",{staticClass:"card deployment-card success"},[a("div",{staticClass:"commit-details"},[a("h4",[t._v("Froddo Baggins")]),a("p",[t._v(" Commit Details Lorem ipsum dolor sit amet lorem ipsul dolor sit amet amet amet amet. ")])]),a("div",{staticClass:"commit-results"},[a("span",{staticClass:"commit-time"},[a("div",[t._v("15:52 | 23 AUG")]),a("div",{staticClass:"commit-time-icon"})]),a("span",{staticClass:"commit-number"},[t._v("#7a7df2e")])])])]),a("div",{staticClass:"deployment-details"},[a("div",{staticClass:"card deployment-card warning"},[a("div",{staticClass:"commit-details"},[a("h4",[t._v("Bilbbo Baggins")]),a("p",[t._v(" Commit Details Lorem ipsum dolor sit amet lorem ipsul dolor sit amet amet amet amet. ")])]),a("div",{staticClass:"commit-results"},[a("span",{staticClass:"commit-time"},[t._v("15:52 | 23 AUG")]),a("span",{staticClass:"commit-number"},[t._v("#7a7df2e")])])])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"section"},[a("div",{staticClass:"heading"},[a("h2",[t._v("Builds")])]),a("div",{staticClass:"card builds"},[a("div",{staticClass:"alert"},[t._v("There is currently no build history")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"section"},[a("div",{staticClass:"heading"},[a("h2",[t._v("Sentry Issues")]),a("div",{},[a("a",{staticClass:"btn btn-graphical",attrs:{href:"#"}},[a("span",{},[t._v("View on Sentry")]),a("span",{staticClass:"icon icon-sentry"})])])]),a("div",{staticClass:"sentry-issues"},[a("div",{staticClass:"container"},[a("div",{staticClass:"issues"},[a("div",{staticClass:"issues-list"},[a("div",{staticClass:"issues-header"},[a("div",{staticClass:"issue-description"}),a("div",{staticClass:"issue-users"},[t._v("Users Affected")]),a("div",{staticClass:"issue-events"},[t._v("Events")])]),a("div",{staticClass:"issue"},[a("div",{staticClass:"issue-description"},[t._v("UnhandledRejection")]),a("div",{staticClass:"issue-users"},[t._v("265")]),a("div",{staticClass:"issue-events"},[t._v("265")])]),a("div",{staticClass:"issue"},[a("div",{staticClass:"issue-description"},[t._v("UnhandledRejection")]),a("div",{staticClass:"issue-users"},[t._v("265")]),a("div",{staticClass:"issue-events"},[t._v("265")])]),a("div",{staticClass:"issue"},[a("div",{staticClass:"issue-description"},[t._v("UnhandledRejection")]),a("div",{staticClass:"issue-users"},[t._v("265")]),a("div",{staticClass:"issue-events"},[t._v("265")])]),a("div",{staticClass:"issue"},[a("div",{staticClass:"issue-description"},[t._v("UnhandledRejection")]),a("div",{staticClass:"issue-users"},[t._v("265")]),a("div",{staticClass:"issue-events"},[t._v("265")])]),a("div",{staticClass:"issue"},[a("div",{staticClass:"issue-description"},[t._v("UnhandledRejection")]),a("div",{staticClass:"issue-users"},[t._v("265")]),a("div",{staticClass:"issue-events"},[t._v("265")])])])]),a("div",{staticClass:"totals"},[a("div",{staticClass:"totals-blocks"},[a("div",{staticClass:"block affected-users"},[a("span",{staticClass:"block-count"},[t._v("52")]),a("span",{staticClass:"block-text"},[t._v("Affected Users")])]),a("div",{staticClass:"block errors"},[a("span",{staticClass:"block-count"},[t._v("102")]),a("span",{staticClass:"block-text"},[t._v("Errors")])])])])])])])}],B={data:function(){return{tab:"&emsp;"}}},D=B,A=(a("1d46"),Object(d["a"])(D,O,T,!1,null,"ae0993a4",null)),H=A.exports,L={name:"Header",components:{ProjectDetails:x,ProjectDisplay:H}},U=L,R=Object(d["a"])(U,M,w,!1,null,null,null),F=R.exports;e["a"].use(k["a"]);var G=[{path:"/",name:"Home",component:F},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],N=new k["a"]({mode:"history",base:"/",routes:G}),z=N,I=a("2f62");e["a"].use(I["a"]);var J=new I["a"].Store({state:{modal:0,modalScreen:0,selectedDeployment:0},getters:{isModelShowing:function(t){return t.modal}},mutations:{showModal:function(t){t.modal=1,t.modalScreen=1},hideModal:function(t){t.modal=0,t.modalScreen=0},changeModalScreen:function(t,s){t.modalScreen=s}},actions:{displayModal:function(t){var s=t.commit;s("showModal")},closeModal:function(t){var s=t.commit;s("hideModal")},updateModalScreen:function(t,s){var a=t.commit;a("changeModalScreen",s)}},modules:{}});e["a"].config.productionTip=!1,new e["a"]({router:z,store:J,render:function(t){return t(y)}}).$mount("#app")},"7fb7":function(t,s,a){t.exports=a.p+"img/1908-fixed-lte-gitlab-avatar.35616b7a.png"},"849d":function(t,s,a){"use strict";var e=a("c673"),i=a.n(e);i.a},"85ec":function(t,s,a){},c388:function(t,s,a){"use strict";var e=a("05ec"),i=a.n(e);i.a},c50b:function(t,s,a){t.exports=a.p+"img/T189G7EMC-U189XABK7-58e28f9aa76c-48.0adcaa8b.png"},c673:function(t,s,a){}});
//# sourceMappingURL=app.9c5887cb.js.map