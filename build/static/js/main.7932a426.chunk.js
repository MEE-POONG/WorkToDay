(this["webpackJsonpwork-to-day"]=this["webpackJsonpwork-to-day"]||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),c=a.n(l),o=(a(91),a(31)),i=a(25),m=a(28),u=a(53),s=(a(92),a(13)),d=a.n(s);u.initializeApp({apiKey:"AIzaSyDYHgcGjAglCjsex4BjI9cFFR-KaGG2Ras",authDomain:"ufa66-checkin.firebaseapp.com",databaseURL:"https://ufa66-checkin.firebaseio.com",projectId:"ufa66-checkin",storageBucket:"ufa66-checkin.appspot.com",messagingSenderId:"1073662313747",appId:"1:1073662313747:web:3fbf437025e180f31186e6",measurementId:"G-ZGTDDBZWCQ"});var g=u.database(),p=[{ip:"124.122.16.16"},{ip:"183.89.70.85"},{ip:"203.156.121.130"}],f=a(143),h=a(144),E=a(135),v=a(138),b=a(140),k=a(142),y=a(141),_=a(155),w=a(69),x=a.n(w),j=Object(E.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper,paddingBottom:"50px"}}}));function I(e){var t=e.CheckInData,a=j();return document.title="Work To Day | Users",r.a.createElement(v.a,{className:a.root},null===t||void 0===t?void 0:t.map((function(e){e._key;var t=e.check_in,a=e.check_out;e.check_user,e.work_list;return r.a.createElement(b.a,null,r.a.createElement(y.a,null,r.a.createElement(_.a,null,r.a.createElement(x.a,null))),r.a.createElement(k.a,{style:{minWidth:"fit-content"},primary:"Time's "+d()(t).toNow(),secondary:r.a.createElement(r.a.Fragment,null,"Check In At: ",d()(t).format("LL HH:mm:ss"),r.a.createElement("br",null),"Check Out At: ",d()(a).format("LL HH:mm:ss").replace("Invalid date","-"),r.a.createElement("br",null),"Time's ",d()(a).diff(d()(t),"hour")||"00",":",d()(a).diff(d()(t),"minute")||"00",":",d()(a).diff(d()(t),"second")||"00")}))})))}function O(){var e,t,a,l,c;document.title="Work To Day";var o=Object(n.useState)([]),u=Object(m.a)(o,2),s=u[0],E=u[1],v=Object(n.useState)([]),b=Object(m.a)(v,2),k=b[0],y=b[1],_=Object(i.f)();return fetch("https://api.ipify.org/?format=json").then((function(e){return e.json()})).then((function(e){return e.ip})).then((function(e){return y(e)})),Object(n.useEffect)((function(){g.ref("tb_check").child(localStorage.getItem("login__key")).orderByValue().on("value",(function(e){var t=[];e.forEach((function(e){t.push(e.val())})),E(t)}))}),[]),setInterval((function(){_.go()}),3e4),r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement(f.a,null,r.a.createElement(I,{CheckInData:s.reverse()})),(null===(e=p.find((function(e){return e.ip===k})))||void 0===e?void 0:e.ip)?(null===s||void 0===s||null===(t=s[0])||void 0===t?void 0:t.check_in)&&d()().diff(d()(null===s||void 0===s||null===(a=s[0])||void 0===a?void 0:a.check_in),"second")<10?r.a.createElement(h.a,{type:"button",fullWidth:!0,variant:"contained",color:"secondary",onClick:function(){return _.go()},style:{bottom:0,position:"fixed"}},"Warnning"):(null===s||void 0===s||null===(l=s[0])||void 0===l?void 0:l.check_in)&&!(null===s||void 0===s||null===(c=s[0])||void 0===c?void 0:c.check_out)?r.a.createElement(h.a,{type:"button",fullWidth:!0,variant:"contained",color:"primary",onClick:function(){!function(e){var t={},a={_key:e._key,check_in:e.check_in,check_out:d()().format(),check_user:e.check_user,work_list:e.work_list};t["/tb_check/".concat(localStorage.getItem("login__key"),"/")+e._key]=a,g.ref().update(t)}(null===s||void 0===s?void 0:s[0])},style:{bottom:0,position:"fixed"}},"Check Out"):r.a.createElement(h.a,{type:"button",fullWidth:!0,variant:"contained",color:"primary",onClick:function(){!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:localStorage.getItem("login_username"),t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:localStorage.getItem("login_password"),g.ref().child("tb_check/".concat(localStorage.getItem("login__key"))).push().key),a={},n={_key:t,check_in:d()().format(),check_out:"",check_user:e,work_list:"Morning job"};a["/tb_check/".concat(localStorage.getItem("login__key"),"/")+t]=n,g.ref().update(a)}()},style:{bottom:0,position:"fixed"}},"Check In"):r.a.createElement("p",null))}var S=a(145),W=a(103),C=a(37),N=a(57),B=Object(E.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),margin:"auto",maxWidth:500},image:{width:220,height:220},img:{margin:"auto",display:"block",maxWidth:"100%",maxHeight:"100%"}}}));function D(){var e=B(),t=Object(n.useState)([]),a=Object(m.a)(t,2),l=a[0],c=a[1];return document.title="Work To Day | Users",Object(n.useEffect)((function(){g.ref("tb_user").on("value",(function(e){var t=[];e.forEach((function(e){t.push(e.val())})),c(t)}))}),[]),r.a.createElement(f.a,null,r.a.createElement("div",{className:e.root},r.a.createElement("center",null,r.a.createElement("h3",null,"Users")),r.a.createElement(S.a,{container:!0,spacing:3},null===l||void 0===l?void 0:l.map((function(t){t._key;var a=t.fristname,n=t.img,l=t.lastname,c=(t.password,t.username);return r.a.createElement(S.a,{item:!0,sm:6,md:4,lg:3,container:!0},r.a.createElement(W.a,{className:e.paper},r.a.createElement(S.a,{spacing:6},r.a.createElement(S.a,{item:!0},r.a.createElement(N.a,{className:e.image},r.a.createElement("img",{className:e.img,alt:"complex",src:n}))),r.a.createElement(S.a,{item:!0,sm:12,lg:!0,container:!0},r.a.createElement(S.a,{item:!0,sm:!0,container:!0,direction:"column",spacing:3},r.a.createElement(S.a,{item:!0,sm:!0},r.a.createElement(C.a,{gutterBottom:!0,variant:"subtitle1"},a," ",l),r.a.createElement(C.a,{variant:"body2",gutterBottom:!0}),r.a.createElement(C.a,{variant:"body2",color:"textSecondary"},"ID: ",c)))))))})))))}var G=a(56),T=a.n(G),F=a(71),q=a(147),A=a(152),H=a(148),U=a(154),V=a(146),R=a(153),L=function(e){var t=Object(n.useState)(e),a=Object(m.a)(t,2),r=a[0],l=a[1];return{value:r,setValue:l,reset:function(){return l("")},bind:{value:r,onChange:function(e){l(e.target.value)}}}};function P(){return r.a.createElement(C.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(V.a,{color:"inherit",href:"#"},"Check In / Out")," ",(new Date).getFullYear(),".")}var z=Object(E.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://source.unsplash.com/random)",backgroundRepeat:"no-repeat",backgroundColor:"dark"===e.palette.type?e.palette.grey[900]:e.palette.grey[50],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),width:"300px",height:"300px"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function J(){var e=z(),t=L(""),a=t.value,n=t.bind,l=t.reset,c=L(""),o=c.value,m=c.bind,u=c.reset,s=Object(i.f)(),d=function(){return g.ref("tb_user").on("child_added",function(){var e=Object(F.a)(T.a.mark((function e(t){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a!==t.val().username||o!==t.val().password){e.next=19;break}if(l(),u(),!t){e.next=18;break}return e.next=6,localStorage.setItem("login_check",!0);case 6:return e.next=8,localStorage.setItem("login_data",JSON.stringify(t.val()));case 8:return e.next=10,localStorage.setItem("login__key",t.val()._key);case 10:return e.next=12,localStorage.setItem("login_username",a);case 12:return e.next=14,localStorage.setItem("login_password",o);case 14:return e.next=16,s.push("home");case 16:e.next=19;break;case 18:alert("Error");case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())};return r.a.createElement(S.a,{container:!0,component:"main",className:e.root},r.a.createElement(q.a,null),r.a.createElement(S.a,{item:!0,xs:!1,sm:4,md:7,className:e.image}),r.a.createElement(S.a,{item:!0,xs:12,sm:8,md:5,component:W.a,elevation:6,square:!0},r.a.createElement("div",{className:e.paper},r.a.createElement(_.a,{src:"logo512.png",className:e.avatar}),r.a.createElement("form",{className:e.form,onSubmit:d,noValidate:!0},r.a.createElement(A.a,Object.assign({variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0},n)),r.a.createElement(A.a,Object.assign({variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"},m)),r.a.createElement(H.a,{control:r.a.createElement(U.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(h.a,{type:"button",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:d},"Sign In"),r.a.createElement(S.a,{container:!0},r.a.createElement(S.a,{item:!0,xs:!0},r.a.createElement(V.a,{onClick:function(){return s.push("addusers")},href:"#",variant:"body2"},"Forgot password?")),r.a.createElement(S.a,{item:!0},r.a.createElement(V.a,{onClick:function(){return s.push("addusers")},variant:"body2"},"Don't have an account? Sign Up"))),r.a.createElement(R.a,{mt:5},r.a.createElement(P,null))))))}function K(){document.title="Work To Day | Add Users";var e=L(""),t=e.value,a=e.bind,n=e.reset,l=L(""),c=l.value,o=l.bind,i=l.reset,m=L(""),u=m.value,s=m.bind,d=m.reset,p=L(""),E=p.value,v=p.bind,b=p.reset,k=L(""),y=k.value,_=k.bind,w=k.reset;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,null,r.a.createElement("h2",null,"AddUsers"),r.a.createElement("form",null,r.a.createElement(S.a,{container:!0,lg:12,spacing:3},r.a.createElement(S.a,{item:!0,xs:12,sm:4,md:2},r.a.createElement(A.a,Object.assign({required:!0,defaultValue:t,label:"Username",fullWidth:!0},a))),r.a.createElement(S.a,{item:!0,xs:12,sm:4,md:2},r.a.createElement(A.a,Object.assign({required:!0,defaultValue:c,label:"Password",fullWidth:!0,type:"password"},o)))),r.a.createElement(S.a,{container:!0,xs:12,md:12,spacing:3},r.a.createElement(S.a,{item:!0,xs:12,sm:6,md:2},r.a.createElement(A.a,Object.assign({required:!0,defaultValue:u,label:"Firstname",fullWidth:!0},s))),r.a.createElement(S.a,{item:!0,xs:12,sm:6,md:2},r.a.createElement(A.a,Object.assign({required:!0,defaultValue:E,label:"Lastname",fullWidth:!0},v))),r.a.createElement(S.a,{item:!0,xs:12,md:12},r.a.createElement(A.a,Object.assign({required:!0,defaultValue:y,label:"Photo",placeholder:"www.img.com",fullWidth:!0},_)))),r.a.createElement("br",null),r.a.createElement(S.a,{item:!0,lg:12},t&&c&&u&&E?r.a.createElement(h.a,{type:"button",fullWidth:!0,variant:"contained",color:"primary",onClick:function(){!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",l=g.ref().child("tb_user").push().key,c={},o={_key:l,fristname:r,img:n||"https://f0.pngfuel.com/png/980/886/male-portrait-avatar-png-clip-art.png",lastname:a,password:t,username:e};c["/tb_user/"+l]=o,g.ref().update(c)}(t,c,E,y,u),n(),i(),d(),b(),w()}},"\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25"):r.a.createElement(h.a,{type:"button",fullWidth:!0,variant:"contained",color:"secondary"},"\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25"))),r.a.createElement(D,null)))}var Y=a(150),Z=a(151),M=a(149),Q=a(47),$=a.n(Q),X=a(48),ee=a.n(X),te=Object(E.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},toolbar:{minHeight:128,alignItems:"flex-start",paddingTop:e.spacing(1),paddingBottom:e.spacing(2)},title:{flexGrow:1,alignSelf:"flex-end"}}}));function ae(){var e=te(),t=Object(i.f)();return Object(n.useEffect)((function(){localStorage.getItem("login_check")||t.push("login"),fetch("https://api.ipify.org/?format=json").then((function(e){return e.json()})).then((function(e){return e.ip}))})),r.a.createElement("div",{className:e.root},r.a.createElement(Y.a,{position:"static"},r.a.createElement(Z.a,{className:e.toolbar},r.a.createElement(M.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"open drawer"},r.a.createElement($.a,null)),r.a.createElement(C.a,{className:e.title,variant:"h5",noWrap:!0},"Check In/Out"),r.a.createElement(M.a,{"aria-label":"search",color:"inherit",onClick:function(){localStorage.clear(),t.push("login")}},r.a.createElement(ee.a,null)))))}var ne=Object(E.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},toolbar:{minHeight:128,alignItems:"flex-start",paddingTop:e.spacing(1),paddingBottom:e.spacing(2)},title:{flexGrow:1,alignSelf:"flex-end"}}}));function re(){var e=ne(),t=Object(i.f)();return Object(n.useEffect)((function(){fetch("https://api.ipify.org/?format=json").then((function(e){return e.json()})).then((function(e){return e.ip}))})),r.a.createElement("div",{className:e.root},r.a.createElement(Y.a,{position:"static"},r.a.createElement(Z.a,{className:e.toolbar},r.a.createElement(M.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"open drawer"},r.a.createElement($.a,null)),r.a.createElement(C.a,{className:e.title,variant:"h5",noWrap:!0},"Check In/Out"),r.a.createElement(M.a,{"aria-label":"search",color:"inherit",onClick:function(){localStorage.clear(),t.push("login")}},r.a.createElement(ee.a,null)))))}function le(){return r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/login"},r.a.createElement(J,null)),r.a.createElement(i.a,{path:"/users"},r.a.createElement(re,null),r.a.createElement(D,null)),r.a.createElement(i.a,{path:"/addusers"},r.a.createElement(re,null),r.a.createElement(K,null)),r.a.createElement(i.a,{path:"/"},r.a.createElement(ae,null),r.a.createElement(O,null)))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));try{c.a.render(r.a.createElement(le,null),document.getElementById("root"))}catch(ce){localStorage.clear(),c.a.render(r.a.createElement(le,null),document.getElementById("root"))}"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},86:function(e,t,a){e.exports=a(102)},91:function(e,t,a){}},[[86,1,2]]]);
//# sourceMappingURL=main.7932a426.chunk.js.map