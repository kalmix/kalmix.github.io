import{j as e}from"./jsx-runtime.7faW4zRM.js";import{r as o}from"./index.DhYZZe0J.js";function g(m){const{image:i,title:l,condition:s,material:r,dimensions:a,staticC:d,dynamicC:n}=m.data;return e.jsxs("div",{className:"w-full max-w-[350px] h-full flex flex-col overflow-hidden rounded-2xl shadow-lg bg-white",children:[e.jsx("img",{src:i,alt:"",className:"w-full h-48 object-cover"}),e.jsxs("div",{className:"flex flex-col justify-between flex-grow bg-blue/80 p-4 text-white",children:[e.jsx("h1",{className:"font-bold text-xl sm:text-2xl mb-2",children:l}),e.jsxs("ul",{className:"mb-4 text-sm",children:[e.jsxs("li",{children:["Condición: ",s]}),e.jsxs("li",{children:["Material: ",r]}),e.jsxs("li",{children:["Dimensiones: ",a]}),e.jsxs("li",{children:["Capacidad Estática: ",d]}),e.jsxs("li",{children:["Capacidad Dinámica: ",n]})]}),e.jsx("button",{className:"px-4 py-2 bg-white text-black rounded text-sm font-medium hover:bg-gray-100 transition-colors mt-auto",children:"Explorar"})]})]})}function w(){const[i,l]=o.useState(4),[s,r]=o.useState(0),a=o.useRef(null),d=Array.from({length:12},(t,c)=>({image:"https://ucarecdn.com/d3c9153b-ca04-40ca-a3be-3c26360a51d6/-/preview/600x400/",title:`Item ${c+1}`,condition:"New",material:"Wood",dimensions:"30x40 cm",staticC:"20kg",dynamicC:"10kg"}));o.useEffect(()=>{const t=()=>{window.innerWidth<640?l(1):window.innerWidth<1024?l(2):window.innerWidth<1280?l(3):l(4)};return t(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]),o.useEffect(()=>{if(a.current){const f=a.current.scrollWidth/12*s*i;a.current.scrollTo({left:f,behavior:"smooth"})}},[s,i]);const n=Math.ceil(12/i),x=s*i,h=()=>{r(t=>Math.min(t+1,n-1))},u=()=>{r(t=>Math.max(t-1,0))};return e.jsxs("div",{className:"flex flex-col items-center py-8 sm:py-12 md:py-16","data-aos":"fade-right",children:[e.jsx("div",{ref:a,className:"flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 overflow-x-auto px-4 w-full max-w-7xl scrollbar-hide",children:d.slice(x,x+i).map((t,c)=>e.jsx("div",{className:"flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4",children:e.jsx(g,{data:t})},c))}),e.jsxs("div",{className:"flex gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-10 items-center mt-4 sm:mt-6",children:[e.jsx("button",{className:`px-4 sm:px-6 py-2 rounded font-bold text-white ${s===0?"bg-blue/40":"bg-blue/80 hover:bg-blue"} transition-colors`,onClick:u,disabled:s===0,children:"<"}),e.jsxs("p",{className:"text-sm sm:text-base",children:[s+1," de ",n]}),e.jsx("button",{className:`px-4 sm:px-6 py-2 rounded font-bold text-white ${s===n-1?"hover:bg-blue/40":"bg-blue/80 hover:bg-blue"} transition-colors`,onClick:h,disabled:s===n-1,children:">"})]})]})}export{w as default};
