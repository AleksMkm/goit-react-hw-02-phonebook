(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={form:"Filter_form__Np9pw",title:"Filter_title__1Esjz",searchField:"Filter_searchField__PwG3D"}},13:function(t,e,n){t.exports={section:"Section_section__2zECi",title:"Section_title__1crH8"}},16:function(t,e,n){t.exports={container:"Container_container__1cVFv"}},20:function(t,e,n){t.exports={contactList:"ContactList_contactList__iVOtl"}},29:function(t,e,n){},3:function(t,e,n){t.exports={contact:"Contact_contact__idF_o",icon:"Contact_icon__39M6t",name:"Contact_name__I7Tc-",phone:"Contact_phone__eVjac",btn:"Contact_btn__1MPRm"}},36:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),i=n(15),o=n.n(i),s=(n(29),n(22)),l=n(6),d=n(7),u=n(9),m=n(8),b=n(48),h=n(16),j=n.n(h);function f(t){var e=t.children;return Object(a.jsx)("div",{className:j.a.container,children:e})}var x=n(17),p=n.n(x),_=n(19),O=n.n(_),v=n(3),C=n.n(v);var g=function(t){var e=t.id,n=t.name,c=t.phone,r=t.deleteHandler;return Object(a.jsxs)("li",{className:C.a.contact,children:[Object(a.jsxs)("span",{className:C.a.name,children:[Object(a.jsx)(p.a,{className:C.a.icon}),n]}),Object(a.jsxs)("span",{className:C.a.phone,children:[Object(a.jsx)(O.a,{className:C.a.icon}),c]}),Object(a.jsx)("button",{className:C.a.btn,onClick:r,"data-id":e,children:"Delete"})]},e)},F=n(20),N=n.n(F);var S=function(t){var e=t.contacts,n=t.deleteHandler;return Object(a.jsx)("ul",{className:N.a.contactList,children:e.map((function(t){return g({id:t.id,name:t.name,phone:t.number,deleteHandler:n})}))})},y=n(21),w=n(4),L=n.n(w),k=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number,r=e.currentTarget;if(""===a.trim()||""===c.trim())return alert("Please fill all fields!"),void r[r.length-1].blur();t.props.onSubmit(a.trim(),c.trim()),t.setState({name:"",number:""}),r[r.length-1].blur()},t.handleChange=function(e){var n=e.currentTarget;t.setState(Object(y.a)({},n.name,n.value))},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(a.jsxs)("form",{className:L.a.form,onSubmit:this.handleSubmit,children:[Object(a.jsx)("label",{children:Object(a.jsx)("input",{className:L.a.addField,type:"text",value:e,name:"name",placeholder:"name",onChange:this.handleChange})}),Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{className:L.a.addField,type:"text",value:n,name:"number",placeholder:"xxxx-xx-xx",onChange:this.handleChange}),Object(a.jsx)("button",{className:L.a.btn,type:"submit",children:"Add contact"})]})]})}}]),n}(c.Component),T=n(13),H=n.n(T);var P=function(t){var e=t.title,n=t.children;return Object(a.jsxs)("section",{className:H.a.section,children:[Object(a.jsx)("p",{className:H.a.title,children:e}),n]})},A=n(10),D=n.n(A);var E=function(t){var e=t.value,n=t.onChange;return Object(a.jsx)("form",{className:D.a.form,children:Object(a.jsxs)("label",{children:[Object(a.jsx)("span",{className:D.a.title,children:"Find contacts by name"}),Object(a.jsx)("input",{className:D.a.searchField,type:"text",value:e,onChange:n})]})})},z=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],I=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:z,filter:""},t.addContact=function(e,n){if(t.state.contacts.find((function(t){return t.name.toLowerCase()===e.toLowerCase()})))alert("".concat(e," is already in Phonebook"));else{var a={id:Object(b.a)(),name:e,number:n};t.setState((function(t){var e=t.contacts;return{contacts:[].concat(Object(s.a)(e),[a])}}))}},t.handleFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getFilteredContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase().trim();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t.deleteContact=function(e){var n=e.currentTarget.dataset.id;t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==n}))}})),e.currentTarget.blur()},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,c=this.getFilteredContacts();return Object(a.jsxs)(f,{children:[Object(a.jsx)(P,{title:"Phonebook",children:Object(a.jsx)(k,{onSubmit:this.addContact})}),Object(a.jsxs)(P,{title:"Contacts",children:[Object(a.jsx)(E,{value:n,onChange:this.handleFilter}),n.trim()?Object(a.jsx)(S,{contacts:c,deleteHandler:this.deleteContact}):Object(a.jsx)(S,{contacts:e,deleteHandler:this.deleteContact})]})]})}}]),n}(c.Component),J=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(I,{})}),document.getElementById("root")),J()},4:function(t,e,n){t.exports={form:"ContactForm_form__1Jezx",addField:"ContactForm_addField__1ifRn",btn:"ContactForm_btn__34prv"}}},[[36,1,2]]]);
//# sourceMappingURL=main.822cd1ed.chunk.js.map