(this["webpackJsonpcards-fr"]=this["webpackJsonpcards-fr"]||[]).push([[0],{15:function(e,t,n){e.exports={login:"Login_login__3esZq",loginForm:"Login_loginForm__3tV1n",title:"Login_title__1vSAw",message:"Login_message__FlCpA"}},16:function(e,t,n){e.exports={registration:"Registration_registration__38XR1",registrationInner:"Registration_registrationInner__2pTMs",title:"Registration_title__1JeDB",message:"Registration_message__1oRZj"}},17:function(e,t,n){e.exports={test:"Test_test__2Q38G",superComponent:"Test_superComponent__1Whms"}},20:function(e,t,n){e.exports={createNewPassword:"CreateNewPassword_createNewPassword__s2Y9P",button:"CreateNewPassword_button__3jvFm"}},22:function(e,t,n){e.exports={recovery:"Recovery_recovery__2Fm81",title:"Recovery_title__2CVYg",button:"Recovery_button__ytP9J",message:"Recovery_message__2EyeW"}},25:function(e,t,n){e.exports={error404:"Error404_error404__1ry36",error404_text:"Error404_error404_text__2VILg"}},28:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__1LYW_",errorInput:"SuperInputText_errorInput__271Mi",error:"SuperInputText_error__2roUN"}},29:function(e,t,n){},31:function(e,t,n){e.exports={default:"SuperButton_default__2QTKu",red:"SuperButton_red__2B-7d"}},45:function(e,t,n){},46:function(e,t,n){e.exports={superSpan:"SuperEditableSpan_superSpan__RTEUQ"}},47:function(e,t,n){e.exports={range:"SuperRange_range__2ayCc"}},54:function(e,t,n){},55:function(e,t,n){},7:function(e,t,n){e.exports={background:"Header_background__3d8e3",nav_links:"Header_nav_links__2fY8Y",nav_container:"Header_nav_container__20c2T",title_nav:"Header_title_nav__3-n7c",active:"Header_active__35kSX"}},79:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),c=n.n(r),s=n(23),o=n.n(s),i=(n(54),n(10)),l=(n(55),n(4)),u=n(25),d=n.n(u),j=n.p+"static/media/girl-dancer.cfef6556.gif";var b=function(){return Object(a.jsxs)("div",{className:d.a.error404,children:[Object(a.jsx)("div",{className:d.a.error404_text,children:"404 Page not found!"}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:d.a.girl,children:Object(a.jsx)("img",{src:j,alt:""})})]})},O=n(15),p=n.n(O),m=n(2),h=n(6),g=n(28),v=n.n(g),f=function(e){var t=e.type,n=e.onChange,r=e.onChangeText,c=e.onKeyPress,s=e.onEnter,o=e.error,i=(e.className,e.spanClassName),l=Object(h.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),u="".concat(v.a.error," ").concat(i||""),d="".concat(o?"":v.a.superInput);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",Object(m.a)({type:t,onChange:function(e){n&&n(e),r&&r(e.currentTarget.value)},onKeyPress:function(e){c&&c(e),"Enter"===e.key&&s&&s()},className:d,value:l.value},l)),o&&Object(a.jsx)("span",{className:u,children:o})]})},x=n(29),_=n.n(x),N=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=(e.className,e.spanClassName,e.children),c=Object(h.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(_.a.checkbox);return Object(a.jsxs)("label",{children:[Object(a.jsx)("input",Object(m.a)({type:"checkbox",onChange:function(e){n&&n(e.currentTarget.checked),t&&t(e)},className:s,checked:c.checked},c)),r&&Object(a.jsx)("span",{className:_.a.spanClassName,children:r})]})},C=n(5),y=n(44),w=n.n(y).a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0}),S=function(e){return w.post("auth/forgot",e)},R=function(e){return w.post("auth/login",e)},E=function(e){return w.post("auth/set-new-password",e)},I=function(e){return w.post("auth/register",e)},k={_id:"",email:"",name:"",publicCardPacksCount:0,created:new Date,updated:new Date,isAdmin:!1,verified:!1,rememberMe:!1},P="profileChanged",T={login:"nya-admin@nya.nya",password:"1qazxcvBG",rememberMe:!1,isLoggedIn:!1,error:""},L="emailChanged",F="passwordChanged",A="rememberMeChanged",D="onSubmit",M="onError",B=function(e){return{type:M,error:e}},G=function(e){return function(t){R(e).then((function(e){var n,a,r,c,s,o,i,l,u,d,j;t({type:D}),t((n=e.data._id,a=e.data.email,r=e.data.name,c=e.data.publicCardPacksCount,s=e.data.created,o=e.data.updated,i=e.data.isAdmin,l=e.data.verified,u=e.data.rememberMe,d=e.data.avatar,j=e.data.error,{type:P,_id:n,email:a,name:r,avatar:d,publicCardPacksCount:c,created:s,updated:o,isAdmin:i,verified:l,rememberMe:u,error:j}))})).catch((function(e){var n=e.response?e.response.data.error:e.message+", more details in the console";t(B(n))}))}},W=n(31),Y=n.n(W),H=function(e){var t=e.red,n=e.className,r=Object(h.a)(e,["red","className"]),c="".concat(t?Y.a.red:Y.a.default," ").concat(n);return Object(a.jsx)("button",Object(m.a)({className:c},r))},V=function(){var e=Object(C.b)(),t=Object(C.c)((function(e){return e.isLoggedIn}));return t.isLoggedIn?Object(a.jsx)(l.a,{to:Ie.PROFILE}):Object(a.jsx)("div",{className:p.a.login,children:Object(a.jsxs)("form",{className:p.a.loginForm,onSubmit:function(n){n.preventDefault(),e(G({email:t.login,password:t.password,rememberMe:t.rememberMe}))},children:[Object(a.jsx)("div",{className:p.a.title,children:"Login"}),Object(a.jsx)("label",{className:p.a.inputItem,children:Object(a.jsx)(f,{className:p.a.inputForm,onChange:function(t){var n;e((n=t.currentTarget.value,{type:L,value:n}))},placeholder:"email",type:"email",value:t.login,name:"login"})}),Object(a.jsx)("label",{className:p.a.inputItem,children:Object(a.jsx)(f,{className:p.a.inputForm,onChange:function(t){var n;e((n=t.currentTarget.value,{type:F,value:n}))},placeholder:"password",type:"password",value:t.password,name:"login"})}),Object(a.jsx)("label",{className:p.a.inputItem,children:Object(a.jsx)(N,{checked:t.rememberMe,onChange:function(t){var n;e((n=t.currentTarget.checked,{type:A,value:n}))},name:"rememberMe",children:"Remember me"})}),Object(a.jsx)("label",{children:Object(a.jsx)(H,{className:p.a.superButton,type:"submit",value:"Login",children:"Send"})}),""!==t.error?Object(a.jsx)("div",{className:p.a.message,children:t.error}):null]})})},J=n(16),U=n.n(J),K="CHANGE_EMAIL",Q="CHANGE_PASSWORD",q="IS_REGISTRATION",X={isRegistered:!1,email:"",password:"",error:""},Z=function(e){return{type:K,value:e}},$=function(e){return{type:Q,value:e}},z=function(e){return function(t){I({email:e.email,password:e.password}).then((function(e){201===e.status?t({type:q,isRegistered:!0}):console.log("error")})).catch((function(e){var n=e.response?e.response.data.error:e.message+", more details in the console";t(B(n))}))}},ee=function(){var e=Object(C.c)((function(e){return e.isRegistered})),t=Object(C.b)(),n=function(e,n){t(n(e.currentTarget.value))};return e.isRegistered?Object(a.jsx)(l.a,{to:Ie.LOGIN}):Object(a.jsxs)("div",{className:U.a.registration,children:[Object(a.jsxs)("div",{className:U.a.registrationInner,children:[Object(a.jsx)("div",{className:U.a.title,children:"Sing up"}),Object(a.jsx)("div",{className:"".concat(U.a.registrationItem," ").concat(U.a.email),children:Object(a.jsx)(f,{type:"text",placeholder:"Email",value:e.email,onChange:function(e){return n(e,Z)}})}),Object(a.jsx)("div",{className:"".concat(U.a.registrationItem," ").concat(U.a.password),children:Object(a.jsx)(f,{type:"password",placeholder:"Password",value:e.password,onChange:function(e){return n(e,$)}})}),Object(a.jsx)(H,{className:U.a.registrationButton,onClick:function(){t(z({email:e.email,password:e.password}))},children:"Send"})]}),""!==e.error?Object(a.jsx)("div",{className:U.a.message,children:e.error}):null]})},te=n(45),ne=n.n(te),ae=function(){var e=Object(C.c)((function(e){return e.profile.name})),t=Object(C.c)((function(e){return e.profile.avatar})),n=Object(C.c)((function(e){return e.profile.publicCardPacksCount}));return Object(C.c)((function(e){return e.isLoggedIn.isLoggedIn}))?Object(a.jsxs)("div",{className:ne.a.profile,children:[Object(a.jsx)("div",{children:"your name is ".concat(e)}),t?Object(a.jsx)("div",{children:"you face looks like this: ".concat(t)}):null,Object(a.jsx)("div",{children:"there is ".concat(n," cards available")})]}):Object(a.jsx)(l.a,{to:Ie.LOGIN})},re=n(14),ce=n(22),se=n.n(ce),oe={isDone:!1,recoveryInfo:"",setNewPasswordInfo:"",isNewPasswordSet:!1},ie="SUCCESSFUL",le="RESPONSE_RECOVERY_INFO",ue="RESPONSE_SET_NEW_PASSWORD_INFO",de="SET_NEW_PASSWORD",je=function(e){return{type:ie,value:e}},be=function(e){return function(t){S(e).then((function(e){var n;t(je(!0)),t((n=e.data.info,{type:le,info:n}))})).catch((function(e){t(je(!1));var n=e.response?e.response.data.error:e.message+", more details in the console";t(B(n))}))}},Oe=function(e){return function(t){E(e).then((function(e){var n;console.log(".then"),t(je(!0)),t({type:de}),t((n=e.data.info,{type:ue,info:n}))})).catch((function(e){t(je(!1));var n=e.response?e.response.data.error:e.message+", more details in the console";t(B(n))}))}},pe=function(){var e=Object(C.c)((function(e){return e.recovery.isDone})),t=Object(C.c)((function(e){return e.isLoggedIn.error})),n=Object(C.b)(),c=Object(r.useState)("valentyn.333k@gmail.com"),s=Object(re.a)(c,2),o=s[0],i=s[1];return e?Object(a.jsx)(l.a,{to:Ie.CREATE_NEW_PASSWORD}):Object(a.jsxs)("div",{className:se.a.recovery,children:[Object(a.jsx)("span",{className:se.a.title,children:"Forgot password ?"}),Object(a.jsx)(f,{onChange:function(e){n(je(!1)),i(e.currentTarget.value)},placeholder:"Enter you Email",value:o}),Object(a.jsx)(H,{onClick:function(){n(be({email:o,from:"neko.nyakus.cafe@gmail.com",message:"<div>password recovery link: <a href='https://valentyn-999.github.io/cards-fr#/create_new_password/$token$'>link</a></div>"}))},className:se.a.button,children:"Recover password"}),""!==t?Object(a.jsx)("div",{className:se.a.message,children:t}):null]})},me=n(20),he=n.n(me),ge=function(){var e=Object(C.c)((function(e){return e.recovery})),t=Object(C.b)(),n=Object(r.useState)(""),c=Object(re.a)(n,2),s=c[0],o=c[1],i=Object(l.g)().token;console.log(i);return e.isNewPasswordSet?Object(a.jsx)(l.a,{to:"/login"}):Object(a.jsxs)("div",{className:he.a.createNewPassword,children:[Object(a.jsx)("h4",{className:he.a.title,children:"change password"}),Object(a.jsx)(f,{className:he.a.input,onChange:function(e){o(e.currentTarget.value)},value:s}),Object(a.jsx)(H,{className:he.a.button,onClick:function(){console.log("you are inside changePassword fn"),t(Oe({password:s,token:i})),console.log("inside the function",i)},children:"confirm"}),e&&Object(a.jsx)("div",{className:he.a.message,children:e.setNewPasswordInfo})]})},ve=n(17),fe=n.n(ve),xe=n(46),_e=n.n(xe),Ne=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,c=e.spanProps,s=Object(h.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(r.useState)(!1),i=Object(re.a)(o,2),l=i[0],u=i[1],d=c||{},j=d.children,b=d.onDoubleClick,O=d.className,p=Object(h.a)(d,["children","onDoubleClick","className"]),g="".concat(_e.a.superSpan," ").concat(O);return Object(a.jsx)(a.Fragment,{children:l?Object(a.jsx)(f,Object(m.a)({autoFocus:!0,onBlur:function(e){u(!1),t&&t(e)},onEnter:function(){u(!0),n&&n()}},s)):Object(a.jsx)("span",Object(m.a)(Object(m.a)({onDoubleClick:function(e){u(!0),b&&b(e)},className:g},p),{},{children:j||s.value}))})},Ce=function(e){var t=e.options,n=(e.onChange,e.onChangeOption),r=Object(h.a)(e,["options","onChange","onChangeOption"]),c=t?null===t||void 0===t?void 0:t.map((function(e,t){return Object(a.jsx)("option",{children:e},t)})):[];return Object(a.jsx)("select",Object(m.a)(Object(m.a)({onChange:function(e){n&&n(e.currentTarget.value)}},r),{},{children:c}))},ye=function(e){e.type;var t=e.name,n=e.options,r=e.value,c=e.onChange,s=e.onChangeOption,o=Object(h.a)(e,["type","name","options","value","onChange","onChangeOption"]),i=function(e){c&&c(e),s&&s(e)},l=n?n.map((function(e,n){return Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{type:"radio",name:t,checked:o.checked,value:r,onChange:i}),e]},t+"-"+n)})):[];return Object(a.jsx)(a.Fragment,{children:l})},we=n(47),Se=n.n(we),Re=function(e){e.type;var t=e.onChange,n=e.onChangeRange,r=e.className,c=Object(h.a)(e,["type","onChange","onChangeRange","className"]),s="".concat(Se.a.range," ").concat(r||"");return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("input",Object(m.a)({type:"range",onChange:function(e){t&&t(e),n&&n(+e.currentTarget.value)},className:s,value:c.value},c))})},Ee=function(){var e=Object(r.useState)(!1),t=Object(re.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(""),o=Object(re.a)(s,2),i=o[0],l=o[1],u=["Oxy","Script","Babushka"],d=Object(r.useState)(u[1]),j=Object(re.a)(d,2),b=j[0],O=j[1],p=Object(r.useState)(0),m=Object(re.a)(p,2),h=m[0],g=m[1];return Object(a.jsxs)("div",{className:fe.a.test,children:["My SuperButtons are here",Object(a.jsxs)("div",{className:fe.a.superComponent,children:["1) ",Object(a.jsx)(H,{red:!0,onClick:function(){return alert("Good Job")},children:"Click on me"})]}),Object(a.jsxs)("div",{className:fe.a.superComponent,children:["2) ",Object(a.jsx)(f,{})]}),Object(a.jsxs)("div",{className:fe.a.superComponent,children:["3) ",Object(a.jsx)(N,{checked:n,onChangeChecked:c})]}),Object(a.jsxs)("div",{className:fe.a.superComponent,children:["4) ",Object(a.jsx)(Ne,{value:i,onChangeText:l,spanProps:{children:i?void 0:"you can edit me"}})]}),Object(a.jsxs)("div",{className:fe.a.superComponent,children:["5) ",Object(a.jsx)(Ce,{options:u,value:b,onChangeOption:O})]}),Object(a.jsxs)("div",{className:fe.a.superComponent,children:["6) ",Object(a.jsx)(ye,{name:"radio",options:u,value:b,onChangeOption:O})]}),Object(a.jsxs)("div",{className:fe.a.superComponent,children:["7) ",Object(a.jsx)("span",{children:h}),Object(a.jsx)(Re,{name:"radio",value:h,onChangeRange:function(e){g(e)}})]})]})},Ie={LOGIN:"/login",REGISTRATION:"/registration",PROFILE:"/profile",RECOVERY:"/recovery",CREATE_NEW_PASSWORD:"/create_new_password",TEST:"/super_inputs"};var ke=function(){return Object(a.jsx)("div",{children:Object(a.jsxs)(l.d,{children:[Object(a.jsx)(l.b,{path:"/",exact:!0,render:function(){return Object(a.jsx)(l.a,{to:Ie.PROFILE})}}),Object(a.jsx)(l.b,{path:Ie.LOGIN,render:function(){return Object(a.jsx)(V,{})}}),Object(a.jsx)(l.b,{path:Ie.REGISTRATION,render:function(){return Object(a.jsx)(ee,{})}}),Object(a.jsx)(l.b,{path:Ie.PROFILE,render:function(){return Object(a.jsx)(ae,{})}}),Object(a.jsx)(l.b,{path:"".concat(Ie.CREATE_NEW_PASSWORD,"/:token"),render:function(){return Object(a.jsx)(ge,{})}}),Object(a.jsx)(l.b,{path:Ie.RECOVERY,exact:!0,render:function(){return Object(a.jsx)(pe,{})}}),Object(a.jsx)(l.b,{path:Ie.TEST,render:function(){return Object(a.jsx)(Ee,{})}}),Object(a.jsx)(l.b,{path:"/404",render:function(){return Object(a.jsx)(b,{})}}),Object(a.jsx)(l.a,{from:"*",to:"/404"})]})})},Pe=n(7),Te=n.n(Pe);var Le=function(){return Object(a.jsx)("div",{className:Te.a.background,children:Object(a.jsxs)("div",{className:Te.a.nav_links,children:[Object(a.jsx)("div",{className:Te.a.nav_container,children:Object(a.jsx)(i.b,{className:Te.a.title_nav,activeClassName:Te.a.active,to:Ie.LOGIN,children:"Login"})}),Object(a.jsx)("div",{className:Te.a.nav_container,children:Object(a.jsx)(i.b,{className:Te.a.title_nav,activeClassName:Te.a.active,to:Ie.REGISTRATION,children:"Registration"})}),Object(a.jsx)("div",{className:Te.a.nav_container,children:Object(a.jsx)(i.b,{className:Te.a.title_nav,activeClassName:Te.a.active,to:Ie.PROFILE,children:"Profile"})}),Object(a.jsx)("div",{className:Te.a.nav_container,children:Object(a.jsx)(i.b,{className:Te.a.title_nav,activeClassName:Te.a.active,to:Ie.RECOVERY,children:"Forgot Password?"})})]})})},Fe=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(i.a,{children:[Object(a.jsx)(Le,{}),Object(a.jsx)(ke,{})]})})},Ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,80)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},De=n(19),Me={testObj:{}},Be="",Ge=n(48),We=Object(De.c)({test:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Be:default:return Object(m.a)({},e)}},isLoggedIn:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object(m.a)(Object(m.a)({},e),{},{login:t.value});case F:return Object(m.a)(Object(m.a)({},e),{},{password:t.value});case A:return Object(m.a)(Object(m.a)({},e),{},{rememberMe:t.value});case D:return Object(m.a)(Object(m.a)({},e),{},{isLoggedIn:!0});case M:return Object(m.a)(Object(m.a)({},e),{},{error:t.error});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(m.a)(Object(m.a)({},e),{},{_id:t._id,email:t.email,name:t.name,publicCardPacksCount:t.publicCardPacksCount,created:t.created,updated:t.updated,isAdmin:t.isAdmin,verified:t.verified,rememberMe:t.rememberMe,avatar:t.avatar,error:t.error});default:return e}},isRegistered:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K:return Object(m.a)(Object(m.a)({},e),{},{email:t.value});case Q:return Object(m.a)(Object(m.a)({},e),{},{password:t.value});case q:return Object(m.a)(Object(m.a)({},e),{},{isRegistered:t.isRegistered});case M:return Object(m.a)(Object(m.a)({},e),{},{error:t.error});default:return e}},recovery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ie:return Object(m.a)(Object(m.a)({},e),{},{isDone:t.value});case le:return Object(m.a)(Object(m.a)({},e),{},{recoveryInfo:t.info});case ue:return Object(m.a)(Object(m.a)({},e),{},{setNewPasswordInfo:t.info});case de:return Object(m.a)(Object(m.a)({},e),{},{isNewPasswordSet:!0});default:return Object(m.a)({},e)}}}),Ye=Object(De.d)(We,Object(De.a)(Ge.a));window.store=Ye,o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(C.a,{store:Ye,children:Object(a.jsx)(Fe,{})})}),document.getElementById("root")),Ae()}},[[79,1,2]]]);
//# sourceMappingURL=main.2d3f1eb5.chunk.js.map