(this.webpackJsonpreportate=this.webpackJsonpreportate||[]).push([[0],{219:function(e,a,t){e.exports=t.p+"static/media/icon.7f45137f.png"},236:function(e,a,t){e.exports=t(449)},241:function(e,a,t){},246:function(e,a,t){},449:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(13),o=t.n(l),i=(t(241),t(242),t(230)),c=(t(244),t(231)),s=t(64),m=(t(178),t(98)),u=(t(246),t(28),t(4)),d=(t(248),t(233)),p=t(216),f=t.n(p),E=t(16),g=t(68),h=function(e){return{type:"FAMILY_SET_DATA",data:e}},b=t(69),y=function(){var e=Object(g.g)(),a=Object(E.b)();var t=Object(E.c)((function(e){return e.family.members}));return r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},t.map((function(t,n){return r.a.createElement(u.a,{key:n,size:"large",type:"default",className:"options",style:v.buttons,onClick:function(){var n;a(function(e){return{type:"FAMILY_SET_UPDATE_MEMBER",data:e}}(n=t)),n.firstControl?e.push("/update-member"):e.push("/base-data")}},r.a.createElement(b.e,{style:{marginRight:8}})," ",t.name)})),r.a.createElement(u.a,{size:"large",type:"default",className:"add",style:v.buttons,onClick:function(){e.push("/add-member")}},r.a.createElement(b.d,{style:{marginRight:8}}),"adicionar miembro"))},v={buttons:{flex:1,marginBottom:8,display:"flex",alignItems:"center",justifyContent:"left"}},O=function(e){return{type:"APP_CONFIG_SET_MESSAGE",data:e}},j=function(){var e=Object(g.g)(),a=Object(E.c)((function(e){return e.appConfig.message})),t=Object(E.b)();Object(n.useEffect)((function(){}),[]);return r.a.createElement("div",null,a?r.a.createElement(d.a,{message:a.text,type:a.type,showIcon:!0,style:{marginBottom:16},closable:!0,afterClose:function(){t(O(!1))}}):null,r.a.createElement(y,null),r.a.createElement("hr",null),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(u.a,{size:"large",type:"default",className:"options",style:I.button},r.a.createElement(b.a,{style:{height:30,width:30,margin:5}}),"Centros de atencion"),r.a.createElement(u.a,{size:"large",type:"default",className:"options",style:I.button,onClick:function(){e.push("/faq")}},r.a.createElement(b.b,{style:{height:30,width:30,margin:5}}),"Recomendaciones")),r.a.createElement(f.a,{type:"star",theme:"filled"}),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(u.a,{size:"large",type:"primary",className:"phone",style:I.phone,onClick:function(){window.open("tel:800101104")}},r.a.createElement(b.c,null),r.a.createElement("div",null,r.a.createElement("small",null,"Ministerio de Salud"),r.a.createElement("p",{style:{margin:0}},"800-101104"))),r.a.createElement(u.a,{size:"large",type:"primary",className:"phone",style:I.phone,onClick:function(){window.open("tel:800148139")}},r.a.createElement(b.c,null),r.a.createElement("div",null,r.a.createElement("small",null,"Gobernaci\xf3n de Santa Cruz"),r.a.createElement("p",{style:{margin:0}},"800-148139")))))},I={phone:{flex:1,margin:8,display:"flex",justifyContent:"space-between",alignItems:"center",textAlign:"right"},button:{flex:1,margin:8,display:"flex",flexDirection:"column",alignItems:"center",height:80}},S=(t(101),t(26)),C=t(22),w=(t(41),t(3)),x=t(11),A=t(217),F=t.n(A),k=t(218),R=t.n(k),T=t(219),D=t.n(T),_=t(5),L=t(10),M=t(9),N=t(7),B=t(220),P=t.n(B),G=function(){function e(){Object(_.a)(this,e),this.getBaseService=function(){return"https://dev.mc4.com.bo:9443/"},this.handleAxiosErrors=function(e){e.response?(console.log("-----------ERROR.RESPONSE----------"),console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?(console.log("-----------ERROR.REQUEST----------"),console.log(e.request)):(console.log("-----------ERROR.MESSAGE----------"),console.log("Error",e.message)),console.log("-----------ERROR.CONFIG----------"),console.log(e.config)},this.axios=P.a.create({})}return Object(N.a)(e,[{key:"getHeaders",value:function(){var e=localStorage.getItem("token"),a={};return void 0!==e&&null!==e&&""!==e&&(a={Authorization:"Bearer "+e}),a}}]),e}(),U=new(function(e){Object(M.a)(t,e);var a=Object(L.a)(t);function t(){var e;Object(_.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).loginEmail=function(a){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.axios.post(e.getBaseService()+"auth/signin/",{username:a.username,password:a.password}).then((function(e){t&&t(e.data)})).catch((function(a){return e.handleAxiosErrors(a)}))},e}return t}(G)),q=function(e){return{type:"AUTH_SET_USER",data:e}},z=new(function(e){Object(M.a)(t,e);var a=Object(L.a)(t);function t(){var e;Object(_.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).getFamily=function(){var a=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e.axios.get(e.getBaseService()+"api/familias/informacion/",{headers:e.getHeaders()}).then((function(e){a&&(console.log(e.data),a(e.data))})).catch((function(a){return e.handleAxiosErrors(a)}))},e.register=function(a){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.axios.post(e.getBaseService()+"api/familias/",{nombre:a.name,telefono:a.phone,latitud:a.latitude,longitud:a.longitude,direccion:a.address,zona:a.zone,ciudad:a.city,departamentoId:a.department,municipioId:a.municipality,controlInicial:"false"},{headers:e.getHeaders()}).then((function(e){t&&t(e.data)})).catch((function(a){return e.handleAxiosErrors(a)}))},e}return Object(N.a)(t,[{key:"registerMember",value:function(e){var a=this,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.axios.post(this.getBaseService()+"api/pacientes/",{id:0,nombre:e.name,edad:e.age,genero:e.sex,gestacion:e.gestation,tiempoGestacion:e.gestationTime},{headers:this.getHeaders()}).then((function(e){t&&t(e.data)})).catch((function(e){return a.handleAxiosErrors(e)}))}},{key:"updateMember",value:function(e){var a=this,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.axios.put(this.getBaseService()+"api/pacientes/",{id:e.id,nombre:e.name,edad:e.age,genero:e.sex,gestacion:e.gestation,tiempoGestacion:e.gestationTime,controlInicial:"control"},{headers:this.getHeaders()}).then((function(e){t&&t(e.data)})).catch((function(e){return a.handleAxiosErrors(e)}))}},{key:"dailyControl",value:function(e,a,t){var n=this,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.axios.post(this.getBaseService()+"api/pacientes/"+e+"/control-diario/",{enfermedadesBase:a,sintomas:t}).then((function(e){r&&r(e.data)})).catch((function(e){return n.handleAxiosErrors(e)}))}}]),t}(G)),H=function(){var e=Object(g.g)(),a=w.a.useForm(),t=Object(x.a)(a,1)[0],l=Object(E.b)(),o=Object(E.c)((function(e){return e.auth.user})),i=Object(E.c)((function(e){return e.family}));Object(n.useEffect)((function(){o.logged&&i.fetched&&(i.id>0?e.push("/dashboard"):e.push("/family-data"))}),[o,i]);return r.a.createElement("div",null,r.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center"}},r.a.createElement("img",{src:D.a,style:{height:120,width:120,margin:"auto"}}),r.a.createElement(w.a,{form:t,layout:"vertical",onFinish:function(a){U.loginEmail(a,(function(a){localStorage.setItem("token",a.token),l(q(Object(C.a)({},a,{logged:!0}))),z.getFamily((function(a){l(h(Object(C.a)({},a,{fetched:!0}))),e.push("/dashboard")}))}))},onFinishFailed:function(e){console.log("Failed:",e)}},r.a.createElement(w.a.Item,{label:"Nombre de usuario",name:"username",rules:[{required:!0,message:"Ingresa nombre de usuario"}]},r.a.createElement(S.a,{placeholder:"Introduce en nombre de usuario"})),r.a.createElement(w.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Ingresa tu password"}]},r.a.createElement(S.a.Password,{placeholder:"Introduce tu password"})),r.a.createElement(w.a.Item,null,r.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},r.a.createElement(u.a,{type:"primary",htmlType:"submit",style:{width:"100%",marginBottom:8,marginLeft:8}},"Guardar")))),r.a.createElement(F.a,{appId:"1088597931155576",autoLoad:!1,fields:"name,email,picture",render:function(e){return r.a.createElement(u.a,{type:"default",onClick:e.onClick,style:{marginBottom:8,display:"none"}},r.a.createElement("p",{style:{color:"blue"}},"Iniciar con Facebook"))}}),r.a.createElement(R.a,{clientId:"658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com",buttonText:"Login",onSuccess:function(){console.log("success")},onFailure:function(){console.log("fail")},cookiePolicy:"single_host_origin",render:function(e){return r.a.createElement(u.a,{type:"default",onClick:e.onClick,style:{display:"none"}},r.a.createElement("p",{style:{color:"red"}},"Iniciar con Google"))}})))},V=m.a.Header,Y=function(){return r.a.createElement(V,{className:"primary",style:{position:"fixed",zIndex:1,width:"100%",display:"flex",height:60,justifyContent:"center",alignItems:"center"}},r.a.createElement("h2",{style:{margin:0}},"Reportate"))},Q=t(29),X=function(){var e=Object(g.g)(),a=Object(E.b)(),t=Object(E.c)((function(e){return e.auth.user})),l=Object(E.c)((function(e){return e.family}));return Object(n.useEffect)((function(){var t=localStorage.getItem("token");null!==t&&void 0!==t&&""!==t?(a(q({token:t,logged:!0})),z.getFamily((function(e){a(h(Object(C.a)({},e,{fetched:!0})))}))):e.push("/login")}),[]),Object(n.useEffect)((function(){t.logged&&l.fetched&&(l.id>0?e.push("/dashboard"):e.push("/family-data"))}),[t,l]),r.a.createElement("div",null,"Cargando..")},J=t(12),K=(t(51),t(17)),W=new(function(e){Object(M.a)(t,e);var a=Object(L.a)(t);function t(){var e;Object(_.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).getDepartments=function(){var a=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e.axios.get(e.getBaseService()+"api/departamentos/",{headers:e.getHeaders()}).then((function(e){a&&a(e.data)})).catch((function(a){return e.handleAxiosErrors(a)}))},e.getBaseData=function(){var a=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e.axios.get(e.getBaseService()+"api/control-diario/encuesta-inicial",{}).then((function(e){a&&a(e.data)})).catch((function(a){return e.handleAxiosErrors(a)}))},e.getSymptoms=function(){var a=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e.axios.get(e.getBaseService()+"api/control-diario/encuesta-diaria",{}).then((function(e){a&&a(e.data)})).catch((function(a){return e.handleAxiosErrors(a)}))},e}return t}(G)),Z=K.a.Option,$=function(){var e=Object(g.g)(),a=Object(n.useState)([]),t=Object(x.a)(a,2),l=t[0],o=t[1],i=Object(n.useState)([]),c=Object(x.a)(i,2),s=c[0],m=c[1],d=Object(E.b)(),p=w.a.useForm(),f=Object(x.a)(p,1)[0];Object(n.useEffect)((function(){W.getDepartments((function(e){o(e),console.log(e)}))}),[]);return r.a.createElement("div",null,r.a.createElement("p",null,"Introduce la informacion basica de tu familia"),r.a.createElement(w.a,{form:f,layout:"vertical",onFinish:function(a){console.log("Success:",a),z.register(a,(function(a){d(h(a)),e.push("/dashboard")}))},onFinishFailed:function(e){console.log("Failed:",e)}},r.a.createElement(w.a.Item,{label:"Nombre",name:"name",rules:[{required:!0,message:"Ingresa el nombre de tu familia"}]},r.a.createElement(S.a,{placeholder:"Introduce en nombre de tu familia"})),r.a.createElement(w.a.Item,{label:"Tel\xe9fono",name:"phone"},r.a.createElement(S.a,{placeholder:"ej. 70000001"})),r.a.createElement(w.a.Item,{label:"Direcci\xf3n",name:"address"},r.a.createElement(S.a,{placeholder:"ej. 70000001"})),r.a.createElement(w.a.Item,{label:"Zona",name:"zone"},r.a.createElement(S.a,{placeholder:"ej. centro"})),r.a.createElement(w.a.Item,{label:"Departamento",name:"department",rules:[{required:!0,message:"Ingresa el departamento donde te encuentras"}]},r.a.createElement(K.a,{showSearch:!0,placeholder:"Seleccione un departamento",optionFilterProp:"children",filterOption:function(e,a){return a.children.toLowerCase().indexOf(e.toLowerCase())>=0},onChange:function(e){console.log(l),l.forEach((function(a){a.id===e&&m(Object(J.a)(a.municipios))}))}},l.map((function(e){return r.a.createElement(Z,{key:e.id,value:e.id},e.nombre)})))),r.a.createElement(w.a.Item,{label:"Municipio",name:"municipality"},r.a.createElement(K.a,{showSearch:!0,placeholder:"Seleccione el municipio",optionFilterProp:"children",filterOption:function(e,a){return a.children.toLowerCase().indexOf(e.toLowerCase())>=0}},s.map((function(e){return r.a.createElement(Z,{key:e.id,value:e.id},e.nombre)})))),r.a.createElement(w.a.Item,{label:"Ciudad",name:"city"},r.a.createElement(S.a,{placeholder:"escriba su ciudad"})),r.a.createElement(w.a.Item,null,r.a.createElement(u.a,{type:"primary",htmlType:"submit"},"Continuar"))))},ee=(t(165),t(34)),ae=(t(210),t(112)),te=K.a.Option,ne=function(e){var a=e.newMember,t=Object(g.g)(),l=Object(E.b)(),o=w.a.useForm(),i=Object(x.a)(o,1)[0],c=Object(n.useState)(null),s=Object(x.a)(c,2),m=s[0],d=s[1],p=Object(n.useState)(!1),f=Object(x.a)(p,2),h=f[0],b=f[1],y=Object(E.c)((function(e){return e.family.toUpdate}));Object(n.useEffect)((function(){console.log(i)}),[i]);return r.a.createElement("div",null,r.a.createElement("p",null,"Introduce la informacion basica de tu familia"),r.a.createElement(w.a,{form:i,layout:"vertical",onFinish:function(e){a?(console.log("creating member"),z.registerMember(e,(function(e){l(function(e){return{type:"FAMILY_ADD_MEMBER",data:e}}(e)),t.push("/dashboard")}))):(console.log("updating member"),z.updateMember(Object(C.a)({},e,{id:y.id,firstControl:y.firstControl}),(function(e){l(function(e){return{type:"FAMILY_UPDATE_MEMBER",data:e}}(e)),t.push("/dashboard")})))},onFinishFailed:function(e){console.log("Failed:",e)},fields:a?[]:function(){var e=[];for(var a in y)e.push({name:a,value:y[a]});return e}()},r.a.createElement(w.a.Item,{label:"Nombre",name:"name",rules:[{required:!0,message:"Ingresa el nombre de tu familiar"}]},r.a.createElement(S.a,{placeholder:"Introduce en nombre de tu familia"})),r.a.createElement(w.a.Item,{label:"Edad",name:"age",rules:[{required:!0,message:"Ingresa la edad "}]},r.a.createElement(ae.a,{style:{width:"100%"},defaultValue:20,min:0,max:150})),r.a.createElement(w.a.Item,{label:"Sexo",name:"sex",rules:[{required:!0,message:"Ingresa el genero"}]},r.a.createElement(K.a,{showSearch:!0,placeholder:"Seleccione un departamento",optionFilterProp:"children",filterOption:function(e,a){return a.children.toLowerCase().indexOf(e.toLowerCase())>=0},onChange:function(e){d(e)}},r.a.createElement(te,{value:"MASCULINO"},"Hombre"),r.a.createElement(te,{value:"FEMENINO"},"Mujer"))),"FEMENINO"===m?r.a.createElement(w.a.Item,{label:"Te encuentras en estado de gestacion?",name:"gestation"},r.a.createElement(ee.a.Group,{name:"radiogroup",defaultValue:h,onChange:function(e){b(e.target.value)}},r.a.createElement(ee.a,{value:!1},"No"),r.a.createElement(ee.a,{value:!0},"Si"))):null,h&&"FEMENINO"===m?r.a.createElement(w.a.Item,{label:"Cuantas semanas",name:"gestationTime",rules:[{required:!0,message:"Ingresa el tiempo de gestaci\xf3n"}]},r.a.createElement(ae.a,{style:{width:"100%"},defaultValue:5,min:1,max:42})):null,a?null:r.a.createElement(w.a.Item,null,r.a.createElement(u.a,{type:"default",onClick:function(){t.push("/daily-data")},style:{width:"100%",marginBottom:8},className:"options"},"Reportar sintoma")),r.a.createElement(w.a.Item,null,r.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},r.a.createElement(u.a,{type:"default",onClick:function(){t.push("/dashboard")},style:{width:"100%",marginBottom:8,marginRight:8}},"Cancelar"),r.a.createElement(u.a,{type:"primary",htmlType:"submit",style:{width:"100%",marginBottom:8,marginLeft:8}},"Guardar")))))},re=(K.a.Option,function(){var e=Object(g.g)(),a=w.a.useForm(),t=Object(x.a)(a,1)[0],l=Object(n.useState)(!1),o=Object(x.a)(l,2),i=o[0],c=o[1];return r.a.createElement("div",null,r.a.createElement("p",null,"\xbfSe encuentra en estado de gestaci\xf3n?"),r.a.createElement(w.a,{form:t,layout:"vertical"},r.a.createElement(w.a.Item,null,r.a.createElement(ee.a.Group,{name:"radiogroup",defaultValue:i,onChange:function(e){!function(e){c(e.target.value)}(e)}},r.a.createElement(ee.a,{value:!1},"No"),r.a.createElement(ee.a,{value:!0},"Si"))),i?r.a.createElement(w.a.Item,{label:"Cuantas semanas"},r.a.createElement(ae.a,{style:{width:"100%"},defaultValue:5,min:1,max:42})):null,r.a.createElement(w.a.Item,null,r.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},r.a.createElement(u.a,{type:"default",onClick:function(){e.push("/dashboard")},style:{width:"100%",marginBottom:8,marginRight:8}},"Cancelar"),r.a.createElement(u.a,{type:"primary",onClick:function(){e.push("/external-contact")},style:{width:"100%",marginBottom:8,marginLeft:8}},"Guardar")))))}),le=(t(451),t(232)),oe=(t(450),function(){var e=Object(g.g)(),a=Object(n.useState)("list"),t=Object(x.a)(a,2),l=t[0],o=t[1],i=Object(n.useState)(!1),c=Object(x.a)(i,2),s=c[0],m=c[1],d=w.a.useForm(),p=Object(x.a)(d,1)[0];function f(){e.push("/update-member")}Object(E.c)((function(e){return e.family.members}));switch(l){case"list":return r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement("p",null,"\xbfEstuvo o tuvo contacto con alguna persona que llego del extrangero?"),r.a.createElement(w.a,{form:p,layout:"vertical"},r.a.createElement(w.a.Item,null,r.a.createElement(ee.a.Group,{name:"radiogroup",defaultValue:s,onChange:function(e){m(e.target.value)}},r.a.createElement(ee.a,{value:!1},"No"),r.a.createElement(ee.a,{value:!0},"Si"))),s?[{id:1,name:"yo",date:"2020-01-15",country:"ES"},{id:2,name:"conocido",date:"2020-02-15",country:"GE"},{id:3,name:"conocido",date:"2020-03-15",country:"MX"}].map((function(e,a){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{key:a,size:"large",type:"default",className:"options",style:{flex:1,marginBottom:8,width:"100%"},onClick:f},r.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},r.a.createElement("p",{style:{margin:0}},e.name),r.a.createElement("span",null,e.date))))})):null,s?r.a.createElement(u.a,{size:"large",type:"default",className:"add",style:{flex:1,marginBottom:24,width:"100%"},onClick:function(){o("form")}},"agregar"):null),r.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},r.a.createElement(u.a,{type:"default",onClick:function(){e.push("/add-member")},style:{width:"100%",marginBottom:8,marginRight:8}},"Cancelar"),r.a.createElement(u.a,{type:"primary",onClick:function(){e.push("/base-data")},style:{width:"100%",marginBottom:8,marginLeft:8}},"Guardar")));case"form":return r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement("p",null,"Informacion de contacto del extrangero"),r.a.createElement(w.a,{form:p,layout:"vertical"},r.a.createElement(w.a.Item,{label:"Qui\xe9n es tu contacto"},r.a.createElement(ee.a.Group,{name:"radiogroup"},r.a.createElement(ee.a,{value:!1},"Conocido"),r.a.createElement(ee.a,{value:!0},"Yo"))),r.a.createElement(w.a.Item,{label:"\xbfDonde estuvo?"},r.a.createElement(K.a,{showSearch:!0,placeholder:"Seleccione pais",optionFilterProp:"children",filterOption:function(e,a){return a.children.toLowerCase().indexOf(e.toLowerCase())>=0}},r.a.createElement(K.a.Option,{value:"es"},"Espa\xf1a"),r.a.createElement(K.a.Option,{value:"it"},"Italia"),r.a.createElement(K.a.Option,{value:"ch"},"China"))),r.a.createElement(w.a.Item,{label:"\xbfQue fecha?"},r.a.createElement(le.a,{style:{width:"100%"}})),r.a.createElement(w.a.Item,null,r.a.createElement("div",{style:{display:"flex",flexDirection:"row",marginTop:8}},r.a.createElement(u.a,{type:"default",onClick:function(){o("list")},style:{width:"100%",marginBottom:8,marginRight:8}},"Cancelar"),r.a.createElement(u.a,{type:"primary",onClick:function(){o("list")},style:{width:"100%",marginBottom:8,marginLeft:8}},"Guardar")))))}}),ie=(t(166),t(36)),ce=(t(167),t(94)),se=(t(211),t(111)),me=se.a.TabPane,ue=function(){var e=Object(n.useState)("1"),a=Object(x.a)(e,2),t=a[0],l=a[1],o=Object(n.useState)([]),i=Object(x.a)(o,2),c=i[0],s=i[1],m=Object(n.useState)([]),d=Object(x.a)(m,2),p=d[0],f=d[1],h=Object(g.g)(),b=w.a.useForm(),y=Object(x.a)(b,1)[0],v=Object(E.c)((function(e){return e.family.toUpdate})),j=Object(E.b)();Object(n.useEffect)((function(){W.getBaseData((function(e){console.log(e),s(e.enfermedadesBase),f(e.sintomas)}))}),[]);return r.a.createElement("div",null,r.a.createElement(w.a,{form:y,layout:"vertical",onFinish:function(e){if("1"===t)l("2");else{var a=[],n=[];e.sicknesses.map((function(e){n.push({id:e,nombre:""})})),e.symptoms.map((function(e){a.push({id:e,respuesta:!0,observacion:""})})),z.dailyControl(v.id,n,a,(function(e){j({type:"FAMILY_SET_FIRST_CONTROL",data:v}),j(O({text:e,type:"success"})),h.push("/dashboard")}))}},onFinishFailed:function(e){console.log("Failed:",e)}},r.a.createElement(se.a,{activeKey:t},r.a.createElement(me,{tab:"Enfermedades base",key:"1"},r.a.createElement("p",null,"\xbfPadece de alguna de las siguientes emfermades?"),r.a.createElement(w.a.Item,{name:"sicknesses"},r.a.createElement(ie.a.Group,null,c.map((function(e){return r.a.createElement("div",{key:e.id,style:{width:"100%",padding:8}},r.a.createElement(ie.a,{key:e.id,value:e.id},e.nombre))}))))),r.a.createElement(me,{tab:"Sintomas iniciales",key:"2"},r.a.createElement("p",null,"Padece de alguna de las siguientes emfermades"),r.a.createElement(w.a.Item,{name:"symptoms"},r.a.createElement(ie.a.Group,{style:{width:"100%"}},p.map((function(e){return r.a.createElement("div",{key:e.id,style:{display:"flex",justifyContent:"space-between",width:"100%",alignItems:"center",padding:8}},r.a.createElement(ie.a,{value:e.id},e.nombre),r.a.createElement(u.a,{type:"primary",shape:"circle",onClick:function(){var a,t;a=e.pregunta,t=e.ayuda,ce.a.info({title:a,content:r.a.createElement("div",null,r.a.createElement("p",null,t)),onOk:function(){}})}},"i"))})))))),",",r.a.createElement(w.a.Item,null,r.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},r.a.createElement(u.a,{type:"default",onClick:function(){"2"===t?l("1"):h.push("/dashboard")},style:{width:"100%",marginBottom:8,marginRight:8}},"Cancelar"),r.a.createElement(u.a,{type:"primary",htmlType:"submit",style:{width:"100%",marginBottom:8,marginLeft:8}},"Guardar")))))},de=(K.a.Option,function(e){e.newMember;var a=Object(g.g)(),t=w.a.useForm(),n=Object(x.a)(t,1)[0];function l(){ce.a.info({title:"Siga las siguientes instrucciones",content:r.a.createElement("div",null,r.a.createElement("p",null,"paso 1"),r.a.createElement("p",null,"paso 2")),onOk:function(){}})}return r.a.createElement("div",null,r.a.createElement("p",null,"Padece de alguna de las siguientes emfermades"),r.a.createElement(w.a,{form:n,layout:"vertical"},r.a.createElement(w.a.Item,null,r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},r.a.createElement(ie.a,null,"Tos"),r.a.createElement(u.a,{type:"primary",shape:"circle",onClick:l},"i"))),r.a.createElement(w.a.Item,null,r.a.createElement(ie.a,null,"Debilidad")),r.a.createElement(w.a.Item,null,r.a.createElement(ie.a,null,"Dolor de cabeza")),r.a.createElement(w.a.Item,null,r.a.createElement(ie.a,null,"Fatiga")),r.a.createElement(w.a.Item,null,r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},r.a.createElement(ie.a,null,"Irritacion ocular"),r.a.createElement(u.a,{type:"primary",shape:"circle",onClick:l},"i")))),r.a.createElement(w.a.Item,null,r.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},r.a.createElement(u.a,{type:"default",onClick:function(){a.push("/dashboard")},style:{width:"100%",marginBottom:8,marginRight:8}},"Cancelar"),r.a.createElement(u.a,{type:"primary",onClick:function(){a.push("/dashboard")},style:{width:"100%",marginBottom:8,marginLeft:8}},"Guardar"))))}),pe=K.a.Option,fe=function(){var e=Object(g.g)(),a=w.a.useForm(),t=Object(x.a)(a,1)[0];return r.a.createElement("div",null,r.a.createElement("p",null,"Introduce la informacion basica de tu familia"),r.a.createElement(w.a,{form:t,layout:"vertical"},r.a.createElement(w.a.Item,{label:"\xbfQue sintoma presentas?"},r.a.createElement(K.a,{showSearch:!0,placeholder:"Seleccione una opcion",optionFilterProp:"children",filterOption:function(e,a){return a.children.toLowerCase().indexOf(e.toLowerCase())>=0}},r.a.createElement(pe,{value:"op1"},"Tos"),r.a.createElement(pe,{value:"op2"},"Dolor de cabeza"),r.a.createElement(pe,{value:"op3"},"Fiebre"))),r.a.createElement(w.a.Item,{label:"\xbfDesde cuando lo presentas"},r.a.createElement(K.a,{showSearch:!0,placeholder:"Seleccione un tiempo aproximado",optionFilterProp:"children",filterOption:function(e,a){return a.children.toLowerCase().indexOf(e.toLowerCase())>=0}},r.a.createElement(pe,{value:"op1"},"Hoy"),r.a.createElement(pe,{value:"op2"},"Ayer"),r.a.createElement(pe,{value:"op3"},"Hace una semana"),r.a.createElement(pe,{value:"op3"},"Hace mas de una semana"))),r.a.createElement(w.a.Item,null,r.a.createElement(u.a,{type:"primary",onClick:function(){e.push("/dashboard")}},"Continuar"))))},Ee=(t(447),t(176)),ge=t(453),he=Ee.a.Panel,be=function(){var e=Object(g.g)();return r.a.createElement("div",null,r.a.createElement(Ee.a,{bordered:!1,defaultActiveKey:["0"],expandIcon:function(e){var a=e.isActive;return r.a.createElement(ge.a,{rotate:a?90:0})},className:"site-collapse-custom-collapse",style:{marginBottom:16}},[{title:"LAVARSE LAS MANOS",content:"L\xe1vese las manos regularmente con un desinfectante a base de alcohol o con agua y jab\xf3n. Tocarse la cara despu\xe9s de tocar superficies contaminadas o a personas enfermas es una de las formas en que se puede transmitir el virus. Al limpiar las manos se puede reducir el riesgo"},{title:"LIMPIEZA DE SUPERFICIES",content:"Limpie regularmente con desinfectante las superficies como bancos de cocina y escritorios de trabajo ."},{title:"INFORMARSE",content:"Inf\xf3rmese sobre el COVID-19 a trav\xe9s de fuentes confiables: su agencia de salud p\xfablica local o nacional, el sitio web de la OMS o su profesional sanitarios local. Todos deben conocer los s\xedntomas: para la mayor\xeda de las personas, comienza con fiebre y tos seca, no con secreci\xf3n nasal. La mayor\xeda de las personas tendr\xe1 una enfermedad leve y mejorar\xe1 sin necesidad de ning\xfan cuidado especial."},{title:"EVITAR LOS VIAJES",content:"Evitar viajar si tiene fiebre o tos, y en caso de enfermarse durante un vuelo, informar a la tripulaci\xf3n de inmediato. Una vez que llegue a casa, p\xf3ngase en contacto con un profesional de la salud y cu\xe9ntele d\xf3nde ha estado."},{title:"CUIDADO AL TOSER O ESTORNUDAR",content:"Si tose o estornuda, h\xe1galo en la manga o use un pa\xf1uelo de papel. Deseche el pa\xf1uelo inmediatamente en un contenedor de basura cerrado y luego l\xe1vese las manos."},{title:"SI ES MAYOR, EVITAR LAS \xc1REAS MUY CONCURRIDAS",content:"Si tiene m\xe1s de 60 a\xf1os o si tiene una afecci\xf3n subyacente como una enfermedad cardiovascular, una afecci\xf3n respiratoria o diabetes, corre un mayor riesgo de desarrollar una enfermedad grave. Podr\xeda tomar precauciones adicionales para evitar \xe1reas abarrotadas o lugares donde pueda interactuar con personas enfermas."},{title:"QUEDARSE EN CASA SI SE EST\xc1 ENFERMO",content:"Si no se siente bien, qu\xe9dese en casa y llame a su m\xe9dico o profesional de salud local. \xc9l o ella le har\xe1 algunas preguntas sobre sus s\xedntomas, d\xf3nde ha estado y con qui\xe9n ha tenido contacto. Esto ayudar\xe1 a asegurarse de que reciba el asesoramiento correcto, se dirija al centro de salud adecuado y evitar\xe1 que infecte a otros."},{title:"CUIDADOS EN CASA",content:"Si est\xe1 enfermo, qu\xe9dese en casa y coma y duerma por separado de su familia, use diferentes utensilios y cubiertos para comer."},{title:"CONSULTAR CON EL M\xc9DICO",content:"Si tiene dificultad para respirar, llame a su m\xe9dico y busque atenci\xf3n m\xe9dica de inmediato."},{title:"HABLAR CON LA COMUNIDAD Y EL TRABAJO",content:"Es normal y comprensible sentirse ansioso, especialmente si vive en un pa\xeds o comunidad que ha sido afectada. Descubra lo que puede hacer en su comunidad. Discuta c\xf3mo mantenerse seguro con su lugar de trabajo, escuela o lugar de culto."}].map((function(e){return r.a.createElement(he,{key:e.id,header:e.title,className:"site-collapse-custom-panel"},r.a.createElement("p",null,e.content))}))),",",r.a.createElement(u.a,{type:"default",onClick:function(){e.push("/dashboard")},style:{width:"100%"}},"Volver"))},ye=(K.a.Option,function(){var e=Object(g.g)(),a=w.a.useForm(),t=Object(x.a)(a,1)[0],l=Object(n.useState)(!1),o=Object(x.a)(l,2);o[0],o[1];return r.a.createElement("div",null,r.a.createElement("p",null,"Registrate"),r.a.createElement(w.a,{form:t,layout:"vertical"},r.a.createElement(w.a.Item,{label:"Nombre de usuario"},r.a.createElement(S.a,null)),r.a.createElement(w.a.Item,{label:"Correo electronico"},r.a.createElement(S.a,null)),r.a.createElement(w.a.Item,{label:"Contrase\xf1a"},r.a.createElement(S.a,null)),r.a.createElement(w.a.Item,null,r.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},r.a.createElement(u.a,{type:"primary",onClick:function(){e.push("/external-contact")},style:{width:"100%",marginBottom:8,marginLeft:8}},"Registrar")))))}),ve=(K.a.Option,function(){var e=Object(g.g)(),a=w.a.useForm(),t=Object(x.a)(a,1)[0],l=Object(n.useState)(!1),o=Object(x.a)(l,2);o[0],o[1];return r.a.createElement("div",null,r.a.createElement("p",null,"Registrate"),r.a.createElement(w.a,{form:t,layout:"vertical"},r.a.createElement(w.a.Item,{label:"Nombre de usuario"},r.a.createElement(S.a,null)),r.a.createElement(w.a.Item,{label:"Contrase\xf1a"},r.a.createElement(S.a,null)),r.a.createElement(w.a.Item,null,r.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},r.a.createElement(u.a,{type:"primary",onClick:function(){e.push("/external-contact")},style:{width:"100%",marginBottom:8,marginLeft:8}},"Registrar")))))}),Oe=(se.a.TabPane,K.a.Option,function(e){e.newMember;var a=Object(n.useState)([]),t=Object(x.a)(a,2),l=t[0],o=t[1],i=Object(g.g)(),c=Object(E.b)(),s=w.a.useForm(),m=Object(x.a)(s,1)[0],d=Object(E.c)((function(e){return e.family.toUpdate}));Object(n.useEffect)((function(){W.getSymptoms((function(e){o(e)}))}),[]);return r.a.createElement("div",null,r.a.createElement(w.a,{form:m,layout:"vertical",onFinish:function(e){var a=[];e.symptoms.map((function(e){a.push({id:e,respuesta:!0,observacion:""})})),z.dailyControl(d.id,[],a,(function(e){console.log(e),c(O({text:e,type:"success"})),i.push("/dashboard")}))},onFinishFailed:function(e){console.log("Failed:",e)}},r.a.createElement("p",null,"Presentas alguno de los siguientes sintomas?"),r.a.createElement(w.a.Item,{name:"symptoms"},r.a.createElement(ie.a.Group,{style:{width:"100%"}},l.map((function(e){return r.a.createElement("div",{key:e.id,style:{display:"flex",justifyContent:"space-between",width:"100%",alignItems:"center",padding:8}},r.a.createElement(ie.a,{value:e.id},e.nombre),r.a.createElement(u.a,{type:"primary",shape:"circle",onClick:function(){var a,t;a=e.pregunta,t=e.ayuda,ce.a.info({title:a,content:r.a.createElement("div",null,r.a.createElement("p",null,t)),onOk:function(){}})}},"i"))})))),r.a.createElement(w.a.Item,null,r.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},r.a.createElement(u.a,{type:"default",onClick:function(){i.push("/dashboard")},style:{width:"100%",marginBottom:8,marginRight:8}},"Cancelar"),r.a.createElement(u.a,{type:"primary",htmlType:"submit",style:{width:"100%",marginBottom:8,marginLeft:8}},"Guardar")))))}),je=m.a.Content,Ie=m.a.Footer;var Se=function(){var e=Object(E.c)((function(e){return e.auth.user}));function a(a){var t=a.children,n=Object(s.a)(a,["children"]);return r.a.createElement(g.b,Object.assign({},n,{render:function(a){a.location;return e.logged?t:r.a.createElement(g.a,{to:{pathname:"/"}})}}))}return Object(n.useEffect)((function(){}),[]),r.a.createElement(m.a,{id:"theme_bus"},r.a.createElement(Y,null),r.a.createElement(je,{style:{marginTop:100}},r.a.createElement(i.a,null,r.a.createElement(c.a,{xs:{span:20,offset:2},sm:{span:18,offset:3},md:{span:12,offset:6},lg:{span:10,offset:7},xl:{span:8,offset:8}},r.a.createElement(Q.a,null,r.a.createElement(g.d,null,r.a.createElement(g.b,{exact:!0,path:"/"},r.a.createElement(X,null)),r.a.createElement(g.b,{path:"/login"},r.a.createElement(H,null)),r.a.createElement(a,{path:"/family-data"},r.a.createElement($,null)),r.a.createElement(a,{path:"/dashboard"},r.a.createElement(j,null)),r.a.createElement(a,{path:"/add-member"},r.a.createElement(ne,{newMember:!0})),r.a.createElement(a,{path:"/update-member"},r.a.createElement(ne,{newMember:!1})),r.a.createElement(a,{path:"/gestation"},r.a.createElement(re,null)),r.a.createElement(a,{path:"/external-contact"},r.a.createElement(oe,null)),r.a.createElement(a,{path:"/base-data"},r.a.createElement(ue,null)),r.a.createElement(a,{path:"/base-symptom"},r.a.createElement(de,null)),r.a.createElement(a,{path:"/report"},r.a.createElement(fe,null)),r.a.createElement(a,{path:"/faq"},r.a.createElement(be,null)),r.a.createElement(a,{path:"/register"},r.a.createElement(ye,null)),r.a.createElement(a,{path:"/email-login"},r.a.createElement(ve,null)),r.a.createElement(a,{path:"/daily-data"},r.a.createElement(Oe,null))))))),r.a.createElement(Ie,{style:{textAlign:"center"}},"\xa92020 All rights reserved"),r.a.createElement("style",null,"\n      .logo {\n\t\t\t\twidth: 120px;\n\t\t\t\theight: 32px;\n\t\t\t\tbackground: rgba(255, 255, 255, 0.2);\n\t\t\t\tfloat: left;\n\t\t\t}\n    "))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ce=t(105),we={user:{username:"",token:"",logged:!1}},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"AUTH_SET_USER":return Object(C.a)({},e,{user:a.data});default:return e}},Ae={id:"",name:"",phone:"",address:"",zone:"",city:"",department:{},municipality:{},members:[],fetched:!1,toUpdate:{}},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FAMILY_SET_DATA":var t={id:a.data.id,name:a.data.nombre,phone:a.data.telefono,address:a.data.direccion,zone:a.data.zona,city:a.data.ciudad,department:a.data.departamento?{id:a.data.departamento.id,name:a.data.departamento.nombre}:{},municipality:a.municipio?{id:a.data.municipio.id,name:a.data.municipio.nombre}:{},members:[],fetched:!0,toUpdate:{}};return a.data.pacientes.map((function(e){t.members.push({id:e.id,name:e.nombre,age:e.edad,sex:e.genero,gestation:e.gestacion,gestationTime:e.tiempoGestacion,firstControl:e.controlInicial})})),t;case"FAMILY_ADD_MEMBER":return Object(C.a)({},e,{members:[].concat(Object(J.a)(e.members),[{id:a.data.id,name:a.data.nombre,age:a.data.edad,sex:a.data.genero,gestation:a.data.gestacion,gestationTime:a.data.tiempoGestacion,firstControl:a.data.controlInicial}])});case"FAMILY_UPDATE_MEMBER":var n=[];return e.members.map((function(e){console.log(e.id===a.data.id),e.id===a.data.id?n.push({id:a.data.id,name:a.data.nombre,age:a.data.edad,sex:a.data.genero,gestation:a.data.gestacion,gestationTime:a.data.tiempoGestacion,firstControl:a.data.controlInicial}):n.push(e)})),Object(C.a)({},e,{members:n});case"FAMILY_SET_FIRST_CONTROL":var r=[];return e.members.map((function(e){console.log(e.id===a.data.id),e.id===a.data.id?r.push(Object(C.a)({},e,{firstControl:!0})):r.push(e)})),Object(C.a)({},e,{members:r});case"FAMILY_SET_UPDATE_MEMBER":return Object(C.a)({},e,{toUpdate:a.data});default:return e}},ke={data:[{id:1,title:"Pregunta",content:"Respuesta"},{id:2,title:"Pregunta",content:"Respuesta"},{id:3,title:"Pregunta",content:"Respuesta"}]},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FAQ_SET_DATA":return Object(C.a)({},e,{data:a.data});default:return e}},Te={departments:[],countries:[],baseSicknesses:[],baseSymptoms:[],message:!1},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"APP_CONFIG_SET_DEPARTMENT":return Object(C.a)({},e,{user:a.data});case"APP_CONFIG_SET_BASE_DATA":return Object(C.a)({},e,{countries:a.data.countries,baseSicknesses:a.data.baseSicknesses,baseSymptoms:a.data.baseSymptoms});case"APP_CONFIG_SET_MESSAGE":return Object(C.a)({},e,{message:a.data});default:return e}},_e=Object(Ce.b)({appConfig:De,auth:xe,family:Fe,faq:Re}),Le=Object(Ce.c)(_e,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(r.a.createElement(E.a,{store:Le},r.a.createElement(Se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[236,1,2]]]);
//# sourceMappingURL=main.b3e3229e.chunk.js.map