import{s as e,l as t,a as n,b as o,r,t as s,c as a}from"./vendor.69abf69f.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const o=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,s)=>{const a=new URL(e,o);if(self[t].moduleMap[a])return n(self[t].moduleMap[a]);const i=new Blob([`import * as m from '${a}';`,`${t}.moduleMap['${a}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){s(new Error(`Failed to import: ${e}`)),r(c)},onload(){n(self[t].moduleMap[a]),r(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("/assets/");const i=r(),c=function(r,{eye:s,center:a}){let i=!1,c=null;const m={eye:s,center:a},d=e=>{i=!0,c=[e.screenX/r.height,e.screenY/r.height]},l=s=>{if(!i)return;const[a,d]=[s.screenX/r.height,s.screenY/r.height],[l,u]=c;c=[a,d];const p=e([],m.eye,m.center),h=t(p);let f=Math.acos(p[1]/h),g=Math.atan2(p[2],p[0]);f=Math.min(Math.max(f-5*(d-u),1e-8),Math.PI-1e-8),g+=5*(a-l),n(m.eye,h*Math.cos(g)*Math.sin(f),h*Math.cos(f),h*Math.sin(g)*Math.sin(f)),o(m.eye,m.eye,m.center)},u=()=>{i=!1};return r.addEventListener("mousedown",d),r.addEventListener("mousemove",l),r.addEventListener("mouseup",u),r.addEventListener("touchstart",(e=>d(e.touches[0]))),r.addEventListener("touchmove",(e=>l(e.touches[0]))),r.addEventListener("touchend",u),m}(document.getElementsByTagName("canvas")[0],{eye:[1.7,1.5,2.9],center:[0,0,0]});!function(){const e=new s({title:"Parameters"}),t={scale:15,grid:20,example:2,mode:3};e.addInput(t,"scale",{min:0,max:50}),e.addInput(t,"grid",{min:5,max:40,step:1}),e.addInput(t,"example",{options:{torus:1,csg:2}}),e.addInput(t,"mode",{options:{shading:3,curvature:2,normal:1}});const n=localStorage.getItem("graphics-workshop");if(n)try{e.importPreset(JSON.parse(n))}catch(o){console.warn(`Error loading saved preset: ${o}`)}e.on("change",(()=>{const t=e.exportPreset();localStorage.setItem("graphics-workshop",JSON.stringify(t))}))}();const m=i({uniforms:{view:()=>a([],c.eye,c.center,[0,1,0]),resolution:({drawingBufferWidth:e,drawingBufferHeight:t})=>[e,t],time:i.context("time")}}),d=i({frag:"precision mediump float;\n\nuniform vec2 resolution;\nuniform float time;\n\nvoid main() {\n    vec2 coord = gl_FragCoord.xy / resolution;\n\n    // Output RGB color in range from 0.0 to 1.0\n    vec3 color = vec3(coord.x, coord.y, 0.0);\n    color.z += abs(sin(time));\n\n    gl_FragColor = vec4(color, 1.0);\n}\n",vert:"attribute vec2 position;\n\nvoid main() {\n    gl_Position = vec4(position, 0.0, 1.0);\n}\n",attributes:{position:[[-1,1],[-1,-1],[1,1],[1,-1]]},elements:[[0,1,2],[2,1,3]]});i.frame((()=>{m((()=>{i.clear({color:[0,0,0,1]}),d()}))}));