var gf=Object.defineProperty;var xf=(i,e,t)=>e in i?gf(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Ft=(i,e,t)=>xf(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const _f={0:"⁰",1:"¹",2:"²",3:"³",4:"⁴",5:"⁵",6:"⁶",7:"⁷",8:"⁸",9:"⁹","-":"⁻"},vf={0:"₀",1:"₁",2:"₂",3:"₃",4:"₄",5:"₅",6:"₆",7:"₇",8:"₈",9:"₉"},Rs="−";function ze(i){return String(i).split("").map(e=>_f[e]??e).join("")}function Wi(i){return String(i).split("").map(e=>vf[e]??e).join("")}function Mf(i){return i<0?`${Rs}${-i}`:String(i)}function iu(i){const e=new Map;for(const t of i)e.set(t,(e.get(t)??0)+1);return[...e.entries()].sort((t,n)=>t[0]-n[0]).map(([t,n])=>n===1?String(t):`${t}${ze(n)}`).join(" × ")}function _n(i){const e=new Map;for(const n of i)e.set(n.pow,(e.get(n.pow)??0)+n.coef);const t=[...e.entries()].map(([n,s])=>({coef:s,pow:n})).filter(n=>n.coef!==0).sort((n,s)=>s.pow-n.pow);return t.length===0?"0":t.map((n,s)=>{const r=Math.abs(n.coef),a=n.pow===0?"":n.pow===1?"x":`x${ze(n.pow)}`,c=(r===1&&n.pow!==0?"":String(r))+a;return s===0?n.coef<0?`${Rs}${c}`:c:n.coef<0?` ${Rs} ${c}`:` + ${c}`}).join("")}function Sf(i=Date.now()){let e=i>>>0;const t=()=>{e=e+1831565813>>>0;let s=e;return s=Math.imul(s^s>>>15,s|1),s^=s+Math.imul(s^s>>>7,s|61),((s^s>>>14)>>>0)/4294967296},n=(s,r)=>s+Math.floor(t()*(r-s+1));return{next:t,int:n,pick:s=>{if(s.length===0)throw new Error("pick from empty list");return s[n(0,s.length-1)]},shuffle:s=>{const r=[...s];for(let a=r.length-1;a>0;a--){const o=n(0,a);[r[a],r[o]]=[r[o],r[a]]}return r},chance:s=>t()<s}}const Ze=240,Ve=140,Gt="#ffe98a",cn="#ffa3b1",Fn="#9fd6ff",ge=i=>(Math.round(i*10)/10).toString();function zt(...i){return`<svg viewBox="0 0 ${Ze} ${Ve}" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">${i.join("")}</svg>`}const Ds=i=>i?` stroke="${i}"`:"",jt=(i,e,t,n,s,r=!1)=>`<line x1="${ge(i)}" y1="${ge(e)}" x2="${ge(t)}" y2="${ge(n)}"${Ds(s)}${r?' stroke-dasharray="5 5"':""}/>`,gn=(i,e,t)=>`<polygon points="${i.map(([n,s])=>`${ge(n)},${ge(s)}`).join(" ")}"${Ds(e)}/>`,Di=(i,e)=>`<polyline points="${i.map(([t,n])=>`${ge(t)},${ge(n)}`).join(" ")}"${Ds(e)}/>`,fi=(i,e,t,n,s)=>`<circle cx="${ge(i)}" cy="${ge(e)}" r="${ge(t)}"${Ds(n)}${s?` fill="${s}" fill-opacity="0.35"`:""}/>`,hi=(i,e,t="currentColor",n=3.2)=>`<circle cx="${ge(i)}" cy="${ge(e)}" r="${n}" fill="${t}" stroke="none"/>`,Ni=(i,e,t,n,s,r)=>`<rect x="${ge(i)}" y="${ge(e)}" width="${ge(t)}" height="${ge(n)}"${Ds(s)}${r?` fill="${r}" fill-opacity="0.35"`:""}/>`,Wt=(i,e,t,n=15,s="currentColor")=>`<text x="${ge(i)}" y="${ge(e)}" font-size="${n}" fill="${s}" stroke="none" text-anchor="middle" dominant-baseline="central">${t}</text>`,qn=i=>i*Math.PI/180;function Ef(i,e,t,n,s,r){const a=[i+t*Math.cos(qn(n)),e-t*Math.sin(qn(n))],o=[i+t*Math.cos(qn(s)),e-t*Math.sin(qn(s))],c=Math.abs(s-n)>180?1:0;return`<path d="M${ge(a[0])} ${ge(a[1])}A${t} ${t} 0 ${c} 0 ${ge(o[0])} ${ge(o[1])}"${Ds(r)}/>`}function yf(i,e,t,n,s,r){const a=[i+t*Math.cos(qn(n)),e-t*Math.sin(qn(n))],o=[i+t*Math.cos(qn(s)),e-t*Math.sin(qn(s))],c=Math.abs(s-n)>180?1:0;return`<path d="M${ge(i)} ${ge(e)}L${ge(a[0])} ${ge(a[1])}A${t} ${t} 0 ${c} 0 ${ge(o[0])} ${ge(o[1])}Z" stroke="${r}" fill="${r}" fill-opacity="0.35"/>`}const aa=(i,e,t,n,s=9)=>Di([[i+t*s,e],[i+t*s,e+n*s],[i,e+n*s]],Gt),Bn=(i,e,t,n)=>[i+t*Math.cos(qn(n)),e-t*Math.sin(qn(n))];function su(i,e){const t=Ze/2,n=Ve/2,s=60,r=[fi(t,n,s)];for(let u=1;u<=12;u++){const[h,f]=Bn(t,n,s-12,90-u*30);r.push(Wt(h,f,String(u),12))}const[a,o]=Bn(t,n,s-20,90-e*6),[c,l]=Bn(t,n,s-34,90-(i%12+e/60)*30);return r.push(jt(t,n,a,o,Fn),`<line x1="${t}" y1="${n}" x2="${ge(c)}" y2="${ge(l)}" stroke="${cn}" stroke-width="4.5"/>`,hi(t,n)),zt(...r)}function bf(i,e=5,t=cn){const n=Math.ceil(i/e),s=Math.min(40,(Ve-16)/n,(Ze-20)/e),r=s*.36,a=Ze/2-(Math.min(i,e)-1)*s/2,o=Ve/2-(n-1)*s/2,c=[];for(let l=0;l<i;l++)c.push(fi(a+l%e*s,o+Math.floor(l/e)*s,r,t,t));return zt(...c)}function ru(i,e){const n=Ze-60,s=[];for(let r=0;r<e;r++)s.push(Ni(30+r*n/e,45,n/e,50,void 0,r<i?Gt:void 0));return zt(...s)}function Tf(i,e){const t=Ze/2,n=Ve/2,s=58,r=[];for(let a=0;a<i;a++)r.push(yf(t,n,s,90-(a+1)*360/e,90-a*360/e,Gt));r.push(fi(t,n,s));for(let a=0;a<e;a++)r.push(jt(t,n,...Bn(t,n,s,90-a*360/e)));return zt(...r)}function Af(i,e,t,n){const r=Ve-22,a=Ve-36,o=Ze-34-10,c=[jt(34,r,34+o,r),jt(34,r,34,r-a)];for(let u=0;u<=t;u+=n){const h=r-u/t*a;c.push(jt(31,h,34+o,h,"rgba(255,255,255,0.22)"),Wt(20,h,String(u),10))}const l=o/i.length;return i.forEach((u,h)=>{c.push(Ni(34+h*l+l*.2,r-u/t*a,l*.6,u/t*a,Fn,Fn),Wt(34+h*l+l/2,r+11,e[h]??"",11))}),zt(...c)}function Rf(i,e,t,n){const r=Ve-22,a=Ve-36,o=Ze-34-14,c=[jt(34,r,34+o,r),jt(34,r,34,r-a)];for(let u=0;u<=t;u+=n){const h=r-u/t*a;c.push(jt(31,h,34+o,h,"rgba(255,255,255,0.22)"),Wt(20,h,String(u),10))}const l=i.map((u,h)=>[34+(h+.5)*o/i.length,r-u/t*a]);return c.push(Di(l,Gt),...l.map(([u,h])=>hi(u,h,Gt)),...l.map(([u],h)=>Wt(u,r+11,e[h]??"",11))),zt(...c)}function $i(i=5,e=!0){const t=Ze/2,n=Ve/2,s=(Ze/2-14)/i,r=(Ve/2-8)/i,a=(c,l)=>[t+c*s,n-l*r],o=[];for(let c=-i;c<=i;c++)c!==0&&o.push(jt(a(c,0)[0],6,a(c,0)[0],Ve-6,"rgba(255,255,255,0.13)"),jt(8,a(0,c)[1],Ze-8,a(0,c)[1],"rgba(255,255,255,0.13)"));return o.push(jt(8,n,Ze-8,n),jt(t,Ve-4,t,4),Wt(Ze-8,n+10,"x",11),Wt(t+9,8,"y",11),Wt(t-8,n+9,"O",10)),e&&o.push(Wt(a(1,0)[0],n+9,"1",9),Wt(t-8,a(0,1)[1],"1",9)),{at:a,base:o.join(""),plot(c,l=Gt){const u=[[]];for(let h=0;h<=120;h++){const f=-i+h/120*2*i,d=c(f);if(!Number.isFinite(d)||Math.abs(d)>i*1.25){u[u.length-1].length&&u.push([]);continue}u[u.length-1].push(a(f,d))}return u.filter(h=>h.length>1).map(h=>Di(h,l)).join("")}}}function wf(i,e,t,n,s,r,a,o){const l=Ze-40,u=f=>20+(f-r)/(a-r)*l,h=[jt(20,112,20+l,112)];for(let f=r;f<=a;f+=o)h.push(jt(u(f),108,u(f),116),Wt(u(f),127,String(f),10));return h.push(Ni(u(e),40,u(n)-u(e),40,Gt),jt(u(t),40,u(t),80,cn),jt(u(i),60,u(e),60,Gt),jt(u(n),60,u(s),60,Gt),jt(u(i),48,u(i),72,Gt),jt(u(s),48,u(s),72,Gt)),zt(...h)}function Cf(i){const e=[jt(30,Ve-14,Ze-20,Ve-14),jt(30,Ve-14,30,10)];for(const[t,n]of i)e.push(hi(30+t*(Ze-60),Ve-14-n*(Ve-34),Gt,3.4));return zt(...e)}function Oc(i,e,t,n=""){return zt(Ni(8,8,Ze-16,Ve-16),fi(96,70,48,cn),fi(144,70,48,Fn),Wt(70,70,i,16),Wt(120,70,e,16),Wt(170,70,t,16),Wt(52,22,"A",13,cn),Wt(188,22,"B",13,Fn),n?Wt(218,124,n,14):"")}function ec(i,e,t){const[n,s,r,a,o]=[58,52,96,62,30];return zt(Ni(n,s,r,a),Di([[n,s],[n+o,s-o],[n+r+o,s-o],[n+r,s]]),Di([[n+r+o,s-o],[n+r+o,s+a-o],[n+r,s+a]]),Wt(n+r/2,s+a+13,i,14,Gt),Wt(n+r+o+16,s+a/2-o/2+6,e,14,Gt),Wt(n-16,s+a/2,t,14,Gt))}function Pf(i){const e=[];let t=i;for(let n=2;n*n<=t;n++)for(;t%n===0;)e.push(n),t/=n;return t>1&&e.push(t),e}function di(i,e){let t=Math.abs(i),n=Math.abs(e);for(;n;)[t,n]=[n,t%n];return t}function au(i){for(let e=2;e*e<=i;e++)if(i%(e*e)===0)return!1;return!0}const Lf=[2,3,5,7,11,13,17,19,23,29,31,37];function If(i,e,t,n){const s=Lf.filter(r=>r<=n);for(;;){let r=1;for(;r<e;)r*=i.pick(s);if(r<=t)return r}}const F=(i,e,t,n)=>({id:i,lo:e,hi:t,make:n});function C(i,e,t,n,s,r,a={}){const o=d=>typeof d=="number"&&d<0?`−${-d}`:String(d),c=o(s),l=[...new Set(r.map(o))].filter(d=>d!==c&&d!=="NaN"&&d!=="Infinity");if(l.length<3){const d=c.startsWith("−")||r.some(_=>typeof _=="number"?_<0:_.startsWith("−"));for(const _ of Df(c,d)){if(l.length>=3)break;_!==c&&!l.includes(_)&&l.push(_)}}if(l.length<3)throw new Error(`not enough distractors for ${e}: ${n} -> ${c}`);const u=d=>`${a.pre??""}${d}${a.unit??""}`,h=i.shuffle(l).slice(0,3),f=i.shuffle([c,...h]).map(u);return{kind:"choice",code:e,prompt:t,body:a.fig?{text:n,fig:a.fig}:{text:n},solution:a.sol??(/[぀-ヿ一-鿿]/.test(n)?`答え ${u(c)}`:`${n} = ${u(c)}`),choices:f,answer:f.indexOf(u(c))}}function Df(i,e){const t=o=>Number(o.replace("−","-")),n=o=>o<0?`−${-o}`:String(o),s=[],r=[1,-1,2,-2,3,-3,4,-4,5];let a;if(/^−?\d+$/.test(i))for(const o of r)(e||t(i)+o>=0)&&s.push(n(t(i)+o));else if(a=i.match(/^(−?\d+)\/(\d+)$/)){const[o,c]=[t(a[1]),Number(a[2])];for(const l of r)(e||o+l>0)&&o+l!==0&&di(o+l,c)===1&&s.push(`${n(o+l)}/${c}`)}else if(a=i.match(/^(−?)(\d*)([√π].*)$/)){const o=(a[1]?-1:1)*(a[2]?Number(a[2]):1);for(const c of r){const l=o+c;l===0||!e&&l<0||s.push(`${l<0?"−":""}${Math.abs(l)===1?"":Math.abs(l)}${a[3]}`)}}else if(a=i.match(/^\((−?\d+), (−?\d+)\)$/)){const[o,c]=[t(a[1]),t(a[2])];for(const[l,u]of[[1,0],[0,1],[-1,0],[0,-1],[1,1],[-1,-1]])s.push(`(${n(o+l)}, ${n(c+u)})`)}return s}const Nf="○",Uf="×";function no(i,e,t,n,s,r){return{kind:"choice",code:i,prompt:e,body:r?{text:t,fig:r}:{text:t},solution:s,choices:[Nf,Uf],answer:n?0:1}}function Pn(i,e,t,n,s,r,a,o){if(n===s)throw new Error(`identical choices for ${i}: ${n}`);return{kind:"choice",code:i,prompt:e,body:o?{text:t,fig:o}:{text:t},solution:a,choices:[n,s],answer:r?0:1}}function ut(i,e){const t=(i/10**e).toFixed(e);return t.includes(".")?t.replace(/\.?0+$/,""):t}function rt(i,e){e<0&&([i,e]=[-i,-e]);const t=di(i,e)||1,[n,s]=[i/t,e/t];return s===1?n<0?`−${-n}`:String(n):n<0?`−${-n}/${s}`:`${n}/${s}`}const S=i=>i<0?`−${-i}`:String(i),Re=i=>i<0?` − ${-i}`:` + ${i}`,he=i=>i===1?"":i===-1?"−":S(i);function Kt(i,e=1){let t=e,n=i;for(let s=2;s*s<=n;s++)for(;n%(s*s)===0;)t*=s,n/=s*s;return n===1?S(t):`${he(t)}√${n}`}function ct(i,e){let t=0;for(;t===0;)t=i.int(-e,e);return t}function Nt(i,e=1){const t=di(i,e)||1,[n,s]=[i/t,e/t],r=`${he(n)}π`;return s===1?r:`${r}/${s}`}const B=(i,e,t,n,s,r,a)=>C(i,e,t,n,s,r.filter(o=>typeof o!="number"||o>=0),a),Js=i=>i.reduce((e,t)=>e+t,0),oe=(i,e,t,n)=>i===0?e:i===1?t:n,Ln={circle:zt(fi(120,70,52,Gt)),triangle:zt(gn([[120,16],[58,122],[182,122]],Gt)),square:zt(Ni(70,20,100,100,Gt)),rectangle:zt(Ni(42,34,156,72,Gt)),star:zt(gn([0,1,2,3,4,5,6,7,8,9].map(i=>Bn(120,72,i%2?24:58,90+i*36)),Gt)),rightTriangle:zt(gn([[64,20],[64,120],[184,120]],Gt),aa(64,120,1,-1)),parallelogram:zt(gn([[78,30],[204,30],[162,112],[36,112]],Gt)),trapezoid:zt(gn([[88,30],[158,30],[204,112],[36,112]],Gt)),rhombus:zt(gn([[120,12],[196,70],[120,128],[44,70]],Gt)),pentagon:zt(gn([0,1,2,3,4].map(i=>Bn(120,74,58,90+i*72)),Gt)),hexagon:zt(gn([0,1,2,3,4,5].map(i=>Bn(120,70,58,i*60)),Gt)),isosceles:zt(gn([[120,12],[78,124],[162,124]],Gt)),equilateral:zt(gn([[120,16],[58,123],[182,123]],Gt))},$f=(i,e)=>zt(Ni(50,30,140,80,Gt),Wt(120,122,i,15),Wt(30,70,e,15)),Of=(i,e)=>zt(gn([[150,22],[40,116],[200,116]],Gt),jt(150,22,150,116,void 0,!0),aa(150,116,-1,-1),Wt(120,130,i,14),Wt(166,72,e,14)),Ff=(i,e)=>zt(gn([[96,18],[30,118],[210,118]],Gt),Wt(56,106,`${i}°`,13),Wt(178,107,`${e}°`,13),Wt(98,42,"?",16,cn)),Bf=i=>{const[e,t]=Bn(70,112,110,i);return zt(jt(70,112,200,112,Gt),jt(70,112,Math.max(12,Math.min(228,e)),Math.max(8,t),Gt),Ef(70,112,26,0,i,cn))},Kr=(i,e)=>zt(fi(120,70,56,Gt),hi(120,70),jt(e?64:120,70,176,70,cn),Wt(e?120:148,58,i,14)),Fc=[["あか","#ff6b6b"],["あお","#6bb6ff"],["きいろ","#ffe066"],["みどり","#7be08a"]],kf=[F("ADD",1,5,(i,e)=>{const t=oe(e,i.int(1,5),i.int(3,9),i.int(10,14)),n=oe(e,i.int(1,10-t),i.int(11-t>2?11-t:2,9),i.int(2,19-t>2?19-t:2));return B(i,"ADD","たしざん",`${t} + ${n}`,t+n,[t+n+1,t+n-1,t+n+2,t+n-2,t+n+10])}),F("SUB",1,6,(i,e)=>{const t=oe(e,i.int(1,6),i.int(3,9),i.int(2,12)),n=oe(e,i.int(1,9-t>1?9-t:1),i.int(10-t>2?10-t:2,9),i.int(2,7));return B(i,"SUB","ひきざん",`${t+n} − ${n}`,t,[t+1,t-1,t+2,t-2,t+10])}),F("COUNT",1,4,(i,e)=>{const t=oe(e,i.int(3,9),i.int(6,15),i.int(11,20));return B(i,"COUNT","いくつ ある?","",t,[t+1,t-1,t+2,t-2],{fig:bf(t,5),sol:`${t}こ`,unit:"こ"})}),F("MAKE10",1,5,(i,e)=>{const t=e===2?i.int(11,20):10,n=i.int(1,t-1);return B(i,"MAKE10",`あと いくつで ${t}?`,`${n} + ▢ = ${t}`,t-n,[t-n+1,t-n-1,t-n+2,n],{sol:`${n} + ${t-n} = ${t}`})}),F("BIGGER",1,4,(i,e)=>{const t=i.int(1,oe(e,10,20,100));let n=t;for(;n===t;)n=e===2&&i.chance(.6)?Math.max(1,t+i.pick([-10,-1,1,10])):i.int(1,oe(e,10,20,100));return Pn("BIGGER","おおきい ほうは?","どっち?",String(t),String(n),t>n,`${Math.max(t,n)} の ほうが おおきい`)}),F("CLOCK",2,8,(i,e)=>{const t=i.int(1,12),n=oe(e,0,30,i.int(1,11)*5),s=(o,c)=>c===0?`${o}じ`:c===30?`${o}じはん`:`${o}じ${c}ふん`,r=t%12+1,a=[s(r,n),s(t===1?12:t-1,n),s(t,n===0?30:0),s(r,n===0?30:0),s(t,(n+15)%60),s(Math.max(1,Math.round(n/5)||12),t*5===60?0:t*5)];return B(i,"CLOCK","なんじ?","",s(t,n),a,{fig:su(t,n),sol:s(t,n)})}),F("SHAPE",1,5,i=>{const e={circle:"まる",triangle:"さんかく",square:"しかく",star:"ほし"},t=i.pick(Object.keys(e));return B(i,"SHAPE","かたちの なまえは?","",e[t],Object.values(e),{fig:Ln[t],sol:e[t]})}),F("COLOR",2,7,i=>{const e=i.shuffle(Fc),t=i.chance(.5),n=i.int(1,4),s=zt(...e.map(([,a],o)=>fi(42+o*52,70,20,a,a))),r=e[t?n-1:4-n][0];return B(i,"COLOR","なにいろ?",`${t?"ひだり":"みぎ"}から ${n}ばんめ`,r,Fc.map(([a])=>a),{fig:s,sol:`${t?"ひだり":"みぎ"}から ${n}ばんめは ${r}`})}),F("SEQ",3,9,(i,e)=>{const t=oe(e,i.pick([1,2]),i.pick([2,5,10]),i.pick([-1,-2,-5,10])),n=t<0?i.int(20,40):i.int(1,12),s=[0,1,2,3].map(o=>n+o*t),r=i.int(1,3),a=s.map((o,c)=>c===r?"▢":String(o)).join(", ");return B(i,"SEQ","▢に はいる かずは?",a,s[r],[s[r]+1,s[r]-1,s[r]+t,s[r]-t],{sol:s.join(", ")})}),F("THREE",5,10,(i,e)=>{const t=i.int(4,9),n=i.int(1,oe(e,5,9,9)),s=i.int(1,Math.min(t+n-1,9)),r=e>0&&i.chance(.5)&&t-n>0&&t-n-1>=1,[a,o]=r?[`${t+n} − ${n} − ${Math.min(s,t-1)}`,t-Math.min(s,t-1)]:[`${t} + ${n} − ${s}`,t+n-s];return B(i,"THREE","3つの かずの けいさん",a,o,[o+1,o-1,o+2,o-2])}),F("TENS",4,9,(i,e)=>{const t=i.int(1,9),n=i.int(0,9);return e<2?B(i,"TENS","いくつ?",`10が ${t}こ と 1が ${n}こ`,t*10+n,[n*10+t,t+n,t*10+n+10,t*10+n+1,t*10],{sol:`${t*10+n}`}):B(i,"TENS","▢に はいる かずは?",`${t*10+n}は 10が ▢こ と 1が ${n}こ`,t,[n,t+1,t-1,t+n,t*10],{sol:`10が ${t}こ`})}),F("ADD2D",6,10,(i,e)=>{if(e===0){const[r,a]=[i.int(1,5)*10,i.int(1,4)*10];return B(i,"ADD2D","たしざん",`${r} + ${a}`,r+a,[r+a+10,r+a-10,r/10+a/10,r+a+1])}const t=i.int(2,8)*10+i.int(1,5),n=i.int(1,9-t%10);return e===2&&i.chance(.5)?B(i,"ADD2D","ひきざん",`${t+n} − ${n}`,t,[t+1,t-1,t+10,t-10]):B(i,"ADD2D","たしざん",`${t} + ${n}`,t+n,[t+n+1,t+n-1,t+n+10,t+n*10])}),F("STORY",5,10,(i,e)=>{const t=i.int(4,oe(e,9,12,15)),n=i.int(2,Math.min(t-1,8)),s=i.pick(["りんご","あめ","えんぴつ","みかん","おりがみ"]),r=i.int(0,2);return r===0?B(i,"STORY","ぜんぶで いくつ?",`${s}が ${t}こ。${n}こ もらうと?`,t+n,[t-n,t+n+1,t+n-1,t+n+2],{unit:"こ",sol:`${t} + ${n} = ${t+n}こ`}):r===1?B(i,"STORY","のこりは いくつ?",`${s}が ${t}こ。${n}こ つかうと?`,t-n,[t+n,t-n+1,t-n-1,t-n+2],{unit:"こ",sol:`${t} − ${n} = ${t-n}こ`}):B(i,"STORY","ちがいは いくつ?",`あかが ${t}こ、あおが ${n}こ`,t-n,[t+n,t-n+1,t-n-1,t],{unit:"こ",sol:`${t} − ${n} = ${t-n}こ`})})],Bc=[["triangle","三角形",3],["rectangle","四角形",4],["pentagon","五角形",5],["hexagon","六角形",6]],Gf=[F("ADD",1,6,(i,e)=>{const t=oe(e,i.int(11,49),i.int(15,69),i.int(101,499)),n=oe(e,i.int(10,40),i.int(15,Math.max(15,99-t)),i.int(15,99));return B(i,"ADD","たし算",`${t} + ${n}`,t+n,[t+n+10,t+n-10,t+n+1,t+n-1,t+n+100])}),F("SUB",1,7,(i,e)=>{const t=oe(e,i.int(11,40),i.int(12,58),i.int(101,380)),n=oe(e,i.int(10,30),i.int(13,39),i.int(15,99));return B(i,"SUB","ひき算",`${t+n} − ${n}`,t,[t+10,t-10,t+1,t-1,t+2])}),F("KUKU",1,7,(i,e)=>{const t=oe(e,i.pick([2,3,5]),i.int(2,9),i.int(6,9)),n=i.int(e===2?6:2,9);return B(i,"KUKU","かけ算",`${t} × ${n}`,t*n,[t*(n+1),t*(n-1),(t+1)*n,(t-1)*n,t*n+1,t+n])}),F("KUKUFILL",4,9,(i,e)=>{const t=i.int(e===0?2:4,9),n=i.int(2,9);return B(i,"KUKUFILL","▢に 入る 数は?",`${t} × ▢ = ${t*n}`,n,[n+1,n-1,n+2,t],{sol:`${t} × ${n} = ${t*n}`})}),F("CLOCK",1,6,(i,e)=>{const t=i.int(1,12),n=e===0?i.int(1,11)*5:i.int(1,59),s=(a,o)=>`${a}時${o}分`,r=Math.max(1,Math.round(n/5)||12);return B(i,"CLOCK","何時何分?","",s(t,n),[s(t%12+1,n),s(t,(n+5)%60||5),s(t,(n+30)%60||10),s(r,t*5%60||5),s(t===1?12:t-1,n)],{fig:su(t,n),sol:s(t,n)})}),F("TIME",5,10,(i,e)=>{if(e===0){const[n,s]=i.pick([["1時間 = ▢分",60],["1日 = ▢時間",24],["午前は ▢時間",12],["30分 + 30分 = ▢分",60]]);return B(i,"TIME","▢に 入る 数は?",n,s,[100,10,12,24,60,30],{sol:n.replace("▢",String(s))})}const t=i.int(1,5)*10;return e===1?B(i,"TIME","何分?",`1時間${t}分 = ▢分`,60+t,[100+t,60-t+60,t+10,60+t+10],{sol:`60 + ${t} = ${60+t}分`,unit:"分"}):B(i,"TIME","▢に 入る 数は?",`${60+t}分 = 1時間▢分`,t,[t+10,t-10||55,60-t||5,t+40],{sol:`${60+t} − 60 = ${t}`})}),F("LENGTH",2,8,(i,e)=>{const t=i.int(1,9),n=i.int(1,9);if(e===0)return B(i,"LENGTH","何mm?",`${t}cm ${n}mm`,t*10+n,[t+n,t*100+n,t*10+n+10,n*10+t],{unit:"mm"});if(e===1)return B(i,"LENGTH","何cm?",`${t}m`,t*100,[t*10,t*1e3,t,t*100+100],{unit:"cm"});const s=i.int(1,9)*10;return B(i,"LENGTH","何cm?",`${t}m ${s}cm`,t*100+s,[t*10+s,t+s,t*1e3+s,t*100+s/10],{unit:"cm"})}),F("VOLUME",4,9,(i,e)=>{const t=i.int(1,9),[n,s,r]=oe(e,[`${t}L`,t*10,"dL"],[`${t}dL`,t*100,"mL"],[`${t}L`,t*1e3,"mL"]);return B(i,"VOLUME",`何${r}?`,n,s,[t*10,t*100,t*1e3,t,t*60],{unit:r})}),F("SIDES",2,8,(i,e)=>{const[t,n,s]=i.pick(Bc);if(e===0)return B(i,"SIDES","この 形の 名前は?","",n,Bc.map(a=>a[1]),{fig:Ln[t],sol:n});const r=i.pick(["へん","ちょう点"]);return B(i,"SIDES",`${r}は いくつ?`,"",s,[s+1,s-1,s+2,s*2],{fig:Ln[t],sol:`${n}の ${r}は ${s}`})}),F("QUADNAME",4,9,i=>{const e=[["square","正方形"],["rectangle","長方形"],["rightTriangle","直角三角形"],["circle","円"]],[t,n]=i.pick(e);return B(i,"QUADNAME","この 形の 名前は?","",n,e.map(s=>s[1]),{fig:Ln[t],sol:n})}),F("FRACTION",5,10,(i,e)=>{const t=oe(e,2,i.pick([3,4]),i.pick([4,6,8])),n=e===2?i.int(1,t-1):1,s=i.chance(.5)?ru(n,t):Tf(n,t);return B(i,"FRACTION","色の ついた ところは?","",`${n}/${t}`,e<2?["1/2","1/3","1/4","1/5","1/6","2/3"]:[`${t-n}/${t}`,`${n}/${t+2}`,`1/${t}`,`${n+1}/${t+1}`,`${n}/${t+1}`],{fig:s,sol:`${t}こに 分けた ${n}こ分 = ${n}/${t}`})}),F("PLACE",3,9,(i,e)=>{const[t,n,s]=[i.int(1,9),i.int(0,9),i.int(0,9)],r=t*100+n*10+s;return e===0?B(i,"PLACE","いくつ?",`100が${t}こ、10が${n}こ、1が${s}こ`,r,[s*100+n*10+t,t+n+s,r+100,r+10,t*100+s*10+n],{sol:String(r)}):e===1?B(i,"PLACE","▢に 入る 数は?",`${t*100}は 10が ▢こ`,t*10,[t,t*100,t*10+10,t+10],{sol:`10が ${t*10}こ`}):B(i,"PLACE","▢に 入る 数は?","1000は 100が ▢こ",10,[100,1,1e3,5,20],{sol:"100が 10こで 1000"})}),F("BIGGER",2,7,(i,e)=>{const t=i.int(100,999);let n=t;return e>0&&(n=Number(i.shuffle(String(t).split("")).join(""))),(n===t||n<100)&&(n=i.int(100,999)===t?t+9:i.int(100,999)),n===t&&(n=t+9),Pn("BIGGER","大きい ほうは?","どっち?",String(t),String(n),t>n,`${Math.max(t,n)} の ほうが 大きい`)}),F("STORY",5,10,(i,e)=>{const t=i.int(2,9),n=i.int(2,oe(e,5,9,9)),[s,r]=i.pick([["ふくろ","あめ"],["はこ","ケーキ"],["さら","いちご"],["パック","たまご"]]);if(e<2)return B(i,"STORY","ぜんぶで 何こ?",`1${s}に ${t}こ。${n}${s}分では?`,t*n,[t+n,t*n+t,t*n-t,t*(n+1)+1],{unit:"こ",sol:`${t} × ${n} = ${t*n}こ`});const a=i.int(1,9);return B(i,"STORY","ぜんぶで 何こ?",`${t}こ入りの${r}が ${n}${s}と ばらが ${a}こ`,t*n+a,[t*n,t+n+a,t*n-a,t*(n+1)],{unit:"こ",sol:`${t} × ${n} + ${a} = ${t*n+a}こ`})}),F("BOX",6,10,i=>{const[e,t]=i.pick([["面",6],["へん",12],["ちょう点",8]]);return B(i,"BOX",`はこの 形の ${e}は いくつ?`,"",t,[6,8,12,4,10],{fig:ec("","",""),sol:`${e}は ${t}`})}),F("SEQ",3,9,(i,e)=>{const t=oe(e,i.pick([5,10]),i.pick([50,100,25]),i.pick([-10,-100,200])),n=t<0?i.int(5,9)*100:i.int(1,9)*Math.abs(t),s=[0,1,2,3].map(a=>n+a*t),r=i.int(1,3);return B(i,"SEQ","▢に 入る 数は?",s.map((a,o)=>o===r?"▢":String(a)).join(", "),s[r],[s[r]+t,s[r]-t,s[r]+10,s[r]+1],{sol:s.join(", ")})})],zf=[F("DIV",1,6,(i,e)=>{const t=i.int(2,9),n=i.int(2,9);if(e<2)return B(i,"DIV","わり算",`${t*n} ÷ ${t}`,n,[n+1,n-1,t,n+2]);const s=i.int(1,t-1),r=(a,o)=>`${a} あまり ${o}`;return B(i,"DIV","あまりの あるわり算",`${t*n+s} ÷ ${t}`,r(n,s),[r(n+1,s),r(n,s+1),r(n-1,s),r(n,t-s===s?s+2:t-s),r(s,n)])}),F("ADDSUB",1,5,(i,e)=>{const t=i.int(120,oe(e,499,899,4999)),n=i.int(110,oe(e,399,899,2999));return i.chance(.5)?B(i,"ADDSUB","たし算",`${t} + ${n}`,t+n,[t+n+10,t+n-10,t+n+100,t+n-100,t+n+1]):B(i,"ADDSUB","ひき算",`${t+n} − ${n}`,t,[t+10,t-10,t+100,t-100,t+1])}),F("MUL",2,8,(i,e)=>{const t=oe(e,i.int(11,49),i.int(101,399),i.int(11,39)),n=oe(e,i.int(2,9),i.int(2,9),i.int(11,29)),s=t*n;return B(i,"MUL","かけ算",`${t} × ${n}`,s,[s+10,s-10,s+n,s-n,s+t,s+100])}),F("DECIMAL",4,9,(i,e)=>{if(e===0){const o=i.int(2,29);return B(i,"DECIMAL","いくつ?",`0.1が ${o}こ`,ut(o,1),[ut(o,2),String(o),ut(o+10,1),ut(o*10,1),ut(o+1,1)])}const t=i.int(2,49),n=i.int(2,39),s=e===1||i.chance(.5),r=s?t+n:t,a=s?`${ut(t,1)} + ${ut(n,1)}`:`${ut(t+n,1)} − ${ut(n,1)}`;return B(i,"DECIMAL",s?"小数のたし算":"小数のひき算",a,ut(r,1),[r+1,r-1,r+10,r-10,r*10].filter(o=>o>0).map(o=>ut(o,1)))}),F("FRACTION",4,9,(i,e)=>{const t=i.int(4,9);if(e===0){const r=i.int(2,t-1);return B(i,"FRACTION","色のついたところは?","",`${r}/${t}`,[`${t-r}/${t}`,`${r}/${t+1}`,`${t}/${r}`,`${r+1}/${t}`,`${r-1}/${t}`],{fig:ru(r,t),sol:`${r}/${t}`})}const n=i.int(1,t-2),s=i.int(1,t-1-n);return e===1?B(i,"FRACTION","分数のたし算",`${n}/${t} + ${s}/${t}`,`${n+s}/${t}`,[`${n+s}/${t*2}`,`${n+s+1}/${t}`,`${n*s}/${t}`,`${n+s-1}/${t}`,`${t}/${n+s}`]):B(i,"FRACTION","分数のひき算",`1 − ${n}/${t}`,`${t-n}/${t}`,[`${n}/${t}`,`${t-n+1}/${t}`,`${t-n-1||t}/${t}`,`1/${t}`,`${t-n}/${t-1}`])}),F("TIME",3,8,(i,e)=>{if(e===0){const o=i.int(2,5);return B(i,"TIME","何秒?",`${o}分`,o*60,[o*100,o*10,o*60+60,o*30],{unit:"秒"})}const t=i.int(7,10),n=i.int(4,5)*10,s=i.int(2,4)*10,r=o=>`${Math.floor(o/60)}時${o%60===0?"":`${o%60}分`}`,a=t*60+n;return e===1?B(i,"TIME","何時何分?",`${r(a)}の ${s}分後`,r(a+s),[r(a+s+60),r(a+s-10),r(a+s+10),r(a-s),`${t}時${n+s}分`],{sol:r(a+s)}):B(i,"TIME","何分間?",`${r(a)}から ${r(a+s)}まで`,s,[s+10,s-10,s+60,60-s||5],{unit:"分",sol:`${s}分間`})}),F("KM",3,8,(i,e)=>{const t=i.int(1,9),n=i.int(1,9)*100;return e===0?B(i,"KM","何m?",`${t}km`,t*1e3,[t*100,t*10,t*1e4,t*1e3+100],{unit:"m"}):e===1?B(i,"KM","何m?",`${t}km ${n}m`,t*1e3+n,[t*100+n,t+n,t*1e3+n/10,t*1e4+n],{unit:"m"}):B(i,"KM","▢に入る数は?",`${t*1e3+n}m = ${t}km ▢m`,n,[n/10,n+100,t*100,n*10],{sol:`${t}km ${n}m`})}),F("WEIGHT",4,9,(i,e)=>{const t=i.int(1,9),n=i.int(1,9)*100;return e===0?B(i,"WEIGHT","何g?",`${t}kg`,t*1e3,[t*100,t*10,t*1e4,t*1e3+100],{unit:"g"}):e===1?B(i,"WEIGHT","何g?",`${t}kg ${n}g`,t*1e3+n,[t*100+n,t+n,t*1e4+n,t*1e3+n/10],{unit:"g"}):B(i,"WEIGHT","何kg?",`${t}t`,t*1e3,[t*100,t*10,t*1e4,t],{unit:"kg"})}),F("CIRCLE",3,8,(i,e)=>{const t=i.int(2,9);if(e===0)return B(i,"CIRCLE","直径は?","",t*2,[t,t*3,t+2,t*4],{fig:Kr(`半径${t}cm`,!1),unit:"cm",sol:`${t} × 2 = ${t*2}cm`});if(e===1)return B(i,"CIRCLE","半径は?","",t,[t*2,t*4,t+2,t-1],{fig:Kr(`直径${t*2}cm`,!0),unit:"cm",sol:`${t*2} ÷ 2 = ${t}cm`});const n=i.int(2,4);return B(i,"CIRCLE","はこの横の長さは?",`半径${t}cmのボールが${n}こ ぴったり`,t*2*n,[t*n,t*2+n,t*2*(n+1),t*2*n-t],{unit:"cm",sol:`直径${t*2} × ${n} = ${t*2*n}cm`})}),F("TRIANGLE",4,9,i=>{const e=[["isosceles","二等辺三角形",[5,5,3]],["equilateral","正三角形",[4,4,4]],["rightTriangle","直角三角形",[3,4,5]]],[t,n,s]=i.pick(e),r=i.int(1,2),a=t==="rightTriangle"?"直角がある三角形":`辺の長さ ${s[0]*r}cm、${s[1]*r}cm、${s[2]*r}cm`;return B(i,"TRIANGLE","この三角形の名前は?",a,n,["二等辺三角形","正三角形","直角三角形","四角形"],{fig:Ln[t],sol:n})}),F("BARCHART",2,7,(i,e)=>{const t=["りんご","みかん","ぶどう","もも"],n=i.shuffle([2,3,4,5,6,7,8,9]).slice(0,4),s=Af(n,t,10,2),r=i.int(0,3);if(e===0)return B(i,"BARCHART",`${t[r]}は何人?`,"",n[r],n,{fig:s,unit:"人",sol:`${t[r]}は ${n[r]}人`});if(e===1){const c=t[n.indexOf(Math.max(...n))];return B(i,"BARCHART","いちばん多いのは?","",c,t,{fig:s,sol:c})}const a=(r+1+i.int(0,2))%4,o=Math.abs(n[r]-n[a]);return B(i,"BARCHART",`${t[r]}と${t[a]}のちがいは?`,"",o,[o+1,o+2,n[r]+n[a],o-1],{fig:s,unit:"人",sol:`${Math.max(n[r],n[a])} − ${Math.min(n[r],n[a])} = ${o}人`})}),F("BOXEQ",5,10,(i,e)=>{const t=i.int(2,9),n=i.int(oe(e,12,3,3),oe(e,48,9,9));return e===0?B(i,"BOXEQ","▢に入る数は?",`▢ + ${t} = ${t+n}`,n,[t+n+t,n+1,n-1,t],{sol:`${t+n} − ${t} = ${n}`}):e===1?B(i,"BOXEQ","▢に入る数は?",`▢ × ${t} = ${t*n}`,n,[n+1,n-1,t,t*n-t],{sol:`${t*n} ÷ ${t} = ${n}`}):B(i,"BOXEQ","▢に入る数は?",`${t*n} ÷ ▢ = ${n}`,t,[t+1,t-1,n===t?n+2:n,t*n],{sol:`${t*n} ÷ ${n} = ${t}`})}),F("MAN",5,10,(i,e)=>{const[t,n]=[i.int(1,9),i.int(1,9)];if(e===0)return B(i,"MAN","いくつ?",`10000が${t}こ、1000が${n}こ`,t*1e4+n*1e3,[t*1e3+n*100,t*1e4+n*100,n*1e4+t*1e3,(t+n)*1e3],{sol:String(t*1e4+n*1e3)});if(e===1)return B(i,"MAN","▢に入る数は?",`${t*10+n}000は 1000が ▢こ`,t*10+n,[t+n,(t*10+n)*10,t*100+n,t*10+n+10],{sol:`1000が ${t*10+n}こ`});const s=i.int(12,98)*10;return i.chance(.5)?B(i,"MAN","10倍すると?",String(s),s*10,[s*100,s+10,s/10,s*10+10]):B(i,"MAN","10でわると?",String(s),s/10,[s*10,s-10,s/10+10,s/10-1])}),F("STORY",6,10,(i,e)=>{const t=i.int(3,8),n=i.int(3,8);if(e===0)return B(i,"STORY","1人分は何こ?",`${t*n}こを ${n}人で同じ数ずつ`,t,[n===t?n+2:n,t+1,t-1,t*2],{unit:"こ",sol:`${t*n} ÷ ${n} = ${t}こ`});const s=i.int(1,t-1);return e===1?B(i,"STORY","何ふくろできて何こあまる?",`${t*n+s}こを ${t}こずつ`,`${n}ふくろ あまり${s}こ`,[`${n+1}ふくろ あまり${s}こ`,`${n}ふくろ あまり${s+1}こ`,`${n-1}ふくろ あまり${s}こ`,`${s}ふくろ あまり${n}こ`],{sol:`${t*n+s} ÷ ${t} = ${n} あまり ${s}`}):B(i,"STORY","ぜんぶ入れるには箱は何こ?",`${t*n+s}こを 1箱${t}こずつ`,n+1,[n,n+2,n-1,s],{unit:"こ",sol:`${n}箱とあまり${s}こ → ${n+1}箱`})})],kc=[["square","正方形","4つの辺が等しく、4つの角が直角"],["rectangle","長方形","4つの角がすべて直角"],["parallelogram","平行四辺形","向かい合う2組の辺が平行"],["trapezoid","台形","向かい合う1組の辺が平行"],["rhombus","ひし形","4つの辺の長さがすべて等しい"]],Vf=[F("OKU",1,5,(i,e)=>{if(e===0){const[s,r]=i.pick([["1億は 1000万の何倍?","10倍"],["1兆は 1000億の何倍?","10倍"],["1億は 1万の何倍?","1万倍"],["1兆は 1億の何倍?","1万倍"]]);return B(i,"OKU","大きな数",s,r,["10倍","100倍","1000倍","1万倍","1億倍"],{sol:r})}const[t,n]=[i.int(1,9),i.int(1,9)];return e===1?B(i,"OKU","読み方は?",`${t}${n}00000000`,`${t}${n}億`,[`${t}億${n}千万`,`${t}${n}0億`,`${t}${n}千万`,`${t}兆${n}億`],{sol:`${t}${n}億`}):B(i,"OKU","たすと?",`${t}億${n}000万 + ${10-n}000万`,`${t+1}億`,[`${t}億`,`${t}億1000万`,`${t+1}億1000万`,`${t+2}億`],{sol:`${t+1}億`})}),F("DIV",1,7,(i,e)=>{const t=oe(e,i.int(3,9),i.int(3,9),i.int(11,24)),n=oe(e,i.int(11,29),i.int(31,129),i.int(3,9));return B(i,"DIV","わり算",`${t*n} ÷ ${t}`,n,[n+1,n-1,n+10,n-10,n+2])}),F("ROUND",2,7,(i,e)=>{const t=i.int(1200,9800),n=oe(e,100,1e3,100);return e<2?B(i,"ROUND",`四捨五入で${n===100?"百":"千"}の位までのがい数に`,String(t),Math.round(t/n)*n,[Math.floor(t/n)*n,Math.ceil(t/n)*n,Math.round(t/10)*10,Math.round(t/n)*n+n,Math.round(t/(n*10))*n*10]):B(i,"ROUND","上から2けたのがい数に",String(t),Math.round(t/100)*100,[Math.floor(t/100)*100,Math.ceil(t/100)*100,Math.round(t/1e3)*1e3,Math.round(t/10)*10,Math.round(t/100)*100+100])}),F("ORDER",2,7,(i,e)=>{const[t,n,s,r]=[i.int(2,9),i.int(2,9),i.int(2,9),i.int(2,9)],a=t*n+i.int(5,20),[o,c,l]=oe(e,[`${t} + ${n} × ${s}`,t+n*s,(t+n)*s],[`${a} − ${t} × ${n}`,a-t*n,(a-t)*n],[`(${t} + ${n}) × ${s} − ${r}`,(t+n)*s-r,t+n*s-r]);return B(i,"ORDER","計算の順序に注意",o,c,[l,c+1,c-1,c+10,c+2].filter(u=>u>=0))}),F("DECIMAL",3,8,(i,e)=>{if(e===0){const[s,r]=[i.int(11,49),i.int(11,49)];return B(i,"DECIMAL","小数のたし算",`${ut(s,1)} + ${ut(r,1)}`,ut(s+r,1),[s+r-10,s+r+10,s+r-1,s+r+1].map(a=>ut(a,1)))}const t=i.int(2,9),n=i.int(2,9);return e===1?B(i,"DECIMAL","小数 × 整数",`${ut(t,1)} × ${n}`,ut(t*n,1),[String(t*n),ut(t*n,2),ut(t*n+1,1),ut(t+n,1),ut(t*n+10,1)]):B(i,"DECIMAL","小数 ÷ 整数",`${ut(t*n,1)} ÷ ${n}`,ut(t,1),[String(t),ut(t,2),ut(t+1,1),ut(t+10,1),ut(n,1)])}),F("MIXED",4,9,(i,e)=>{const t=i.int(3,8),n=i.int(1,3),s=i.int(1,t-1),r=(l,u)=>`${l}と${u}/${t}`;if(e===0)return B(i,"MIXED","帯分数になおすと?",`${n*t+s}/${t}`,r(n,s),[r(n+1,s),r(n,s+1<t?s+1:s-1||2),r(s,n),r(n-1||4,s)],{sol:`${n*t+s}/${t} = ${r(n,s)}`});if(e===1)return B(i,"MIXED","仮分数になおすと?",r(n,s),`${n*t+s}/${t}`,[`${n+s}/${t}`,`${n*s+t}/${t}`,`${n*t+s+1}/${t}`,`${n*t}/${t}`,`${n*10+s}/${t}`],{sol:`${r(n,s)} = ${n*t+s}/${t}`});const a=i.int(1,t-1),o=n*t+s+a,c=l=>l%t===0?String(l/t):l>t?r(Math.floor(l/t),l%t):`${l}/${t}`;return B(i,"MIXED","分数のたし算",`${r(n,s)} + ${a}/${t}`,c(o),[c(o+1),c(o-1),c(o+t),`${s+a}/${t*2}`,c(o+2)])}),F("ANGLE",2,8,(i,e)=>{if(e===0){const s=i.pick([30,45,60,90,120,135,150]);return B(i,"ANGLE","この角の大きさは?","",s,[30,45,60,90,120,135,150],{fig:Bf(s),unit:"°",sol:`${s}°`})}if(e===1){const[s,r]=i.pick([["直角は何度?",90],["半回転の角は?",180],["1回転の角は?",360],["直角の半分は?",45],["三角じょうぎの一番小さい角は?",30]]);return B(i,"ANGLE","角の大きさ",s,r,[30,45,60,90,180,360,100],{unit:"°",sol:`${r}°`})}const t=i.int(4,16)*5,n=i.pick([180,360]);return B(i,"ANGLE","▢の角は?",`${n}° − ${t}°`,n-t,[n-t+10,n-t-10,t,n+t,90-t>0?90-t:t+5],{unit:"°"})}),F("QUAD",3,9,(i,e)=>{const[t,n,s]=i.pick(kc),r=kc.map(c=>c[1]);if(e===0)return B(i,"QUAD","この四角形の名前は?","",n,r,{fig:Ln[t],sol:n});if(e===1)return B(i,"QUAD","どの四角形?",s,n,r.filter(c=>!(n==="長方形"&&c==="正方形")&&!(n==="ひし形"&&c==="正方形")&&!(n==="平行四辺形"&&c!=="台形")&&!(n==="台形"&&c!=="平行四辺形")).concat(n==="平行四辺形"||n==="台形"?["三角形","円"]:[]),{sol:n});const[a,o]=i.pick([["対角線の長さが等しく、垂直に交わる","正方形"],["対角線が垂直に交わる(長さはちがう)","ひし形"],["対角線の長さが等しい(垂直ではない)","長方形"]]);return B(i,"QUAD","どの四角形?",a,o,["正方形","ひし形","長方形","台形"],{sol:o})}),F("LINES",3,8,i=>{const e=i.int(0,2),t=[zt(jt(30,70,210,70,Gt),jt(120,14,120,126,Fn),aa(120,70,1,-1)),zt(jt(30,46,210,30,Gt),jt(30,106,210,90,Fn)),zt(jt(30,96,210,44,Gt),jt(60,20,170,124,Fn))][e],n=["垂直","平行","どちらでもない"][e];return B(i,"LINES","2本の直線の関係は?","",n,["垂直","平行","どちらでもない","同じ直線"],{fig:t,sol:n})}),F("AREA",3,9,(i,e)=>{const t=i.int(3,12),n=i.int(2,9);if(e===0)return B(i,"AREA","長方形の面積は?","",t*n,[(t+n)*2,t+n,t*n+t,t*n-n,t*t],{fig:$f(`${t}cm`,`${n}cm`),unit:"cm²",sol:`${t} × ${n} = ${t*n}cm²`});if(e===1)return B(i,"AREA","▢に入る数は?",`面積${t*n}cm²、たて${n}cmの長方形の横は▢cm`,t,[n===t?t+2:n,t+1,t-1,t*n-n],{sol:`${t*n} ÷ ${n} = ${t}cm`});const[s,r]=i.pick([["1m² = ▢cm²",1e4],["1a = ▢m²",100],["1ha = ▢m²",1e4],["1km² = ▢m²",1e6]]);return B(i,"AREA","▢に入る数は?",s,r,[100,1e3,1e4,1e5,1e6],{sol:s.replace("▢",String(r))})}),F("LINECHART",3,8,(i,e)=>{const t=["8時","10時","12時","14時","16時"],n=i.int(1,3),s=t.map((u,h)=>12+i.int(0,2)*2+(4-Math.abs(h-n))*2-(h===n?0:i.int(0,1)*2));s[n]=Math.max(...s)+2;const r=Rf(s,t,30,10);if(e===0)return B(i,"LINECHART","気温がいちばん高いのは?","",t[n],t,{fig:r,sol:t[n]});const a=i.int(0,3),o=s[a+1]-s[a];if(e===1)return Pn("LINECHART",`${t[a]}から${t[a+1]}は?`,"","上がった","下がった",o>0,o>0?"上がった":"下がった",r);let c=0;for(let u=1;u<4;u++)Math.abs(s[u+1]-s[u])>Math.abs(s[c+1]-s[c])&&(c=u);const l=u=>`${t[u]}〜${t[u+1]}`;return B(i,"LINECHART","変わり方がいちばん大きいのは?","",l(c),[0,1,2,3].map(l),{fig:r,sol:l(c)})}),F("CHANGE",5,10,(i,e)=>{const t=i.int(2,9),n=i.int(3,9);if(e===0)return B(i,"CHANGE","○はいくつ?",`○ = □ × ${t}、□ = ${n}`,t*n,[t+n,t*n+t,t*n-t,t*(n+1)+1],{sol:`${n} × ${t} = ${t*n}`});const s=i.int(12,20),r=i.int(2,s-3);return e===1?B(i,"CHANGE","○はいくつ?",`□ + ○ = ${s}、□ = ${r}`,s-r,[s+r,s-r+1,s-r-1,r],{sol:`${s} − ${r} = ${s-r}`}):B(i,"CHANGE","横は何cm?",`まわり${s*2}cmの長方形、たて${r}cm`,s-r,[s*2-r,s-r+1,s*2-r*2,r],{unit:"cm",sol:`${s*2} ÷ 2 − ${r} = ${s-r}cm`})}),F("CUBE",5,10,(i,e)=>{if(e===0){const[s,r]=i.pick([["面",6],["辺",12],["頂点",8]]);return B(i,"CUBE",`直方体の${s}の数は?`,"",r,[6,8,12,4,10],{fig:ec("","",""),sol:`${s}は ${r}`})}const[t,n]=i.pick([["直方体で、長さの等しい辺は何本ずつ?",4],["立方体の面の形は正方形。全部で何まい?",6],["直方体で、1つの面に平行な面はいくつ?",1],["直方体で、1つの面に垂直な面はいくつ?",4],["直方体で、1つの辺に平行な辺はいくつ?",3]]);return B(i,"CUBE","直方体と立方体",t,n,[1,2,3,4,6,8],{sol:String(n)})}),F("TRICK",6,10,(i,e)=>{const t=i.int(2,9);if(e===0)return B(i,"TRICK","▢に入る数は?",`25 × ${4*t} = 25 × 4 × ▢`,t,[4,t+1,4*t,25],{sol:`25 × 4 × ${t} = ${100*t}`});if(e===1)return B(i,"TRICK","くふうして計算",`99 × ${t}`,99*t,[100*t,99*t+t,99*t-10,100*t-1],{sol:`100 × ${t} − ${t} = ${99*t}`});const n=i.int(11,19);return B(i,"TRICK","くふうして計算",`${n} × ${t} + ${20-n} × ${t}`,20*t,[20*t+t,10*t,n*t+20,20*t-t],{sol:`(${n} + ${20-n}) × ${t} = ${20*t}`})})];function Ts(i,e,t){for(;;){const n=i.int(e,t),s=i.int(e,t);if(n!==s&&di(n,s)===1)return[n,s]}}function ou(i,e){const t=[2,3,5,7];for(;;){let n=1;for(let a=0;a<e+1;a++)n*=i.pick(t);const s=i.int(1,12),r=i.int(s+1,15);if(!(di(s,r)!==1||r*n>300))return{kind:"reduce",code:"REDUCE",prompt:"約分せよ",body:{text:`${s*n}/${r*n}`},solution:`${s*n}/${r*n} = ${s}/${r}`,num:s*n,den:r*n,pad:[2,3,5,7,11,13]}}}const Hf=[F("DECMUL",1,6,(i,e)=>{const t=i.int(2,9),n=i.int(2,9);if(e===0)return B(i,"DECMUL","小数のかけ算",`${ut(t,1)} × ${ut(n,1)}`,ut(t*n,2),[ut(t*n,1),ut(t*n,3),String(t*n),ut(t+n,1),ut(t*n+1,2)]);if(e===1)return B(i,"DECMUL","小数のわり算",`${ut(t*n,1)} ÷ ${ut(n,1)}`,t,[ut(t,1),t*10,ut(t,2),t+1,t-1]);const s=i.int(11,29);return B(i,"DECMUL","小数のかけ算",`${ut(s,1)} × ${ut(n*5,1)}`,ut(s*n*5,2),[ut(s*n*5,1),ut(s*n*5,3),ut(s*n*5+10,2),ut(s*n*5+100,2),ut(s+n*5,1)])}),F("EVENODD",1,4,(i,e)=>{if(e===0){const s=i.int(11,999);return Pn("EVENODD","偶数? 奇数?",String(s),"偶数","奇数",s%2===0,`${s}は${s%2===0?"偶数":"奇数"}`)}const[t,n]=i.pick([["偶数 + 偶数",!0],["奇数 + 奇数",!0],["偶数 + 奇数",!1],["奇数 × 奇数",!1],["偶数 × 奇数",!0],["奇数 − 偶数",!1]]);return Pn("EVENODD","答えは偶数? 奇数?",t,"偶数","奇数",n,`${t} は ${n?"偶数":"奇数"}`)}),F("DIVISOR",2,7,(i,e)=>{if(e===0){const o=i.pick([6,8,9,10,12,15,16,18,20,24]);let c=0;for(let l=1;l<=o;l++)o%l===0&&c++;return B(i,"DIVISOR","約数は何個?",String(o),c,[c+1,c-1,c+2,2],{unit:"個",sol:`${o}の約数は${c}個`})}const t=i.pick(oe(e,[2,3],[2,3,4,6],[4,6,8,12])),[n,s]=Ts(i,2,5),[r,a]=[t*n,t*s];return e===1||i.chance(.5)?B(i,"DIVISOR","最大公約数は?",`${r} と ${a}`,t,[1,2,3,t*2,t/2,t+1,t-1].filter(o=>Number.isInteger(o)&&o>=1),{sol:`${r} と ${a} の最大公約数 = ${t}`}):B(i,"DIVISOR","最小公倍数は?",`${r} と ${a}`,t*n*s,[r*a,t*n*s*2,t*n*s+r,t*n*s-a,r+a].filter(o=>o>1),{sol:`${r} と ${a} の最小公倍数 = ${t*n*s}`})}),F("REDUCE",2,8,ou),F("FRACADD",4,10,(i,e)=>{const[t,n]=Ts(i,2,oe(e,4,5,7));if(e===0)return B(i,"FRACADD","通分したときの分母は?",`1/${t} と 1/${n}`,t*n,[t+n,t*n*2,Math.max(t,n),t*n-1],{sol:`${t} と ${n} の最小公倍数 = ${t*n}`});const s=e===1?1:i.int(1,t-1),r=e===1?1:i.int(1,n-1),a=i.chance(.4)&&s*n>r*t,o=a?s*n-r*t:s*n+r*t,c=`${rt(s,t)} ${a?"−":"+"} ${rt(r,n)}`;return B(i,"FRACADD",a?"分数のひき算":"分数のたし算",c,rt(o,t*n),[a?`${Math.abs(s-r)||1}/${Math.abs(t-n)||2}`:`${s+r}/${t+n}`,rt(o+1,t*n),rt(Math.max(o-1,1),t*n),rt(s+r,t*n),rt(o,t*n+1)])}),F("VOLUME",2,7,(i,e)=>{const[t,n,s]=[i.int(2,9),i.int(2,6),i.int(2,5)];if(e===0)return B(i,"VOLUME","直方体の体積は?","",t*n*s,[t*n+s,(t+n+s)*2,t*n*s+t*n,t*n,t+n+s],{fig:ec(`${t}cm`,`${n}cm`,`${s}cm`),unit:"cm³",sol:`${t} × ${n} × ${s} = ${t*n*s}cm³`});if(e===1)return B(i,"VOLUME","立方体の体積は?",`1辺 ${s+1}cm`,(s+1)**3,[(s+1)**2,(s+1)*3,(s+1)**2*6,(s+1)*12],{unit:"cm³",sol:`${s+1} × ${s+1} × ${s+1} = ${(s+1)**3}cm³`});const[r,a]=i.pick([["1L = ▢cm³",1e3],["1m³ = ▢L",1e3],["1mL = ▢cm³",1],["1m³ = ▢cm³",1e6]]);return B(i,"VOLUME","▢に入る数は?",r,a,[1,10,100,1e3,1e4,1e6],{sol:r.replace("▢",String(a))})}),F("ANGLESUM",2,8,(i,e)=>{if(e===0){const s=i.int(6,14)*5,r=i.int(6,14)*5;return B(i,"ANGLESUM","?の角は何度?","",180-s-r,[180-s,180-r,s+r,360-s-r,190-s-r],{fig:Ff(s,r),unit:"°",sol:`180 − ${s} − ${r} = ${180-s-r}°`})}if(e===1){const[s,r,a]=[i.int(14,22)*5,i.int(14,22)*5,i.int(14,22)*5];return B(i,"ANGLESUM","四角形の残りの角は?",`${s}°、${r}°、${a}° と ▢`,360-s-r-a,[180-s,360-s-r,370-s-r-a,350-s-r-a,s],{unit:"°",sol:`360 − ${s} − ${r} − ${a} = ${360-s-r-a}°`})}const t=i.int(5,8),n=["五","六","七","八"][t-5];return B(i,"ANGLESUM","角の大きさの和は?",`${n}角形`,180*(t-2),[180*t,180*(t-1),360,180*(t-3),90*t],{unit:"°",sol:`180 × (${t} − 2) = ${180*(t-2)}°`})}),F("AREA",3,9,(i,e)=>{const t=i.int(2,8)*2,n=i.int(3,9);if(e===0)return B(i,"AREA","三角形の面積は?","",t*n/2,[t*n,t+n,t*n/2+t,t*n*2],{fig:Of(`${t}cm`,`${n}cm`),unit:"cm²",sol:`${t} × ${n} ÷ 2 = ${t*n/2}cm²`});if(e===1)return B(i,"AREA","平行四辺形の面積は?",`底辺${t}cm、高さ${n}cm`,t*n,[t*n/2,(t+n)*2,t*n+t,t+n],{fig:Ln.parallelogram,unit:"cm²",sol:`${t} × ${n} = ${t*n}cm²`});const s=i.int(2,6);return i.chance(.5)?B(i,"AREA","台形の面積は?",`上底${s}cm、下底${s+t}cm、高さ${n}cm`,(s*2+t)*n/2,[(s*2+t)*n,(s+t)*n,(s*2+t)*n/2+n,(s+t)*n*2],{fig:Ln.trapezoid,unit:"cm²",sol:`(${s} + ${s+t}) × ${n} ÷ 2 = ${(s*2+t)*n/2}cm²`}):B(i,"AREA","ひし形の面積は?",`対角線 ${t}cm と ${n}cm`,t*n/2,[t*n,t+n,t*n/2+t,t*n*2],{fig:Ln.rhombus,unit:"cm²",sol:`${t} × ${n} ÷ 2 = ${t*n/2}cm²`})}),F("AVERAGE",3,8,(i,e)=>{const t=oe(e,3,4,5),n=i.int(oe(e,5,10,40),oe(e,12,30,90)),s=[];for(let r=0;r<t-1;r++)s.push(n+i.int(-4,4));return s.push(n*t-Js(s)),B(i,"AVERAGE","平均は?",s.join("、"),n,[n+1,n-1,n+2,Math.max(...s),Js(s)],{sol:`${Js(s)} ÷ ${t} = ${n}`})}),F("PERUNIT",5,10,(i,e)=>{const t=i.int(3,15),n=i.int(2,9);if(e===0)return B(i,"PERUNIT","1m²あたり何人?",`${n}m²に ${t*n}人`,t,[t*n,t+n,t+1,n===t?n+2:n],{unit:"人",sol:`${t*n} ÷ ${n} = ${t}人`});if(e===1)return B(i,"PERUNIT","1Lあたり何km走る?",`${n}Lで ${t*n}km`,t,[t*n,t+n,t-1,n===t?n+2:n],{unit:"km",sol:`${t*n} ÷ ${n} = ${t}km`});const[s,r]=[i.int(4,9)*10,i.int(4,9)*10],[a,o]=[i.int(2,5),i.int(2,5)];return s===r?B(i,"PERUNIT","1個あたり何円?",`${a}個で ${s*a}円`,s,[s*a,s+10,s-10,a*10],{unit:"円",sol:`${s*a} ÷ ${a} = ${s}円`}):Pn("PERUNIT","1個あたりが安いのは?","どっち?",`${a}個 ${s*a}円`,`${o}個 ${r*o}円`,s<r,`1個 ${s}円 と ${r}円`)}),F("SPEED",4,9,(i,e)=>{const t=i.pick([30,40,45,50,60,80]),n=i.int(2,5);if(e===0)return B(i,"SPEED","道のりは?",`時速${t}km で ${n}時間`,t*n,[t*n+t,t*n-t,t+n,t*n*2],{unit:"km",sol:`${t} × ${n} = ${t*n}km`});if(e===1)return B(i,"SPEED","時速は?",`${t*n}km を ${n}時間`,t,[t+10,t-10,t+5,t*2,t*n-n],{pre:"時速",unit:"km",sol:`${t*n} ÷ ${n} = 時速${t}km`});const s=i.pick([20,30,40,45,90].filter(r=>t*r%60===0));return B(i,"SPEED","何分かかる?",`時速${t}km で ${t*s/60}km`,s,[s+10,s-10,s+15,s*2,s+30],{unit:"分",sol:`${t*s/60} ÷ ${t} × 60 = ${s}分`})}),F("PERCENT",4,10,(i,e)=>{if(e===0){const r=i.pick([5,10,20,25,30,50,75]);return i.chance(.5)?B(i,"PERCENT","百分率になおすと?",ut(r,2),r,[r*10,r/10,r+10,100-r],{unit:"%",sol:`${ut(r,2)} = ${r}%`}):B(i,"PERCENT","何%?",`${r/10>=1&&r%10===0?`${r/10}割`:`${ut(r,2)}`}`,r,[r*10,r/10,r+10,100-r],{unit:"%",sol:`${r}%`})}if(e===1){const r=i.pick([10,20,25,30,40,50,75]),a=i.int(1,9)*(r%25===0&&r!==50?40:20),o=a*r/100;return B(i,"PERCENT","割合",`${a} の ${r}%`,o,[o*10,o/10,a-r,o+10,o-10,o*2].filter(c=>Number.isInteger(c)&&c>0))}const t=i.int(1,4),n=i.int(2,18)*100,s=n*(10-t)/10;return B(i,"PERCENT","割引後のねだんは?",`${n}円の ${t}割引き`,s,[n*t/10,n-t*10,s+100,s-100,s+50].filter(r=>r>0),{unit:"円",sol:`${n} × ${ut(10-t,1)} = ${s}円`})}),F("CIRCUM",5,10,(i,e)=>{const t=i.int(2,9)*(e===0?10:1);return e<2?B(i,"CIRCUM","円周は?(円周率3.14)","",ut(t*314,2),[ut(t*157,2),ut(t*628,2),ut(t*314+314,2),ut(t*t*314,2),ut(t*3,0)],{fig:Kr(`直径${t}cm`,!0),unit:"cm",sol:`${t} × 3.14 = ${ut(t*314,2)}cm`}):B(i,"CIRCUM","直径は?(円周率3.14)",`円周 ${ut(t*314,2)}cm`,t,[t*2,t+1,t-1,t*3],{unit:"cm",sol:`${ut(t*314,2)} ÷ 3.14 = ${t}cm`})}),F("PRISM",5,10,(i,e)=>{const t=i.int(3,6),n=["三","四","五","六"][t-3];if(e===2){const[a,o]=i.pick([["円柱の側面を切り開くと?","長方形"],["円柱の底面の形は?","円"],["三角柱の側面の形は?","長方形"],["角柱の2つの底面は?","合同で平行"]]);return B(i,"PRISM","角柱と円柱",a,o,["長方形","円","三角形","合同で平行","台形"],{sol:o})}const[s,r]=i.pick([["面",t+2],["辺",t*3],["頂点",t*2]]);return B(i,"PRISM",`${s}の数は?`,`${n}角柱`,r,[t+2,t*3,t*2,t,t+1,t*4],{sol:`${n}角柱の${s}は ${r}`})}),F("REGULAR",4,9,(i,e)=>{const t=i.pick([3,4,5,6,8,9,10]),n={3:"正三角形",4:"正方形",5:"正五角形",6:"正六角形",8:"正八角形",9:"正九角形",10:"正十角形"};return e===0?B(i,"REGULAR","中心の角を等分すると1つは?",`${n[t]}`,360/t,[180/t,360/(t+1),360/t+10,180-360/t].map(s=>Math.round(s)),{unit:"°",sol:`360 ÷ ${t} = ${360/t}°`}):B(i,"REGULAR","1つの角の大きさは?",`${n[t]}`,180-360/t,[360/t,180-360/t+10,180-360/t-10,180*(t-2)],{unit:"°",sol:`180 × (${t} − 2) ÷ ${t} = ${180-360/t}°`})})],Wf=[["square","正方形",4,!0],["rectangle","長方形",2,!0],["equilateral","正三角形",3,!1],["isosceles","二等辺三角形",1,!1],["parallelogram","平行四辺形",0,!0],["rhombus","ひし形",2,!0],["hexagon","正六角形",6,!0],["pentagon","正五角形",5,!1]],Xf=[F("FRACMUL",1,6,(i,e)=>{const[t,n]=Ts(i,2,7),[s,r]=[Math.min(t,n),Math.max(t,n)];if(e===0){const c=i.int(2,5);return B(i,"FRACMUL","分数 × 整数",`${s}/${r} × ${c}`,rt(s*c,r),[rt(s,r*c),rt(s*c,r*c+1),rt(s+c,r),rt(s*c+1,r),rt(s*c,r+1)])}const[a,o]=Ts(i,2,7);return e===1?B(i,"FRACMUL","分数 × 分数",`${s}/${r} × ${a}/${o}`,rt(s*a,r*o),[rt(s*o,r*a),rt(s+a,r+o),rt(s*a+1,r*o),rt(s*a,r*o+1),rt(s*a,r+o)]):B(i,"FRACMUL","分数 ÷ 分数",`${s}/${r} ÷ ${a}/${o}`,rt(s*o,r*a),[rt(s*a,r*o),rt(r*a,s*o),rt(s*o+1,r*a),rt(s*o,r*a+1),rt(s+o,r+a)])}),F("LETTER",1,6,(i,e)=>{const t=i.int(2,9),n=i.int(2,12);if(e===0)return B(i,"LETTER","x はいくつ?",`x × ${t} = ${t*n}`,n,[n+1,n-1,t*n-t,t===n?t+2:t],{sol:`x = ${t*n} ÷ ${t} = ${n}`});if(e===1)return B(i,"LETTER","x はいくつ?",`x + ${ut(t*5,1)} = ${ut(n*10+t*5,1)}`,n,[n+1,n-1,n+t,ut(n*10+t*10,1)],{sol:`x = ${n}`});const s=i.int(1,4)*50;return B(i,"LETTER","代金を表す式は?",`1個x円のりんご${t}個と${s}円のかご`,`x × ${t} + ${s}`,[`x + ${t} + ${s}`,`(x + ${s}) × ${t}`,`x × ${s} + ${t}`,`x × ${t} − ${s}`],{sol:`x × ${t} + ${s}`})}),F("RATIO",2,8,(i,e)=>{const[t,n]=Ts(i,1,7),s=i.int(2,9),r=(a,o)=>`${a}:${o}`;return e===0?B(i,"RATIO","比を簡単にすると?",r(t*s,n*s),r(t,n),[r(n,t),r(t*2,n),r(t+1,n+1),r(t*s,n),r(t,n+1)],{sol:`${r(t*s,n*s)} = ${r(t,n)}`}):e===1?B(i,"RATIO","比の値は?",r(t,n),rt(t,n),[rt(n,t),rt(t,t+n),rt(t+1,n+1),rt(n,t+n),String(t+n)],{sol:`${t} ÷ ${n} = ${rt(t,n)}`}):B(i,"RATIO","▢に入る数は?",`${t}:${n} = ${t*s}:▢`,n*s,[n+s,t*s,n*s+n,n*s-t,n*(s+1)+1],{sol:`${n} × ${s} = ${n*s}`})}),F("PROPORTION",3,9,(i,e)=>{const t=i.int(2,6),n=i.int(3,8);if(e===0)return B(i,"PROPORTION","y はいくつ?",`y は x に比例。x=2 のとき y=${t*2}。x=${n} のとき`,t*n,[t+n,t*n+t,t*2*n,t*n-2],{sol:`y = ${t} × x より ${t*n}`});if(e===1){const a=[1,2,3,4],o=i.chance(.5),c=a.map(l=>o?12/l:t*l);return Pn("PROPORTION","比例? 反比例?",`x: ${a.join(" ")}  →  y: ${c.join(" ")}`,"比例","反比例",!o,o?"x × y がいつも12 → 反比例":`y ÷ x がいつも${t} → 比例`)}const s=i.pick([12,18,24,36]),r=i.pick([2,3,4,6]);return B(i,"PROPORTION","y はいくつ?",`y は x に反比例。x=1 のとき y=${s}。x=${r} のとき`,s/r,[s*r,s-r,s/r+1,s+r],{sol:`y = ${s} ÷ x より ${s/r}`})}),F("GRAPH",4,9,i=>{const e=i.pick([1,2,3]),t=$i(5),n=zt(t.base,t.plot(r=>r>=0?e*r:NaN)),s=e===1?"y = x":`y = ${e} × x`;return B(i,"GRAPH","このグラフの式は?","",s,["y = x","y = 2 × x","y = 3 × x","y = 4 × x","y = x + 2"],{fig:n,sol:s})}),F("CIRCLEAREA",3,9,(i,e)=>{const t=i.int(2,9)*(e===0?10:1),n=t*t*314;return e<2?B(i,"CIRCLEAREA","円の面積は?(円周率3.14)","",ut(n,2),[ut(t*2*314,2),ut(n*2,2),ut(n/2,2),ut(t*314,2),ut(n*4,2)],{fig:Kr(`半径${t}cm`,!1),unit:"cm²",sol:`${t} × ${t} × 3.14 = ${ut(n,2)}cm²`}):B(i,"CIRCLEAREA","半円の面積は?(円周率3.14)",`半径 ${t*2}cm`,ut(t*t*4*157,2),[ut(t*t*4*314,2),ut(t*2*314,2),ut(t*t*157,2),ut(t*t*4*157+314,2)],{unit:"cm²",sol:`${t*2} × ${t*2} × 3.14 ÷ 2 = ${ut(t*t*4*157,2)}cm²`})}),F("SCALE",4,9,(i,e)=>{const t=i.int(2,9);if(e===0){const n=i.int(2,4);return B(i,"SCALE","対応する辺は何cm?",`${n}倍の拡大図。もとの辺は${t}cm`,t*n,[t+n,t*n+t,t*n-1,t],{unit:"cm",sol:`${t} × ${n} = ${t*n}cm`})}return e===1?B(i,"SCALE","実際の長さは何m?",`縮尺 1/1000 の地図で ${t}cm`,t*10,[t*100,t,t*1e3,t*10+10],{unit:"m",sol:`${t} × 1000 = ${t*1e3}cm = ${t*10}m`}):B(i,"SCALE","地図上では何cm?",`縮尺 1/25000 で 実際 ${t*250}m`,t,[t*10,t*25,t+1,t*4],{unit:"cm",sol:`${t*25e3}cm ÷ 25000 = ${t}cm`})}),F("SYMMETRY",2,8,(i,e)=>{const[t,n,s,r]=i.pick(Wf);return e===0?no("SYMMETRY","線対称な図形?",n,s>0,s>0?`${n}は線対称(軸は${s}本)`:`${n}は線対称ではない`,Ln[t]):e===1?no("SYMMETRY","点対称な図形?",n,r,`${n}は点対称${r?"":"ではない"}`,Ln[t]):B(i,"SYMMETRY","対称の軸は何本?",n,s,[0,1,2,3,4,5,6],{fig:Ln[t],unit:"本",sol:`${n}の対称の軸は${s}本`})}),F("PRISMVOL",4,9,(i,e)=>{const t=i.int(4,20),n=i.int(3,9);if(e===0)return B(i,"PRISMVOL","角柱の体積は?",`底面積${t}cm²、高さ${n}cm`,t*n,[t+n,t*n*2,t*n/2,t*n+t].map(Math.round),{unit:"cm³",sol:`${t} × ${n} = ${t*n}cm³`});const s=i.int(1,5);if(e===1)return B(i,"PRISMVOL","円柱の体積は?(円周率3.14)",`底面の半径${s}cm、高さ${n}cm`,ut(s*s*n*314,2),[ut(s*2*n*314,2),ut(s*s*314,2),ut(s*s*n*157,2),ut(s*n*314,2),ut(s*s*n*628,2)],{unit:"cm³",sol:`${s} × ${s} × 3.14 × ${n} = ${ut(s*s*n*314,2)}cm³`});const r=i.int(2,6)*2;return B(i,"PRISMVOL","三角柱の体積は?",`底面は底辺${r}cm・高さ${n}cmの三角形、柱の高さ10cm`,r*n*10/2,[r*n*10,r*n,r*n/2,r*n*10/2+10],{unit:"cm³",sol:`${r} × ${n} ÷ 2 × 10 = ${r*n*10/2}cm³`})}),F("CASES",4,10,(i,e)=>{const t=[["A、B、Cの3人が1列に並ぶ",6],["コインを2回投げたときの表裏の出方",4],["4チームの総当たり戦の試合数",6],["3種類から2種類を選ぶ",3]],n=[["4人が1列に並ぶ",24],["5人から2人を選ぶ",10],["1、2、3のカードで作る3けたの整数",6],["コインを3回投げたときの出方",8],["5チームの総当たり戦の試合数",10]],s=[["0、1、2、3のカードから2枚で作る2けたの整数",9],["4人から班長と副班長を選ぶ",12],["6チームの総当たり戦の試合数",15],["大小2つのさいころの目の出方",36],["5人から3人を選ぶ",10]],[r,a]=i.pick(oe(e,t,n,s));return B(i,"CASES","全部で何通り?",r,a,[a+2,a-1,a*2,a+4,Math.ceil(a/2)],{unit:"通り",sol:`${a}通り`})}),F("DATA",3,9,(i,e)=>{const t=i.int(3,8),n=i.shuffle([1,2,3,4,5,6,7,8,9].filter(o=>o!==t)).slice(0,3),s=[t,t,...n].sort((o,c)=>o-c);if(e===0)return B(i,"DATA","最頻値は?",s.join("、"),t,s,{sol:`いちばん多く出てくる値 = ${t}`});if(e===1)return B(i,"DATA","中央値は?",s.join("、"),s[2],[s[0],s[1],s[3],s[4],s[2]+1],{sol:`小さい順に並べた真ん中 = ${s[2]}`});const r=i.int(4,8),a=[r-2,r-1,r,r+1,r+2].map((o,c)=>o+(c===0?-1:c===4?1:0));return B(i,"DATA","平均値は?",i.shuffle(a).join("、"),r,[r+1,r-1,a[4],Js(a)],{sol:`${Js(a)} ÷ 5 = ${r}`})}),F("SPEEDCONV",5,10,(i,e)=>{const t=i.pick([50,60,80,100,150,200]);if(e===0)return B(i,"SPEEDCONV","時速何km?",`分速 ${t*10}m`,t*10*60/1e3,[t,t*6,t*10*60/100,t/10],{pre:"時速",unit:"km",sol:`${t*10} × 60 = ${t*600}m = ${t*600/1e3}km`});if(e===1)return B(i,"SPEEDCONV","分速何m?",`秒速 ${t/10}m`,t*6,[t,t*60,t/10+60,t*3],{pre:"分速",unit:"m",sol:`${t/10} × 60 = ${t*6}m`});const n=i.pick([40,60,80]),s=n*i.int(2,4);return B(i,"SPEEDCONV","往復で何時間?",`片道${s}km を 時速${n}km で`,s*2/n,[s/n,s*2/n+1,s/n+3,s*4/n],{unit:"時間",sol:`${s*2} ÷ ${n} = ${s*2/n}時間`})}),F("PREFIX",3,8,i=>{const[e,t]=i.pick([["k(キロ)は何倍?","1000倍"],["m(ミリ)は何倍?","1/1000倍"],["c(センチ)は何倍?","1/100倍"],["d(デシ)は何倍?","1/10倍"],["1kLは何L?","1000L"],["1mgは何g?","1/1000g"]]),n=t.endsWith("L")?["10L","100L","1000L","10000L"]:t.endsWith("g")?["1/10g","1/100g","1/1000g","1000g"]:["1000倍","100倍","1/10倍","1/100倍","1/1000倍"];return B(i,"PREFIX","単位のしくみ",e,t,n,{sol:t})}),F("FRACDEC",3,8,(i,e)=>{const t=[[1,2,"0.5"],[1,4,"0.25"],[3,4,"0.75"],[1,5,"0.2"],[2,5,"0.4"],[3,5,"0.6"],[4,5,"0.8"],[1,8,"0.125"],[3,8,"0.375"],[1,10,"0.1"]],[n,s,r]=i.pick(t);if(e===0)return B(i,"FRACDEC","小数になおすと?",`${n}/${s}`,r,t.map(c=>c[2]));if(e===1)return B(i,"FRACDEC","分数になおすと?",r,`${n}/${s}`,t.map(c=>`${c[0]}/${c[1]}`));const[a,o]=Ts(i,2,9);return B(i,"FRACDEC","逆数は?",`${a}/${o}`,rt(o,a),[rt(a,o),rt(o,a+1),rt(o+1,a),rt(1,a*o),rt(a+o,a)],{sol:`${a}/${o} の逆数 = ${rt(o,a)}`})})],qf=[kf,Gf,zf,Vf,Hf,Xf],kr=(i,e,t,n)=>i===0?e:i===1?t:n,nn=i=>i<0?`(${S(i)})`:String(i);function Lt(i){const e=i.filter(([t])=>t!==0);return e.length===0?"0":e.map(([t,n],s)=>{const r=n===""?String(Math.abs(t)):`${Math.abs(t)===1?"":Math.abs(t)}${n}`;return s===0?t<0?`−${r}`:r:t<0?` − ${r}`:` + ${r}`}).join("")}function ma(i,e){const t=()=>i.int(2,e),[n,s]=[t()*(i.chance(.5)?-1:1),t()*(i.chance(.5)?-1:1)];return n>0&&s>0?i.chance(.5)?[-n,s]:[n,-s]:[n,s]}const $s={5:"五",6:"六",8:"八",9:"九",10:"十",12:"十二"},Li=(i,e="x")=>i===0?e:`(${e}${Re(i)})`;function Yf(i,e){const t=If(i,e===0?24:100,e===0?99:999,e===2?13:7);return{kind:"factor",code:"PFACT",prompt:"素因数分解せよ",body:{text:String(t)},solution:`${t} = ${iu(Pf(t))}`,n:t,pad:[2,3,5,7,11,13]}}function Kf(i,e){const t=e===0?[2,3]:e===1?[2,3,4,5,6]:[4,5,6,7,10,12];for(;;){const n=i.pick(t),s=i.int(2,e===0?7:15);if(!au(s)||n*n*s>600)continue;const r=n*n*s;return{kind:"sqrt",code:"SQRT",prompt:"√ を簡単にせよ",body:{text:`√${r}`},solution:`√${r} = ${n}√${s}`,rad:r,pad:[2,3,5,7]}}}function Zf(i,e){const t=e===0?6:9,n=()=>e===0?Math.abs(ct(i,t)):ct(i,t),s=n(),r=n(),a=s+r,o=s*r,c=[s,r],l=[-s,-r,s+1,r-1];for(let d=1;d<=Math.abs(o);d++)o%d===0&&l.push(d,-d,o/d);for(const d of i.shuffle(l)){if(c.length>=6)break;d===0||c.includes(d)||c.some(_=>_+d===a&&_*d===o)||c.push(d)}let u=1;for(;c.length<6;){const d=u++;!c.includes(d)&&!c.some(_=>_+d===a&&_*d===o)&&c.push(d)}const h=_n([{coef:1,pow:2},{coef:a,pow:1},{coef:o,pow:0}]),f=s===r?`${Li(s)}²`:`${Li(Math.max(s,r))}${Li(Math.min(s,r))}`;return{kind:"pair",code:"QUAD",prompt:"因数分解: 2つの数を選べ",body:{text:h},solution:`${h} = ${f}`,b:a,c:o,tiles:i.shuffle(c)}}const Jf=(i,e)=>{const t=$i(5);return zt(t.base,hi(...t.at(i,e),cn,5))},cu=(i,e=5)=>{const t=$i(e);return zt(t.base,t.plot(i))};function ga(i,e){const[t,n,s,r]=[96,40,144,100];return zt(jt(20,n,220,n,Gt),jt(20,r,220,r,Gt),jt(72,10,168,130,Fn),Wt(t+30,n+13,`${i}°`,13),Wt(e?s-30:s+30,e?r-12:r+13,"x",15,cn),Wt(226,n,"ℓ",12),Wt(226,r,"m",12))}function Gc(i,e){return zt(gn([[120,12],[66,124],[174,124]],Gt),Wt(120,40,i,13),Wt(86,112,e,13),jt(90,64,98,68),jt(150,64,142,68))}function zc(i,e){const[t,n,s]=[120,72,58],r=Bn(t,n,s,215),a=Bn(t,n,s,325),o=Bn(t,n,s,95);return zt(fi(t,n,s),Di([r,[t,n],a],Fn),Di([r,o,a],Gt),hi(t,n),Wt(t,n+16,i,13,Fn),Wt(o[0]+2,o[1]+24,e,13,Gt))}function Vc(i,e,t){return zt(gn([[60,22],[60,116],[190,116]],Gt),aa(60,116,1,-1),Wt(42,70,i,14),Wt(124,130,e,14),Wt(138,60,t,14))}const Qf=[F("NEGADD",1,5,(i,e)=>{const[t,n]=ma(i,kr(e,9,15,30)),s=e>0&&i.chance(.5),r=s?t-n:t+n;return C(i,"NEGADD","正負の数",`${nn(t)} ${s?"−":"+"} ${nn(n)}`,S(r),[S(-r),S(s?t+n:t-n),S(r+2),S(r-2),S(Math.abs(t)+Math.abs(n))])}),F("NEGMUL",2,7,(i,e)=>{const[t,n]=ma(i,9);if(e===0)return C(i,"NEGMUL","正負の数のかけ算",`${nn(t)} × ${nn(n)}`,S(t*n),[S(-t*n),S(t+n),S(t*n+t),S(-(t*n+t))]);if(e===1)return C(i,"NEGMUL","正負の数のわり算",`${nn(t*n)} ÷ ${nn(n)}`,S(t),[S(-t),S(t+1),S(t-1),S(-t-1)]);const s=i.int(2,5),r=i.int(2,3),a=i.chance(.5),o=a?(-s)**r:-(s**r);return C(i,"NEGMUL","累乗",a?`(−${s})${r===2?"²":"³"}`:`−${s}${r===2?"²":"³"}`,S(o),[S(-o),S(s*r),S(-s*r),S(s**r+1)])}),F("NEGMIX",4,9,(i,e)=>{const[t,n]=ma(i,6),s=ct(i,9),[r,a,o]=kr(e,[`${nn(s)} + ${nn(t)} × ${nn(n)}`,s+t*n,(s+t)*n],[`${nn(s)} − ${nn(t)} × ${nn(n)}`,s-t*n,(s-t)*n],[`${nn(s)} × ${nn(t)} − ${nn(n)}²`,s*t-n*n,s*t+n*n]);return C(i,"NEGMIX","四則の混じった計算",r,S(a),[S(o),S(-a),S(a+2),S(a-2),S(a+10)])}),F("ABS",1,4,(i,e)=>{const t=ct(i,12);if(e===0)return C(i,"ABS","絶対値は?",S(t),Math.abs(t),[S(-Math.abs(t)),0,Math.abs(t)+1,Math.abs(t)-1||13],{sol:`${S(t)} の絶対値 = ${Math.abs(t)}`});let n=ct(i,12);if(n===t&&(n=-t),e===1)return Pn("ABS","大きいほうは?","どっち?",S(t),S(n),t>n,`${S(Math.max(t,n))} のほうが大きい`);const s=i.int(2,9);return C(i,"ABS","あてはまる数は?",`絶対値が ${s} である数`,`${s} と −${s}`,[`${s} だけ`,`−${s} だけ`,`0 と ${s}`,`${s} と 1/${s}`],{sol:`${s} と −${s}`})}),F("NOTATION",2,7,(i,e)=>{const t=i.int(2,9);if(e===0){const[o,c,l]=i.pick([[`a × ${t} × b`,`${t}ab`,[`ab${t}`,`a${t}b`,`${t}a + b`,`${t} + ab`]],[`x ÷ ${t}`,`x/${t}`,[`${t}/x`,`${t}x`,`x − ${t}`,`x${t}`]],["a × a × a","a³",["3a","a + 3","aaa","a²"]],[`(x + y) × ${t}`,`${t}(x + y)`,[`${t}x + y`,`x + ${t}y`,`(x + y)${t}`,`${t}xy`]],["b × (−1) × a","−ab",["−1ab","ab − 1","−ba1","a − b"]]]);return C(i,"NOTATION","文字式の表し方",o,c,l,{sol:`${o} = ${c}`})}const n=i.int(1,9)*10,[s,r,a]=i.pick([[`1本a円の鉛筆${t}本の代金`,`${t}a 円`,[`a + ${t} 円`,`a/${t} 円`,`${t}/a 円`,`a${t} 円`]],[`x円の${t}割`,`${t}x/10 円`,[`${t}x 円`,`x/${t} 円`,`10x/${t} 円`,`x − ${t} 円`]],[`時速${n}kmでx時間進む道のり`,`${n}x km`,[`x/${n} km`,`${n}/x km`,`${n} + x km`,`${n}x 時間`]],[`a kmを${t}時間で進む速さ`,`時速 a/${t} km`,[`時速 ${t}a km`,`時速 ${t}/a km`,`時速 a − ${t} km`,`時速 a + ${t} km`]]]);return C(i,"NOTATION","式で表すと?",s,r,a,{sol:r})}),F("LIKE",3,8,(i,e)=>{const[t,n,s,r]=[ct(i,9),ct(i,9),ct(i,9),ct(i,9)];if(e===0)return C(i,"LIKE","同類項をまとめよ",Lt([[t,"x"],[n,"x"]]),Lt([[t+n,"x"]]),[Lt([[t+n,"x²"]]),Lt([[t*n,"x"]]),Lt([[t-n,"x"]]),Lt([[t+n+1,"x"]]),S(t+n)]);if(e===1)return C(i,"LIKE","同類項をまとめよ",Lt([[t,"x"],[s,""],[n,"x"],[r,""]]),Lt([[t+n,"x"],[s+r,""]]),[Lt([[t+n+s+r,"x"]]),Lt([[t+n,"x"],[s-r,""]]),Lt([[t-n,"x"],[s+r,""]]),Lt([[t+n,"x"],[s*r,""]]),Lt([[t+s,"x"],[n+r,""]])]);const a=i.int(2,5);return C(i,"LIKE","かっこをはずして計算",`${a}${Li(s)} ${n<0?"−":"+"} ${Math.abs(n)===1?"":Math.abs(n)}x`,Lt([[a+n,"x"],[a*s,""]]),[Lt([[a+n,"x"],[s,""]]),Lt([[a*n,"x"],[a*s,""]]),Lt([[a+n,"x"],[-a*s,""]]),Lt([[a-n,"x"],[a*s,""]]),Lt([[a+n+a*s,"x"]])])}),F("SUBST",3,8,(i,e)=>{const t=ct(i,5),[n,s]=[ct(i,6),ct(i,9)],[r,a,o]=kr(e,[Lt([[n,"x"],[s,""]]),n*t+s,n+t+s],[`${he(n)}x²`,n*t*t,n*t*2],[Lt([[1,"x²"],[n,"x"],[s,""]]),t*t+n*t+s,-t*t+n*t+s]);return C(i,"SUBST",`x = ${S(t)} のときの式の値`,r,S(a),[S(o),S(-a),S(a+2),S(a-2),S(a+4)])}),F("EQUATION",4,10,(i,e)=>{const t=ct(i,9),n=i.int(2,7)*(i.chance(.3)?-1:1),s=ct(i,12),r=[S(-t),S(t+1),S(t-1),S(t+2),S(t*2)];if(e===0)return C(i,"EQUATION","方程式を解け",`${Lt([[n,"x"],[s,""]])} = ${S(n*t+s)}`,S(t),r,{pre:"x = ",sol:`x = ${S(t)}`});if(e===1){const l=n+ct(i,4)||n+1,u=n*t+s-l*t;return C(i,"EQUATION","方程式を解け",`${Lt([[n,"x"],[s,""]])} = ${Lt([[l,"x"],[u,""]])}`,S(t),r,{pre:"x = ",sol:`x = ${S(t)}`})}if(i.chance(.5)){const l=i.int(2,5),u=ct(i,5);return C(i,"EQUATION","方程式を解け",`${l}${Li(u)} = ${S(l*(t+u))}`,S(t),r,{pre:"x = ",sol:`x = ${S(t)}`})}const[a,o]=[i.int(2,5),i.int(2,6)],c=a*i.int(1,4);return C(i,"EQUATION","比例式を解け",`x : ${o*(c/a)} = ${a} : ${o}`,c,[c+1,c-1,o*(c/a),c*2,a*o],{pre:"x = ",sol:`x = ${c}`})}),F("COORD",3,7,i=>{const[e,t]=[ct(i,4),ct(i,4)],n=(s,r)=>`(${S(s)}, ${S(r)})`;return C(i,"COORD","点の座標は?","",n(e,t),[n(t,e),n(-e,t),n(e,-t),n(-e,-t),n(t,-e)],{fig:Jf(e,t),sol:n(e,t)})}),F("PROPORTION",4,9,(i,e)=>{const t=ct(i,5),n=ct(i,5);if(e===0)return C(i,"PROPORTION","比例定数は?",`y は x に比例。x = ${S(n)} のとき y = ${S(t*n)}`,S(t),[S(-t),S(t*n),S(t+1),S(t-1),rt(1,t)],{sol:`a = ${S(t*n)} ÷ ${nn(n)} = ${S(t)}`});if(e===1){const a=i.pick([6,8,12,18,24])*(i.chance(.3)?-1:1),o=i.pick([2,3,6].filter(c=>a%c===0));return C(i,"PROPORTION","y の値は?",`y は x に反比例。x = 1 のとき y = ${S(a)}。x = ${o} のとき`,S(a/o),[S(a*o),S(-a/o),S(a-o),S(a/o+1)],{sol:`y = ${S(a)}/x より ${S(a/o)}`})}const s=i.pick([1,2,3,-1,-2,.5]),r=a=>a===.5?"y = x/2":`y = ${he(a)}x`;return C(i,"PROPORTION","グラフの式は?","",r(s),[1,2,3,-1,-2,.5].map(r),{fig:cu(a=>s*a),sol:r(s)})}),F("SECTOR",5,10,(i,e)=>{const t=i.pick([3,4,6,8,9,12]),n=i.pick([30,45,60,90,120].filter(s=>t*s%180===0||e>0));return e===0?C(i,"SECTOR","おうぎ形の弧の長さは?",`半径${t}cm、中心角${n}°`,Nt(t*n,180),[Nt(t*t*n,360),Nt(t*n,360),Nt(t*n,90),Nt(t*2,1),Nt(n,t)],{unit:" cm",sol:`2π × ${t} × ${n}/360 = ${Nt(t*n,180)} cm`}):e===1?C(i,"SECTOR","おうぎ形の面積は?",`半径${t}cm、中心角${n}°`,Nt(t*t*n,360),[Nt(t*n,180),Nt(t*t*n,180),Nt(t*t,1),Nt(t*t*n,720),Nt(t*n,360)],{unit:" cm²",sol:`π × ${t}² × ${n}/360 = ${Nt(t*t*n,360)} cm²`}):C(i,"SECTOR","円の面積は?",`半径${t}cm`,Nt(t*t),[Nt(t*2),Nt(t),Nt(t*t*2),Nt(t*t,2),Nt(t*t*4)],{unit:" cm²",sol:`π × ${t}² = ${Nt(t*t)} cm²`})}),F("SOLID",4,9,(i,e)=>{const t=i.pick([2,3,6]),n=i.pick([3,6,9]);if(e===0){const[s,r,a]=i.pick([["正多面体は全部で何種類?","5種類",["3種類","4種類","6種類","無数"]],["正四面体の面の数は?","4",["6","8","12","3"]],["正六面体(立方体)の頂点の数は?","8",["4","6","12","20"]],["正八面体の面の形は?","正三角形",["正方形","正五角形","長方形","正六角形"]],["正十二面体の面の形は?","正五角形",["正三角形","正方形","正六角形","長方形"]],["円錐を底面に平行な平面で切った切り口は?","円",["三角形","長方形","おうぎ形","だ円"]],["円柱を底面に垂直な平面で切った切り口は?","長方形",["円","三角形","おうぎ形","台形"]],["空間で交わらず平行でもない2直線の位置関係は?","ねじれの位置",["垂直","平行","交わる","一致"]],["円錐の側面の展開図の形は?","おうぎ形",["三角形","長方形","円","台形"]]]);return C(i,"SOLID","空間図形",s,r,a,{sol:r})}return e===1?i.chance(.5)?C(i,"SOLID","円柱の体積は?",`底面の半径${t}cm、高さ${n}cm`,Nt(t*t*n),[Nt(t*t*n,3),Nt(2*t*n),Nt(t*n),Nt(t*t*n*2)],{unit:" cm³",sol:`π × ${t}² × ${n} = ${Nt(t*t*n)} cm³`}):C(i,"SOLID","円錐の体積は?",`底面の半径${t}cm、高さ${n}cm`,Nt(t*t*n,3),[Nt(t*t*n),Nt(2*t*n,3),Nt(t*t*n,2),Nt(t*n)],{unit:" cm³",sol:`1/3 × π × ${t}² × ${n} = ${Nt(t*t*n,3)} cm³`}):i.chance(.5)?C(i,"SOLID","球の体積は?",`半径${t}cm`,Nt(4*t**3,3),[Nt(4*t*t),Nt(t**3),Nt(4*t**3),Nt(2*t**3,3)],{unit:" cm³",sol:`4/3 × π × ${t}³ = ${Nt(4*t**3,3)} cm³`}):C(i,"SOLID","球の表面積は?",`半径${t}cm`,Nt(4*t*t),[Nt(4*t**3,3),Nt(t*t),Nt(2*t*t),Nt(4*t)],{unit:" cm²",sol:`4 × π × ${t}² = ${Nt(4*t*t)} cm²`})}),F("FREQUENCY",3,8,(i,e)=>{const t=i.pick([20,25,50]),n=i.int(2,t/5);if(e===0){const r=i.shuffle([12,15,18,21,24,27,30,33]).slice(0,5),a=Math.max(...r)-Math.min(...r);return C(i,"FREQUENCY","範囲(レンジ)は?",r.join("、"),a,[Math.max(...r),Math.min(...r),a+3,a-3],{sol:`${Math.max(...r)} − ${Math.min(...r)} = ${a}`})}if(e===1)return C(i,"FREQUENCY","相対度数は?",`全体${t}人のうち、ある階級の度数が${n}人`,String(n/t),[n/100,n/10,1-n/t,n/t+.1,n/t/2].map(r=>String(Math.round(r*1e3)/1e3)),{sol:`${n} ÷ ${t} = ${n/t}`});const s=i.int(2,8)*10;return C(i,"FREQUENCY","階級値は?",`${s}cm以上${s+10}cm未満の階級`,s+5,[s,s+10,10,s*2+10],{unit:"cm",sol:`(${s} + ${s+10}) ÷ 2 = ${s+5}cm`})}),F("PFACT",2,8,Yf),F("REDUCE",1,4,ou),F("TERMS",3,7,i=>{const[e,t,n]=i.pick([["線分の垂直二等分線上の点は、両端から…","等しい距離にある",["異なる距離にある","必ず線分上にある","必ず中点にある"]],["角の二等分線上の点は、角の2辺から…","等しい距離にある",["異なる距離にある","必ず頂点にある","必ず辺の上にある"]],["円の接線は、接点を通る半径に…","垂直",["平行","一致する","45°で交わる"]],["記号 ⊥ の意味は?","垂直",["平行","合同","相似"]],["記号 ∥ の意味は?","平行",["垂直","合同","等しい"]],["図形をある点を中心に回す移動は?","回転移動",["平行移動","対称移動","拡大"]],["図形を直線を折り目に折り返す移動は?","対称移動",["平行移動","回転移動","縮小"]]]);return C(i,"TERMS","図形のことば",e,t,n,{sol:t})})],is=i=>{let e=0;for(let t=1;t<=6;t++)for(let n=1;n<=6;n++)i(t,n)&&e++;return e},jf=[F("MONOMIAL",1,5,(i,e)=>{const[t,n]=[ct(i,6),ct(i,6)];if(e===0)return C(i,"MONOMIAL","単項式の乗法",`${he(t)}a × ${n<0?`(${he(n)}b)`:`${he(n)}b`}`,`${he(t*n)}ab`,[`${he(t+n)}ab`,`${he(-t*n)}ab`,`${he(t*n)}a²b`,`${he(t*n)}a + b`,`${he(t*n+1)}ab`]);if(e===1){const r=i.int(2,5);return C(i,"MONOMIAL","単項式の除法",`${he(t*r)}x² ÷ ${he(r)}x`,`${he(t)}x`,[`${he(t)}x²`,`${he(t*r)}x`,`${he(t)}x³`,S(t),`${he(-t)}x`])}const s=i.int(2,4);return C(i,"MONOMIAL","累乗をふくむ計算",`(−${s}a)²`,`${s*s}a²`,[`−${s*s}a²`,`${s*2}a²`,`−${s*2}a`,`${s*s}a`,`${s}a²`])}),F("POLYADD",1,6,(i,e)=>{const[t,n,s,r]=[ct(i,7),ct(i,7),ct(i,7),ct(i,7)],a=Lt([[t,"x"],[n,"y"]]),o=Lt([[s,"x"],[r,"y"]]);if(e===0)return C(i,"POLYADD","多項式の加法",`(${a}) + (${o})`,Lt([[t+s,"x"],[n+r,"y"]]),[Lt([[t+s,"x"],[n-r,"y"]]),Lt([[t-s,"x"],[n+r,"y"]]),Lt([[t+r,"x"],[n+s,"y"]]),Lt([[t*s,"x"],[n*r,"y"]]),Lt([[t+s+n+r,"xy"]])]);if(e===1)return C(i,"POLYADD","多項式の減法",`(${a}) − (${o})`,Lt([[t-s,"x"],[n-r,"y"]]),[Lt([[t-s,"x"],[n+r,"y"]]),Lt([[t+s,"x"],[n+r,"y"]]),Lt([[t+s,"x"],[n-r,"y"]]),Lt([[s-t,"x"],[r-n,"y"]]),Lt([[t-s+1,"x"],[n-r,"y"]])]);const c=i.int(2,4);return C(i,"POLYADD","計算せよ",`${c}(${a}) − (${o})`,Lt([[c*t-s,"x"],[c*n-r,"y"]]),[Lt([[c*t-s,"x"],[c*n+r,"y"]]),Lt([[c*t+s,"x"],[c*n+r,"y"]]),Lt([[c*t-s,"x"],[n-r,"y"]]),Lt([[t-s,"x"],[c*n-r,"y"]]),Lt([[c*t-c*s,"x"],[c*n-c*r,"y"]])])}),F("SOLVEFOR",4,9,(i,e)=>{const[t,n]=[i.int(2,6),i.int(2,9)];if(e===0)return C(i,"SOLVEFOR","y について解け",`${t}x + y = ${n}`,`y = −${t}x + ${n}`,[`y = ${t}x + ${n}`,`y = ${t}x − ${n}`,`y = −${t}x − ${n}`,`y = ${n}x − ${t}`],{sol:`y = −${t}x + ${n}`});if(e===1)return C(i,"SOLVEFOR","x について解け",`y = ${t}x + ${n}`,`x = (y − ${n})/${t}`,[`x = (y + ${n})/${t}`,`x = ${t}(y − ${n})`,`x = ${t}y − ${n}`,`x = y/${t} − ${n}`],{sol:`x = (y − ${n})/${t}`});const[s,r,a]=i.pick([["S = ah/2 を h について解け","h = 2S/a",["h = S/2a","h = aS/2","h = 2a/S","h = 2S − a"]],["ℓ = 2πr を r について解け","r = ℓ/2π",["r = 2πℓ","r = 2π/ℓ","r = ℓ − 2π","r = ℓ/π"]],["V = abc を c について解け","c = V/ab",["c = Vab","c = ab/V","c = V − ab","c = V/a + b"]],["m = (a + b)/2 を b について解け","b = 2m − a",["b = 2m + a","b = m/2 − a","b = (m − a)/2","b = 2(m + a)"]]]);return C(i,"SOLVEFOR","等式の変形",s,r,a,{sol:r})}),F("SIMUL",4,10,(i,e)=>{const[t,n]=[ct(i,6),ct(i,6)],s=(u,h)=>`x=${S(u)}, y=${S(h)}`,[r,a]=e===0?[1,1]:[i.int(2,4),ct(i,3)],[o,c]=e===0?[1,-1]:e===1?[1,-a]:[i.int(1,3),ct(i,4)];if(r*c-a*o===0)return C(i,"SIMUL","連立方程式を解け",`x + y = ${S(t+n)}、x − y = ${S(t-n)}`,s(t,n),[s(n,t),s(-t,n),s(t,-n),s(t+1,n-1),s(-t,-n)],{sol:s(t,n)});const l=(u,h)=>`${Lt([[u,"x"],[h,"y"]])} = ${S(u*t+h*n)}`;return C(i,"SIMUL","連立方程式を解け",`${l(r,a)}、${l(o,c)}`,s(t,n),[s(n,t),s(-t,n),s(t,-n),s(t+1,n-1),s(-t,-n),s(t+1,n+1)],{sol:s(t,n)})}),F("LINEAR",2,8,(i,e)=>{const t=ct(i,5),n=ct(i,7),s=`y = ${Lt([[t,"x"],[n,""]])}`;if(e===0){const o=i.chance(.5);return C(i,"LINEAR",o?"傾きは?":"切片は?",s,S(o?t:n),[S(o?n:t),S(-t),S(-n),S(t+n),"0"],{sol:o?`傾き ${S(t)}`:`切片 ${S(n)}`})}if(e===1){const o=ct(i,5);return C(i,"LINEAR",`x = ${S(o)} のときの y`,s,S(t*o+n),[S(t*o-n),S(t+o+n),S(-t*o+n),S(t*o+n+2),S(t*o)])}const[r,a]=[i.int(-4,0),i.int(1,5)];return C(i,"LINEAR","2点を通る直線の傾きは?",`(${S(r)}, ${S(t*r+n)}) と (${S(a)}, ${S(t*a+n)})`,S(t),[S(-t),rt(1,t),S(t+1),S(t-1),S(n)],{sol:`yの増加量 ÷ xの増加量 = ${S(t)}`})}),F("LINEGRAPH",4,10,(i,e)=>{const t=i.pick(e===0?[1,2,-1]:[1,2,-1,-2,.5,-.5]),n=i.int(-3,3),s=(r,a)=>`y = ${r===.5?"x/2":r===-.5?"−x/2":`${he(r)}x`}${a===0?"":Re(a)}`;return C(i,"LINEGRAPH","グラフの式は?","",s(t,n),[s(-t,n),s(t,-n||2),s(t*2===1?2:t===2?1:t*2,n),s(t,n+1),s(-t,-n||1)],{fig:cu(r=>t*r+n),sol:s(t,n)})}),F("PARALLEL",2,7,(i,e)=>{const t=i.int(7,25)*5;if(t===90)return C(i,"PARALLEL","ℓ ∥ m のとき x は?","",90,[45,60,180,100],{fig:ga(90,!1),unit:"°",sol:"同位角は等しい → 90°"});if(e===0)return C(i,"PARALLEL","ℓ ∥ m のとき x は?","",t,[180-t,90,t+10,360-t,Math.abs(90-t)],{fig:ga(t,!1),unit:"°",sol:`同位角は等しい → ${t}°`});if(e===1)return C(i,"PARALLEL","ℓ ∥ m のとき x は?","",t,[180-t,90,t-10,360-t],{fig:ga(t,!0),unit:"°",sol:`錯角は等しい → ${t}°`});const[n,s,r]=i.pick([["平行線の同位角は?","等しい",["和が180°","和が90°","差が90°"]],["平行線の錯角は?","等しい",["和が180°","和が90°","差が90°"]],["対頂角は?","等しい",["和が180°","和が90°","和が360°"]],["平行線の同側内角の和は?","180°",["90°","360°","等しいだけ"]]]);return C(i,"PARALLEL","角の性質",n,s,r,{sol:s})}),F("POLYGON",3,8,(i,e)=>{const t=i.pick([5,6,8,9,10,12]);return e===0?C(i,"POLYGON","内角の和は?",`${$s[t]}角形`,180*(t-2),[180*t,180*(t-1),360,180*(t-3)],{unit:"°",sol:`180 × (${t} − 2) = ${180*(t-2)}°`}):e===1?C(i,"POLYGON","1つの外角は?",`正${$s[t]}角形`,360/t,[180-360/t,360/(t-1),180/t,360/t+10].map(Math.round),{unit:"°",sol:`360 ÷ ${t} = ${360/t}°`}):C(i,"POLYGON","正何角形?",`1つの外角が ${360/t}°`,`正${$s[t]}角形`,Object.values($s).map(n=>`正${n}角形`),{sol:`360 ÷ ${360/t} = ${t} → 正${$s[t]}角形`})}),F("CONGRUENT",3,8,(i,e)=>{const t=["3組の辺がそれぞれ等しい","2組の辺とその間の角がそれぞれ等しい","1組の辺とその両端の角がそれぞれ等しい"],n=["3組の角がそれぞれ等しい","2組の辺と1つの角がそれぞれ等しい","2組の角がそれぞれ等しい","1組の辺と1つの角がそれぞれ等しい"];if(e===0){const o=i.chance(.5),c=o?i.pick(t):i.pick(n);return no("CONGRUENT","三角形の合同条件?",c,o,o?"合同条件である":"合同条件ではない")}if(e===1){const o=i.pick(n);return C(i,"CONGRUENT","合同条件でないものは?","三角形の合同条件",o,t,{sol:o})}const[s,r,a]=i.pick([["直角三角形の合同条件は「斜辺と1つの鋭角」ともう1つは?","斜辺と他の1辺",["3組の角","2つの鋭角","直角と1つの鋭角"]],["二等辺三角形の2つの底角は?","等しい",["和が90°","和が180°","差が90°"]],["正三角形の1つの内角は?","60°",["45°","90°","30°","120°"]],["二等辺三角形の頂角の二等分線は底辺を?","垂直に2等分する",["3等分する","ななめに2等分する","交わらない"]],["証明で、最初から分かっていることを何という?","仮定",["結論","定理","定義"]],["証明で、示したいことがらを何という?","結論",["仮定","定理","定義"]]]);return C(i,"CONGRUENT","図形の性質",s,r,a,{sol:r})}),F("ISOSCELES",3,8,(i,e)=>{const t=i.int(5,16)*5,n=180-t*2;return n<=0?C(i,"ISOSCELES","正三角形の1つの角は?","",60,[45,90,30,120],{unit:"°",sol:"60°"}):e===0?C(i,"ISOSCELES","頂角 x は?","",n,[180-t,t,90-t>0?90-t:t+10,n+10],{fig:Gc("x",`${t}°`),unit:"°",sol:`180 − ${t} × 2 = ${n}°`}):e===1&&n%2===0?C(i,"ISOSCELES","底角 x は?","",t,[n,180-n,t+10,t-5],{fig:Gc(`${n}°`,"x"),unit:"°",sol:`(180 − ${n}) ÷ 2 = ${t}°`}):C(i,"ISOSCELES","底角の外角は?",`底角 ${t}° の二等辺三角形`,180-t,[t,n,180-n,360-t],{unit:"°",sol:`180 − ${t} = ${180-t}°`})}),F("PARALLELOGRAM",4,9,(i,e)=>{const t=i.int(8,28)*5;if(e===0)return C(i,"PARALLELOGRAM","平行四辺形 ∠A の対角は?",`∠A = ${t}°`,t,[180-t,90,360-t,t+10],{unit:"°",sol:`対角は等しい → ${t}°`});if(e===1)return C(i,"PARALLELOGRAM","平行四辺形 ∠A のとなりの角は?",`∠A = ${t}°`,180-t,[t,90,360-t,190-t],{unit:"°",sol:`180 − ${t} = ${180-t}°`});const[n,s]=i.pick([["平行四辺形で、4つの角がすべて等しいと?","長方形"],["平行四辺形で、4つの辺がすべて等しいと?","ひし形"],["平行四辺形で、対角線の長さが等しいと?","長方形"],["平行四辺形で、対角線が垂直に交わると?","ひし形"],["長方形でもひし形でもある四角形は?","正方形"]]);return C(i,"PARALLELOGRAM","特別な平行四辺形",n,s,["長方形","ひし形","正方形","台形"],{sol:s})}),F("PROBABILITY",3,10,(i,e)=>{if(e===0){const[s,r,a]=i.pick([["さいころ1個で偶数の目",3,6],["さいころ1個で3の倍数の目",2,6],["さいころ1個で5以上の目",2,6],["さいころ1個で1の目",1,6],["コイン1枚で表",1,2],["1〜10のカードから素数を引く",4,10],["ジョーカーなし52枚からハートを引く",13,52]]);return C(i,"PROBABILITY","確率は?",s,rt(r,a),[rt(a-r,a),rt(1,a),rt(r+1,a),rt(r,a+2),"1/3","1/4","2/3","1/6","3/4"])}if(e===1){const[s,r,a]=i.pick([["コイン2枚でどちらも表",1,4],["コイン2枚で1枚だけ表",2,4],["コイン3枚ですべて表",1,8],["コイン3枚で少なくとも1枚は表",7,8],["赤3個・白2個の袋から1個で赤",3,5],["赤3個・白2個の袋から同時に2個で両方赤",3,10]]);return C(i,"PROBABILITY","確率は?",s,rt(r,a),[rt(a-r,a),rt(1,a),rt(r+1,a+1),rt(1,2),rt(1,3),rt(2,3)])}const[t,n]=i.pick([["さいころ2個で和が7",is((s,r)=>s+r===7)],["さいころ2個で同じ目",is((s,r)=>s===r)],["さいころ2個で和が10以上",is((s,r)=>s+r>=10)],["さいころ2個で積が奇数",is((s,r)=>s*r%2===1)],["さいころ2個で和が4以下",is((s,r)=>s+r<=4)],["さいころ2個で少なくとも1個は6",is((s,r)=>s===6||r===6)]]);return C(i,"PROBABILITY","確率は?",t,rt(n,36),[rt(n+1,36),rt(n-1||5,36),rt(n,12),rt(36-n,36),rt(1,6),rt(1,12)])}),F("BOXPLOT",4,9,(i,e)=>{const t=i.int(1,3),n=t+i.int(1,3),s=n+i.int(1,3),r=s+i.int(1,3),a=r+i.int(1,3),o=wf(t,n,s,r,a,0,16,2),[c,l]=kr(e,["中央値",s],["範囲",a-t],["四分位範囲",r-n]);return C(i,"BOXPLOT",`${c}は?`,"",l,[t,n,s,r,a,a-t,r-n],{fig:o,sol:`${c} = ${l}`})})],th=[F("EXPAND",1,6,(i,e)=>{const[t,n]=[ct(i,7),ct(i,7)],s=(a,o)=>_n([{coef:1,pow:2},{coef:a,pow:1},{coef:o,pow:0}]);if(e===0)return C(i,"EXPAND","展開せよ",`${Li(t)}${Li(n)}`,s(t+n,t*n),[s(t*n,t+n),s(t+n,-t*n),s(t-n,t*n),s(t+n,t+n),s(-t-n,t*n)]);if(e===1)return C(i,"EXPAND","展開せよ",`${Li(t)}²`,s(2*t,t*t),[s(t,t*t),s(2*t,-t*t),s(0,t*t),s(2*t,2*t),s(-2*t,t*t)]);const r=Math.abs(t);return C(i,"EXPAND","展開せよ",`(x + ${r})(x − ${r})`,s(0,-r*r),[s(0,r*r),s(2*r,r*r),s(-2*r,r*r),s(0,-2*r),s(2*r,-r*r)])}),F("QUAD",2,9,Zf),F("FACTOR",3,8,(i,e)=>{const t=i.int(2,9);if(e===0){const s=i.int(2,6);return C(i,"FACTOR","因数分解せよ",`${t}x² + ${t*s}x`,`${t}x(x + ${s})`,[`${t}(x² + ${s})`,`x(${t}x + ${s})`,`${t}x(x + ${t*s})`,`${t*s}x(x + 1)`],{sol:`${t}x(x + ${s})`})}if(e===1)return C(i,"FACTOR","因数分解せよ",`x² − ${t*t}`,`(x + ${t})(x − ${t})`,[`(x − ${t})²`,`(x + ${t})²`,`(x + ${t*t})(x − 1)`,`x(x − ${t*t})`],{sol:`(x + ${t})(x − ${t})`});const n=i.chance(.5)?1:-1;return C(i,"FACTOR","因数分解せよ",`x² ${n>0?"+":"−"} ${2*t}x + ${t*t}`,`(x ${n>0?"+":"−"} ${t})²`,[`(x ${n>0?"−":"+"} ${t})²`,`(x + ${t})(x − ${t})`,`(x ${n>0?"+":"−"} ${t*t})²`,`(x ${n>0?"+":"−"} ${2*t})(x ${n>0?"+":"−"} ${t})`],{sol:`(x ${n>0?"+":"−"} ${t})²`})}),F("SQRT",2,8,Kf),F("ROOTCALC",3,9,(i,e)=>{if(e===0){const a=i.int(2,12);return i.chance(.5)?C(i,"ROOTCALC","平方根は?",`${a*a} の平方根`,`±${a}`,[`${a}`,`−${a}`,`±${a*a}`,`±√${a}`,`${a*2}`],{sol:`±${a}`}):C(i,"ROOTCALC","値は?",`√${a*a}`,a,[-a,a*a,a*2,a+1],{sol:`√${a*a} = ${a}`})}const t=i.pick([2,3,5,6,7]),[n,s]=[i.int(1,4),i.int(1,4)];if(e===1)return i.chance(.5)?C(i,"ROOTCALC","計算せよ",`√${n*n*t} + √${s*s*t}`,Kt(t,n+s),[Kt(t*2,n+s),Kt(t,n*s),Kt(t,n+s+1),`√${(n*n+s*s)*t}`,Kt(t,Math.abs(n-s)||5)]):C(i,"ROOTCALC","計算せよ",`√${n*n*t} × √${t}`,n*t,[Kt(t,n),n*t*t,n+t,n*t+1,Kt(t,n*t)]);if(i.chance(.5))return C(i,"ROOTCALC","分母を有理化せよ",`${n*t}/√${t}`,Kt(t,n),[Kt(t,n*t),`${n}/${t}`,String(n),`√${t}/${n}`,Kt(t,n+1)],{sol:`${n*t}/√${t} = ${Kt(t,n)}`});const r=i.int(2,5);return C(i,"ROOTCALC","計算せよ",`(√${t} + ${r})(√${t} − ${r})`,S(t-r*r),[S(t+r*r),S(r*r-t),S(t-r),Kt(t,2),S(t*t-r*r)])}),F("ROOTSIZE",3,7,(i,e)=>{if(e===0){const s=i.pick([10,20,30,40,50,60,70,80,90]),r=Math.round(Math.sqrt(s));return C(i,"ROOTSIZE","いちばん近い整数は?",`√${s}`,r,[r+1,r-1,r+2,Math.round(s/2)])}const t=i.int(2,7),n=t*t+i.pick([-2,-1,1,2]);return Pn("ROOTSIZE","大きいほうは?","どっち?",String(t),`√${n}`,t*t>n,`${t} = √${t*t} と √${n}`)}),F("QUADEQ",4,10,(i,e)=>{const t=i.int(2,9);if(e===0)return C(i,"QUADEQ","2次方程式を解け",`x² = ${t*t}`,`x = ±${t}`,[`x = ${t}`,`x = −${t}`,`x = ±${t*t}`,`x = ±√${t}`,`x = ${t*t/2}`],{sol:`x = ±${t}`});const[n,s]=[ct(i,7),ct(i,7)],r=_n([{coef:1,pow:2},{coef:-(n+s),pow:1},{coef:n*s,pow:0}]),a=(h,f)=>h===f?`x = ${S(h)}`:`x = ${S(Math.min(h,f))}, ${S(Math.max(h,f))}`;if(e===1)return C(i,"QUADEQ","2次方程式を解け",`${r} = 0`,a(n,s),[a(-n,-s),a(n,-s),a(-n,s),a(n+1,s),a(n*s,n+s)],{sol:a(n,s)});const o=i.pick([1,3,5,7]),c=i.pick([1,-1]),l=o*o-4*c,u=(h,f)=>`x = (${S(-h)} ± √${f})/2`;return C(i,"QUADEQ","解の公式で解け",`x² + ${o===1?"":o}x ${c>0?"+":"−"} 1 = 0`,u(o,l),[u(-o,l),u(o,o*o+4*c),u(o,l+4),`x = ${S(-o)} ± √${l}`],{sol:u(o,l)})}),F("PARABOLA",4,10,(i,e)=>{const t=i.pick([1,2,3,-1,-2]),n=`y = ${he(t)}x²`;if(e===0){const c=ct(i,4);return C(i,"PARABOLA",`x = ${S(c)} のときの y`,n,S(t*c*c),[S(-t*c*c),S(t*c*2),S(t*c),S(t*c*c+t)])}if(e===1){const[c,l]=[i.int(1,3),i.int(4,6)];return C(i,"PARABOLA",`xが${c}から${l}まで増えるときの変化の割合`,n,S(t*(c+l)),[S(t*(l-c)),S(t*c*l),S(t),S(-t*(c+l)),S(t*(c+l)+t)],{sol:`a(p + q) = ${S(t*(c+l))}`})}if(i.chance(.5)){const c=[1,2,-1,-2,.5].map(h=>h===.5?"y = x²/2":`y = ${he(h)}x²`),l=i.pick([1,2,-1,.5]),u=$i(4);return C(i,"PARABOLA","グラフの式は?","",l===.5?"y = x²/2":`y = ${he(l)}x²`,c,{fig:zt(u.base,u.plot(h=>l*h*h)),sol:l===.5?"y = x²/2":`y = ${he(l)}x²`})}const[s,r]=[-i.int(1,3),i.int(2,4)],a=Math.max(s*s,r*r)*t,o=(c,l)=>`${S(Math.min(c,l))} ≦ y ≦ ${S(Math.max(c,l))}`;return C(i,"PARABOLA",`${S(s)} ≦ x ≦ ${r} のときの y の変域`,n,o(0,a),[o(t*s*s,t*r*r),o(-a,a),o(0,t*r),o(t*s,t*r),o(0,a+t)],{sol:o(0,a)})}),F("SIMILAR",3,9,(i,e)=>{const[t,n]=i.pick([[1,2],[2,3],[3,4],[1,3],[2,5],[3,5]]);if(e===0){const r=i.int(2,5),a=t*r;return C(i,"SIMILAR","x の長さは?",`△ABC ∽ △DEF、相似比 ${t}:${n}、AB = ${a}、DE = x`,n*r,[a+n,t*r*n,n*r+t,a],{sol:`x = ${a} × ${n}/${t} = ${n*r}`})}if(e===1){const r=i.chance(.5),a=(o,c)=>`${o}:${c}`;return C(i,"SIMILAR",r?"面積比は?":"体積比は?",`相似比 ${t}:${n}`,r?a(t*t,n*n):a(t**3,n**3),[a(t,n),a(t*2,n*2),a(t*t,n*n),a(t**3,n**3),a(t*3,n*3)],{sol:r?`${t}²:${n}² = ${t*t}:${n*n}`:`${t}³:${n}³ = ${t**3}:${n**3}`})}const s=i.int(3,9)*2;return C(i,"SIMILAR","MN の長さは?",`△ABCで M, N は AB, AC の中点。BC = ${s}`,s/2,[s,s*2,s/2+1,s-2],{sol:`中点連結定理より BC ÷ 2 = ${s/2}`})}),F("INSCRIBED",4,9,(i,e)=>{const t=i.int(5,16)*5;if(e===0)return C(i,"INSCRIBED","円周角 x は?","",t,[t*2,180-t,90-t>0?90-t:t+10,t+10],{fig:zc(`${t*2}°`,"x"),unit:"°",sol:`中心角の半分 → ${t}°`});if(e===1)return C(i,"INSCRIBED","中心角 x は?","",t*2,[t,180-t,360-t*2,t*2+10],{fig:zc("x",`${t}°`),unit:"°",sol:`円周角の2倍 → ${t*2}°`});const[n,s,r]=i.pick([["半円の弧に対する円周角は?","90°",["45°","60°","180°","120°"]],["同じ弧に対する円周角どうしは?","等しい",["和が90°","和が180°","2倍の関係"]],["円に内接する四角形の対角の和は?","180°",["90°","360°","270°","120°"]],["円の接線と接点を通る半径のなす角は?","90°",["45°","60°","180°","0°"]],["同じ弧に対する中心角は円周角の?","2倍",["半分","3倍","等しい"]]]);return C(i,"INSCRIBED","円の性質",n,s,r,{sol:s})}),F("PYTHAGORAS",3,10,(i,e)=>{const t=[[3,4,5],[5,12,13],[6,8,10],[8,15,17],[9,12,15]];if(e===0){const[o,c,l]=i.pick(t);return C(i,"PYTHAGORAS","斜辺 x は?","",l,[o+c,l+1,l-1,Math.round(o*c/2)],{fig:Vc(String(o),String(c),"x"),sol:`√(${o}² + ${c}²) = ${l}`})}if(e===1){const[o,c]=[i.int(1,6),i.int(1,6)];return C(i,"PYTHAGORAS","斜辺 x は?","",Kt(o*o+c*c),[String(o+c),Kt(o*o+c*c+1),Kt(Math.abs(o*o-c*c)||2),String(o*o+c*c),Kt(o*c*2)],{fig:Vc(String(o),String(c),"x"),sol:`√(${o}² + ${c}²) = ${Kt(o*o+c*c)}`})}const n=i.int(2,6),[s,r,a]=i.pick([[`1辺${n}の正方形の対角線`,Kt(2,n),[String(n*2),Kt(3,n),String(n*n),Kt(2,n*2)]],[`1辺${n*2}の正三角形の高さ`,Kt(3,n),[String(n),Kt(2,n),Kt(3,n*2),String(n*2)]],[`原点と点(${n}, ${n+1})の距離`,Kt(n*n+(n+1)**2),[String(n*2+1),Kt(n*n+(n+1)**2+1),Kt(2*n+1),String(n*n+(n+1)**2)]],[`たて${n}・横${n}・高さ${n}の立方体の対角線`,Kt(3,n),[Kt(2,n),String(n*3),Kt(3,n*n),String(n*n)]]]);return C(i,"PYTHAGORAS","長さを求めよ",s,r,a,{sol:r})}),F("SAMPLING",3,7,(i,e)=>{if(e===0){const[r,a]=i.pick([["学校の健康診断",!0],["国勢調査",!0],["テレビの視聴率調査",!1],["缶詰の品質検査",!1],["世論調査",!1],["入学試験",!0],["電球の寿命の検査",!1]]);return Pn("SAMPLING","全数調査? 標本調査?",r,"全数調査","標本調査",a,a?"全数調査":"標本調査")}const t=i.int(3,9)*100,n=i.pick([20,40,50]),s=i.int(2,n/5);return C(i,"SAMPLING","全体ではおよそ何個?",`${t}個から${n}個を取り出すと不良品が${s}個`,t*s/n,[t-s,t*s/n+10,t*s/100,t/n,s*10].map(Math.round),{unit:"個",sol:`${t} × ${s}/${n} = ${t*s/n}個`})}),F("CLEVER",2,6,(i,e)=>{const t=i.int(1,4);if(e===0)return C(i,"CLEVER","くふうして計算",`${100+t} × ${100-t}`,1e4-t*t,[1e4+t*t,1e4-t,1e4-2*t,1e4],{sol:`100² − ${t}² = ${1e4-t*t}`});if(e===1)return C(i,"CLEVER","くふうして計算",`${100-t}²`,(100-t)**2,[1e4-t*t,1e4+t*t,(100-t)**2+100,1e4-100*t],{sol:`100² − 2×100×${t} + ${t}² = ${(100-t)**2}`});const n=100-2*t;return C(i,"CLEVER",`x = ${n} のときの値`,`x² + ${4*t}x + ${4*t*t}`,1e4,[n*n,1e4+4*t*t,9600,1e4-4*t],{sol:`(x + ${2*t})² = 100² = 10000`})})],eh=[Qf,jf,th],io=(i,e,t,n)=>i===0?e:i===1?t:n,Ke=i=>i<=1?1:i*Ke(i-1),ys=(i,e)=>Ke(i)/Ke(i-e),Ne=(i,e)=>Ke(i)/(Ke(e)*Ke(i-e)),Be=(i,e,t)=>_n([{coef:i,pow:2},{coef:e,pow:1},{coef:t,pow:0}]),Os=(i,e)=>`(${Lt([[i,"x"],[e,""]])})`,Rt=(i,e)=>`(${typeof i=="number"?S(i):i}, ${typeof e=="number"?S(e):e})`;function le(i,e,t,n){const[s,r,a]=i.pick(n);return C(i,e,t,s,r,a,{sol:s.includes("=")||s.length>16?r:`${s} = ${r}`})}const Qs={sin:{0:"0",30:"1/2",45:"1/√2",60:"√3/2",90:"1",120:"√3/2",135:"1/√2",150:"1/2",180:"0"},cos:{0:"1",30:"√3/2",45:"1/√2",60:"1/2",90:"0",120:"−1/2",135:"−1/√2",150:"−√3/2",180:"−1"},tan:{0:"0",30:"1/√3",45:"1",60:"√3",120:"−√3",135:"−1",150:"−1/√3",180:"0"}},nh=[...new Set([...Object.values(Qs.sin),...Object.values(Qs.cos),...Object.values(Qs.tan)])],Hc=i=>i.startsWith("−")?i.slice(1):i==="0"?"1":`−${i}`;function ih(i,e){const t=i.pick(["sin","cos","tan"]),n=Object.keys(Qs[t]).map(Number).filter(o=>e===0?o<=90:!0),s=i.pick(n),r=Qs[t][s],a=i.shuffle(nh.filter(o=>o!==r&&o!==Hc(r))).slice(0,2);return C(i,"TRIG","値を求めよ",`${t} ${s}°`,r,[Hc(r),...a])}function sh(i,e,t){const n=$i(5);return zt(n.base,n.plot(s=>i*(s-e)**2+t),hi(...n.at(e,t),cn,4))}const rh=[F("EXPAND",1,5,(i,e)=>{const[t,n,s,r]=[i.int(2,4),ct(i,5),i.int(1,3),ct(i,5)];if(e===0)return C(i,"EXPAND","展開せよ",`${Os(t,n)}${Os(s,r)}`,Be(t*s,t*r+n*s,n*r),[Be(t*s,t*r-n*s,n*r),Be(t*s,n+r,n*r),Be(t+s,t*r+n*s,n*r),Be(t*s,t*r+n*s,-n*r),Be(t*s,t*r+n*s,n+r)]);if(e===1)return C(i,"EXPAND","展開せよ",`${Os(t,n)}²`,Be(t*t,2*t*n,n*n),[Be(t*t,t*n,n*n),Be(t*t,2*t*n,-n*n),Be(t,2*t*n,n*n),Be(t*t,0,n*n),Be(t*t,-2*t*n,n*n)]);const a=Math.abs(n);return C(i,"EXPAND","展開せよ",`(x + ${a})(x² − ${a}x + ${a*a})`,`x³ + ${a**3}`,[`x³ − ${a**3}`,`x³ + ${a*a}`,`x³ + ${3*a}x + ${a**3}`,`x³ + ${a}x² + ${a**3}`],{sol:`x³ + ${a**3}`})}),F("TASUKI",3,9,(i,e)=>{const t=i.pick(e===0?[2,3]:[2,3,5]),[n,s]=[ct(i,5),ct(i,5)],r=e===2?i.pick([2,3]):1;if(di(t,Math.abs(n))!==1||di(r,Math.abs(s))!==1||t===r&&n===s)return C(i,"TASUKI","因数分解せよ","2x² + 7x + 3","(2x + 1)(x + 3)",["(2x + 3)(x + 1)","(2x − 1)(x − 3)","(x + 1)(x + 3)","2(x + 1)(x + 3)"],{sol:"(2x + 1)(x + 3)"});const a=(o,c,l,u)=>`${Os(o,c)}${Os(l,u)}`;return C(i,"TASUKI","因数分解せよ",Be(t*r,t*s+n*r,n*s),a(t,n,r,s),[a(t,s,r,n),a(t,-n,r,-s),a(t,n,r,-s),a(t,-n,r,s),a(r,n,t,s)].filter(o=>o!==a(t,n,r,s)),{sol:a(t,n,r,s)})}),F("REAL",1,5,(i,e)=>{const[t,n]=[i.int(2,9),i.int(2,9)];if(e===0)return C(i,"REAL","値を求めよ",`|${S(-t)}| + |${n} − ${n+t}|`,2*t,[0,t,2*t+n,t-n,2*t+1]);if(e===1)return le(i,"REAL","値を求めよ",[[`√((−${t})²)`,String(t),[`−${t}`,`±${t}`,String(t*t),`√${t}`]],["0.333… を分数で","1/3",["3/10","33/100","1/30","3/100"]],["0.999… の値","1",["0.9","9/10","99/100","0"]],[`|x| = ${t} の解`,`x = ±${t}`,[`x = ${t}`,`x = −${t}`,`x = ${t*t}`,"解なし"]],[`|x| < ${t} の解`,`−${t} < x < ${t}`,[`x < ${t}`,`x < −${t}, ${t} < x`,`x > −${t}`,`0 < x < ${t}`]]]);const[s,r]=i.pick([[3,2],[5,3],[5,2],[7,5],[6,5]]);return C(i,"REAL","分母を有理化せよ",`1/(√${s} + √${r})`,s-r===1?`√${s} − √${r}`:`(√${s} − √${r})/${s-r}`,[`√${s} + √${r}`,`(√${s} + √${r})/${s+r}`,`√${s-r}`,`1/√${s+r}`,`(√${s} − √${r})/${s+r}`],{sol:s-r===1?`√${s} − √${r}`:`(√${s} − √${r})/${s-r}`})}),F("INEQUALITY",2,7,(i,e)=>{const t=ct(i,6),n=i.int(2,5)*(e===0?1:-1),s=ct(i,9),r=i.chance(.5),a=n<0,o=(l,u)=>`x ${u?">":"<"} ${S(l)}`,c=o(t,r!==a);return C(i,"INEQUALITY","不等式を解け",`${Lt([[n,"x"],[s,""]])} ${r?">":"<"} ${S(n*t+s)}`,c,[o(t,r===a),o(-t,r),o(-t,!r),o(t+1,r!==a),o(t-1,r===a)],{sol:a?`負の数で割ると向きが変わる → ${c}`:c})}),F("SET",2,7,(i,e)=>{const[t,n,s]=[i.int(3,12),i.int(2,8),i.int(3,12)];if(e===0)return C(i,"SET","n(A ∪ B) は?","",t+n+s,[t+s,t+n*2+s,n,t+n],{fig:Oc(String(t),String(n),String(s)),sol:`${t} + ${n} + ${s} = ${t+n+s}`});if(e===1)return C(i,"SET","n(A ∩ B) は?",`n(A) = ${t+n}、n(B) = ${s+n}、n(A ∪ B) = ${t+n+s}`,n,[t+s,n+1,n-1,t+n+s,Math.abs(t-s)||9],{sol:`${t+n} + ${s+n} − ${t+n+s} = ${n}`});const r=i.int(2,9);return C(i,"SET","A にも B にも属さない要素は何個?",`全体 ${t+n+s+r}個`,r,[t+s,n,r+n,r+1,t+n+s],{fig:Oc(String(t),String(n),String(s),"?"),sol:`${t+n+s+r} − ${t+n+s} = ${r}`})}),F("LOGIC",3,9,(i,e)=>{if(e===0)return le(i,"LOGIC","命題「p ⇒ q」について",[["逆は?","q ⇒ p",["p̄ ⇒ q̄","q̄ ⇒ p̄","p ⇒ q̄"]],["裏は?","p̄ ⇒ q̄",["q ⇒ p","q̄ ⇒ p̄","p̄ ⇒ q"]],["対偶は?","q̄ ⇒ p̄",["q ⇒ p","p̄ ⇒ q̄","q̄ ⇒ p"]],["真偽が必ず一致するのは?","対偶",["逆","裏","否定"]]]);if(e===1){const[r,a,o]=i.pick([["x = 2 ⇒ x² = 4",!0,"真"],["x² = 4 ⇒ x = 2",!1,"偽(反例 x = −2)"],["x > 3 ⇒ x > 1",!0,"真"],["x > 1 ⇒ x > 3",!1,"偽(反例 x = 2)"],["ab = 0 ⇒ a = 0",!1,"偽(反例 a = 1, b = 0)"],["n が 4 の倍数 ⇒ n は偶数",!0,"真"],["x + y が偶数 ⇒ x, y はともに偶数",!1,"偽(反例 x = y = 1)"],["正方形 ⇒ ひし形",!0,"真"]]);return Pn("LOGIC","命題の真偽は?",r,"真","偽",a,o)}const t=["必要十分条件","必要条件だが十分条件でない","十分条件だが必要条件でない","必要条件でも十分条件でもない"],[n,s]=i.pick([["x = 2 は x² = 4 であるための",2],["x² = 4 は x = 2 であるための",1],["x > 0 は x² > 0 であるための",2],["△ABC が正三角形であることは二等辺三角形であるための",2],["x = y は x² = y² であるための",2],["ab > 0 は a > 0 かつ b > 0 であるための",1],["x + y > 0 は xy > 0 であるための",3],["2x = 6 は x = 3 であるための",0]]);return C(i,"LOGIC","何条件?",n,t[s],t,{sol:t[s]})}),F("VERTEX",3,8,(i,e)=>{const[t,n]=[ct(i,4),ct(i,4)],s=e===2?i.pick([2,-1,-2]):1,r=[Rt(-t,n),Rt(t,-n),Rt(n,t),Rt(-t,-n),Rt(t,n+1)];return e===0?C(i,"VERTEX","頂点の座標は?",`y = (x${Re(-t)})²${Re(n)}`,Rt(t,n),r,{sol:Rt(t,n)}):e===1?C(i,"VERTEX","頂点の座標は?",`y = ${Be(1,-2*t,t*t+n)}`,Rt(t,n),r,{sol:`y = (x${Re(-t)})²${Re(n)} より ${Rt(t,n)}`}):C(i,"VERTEX","軸の方程式は?",`y = ${Be(s,-2*s*t,s*t*t+n)}`,`x = ${S(t)}`,[`x = ${S(-t)}`,`x = ${S(2*t)}`,`y = ${S(n)}`,`x = ${S(n===t?n+1:n)}`,`x = ${S(t+1)}`],{sol:`x = ${S(t)}`})}),F("QGRAPH",4,9,i=>{const e=i.pick([1,-1]),[t,n]=[i.int(-2,2),i.int(-2,2)],s=(r,a,o)=>`y = ${r<0?"−":""}${a===0?"x²":`(x${Re(-a)})²`}${o===0?"":Re(o)}`;return C(i,"QGRAPH","グラフの式は?","",s(e,t,n),[s(-e,t,n),s(e,-t||1,n),s(e,t,-n||1),s(e,n===t?t+1:n,t===n?n-1:t),s(-e,-t||2,n)],{fig:sh(e,t,n),sol:s(e,t,n)})}),F("QMAXMIN",5,10,(i,e)=>{const[t,n]=[i.int(-2,3),ct(i,5)];if(e===0){const h=i.pick([1,2,-1,-2]);return C(i,"QMAXMIN",h>0?"最小値は?":"最大値は?",`y = ${he(h)}(x${Re(-t)})²${Re(n)}`,S(n),[S(t),S(-n),S(n+h),S(-t),"なし"],{sol:`x = ${S(t)} で ${S(n)}`})}const s=t-i.int(1,2),r=t+i.int(2,3),a=h=>(h-t)**2+n;if(e===1)return C(i,"QMAXMIN",`${S(s)} ≦ x ≦ ${S(r)} での最大値`,`y = (x${Re(-t)})²${Re(n)}`,S(Math.max(a(s),a(r))),[S(n),S(Math.min(a(s),a(r))),S(Math.max(a(s),a(r))+1),S(a(r+1))],{sol:`x = ${S(a(s)>a(r)?s:r)} で最大`});const[o,c]=[i.int(-5,5),i.int(-4,6)],l=o*o-4*c,u=l>0?"2個":l===0?"1個":"0個";return C(i,"QMAXMIN","x軸との共有点の個数は?",`y = ${Be(1,o,c)}`,u,["0個","1個","2個","3個"],{sol:`D = ${S(l)} より ${u}`})}),F("QINEQ",5,10,(i,e)=>{let[t,n]=[i.int(-5,4),i.int(-4,6)];t===n&&(n+=2),[t,n]=[Math.min(t,n),Math.max(t,n)];const s=Be(1,-(t+n),t*n),r=`${S(t)} < x < ${S(n)}`,a=`x < ${S(t)}, ${S(n)} < x`;if(e<2){const o=e===0?!0:i.chance(.5);return C(i,"QINEQ","2次不等式を解け",`${s} ${o?"<":">"} 0`,o?r:a,[o?a:r,`${S(-n)} < x < ${S(-t)}`,`x < ${S(-n)}, ${S(-t)} < x`,`x < ${S(n)}`,`x > ${S(t)}`],{sol:`(x${Re(-t)})(x${Re(-n)}) より ${o?r:a}`})}return le(i,"QINEQ","2次不等式を解け",[["x² + 1 > 0","すべての実数",["解なし","x > 1","x < −1, 1 < x","x ≠ 0"]],["x² + 1 < 0","解なし",["すべての実数","−1 < x < 1","x < −1","x = 0"]],["(x − 2)² > 0","2 以外のすべての実数",["すべての実数","解なし","x > 2","x = 2"]],["(x − 2)² ≦ 0","x = 2",["解なし","すべての実数","x ≦ 2","2 以外のすべての実数"]]])}),F("TRIG",2,8,ih),F("TRIGREL",4,9,(i,e)=>{const[t,n,s]=i.pick([[3,4,5],[5,12,13],[8,15,17]]);return e===0?C(i,"TRIGREL","θ が鋭角のとき cos θ は?",`sin θ = ${t}/${s}`,rt(n,s),[rt(t,s),rt(t,n),rt(s,n),rt(n,t),rt(s-t,s)],{sol:`sin²θ + cos²θ = 1 より ${rt(n,s)}`}):e===1?C(i,"TRIGREL","θ が鈍角のとき cos θ は?",`sin θ = ${t}/${s}`,`−${n}/${s}`,[rt(n,s),`−${t}/${s}`,`−${t}/${n}`,rt(t,n)],{sol:`鈍角では cos θ < 0 → −${n}/${s}`}):le(i,"TRIGREL","等しいものは?",[["sin(90° − θ)","cos θ",["sin θ","−cos θ","−sin θ","tan θ"]],["cos(90° − θ)","sin θ",["cos θ","−cos θ","−sin θ","tan θ"]],["sin(180° − θ)","sin θ",["−sin θ","cos θ","−cos θ","tan θ"]],["cos(180° − θ)","−cos θ",["cos θ","sin θ","−sin θ","tan θ"]],["tan(180° − θ)","−tan θ",["tan θ","1/tan θ","−1/tan θ","sin θ"]],["1 + tan²θ","1/cos²θ",["1/sin²θ","cos²θ","sin²θ","1"]]])}),F("SINECOS",5,10,(i,e)=>{if(e===0){const a=i.int(2,8);return C(i,"SINECOS","外接円の半径 R は?",`a = ${a}、A = 30°`,a,[a*2,a/2,a*4,a+1].map(o=>String(o)),{sol:`a/sin A = 2R より R = ${a}`})}if(e===1){const[a,o]=i.pick([[3,4],[2,3],[4,5],[3,5],[5,8],[3,8]]),c=a*a+o*o-a*o;return C(i,"SINECOS","a の長さは?",`b = ${a}、c = ${o}、A = 60°`,Kt(c),[Kt(a*a+o*o),Kt(a*a+o*o+a*o),String(a+o),Kt(c+1),String(c)],{sol:`a² = ${a}² + ${o}² − 2·${a}·${o}·cos 60° = ${c}`})}const[t,n]=[i.int(2,6)*2,i.int(3,9)],s=i.pick([30,150,90]),r=s===90?t*n/2:t*n/4;return C(i,"SINECOS","△ABC の面積は?",`b = ${t}、c = ${n}、A = ${s}°`,String(r),[String(t*n),String(t*n/2===r?t*n*2:t*n/2),String(r+1),`${t*n/4}√3`],{sol:`1/2 · ${t} · ${n} · sin ${s}° = ${r}`})}),F("DATA",3,9,(i,e)=>{if(e===0){const t=[[[1,2,3,4,5],3,2],[[2,4,6,8],5,5],[[2,4,4,4,5,5,7,9],5,4],[[3,3,5,7,7],5,3.2],[[1,5,5,9],5,8],[[4,6,8],6,2.6667]],[n,,s]=i.pick(t.filter(r=>Number.isInteger(r[2])));return C(i,"DATA","分散は?",n.join("、"),s,[s+1,s*2,Math.round(Math.sqrt(s)*10)/10===Math.sqrt(s)?Math.sqrt(s):s+2,s-1],{sol:`偏差の2乗の平均 = ${s}`})}if(e===1){const t=i.int(0,2),n=()=>i.next(),s=Array.from({length:16},()=>{const a=.08+n()*.84,o=(n()-.5)*.24;return[a,t===0?Math.min(.95,Math.max(.05,a+o)):t===1?Math.min(.95,Math.max(.05,1-a+o)):.08+n()*.84]}),r=["正の相関","負の相関","相関はほとんどない"][t];return C(i,"DATA","この散布図の相関は?","",r,["正の相関","負の相関","相関はほとんどない","完全な比例"],{fig:Cf(s),sol:r})}return le(i,"DATA","データの分析",[["標準偏差は分散の何?","正の平方根",["2乗","半分","逆数","2倍"]],["相関係数 r のとりうる範囲は?","−1 ≦ r ≦ 1",["0 ≦ r ≦ 1","−1 < r < 1","r ≧ 0","すべての実数"]],["分散 9 のときの標準偏差は?","3",["81","4.5","9","√3"]],["全データに 5 を足すと分散は?","変わらない",["5 増える","25 増える","5 倍になる"]],["全データを 2 倍すると標準偏差は?","2 倍になる",["4 倍になる","変わらない","2 増える"]],["第1四分位数から第3四分位数までの幅は?","四分位範囲",["範囲","分散","標準偏差","中央値"]]])})];function ah(i,e){const t=Math.min(170/i,100/e),n=120-i*t/2,s=70+e*t/2,r=[];for(let a=0;a<=i;a++)r.push(jt(n+a*t,s,n+a*t,s-e*t));for(let a=0;a<=e;a++)r.push(jt(n,s-a*t,n+i*t,s-a*t));return r.push(hi(n,s,cn,5),hi(n+i*t,s-e*t,Gt,5),Wt(n-12,s+4,"A",13,cn),Wt(n+i*t+12,s-e*t-2,"B",13,Gt)),zt(...r)}const Fs=i=>{let e=0;for(let t=1;t<=i;t++)i%t===0&&e++;return e},oh=[F("PERM",1,6,(i,e)=>{const t=i.int(4,io(e,5,7,8)),n=i.int(2,3);if(e===0)return C(i,"PERM","値を求めよ",`${t}!`,Ke(t),[Ke(t-1),Ke(t)/2,t*t,Ke(t)+t,Ke(t+1)]);const s=e===1||i.chance(.5);return C(i,"PERM","値を求めよ",`${Wi(t)}${s?"P":"C"}${Wi(n)}`,s?ys(t,n):Ne(t,n),[s?Ne(t,n):ys(t,n),t*n,t**n,(s?ys(t,n):Ne(t,n))+t,Ke(n)])}),F("ARRANGE",3,9,(i,e)=>{const t=i.int(4,6);if(e===0)return i.chance(.5)?C(i,"ARRANGE","並び方は何通り?",`${t}人が円形に並ぶ`,Ke(t-1),[Ke(t),Ke(t-1)/2,t*t,Ke(t-2)],{unit:"通り",sol:`(${t} − 1)! = ${Ke(t-1)}通り`}):C(i,"ARRANGE","何通り?",`${t}人から委員長と副委員長を選ぶ`,ys(t,2),[Ne(t,2),t*2,t*t,Ke(t)],{unit:"通り",sol:`${t} × ${t-1} = ${ys(t,2)}通り`});if(e===1){const[n,s]=[i.int(2,4),i.int(2,3)];return C(i,"ARRANGE","A から B への最短経路は何通り?","",Ne(n+s,s),[n*s,Ne(n+s,s)+n,(n+1)*(s+1),2**(n+s),Ne(n+s,s)-s],{fig:ah(n,s),unit:"通り",sol:`${n+s}C${s} = ${Ne(n+s,s)}通り`})}return le(i,"ARRANGE","何通り?",[["a, a, b, b の4文字の並べ方","6通り",["24通り","12通り","4通り","8通り"]],["a, a, a, b, b の5文字の並べ方","10通り",["120通り","20通り","30通り","60通り"]],["3種類の文字から重複を許して4個並べる","81通り",["12通り","64通り","24通り","7通り"]],["6人を3人ずつ A, B の2部屋に分ける","20通り",["10通り","36通り","120通り","9通り"]],["異なる5個の玉でネックレス(じゅず順列)を作る","12通り",["24通り","120通り","60通り","10通り"]],["0, 1, 2, 3 から異なる3個で作る3けたの整数","18通り",["24通り","12通り","6通り","27通り"]]])}),F("PROBABILITY",3,10,(i,e)=>{if(e===0)return le(i,"PROBABILITY","確率は?",[["コインを3回投げて少なくとも1回表","7/8",["1/8","3/8","1/2","3/4"]],["さいころを2回投げて少なくとも1回は6","11/36",["1/36","1/3","25/36","1/6"]],["さいころ2個の目の和が偶数","1/2",["1/4","1/3","5/12","7/12"]],["52枚から1枚引いてハートまたは絵札","11/26",["25/52","1/4","3/13","1/2"]]]);if(e===1){const t=i.int(3,5),n=i.int(1,t-1);return C(i,"PROBABILITY","確率は?",`コインを${t}回投げて表がちょうど${n}回`,rt(Ne(t,n),2**t),[rt(1,2**t),rt(n,t),rt(Ne(t,n)+1,2**t),rt(Ne(t,n),2**(t-1)),"1/2"],{sol:`${Wi(t)}C${Wi(n)} × (1/2)${ze(t)} = ${rt(Ne(t,n),2**t)}`})}return le(i,"PROBABILITY","確率・期待値",[["さいころ1個の出る目の期待値","7/2",["3","4","21","6"]],["赤3白2から1個ずつ2回(戻さない)。1個目が赤のとき2個目も赤","1/2",["3/5","3/10","2/5","9/25"]],["当たり2本を含む5本のくじを2人が順に引く。2人目が当たる確率","2/5",["1/4","1/5","1/10","1/2"]],["100円が確率1/2、0円が確率1/2 の期待値","50円",["100円","25円","0円","75円"]],["さいころを3回投げて1の目がちょうど1回","25/72",["1/6","5/72","1/2","25/216"]],["P(A) = 1/2、P(A ∩ B) = 1/6 のとき P_A(B)","1/3",["1/12","2/3","1/6","3"]]])}),F("INTEGER",2,8,(i,e)=>{if(e===0){const n=i.pick([12,18,24,36,48,60,72,100]);return C(i,"INTEGER","正の約数の個数は?",String(n),Fs(n),[Fs(n)+2,Fs(n)-2,Fs(n)+1,n/2],{unit:"個",sol:`${n}の正の約数は${Fs(n)}個`})}if(e===1){const n=i.pick([6,7,12,13,17]),[s,r]=[i.int(3,9),i.int(3,9)];return di(s,r)!==1?C(i,"INTEGER","余りは?","100 を 7 で割る",2,[1,3,4,5,6]):C(i,"INTEGER","最大公約数は?(互除法)",`${n*s} と ${n*r}`,n,[1,n*2,n+1,Math.abs(n*s-n*r)||n*3,n-1],{sol:`最大公約数 = ${n}`})}const t=i.int(5,31);return i.chance(.5)?C(i,"INTEGER","10進法で表すと?",`${t.toString(2)}₍₂₎`,t,[t+1,t-1,t*2,Number(t.toString(2))%97,t+2]):C(i,"INTEGER","2進法で表すと?",String(t),t.toString(2),[(t+1).toString(2),(t-1).toString(2),(t*2).toString(2),(t+2).toString(2),t.toString(3)],{sol:`${t} = ${t.toString(2)}₍₂₎`})}),F("MODULO",4,9,(i,e)=>{const t=i.pick([5,7]);if(e===0){const[n,s]=[i.int(10,40),i.int(10,40)];return C(i,"MODULO",`${t} で割った余りは?`,`${n} × ${s}`,n*s%t,[0,1,2,3,4,5,6].filter(r=>r<t))}if(e===1){const n=i.int(5,12);let s=1;for(let r=0;r<n;r++)s=s*2%t;return C(i,"MODULO",`${t} で割った余りは?`,`2${ze(n)}`,s,[0,1,2,3,4,5,6].filter(r=>r<t))}return le(i,"MODULO","整数解 (x, y) の1つは?",[["3x + 5y = 1","(2, −1)",["(1, 1)","(−2, 1)","(3, −2)","(1, −1)"]],["2x + 7y = 1","(4, −1)",["(3, −1)","(−4, 1)","(1, 1)","(2, −1)"]],["5x − 3y = 1","(2, 3)",["(1, 2)","(3, 2)","(2, −3)","(1, 1)"]],["7x + 4y = 1","(−1, 2)",["(1, −2)","(1, 2)","(2, −3)","(−2, 3)"]]])}),F("GEOMETRY",3,9,(i,e)=>{if(e===0)return le(i,"GEOMETRY","三角形の五心",[["3本の中線の交点は?","重心",["内心","外心","垂心","傍心"]],["3つの内角の二等分線の交点は?","内心",["重心","外心","垂心","傍心"]],["3辺の垂直二等分線の交点は?","外心",["重心","内心","垂心","傍心"]],["3頂点から対辺への垂線の交点は?","垂心",["重心","内心","外心","傍心"]],["重心は中線を頂点から何対何に分ける?","2:1",["1:1","1:2","3:1","3:2"]],["内接円の中心は?","内心",["重心","外心","垂心"]]]);if(e===1){const[r,a]=i.pick([[3,2],[4,3],[5,3],[2,1],[5,4]]),o=1,c=(r+a)*o;return C(i,"GEOMETRY","BD の長さは?",`AB = ${r*2}、AC = ${a*2}、BC = ${c}。AD は∠A の二等分線`,r*o,[a*o,c/2,r*o+1,c-r].map(l=>String(l)),{sol:`BD:DC = AB:AC = ${r}:${a} より ${r*o}`})}const[t,n,s]=i.pick([[2,6,3],[3,8,4],[2,9,3],[4,6,3],[3,10,5]]);return i.chance(.5)?C(i,"GEOMETRY","PD の長さは?(方べきの定理)",`PA = ${t}、PB = ${n}、PC = ${s}`,t*n/s,[t+n-s,t*n/s+1,t*n,s].map(String),{sol:`PA·PB = PC·PD より ${t*n/s}`}):Pn("GEOMETRY","三角形はできる?",`3辺 ${t}、${s}、${n}`,"できる","できない",t+s>n&&t+n>s&&s+n>t,"最大辺 < 他の2辺の和 が条件")})];function ch(i){const e=$i(4,!1),t=Math.PI/2;return zt(e.base,e.plot(n=>2*i(n*t)),Wt(e.at(2,0)[0],80,"π",10),Wt(e.at(-2,0)[0],80,"−π",10),Wt(128,e.at(0,2)[1],"1",10))}function lh(i,e){const t=i.int(2,4),n=ct(i,5),s=i.int(-6,6),r=ct(i,9),a=[{coef:n,pow:t},{coef:s,pow:1},{coef:r,pow:0}],o=_n([{coef:t*n,pow:t-1},{coef:s,pow:0}]);return C(i,"DERIV","微分せよ",`f(x) = ${_n(a)}`,o,[_n([{coef:n,pow:t-1},{coef:s,pow:0}]),_n([{coef:t*n,pow:t-1},{coef:s,pow:0},{coef:r,pow:0}]),_n([{coef:t*n,pow:t},{coef:s,pow:0}]),_n([{coef:t*n,pow:t-1},{coef:s,pow:1}]),_n([{coef:t*n,pow:t-1},{coef:-s,pow:0}]),_n([{coef:t*n+1,pow:t-1},{coef:s,pow:0}])],{sol:`f′(x) = ${o}`})}function uh(i,e){const t=i.pick(e===0?[2,10]:[2,3,5,10]),n={2:6,3:4,5:3,10:4},s=i.int(e===0?1:-2,n[t]),r=s>=0?String(t**s):`(1/${t**-s})`;return C(i,"LOG","値を求めよ",`log${Wi(t)} ${r}`,S(s),[s+1,s-1,-s,s+2,s*2,t**Math.abs(s)].map(S))}const fh=[F("BINOMIAL",2,7,(i,e)=>{const t=i.int(4,6),n=i.int(1,t-1);if(e===0)return C(i,"BINOMIAL",`a${ze(t-n)}b${ze(n)} の係数は?`.replace("¹",""),`(a + b)${ze(t)}`,Ne(t,n),[Ne(t,n)+t,t,ys(t,n),Ne(t,n)*2,n*t]);const s=i.pick([2,3]);if(e===1)return C(i,"BINOMIAL",`x${ze(t-n)} の係数は?`.replace("¹",""),`(x + ${s})${ze(t)}`,Ne(t,n)*s**n,[Ne(t,n),Ne(t,n)*s,s**n,Ne(t,n)*s**(t-n)===Ne(t,n)*s**n?Ne(t,n)*s**n+s:Ne(t,n)*s**(t-n),t*s]);const r=i.int(1,4);return C(i,"BINOMIAL","展開せよ",`(x + ${r})³`,`x³ + ${3*r}x² + ${3*r*r}x + ${r**3}`,[`x³ + ${r**3}`,`x³ + ${3*r}x² + ${3*r}x + ${r**3}`,`x³ + ${r}x² + ${r*r}x + ${r**3}`,`x³ + ${3*r}x² + ${3*r*r}x + ${3*r}`,`x³ + ${3*r*r}x² + ${3*r}x + ${r**3}`].filter(a=>a!==`x³ + ${3*r}x² + ${3*r*r}x + ${r**3}`),{sol:`x³ + ${3*r}x² + ${3*r*r}x + ${r**3}`})}),F("COMPLEX",1,6,(i,e)=>{const t=(o,c)=>c===0?S(o):o===0?`${he(c)}i`:`${S(o)}${c<0?" − ":" + "}${Math.abs(c)===1?"":Math.abs(c)}i`;if(e===0)return le(i,"COMPLEX","値を求めよ",[["i²","−1",["1","i","−i","0"]],["i³","−i",["i","1","−1","0"]],["i⁴","1",["−1","i","−i","4i"]],["√(−9)","3i",["−3","±3","−3i","9i"]],["√(−2) × √(−8)","−4",["4","4i","−4i","16"]]]);const[n,s,r,a]=[ct(i,4),ct(i,4),ct(i,4),ct(i,4)];return e===1?C(i,"COMPLEX","計算せよ",`(${t(n,s)}) + (${t(r,a)})`,t(n+r,s+a),[t(n+r,s-a),t(n-r,s+a),t(n*r,s*a),t(n+a,s+r),t(n+r+1,s+a)]):i.chance(.5)?C(i,"COMPLEX","計算せよ",`(${t(n,s)})(${t(r,a)})`,t(n*r-s*a,n*a+s*r),[t(n*r+s*a,n*a+s*r),t(n*r,s*a),t(n*r-s*a,n*a-s*r),t(n*r-s*a+1,n*a+s*r),t(n*a+s*r,n*r-s*a)]):C(i,"COMPLEX","共役な複素数は?",t(n,s),t(n,-s),[t(-n,s),t(-n,-s),t(s,n),t(n,s+1)],{sol:t(n,-s)})}),F("ROOTS",3,8,(i,e)=>{const[t,n]=[ct(i,7),ct(i,6)],s=`${Be(1,-t,n)} = 0 の解を α, β`;if(e===0){const l=i.chance(.5);return C(i,"ROOTS",l?"α + β は?":"αβ は?",s,S(l?t:n),[S(l?-t:-n),S(l?n:t),S(t+n),S(t*n),"0"],{sol:`解と係数の関係より ${S(l?t:n)}`})}if(e===1)return C(i,"ROOTS","α² + β² は?",s,S(t*t-2*n),[S(t*t),S(t*t+2*n),S(t*t-n),S(t*t-4*n),S(2*t)],{sol:`(α + β)² − 2αβ = ${S(t*t-2*n)}`});const[r,a]=[i.int(-5,5),i.int(-3,7)],o=r*r-4*a,c=o>0?"異なる2つの実数解":o===0?"重解":"異なる2つの虚数解";return C(i,"ROOTS","解の種類は?",`${Be(1,r,a)} = 0`,c,["異なる2つの実数解","重解","異なる2つの虚数解","解なし"],{sol:`D = ${S(o)} より ${c}`})}),F("REMAINDER",3,8,(i,e)=>{const[t,n,s]=[ct(i,3),ct(i,5),ct(i,6)],r=ct(i,2),a=_n([{coef:1,pow:3},{coef:t,pow:2},{coef:n,pow:1},{coef:s,pow:0}]),o=d=>d**3+t*d*d+n*d+s;if(e<2)return C(i,"REMAINDER",`x${Re(-r)} で割った余りは?`,`P(x) = ${a}`,S(o(r)),[S(o(-r)),S(s),S(o(r)+1),S(-o(r)),S(1+t+n+s===o(r)?o(r)+3:1+t+n+s)],{sol:`P(${S(r)}) = ${S(o(r))}`});const c=ct(i,3),l=-(c**3+t*c*c+n*c),u=_n([{coef:1,pow:3},{coef:t,pow:2},{coef:n,pow:1},{coef:l,pow:0}]),h=d=>`x${Re(-d)}`,f=[-3,-2,-1,1,2,3].filter(d=>d**3+t*d*d+n*d+l!==0);return f.length<3?C(i,"REMAINDER","x − 1 で割った余りは?","P(x) = x³ − 2x + 5",4,[5,3,-4,6]):C(i,"REMAINDER","因数であるものは?",`P(x) = ${u}`,h(c),f.map(h),{sol:`P(${S(c)}) = 0 より ${h(c)}`})}),F("POINTS",2,8,(i,e)=>{const[t,n]=[i.int(-4,4),i.int(-4,4)];if(e===0){const[d,_]=i.pick([[3,4],[4,3],[6,8],[5,12],[8,6]]);return C(i,"POINTS","2点間の距離は?",`${Rt(t,n)} と ${Rt(t+d,n+_)}`,Math.hypot(d,_),[d+_,Math.hypot(d,_)+1,Math.abs(d-_)||2,d*_])}const[s,r]=[t+i.int(1,4)*2,n+ct(i,3)*2];if(e===1)return C(i,"POINTS","中点の座標は?",`${Rt(t,n)} と ${Rt(s,r)}`,Rt((t+s)/2,(n+r)/2),[Rt(t+s,n+r),Rt((s-t)/2,(r-n)/2),Rt((n+r)/2,(t+s)/2),Rt((t+s)/2+1,(n+r)/2)],{sol:Rt((t+s)/2,(n+r)/2)});const[a,o]=i.pick([[1,2],[2,1]]),[c,l]=[i.int(-3,3),i.int(-3,3)],[u,h]=[c+3*i.int(1,3),l+3*ct(i,2)],f=(d,_)=>Rt((o*c+a*d)/(a+o),(o*l+a*_)/(a+o));return C(i,"POINTS",`${a}:${o} に内分する点は?`,`A${Rt(c,l)}、B${Rt(u,h)}`,f(u,h),[Rt((a*c+o*u)/3,(a*l+o*h)/3),Rt((c+u)/2,(l+h)/2),Rt(u-c,h-l),Rt((o*c+a*u)/3+1,(o*l+a*h)/3)],{sol:f(u,h)})}),F("LINE",3,9,(i,e)=>{const t=ct(i,4),[n,s]=[ct(i,4),ct(i,4)],r=(h,f)=>`y = ${Lt([[h,"x"],[f,""]])}`;if(e===0)return C(i,"LINE","直線の方程式は?",`点${Rt(n,s)}を通り傾き ${S(t)}`,r(t,s-t*n),[r(t,s+t*n),r(-t,s-t*n),r(t,s),r(t,n-t*s===s-t*n?s+1:n-t*s),r(t,s-t*n+1)],{sol:r(t,s-t*n)});if(e===1){const h=i.chance(.5);return C(i,"LINE",h?"垂直な直線の傾きは?":"平行な直線の傾きは?",r(t,s),h?rt(-1,t):S(t),[S(t),S(-t),rt(1,t),rt(-1,t),S(s===t?t+1:s)],{sol:h?`傾きの積が −1 → ${rt(-1,t)}`:`傾きが等しい → ${S(t)}`})}const[a,o]=i.pick([[3,4],[4,3],[5,12],[6,8]]),c=Math.hypot(a,o),l=i.int(1,4),u=l*c-a*n-o*s;return C(i,"LINE","点と直線の距離は?",`点${Rt(n,s)}、直線 ${Lt([[a,"x"],[o,"y"],[u,""]])} = 0`,l,[l*c,l+1,l+2,Math.abs(u)===l?l+3:Math.abs(u)],{sol:`|${a}·${so(n)} + ${o}·${so(s)}${Re(u)}| / ${c} = ${l}`})}),F("CIRCLE",3,8,(i,e)=>{const[t,n]=[ct(i,4),ct(i,4)],s=i.int(2,6),r=`(x${Re(-t)})² + (y${Re(-n)})² = ${s*s}`;if(e===0)return C(i,"CIRCLE","円の中心は?",r,Rt(t,n),[Rt(-t,-n),Rt(n,t),Rt(-t,n),Rt(t,-n)],{sol:Rt(t,n)});if(e===1)return C(i,"CIRCLE","円の半径は?",r,s,[s*s,s*2,s+1,s*s*2]);const a=`x² + y²${Re(-2*t)}x${Re(-2*n)}y${Re(t*t+n*n-s*s)} = 0`.replace(/([+−]) 1([xy])/g,"$1 $2");return C(i,"CIRCLE","中心と半径は?",a,`中心${Rt(t,n)} 半径${s}`,[`中心${Rt(-t,-n)} 半径${s}`,`中心${Rt(t,n)} 半径${s*s}`,`中心${Rt(2*t,2*n)} 半径${s}`,`中心${Rt(-t,-n)} 半径${s*s}`],{sol:`中心${Rt(t,n)} 半径${s}`})}),F("RADIAN",1,6,(i,e)=>{const t=[[30,1,6],[45,1,4],[60,1,3],[90,1,2],[120,2,3],[135,3,4],[150,5,6],[180,1,1],[210,7,6],[270,3,2],[300,5,3],[360,2,1]],[n,s,r]=i.pick(t),a=t.map(([,c,l])=>Nt(c,l));if(e===0)return C(i,"RADIAN","弧度法で表すと?",`${n}°`,Nt(s,r),a,{sol:`${n}° = ${Nt(s,r)}`});if(e===1)return C(i,"RADIAN","度数法で表すと?",Nt(s,r),n,t.map(c=>c[0]),{unit:"°",sol:`${Nt(s,r)} = ${n}°`});const o=i.int(2,6)*r;return C(i,"RADIAN","おうぎ形の弧の長さは?",`半径 ${o}、中心角 ${Nt(s,r)}`,Nt(o*s,r),[Nt(o*o*s,2*r),Nt(o*s,2*r),Nt(s,r),Nt(o*s*2,r),Nt(o,1)],{sol:`rθ = ${Nt(o*s,r)}`})}),F("TRIGFUNC",3,9,(i,e)=>{if(e===0)return le(i,"TRIGFUNC","値を求めよ",[["sin(7π/6)","−1/2",["1/2","−√3/2","√3/2","−1"]],["cos(2π/3)","−1/2",["1/2","−√3/2","√3/2","0"]],["tan(3π/4)","−1",["1","−√3","√3","0"]],["sin(3π/2)","−1",["1","0","−1/2","1/2"]],["cos(π)","−1",["1","0","−1/2","π"]],["sin(−π/6)","−1/2",["1/2","−√3/2","√3/2","−1"]],["cos(5π/3)","1/2",["−1/2","√3/2","−√3/2","0"]]]);if(e===1){const t=[["y = sin x",Math.sin],["y = cos x",Math.cos],["y = −sin x",r=>-Math.sin(r)],["y = sin 2x",r=>Math.sin(2*r)],["y = −cos x",r=>-Math.cos(r)]],[n,s]=i.pick(t);return C(i,"TRIGFUNC","グラフの式は?","",n,t.map(r=>r[0]),{fig:ch(s),sol:n})}return le(i,"TRIGFUNC","三角関数",[["y = sin 2x の周期","π",["2π","4π","π/2","1/2"]],["y = cos(x/2) の周期","4π",["π","2π","π/2","2"]],["y = tan x の周期","π",["2π","π/2","4π","なし"]],["y = 3 sin x + 1 の最大値","4",["3","1","2","−2"]],["sin 75° (加法定理)","(√6 + √2)/4",["(√6 − √2)/4","(√3 + 1)/2","√3/2","(√2 + 1)/4"]],["cos 75° (加法定理)","(√6 − √2)/4",["(√6 + √2)/4","(√3 − 1)/2","1/4","(√2 − 1)/4"]],["sin θ = 3/5 のとき cos 2θ","7/25",["24/25","−7/25","9/25","16/25"]],["sin 2θ を sin θ, cos θ で表すと","2 sin θ cos θ",["sin²θ − cos²θ","2 sin θ","sin θ cos θ","cos²θ − sin²θ"]],["sin x + √3 cos x の最大値(合成)","2",["1 + √3","√3","4","1"]]])}),F("EXPONENT",1,7,(i,e)=>{if(e===0){const[n,s]=[i.int(2,5),i.int(2,5)],r=i.pick([2,3,5]);return C(i,"EXPONENT","指数法則",`${r}${ze(n)} × ${r}${ze(s)} = ${r}▢`,n+s,[n*s,n-s,n+s+1,n**2],{sol:`${r}${ze(n+s)}`})}if(e===1)return le(i,"EXPONENT","値を求めよ",[["8^(2/3)","4",["16/3","2","64","16"]],["27^(1/3)","3",["9","81","27/3","1/3"]],["4^(3/2)","8",["6","16","2","64"]],["(1/2)⁻³","8",["1/8","−8","−6","6"]],["2⁻²","1/4",["−4","4","−1/4","1/2"]],["5⁰","1",["0","5","1/5","−1"]],["16^(−1/2)","1/4",["−4","4","−8","1/8"]]]);const t=i.int(3,7);return i.chance(.5)?C(i,"EXPONENT","方程式を解け",`2ˣ = ${2**t}`,t,[t+1,t-1,2**t/2,t*2],{pre:"x = ",sol:`x = ${t}`}):C(i,"EXPONENT","不等式を解け",`(1/2)ˣ > 1/${2**t}`,`x < ${t}`,[`x > ${t}`,`x < −${t}`,`x > −${t}`,`x < ${2**t}`],{sol:`底が1より小さいので向きが変わる → x < ${t}`})}),F("LOG",2,8,(i,e)=>e<2?uh(i,e):le(i,"LOG","値を求めよ",[["log₂ 6 + log₂ (4/3)","3",["2","4","log₂ 22/3","8"]],["log₃ 54 − log₃ 2","3",["2","27","log₃ 52","4"]],["log₂ 3 × log₃ 8","3",["2","8/3","log₂ 24","6"]],["log₁₀ 2 + log₁₀ 5","1",["log₁₀ 7","10","0","2"]],["log₄ 8","3/2",["2","1/2","2/3","4"]],["log₂ √2","1/2",["2","1","√2","−1/2"]],["2¹⁰ の桁数 (log₁₀ 2 = 0.3010)","4桁",["3桁","5桁","10桁","2桁"]]])),F("DERIV",3,9,(i,e)=>{if(e===0)return lh(i);const[t,n]=[ct(i,3),ct(i,5)],s=ct(i,3);if(e===1)return C(i,"DERIV",`x = ${S(s)} での接線の傾き`,`f(x) = ${Be(t,n,0)}`,S(2*t*s+n),[S(t*s*s+n*s),S(2*t*s),S(2*t+n),S(-(2*t*s+n)),S(2*t*s+n+1)],{sol:`f′(x) = ${Lt([[2*t,"x"],[n,""]])} より ${S(2*t*s+n)}`});const r=i.int(1,3);return i.chance(.5)?C(i,"DERIV","極大値をとる x は?",`f(x) = x³ − ${3*r*r}x`,S(-r),[S(r),"0",S(-r*r),S(3*r),S(-3*r)],{pre:"x = ",sol:`f′(x) = 3(x + ${r})(x − ${r}) より x = −${r}`}):C(i,"DERIV","極小値は?",`f(x) = x³ − ${3*r*r}x`,S(-2*r**3),[S(2*r**3),"0",S(-(r**3)),S(r),S(-3*r*r)],{sol:`f(${r}) = ${S(-2*r**3)}`})}),F("INTEGRAL",5,10,(i,e)=>{const[t,n]=[i.int(1,4),ct(i,5)];if(e===0)return C(i,"INTEGRAL","不定積分せよ",`∫ (${Lt([[2*t,"x"],[n,""]])}) dx`,`${Lt([[t,"x²"],[n,"x"]])} + C`,[`${Lt([[2*t,"x²"],[n,"x"]])} + C`,`${Lt([[t,"x²"],[n,""]])} + C`,`${2*t} + C`,`${Lt([[t,"x²"],[-n,"x"]])} + C`,`${Lt([[t,"x"],[n,""]])} + C`],{sol:`${Lt([[t,"x²"],[n,"x"]])} + C`});const s=i.int(1,3);if(e===1)return C(i,"INTEGRAL","定積分の値は?",`∫[0→${s}] 3x² dx`,s**3,[3*s*s,s**3+1,6*s,s*s],{sol:`[x³] = ${s**3}`});const r=i.int(1,3);return C(i,"INTEGRAL","放物線と x軸で囲まれた面積",`y = x(x − ${6*r})`,(6*r)**3/6,[(6*r)**3/3,(6*r)**2,(6*r)**3/6+6,(6*r)**3/12],{sol:`(β − α)³/6 = ${(6*r)**3/6}`})})],so=i=>i<0?`(${S(i)})`:String(i),hh=[F("NEXT",1,5,(i,e)=>{const t=io(e,[[[3,7,11,15,19],"公差 4 の等差数列"],[[2,6,18,54,162],"公比 3 の等比数列"],[[50,44,38,32,26],"公差 −6 の等差数列"],[[1,2,4,8,16],"公比 2 の等比数列"]],[[[1,4,9,16,25],"平方数"],[[1,1,2,3,5,8],"前2項の和(フィボナッチ)"],[[1,3,6,10,15],"三角数(階差が 2, 3, 4, …)"],[[2,3,5,8,12],"階差が 1, 2, 3, 4"]],[[[1,8,27,64,125],"立方数"],[[2,5,10,17,26],"n² + 1"],[[1,2,6,24,120],"n!"],[[1,3,7,15,31],"2ⁿ − 1"],[[0,3,8,15,24],"n² − 1"]]),[n,s]=i.pick(t),r=n[n.length-1],a=n.slice(0,-1);return C(i,"NEXT","次の項は?",`${a.join(", ")}, ▢`,r,[r+1,r-1,r+2,a[a.length-1]*2,r+(r-a[a.length-1])],{sol:`${s} → ${r}`})}),F("ARITHMETIC",1,6,(i,e)=>{const t=ct(i,9),n=ct(i,6),s=i.int(6,12),r=`初項 ${S(t)}、公差 ${S(n)} の等差数列`;if(e===0)return C(i,"ARITHMETIC",`第${s}項は?`,r,S(t+(s-1)*n),[S(t+s*n),S(t*s),S(t+(s-2)*n),S((t+n)*s),S(-(t+(s-1)*n))]);if(e===1)return C(i,"ARITHMETIC",`初項から第${s}項までの和は?`,r,S(s*(2*t+(s-1)*n)/2),[S(s*(2*t+(s-1)*n)),S(s*(t+(s-1)*n)/1),S(s*(2*t+s*n)/2),S(t+(s-1)*n),S(s*(2*t+(s-1)*n)/2+s)],{sol:`n(2a + (n − 1)d)/2 = ${S(s*(2*t+(s-1)*n)/2)}`});const[a,o]=[i.int(2,4),i.int(6,9)];return C(i,"ARITHMETIC","公差は?",`第${a}項が ${S(t+(a-1)*n)}、第${o}項が ${S(t+(o-1)*n)}`,S(n),[S(-n),S(n+1),S(n-1),S(n*2),S((o-a)*n)],{sol:`(${S(t+(o-1)*n)} − ${so(t+(a-1)*n)}) ÷ ${o-a} = ${S(n)}`})}),F("GEOMETRIC",2,7,(i,e)=>{const t=i.int(1,4),n=i.pick(e===0?[2,3]:[2,3,-2]),s=i.int(4,6),r=`初項 ${t}、公比 ${S(n)} の等比数列`,a=t*(n**s-1)/(n-1);return e===0?C(i,"GEOMETRIC",`第${s}項は?`,r,S(t*n**(s-1)),[S(t*n**s),S(t*n*(s-1)),S(t*n**(s-2)),S(t+n*(s-1)),S(-t*n**(s-1))]):e===1?C(i,"GEOMETRIC",`初項から第${s}項までの和は?`,r,S(a),[S(t*n**s),S(t*n**(s-1)),S(a+t),S(a-1),S(t*(n**(s+1)-1)/(n-1))],{sol:`a(rⁿ − 1)/(r − 1) = ${S(a)}`}):C(i,"GEOMETRIC","公比は?(正の数)",`第2項が ${t*3}、第4項が ${t*27}`,3,[9,2,6,27,4],{sol:"r² = 9 より r = 3"})}),F("SIGMA",3,9,(i,e)=>{const t=i.int(4,io(e,10,6,8)),n=a=>`Σ[k=1→${t}] ${a===1?"k":a===2?"k²":""}`;if(e===0)return C(i,"SIGMA","値を求めよ",n(1),t*(t+1)/2,[t*(t+1),t*(t-1)/2,t*t,t*(t+1)/2+t],{sol:`n(n + 1)/2 = ${t*(t+1)/2}`});if(e===1)return C(i,"SIGMA","値を求めよ",n(2),t*(t+1)*(2*t+1)/6,[(t*(t+1)/2)**2,t*(t+1)*(2*t+1)/3,t**3,t*(t+1)*(2*t+1)/6+t],{sol:`n(n + 1)(2n + 1)/6 = ${t*(t+1)*(2*t+1)/6}`});const[s,r]=[i.int(2,4),ct(i,5)];return C(i,"SIGMA","値を求めよ",`Σ[k=1→${t}] (${Lt([[s,"k"],[r,""]])})`,S(s*t*(t+1)/2+r*t),[S(s*t*(t+1)/2+r),S(s*t*(t+1)+r*t),S(s*t*(t+1)/2-r*t),S(s*t*(t+1)/2+r*t+s)],{sol:`${s}·n(n + 1)/2 ${r<0?"−":"+"} ${Math.abs(r)}n = ${S(s*t*(t+1)/2+r*t)}`})}),F("RECURRENCE",5,10,(i,e)=>{const t=i.int(1,4),n=i.int(2,5),s=i.int(4,6);return e===0?C(i,"RECURRENCE",`a${Wi(s)} は?`,`a₁ = ${t}、aₙ₊₁ = aₙ + ${n}`,t+(s-1)*n,[t+s*n,t*n**(s-1),t+(s-2)*n,(t+n)*s]):e===1?C(i,"RECURRENCE",`a${Wi(s)} は?`,`a₁ = ${t}、aₙ₊₁ = ${n===5?2:n}aₙ`,t*(n===5?2:n)**(s-1),[t*(n===5?2:n)**s,t+(s-1)*n,t*(n===5?2:n)*(s-1),t*(n===5?2:n)**(s-2)]):le(i,"RECURRENCE","一般項 aₙ は?",[["a₁ = 1、aₙ₊₁ = 2aₙ + 1","2ⁿ − 1",["2ⁿ + 1","2ⁿ⁻¹","2n − 1","n²"]],["a₁ = 2、aₙ₊₁ = 3aₙ − 2","3ⁿ⁻¹ + 1",["3ⁿ − 1","2·3ⁿ⁻¹","3n − 1","3ⁿ + 1"]],["a₁ = 1、aₙ₊₁ = aₙ + 2n","n² − n + 1",["n²","2n − 1","n² + n − 1","n(n + 1)/2"]],["a₁ = 3、aₙ₊₁ = aₙ + 4","4n − 1",["4n + 3","3n + 4","3·4ⁿ⁻¹","4n + 1"]],["a₁ = 5、aₙ₊₁ = 2aₙ","5·2ⁿ⁻¹",["5·2ⁿ","2·5ⁿ⁻¹","2n + 3","10n − 5"]]])}),F("INDUCTION",4,8,i=>le(i,"INDUCTION","数学的帰納法・数列",[["帰納法で最初に示すのは?","n = 1 のとき成り立つ",["n = k のとき成り立つ","n = k + 1 のとき成り立つ","すべての n で成り立つ"]],["帰納法の第2段階で仮定するのは?","n = k のとき成り立つ",["n = 1 のとき成り立つ","n = k + 1 のとき成り立つ","n = 0 のとき成り立つ"]],["帰納法の第2段階で示すのは?","n = k + 1 のとき成り立つ",["n = 1 のとき成り立つ","n = k のとき成り立つ","n = 2k のとき成り立つ"]],["階差数列 bₙ を使うと n ≧ 2 で aₙ は?","a₁ + Σ[k=1→n−1] bₖ",["a₁ + Σ[k=1→n] bₖ","Σ[k=1→n] bₖ","a₁ × bₙ","bₙ − bₙ₋₁"]],["和 Sₙ から n ≧ 2 で aₙ を求める式は?","Sₙ − Sₙ₋₁",["Sₙ + Sₙ₋₁","Sₙ₊₁ − Sₙ₋₁","Sₙ/n","Sₙ − S₁"]]])),F("EXPECTATION",3,9,(i,e)=>{if(e===0){const u=[1,2,3],h=i.pick([[1,2,1],[2,1,1],[1,1,2],[1,3,0],[3,0,1]]),f=rt(u[0]*h[0]+u[1]*h[1]+u[2]*h[2],4);return C(i,"EXPECTATION","期待値 E(X) は?",`X = 1, 2, 3 の確率が ${h.map(d=>rt(d,4)).join(", ")}`,f,["2","3/2","5/2","7/4","9/4","3","1"],{sol:`E(X) = ${f}`})}const[t,n]=[i.int(2,4),ct(i,5)],[s,r]=[i.int(2,6),i.int(1,4)];if(e===1){const u=i.chance(.5);return C(i,"EXPECTATION",u?`E(${t}X${Re(n)}) は?`:`V(${t}X${Re(n)}) は?`,`E(X) = ${s}、V(X) = ${r}`,u?S(t*s+n):t*t*r,u?[S(t*s),S(t*t*s+n),S(s+n),S(t*s-n)]:[t*r,t*t*r+n,t*r+n,r,t*t*r+1],{sol:u?`aE(X) + b = ${S(t*s+n)}`:`a²V(X) = ${t*t*r}`})}const[a,o,c]=i.pick([[100,1,2],[180,1,6],[72,1,3],[400,1,5],[50,1,2],[90,1,3]]),l=i.chance(.5);return C(i,"EXPECTATION",l?"平均は?":"分散は?",`二項分布 B(${a}, ${o}/${c})`,rt(l?a*o:a*o*(c-o),l?c:c*c),[rt(a*o*(c-o),c*c),rt(a*o,c),rt(a,c*c),String(a),rt(a*(c-o),c)],{sol:l?`np = ${rt(a*o,c)}`:`np(1 − p) = ${rt(a*o*(c-o),c*c)}`})}),F("NORMAL",5,10,(i,e)=>{if(e===0){const[t,n]=[i.int(4,7)*10,i.pick([5,10])],s=i.pick([-2,-1,1,2,3]);return C(i,"NORMAL","標準化した Z の値は?",`平均 ${t}、標準偏差 ${n} の正規分布で X = ${t+s*n}`,S(s),[S(-s),S(s*n),S(s+1),S(t+s*n-t),rt(1,s)],{sol:`Z = (X − m)/σ = ${S(s)}`})}return le(i,"NORMAL","統計的な推測",[["正規分布で m − σ ≦ X ≦ m + σ となる確率は約?","68%",["50%","95%","99.7%","34%"]],["正規分布で m − 2σ ≦ X ≦ m + 2σ となる確率は約?","95%",["68%","99.7%","90%","75%"]],["母標準偏差 σ、大きさ n の標本平均の標準偏差は?","σ/√n",["σ/n","σ√n","σ²/n","σ"]],["信頼度95%の信頼区間で使う値は?","1.96",["1.64","2.58","0.95","3"]],["正規分布のグラフが左右対称になる軸は?","x = m (平均)",["x = σ","x = 0","x = m + σ","y = m"]],["母集団の一部を取り出して調べる調査は?","標本調査",["全数調査","追跡調査","面接調査"]],["大きさ 100、母標準偏差 20 の標本平均の標準偏差","2",["0.2","20","200","5"]],["仮説検定で最初に立てる「差がない」とする仮説は?","帰無仮説",["対立仮説","作業仮説","有意水準"]]])})],dh=[F("LIMSEQ",1,6,(i,e)=>{const[t,n,s]=[i.int(1,6),ct(i,5),i.int(1,4)];let r=ct(i,5);return t*r===n*s&&(r=-r),e===0?C(i,"LIMSEQ","極限値は? (n → ∞)",`(${Lt([[t,"n"],[n,""]])})/(${Lt([[s,"n"],[r,""]])})`,rt(t,s),[rt(n,r),rt(s,t)===rt(t,s)?"0":rt(s,t),"0","∞",rt(t+n,s+r)],{sol:`最高次の係数の比 → ${rt(t,s)}`}):e===1?le(i,"LIMSEQ","極限は? (n → ∞)",[["(1/2)ⁿ","0",["1/2","1","∞","振動する"]],["2ⁿ","∞",["0","2","1","振動する"]],["(−1)ⁿ","振動する",["0","1","−1","∞"]],["(−1/3)ⁿ","0",["−1/3","振動する","−∞","1"]],["n²/(n + 1)","∞",["1","0","2","1/2"]],["(3ⁿ + 2ⁿ)/3ⁿ","1",["0","5/3","∞","2/3"]]]):le(i,"LIMSEQ","極限値は? (n → ∞)",[["√(n + 1) − √n","0",["1","1/2","∞","√2"]],["√(n² + n) − n","1/2",["0","1","∞","2"]],["(2n² + 1)/(n² − n)","2",["1","∞","0","−1"]],["(1 + 1/n)ⁿ","e",["1","∞","2","0"]],["sin n / n","0",["1","振動する","∞","−1"]]])}),F("SERIES",3,8,(i,e)=>{const[t,n]=i.pick([[1,2],[1,3],[2,3],[1,4],[3,4],[1,5]]),s=i.int(1,5);return e===0?C(i,"SERIES","無限等比級数の和は?",`初項 ${s}、公比 ${t}/${n}`,rt(s*n,n-t),[rt(s*n,n+t),rt(s*t,n),rt(s,n-t),"∞",rt(s*n,t)],{sol:`a/(1 − r) = ${rt(s*n,n-t)}`}):e===1?C(i,"SERIES","無限等比級数の和は?",`初項 ${s}、公比 −${t}/${n}`,rt(s*n,n+t),[rt(s*n,n-t),rt(-s*n,n+t),rt(s,n+t),"発散する"],{sol:`a/(1 − r) = ${rt(s*n,n+t)}`}):le(i,"SERIES","無限級数",[["無限等比級数が収束する公比 r の条件 (初項 ≠ 0)","−1 < r < 1",["r < 1","−1 ≦ r ≦ 1","r > 0","r ≠ 1"]],["0.999… = 0.9 + 0.09 + … の和","1",["0.9","9/10","0.99","10/9"]],["1 + 1/2 + 1/3 + 1/4 + … は?","発散する",["2 に収束","e に収束","π に収束","1 に収束"]],["Σ aₙ が収束するとき lim aₙ は?","0",["1","∞","決まらない","和と同じ"]]])}),F("LIMFUNC",3,9,(i,e)=>{const t=i.int(1,5);if(e===0)return C(i,"LIMFUNC",`極限値は? (x → ${t})`,`(x² − ${t*t})/(x − ${t})`,2*t,[t,0,t*t,2*t+1],{sol:`x + ${t} → ${2*t}`});const n=i.int(2,6);return e===1?i.chance(.5)?C(i,"LIMFUNC","極限値は? (x → 0)",`sin ${n}x / x`,n,[1,0,rt(1,n),n*n],{sol:`sin θ/θ → 1 より ${n}`}):C(i,"LIMFUNC","極限値は? (x → 0)",`sin ${n}x / sin ${n+1}x`,rt(n,n+1),[rt(n+1,n),"1","0",String(n)],{sol:rt(n,n+1)}):le(i,"LIMFUNC","極限値は?",[["(1 − cos x)/x²  (x → 0)","1/2",["0","1","2","∞"]],["(eˣ − 1)/x  (x → 0)","1",["0","e","∞","1/e"]],["log(1 + x)/x  (x → 0)","1",["0","e","∞","1/e"]],["(1 + x)^(1/x)  (x → 0)","e",["1","0","∞","1/e"]],["tan x / x  (x → 0)","1",["0","∞","π","1/2"]],["x sin(1/x)  (x → 0)","0",["1","∞","振動する","−1"]],["1/x  (x → +0)","∞",["0","−∞","1","振動する"]]])}),F("DERIVBASIC",2,7,(i,e)=>{if(e===0)return le(i,"DERIVBASIC","導関数は?",[["(sin x)′","cos x",["−cos x","sin x","−sin x","tan x"]],["(cos x)′","−sin x",["sin x","cos x","−cos x","tan x"]],["(eˣ)′","eˣ",["x eˣ⁻¹","eˣ⁻¹","1/eˣ","log x"]],["(log x)′","1/x",["x","eˣ","log x / x","−1/x²"]],["(tan x)′","1/cos²x",["1/sin²x","−1/cos²x","cos²x","tan²x"]],["(√x)′","1/(2√x)",["2√x","1/√x","√x/2","−1/(2√x)"]],["(1/x)′","−1/x²",["1/x²","log x","−1/x","−2/x³"]],["(aˣ)′","aˣ log a",["x aˣ⁻¹","aˣ","aˣ/log a","aˣ log x"]]]);const t=i.int(2,5);return e===1?i.pick([()=>C(i,"DERIVBASIC","微分せよ",`sin ${t}x`,`${t} cos ${t}x`,[`cos ${t}x`,`−${t} cos ${t}x`,`${t} sin ${t}x`,`cos ${t}x / ${t}`],{sol:`${t} cos ${t}x`}),()=>C(i,"DERIVBASIC","微分せよ",`e^(${t}x)`,`${t} e^(${t}x)`,[`e^(${t}x)`,`${t}x e^(${t}x)`,`e^(${t}x)/${t}`,`${t} eˣ`],{sol:`${t} e^(${t}x)`}),()=>C(i,"DERIVBASIC","微分せよ",`(2x + 1)${ze(t)}`,`${2*t}(2x + 1)${ze(t-1)}`.replace("¹",""),[`${t}(2x + 1)${ze(t-1)}`.replace("¹",""),`${2*t}(2x + 1)${ze(t)}`,`${t}(2x)${ze(t-1)}`.replace("¹",""),`2(2x + 1)${ze(t-1)}`.replace("¹","")],{sol:`${2*t}(2x + 1)${ze(t-1)}`.replace("¹","")}),()=>C(i,"DERIVBASIC","微分せよ",`log(${t}x)`,"1/x",[`1/(${t}x)`,`${t}/x`,`${t} log x`,`1/${t}`],{sol:`${t}/(${t}x) = 1/x`})])():le(i,"DERIVBASIC","微分せよ",[["x eˣ","(x + 1) eˣ",["x eˣ","eˣ","(x − 1) eˣ","x² eˣ"]],["x log x","log x + 1",["log x","1/x","1","x/log x"]],["x sin x","sin x + x cos x",["cos x","x cos x","sin x − x cos x","sin x + cos x"]],["sin²x","2 sin x cos x",["2 sin x","cos²x","2 cos x","−2 sin x cos x"]],["eˣ sin x","eˣ(sin x + cos x)",["eˣ cos x","eˣ(sin x − cos x)","eˣ sin x","2eˣ sin x"]],["sin x / x","(x cos x − sin x)/x²",["cos x","(sin x − x cos x)/x²","cos x / x","(x cos x + sin x)/x²"]],["log(x² + 1)","2x/(x² + 1)",["1/(x² + 1)","2x","2x log(x² + 1)","x/(x² + 1)"]],["e^(−x²)","−2x e^(−x²)",["e^(−x²)","−x² e^(−x²)","2x e^(−x²)","−2x eˣ"]]])}),F("INTEGBASIC",4,10,(i,e)=>e===0?le(i,"INTEGBASIC","不定積分は? (積分定数は省略)",[["∫ cos x dx","sin x",["−sin x","cos x","−cos x","tan x"]],["∫ sin x dx","−cos x",["cos x","sin x","−sin x","tan x"]],["∫ eˣ dx","eˣ",["x eˣ","eˣ/x","eˣ⁺¹/(x + 1)","log x"]],["∫ 1/x dx","log|x|",["−1/x²","1/x²","x log x","1"]],["∫ 1/cos²x dx","tan x",["−tan x","1/sin x","sin²x","−1/cos x"]],["∫ e^(2x) dx","e^(2x)/2",["2e^(2x)","e^(2x)","e^(2x)/x","x e^(2x)"]],["∫ √x dx","(2/3)x√x",["1/(2√x)","(3/2)x√x","x√x","2√x"]],["∫ sin 2x dx","−cos 2x / 2",["cos 2x / 2","−2 cos 2x","−cos 2x","sin²x / 2"]]]):e===1?le(i,"INTEGBASIC","定積分の値は?",[["∫[0→π] sin x dx","2",["0","1","π","−2"]],["∫[0→π/2] cos x dx","1",["0","π/2","2","−1"]],["∫[1→e] 1/x dx","1",["e","e − 1","0","1/e"]],["∫[0→1] eˣ dx","e − 1",["e","1","e + 1","1/e"]],["∫[0→π] cos x dx","0",["2","1","π","−2"]],["∫[0→1] 1/(1 + x²) dx","π/4",["π/2","1","log 2","1/2"]],["∫[0→1] 1/(1 + x) dx","log 2",["1","1/2","π/4","e"]]]):le(i,"INTEGBASIC","積分の応用",[["∫ x eˣ dx (部分積分)","(x − 1) eˣ",["(x + 1) eˣ","x eˣ","x² eˣ / 2","eˣ"]],["∫ log x dx (部分積分)","x log x − x",["1/x","x log x","(log x)²/2","x log x + x"]],["∫ x cos x dx (部分積分)","x sin x + cos x",["x sin x − cos x","x sin x","−x sin x","x² sin x / 2"]],["y = x (0 ≦ x ≦ 3) を x軸のまわりに回転した体積","9π",["3π","27π","9π/2","27π/2"]],["y = √x (0 ≦ x ≦ 4) を x軸のまわりに回転した体積","8π",["4π","16π","16π/3","2π"]],["y = sin x (0 ≦ x ≦ π) と x軸で囲まれた面積","2",["1","π","π/2","4"]],["∫ 2x(x² + 1)³ dx (置換積分)","(x² + 1)⁴/4",["(x² + 1)⁴","x²(x² + 1)³","(x² + 1)⁴/8","6x(x² + 1)²"]]])),F("CURVES",5,10,(i,e)=>{const t=i.int(1,4);if(e===0)return C(i,"CURVES","変曲点の x 座標は?",`y = x³ − ${3*t}x²`,t,[0,2*t,3*t,-t],{pre:"x = ",sol:`y″ = 6x − ${6*t} = 0 より x = ${t}`});const[n,s]=[ct(i,4),ct(i,4)],r=(a,o)=>`x = ${S(a)}, y = ${S(o)}`;return e===1?C(i,"CURVES","漸近線は?",`y = 1/(x${Re(-n)})${Re(s)}`,r(n,s),[r(-n,s),r(s,n),r(n,-s),r(0,0),r(n+1,s),r(-n,-s)],{sol:r(n,s)}):le(i,"CURVES","関数",[["y = 2x + 1 の逆関数","y = (x − 1)/2",["y = 2x − 1","y = (x + 1)/2","y = 1/(2x + 1)","y = x/2 − 1"]],["y = eˣ の逆関数","y = log x",["y = e⁻ˣ","y = 1/eˣ","y = x^e","y = −eˣ"]],["f(x) = x + 1, g(x) = x² のとき g(f(x))","(x + 1)²",["x² + 1","x²(x + 1)","x² + x + 1","2x + 1"]],["f(x) = x + 1, g(x) = x² のとき f(g(x))","x² + 1",["(x + 1)²","x²(x + 1)","x² + x + 1","2x + 1"]],["y″ > 0 の区間でのグラフは?","下に凸",["上に凸","増加","減少","一定"]],["f′(a) = 0 かつ f″(a) < 0 のとき x = a で?","極大",["極小","変曲点","不連続","最小"]],["y = (2x + 1)/(x − 1) の漸近線","x = 1, y = 2",["x = −1, y = 2","x = 1, y = 1","x = 2, y = 1","x = 1, y = −1"]]])})];function ph(i,e){const t=$i(5),[n,s]=t.at(0,0),[r,a]=t.at(i,e),o=Math.atan2(a-s,r-n),c=l=>[r-9*Math.cos(o+l),a-9*Math.sin(o+l)];return zt(t.base,jt(n,s,r,a,cn),Di([c(.45),[r,a],c(-.45)],cn))}function mh(i){const e=$i(5,!1),t=[e.plot(n=>3*Math.sqrt(Math.max(0,1-n*n/16)))+e.plot(n=>-3*Math.sqrt(Math.max(0,1-n*n/16))),e.plot(n=>n>=0?2*Math.sqrt(n):NaN)+e.plot(n=>n>=0?-2*Math.sqrt(n):NaN),e.plot(n=>Math.abs(n)>=2?1.5*Math.sqrt(n*n/4-1):NaN)+e.plot(n=>Math.abs(n)>=2?-1.5*Math.sqrt(n*n/4-1):NaN)];return zt(e.base,t[i])}const gh=[F("VECTOR",1,6,(i,e)=>{const[t,n,s,r]=[ct(i,5),ct(i,5),ct(i,5),ct(i,5)],a=`a = ${Rt(t,n)}、b = ${Rt(s,r)}`;if(e===0){const o=i.chance(.5),c=o?1:-1;return C(i,"VECTOR",o?"a + b の成分は?":"a − b の成分は?",a,Rt(t+c*s,n+c*r),[Rt(t-c*s,n-c*r),Rt(t*s,n*r),Rt(t+c*r,n+c*s),Rt(t+c*s+1,n+c*r)],{sol:Rt(t+c*s,n+c*r)})}if(e===1){const o=i.int(2,3);return C(i,"VECTOR",`${o}a − b の成分は?`,a,Rt(o*t-s,o*n-r),[Rt(o*t+s,o*n+r),Rt(o*(t-s),o*(n-r)),Rt(t-o*s,n-o*r),Rt(o*t-s,n-r)],{sol:Rt(o*t-s,o*n-r)})}return C(i,"VECTOR","大きさ |a| は?",`a = ${Rt(t,n)}`,Kt(t*t+n*n),[String(Math.abs(t)+Math.abs(n)),Kt(t*t+n*n+1),String(t*t+n*n),Kt(Math.abs(t*n)*2||3)],{sol:`√(${t*t} + ${n*n}) = ${Kt(t*t+n*n)}`})}),F("VECREAD",2,6,i=>{const[e,t]=[ct(i,4),ct(i,4)];return C(i,"VECREAD","このベクトルの成分は?","",Rt(e,t),[Rt(t,e),Rt(-e,t),Rt(e,-t),Rt(-e,-t),Rt(t,-e)],{fig:ph(e,t),sol:Rt(e,t)})}),F("DOT",2,8,(i,e)=>{const[t,n,s]=[ct(i,5),ct(i,5),ct(i,5)],r=ct(i,5);if(e===0)return C(i,"DOT","内積 a·b は?",`a = ${Rt(t,n)}、b = ${Rt(s,r)}`,S(t*s+n*r),[S(t*s-n*r),S(t*r+n*s),S((t+n)*(s+r)),S(t*s+n*r+1),S(-(t*s+n*r))]);if(e===1){const a=i.int(1,4),[o,c]=[i.int(1,3),i.int(1,3)];return C(i,"DOT","a ⊥ b となる x は?",`a = ${Rt(o*a,c)}、b = ${Rt(c,"x")}`,S(-o*a),[S(o*a),S(-c),S(c*c),S(-o*a-1),"0"],{pre:"x = ",sol:`a·b = 0 より x = ${S(-o*a)}`})}return le(i,"DOT","内積",[["|a| = 2、|b| = 3、なす角 60° のとき a·b","3",["6","3√3","5","1"]],["|a| = 4、|b| = 2、なす角 120° のとき a·b","−4",["4","−4√3","8","−8"]],["a = (1, 0)、b = (1, 1) のなす角","45°",["30°","60°","90°","0°"]],["a = (1, √3)、b = (√3, 1) のなす角","30°",["45°","60°","90°","0°"]],["|a| = 1、|b| = 2、a·b = 1 のとき |a + b|²","7",["5","9","3","6"]],["a·a は何に等しい?","|a|²",["|a|","0","2|a|","1"]]])}),F("POSITION",4,9,(i,e)=>{if(e===0){const[t,n]=i.pick([[1,2],[2,1],[1,3],[3,1],[2,3]]),s=(r,a)=>`(${he(r)}a + ${he(a)}b)/${t+n}`;return C(i,"POSITION",`線分 AB を ${t}:${n} に内分する点の位置ベクトル`,"A(a)、B(b)",s(n,t),[s(t,n),"(a + b)/2",`(${he(t)}a − ${he(n)}b)/${t+n}`,`${he(n)}a + ${he(t)}b`],{sol:s(n,t)})}return le(i,"POSITION","位置ベクトル",[["△ABC の重心の位置ベクトル","(a + b + c)/3",["(a + b + c)/2","a + b + c","(a + b)/2","(a + b − c)/3"]],["線分 AB の中点の位置ベクトル","(a + b)/2",["(a − b)/2","a + b","(b − a)/2","(a + b)/3"]],["ベクトル AB を位置ベクトルで表すと","b − a",["a − b","a + b","(a + b)/2","ab"]],["3点 A, B, C が一直線上にある条件","AC = k AB となる実数 k がある",["AB·AC = 0","|AB| = |AC|","AB + AC = 0"]],["点 P が直線 AB 上: OP = s a + t b で必要な条件","s + t = 1",["s = t","st = 1","s + t = 0","s − t = 1"]],["線分 AB を 2:1 に外分する点の位置ベクトル","−a + 2b",["2a − b","(a + 2b)/3","(2a + b)/3","a − 2b"]]])}),F("CPLANE",2,8,(i,e)=>{if(e===0){const[t,n,s]=i.pick([[3,4,5],[5,12,13],[6,8,10],[1,1,0],[1,2,0],[2,3,0]]);return C(i,"CPLANE","絶対値は?",`|${t} + ${n===1?"":n}i|`,s?String(s):Kt(t*t+n*n),[String(t+n),Kt(t*t+n*n+1),String(t*t+n*n),Kt(Math.abs(t*t-n*n)||2)],{sol:`√(${t}² + ${n}²) = ${s||Kt(t*t+n*n)}`})}return e===1?le(i,"CPLANE","偏角は? (0 ≦ θ < 2π)",[["1 + i","π/4",["π/2","π/3","3π/4","π/6"]],["i","π/2",["π","0","π/4","3π/2"]],["−1","π",["0","π/2","3π/2","−1"]],["1 + √3 i","π/3",["π/6","π/4","2π/3","π/2"]],["−1 + i","3π/4",["π/4","5π/4","π/2","7π/4"]],["√3 + i","π/6",["π/3","π/4","π/2","5π/6"]],["−i","3π/2",["π/2","π","0","7π/4"]]]):le(i,"CPLANE","複素数平面",[["複素数に i をかけると、原点のまわりに?","90° 回転",["180° 回転","45° 回転","実軸対称","2倍に拡大"]],["(1 + i)²","2i",["2","1 + 2i","−2","2 + 2i"]],["(cos θ + i sin θ)ⁿ (ド・モアブル)","cos nθ + i sin nθ",["cosⁿθ + i sinⁿθ","n cos θ + i n sin θ","cos θⁿ + i sin θⁿ"]],["(1 + i)⁴","−4",["4","4i","−4i","2"]],["共役な複素数は、複素数平面で何に関して対称?","実軸",["虚軸","原点","直線 y = x"]],["z の絶対値が 1 のとき z の共役は?","1/z",["z","−z","z²","−1/z"]],["1 の 3乗根のうち虚数のものを ω とすると ω² + ω + 1","0",["1","−1","3","ω"]]])}),F("CONIC",4,10,(i,e)=>{if(e===0){const n=i.int(0,2),s=["楕円","放物線","双曲線","円"];return C(i,"CONIC","この曲線は?","",s[n],s,{fig:mh(n),sol:s[n]})}if(e===1){const[n,s,r]=i.pick([[5,3,4],[5,4,3],[13,12,5],[13,5,12],[10,6,8]]),a=i.int(0,2);return a===0?C(i,"CONIC","楕円の焦点は?",`x²/${n*n} + y²/${s*s} = 1`,`(±${r}, 0)`,[`(0, ±${r})`,`(±${n}, 0)`,`(±${s}, 0)`,`(±${n+s}, 0)`],{sol:`√(${n*n} − ${s*s}) = ${r} より (±${r}, 0)`}):a===1?C(i,"CONIC","楕円の長軸の長さは?",`x²/${n*n} + y²/${s*s} = 1`,2*n,[n,2*s,n*n,n+s],{sol:`2a = ${2*n}`}):C(i,"CONIC","双曲線の漸近線は?",`x²/${n*n} − y²/${s*s} = 1`,`y = ±(${s}/${n})x`,[`y = ±(${n}/${s})x`,`y = ±${s}x`,`y = ±(${s*s}/${n*n})x`,`x = ±${n}`],{sol:`y = ±(${s}/${n})x`})}const t=i.int(1,5);return i.chance(.5)?C(i,"CONIC","放物線の焦点は?",`y² = ${4*t}x`,`(${t}, 0)`,[`(0, ${t})`,`(${4*t}, 0)`,`(−${t}, 0)`,`(${2*t}, 0)`],{sol:`y² = 4px の焦点は (p, 0) → (${t}, 0)`}):C(i,"CONIC","放物線の準線は?",`y² = ${4*t}x`,`x = −${t}`,[`x = ${t}`,`y = −${t}`,`x = −${4*t}`,`x = −${2*t}`],{sol:`x = −p → x = −${t}`})}),F("POLAR",5,10,(i,e)=>e===0?le(i,"POLAR","直交座標で表すと?",[["極座標 (2, π/3)","(1, √3)",["(√3, 1)","(2, √3)","(1, 2)","(√3, 2)"]],["極座標 (2, π/6)","(√3, 1)",["(1, √3)","(2, 1)","(√3, 2)","(1, 1)"]],["極座標 (√2, π/4)","(1, 1)",["(√2, √2)","(2, 2)","(1, √2)","(0, √2)"]],["極座標 (3, π/2)","(0, 3)",["(3, 0)","(0, −3)","(3, 3)","(−3, 0)"]],["極座標 (4, π)","(−4, 0)",["(4, 0)","(0, 4)","(0, −4)","(−4, −4)"]]]):e===1?le(i,"POLAR","極座標 (r, θ) で表すと?",[["直交座標 (0, 3)","(3, π/2)",["(3, 0)","(3, π)","(0, 3)","(9, π/2)"]],["直交座標 (1, 1)","(√2, π/4)",["(1, π/4)","(2, π/4)","(√2, π/2)","(√2, π/3)"]],["直交座標 (−2, 0)","(2, π)",["(−2, 0)","(2, 0)","(2, π/2)","(4, π)"]],["直交座標 (1, √3)","(2, π/3)",["(2, π/6)","(√3, π/3)","(4, π/3)","(2, π/4)"]]]):le(i,"POLAR","どんな図形?",[["x = cos t、y = sin t","円",["楕円","放物線","双曲線","直線"]],["x = 3 cos t、y = 2 sin t","楕円",["円","放物線","双曲線","直線"]],["x = t、y = t²","放物線",["円","楕円","双曲線","直線"]],["x = t + 1、y = 2t","直線",["円","楕円","放物線","双曲線"]],["極方程式 r = 2","円",["直線","放物線","楕円","らせん"]],["極方程式 θ = π/4","直線",["円","放物線","楕円","らせん"]],["極方程式 r = 2 cos θ","円",["直線","放物線","双曲線","楕円"]]]))],ss={k1:rh,ka:oh,k2:fh,kb:hh,k3:dh,kc:gh},xh=4;function vi(i){for(let e=1;e<=10;e++)for(;;){const t=i.filter(a=>a.lo<=e&&e<=a.hi),n=i.filter(a=>!t.includes(a));if(t.length>=xh||n.length===0)break;const s=a=>a.lo>e?a.lo-e:e-a.hi,r=n.reduce((a,o)=>s(o)<s(a)?o:a);r.lo>e?r.lo=e:r.hi=e}return i}const _h=[...qf.map((i,e)=>({id:`s${e+1}`,stage:"sho",label:`小${e+1}`,name:`小学${e+1}年`,items:vi(i)})),...eh.map((i,e)=>({id:`c${e+1}`,stage:"chu",label:`中${e+1}`,name:`中学${e+1}年`,items:vi(i)})),{id:"k1",stage:"ko",label:"数Ⅰ",name:"数学Ⅰ",items:vi(ss.k1)},{id:"ka",stage:"ko",label:"数A",name:"数学A",items:vi(ss.ka)},{id:"k2",stage:"ko",label:"数Ⅱ",name:"数学Ⅱ",items:vi(ss.k2)},{id:"kb",stage:"ko",label:"数B",name:"数学B",items:vi(ss.kb)},{id:"k3",stage:"ko",label:"数Ⅲ",name:"数学Ⅲ",items:vi(ss.k3)},{id:"kc",stage:"ko",label:"数C",name:"数学C",items:vi(ss.kc)}],Ti=12,ro=1,lu=10;function Wc(i,e){return Math.max(ro,Math.min(lu,i+(e?1:-1)))}function vh(i,e){return i.hi===i.lo?1:Math.max(0,Math.min(2,Math.round(2*(e-i.lo)/(i.hi-i.lo))))}const Mh=(i,e)=>i.items.filter(t=>t.lo<=e&&e<=t.hi);function Sh(i,e,t,n=[]){const s=Mh(e,t);if(s.length===0)throw new Error(`course ${e.id} has no item at level ${t}`);const r=s.filter(o=>!n.includes(o.id)),a=i.pick(r.length?r:s);return a.make(i,vh(a,t))}const ao=3e4,Xc=1e4,qc=800,Yc=1e3,uu=10;function Eh(i){return 100+20*(i-1)}function yh(i){return 20*Math.max(0,Math.min(i-1,10))}function bh(i,e,t){return Math.round(Math.floor(Math.max(i,0)/1e3)*uu*e/t)}function Th(i,e,t){return t?i===e?"S":i>=e-2?"A":i>=e-5?"B":"C":"D"}function Ah(i){switch(i.kind){case"factor":return{kind:"factor",n:i.n,collected:[]};case"reduce":return{kind:"reduce",num:i.num,den:i.den,collected:[]};case"sqrt":return{kind:"sqrt",coef:1,rad:i.rad};case"pair":return{kind:"pair",selected:[]}}}function Rh(i,e,t){if(i.kind==="factor"&&e.kind==="factor"){if(e.n%t!==0)return{state:e,result:"miss"};const n=e.n/t;return{state:{kind:"factor",n,collected:[...e.collected,t]},result:n===1?"done":"hit"}}if(i.kind==="reduce"&&e.kind==="reduce"){if(e.num%t!==0||e.den%t!==0)return{state:e,result:"miss"};const n={kind:"reduce",num:e.num/t,den:e.den/t,collected:[...e.collected,t]};return{state:n,result:di(n.num,n.den)===1?"done":"hit"}}if(i.kind==="sqrt"&&e.kind==="sqrt"){const n=t*t;if(e.rad%n!==0)return{state:e,result:"miss"};const s={kind:"sqrt",coef:e.coef*t,rad:e.rad/n};return{state:s,result:au(s.rad)?"done":"hit"}}if(i.kind==="pair"&&e.kind==="pair"){if(e.selected.includes(t))return{state:{kind:"pair",selected:e.selected.filter(o=>o!==t)},result:"select"};const n=[...e.selected,t];if(n.length<2)return{state:{kind:"pair",selected:n},result:"select"};const[s,r]=n.map(o=>i.tiles[o]),a=s+r===i.b&&s*r===i.c;return{state:{kind:"pair",selected:a?n:[]},result:a?"done":"miss"}}throw new Error(`tap state ${e.kind} does not match question ${i.kind}`)}const fu=42,Kc=2*Math.PI*fu;function wh(){const i=document.createElement("div");i.className="gauge";const e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"svg");t.setAttribute("viewBox","0 0 100 100");const n=o=>{const c=document.createElementNS(e,"circle");return c.setAttribute("cx","50"),c.setAttribute("cy","50"),c.setAttribute("r",String(fu)),c.setAttribute("class",o),t.appendChild(c),c};n("ring-track");const s=n("ring-arc");s.setAttribute("stroke-dasharray",String(Kc));const r=document.createElement("div");r.className="secs";const a=document.createElement("div");return a.className="secs-unit",a.textContent="SEC",i.append(t,r,a),{el:i,update(o){const c=Math.max(0,o),l=Math.min(1,c/ao);s.setAttribute("stroke-dashoffset",String(Kc*(1-l))),i.dataset.tone=c>15e3?"go":c>7e3?"warn":"danger",r.textContent=c<1e4?(c/1e3).toFixed(1):String(Math.floor(c/1e3)),r.classList.toggle("wide",c>=1e5)},flash(o){i.classList.remove("bonus","penalty","grant"),i.offsetWidth,i.classList.add(o)}}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nc="186",Ch=0,Zc=1,Ph=2,Gr=1,Lh=2,Ys=3,Yi=0,Mn=1,ai=2,ci=0,js=1,er=2,Jc=3,Qc=4,Ih=5,bs=100,Dh=101,Nh=102,Uh=103,$h=104,Oh=200,Fh=201,Bh=202,kh=203,hu=204,du=205,Gh=206,zh=207,Vh=208,Hh=209,Wh=210,Xh=211,qh=212,Yh=213,Kh=214,oo=0,co=1,lo=2,nr=3,uo=4,fo=5,ho=6,po=7,ic=0,Zh=1,Jh=2,Jn=0,pu=1,mu=2,gu=3,sc=4,xu=5,_u=6,vu=7,Mu=300,Ki=301,Ls=302,xa=303,_a=304,oa=306,Zr=1e3,oi=1001,mo=1002,Je=1003,Qh=1004,fr=1005,on=1006,va=1007,Xi=1008,An=1009,Su=1010,Eu=1011,ir=1012,rc=1013,Qn=1014,Yn=1015,jn=1016,ac=1017,oc=1018,sr=1020,yu=35902,bu=35899,Tu=1021,Au=1022,On=1023,pi=1026,qi=1027,Ru=1028,cc=1029,Zi=1030,lc=1031,uc=1033,zr=33776,Vr=33777,Hr=33778,Wr=33779,go=35840,xo=35841,_o=35842,vo=35843,Mo=36196,So=37492,Eo=37496,yo=37488,bo=37489,Jr=37490,To=37491,Ao=37808,Ro=37809,wo=37810,Co=37811,Po=37812,Lo=37813,Io=37814,Do=37815,No=37816,Uo=37817,$o=37818,Oo=37819,Fo=37820,Bo=37821,ko=36492,Go=36494,zo=36495,Vo=36283,Ho=36284,Qr=36285,Wo=36286,jh=3200,Xo=0,td=1,Ri="",bn="srgb",jr="srgb-linear",ta="linear",Me="srgb",Ma=7680,ed=519,nd=512,id=513,sd=514,fc=515,rd=516,ad=517,hc=518,od=519,wu=35044,jc="300 es",Kn=2e3,rr=2001;function cd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ea(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ld(){const i=ea("canvas");return i.style.display="block",i}const tl={};function na(...i){const e="THREE."+i.shift();console.log(e,...i)}function Cu(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function kt(...i){i=Cu(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function de(...i){i=Cu(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ws(...i){const e=i.join(" ");e in tl||(tl[e]=!0,kt(...i))}function ud(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const fd={[oo]:co,[lo]:ho,[uo]:po,[nr]:fo,[co]:oo,[ho]:lo,[po]:uo,[fo]:nr};class Qi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sa=Math.PI/180,qo=180/Math.PI;function Ii(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function ue(i,e,t){return Math.max(e,Math.min(t,i))}function hd(i,e){return(i%e+e)%e}function Ea(i,e,t){return(1-t)*i+t*e}function Xn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ee(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ec=class Ec{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ue(this.x,e.x,t.x),this.y=ue(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ue(this.x,e,t),this.y=ue(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ue(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ec.prototype.isVector2=!0;let Xt=Ec;class Ns{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3],f=r[a+0],d=r[a+1],_=r[a+2],E=r[a+3];if(h!==E||c!==f||l!==d||u!==_){let g=c*f+l*d+u*_+h*E;g<0&&(f=-f,d=-d,_=-_,E=-E,g=-g);let p=1-o;if(g<.9995){const R=Math.acos(g),O=Math.sin(R);p=Math.sin(p*R)/O,o=Math.sin(o*R)/O,c=c*p+f*o,l=l*p+d*o,u=u*p+_*o,h=h*p+E*o}else{c=c*p+f*o,l=l*p+d*o,u=u*p+_*o,h=h*p+E*o;const R=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=R,l*=R,u*=R,h*=R}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[a],f=r[a+1],d=r[a+2],_=r[a+3];return e[t]=o*_+u*h+c*d-l*f,e[t+1]=c*_+u*f+l*h-o*d,e[t+2]=l*_+u*d+o*f-c*h,e[t+3]=u*_-o*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),h=o(r/2),f=c(n/2),d=c(s/2),_=c(r/2);switch(a){case"XYZ":this._x=f*u*h+l*d*_,this._y=l*d*h-f*u*_,this._z=l*u*_+f*d*h,this._w=l*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+l*d*_,this._y=l*d*h-f*u*_,this._z=l*u*_-f*d*h,this._w=l*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-l*d*_,this._y=l*d*h+f*u*_,this._z=l*u*_+f*d*h,this._w=l*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-l*d*_,this._y=l*d*h+f*u*_,this._z=l*u*_-f*d*h,this._w=l*u*h+f*d*_;break;case"YZX":this._x=f*u*h+l*d*_,this._y=l*d*h+f*u*_,this._z=l*u*_-f*d*h,this._w=l*u*h-f*d*_;break;case"XZY":this._x=f*u*h-l*d*_,this._y=l*d*h-f*u*_,this._z=l*u*_+f*d*h,this._w=l*u*h+f*d*_;break;default:kt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ue(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const yc=class yc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(el.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(el.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=s+c*h+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ue(this.x,e.x,t.x),this.y=ue(this.y,e.y,t.y),this.z=ue(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ue(this.x,e,t),this.y=ue(this.y,e,t),this.z=ue(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ya.copy(this).projectOnVector(e),this.sub(ya)}reflect(e){return this.sub(ya.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ue(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};yc.prototype.isVector3=!0;let V=yc;const ya=new V,el=new Ns,bc=class bc{constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],_=n[8],E=s[0],g=s[3],p=s[6],R=s[1],O=s[4],M=s[7],A=s[2],y=s[5],w=s[8];return r[0]=a*E+o*R+c*A,r[3]=a*g+o*O+c*y,r[6]=a*p+o*M+c*w,r[1]=l*E+u*R+h*A,r[4]=l*g+u*O+h*y,r[7]=l*p+u*M+h*w,r[2]=f*E+d*R+_*A,r[5]=f*g+d*O+_*y,r[8]=f*p+d*M+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,f=o*c-u*r,d=l*r-a*c,_=t*h+n*f+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/_;return e[0]=h*E,e[1]=(s*l-u*n)*E,e[2]=(o*n-s*a)*E,e[3]=f*E,e[4]=(u*t-s*c)*E,e[5]=(s*r-o*t)*E,e[6]=d*E,e[7]=(n*c-l*t)*E,e[8]=(a*t-n*r)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return ws("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ba.makeScale(e,t)),this}rotate(e){return ws("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ba.makeRotation(-e)),this}translate(e,t){return ws("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ba.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};bc.prototype.isMatrix3=!0;let Ht=bc;const ba=new Ht,nl=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),il=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dd(){const i={enabled:!0,workingColorSpace:jr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Me&&(s.r=li(s.r),s.g=li(s.g),s.b=li(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Me&&(s.r=Cs(s.r),s.g=Cs(s.g),s.b=Cs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ri?ta:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ws("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ws("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[jr]:{primaries:e,whitePoint:n,transfer:ta,toXYZ:nl,fromXYZ:il,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:bn},outputColorSpaceConfig:{drawingBufferColorSpace:bn}},[bn]:{primaries:e,whitePoint:n,transfer:Me,toXYZ:nl,fromXYZ:il,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:bn}}}),i}const ce=dd();function li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Cs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let rs;class pd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{rs===void 0&&(rs=ea("canvas")),rs.width=e.width,rs.height=e.height;const s=rs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=rs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ea("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=li(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(li(t[n]/255)*255):t[n]=li(t[n]);return{data:t,width:e.width,height:e.height}}else return kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let md=0;class dc{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=Ii(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ta(s[a].image)):r.push(Ta(s[a]))}else r=Ta(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ta(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?pd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(kt("Texture: Unable to serialize Texture."),{})}let gd=0;const Aa=new V;class Qe extends Qi{constructor(e=Qe.DEFAULT_IMAGE,t=Qe.DEFAULT_MAPPING,n=oi,s=oi,r=on,a=Xi,o=On,c=An,l=Qe.DEFAULT_ANISOTROPY,u=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=Ii(),this.name="",this.source=new dc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Aa).x}get height(){return this.source.getSize(Aa).y}get depth(){return this.source.getSize(Aa).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){kt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){kt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zr:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case mo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zr:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case mo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=Mu;Qe.DEFAULT_ANISOTROPY=1;const Tc=class Tc{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],_=c[9],E=c[2],g=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-E)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+E)<.1&&Math.abs(_+g)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const O=(l+1)/2,M=(d+1)/2,A=(p+1)/2,y=(u+f)/4,w=(h+E)/4,x=(_+g)/4;return O>M&&O>A?O<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(O),s=y/n,r=w/n):M>A?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=y/s,r=x/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=w/r,s=x/r),this.set(n,s,r,t),this}let R=Math.sqrt((g-_)*(g-_)+(h-E)*(h-E)+(f-u)*(f-u));return Math.abs(R)<.001&&(R=1),this.x=(g-_)/R,this.y=(h-E)/R,this.z=(f-u)/R,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ue(this.x,e.x,t.x),this.y=ue(this.y,e.y,t.y),this.z=ue(this.z,e.z,t.z),this.w=ue(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ue(this.x,e,t),this.y=ue(this.y,e,t),this.z=ue(this.z,e,t),this.w=ue(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Tc.prototype.isVector4=!0;let De=Tc;class xd extends Qi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new De(0,0,e,t),this.scissorTest=!1,this.viewport=new De(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new Qe(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new dc(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kn extends xd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Pu extends Qe{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _d extends Qe{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const ra=class ra{constructor(e,t,n,s,r,a,o,c,l,u,h,f,d,_,E,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,u,h,f,d,_,E,g)}set(e,t,n,s,r,a,o,c,l,u,h,f,d,_,E,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=_,p[11]=E,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ra().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/as.setFromMatrixColumn(e,0).length(),r=1/as.setFromMatrixColumn(e,1).length(),a=1/as.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,d=a*h,_=o*u,E=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+_*l,t[5]=f-E*l,t[9]=-o*c,t[2]=E-f*l,t[6]=_+d*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*u,d=c*h,_=l*u,E=l*h;t[0]=f+E*o,t[4]=_*o-d,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-_,t[6]=E+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*u,d=c*h,_=l*u,E=l*h;t[0]=f-E*o,t[4]=-a*h,t[8]=_+d*o,t[1]=d+_*o,t[5]=a*u,t[9]=E-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*u,d=a*h,_=o*u,E=o*h;t[0]=c*u,t[4]=_*l-d,t[8]=f*l+E,t[1]=c*h,t[5]=E*l+f,t[9]=d*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,d=a*l,_=o*c,E=o*l;t[0]=c*u,t[4]=E-f*h,t[8]=_*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=d*h+_,t[10]=f-E*h}else if(e.order==="XZY"){const f=a*c,d=a*l,_=o*c,E=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+E,t[5]=a*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=o*u,t[10]=E*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vd,e,Md)}lookAt(e,t,n){const s=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Mi.crossVectors(n,Sn),Mi.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Mi.crossVectors(n,Sn)),Mi.normalize(),hr.crossVectors(Sn,Mi),s[0]=Mi.x,s[4]=hr.x,s[8]=Sn.x,s[1]=Mi.y,s[5]=hr.y,s[9]=Sn.y,s[2]=Mi.z,s[6]=hr.z,s[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],_=n[2],E=n[6],g=n[10],p=n[14],R=n[3],O=n[7],M=n[11],A=n[15],y=s[0],w=s[4],x=s[8],b=s[12],L=s[1],$=s[5],U=s[9],z=s[13],I=s[2],G=s[6],et=s[10],K=s[14],ot=s[3],Z=s[7],Y=s[11],j=s[15];return r[0]=a*y+o*L+c*I+l*ot,r[4]=a*w+o*$+c*G+l*Z,r[8]=a*x+o*U+c*et+l*Y,r[12]=a*b+o*z+c*K+l*j,r[1]=u*y+h*L+f*I+d*ot,r[5]=u*w+h*$+f*G+d*Z,r[9]=u*x+h*U+f*et+d*Y,r[13]=u*b+h*z+f*K+d*j,r[2]=_*y+E*L+g*I+p*ot,r[6]=_*w+E*$+g*G+p*Z,r[10]=_*x+E*U+g*et+p*Y,r[14]=_*b+E*z+g*K+p*j,r[3]=R*y+O*L+M*I+A*ot,r[7]=R*w+O*$+M*G+A*Z,r[11]=R*x+O*U+M*et+A*Y,r[15]=R*b+O*z+M*K+A*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],E=e[7],g=e[11],p=e[15],R=c*d-l*f,O=o*d-l*h,M=o*f-c*h,A=a*d-l*u,y=a*f-c*u,w=a*h-o*u;return t*(E*R-g*O+p*M)-n*(_*R-g*A+p*y)+s*(_*O-E*A+p*w)-r*(_*M-E*y+g*w)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(a*u-o*l)-n*(r*u-o*c)+s*(r*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],E=e[13],g=e[14],p=e[15],R=t*o-n*a,O=t*c-s*a,M=t*l-r*a,A=n*c-s*o,y=n*l-r*o,w=s*l-r*c,x=u*E-h*_,b=u*g-f*_,L=u*p-d*_,$=h*g-f*E,U=h*p-d*E,z=f*p-d*g,I=R*z-O*U+M*$+A*L-y*b+w*x;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/I;return e[0]=(o*z-c*U+l*$)*G,e[1]=(s*U-n*z-r*$)*G,e[2]=(E*w-g*y+p*A)*G,e[3]=(f*y-h*w-d*A)*G,e[4]=(c*L-a*z-l*b)*G,e[5]=(t*z-s*L+r*b)*G,e[6]=(g*M-_*w-p*O)*G,e[7]=(u*w-f*M+d*O)*G,e[8]=(a*U-o*L+l*x)*G,e[9]=(n*L-t*U-r*x)*G,e[10]=(_*y-E*M+p*R)*G,e[11]=(h*M-u*y-d*R)*G,e[12]=(o*b-a*$-c*x)*G,e[13]=(t*$-n*b+s*x)*G,e[14]=(E*O-_*A-g*R)*G,e[15]=(u*A-h*O+f*R)*G,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,f=r*l,d=r*u,_=r*h,E=a*u,g=a*h,p=o*h,R=c*l,O=c*u,M=c*h,A=n.x,y=n.y,w=n.z;return s[0]=(1-(E+p))*A,s[1]=(d+M)*A,s[2]=(_-O)*A,s[3]=0,s[4]=(d-M)*y,s[5]=(1-(f+p))*y,s[6]=(g+R)*y,s[7]=0,s[8]=(_+O)*w,s[9]=(g-R)*w,s[10]=(1-(f+E))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=as.set(s[0],s[1],s[2]).length();const o=as.set(s[4],s[5],s[6]).length(),c=as.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Nn.copy(this);const l=1/a,u=1/o,h=1/c;return Nn.elements[0]*=l,Nn.elements[1]*=l,Nn.elements[2]*=l,Nn.elements[4]*=u,Nn.elements[5]*=u,Nn.elements[6]*=u,Nn.elements[8]*=h,Nn.elements[9]*=h,Nn.elements[10]*=h,t.setFromRotationMatrix(Nn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=Kn,c=!1){const l=this.elements,u=2*r/(t-e),h=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s);let _,E;if(c)_=r/(a-r),E=a*r/(a-r);else if(o===Kn)_=-(a+r)/(a-r),E=-2*a*r/(a-r);else if(o===rr)_=-a/(a-r),E=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=E,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Kn,c=!1){const l=this.elements,u=2/(t-e),h=2/(n-s),f=-(t+e)/(t-e),d=-(n+s)/(n-s);let _,E;if(c)_=1/(a-r),E=a/(a-r);else if(o===Kn)_=-2/(a-r),E=-(a+r)/(a-r);else if(o===rr)_=-1/(a-r),E=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=_,l[14]=E,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};ra.prototype.isMatrix4=!0;let Le=ra;const as=new V,Nn=new Le,vd=new V(0,0,0),Md=new V(1,1,1),Mi=new V,hr=new V,Sn=new V,sl=new Le,rl=new Ns;class Ui{constructor(e=0,t=0,n=0,s=Ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ue(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ue(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ue(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ue(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return sl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rl.setFromEuler(this),this.setFromQuaternion(rl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ui.DEFAULT_ORDER="XYZ";class Lu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sd=0;const al=new V,os=new Ns,ei=new Le,dr=new V,Bs=new V,Ed=new V,yd=new Ns,ol=new V(1,0,0),cl=new V(0,1,0),ll=new V(0,0,1),ul={type:"added"},bd={type:"removed"},cs={type:"childadded",child:null},Ra={type:"childremoved",child:null};class He extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=He.DEFAULT_UP.clone();const e=new V,t=new Ui,n=new Ns,s=new V(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Le},normalMatrix:{value:new Ht}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=He.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(ol,e)}rotateY(e){return this.rotateOnAxis(cl,e)}rotateZ(e){return this.rotateOnAxis(ll,e)}translateOnAxis(e,t){return al.copy(e).applyQuaternion(this.quaternion),this.position.add(al.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ol,e)}translateY(e){return this.translateOnAxis(cl,e)}translateZ(e){return this.translateOnAxis(ll,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?dr.copy(e):dr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(Bs,dr,this.up):ei.lookAt(dr,Bs,this.up),this.quaternion.setFromRotationMatrix(ei),s&&(ei.extractRotation(s.matrixWorld),os.setFromRotationMatrix(ei),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(de("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ul),cs.child=e,this.dispatchEvent(cs),cs.child=null):de("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bd),Ra.child=e,this.dispatchEvent(Ra),Ra.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ul),cs.child=e,this.dispatchEvent(cs),cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,e,Ed),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,yd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}He.DEFAULT_UP=new V(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class pr extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Td={type:"move"};class wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const E of e.hand.values()){const g=t.getJointPose(E,n),p=this._getHandJoint(l,E);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;l.inputState.pinching&&f>d+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Td)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new pr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Iu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},mr={h:0,s:0,l:0};function Ca(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class se{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ce.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ce.workingColorSpace){return this.r=e,this.g=t,this.b=n,ce.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ce.workingColorSpace){if(e=hd(e,1),t=ue(t,0,1),n=ue(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ca(a,r,e+1/3),this.g=Ca(a,r,e),this.b=Ca(a,r,e-1/3)}return ce.colorSpaceToWorking(this,s),this}setStyle(e,t=bn){function n(r){r!==void 0&&parseFloat(r)<1&&kt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:kt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);kt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bn){const n=Iu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):kt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=li(e.r),this.g=li(e.g),this.b=li(e.b),this}copyLinearToSRGB(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return ce.workingToColorSpace(rn.copy(this),e),Math.round(ue(rn.r*255,0,255))*65536+Math.round(ue(rn.g*255,0,255))*256+Math.round(ue(rn.b*255,0,255))}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ce.workingColorSpace){ce.workingToColorSpace(rn.copy(this),t);const n=rn.r,s=rn.g,r=rn.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ce.workingColorSpace){return ce.workingToColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=bn){ce.workingToColorSpace(rn.copy(this),e);const t=rn.r,n=rn.g,s=rn.b;return e!==bn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+t,Si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Si),e.getHSL(mr);const n=Ea(Si.h,mr.h,t),s=Ea(Si.s,mr.s,t),r=Ea(Si.l,mr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new se;se.NAMES=Iu;class Ad extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Un=new V,ni=new V,Pa=new V,ii=new V,ls=new V,us=new V,fl=new V,La=new V,Ia=new V,Da=new V,Na=new De,Ua=new De,$a=new De;class Cn{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Un.subVectors(e,t),s.cross(Un);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Un.subVectors(s,t),ni.subVectors(n,t),Pa.subVectors(e,t);const a=Un.dot(Un),o=Un.dot(ni),c=Un.dot(Pa),l=ni.dot(ni),u=ni.dot(Pa),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(l*c-o*u)*f,_=(a*u-o*c)*f;return r.set(1-d-_,_,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,ii)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ii.x),c.addScaledVector(a,ii.y),c.addScaledVector(o,ii.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Na.setScalar(0),Ua.setScalar(0),$a.setScalar(0),Na.fromBufferAttribute(e,t),Ua.fromBufferAttribute(e,n),$a.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Na,r.x),a.addScaledVector(Ua,r.y),a.addScaledVector($a,r.z),a}static isFrontFacing(e,t,n,s){return Un.subVectors(n,t),ni.subVectors(e,t),Un.cross(ni).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Un.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Cn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Cn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;ls.subVectors(s,n),us.subVectors(r,n),La.subVectors(e,n);const c=ls.dot(La),l=us.dot(La);if(c<=0&&l<=0)return t.copy(n);Ia.subVectors(e,s);const u=ls.dot(Ia),h=us.dot(Ia);if(u>=0&&h<=u)return t.copy(s);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(ls,a);Da.subVectors(e,r);const d=ls.dot(Da),_=us.dot(Da);if(_>=0&&d<=_)return t.copy(r);const E=d*l-c*_;if(E<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(n).addScaledVector(us,o);const g=u*_-d*h;if(g<=0&&h-u>=0&&d-_>=0)return fl.subVectors(r,s),o=(h-u)/(h-u+(d-_)),t.copy(s).addScaledVector(fl,o);const p=1/(g+E+f);return a=E*p,o=f*p,t.copy(n).addScaledVector(ls,a).addScaledVector(us,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class or{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,$n):$n.fromBufferAttribute(r,a),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),gr.copy(n.boundingBox)),gr.applyMatrix4(e.matrixWorld),this.union(gr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ks),xr.subVectors(this.max,ks),fs.subVectors(e.a,ks),hs.subVectors(e.b,ks),ds.subVectors(e.c,ks),Ei.subVectors(hs,fs),yi.subVectors(ds,hs),Fi.subVectors(fs,ds);let t=[0,-Ei.z,Ei.y,0,-yi.z,yi.y,0,-Fi.z,Fi.y,Ei.z,0,-Ei.x,yi.z,0,-yi.x,Fi.z,0,-Fi.x,-Ei.y,Ei.x,0,-yi.y,yi.x,0,-Fi.y,Fi.x,0];return!Oa(t,fs,hs,ds,xr)||(t=[1,0,0,0,1,0,0,0,1],!Oa(t,fs,hs,ds,xr))?!1:(_r.crossVectors(Ei,yi),t=[_r.x,_r.y,_r.z],Oa(t,fs,hs,ds,xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const si=[new V,new V,new V,new V,new V,new V,new V,new V],$n=new V,gr=new or,fs=new V,hs=new V,ds=new V,Ei=new V,yi=new V,Fi=new V,ks=new V,xr=new V,_r=new V,Bi=new V;function Oa(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Bi.fromArray(i,r);const o=s.x*Math.abs(Bi.x)+s.y*Math.abs(Bi.y)+s.z*Math.abs(Bi.z),c=e.dot(Bi),l=t.dot(Bi),u=n.dot(Bi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Fe=new V,vr=new Xt;let Rd=0;class In extends Qi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=wu,this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)vr.fromBufferAttribute(this,t),vr.applyMatrix3(e),this.setXY(t,vr.x,vr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Fe.fromBufferAttribute(this,t),Fe.applyMatrix3(e),this.setXYZ(t,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Fe.fromBufferAttribute(this,t),Fe.applyMatrix4(e),this.setXYZ(t,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Fe.fromBufferAttribute(this,t),Fe.applyNormalMatrix(e),this.setXYZ(t,Fe.x,Fe.y,Fe.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Fe.fromBufferAttribute(this,t),Fe.transformDirection(e),this.setXYZ(t,Fe.x,Fe.y,Fe.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ee(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ee(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ee(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ee(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ee(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ee(t,this.array),n=Ee(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ee(t,this.array),n=Ee(n,this.array),s=Ee(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ee(t,this.array),n=Ee(n,this.array),s=Ee(s,this.array),r=Ee(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Du extends In{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Nu extends In{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ke extends In{constructor(e,t,n){super(new Float32Array(e),t,n)}}const wd=new or,Gs=new V,Fa=new V;class ca{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):wd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gs.subVectors(e,this.center);const t=Gs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Gs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gs.copy(e.center).add(Fa)),this.expandByPoint(Gs.copy(e.center).sub(Fa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Cd=0;const wn=new Le,Ba=new He,ps=new V,En=new or,zs=new or,Ye=new V;class je extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cd(e)?Nu:Du)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ht().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,n){return wn.makeTranslation(e,t,n),this.applyMatrix4(wn),this}scale(e,t,n){return wn.makeScale(e,t,n),this.applyMatrix4(wn),this}lookAt(e){return Ba.lookAt(e),Ba.updateMatrix(),this.applyMatrix4(Ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ke(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new or);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){de("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];En.setFromBufferAttribute(r),this.morphTargetsRelative?(Ye.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Ye),Ye.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Ye)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&de('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ca);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){de("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const n=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];zs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ye.addVectors(En.min,zs.min),En.expandByPoint(Ye),Ye.addVectors(En.max,zs.max),En.expandByPoint(Ye)):(En.expandByPoint(zs.min),En.expandByPoint(zs.max))}En.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Ye.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ye));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Ye.fromBufferAttribute(o,l),c&&(ps.fromBufferAttribute(e,l),Ye.add(ps)),s=Math.max(s,n.distanceToSquared(Ye))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&de('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){de("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new In(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let x=0;x<n.count;x++)o[x]=new V,c[x]=new V;const l=new V,u=new V,h=new V,f=new Xt,d=new Xt,_=new Xt,E=new V,g=new V;function p(x,b,L){l.fromBufferAttribute(n,x),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,L),f.fromBufferAttribute(r,x),d.fromBufferAttribute(r,b),_.fromBufferAttribute(r,L),u.sub(l),h.sub(l),d.sub(f),_.sub(f);const $=1/(d.x*_.y-_.x*d.y);isFinite($)&&(E.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar($),g.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar($),o[x].add(E),o[b].add(E),o[L].add(E),c[x].add(g),c[b].add(g),c[L].add(g))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let x=0,b=R.length;x<b;++x){const L=R[x],$=L.start,U=L.count;for(let z=$,I=$+U;z<I;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const O=new V,M=new V,A=new V,y=new V;function w(x){A.fromBufferAttribute(s,x),y.copy(A);const b=o[x];O.copy(b),O.sub(A.multiplyScalar(A.dot(b))).normalize(),M.crossVectors(y,b);const $=M.dot(c[x])<0?-1:1;a.setXYZW(x,O.x,O.y,O.z,$)}for(let x=0,b=R.length;x<b;++x){const L=R[x],$=L.start,U=L.count;for(let z=$,I=$+U;z<I;z+=3)w(e.getX(z+0)),w(e.getX(z+1)),w(e.getX(z+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new In(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new V,r=new V,a=new V,o=new V,c=new V,l=new V,u=new V,h=new V;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),E=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,E),a.fromBufferAttribute(t,g),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,E),l.fromBufferAttribute(n,g),o.add(u),c.add(u),l.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(E,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ye.fromBufferAttribute(e,t),Ye.normalize(),e.setXYZ(t,Ye.x,Ye.y,Ye.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u);let d=0,_=0;for(let E=0,g=c.length;E<g;E++){o.isInterleavedBufferAttribute?d=c[E]*o.data.stride+o.offset:d=c[E]*u;for(let p=0;p<u;p++)f[_++]=l[d++]}return new In(f,u,h)}if(this.index===null)return kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new je,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=e(f,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=wu,this.updateRanges=[],this.version=0,this.uuid=Ii()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const un=new V;class ia{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ee(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ee(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ee(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ee(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ee(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Xn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ee(t,this.array),n=Ee(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ee(t,this.array),n=Ee(n,this.array),s=Ee(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ee(t,this.array),n=Ee(n,this.array),s=Ee(s,this.array),r=Ee(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){na("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new In(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ia(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){na("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ka=new V,Ld=new V,Id=new Ht;class Ai{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=ka.subVectors(n,t).cross(Ld.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(ka),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Id.getNormalMatrix(e),s=this.coplanarPoint(ka).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Dd=0;class ji extends Qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=js,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hu,this.blendDst=du,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ed,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ma,this.stencilZFail=Ma,this.stencilZPass=Ma,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){kt(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){kt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new se().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Ai().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Xt().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Uu extends ji{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ms;const Vs=new V,gs=new V,xs=new V,_s=new Xt,Hs=new Xt,$u=new Le,Mr=new V,Ws=new V,Sr=new V,hl=new Xt,Ga=new Xt,dl=new Xt;class Nd extends He{constructor(e=new Uu){if(super(),this.isSprite=!0,this.type="Sprite",ms===void 0){ms=new je;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Pd(t,5);ms.setIndex([0,1,2,0,2,3]),ms.setAttribute("position",new ia(n,3,0,!1)),ms.setAttribute("uv",new ia(n,2,3,!1))}this.geometry=ms,this.material=e,this.center=new Xt(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&de('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),gs.setFromMatrixScale(this.matrixWorld),$u.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),xs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&gs.multiplyScalar(-xs.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Er(Mr.set(-.5,-.5,0),xs,a,gs,s,r),Er(Ws.set(.5,-.5,0),xs,a,gs,s,r),Er(Sr.set(.5,.5,0),xs,a,gs,s,r),hl.set(0,0),Ga.set(1,0),dl.set(1,1);let o=e.ray.intersectTriangle(Mr,Ws,Sr,!1,Vs);if(o===null&&(Er(Ws.set(-.5,.5,0),xs,a,gs,s,r),Ga.set(0,1),o=e.ray.intersectTriangle(Mr,Sr,Ws,!1,Vs),o===null))return;const c=e.ray.origin.distanceTo(Vs);c<e.near||c>e.far||t.push({distance:c,point:Vs.clone(),uv:Cn.getInterpolation(Vs,Mr,Ws,Sr,hl,Ga,dl,new Xt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Er(i,e,t,n,s,r){_s.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Hs.x=r*_s.x-s*_s.y,Hs.y=s*_s.x+r*_s.y):Hs.copy(_s),i.copy(e),i.x+=Hs.x,i.y+=Hs.y,i.applyMatrix4($u)}const ri=new V,za=new V,yr=new V,br=new V;class Ou{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,t),ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){za.copy(e).add(t).multiplyScalar(.5),yr.copy(t).sub(e).normalize(),br.copy(this.origin).sub(za);const r=e.distanceTo(t)*.5,a=-this.direction.dot(yr),o=br.dot(this.direction),c=-br.dot(yr),l=br.lengthSq(),u=Math.abs(1-a*a);let h,f,d,_;if(u>0)if(h=a*c-o,f=a*o-c,_=r*u,h>=0)if(f>=-_)if(f<=_){const E=1/u;h*=E,f*=E,d=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f<=-_?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l):f<=_?(h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(za).addScaledVector(yr,f),d}intersectSphere(e,t){if(e.radius<0)return null;ri.subVectors(e.center,this.origin);const n=ri.dot(this.direction),s=ri.dot(ri)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,t,n,s,r){const a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,h=e.x-a.x,f=e.y-a.y,d=e.z-a.z,_=t.x-a.x,E=t.y-a.y,g=t.z-a.z,p=n.x-a.x,R=n.y-a.y,O=n.z-a.z,M=Math.abs(c),A=Math.abs(l),y=Math.abs(u);let w,x,b,L,$,U,z,I,G,et,K,ot;if(M>=A&&M>=y?(b=c,U=h,G=_,ot=p,c>=0?(w=l,x=u,L=f,$=d,z=E,I=g,et=R,K=O):(w=u,x=l,L=d,$=f,z=g,I=E,et=O,K=R)):A>=y?(b=l,U=f,G=E,ot=R,l>=0?(w=u,x=c,L=d,$=h,z=g,I=_,et=O,K=p):(w=c,x=u,L=h,$=d,z=_,I=g,et=p,K=O)):(b=u,U=d,G=g,ot=O,u>=0?(w=c,x=l,L=h,$=f,z=_,I=E,et=p,K=R):(w=l,x=c,L=f,$=h,z=E,I=_,et=R,K=p)),b===0)return null;const Z=w/b,Y=x/b,j=1/b,Mt=L-Z*U,dt=$-Y*U,Zt=z-Z*G,qt=I-Y*G,re=et-Z*ot,J=K-Y*ot,st=re*qt-J*Zt,wt=Mt*J-dt*re,Vt=Zt*dt-qt*Mt;if(s){if(st<0||wt<0||Vt<0)return null}else if((st<0||wt<0||Vt<0)&&(st>0||wt>0||Vt>0))return null;const Tt=st+wt+Vt;if(Tt===0)return null;const ee=j*(st*U+wt*G+Vt*ot);return(Tt>0?ee<0:ee>0)?null:this.at(ee/Tt,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Hi extends ji{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=ic,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pl=new Le,ki=new Ou,Tr=new ca,ml=new V,Ar=new V,Rr=new V,wr=new V,Va=new V,Cr=new V,gl=new V,Pr=new V;class me extends He{constructor(e=new je,t=new Hi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Cr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],h=r[c];u!==0&&(Va.fromBufferAttribute(h,e),a?Cr.addScaledVector(Va,u):Cr.addScaledVector(Va.sub(t),u))}t.add(Cr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(r),ki.copy(e.ray).recast(e.near),!(Tr.containsPoint(ki.origin)===!1&&(ki.intersectSphere(Tr,ml)===null||ki.origin.distanceToSquared(ml)>(e.far-e.near)**2))&&(pl.copy(r).invert(),ki.copy(e.ray).applyMatrix4(pl),!(n.boundingBox!==null&&ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ki)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,E=f.length;_<E;_++){const g=f[_],p=a[g.materialIndex],R=Math.max(g.start,d.start),O=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let M=R,A=O;M<A;M+=3){const y=o.getX(M),w=o.getX(M+1),x=o.getX(M+2);s=Lr(this,p,e,n,l,u,h,y,w,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const _=Math.max(0,d.start),E=Math.min(o.count,d.start+d.count);for(let g=_,p=E;g<p;g+=3){const R=o.getX(g),O=o.getX(g+1),M=o.getX(g+2);s=Lr(this,a,e,n,l,u,h,R,O,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,E=f.length;_<E;_++){const g=f[_],p=a[g.materialIndex],R=Math.max(g.start,d.start),O=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let M=R,A=O;M<A;M+=3){const y=M,w=M+1,x=M+2;s=Lr(this,p,e,n,l,u,h,y,w,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const _=Math.max(0,d.start),E=Math.min(c.count,d.start+d.count);for(let g=_,p=E;g<p;g+=3){const R=g,O=g+1,M=g+2;s=Lr(this,a,e,n,l,u,h,R,O,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function Ud(i,e,t,n,s,r,a,o){let c;if(e.side===Mn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Yi,o),c===null)return null;Pr.copy(o),Pr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Pr);return l<t.near||l>t.far?null:{distance:l,point:Pr.clone(),object:i}}function Lr(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Ar),i.getVertexPosition(c,Rr),i.getVertexPosition(l,wr);const u=Ud(i,e,t,n,Ar,Rr,wr,gl);if(u){const h=new V;Cn.getBarycoord(gl,Ar,Rr,wr,h),s&&(u.uv=Cn.getInterpolatedAttribute(s,o,c,l,h,new Xt)),r&&(u.uv1=Cn.getInterpolatedAttribute(r,o,c,l,h,new Xt)),a&&(u.normal=Cn.getInterpolatedAttribute(a,o,c,l,h,new V),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new V,materialIndex:0};Cn.getNormal(Ar,Rr,wr,f.normal),u.face=f,u.barycoord=h}return u}class $d extends Qe{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Je,u=Je,h,f){super(null,a,o,c,l,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Gi=new ca,Od=new Xt(.5,.5),Ir=new V;class pc{constructor(e=new Ai,t=new Ai,n=new Ai,s=new Ai,r=new Ai,a=new Ai){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Kn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],h=r[5],f=r[6],d=r[7],_=r[8],E=r[9],g=r[10],p=r[11],R=r[12],O=r[13],M=r[14],A=r[15];if(s[0].setComponents(l-a,d-u,p-_,A-R).normalize(),s[1].setComponents(l+a,d+u,p+_,A+R).normalize(),s[2].setComponents(l+o,d+h,p+E,A+O).normalize(),s[3].setComponents(l-o,d-h,p-E,A-O).normalize(),n)s[4].setComponents(c,f,g,M).normalize(),s[5].setComponents(l-c,d-f,p-g,A-M).normalize();else if(s[4].setComponents(l-c,d-f,p-g,A-M).normalize(),t===Kn)s[5].setComponents(l+c,d+f,p+g,A+M).normalize();else if(t===rr)s[5].setComponents(c,f,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(e){Gi.center.set(0,0,0);const t=Od.distanceTo(e.center);return Gi.radius=.7071067811865476+t,Gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ir.x=s.normal.x>0?e.max.x:e.min.x,Ir.y=s.normal.y>0?e.max.y:e.min.y,Ir.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ir)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yo extends ji{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const xl=new Le,Ko=new Ou,Dr=new ca,Nr=new V;class _l extends He{constructor(e=new je,t=new Yo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(s),Dr.radius+=r,e.ray.intersectsSphere(Dr)===!1)return;xl.copy(s).invert(),Ko.copy(e.ray).applyMatrix4(xl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let _=f,E=d;_<E;_++){const g=l.getX(_);Nr.fromBufferAttribute(h,g),vl(Nr,g,c,s,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let _=f,E=d;_<E;_++)Nr.fromBufferAttribute(h,_),vl(Nr,_,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function vl(i,e,t,n,s,r,a){const o=Ko.distanceSqToPoint(i);if(o<t){const c=new V;Ko.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Fu extends Qe{constructor(e=[],t=Ki,n,s,r,a,o,c,l,u){super(e,t,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fd extends Qe{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ar extends Qe{constructor(e,t,n=Qn,s,r,a,o=Je,c=Je,l,u=pi,h=1){if(u!==pi&&u!==qi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new dc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Bd extends ar{constructor(e,t=Qn,n=Ki,s,r,a=Je,o=Je,c,l=pi){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Bu extends Qe{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class xn extends je{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ke(l,3)),this.setAttribute("normal",new ke(u,3)),this.setAttribute("uv",new ke(h,2));function _(E,g,p,R,O,M,A,y,w,x,b){const L=M/w,$=A/x,U=M/2,z=A/2,I=y/2,G=w+1,et=x+1;let K=0,ot=0;const Z=new V;for(let Y=0;Y<et;Y++){const j=Y*$-z;for(let Mt=0;Mt<G;Mt++){const dt=Mt*L-U;Z[E]=dt*R,Z[g]=j*O,Z[p]=I,l.push(Z.x,Z.y,Z.z),Z[E]=0,Z[g]=0,Z[p]=y>0?1:-1,u.push(Z.x,Z.y,Z.z),h.push(Mt/w),h.push(1-Y/x),K+=1}}for(let Y=0;Y<x;Y++)for(let j=0;j<w;j++){const Mt=f+j+G*Y,dt=f+j+G*(Y+1),Zt=f+(j+1)+G*(Y+1),qt=f+(j+1)+G*Y;c.push(Mt,dt,qt),c.push(dt,Zt,qt),ot+=6}o.addGroup(d,ot,b),d+=ot,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class mc extends je{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],c=[],l=new V,u=new Xt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const d=n+h/t*s;l.x=e*Math.cos(d),l.y=e*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[f]/e+1)/2,u.y=(a[f+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ke(a,3)),this.setAttribute("normal",new ke(o,3)),this.setAttribute("uv",new ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class gc extends je{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],d=[];let _=0;const E=[],g=n/2;let p=0;R(),a===!1&&(e>0&&O(!0),t>0&&O(!1)),this.setIndex(u),this.setAttribute("position",new ke(h,3)),this.setAttribute("normal",new ke(f,3)),this.setAttribute("uv",new ke(d,2));function R(){const M=new V,A=new V;let y=0;const w=(t-e)/n;for(let x=0;x<=r;x++){const b=[],L=x/r,$=L*(t-e)+e;for(let U=0;U<=s;U++){const z=U/s,I=z*c+o,G=Math.sin(I),et=Math.cos(I);A.x=$*G,A.y=-L*n+g,A.z=$*et,h.push(A.x,A.y,A.z),M.set(G,w,et).normalize(),f.push(M.x,M.y,M.z),d.push(z,1-L),b.push(_++)}E.push(b)}for(let x=0;x<s;x++)for(let b=0;b<r;b++){const L=E[b][x],$=E[b+1][x],U=E[b+1][x+1],z=E[b][x+1];(e>0||b!==0)&&(u.push(L,$,z),y+=3),(t>0||b!==r-1)&&(u.push($,U,z),y+=3)}l.addGroup(p,y,0),p+=y}function O(M){const A=_,y=new Xt,w=new V;let x=0;const b=M===!0?e:t,L=M===!0?1:-1;for(let U=1;U<=s;U++)h.push(0,g*L,0),f.push(0,L,0),d.push(.5,.5),_++;const $=_;for(let U=0;U<=s;U++){const I=U/s*c+o,G=Math.cos(I),et=Math.sin(I);w.x=b*et,w.y=g*L,w.z=b*G,h.push(w.x,w.y,w.z),f.push(0,L,0),y.x=G*.5+.5,y.y=et*.5*L+.5,d.push(y.x,y.y),_++}for(let U=0;U<s;U++){const z=A+U,I=$+U;M===!0?u.push(I,I+1,z):u.push(I+1,I,z),x+=3}l.addGroup(p,x,M===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class yn extends je{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,h=e/o,f=t/c,d=[],_=[],E=[],g=[];for(let p=0;p<u;p++){const R=p*f-a;for(let O=0;O<l;O++){const M=O*h-r;_.push(M,-R,0),E.push(0,0,1),g.push(O/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let R=0;R<o;R++){const O=R+l*p,M=R+l*(p+1),A=R+1+l*(p+1),y=R+1+l*p;d.push(O,M,y),d.push(M,A,y)}this.setIndex(d),this.setAttribute("position",new ke(_,3)),this.setAttribute("normal",new ke(E,3)),this.setAttribute("uv",new ke(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yn(e.width,e.height,e.widthSegments,e.heightSegments)}}class xc extends je{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],l=[],u=[];let h=e;const f=(t-e)/s,d=new V,_=new Xt;for(let E=0;E<=s;E++){for(let g=0;g<=n;g++){const p=r+g/n*a;d.x=h*Math.cos(p),d.y=h*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),_.x=(d.x/t+1)/2,_.y=(d.y/t+1)/2,u.push(_.x,_.y)}h+=f}for(let E=0;E<s;E++){const g=E*(n+1);for(let p=0;p<n;p++){const R=p+g,O=R,M=R+n+1,A=R+n+2,y=R+1;o.push(O,M,y),o.push(M,A,y)}}this.setIndex(o),this.setAttribute("position",new ke(c,3)),this.setAttribute("normal",new ke(l,3)),this.setAttribute("uv",new ke(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}function Is(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(Ml(s))s.isRenderTargetTexture?(kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Ml(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function fn(i){const e={};for(let t=0;t<i.length;t++){const n=Is(i[t]);for(const s in n)e[s]=n[s]}return e}function Ml(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function kd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ku(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ce.workingColorSpace}const Gd={clone:Is,merge:fn};var zd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ti extends ji{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zd,this.fragmentShader=Vd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Is(e.uniforms),this.uniformsGroups=kd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new se().setHex(s.value);break;case"v2":this.uniforms[n].value=new Xt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new V().fromArray(s.value);break;case"v4":this.uniforms[n].value=new De().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ht().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Le().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Hd extends ti{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ha extends ji{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xo,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=ic,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Wd extends ji{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xd extends ji{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class _c extends He{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new se(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class qd extends _c{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.groundColor=new se(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Wa=new Le,Sl=new V,El=new V;class Gu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xt(512,512),this.mapType=An,this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pc,this._frameExtents=new Xt(1,1),this._viewportCount=1,this._viewports=[new De(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Sl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Sl),El.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(El),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Wa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Wa,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===rr||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Wa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ur=new V,$r=new Ns,Vn=new V;class zu extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=Kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ur,$r,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ur,$r,Vn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ur,$r,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ur,$r,Vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const bi=new V,yl=new Xt,bl=new Xt;class Tn extends zu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qo*2*Math.atan(Math.tan(Sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bi.x,bi.y).multiplyScalar(-e/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bi.x,bi.y).multiplyScalar(-e/bi.z)}getViewSize(e,t){return this.getViewBounds(e,yl,bl),t.subVectors(bl,yl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Sa*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Yd extends Gu{constructor(){super(new Tn(90,1,.5,500)),this.isPointLightShadow=!0}}class Kd extends _c{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Yd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class vc extends zu{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Zd extends Gu{constructor(){super(new vc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jd extends _c{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.shadow=new Zd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const vs=-90,Ms=1;class Qd extends He{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Tn(vs,Ms,e,t);s.layers=this.layers,this.add(s);const r=new Tn(vs,Ms,e,t);r.layers=this.layers,this.add(r);const a=new Tn(vs,Ms,e,t);a.layers=this.layers,this.add(a);const o=new Tn(vs,Ms,e,t);o.layers=this.layers,this.add(o);const c=new Tn(vs,Ms,e,t);c.layers=this.layers,this.add(c);const l=new Tn(vs,Ms,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===Kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===rr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=E,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class jd extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ac=class Ac{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Ac.prototype.isMatrix2=!0;let Tl=Ac;function Al(i,e,t,n){const s=tp(n);switch(t){case Tu:return i*e;case Ru:return i*e/s.components*s.byteLength;case cc:return i*e/s.components*s.byteLength;case Zi:return i*e*2/s.components*s.byteLength;case lc:return i*e*2/s.components*s.byteLength;case Au:return i*e*3/s.components*s.byteLength;case On:return i*e*4/s.components*s.byteLength;case uc:return i*e*4/s.components*s.byteLength;case zr:case Vr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Hr:case Wr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xo:case vo:return Math.max(i,16)*Math.max(e,8)/4;case go:case _o:return Math.max(i,8)*Math.max(e,8)/2;case Mo:case So:case yo:case bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Eo:case Jr:case To:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ro:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case wo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Co:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Po:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Lo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Io:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Do:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case No:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Uo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case $o:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Oo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Fo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Bo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ko:case Go:case zo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Vo:case Ho:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Qr:case Wo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function tp(i){switch(i){case An:case Su:return{byteLength:1,components:1};case ir:case Eu:case jn:return{byteLength:2,components:1};case ac:case oc:return{byteLength:2,components:4};case Qn:case rc:case Yn:return{byteLength:4,components:1};case yu:case bu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nc}}));typeof window<"u"&&(window.__THREE__?kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Vu(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function ep(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),o.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<h.length;d++){const _=h[f],E=h[d];E.start<=_.start+_.count+1?_.count=Math.max(_.count,E.start+E.count-_.start):(++f,h[f]=E)}h.length=f+1;for(let d=0,_=h.length;d<_;d++){const E=h[d];i.bufferSubData(l,E.start*u.BYTES_PER_ELEMENT,u,E.start,E.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var np=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ip=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ap=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,op=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,up=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,fp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,mp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ep=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,yp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,bp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Tp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ap=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Rp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,wp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ip="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Np=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Up=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,$p=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Op=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Bp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Yp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Kp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,em=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,im=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sm=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,rm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,am=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,om=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,um=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_m=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,vm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Sm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Tm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Am=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Im=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Um=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$m=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Om=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Bm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,km=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Gm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Hm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Xm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ym=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Km=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,t0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,e0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const n0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,i0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,l0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,u0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,f0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,h0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,d0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,m0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,g0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,x0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,S0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,y0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,b0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,R0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,L0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,I0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,N0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,U0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qt={alphahash_fragment:np,alphahash_pars_fragment:ip,alphamap_fragment:sp,alphamap_pars_fragment:rp,alphatest_fragment:ap,alphatest_pars_fragment:op,aomap_fragment:cp,aomap_pars_fragment:lp,batching_pars_vertex:up,batching_vertex:fp,begin_vertex:hp,beginnormal_vertex:dp,bsdfs:pp,iridescence_fragment:mp,bumpmap_pars_fragment:gp,clipping_planes_fragment:xp,clipping_planes_pars_fragment:_p,clipping_planes_pars_vertex:vp,clipping_planes_vertex:Mp,color_fragment:Sp,color_pars_fragment:Ep,color_pars_vertex:yp,color_vertex:bp,common:Tp,cube_uv_reflection_fragment:Ap,defaultnormal_vertex:Rp,displacementmap_pars_vertex:wp,displacementmap_vertex:Cp,emissivemap_fragment:Pp,emissivemap_pars_fragment:Lp,colorspace_fragment:Ip,colorspace_pars_fragment:Dp,envmap_fragment:Np,envmap_common_pars_fragment:Up,envmap_pars_fragment:$p,envmap_pars_vertex:Op,envmap_physical_pars_fragment:Yp,envmap_vertex:Fp,fog_vertex:Bp,fog_pars_vertex:kp,fog_fragment:Gp,fog_pars_fragment:zp,gradientmap_pars_fragment:Vp,lightmap_pars_fragment:Hp,lights_lambert_fragment:Wp,lights_lambert_pars_fragment:Xp,lights_pars_begin:qp,lights_toon_fragment:Kp,lights_toon_pars_fragment:Zp,lights_phong_fragment:Jp,lights_phong_pars_fragment:Qp,lights_physical_fragment:jp,lights_physical_pars_fragment:tm,lights_fragment_begin:em,lights_fragment_maps:nm,lights_fragment_end:im,lightprobes_pars_fragment:sm,logdepthbuf_fragment:rm,logdepthbuf_pars_fragment:am,logdepthbuf_pars_vertex:om,logdepthbuf_vertex:cm,map_fragment:lm,map_pars_fragment:um,map_particle_fragment:fm,map_particle_pars_fragment:hm,metalnessmap_fragment:dm,metalnessmap_pars_fragment:pm,morphinstance_vertex:mm,morphcolor_vertex:gm,morphnormal_vertex:xm,morphtarget_pars_vertex:_m,morphtarget_vertex:vm,normal_fragment_begin:Mm,normal_fragment_maps:Sm,normal_pars_fragment:Em,normal_pars_vertex:ym,normal_vertex:bm,normalmap_pars_fragment:Tm,clearcoat_normal_fragment_begin:Am,clearcoat_normal_fragment_maps:Rm,clearcoat_pars_fragment:wm,iridescence_pars_fragment:Cm,opaque_fragment:Pm,packing:Lm,premultiplied_alpha_fragment:Im,project_vertex:Dm,dithering_fragment:Nm,dithering_pars_fragment:Um,roughnessmap_fragment:$m,roughnessmap_pars_fragment:Om,shadowmap_pars_fragment:Fm,shadowmap_pars_vertex:Bm,shadowmap_vertex:km,shadowmask_pars_fragment:Gm,skinbase_vertex:zm,skinning_pars_vertex:Vm,skinning_vertex:Hm,skinnormal_vertex:Wm,specularmap_fragment:Xm,specularmap_pars_fragment:qm,tonemapping_fragment:Ym,tonemapping_pars_fragment:Km,transmission_fragment:Zm,transmission_pars_fragment:Jm,uv_pars_fragment:Qm,uv_pars_vertex:jm,uv_vertex:t0,worldpos_vertex:e0,background_vert:n0,background_frag:i0,backgroundCube_vert:s0,backgroundCube_frag:r0,cube_vert:a0,cube_frag:o0,depth_vert:c0,depth_frag:l0,distance_vert:u0,distance_frag:f0,equirect_vert:h0,equirect_frag:d0,linedashed_vert:p0,linedashed_frag:m0,meshbasic_vert:g0,meshbasic_frag:x0,meshlambert_vert:_0,meshlambert_frag:v0,meshmatcap_vert:M0,meshmatcap_frag:S0,meshnormal_vert:E0,meshnormal_frag:y0,meshphong_vert:b0,meshphong_frag:T0,meshphysical_vert:A0,meshphysical_frag:R0,meshtoon_vert:w0,meshtoon_frag:C0,points_vert:P0,points_frag:L0,shadow_vert:I0,shadow_frag:D0,sprite_vert:N0,sprite_frag:U0},vt={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},Wn={basic:{uniforms:fn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:fn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new se(0)},envMapIntensity:{value:1}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:fn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:fn([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:fn([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new se(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:fn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:fn([vt.points,vt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:fn([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:fn([vt.common,vt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:fn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:fn([vt.sprite,vt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distance:{uniforms:fn([vt.common,vt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distance_vert,fragmentShader:Qt.distance_frag},shadow:{uniforms:fn([vt.lights,vt.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Wn.physical={uniforms:fn([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const Or={r:0,b:0,g:0},$0=new Le,Hu=new Ht;Hu.set(-1,0,0,0,1,0,0,0,1);function O0(i,e,t,n,s,r){const a=new se(0);let o=s===!0?0:1,c,l,u=null,h=0,f=null;function d(R){let O=R.isScene===!0?R.background:null;if(O&&O.isTexture){const M=R.backgroundBlurriness>0;O=e.get(O,M)}return O}function _(R){let O=!1;const M=d(R);M===null?g(a,o):M&&M.isColor&&(g(M,1),O=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||O)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function E(R,O){const M=d(O);M&&(M.isCubeTexture||M.mapping===oa)?(l===void 0&&(l=new me(new xn(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:Is(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,y,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4($0.makeRotationFromEuler(O.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Hu),l.material.toneMapped=ce.getTransfer(M.colorSpace)!==Me,(u!==M||h!==M.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,h=M.version,f=i.toneMapping),l.layers.enableAll(),R.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new me(new yn(2,2),new ti({name:"BackgroundMaterial",uniforms:Is(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,c.material.toneMapped=ce.getTransfer(M.colorSpace)!==Me,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||h!==M.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,h=M.version,f=i.toneMapping),c.layers.enableAll(),R.unshift(c,c.geometry,c.material,0,0,null))}function g(R,O){R.getRGB(Or,ku(i)),t.buffers.color.setClear(Or.r,Or.g,Or.b,O,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(R,O=1){a.set(R),o=O,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(R){o=R,g(a,o)},render:_,addToRenderList:E,dispose:p}}function F0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o($,U,z,I,G){let et=!1;const K=h($,I,z,U);r!==K&&(r=K,l(r.object)),et=d($,I,z,G),et&&_($,I,z,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(et||a)&&(a=!1,M($,U,z,I),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return i.createVertexArray()}function l($){return i.bindVertexArray($)}function u($){return i.deleteVertexArray($)}function h($,U,z,I){const G=I.wireframe===!0;let et=n[U.id];et===void 0&&(et={},n[U.id]=et);const K=$.isInstancedMesh===!0?$.id:0;let ot=et[K];ot===void 0&&(ot={},et[K]=ot);let Z=ot[z.id];Z===void 0&&(Z={},ot[z.id]=Z);let Y=Z[G];return Y===void 0&&(Y=f(c()),Z[G]=Y),Y}function f($){const U=[],z=[],I=[];for(let G=0;G<t;G++)U[G]=0,z[G]=0,I[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:z,attributeDivisors:I,object:$,attributes:{},index:null}}function d($,U,z,I){const G=r.attributes,et=U.attributes;let K=0;const ot=z.getAttributes();for(const Z in ot)if(ot[Z].location>=0){const j=G[Z];let Mt=et[Z];if(Mt===void 0&&(Z==="instanceMatrix"&&$.instanceMatrix&&(Mt=$.instanceMatrix),Z==="instanceColor"&&$.instanceColor&&(Mt=$.instanceColor)),j===void 0||j.attribute!==Mt||Mt&&j.data!==Mt.data)return!0;K++}return r.attributesNum!==K||r.index!==I}function _($,U,z,I){const G={},et=U.attributes;let K=0;const ot=z.getAttributes();for(const Z in ot)if(ot[Z].location>=0){let j=et[Z];j===void 0&&(Z==="instanceMatrix"&&$.instanceMatrix&&(j=$.instanceMatrix),Z==="instanceColor"&&$.instanceColor&&(j=$.instanceColor));const Mt={};Mt.attribute=j,j&&j.data&&(Mt.data=j.data),G[Z]=Mt,K++}r.attributes=G,r.attributesNum=K,r.index=I}function E(){const $=r.newAttributes;for(let U=0,z=$.length;U<z;U++)$[U]=0}function g($){p($,0)}function p($,U){const z=r.newAttributes,I=r.enabledAttributes,G=r.attributeDivisors;z[$]=1,I[$]===0&&(i.enableVertexAttribArray($),I[$]=1),G[$]!==U&&(i.vertexAttribDivisor($,U),G[$]=U)}function R(){const $=r.newAttributes,U=r.enabledAttributes;for(let z=0,I=U.length;z<I;z++)U[z]!==$[z]&&(i.disableVertexAttribArray(z),U[z]=0)}function O($,U,z,I,G,et,K){K===!0?i.vertexAttribIPointer($,U,z,G,et):i.vertexAttribPointer($,U,z,I,G,et)}function M($,U,z,I){E();const G=I.attributes,et=z.getAttributes(),K=U.defaultAttributeValues;for(const ot in et){const Z=et[ot];if(Z.location>=0){let Y=G[ot];if(Y===void 0&&(ot==="instanceMatrix"&&$.instanceMatrix&&(Y=$.instanceMatrix),ot==="instanceColor"&&$.instanceColor&&(Y=$.instanceColor)),Y!==void 0){const j=Y.normalized,Mt=Y.itemSize,dt=e.get(Y);if(dt===void 0)continue;const Zt=dt.buffer,qt=dt.type,re=dt.bytesPerElement,J=qt===i.INT||qt===i.UNSIGNED_INT||Y.gpuType===rc;if(Y.isInterleavedBufferAttribute){const st=Y.data,wt=st.stride,Vt=Y.offset;if(st.isInstancedInterleavedBuffer){for(let Tt=0;Tt<Z.locationSize;Tt++)p(Z.location+Tt,st.meshPerAttribute);$.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Tt=0;Tt<Z.locationSize;Tt++)g(Z.location+Tt);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let Tt=0;Tt<Z.locationSize;Tt++)O(Z.location+Tt,Mt/Z.locationSize,qt,j,wt*re,(Vt+Mt/Z.locationSize*Tt)*re,J)}else{if(Y.isInstancedBufferAttribute){for(let st=0;st<Z.locationSize;st++)p(Z.location+st,Y.meshPerAttribute);$.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let st=0;st<Z.locationSize;st++)g(Z.location+st);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let st=0;st<Z.locationSize;st++)O(Z.location+st,Mt/Z.locationSize,qt,j,Mt*re,Mt/Z.locationSize*st*re,J)}}else if(K!==void 0){const j=K[ot];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(Z.location,j);break;case 3:i.vertexAttrib3fv(Z.location,j);break;case 4:i.vertexAttrib4fv(Z.location,j);break;default:i.vertexAttrib1fv(Z.location,j)}}}}R()}function A(){b();for(const $ in n){const U=n[$];for(const z in U){const I=U[z];for(const G in I){const et=I[G];for(const K in et)u(et[K].object),delete et[K];delete I[G]}}delete n[$]}}function y($){if(n[$.id]===void 0)return;const U=n[$.id];for(const z in U){const I=U[z];for(const G in I){const et=I[G];for(const K in et)u(et[K].object),delete et[K];delete I[G]}}delete n[$.id]}function w($){for(const U in n){const z=n[U];for(const I in z){const G=z[I];if(G[$.id]===void 0)continue;const et=G[$.id];for(const K in et)u(et[K].object),delete et[K];delete G[$.id]}}}function x($){for(const U in n){const z=n[U],I=$.isInstancedMesh===!0?$.id:0,G=z[I];if(G!==void 0){for(const et in G){const K=G[et];for(const ot in K)u(K[ot].object),delete K[ot];delete G[et]}delete z[I],Object.keys(z).length===0&&delete n[U]}}}function b(){L(),a=!0,r!==s&&(r=s,l(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:b,resetDefaultState:L,dispose:A,releaseStatesOfGeometry:y,releaseStatesOfObject:x,releaseStatesOfProgram:w,initAttributes:E,enableAttribute:g,disableUnusedAttributes:R}}function B0(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let f=0;for(let d=0;d<u;d++)f+=l[d];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function k0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==On&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const x=w===jn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==An&&w!==Yn&&!x&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(kt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&kt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),O=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),y=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:E,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:R,maxVaryings:O,maxFragmentUniforms:M,maxSamples:A,samples:y}}function G0(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Ai,o=new Ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,E=h.clipIntersection,g=h.clipShadows,p=i.get(h);if(!s||_===null||_.length===0||r&&!g)r?u(null):l();else{const R=r?0:n,O=R*4;let M=p.clippingState||null;c.value=M,M=u(_,f,O,d);for(let A=0;A!==O;++A)M[A]=t[A];p.clippingState=M,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=R}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,_){const E=h!==null?h.length:0;let g=null;if(E!==0){if(g=c.value,_!==!0||g===null){const p=d+E*4,R=f.matrixWorldInverse;o.getNormalMatrix(R),(g===null||g.length<p)&&(g=new Float32Array(p));for(let O=0,M=d;O!==E;++O,M+=4)a.copy(h[O]).applyMatrix4(R,o),a.normal.toArray(g,M),g[M+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,g}}const As=4,z0=6,V0=20,H0=256,Xs=new vc,Rl=new se;let Xa=null,qa=0,Ya=0,Ka=!1;const W0=new V,zi=new V;class wl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=W0}=r;Xa=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel(),Ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ll(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Xa,qa,Ya),this._renderer.xr.enabled=Ka,e.scissorTest=!1,Ss(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ki||e.mapping===Ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xa=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel(),Ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:jn,format:On,colorSpace:jr,depthBuffer:!1},s=Cl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cl(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=X0(r)),this._blurMaterial=Y0(r,e,t),this._ggxMaterial=q0(r,e,t)}return s}_compileMaterial(e){const t=new me(new je,e);this._renderer.compile(t,Xs)}_sceneToCubeUV(e,t,n,s,r){const c=new Tn(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Rl),h.toneMapping=Jn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new me(new xn,new Hi({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,g=E.material;let p=!1;const R=e.background;R?R.isColor&&(g.color.copy(R),e.background=null,p=!0):(g.color.copy(Rl),p=!0);for(let O=0;O<6;O++){const M=O%3;M===0?(c.up.set(0,l[O],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[O],r.y,r.z)):M===1?(c.up.set(0,0,l[O]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[O],r.z)):(c.up.set(0,l[O],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[O]));const A=this._cubeSize;Ss(s,M*A,O>2?A:0,A,A),h.setRenderTarget(s),p&&h.render(E,c),h.render(e,c)}h.toneMapping=d,h.autoClear=f,e.background=R}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ki||e.mapping===Ls;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ll()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Ss(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Xs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),f=l*1.25,d=h*f,{_lodMax:_}=this,E=this._sizeLods[n],g=3*E*(n>_-As?n-_+As:0),p=4*(this._cubeSize-E);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=_-t,Ss(r,g,p,3*E,2*E),s.setRenderTarget(r),s.render(o,Xs),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=_-n,Ss(e,g,p,3*E,2*E),s.setRenderTarget(e),s.render(o,Xs)}_blur(e,t,n,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){const a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;const l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;const u=this._sizeLods[s],h=3*u*(s>this._lodMax-As?s-this._lodMax+As:0),f=4*(this._cubeSize-u);Ss(t,h,f,3*u,2*u),a.setRenderTarget(t),a.render(c,Xs)}}function X0(i){const e=[],t=[];let n=i;const s=i-As+1+z0;for(let r=0;r<s;r++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],h=6,f=6,d=3,_=new Float32Array(d*f*h),E=new Float32Array(d*f*h);for(let p=0;p<h;p++){const R=p%3*2/3-1,O=p>2?0:-1,M=[R,O,0,R+2/3,O,0,R+2/3,O+1,0,R,O,0,R+2/3,O+1,0,R,O+1,0];_.set(M,d*f*p);for(let A=0;A<f;A++){const y=u[A*2]*2-1,w=u[A*2+1]*2-1;p===0?zi.set(1,w,y):p===1?zi.set(-y,1,-w):p===2?zi.set(-y,w,1):p===3?zi.set(-1,w,-y):p===4?zi.set(-y,-1,w):zi.set(y,w,-1),zi.toArray(E,(p*f+A)*d)}}const g=new je;g.setAttribute("position",new In(_,d)),g.setAttribute("outputDirection",new In(E,d)),t.push(new me(g,null)),n>As&&n--}return{lodMeshes:t,sizeLods:e}}function Cl(i,e,t){const n=new kn(i,e,t);return n.texture.mapping=oa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ss(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function q0(i,e,t){return new ti({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:H0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:la(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Y0(i,e,t){return new ti({name:"SphericalGaussianBlur",defines:{SAMPLES:V0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:la(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Pl(){return new ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:la(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Ll(){return new ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:la(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function la(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Wu extends kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Fu(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new xn(5,5,5),r=new ti({name:"CubemapFromEquirect",uniforms:Is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mn,blending:ci});r.uniforms.tEquirect.value=t;const a=new me(s,r),o=t.minFilter;return t.minFilter===Xi&&(t.minFilter=on),new Qd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function K0(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?a(f):r(f)}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===xa||d===_a)if(e.has(f)){const _=e.get(f).texture;return o(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const E=new Wu(_.height);return E.fromEquirectangularTexture(i,f),e.set(f,E),f.addEventListener("dispose",l),o(E.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const d=f.mapping,_=d===xa||d===_a,E=d===Ki||d===Ls;if(_||E){let g=t.get(f);const p=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new wl(i)),g=_?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{const R=f.image;return _&&R&&R.height>0||E&&R&&c(R)?(n===null&&(n=new wl(i)),g=_?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",u),g.texture):null}}}return f}function o(f,d){return d===xa?f.mapping=Ki:d===_a&&(f.mapping=Ls),f}function c(f){let d=0;const _=6;for(let E=0;E<_;E++)f[E]!==void 0&&d++;return d===_}function l(f){const d=f.target;d.removeEventListener("dispose",l);const _=e.get(d);_!==void 0&&(e.delete(d),_.dispose())}function u(f){const d=f.target;d.removeEventListener("dispose",u);const _=t.get(d);_!==void 0&&(t.delete(d),_.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function Z0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&ws("WebGLRenderer: "+n+" extension not supported."),s}}}function J0(i,e,t,n){const s={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const d in f)e.update(f[d],i.ARRAY_BUFFER)}function l(h){const f=[],d=h.index,_=h.attributes.position;let E=0;if(_===void 0)return;if(d!==null){const R=d.array;E=d.version;for(let O=0,M=R.length;O<M;O+=3){const A=R[O+0],y=R[O+1],w=R[O+2];f.push(A,y,y,w,w,A)}}else{const R=_.array;E=_.version;for(let O=0,M=R.length/3-1;O<M;O+=3){const A=O+0,y=O+1,w=O+2;f.push(A,y,y,w,w,A)}}const g=new(_.count>=65535?Nu:Du)(f,1);g.version=E;const p=r.get(h);p&&e.remove(p),r.set(h,g)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function Q0(i,e,t){let n;function s(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function c(h,f){i.drawElements(n,f,r,h*a),t.update(f,n,1)}function l(h,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,h*a,d),t.update(f,n,d))}function u(h,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,d);let E=0;for(let g=0;g<d;g++)E+=f[g];t.update(E,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function j0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:de("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function tg(i,e,t){const n=new WeakMap,s=new De;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let L=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",L)};var d=L;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,E=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],R=o.morphAttributes.normal||[],O=o.morphAttributes.color||[];let M=0;_===!0&&(M=1),E===!0&&(M=2),g===!0&&(M=3);let A=o.attributes.position.count*M,y=1;A>e.maxTextureSize&&(y=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const w=new Float32Array(A*y*4*h),x=new Pu(w,A,y,h);x.type=Yn,x.needsUpdate=!0;const b=M*4;for(let $=0;$<h;$++){const U=p[$],z=R[$],I=O[$],G=A*y*4*$;for(let et=0;et<U.count;et++){const K=et*b;_===!0&&(s.fromBufferAttribute(U,et),w[G+K+0]=s.x,w[G+K+1]=s.y,w[G+K+2]=s.z,w[G+K+3]=0),E===!0&&(s.fromBufferAttribute(z,et),w[G+K+4]=s.x,w[G+K+5]=s.y,w[G+K+6]=s.z,w[G+K+7]=0),g===!0&&(s.fromBufferAttribute(I,et),w[G+K+8]=s.x,w[G+K+9]=s.y,w[G+K+10]=s.z,w[G+K+11]=I.itemSize===4?s.w:1)}}f={count:h,texture:x,size:new Xt(A,y)},n.set(o,f),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let _=0;for(let g=0;g<l.length;g++)_+=l[g];const E=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",E),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function eg(i,e,t,n,s){let r=new WeakMap;function a(l){const u=s.render.frame,h=l.geometry,f=e.get(l,h);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function o(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const ng={[pu]:"LINEAR_TONE_MAPPING",[mu]:"REINHARD_TONE_MAPPING",[gu]:"CINEON_TONE_MAPPING",[sc]:"ACES_FILMIC_TONE_MAPPING",[_u]:"AGX_TONE_MAPPING",[vu]:"NEUTRAL_TONE_MAPPING",[xu]:"CUSTOM_TONE_MAPPING"};function ig(i,e,t,n,s,r){const a=new kn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new je;l.setAttribute("position",new ke([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ke([0,2,0,0,2,0],2));const u=new Hd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new me(l,u),f=new vc(-1,1,1,-1,0,1);let d=null,_=null,E=!1,g,p=null,R=[],O=!1;this.setSize=function(M,A){a.setSize(M,A),o!==null&&o.setSize(M,A),c!==null&&c.setSize(M,A);for(let y=0;y<R.length;y++){const w=R[y];w.setSize&&w.setSize(M,A)}},this.setEffects=function(M){R=M,O=R.length>0&&R[0].isRenderPass===!0;const A=a.width,y=a.height;R.length>0&&o===null&&(o=new kn(A,y,{type:jn,depthBuffer:!1,stencilBuffer:!1}),c=new kn(A,y,{type:jn,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<R.length;w++){const x=R[w];x.setSize&&x.setSize(A,y)}},this.begin=function(M,A){if(E||M.toneMapping===Jn&&R.length===0)return!1;if(p=A,A!==null){const y=A.width,w=A.height;(a.width!==y||a.height!==w)&&this.setSize(y,w)}return O===!1&&M.setRenderTarget(a),g=M.toneMapping,M.toneMapping=Jn,!0},this.hasRenderPass=function(){return O},this.end=function(M,A){M.toneMapping=g,E=!0;let y=a,w=o;for(let x=0;x<R.length;x++){const b=R[x];b.enabled!==!1&&(b.render(M,w,y,A),b.needsSwap!==!1&&(y=w,w=w===o?c:o))}if(d!==M.outputColorSpace||_!==M.toneMapping){d=M.outputColorSpace,_=M.toneMapping,u.defines={},ce.getTransfer(d)===Me&&(u.defines.SRGB_TRANSFER="");const x=ng[_];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=y.texture,M.setRenderTarget(p),M.render(h,f),p=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}const Xu=new Qe,Zo=new ar(1,1),qu=new Pu,Yu=new _d,Ku=new Fu,Il=[],Dl=[],Nl=new Float32Array(16),Ul=new Float32Array(9),$l=new Float32Array(4);function Us(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Il[s];if(r===void 0&&(r=new Float32Array(s),Il[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function We(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Xe(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ua(i,e){let t=Dl[e];t===void 0&&(t=new Int32Array(e),Dl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function sg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function rg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(We(t,e))return;i.uniform2fv(this.addr,e),Xe(t,e)}}function ag(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(We(t,e))return;i.uniform3fv(this.addr,e),Xe(t,e)}}function og(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(We(t,e))return;i.uniform4fv(this.addr,e),Xe(t,e)}}function cg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(We(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Xe(t,e)}else{if(We(t,n))return;$l.set(n),i.uniformMatrix2fv(this.addr,!1,$l),Xe(t,n)}}function lg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(We(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Xe(t,e)}else{if(We(t,n))return;Ul.set(n),i.uniformMatrix3fv(this.addr,!1,Ul),Xe(t,n)}}function ug(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(We(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Xe(t,e)}else{if(We(t,n))return;Nl.set(n),i.uniformMatrix4fv(this.addr,!1,Nl),Xe(t,n)}}function fg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function hg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(We(t,e))return;i.uniform2iv(this.addr,e),Xe(t,e)}}function dg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(We(t,e))return;i.uniform3iv(this.addr,e),Xe(t,e)}}function pg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(We(t,e))return;i.uniform4iv(this.addr,e),Xe(t,e)}}function mg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function gg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(We(t,e))return;i.uniform2uiv(this.addr,e),Xe(t,e)}}function xg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(We(t,e))return;i.uniform3uiv(this.addr,e),Xe(t,e)}}function _g(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(We(t,e))return;i.uniform4uiv(this.addr,e),Xe(t,e)}}function vg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Zo.compareFunction=t.isReversedDepthBuffer()?hc:fc,r=Zo):r=Xu,t.setTexture2D(e||r,s)}function Mg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Yu,s)}function Sg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ku,s)}function Eg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||qu,s)}function yg(i){switch(i){case 5126:return sg;case 35664:return rg;case 35665:return ag;case 35666:return og;case 35674:return cg;case 35675:return lg;case 35676:return ug;case 5124:case 35670:return fg;case 35667:case 35671:return hg;case 35668:case 35672:return dg;case 35669:case 35673:return pg;case 5125:return mg;case 36294:return gg;case 36295:return xg;case 36296:return _g;case 35678:case 36198:case 36298:case 36306:case 35682:return vg;case 35679:case 36299:case 36307:return Mg;case 35680:case 36300:case 36308:case 36293:return Sg;case 36289:case 36303:case 36311:case 36292:return Eg}}function bg(i,e){i.uniform1fv(this.addr,e)}function Tg(i,e){const t=Us(e,this.size,2);i.uniform2fv(this.addr,t)}function Ag(i,e){const t=Us(e,this.size,3);i.uniform3fv(this.addr,t)}function Rg(i,e){const t=Us(e,this.size,4);i.uniform4fv(this.addr,t)}function wg(i,e){const t=Us(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Cg(i,e){const t=Us(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Pg(i,e){const t=Us(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Lg(i,e){i.uniform1iv(this.addr,e)}function Ig(i,e){i.uniform2iv(this.addr,e)}function Dg(i,e){i.uniform3iv(this.addr,e)}function Ng(i,e){i.uniform4iv(this.addr,e)}function Ug(i,e){i.uniform1uiv(this.addr,e)}function $g(i,e){i.uniform2uiv(this.addr,e)}function Og(i,e){i.uniform3uiv(this.addr,e)}function Fg(i,e){i.uniform4uiv(this.addr,e)}function Bg(i,e,t){const n=this.cache,s=e.length,r=ua(t,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Zo:a=Xu;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function kg(i,e,t){const n=this.cache,s=e.length,r=ua(t,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Yu,r[a])}function Gg(i,e,t){const n=this.cache,s=e.length,r=ua(t,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Ku,r[a])}function zg(i,e,t){const n=this.cache,s=e.length,r=ua(t,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||qu,r[a])}function Vg(i){switch(i){case 5126:return bg;case 35664:return Tg;case 35665:return Ag;case 35666:return Rg;case 35674:return wg;case 35675:return Cg;case 35676:return Pg;case 5124:case 35670:return Lg;case 35667:case 35671:return Ig;case 35668:case 35672:return Dg;case 35669:case 35673:return Ng;case 5125:return Ug;case 36294:return $g;case 36295:return Og;case 36296:return Fg;case 35678:case 36198:case 36298:case 36306:case 35682:return Bg;case 35679:case 36299:case 36307:return kg;case 35680:case 36300:case 36308:case 36293:return Gg;case 36289:case 36303:case 36311:case 36292:return zg}}class Hg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=yg(t.type)}}class Wg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vg(t.type)}}class Xg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Za=/(\w+)(\])?(\[|\.)?/g;function Ol(i,e){i.seq.push(e),i.map[e.id]=e}function qg(i,e,t){const n=i.name,s=n.length;for(Za.lastIndex=0;;){const r=Za.exec(n),a=Za.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Ol(t,l===void 0?new Hg(o,i,e):new Wg(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Xg(o),Ol(t,h)),t=h}}}class Xr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);qg(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Fl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Yg=37297;let Kg=0;function Zg(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Bl=new Ht;function Jg(i){ce._getMatrix(Bl,ce.workingColorSpace,i);const e=`mat3( ${Bl.elements.map(t=>t.toFixed(4))} )`;switch(ce.getTransfer(i)){case ta:return[e,"LinearTransferOETF"];case Me:return[e,"sRGBTransferOETF"];default:return kt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function kl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Zg(i.getShaderSource(e),o)}else return r}function Qg(i,e){const t=Jg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const jg={[pu]:"Linear",[mu]:"Reinhard",[gu]:"Cineon",[sc]:"ACESFilmic",[_u]:"AgX",[vu]:"Neutral",[xu]:"Custom"};function tx(i,e){const t=jg[e];return t===void 0?(kt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Fr=new V;function ex(){ce.getLuminanceCoefficients(Fr);const i=Fr.x.toFixed(4),e=Fr.y.toFixed(4),t=Fr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ks).join(`
`)}function ix(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function sx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ks(i){return i!==""}function Gl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jo(i){return i.replace(rx,ox)}const ax=new Map;function ox(i,e){let t=Qt[e];if(t===void 0){const n=ax.get(e);if(n!==void 0)t=Qt[n],kt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Jo(t)}const cx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vl(i){return i.replace(cx,lx)}function lx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Hl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const ux={[Gr]:"SHADOWMAP_TYPE_PCF",[Ys]:"SHADOWMAP_TYPE_VSM"};function fx(i){return ux[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const hx={[Ki]:"ENVMAP_TYPE_CUBE",[Ls]:"ENVMAP_TYPE_CUBE",[oa]:"ENVMAP_TYPE_CUBE_UV"};function dx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":hx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const px={[Ls]:"ENVMAP_MODE_REFRACTION"};function mx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":px[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const gx={[ic]:"ENVMAP_BLENDING_MULTIPLY",[Zh]:"ENVMAP_BLENDING_MIX",[Jh]:"ENVMAP_BLENDING_ADD"};function xx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":gx[i.combine]||"ENVMAP_BLENDING_NONE"}function _x(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function vx(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=fx(t),l=dx(t),u=mx(t),h=xx(t),f=_x(t),d=nx(t),_=ix(r),E=s.createProgram();let g,p,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ks).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ks).join(`
`),p.length>0&&(p+=`
`)):(g=[Hl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),p=[Hl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Jn?"#define TONE_MAPPING":"",t.toneMapping!==Jn?Qt.tonemapping_pars_fragment:"",t.toneMapping!==Jn?tx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,Qg("linearToOutputTexel",t.outputColorSpace),ex(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ks).join(`
`)),a=Jo(a),a=Gl(a,t),a=zl(a,t),o=Jo(o),o=Gl(o,t),o=zl(o,t),a=Vl(a),o=Vl(o),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===jc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const O=R+g+a,M=R+p+o,A=Fl(s,s.VERTEX_SHADER,O),y=Fl(s,s.FRAGMENT_SHADER,M);s.attachShader(E,A),s.attachShader(E,y),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function w($){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(E)||"",z=s.getShaderInfoLog(A)||"",I=s.getShaderInfoLog(y)||"",G=U.trim(),et=z.trim(),K=I.trim();let ot=!0,Z=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(ot=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,E,A,y);else{const Y=kl(s,A,"vertex"),j=kl(s,y,"fragment");de("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+$.name+`
Material Type: `+$.type+`

Program Info Log: `+G+`
`+Y+`
`+j)}else G!==""?kt("WebGLProgram: Program Info Log:",G):(et===""||K==="")&&(Z=!1);Z&&($.diagnostics={runnable:ot,programLog:G,vertexShader:{log:et,prefix:g},fragmentShader:{log:K,prefix:p}})}s.deleteShader(A),s.deleteShader(y),x=new Xr(s,E),b=sx(s,E)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(E,Yg)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Kg++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=A,this.fragmentShader=y,this}let Mx=0;class Sx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ex(e),t.set(e,n)),n}}class Ex{constructor(e){this.id=Mx++,this.code=e,this.usedTimes=0}}function yx(i){return i===Zi||i===Jr||i===Qr}function bx(i,e,t,n,s,r){const a=new Lu,o=new Sx,c=new Set,l=[],u=new Map,h=n.logarithmicDepthBuffer;let f=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function E(x,b,L,$,U,z){const I=$.fog,G=U.geometry,et=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?$.environment:null,K=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,ot=e.get(x.envMap||et,K),Z=ot&&ot.mapping===oa?ot.image.height:null,Y=d[x.type];x.precision!==null&&(f=n.getMaxPrecision(x.precision),f!==x.precision&&kt("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const j=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Mt=j!==void 0?j.length:0;let dt=0;G.morphAttributes.position!==void 0&&(dt=1),G.morphAttributes.normal!==void 0&&(dt=2),G.morphAttributes.color!==void 0&&(dt=3);let Zt,qt,re,J;if(Y){const Te=Wn[Y];Zt=Te.vertexShader,qt=Te.fragmentShader}else{Zt=x.vertexShader,qt=x.fragmentShader;const Te=o.getVertexShaderStage(x),xe=o.getFragmentShaderStage(x);o.update(x,Te,xe),re=Te.id,J=xe.id}const st=i.getRenderTarget(),wt=i.state.buffers.depth.getReversed(),Vt=U.isInstancedMesh===!0,Tt=U.isBatchedMesh===!0,ee=!!x.map,Ge=!!x.matcap,ne=!!ot,pe=!!x.aoMap,be=!!x.lightMap,ae=!!x.bumpMap&&x.wireframe===!1,Ce=!!x.normalMap,qe=!!x.displacementMap,dn=!!x.emissiveMap,Ie=!!x.metalnessMap,$e=!!x.roughnessMap,N=x.anisotropy>0,tn=x.clearcoat>0,ve=x.dispersion>0,T=x.retroreflectivity>0,m=x.iridescence>0,k=x.sheen>0,X=x.transmission>0,Q=N&&!!x.anisotropyMap,lt=tn&&!!x.clearcoatMap,ht=tn&&!!x.clearcoatNormalMap,tt=tn&&!!x.clearcoatRoughnessMap,it=m&&!!x.iridescenceMap,pt=m&&!!x.iridescenceThicknessMap,Ut=k&&!!x.sheenColorMap,_t=k&&!!x.sheenRoughnessMap,mt=!!x.specularMap,$t=!!x.specularColorMap,Bt=!!x.specularIntensityMap,Yt=X&&!!x.transmissionMap,D=X&&!!x.thicknessMap,gt=!!x.gradientMap,nt=!!x.alphaMap,xt=x.alphaTest>0,yt=!!x.alphaHash,at=!!x.extensions;let Ot=Jn;x.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Ot=i.toneMapping);const It={shaderID:Y,shaderType:x.type,shaderName:x.name,vertexShader:Zt,fragmentShader:qt,defines:x.defines,customVertexShaderID:re,customFragmentShaderID:J,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Tt,batchingColor:Tt&&U._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&U.instanceColor!==null,instancingMorph:Vt&&U.morphTexture!==null,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:ce.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ee,matcap:Ge,envMap:ne,envMapMode:ne&&ot.mapping,envMapCubeUVHeight:Z,aoMap:pe,lightMap:be,bumpMap:ae,normalMap:Ce,displacementMap:qe,emissiveMap:dn,normalMapObjectSpace:Ce&&x.normalMapType===td,normalMapTangentSpace:Ce&&x.normalMapType===Xo,packedNormalMap:Ce&&x.normalMapType===Xo&&yx(x.normalMap.format),metalnessMap:Ie,roughnessMap:$e,anisotropy:N,anisotropyMap:Q,clearcoat:tn,clearcoatMap:lt,clearcoatNormalMap:ht,clearcoatRoughnessMap:tt,dispersion:ve,retroreflection:T,iridescence:m,iridescenceMap:it,iridescenceThicknessMap:pt,sheen:k,sheenColorMap:Ut,sheenRoughnessMap:_t,specularMap:mt,specularColorMap:$t,specularIntensityMap:Bt,transmission:X,transmissionMap:Yt,thicknessMap:D,gradientMap:gt,opaque:x.transparent===!1&&x.blending===js&&x.alphaToCoverage===!1,alphaMap:nt,alphaTest:xt,alphaHash:yt,combine:x.combine,mapUv:ee&&_(x.map.channel),aoMapUv:pe&&_(x.aoMap.channel),lightMapUv:be&&_(x.lightMap.channel),bumpMapUv:ae&&_(x.bumpMap.channel),normalMapUv:Ce&&_(x.normalMap.channel),displacementMapUv:qe&&_(x.displacementMap.channel),emissiveMapUv:dn&&_(x.emissiveMap.channel),metalnessMapUv:Ie&&_(x.metalnessMap.channel),roughnessMapUv:$e&&_(x.roughnessMap.channel),anisotropyMapUv:Q&&_(x.anisotropyMap.channel),clearcoatMapUv:lt&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:ht&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:_t&&_(x.sheenRoughnessMap.channel),specularMapUv:mt&&_(x.specularMap.channel),specularColorMapUv:$t&&_(x.specularColorMap.channel),specularIntensityMapUv:Bt&&_(x.specularIntensityMap.channel),transmissionMapUv:Yt&&_(x.transmissionMap.channel),thicknessMapUv:D&&_(x.thicknessMap.channel),alphaMapUv:nt&&_(x.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Ce||N),vertexNormals:!!G.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!G.attributes.uv&&(ee||nt),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||G.attributes.normal===void 0&&Ce===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:wt,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:dt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ot,decodeVideoTexture:ee&&x.map.isVideoTexture===!0&&ce.getTransfer(x.map.colorSpace)===Me,decodeVideoTextureEmissive:dn&&x.emissiveMap.isVideoTexture===!0&&ce.getTransfer(x.emissiveMap.colorSpace)===Me,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ai,flipSided:x.side===Mn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:at&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&x.extensions.multiDraw===!0||Tt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return It.vertexUv1s=c.has(1),It.vertexUv2s=c.has(2),It.vertexUv3s=c.has(3),c.clear(),It}function g(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)b.push(L),b.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(p(b,x),R(b,x),b.push(i.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function p(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function R(x,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function O(x){const b=d[x.type];let L;if(b){const $=Wn[b];L=Gd.clone($.uniforms)}else L=x.uniforms;return L}function M(x,b){let L=u.get(b);return L!==void 0?++L.usedTimes:(L=new vx(i,b,x,s),l.push(L),u.set(b,L)),L}function A(x){if(--x.usedTimes===0){const b=l.indexOf(x);l[b]=l[l.length-1],l.pop(),u.delete(x.cacheKey),x.destroy()}}function y(x){o.remove(x)}function w(){o.dispose()}return{getParameters:E,getProgramCacheKey:g,getUniforms:O,acquireProgram:M,releaseProgram:A,releaseShaderCache:y,programs:l,dispose:w}}function Tx(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Ax(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Wl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Xl(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,_,E,g,p){let R=i[e];return R===void 0?(R={id:f.id,object:f,geometry:d,material:_,materialVariant:a(f),groupOrder:E,renderOrder:f.renderOrder,z:g,group:p},i[e]=R):(R.id=f.id,R.object=f,R.geometry=d,R.material=_,R.materialVariant=a(f),R.groupOrder=E,R.renderOrder=f.renderOrder,R.z=g,R.group=p),e++,R}function c(f,d,_,E,g,p,R){R.reversedDepth===!0&&(g=-g);const O=o(f,d,_,E,g,p);_.transmission>0?n.push(O):_.transparent===!0?s.push(O):t.push(O)}function l(f,d,_,E,g,p){const R=o(f,d,_,E,g,p);_.transmission>0?n.unshift(R):_.transparent===!0?s.unshift(R):t.unshift(R)}function u(f,d){t.length>1&&t.sort(f||Ax),n.length>1&&n.sort(d||Wl),s.length>1&&s.sort(d||Wl)}function h(){for(let f=e,d=i.length;f<d;f++){const _=i[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:h,sort:u}}function Rx(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Xl,i.set(n,[a])):s>=r.length?(a=new Xl,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function wx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new V,color:new se};break;case"SpotLight":t={position:new V,direction:new V,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new se,groundColor:new se};break;case"RectAreaLight":t={color:new se,position:new V,halfWidth:new V,halfHeight:new V};break}return i[e.id]=t,t}}}function Cx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Px=0;function Lx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ix(i){const e=new wx,t=Cx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new V);const s=new V,r=new Le,a=new Le;function o(l){let u=0,h=0,f=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let d=0,_=0,E=0,g=0,p=0,R=0,O=0,M=0,A=0,y=0,w=0,x=0,b=0,L=0;l.sort(Lx);for(let U=0,z=l.length;U<z;U++){const I=l[U],G=I.color,et=I.intensity,K=I.distance;let ot=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Zi?ot=I.shadow.map.texture:ot=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=G.r*et,h+=G.g*et,f+=G.b*et;else if(I.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(I.sh.coefficients[Z],et);L++}else if(I.isSunLight){const Z=e.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Y=I.shadow,j=t.get(I);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),n.sunShadow[_]=j,n.sunShadowMap[_]=ot;const Mt=Y.getViewportCount();for(let dt=0;dt<Mt;dt++)n.sunShadowMatrix[E+dt]=Y.getMatrix(dt),n.sunShadowCascade[E+dt]=Y._cascadeData[dt];E+=Mt,_++}n.sun[d]=Z,d++}else if(I.isDirectionalLight){const Z=e.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Y=I.shadow,j=t.get(I);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,n.directionalShadow[g]=j,n.directionalShadowMap[g]=ot,n.directionalShadowMatrix[g]=I.shadow.matrix,A++}n.directional[g]=Z,g++}else if(I.isSpotLight){const Z=e.get(I);Z.position.setFromMatrixPosition(I.matrixWorld),Z.color.copy(G).multiplyScalar(et),Z.distance=K,Z.coneCos=Math.cos(I.angle),Z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Z.decay=I.decay,n.spot[R]=Z;const Y=I.shadow;if(I.map&&(n.spotLightMap[x]=I.map,x++,Y.updateMatrices(I),I.castShadow&&b++),n.spotLightMatrix[R]=Y.matrix,I.castShadow){const j=t.get(I);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,n.spotShadow[R]=j,n.spotShadowMap[R]=ot,w++}R++}else if(I.isRectAreaLight){const Z=e.get(I);Z.color.copy(G).multiplyScalar(et),Z.halfWidth.set(I.width*.5,0,0),Z.halfHeight.set(0,I.height*.5,0),n.rectArea[O]=Z,O++}else if(I.isPointLight){const Z=e.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),Z.distance=I.distance,Z.decay=I.decay,I.castShadow){const Y=I.shadow,j=t.get(I);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,j.shadowCameraNear=Y.camera.near,j.shadowCameraFar=Y.camera.far,n.pointShadow[p]=j,n.pointShadowMap[p]=ot,n.pointShadowMatrix[p]=I.shadow.matrix,y++}n.point[p]=Z,p++}else if(I.isHemisphereLight){const Z=e.get(I);Z.skyColor.copy(I.color).multiplyScalar(et),Z.groundColor.copy(I.groundColor).multiplyScalar(et),n.hemi[M]=Z,M++}}O>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const $=n.hash;($.sunLength!==d||$.directionalLength!==g||$.pointLength!==p||$.spotLength!==R||$.rectAreaLength!==O||$.hemiLength!==M||$.numSunShadows!==_||$.numDirectionalShadows!==A||$.numPointShadows!==y||$.numSpotShadows!==w||$.numSpotMaps!==x||$.numLightProbes!==L)&&(n.sun.length=d,n.directional.length=g,n.spot.length=R,n.rectArea.length=O,n.point.length=p,n.hemi.length=M,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=E,n.sunShadowCascade.length=E,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=y,n.pointShadowMap.length=y,n.pointShadowMatrix.length=y,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+x-b,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=L,$.sunLength=d,$.directionalLength=g,$.pointLength=p,$.spotLength=R,$.rectAreaLength=O,$.hemiLength=M,$.numSunShadows=_,$.numDirectionalShadows=A,$.numPointShadows=y,$.numSpotShadows=w,$.numSpotMaps=x,$.numLightProbes=L,n.version=Px++)}function c(l,u){let h=0,f=0,d=0,_=0,E=0,g=0;const p=u.matrixWorldInverse;for(let R=0,O=l.length;R<O;R++){const M=l[R];if(M.isSunLight){const A=n.sun[h];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(p),h++}else if(M.isDirectionalLight){const A=n.directional[f];A.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),f++}else if(M.isSpotLight){const A=n.spot[_];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),_++}else if(M.isRectAreaLight){const A=n.rectArea[E];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(p),a.identity(),r.copy(M.matrixWorld),r.premultiply(p),a.extractRotation(r),A.halfWidth.set(M.width*.5,0,0),A.halfHeight.set(0,M.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),E++}else if(M.isPointLight){const A=n.point[d];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){const A=n.hemi[g];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(p),g++}}}return{setup:o,setupView:c,state:n}}function ql(i){const e=new Ix(i),t=[],n=[],s=[];function r(f){h.camera=f,t.length=0,n.length=0,s.length=0}function a(f){t.push(f)}function o(f){n.push(f)}function c(f){s.push(f)}function l(){e.setup(t)}function u(f){e.setupView(t,f)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Dx(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new ql(i),e.set(s,[o])):r>=a.length?(o=new ql(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Nx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ux=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,$x=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],Ox=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],Yl=new Le,qs=new V,Ja=new V;function Fx(i,e,t){let n=new pc;const s=new Xt,r=new Xt,a=new De,o=new Wd,c=new Xd,l={},u=t.maxTextureSize,h={[Yi]:Mn,[Mn]:Yi,[ai]:ai},f=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:Nx,fragmentShader:Ux}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new je;_.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new me(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gr;let p=this.type;this.render=function(y,w,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||y.length===0)return;this.type===Lh&&(kt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Gr);const b=i.getRenderTarget(),L=i.getActiveCubeFace(),$=i.getActiveMipmapLevel(),U=i.state;U.setBlending(ci),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const z=p!==this.type;z&&w.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(G=>G.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,G=y.length;I<G;I++){const et=y[I],K=et.shadow;if(K===void 0){kt("WebGLShadowMap:",et,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);const ot=K.getFrameExtents();s.multiply(ot),r.copy(K.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ot.x),s.x=r.x*ot.x,K.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ot.y),s.y=r.y*ot.y,K.mapSize.y=r.y));const Z=i.state.buffers.depth.getReversed();if(K.camera._reversedDepth=Z,K.map===null||z===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===Ys){if(et.isPointLight){kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new kn(s.x,s.y,{format:Zi,type:jn,minFilter:on,magFilter:on,generateMipmaps:!1}),K.map.texture.name=et.name+".shadowMap",K.map.depthTexture=new ar(s.x,s.y,Yn),K.map.depthTexture.name=et.name+".shadowMapDepth",K.map.depthTexture.format=pi,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Je,K.map.depthTexture.magFilter=Je}else et.isPointLight?(K.map=new Wu(s.x),K.map.depthTexture=new Bd(s.x,Qn)):(K.map=new kn(s.x,s.y),K.map.depthTexture=new ar(s.x,s.y,Qn)),K.map.depthTexture.name=et.name+".shadowMap",K.map.depthTexture.format=pi,this.type===Gr?(K.map.depthTexture.compareFunction=Z?hc:fc,K.map.depthTexture.minFilter=on,K.map.depthTexture.magFilter=on):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Je,K.map.depthTexture.magFilter=Je);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==s.x||K.map.height!==s.y)&&K.map.setSize(s.x,s.y);const Y=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();et.isPointLight!==!0&&K.updateMatrices(et,x);for(let j=0;j<Y;j++){const Mt=K.getCamera(j);if(et.isPointLight){const dt=K.camera,Zt=K.matrix,qt=et.distance||dt.far;qt!==dt.far&&(dt.far=qt,dt.updateProjectionMatrix()),qs.setFromMatrixPosition(et.matrixWorld),dt.position.copy(qs),Ja.copy(dt.position),Ja.add($x[j]),dt.up.copy(Ox[j]),dt.lookAt(Ja),dt.updateMatrixWorld(),Zt.makeTranslation(-qs.x,-qs.y,-qs.z),Yl.multiplyMatrices(dt.projectionMatrix,dt.matrixWorldInverse),K._frustum.setFromProjectionMatrix(Yl,dt.coordinateSystem,dt.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)i.setRenderTarget(K.map,j),i.clear();else{j===0&&(i.setRenderTarget(K.map),i.clear());const dt=K.getViewport(j);a.set(r.x*dt.x,r.y*dt.y,r.x*dt.z,r.y*dt.w),U.viewport(a)}n=K.getFrustum(j),M(w,x,Mt,et,this.type)}K.isPointLightShadow!==!0&&this.type===Ys&&R(K,x),K.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(b,L,$)};function R(y,w){const x=e.update(E);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,d.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),y.mapPass===null?y.mapPass=new kn(s.x,s.y,{format:Zi,type:jn}):(y.mapPass.width!==y.map.width||y.mapPass.height!==y.map.height)&&y.mapPass.setSize(y.map.width,y.map.height),f.uniforms.shadow_pass.value=y.map.depthTexture,f.uniforms.resolution.value.set(y.map.width,y.map.height),f.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(w,null,x,f,E,null),d.uniforms.shadow_pass.value=y.mapPass.texture,d.uniforms.resolution.value.set(y.map.width,y.map.height),d.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(w,null,x,d,E,null)}function O(y,w,x,b){let L=null;const $=x.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if($!==void 0)L=$;else if(L=x.isPointLight===!0?c:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const U=L.uuid,z=w.uuid;let I=l[U];I===void 0&&(I={},l[U]=I);let G=I[z];G===void 0&&(G=L.clone(),I[z]=G,w.addEventListener("dispose",A)),L=G}if(L.visible=w.visible,L.wireframe=w.wireframe,b===Ys?L.side=w.shadowSide!==null?w.shadowSide:w.side:L.side=w.shadowSide!==null?w.shadowSide:h[w.side],L.alphaMap=w.alphaMap,L.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,L.map=w.map,L.clipShadows=w.clipShadows,L.clippingPlanes=w.clippingPlanes,L.clipIntersection=w.clipIntersection,L.displacementMap=w.displacementMap,L.displacementScale=w.displacementScale,L.displacementBias=w.displacementBias,L.wireframeLinewidth=w.wireframeLinewidth,L.linewidth=w.linewidth,x.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const U=i.properties.get(L);U.light=x}return L}function M(y,w,x,b,L){if(y.visible===!1)return;if(y.layers.test(w.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&L===Ys)&&(!y.frustumCulled||y.intersectsFrustum(n))){y.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,y.matrixWorld);const z=e.update(y),I=y.material;if(Array.isArray(I)){const G=z.groups;for(let et=0,K=G.length;et<K;et++){const ot=G[et],Z=I[ot.materialIndex];if(Z&&Z.visible){const Y=O(y,Z,b,L);y.onBeforeShadow(i,y,w,x,z,Y,ot),i.renderBufferDirect(x,null,z,Y,y,ot),y.onAfterShadow(i,y,w,x,z,Y,ot)}}}else if(I.visible){const G=O(y,I,b,L);y.onBeforeShadow(i,y,w,x,z,G,null),i.renderBufferDirect(x,null,z,G,y,null),y.onAfterShadow(i,y,w,x,z,G,null)}}const U=y.children;for(let z=0,I=U.length;z<I;z++)M(U[z],w,x,b,L)}function A(y){y.target.removeEventListener("dispose",A);for(const x in l){const b=l[x],L=y.target.uuid;L in b&&(b[L].dispose(),delete b[L])}}}function Bx(i,e){function t(){let D=!1;const gt=new De;let nt=null;const xt=new De(0,0,0,0);return{setMask:function(yt){nt!==yt&&!D&&(i.colorMask(yt,yt,yt,yt),nt=yt)},setLocked:function(yt){D=yt},setClear:function(yt,at,Ot,It,Te){Te===!0&&(yt*=It,at*=It,Ot*=It),gt.set(yt,at,Ot,It),xt.equals(gt)===!1&&(i.clearColor(yt,at,Ot,It),xt.copy(gt))},reset:function(){D=!1,nt=null,xt.set(-1,0,0,0)}}}function n(){let D=!1,gt=!1,nt=null,xt=null,yt=null;return{setReversed:function(at){if(gt!==at){const Ot=e.get("EXT_clip_control");at?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT),gt=at;const It=yt;yt=null,this.setClear(It)}},getReversed:function(){return gt},setTest:function(at){at?st(i.DEPTH_TEST):wt(i.DEPTH_TEST)},setMask:function(at){nt!==at&&!D&&(i.depthMask(at),nt=at)},setFunc:function(at){if(gt&&(at=fd[at]),xt!==at){switch(at){case oo:i.depthFunc(i.NEVER);break;case co:i.depthFunc(i.ALWAYS);break;case lo:i.depthFunc(i.LESS);break;case nr:i.depthFunc(i.LEQUAL);break;case uo:i.depthFunc(i.EQUAL);break;case fo:i.depthFunc(i.GEQUAL);break;case ho:i.depthFunc(i.GREATER);break;case po:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xt=at}},setLocked:function(at){D=at},setClear:function(at){yt!==at&&(yt=at,gt&&(at=1-at),i.clearDepth(at))},reset:function(){D=!1,nt=null,xt=null,yt=null,gt=!1}}}function s(){let D=!1,gt=null,nt=null,xt=null,yt=null,at=null,Ot=null,It=null,Te=null;return{setTest:function(xe){D||(xe?st(i.STENCIL_TEST):wt(i.STENCIL_TEST))},setMask:function(xe){gt!==xe&&!D&&(i.stencilMask(xe),gt=xe)},setFunc:function(xe,Dn,Gn){(nt!==xe||xt!==Dn||yt!==Gn)&&(i.stencilFunc(xe,Dn,Gn),nt=xe,xt=Dn,yt=Gn)},setOp:function(xe,Dn,Gn){(at!==xe||Ot!==Dn||It!==Gn)&&(i.stencilOp(xe,Dn,Gn),at=xe,Ot=Dn,It=Gn)},setLocked:function(xe){D=xe},setClear:function(xe){Te!==xe&&(i.clearStencil(xe),Te=xe)},reset:function(){D=!1,gt=null,nt=null,xt=null,yt=null,at=null,Ot=null,It=null,Te=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let u={},h={},f={},d=new WeakMap,_=[],E=null,g=!1,p=null,R=null,O=null,M=null,A=null,y=null,w=null,x=new se(0,0,0),b=0,L=!1,$=null,U=null,z=null,I=null,G=null;const et=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,ot=0;const Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(Z)[1]),K=ot>=1):Z.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),K=ot>=2);let Y=null,j={};const Mt=i.getParameter(i.SCISSOR_BOX),dt=i.getParameter(i.VIEWPORT),Zt=new De().fromArray(Mt),qt=new De().fromArray(dt);function re(D,gt,nt,xt){const yt=new Uint8Array(4),at=i.createTexture();i.bindTexture(D,at),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ot=0;Ot<nt;Ot++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(gt,0,i.RGBA,1,1,xt,0,i.RGBA,i.UNSIGNED_BYTE,yt):i.texImage2D(gt+Ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,yt);return at}const J={};J[i.TEXTURE_2D]=re(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=re(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),st(i.DEPTH_TEST),a.setFunc(nr),ae(!1),Ce(Zc),st(i.CULL_FACE),pe(ci);function st(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function wt(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function Vt(D,gt){return f[D]!==gt?(i.bindFramebuffer(D,gt),f[D]=gt,D===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=gt),D===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=gt),!0):!1}function Tt(D,gt){let nt=_,xt=!1;if(D){nt=d.get(gt),nt===void 0&&(nt=[],d.set(gt,nt));const yt=D.textures;if(nt.length!==yt.length||nt[0]!==i.COLOR_ATTACHMENT0){for(let at=0,Ot=yt.length;at<Ot;at++)nt[at]=i.COLOR_ATTACHMENT0+at;nt.length=yt.length,xt=!0}}else nt[0]!==i.BACK&&(nt[0]=i.BACK,xt=!0);xt&&i.drawBuffers(nt)}function ee(D){return E!==D?(i.useProgram(D),E=D,!0):!1}const Ge={[bs]:i.FUNC_ADD,[Dh]:i.FUNC_SUBTRACT,[Nh]:i.FUNC_REVERSE_SUBTRACT};Ge[Uh]=i.MIN,Ge[$h]=i.MAX;const ne={[Oh]:i.ZERO,[Fh]:i.ONE,[Bh]:i.SRC_COLOR,[hu]:i.SRC_ALPHA,[Wh]:i.SRC_ALPHA_SATURATE,[Vh]:i.DST_COLOR,[Gh]:i.DST_ALPHA,[kh]:i.ONE_MINUS_SRC_COLOR,[du]:i.ONE_MINUS_SRC_ALPHA,[Hh]:i.ONE_MINUS_DST_COLOR,[zh]:i.ONE_MINUS_DST_ALPHA,[Xh]:i.CONSTANT_COLOR,[qh]:i.ONE_MINUS_CONSTANT_COLOR,[Yh]:i.CONSTANT_ALPHA,[Kh]:i.ONE_MINUS_CONSTANT_ALPHA};function pe(D,gt,nt,xt,yt,at,Ot,It,Te,xe){if(D===ci){g===!0&&(wt(i.BLEND),g=!1);return}if(g===!1&&(st(i.BLEND),g=!0),D!==Ih){if(D!==p||xe!==L){if((R!==bs||A!==bs)&&(i.blendEquation(i.FUNC_ADD),R=bs,A=bs),xe)switch(D){case js:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case er:i.blendFunc(i.ONE,i.ONE);break;case Jc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:de("WebGLState: Invalid blending: ",D);break}else switch(D){case js:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case er:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Jc:de("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qc:de("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:de("WebGLState: Invalid blending: ",D);break}O=null,M=null,y=null,w=null,x.set(0,0,0),b=0,p=D,L=xe}return}yt=yt||gt,at=at||nt,Ot=Ot||xt,(gt!==R||yt!==A)&&(i.blendEquationSeparate(Ge[gt],Ge[yt]),R=gt,A=yt),(nt!==O||xt!==M||at!==y||Ot!==w)&&(i.blendFuncSeparate(ne[nt],ne[xt],ne[at],ne[Ot]),O=nt,M=xt,y=at,w=Ot),(It.equals(x)===!1||Te!==b)&&(i.blendColor(It.r,It.g,It.b,Te),x.copy(It),b=Te),p=D,L=!1}function be(D,gt){D.side===ai?wt(i.CULL_FACE):st(i.CULL_FACE);let nt=D.side===Mn;gt&&(nt=!nt),ae(nt),D.blending===js&&D.transparent===!1?pe(ci):pe(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const xt=D.stencilWrite;o.setTest(xt),xt&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),dn(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):wt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ae(D){$!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),$=D)}function Ce(D){D!==Ch?(st(i.CULL_FACE),D!==U&&(D===Zc?i.cullFace(i.BACK):D===Ph?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):wt(i.CULL_FACE),U=D}function qe(D){D!==z&&(K&&i.lineWidth(D),z=D)}function dn(D,gt,nt){D?(st(i.POLYGON_OFFSET_FILL),(I!==gt||G!==nt)&&(I=gt,G=nt,a.getReversed()&&(gt=-gt),i.polygonOffset(gt,nt))):wt(i.POLYGON_OFFSET_FILL)}function Ie(D){D?st(i.SCISSOR_TEST):wt(i.SCISSOR_TEST)}function $e(D){D===void 0&&(D=i.TEXTURE0+et-1),Y!==D&&(i.activeTexture(D),Y=D)}function N(D,gt,nt){nt===void 0&&(Y===null?nt=i.TEXTURE0+et-1:nt=Y);let xt=j[nt];xt===void 0&&(xt={type:void 0,texture:void 0},j[nt]=xt),(xt.type!==D||xt.texture!==gt)&&(Y!==nt&&(i.activeTexture(nt),Y=nt),i.bindTexture(D,gt||J[D]),xt.type=D,xt.texture=gt)}function tn(){const D=j[Y];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ve(){try{i.compressedTexImage2D(...arguments)}catch(D){de("WebGLState:",D)}}function T(){try{i.compressedTexImage3D(...arguments)}catch(D){de("WebGLState:",D)}}function m(){try{i.texSubImage2D(...arguments)}catch(D){de("WebGLState:",D)}}function k(){try{i.texSubImage3D(...arguments)}catch(D){de("WebGLState:",D)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(D){de("WebGLState:",D)}}function Q(){try{i.compressedTexSubImage3D(...arguments)}catch(D){de("WebGLState:",D)}}function lt(){try{i.texStorage2D(...arguments)}catch(D){de("WebGLState:",D)}}function ht(){try{i.texStorage3D(...arguments)}catch(D){de("WebGLState:",D)}}function tt(){try{i.texImage2D(...arguments)}catch(D){de("WebGLState:",D)}}function it(){try{i.texImage3D(...arguments)}catch(D){de("WebGLState:",D)}}function pt(D){return h[D]!==void 0?h[D]:i.getParameter(D)}function Ut(D,gt){h[D]!==gt&&(i.pixelStorei(D,gt),h[D]=gt)}function _t(D){Zt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Zt.copy(D))}function mt(D){qt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),qt.copy(D))}function $t(D,gt){let nt=l.get(gt);nt===void 0&&(nt=new WeakMap,l.set(gt,nt));let xt=nt.get(D);xt===void 0&&(xt=i.getUniformBlockIndex(gt,D.name),nt.set(D,xt))}function Bt(D,gt){const xt=l.get(gt).get(D);c.get(gt)!==xt&&(i.uniformBlockBinding(gt,xt,D.__bindingPointIndex),c.set(gt,xt))}function Yt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},Y=null,j={},f={},d=new WeakMap,_=[],E=null,g=!1,p=null,R=null,O=null,M=null,A=null,y=null,w=null,x=new se(0,0,0),b=0,L=!1,$=null,U=null,z=null,I=null,G=null,Zt.set(0,0,i.canvas.width,i.canvas.height),qt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:st,disable:wt,bindFramebuffer:Vt,drawBuffers:Tt,useProgram:ee,setBlending:pe,setMaterial:be,setFlipSided:ae,setCullFace:Ce,setLineWidth:qe,setPolygonOffset:dn,setScissorTest:Ie,activeTexture:$e,bindTexture:N,unbindTexture:tn,compressedTexImage2D:ve,compressedTexImage3D:T,texImage2D:tt,texImage3D:it,pixelStorei:Ut,getParameter:pt,updateUBOMapping:$t,uniformBlockBinding:Bt,texStorage2D:lt,texStorage3D:ht,texSubImage2D:m,texSubImage3D:k,compressedTexSubImage2D:X,compressedTexSubImage3D:Q,scissor:_t,viewport:mt,reset:Yt}}function kx(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Xt,u=new WeakMap,h=new Set;let f;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(T,m){return _?new OffscreenCanvas(T,m):ea("canvas")}function g(T,m,k){let X=1;const Q=ve(T);if((Q.width>k||Q.height>k)&&(X=k/Math.max(Q.width,Q.height)),X<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const lt=Math.floor(X*Q.width),ht=Math.floor(X*Q.height);f===void 0&&(f=E(lt,ht));const tt=m?E(lt,ht):f;return tt.width=lt,tt.height=ht,tt.getContext("2d").drawImage(T,0,0,lt,ht),kt("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+lt+"x"+ht+")."),tt}else return"data"in T&&kt("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),T;return T}function p(T){return T.generateMipmaps}function R(T){i.generateMipmap(T)}function O(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(T,m,k,X,Q,lt=!1){if(T!==null){if(i[T]!==void 0)return i[T];kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ht;X&&(ht=e.get("EXT_texture_norm16"),ht||kt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let tt=m;if(m===i.RED&&(k===i.FLOAT&&(tt=i.R32F),k===i.HALF_FLOAT&&(tt=i.R16F),k===i.UNSIGNED_BYTE&&(tt=i.R8),k===i.UNSIGNED_SHORT&&ht&&(tt=ht.R16_EXT),k===i.SHORT&&ht&&(tt=ht.R16_SNORM_EXT)),m===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(tt=i.R8UI),k===i.UNSIGNED_SHORT&&(tt=i.R16UI),k===i.UNSIGNED_INT&&(tt=i.R32UI),k===i.BYTE&&(tt=i.R8I),k===i.SHORT&&(tt=i.R16I),k===i.INT&&(tt=i.R32I)),m===i.RG&&(k===i.FLOAT&&(tt=i.RG32F),k===i.HALF_FLOAT&&(tt=i.RG16F),k===i.UNSIGNED_BYTE&&(tt=i.RG8),k===i.UNSIGNED_SHORT&&ht&&(tt=ht.RG16_EXT),k===i.SHORT&&ht&&(tt=ht.RG16_SNORM_EXT)),m===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(tt=i.RG8UI),k===i.UNSIGNED_SHORT&&(tt=i.RG16UI),k===i.UNSIGNED_INT&&(tt=i.RG32UI),k===i.BYTE&&(tt=i.RG8I),k===i.SHORT&&(tt=i.RG16I),k===i.INT&&(tt=i.RG32I)),m===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),k===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),k===i.UNSIGNED_INT&&(tt=i.RGB32UI),k===i.BYTE&&(tt=i.RGB8I),k===i.SHORT&&(tt=i.RGB16I),k===i.INT&&(tt=i.RGB32I)),m===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),k===i.UNSIGNED_INT&&(tt=i.RGBA32UI),k===i.BYTE&&(tt=i.RGBA8I),k===i.SHORT&&(tt=i.RGBA16I),k===i.INT&&(tt=i.RGBA32I)),m===i.RGB&&(k===i.UNSIGNED_SHORT&&ht&&(tt=ht.RGB16_EXT),k===i.SHORT&&ht&&(tt=ht.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(tt=i.R11F_G11F_B10F)),m===i.RGBA){const it=lt?ta:ce.getTransfer(Q);k===i.FLOAT&&(tt=i.RGBA32F),k===i.HALF_FLOAT&&(tt=i.RGBA16F),k===i.UNSIGNED_BYTE&&(tt=it===Me?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&ht&&(tt=ht.RGBA16_EXT),k===i.SHORT&&ht&&(tt=ht.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&e.get("EXT_color_buffer_float"),tt}function A(T,m){let k;return T?m===null||m===Qn||m===sr?k=i.DEPTH24_STENCIL8:m===Yn?k=i.DEPTH32F_STENCIL8:m===ir&&(k=i.DEPTH24_STENCIL8,kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===Qn||m===sr?k=i.DEPTH_COMPONENT24:m===Yn?k=i.DEPTH_COMPONENT32F:m===ir&&(k=i.DEPTH_COMPONENT16),k}function y(T,m){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==Je&&T.minFilter!==on?Math.log2(Math.max(m.width,m.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?m.mipmaps.length:1}function w(T){const m=T.target;m.removeEventListener("dispose",w),b(m),m.isVideoTexture&&u.delete(m),m.isHTMLTexture&&h.delete(m)}function x(T){const m=T.target;m.removeEventListener("dispose",x),$(m)}function b(T){const m=n.get(T);if(m.__webglInit===void 0)return;const k=T.source,X=d.get(k);if(X){const Q=X[m.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&L(T),Object.keys(X).length===0&&d.delete(k)}n.remove(T)}function L(T){const m=n.get(T);i.deleteTexture(m.__webglTexture);const k=T.source,X=d.get(k);delete X[m.__cacheKey],a.memory.textures--}function $(T){const m=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(m.__webglFramebuffer[X]))for(let Q=0;Q<m.__webglFramebuffer[X].length;Q++)i.deleteFramebuffer(m.__webglFramebuffer[X][Q]);else i.deleteFramebuffer(m.__webglFramebuffer[X]);m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer[X])}else{if(Array.isArray(m.__webglFramebuffer))for(let X=0;X<m.__webglFramebuffer.length;X++)i.deleteFramebuffer(m.__webglFramebuffer[X]);else i.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&i.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let X=0;X<m.__webglColorRenderbuffer.length;X++)m.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(m.__webglColorRenderbuffer[X]);m.__webglDepthRenderbuffer&&i.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const k=T.textures;for(let X=0,Q=k.length;X<Q;X++){const lt=n.get(k[X]);lt.__webglTexture&&(i.deleteTexture(lt.__webglTexture),a.memory.textures--),n.remove(k[X])}n.remove(T)}let U=0;function z(){U=0}function I(){return U}function G(T){U=T}function et(){const T=U;return T>=s.maxTextures&&kt("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,T}function K(T){const m=[];return m.push(T.wrapS),m.push(T.wrapT),m.push(T.wrapR||0),m.push(T.magFilter),m.push(T.minFilter),m.push(T.anisotropy),m.push(T.internalFormat),m.push(T.format),m.push(T.type),m.push(T.generateMipmaps),m.push(T.premultiplyAlpha),m.push(T.flipY),m.push(T.unpackAlignment),m.push(T.colorSpace),m.join()}function ot(T,m){const k=n.get(T);if(T.isVideoTexture&&N(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&k.__version!==T.version){const X=T.image;if(X===null)kt("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)kt("WebGLRenderer: Texture marked for update but image is incomplete");else{wt(k,T,m);return}}else T.isExternalTexture&&(k.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+m)}function Z(T,m){const k=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){wt(k,T,m);return}else T.isExternalTexture&&(k.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+m)}function Y(T,m){const k=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){wt(k,T,m);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+m)}function j(T,m){const k=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&k.__version!==T.version){Vt(k,T,m);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+m)}const Mt={[Zr]:i.REPEAT,[oi]:i.CLAMP_TO_EDGE,[mo]:i.MIRRORED_REPEAT},dt={[Je]:i.NEAREST,[Qh]:i.NEAREST_MIPMAP_NEAREST,[fr]:i.NEAREST_MIPMAP_LINEAR,[on]:i.LINEAR,[va]:i.LINEAR_MIPMAP_NEAREST,[Xi]:i.LINEAR_MIPMAP_LINEAR},Zt={[nd]:i.NEVER,[od]:i.ALWAYS,[id]:i.LESS,[fc]:i.LEQUAL,[sd]:i.EQUAL,[hc]:i.GEQUAL,[rd]:i.GREATER,[ad]:i.NOTEQUAL};function qt(T,m){if(m.type===Yn&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===on||m.magFilter===va||m.magFilter===fr||m.magFilter===Xi||m.minFilter===on||m.minFilter===va||m.minFilter===fr||m.minFilter===Xi)&&kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Mt[m.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Mt[m.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Mt[m.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,dt[m.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,dt[m.minFilter]),m.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Zt[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===Je||m.minFilter!==fr&&m.minFilter!==Xi||m.type===Yn&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||n.get(m).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,s.getMaxAnisotropy())),n.get(m).__currentAnisotropy=m.anisotropy}}}function re(T,m){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,m.addEventListener("dispose",w));const X=m.source;let Q=d.get(X);Q===void 0&&(Q={},d.set(X,Q));const lt=K(m);if(lt!==T.__cacheKey){Q[lt]===void 0&&(Q[lt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Q[lt].usedTimes++;const ht=Q[T.__cacheKey];ht!==void 0&&(Q[T.__cacheKey].usedTimes--,ht.usedTimes===0&&L(m)),T.__cacheKey=lt,T.__webglTexture=Q[lt].texture}return k}function J(T,m,k){return Math.floor(Math.floor(T/k)/m)}function st(T,m,k,X){const lt=T.updateRanges;if(lt.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,m.width,m.height,k,X,m.data);else{lt.sort((Ut,_t)=>Ut.start-_t.start);let ht=0;for(let Ut=1;Ut<lt.length;Ut++){const _t=lt[ht],mt=lt[Ut],$t=_t.start+_t.count,Bt=J(mt.start,m.width,4),Yt=J(_t.start,m.width,4);mt.start<=$t+1&&Bt===Yt&&J(mt.start+mt.count-1,m.width,4)===Bt?_t.count=Math.max(_t.count,mt.start+mt.count-_t.start):(++ht,lt[ht]=mt)}lt.length=ht+1;const tt=t.getParameter(i.UNPACK_ROW_LENGTH),it=t.getParameter(i.UNPACK_SKIP_PIXELS),pt=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,m.width);for(let Ut=0,_t=lt.length;Ut<_t;Ut++){const mt=lt[Ut],$t=Math.floor(mt.start/4),Bt=Math.ceil(mt.count/4),Yt=$t%m.width,D=Math.floor($t/m.width),gt=Bt,nt=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Yt),t.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,Yt,D,gt,nt,k,X,m.data)}T.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,tt),t.pixelStorei(i.UNPACK_SKIP_PIXELS,it),t.pixelStorei(i.UNPACK_SKIP_ROWS,pt)}}function wt(T,m,k){let X=i.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),m.isData3DTexture&&(X=i.TEXTURE_3D);const Q=re(T,m),lt=m.source;t.bindTexture(X,T.__webglTexture,i.TEXTURE0+k);const ht=n.get(lt);if(lt.version!==ht.__version||Q===!0){if(t.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&m.image instanceof ImageBitmap)===!1){const nt=ce.getPrimaries(ce.workingColorSpace),xt=m.colorSpace===Ri?null:ce.getPrimaries(m.colorSpace),yt=m.colorSpace===Ri||nt===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt)}t.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment);let it=g(m.image,!1,s.maxTextureSize);it=tn(m,it);const pt=r.convert(m.format,m.colorSpace),Ut=r.convert(m.type);let _t=M(m.internalFormat,pt,Ut,m.normalized,m.colorSpace,m.isVideoTexture);qt(X,m);let mt;const $t=m.mipmaps,Bt=m.isVideoTexture!==!0,Yt=ht.__version===void 0||Q===!0,D=lt.dataReady,gt=y(m,it);if(m.isDepthTexture)_t=A(m.format===qi,m.type),Yt&&(Bt?t.texStorage2D(i.TEXTURE_2D,1,_t,it.width,it.height):t.texImage2D(i.TEXTURE_2D,0,_t,it.width,it.height,0,pt,Ut,null));else if(m.isDataTexture)if($t.length>0){Bt&&Yt&&t.texStorage2D(i.TEXTURE_2D,gt,_t,$t[0].width,$t[0].height);for(let nt=0,xt=$t.length;nt<xt;nt++)mt=$t[nt],Bt?D&&t.texSubImage2D(i.TEXTURE_2D,nt,0,0,mt.width,mt.height,pt,Ut,mt.data):t.texImage2D(i.TEXTURE_2D,nt,_t,mt.width,mt.height,0,pt,Ut,mt.data);m.generateMipmaps=!1}else Bt?(Yt&&t.texStorage2D(i.TEXTURE_2D,gt,_t,it.width,it.height),D&&st(m,it,pt,Ut)):t.texImage2D(i.TEXTURE_2D,0,_t,it.width,it.height,0,pt,Ut,it.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){Bt&&Yt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,gt,_t,$t[0].width,$t[0].height,it.depth);for(let nt=0,xt=$t.length;nt<xt;nt++)if(mt=$t[nt],m.format!==On)if(pt!==null)if(Bt){if(D)if(m.layerUpdates.size>0){const yt=Al(mt.width,mt.height,m.format,m.type);for(const at of m.layerUpdates){const Ot=mt.data.subarray(at*yt/mt.data.BYTES_PER_ELEMENT,(at+1)*yt/mt.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,at,mt.width,mt.height,1,pt,Ot)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,mt.width,mt.height,it.depth,pt,mt.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,nt,_t,mt.width,mt.height,it.depth,0,mt.data,0,0);else kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,mt.width,mt.height,it.depth,pt,Ut,mt.data):t.texImage3D(i.TEXTURE_2D_ARRAY,nt,_t,mt.width,mt.height,it.depth,0,pt,Ut,mt.data);m.layerUpdates.size>0&&m.clearLayerUpdates()}else{Bt&&Yt&&t.texStorage2D(i.TEXTURE_2D,gt,_t,$t[0].width,$t[0].height);for(let nt=0,xt=$t.length;nt<xt;nt++)mt=$t[nt],m.format!==On?pt!==null?Bt?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,nt,0,0,mt.width,mt.height,pt,mt.data):t.compressedTexImage2D(i.TEXTURE_2D,nt,_t,mt.width,mt.height,0,mt.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?D&&t.texSubImage2D(i.TEXTURE_2D,nt,0,0,mt.width,mt.height,pt,Ut,mt.data):t.texImage2D(i.TEXTURE_2D,nt,_t,mt.width,mt.height,0,pt,Ut,mt.data)}else if(m.isDataArrayTexture)if(Bt){if(Yt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,gt,_t,it.width,it.height,it.depth),D)if(m.layerUpdates.size>0){const nt=Al(it.width,it.height,m.format,m.type);for(const xt of m.layerUpdates){const yt=it.data.subarray(xt*nt/it.data.BYTES_PER_ELEMENT,(xt+1)*nt/it.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,xt,it.width,it.height,1,pt,Ut,yt)}m.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,pt,Ut,it.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,_t,it.width,it.height,it.depth,0,pt,Ut,it.data);else if(m.isData3DTexture)Bt?(Yt&&t.texStorage3D(i.TEXTURE_3D,gt,_t,it.width,it.height,it.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,pt,Ut,it.data)):t.texImage3D(i.TEXTURE_3D,0,_t,it.width,it.height,it.depth,0,pt,Ut,it.data);else if(m.isFramebufferTexture){if(Yt)if(Bt)t.texStorage2D(i.TEXTURE_2D,gt,_t,it.width,it.height);else{let nt=it.width,xt=it.height;for(let yt=0;yt<gt;yt++)t.texImage2D(i.TEXTURE_2D,yt,_t,nt,xt,0,pt,Ut,null),nt>>=1,xt>>=1}}else if(m.isHTMLTexture){if("texElementImage2D"in i){const nt=i.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),it.parentNode!==nt){nt.appendChild(it),h.add(m),nt.onpaint=xt=>{const yt=xt.changedElements;for(const at of h)yt.includes(at.image)&&(at.needsUpdate=!0)},nt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,it);else{const yt=i.RGBA,at=i.RGBA,Ot=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,yt,at,Ot,it)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if($t.length>0){if(Bt&&Yt){const nt=ve($t[0]);t.texStorage2D(i.TEXTURE_2D,gt,_t,nt.width,nt.height)}for(let nt=0,xt=$t.length;nt<xt;nt++)mt=$t[nt],Bt?D&&t.texSubImage2D(i.TEXTURE_2D,nt,0,0,pt,Ut,mt):t.texImage2D(i.TEXTURE_2D,nt,_t,pt,Ut,mt);m.generateMipmaps=!1}else if(Bt){if(Yt){const nt=ve(it);t.texStorage2D(i.TEXTURE_2D,gt,_t,nt.width,nt.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,Ut,it)}else t.texImage2D(i.TEXTURE_2D,0,_t,pt,Ut,it);p(m)&&R(X),ht.__version=lt.version,m.onUpdate&&m.onUpdate(m)}T.__version=m.version}function Vt(T,m,k){if(m.image.length!==6)return;const X=re(T,m),Q=m.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+k);const lt=n.get(Q);if(Q.version!==lt.__version||X===!0){t.activeTexture(i.TEXTURE0+k);const ht=ce.getPrimaries(ce.workingColorSpace),tt=m.colorSpace===Ri?null:ce.getPrimaries(m.colorSpace),it=m.colorSpace===Ri||ht===tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);const pt=m.isCompressedTexture||m.image[0].isCompressedTexture,Ut=m.image[0]&&m.image[0].isDataTexture,_t=[];for(let at=0;at<6;at++)!pt&&!Ut?_t[at]=g(m.image[at],!0,s.maxCubemapSize):_t[at]=Ut?m.image[at].image:m.image[at],_t[at]=tn(m,_t[at]);const mt=_t[0],$t=r.convert(m.format,m.colorSpace),Bt=r.convert(m.type),Yt=M(m.internalFormat,$t,Bt,m.normalized,m.colorSpace),D=m.isVideoTexture!==!0,gt=lt.__version===void 0||X===!0,nt=Q.dataReady;let xt=y(m,mt);qt(i.TEXTURE_CUBE_MAP,m);let yt;if(pt){D&&gt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,xt,Yt,mt.width,mt.height);for(let at=0;at<6;at++){yt=_t[at].mipmaps;for(let Ot=0;Ot<yt.length;Ot++){const It=yt[Ot];m.format!==On?$t!==null?D?nt&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ot,0,0,It.width,It.height,$t,It.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ot,Yt,It.width,It.height,0,It.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?nt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ot,0,0,It.width,It.height,$t,Bt,It.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ot,Yt,It.width,It.height,0,$t,Bt,It.data)}}}else{if(yt=m.mipmaps,D&&gt){yt.length>0&&xt++;const at=ve(_t[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,xt,Yt,at.width,at.height)}for(let at=0;at<6;at++)if(Ut){D?nt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,_t[at].width,_t[at].height,$t,Bt,_t[at].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Yt,_t[at].width,_t[at].height,0,$t,Bt,_t[at].data);for(let Ot=0;Ot<yt.length;Ot++){const Te=yt[Ot].image[at].image;D?nt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ot+1,0,0,Te.width,Te.height,$t,Bt,Te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ot+1,Yt,Te.width,Te.height,0,$t,Bt,Te.data)}}else{D?nt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,$t,Bt,_t[at]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Yt,$t,Bt,_t[at]);for(let Ot=0;Ot<yt.length;Ot++){const It=yt[Ot];D?nt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ot+1,0,0,$t,Bt,It.image[at]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ot+1,Yt,$t,Bt,It.image[at])}}}p(m)&&R(i.TEXTURE_CUBE_MAP),lt.__version=Q.version,m.onUpdate&&m.onUpdate(m)}T.__version=m.version}function Tt(T,m,k,X,Q,lt){const ht=r.convert(k.format,k.colorSpace),tt=r.convert(k.type),it=M(k.internalFormat,ht,tt,k.normalized,k.colorSpace),pt=n.get(m),Ut=n.get(k);if(Ut.__renderTarget=m,!pt.__hasExternalTextures){const _t=Math.max(1,m.width>>lt),mt=Math.max(1,m.height>>lt);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,lt,it,_t,mt,m.depth,0,ht,tt,null):t.texImage2D(Q,lt,it,_t,mt,0,ht,tt,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),$e(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,Q,Ut.__webglTexture,0,Ie(m)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,Q,Ut.__webglTexture,lt),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ee(T,m,k){if(i.bindRenderbuffer(i.RENDERBUFFER,T),m.depthBuffer){const X=m.depthTexture,Q=X&&X.isDepthTexture?X.type:null,lt=A(m.stencilBuffer,Q),ht=m.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;$e(m)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie(m),lt,m.width,m.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie(m),lt,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,lt,m.width,m.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,T)}else{const X=m.textures;for(let Q=0;Q<X.length;Q++){const lt=X[Q],ht=r.convert(lt.format,lt.colorSpace),tt=r.convert(lt.type),it=M(lt.internalFormat,ht,tt,lt.normalized,lt.colorSpace);$e(m)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie(m),it,m.width,m.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie(m),it,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,it,m.width,m.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ge(T,m,k){const X=m.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=n.get(m.depthTexture);if(Q.__renderTarget=m,(!Q.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),X){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,m.depthTexture.addEventListener("dispose",w)),Q.__webglTexture===void 0){Q.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),qt(i.TEXTURE_CUBE_MAP,m.depthTexture);const pt=r.convert(m.depthTexture.format),Ut=r.convert(m.depthTexture.type);let _t;m.depthTexture.format===pi?_t=i.DEPTH_COMPONENT24:m.depthTexture.format===qi&&(_t=i.DEPTH24_STENCIL8);for(let mt=0;mt<6;mt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,_t,m.width,m.height,0,pt,Ut,null)}}else ot(m.depthTexture,0);const lt=Q.__webglTexture,ht=Ie(m),tt=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,it=m.depthTexture.format===qi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(m.depthTexture.format===pi)$e(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,tt,lt,0,ht):i.framebufferTexture2D(i.FRAMEBUFFER,it,tt,lt,0);else if(m.depthTexture.format===qi)$e(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,tt,lt,0,ht):i.framebufferTexture2D(i.FRAMEBUFFER,it,tt,lt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ne(T){const m=n.get(T),k=T.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==T.depthTexture){const X=T.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),X){const Q=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,X.removeEventListener("dispose",Q)};X.addEventListener("dispose",Q),m.__depthDisposeCallback=Q}m.__boundDepthTexture=X}if(T.depthTexture&&!m.__autoAllocateDepthBuffer)if(k)for(let X=0;X<6;X++)Ge(m.__webglFramebuffer[X],T,X);else{const X=T.texture.mipmaps;X&&X.length>0?Ge(m.__webglFramebuffer[0],T,0):Ge(m.__webglFramebuffer,T,0)}else if(k){m.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[X]),m.__webglDepthbuffer[X]===void 0)m.__webglDepthbuffer[X]=i.createRenderbuffer(),ee(m.__webglDepthbuffer[X],T,!1);else{const Q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=m.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,lt)}}else{const X=T.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=i.createRenderbuffer(),ee(m.__webglDepthbuffer,T,!1);else{const Q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=m.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,lt)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(T,m,k){const X=n.get(T);m!==void 0&&Tt(X.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&ne(T)}function be(T){const m=T.texture,k=n.get(T),X=n.get(m);T.addEventListener("dispose",x);const Q=T.textures,lt=T.isWebGLCubeRenderTarget===!0,ht=Q.length>1;if(ht||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=m.version,a.memory.textures++),lt){k.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(m.mipmaps&&m.mipmaps.length>0){k.__webglFramebuffer[tt]=[];for(let it=0;it<m.mipmaps.length;it++)k.__webglFramebuffer[tt][it]=i.createFramebuffer()}else k.__webglFramebuffer[tt]=i.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){k.__webglFramebuffer=[];for(let tt=0;tt<m.mipmaps.length;tt++)k.__webglFramebuffer[tt]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(ht)for(let tt=0,it=Q.length;tt<it;tt++){const pt=n.get(Q[tt]);pt.__webglTexture===void 0&&(pt.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&$e(T)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let tt=0;tt<Q.length;tt++){const it=Q[tt];k.__webglColorRenderbuffer[tt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[tt]);const pt=r.convert(it.format,it.colorSpace),Ut=r.convert(it.type),_t=M(it.internalFormat,pt,Ut,it.normalized,it.colorSpace,T.isXRRenderTarget===!0),mt=Ie(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,_t,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+tt,i.RENDERBUFFER,k.__webglColorRenderbuffer[tt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),ee(k.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(lt){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),qt(i.TEXTURE_CUBE_MAP,m);for(let tt=0;tt<6;tt++)if(m.mipmaps&&m.mipmaps.length>0)for(let it=0;it<m.mipmaps.length;it++)Tt(k.__webglFramebuffer[tt][it],T,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,it);else Tt(k.__webglFramebuffer[tt],T,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);p(m)&&R(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ht){for(let tt=0,it=Q.length;tt<it;tt++){const pt=Q[tt],Ut=n.get(pt);let _t=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(_t=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_t,Ut.__webglTexture),qt(_t,pt),Tt(k.__webglFramebuffer,T,pt,i.COLOR_ATTACHMENT0+tt,_t,0),p(pt)&&R(_t)}t.unbindTexture()}else{let tt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(tt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(tt,X.__webglTexture),qt(tt,m),m.mipmaps&&m.mipmaps.length>0)for(let it=0;it<m.mipmaps.length;it++)Tt(k.__webglFramebuffer[it],T,m,i.COLOR_ATTACHMENT0,tt,it);else Tt(k.__webglFramebuffer,T,m,i.COLOR_ATTACHMENT0,tt,0);p(m)&&R(tt),t.unbindTexture()}T.depthBuffer&&ne(T)}function ae(T){const m=T.textures;for(let k=0,X=m.length;k<X;k++){const Q=m[k];if(p(Q)){const lt=O(T),ht=n.get(Q).__webglTexture;t.bindTexture(lt,ht),R(lt),t.unbindTexture()}}}const Ce=[],qe=[];function dn(T){if(T.samples>0){if($e(T)===!1){const m=T.textures,k=T.width,X=T.height;let Q=i.COLOR_BUFFER_BIT;const lt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=n.get(T),tt=m.length>1;if(tt)for(let pt=0;pt<m.length;pt++)t.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer);const it=T.texture.mipmaps;it&&it.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let pt=0;pt<m.length;pt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),tt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ht.__webglColorRenderbuffer[pt]);const Ut=n.get(m[pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ut,0)}i.blitFramebuffer(0,0,k,X,0,0,k,X,Q,i.NEAREST),c===!0&&(Ce.length=0,qe.length=0,Ce.push(i.COLOR_ATTACHMENT0+pt),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&(Ce.push(lt),qe.push(lt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,qe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ce))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),tt)for(let pt=0;pt<m.length;pt++){t.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,ht.__webglColorRenderbuffer[pt]);const Ut=n.get(m[pt]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,Ut,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&c){const m=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[m])}}}function Ie(T){return Math.min(s.maxSamples,T.samples)}function $e(T){const m=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function N(T){const m=a.render.frame;u.get(T)!==m&&(u.set(T,m),T.update())}function tn(T,m){const k=T.colorSpace,X=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||k!==jr&&k!==Ri&&(ce.getTransfer(k)===Me?(X!==On||Q!==An)&&kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):de("WebGLTextures: Unsupported texture color space:",k)),m}function ve(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=et,this.resetTextureUnits=z,this.getTextureUnits=I,this.setTextureUnits=G,this.setTexture2D=ot,this.setTexture2DArray=Z,this.setTexture3D=Y,this.setTextureCube=j,this.rebindTextures=pe,this.setupRenderTarget=be,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=dn,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=$e,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Gx(i,e){function t(n,s=Ri){let r;const a=ce.getTransfer(s);if(n===An)return i.UNSIGNED_BYTE;if(n===ac)return i.UNSIGNED_SHORT_4_4_4_4;if(n===oc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===yu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===bu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Su)return i.BYTE;if(n===Eu)return i.SHORT;if(n===ir)return i.UNSIGNED_SHORT;if(n===rc)return i.INT;if(n===Qn)return i.UNSIGNED_INT;if(n===Yn)return i.FLOAT;if(n===jn)return i.HALF_FLOAT;if(n===Tu)return i.ALPHA;if(n===Au)return i.RGB;if(n===On)return i.RGBA;if(n===pi)return i.DEPTH_COMPONENT;if(n===qi)return i.DEPTH_STENCIL;if(n===Ru)return i.RED;if(n===cc)return i.RED_INTEGER;if(n===Zi)return i.RG;if(n===lc)return i.RG_INTEGER;if(n===uc)return i.RGBA_INTEGER;if(n===zr||n===Vr||n===Hr||n===Wr)if(a===Me)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===go||n===xo||n===_o||n===vo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===go)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_o)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Mo||n===So||n===Eo||n===yo||n===bo||n===Jr||n===To)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Mo||n===So)return a===Me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Eo)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===yo)return r.COMPRESSED_R11_EAC;if(n===bo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Jr)return r.COMPRESSED_RG11_EAC;if(n===To)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ao||n===Ro||n===wo||n===Co||n===Po||n===Lo||n===Io||n===Do||n===No||n===Uo||n===$o||n===Oo||n===Fo||n===Bo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ao)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ro)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wo)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Co)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Po)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lo)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Io)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Do)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===No)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Uo)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$o)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Oo)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fo)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bo)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ko||n===Go||n===zo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ko)return a===Me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Go)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vo||n===Ho||n===Qr||n===Wo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Vo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ho)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===sr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const zx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Hx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Bu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ti({vertexShader:zx,fragmentShader:Vx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new me(new yn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Wx extends Qi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,_=null;const E=typeof XRWebGLBinding<"u",g=new Hx,p={},R=t.getContextAttributes();let O=null,M=null;const A=[],y=[],w=new Xt;let x=null,b=null;const L=new Tn;L.viewport=new De;const $=new Tn;$.viewport=new De;const U=[L,$],z=new jd;let I=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let st=A[J];return st===void 0&&(st=new wa,A[J]=st),st.getTargetRaySpace()},this.getControllerGrip=function(J){let st=A[J];return st===void 0&&(st=new wa,A[J]=st),st.getGripSpace()},this.getHand=function(J){let st=A[J];return st===void 0&&(st=new wa,A[J]=st),st.getHandSpace()};function et(J){const st=y.indexOf(J.inputSource);if(st===-1)return;const wt=A[st];wt!==void 0&&(wt.update(J.inputSource,J.frame,l||a),wt.dispatchEvent({type:J.type,data:J.inputSource}))}function K(){s.removeEventListener("select",et),s.removeEventListener("selectstart",et),s.removeEventListener("selectend",et),s.removeEventListener("squeeze",et),s.removeEventListener("squeezestart",et),s.removeEventListener("squeezeend",et),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",ot);for(let J=0;J<A.length;J++){const st=y[J];st!==null&&(y[J]=null,A[J].disconnect(st))}I=null,G=null,g.reset();for(const J in p)delete p[J];if(e.setRenderTarget(O),d=null,f=null,h=null,s=null,M=null,re.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(w.width,w.height,!1),b!==null){const J=b.camera;J.fov=b.fov,J.zoom=b.zoom,J.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&E&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(O=e.getRenderTarget(),s.addEventListener("select",et),s.addEventListener("selectstart",et),s.addEventListener("selectend",et),s.addEventListener("squeeze",et),s.addEventListener("squeezestart",et),s.addEventListener("squeezeend",et),s.addEventListener("end",K),s.addEventListener("inputsourceschange",ot),R.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(w),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Vt=null,Tt=null;R.depth&&(Tt=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,wt=R.stencil?qi:pi,Vt=R.stencil?sr:Qn);const ee={colorFormat:t.RGBA8,depthFormat:Tt,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(ee),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new kn(f.textureWidth,f.textureHeight,{format:On,type:An,depthTexture:new ar(f.textureWidth,f.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const wt={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,wt),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new kn(d.framebufferWidth,d.framebufferHeight,{format:On,type:An,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),re.setContext(s),re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ot(J){for(let st=0;st<J.removed.length;st++){const wt=J.removed[st],Vt=y.indexOf(wt);Vt>=0&&(y[Vt]=null,A[Vt].disconnect(wt))}for(let st=0;st<J.added.length;st++){const wt=J.added[st];let Vt=y.indexOf(wt);if(Vt===-1){for(let ee=0;ee<A.length;ee++)if(ee>=y.length){y.push(wt),Vt=ee;break}else if(y[ee]===null){y[ee]=wt,Vt=ee;break}if(Vt===-1)break}const Tt=A[Vt];Tt&&Tt.connect(wt)}}const Z=new V,Y=new V;function j(J,st,wt){Z.setFromMatrixPosition(st.matrixWorld),Y.setFromMatrixPosition(wt.matrixWorld);const Vt=Z.distanceTo(Y),Tt=st.projectionMatrix.elements,ee=wt.projectionMatrix.elements,Ge=Tt[14]/(Tt[10]-1),ne=Tt[14]/(Tt[10]+1),pe=(Tt[9]+1)/Tt[5],be=(Tt[9]-1)/Tt[5],ae=(Tt[8]-1)/Tt[0],Ce=(ee[8]+1)/ee[0],qe=Ge*ae,dn=Ge*Ce,Ie=Vt/(-ae+Ce),$e=Ie*-ae;if(st.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX($e),J.translateZ(Ie),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Tt[10]===-1)J.projectionMatrix.copy(st.projectionMatrix),J.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const N=Ge+Ie,tn=ne+Ie,ve=qe-$e,T=dn+(Vt-$e),m=pe*ne/tn*N,k=be*ne/tn*N;J.projectionMatrix.makePerspective(ve,T,m,k,N,tn),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Mt(J,st){st===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(st.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let st=J.near,wt=J.far;g.texture!==null&&(g.depthNear>0&&(st=g.depthNear),g.depthFar>0&&(wt=g.depthFar)),z.near=$.near=L.near=st,z.far=$.far=L.far=wt,(I!==z.near||G!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),I=z.near,G=z.far),z.layers.mask=J.layers.mask|6,L.layers.mask=z.layers.mask&-5,$.layers.mask=z.layers.mask&-3;const Vt=J.parent,Tt=z.cameras;Mt(z,Vt);for(let ee=0;ee<Tt.length;ee++)Mt(Tt[ee],Vt);Tt.length===2?j(z,L,$):z.projectionMatrix.copy(L.projectionMatrix),b===null&&J.isPerspectiveCamera&&(b={camera:J,fov:J.fov,zoom:J.zoom}),dt(J,z,Vt)};function dt(J,st,wt){wt===null?J.matrix.copy(st.matrixWorld):(J.matrix.copy(wt.matrixWorld),J.matrix.invert(),J.matrix.multiply(st.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(st.projectionMatrix),J.projectionMatrixInverse.copy(st.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=qo*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(J){c=J,f!==null&&(f.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(z)},this.getCameraTexture=function(J){return p[J]};let Zt=null;function qt(J,st){if(u=st.getViewerPose(l||a),_=st,u!==null){const wt=u.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let Vt=!1;wt.length!==z.cameras.length&&(z.cameras.length=0,Vt=!0);for(let ne=0;ne<wt.length;ne++){const pe=wt[ne];let be=null;if(d!==null)be=d.getViewport(pe);else{const Ce=h.getViewSubImage(f,pe);be=Ce.viewport,ne===0&&(e.setRenderTargetTextures(M,Ce.colorTexture,Ce.depthStencilTexture),e.setRenderTarget(M))}let ae=U[ne];ae===void 0&&(ae=new Tn,ae.layers.enable(ne),ae.viewport=new De,U[ne]=ae),ae.matrix.fromArray(pe.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(pe.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(be.x,be.y,be.width,be.height),ne===0&&(z.matrix.copy(ae.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Vt===!0&&z.cameras.push(ae)}const Tt=s.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&E){h=n.getBinding();const ne=h.getDepthInformation(wt[0]);ne&&ne.isValid&&ne.texture&&g.init(ne,s.renderState)}if(Tt&&Tt.includes("camera-access")&&E){e.state.unbindTexture(),h=n.getBinding();for(let ne=0;ne<wt.length;ne++){const pe=wt[ne].camera;if(pe){let be=p[pe];be||(be=new Bu,p[pe]=be);const ae=h.getCameraImage(pe);be.sourceTexture=ae}}}}for(let wt=0;wt<A.length;wt++){const Vt=y[wt],Tt=A[wt];Vt!==null&&Tt!==void 0&&Tt.update(Vt,st,l||a)}Zt&&Zt(J,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),_=null}const re=new Vu;re.setAnimationLoop(qt),this.setAnimationLoop=function(J){Zt=J},this.dispose=function(){}}}const Xx=new Le,Zu=new Ht;Zu.set(-1,0,0,0,1,0,0,0,1);function qx(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,ku(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,R,O,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,M)):p.isMeshMatcapMaterial?(r(g,p),_(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),E(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,R,O):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Mn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Mn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const R=e.get(p),O=R.envMap,M=R.envMapRotation;O&&(g.envMap.value=O,g.envMapRotation.value.setFromMatrix4(Xx.makeRotationFromEuler(M)).transpose(),O.isCubeTexture&&O.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Zu),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,R,O){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*R,g.scale.value=O*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,R){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Mn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=R.texture,g.transmissionSamplerSize.value.set(R.width,R.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,p){p.matcap&&(g.matcap.value=p.matcap)}function E(g,p){const R=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(R.matrixWorld),g.nearDistance.value=R.shadow.camera.near,g.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Yx(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,A){const y=A.program;n.uniformBlockBinding(M,y)}function l(M,A){let y=s[M.id];y===void 0&&(g(M),y=u(M),s[M.id]=y,M.addEventListener("dispose",R));const w=A.program;n.updateUBOMapping(M,w);const x=e.render.frame;r[M.id]!==x&&(f(M),r[M.id]=x)}function u(M){const A=h();M.__bindingPointIndex=A;const y=i.createBuffer(),w=M.__size,x=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,w,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,y),y}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return de("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const A=s[M.id],y=M.uniforms,w=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let x=0,b=y.length;x<b;x++){const L=y[x];if(Array.isArray(L))for(let $=0,U=L.length;$<U;$++)d(L[$],x,$,w);else d(L,x,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,A,y,w){if(E(M,A,y,w)===!0){const x=M.__offset,b=M.value;if(Array.isArray(b)){let L=0;for(let $=0;$<b.length;$++){const U=b[$],z=p(U);_(U,M.__data,L),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(L+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(b,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,M.__data)}}function _(M,A,y){typeof M=="number"||typeof M=="boolean"?A[0]=M:M.isMatrix3?(A[0]=M.elements[0],A[1]=M.elements[1],A[2]=M.elements[2],A[3]=0,A[4]=M.elements[3],A[5]=M.elements[4],A[6]=M.elements[5],A[7]=0,A[8]=M.elements[6],A[9]=M.elements[7],A[10]=M.elements[8],A[11]=0):ArrayBuffer.isView(M)?A.set(new M.constructor(M.buffer,M.byteOffset,A.length)):M.toArray(A,y)}function E(M,A,y,w){const x=M.value,b=A+"_"+y;if(w[b]===void 0)return typeof x=="number"||typeof x=="boolean"?w[b]=x:ArrayBuffer.isView(x)?w[b]=x.slice():w[b]=x.clone(),!0;{const L=w[b];if(typeof x=="number"||typeof x=="boolean"){if(L!==x)return w[b]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(L.equals(x)===!1)return L.copy(x),!0}}return!1}function g(M){const A=M.uniforms;let y=0;const w=16;for(let b=0,L=A.length;b<L;b++){const $=Array.isArray(A[b])?A[b]:[A[b]];for(let U=0,z=$.length;U<z;U++){const I=$[U],G=Array.isArray(I.value)?I.value:[I.value];for(let et=0,K=G.length;et<K;et++){const ot=G[et],Z=p(ot),Y=y%w,j=Y%Z.boundary,Mt=Y+j;y+=j,Mt!==0&&w-Mt<Z.storage&&(y+=w-Mt),I.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=Z.storage}}}const x=y%w;return x>0&&(y+=w-x),M.__size=y,M.__cache={},this}function p(M){const A={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(A.boundary=4,A.storage=4):M.isVector2?(A.boundary=8,A.storage=8):M.isVector3||M.isColor?(A.boundary=16,A.storage=12):M.isVector4?(A.boundary=16,A.storage=16):M.isMatrix3?(A.boundary=48,A.storage=48):M.isMatrix4?(A.boundary=64,A.storage=64):M.isTexture?kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(A.boundary=16,A.storage=M.byteLength):kt("WebGLRenderer: Unsupported uniform value type.",M),A}function R(M){const A=M.target;A.removeEventListener("dispose",R);const y=a.indexOf(A.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function O(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:c,update:l,dispose:O}}const Kx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Hn=null;function Zx(){return Hn===null&&(Hn=new $d(Kx,16,16,Zi,jn),Hn.name="DFG_LUT",Hn.minFilter=on,Hn.magFilter=on,Hn.wrapS=oi,Hn.wrapT=oi,Hn.generateMipmaps=!1,Hn.needsUpdate=!0),Hn}class Jx{constructor(e={}){const{canvas:t=ld(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=An}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const E=d,g=new Set([uc,lc,cc]),p=new Set([An,Qn,ir,sr,ac,oc]),R=new Uint32Array(4),O=new Int32Array(4),M=new V;let A=null,y=null;const w=[],x=[];let b=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let $=!1,U=null,z=null,I=null,G=null;this._outputColorSpace=bn;let et=0,K=0,ot=null,Z=-1,Y=null;const j=new De,Mt=new De;let dt=null;const Zt=new se(0);let qt=0,re=t.width,J=t.height,st=1,wt=null,Vt=null;const Tt=new De(0,0,re,J),ee=new De(0,0,re,J);let Ge=!1;const ne=new pc;let pe=!1,be=!1;const ae=new Le,Ce=new V,qe=new De,dn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function $e(){return ot===null?st:1}let N=n;function tn(v,P){return t.getContext(v,P)}let ve,T,m,k,X,Q,lt,ht,tt,it,pt,Ut,_t,mt,$t,Bt,Yt,D,gt,nt,xt,yt,at;try{const v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${nc}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",Dn,!1),N===null){const P="webgl2";if(N=tn(P,v),N===null)throw tn(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ot()}catch(v){throw t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",Dn,!1),de("WebGLRenderer: "+v.message),v}function Ot(){ve=new Z0(N),ve.init(),xt=new Gx(N,ve),T=new k0(N,ve,e,xt),m=new Bx(N,ve),T.reversedDepthBuffer&&f&&m.buffers.depth.setReversed(!0),z=N.createFramebuffer(),I=N.createFramebuffer(),G=N.createFramebuffer(),k=new j0(N),X=new Tx,Q=new kx(N,ve,m,X,T,xt,k),lt=new K0(L),ht=new ep(N),yt=new F0(N,ht),tt=new J0(N,ht,k,yt),it=new eg(N,tt,ht,yt,k),D=new tg(N,T,Q),$t=new G0(X),pt=new bx(L,lt,ve,T,yt,$t),Ut=new qx(L,X),_t=new Rx,mt=new Dx(ve),Yt=new O0(L,lt,m,it,_,c),Bt=new Fx(L,it,T),at=new Yx(N,k,T,m),gt=new B0(N,ve,k),nt=new Q0(N,ve,k),k.programs=pt.programs,L.capabilities=T,L.extensions=ve,L.properties=X,L.renderLists=_t,L.shadowMap=Bt,L.state=m,L.info=k}E!==An&&(b=new ig(E,t.width,t.height,o,s,r));const It=new Wx(L,N);this.xr=It,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const v=ve.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=ve.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(v){v!==void 0&&(st=v,this.setSize(re,J,!1))},this.getSize=function(v){return v.set(re,J)},this.setSize=function(v,P,q=!0){if(It.isPresenting){kt("WebGLRenderer: Can't change size while VR device is presenting.");return}re=v,J=P,t.width=Math.floor(v*st),t.height=Math.floor(P*st),q===!0&&(t.style.width=v+"px",t.style.height=P+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,v,P)},this.getDrawingBufferSize=function(v){return v.set(re*st,J*st).floor()},this.setDrawingBufferSize=function(v,P,q){re=v,J=P,st=q,t.width=Math.floor(v*q),t.height=Math.floor(P*q),this.setViewport(0,0,v,P)},this.setEffects=function(v){if(E===An){de("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let P=0;P<v.length;P++)if(v[P].isOutputPass===!0){kt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(j)},this.getViewport=function(v){return v.copy(Tt)},this.setViewport=function(v,P,q,H){v.isVector4?Tt.set(v.x,v.y,v.z,v.w):Tt.set(v,P,q,H),m.viewport(j.copy(Tt).multiplyScalar(st).round())},this.getScissor=function(v){return v.copy(ee)},this.setScissor=function(v,P,q,H){v.isVector4?ee.set(v.x,v.y,v.z,v.w):ee.set(v,P,q,H),m.scissor(Mt.copy(ee).multiplyScalar(st).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(v){m.setScissorTest(Ge=v)},this.setOpaqueSort=function(v){wt=v},this.setTransparentSort=function(v){Vt=v},this.getClearColor=function(v){return v.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor(...arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha(...arguments)},this.clear=function(v=!0,P=!0,q=!0){let H=0;if(v){let W=!1;if(ot!==null){const Et=ot.texture.format;W=g.has(Et)}if(W){const Et=ot.texture.type,At=p.has(Et),St=Yt.getClearColor(),Ct=Yt.getClearAlpha(),Dt=St.r,Jt=St.g,ie=St.b;At?(R[0]=Dt,R[1]=Jt,R[2]=ie,R[3]=Ct,N.clearBufferuiv(N.COLOR,0,R)):(O[0]=Dt,O[1]=Jt,O[2]=ie,O[3]=Ct,N.clearBufferiv(N.COLOR,0,O))}else H|=N.COLOR_BUFFER_BIT}P&&(H|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(H|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&N.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),U=v},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",Dn,!1),Yt.dispose(),_t.dispose(),mt.dispose(),X.dispose(),lt.dispose(),it.dispose(),yt.dispose(),at.dispose(),pt.dispose(),It.dispose(),It.removeEventListener("sessionstart",wc),It.removeEventListener("sessionend",Cc),Oi.stop()};function Te(v){v.preventDefault(),na("WebGLRenderer: Context Lost."),$=!0}function xe(){na("WebGLRenderer: Context Restored."),$=!1;const v=k.autoReset,P=Bt.enabled,q=Bt.autoUpdate,H=Bt.needsUpdate,W=Bt.type;Ot(),k.autoReset=v,Bt.enabled=P,Bt.autoUpdate=q,Bt.needsUpdate=H,Bt.type=W}function Dn(v){de("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Gn(v){const P=v.target;P.removeEventListener("dispose",Gn),lf(P)}function lf(v){uf(v),X.remove(v)}function uf(v){const P=X.get(v).programs;P!==void 0&&(P.forEach(function(q){pt.releaseProgram(q)}),v.isShaderMaterial&&pt.releaseShaderCache(v))}this.renderBufferDirect=function(v,P,q,H,W,Et){P===null&&(P=dn);const At=W.isMesh&&W.matrixWorld.determinantAffine()<0,St=df(v,P,q,H,W);m.setMaterial(H,At);let Ct=q.index,Dt=1;if(H.wireframe===!0){if(Ct=tt.getWireframeAttribute(q),Ct===void 0)return;Dt=2}const Jt=q.drawRange,ie=q.attributes.position;let Pt=Jt.start*Dt,_e=(Jt.start+Jt.count)*Dt;Et!==null&&(Pt=Math.max(Pt,Et.start*Dt),_e=Math.min(_e,(Et.start+Et.count)*Dt)),Ct!==null?(Pt=Math.max(Pt,0),_e=Math.min(_e,Ct.count)):ie!=null&&(Pt=Math.max(Pt,0),_e=Math.min(_e,ie.count));const Oe=_e-Pt;if(Oe<0||Oe===1/0)return;yt.setup(W,H,St,q,Ct);let we,ye=gt;if(Ct!==null&&(we=ht.get(Ct),ye=nt,ye.setIndex(we)),W.isMesh)H.wireframe===!0?(m.setLineWidth(H.wireframeLinewidth*$e()),ye.setMode(N.LINES)):ye.setMode(N.TRIANGLES);else if(W.isLine){let en=H.linewidth;en===void 0&&(en=1),m.setLineWidth(en*$e()),W.isLineSegments?ye.setMode(N.LINES):W.isLineLoop?ye.setMode(N.LINE_LOOP):ye.setMode(N.LINE_STRIP)}else W.isPoints?ye.setMode(N.POINTS):W.isSprite&&ye.setMode(N.TRIANGLES);if(W.isBatchedMesh)if(ve.get("WEBGL_multi_draw"))ye.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const en=W._multiDrawStarts,bt=W._multiDrawCounts,ln=W._multiDrawCount,fe=Ct?ht.get(Ct).bytesPerElement:1,Rn=X.get(H).currentProgram.getUniforms();for(let zn=0;zn<ln;zn++)Rn.setValue(N,"_gl_DrawID",zn),ye.render(en[zn]/fe,bt[zn])}else if(W.isInstancedMesh)ye.renderInstances(Pt,Oe,W.count);else if(q.isInstancedBufferGeometry){const en=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,bt=Math.min(q.instanceCount,en);ye.renderInstances(Pt,Oe,bt)}else ye.render(Pt,Oe)};function Rc(v,P,q,H){U!==null&&v.isNodeMaterial&&U.setObject(H,v),pe===!0&&$t.setState(v,q,!1),v.transparent===!0&&v.side===ai&&v.forceSinglePass===!1?(v.side=Mn,v.needsUpdate=!0,ur(v,P,H),v.side=Yi,v.needsUpdate=!0,ur(v,P,H),v.side=ai):ur(v,P,H)}this.compile=function(v,P,q=null){q===null&&(q=v),U!==null&&U.renderStart(v,P,q),y=mt.get(q),y.init(P),x.push(y),q.traverseVisible(function(W){W.isLight&&W.layers.test(P.layers)&&(y.pushLight(W),W.castShadow&&y.pushShadow(W))}),v!==q&&v.traverseVisible(function(W){W.isLight&&W.layers.test(P.layers)&&(y.pushLight(W),W.castShadow&&y.pushShadow(W))}),y.setupLights(),U!==null&&U.updateLights(y.state.lightsArray),be=this.localClippingEnabled,pe=$t.init(this.clippingPlanes,be),pe===!0&&$t.setGlobalState(this.clippingPlanes,P),U!==null&&Bt.render(y.state.shadowsArray,q,P);const H=new Set;return v.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Et=W.material;if(Et)if(Array.isArray(Et))for(let At=0;At<Et.length;At++){const St=Et[At];Rc(St,q,P,W),H.add(St)}else Rc(Et,q,P,W),H.add(Et)}),y=x.pop(),U!==null&&U.renderEnd(),H},this.compileAsync=function(v,P,q=null){const H=this.compile(v,P,q);return new Promise(W=>{function Et(){if(H.forEach(function(At){const Ct=X.get(At).currentProgram;(Ct===void 0||Ct.isReady())&&H.delete(At)}),H.size===0){W(v);return}setTimeout(Et,10)}ve.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let da=null;function ff(v){da&&da(v)}function wc(){Oi.stop()}function Cc(){Oi.start()}const Oi=new Vu;Oi.setAnimationLoop(ff),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(v){da=v,It.setAnimationLoop(v),v===null?Oi.stop():Oi.start()},It.addEventListener("sessionstart",wc),It.addEventListener("sessionend",Cc),this.render=function(v,P){if(P!==void 0&&P.isCamera!==!0){de("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if($===!0)return;U!==null&&U.renderStart(v,P);const q=It.enabled===!0&&It.isPresenting===!0,H=b!==null&&(ot===null||q)&&b.begin(L,ot);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),It.enabled===!0&&It.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(It.cameraAutoUpdate===!0&&It.updateCamera(P),P=It.getCamera()),v.isScene===!0&&v.onBeforeRender(L,v,P,ot),y=mt.get(v,x.length),y.init(P),y.state.textureUnits=Q.getTextureUnits(),x.push(y),ae.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),ne.setFromProjectionMatrix(ae,Kn,P.reversedDepth),be=this.localClippingEnabled,pe=$t.init(this.clippingPlanes,be),A=_t.get(v,w.length),A.init(),w.push(A),It.enabled===!0&&It.isPresenting===!0){const At=L.xr.getDepthSensingMesh();At!==null&&pa(At,P,-1/0,L.sortObjects)}pa(v,P,0,L.sortObjects),A.finish(),U!==null&&U.updateLights(y.state.lightsArray),L.sortObjects===!0&&A.sort(wt,Vt),Ie=It.enabled===!1||It.isPresenting===!1||It.hasDepthSensing()===!1,Ie&&Yt.addToRenderList(A,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),pe===!0&&$t.beginShadows();const W=y.state.shadowsArray;if(Bt.render(W,v,P),pe===!0&&$t.endShadows(),(H&&b.hasRenderPass())===!1){const At=A.opaque,St=A.transmissive;if(y.setupLights(),P.isArrayCamera){const Ct=P.cameras;if(St.length>0)for(let Dt=0,Jt=Ct.length;Dt<Jt;Dt++){const ie=Ct[Dt];Lc(At,St,v,ie)}Ie&&Yt.render(v);for(let Dt=0,Jt=Ct.length;Dt<Jt;Dt++){const ie=Ct[Dt];Pc(A,v,ie,ie.viewport)}}else St.length>0&&Lc(At,St,v,P),Ie&&Yt.render(v),Pc(A,v,P)}ot!==null&&K===0&&(Q.updateMultisampleRenderTarget(ot),Q.updateRenderTargetMipmap(ot)),H&&b.end(L),v.isScene===!0&&v.onAfterRender(L,v,P),yt.resetDefaultState(),Z=-1,Y=null,x.pop(),x.length>0?(y=x[x.length-1],Q.setTextureUnits(y.state.textureUnits),pe===!0&&$t.setGlobalState(L.clippingPlanes,y.state.camera)):y=null,w.pop(),w.length>0?A=w[w.length-1]:A=null,U!==null&&U.renderEnd()};function pa(v,P,q,H){if(v.visible===!1)return;if(v.layers.test(P.layers)){if(v.isGroup)q=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(P);else if(v.isLightProbeGrid)y.pushLightProbeGrid(v);else if(v.isLight)y.pushLight(v),v.castShadow&&y.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(ne)){H&&qe.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ae);const At=it.update(v),St=v.material;St.visible&&A.push(v,At,St,q,qe.z,null,P)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum(ne))){const At=it.update(v),St=v.material;if(H&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),qe.copy(v.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),qe.copy(At.boundingSphere.center)),qe.applyMatrix4(v.matrixWorld).applyMatrix4(ae)),Array.isArray(St)){const Ct=At.groups;for(let Dt=0,Jt=Ct.length;Dt<Jt;Dt++){const ie=Ct[Dt],Pt=St[ie.materialIndex];Pt&&Pt.visible&&A.push(v,At,Pt,q,qe.z,ie,P)}}else St.visible&&A.push(v,At,St,q,qe.z,null,P)}}const Et=v.children;for(let At=0,St=Et.length;At<St;At++)pa(Et[At],P,q,H)}function Pc(v,P,q,H){const{opaque:W,transmissive:Et,transparent:At}=v;y.setupLightsView(q),pe===!0&&$t.setGlobalState(L.clippingPlanes,q),H&&m.viewport(j.copy(H)),W.length>0&&lr(W,P,q),Et.length>0&&lr(Et,P,q),At.length>0&&lr(At,P,q),m.buffers.depth.setTest(!0),m.buffers.depth.setMask(!0),m.buffers.color.setMask(!0),m.setPolygonOffset(!1)}function Lc(v,P,q,H){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[H.id]===void 0){const Pt=ve.has("EXT_color_buffer_half_float")||ve.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[H.id]=new kn(1,1,{generateMipmaps:!0,type:Pt?jn:An,minFilter:Xi,samples:Math.max(4,T.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ce.workingColorSpace})}const Et=y.state.transmissionRenderTarget[H.id],At=H.viewport||j;Et.setSize(At.z*L.transmissionResolutionScale,At.w*L.transmissionResolutionScale);const St=L.getRenderTarget(),Ct=L.getActiveCubeFace(),Dt=L.getActiveMipmapLevel();L.setRenderTarget(Et),L.getClearColor(Zt),qt=L.getClearAlpha(),qt<1&&L.setClearColor(16777215,.5),L.clear(),Ie&&Yt.render(q);const Jt=L.toneMapping;L.toneMapping=Jn;const ie=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),y.setupLightsView(H),pe===!0&&$t.setGlobalState(L.clippingPlanes,H),lr(v,q,H),Q.updateMultisampleRenderTarget(Et),Q.updateRenderTargetMipmap(Et),ve.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let _e=0,Oe=P.length;_e<Oe;_e++){const we=P[_e],{object:ye,geometry:en,material:bt,group:ln}=we;if(bt.side===ai&&ye.layers.test(H.layers)){const fe=bt.side;bt.side=Mn,bt.needsUpdate=!0,Ic(ye,q,H,en,bt,ln),bt.side=fe,bt.needsUpdate=!0,Pt=!0}}Pt===!0&&(Q.updateMultisampleRenderTarget(Et),Q.updateRenderTargetMipmap(Et))}L.setRenderTarget(St,Ct,Dt),L.setClearColor(Zt,qt),ie!==void 0&&(H.viewport=ie),L.toneMapping=Jt}function lr(v,P,q){const H=P.isScene===!0?P.overrideMaterial:null;for(let W=0,Et=v.length;W<Et;W++){const At=v[W],{object:St,geometry:Ct,group:Dt}=At;let Jt=At.material;Jt.allowOverride===!0&&H!==null&&(Jt=H),St.layers.test(q.layers)&&Ic(St,P,q,Ct,Jt,Dt)}}function Ic(v,P,q,H,W,Et){U!==null&&W.isNodeMaterial&&U.setObject(v,W),v.onBeforeRender(L,P,q,H,W,Et),v.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),W.onBeforeRender(L,P,q,H,v,Et),W.transparent===!0&&W.side===ai&&W.forceSinglePass===!1?(W.side=Mn,W.needsUpdate=!0,L.renderBufferDirect(q,P,H,W,v,Et),W.side=Yi,W.needsUpdate=!0,L.renderBufferDirect(q,P,H,W,v,Et),W.side=ai):L.renderBufferDirect(q,P,H,W,v,Et),v.onAfterRender(L,P,q,H,W,Et)}function ur(v,P,q){P.isScene!==!0&&(P=dn);const H=X.get(v),W=y.state.lights,Et=y.state.shadowsArray,At=W.state.version,St=pt.getParameters(v,W.state,Et,P,q,y.state.lightProbeGridArray),Ct=pt.getProgramCacheKey(St);let Dt=H.programs;H.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,H.fog=P.fog;const Jt=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;H.envMap=lt.get(v.envMap||H.environment,Jt),H.envMapRotation=H.environment!==null&&v.envMap===null?P.environmentRotation:v.envMapRotation,Dt===void 0&&(v.addEventListener("dispose",Gn),Dt=new Map,H.programs=Dt);let ie=Dt.get(Ct);if(ie!==void 0){if(H.currentProgram===ie&&H.lightsStateVersion===At)return Nc(v,St),ie}else St.uniforms=pt.getUniforms(v),U!==null&&v.isNodeMaterial&&U.build(v,q,St),v.onBeforeCompile(St,L),ie=pt.acquireProgram(St,Ct),Dt.set(Ct,ie),H.uniforms=St.uniforms;const Pt=H.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Pt.clippingPlanes=$t.uniform),Nc(v,St),H.needsLights=mf(v),H.lightsStateVersion=At,H.needsLights&&(Pt.ambientLightColor.value=W.state.ambient,Pt.lightProbe.value=W.state.probe,Pt.sunLights.value=W.state.sun,Pt.sunLightShadows.value=W.state.sunShadow,Pt.directionalLights.value=W.state.directional,Pt.directionalLightShadows.value=W.state.directionalShadow,Pt.spotLights.value=W.state.spot,Pt.spotLightShadows.value=W.state.spotShadow,Pt.rectAreaLights.value=W.state.rectArea,Pt.ltc_1.value=W.state.rectAreaLTC1,Pt.ltc_2.value=W.state.rectAreaLTC2,Pt.pointLights.value=W.state.point,Pt.pointLightShadows.value=W.state.pointShadow,Pt.hemisphereLights.value=W.state.hemi,Pt.sunShadowMatrix.value=W.state.sunShadowMatrix,Pt.sunShadowCascade.value=W.state.sunShadowCascade,Pt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Pt.spotLightMatrix.value=W.state.spotLightMatrix,Pt.spotLightMap.value=W.state.spotLightMap,Pt.pointShadowMatrix.value=W.state.pointShadowMatrix),H.lightProbeGrid=y.state.lightProbeGridArray.length>0,H.currentProgram=ie,H.uniformsList=null,ie}function Dc(v){if(v.uniformsList===null){const P=v.currentProgram.getUniforms();v.uniformsList=Xr.seqWithValue(P.seq,v.uniforms)}return v.uniformsList}function Nc(v,P){const q=X.get(v);q.outputColorSpace=P.outputColorSpace,q.batching=P.batching,q.batchingColor=P.batchingColor,q.instancing=P.instancing,q.instancingColor=P.instancingColor,q.instancingMorph=P.instancingMorph,q.skinning=P.skinning,q.morphTargets=P.morphTargets,q.morphNormals=P.morphNormals,q.morphColors=P.morphColors,q.morphTargetsCount=P.morphTargetsCount,q.numClippingPlanes=P.numClippingPlanes,q.numIntersection=P.numClipIntersection,q.vertexAlphas=P.vertexAlphas,q.vertexTangents=P.vertexTangents,q.toneMapping=P.toneMapping}function hf(v,P){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;M.setFromMatrixPosition(P.matrixWorld);for(let q=0,H=v.length;q<H;q++){const W=v[q];if(W.texture!==null&&W.boundingBox.containsPoint(M))return W}return null}function df(v,P,q,H,W){P.isScene!==!0&&(P=dn),Q.resetTextureUnits();const Et=P.fog,At=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?P.environment:null,St=ot===null?L.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:ce.workingColorSpace,Ct=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Dt=lt.get(H.envMap||At,Ct),Jt=H.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ie=!!q.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Pt=!!q.morphAttributes.position,_e=!!q.morphAttributes.normal,Oe=!!q.morphAttributes.color;let we=Jn;H.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(we=L.toneMapping);const ye=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,en=ye!==void 0?ye.length:0,bt=X.get(H),ln=y.state.lights;if(pe===!0&&(be===!0||v!==Y)){const Ae=v===Y&&H.id===Z;$t.setState(H,v,Ae)}let fe=!1;H.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==ln.state.version||bt.outputColorSpace!==St||W.isBatchedMesh&&bt.batching===!1||!W.isBatchedMesh&&bt.batching===!0||W.isBatchedMesh&&bt.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&bt.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&bt.instancing===!1||!W.isInstancedMesh&&bt.instancing===!0||W.isSkinnedMesh&&bt.skinning===!1||!W.isSkinnedMesh&&bt.skinning===!0||W.isInstancedMesh&&bt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&bt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&bt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&bt.instancingMorph===!1&&W.morphTexture!==null||bt.envMap!==Dt||H.fog===!0&&bt.fog!==Et||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==$t.numPlanes||bt.numIntersection!==$t.numIntersection)||bt.vertexAlphas!==Jt||bt.vertexTangents!==ie||bt.morphTargets!==Pt||bt.morphNormals!==_e||bt.morphColors!==Oe||bt.toneMapping!==we||bt.morphTargetsCount!==en||!!bt.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(fe=!0):(fe=!0,bt.__version=H.version);let Rn=bt.currentProgram;fe===!0&&(Rn=ur(H,P,W),U&&H.isNodeMaterial&&U.onUpdateProgram(H,Rn,bt));let zn=!1,gi=!1,es=!1;const Se=Rn.getUniforms(),Ue=bt.uniforms;if(m.useProgram(Rn.program)&&(zn=!0,gi=!0,es=!0),H.id!==Z&&(Z=H.id,gi=!0),bt.needsLights){const Ae=hf(y.state.lightProbeGridArray,W);bt.lightProbeGrid!==Ae&&(bt.lightProbeGrid=Ae,gi=!0)}if(zn||Y!==v){m.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),Se.setValue(N,"projectionMatrix",v.projectionMatrix),Se.setValue(N,"viewMatrix",v.matrixWorldInverse);const _i=Se.map.cameraPosition;_i!==void 0&&_i.setValue(N,Ce.setFromMatrixPosition(v.matrixWorld)),T.logarithmicDepthBuffer&&Se.setValue(N,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Se.setValue(N,"isOrthographic",v.isOrthographicCamera===!0),Y!==v&&(Y=v,gi=!0,es=!0)}if(bt.needsLights&&(ln.state.sunShadowMap.length>0&&Se.setValue(N,"sunShadowMap",ln.state.sunShadowMap,Q),ln.state.directionalShadowMap.length>0&&Se.setValue(N,"directionalShadowMap",ln.state.directionalShadowMap,Q),ln.state.spotShadowMap.length>0&&Se.setValue(N,"spotShadowMap",ln.state.spotShadowMap,Q),ln.state.pointShadowMap.length>0&&Se.setValue(N,"pointShadowMap",ln.state.pointShadowMap,Q)),W.isSkinnedMesh){Se.setOptional(N,W,"bindMatrix"),Se.setOptional(N,W,"bindMatrixInverse");const Ae=W.skeleton;Ae&&(Ae.boneTexture===null&&Ae.computeBoneTexture(),Se.setValue(N,"boneTexture",Ae.boneTexture,Q))}W.isBatchedMesh&&(Se.setOptional(N,W,"batchingTexture"),Se.setValue(N,"batchingTexture",W._matricesTexture,Q),Se.setOptional(N,W,"batchingIdTexture"),Se.setValue(N,"batchingIdTexture",W._indirectTexture,Q),Se.setOptional(N,W,"batchingColorTexture"),W._colorsTexture!==null&&Se.setValue(N,"batchingColorTexture",W._colorsTexture,Q));const xi=q.morphAttributes;if((xi.position!==void 0||xi.normal!==void 0||xi.color!==void 0)&&D.update(W,q,Rn),(gi||bt.receiveShadow!==W.receiveShadow)&&(bt.receiveShadow=W.receiveShadow,Se.setValue(N,"receiveShadow",W.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&P.environment!==null&&(Ue.envMapIntensity.value=P.environmentIntensity),Ue.dfgLUT!==void 0&&(Ue.dfgLUT.value=Zx()),gi){if(Se.setValue(N,"toneMappingExposure",L.toneMappingExposure),bt.needsLights&&pf(Ue,es),Et&&H.fog===!0&&Ut.refreshFogUniforms(Ue,Et),Ut.refreshMaterialUniforms(Ue,H,st,J,y.state.transmissionRenderTarget[v.id]),bt.needsLights&&bt.lightProbeGrid){const Ae=bt.lightProbeGrid;Ue.probesSH.value=Ae.texture,Ue.probesMin.value.copy(Ae.boundingBox.min),Ue.probesMax.value.copy(Ae.boundingBox.max),Ue.probesResolution.value.copy(Ae.resolution)}Xr.upload(N,Dc(bt),Ue,Q)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Xr.upload(N,Dc(bt),Ue,Q),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Se.setValue(N,"center",W.center),Se.setValue(N,"modelViewMatrix",W.modelViewMatrix),Se.setValue(N,"normalMatrix",W.normalMatrix),Se.setValue(N,"modelMatrix",W.matrixWorld),H.uniformsGroups!==void 0){const Ae=H.uniformsGroups;for(let _i=0,ns=Ae.length;_i<ns;_i++){const $c=Ae[_i];at.update($c,Rn),at.bind($c,Rn)}}return Rn}function pf(v,P){v.ambientLightColor.needsUpdate=P,v.lightProbe.needsUpdate=P,v.sunLights.needsUpdate=P,v.sunLightShadows.needsUpdate=P,v.directionalLights.needsUpdate=P,v.directionalLightShadows.needsUpdate=P,v.pointLights.needsUpdate=P,v.pointLightShadows.needsUpdate=P,v.spotLights.needsUpdate=P,v.spotLightShadows.needsUpdate=P,v.rectAreaLights.needsUpdate=P,v.hemisphereLights.needsUpdate=P}function mf(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return et},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return ot},this.setRenderTargetTextures=function(v,P,q){const H=X.get(v);H.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),X.get(v.texture).__webglTexture=P,X.get(v.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:q,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,P){const q=X.get(v);q.__webglFramebuffer=P,q.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(v,P=0,q=0){ot=v,et=P,K=q;let H=null,W=!1,Et=!1;if(v){const St=X.get(v);if(St.__useDefaultFramebuffer!==void 0){m.bindFramebuffer(N.FRAMEBUFFER,St.__webglFramebuffer),j.copy(v.viewport),Mt.copy(v.scissor),dt=v.scissorTest,m.viewport(j),m.scissor(Mt),m.setScissorTest(dt),Z=-1;return}else if(St.__webglFramebuffer===void 0)Q.setupRenderTarget(v);else if(St.__hasExternalTextures)Q.rebindTextures(v,X.get(v.texture).__webglTexture,X.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Jt=v.depthTexture;if(St.__boundDepthTexture!==Jt){if(Jt!==null&&X.has(Jt)&&(v.width!==Jt.image.width||v.height!==Jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(v)}}const Ct=v.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(Et=!0);const Dt=X.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Dt[P])?H=Dt[P][q]:H=Dt[P],W=!0):v.samples>0&&Q.useMultisampledRTT(v)===!1?H=X.get(v).__webglMultisampledFramebuffer:Array.isArray(Dt)?H=Dt[q]:H=Dt,j.copy(v.viewport),Mt.copy(v.scissor),dt=v.scissorTest}else j.copy(Tt).multiplyScalar(st).floor(),Mt.copy(ee).multiplyScalar(st).floor(),dt=Ge;if(q!==0&&(H=z),m.bindFramebuffer(N.FRAMEBUFFER,H)&&m.drawBuffers(v,H),m.viewport(j),m.scissor(Mt),m.setScissorTest(dt),W){const St=X.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+P,St.__webglTexture,q)}else if(Et){const St=P;for(let Ct=0;Ct<v.textures.length;Ct++){const Dt=X.get(v.textures[Ct]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Ct,Dt.__webglTexture,q,St)}}else if(v!==null&&q!==0){const St=X.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,St.__webglTexture,q)}Z=-1};function Uc(v){const P=X.get(v);return(P.__readFormat!==v.format||P.__readType!==v.type)&&(P.__readFormat=v.format,P.__readType=v.type,P.__formatReadable=T.textureFormatReadable(v.format),P.__typeReadable=T.textureTypeReadable(v.type)),P}this.readRenderTargetPixels=function(v,P,q,H,W,Et,At,St=0){if(!(v&&v.isWebGLRenderTarget)){de("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=X.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&At!==void 0&&(Ct=Ct[At]),Ct){m.bindFramebuffer(N.FRAMEBUFFER,Ct);try{const Dt=v.textures[St],Jt=Dt.format,ie=Dt.type;v.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+St);const Pt=Uc(Dt);if(Pt.__formatReadable===!1){de("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pt.__typeReadable===!1){de("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=v.width-H&&q>=0&&q<=v.height-W&&N.readPixels(P,q,H,W,xt.convert(Jt),xt.convert(ie),Et)}finally{const Dt=ot!==null?X.get(ot).__webglFramebuffer:null;m.bindFramebuffer(N.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(v,P,q,H,W,Et,At,St=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=X.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&At!==void 0&&(Ct=Ct[At]),Ct)if(P>=0&&P<=v.width-H&&q>=0&&q<=v.height-W){m.bindFramebuffer(N.FRAMEBUFFER,Ct);const Dt=v.textures[St],Jt=Dt.format,ie=Dt.type;v.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+St);const Pt=Uc(Dt);if(Pt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const _e=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,_e),N.bufferData(N.PIXEL_PACK_BUFFER,Et.byteLength,N.STREAM_READ),N.readPixels(P,q,H,W,xt.convert(Jt),xt.convert(ie),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);const Oe=ot!==null?X.get(ot).__webglFramebuffer:null;m.bindFramebuffer(N.FRAMEBUFFER,Oe);const we=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await ud(N,we,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,_e),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Et),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(_e),N.deleteSync(we),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,P=null,q=0){const H=Math.pow(2,-q),W=Math.floor(v.image.width*H),Et=Math.floor(v.image.height*H),At=P!==null?P.x:0,St=P!==null?P.y:0;Q.setTexture2D(v,0),N.copyTexSubImage2D(N.TEXTURE_2D,q,0,0,At,St,W,Et),m.unbindTexture()},this.copyTextureToTexture=function(v,P,q=null,H=null,W=0,Et=0){let At,St,Ct,Dt,Jt,ie,Pt,_e,Oe;const we=v.isCompressedTexture?v.mipmaps[Et]:v.image;if(q!==null)At=q.max.x-q.min.x,St=q.max.y-q.min.y,Ct=q.isBox3?q.max.z-q.min.z:1,Dt=q.min.x,Jt=q.min.y,ie=q.isBox3?q.min.z:0;else{const Ue=Math.pow(2,-W);At=Math.floor(we.width*Ue),St=Math.floor(we.height*Ue),v.isDataArrayTexture?Ct=we.depth:v.isData3DTexture?Ct=Math.floor(we.depth*Ue):Ct=1,Dt=0,Jt=0,ie=0}H!==null?(Pt=H.x,_e=H.y,Oe=H.z):(Pt=0,_e=0,Oe=0);const ye=xt.convert(P.format),en=xt.convert(P.type);let bt;P.isData3DTexture?(Q.setTexture3D(P,0),bt=N.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(Q.setTexture2DArray(P,0),bt=N.TEXTURE_2D_ARRAY):(Q.setTexture2D(P,0),bt=N.TEXTURE_2D),m.activeTexture(N.TEXTURE0),m.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,P.flipY),m.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),m.pixelStorei(N.UNPACK_ALIGNMENT,P.unpackAlignment);const ln=m.getParameter(N.UNPACK_ROW_LENGTH),fe=m.getParameter(N.UNPACK_IMAGE_HEIGHT),Rn=m.getParameter(N.UNPACK_SKIP_PIXELS),zn=m.getParameter(N.UNPACK_SKIP_ROWS),gi=m.getParameter(N.UNPACK_SKIP_IMAGES);m.pixelStorei(N.UNPACK_ROW_LENGTH,we.width),m.pixelStorei(N.UNPACK_IMAGE_HEIGHT,we.height),m.pixelStorei(N.UNPACK_SKIP_PIXELS,Dt),m.pixelStorei(N.UNPACK_SKIP_ROWS,Jt),m.pixelStorei(N.UNPACK_SKIP_IMAGES,ie);const es=v.isDataArrayTexture||v.isData3DTexture,Se=P.isDataArrayTexture||P.isData3DTexture;if(v.isDepthTexture){const Ue=X.get(v),xi=X.get(P),Ae=X.get(Ue.__renderTarget),_i=X.get(xi.__renderTarget);m.bindFramebuffer(N.READ_FRAMEBUFFER,Ae.__webglFramebuffer),m.bindFramebuffer(N.DRAW_FRAMEBUFFER,_i.__webglFramebuffer);for(let ns=0;ns<Ct;ns++)es&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,X.get(v).__webglTexture,W,ie+ns),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,X.get(P).__webglTexture,Et,Oe+ns)),N.blitFramebuffer(Dt,Jt,At,St,Pt,_e,At,St,N.DEPTH_BUFFER_BIT,N.NEAREST);m.bindFramebuffer(N.READ_FRAMEBUFFER,null),m.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(W!==0||v.isRenderTargetTexture||X.has(v)){const Ue=X.get(v),xi=X.get(P);m.bindFramebuffer(N.READ_FRAMEBUFFER,I),m.bindFramebuffer(N.DRAW_FRAMEBUFFER,G);for(let Ae=0;Ae<Ct;Ae++)es?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ue.__webglTexture,W,ie+Ae):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ue.__webglTexture,W),Se?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,xi.__webglTexture,Et,Oe+Ae):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,xi.__webglTexture,Et),W!==0?N.blitFramebuffer(Dt,Jt,At,St,Pt,_e,At,St,N.COLOR_BUFFER_BIT,N.NEAREST):Se?N.copyTexSubImage3D(bt,Et,Pt,_e,Oe+Ae,Dt,Jt,At,St):N.copyTexSubImage2D(bt,Et,Pt,_e,Dt,Jt,At,St);m.bindFramebuffer(N.READ_FRAMEBUFFER,null),m.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Se?v.isDataTexture||v.isData3DTexture?N.texSubImage3D(bt,Et,Pt,_e,Oe,At,St,Ct,ye,en,we.data):P.isCompressedArrayTexture?N.compressedTexSubImage3D(bt,Et,Pt,_e,Oe,At,St,Ct,ye,we.data):N.texSubImage3D(bt,Et,Pt,_e,Oe,At,St,Ct,ye,en,we):v.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Et,Pt,_e,At,St,ye,en,we.data):v.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Et,Pt,_e,we.width,we.height,ye,we.data):N.texSubImage2D(N.TEXTURE_2D,Et,Pt,_e,At,St,ye,en,we);m.pixelStorei(N.UNPACK_ROW_LENGTH,ln),m.pixelStorei(N.UNPACK_IMAGE_HEIGHT,fe),m.pixelStorei(N.UNPACK_SKIP_PIXELS,Rn),m.pixelStorei(N.UNPACK_SKIP_ROWS,zn),m.pixelStorei(N.UNPACK_SKIP_IMAGES,gi),Et===0&&P.generateMipmaps&&N.generateMipmap(bt),m.unbindTexture()},this.initRenderTarget=function(v){X.get(v).__webglFramebuffer===void 0&&Q.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Q.setTextureCube(v,0):v.isData3DTexture?Q.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Q.setTexture2DArray(v,0):Q.setTexture2D(v,0),m.unbindTexture()},this.resetState=function(){et=0,K=0,ot=null,m.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ce._getDrawingBufferColorSpace(e),t.unpackColorSpace=ce._getUnpackColorSpace()}}class Qx{constructor(e){Ft(this,"renderer");Ft(this,"world",null);Ft(this,"width",1);Ft(this,"height",1);Ft(this,"last",0);Ft(this,"lift",0);Ft(this,"liftTarget",0);this.canvas=e,this.renderer=new Jx({canvas:e,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),this.renderer.toneMapping=sc,this.renderer.toneMappingExposure=1.1,window.addEventListener("resize",()=>this.resize()),this.resize(),requestAnimationFrame(t=>this.frame(t))}setWorld(e){this.world&&jx(this.world.scene),this.world=e,this.renderer.toneMappingExposure=e.exposure??1.1,this.applyView()}setLift(e,t=!1){this.liftTarget=e,t&&(this.lift=e)}project(e){const t=e.clone().project(this.world.camera);return{x:(t.x*.5+.5)*this.width,y:(-t.y*.5+.5)*this.height}}resize(){this.width=this.canvas.clientWidth||window.innerWidth,this.height=this.canvas.clientHeight||window.innerHeight,this.renderer.setSize(this.width,this.height,!1),this.applyView()}applyView(){const e=this.world;e&&(e.camera.aspect=this.width/this.height,e.camera.setViewOffset(this.width,this.height,0,this.lift*this.height,this.width,this.height),e.resize(this.width/this.height))}frame(e){requestAnimationFrame(r=>this.frame(r));const t=e/1e3,n=Math.min(t-this.last,.05);this.last=t;const s=this.world;s&&(Math.abs(this.liftTarget-this.lift)>5e-4&&(this.lift+=(this.liftTarget-this.lift)*Math.min(1,n*6),s.camera.setViewOffset(this.width,this.height,0,this.lift*this.height,this.width,this.height)),s.update(n,t),this.renderer.render(s.scene,s.camera))}}function jx(i){i.traverse(e=>{var s;const t=e;(s=t.geometry)==null||s.dispose();const n=Array.isArray(t.material)?t.material:t.material?[t.material]:[];for(const r of n){for(const a of Object.values(r))a instanceof Qe&&a.dispose();r.dispose()}}),i.environment&&i.environment.dispose()}function ts(i,e,t){const n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);const s=new Fd(n);return s.colorSpace=bn,s.anisotropy=4,s}let Kl=null;function Qo(){return Kl??(Kl=ts(128,128,(i,e,t)=>{const n=i.createRadialGradient(e/2,t/2,0,e/2,t/2,e/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,"rgba(255,255,255,0.45)"),n.addColorStop(.6,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=n,i.fillRect(0,0,e,t)})),Kl}function t1(i,e,t=1){const n=new Nd(new Uu({map:Qo(),color:i,transparent:!0,opacity:t,blending:er,depthWrite:!1}));return n.scale.setScalar(e),n}function Zs(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}const mi='"Yusei Magic"',e1=["めあてすばやくせいかくに","九九のひょう","時間割月火水木金国数理社英体音美","校訓挑戦"],n1={morning:{wall:15985364,sky:["#6db8ff","#d8f0ff"],hemi:[14085119,13482128,1.9],sun:16773840,sunPower:1.5,patch:.34,shear:.3,lamps:0,exposure:1.1},noon:{wall:15853778,sky:["#3f9bff","#c4e6ff"],hemi:[14872831,13219212,2],sun:16777215,sunPower:1.3,patch:.26,shear:.12,lamps:0,exposure:1.1},afternoon:{wall:15392710,sky:["#5aa2e8","#ffe2b0"],hemi:[16771528,12097640,1.5],sun:16762986,sunPower:1.9,patch:.4,shear:.62,lamps:0,exposure:1.05},sunset:{wall:14470582,sky:["#4b3a8c","#ff8a4a"],hemi:[14465236,9400156,1.6],sun:16751194,sunPower:1.7,patch:.5,shear:1.05,lamps:0,exposure:1},night:{wall:14210764,sky:["#050a1e","#16224a"],hemi:[10466047,4867128,1],sun:10336511,sunPower:.35,patch:.16,shear:.4,lamps:1,exposure:1}},pn=-4.6,an={w:4.6,h:1.75,y:1.6},Zl=2.94,i1=50;class s1{constructor(e,t){Ft(this,"scene",new Ad);Ft(this,"camera",new Tn(i1,1,.1,60));Ft(this,"exposure");Ft(this,"dust");Ft(this,"dustSeed");Ft(this,"puff");Ft(this,"puffVel");Ft(this,"puffLife",0);Ft(this,"patches",[]);Ft(this,"secondHand");Ft(this,"patchOpacity");Ft(this,"shake",0);Ft(this,"nod",0);const n=n1[e],s=Zs(11);this.exposure=n.exposure,this.patchOpacity=n.patch,this.scene.background=new se(n.sky[1]),this.scene.add(new qd(n.hemi[0],n.hemi[1],n.hemi[2]));const r=new Jd(n.sun,n.sunPower);r.position.set(-5,3.2-n.shear*1.6,2.5),this.scene.add(r);const a=(Y,j)=>new Ha(j?{color:Y,map:j}:{color:Y}),o=a(16777215,Jl(Zs(5),"#b98a55","#8f6538")),c=a(9069112),l=new me(new yn(14,3.4),a(n.wall));l.position.set(0,1.7,pn);const u=new me(new yn(14,.82),o);u.position.set(0,.41,pn+.01);const h=Jl(Zs(6),"#a97c4c","#7d5830");h.wrapS=h.wrapT=Zr,h.repeat.set(5,3);const f=new me(new yn(14,9),a(16777215,h));f.rotation.x=-Math.PI/2,f.position.set(0,0,-1);const d=new me(new yn(14,9),a(15262936));d.rotation.x=Math.PI/2,d.position.set(0,3.4,-1),this.scene.add(l,u,f,d);const _=new me(new yn(9,3.4),a(n.wall));_.rotation.y=Math.PI/2,_.position.set(-5.2,1.7,-1);const E=_.clone();E.rotation.y=-Math.PI/2,E.position.x=5.2,this.scene.add(_,E);const g=ts(8,128,(Y,j,Mt)=>{const dt=Y.createLinearGradient(0,0,0,Mt);dt.addColorStop(0,n.sky[0]),dt.addColorStop(1,n.sky[1]),Y.fillStyle=dt,Y.fillRect(0,0,j,Mt)});for(let Y=0;Y<3;Y++){const j=new me(new yn(1.7,1.7),new Hi({map:g,toneMapped:!1}));j.rotation.y=Math.PI/2,j.position.set(-5.18,1.95,-3.4+Y*1.95);const Mt=new me(new xn(.06,1.8,.07),a(14211280));Mt.position.copy(j.position).setX(-5.15);const dt=new me(new xn(.06,.07,1.8),a(14211280));dt.position.copy(Mt.position),this.scene.add(j,Mt,dt)}const p=new me(new xn(an.w+.16,an.h+.16,.06),c);p.position.set(0,an.y,pn+.03);const R=r1(Zs(9)),O=new me(new yn(an.w,an.h),new Ha({map:R}));O.position.set(0,an.y,pn+.065);const M=new me(new xn(an.w+.16,.04,.12),c);M.position.set(0,an.y-an.h/2-.09,pn+.1),this.scene.add(p,O,M),[16777215,16773280,16756928,16777215,11065599].forEach((Y,j)=>{const Mt=new me(new gc(.011,.011,.08,8),a(Y));Mt.rotation.z=Math.PI/2+(s()-.5)*.3,Mt.position.set(-.5+j*.13+s()*.03,M.position.y+.032,pn+.11),this.scene.add(Mt)});const y=new me(new xn(.16,.05,.07),a(3824282));y.position.set(.45,M.position.y+.045,pn+.11),this.scene.add(y);const w=new me(new mc(.19,40),new Hi({map:o1()}));w.position.set(0,Zl,pn+.03);const x=new me(new xc(.19,.215,40),a(3159100));x.position.copy(w.position);const b=(Y,j,Mt,dt)=>{const Zt=new yn(j,Y);Zt.translate(0,Y/2-.02,0);const qt=new me(Zt,new Hi({color:Mt}));return qt.position.copy(w.position).setZ(pn+.035),qt.rotation.z=-dt,this.scene.add(qt),qt},L={morning:8.75,noon:12.5,afternoon:15.25,sunset:17.1,night:21.6};b(.09,.016,2106412,L[e]/12*Math.PI*2),b(.14,.011,2106412,L[e]%1*Math.PI*2),this.secondHand=b(.15,.005,13777466,0),this.scene.add(w,x);const $=t?[[c1(),-.72,.62,.42],[l1(),.74,.62,.5]]:[[u1(),-.72,.6,.3],[f1(),.74,.5,.42]];for(const[Y,j,Mt,dt]of $){const Zt=new me(new yn(Mt,dt),new Ha({map:Y}));Zt.position.set(j,Zl,pn+.02),this.scene.add(Zt)}const U=new me(new xn(1.1,.6,.5),o);U.position.set(0,.3,-3.5),this.scene.add(U);const z=a(9080728);for(const Y of[-1.05,0,1.05]){const j=new me(new xn(.66,.035,.46),o);j.position.set(Y,.72,-1.3),this.scene.add(j);for(const Mt of[-1,1])for(const dt of[-1,1]){const Zt=new me(new xn(.03,.72,.03),z);Zt.position.set(Y+Mt*.3,.36,-1.3+dt*.2),this.scene.add(Zt)}}for(const Y of[-1.6,1.6]){const j=new me(new xn(1.3,.05,.16),new Hi({color:n.lamps?16054527:12567240,toneMapped:!n.lamps}));if(j.position.set(Y,3.36,-3.2),this.scene.add(j),n.lamps){const Mt=t1(14674175,2.6,.5);Mt.position.copy(j.position);const dt=new Kd(15265535,14,9,1.6);dt.position.set(Y,3.1,-3.2),this.scene.add(Mt,dt)}}const I=a1();for(let Y=0;Y<2;Y++){const dt=-1.5+Y*1.75,Zt=.5,qt=n.shear*2.5,re=new je;re.setAttribute("position",new ke([dt+qt,Zt,0,dt+qt+1.5,Zt,0,dt+1.5,Zt+2.5,0,dt,Zt+2.5,0],3)),re.setAttribute("uv",new ke([0,0,1,0,1,1,0,1],2)),re.setIndex([0,1,2,0,2,3]);const J=new me(re,new Hi({map:I,color:n.sun,transparent:!0,opacity:n.patch,blending:er,depthWrite:!1}));J.position.z=pn+.075,this.patches.push(J),this.scene.add(J)}const G=140,et=new Float32Array(G*3);this.dustSeed=new Float32Array(G*3);for(let Y=0;Y<G*3;Y+=3)this.dustSeed.set([(s()-.5)*4.5,.6+s()*2.4,-.8-s()*3.4],Y);const K=new je;K.setAttribute("position",new In(et,3)),this.dust=new _l(K,new Yo({map:Qo(),color:n.sun,size:.05,transparent:!0,opacity:.25+n.patch*.6,blending:er,depthWrite:!1})),this.scene.add(this.dust);const ot=40,Z=new je;Z.setAttribute("position",new In(new Float32Array(ot*3),3)),this.puffVel=new Float32Array(ot*3),this.puff=new _l(Z,new Yo({map:Qo(),color:16777215,size:.09,transparent:!0,opacity:0,depthWrite:!1})),this.puff.frustumCulled=!1,this.scene.add(this.puff)}resize(){this.camera.updateProjectionMatrix()}boardRect(e,t){const n=pn+.065,s=e.project(new V(-4.6/2,an.y+an.h/2,n)),r=e.project(new V(an.w/2,an.y-an.h/2,n)),a=Math.max(0,s.x),o=Math.min(t,r.x);return{left:a,top:s.y,width:o-a,height:r.y-s.y}}react(e){if(e==="miss"){this.shake=1;return}e==="correct"&&(this.nod=1);const t=this.puff.geometry.getAttribute("position");for(let n=0;n<t.count;n++)t.setXYZ(n,(Math.random()-.5)*.7,an.y+(Math.random()-.5)*.3,pn+.15),this.puffVel.set([(Math.random()-.5)*.9,Math.random()*.5,.2+Math.random()*.5],n*3);t.needsUpdate=!0,this.puffLife=e==="correct"?1:.6}update(e,t){const n=new Date;this.secondHand.rotation.z=-((n.getSeconds()+n.getMilliseconds()/1e3)/60)*Math.PI*2;const s=this.dust.geometry.getAttribute("position"),r=s.array;for(let c=0;c<r.length;c+=3){const l=this.dustSeed;r[c]=l[c]+Math.sin(t*.21+c)*.25,r[c+1]=.6+(l[c+1]-.6+t*.035*(1+c%5*.2))%2.4,r[c+2]=l[c+2]+Math.cos(t*.17+c*1.3)*.2}s.needsUpdate=!0;const a=.86+.14*Math.sin(t*.35)*Math.sin(t*.13+1);for(const c of this.patches)c.material.opacity=this.patchOpacity*a;if(this.puffLife>0){this.puffLife=Math.max(0,this.puffLife-e*1.3);const c=this.puff.geometry.getAttribute("position"),l=c.array;for(let u=0;u<l.length;u+=3)l[u]+=this.puffVel[u]*e,l[u+1]+=(this.puffVel[u+1]-.35)*e,l[u+2]+=this.puffVel[u+2]*e;c.needsUpdate=!0,this.puff.material.opacity=this.puffLife*.5}this.shake=Math.max(0,this.shake-e*2.6),this.nod=Math.max(0,this.nod-e*2.2);const o=this.shake*this.shake;this.camera.position.set(Math.sin(t*.33)*.06+(Math.random()-.5)*.09*o,1.25+Math.sin(t*.5)*.012+(Math.random()-.5)*.07*o,-Math.sin(this.nod*Math.PI)*.16),this.camera.lookAt(Math.sin(t*.33)*.02,an.y,pn)}}function Jl(i,e,t){return ts(256,256,(n,s,r)=>{n.fillStyle=e,n.fillRect(0,0,s,r);const a=6;for(let o=0;o<a;o++){n.globalAlpha=.08+i()*.22,n.fillStyle=t,n.fillRect(0,o*r/a,s,r/a),n.globalAlpha=.5,n.fillRect(0,o*r/a,s,1.5);const c=i()*s;n.fillRect(c,o*r/a,1.5,r/a)}n.globalAlpha=.06;for(let o=0;o<90;o++)n.fillRect(0,i()*r,s,1)})}function r1(i){return ts(1024,268,(e,t,n)=>{e.fillStyle="#1e4a3a",e.fillRect(0,0,t,n);for(let r=0;r<60;r++)e.globalAlpha=.02+i()*.05,e.fillStyle="#e8f4ec",e.beginPath(),e.ellipse(i()*t,i()*n,40+i()*150,8+i()*26,(i()-.5)*.5,0,Math.PI*2),e.fill();const s=e.createRadialGradient(t/2,n/2,n*.3,t/2,n/2,t*.62);s.addColorStop(0,"rgba(0,0,0,0)"),s.addColorStop(1,"rgba(0,0,0,0.32)"),e.globalAlpha=1,e.fillStyle=s,e.fillRect(0,0,t,n)})}function a1(){return ts(128,192,(i,e,t)=>{i.fillStyle="#000",i.fillRect(0,0,e,t),i.filter="blur(3px)",i.fillStyle="#fff";for(let n=0;n<2;n++)for(let s=0;s<3;s++)i.fillRect(8+n*60,8+s*61,52,54)})}function o1(){return ts(256,256,(i,e)=>{i.fillStyle="#fbfbf6",i.fillRect(0,0,e,e),i.translate(e/2,e/2),i.fillStyle="#20242c";for(let t=0;t<12;t++)i.save(),i.rotate(t/12*Math.PI*2),i.fillRect(-3,-e/2+14,6,t%3===0?26:14),i.restore()})}function fa(i,e,t,n){return ts(i,e,s=>{s.fillStyle=t,s.fillRect(0,0,i,e),s.textAlign="center",s.textBaseline="middle",n(s)})}function c1(){return fa(372,252,"#fff6c8",i=>{i.fillStyle="#e8553a",i.font=`400 54px ${mi}`,i.fillText("めあて",186,56),i.fillStyle="#333",i.font=`400 46px ${mi}`,i.fillText("すばやく",186,132),i.fillText("せいかくに",186,196)})}function l1(){return fa(372,300,"#e2f3ff",i=>{i.fillStyle="#2a6fc0",i.font=`400 34px ${mi}`,i.fillText("九九のひょう",186,28),i.font=`400 21px ${mi}`;for(let e=1;e<=9;e++)for(let t=1;t<=9;t++)i.fillStyle=e===t?"#e8553a":"#333",i.fillText(String(e*t),26+(t-1)*40,68+(e-1)*26)})}function u1(){return fa(400,200,"#f6f1e2",i=>{i.strokeStyle="#5a3a1c",i.lineWidth=14,i.strokeRect(7,7,386,186),i.fillStyle="#8a8272",i.font=`400 26px ${mi}`,i.fillText("校訓",60,44),i.fillStyle="#1a1a1a",i.font=`400 104px ${mi}`,i.fillText("挑戦",210,116)})}function f1(){const i="月火水木金",e="国数理社英体音美",t=Zs(21);return fa(300,252,"#ffffff",n=>{n.fillStyle="#333",n.font=`400 26px ${mi}`,n.fillText("時間割",150,22),n.font=`400 24px ${mi}`,n.strokeStyle="#b0b0b0";for(let s=0;s<5;s++){n.fillStyle="#2a6fc0",n.fillText(i[s],42+s*54,58);for(let r=0;r<5;r++){const a=t()<.4?"数":e[Math.floor(t()*e.length)];n.fillStyle=a==="数"?"#e8553a":"#333",n.fillText(a,42+s*54,94+r*32),n.strokeRect(15+s*54,78+r*32,54,32)}}})}let te=null,Zn=null,wi=null,tr=null,sa=null;const Ju="nr.mute";let ha=!1;try{ha=localStorage.getItem(Ju)==="1"}catch{}const Qa=()=>ha;function h1(i){ha=i;try{localStorage.setItem(Ju,i?"1":"0")}catch{}Zn&&te&&Zn.gain.setTargetAtTime(i?0:1,te.currentTime,.03)}function jo(){try{if(!te){te=new AudioContext,Zn=te.createGain(),Zn.gain.value=ha?0:1;const i=te.createDynamicsCompressor();Zn.connect(i).connect(te.destination),wi=te.createGain(),wi.gain.value=.5,wi.connect(Zn);const e=te.createDelay(1);e.delayTime.value=.28;const t=te.createGain();t.gain.value=.32,tr=te.createGain(),tr.gain.value=.35,tr.connect(e),e.connect(t).connect(e),e.connect(wi),sa=te.createBuffer(1,te.sampleRate*.5,te.sampleRate);const n=sa.getChannelData(0);for(let s=0;s<n.length;s++)n[s]=Math.random()*2-1}if(te.state==="suspended"&&te.resume(),qr!=="none"){const i=qr;qr="none",Mc(i)}}catch{te=null}}document.addEventListener("visibilitychange",()=>{te&&(document.hidden?te.suspend():te.resume())});function Pe(i,e,t={}){if(!te||!Zn)return;const n=t.when??te.currentTime+(t.at??0),s=te.createOscillator(),r=te.createGain();s.type=t.type??"square",s.frequency.setValueAtTime(i,n),t.slideTo&&s.frequency.exponentialRampToValueAtTime(t.slideTo,n+e);const a=t.gain??.08;r.gain.setValueAtTime(1e-4,n),r.gain.exponentialRampToValueAtTime(a,n+(t.attack??.004)),r.gain.exponentialRampToValueAtTime(1e-4,n+e);let o=s.connect(r);if(t.cutoff){const c=te.createBiquadFilter();c.type="lowpass",c.frequency.value=t.cutoff,o=o.connect(c)}o.connect(t.out??Zn),t.echo&&tr&&o.connect(tr),s.start(n),s.stop(n+e+.03)}function Ci(i,e={}){if(!te||!Zn||!sa)return;const t=e.when??te.currentTime,n=te.createBufferSource();n.buffer=sa;const s=te.createBiquadFilter();s.type=e.lowpass?"lowpass":"highpass",s.frequency.value=e.lowpass??e.highpass??6e3;const r=te.createGain();r.gain.setValueAtTime(e.gain??.05,t),r.gain.exponentialRampToValueAtTime(1e-4,t+i),n.connect(s).connect(r).connect(e.out??Zn),n.start(t),n.stop(t+i+.02)}const vn={tick:i=>Pe(i?1320:880,.04,{gain:i?.07:.045}),hit:i=>{Pe(523*Math.pow(2,Math.min(i,14)/12),.12,{type:"triangle",gain:.16}),Ci(.03,{gain:.03,highpass:5e3})},select:()=>Pe(660,.05,{type:"triangle",gain:.09}),tapUi:()=>Pe(740,.05,{type:"sine",gain:.08,slideTo:980}),miss:()=>Pe(160,.18,{type:"sawtooth",gain:.09,slideTo:110}),correct:()=>{Pe(784,.1,{type:"triangle",gain:.15}),Pe(1175,.14,{type:"triangle",gain:.15,at:.07}),Pe(1568,.3,{type:"triangle",gain:.13,at:.14,echo:!0})},wrong:()=>{Pe(140,.45,{type:"sawtooth",gain:.12}),Pe(147,.45,{type:"square",gain:.05}),Ci(.2,{gain:.05,lowpass:900})},grant:()=>{Pe(660,.07,{type:"sine",gain:.07}),Pe(990,.12,{type:"sine",gain:.07,at:.06})},whoosh:()=>Ci(.4,{gain:.05,lowpass:1800}),count:i=>Pe(i?1046:523,i?.4:.12,{gain:.1,type:i?"triangle":"square",echo:i}),tally:i=>Pe(880+i%8*60,.03,{type:"square",gain:.035}),stamp:()=>{Pe(196,.25,{type:"triangle",gain:.2,slideTo:98}),Ci(.12,{gain:.08,lowpass:2500})},fanfare:()=>[523,659,784,1046,1319].forEach((i,e)=>Pe(i,e===4?.7:.13,{type:"triangle",gain:.14,at:e*.11,echo:e===4}))};function Ql(i){var e;try{(e=navigator.vibrate)==null||e.call(navigator,i)}catch{}}const Vi=i=>110*Math.pow(2,i/12),d1={cool:{bpm:104,chords:[[0,3,7],[-4,0,3],[3,7,10],[-2,2,5]],step(i,e,t,n){const s=wi;i%2===0&&Pe(Vi(e[0]-12),n*1.7,{type:"sawtooth",gain:.11,when:t,out:s,cutoff:420});const r=[e[0],e[1],e[2],e[1]+12,e[2],e[1],e[0]+12,e[2]];if(Pe(Vi(r[i%8]+12),n*.9,{type:"square",gain:.032,when:t,out:s,echo:!0,cutoff:2600}),i===0)for(const a of e)Pe(Vi(a),n*16,{type:"triangle",gain:.03,when:t,out:s,attack:.4});i%4===0&&Pe(120,.16,{type:"sine",gain:.3,when:t,out:s,slideTo:42}),i%8===4&&Ci(.14,{gain:.07,when:t,highpass:1800,out:s}),i%2===1&&Ci(.03,{gain:.03,when:t,highpass:8e3,out:s})}},light:{bpm:118,chords:[[3,7,10],[0,3,7],[-4,0,3],[-2,2,5]],step(i,e,t,n){const s=wi;(i%8===0||i%8===5)&&Pe(Vi(e[0]-12),n*2.2,{type:"triangle",gain:.16,when:t,out:s});const a=[e[2],null,e[1],e[2],e[0]+12,null,e[2],null,e[1],e[2],null,e[1],e[0],null,e[1],null][i];if(a!=null&&(Pe(Vi(a+12),n*1.6,{type:"sine",gain:.09,when:t,out:s,echo:!0}),Pe(Vi(a+36),n*.5,{type:"sine",gain:.02,when:t,out:s})),i%4===2)for(const o of e)Pe(Vi(o+12),n*.9,{type:"triangle",gain:.022,when:t,out:s});i%4===0&&Ci(.025,{gain:.025,when:t,highpass:7e3,out:s}),i%8===4&&Ci(.06,{gain:.035,when:t,highpass:3500,out:s})}}};let jl="none",qr="none",tu=0,Br=0,Es=0;function Mc(i){if(!te){qr=i;return}if(i===jl||(jl=i,window.clearInterval(tu),i==="none"))return;const e=d1[i],t=60/e.bpm/4;Br=0,Es=te.currentTime+.08,tu=window.setInterval(()=>{if(!(!te||te.state!=="running"))for(Es<te.currentTime&&(Es=te.currentTime+.05);Es<te.currentTime+.25;){const n=Math.floor(Br/16)%e.chords.length;e.step(Br%16,e.chords[n],Es,t),Br++,Es+=t}},60)}function Sc(i){wi&&te&&wi.gain.setTargetAtTime(i?.22:.5,te.currentTime,.2)}const Ji=document.getElementById("app"),tc=document.getElementById("fade"),cr=new Qx(document.getElementById("stage")),Qu=.16;function ft(i,e,t){const n=document.createElement(i);return e&&(n.className=e),t!==void 0&&(n.textContent=t),n}function mn(i,e){i.classList.remove(e),i.offsetWidth,i.classList.add(e)}const ui=i=>new Promise(e=>setTimeout(e,i));function Ps(i,e){i.addEventListener("pointerdown",t=>{t.preventDefault(),e()})}let hn=null,eu="";function p1(i){return i.stage==="sho"?Number(i.id[1])<=3?"morning":"noon":i.stage==="chu"?"afternoon":i.id==="k3"||i.id==="kc"?"night":"sunset"}const m1=i=>i.stage==="ko"?"cool":"light";function ju(i,e){const t=`${i}/${e}`;return(!hn||eu!==t)&&(hn=new s1(i,e),eu=t,cr.setWorld(hn)),hn}function tf(i,e){let t=0;const n=()=>{if(hn){const s=hn.boardRect(cr,window.innerWidth),r=e.getBoundingClientRect(),a=Math.max(s.left,r.left),o=Math.min(s.left+s.width,r.right);i.style.cssText=`left:${a-r.left}px;top:${s.top-r.top}px;width:${o-a}px;height:${s.height}px`}t=requestAnimationFrame(n)};return n(),()=>cancelAnimationFrame(t)}async function ef(i){tc.classList.add("on"),await ui(260),i(),await ui(60),tc.classList.remove("on")}function nf(i){try{return localStorage.getItem(i)}catch{return null}}function sf(i,e){try{localStorage.setItem(i,e)}catch{}}const rf=i=>Number(nf(`nr.best3.${i.id}`))||0,ja=[["sho","小学校"],["chu","中学校"],["ko","高校"]];let Pi=null;function af(){Pi==null||Pi(),ju("noon",!0),cr.setLift(Qu),Mc("light"),Sc(!1),Ji.replaceChildren();const i=ft("div","screen title"),e=ft("button","icon-btn",Qa()?"🔇":"🔊");Ps(e,()=>{jo(),h1(!Qa()),e.textContent=Qa()?"🔇":"🔊"});const t=ft("div","focus board-title");t.append(ft("div","logo-sub","小1〜高3の 算数・数学"),ft("div","logo-main","黒板ラッシュ"),ft("div","logo-tag","学年をえらんで スタート!")),Pi=tf(t,i);const n=ft("div","panel menu"),s=ft("div","tabs"),r=ft("div","course-grid");let a=nf("nr.stage")??"sho";ja.some(([c])=>c===a)||(a="sho");const o=()=>{r.replaceChildren(),_h.filter(c=>c.stage===a).forEach((c,l)=>{const u=ft("button",`mode-btn course st-${c.stage}`);u.style.setProperty("--i",String(l));const h=rf(c);u.append(ft("span","course-label",c.label),ft("span","course-name",c.name),ft("span","mode-best",h?`BEST ${h}`:"まだ")),Ps(u,()=>void of(c)),r.append(u)}),mn(r,"deal"),Array.from(s.children).forEach((c,l)=>c.classList.toggle("on",ja[l][0]===a))};for(const[c,l]of ja){const u=ft("button",`tab st-${c}`,l);Ps(u,()=>{a!==c&&(jo(),vn.tapUi(),a=c,sf("nr.stage",c),o())}),s.append(u)}n.append(s,r),o(),i.append(e,t,ft("div","grow"),n),Ji.append(i)}let to=!1;async function of(i){if(to)return;to=!0,jo(),vn.tapUi(),await ef(()=>{Pi==null||Pi(),Pi=null,Ji.replaceChildren(),ju(p1(i),i.stage==="sho"),Mc(m1(i)),Sc(!1),cr.setLift(Qu,!0)});const e=ft("div","screen countdown"),t=ft("div","count-num");e.append(ft("div","count-mode",i.name),t),Ji.append(e);for(const n of["READY","GO!"])t.textContent=n,mn(t,"pop-in"),vn.count(n==="GO!"),await ui(n==="GO!"?420:700);to=!1,new g1(i).start()}class g1{constructor(e){Ft(this,"rng",Sf());Ft(this,"index",0);Ft(this,"level",ro);Ft(this,"topLevel",ro);Ft(this,"points",0);Ft(this,"bonus",0);Ft(this,"combo",0);Ft(this,"maxCombo",0);Ft(this,"results",[]);Ft(this,"recent",[]);Ft(this,"bank",0);Ft(this,"q");Ft(this,"tap",null);Ft(this,"locked",!0);Ft(this,"step",0);Ft(this,"lastTick",0);Ft(this,"lastFrame",0);Ft(this,"root");Ft(this,"levelEl",ft("div","level"));Ft(this,"pips",ft("div","pips"));Ft(this,"comboEl",ft("span","combo"));Ft(this,"scoreEl",ft("span","score"));Ft(this,"gauge",wh());Ft(this,"prompt",ft("div","prompt"));Ft(this,"focus",ft("div","focus"));Ft(this,"figEl",ft("div","work-fig"));Ft(this,"workMain",ft("div","work-main"));Ft(this,"workSub",ft("div","work-sub"));Ft(this,"work",ft("div","work"));Ft(this,"pad",ft("div","pad"));Ft(this,"stamp",ft("div","stamp"));Ft(this,"toast",ft("div","toast"));Ft(this,"padButtons",[]);Ft(this,"raf",0);Ft(this,"stopBoard");this.course=e,this.root=ft("div",`screen play st-${e.stage}`);const t=ft("div","hud"),n=ft("div","hud-mid");n.append(this.levelEl,this.pips);const s=ft("div","hud-right");s.append(this.scoreEl,this.comboEl),t.append(this.gauge.el,n,s);for(let a=0;a<Ti;a++)this.pips.append(ft("span","pip"));this.work.append(this.figEl,this.workMain,this.workSub),this.focus.append(this.prompt,this.work,this.stamp,this.toast);const r=ft("div","panel");r.append(this.pad),this.root.append(t,this.focus,ft("div","grow"),r),this.stopBoard=tf(this.focus,this.root)}start(){Ji.replaceChildren(this.root),this.lastFrame=performance.now();const e=()=>{this.frame(),this.raf=requestAnimationFrame(e)};this.raf=requestAnimationFrame(e),this.showLevel(0),this.showQuestion()}async showQuestion(){this.q=Sh(this.rng,this.course,this.level,this.recent.slice(-3)),this.recent.push(this.q.code),this.tap=this.q.kind==="choice"?null:Ah(this.q),this.step=0,Array.from(this.pips.children).forEach((e,t)=>e.classList.toggle("now",t===this.index)),this.updateHud(),this.stamp.className="stamp",this.prompt.textContent=this.q.prompt,this.renderWork(!1),mn(this.work,"chalk-in"),mn(this.prompt,"chalk-in"),this.renderPad(),this.bank+=ao,this.gauge.update(this.bank),this.gauge.flash("grant"),this.floatText(`+${ao/1e3}`,"grant"),vn.grant(),this.lastTick=Math.ceil(this.bank/500),await ui(400),this.locked=!1}updateHud(){this.scoreEl.textContent=String(this.points+this.bonus),this.comboEl.textContent=this.combo>=2?`${this.combo}れんぞく!`:"",this.combo>=2&&mn(this.comboEl,"pop")}showLevel(e){this.levelEl.replaceChildren(ft("span","level-tag","Lv"),ft("span","level-num",String(this.level))),this.levelEl.dataset.dir=e>0?"up":e<0?"down":"",e!==0&&mn(this.levelEl,"pop")}frame(){const e=performance.now(),t=Math.min(e-this.lastFrame,100);if(this.lastFrame=e,this.locked)return;this.bank-=t,this.gauge.update(this.bank);const n=Math.ceil(this.bank/500);if(n<this.lastTick){this.lastTick=n;const s=this.bank<=5e3;this.bank<=1e4&&(s||n%2===0)&&vn.tick(s)}this.bank<=0&&this.fail("timeup")}renderWork(e,t=!1){const n=this.q,s=this.tap,r=this.workMain,a=this.workSub;if(r.replaceChildren(),a.replaceChildren(),r.className=`work-main${t?" done":""}`,a.className="work-sub",this.figEl.innerHTML=n.body.fig??"",this.work.classList.toggle("has-fig",!!n.body.fig),n.kind==="choice")r.append(Yr(n.body.text));else if((s==null?void 0:s.kind)==="factor"&&n.kind==="factor")r.textContent=t?iu(s.collected):String(s.n),a.textContent=t?`${n.n} =`:s.collected.length?`${n.n} = ${s.collected.join(" × ")} × …`:"素数ボタンで割っていこう";else if((s==null?void 0:s.kind)==="reduce"&&n.kind==="reduce")r.append(cf(String(s.num),String(s.den))),a.textContent=s.collected.length?s.collected.map(l=>`÷${l}`).join("  "):"分母と分子を同じ数で割ろう";else if((s==null?void 0:s.kind)==="sqrt"&&n.kind==="sqrt")r.textContent=`${s.coef>1?s.coef:""}√${s.rad}`,a.textContent=s.coef>1?`√${n.rad} =`:"平方数をくくり出そう";else if((s==null?void 0:s.kind)==="pair"&&n.kind==="pair"){r.textContent=n.body.text;const l=u=>{const h=s.selected[u];if(h===void 0)return"(x + ▢)";const f=n.tiles[h];return f<0?`(x ${Rs} ${-f})`:`(x + ${f})`};a.textContent=`= ${l(0)}${l(1)}`,a.classList.add("slots")}const o=Array.from(r.textContent??"").reduce((l,u)=>l+(/[　-鿿]/.test(u)?1:.56),0),c=o>15;r.classList.toggle("wrap",c),r.style.fontSize=c||n.body.fig?"":`min(26cqh, ${(88/Math.max(o,1)).toFixed(1)}cqw)`,e&&mn(r,"pop")}renderPad(){const e=this.q;this.pad.replaceChildren(),this.pad.className="pad";let t,n;e.kind==="choice"?(t=e.choices,n=e.choices.map((r,a)=>a),this.pad.classList.add(e.choices.length===2?"yesno":"choices")):e.kind==="pair"?(t=e.tiles.map(Mf),n=e.tiles.map((r,a)=>a),this.pad.classList.add("tiles")):e.kind==="sqrt"?(t=e.pad.map(r=>`${r}²`),n=[...e.pad],this.pad.classList.add("squares")):(t=e.pad.map(String),n=[...e.pad],this.pad.classList.add("primes"));const s=Math.max(...t.map(r=>r.length));this.pad.classList.add(s>16?"text-xs":s>10?"text-s":s>5?"text-m":"text-l"),t.some(r=>/[぀-ヿ一-鿿√π°]/.test(r))&&this.pad.classList.add("words"),this.padButtons=t.map((r,a)=>{const o=ft("button","key"),c=ft("span","key-face");return c.append(Yr(r)),o.append(c),o.style.setProperty("--i",String(a)),Ps(o,()=>this.press(n[a],o)),this.pad.append(o),o}),mn(this.pad,"deal")}press(e,t){if(this.locked)return;const n=this.q;if(n.kind==="choice"){e===n.answer?(t.classList.add("right"),this.succeed()):(t.classList.add("wrong"),this.fail("wrong"));return}const{state:s,result:r}=Rh(n,this.tap,e);if(this.tap=s,r==="miss"){this.bank-=Yc,vn.miss(),Ql(40),mn(t,"shake-key"),this.gauge.flash("penalty"),this.floatText(`${Rs}${(Yc/1e3).toFixed(1)}`,"penalty"),n.kind==="pair"&&this.syncTiles(),this.renderWork(!1);return}if(r==="select"){vn.select(),this.syncTiles(),this.renderWork(!1);return}vn.hit(this.step++),mn(t,"hit-key"),n.kind==="pair"&&this.syncTiles(),r==="hit"?(this.bank+=qc,this.gauge.flash("bonus"),this.floatText(`+${(qc/1e3).toFixed(1)}`,"bonus"),hn==null||hn.react("hit"),this.renderWork(!0)):(this.renderWork(!0,!0),this.succeed())}syncTiles(){var t;if(((t=this.tap)==null?void 0:t.kind)!=="pair")return;const e=this.tap.selected;this.padButtons.forEach((n,s)=>n.classList.toggle("selected",e.includes(s)))}floatText(e,t){const n=ft("div",`float ${t}`,e);this.gauge.el.append(n),setTimeout(()=>n.remove(),900)}say(e,t){this.toast.textContent=e,this.toast.className=`toast ${t}`,mn(this.toast,"show")}mark(e){this.results.push({q:this.q,ok:e,level:this.level});const t=this.pips.children[this.index];t==null||t.classList.remove("now"),t==null||t.classList.add(e?"ok":"ng")}async succeed(){this.locked=!0,this.combo++,this.maxCombo=Math.max(this.maxCombo,this.combo),this.points+=Eh(this.level);const e=yh(this.combo);this.bonus+=e,this.mark(!0),vn.correct(),hn==null||hn.react("correct"),this.showStamp("ok"),this.updateHud(),mn(this.scoreEl,"pop");const t=this.level;this.level=Wc(this.level,!0),this.topLevel=Math.max(this.topLevel,this.level),this.level>t?(this.showLevel(1),this.say(e?`レベルアップ!  れんぞくボーナス +${e}`:"レベルアップ!","up")):e&&this.say(`れんぞくボーナス +${e}`,"bonus"),await ui(this.q.kind==="choice"?750:950),this.next()}async fail(e){var n;this.locked=!0,this.combo=0,this.mark(!1),e==="wrong"&&(this.bank-=Xc,this.gauge.flash("penalty"),this.floatText(`${Rs}${Xc/1e3}`,"penalty")),this.bank=Math.max(0,this.bank),this.gauge.update(this.bank),vn.wrong(),Ql([90,40,90]),hn==null||hn.react("miss"),mn(this.root,"shake"),this.q.kind==="choice"&&((n=this.padButtons[this.q.answer])==null||n.classList.add("right")),this.showStamp("ng",this.bank<=0?"TIME UP":"×",this.q.solution),this.updateHud();const t=this.level;this.level=Wc(this.level,!1),this.level<t&&this.showLevel(-1),await ui(1900),this.next()}showStamp(e,t,n){if(this.stamp.replaceChildren(),e==="ok")this.stamp.append(_1(this.course.stage==="sho"));else if(this.stamp.append(ft("div","stamp-main",t)),n){const s=ft("div",`stamp-detail${n.length>22?" long":""}`);s.append(Yr(n)),this.stamp.append(s)}this.stamp.className=`stamp show ${e}`}next(){if(this.index++,this.index<Ti&&this.bank>0){this.showQuestion();return}cancelAnimationFrame(this.raf),this.stopBoard(),v1({course:this.course,results:this.results,points:this.points,bonus:this.bonus,bank:this.bank,maxCombo:this.maxCombo,topLevel:this.topLevel})}}function cf(i,e){const t=ft("span","frac");return t.append(ft("span","num",i),ft("span","den",e)),t}const nu=String.raw`\d*√\d+|\d*π|\d+[a-z]?|[a-zπ]`,x1=new RegExp(String.raw`(?<![A-Za-z0-9√π²³.])(${nu})/(${nu})(?![A-Za-z0-9²³⁴(√π^.])`,"g");function Yr(i){const e=document.createDocumentFragment();let t=0;for(const n of i.matchAll(x1))e.append(i.slice(t,n.index),cf(n[1],n[2])),t=n.index+n[0].length;return e.append(i.slice(t)),e}function _1(i){const e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"svg");t.setAttribute("viewBox","-60 -60 120 120"),t.setAttribute("class","chalk-mark");let n="";const s=i?2.6:1.08,r=i?4:34,a=i?30:36;for(let c=0;c<=80;c++){const l=c/80,u=l*s*Math.PI*2-Math.PI/2,h=r+(a-r)*l;n+=`${c?"L":"M"}${(Math.cos(u)*h).toFixed(1)} ${(Math.sin(u)*h).toFixed(1)}`}if(i){const l=s*Math.PI*2-Math.PI/2;for(let u=0;u<9;u++){const h=l+u/9*Math.PI*2,f=l+(u+1)/9*Math.PI*2,d=(h+f)/2;n+=`Q${(Math.cos(d)*56).toFixed(1)} ${(Math.sin(d)*56).toFixed(1)} ${(Math.cos(f)*31).toFixed(1)} ${(Math.sin(f)*31).toFixed(1)}`}}const o=document.createElementNS(e,"path");return o.setAttribute("d",n),o.setAttribute("pathLength","1"),t.append(o),t}function v1(i){const{course:e,results:t}=i,n=t.filter(U=>U.ok).length,s=t.length===Ti&&i.bank>0,r=bh(i.bank,n,Ti),a=i.points+i.bonus+r,o=rf(e),c=a>o;c&&sf(`nr.best3.${e.id}`,String(a));const l=Th(n,Ti,s);cr.setLift(0),Sc(!0),Ji.replaceChildren();const u=ft("div","screen result"),h=ft("div","card");h.append(ft("div","result-mode",e.name),ft("div","result-head",s?"FINISH!":"TIME UP"));const f=ft("div",`rank r-${l}`,l),d=ft("div","result-count");d.append(ft("span","n",String(n)),ft("span","of",` / ${Ti}`),ft("span","of-label","問正解"));const _=ft("div","result-top");_.append(d,f),h.append(_);const E=ft("div","strip");for(let U=0;U<Ti;U++){const z=t[U],I=ft("span",z?z.ok?"dot ok":"dot ng":"dot");I.append(ft("b","",z?z.ok?"○":"×":"・"),ft("i","",z?`Lv${z.level}`:"")),E.append(I)}h.append(E,ft("div","result-level",`最高レベル ${i.topLevel} / ${lu}`));const g=ft("div","rows"),p=(U,z)=>{const I=ft("div","row"),G=ft("span","row-value","0");return I.append(ft("span","row-label",U),ft("span","row-detail",z),G),g.append(I),G},R=p("正解","むずかしいほど高得点"),O=p("連続正解ボーナス",`最大 ${i.maxCombo}問れんぞく`),M=p("残り時間",`${Math.floor(Math.max(i.bank,0)/1e3)}秒 × ${uu} × 正解率 ${n}/${Ti}`);h.append(g);const A=ft("div","result-score"),y=ft("span","total","0");A.append(ft("span","total-label","SCORE"),y);const w=ft("div","result-meta",`BEST ${Math.max(o,a)}`);h.append(A,w);const x=t.filter(U=>!U.ok);if(x.length){const U=ft("div","missed");U.append(ft("div","missed-head","まちがえた問題"));for(const z of x){const I=ft("div","missed-item"),G=ft("span","missed-a");G.append(Yr(z.q.solution)),I.append(ft("span","missed-q",[z.q.prompt,z.q.body.text].filter(Boolean).join(" ")),G),U.append(I)}h.append(U)}const b=ft("div","actions"),L=ft("button","mode-btn hero slim","もう一回");Ps(L,()=>void of(e));const $=ft("button","mode-btn ghost","学年をえらぶ");Ps($,()=>{vn.tapUi(),ef(af)}),b.append(L,$),u.append(h,b),Ji.append(u),(async()=>(await ui(350),await eo(R,i.points,450,y,0),await eo(O,i.bonus,400,y,i.points),await eo(M,r,800,y,i.points+i.bonus),y.textContent=String(a),mn(A,"pop"),f.classList.add("show"),vn.stamp(),c&&a>0&&(w.textContent="★ BEST 更新!",w.classList.add("new")),(l==="S"||c&&s)&&(vn.fanfare(),M1(u))))()}async function eo(i,e,t,n,s){const r=performance.now();for(let a=0;;a++){const o=e===0?1:Math.min(1,(performance.now()-r)/t),c=Math.round(e*o);if(i.textContent=String(c),n.textContent=String(s+c),o>=1)return;a%2===0&&vn.tally(a),await ui(32)}}function M1(i){const e=ft("div","confetti"),t=["#ffd23d","#ff3d9a","#21e6ff","#7dff6b","#ffffff"];for(let n=0;n<46;n++){const s=ft("i");s.style.cssText=`left:${Math.random()*100}%;background:${t[n%t.length]};animation-delay:${Math.random()*.5}s;animation-duration:${1.6+Math.random()*1.4}s;--drift:${(Math.random()-.5)*160}px;--spin:${Math.random()*720-360}deg`,e.append(s)}i.append(e),setTimeout(()=>e.remove(),3600)}async function S1(){const i=[document.fonts.load(`400 40px ${mi}`,`${e1.join("")}0123456789`)];await Promise.race([Promise.all(i).catch(()=>{}),ui(2500)]),af(),tc.classList.remove("on")}S1();
