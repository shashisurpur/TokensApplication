(this["webpackJsonptokens-app"]=this["webpackJsonptokens-app"]||[]).push([[0],{224:function(e,t,c){},380:function(e,t,c){},382:function(e,t,c){},383:function(e,t,c){},384:function(e,t,c){},385:function(e,t,c){},386:function(e,t,c){},387:function(e,t,c){},388:function(e,t,c){},389:function(e,t,c){},390:function(e,t,c){},422:function(e,t,c){"use strict";c.r(t);var a=c(5),s=c(2),n=c(3),r=c.n(n),o=c(34),i=c.n(o),l=(c(224),c(6)),d=c(10),j=c(91),b=c(26),u=c(8),m=c(43),h=c.n(m),O=c(93),p=c(142),x=(c(229),c(231),c(423),{apiKey:"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/TokensApplication",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).Firebase_API_Key),authDomain:"firestoresample-bdb98.firebaseapp.com",databaseURL:"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/TokensApplication",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).Firebase_Data_Base_URL),projectId:"firestoresample-bdb98",storageBucket:"firestoresample-bdb98.appspot.com",messagingSenderId:"595900204209",appId:"1:595900204209:web:30c7c79706693e71"});p.a.initializeApp(x);var f=p.a,N="USER_LOGIN",v="USER_LOGOUT",g="GET_TOKEN",S="GENERATE_TOKEN",k="GET_STATUS",y=c(14),C=(c(380),{firstName:"",lastName:"",email:"",password:"",confirm_password:""}),E=function(){var e=Object(n.useState)(C),t=Object(b.a)(e,2),c=t[0],r=t[1],o=Object(u.b)(),i=function(e){var t=e.target,s=t.name,n=t.value;r(Object(a.a)(Object(a.a)({},c),{},Object(j.a)({},s,n)))};return Object(u.c)((function(e){return e.auth})).authenticated?Object(s.jsx)(d.a,{to:"/"}):Object(s.jsxs)("div",{className:"signUpForm",children:[Object(s.jsxs)("form",{onSubmit:function(e){var t;e.preventDefault(),c.password===c.confirm_password?o((t=c,function(){var e=Object(O.a)(h.a.mark((function e(c){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=f.firestore(),c({type:"".concat(N,"_REQUEST")}),console.log(t),f.auth().createUserWithEmailAndPassword(t.email,t.password).then((function(e){console.log(e);var s=f.auth().currentUser,n="".concat(t.firstName," ").concat(t.lastName);s.updateProfile({displayName:n}).then((function(){a.collection("users").doc(e.user.uid).set({firstName:t.firstName,lastName:t.lastName,uid:e.user.uid,createdAt:new Date,isOnline:!0}).then((function(){var a={firstName:t.firstName,lastName:t.lastName,uid:e.user.uid,email:t.email};localStorage.setItem("user",JSON.stringify(a)),console.log("User logged in successfully...!"),c({type:"".concat(N,"_SUCCESS"),payload:{user:a}})})).catch((function(e){console.log(e),c({type:"".concat(N,"_FAILURE"),payload:{error:e}})}))}))})).catch();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())):console.log("Please confirm correct password")},children:[Object(s.jsx)("h2",{children:"Create Account"}),Object(s.jsx)("p",{className:"lead",children:"It's free and hardly takes more than 30 seconds."}),Object(s.jsx)("div",{className:"form-group formGroup",children:Object(s.jsxs)("div",{className:"input-group",children:[Object(s.jsx)("span",{className:"input-group-addon",children:Object(s.jsx)("i",{className:"fa fa-user"})}),Object(s.jsx)("input",{type:"text",className:"form-control",name:"firstName",placeholder:"User first name",value:c.firstName,onChange:i,required:"required"})]})}),Object(s.jsx)("div",{className:"form-group formGroup",children:Object(s.jsxs)("div",{className:"input-group",children:[Object(s.jsx)("span",{className:"input-group-addon",children:Object(s.jsx)("i",{className:"fa fa-user"})}),Object(s.jsx)("input",{type:"text",className:"form-control",name:"lastName",placeholder:"User last name",value:c.lastName,onChange:i,required:"required"})]})}),Object(s.jsx)("div",{className:"form-group formGroup",children:Object(s.jsxs)("div",{className:"input-group",children:[Object(s.jsx)("span",{className:"input-group-addon",children:Object(s.jsx)("i",{className:"fa fa-paper-plane"})}),Object(s.jsx)("input",{type:"email",className:"form-control",name:"email",value:c.email,onChange:i,placeholder:"Email Address",required:"required"})]})}),Object(s.jsx)("div",{className:"form-group formGroup",children:Object(s.jsxs)("div",{className:"input-group",children:[Object(s.jsx)("span",{className:"input-group-addon",children:Object(s.jsx)("i",{className:"fa fa-lock"})}),Object(s.jsx)("input",{type:"password",className:"form-control",name:"password",placeholder:"Password",required:"required",value:c.password,onChange:i})]})}),Object(s.jsx)("div",{className:"form-group formGroup",children:Object(s.jsxs)("div",{className:"input-group",children:[Object(s.jsxs)("span",{className:"input-group-addon",children:[Object(s.jsx)("i",{className:"fa fa-lock"}),Object(s.jsx)("i",{className:"fa fa-check"})]}),Object(s.jsx)("input",{type:"password",className:"form-control",name:"confirm_password",placeholder:"Confirm Password",value:c.confirm_password,onChange:i,required:"required"})]})}),Object(s.jsx)("div",{className:"form-group formGroup",children:Object(s.jsx)("div",{className:"d-grid gap-2 col-6 mx-auto",children:Object(s.jsx)("button",{type:"submit",className:"btn btn-primary btn-block btn-lg",children:"Sign Up"})})}),Object(s.jsxs)("p",{className:"small text-center",children:["By clicking the Sign Up button, you agree to our ",Object(s.jsx)("br",{}),Object(s.jsx)(l.b,{to:"/",children:"Terms & Conditions"}),", and",Object(s.jsx)(l.b,{to:"/",children:"Privacy Policy"}),"."]})]}),Object(s.jsxs)("div",{className:"text-center",children:["Already have an account?",Object(s.jsx)(l.b,{to:"/signin",children:"Login here"})]})]})},w=c(54),_=(c(382),{lat:12.97675,lng:77.575279}),T={width:"100%",height:"500px"},U=function(e){var t=[],c=Object(w.e)({googleMapsApiKey:Object({NODE_ENV:"production",PUBLIC_URL:"/TokensApplication",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).Google_Map_API_Key}),a=c.isLoaded,r=c.loadError,o=Object(n.useState)(null),i=Object(b.a)(o,2),d=i[0],j=i[1],u=Object(n.useState)(!1),m=Object(b.a)(u,2),h=m[0],O=m[1],p=Object(n.useRef)();e.clients&&e.clients.map((function(e){return t.push(e)})),Object(n.useEffect)((function(){}),[]);var x=Object(n.useCallback)((function(e){p.current=e}),[]),f=function(){O(!h),j(null)},N={backgroundColor:"#26272b !important"};return r?"Error":a?Object(s.jsx)("div",{className:"cotainer",children:Object(s.jsx)(w.a,{mapContainerStyle:T,onLoad:x,center:_,zoom:12,children:Object(s.jsx)(w.d,{options:{imagePath:"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"},children:function(e){return t.map((function(t){return Object(s.jsx)(w.c,{position:{lat:parseFloat(t.latitude),lng:parseFloat(t.longitude)},clusterer:e,onClick:function(){return e=t,O(!h),void j(e);var e},children:h&&d===t&&Object(s.jsx)(w.b,{options:N,anchor:"infoWindow",onCloseClick:f,children:Object(s.jsxs)("div",{style:{color:"black"},children:[Object(s.jsxs)("h4",{children:[t.name," "]}),Object(s.jsxs)("p",{children:[t.address," "]}),Object(s.jsx)(l.b,{to:"/home/".concat(t.id),children:"Click Me for token "})]})})},t.id)}))}})})}):"Loading..."},F=function(){var e=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null;Object(y.useFirestoreConnect)([{collection:"clients"}]);var t=Object(u.c)((function(e){return e.firestore.ordered.clients}));return e?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("h2",{className:"text-center text-white text-uppercase",children:["welcome ",e.firstName," "]}),Object(s.jsx)("p",{className:"text-center text-white",children:"Get your tokens from the below map"}),Object(s.jsx)(U,{clients:t})]}):Object(s.jsx)(d.a,{to:"/signin"})},R=(c(383),function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),o=Object(b.a)(r,2),i=o[0],j=o[1],m=Object(u.b)();return Object(u.c)((function(e){return e.auth})).authenticated?Object(s.jsx)(d.a,{to:"/"}):Object(s.jsxs)("div",{className:"signinForm",children:[Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m(function(e){return function(t){var c=Object(y.getFirebase)().auth(),a=Object(y.getFirebase)().firestore();t({type:"".concat(N,"_REQUEST")}),c.signInWithEmailAndPassword(e.email,e.password).then((function(e){a.collection("users").doc(e.user.uid).update({isOnline:!0}).then((function(){var c=e.user.displayName.split(" "),a={firstName:c[0],lastName:c[1],uid:e.user.uid,email:e.user.email};localStorage.setItem("user",JSON.stringify(a)),t({type:"".concat(N,"_SUCCESS"),payload:{user:a}})})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e),alert("Wrong password"),t({type:"".concat(N,"_FAILURE"),payload:{error:e}})}))}}({email:c,password:i}))},children:[Object(s.jsx)("h2",{children:"Sign In"}),Object(s.jsx)("div",{className:"form-group formGroup",children:Object(s.jsxs)("div",{className:"input-group",children:[Object(s.jsx)("span",{className:"input-group-addon",children:Object(s.jsx)("i",{className:"fa fa-user"})}),Object(s.jsx)("input",{type:"text",className:"form-control",name:"username",placeholder:"Username",required:"required"})]})}),Object(s.jsx)("div",{className:"form-group formGroup",children:Object(s.jsxs)("div",{className:"input-group",children:[Object(s.jsx)("span",{className:"input-group-addon",children:Object(s.jsx)("i",{className:"fa fa-paper-plane"})}),Object(s.jsx)("input",{type:"email",className:"form-control",name:"email",placeholder:"Email Address",value:c,onChange:function(e){return a(e.target.value)},required:"required"})]})}),Object(s.jsx)("div",{className:"form-group formGroup",children:Object(s.jsxs)("div",{className:"input-group",children:[Object(s.jsx)("span",{className:"input-group-addon",children:Object(s.jsx)("i",{className:"fa fa-lock"})}),Object(s.jsx)("input",{type:"password",className:"form-control",name:"password",value:i,placeholder:"Password",onChange:function(e){return j(e.target.value)},required:"required"})]})}),Object(s.jsx)("div",{className:"form-group text-center formGroup",children:Object(s.jsx)("div",{className:"d-grid gap-2 col-6 mx-auto",children:Object(s.jsx)("button",{type:"submit",className:"btn btn-primary  btn-block ",children:"Sign In"})})}),Object(s.jsxs)("p",{className:"small text-center ",children:["By clicking the Sign Up button, you agree to our ",Object(s.jsx)("br",{}),Object(s.jsx)(l.b,{to:"/",children:"Terms & Conditions"}),", and ",Object(s.jsx)(l.b,{to:"/",children:"Privacy Policy"})]})]}),Object(s.jsxs)("div",{className:"text-center",children:["Does't have an account?",Object(s.jsx)(l.b,{to:"/signup",children:"Create here"})]})]})}),I=(c(384),function(){var e=Object(u.c)((function(e){return e.auth})),t=Object(u.b)(),c=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null;return Object(s.jsx)("nav",{className:"navbar sticky-top navbar-expand-md navbar-dark bg-dark",children:Object(s.jsxs)("div",{className:"container-fluid",children:[Object(s.jsx)(l.b,{className:"navbar-brand",to:"/",children:"TokenApp"}),Object(s.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(s.jsx)("span",{className:"navbar-toggler-icon"})}),c?null:Object(s.jsx)("div",{className:"collapse navbar-collapse justify-content-md-center",id:"navbarSupportedContent",children:Object(s.jsxs)("div",{className:"navbar-nav",children:[Object(s.jsx)(l.c,{className:"nav-link",activeClassName:"active",exact:!0,to:"/signin",children:"sign in"}),Object(s.jsx)(l.c,{className:"nav-link",activeClassName:"active",exact:!0,to:"/signup",children:"Sign Up"})]})}),c?Object(s.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(s.jsxs)("div",{className:"navbar-nav me-auto mr-4 mb-2 mb-lg-0",children:[Object(s.jsx)(l.c,{className:"nav-link",activeClassName:"active",exact:!0,to:"/home",children:"Home"}),Object(s.jsx)(l.c,{className:"nav-link",activeClassName:"active",exact:!0,to:"/markerDetail",children:"client Details"}),Object(s.jsx)(l.c,{className:"nav-link",activeClassName:"active",exact:!0,to:"/contactUs",children:"contact us"})]}),Object(s.jsxs)("div",{className:"d-flex dropdown",children:[Object(s.jsx)("b",{className:"navbar-brand dropdown-toggle",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:Object(s.jsx)("i",{className:"fa fw fa-user fa-1x"})}),Object(s.jsx)("div",{className:"dropdown-menu dropdown-menu-start dropdown-menu-dark","aria-labelledby":"navbarDropdown",children:Object(s.jsxs)("div",{className:"card",children:[Object(s.jsxs)("li",{children:[e.firstName," ",e.lastName]}),Object(s.jsx)("hr",{}),Object(s.jsx)("button",{className:"btn btn-sm btn-danger text-uppercase",onClick:function(){var c;console.log("logout"),t((c=e.uid,function(){var e=Object(O.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"".concat(v,"_REQUEST")}),f.firestore().collection("users").doc(c).update({isOnline:!1}).then((function(){f.auth().signOut().then((function(){localStorage.clear(),t({type:"".concat(v,"_SUCCESS")})})).catch((function(e){console.log(e),t({type:"".concat(v,"_FAILURE"),payload:{error:e}})}))})).catch((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),localStorage.clear()},children:"logout"})]})})]})]}):null]})})}),A=(c(385),function(e){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(I,{}),Object(s.jsx)("div",{className:"customeContainer",children:e.children})]})}),D=c(218),P=function(e){var t=e.component,c=Object(D.a)(e,["component"]),n=Object(u.c)((function(e){return e.auth}));return Object(s.jsx)(d.b,Object(a.a)(Object(a.a)({},c),{},{component:function(e){return"admin@gmail.com"===n.email?Object(s.jsx)(t,Object(a.a)({},e)):Object(s.jsx)(d.a,{to:"/home"})}}))},L=(c(386),function(){var e=Object(u.c)((function(e){return e.auth}));return Object(n.useEffect)((function(){}),[]),e.authenticated?Object(s.jsx)("div",{children:"Dash Board"}):Object(s.jsx)(d.a,{to:"/home"})}),G=(c(387),function(){return Object(s.jsx)("div",{children:Object(s.jsxs)("footer",{className:"site-footer",children:[Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("div",{className:"row",children:[Object(s.jsxs)("div",{className:"col-sm-12 col-md-6",children:[Object(s.jsx)("h6",{className:"",children:"About"}),Object(s.jsx)("p",{className:"text-justify text-white",children:"An enthusiastic engineering fresher who is a self-starter and capable to use technical skills for the betterment of the organization. A master\u2019s degree in Software Engineering has enhanced my proficiency in developing web and Mobile applications and looking forward to work in a competitive environment that enhances overall learning."})]}),Object(s.jsxs)("div",{className:"col-xs-6 col-md-3",children:[Object(s.jsx)("h6",{children:"skills"}),Object(s.jsxs)("ul",{className:"footer-links text-white",children:[Object(s.jsx)("li",{children:"Java Script"}),Object(s.jsx)("li",{children:"React Js"}),Object(s.jsx)("li",{children:"Java"}),Object(s.jsx)("li",{children:"Android"})]})]}),Object(s.jsxs)("div",{className:"col-xs-6 col-md-3",children:[Object(s.jsx)("h6",{children:"Quick Links"}),Object(s.jsx)("ul",{className:"footer-links text-white",children:Object(s.jsxs)("li",{children:[Object(s.jsx)("a",{href:"https://mail.google.com/mail/u/0/#inbox?compose=new",target:"_blank",rel:"noopener noreferrer",children:"shashisurpurv@gmail.com"})," "]})})]})]}),Object(s.jsx)("hr",{})]}),Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-md-8 col-sm-6 col-xs-12",children:Object(s.jsxs)("p",{className:"copyright-text",children:["Copyright \xa9 2020 Build and Designed by",Object(s.jsx)(l.b,{to:"#",children:" KIRSHU"}),"."]})}),Object(s.jsx)("div",{className:"col-md-4 col-sm-6 col-xs-12",children:Object(s.jsxs)("ul",{className:"social-icons",children:[Object(s.jsx)("li",{children:Object(s.jsx)(l.b,{className:"facebook",to:"#",children:Object(s.jsx)("i",{className:"fa fa-facebook"})})}),Object(s.jsx)("li",{children:Object(s.jsx)(l.b,{className:"linkedin",to:"#",children:Object(s.jsx)("i",{className:"fa fa-linkedin"})})})]})})]})})]})})}),q=(c(388),function(){var e=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null,t=Object(n.useState)(!1),c=Object(b.a)(t,2),a=c[0],r=c[1],o=Object(n.useState)([]),i=Object(b.a)(o,2),l=i[0],j=i[1];Object(y.useFirestoreConnect)([{collection:"clients"}]);var m=Object(u.c)((function(e){return e.firestore.ordered.clients}));if(!e)return Object(s.jsx)(d.a,{to:"/signin"});return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:"clientDetailContainer ",children:Object(s.jsxs)("div",{className:"container ",children:[Object(s.jsx)("div",{className:"custHeader text-uppercase",children:Object(s.jsx)("h2",{children:"Clients Details"})}),Object(s.jsx)("div",{className:"custHeader",children:Object(s.jsxs)("p",{children:["The below are our clients, ",Object(s.jsx)("strong",{children:"click for more details "})," "]})}),m&&m.map((function(e){return Object(s.jsx)("div",{className:"mainTab",children:Object(s.jsxs)("div",{className:"accordion ",children:[Object(s.jsx)("div",{className:" accordion-header collapsed  tabHeader ",onClick:function(){return function(e){r(!a),j(e)}(e)},children:Object(s.jsx)("h4",{children:e.name})}),a&&l===e&&Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"accordion-body ",children:[Object(s.jsx)("p",{className:"content",children:e.content}),Object(s.jsxs)("div",{className:"rowCol",children:[Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("dt",{className:"col-sm-3",children:"Founders"}),Object(s.jsxs)("dd",{className:"col-sm-9",children:[": ",e.founders]})]}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("dt",{className:"col-sm-3",children:"Founded "}),Object(s.jsxs)("dd",{className:"col-sm-9",children:[": ",e.founded]})]}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("dt",{className:"col-sm-3",children:"Headquaters "}),Object(s.jsxs)("dd",{className:"col-sm-9",children:[": ",e.headquarters]})]})]})]})})]})},e.id)}))]})})})}),H=function(e,t,c){return function(a){var s=Object(y.getFirebase)().firestore();a({type:"".concat(S,"_REQUEST")});var n=s.collection("clients").doc(e).collection("Tokens").doc();0===c?n.set({tokenId:t.email,tokenName:t.firstName,tokenNo:c+1}).then(a({type:"".concat(S,"_SUCCESS")})).catch():n.set({tokenId:t.email,tokenName:t.firstName,tokenNo:c+1}).then(a({type:"".concat(S,"_SUCCESS")})).catch(a({type:"".concat(S,"_FAILURE")}))}},K=(c(389),function(e){var t=Object(d.g)().id,c=Object(u.b)(),a=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null;Object(y.useFirestoreConnect)([{collection:"clients",doc:t}]);var r=Object(u.c)((function(e){var c=e.firestore.data;return c.clients&&c.clients[t]})),o=Object(u.c)((function(e){return e.data.markerTokensData}));Object(n.useEffect)((function(){c(function(e){return function(t){var c=Object(y.getFirebase)().firestore();t({type:"".concat(g,"_REQUEST")}),c.collection("clients").doc(e).collection("Tokens").onSnapshot((function(e){var c=[];e.forEach((function(e){c.push(e.data())})),t({type:"".concat(g,"_SUCCESS"),payload:{data:c}})}))}}(t))}),[]);return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:"container  ",children:r&&Object(s.jsxs)("div",{className:"card-lg text-center card-center markerCard",children:[Object(s.jsx)("div",{className:"card-header bg-dark markerCardHeader",children:r.name}),Object(s.jsxs)("div",{className:"card-body markerCardBody",children:[Object(s.jsx)("h5",{className:"card-title title",children:r.address}),Object(s.jsx)("p",{className:"card-text text",children:r.content}),Object(s.jsxs)("div",{className:"row customeRow",children:[Object(s.jsx)("div",{className:"col ",children:Object(s.jsx)("button",{className:"btn btn-primary",onClick:function(){var e=o.map((function(e){return e.tokenNo}));o.find((function(e){return e.tokenName===a.firstName}))?alert("The Token is already generated by You, check status for more detail on your token "):function(){var s=e[e.length-1];console.log("Global",s),c(H(t,a,"undefined"!=typeof s&&null!=s&&null!=s?s:s=0))}()},children:"Generate Tokens"})}),Object(s.jsx)("div",{className:"col ",children:Object(s.jsx)("button",{className:"btn btn-primary",onClick:function(){var e=o.find((function(e){return e.tokenName===a.firstName}));e?alert("Your at ".concat(e.tokenNo," position")):alert("Please generate a token ")},children:"Check Status"})})]})]})]})})})}),J=(c(390),function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"container-lg",children:[Object(s.jsx)("div",{className:"text-center text-uppercase",children:Object(s.jsx)("h2",{children:"Contact Details"})}),Object(s.jsxs)("div",{className:"row cardContainer",children:[Object(s.jsx)("div",{className:"col-sm-6",children:Object(s.jsx)("div",{className:"card customeCard ",children:Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsx)("h5",{className:"card-title cardTitle text-center",children:"Personal Details"}),Object(s.jsxs)("div",{className:"card-text cardText text-left",children:[Object(s.jsxs)("dl",{className:"row",children:[Object(s.jsx)("dt",{className:"col-sm-5",children:"Name"}),Object(s.jsx)("dd",{className:"col-sm-5",children:" Shashidhar V Surpur"})]}),Object(s.jsxs)("dl",{className:"row",children:[Object(s.jsx)("dt",{className:"col-sm-5",children:"Address"}),Object(s.jsx)("dd",{className:"col-sm-5",children:" Shashidhar V Surpur C/O Vasant R Surpur,Madhihal main road,Dharwad"})]}),Object(s.jsxs)("dl",{className:"row",children:[Object(s.jsx)("dt",{className:"col-sm-5",children:"Qualification"}),Object(s.jsx)("dd",{className:"col-sm-5",children:"MCA"})]}),Object(s.jsxs)("dl",{className:"row",children:[Object(s.jsx)("dt",{className:"col-sm-5",children:"Skills"}),Object(s.jsxs)("dd",{className:"col-sm-5",children:["Java Script ",Object(s.jsx)("br",{}),"React Js ",Object(s.jsx)("br",{}),"Java ",Object(s.jsx)("br",{}),"Android ",Object(s.jsx)("br",{})]})]})]})]})})}),Object(s.jsx)("div",{className:"col-sm-6",children:Object(s.jsx)("div",{className:"card customeCard",children:Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsx)("h5",{className:"card-title cardTitle text-center",children:"Contacts "}),Object(s.jsxs)("dl",{className:"row",children:[Object(s.jsx)("dt",{className:"col-sm-6",children:"Email"}),Object(s.jsx)("dd",{className:"col-sm-6",children:"shashisurpurv@gmail.com"})]}),Object(s.jsxs)("dl",{className:"row",children:[Object(s.jsx)("dt",{className:"col-sm-6",children:"Mobile No"}),Object(s.jsx)("dd",{className:"col-sm-6",children:"8792948307 "})]}),Object(s.jsxs)("dl",{className:"row",children:[Object(s.jsx)("dt",{className:"col-sm-6",children:"What's app No"}),Object(s.jsx)("dd",{className:"col-sm-6",children:"7411790739 "})]})]})})})]})]})})});var W=function(){var e=Object(u.c)((function(e){return e.auth})),t=Object(u.b)();return Object(n.useEffect)((function(){e.authenticated||t(function(){var e=Object(O.a)(h.a.mark((function e(t){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null,t(c?{type:"".concat(N,"_SUCCESS"),payload:{user:c}}:{type:"".concat(N,"_FAILURE"),payload:{error:"Login again please"}});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(l.a,{children:[Object(s.jsx)(A,{children:Object(s.jsxs)(d.d,{children:[Object(s.jsx)(P,{path:"/",exact:!0,component:L}),Object(s.jsx)(d.b,{path:"/home",exact:!0,component:F}),Object(s.jsx)(d.b,{path:"/home/:id",exact:!0,component:K}),Object(s.jsx)(d.b,{path:"/signup",exact:!0,component:E}),Object(s.jsx)(d.b,{path:"/signin",exact:!0,component:R}),Object(s.jsx)(d.b,{path:"/markerDetail",exact:!0,component:q}),Object(s.jsx)(d.b,{path:"/contactUs",exact:!0,component:J})]})}),Object(s.jsx)(G,{})]})})},B=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,424)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),n(e),r(e)}))},Q=c(92),M=c(35),V=c(216),Y=c(217),z={firstName:"",lastName:"",email:"",authenticating:!1,authenticated:!1,error:null},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"".concat(N,"_REQUEST"):e=Object(a.a)(Object(a.a)({},e),{},{authenticating:!0});break;case"".concat(N,"_SUCCESS"):e=Object(a.a)(Object(a.a)(Object(a.a)({},e),t.payload.user),{},{authenticated:!0,authenticating:!1});break;case"".concat(N,"_FAILURE"):e=Object(a.a)(Object(a.a)({},e),{},{authenticated:!1,authenticating:!1,error:t.payload.error});break;case"".concat(v,"_REQUEST"):break;case"".concat(v,"_SUCCESS"):e=Object(a.a)({},z);break;case"".concat(v,"_FAILURE"):e=Object(a.a)(Object(a.a)({},e),{},{error:t.payload.error});break;default:return e}return e},Z={markerTokensData:[],tokenData:[]},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"".concat(g,"_REQUEST"):break;case"".concat(g,"_SUCCESS"):e=Object(a.a)(Object(a.a)({},e),{},{markerTokensData:t.payload.data});break;case"".concat(g,"_FAILURE"):e=Object(a.a)(Object(a.a)({},e),{},{markerTokensData:[]});break;case"".concat(S,"_SUCCESS"):e=Object(a.a)({},e),alert("Your token has been generated successfull at ");break;case"".concat(S,"_FAILURE"):e=Object(a.a)({},e),alert("You already taken a token please check status for your position");break;case"".concat(k,"_REQUEST"):break;case"".concat(k,"_SUCCESS"):e=Object(a.a)(Object(a.a)({},e),{},{tokenData:t.payload.data});break;case"".concat(k,"_FAILURE"):alert("There is no token on your name, Please genarate the token First");break;default:return e}return e},ee=Object(M.combineReducers)({auth:X,firestore:Q.firestoreReducer,data:$}),te=[Y.a.withExtraArgument({getFirebase:y.getFirebase})],ce=Object(M.createStore)(ee,Object(V.composeWithDevTools)(M.applyMiddleware.apply(void 0,te))),ae={firebase:f,config:{},dispatch:ce.dispatch,createFirestoreInstance:Q.createFirestoreInstance};i.a.render(Object(s.jsx)(u.a,{store:ce,children:Object(s.jsx)(y.ReactReduxFirebaseProvider,Object(a.a)(Object(a.a)({},ae),{},{children:Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(W,{})})}))}),document.getElementById("root")),B()}},[[422,1,2]]]);
//# sourceMappingURL=main.0b22eb28.chunk.js.map