(window.webpackJsonpGUI=window.webpackJsonpGUI||[]).push([[24],{1582:function(t,e,o){"use strict";o.r(e),o.d(e,"resources",(function(){return p}));var s=o(1470);const i="http://www.w3.org/2000/svg",n=document.createElementNS(i,"svg");n.style.position="fixed",n.style.top="-999999px",n.style.width="0",n.style.height="0",document.body.appendChild(n);let r=0;const l=new WeakMap,c=t=>(l.get(t)||l.set(t,new Set),l.get(t)),a=(t,e)=>{let o;for(const t of e)(!o||t.priority>o.priority)&&(o=t);t.style.filter=o?o.filter:""},u=(t,e)=>{const o=c(t);o.add(e),a(t,o)},d=(t,e)=>{const o=c(t);o.delete(e),a(t,o)};var h=class{constructor(t,e){this.priority=t;const o="sa_glower_filter".concat(r++);this.filter='url("#'.concat(o,'")'),this.previousElements=new Set;const s=document.createElementNS(i,"filter");s.id=o,s.setAttribute("width","180%"),s.setAttribute("height","160%"),s.setAttribute("x","-40%"),s.setAttribute("y","-30%");const l=document.createElementNS(i,"feGaussianBlur");l.setAttribute("in","SourceGraphic"),l.setAttribute("stdDeviation","4"),s.appendChild(l);const c=document.createElementNS(i,"feComponentTransfer");c.setAttribute("result","outBlur"),s.appendChild(c);const a=document.createElementNS(i,"feFuncA");a.setAttribute("type","table"),a.setAttribute("tableValues","0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1"),c.appendChild(a);const u=document.createElementNS(i,"feFlood");u.setAttribute("flood-opacity","1"),u.setAttribute("result","outColor"),s.appendChild(u),this.filterFlood=u;const d=document.createElementNS(i,"feComposite");d.setAttribute("in","outColor"),d.setAttribute("in2","outBlur"),d.setAttribute("operator","in"),d.setAttribute("result","outGlow"),s.appendChild(d);const h=document.createElementNS(i,"feComposite");h.setAttribute("in","SourceGraphic"),h.setAttribute("in2","outGlow"),h.setAttribute("operator","over"),s.appendChild(h),n.appendChild(s),this.setColor(e)}setColor(t){this.filterFlood.setAttribute("flood-color",t)}setGlowingThreads(t){const e=new Set,o=Blockly.getMainWorkspace();if(o)for(const s of t)s.stack.forEach(t=>{const i=o.getBlockById(t);if(!i)return;if(!s.stack.find(t=>{let e=i;for(;e.childBlocks_.length;)if(e=e.childBlocks_[e.childBlocks_.length-1],t===e.id)return!0;return!1})&&i.svgPath_){const t=i.svgPath_;e.add(t)}});for(const t of this.previousElements)e.has(t)||d(t,this);for(const t of e)this.previousElements.has(t)||u(t,this);this.previousElements=e}};const p={"userscript.js":async function({addon:t,global:e,console:o}){const i=t.tab.traps.vm,n=new h(0,t.settings.get("highlight-color"));t.settings.addEventListener("change",()=>{n.setColor(t.settings.get("highlight-color"))}),t.self.addEventListener("disabled",()=>{n.setGlowingThreads([])});const r=i.runtime._step;i.runtime._step=function(...e){if(r.call(this,...e),!t.self.disabled){const t=Object(s.a)(),e=i.runtime.threads.filter(e=>e!==t&&!e.target.blocks.forceNoGlow&&!e.isCompiled);n.setGlowingThreads(e)}}}}}}]);