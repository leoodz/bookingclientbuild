import{u as n,a as t,j as e}from"./index-4fcab3d7.js";function d(){var a;const i=n(s=>s.serviceStore);console.log("serviceStore",i);const c=t();function r(s){return"$"+s.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}return e.jsxs("div",{className:"service_container",children:[e.jsxs("div",{className:"service_banner",children:[e.jsx("img",{src:"https://lella.qodeinteractive.com/wp-content/uploads/2019/08/p2-title-img-1.jpg",alt:""}),e.jsxs("div",{className:"service_banner_content",children:[e.jsx("h1",{children:"My Service"}),e.jsx("p",{children:"Promising Excellence in Everything We Do. Come and try!"})]})]}),e.jsx("div",{className:"service_content",children:(a=i.data)==null?void 0:a.map(s=>e.jsxs("div",{className:"service_item",children:[e.jsx("img",{src:s==null?void 0:s.avatar,alt:""}),e.jsxs("div",{className:"service_item_detail",children:[e.jsx("h3",{children:s.name}),e.jsxs("p",{children:[e.jsx("i",{className:"fa-solid fa-heart"})," ",s.desc]}),e.jsxs("div",{className:"price_item",children:[e.jsx("p",{children:"Service Price:"}),e.jsxs("p",{className:"price_number",children:[" ",r(s.price)]})]}),e.jsx("button",{className:"btn-21",onClick:()=>c("/booking"),children:e.jsxs("span",{children:["BOOK  NOW ",e.jsx("i",{className:"fa-solid fa-arrow-right"})]})})]})]}))})]})}export{d as default};
