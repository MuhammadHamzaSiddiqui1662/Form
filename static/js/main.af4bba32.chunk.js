(this.webpackJsonpforms=this.webpackJsonpforms||[]).push([[0],{118:function(e,r,a){},223:function(e,r,a){},224:function(e,r,a){"use strict";a.r(r);var s=a(0),n=a.n(s),t=a(8),d=a.n(t),i=(a(118),a(105)),l=a(21),c=a(39),o=a(263),m=a(5),h=function(e){return Object(m.jsx)(o.a,Object(c.a)(Object(c.a)({},e),{},{variant:"contained",color:"primary",type:"submit",children:" Primary "}))},u=a(267),j=function(e){return Object(m.jsx)(u.a,Object(c.a)(Object(c.a)({fullWidth:!0},e),{},{id:"filled-basic",variant:"filled"}))},b=a(268),O=a(269),x=a(227),p=a(232),g=a(229),f=a(270),N=a(228),v=a(4),w=l.b({firstName:l.c("Enter Your Firstname").required("Firstname is required"),lastName:l.c("Enter Your Lastname").required("Lastname is required"),phoneNumber:l.a("Enter Your Phone number").required("Email is required"),gender:l.c("Enter Your Gender").required("Gender is required"),email:l.c("Enter Your Name").email("Enter a valid email").required("Email is required"),password:l.c("Enter Your Password").min(8,"Password Should be of min length of 8").required("Password is required"),address:l.c("Enter Your Adderss").required("Adderss is required")}),C=Object(v.a)((function(){return{form:{width:"40%"},container:{padding:"20px",background:"#eeeeee"}}}))((function(e){var r=e.classes,a=Object(i.a)({initialValues:{firstName:"",lastName:"",phoneNumber:"",gender:"",address:"",email:"",password:""},validationSchema:w,onSubmit:function(e){alert(JSON.stringify(e,null,2))}});return Object(m.jsx)("form",{onSubmit:a.handleSubmit,className:r.form,children:Object(m.jsxs)(b.a,{className:r.container,container:!0,sm:12,spacing:2,children:[Object(m.jsx)(b.a,{item:!0,sm:12,children:Object(m.jsx)(O.a,{variant:"h2",component:"h2",color:"primary",children:"Register"})}),Object(m.jsx)(b.a,{item:!0,sm:12,children:Object(m.jsxs)(b.a,{container:!0,sm:12,spacing:1,children:[Object(m.jsx)(b.a,{item:!0,sm:12,md:6,children:Object(m.jsx)(j,{id:"firstName",name:"firstName",label:"Firstname",value:a.values.firstName,onChange:a.handleChange,error:a.touched.firstName&&Boolean(a.errors.firstName),helperText:a.touched.firstName&&a.errors.firstName})}),Object(m.jsx)(b.a,{item:!0,sm:12,md:6,children:Object(m.jsx)(j,{id:"lastName",name:"lastName",label:"LastName",value:a.values.lastName,onChange:a.handleChange,error:a.touched.lastName&&Boolean(a.errors.lastName),helperText:a.touched.lastName&&a.errors.lastName})})]})}),Object(m.jsx)(b.a,{item:!0,sm:12,children:Object(m.jsxs)(b.a,{container:!0,sm:12,spacing:1,children:[Object(m.jsx)(b.a,{item:!0,sm:12,md:6,children:Object(m.jsx)(j,{id:"phoneNumber",name:"phoneNumber",label:"Phone Number",type:"number",value:a.values.phoneNumber,onChange:a.handleChange,error:a.touched.phoneNumber&&Boolean(a.errors.phoneNumber),helperText:a.touched.phoneNumber&&a.errors.phoneNumber})}),Object(m.jsx)(b.a,{item:!0,sm:12,md:6,children:Object(m.jsxs)(x.a,{fullWidth:!0,children:[Object(m.jsx)(p.a,{id:"gender-select-label",children:"Gender"}),Object(m.jsxs)(g.a,{labelId:"gender-select-label",id:"gender",name:"gender",label:"Gender",value:a.values.gender,onChange:a.handleChange,error:a.touched.gender&&Boolean(a.errors.gender),helperText:a.touched.gender&&a.errors.gender,children:[Object(m.jsx)(f.a,{value:"Male",children:"Male"}),Object(m.jsx)(f.a,{value:"Female",children:"Female"}),Object(m.jsx)(f.a,{value:"Other",children:"Other"})]}),Object(m.jsx)(N.a,{children:a.touched.gender&&a.errors.gender})]})})]})}),Object(m.jsx)(b.a,{item:!0,sm:12,children:Object(m.jsxs)(b.a,{container:!0,sm:12,spacing:1,children:[Object(m.jsx)(b.a,{item:!0,sm:12,md:6,children:Object(m.jsx)(j,{id:"email",name:"email",label:"Email",value:a.values.email,onChange:a.handleChange,error:a.touched.email&&Boolean(a.errors.email),helperText:a.touched.email&&a.errors.email})}),Object(m.jsx)(b.a,{item:!0,sm:12,md:6,children:Object(m.jsx)(j,{id:"password",name:"password",type:"password",label:"Password",value:a.values.password,onChange:a.handleChange,error:a.touched.password&&Boolean(a.errors.password),helperText:a.touched.password&&a.errors.password})})]})}),Object(m.jsx)(b.a,{item:!0,sm:12,children:Object(m.jsx)(j,{id:"address",name:"address",label:"Address",value:a.values.address,onChange:a.handleChange,error:a.touched.address&&Boolean(a.errors.address),helperText:a.touched.address&&a.errors.address})}),Object(m.jsx)(b.a,{item:!0,sm:12,children:Object(m.jsx)(h,{fullWidth:!0})})]})})}));a(223);var q=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(C,{})})},E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,271)).then((function(r){var a=r.getCLS,s=r.getFID,n=r.getFCP,t=r.getLCP,d=r.getTTFB;a(e),s(e),n(e),t(e),d(e)}))};d.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(q,{})}),document.getElementById("root")),E()}},[[224,1,2]]]);
//# sourceMappingURL=main.af4bba32.chunk.js.map