var Gd=Object.defineProperty;var Vd=(i,e,t)=>e in i?Gd(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var ot=(i,e,t)=>Vd(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Di=30,no=3e3,Mc=(i,e)=>Array.from({length:e-i+1},(t,n)=>i+n),vi=Mc(1,9),yc=(i,e)=>({a:i,op:"+",b:e,c:i+e,hide:"c"}),Ec=(i,e)=>({a:i,op:"−",b:e,c:i-e,hide:"c"}),lf=(i,e)=>({a:i,op:"×",b:e,c:i*e,hide:"c"}),Hd=(i,e)=>({a:i,op:"÷",b:e,c:i/e,hide:"c"}),Ga=vi.flatMap(i=>vi.map(e=>yc(i,e))),Va=vi.flatMap(i=>vi.map(e=>Ec(e+i,e))),Ha=vi.flatMap(i=>vi.map(e=>lf(i,e))),Wa=vi.flatMap(i=>vi.map(e=>Hd(e*i,e))),Wd=vi.map(i=>({a:i,op:"+",b:10-i,c:10,hide:"b"})),Xd=Mc(2,9).flatMap(i=>vi.flatMap(e=>Mc(1,i-1).map(t=>({a:i*e+t,op:"÷",b:i,c:e,r:t,hide:"c"}))));function si(i,e,t=Di){const n=[];for(;n.length<t;){let s=i.shuffle(e);const r=n[n.length-1];r&&s.length>1&&uf(s[0],r)&&(s=[...s.slice(1),s[0]]),n.push(...s.slice(0,t-n.length))}return n}const uf=(i,e)=>i.a===e.a&&i.op===e.op&&i.b===e.b&&i.hide===e.hide;function _u(i,e,t=Di){const n=[];for(;n.length<t;){const s=e(i),r=n[n.length-1];(!r||!uf(s,r))&&n.push(s)}return n}function qd(i){switch(i.int(0,3)){case 0:{const e=i.int(2,9),t=i.int(11-e,9);return yc(i.int(1,8)*10+e,t)}case 1:{const e=i.int(0,7),t=i.int(e+1,9);return Ec(i.int(2,9)*10+e,t)}case 2:{const e=i.int(11,79);return yc(e,i.int(11,99-e))}default:{const e=i.int(31,99);return Ec(e,i.int(11,e-10))}}}function Yd(i){return lf(i.int(11,49),i.int(2,9))}const Kd=[...Ga,...Va,...Ha,...Wa].flatMap(i=>[{...i,hide:"a"},{...i,hide:"b"}]),Zd=[{id:"ten",mark:"10",name:"10をつくる",note:"あといくつで 10?",draw:i=>si(i,Wd)},{id:"add",mark:"+",name:"たし算",note:"1けた + 1けた",draw:i=>si(i,Ga)},{id:"sub",mark:"−",name:"ひき算",note:"こたえが 1けたの ひき算",draw:i=>si(i,Va)},{id:"addsub",mark:"+−",name:"たし・ひき",note:"たし算と ひき算の ミックス",draw:i=>si(i,[...Ga,...Va])},{id:"mul",mark:"×",name:"かけ算",note:"九九",draw:i=>si(i,Ha)},{id:"div",mark:"÷",name:"わり算",note:"九九の ぎゃく",draw:i=>si(i,Wa)},{id:"muldiv",mark:"×÷",name:"かけ・わり",note:"かけ算と わり算の ミックス",draw:i=>si(i,[...Ha,...Wa])},{id:"all",mark:"+−×÷",name:"4つのミックス",note:"たし算・ひき算・かけ算・わり算",draw:i=>si(i,[...Ga,...Va,...Ha,...Wa])},{id:"rem",mark:"17÷5",name:"あまりあり",note:"あまりのある わり算",draw:i=>si(i,Xd)},{id:"blank",mark:"□",name:"□をもとめる",note:"□に あてはまる 数は?",draw:i=>si(i,Kd)},{id:"mental",mark:"38+7",name:"2けたの暗算",note:"2けたの たし算・ひき算",draw:i=>_u(i,qd)},{id:"x21",mark:"23×4",name:"2けた×1けた",note:"23 × 4 のような かけ算",draw:i=>_u(i,Yd)}];function Ro(i){return i.r!==void 0?[i.c,i.r]:[i[i.hide]]}function hf(i,e){return i+e*no}function Js(i){const e=Math.floor(Math.max(0,i)/100),t=Math.floor(e/10),n=e%10;return t<60?`${t}.${n}`:`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}.${n}`}const Jd={0:"⁰",1:"¹",2:"²",3:"³",4:"⁴",5:"⁵",6:"⁶",7:"⁷",8:"⁸",9:"⁹","-":"⁻"},Qd={0:"₀",1:"₁",2:"₂",3:"₃",4:"₄",5:"₅",6:"₆",7:"₇",8:"₈",9:"₉"},tr="−";function Xe(i){return String(i).split("").map(e=>Jd[e]??e).join("")}function ds(i){return String(i).split("").map(e=>Qd[e]??e).join("")}function jd(i){return i<0?`${tr}${-i}`:String(i)}function ff(i){const e=new Map;for(const t of i)e.set(t,(e.get(t)??0)+1);return[...e.entries()].sort((t,n)=>t[0]-n[0]).map(([t,n])=>n===1?String(t):`${t}${Xe(n)}`).join(" × ")}function bn(i){const e=new Map;for(const n of i)e.set(n.pow,(e.get(n.pow)??0)+n.coef);const t=[...e.entries()].map(([n,s])=>({coef:s,pow:n})).filter(n=>n.coef!==0).sort((n,s)=>s.pow-n.pow);return t.length===0?"0":t.map((n,s)=>{const r=Math.abs(n.coef),a=n.pow===0?"":n.pow===1?"x":`x${Xe(n.pow)}`,c=(r===1&&n.pow!==0?"":String(r))+a;return s===0?n.coef<0?`${tr}${c}`:c:n.coef<0?` ${tr} ${c}`:` + ${c}`}).join("")}function df(i=Date.now()){let e=i>>>0;const t=()=>{e=e+1831565813>>>0;let s=e;return s=Math.imul(s^s>>>15,s|1),s^=s+Math.imul(s^s>>>7,s|61),((s^s>>>14)>>>0)/4294967296},n=(s,r)=>s+Math.floor(t()*(r-s+1));return{next:t,int:n,pick:s=>{if(s.length===0)throw new Error("pick from empty list");return s[n(0,s.length-1)]},shuffle:s=>{const r=[...s];for(let a=r.length-1;a>0;a--){const o=n(0,a);[r[a],r[o]]=[r[o],r[a]]}return r},chance:s=>t()<s}}const rn=240,qe=140,Vt="#ffe98a",mn="#ffa3b1",Jn="#9fd6ff",xe=i=>(Math.round(i*10)/10).toString();function Ht(...i){return`<svg viewBox="0 0 ${rn} ${qe}" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">${i.join("")}</svg>`}const lr=i=>i?` stroke="${i}"`:"",te=(i,e,t,n,s,r=!1)=>`<line x1="${xe(i)}" y1="${xe(e)}" x2="${xe(t)}" y2="${xe(n)}"${lr(s)}${r?' stroke-dasharray="5 5"':""}/>`,En=(i,e,t)=>`<polygon points="${i.map(([n,s])=>`${xe(n)},${xe(s)}`).join(" ")}"${lr(e)}/>`,es=(i,e)=>`<polyline points="${i.map(([t,n])=>`${xe(t)},${xe(n)}`).join(" ")}"${lr(e)}/>`,$i=(i,e,t,n,s)=>`<circle cx="${xe(i)}" cy="${xe(e)}" r="${xe(t)}"${lr(n)}${s?` fill="${s}" fill-opacity="0.35"`:""}/>`,Oi=(i,e,t="currentColor",n=3.2)=>`<circle cx="${xe(i)}" cy="${xe(e)}" r="${n}" fill="${t}" stroke="none"/>`,ns=(i,e,t,n,s,r)=>`<rect x="${xe(i)}" y="${xe(e)}" width="${xe(t)}" height="${xe(n)}"${lr(s)}${r?` fill="${r}" fill-opacity="0.35"`:""}/>`,Yt=(i,e,t,n=15,s="currentColor")=>`<text x="${xe(i)}" y="${xe(e)}" font-size="${n}" fill="${s}" stroke="none" text-anchor="middle" dominant-baseline="central">${t}</text>`,fi=i=>i*Math.PI/180;function tp(i,e,t,n,s,r){const a=[i+t*Math.cos(fi(n)),e-t*Math.sin(fi(n))],o=[i+t*Math.cos(fi(s)),e-t*Math.sin(fi(s))],c=Math.abs(s-n)>180?1:0;return`<path d="M${xe(a[0])} ${xe(a[1])}A${t} ${t} 0 ${c} 0 ${xe(o[0])} ${xe(o[1])}"${lr(r)}/>`}function ep(i,e,t,n,s,r){const a=[i+t*Math.cos(fi(n)),e-t*Math.sin(fi(n))],o=[i+t*Math.cos(fi(s)),e-t*Math.sin(fi(s))],c=Math.abs(s-n)>180?1:0;return`<path d="M${xe(i)} ${xe(e)}L${xe(a[0])} ${xe(a[1])}A${t} ${t} 0 ${c} 0 ${xe(o[0])} ${xe(o[1])}Z" stroke="${r}" fill="${r}" fill-opacity="0.35"/>`}const xo=(i,e,t,n,s=9)=>es([[i+t*s,e],[i+t*s,e+n*s],[i,e+n*s]],Vt),Qn=(i,e,t,n)=>[i+t*Math.cos(fi(n)),e-t*Math.sin(fi(n))];function pf(i,e){const t=rn/2,n=qe/2,s=60,r=[$i(t,n,s)];for(let u=1;u<=12;u++){const[h,f]=Qn(t,n,s-12,90-u*30);r.push(Yt(h,f,String(u),12))}const[a,o]=Qn(t,n,s-20,90-e*6),[c,l]=Qn(t,n,s-34,90-(i%12+e/60)*30);return r.push(te(t,n,a,o,Jn),`<line x1="${t}" y1="${n}" x2="${xe(c)}" y2="${xe(l)}" stroke="${mn}" stroke-width="4.5"/>`,Oi(t,n)),Ht(...r)}function np(i,e=5,t=mn){const n=Math.ceil(i/e),s=Math.min(40,(qe-16)/n,(rn-20)/e),r=s*.36,a=rn/2-(Math.min(i,e)-1)*s/2,o=qe/2-(n-1)*s/2,c=[];for(let l=0;l<i;l++)c.push($i(a+l%e*s,o+Math.floor(l/e)*s,r,t,t));return Ht(...c)}function mf(i,e){const n=rn-60,s=[];for(let r=0;r<e;r++)s.push(ns(30+r*n/e,45,n/e,50,void 0,r<i?Vt:void 0));return Ht(...s)}function ip(i,e){const t=rn/2,n=qe/2,s=58,r=[];for(let a=0;a<i;a++)r.push(ep(t,n,s,90-(a+1)*360/e,90-a*360/e,Vt));r.push($i(t,n,s));for(let a=0;a<e;a++)r.push(te(t,n,...Qn(t,n,s,90-a*360/e)));return Ht(...r)}function sp(i,e,t,n){const r=qe-22,a=qe-36,o=rn-34-10,c=[te(34,r,34+o,r),te(34,r,34,r-a)];for(let u=0;u<=t;u+=n){const h=r-u/t*a;c.push(te(31,h,34+o,h,"rgba(255,255,255,0.22)"),Yt(20,h,String(u),10))}const l=o/i.length;return i.forEach((u,h)=>{c.push(ns(34+h*l+l*.2,r-u/t*a,l*.6,u/t*a,Jn,Jn),Yt(34+h*l+l/2,r+11,e[h]??"",11))}),Ht(...c)}function rp(i,e,t,n){const r=qe-22,a=qe-36,o=rn-34-14,c=[te(34,r,34+o,r),te(34,r,34,r-a)];for(let u=0;u<=t;u+=n){const h=r-u/t*a;c.push(te(31,h,34+o,h,"rgba(255,255,255,0.22)"),Yt(20,h,String(u),10))}const l=i.map((u,h)=>[34+(h+.5)*o/i.length,r-u/t*a]);return c.push(es(l,Vt),...l.map(([u,h])=>Oi(u,h,Vt)),...l.map(([u],h)=>Yt(u,r+11,e[h]??"",11))),Ht(...c)}function is(i=5,e=!0){const t=rn/2,n=qe/2,s=(rn/2-14)/i,r=(qe/2-8)/i,a=(c,l)=>[t+c*s,n-l*r],o=[];for(let c=-i;c<=i;c++)c!==0&&o.push(te(a(c,0)[0],6,a(c,0)[0],qe-6,"rgba(255,255,255,0.13)"),te(8,a(0,c)[1],rn-8,a(0,c)[1],"rgba(255,255,255,0.13)"));return o.push(te(8,n,rn-8,n),te(t,qe-4,t,4),Yt(rn-8,n+10,"x",11),Yt(t+9,8,"y",11),Yt(t-8,n+9,"O",10)),e&&o.push(Yt(a(1,0)[0],n+9,"1",9),Yt(t-8,a(0,1)[1],"1",9)),{at:a,base:o.join(""),plot(c,l=Vt){const u=[[]];for(let h=0;h<=120;h++){const f=-i+h/120*2*i,d=c(f);if(!Number.isFinite(d)||Math.abs(d)>i*1.25){u[u.length-1].length&&u.push([]);continue}u[u.length-1].push(a(f,d))}return u.filter(h=>h.length>1).map(h=>es(h,l)).join("")}}}function ap(i,e,t,n,s,r,a,o){const l=rn-40,u=f=>20+(f-r)/(a-r)*l,h=[te(20,112,20+l,112)];for(let f=r;f<=a;f+=o)h.push(te(u(f),108,u(f),116),Yt(u(f),127,String(f),10));return h.push(ns(u(e),40,u(n)-u(e),40,Vt),te(u(t),40,u(t),80,mn),te(u(i),60,u(e),60,Vt),te(u(n),60,u(s),60,Vt),te(u(i),48,u(i),72,Vt),te(u(s),48,u(s),72,Vt)),Ht(...h)}function op(i){const e=[te(30,qe-14,rn-20,qe-14),te(30,qe-14,30,10)];for(const[t,n]of i)e.push(Oi(30+t*(rn-60),qe-14-n*(qe-34),Vt,3.4));return Ht(...e)}function vu(i,e,t,n=""){return Ht(ns(8,8,rn-16,qe-16),$i(96,70,48,mn),$i(144,70,48,Jn),Yt(70,70,i,16),Yt(120,70,e,16),Yt(170,70,t,16),Yt(52,22,"A",13,mn),Yt(188,22,"B",13,Jn),n?Yt(218,124,n,14):"")}function gf(i,e,t){const[n,s,r,a,o]=[58,52,96,62,30];return Ht(ns(n,s,r,a),es([[n,s],[n+o,s-o],[n+r+o,s-o],[n+r,s]]),es([[n+r+o,s-o],[n+r+o,s+a-o],[n+r,s+a]]),Yt(n+r/2,s+a+13,i,14,Vt),Yt(n+r+o+16,s+a/2-o/2+6,e,14,Vt),Yt(n-16,s+a/2,t,14,Vt))}function cp(i){const e=[];let t=i;for(let n=2;n*n<=t;n++)for(;t%n===0;)e.push(n),t/=n;return t>1&&e.push(t),e}function Si(i,e){let t=Math.abs(i),n=Math.abs(e);for(;n;)[t,n]=[n,t%n];return t}function xf(i){for(let e=2;e*e<=i;e++)if(i%(e*e)===0)return!1;return!0}const lp=[2,3,5,7,11,13,17,19,23,29,31,37];function up(i,e,t,n){const s=lp.filter(r=>r<=n);for(;;){let r=1;for(;r<e;)r*=i.pick(s);if(r<=t)return r}}const $=(i,e,t,n)=>({id:i,lo:e,hi:t,make:n});function C(i,e,t,n,s,r,a={}){const o=d=>typeof d=="number"&&d<0?`−${-d}`:String(d),c=o(s),l=[...new Set(r.map(o))].filter(d=>d!==c&&d!=="NaN"&&d!=="Infinity");if(l.length<3){const d=c.startsWith("−")||r.some(g=>typeof g=="number"?g<0:g.startsWith("−"));for(const g of hp(c,d)){if(l.length>=3)break;g!==c&&!l.includes(g)&&l.push(g)}}if(l.length<3)throw new Error(`not enough distractors for ${e}: ${n} -> ${c}`);const u=d=>`${a.pre??""}${d}${a.unit??""}`,h=i.shuffle(l).slice(0,3),f=i.shuffle([c,...h]).map(u);return{kind:"choice",code:e,prompt:t,body:{text:n,...a.fig?{fig:a.fig}:{},...a.solid?{solid:a.solid}:{}},solution:a.sol??(/[぀-ヿ一-鿿]/.test(n)?`答え ${u(c)}`:`${n} = ${u(c)}`),choices:f,answer:f.indexOf(u(c))}}function hp(i,e){const t=o=>Number(o.replace("−","-")),n=o=>o<0?`−${-o}`:String(o),s=[],r=[1,-1,2,-2,3,-3,4,-4,5];let a;if(/^−?\d+$/.test(i))for(const o of r)(e||t(i)+o>=0)&&s.push(n(t(i)+o));else if(a=i.match(/^(−?\d+)\/(\d+)$/)){const[o,c]=[t(a[1]),Number(a[2])];for(const l of r)(e||o+l>0)&&o+l!==0&&Si(o+l,c)===1&&s.push(`${n(o+l)}/${c}`)}else if(a=i.match(/^(−?)(\d*)([√π].*)$/)){const o=(a[1]?-1:1)*(a[2]?Number(a[2]):1);for(const c of r){const l=o+c;l===0||!e&&l<0||s.push(`${l<0?"−":""}${Math.abs(l)===1?"":Math.abs(l)}${a[3]}`)}}else if(a=i.match(/^\((−?\d+), (−?\d+)\)$/)){const[o,c]=[t(a[1]),t(a[2])];for(const[l,u]of[[1,0],[0,1],[-1,0],[0,-1],[1,1],[-1,-1]])s.push(`(${n(o+l)}, ${n(c+u)})`)}return s}const fp="○",dp="×";function bc(i,e,t,n,s,r){return{kind:"choice",code:i,prompt:e,body:r?{text:t,fig:r}:{text:t},solution:s,choices:[fp,dp],answer:n?0:1}}function Gn(i,e,t,n,s,r,a,o){if(n===s)throw new Error(`identical choices for ${i}: ${n}`);return{kind:"choice",code:i,prompt:e,body:o?{text:t,fig:o}:{text:t},solution:a,choices:[n,s],answer:r?0:1}}function dt(i,e){const t=(i/10**e).toFixed(e);return t.includes(".")?t.replace(/\.?0+$/,""):t}function at(i,e){e<0&&([i,e]=[-i,-e]);const t=Si(i,e)||1,[n,s]=[i/t,e/t];return s===1?n<0?`−${-n}`:String(n):n<0?`−${-n}/${s}`:`${n}/${s}`}const b=i=>i<0?`−${-i}`:String(i),Ie=i=>i<0?` − ${-i}`:` + ${i}`,pe=i=>i===1?"":i===-1?"−":b(i);function zt(i,e=1){let t=e,n=i;for(let s=2;s*s<=n;s++)for(;n%(s*s)===0;)t*=s,n/=s*s;return n===1?b(t):`${pe(t)}√${n}`}function ht(i,e){let t=0;for(;t===0;)t=i.int(-e,e);return t}function ut(i,e=1){const t=Si(i,e)||1,[n,s]=[i/t,e/t],r=`${pe(n)}π`;return s===1?r:`${r}/${s}`}const rr=(i,e,t,n,s)=>({shape:"box",size:[i,e,t],at:n,tone:s}),Tl=(i,e,t,n)=>({shape:"lathe",profile:[[0,0],[i,0],[i,e],[0,e]],at:t,tone:n}),Gr=(i,e,t,n)=>({shape:"lathe",profile:[[0,0],[i,0],[0,e]],at:t,tone:n});function _f(i,e,t){const n=[];for(let s=0;s<=24;s++){const r=-Math.PI/2+s/24*Math.PI;n.push([i*Math.cos(r),i+i*Math.sin(r)])}return n[0]=[0,0],n[24]=[0,2*i],{shape:"lathe",profile:n,at:e,tone:t}}function wl(i,e,t=0){return Array.from({length:i},(n,s)=>{const r=t+s/i*Math.PI*2;return[e*Math.cos(r),e*Math.sin(r)]})}function pp(i){const e=[1/0,1/0,1/0],t=[-1/0,-1/0,-1/0],n=s=>s.forEach((r,a)=>(e[a]=Math.min(e[a],r),t[a]=Math.max(t[a],r)));for(const s of i.parts){const[r,a,o]=s.at??[0,0,0];if(s.shape==="box")n([r,a,o]),n([r+s.size[0],a+s.size[1],o+s.size[2]]);else if(s.shape==="lathe")for(const[c,l]of s.profile)n([r-c,a+l,o-c]),n([r+c,a+l,o+c]);else if(s.shape==="prism"&&s.lying)for(const[c,l]of s.base)n([r+c,a+l,o]),n([r+c,a+l,o+s.h]);else for(const[c,l]of s.base)n([r+c,a,o+l]),n([r+c,a+s.h,o+l])}return{min:e,max:t}}const vf=[];for(const i of[0,1])for(const e of[0,1])vf.push([[0,i,e],[1,i,e]],[[i,0,e],[i,1,e]],[[i,e,0],[i,e,1]]);const Ki=(i,e)=>[i[0]-e[0],i[1]-e[1],i[2]-e[2]],Su=(i,e)=>[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]],as=(i,e)=>i[0]*e[0]+i[1]*e[1]+i[2]*e[2],mp=(i,e)=>Math.hypot(...Ki(i,e));function gp(i,e,t){const n=Su(Ki(e,i),Ki(t,i)),s=as(n,i),r=[],a=u=>{r.some(h=>mp(u,h)<1e-9)||r.push(u.map(h=>Math.round(h*1e9)/1e9))};for(const[u,h]of vf){const f=as(n,u)-s,d=as(n,h)-s;if(Math.abs(f)<1e-12&&a(u),Math.abs(d)<1e-12&&a(h),f*d<0){const g=f/(f-d);a([u[0]+(h[0]-u[0])*g,u[1]+(h[1]-u[1])*g,u[2]+(h[2]-u[2])*g])}}const o=[0,1,2].map(u=>r.reduce((h,f)=>h+f[u],0)/r.length),c=Ki(r[0],o),l=Su(n,c);return r.sort((u,h)=>Math.atan2(as(Ki(u,o),l),as(Ki(u,o),c))-Math.atan2(as(Ki(h,o),l),as(Ki(h,o),c)))}const Ne=(i,e,t="yellow")=>({at:i,text:e,tone:t});function io(i,e,t,n,s,r){const a=[];return n&&a.push(Ne([i/2,0,t],n)),r&&a.push(Ne([i,0,t/2],r)),s&&a.push(Ne([0,e/2,t],s)),{parts:[rr(i,e,t)],labels:a}}function Ac(i,e,t,n,s){const r=i==="cylinder"?Tl(e,t):Gr(e,t),a=[{from:[0,0,0],to:[e,0,0],tone:"yellow"}],o=-.12*Math.max(e,t);return i==="cone"&&a.push({from:[0,0,0],to:[0,t,0],tone:"yellow",dashed:!0}),{parts:[r],segs:a,labels:[Ne([e/2,o,0],n),Ne(i==="cone"?[-.6,t/2,0]:[e,t/2,0],s)]}}function Mu(i,e){return{parts:[_f(i)],segs:[{from:[0,i,0],to:[i,i,0],tone:"yellow"}],labels:[Ne([i/2,i,0],e)]}}const Fn=(i,e)=>{const t=Si(i,e);return`${i/t}:${e/t}`},xp=$("BLOCKS",2,7,(i,e)=>{const[t,n,s]=e===0?[2,2,2]:e===1?[3,2,3]:[3,3,3],r=[];let a=0;for(let o=0;o<t;o++)for(let c=0;c<n;c++){const l=o===0&&c===0?i.int(1,s):i.int(e===2?0:1,s);for(let u=0;u<l;u++)r.push(rr(1,1,1,[o,u,c],"blue"));a+=l}return C(i,"BLOCKS","体積は何cm³?","1辺1cmの立方体を積んだ形(回して見よう)",a,[a-1,a+1,a-2,a+2,a+3],{unit:"cm³",solid:{parts:r},sol:`立方体が ${a}個 → ${a}cm³`})}),_p=$("LSHAPE",5,10,i=>{const e=i.int(5,9),t=i.int(4,7),n=i.int(2,e-2),s=i.int(1,t-2),r=i.int(2,5),a=e*t-n*(t-s),o=a*r,c=[[0,0],[e,0],[e,s],[e-n,s],[e-n,t],[0,t]];return C(i,"LSHAPE","体積は?","",o,[e*t*r,e*t*r-n*s*r,(e*t+n*(t-s))*r,a,o+r],{unit:"cm³",solid:{parts:[{shape:"prism",base:c,h:r,lying:!0}],labels:[Ne([e/2,-.45,r],`${e}cm`),Ne([-.6,t/2,r],`${t}cm`),Ne([e-n/2,s+.45,r],`${n}cm`),Ne([e+.6,s/2,r],`${s}cm`),Ne([-.5,t+.35,r/2],`${r}cm`)]},sol:`(${e} × ${t} − ${n} × ${t-s}) × ${r} = ${o}cm³`})}),dr={3:"三角柱",4:"四角柱",5:"五角柱",6:"六角柱"},vp=$("SOLIDNAME",2,7,(i,e)=>{const t=i.pick([3,4,5,6]),n={parts:[{shape:"prism",base:wl(t,2.2,Math.PI/2),h:3.6,tone:"green"}]};if(e===0)return i.chance(.25)?C(i,"SOLIDNAME","この立体の名前は?","","円柱",["三角柱","四角柱","球","六角柱"],{solid:{parts:[Tl(2,3.6,void 0,"green")]},sol:"円柱"}):C(i,"SOLIDNAME","この立体の名前は?","",dr[t],[...Object.values(dr),"円柱"],{solid:n,sol:dr[t]});const[s,r]=i.pick([["面",t+2],["辺",t*3],["頂点",t*2]]);return C(i,"SOLIDNAME",`${s}の数は?`,dr[t],r,[t+2,t*3,t*2,t,t+1,t*4],{solid:n,sol:`${dr[t]}の${s}は ${r}`})}),Sp=[xp,_p,vp],yu=[{name:"長方形",answer:"円柱",profile:(i,e)=>[[0,0],[i,0],[i,e],[0,e]]},{name:"直角三角形",answer:"円錐",profile:(i,e)=>[[0,0],[i,0],[0,e]]},{name:"半円",answer:"球",profile:i=>{const e=[];for(let t=0;t<=24;t++){const n=-Math.PI/2+t/24*Math.PI;e.push([i*Math.cos(n),i+i*Math.sin(n)])}return e[0]=[0,0],e[24]=[0,2*i],e}},{name:"台形",answer:"円柱と円錐をあわせた形",profile:(i,e)=>[[0,0],[i,0],[i,e],[0,e*1.8]]}],Mp=$("REVOLVE",3,9,(i,e)=>{if(e===0){const c=i.pick(yu),l=c.profile(2,3),u=Math.max(...l.map(h=>h[1]));return C(i,"REVOLVE","1回転させてできる立体は?",`${c.name}を 軸のまわりに回す`,c.answer,yu.map(h=>h.answer).concat(["三角柱","四角錐"]),{solid:{parts:[{shape:"lathe",profile:l,tone:"pink"}],segs:[{from:[0,-.6,0],to:[0,u+.6,0],dashed:!0,tone:"white"}],revolve:{axis:"y"}},sol:c.answer})}const t=i.int(2,5),n=i.pick([3,6,9]),s=[{from:[0,-.6,0],to:[0,n*(e===2?1.8:1)+.6,0],dashed:!0,tone:"white"}];if(e===1){const c=i.chance(.5),l=c?[[0,0],[t,0],[t,n],[0,n]]:[[0,0],[t,0],[0,n]],u=c?ut(t*t*n):ut(t*t*n,3);return C(i,"REVOLVE","できる立体の体積は?",`${c?"長方形":"直角三角形"}を 軸のまわりに1回転`,u,[ut(t*t*n),ut(t*t*n,3),ut(t*n),ut(2*t*n),ut(t*t*n,2)],{unit:" cm³",solid:{parts:[{shape:"lathe",profile:l,tone:"pink"}],segs:s,labels:[Ne([t/2,0,0],`${t}cm`),Ne(c?[t,n/2,0]:[-.8,n/2,0],`${n}cm`)],revolve:{axis:"y"}},sol:c?`π × ${t}² × ${n} = ${u} cm³`:`1/3 × π × ${t}² × ${n} = ${u} cm³`})}const r=i.pick([3,6]),a=[[0,0],[t,0],[t,n],[0,n+r]],o=ut(3*t*t*n+t*t*r,3);return C(i,"REVOLVE","できる立体の体積は?","図形を 軸のまわりに1回転",o,[ut(t*t*(n+r)),ut(t*t*n+t*t*r),ut(t*t*(n+r),3),ut(3*t*t*n+t*t*r*2,3)],{unit:" cm³",solid:{parts:[{shape:"lathe",profile:a,tone:"pink"}],segs:[{from:[0,-.6,0],to:[0,n+r+.6,0],dashed:!0,tone:"white"}],labels:[Ne([t/2,0,0],`${t}cm`),Ne([t,n/2,0],`${n}cm`),Ne([-.8,n+r/2,0],`${r}cm`)],revolve:{axis:"y"}},sol:`π × ${t}² × ${n} + 1/3 × π × ${t}² × ${r} = ${o} cm³`})}),yp=[{answer:"正方形",pts:[[0,.5,0],[1,.5,0],[1,.5,1]],wrong:["正三角形","二等辺三角形","五角形","正六角形"]},{answer:"長方形",pts:[[0,1,0],[1,1,0],[0,0,1]],wrong:["正三角形","二等辺三角形","五角形","正六角形","ひし形"]},{answer:"正三角形",pts:[[1,0,0],[0,1,0],[0,0,1]],wrong:["正方形","長方形","五角形","正六角形","ひし形"]},{answer:"二等辺三角形",pts:[[.5,0,0],[0,.5,0],[0,0,1]],wrong:["正三角形","正方形","五角形","正六角形"]},{answer:"ひし形",pts:[[0,0,0],[1,0,.5],[1,1,1]],wrong:["正方形","長方形","正三角形","五角形","正六角形"]},{answer:"台形",pts:[[.5,1,0],[0,1,.5],[1,0,0]],wrong:["正方形","正三角形","五角形","正六角形"]},{answer:"五角形",pts:[[0,0,.75],[1,.5,0],[.5,1,0]],wrong:["正方形","正三角形","正六角形","台形"]},{answer:"正六角形",pts:[[1,.5,0],[0,1,.5],[.5,0,1]],wrong:["正方形","正三角形","五角形","ひし形"]}];function Ep(i){const e=i.shuffle([0,1,2]),t=[i.chance(.5),i.chance(.5),i.chance(.5)];return n=>e.map((s,r)=>t[r]?1-n[s]:n[s])}const Ci=4,Eu=i=>[i[0]*Ci,i[1]*Ci,i[2]*Ci],bp=$("CUT",5,10,(i,e)=>{const t=i.pick(yp),n=Ep(i),s=t.pts.map(n),r=gp(s[0],s[1],s[2]).map(Eu),a=s.map(Eu),o=e<2?{parts:[rr(Ci,Ci,Ci)],cut:r,dots:a}:{parts:[rr(Ci,Ci,Ci)],dots:a};return C(i,"CUT","切り口の形は?",e<2?"立方体を平面で切った":"立方体を 3つの点を通る平面で切ると?",t.answer,t.wrong,{solid:o,sol:t.answer})}),Ap=$("PROJECTION",2,7,i=>{const e=[["円柱",{parts:[Tl(2,3.6,void 0,"green")]},"円","長方形"],["円錐",{parts:[Gr(2,3.6,void 0,"green")]},"円","三角形"],["正四角錐",{parts:[{shape:"pyramid",base:[[-2,-2],[2,-2],[2,2],[-2,2]],h:3.6,tone:"green"}]},"正方形","三角形"],["三角柱",{parts:[{shape:"prism",base:wl(3,2.2,Math.PI/2),h:3.6,tone:"green"}]},"三角形","長方形"],["立方体",{parts:[rr(3.4,3.4,3.4,void 0,"green")]},"正方形","正方形"],["球",{parts:[_f(2,void 0,"green")]},"円","円"]],[t,n,s,r]=i.pick(e),a=i.chance(.5),o=a?s:r;return C(i,"PROJECTION",a?"真上から見た形は?":"正面から見た形は?",t,o,["円","三角形","正方形","長方形","台形"],{solid:n,sol:`${t}を${a?"真上":"正面"}から見ると${o}`})}),Tr=4.4,wr=2.6,Rr=3,Dr={A:[0,wr,0],B:[Tr,wr,0],C:[Tr,wr,Rr],D:[0,wr,Rr],E:[0,0,0],F:[Tr,0,0],G:[Tr,0,Rr],H:[0,0,Rr]},ia=["AB","BC","CD","DA","EF","FG","GH","HE","AE","BF","CG","DH"];function Co(i,e){if([...i].some(n=>e.includes(n)))return"交わる";const t=n=>{const[s,r]=[Dr[n[0]],Dr[n[1]]];return[0,1,2].map(a=>Math.sign(Math.abs(r[a]-s[a])))};return t(i).join()===t(e).join()?"平行":"ねじれ"}const Tp=$("SKEW",3,9,(i,e)=>{const t=i.pick(ia),n=Object.entries(Dr).map(([h,f])=>Ne([f[0]+(f[0]?.35:-.35),f[1]+(f[1]?.3:-.3),f[2]+(f[2]?.35:-.35)],h,"white")),s=(h,f)=>({from:Dr[h[0]],to:Dr[h[1]],tone:f}),r=h=>({parts:[rr(Tr,wr,Rr)],labels:n,segs:[s(t,"pink"),...h]}),a={交わる:"垂直に交わる",平行:"平行",ねじれ:"ねじれの位置"};if(e===0){const h=i.pick(ia.filter(d=>d!==t)),f=a[Co(t,h)];return C(i,"SKEW",`辺${t}と辺${h}の位置関係は?`,"",f,["平行","垂直に交わる","ねじれの位置","垂直でなく交わる"],{solid:r([s(h,"yellow")]),sol:`辺${t}と辺${h}は ${f}`})}const o=i.pick(["ねじれ","平行","交わる"]),c=i.pick(ia.filter(h=>h!==t&&Co(t,h)===o)),l=ia.filter(h=>h!==t&&Co(t,h)!==o).map(h=>`辺${h}`);return C(i,"SKEW",`辺${t}と${{ねじれ:"ねじれの位置にある辺は?",平行:"平行な辺は?",交わる:"垂直に交わる辺は?"}[o]}`,"",`辺${c}`,l,{solid:r([]),sol:`辺${c}`})}),wp=$("PYRAMID",4,9,i=>{const e=i.pick([3,6,2,4]),t=e%3===0?i.int(2,8):i.pick([3,6,9]),n=e*e*t/3,s=e/2;return C(i,"PYRAMID","正四角錐の体積は?","",n,[e*e*t,e*e*t/2,e*t,(e*e+t)*2,n*2],{unit:"cm³",solid:{parts:[{shape:"pyramid",base:[[-s,-s],[s,-s],[s,s],[-s,s]],h:t,tone:"green"}],segs:[{from:[0,0,0],to:[0,t,0],dashed:!0,tone:"yellow"}],labels:[Ne([0,0,s],`${e}cm`),Ne([.2,t/2,0],`${t}cm`)]},sol:`1/3 × ${e} × ${e} × ${t} = ${n}cm³`})}),Rp=[Mp,bp,Ap,Tp,wp],Cp=$("SPACEDIAG",4,10,(i,e)=>{if(e<2){const[o,c,l]=e===0?(()=>{const f=i.int(2,6);return[f,f,f]})():i.pick([[1,2,2],[2,3,6],[1,4,8],[2,6,9],[3,4,12],[4,4,7],[2,4,4],[6,6,7],[2,3,4],[1,2,3]]),u=zt(o*o+c*c+l*l),h=e===0?io(o,o,o,`${o}cm`,"",""):io(o,l,c,`${o}cm`,`${l}cm`,`${c}cm`);return h.segs=[{from:[0,0,c],to:[o,l,0],tone:"pink"}],C(i,"SPACEDIAG",e===0?"立方体の対角線の長さは?":"直方体の対角線の長さは?","",u,[zt(o*o+c*c),zt(o*o+l*l),String(o+c+l),zt(2*(o*o+c*c+l*l)),zt(o*o+c*c+l*l+1)],{unit:"cm",solid:h,sol:`√(${o}² + ${c}² + ${l}²) = ${u}cm`})}const[t,n]=i.pick([[3,5],[5,13],[6,10],[8,17],[2,4],[4,6],[1,3]]),s=n*n-t*t,r=zt(s),a=Math.sqrt(s);return C(i,"SPACEDIAG","円錐の高さは?","",r,[zt(n*n+t*t),String(n-t),zt(s+1),zt(s-1),String(n+t)],{unit:"cm",solid:{parts:[Gr(t,a,void 0,"green")],segs:[{from:[0,0,0],to:[0,a,0],dashed:!0,tone:"yellow"},{from:[0,0,0],to:[t,0,0],tone:"yellow"},{from:[t,0,0],to:[0,a,0],tone:"pink"}],labels:[Ne([t/2,-.12*n,0],`${t}cm`),Ne([t/2+.4,a/2,0],`${n}cm`,"pink")]},sol:`√(${n}² − ${t}²) = ${r}cm`})}),Pp=$("SIMSOLID",5,10,(i,e)=>{const[t,n]=i.pick([[1,2],[2,3],[1,3],[3,4],[2,5]]),s=1.2,r={parts:[Gr(t*s*.6,t*s,[-n*s*.6-.6,0,0],"green"),Gr(n*s*.6,n*s,[t*s*.6+.6,0,0],"green")],labels:[Ne([-n*s*.6-.6,t*s+.5,0],`${t*2}cm`),Ne([t*s*.6+.6,n*s+.5,0],`${n*2}cm`)]},a=`高さ ${t*2}cm と ${n*2}cm の相似な円錐`;if(e===0)return C(i,"SIMSOLID","体積の比は?",a,Fn(t**3,n**3),[Fn(t,n),Fn(t*t,n*n),Fn(t**3+1,n**3),Fn(2*t,3*n)],{solid:r,sol:`${t}³:${n}³ = ${Fn(t**3,n**3)}`});if(e===1)return C(i,"SIMSOLID","表面積の比は?",a,Fn(t*t,n*n),[Fn(t,n),Fn(t**3,n**3),Fn(t*t+1,n*n),Fn(2*t,n)],{solid:r,sol:`${t}²:${n}² = ${Fn(t*t,n*n)}`});const o=t**3*i.int(2,6),c=o/t**3*n**3;return C(i,"SIMSOLID","大きい円錐の体積は?",`小さい円錐の体積が ${o}cm³`,c,[o*n/t,o*n*n/(t*t),c+o,c*2],{unit:"cm³",solid:r,sol:`${o} × (${n}/${t})³ = ${c}cm³`})}),Lp=[Cp,Pp];function bu(i,e,t){const n=[[0,e]];for(let s=0;s<=32;s++){const r=e+(t-e)*s/32;n.push([Math.max(0,i(r)),r])}return n.push([0,t]),n}const Ip=$("REVOLVEX",3,10,(i,e)=>{const t=[],n=i.int(1,3),s=i.int(1,3);if(t.push({text:`y = ${s} (0 ≦ x ≦ ${n+1})`,f:()=>s,x0:0,x1:n+1,v:ut(s*s*(n+1)),wrong:[ut(s*(n+1)),ut(s*s*(n+1),3),ut(2*s*s*(n+1))],sol:`π∫${s}² dx = ${ut(s*s*(n+1))}`}),t.push({text:`y = x (0 ≦ x ≦ ${n+1})`,f:o=>o,x0:0,x1:n+1,v:ut((n+1)**3,3),wrong:[ut((n+1)**3),ut((n+1)**2,2),ut((n+1)**3,2)],sol:`π∫x² dx = ${ut((n+1)**3,3)}`}),e>=1){const o=i.pick([2,4,6]);t.push({text:`y = √x (0 ≦ x ≦ ${o})`,f:Math.sqrt,x0:0,x1:o,v:ut(o*o,2),wrong:[ut(o*o),ut(o*o,3),ut(o**3,3)],sol:`π∫x dx = ${ut(o*o,2)}`});const c=i.int(1,3);t.push({text:`y = √(${c*c} − x²) (${b(-c)} ≦ x ≦ ${c})`,f:l=>Math.sqrt(Math.max(0,c*c-l*l)),x0:-c,x1:c,v:ut(4*c**3,3),wrong:[ut(c**3),ut(2*c**3,3),ut(4*c**3),ut(8*c**3,3)],sol:`球になる: 4/3 π × ${c}³ = ${ut(4*c**3,3)}`})}if(e===2){const o=i.pick([1,2]);t.push({text:`y = x² (0 ≦ x ≦ ${o})`,f:c=>c*c,x0:0,x1:o,v:ut(o**5,5),wrong:[ut(o**3,3),ut(o**4,4),ut(o**5,3)],sol:`π∫x⁴ dx = ${ut(o**5,5)}`})}const r=i.pick(t),a=Math.max(...bu(r.f,r.x0,r.x1).map(o=>o[0]));return C(i,"REVOLVEX","x軸のまわりに1回転した体積は?",r.text,r.v,r.wrong,{solid:{parts:[{shape:"lathe",profile:bu(r.f,r.x0,r.x1),tone:"pink"}],segs:[{from:[0,r.x0-.8,0],to:[0,r.x1+.8,0],dashed:!0,tone:"white"}],labels:[Ne([0,r.x1+1.1,0],"x","white"),Ne([a+.3,(r.x0+r.x1)/2,0],r.text.split(" (")[0],"yellow")],revolve:{axis:"x"}},sol:r.sol})}),Dp=[Ip],k=(i,e,t,n,s,r,a)=>C(i,e,t,n,s,r.filter(o=>typeof o!="number"||o>=0),a),Nr=i=>i.reduce((e,t)=>e+t,0),le=(i,e,t,n)=>i===0?e:i===1?t:n,Vn={circle:Ht($i(120,70,52,Vt)),triangle:Ht(En([[120,16],[58,122],[182,122]],Vt)),square:Ht(ns(70,20,100,100,Vt)),rectangle:Ht(ns(42,34,156,72,Vt)),star:Ht(En([0,1,2,3,4,5,6,7,8,9].map(i=>Qn(120,72,i%2?24:58,90+i*36)),Vt)),rightTriangle:Ht(En([[64,20],[64,120],[184,120]],Vt),xo(64,120,1,-1)),parallelogram:Ht(En([[78,30],[204,30],[162,112],[36,112]],Vt)),trapezoid:Ht(En([[88,30],[158,30],[204,112],[36,112]],Vt)),rhombus:Ht(En([[120,12],[196,70],[120,128],[44,70]],Vt)),pentagon:Ht(En([0,1,2,3,4].map(i=>Qn(120,74,58,90+i*72)),Vt)),hexagon:Ht(En([0,1,2,3,4,5].map(i=>Qn(120,70,58,i*60)),Vt)),isosceles:Ht(En([[120,12],[78,124],[162,124]],Vt)),equilateral:Ht(En([[120,16],[58,123],[182,123]],Vt))},Np=(i,e)=>Ht(ns(50,30,140,80,Vt),Yt(120,122,i,15),Yt(30,70,e,15)),Up=(i,e)=>Ht(En([[150,22],[40,116],[200,116]],Vt),te(150,22,150,116,void 0,!0),xo(150,116,-1,-1),Yt(120,130,i,14),Yt(166,72,e,14)),$p=(i,e)=>Ht(En([[96,18],[30,118],[210,118]],Vt),Yt(56,106,`${i}°`,13),Yt(178,107,`${e}°`,13),Yt(98,42,"?",16,mn)),Op=i=>{const[e,t]=Qn(70,112,110,i);return Ht(te(70,112,200,112,Vt),te(70,112,Math.max(12,Math.min(228,e)),Math.max(8,t),Vt),tp(70,112,26,0,i,mn))},so=(i,e)=>Ht($i(120,70,56,Vt),Oi(120,70),te(e?64:120,70,176,70,mn),Yt(e?120:148,58,i,14)),Au=[["あか","#ff6b6b"],["あお","#6bb6ff"],["きいろ","#ffe066"],["みどり","#7be08a"]],Fp=[$("ADD",1,5,(i,e)=>{const t=le(e,i.int(1,5),i.int(3,9),i.int(10,14)),n=le(e,i.int(1,10-t),i.int(11-t>2?11-t:2,9),i.int(2,19-t>2?19-t:2));return k(i,"ADD","たしざん",`${t} + ${n}`,t+n,[t+n+1,t+n-1,t+n+2,t+n-2,t+n+10])}),$("SUB",1,6,(i,e)=>{const t=le(e,i.int(1,6),i.int(3,9),i.int(2,12)),n=le(e,i.int(1,9-t>1?9-t:1),i.int(10-t>2?10-t:2,9),i.int(2,7));return k(i,"SUB","ひきざん",`${t+n} − ${n}`,t,[t+1,t-1,t+2,t-2,t+10])}),$("COUNT",1,4,(i,e)=>{const t=le(e,i.int(3,9),i.int(6,15),i.int(11,20));return k(i,"COUNT","いくつ ある?","",t,[t+1,t-1,t+2,t-2],{fig:np(t,5),sol:`${t}こ`,unit:"こ"})}),$("MAKE10",1,5,(i,e)=>{const t=e===2?i.int(11,20):10,n=i.int(1,t-1);return k(i,"MAKE10",`あと いくつで ${t}?`,`${n} + ▢ = ${t}`,t-n,[t-n+1,t-n-1,t-n+2,n],{sol:`${n} + ${t-n} = ${t}`})}),$("BIGGER",1,4,(i,e)=>{const t=i.int(1,le(e,10,20,100));let n=t;for(;n===t;)n=e===2&&i.chance(.6)?Math.max(1,t+i.pick([-10,-1,1,10])):i.int(1,le(e,10,20,100));return Gn("BIGGER","おおきい ほうは?","どっち?",String(t),String(n),t>n,`${Math.max(t,n)} の ほうが おおきい`)}),$("CLOCK",2,8,(i,e)=>{const t=i.int(1,12),n=le(e,0,30,i.int(1,11)*5),s=(o,c)=>c===0?`${o}じ`:c===30?`${o}じはん`:`${o}じ${c}ふん`,r=t%12+1,a=[s(r,n),s(t===1?12:t-1,n),s(t,n===0?30:0),s(r,n===0?30:0),s(t,(n+15)%60),s(Math.max(1,Math.round(n/5)||12),t*5===60?0:t*5)];return k(i,"CLOCK","なんじ?","",s(t,n),a,{fig:pf(t,n),sol:s(t,n)})}),$("SHAPE",1,5,i=>{const e={circle:"まる",triangle:"さんかく",square:"しかく",star:"ほし"},t=i.pick(Object.keys(e));return k(i,"SHAPE","かたちの なまえは?","",e[t],Object.values(e),{fig:Vn[t],sol:e[t]})}),$("COLOR",2,7,i=>{const e=i.shuffle(Au),t=i.chance(.5),n=i.int(1,4),s=Ht(...e.map(([,a],o)=>$i(42+o*52,70,20,a,a))),r=e[t?n-1:4-n][0];return k(i,"COLOR","なにいろ?",`${t?"ひだり":"みぎ"}から ${n}ばんめ`,r,Au.map(([a])=>a),{fig:s,sol:`${t?"ひだり":"みぎ"}から ${n}ばんめは ${r}`})}),$("SEQ",3,9,(i,e)=>{const t=le(e,i.pick([1,2]),i.pick([2,5,10]),i.pick([-1,-2,-5,10])),n=t<0?i.int(20,40):i.int(1,12),s=[0,1,2,3].map(o=>n+o*t),r=i.int(1,3),a=s.map((o,c)=>c===r?"▢":String(o)).join(", ");return k(i,"SEQ","▢に はいる かずは?",a,s[r],[s[r]+1,s[r]-1,s[r]+t,s[r]-t],{sol:s.join(", ")})}),$("THREE",5,10,(i,e)=>{const t=i.int(4,9),n=i.int(1,le(e,5,9,9)),s=i.int(1,Math.min(t+n-1,9)),r=e>0&&i.chance(.5)&&t-n>0&&t-n-1>=1,[a,o]=r?[`${t+n} − ${n} − ${Math.min(s,t-1)}`,t-Math.min(s,t-1)]:[`${t} + ${n} − ${s}`,t+n-s];return k(i,"THREE","3つの かずの けいさん",a,o,[o+1,o-1,o+2,o-2])}),$("TENS",4,9,(i,e)=>{const t=i.int(1,9),n=i.int(0,9);return e<2?k(i,"TENS","いくつ?",`10が ${t}こ と 1が ${n}こ`,t*10+n,[n*10+t,t+n,t*10+n+10,t*10+n+1,t*10],{sol:`${t*10+n}`}):k(i,"TENS","▢に はいる かずは?",`${t*10+n}は 10が ▢こ と 1が ${n}こ`,t,[n,t+1,t-1,t+n,t*10],{sol:`10が ${t}こ`})}),$("ADD2D",6,10,(i,e)=>{if(e===0){const[r,a]=[i.int(1,5)*10,i.int(1,4)*10];return k(i,"ADD2D","たしざん",`${r} + ${a}`,r+a,[r+a+10,r+a-10,r/10+a/10,r+a+1])}const t=i.int(2,8)*10+i.int(1,5),n=i.int(1,9-t%10);return e===2&&i.chance(.5)?k(i,"ADD2D","ひきざん",`${t+n} − ${n}`,t,[t+1,t-1,t+10,t-10]):k(i,"ADD2D","たしざん",`${t} + ${n}`,t+n,[t+n+1,t+n-1,t+n+10,t+n*10])}),$("STORY",5,10,(i,e)=>{const t=i.int(4,le(e,9,12,15)),n=i.int(2,Math.min(t-1,8)),s=i.pick(["りんご","あめ","えんぴつ","みかん","おりがみ"]),r=i.int(0,2);return r===0?k(i,"STORY","ぜんぶで いくつ?",`${s}が ${t}こ。${n}こ もらうと?`,t+n,[t-n,t+n+1,t+n-1,t+n+2],{unit:"こ",sol:`${t} + ${n} = ${t+n}こ`}):r===1?k(i,"STORY","のこりは いくつ?",`${s}が ${t}こ。${n}こ つかうと?`,t-n,[t+n,t-n+1,t-n-1,t-n+2],{unit:"こ",sol:`${t} − ${n} = ${t-n}こ`}):k(i,"STORY","ちがいは いくつ?",`あかが ${t}こ、あおが ${n}こ`,t-n,[t+n,t-n+1,t-n-1,t],{unit:"こ",sol:`${t} − ${n} = ${t-n}こ`})})],Tu=[["triangle","三角形",3],["rectangle","四角形",4],["pentagon","五角形",5],["hexagon","六角形",6]],Bp=[$("ADD",1,6,(i,e)=>{const t=le(e,i.int(11,49),i.int(15,69),i.int(101,499)),n=le(e,i.int(10,40),i.int(15,Math.max(15,99-t)),i.int(15,99));return k(i,"ADD","たし算",`${t} + ${n}`,t+n,[t+n+10,t+n-10,t+n+1,t+n-1,t+n+100])}),$("SUB",1,7,(i,e)=>{const t=le(e,i.int(11,40),i.int(12,58),i.int(101,380)),n=le(e,i.int(10,30),i.int(13,39),i.int(15,99));return k(i,"SUB","ひき算",`${t+n} − ${n}`,t,[t+10,t-10,t+1,t-1,t+2])}),$("KUKU",1,7,(i,e)=>{const t=le(e,i.pick([2,3,5]),i.int(2,9),i.int(6,9)),n=i.int(e===2?6:2,9);return k(i,"KUKU","かけ算",`${t} × ${n}`,t*n,[t*(n+1),t*(n-1),(t+1)*n,(t-1)*n,t*n+1,t+n])}),$("KUKUFILL",4,9,(i,e)=>{const t=i.int(e===0?2:4,9),n=i.int(2,9);return k(i,"KUKUFILL","▢に 入る 数は?",`${t} × ▢ = ${t*n}`,n,[n+1,n-1,n+2,t],{sol:`${t} × ${n} = ${t*n}`})}),$("CLOCK",1,6,(i,e)=>{const t=i.int(1,12),n=e===0?i.int(1,11)*5:i.int(1,59),s=(a,o)=>`${a}時${o}分`,r=Math.max(1,Math.round(n/5)||12);return k(i,"CLOCK","何時何分?","",s(t,n),[s(t%12+1,n),s(t,(n+5)%60||5),s(t,(n+30)%60||10),s(r,t*5%60||5),s(t===1?12:t-1,n)],{fig:pf(t,n),sol:s(t,n)})}),$("TIME",5,10,(i,e)=>{if(e===0){const[n,s]=i.pick([["1時間 = ▢分",60],["1日 = ▢時間",24],["午前は ▢時間",12],["30分 + 30分 = ▢分",60]]);return k(i,"TIME","▢に 入る 数は?",n,s,[100,10,12,24,60,30],{sol:n.replace("▢",String(s))})}const t=i.int(1,5)*10;return e===1?k(i,"TIME","何分?",`1時間${t}分 = ▢分`,60+t,[100+t,60-t+60,t+10,60+t+10],{sol:`60 + ${t} = ${60+t}分`,unit:"分"}):k(i,"TIME","▢に 入る 数は?",`${60+t}分 = 1時間▢分`,t,[t+10,t-10||55,60-t||5,t+40],{sol:`${60+t} − 60 = ${t}`})}),$("LENGTH",2,8,(i,e)=>{const t=i.int(1,9),n=i.int(1,9);if(e===0)return k(i,"LENGTH","何mm?",`${t}cm ${n}mm`,t*10+n,[t+n,t*100+n,t*10+n+10,n*10+t],{unit:"mm"});if(e===1)return k(i,"LENGTH","何cm?",`${t}m`,t*100,[t*10,t*1e3,t,t*100+100],{unit:"cm"});const s=i.int(1,9)*10;return k(i,"LENGTH","何cm?",`${t}m ${s}cm`,t*100+s,[t*10+s,t+s,t*1e3+s,t*100+s/10],{unit:"cm"})}),$("VOLUME",4,9,(i,e)=>{const t=i.int(1,9),[n,s,r]=le(e,[`${t}L`,t*10,"dL"],[`${t}dL`,t*100,"mL"],[`${t}L`,t*1e3,"mL"]);return k(i,"VOLUME",`何${r}?`,n,s,[t*10,t*100,t*1e3,t,t*60],{unit:r})}),$("SIDES",2,8,(i,e)=>{const[t,n,s]=i.pick(Tu);if(e===0)return k(i,"SIDES","この 形の 名前は?","",n,Tu.map(a=>a[1]),{fig:Vn[t],sol:n});const r=i.pick(["へん","ちょう点"]);return k(i,"SIDES",`${r}は いくつ?`,"",s,[s+1,s-1,s+2,s*2],{fig:Vn[t],sol:`${n}の ${r}は ${s}`})}),$("QUADNAME",4,9,i=>{const e=[["square","正方形"],["rectangle","長方形"],["rightTriangle","直角三角形"],["circle","円"]],[t,n]=i.pick(e);return k(i,"QUADNAME","この 形の 名前は?","",n,e.map(s=>s[1]),{fig:Vn[t],sol:n})}),$("FRACTION",5,10,(i,e)=>{const t=le(e,2,i.pick([3,4]),i.pick([4,6,8])),n=e===2?i.int(1,t-1):1,s=i.chance(.5)?mf(n,t):ip(n,t);return k(i,"FRACTION","色の ついた ところは?","",`${n}/${t}`,e<2?["1/2","1/3","1/4","1/5","1/6","2/3"]:[`${t-n}/${t}`,`${n}/${t+2}`,`1/${t}`,`${n+1}/${t+1}`,`${n}/${t+1}`],{fig:s,sol:`${t}こに 分けた ${n}こ分 = ${n}/${t}`})}),$("PLACE",3,9,(i,e)=>{const[t,n,s]=[i.int(1,9),i.int(0,9),i.int(0,9)],r=t*100+n*10+s;return e===0?k(i,"PLACE","いくつ?",`100が${t}こ、10が${n}こ、1が${s}こ`,r,[s*100+n*10+t,t+n+s,r+100,r+10,t*100+s*10+n],{sol:String(r)}):e===1?k(i,"PLACE","▢に 入る 数は?",`${t*100}は 10が ▢こ`,t*10,[t,t*100,t*10+10,t+10],{sol:`10が ${t*10}こ`}):k(i,"PLACE","▢に 入る 数は?","1000は 100が ▢こ",10,[100,1,1e3,5,20],{sol:"100が 10こで 1000"})}),$("BIGGER",2,7,(i,e)=>{const t=i.int(100,999);let n=t;return e>0&&(n=Number(i.shuffle(String(t).split("")).join(""))),(n===t||n<100)&&(n=i.int(100,999)===t?t+9:i.int(100,999)),n===t&&(n=t+9),Gn("BIGGER","大きい ほうは?","どっち?",String(t),String(n),t>n,`${Math.max(t,n)} の ほうが 大きい`)}),$("STORY",5,10,(i,e)=>{const t=i.int(2,9),n=i.int(2,le(e,5,9,9)),[s,r]=i.pick([["ふくろ","あめ"],["はこ","ケーキ"],["さら","いちご"],["パック","たまご"]]);if(e<2)return k(i,"STORY","ぜんぶで 何こ?",`1${s}に ${t}こ。${n}${s}分では?`,t*n,[t+n,t*n+t,t*n-t,t*(n+1)+1],{unit:"こ",sol:`${t} × ${n} = ${t*n}こ`});const a=i.int(1,9);return k(i,"STORY","ぜんぶで 何こ?",`${t}こ入りの${r}が ${n}${s}と ばらが ${a}こ`,t*n+a,[t*n,t+n+a,t*n-a,t*(n+1)],{unit:"こ",sol:`${t} × ${n} + ${a} = ${t*n+a}こ`})}),$("BOX",6,10,i=>{const[e,t]=i.pick([["面",6],["へん",12],["ちょう点",8]]);return k(i,"BOX",`はこの 形の ${e}は いくつ?`,"",t,[6,8,12,4,10],{fig:gf("","",""),sol:`${e}は ${t}`})}),$("SEQ",3,9,(i,e)=>{const t=le(e,i.pick([5,10]),i.pick([50,100,25]),i.pick([-10,-100,200])),n=t<0?i.int(5,9)*100:i.int(1,9)*Math.abs(t),s=[0,1,2,3].map(a=>n+a*t),r=i.int(1,3);return k(i,"SEQ","▢に 入る 数は?",s.map((a,o)=>o===r?"▢":String(a)).join(", "),s[r],[s[r]+t,s[r]-t,s[r]+10,s[r]+1],{sol:s.join(", ")})})],kp=[$("DIV",1,6,(i,e)=>{const t=i.int(2,9),n=i.int(2,9);if(e<2)return k(i,"DIV","わり算",`${t*n} ÷ ${t}`,n,[n+1,n-1,t,n+2]);const s=i.int(1,t-1),r=(a,o)=>`${a} あまり ${o}`;return k(i,"DIV","あまりの あるわり算",`${t*n+s} ÷ ${t}`,r(n,s),[r(n+1,s),r(n,s+1),r(n-1,s),r(n,t-s===s?s+2:t-s),r(s,n)])}),$("ADDSUB",1,5,(i,e)=>{const t=i.int(120,le(e,499,899,4999)),n=i.int(110,le(e,399,899,2999));return i.chance(.5)?k(i,"ADDSUB","たし算",`${t} + ${n}`,t+n,[t+n+10,t+n-10,t+n+100,t+n-100,t+n+1]):k(i,"ADDSUB","ひき算",`${t+n} − ${n}`,t,[t+10,t-10,t+100,t-100,t+1])}),$("MUL",2,8,(i,e)=>{const t=le(e,i.int(11,49),i.int(101,399),i.int(11,39)),n=le(e,i.int(2,9),i.int(2,9),i.int(11,29)),s=t*n;return k(i,"MUL","かけ算",`${t} × ${n}`,s,[s+10,s-10,s+n,s-n,s+t,s+100])}),$("DECIMAL",4,9,(i,e)=>{if(e===0){const o=i.int(2,29);return k(i,"DECIMAL","いくつ?",`0.1が ${o}こ`,dt(o,1),[dt(o,2),String(o),dt(o+10,1),dt(o*10,1),dt(o+1,1)])}const t=i.int(2,49),n=i.int(2,39),s=e===1||i.chance(.5),r=s?t+n:t,a=s?`${dt(t,1)} + ${dt(n,1)}`:`${dt(t+n,1)} − ${dt(n,1)}`;return k(i,"DECIMAL",s?"小数のたし算":"小数のひき算",a,dt(r,1),[r+1,r-1,r+10,r-10,r*10].filter(o=>o>0).map(o=>dt(o,1)))}),$("FRACTION",4,9,(i,e)=>{const t=i.int(4,9);if(e===0){const r=i.int(2,t-1);return k(i,"FRACTION","色のついたところは?","",`${r}/${t}`,[`${t-r}/${t}`,`${r}/${t+1}`,`${t}/${r}`,`${r+1}/${t}`,`${r-1}/${t}`],{fig:mf(r,t),sol:`${r}/${t}`})}const n=i.int(1,t-2),s=i.int(1,t-1-n);return e===1?k(i,"FRACTION","分数のたし算",`${n}/${t} + ${s}/${t}`,`${n+s}/${t}`,[`${n+s}/${t*2}`,`${n+s+1}/${t}`,`${n*s}/${t}`,`${n+s-1}/${t}`,`${t}/${n+s}`]):k(i,"FRACTION","分数のひき算",`1 − ${n}/${t}`,`${t-n}/${t}`,[`${n}/${t}`,`${t-n+1}/${t}`,`${t-n-1||t}/${t}`,`1/${t}`,`${t-n}/${t-1}`])}),$("TIME",3,8,(i,e)=>{if(e===0){const o=i.int(2,5);return k(i,"TIME","何秒?",`${o}分`,o*60,[o*100,o*10,o*60+60,o*30],{unit:"秒"})}const t=i.int(7,10),n=i.int(4,5)*10,s=i.int(2,4)*10,r=o=>`${Math.floor(o/60)}時${o%60===0?"":`${o%60}分`}`,a=t*60+n;return e===1?k(i,"TIME","何時何分?",`${r(a)}の ${s}分後`,r(a+s),[r(a+s+60),r(a+s-10),r(a+s+10),r(a-s),`${t}時${n+s}分`],{sol:r(a+s)}):k(i,"TIME","何分間?",`${r(a)}から ${r(a+s)}まで`,s,[s+10,s-10,s+60,60-s||5],{unit:"分",sol:`${s}分間`})}),$("KM",3,8,(i,e)=>{const t=i.int(1,9),n=i.int(1,9)*100;return e===0?k(i,"KM","何m?",`${t}km`,t*1e3,[t*100,t*10,t*1e4,t*1e3+100],{unit:"m"}):e===1?k(i,"KM","何m?",`${t}km ${n}m`,t*1e3+n,[t*100+n,t+n,t*1e3+n/10,t*1e4+n],{unit:"m"}):k(i,"KM","▢に入る数は?",`${t*1e3+n}m = ${t}km ▢m`,n,[n/10,n+100,t*100,n*10],{sol:`${t}km ${n}m`})}),$("WEIGHT",4,9,(i,e)=>{const t=i.int(1,9),n=i.int(1,9)*100;return e===0?k(i,"WEIGHT","何g?",`${t}kg`,t*1e3,[t*100,t*10,t*1e4,t*1e3+100],{unit:"g"}):e===1?k(i,"WEIGHT","何g?",`${t}kg ${n}g`,t*1e3+n,[t*100+n,t+n,t*1e4+n,t*1e3+n/10],{unit:"g"}):k(i,"WEIGHT","何kg?",`${t}t`,t*1e3,[t*100,t*10,t*1e4,t],{unit:"kg"})}),$("CIRCLE",3,8,(i,e)=>{const t=i.int(2,9);if(e===0)return k(i,"CIRCLE","直径は?","",t*2,[t,t*3,t+2,t*4],{fig:so(`半径${t}cm`,!1),unit:"cm",sol:`${t} × 2 = ${t*2}cm`});if(e===1)return k(i,"CIRCLE","半径は?","",t,[t*2,t*4,t+2,t-1],{fig:so(`直径${t*2}cm`,!0),unit:"cm",sol:`${t*2} ÷ 2 = ${t}cm`});const n=i.int(2,4);return k(i,"CIRCLE","はこの横の長さは?",`半径${t}cmのボールが${n}こ ぴったり`,t*2*n,[t*n,t*2+n,t*2*(n+1),t*2*n-t],{unit:"cm",sol:`直径${t*2} × ${n} = ${t*2*n}cm`})}),$("TRIANGLE",4,9,i=>{const e=[["isosceles","二等辺三角形",[5,5,3]],["equilateral","正三角形",[4,4,4]],["rightTriangle","直角三角形",[3,4,5]]],[t,n,s]=i.pick(e),r=i.int(1,2),a=t==="rightTriangle"?"直角がある三角形":`辺の長さ ${s[0]*r}cm、${s[1]*r}cm、${s[2]*r}cm`;return k(i,"TRIANGLE","この三角形の名前は?",a,n,["二等辺三角形","正三角形","直角三角形","四角形"],{fig:Vn[t],sol:n})}),$("BARCHART",2,7,(i,e)=>{const t=["りんご","みかん","ぶどう","もも"],n=i.shuffle([2,3,4,5,6,7,8,9]).slice(0,4),s=sp(n,t,10,2),r=i.int(0,3);if(e===0)return k(i,"BARCHART",`${t[r]}は何人?`,"",n[r],n,{fig:s,unit:"人",sol:`${t[r]}は ${n[r]}人`});if(e===1){const c=t[n.indexOf(Math.max(...n))];return k(i,"BARCHART","いちばん多いのは?","",c,t,{fig:s,sol:c})}const a=(r+1+i.int(0,2))%4,o=Math.abs(n[r]-n[a]);return k(i,"BARCHART",`${t[r]}と${t[a]}のちがいは?`,"",o,[o+1,o+2,n[r]+n[a],o-1],{fig:s,unit:"人",sol:`${Math.max(n[r],n[a])} − ${Math.min(n[r],n[a])} = ${o}人`})}),$("BOXEQ",5,10,(i,e)=>{const t=i.int(2,9),n=i.int(le(e,12,3,3),le(e,48,9,9));return e===0?k(i,"BOXEQ","▢に入る数は?",`▢ + ${t} = ${t+n}`,n,[t+n+t,n+1,n-1,t],{sol:`${t+n} − ${t} = ${n}`}):e===1?k(i,"BOXEQ","▢に入る数は?",`▢ × ${t} = ${t*n}`,n,[n+1,n-1,t,t*n-t],{sol:`${t*n} ÷ ${t} = ${n}`}):k(i,"BOXEQ","▢に入る数は?",`${t*n} ÷ ▢ = ${n}`,t,[t+1,t-1,n===t?n+2:n,t*n],{sol:`${t*n} ÷ ${n} = ${t}`})}),$("MAN",5,10,(i,e)=>{const[t,n]=[i.int(1,9),i.int(1,9)];if(e===0)return k(i,"MAN","いくつ?",`10000が${t}こ、1000が${n}こ`,t*1e4+n*1e3,[t*1e3+n*100,t*1e4+n*100,n*1e4+t*1e3,(t+n)*1e3],{sol:String(t*1e4+n*1e3)});if(e===1)return k(i,"MAN","▢に入る数は?",`${t*10+n}000は 1000が ▢こ`,t*10+n,[t+n,(t*10+n)*10,t*100+n,t*10+n+10],{sol:`1000が ${t*10+n}こ`});const s=i.int(12,98)*10;return i.chance(.5)?k(i,"MAN","10倍すると?",String(s),s*10,[s*100,s+10,s/10,s*10+10]):k(i,"MAN","10でわると?",String(s),s/10,[s*10,s-10,s/10+10,s/10-1])}),$("STORY",6,10,(i,e)=>{const t=i.int(3,8),n=i.int(3,8);if(e===0)return k(i,"STORY","1人分は何こ?",`${t*n}こを ${n}人で同じ数ずつ`,t,[n===t?n+2:n,t+1,t-1,t*2],{unit:"こ",sol:`${t*n} ÷ ${n} = ${t}こ`});const s=i.int(1,t-1);return e===1?k(i,"STORY","何ふくろできて何こあまる?",`${t*n+s}こを ${t}こずつ`,`${n}ふくろ あまり${s}こ`,[`${n+1}ふくろ あまり${s}こ`,`${n}ふくろ あまり${s+1}こ`,`${n-1}ふくろ あまり${s}こ`,`${s}ふくろ あまり${n}こ`],{sol:`${t*n+s} ÷ ${t} = ${n} あまり ${s}`}):k(i,"STORY","ぜんぶ入れるには箱は何こ?",`${t*n+s}こを 1箱${t}こずつ`,n+1,[n,n+2,n-1,s],{unit:"こ",sol:`${n}箱とあまり${s}こ → ${n+1}箱`})})],wu=[["square","正方形","4つの辺が等しく、4つの角が直角"],["rectangle","長方形","4つの角がすべて直角"],["parallelogram","平行四辺形","向かい合う2組の辺が平行"],["trapezoid","台形","向かい合う1組の辺が平行"],["rhombus","ひし形","4つの辺の長さがすべて等しい"]],zp=[$("OKU",1,5,(i,e)=>{if(e===0){const[s,r]=i.pick([["1億は 1000万の何倍?","10倍"],["1兆は 1000億の何倍?","10倍"],["1億は 1万の何倍?","1万倍"],["1兆は 1億の何倍?","1万倍"]]);return k(i,"OKU","大きな数",s,r,["10倍","100倍","1000倍","1万倍","1億倍"],{sol:r})}const[t,n]=[i.int(1,9),i.int(1,9)];return e===1?k(i,"OKU","読み方は?",`${t}${n}00000000`,`${t}${n}億`,[`${t}億${n}千万`,`${t}${n}0億`,`${t}${n}千万`,`${t}兆${n}億`],{sol:`${t}${n}億`}):k(i,"OKU","たすと?",`${t}億${n}000万 + ${10-n}000万`,`${t+1}億`,[`${t}億`,`${t}億1000万`,`${t+1}億1000万`,`${t+2}億`],{sol:`${t+1}億`})}),$("DIV",1,7,(i,e)=>{const t=le(e,i.int(3,9),i.int(3,9),i.int(11,24)),n=le(e,i.int(11,29),i.int(31,129),i.int(3,9));return k(i,"DIV","わり算",`${t*n} ÷ ${t}`,n,[n+1,n-1,n+10,n-10,n+2])}),$("ROUND",2,7,(i,e)=>{const t=i.int(1200,9800),n=le(e,100,1e3,100);return e<2?k(i,"ROUND",`四捨五入で${n===100?"百":"千"}の位までのがい数に`,String(t),Math.round(t/n)*n,[Math.floor(t/n)*n,Math.ceil(t/n)*n,Math.round(t/10)*10,Math.round(t/n)*n+n,Math.round(t/(n*10))*n*10]):k(i,"ROUND","上から2けたのがい数に",String(t),Math.round(t/100)*100,[Math.floor(t/100)*100,Math.ceil(t/100)*100,Math.round(t/1e3)*1e3,Math.round(t/10)*10,Math.round(t/100)*100+100])}),$("ORDER",2,7,(i,e)=>{const[t,n,s,r]=[i.int(2,9),i.int(2,9),i.int(2,9),i.int(2,9)],a=t*n+i.int(5,20),[o,c,l]=le(e,[`${t} + ${n} × ${s}`,t+n*s,(t+n)*s],[`${a} − ${t} × ${n}`,a-t*n,(a-t)*n],[`(${t} + ${n}) × ${s} − ${r}`,(t+n)*s-r,t+n*s-r]);return k(i,"ORDER","計算の順序に注意",o,c,[l,c+1,c-1,c+10,c+2].filter(u=>u>=0))}),$("DECIMAL",3,8,(i,e)=>{if(e===0){const[s,r]=[i.int(11,49),i.int(11,49)];return k(i,"DECIMAL","小数のたし算",`${dt(s,1)} + ${dt(r,1)}`,dt(s+r,1),[s+r-10,s+r+10,s+r-1,s+r+1].map(a=>dt(a,1)))}const t=i.int(2,9),n=i.int(2,9);return e===1?k(i,"DECIMAL","小数 × 整数",`${dt(t,1)} × ${n}`,dt(t*n,1),[String(t*n),dt(t*n,2),dt(t*n+1,1),dt(t+n,1),dt(t*n+10,1)]):k(i,"DECIMAL","小数 ÷ 整数",`${dt(t*n,1)} ÷ ${n}`,dt(t,1),[String(t),dt(t,2),dt(t+1,1),dt(t+10,1),dt(n,1)])}),$("MIXED",4,9,(i,e)=>{const t=i.int(3,8),n=i.int(1,3),s=i.int(1,t-1),r=(l,u)=>`${l}と${u}/${t}`;if(e===0)return k(i,"MIXED","帯分数になおすと?",`${n*t+s}/${t}`,r(n,s),[r(n+1,s),r(n,s+1<t?s+1:s-1||2),r(s,n),r(n-1||4,s)],{sol:`${n*t+s}/${t} = ${r(n,s)}`});if(e===1)return k(i,"MIXED","仮分数になおすと?",r(n,s),`${n*t+s}/${t}`,[`${n+s}/${t}`,`${n*s+t}/${t}`,`${n*t+s+1}/${t}`,`${n*t}/${t}`,`${n*10+s}/${t}`],{sol:`${r(n,s)} = ${n*t+s}/${t}`});const a=i.int(1,t-1),o=n*t+s+a,c=l=>l%t===0?String(l/t):l>t?r(Math.floor(l/t),l%t):`${l}/${t}`;return k(i,"MIXED","分数のたし算",`${r(n,s)} + ${a}/${t}`,c(o),[c(o+1),c(o-1),c(o+t),`${s+a}/${t*2}`,c(o+2)])}),$("ANGLE",2,8,(i,e)=>{if(e===0){const s=i.pick([30,45,60,90,120,135,150]);return k(i,"ANGLE","この角の大きさは?","",s,[30,45,60,90,120,135,150],{fig:Op(s),unit:"°",sol:`${s}°`})}if(e===1){const[s,r]=i.pick([["直角は何度?",90],["半回転の角は?",180],["1回転の角は?",360],["直角の半分は?",45],["三角じょうぎの一番小さい角は?",30]]);return k(i,"ANGLE","角の大きさ",s,r,[30,45,60,90,180,360,100],{unit:"°",sol:`${r}°`})}const t=i.int(4,16)*5,n=i.pick([180,360]);return k(i,"ANGLE","▢の角は?",`${n}° − ${t}°`,n-t,[n-t+10,n-t-10,t,n+t,90-t>0?90-t:t+5],{unit:"°"})}),$("QUAD",3,9,(i,e)=>{const[t,n,s]=i.pick(wu),r=wu.map(c=>c[1]);if(e===0)return k(i,"QUAD","この四角形の名前は?","",n,r,{fig:Vn[t],sol:n});if(e===1)return k(i,"QUAD","どの四角形?",s,n,r.filter(c=>!(n==="長方形"&&c==="正方形")&&!(n==="ひし形"&&c==="正方形")&&!(n==="平行四辺形"&&c!=="台形")&&!(n==="台形"&&c!=="平行四辺形")).concat(n==="平行四辺形"||n==="台形"?["三角形","円"]:[]),{sol:n});const[a,o]=i.pick([["対角線の長さが等しく、垂直に交わる","正方形"],["対角線が垂直に交わる(長さはちがう)","ひし形"],["対角線の長さが等しい(垂直ではない)","長方形"]]);return k(i,"QUAD","どの四角形?",a,o,["正方形","ひし形","長方形","台形"],{sol:o})}),$("LINES",3,8,i=>{const e=i.int(0,2),t=[Ht(te(30,70,210,70,Vt),te(120,14,120,126,Jn),xo(120,70,1,-1)),Ht(te(30,46,210,30,Vt),te(30,106,210,90,Jn)),Ht(te(30,96,210,44,Vt),te(60,20,170,124,Jn))][e],n=["垂直","平行","どちらでもない"][e];return k(i,"LINES","2本の直線の関係は?","",n,["垂直","平行","どちらでもない","同じ直線"],{fig:t,sol:n})}),$("AREA",3,9,(i,e)=>{const t=i.int(3,12),n=i.int(2,9);if(e===0)return k(i,"AREA","長方形の面積は?","",t*n,[(t+n)*2,t+n,t*n+t,t*n-n,t*t],{fig:Np(`${t}cm`,`${n}cm`),unit:"cm²",sol:`${t} × ${n} = ${t*n}cm²`});if(e===1)return k(i,"AREA","▢に入る数は?",`面積${t*n}cm²、たて${n}cmの長方形の横は▢cm`,t,[n===t?t+2:n,t+1,t-1,t*n-n],{sol:`${t*n} ÷ ${n} = ${t}cm`});const[s,r]=i.pick([["1m² = ▢cm²",1e4],["1a = ▢m²",100],["1ha = ▢m²",1e4],["1km² = ▢m²",1e6]]);return k(i,"AREA","▢に入る数は?",s,r,[100,1e3,1e4,1e5,1e6],{sol:s.replace("▢",String(r))})}),$("LINECHART",3,8,(i,e)=>{const t=["8時","10時","12時","14時","16時"],n=i.int(1,3),s=t.map((u,h)=>12+i.int(0,2)*2+(4-Math.abs(h-n))*2-(h===n?0:i.int(0,1)*2));s[n]=Math.max(...s)+2;const r=rp(s,t,30,10);if(e===0)return k(i,"LINECHART","気温がいちばん高いのは?","",t[n],t,{fig:r,sol:t[n]});const a=i.int(0,3),o=s[a+1]-s[a];if(e===1)return Gn("LINECHART",`${t[a]}から${t[a+1]}は?`,"","上がった","下がった",o>0,o>0?"上がった":"下がった",r);let c=0;for(let u=1;u<4;u++)Math.abs(s[u+1]-s[u])>Math.abs(s[c+1]-s[c])&&(c=u);const l=u=>`${t[u]}〜${t[u+1]}`;return k(i,"LINECHART","変わり方がいちばん大きいのは?","",l(c),[0,1,2,3].map(l),{fig:r,sol:l(c)})}),$("CHANGE",5,10,(i,e)=>{const t=i.int(2,9),n=i.int(3,9);if(e===0)return k(i,"CHANGE","○はいくつ?",`○ = □ × ${t}、□ = ${n}`,t*n,[t+n,t*n+t,t*n-t,t*(n+1)+1],{sol:`${n} × ${t} = ${t*n}`});const s=i.int(12,20),r=i.int(2,s-3);return e===1?k(i,"CHANGE","○はいくつ?",`□ + ○ = ${s}、□ = ${r}`,s-r,[s+r,s-r+1,s-r-1,r],{sol:`${s} − ${r} = ${s-r}`}):k(i,"CHANGE","横は何cm?",`まわり${s*2}cmの長方形、たて${r}cm`,s-r,[s*2-r,s-r+1,s*2-r*2,r],{unit:"cm",sol:`${s*2} ÷ 2 − ${r} = ${s-r}cm`})}),$("CUBE",5,10,(i,e)=>{if(e===0){const[s,r]=i.pick([["面",6],["辺",12],["頂点",8]]);return k(i,"CUBE",`直方体の${s}の数は?`,"",r,[6,8,12,4,10],{fig:gf("","",""),sol:`${s}は ${r}`})}const[t,n]=i.pick([["直方体で、長さの等しい辺は何本ずつ?",4],["立方体の面の形は正方形。全部で何まい?",6],["直方体で、1つの面に平行な面はいくつ?",1],["直方体で、1つの面に垂直な面はいくつ?",4],["直方体で、1つの辺に平行な辺はいくつ?",3]]);return k(i,"CUBE","直方体と立方体",t,n,[1,2,3,4,6,8],{sol:String(n)})}),$("TRICK",6,10,(i,e)=>{const t=i.int(2,9);if(e===0)return k(i,"TRICK","▢に入る数は?",`25 × ${4*t} = 25 × 4 × ▢`,t,[4,t+1,4*t,25],{sol:`25 × 4 × ${t} = ${100*t}`});if(e===1)return k(i,"TRICK","くふうして計算",`99 × ${t}`,99*t,[100*t,99*t+t,99*t-10,100*t-1],{sol:`100 × ${t} − ${t} = ${99*t}`});const n=i.int(11,19);return k(i,"TRICK","くふうして計算",`${n} × ${t} + ${20-n} × ${t}`,20*t,[20*t+t,10*t,n*t+20,20*t-t],{sol:`(${n} + ${20-n}) × ${t} = ${20*t}`})})];function Qs(i,e,t){for(;;){const n=i.int(e,t),s=i.int(e,t);if(n!==s&&Si(n,s)===1)return[n,s]}}function Sf(i,e){const t=[2,3,5,7];for(;;){let n=1;for(let a=0;a<e+1;a++)n*=i.pick(t);const s=i.int(1,12),r=i.int(s+1,15);if(!(Si(s,r)!==1||r*n>300))return{kind:"reduce",code:"REDUCE",prompt:"約分せよ",body:{text:`${s*n}/${r*n}`},solution:`${s*n}/${r*n} = ${s}/${r}`,num:s*n,den:r*n,pad:[2,3,5,7,11,13]}}}const Gp=[$("DECMUL",1,6,(i,e)=>{const t=i.int(2,9),n=i.int(2,9);if(e===0)return k(i,"DECMUL","小数のかけ算",`${dt(t,1)} × ${dt(n,1)}`,dt(t*n,2),[dt(t*n,1),dt(t*n,3),String(t*n),dt(t+n,1),dt(t*n+1,2)]);if(e===1)return k(i,"DECMUL","小数のわり算",`${dt(t*n,1)} ÷ ${dt(n,1)}`,t,[dt(t,1),t*10,dt(t,2),t+1,t-1]);const s=i.int(11,29);return k(i,"DECMUL","小数のかけ算",`${dt(s,1)} × ${dt(n*5,1)}`,dt(s*n*5,2),[dt(s*n*5,1),dt(s*n*5,3),dt(s*n*5+10,2),dt(s*n*5+100,2),dt(s+n*5,1)])}),$("EVENODD",1,4,(i,e)=>{if(e===0){const s=i.int(11,999);return Gn("EVENODD","偶数? 奇数?",String(s),"偶数","奇数",s%2===0,`${s}は${s%2===0?"偶数":"奇数"}`)}const[t,n]=i.pick([["偶数 + 偶数",!0],["奇数 + 奇数",!0],["偶数 + 奇数",!1],["奇数 × 奇数",!1],["偶数 × 奇数",!0],["奇数 − 偶数",!1]]);return Gn("EVENODD","答えは偶数? 奇数?",t,"偶数","奇数",n,`${t} は ${n?"偶数":"奇数"}`)}),$("DIVISOR",2,7,(i,e)=>{if(e===0){const o=i.pick([6,8,9,10,12,15,16,18,20,24]);let c=0;for(let l=1;l<=o;l++)o%l===0&&c++;return k(i,"DIVISOR","約数は何個?",String(o),c,[c+1,c-1,c+2,2],{unit:"個",sol:`${o}の約数は${c}個`})}const t=i.pick(le(e,[2,3],[2,3,4,6],[4,6,8,12])),[n,s]=Qs(i,2,5),[r,a]=[t*n,t*s];return e===1||i.chance(.5)?k(i,"DIVISOR","最大公約数は?",`${r} と ${a}`,t,[1,2,3,t*2,t/2,t+1,t-1].filter(o=>Number.isInteger(o)&&o>=1),{sol:`${r} と ${a} の最大公約数 = ${t}`}):k(i,"DIVISOR","最小公倍数は?",`${r} と ${a}`,t*n*s,[r*a,t*n*s*2,t*n*s+r,t*n*s-a,r+a].filter(o=>o>1),{sol:`${r} と ${a} の最小公倍数 = ${t*n*s}`})}),$("REDUCE",2,8,Sf),$("FRACADD",4,10,(i,e)=>{const[t,n]=Qs(i,2,le(e,4,5,7));if(e===0)return k(i,"FRACADD","通分したときの分母は?",`1/${t} と 1/${n}`,t*n,[t+n,t*n*2,Math.max(t,n),t*n-1],{sol:`${t} と ${n} の最小公倍数 = ${t*n}`});const s=e===1?1:i.int(1,t-1),r=e===1?1:i.int(1,n-1),a=i.chance(.4)&&s*n>r*t,o=a?s*n-r*t:s*n+r*t,c=`${at(s,t)} ${a?"−":"+"} ${at(r,n)}`;return k(i,"FRACADD",a?"分数のひき算":"分数のたし算",c,at(o,t*n),[a?`${Math.abs(s-r)||1}/${Math.abs(t-n)||2}`:`${s+r}/${t+n}`,at(o+1,t*n),at(Math.max(o-1,1),t*n),at(s+r,t*n),at(o,t*n+1)])}),$("VOLUME",2,7,(i,e)=>{const[t,n,s]=[i.int(2,9),i.int(2,6),i.int(2,5)];if(e===0)return k(i,"VOLUME","直方体の体積は?","",t*n*s,[t*n+s,(t+n+s)*2,t*n*s+t*n,t*n,t+n+s],{solid:io(t,s,n,`${t}cm`,`${s}cm`,`${n}cm`),unit:"cm³",sol:`${t} × ${n} × ${s} = ${t*n*s}cm³`});if(e===1)return k(i,"VOLUME","立方体の体積は?",`1辺 ${s+1}cm`,(s+1)**3,[(s+1)**2,(s+1)*3,(s+1)**2*6,(s+1)*12],{solid:io(s+1,s+1,s+1,`${s+1}cm`,"",""),unit:"cm³",sol:`${s+1} × ${s+1} × ${s+1} = ${(s+1)**3}cm³`});const[r,a]=i.pick([["1L = ▢cm³",1e3],["1m³ = ▢L",1e3],["1mL = ▢cm³",1],["1m³ = ▢cm³",1e6]]);return k(i,"VOLUME","▢に入る数は?",r,a,[1,10,100,1e3,1e4,1e6],{sol:r.replace("▢",String(a))})}),$("ANGLESUM",2,8,(i,e)=>{if(e===0){const s=i.int(6,14)*5,r=i.int(6,14)*5;return k(i,"ANGLESUM","?の角は何度?","",180-s-r,[180-s,180-r,s+r,360-s-r,190-s-r],{fig:$p(s,r),unit:"°",sol:`180 − ${s} − ${r} = ${180-s-r}°`})}if(e===1){const[s,r,a]=[i.int(14,22)*5,i.int(14,22)*5,i.int(14,22)*5];return k(i,"ANGLESUM","四角形の残りの角は?",`${s}°、${r}°、${a}° と ▢`,360-s-r-a,[180-s,360-s-r,370-s-r-a,350-s-r-a,s],{unit:"°",sol:`360 − ${s} − ${r} − ${a} = ${360-s-r-a}°`})}const t=i.int(5,8),n=["五","六","七","八"][t-5];return k(i,"ANGLESUM","角の大きさの和は?",`${n}角形`,180*(t-2),[180*t,180*(t-1),360,180*(t-3),90*t],{unit:"°",sol:`180 × (${t} − 2) = ${180*(t-2)}°`})}),$("AREA",3,9,(i,e)=>{const t=i.int(2,8)*2,n=i.int(3,9);if(e===0)return k(i,"AREA","三角形の面積は?","",t*n/2,[t*n,t+n,t*n/2+t,t*n*2],{fig:Up(`${t}cm`,`${n}cm`),unit:"cm²",sol:`${t} × ${n} ÷ 2 = ${t*n/2}cm²`});if(e===1)return k(i,"AREA","平行四辺形の面積は?",`底辺${t}cm、高さ${n}cm`,t*n,[t*n/2,(t+n)*2,t*n+t,t+n],{fig:Vn.parallelogram,unit:"cm²",sol:`${t} × ${n} = ${t*n}cm²`});const s=i.int(2,6);return i.chance(.5)?k(i,"AREA","台形の面積は?",`上底${s}cm、下底${s+t}cm、高さ${n}cm`,(s*2+t)*n/2,[(s*2+t)*n,(s+t)*n,(s*2+t)*n/2+n,(s+t)*n*2],{fig:Vn.trapezoid,unit:"cm²",sol:`(${s} + ${s+t}) × ${n} ÷ 2 = ${(s*2+t)*n/2}cm²`}):k(i,"AREA","ひし形の面積は?",`対角線 ${t}cm と ${n}cm`,t*n/2,[t*n,t+n,t*n/2+t,t*n*2],{fig:Vn.rhombus,unit:"cm²",sol:`${t} × ${n} ÷ 2 = ${t*n/2}cm²`})}),$("AVERAGE",3,8,(i,e)=>{const t=le(e,3,4,5),n=i.int(le(e,5,10,40),le(e,12,30,90)),s=[];for(let r=0;r<t-1;r++)s.push(n+i.int(-4,4));return s.push(n*t-Nr(s)),k(i,"AVERAGE","平均は?",s.join("、"),n,[n+1,n-1,n+2,Math.max(...s),Nr(s)],{sol:`${Nr(s)} ÷ ${t} = ${n}`})}),$("PERUNIT",5,10,(i,e)=>{const t=i.int(3,15),n=i.int(2,9);if(e===0)return k(i,"PERUNIT","1m²あたり何人?",`${n}m²に ${t*n}人`,t,[t*n,t+n,t+1,n===t?n+2:n],{unit:"人",sol:`${t*n} ÷ ${n} = ${t}人`});if(e===1)return k(i,"PERUNIT","1Lあたり何km走る?",`${n}Lで ${t*n}km`,t,[t*n,t+n,t-1,n===t?n+2:n],{unit:"km",sol:`${t*n} ÷ ${n} = ${t}km`});const[s,r]=[i.int(4,9)*10,i.int(4,9)*10],[a,o]=[i.int(2,5),i.int(2,5)];return s===r?k(i,"PERUNIT","1個あたり何円?",`${a}個で ${s*a}円`,s,[s*a,s+10,s-10,a*10],{unit:"円",sol:`${s*a} ÷ ${a} = ${s}円`}):Gn("PERUNIT","1個あたりが安いのは?","どっち?",`${a}個 ${s*a}円`,`${o}個 ${r*o}円`,s<r,`1個 ${s}円 と ${r}円`)}),$("SPEED",4,9,(i,e)=>{const t=i.pick([30,40,45,50,60,80]),n=i.int(2,5);if(e===0)return k(i,"SPEED","道のりは?",`時速${t}km で ${n}時間`,t*n,[t*n+t,t*n-t,t+n,t*n*2],{unit:"km",sol:`${t} × ${n} = ${t*n}km`});if(e===1)return k(i,"SPEED","時速は?",`${t*n}km を ${n}時間`,t,[t+10,t-10,t+5,t*2,t*n-n],{pre:"時速",unit:"km",sol:`${t*n} ÷ ${n} = 時速${t}km`});const s=i.pick([20,30,40,45,90].filter(r=>t*r%60===0));return k(i,"SPEED","何分かかる?",`時速${t}km で ${t*s/60}km`,s,[s+10,s-10,s+15,s*2,s+30],{unit:"分",sol:`${t*s/60} ÷ ${t} × 60 = ${s}分`})}),$("PERCENT",4,10,(i,e)=>{if(e===0){const r=i.pick([5,10,20,25,30,50,75]);return i.chance(.5)?k(i,"PERCENT","百分率になおすと?",dt(r,2),r,[r*10,r/10,r+10,100-r],{unit:"%",sol:`${dt(r,2)} = ${r}%`}):k(i,"PERCENT","何%?",`${r/10>=1&&r%10===0?`${r/10}割`:`${dt(r,2)}`}`,r,[r*10,r/10,r+10,100-r],{unit:"%",sol:`${r}%`})}if(e===1){const r=i.pick([10,20,25,30,40,50,75]),a=i.int(1,9)*(r%25===0&&r!==50?40:20),o=a*r/100;return k(i,"PERCENT","割合",`${a} の ${r}%`,o,[o*10,o/10,a-r,o+10,o-10,o*2].filter(c=>Number.isInteger(c)&&c>0))}const t=i.int(1,4),n=i.int(2,18)*100,s=n*(10-t)/10;return k(i,"PERCENT","割引後のねだんは?",`${n}円の ${t}割引き`,s,[n*t/10,n-t*10,s+100,s-100,s+50].filter(r=>r>0),{unit:"円",sol:`${n} × ${dt(10-t,1)} = ${s}円`})}),$("CIRCUM",5,10,(i,e)=>{const t=i.int(2,9)*(e===0?10:1);return e<2?k(i,"CIRCUM","円周は?(円周率3.14)","",dt(t*314,2),[dt(t*157,2),dt(t*628,2),dt(t*314+314,2),dt(t*t*314,2),dt(t*3,0)],{fig:so(`直径${t}cm`,!0),unit:"cm",sol:`${t} × 3.14 = ${dt(t*314,2)}cm`}):k(i,"CIRCUM","直径は?(円周率3.14)",`円周 ${dt(t*314,2)}cm`,t,[t*2,t+1,t-1,t*3],{unit:"cm",sol:`${dt(t*314,2)} ÷ 3.14 = ${t}cm`})}),$("PRISM",5,10,(i,e)=>{const t=i.int(3,6),n=["三","四","五","六"][t-3];if(e===2){const[a,o]=i.pick([["円柱の側面を切り開くと?","長方形"],["円柱の底面の形は?","円"],["三角柱の側面の形は?","長方形"],["角柱の2つの底面は?","合同で平行"]]);return k(i,"PRISM","角柱と円柱",a,o,["長方形","円","三角形","合同で平行","台形"],{sol:o})}const[s,r]=i.pick([["面",t+2],["辺",t*3],["頂点",t*2]]);return k(i,"PRISM",`${s}の数は?`,`${n}角柱`,r,[t+2,t*3,t*2,t,t+1,t*4],{sol:`${n}角柱の${s}は ${r}`})}),$("REGULAR",4,9,(i,e)=>{const t=i.pick([3,4,5,6,8,9,10]),n={3:"正三角形",4:"正方形",5:"正五角形",6:"正六角形",8:"正八角形",9:"正九角形",10:"正十角形"};return e===0?k(i,"REGULAR","中心の角を等分すると1つは?",`${n[t]}`,360/t,[180/t,360/(t+1),360/t+10,180-360/t].map(s=>Math.round(s)),{unit:"°",sol:`360 ÷ ${t} = ${360/t}°`}):k(i,"REGULAR","1つの角の大きさは?",`${n[t]}`,180-360/t,[360/t,180-360/t+10,180-360/t-10,180*(t-2)],{unit:"°",sol:`180 × (${t} − 2) ÷ ${t} = ${180-360/t}°`})})],Vp=[["square","正方形",4,!0],["rectangle","長方形",2,!0],["equilateral","正三角形",3,!1],["isosceles","二等辺三角形",1,!1],["parallelogram","平行四辺形",0,!0],["rhombus","ひし形",2,!0],["hexagon","正六角形",6,!0],["pentagon","正五角形",5,!1]],Hp=[$("FRACMUL",1,6,(i,e)=>{const[t,n]=Qs(i,2,7),[s,r]=[Math.min(t,n),Math.max(t,n)];if(e===0){const c=i.int(2,5);return k(i,"FRACMUL","分数 × 整数",`${s}/${r} × ${c}`,at(s*c,r),[at(s,r*c),at(s*c,r*c+1),at(s+c,r),at(s*c+1,r),at(s*c,r+1)])}const[a,o]=Qs(i,2,7);return e===1?k(i,"FRACMUL","分数 × 分数",`${s}/${r} × ${a}/${o}`,at(s*a,r*o),[at(s*o,r*a),at(s+a,r+o),at(s*a+1,r*o),at(s*a,r*o+1),at(s*a,r+o)]):k(i,"FRACMUL","分数 ÷ 分数",`${s}/${r} ÷ ${a}/${o}`,at(s*o,r*a),[at(s*a,r*o),at(r*a,s*o),at(s*o+1,r*a),at(s*o,r*a+1),at(s+o,r+a)])}),$("LETTER",1,6,(i,e)=>{const t=i.int(2,9),n=i.int(2,12);if(e===0)return k(i,"LETTER","x はいくつ?",`x × ${t} = ${t*n}`,n,[n+1,n-1,t*n-t,t===n?t+2:t],{sol:`x = ${t*n} ÷ ${t} = ${n}`});if(e===1)return k(i,"LETTER","x はいくつ?",`x + ${dt(t*5,1)} = ${dt(n*10+t*5,1)}`,n,[n+1,n-1,n+t,dt(n*10+t*10,1)],{sol:`x = ${n}`});const s=i.int(1,4)*50;return k(i,"LETTER","代金を表す式は?",`1個x円のりんご${t}個と${s}円のかご`,`x × ${t} + ${s}`,[`x + ${t} + ${s}`,`(x + ${s}) × ${t}`,`x × ${s} + ${t}`,`x × ${t} − ${s}`],{sol:`x × ${t} + ${s}`})}),$("RATIO",2,8,(i,e)=>{const[t,n]=Qs(i,1,7),s=i.int(2,9),r=(a,o)=>`${a}:${o}`;return e===0?k(i,"RATIO","比を簡単にすると?",r(t*s,n*s),r(t,n),[r(n,t),r(t*2,n),r(t+1,n+1),r(t*s,n),r(t,n+1)],{sol:`${r(t*s,n*s)} = ${r(t,n)}`}):e===1?k(i,"RATIO","比の値は?",r(t,n),at(t,n),[at(n,t),at(t,t+n),at(t+1,n+1),at(n,t+n),String(t+n)],{sol:`${t} ÷ ${n} = ${at(t,n)}`}):k(i,"RATIO","▢に入る数は?",`${t}:${n} = ${t*s}:▢`,n*s,[n+s,t*s,n*s+n,n*s-t,n*(s+1)+1],{sol:`${n} × ${s} = ${n*s}`})}),$("PROPORTION",3,9,(i,e)=>{const t=i.int(2,6),n=i.int(3,8);if(e===0)return k(i,"PROPORTION","y はいくつ?",`y は x に比例。x=2 のとき y=${t*2}。x=${n} のとき`,t*n,[t+n,t*n+t,t*2*n,t*n-2],{sol:`y = ${t} × x より ${t*n}`});if(e===1){const a=[1,2,3,4],o=i.chance(.5),c=a.map(l=>o?12/l:t*l);return Gn("PROPORTION","比例? 反比例?",`x: ${a.join(" ")}  →  y: ${c.join(" ")}`,"比例","反比例",!o,o?"x × y がいつも12 → 反比例":`y ÷ x がいつも${t} → 比例`)}const s=i.pick([12,18,24,36]),r=i.pick([2,3,4,6]);return k(i,"PROPORTION","y はいくつ?",`y は x に反比例。x=1 のとき y=${s}。x=${r} のとき`,s/r,[s*r,s-r,s/r+1,s+r],{sol:`y = ${s} ÷ x より ${s/r}`})}),$("GRAPH",4,9,i=>{const e=i.pick([1,2,3]),t=is(5),n=Ht(t.base,t.plot(r=>r>=0?e*r:NaN)),s=e===1?"y = x":`y = ${e} × x`;return k(i,"GRAPH","このグラフの式は?","",s,["y = x","y = 2 × x","y = 3 × x","y = 4 × x","y = x + 2"],{fig:n,sol:s})}),$("CIRCLEAREA",3,9,(i,e)=>{const t=i.int(2,9)*(e===0?10:1),n=t*t*314;return e<2?k(i,"CIRCLEAREA","円の面積は?(円周率3.14)","",dt(n,2),[dt(t*2*314,2),dt(n*2,2),dt(n/2,2),dt(t*314,2),dt(n*4,2)],{fig:so(`半径${t}cm`,!1),unit:"cm²",sol:`${t} × ${t} × 3.14 = ${dt(n,2)}cm²`}):k(i,"CIRCLEAREA","半円の面積は?(円周率3.14)",`半径 ${t*2}cm`,dt(t*t*4*157,2),[dt(t*t*4*314,2),dt(t*2*314,2),dt(t*t*157,2),dt(t*t*4*157+314,2)],{unit:"cm²",sol:`${t*2} × ${t*2} × 3.14 ÷ 2 = ${dt(t*t*4*157,2)}cm²`})}),$("SCALE",4,9,(i,e)=>{const t=i.int(2,9);if(e===0){const n=i.int(2,4);return k(i,"SCALE","対応する辺は何cm?",`${n}倍の拡大図。もとの辺は${t}cm`,t*n,[t+n,t*n+t,t*n-1,t],{unit:"cm",sol:`${t} × ${n} = ${t*n}cm`})}return e===1?k(i,"SCALE","実際の長さは何m?",`縮尺 1/1000 の地図で ${t}cm`,t*10,[t*100,t,t*1e3,t*10+10],{unit:"m",sol:`${t} × 1000 = ${t*1e3}cm = ${t*10}m`}):k(i,"SCALE","地図上では何cm?",`縮尺 1/25000 で 実際 ${t*250}m`,t,[t*10,t*25,t+1,t*4],{unit:"cm",sol:`${t*25e3}cm ÷ 25000 = ${t}cm`})}),$("SYMMETRY",2,8,(i,e)=>{const[t,n,s,r]=i.pick(Vp);return e===0?bc("SYMMETRY","線対称な図形?",n,s>0,s>0?`${n}は線対称(軸は${s}本)`:`${n}は線対称ではない`,Vn[t]):e===1?bc("SYMMETRY","点対称な図形?",n,r,`${n}は点対称${r?"":"ではない"}`,Vn[t]):k(i,"SYMMETRY","対称の軸は何本?",n,s,[0,1,2,3,4,5,6],{fig:Vn[t],unit:"本",sol:`${n}の対称の軸は${s}本`})}),$("PRISMVOL",4,9,(i,e)=>{const t=i.int(4,20),n=i.int(3,9);if(e===0)return k(i,"PRISMVOL","角柱の体積は?",`底面積${t}cm²、高さ${n}cm`,t*n,[t+n,t*n*2,t*n/2,t*n+t].map(Math.round),{solid:Wp(t,n),unit:"cm³",sol:`${t} × ${n} = ${t*n}cm³`});const s=i.int(1,5);if(e===1)return k(i,"PRISMVOL","円柱の体積は?(円周率3.14)",`底面の半径${s}cm、高さ${n}cm`,dt(s*s*n*314,2),[dt(s*2*n*314,2),dt(s*s*314,2),dt(s*s*n*157,2),dt(s*n*314,2),dt(s*s*n*628,2)],{solid:Ac("cylinder",s,n,`${s}cm`,`${n}cm`),unit:"cm³",sol:`${s} × ${s} × 3.14 × ${n} = ${dt(s*s*n*314,2)}cm³`});const r=i.int(2,6)*2;return k(i,"PRISMVOL","三角柱の体積は?",`底面は底辺${r}cm・高さ${n}cmの三角形、柱の高さ10cm`,r*n*10/2,[r*n*10,r*n,r*n/2,r*n*10/2+10],{solid:Xp(r,n,10),unit:"cm³",sol:`${r} × ${n} ÷ 2 × 10 = ${r*n*10/2}cm³`})}),$("CASES",4,10,(i,e)=>{const t=[["A、B、Cの3人が1列に並ぶ",6],["コインを2回投げたときの表裏の出方",4],["4チームの総当たり戦の試合数",6],["3種類から2種類を選ぶ",3]],n=[["4人が1列に並ぶ",24],["5人から2人を選ぶ",10],["1、2、3のカードで作る3けたの整数",6],["コインを3回投げたときの出方",8],["5チームの総当たり戦の試合数",10]],s=[["0、1、2、3のカードから2枚で作る2けたの整数",9],["4人から班長と副班長を選ぶ",12],["6チームの総当たり戦の試合数",15],["大小2つのさいころの目の出方",36],["5人から3人を選ぶ",10]],[r,a]=i.pick(le(e,t,n,s));return k(i,"CASES","全部で何通り?",r,a,[a+2,a-1,a*2,a+4,Math.ceil(a/2)],{unit:"通り",sol:`${a}通り`})}),$("DATA",3,9,(i,e)=>{const t=i.int(3,8),n=i.shuffle([1,2,3,4,5,6,7,8,9].filter(o=>o!==t)).slice(0,3),s=[t,t,...n].sort((o,c)=>o-c);if(e===0)return k(i,"DATA","最頻値は?",s.join("、"),t,s,{sol:`いちばん多く出てくる値 = ${t}`});if(e===1)return k(i,"DATA","中央値は?",s.join("、"),s[2],[s[0],s[1],s[3],s[4],s[2]+1],{sol:`小さい順に並べた真ん中 = ${s[2]}`});const r=i.int(4,8),a=[r-2,r-1,r,r+1,r+2].map((o,c)=>o+(c===0?-1:c===4?1:0));return k(i,"DATA","平均値は?",i.shuffle(a).join("、"),r,[r+1,r-1,a[4],Nr(a)],{sol:`${Nr(a)} ÷ 5 = ${r}`})}),$("SPEEDCONV",5,10,(i,e)=>{const t=i.pick([50,60,80,100,150,200]);if(e===0)return k(i,"SPEEDCONV","時速何km?",`分速 ${t*10}m`,t*10*60/1e3,[t,t*6,t*10*60/100,t/10],{pre:"時速",unit:"km",sol:`${t*10} × 60 = ${t*600}m = ${t*600/1e3}km`});if(e===1)return k(i,"SPEEDCONV","分速何m?",`秒速 ${t/10}m`,t*6,[t,t*60,t/10+60,t*3],{pre:"分速",unit:"m",sol:`${t/10} × 60 = ${t*6}m`});const n=i.pick([40,60,80]),s=n*i.int(2,4);return k(i,"SPEEDCONV","往復で何時間?",`片道${s}km を 時速${n}km で`,s*2/n,[s/n,s*2/n+1,s/n+3,s*4/n],{unit:"時間",sol:`${s*2} ÷ ${n} = ${s*2/n}時間`})}),$("PREFIX",3,8,i=>{const[e,t]=i.pick([["k(キロ)は何倍?","1000倍"],["m(ミリ)は何倍?","1/1000倍"],["c(センチ)は何倍?","1/100倍"],["d(デシ)は何倍?","1/10倍"],["1kLは何L?","1000L"],["1mgは何g?","1/1000g"]]),n=t.endsWith("L")?["10L","100L","1000L","10000L"]:t.endsWith("g")?["1/10g","1/100g","1/1000g","1000g"]:["1000倍","100倍","1/10倍","1/100倍","1/1000倍"];return k(i,"PREFIX","単位のしくみ",e,t,n,{sol:t})}),$("FRACDEC",3,8,(i,e)=>{const t=[[1,2,"0.5"],[1,4,"0.25"],[3,4,"0.75"],[1,5,"0.2"],[2,5,"0.4"],[3,5,"0.6"],[4,5,"0.8"],[1,8,"0.125"],[3,8,"0.375"],[1,10,"0.1"]],[n,s,r]=i.pick(t);if(e===0)return k(i,"FRACDEC","小数になおすと?",`${n}/${s}`,r,t.map(c=>c[2]));if(e===1)return k(i,"FRACDEC","分数になおすと?",r,`${n}/${s}`,t.map(c=>`${c[0]}/${c[1]}`));const[a,o]=Qs(i,2,9);return k(i,"FRACDEC","逆数は?",`${a}/${o}`,at(o,a),[at(a,o),at(o,a+1),at(o+1,a),at(1,a*o),at(a+o,a)],{sol:`${a}/${o} の逆数 = ${at(o,a)}`})})];function Wp(i,e){const t=Math.sqrt(i/2.378);return{parts:[{shape:"prism",base:wl(5,t,Math.PI/2),h:e,tone:"green"}],labels:[{at:[0,e,0],text:`${i}cm²`,tone:"yellow"},{at:[t,e/2,0],text:`${e}cm`,tone:"yellow"}]}}function Xp(i,e,t){const n=i*.3;return{parts:[{shape:"prism",base:[[0,0],[i,0],[n,e]],h:t,lying:!0,tone:"green"}],segs:[{from:[n,0,t],to:[n,e,t],dashed:!0,tone:"yellow"}],labels:[{at:[i/2,-.5,t],text:`${i}cm`,tone:"yellow"},{at:[n+.7,e/2,t],text:`${e}cm`,tone:"yellow"},{at:[i+.4,0,t/2],text:`${t}cm`,tone:"yellow"}]}}const qp=[Fp,Bp,kp,zp,[...Gp,...Sp],Hp],Xa=(i,e,t,n)=>i===0?e:i===1?t:n,un=i=>i<0?`(${b(i)})`:String(i);function Nt(i){const e=i.filter(([t])=>t!==0);return e.length===0?"0":e.map(([t,n],s)=>{const r=n===""?String(Math.abs(t)):`${Math.abs(t)===1?"":Math.abs(t)}${n}`;return s===0?t<0?`−${r}`:r:t<0?` − ${r}`:` + ${r}`}).join("")}function Po(i,e){const t=()=>i.int(2,e),[n,s]=[t()*(i.chance(.5)?-1:1),t()*(i.chance(.5)?-1:1)];return n>0&&s>0?i.chance(.5)?[-n,s]:[n,-s]:[n,s]}const pr={5:"五",6:"六",8:"八",9:"九",10:"十",12:"十二"},ts=(i,e="x")=>i===0?e:`(${e}${Ie(i)})`;function Yp(i,e){const t=up(i,e===0?24:100,e===0?99:999,e===2?13:7);return{kind:"factor",code:"PFACT",prompt:"素因数分解せよ",body:{text:String(t)},solution:`${t} = ${ff(cp(t))}`,n:t,pad:[2,3,5,7,11,13]}}function Kp(i,e){const t=e===0?[2,3]:e===1?[2,3,4,5,6]:[4,5,6,7,10,12];for(;;){const n=i.pick(t),s=i.int(2,e===0?7:15);if(!xf(s)||n*n*s>600)continue;const r=n*n*s;return{kind:"sqrt",code:"SQRT",prompt:"√ を簡単にせよ",body:{text:`√${r}`},solution:`√${r} = ${n}√${s}`,rad:r,pad:[2,3,5,7]}}}function Zp(i,e){const t=e===0?6:9,n=()=>e===0?Math.abs(ht(i,t)):ht(i,t),s=n(),r=n(),a=s+r,o=s*r,c=[s,r],l=[-s,-r,s+1,r-1];for(let d=1;d<=Math.abs(o);d++)o%d===0&&l.push(d,-d,o/d);for(const d of i.shuffle(l)){if(c.length>=6)break;d===0||c.includes(d)||c.some(g=>g+d===a&&g*d===o)||c.push(d)}let u=1;for(;c.length<6;){const d=u++;!c.includes(d)&&!c.some(g=>g+d===a&&g*d===o)&&c.push(d)}const h=bn([{coef:1,pow:2},{coef:a,pow:1},{coef:o,pow:0}]),f=s===r?`${ts(s)}²`:`${ts(Math.max(s,r))}${ts(Math.min(s,r))}`;return{kind:"pair",code:"QUAD",prompt:"因数分解: 2つの数を選べ",body:{text:h},solution:`${h} = ${f}`,b:a,c:o,tiles:i.shuffle(c)}}const Jp=(i,e)=>{const t=is(5);return Ht(t.base,Oi(...t.at(i,e),mn,5))},Mf=(i,e=5)=>{const t=is(e);return Ht(t.base,t.plot(i))};function Lo(i,e){const[t,n,s,r]=[96,40,144,100];return Ht(te(20,n,220,n,Vt),te(20,r,220,r,Vt),te(72,10,168,130,Jn),Yt(t+30,n+13,`${i}°`,13),Yt(e?s-30:s+30,e?r-12:r+13,"x",15,mn),Yt(226,n,"ℓ",12),Yt(226,r,"m",12))}function Ru(i,e){return Ht(En([[120,12],[66,124],[174,124]],Vt),Yt(120,40,i,13),Yt(86,112,e,13),te(90,64,98,68),te(150,64,142,68))}function Cu(i,e){const[t,n,s]=[120,72,58],r=Qn(t,n,s,215),a=Qn(t,n,s,325),o=Qn(t,n,s,95);return Ht($i(t,n,s),es([r,[t,n],a],Jn),es([r,o,a],Vt),Oi(t,n),Yt(t,n+16,i,13,Jn),Yt(o[0]+2,o[1]+24,e,13,Vt))}function Pu(i,e,t){return Ht(En([[60,22],[60,116],[190,116]],Vt),xo(60,116,1,-1),Yt(42,70,i,14),Yt(124,130,e,14),Yt(138,60,t,14))}const Qp=[$("NEGADD",1,5,(i,e)=>{const[t,n]=Po(i,Xa(e,9,15,30)),s=e>0&&i.chance(.5),r=s?t-n:t+n;return C(i,"NEGADD","正負の数",`${un(t)} ${s?"−":"+"} ${un(n)}`,b(r),[b(-r),b(s?t+n:t-n),b(r+2),b(r-2),b(Math.abs(t)+Math.abs(n))])}),$("NEGMUL",2,7,(i,e)=>{const[t,n]=Po(i,9);if(e===0)return C(i,"NEGMUL","正負の数のかけ算",`${un(t)} × ${un(n)}`,b(t*n),[b(-t*n),b(t+n),b(t*n+t),b(-(t*n+t))]);if(e===1)return C(i,"NEGMUL","正負の数のわり算",`${un(t*n)} ÷ ${un(n)}`,b(t),[b(-t),b(t+1),b(t-1),b(-t-1)]);const s=i.int(2,5),r=i.int(2,3),a=i.chance(.5),o=a?(-s)**r:-(s**r);return C(i,"NEGMUL","累乗",a?`(−${s})${r===2?"²":"³"}`:`−${s}${r===2?"²":"³"}`,b(o),[b(-o),b(s*r),b(-s*r),b(s**r+1)])}),$("NEGMIX",4,9,(i,e)=>{const[t,n]=Po(i,6),s=ht(i,9),[r,a,o]=Xa(e,[`${un(s)} + ${un(t)} × ${un(n)}`,s+t*n,(s+t)*n],[`${un(s)} − ${un(t)} × ${un(n)}`,s-t*n,(s-t)*n],[`${un(s)} × ${un(t)} − ${un(n)}²`,s*t-n*n,s*t+n*n]);return C(i,"NEGMIX","四則の混じった計算",r,b(a),[b(o),b(-a),b(a+2),b(a-2),b(a+10)])}),$("ABS",1,4,(i,e)=>{const t=ht(i,12);if(e===0)return C(i,"ABS","絶対値は?",b(t),Math.abs(t),[b(-Math.abs(t)),0,Math.abs(t)+1,Math.abs(t)-1||13],{sol:`${b(t)} の絶対値 = ${Math.abs(t)}`});let n=ht(i,12);if(n===t&&(n=-t),e===1)return Gn("ABS","大きいほうは?","どっち?",b(t),b(n),t>n,`${b(Math.max(t,n))} のほうが大きい`);const s=i.int(2,9);return C(i,"ABS","あてはまる数は?",`絶対値が ${s} である数`,`${s} と −${s}`,[`${s} だけ`,`−${s} だけ`,`0 と ${s}`,`${s} と 1/${s}`],{sol:`${s} と −${s}`})}),$("NOTATION",2,7,(i,e)=>{const t=i.int(2,9);if(e===0){const[o,c,l]=i.pick([[`a × ${t} × b`,`${t}ab`,[`ab${t}`,`a${t}b`,`${t}a + b`,`${t} + ab`]],[`x ÷ ${t}`,`x/${t}`,[`${t}/x`,`${t}x`,`x − ${t}`,`x${t}`]],["a × a × a","a³",["3a","a + 3","aaa","a²"]],[`(x + y) × ${t}`,`${t}(x + y)`,[`${t}x + y`,`x + ${t}y`,`(x + y)${t}`,`${t}xy`]],["b × (−1) × a","−ab",["−1ab","ab − 1","−ba1","a − b"]]]);return C(i,"NOTATION","文字式の表し方",o,c,l,{sol:`${o} = ${c}`})}const n=i.int(1,9)*10,[s,r,a]=i.pick([[`1本a円の鉛筆${t}本の代金`,`${t}a 円`,[`a + ${t} 円`,`a/${t} 円`,`${t}/a 円`,`a${t} 円`]],[`x円の${t}割`,`${t}x/10 円`,[`${t}x 円`,`x/${t} 円`,`10x/${t} 円`,`x − ${t} 円`]],[`時速${n}kmでx時間進む道のり`,`${n}x km`,[`x/${n} km`,`${n}/x km`,`${n} + x km`,`${n}x 時間`]],[`a kmを${t}時間で進む速さ`,`時速 a/${t} km`,[`時速 ${t}a km`,`時速 ${t}/a km`,`時速 a − ${t} km`,`時速 a + ${t} km`]]]);return C(i,"NOTATION","式で表すと?",s,r,a,{sol:r})}),$("LIKE",3,8,(i,e)=>{const[t,n,s,r]=[ht(i,9),ht(i,9),ht(i,9),ht(i,9)];if(e===0)return C(i,"LIKE","同類項をまとめよ",Nt([[t,"x"],[n,"x"]]),Nt([[t+n,"x"]]),[Nt([[t+n,"x²"]]),Nt([[t*n,"x"]]),Nt([[t-n,"x"]]),Nt([[t+n+1,"x"]]),b(t+n)]);if(e===1)return C(i,"LIKE","同類項をまとめよ",Nt([[t,"x"],[s,""],[n,"x"],[r,""]]),Nt([[t+n,"x"],[s+r,""]]),[Nt([[t+n+s+r,"x"]]),Nt([[t+n,"x"],[s-r,""]]),Nt([[t-n,"x"],[s+r,""]]),Nt([[t+n,"x"],[s*r,""]]),Nt([[t+s,"x"],[n+r,""]])]);const a=i.int(2,5);return C(i,"LIKE","かっこをはずして計算",`${a}${ts(s)} ${n<0?"−":"+"} ${Math.abs(n)===1?"":Math.abs(n)}x`,Nt([[a+n,"x"],[a*s,""]]),[Nt([[a+n,"x"],[s,""]]),Nt([[a*n,"x"],[a*s,""]]),Nt([[a+n,"x"],[-a*s,""]]),Nt([[a-n,"x"],[a*s,""]]),Nt([[a+n+a*s,"x"]])])}),$("SUBST",3,8,(i,e)=>{const t=ht(i,5),[n,s]=[ht(i,6),ht(i,9)],[r,a,o]=Xa(e,[Nt([[n,"x"],[s,""]]),n*t+s,n+t+s],[`${pe(n)}x²`,n*t*t,n*t*2],[Nt([[1,"x²"],[n,"x"],[s,""]]),t*t+n*t+s,-t*t+n*t+s]);return C(i,"SUBST",`x = ${b(t)} のときの式の値`,r,b(a),[b(o),b(-a),b(a+2),b(a-2),b(a+4)])}),$("EQUATION",4,10,(i,e)=>{const t=ht(i,9),n=i.int(2,7)*(i.chance(.3)?-1:1),s=ht(i,12),r=[b(-t),b(t+1),b(t-1),b(t+2),b(t*2)];if(e===0)return C(i,"EQUATION","方程式を解け",`${Nt([[n,"x"],[s,""]])} = ${b(n*t+s)}`,b(t),r,{pre:"x = ",sol:`x = ${b(t)}`});if(e===1){const l=n+ht(i,4)||n+1,u=n*t+s-l*t;return C(i,"EQUATION","方程式を解け",`${Nt([[n,"x"],[s,""]])} = ${Nt([[l,"x"],[u,""]])}`,b(t),r,{pre:"x = ",sol:`x = ${b(t)}`})}if(i.chance(.5)){const l=i.int(2,5),u=ht(i,5);return C(i,"EQUATION","方程式を解け",`${l}${ts(u)} = ${b(l*(t+u))}`,b(t),r,{pre:"x = ",sol:`x = ${b(t)}`})}const[a,o]=[i.int(2,5),i.int(2,6)],c=a*i.int(1,4);return C(i,"EQUATION","比例式を解け",`x : ${o*(c/a)} = ${a} : ${o}`,c,[c+1,c-1,o*(c/a),c*2,a*o],{pre:"x = ",sol:`x = ${c}`})}),$("COORD",3,7,i=>{const[e,t]=[ht(i,4),ht(i,4)],n=(s,r)=>`(${b(s)}, ${b(r)})`;return C(i,"COORD","点の座標は?","",n(e,t),[n(t,e),n(-e,t),n(e,-t),n(-e,-t),n(t,-e)],{fig:Jp(e,t),sol:n(e,t)})}),$("PROPORTION",4,9,(i,e)=>{const t=ht(i,5),n=ht(i,5);if(e===0)return C(i,"PROPORTION","比例定数は?",`y は x に比例。x = ${b(n)} のとき y = ${b(t*n)}`,b(t),[b(-t),b(t*n),b(t+1),b(t-1),at(1,t)],{sol:`a = ${b(t*n)} ÷ ${un(n)} = ${b(t)}`});if(e===1){const a=i.pick([6,8,12,18,24])*(i.chance(.3)?-1:1),o=i.pick([2,3,6].filter(c=>a%c===0));return C(i,"PROPORTION","y の値は?",`y は x に反比例。x = 1 のとき y = ${b(a)}。x = ${o} のとき`,b(a/o),[b(a*o),b(-a/o),b(a-o),b(a/o+1)],{sol:`y = ${b(a)}/x より ${b(a/o)}`})}const s=i.pick([1,2,3,-1,-2,.5]),r=a=>a===.5?"y = x/2":`y = ${pe(a)}x`;return C(i,"PROPORTION","グラフの式は?","",r(s),[1,2,3,-1,-2,.5].map(r),{fig:Mf(a=>s*a),sol:r(s)})}),$("SECTOR",5,10,(i,e)=>{const t=i.pick([3,4,6,8,9,12]),n=i.pick([30,45,60,90,120].filter(s=>t*s%180===0||e>0));return e===0?C(i,"SECTOR","おうぎ形の弧の長さは?",`半径${t}cm、中心角${n}°`,ut(t*n,180),[ut(t*t*n,360),ut(t*n,360),ut(t*n,90),ut(t*2,1),ut(n,t)],{unit:" cm",sol:`2π × ${t} × ${n}/360 = ${ut(t*n,180)} cm`}):e===1?C(i,"SECTOR","おうぎ形の面積は?",`半径${t}cm、中心角${n}°`,ut(t*t*n,360),[ut(t*n,180),ut(t*t*n,180),ut(t*t,1),ut(t*t*n,720),ut(t*n,360)],{unit:" cm²",sol:`π × ${t}² × ${n}/360 = ${ut(t*t*n,360)} cm²`}):C(i,"SECTOR","円の面積は?",`半径${t}cm`,ut(t*t),[ut(t*2),ut(t),ut(t*t*2),ut(t*t,2),ut(t*t*4)],{unit:" cm²",sol:`π × ${t}² = ${ut(t*t)} cm²`})}),$("SOLID",4,9,(i,e)=>{const t=i.pick([2,3,6]),n=i.pick([3,6,9]);if(e===0){const[s,r,a]=i.pick([["正多面体は全部で何種類?","5種類",["3種類","4種類","6種類","無数"]],["正四面体の面の数は?","4",["6","8","12","3"]],["正六面体(立方体)の頂点の数は?","8",["4","6","12","20"]],["正八面体の面の形は?","正三角形",["正方形","正五角形","長方形","正六角形"]],["正十二面体の面の形は?","正五角形",["正三角形","正方形","正六角形","長方形"]],["円錐を底面に平行な平面で切った切り口は?","円",["三角形","長方形","おうぎ形","だ円"]],["円柱を底面に垂直な平面で切った切り口は?","長方形",["円","三角形","おうぎ形","台形"]],["空間で交わらず平行でもない2直線の位置関係は?","ねじれの位置",["垂直","平行","交わる","一致"]],["円錐の側面の展開図の形は?","おうぎ形",["三角形","長方形","円","台形"]]]);return C(i,"SOLID","空間図形",s,r,a,{sol:r})}return e===1?i.chance(.5)?C(i,"SOLID","円柱の体積は?",`底面の半径${t}cm、高さ${n}cm`,ut(t*t*n),[ut(t*t*n,3),ut(2*t*n),ut(t*n),ut(t*t*n*2)],{solid:Ac("cylinder",t,n,`${t}cm`,`${n}cm`),unit:" cm³",sol:`π × ${t}² × ${n} = ${ut(t*t*n)} cm³`}):C(i,"SOLID","円錐の体積は?",`底面の半径${t}cm、高さ${n}cm`,ut(t*t*n,3),[ut(t*t*n),ut(2*t*n,3),ut(t*t*n,2),ut(t*n)],{solid:Ac("cone",t,n,`${t}cm`,`${n}cm`),unit:" cm³",sol:`1/3 × π × ${t}² × ${n} = ${ut(t*t*n,3)} cm³`}):i.chance(.5)?C(i,"SOLID","球の体積は?",`半径${t}cm`,ut(4*t**3,3),[ut(4*t*t),ut(t**3),ut(4*t**3),ut(2*t**3,3)],{solid:Mu(t,`${t}cm`),unit:" cm³",sol:`4/3 × π × ${t}³ = ${ut(4*t**3,3)} cm³`}):C(i,"SOLID","球の表面積は?",`半径${t}cm`,ut(4*t*t),[ut(4*t**3,3),ut(t*t),ut(2*t*t),ut(4*t)],{solid:Mu(t,`${t}cm`),unit:" cm²",sol:`4 × π × ${t}² = ${ut(4*t*t)} cm²`})}),$("FREQUENCY",3,8,(i,e)=>{const t=i.pick([20,25,50]),n=i.int(2,t/5);if(e===0){const r=i.shuffle([12,15,18,21,24,27,30,33]).slice(0,5),a=Math.max(...r)-Math.min(...r);return C(i,"FREQUENCY","範囲(レンジ)は?",r.join("、"),a,[Math.max(...r),Math.min(...r),a+3,a-3],{sol:`${Math.max(...r)} − ${Math.min(...r)} = ${a}`})}if(e===1)return C(i,"FREQUENCY","相対度数は?",`全体${t}人のうち、ある階級の度数が${n}人`,String(n/t),[n/100,n/10,1-n/t,n/t+.1,n/t/2].map(r=>String(Math.round(r*1e3)/1e3)),{sol:`${n} ÷ ${t} = ${n/t}`});const s=i.int(2,8)*10;return C(i,"FREQUENCY","階級値は?",`${s}cm以上${s+10}cm未満の階級`,s+5,[s,s+10,10,s*2+10],{unit:"cm",sol:`(${s} + ${s+10}) ÷ 2 = ${s+5}cm`})}),$("PFACT",2,8,Yp),$("REDUCE",1,4,Sf),$("TERMS",3,7,i=>{const[e,t,n]=i.pick([["線分の垂直二等分線上の点は、両端から…","等しい距離にある",["異なる距離にある","必ず線分上にある","必ず中点にある"]],["角の二等分線上の点は、角の2辺から…","等しい距離にある",["異なる距離にある","必ず頂点にある","必ず辺の上にある"]],["円の接線は、接点を通る半径に…","垂直",["平行","一致する","45°で交わる"]],["記号 ⊥ の意味は?","垂直",["平行","合同","相似"]],["記号 ∥ の意味は?","平行",["垂直","合同","等しい"]],["図形をある点を中心に回す移動は?","回転移動",["平行移動","対称移動","拡大"]],["図形を直線を折り目に折り返す移動は?","対称移動",["平行移動","回転移動","縮小"]]]);return C(i,"TERMS","図形のことば",e,t,n,{sol:t})})],ws=i=>{let e=0;for(let t=1;t<=6;t++)for(let n=1;n<=6;n++)i(t,n)&&e++;return e},jp=[$("MONOMIAL",1,5,(i,e)=>{const[t,n]=[ht(i,6),ht(i,6)];if(e===0)return C(i,"MONOMIAL","単項式の乗法",`${pe(t)}a × ${n<0?`(${pe(n)}b)`:`${pe(n)}b`}`,`${pe(t*n)}ab`,[`${pe(t+n)}ab`,`${pe(-t*n)}ab`,`${pe(t*n)}a²b`,`${pe(t*n)}a + b`,`${pe(t*n+1)}ab`]);if(e===1){const r=i.int(2,5);return C(i,"MONOMIAL","単項式の除法",`${pe(t*r)}x² ÷ ${pe(r)}x`,`${pe(t)}x`,[`${pe(t)}x²`,`${pe(t*r)}x`,`${pe(t)}x³`,b(t),`${pe(-t)}x`])}const s=i.int(2,4);return C(i,"MONOMIAL","累乗をふくむ計算",`(−${s}a)²`,`${s*s}a²`,[`−${s*s}a²`,`${s*2}a²`,`−${s*2}a`,`${s*s}a`,`${s}a²`])}),$("POLYADD",1,6,(i,e)=>{const[t,n,s,r]=[ht(i,7),ht(i,7),ht(i,7),ht(i,7)],a=Nt([[t,"x"],[n,"y"]]),o=Nt([[s,"x"],[r,"y"]]);if(e===0)return C(i,"POLYADD","多項式の加法",`(${a}) + (${o})`,Nt([[t+s,"x"],[n+r,"y"]]),[Nt([[t+s,"x"],[n-r,"y"]]),Nt([[t-s,"x"],[n+r,"y"]]),Nt([[t+r,"x"],[n+s,"y"]]),Nt([[t*s,"x"],[n*r,"y"]]),Nt([[t+s+n+r,"xy"]])]);if(e===1)return C(i,"POLYADD","多項式の減法",`(${a}) − (${o})`,Nt([[t-s,"x"],[n-r,"y"]]),[Nt([[t-s,"x"],[n+r,"y"]]),Nt([[t+s,"x"],[n+r,"y"]]),Nt([[t+s,"x"],[n-r,"y"]]),Nt([[s-t,"x"],[r-n,"y"]]),Nt([[t-s+1,"x"],[n-r,"y"]])]);const c=i.int(2,4);return C(i,"POLYADD","計算せよ",`${c}(${a}) − (${o})`,Nt([[c*t-s,"x"],[c*n-r,"y"]]),[Nt([[c*t-s,"x"],[c*n+r,"y"]]),Nt([[c*t+s,"x"],[c*n+r,"y"]]),Nt([[c*t-s,"x"],[n-r,"y"]]),Nt([[t-s,"x"],[c*n-r,"y"]]),Nt([[c*t-c*s,"x"],[c*n-c*r,"y"]])])}),$("SOLVEFOR",4,9,(i,e)=>{const[t,n]=[i.int(2,6),i.int(2,9)];if(e===0)return C(i,"SOLVEFOR","y について解け",`${t}x + y = ${n}`,`y = −${t}x + ${n}`,[`y = ${t}x + ${n}`,`y = ${t}x − ${n}`,`y = −${t}x − ${n}`,`y = ${n}x − ${t}`],{sol:`y = −${t}x + ${n}`});if(e===1)return C(i,"SOLVEFOR","x について解け",`y = ${t}x + ${n}`,`x = (y − ${n})/${t}`,[`x = (y + ${n})/${t}`,`x = ${t}(y − ${n})`,`x = ${t}y − ${n}`,`x = y/${t} − ${n}`],{sol:`x = (y − ${n})/${t}`});const[s,r,a]=i.pick([["S = ah/2 を h について解け","h = 2S/a",["h = S/2a","h = aS/2","h = 2a/S","h = 2S − a"]],["ℓ = 2πr を r について解け","r = ℓ/2π",["r = 2πℓ","r = 2π/ℓ","r = ℓ − 2π","r = ℓ/π"]],["V = abc を c について解け","c = V/ab",["c = Vab","c = ab/V","c = V − ab","c = V/a + b"]],["m = (a + b)/2 を b について解け","b = 2m − a",["b = 2m + a","b = m/2 − a","b = (m − a)/2","b = 2(m + a)"]]]);return C(i,"SOLVEFOR","等式の変形",s,r,a,{sol:r})}),$("SIMUL",4,10,(i,e)=>{const[t,n]=[ht(i,6),ht(i,6)],s=(u,h)=>`x=${b(u)}, y=${b(h)}`,[r,a]=e===0?[1,1]:[i.int(2,4),ht(i,3)],[o,c]=e===0?[1,-1]:e===1?[1,-a]:[i.int(1,3),ht(i,4)];if(r*c-a*o===0)return C(i,"SIMUL","連立方程式を解け",`x + y = ${b(t+n)}、x − y = ${b(t-n)}`,s(t,n),[s(n,t),s(-t,n),s(t,-n),s(t+1,n-1),s(-t,-n)],{sol:s(t,n)});const l=(u,h)=>`${Nt([[u,"x"],[h,"y"]])} = ${b(u*t+h*n)}`;return C(i,"SIMUL","連立方程式を解け",`${l(r,a)}、${l(o,c)}`,s(t,n),[s(n,t),s(-t,n),s(t,-n),s(t+1,n-1),s(-t,-n),s(t+1,n+1)],{sol:s(t,n)})}),$("LINEAR",2,8,(i,e)=>{const t=ht(i,5),n=ht(i,7),s=`y = ${Nt([[t,"x"],[n,""]])}`;if(e===0){const o=i.chance(.5);return C(i,"LINEAR",o?"傾きは?":"切片は?",s,b(o?t:n),[b(o?n:t),b(-t),b(-n),b(t+n),"0"],{sol:o?`傾き ${b(t)}`:`切片 ${b(n)}`})}if(e===1){const o=ht(i,5);return C(i,"LINEAR",`x = ${b(o)} のときの y`,s,b(t*o+n),[b(t*o-n),b(t+o+n),b(-t*o+n),b(t*o+n+2),b(t*o)])}const[r,a]=[i.int(-4,0),i.int(1,5)];return C(i,"LINEAR","2点を通る直線の傾きは?",`(${b(r)}, ${b(t*r+n)}) と (${b(a)}, ${b(t*a+n)})`,b(t),[b(-t),at(1,t),b(t+1),b(t-1),b(n)],{sol:`yの増加量 ÷ xの増加量 = ${b(t)}`})}),$("LINEGRAPH",4,10,(i,e)=>{const t=i.pick(e===0?[1,2,-1]:[1,2,-1,-2,.5,-.5]),n=i.int(-3,3),s=(r,a)=>`y = ${r===.5?"x/2":r===-.5?"−x/2":`${pe(r)}x`}${a===0?"":Ie(a)}`;return C(i,"LINEGRAPH","グラフの式は?","",s(t,n),[s(-t,n),s(t,-n||2),s(t*2===1?2:t===2?1:t*2,n),s(t,n+1),s(-t,-n||1)],{fig:Mf(r=>t*r+n),sol:s(t,n)})}),$("PARALLEL",2,7,(i,e)=>{const t=i.int(7,25)*5;if(t===90)return C(i,"PARALLEL","ℓ ∥ m のとき x は?","",90,[45,60,180,100],{fig:Lo(90,!1),unit:"°",sol:"同位角は等しい → 90°"});if(e===0)return C(i,"PARALLEL","ℓ ∥ m のとき x は?","",t,[180-t,90,t+10,360-t,Math.abs(90-t)],{fig:Lo(t,!1),unit:"°",sol:`同位角は等しい → ${t}°`});if(e===1)return C(i,"PARALLEL","ℓ ∥ m のとき x は?","",t,[180-t,90,t-10,360-t],{fig:Lo(t,!0),unit:"°",sol:`錯角は等しい → ${t}°`});const[n,s,r]=i.pick([["平行線の同位角は?","等しい",["和が180°","和が90°","差が90°"]],["平行線の錯角は?","等しい",["和が180°","和が90°","差が90°"]],["対頂角は?","等しい",["和が180°","和が90°","和が360°"]],["平行線の同側内角の和は?","180°",["90°","360°","等しいだけ"]]]);return C(i,"PARALLEL","角の性質",n,s,r,{sol:s})}),$("POLYGON",3,8,(i,e)=>{const t=i.pick([5,6,8,9,10,12]);return e===0?C(i,"POLYGON","内角の和は?",`${pr[t]}角形`,180*(t-2),[180*t,180*(t-1),360,180*(t-3)],{unit:"°",sol:`180 × (${t} − 2) = ${180*(t-2)}°`}):e===1?C(i,"POLYGON","1つの外角は?",`正${pr[t]}角形`,360/t,[180-360/t,360/(t-1),180/t,360/t+10].map(Math.round),{unit:"°",sol:`360 ÷ ${t} = ${360/t}°`}):C(i,"POLYGON","正何角形?",`1つの外角が ${360/t}°`,`正${pr[t]}角形`,Object.values(pr).map(n=>`正${n}角形`),{sol:`360 ÷ ${360/t} = ${t} → 正${pr[t]}角形`})}),$("CONGRUENT",3,8,(i,e)=>{const t=["3組の辺がそれぞれ等しい","2組の辺とその間の角がそれぞれ等しい","1組の辺とその両端の角がそれぞれ等しい"],n=["3組の角がそれぞれ等しい","2組の辺と1つの角がそれぞれ等しい","2組の角がそれぞれ等しい","1組の辺と1つの角がそれぞれ等しい"];if(e===0){const o=i.chance(.5),c=o?i.pick(t):i.pick(n);return bc("CONGRUENT","三角形の合同条件?",c,o,o?"合同条件である":"合同条件ではない")}if(e===1){const o=i.pick(n);return C(i,"CONGRUENT","合同条件でないものは?","三角形の合同条件",o,t,{sol:o})}const[s,r,a]=i.pick([["直角三角形の合同条件は「斜辺と1つの鋭角」ともう1つは?","斜辺と他の1辺",["3組の角","2つの鋭角","直角と1つの鋭角"]],["二等辺三角形の2つの底角は?","等しい",["和が90°","和が180°","差が90°"]],["正三角形の1つの内角は?","60°",["45°","90°","30°","120°"]],["二等辺三角形の頂角の二等分線は底辺を?","垂直に2等分する",["3等分する","ななめに2等分する","交わらない"]],["証明で、最初から分かっていることを何という?","仮定",["結論","定理","定義"]],["証明で、示したいことがらを何という?","結論",["仮定","定理","定義"]]]);return C(i,"CONGRUENT","図形の性質",s,r,a,{sol:r})}),$("ISOSCELES",3,8,(i,e)=>{const t=i.int(5,16)*5,n=180-t*2;return n<=0?C(i,"ISOSCELES","正三角形の1つの角は?","",60,[45,90,30,120],{unit:"°",sol:"60°"}):e===0?C(i,"ISOSCELES","頂角 x は?","",n,[180-t,t,90-t>0?90-t:t+10,n+10],{fig:Ru("x",`${t}°`),unit:"°",sol:`180 − ${t} × 2 = ${n}°`}):e===1&&n%2===0?C(i,"ISOSCELES","底角 x は?","",t,[n,180-n,t+10,t-5],{fig:Ru(`${n}°`,"x"),unit:"°",sol:`(180 − ${n}) ÷ 2 = ${t}°`}):C(i,"ISOSCELES","底角の外角は?",`底角 ${t}° の二等辺三角形`,180-t,[t,n,180-n,360-t],{unit:"°",sol:`180 − ${t} = ${180-t}°`})}),$("PARALLELOGRAM",4,9,(i,e)=>{const t=i.int(8,28)*5;if(e===0)return C(i,"PARALLELOGRAM","平行四辺形 ∠A の対角は?",`∠A = ${t}°`,t,[180-t,90,360-t,t+10],{unit:"°",sol:`対角は等しい → ${t}°`});if(e===1)return C(i,"PARALLELOGRAM","平行四辺形 ∠A のとなりの角は?",`∠A = ${t}°`,180-t,[t,90,360-t,190-t],{unit:"°",sol:`180 − ${t} = ${180-t}°`});const[n,s]=i.pick([["平行四辺形で、4つの角がすべて等しいと?","長方形"],["平行四辺形で、4つの辺がすべて等しいと?","ひし形"],["平行四辺形で、対角線の長さが等しいと?","長方形"],["平行四辺形で、対角線が垂直に交わると?","ひし形"],["長方形でもひし形でもある四角形は?","正方形"]]);return C(i,"PARALLELOGRAM","特別な平行四辺形",n,s,["長方形","ひし形","正方形","台形"],{sol:s})}),$("PROBABILITY",3,10,(i,e)=>{if(e===0){const[s,r,a]=i.pick([["さいころ1個で偶数の目",3,6],["さいころ1個で3の倍数の目",2,6],["さいころ1個で5以上の目",2,6],["さいころ1個で1の目",1,6],["コイン1枚で表",1,2],["1〜10のカードから素数を引く",4,10],["ジョーカーなし52枚からハートを引く",13,52]]);return C(i,"PROBABILITY","確率は?",s,at(r,a),[at(a-r,a),at(1,a),at(r+1,a),at(r,a+2),"1/3","1/4","2/3","1/6","3/4"])}if(e===1){const[s,r,a]=i.pick([["コイン2枚でどちらも表",1,4],["コイン2枚で1枚だけ表",2,4],["コイン3枚ですべて表",1,8],["コイン3枚で少なくとも1枚は表",7,8],["赤3個・白2個の袋から1個で赤",3,5],["赤3個・白2個の袋から同時に2個で両方赤",3,10]]);return C(i,"PROBABILITY","確率は?",s,at(r,a),[at(a-r,a),at(1,a),at(r+1,a+1),at(1,2),at(1,3),at(2,3)])}const[t,n]=i.pick([["さいころ2個で和が7",ws((s,r)=>s+r===7)],["さいころ2個で同じ目",ws((s,r)=>s===r)],["さいころ2個で和が10以上",ws((s,r)=>s+r>=10)],["さいころ2個で積が奇数",ws((s,r)=>s*r%2===1)],["さいころ2個で和が4以下",ws((s,r)=>s+r<=4)],["さいころ2個で少なくとも1個は6",ws((s,r)=>s===6||r===6)]]);return C(i,"PROBABILITY","確率は?",t,at(n,36),[at(n+1,36),at(n-1||5,36),at(n,12),at(36-n,36),at(1,6),at(1,12)])}),$("BOXPLOT",4,9,(i,e)=>{const t=i.int(1,3),n=t+i.int(1,3),s=n+i.int(1,3),r=s+i.int(1,3),a=r+i.int(1,3),o=ap(t,n,s,r,a,0,16,2),[c,l]=Xa(e,["中央値",s],["範囲",a-t],["四分位範囲",r-n]);return C(i,"BOXPLOT",`${c}は?`,"",l,[t,n,s,r,a,a-t,r-n],{fig:o,sol:`${c} = ${l}`})})],tm=[$("EXPAND",1,6,(i,e)=>{const[t,n]=[ht(i,7),ht(i,7)],s=(a,o)=>bn([{coef:1,pow:2},{coef:a,pow:1},{coef:o,pow:0}]);if(e===0)return C(i,"EXPAND","展開せよ",`${ts(t)}${ts(n)}`,s(t+n,t*n),[s(t*n,t+n),s(t+n,-t*n),s(t-n,t*n),s(t+n,t+n),s(-t-n,t*n)]);if(e===1)return C(i,"EXPAND","展開せよ",`${ts(t)}²`,s(2*t,t*t),[s(t,t*t),s(2*t,-t*t),s(0,t*t),s(2*t,2*t),s(-2*t,t*t)]);const r=Math.abs(t);return C(i,"EXPAND","展開せよ",`(x + ${r})(x − ${r})`,s(0,-r*r),[s(0,r*r),s(2*r,r*r),s(-2*r,r*r),s(0,-2*r),s(2*r,-r*r)])}),$("QUAD",2,9,Zp),$("FACTOR",3,8,(i,e)=>{const t=i.int(2,9);if(e===0){const s=i.int(2,6);return C(i,"FACTOR","因数分解せよ",`${t}x² + ${t*s}x`,`${t}x(x + ${s})`,[`${t}(x² + ${s})`,`x(${t}x + ${s})`,`${t}x(x + ${t*s})`,`${t*s}x(x + 1)`],{sol:`${t}x(x + ${s})`})}if(e===1)return C(i,"FACTOR","因数分解せよ",`x² − ${t*t}`,`(x + ${t})(x − ${t})`,[`(x − ${t})²`,`(x + ${t})²`,`(x + ${t*t})(x − 1)`,`x(x − ${t*t})`],{sol:`(x + ${t})(x − ${t})`});const n=i.chance(.5)?1:-1;return C(i,"FACTOR","因数分解せよ",`x² ${n>0?"+":"−"} ${2*t}x + ${t*t}`,`(x ${n>0?"+":"−"} ${t})²`,[`(x ${n>0?"−":"+"} ${t})²`,`(x + ${t})(x − ${t})`,`(x ${n>0?"+":"−"} ${t*t})²`,`(x ${n>0?"+":"−"} ${2*t})(x ${n>0?"+":"−"} ${t})`],{sol:`(x ${n>0?"+":"−"} ${t})²`})}),$("SQRT",2,8,Kp),$("ROOTCALC",3,9,(i,e)=>{if(e===0){const a=i.int(2,12);return i.chance(.5)?C(i,"ROOTCALC","平方根は?",`${a*a} の平方根`,`±${a}`,[`${a}`,`−${a}`,`±${a*a}`,`±√${a}`,`${a*2}`],{sol:`±${a}`}):C(i,"ROOTCALC","値は?",`√${a*a}`,a,[-a,a*a,a*2,a+1],{sol:`√${a*a} = ${a}`})}const t=i.pick([2,3,5,6,7]),[n,s]=[i.int(1,4),i.int(1,4)];if(e===1)return i.chance(.5)?C(i,"ROOTCALC","計算せよ",`√${n*n*t} + √${s*s*t}`,zt(t,n+s),[zt(t*2,n+s),zt(t,n*s),zt(t,n+s+1),`√${(n*n+s*s)*t}`,zt(t,Math.abs(n-s)||5)]):C(i,"ROOTCALC","計算せよ",`√${n*n*t} × √${t}`,n*t,[zt(t,n),n*t*t,n+t,n*t+1,zt(t,n*t)]);if(i.chance(.5))return C(i,"ROOTCALC","分母を有理化せよ",`${n*t}/√${t}`,zt(t,n),[zt(t,n*t),`${n}/${t}`,String(n),`√${t}/${n}`,zt(t,n+1)],{sol:`${n*t}/√${t} = ${zt(t,n)}`});const r=i.int(2,5);return C(i,"ROOTCALC","計算せよ",`(√${t} + ${r})(√${t} − ${r})`,b(t-r*r),[b(t+r*r),b(r*r-t),b(t-r),zt(t,2),b(t*t-r*r)])}),$("ROOTSIZE",3,7,(i,e)=>{if(e===0){const s=i.pick([10,20,30,40,50,60,70,80,90]),r=Math.round(Math.sqrt(s));return C(i,"ROOTSIZE","いちばん近い整数は?",`√${s}`,r,[r+1,r-1,r+2,Math.round(s/2)])}const t=i.int(2,7),n=t*t+i.pick([-2,-1,1,2]);return Gn("ROOTSIZE","大きいほうは?","どっち?",String(t),`√${n}`,t*t>n,`${t} = √${t*t} と √${n}`)}),$("QUADEQ",4,10,(i,e)=>{const t=i.int(2,9);if(e===0)return C(i,"QUADEQ","2次方程式を解け",`x² = ${t*t}`,`x = ±${t}`,[`x = ${t}`,`x = −${t}`,`x = ±${t*t}`,`x = ±√${t}`,`x = ${t*t/2}`],{sol:`x = ±${t}`});const[n,s]=[ht(i,7),ht(i,7)],r=bn([{coef:1,pow:2},{coef:-(n+s),pow:1},{coef:n*s,pow:0}]),a=(h,f)=>h===f?`x = ${b(h)}`:`x = ${b(Math.min(h,f))}, ${b(Math.max(h,f))}`;if(e===1)return C(i,"QUADEQ","2次方程式を解け",`${r} = 0`,a(n,s),[a(-n,-s),a(n,-s),a(-n,s),a(n+1,s),a(n*s,n+s)],{sol:a(n,s)});const o=i.pick([1,3,5,7]),c=i.pick([1,-1]),l=o*o-4*c,u=(h,f)=>`x = (${b(-h)} ± √${f})/2`;return C(i,"QUADEQ","解の公式で解け",`x² + ${o===1?"":o}x ${c>0?"+":"−"} 1 = 0`,u(o,l),[u(-o,l),u(o,o*o+4*c),u(o,l+4),`x = ${b(-o)} ± √${l}`],{sol:u(o,l)})}),$("PARABOLA",4,10,(i,e)=>{const t=i.pick([1,2,3,-1,-2]),n=`y = ${pe(t)}x²`;if(e===0){const c=ht(i,4);return C(i,"PARABOLA",`x = ${b(c)} のときの y`,n,b(t*c*c),[b(-t*c*c),b(t*c*2),b(t*c),b(t*c*c+t)])}if(e===1){const[c,l]=[i.int(1,3),i.int(4,6)];return C(i,"PARABOLA",`xが${c}から${l}まで増えるときの変化の割合`,n,b(t*(c+l)),[b(t*(l-c)),b(t*c*l),b(t),b(-t*(c+l)),b(t*(c+l)+t)],{sol:`a(p + q) = ${b(t*(c+l))}`})}if(i.chance(.5)){const c=[1,2,-1,-2,.5].map(h=>h===.5?"y = x²/2":`y = ${pe(h)}x²`),l=i.pick([1,2,-1,.5]),u=is(4);return C(i,"PARABOLA","グラフの式は?","",l===.5?"y = x²/2":`y = ${pe(l)}x²`,c,{fig:Ht(u.base,u.plot(h=>l*h*h)),sol:l===.5?"y = x²/2":`y = ${pe(l)}x²`})}const[s,r]=[-i.int(1,3),i.int(2,4)],a=Math.max(s*s,r*r)*t,o=(c,l)=>`${b(Math.min(c,l))} ≦ y ≦ ${b(Math.max(c,l))}`;return C(i,"PARABOLA",`${b(s)} ≦ x ≦ ${r} のときの y の変域`,n,o(0,a),[o(t*s*s,t*r*r),o(-a,a),o(0,t*r),o(t*s,t*r),o(0,a+t)],{sol:o(0,a)})}),$("SIMILAR",3,9,(i,e)=>{const[t,n]=i.pick([[1,2],[2,3],[3,4],[1,3],[2,5],[3,5]]);if(e===0){const r=i.int(2,5),a=t*r;return C(i,"SIMILAR","x の長さは?",`△ABC ∽ △DEF、相似比 ${t}:${n}、AB = ${a}、DE = x`,n*r,[a+n,t*r*n,n*r+t,a],{sol:`x = ${a} × ${n}/${t} = ${n*r}`})}if(e===1){const r=i.chance(.5),a=(o,c)=>`${o}:${c}`;return C(i,"SIMILAR",r?"面積比は?":"体積比は?",`相似比 ${t}:${n}`,r?a(t*t,n*n):a(t**3,n**3),[a(t,n),a(t*2,n*2),a(t*t,n*n),a(t**3,n**3),a(t*3,n*3)],{sol:r?`${t}²:${n}² = ${t*t}:${n*n}`:`${t}³:${n}³ = ${t**3}:${n**3}`})}const s=i.int(3,9)*2;return C(i,"SIMILAR","MN の長さは?",`△ABCで M, N は AB, AC の中点。BC = ${s}`,s/2,[s,s*2,s/2+1,s-2],{sol:`中点連結定理より BC ÷ 2 = ${s/2}`})}),$("INSCRIBED",4,9,(i,e)=>{const t=i.int(5,16)*5;if(e===0)return C(i,"INSCRIBED","円周角 x は?","",t,[t*2,180-t,90-t>0?90-t:t+10,t+10],{fig:Cu(`${t*2}°`,"x"),unit:"°",sol:`中心角の半分 → ${t}°`});if(e===1)return C(i,"INSCRIBED","中心角 x は?","",t*2,[t,180-t,360-t*2,t*2+10],{fig:Cu("x",`${t}°`),unit:"°",sol:`円周角の2倍 → ${t*2}°`});const[n,s,r]=i.pick([["半円の弧に対する円周角は?","90°",["45°","60°","180°","120°"]],["同じ弧に対する円周角どうしは?","等しい",["和が90°","和が180°","2倍の関係"]],["円に内接する四角形の対角の和は?","180°",["90°","360°","270°","120°"]],["円の接線と接点を通る半径のなす角は?","90°",["45°","60°","180°","0°"]],["同じ弧に対する中心角は円周角の?","2倍",["半分","3倍","等しい"]]]);return C(i,"INSCRIBED","円の性質",n,s,r,{sol:s})}),$("PYTHAGORAS",3,10,(i,e)=>{const t=[[3,4,5],[5,12,13],[6,8,10],[8,15,17],[9,12,15]];if(e===0){const[o,c,l]=i.pick(t);return C(i,"PYTHAGORAS","斜辺 x は?","",l,[o+c,l+1,l-1,Math.round(o*c/2)],{fig:Pu(String(o),String(c),"x"),sol:`√(${o}² + ${c}²) = ${l}`})}if(e===1){const[o,c]=[i.int(1,6),i.int(1,6)];return C(i,"PYTHAGORAS","斜辺 x は?","",zt(o*o+c*c),[String(o+c),zt(o*o+c*c+1),zt(Math.abs(o*o-c*c)||2),String(o*o+c*c),zt(o*c*2)],{fig:Pu(String(o),String(c),"x"),sol:`√(${o}² + ${c}²) = ${zt(o*o+c*c)}`})}const n=i.int(2,6),[s,r,a]=i.pick([[`1辺${n}の正方形の対角線`,zt(2,n),[String(n*2),zt(3,n),String(n*n),zt(2,n*2)]],[`1辺${n*2}の正三角形の高さ`,zt(3,n),[String(n),zt(2,n),zt(3,n*2),String(n*2)]],[`原点と点(${n}, ${n+1})の距離`,zt(n*n+(n+1)**2),[String(n*2+1),zt(n*n+(n+1)**2+1),zt(2*n+1),String(n*n+(n+1)**2)]],[`たて${n}・横${n}・高さ${n}の立方体の対角線`,zt(3,n),[zt(2,n),String(n*3),zt(3,n*n),String(n*n)]]]);return C(i,"PYTHAGORAS","長さを求めよ",s,r,a,{sol:r})}),$("SAMPLING",3,7,(i,e)=>{if(e===0){const[r,a]=i.pick([["学校の健康診断",!0],["国勢調査",!0],["テレビの視聴率調査",!1],["缶詰の品質検査",!1],["世論調査",!1],["入学試験",!0],["電球の寿命の検査",!1]]);return Gn("SAMPLING","全数調査? 標本調査?",r,"全数調査","標本調査",a,a?"全数調査":"標本調査")}const t=i.int(3,9)*100,n=i.pick([20,40,50]),s=i.int(2,n/5);return C(i,"SAMPLING","全体ではおよそ何個?",`${t}個から${n}個を取り出すと不良品が${s}個`,t*s/n,[t-s,t*s/n+10,t*s/100,t/n,s*10].map(Math.round),{unit:"個",sol:`${t} × ${s}/${n} = ${t*s/n}個`})}),$("CLEVER",2,6,(i,e)=>{const t=i.int(1,4);if(e===0)return C(i,"CLEVER","くふうして計算",`${100+t} × ${100-t}`,1e4-t*t,[1e4+t*t,1e4-t,1e4-2*t,1e4],{sol:`100² − ${t}² = ${1e4-t*t}`});if(e===1)return C(i,"CLEVER","くふうして計算",`${100-t}²`,(100-t)**2,[1e4-t*t,1e4+t*t,(100-t)**2+100,1e4-100*t],{sol:`100² − 2×100×${t} + ${t}² = ${(100-t)**2}`});const n=100-2*t;return C(i,"CLEVER",`x = ${n} のときの値`,`x² + ${4*t}x + ${4*t*t}`,1e4,[n*n,1e4+4*t*t,9600,1e4-4*t],{sol:`(x + ${2*t})² = 100² = 10000`})})],em=[[...Qp,...Rp],jp,[...tm,...Lp]],Tc=(i,e,t,n)=>i===0?e:i===1?t:n,je=i=>i<=1?1:i*je(i-1),Ks=(i,e)=>je(i)/je(i-e),Be=(i,e)=>je(i)/(je(e)*je(i-e)),He=(i,e,t)=>bn([{coef:i,pow:2},{coef:e,pow:1},{coef:t,pow:0}]),mr=(i,e)=>`(${Nt([[i,"x"],[e,""]])})`,Pt=(i,e)=>`(${typeof i=="number"?b(i):i}, ${typeof e=="number"?b(e):e})`;function he(i,e,t,n){const[s,r,a]=i.pick(n);return C(i,e,t,s,r,a,{sol:s.includes("=")||s.length>16?r:`${s} = ${r}`})}const Ur={sin:{0:"0",30:"1/2",45:"1/√2",60:"√3/2",90:"1",120:"√3/2",135:"1/√2",150:"1/2",180:"0"},cos:{0:"1",30:"√3/2",45:"1/√2",60:"1/2",90:"0",120:"−1/2",135:"−1/√2",150:"−√3/2",180:"−1"},tan:{0:"0",30:"1/√3",45:"1",60:"√3",120:"−√3",135:"−1",150:"−1/√3",180:"0"}},nm=[...new Set([...Object.values(Ur.sin),...Object.values(Ur.cos),...Object.values(Ur.tan)])],Lu=i=>i.startsWith("−")?i.slice(1):i==="0"?"1":`−${i}`;function im(i,e){const t=i.pick(["sin","cos","tan"]),n=Object.keys(Ur[t]).map(Number).filter(o=>e===0?o<=90:!0),s=i.pick(n),r=Ur[t][s],a=i.shuffle(nm.filter(o=>o!==r&&o!==Lu(r))).slice(0,2);return C(i,"TRIG","値を求めよ",`${t} ${s}°`,r,[Lu(r),...a])}function sm(i,e,t){const n=is(5);return Ht(n.base,n.plot(s=>i*(s-e)**2+t),Oi(...n.at(e,t),mn,4))}const rm=[$("EXPAND",1,5,(i,e)=>{const[t,n,s,r]=[i.int(2,4),ht(i,5),i.int(1,3),ht(i,5)];if(e===0)return C(i,"EXPAND","展開せよ",`${mr(t,n)}${mr(s,r)}`,He(t*s,t*r+n*s,n*r),[He(t*s,t*r-n*s,n*r),He(t*s,n+r,n*r),He(t+s,t*r+n*s,n*r),He(t*s,t*r+n*s,-n*r),He(t*s,t*r+n*s,n+r)]);if(e===1)return C(i,"EXPAND","展開せよ",`${mr(t,n)}²`,He(t*t,2*t*n,n*n),[He(t*t,t*n,n*n),He(t*t,2*t*n,-n*n),He(t,2*t*n,n*n),He(t*t,0,n*n),He(t*t,-2*t*n,n*n)]);const a=Math.abs(n);return C(i,"EXPAND","展開せよ",`(x + ${a})(x² − ${a}x + ${a*a})`,`x³ + ${a**3}`,[`x³ − ${a**3}`,`x³ + ${a*a}`,`x³ + ${3*a}x + ${a**3}`,`x³ + ${a}x² + ${a**3}`],{sol:`x³ + ${a**3}`})}),$("TASUKI",3,9,(i,e)=>{const t=i.pick(e===0?[2,3]:[2,3,5]),[n,s]=[ht(i,5),ht(i,5)],r=e===2?i.pick([2,3]):1;if(Si(t,Math.abs(n))!==1||Si(r,Math.abs(s))!==1||t===r&&n===s)return C(i,"TASUKI","因数分解せよ","2x² + 7x + 3","(2x + 1)(x + 3)",["(2x + 3)(x + 1)","(2x − 1)(x − 3)","(x + 1)(x + 3)","2(x + 1)(x + 3)"],{sol:"(2x + 1)(x + 3)"});const a=(o,c,l,u)=>`${mr(o,c)}${mr(l,u)}`;return C(i,"TASUKI","因数分解せよ",He(t*r,t*s+n*r,n*s),a(t,n,r,s),[a(t,s,r,n),a(t,-n,r,-s),a(t,n,r,-s),a(t,-n,r,s),a(r,n,t,s)].filter(o=>o!==a(t,n,r,s)),{sol:a(t,n,r,s)})}),$("REAL",1,5,(i,e)=>{const[t,n]=[i.int(2,9),i.int(2,9)];if(e===0)return C(i,"REAL","値を求めよ",`|${b(-t)}| + |${n} − ${n+t}|`,2*t,[0,t,2*t+n,t-n,2*t+1]);if(e===1)return he(i,"REAL","値を求めよ",[[`√((−${t})²)`,String(t),[`−${t}`,`±${t}`,String(t*t),`√${t}`]],["0.333… を分数で","1/3",["3/10","33/100","1/30","3/100"]],["0.999… の値","1",["0.9","9/10","99/100","0"]],[`|x| = ${t} の解`,`x = ±${t}`,[`x = ${t}`,`x = −${t}`,`x = ${t*t}`,"解なし"]],[`|x| < ${t} の解`,`−${t} < x < ${t}`,[`x < ${t}`,`x < −${t}, ${t} < x`,`x > −${t}`,`0 < x < ${t}`]]]);const[s,r]=i.pick([[3,2],[5,3],[5,2],[7,5],[6,5]]);return C(i,"REAL","分母を有理化せよ",`1/(√${s} + √${r})`,s-r===1?`√${s} − √${r}`:`(√${s} − √${r})/${s-r}`,[`√${s} + √${r}`,`(√${s} + √${r})/${s+r}`,`√${s-r}`,`1/√${s+r}`,`(√${s} − √${r})/${s+r}`],{sol:s-r===1?`√${s} − √${r}`:`(√${s} − √${r})/${s-r}`})}),$("INEQUALITY",2,7,(i,e)=>{const t=ht(i,6),n=i.int(2,5)*(e===0?1:-1),s=ht(i,9),r=i.chance(.5),a=n<0,o=(l,u)=>`x ${u?">":"<"} ${b(l)}`,c=o(t,r!==a);return C(i,"INEQUALITY","不等式を解け",`${Nt([[n,"x"],[s,""]])} ${r?">":"<"} ${b(n*t+s)}`,c,[o(t,r===a),o(-t,r),o(-t,!r),o(t+1,r!==a),o(t-1,r===a)],{sol:a?`負の数で割ると向きが変わる → ${c}`:c})}),$("SET",2,7,(i,e)=>{const[t,n,s]=[i.int(3,12),i.int(2,8),i.int(3,12)];if(e===0)return C(i,"SET","n(A ∪ B) は?","",t+n+s,[t+s,t+n*2+s,n,t+n],{fig:vu(String(t),String(n),String(s)),sol:`${t} + ${n} + ${s} = ${t+n+s}`});if(e===1)return C(i,"SET","n(A ∩ B) は?",`n(A) = ${t+n}、n(B) = ${s+n}、n(A ∪ B) = ${t+n+s}`,n,[t+s,n+1,n-1,t+n+s,Math.abs(t-s)||9],{sol:`${t+n} + ${s+n} − ${t+n+s} = ${n}`});const r=i.int(2,9);return C(i,"SET","A にも B にも属さない要素は何個?",`全体 ${t+n+s+r}個`,r,[t+s,n,r+n,r+1,t+n+s],{fig:vu(String(t),String(n),String(s),"?"),sol:`${t+n+s+r} − ${t+n+s} = ${r}`})}),$("LOGIC",3,9,(i,e)=>{if(e===0)return he(i,"LOGIC","命題「p ⇒ q」について",[["逆は?","q ⇒ p",["p̄ ⇒ q̄","q̄ ⇒ p̄","p ⇒ q̄"]],["裏は?","p̄ ⇒ q̄",["q ⇒ p","q̄ ⇒ p̄","p̄ ⇒ q"]],["対偶は?","q̄ ⇒ p̄",["q ⇒ p","p̄ ⇒ q̄","q̄ ⇒ p"]],["真偽が必ず一致するのは?","対偶",["逆","裏","否定"]]]);if(e===1){const[r,a,o]=i.pick([["x = 2 ⇒ x² = 4",!0,"真"],["x² = 4 ⇒ x = 2",!1,"偽(反例 x = −2)"],["x > 3 ⇒ x > 1",!0,"真"],["x > 1 ⇒ x > 3",!1,"偽(反例 x = 2)"],["ab = 0 ⇒ a = 0",!1,"偽(反例 a = 1, b = 0)"],["n が 4 の倍数 ⇒ n は偶数",!0,"真"],["x + y が偶数 ⇒ x, y はともに偶数",!1,"偽(反例 x = y = 1)"],["正方形 ⇒ ひし形",!0,"真"]]);return Gn("LOGIC","命題の真偽は?",r,"真","偽",a,o)}const t=["必要十分条件","必要条件だが十分条件でない","十分条件だが必要条件でない","必要条件でも十分条件でもない"],[n,s]=i.pick([["x = 2 は x² = 4 であるための",2],["x² = 4 は x = 2 であるための",1],["x > 0 は x² > 0 であるための",2],["△ABC が正三角形であることは二等辺三角形であるための",2],["x = y は x² = y² であるための",2],["ab > 0 は a > 0 かつ b > 0 であるための",1],["x + y > 0 は xy > 0 であるための",3],["2x = 6 は x = 3 であるための",0]]);return C(i,"LOGIC","何条件?",n,t[s],t,{sol:t[s]})}),$("VERTEX",3,8,(i,e)=>{const[t,n]=[ht(i,4),ht(i,4)],s=e===2?i.pick([2,-1,-2]):1,r=[Pt(-t,n),Pt(t,-n),Pt(n,t),Pt(-t,-n),Pt(t,n+1)];return e===0?C(i,"VERTEX","頂点の座標は?",`y = (x${Ie(-t)})²${Ie(n)}`,Pt(t,n),r,{sol:Pt(t,n)}):e===1?C(i,"VERTEX","頂点の座標は?",`y = ${He(1,-2*t,t*t+n)}`,Pt(t,n),r,{sol:`y = (x${Ie(-t)})²${Ie(n)} より ${Pt(t,n)}`}):C(i,"VERTEX","軸の方程式は?",`y = ${He(s,-2*s*t,s*t*t+n)}`,`x = ${b(t)}`,[`x = ${b(-t)}`,`x = ${b(2*t)}`,`y = ${b(n)}`,`x = ${b(n===t?n+1:n)}`,`x = ${b(t+1)}`],{sol:`x = ${b(t)}`})}),$("QGRAPH",4,9,i=>{const e=i.pick([1,-1]),[t,n]=[i.int(-2,2),i.int(-2,2)],s=(r,a,o)=>`y = ${r<0?"−":""}${a===0?"x²":`(x${Ie(-a)})²`}${o===0?"":Ie(o)}`;return C(i,"QGRAPH","グラフの式は?","",s(e,t,n),[s(-e,t,n),s(e,-t||1,n),s(e,t,-n||1),s(e,n===t?t+1:n,t===n?n-1:t),s(-e,-t||2,n)],{fig:sm(e,t,n),sol:s(e,t,n)})}),$("QMAXMIN",5,10,(i,e)=>{const[t,n]=[i.int(-2,3),ht(i,5)];if(e===0){const h=i.pick([1,2,-1,-2]);return C(i,"QMAXMIN",h>0?"最小値は?":"最大値は?",`y = ${pe(h)}(x${Ie(-t)})²${Ie(n)}`,b(n),[b(t),b(-n),b(n+h),b(-t),"なし"],{sol:`x = ${b(t)} で ${b(n)}`})}const s=t-i.int(1,2),r=t+i.int(2,3),a=h=>(h-t)**2+n;if(e===1)return C(i,"QMAXMIN",`${b(s)} ≦ x ≦ ${b(r)} での最大値`,`y = (x${Ie(-t)})²${Ie(n)}`,b(Math.max(a(s),a(r))),[b(n),b(Math.min(a(s),a(r))),b(Math.max(a(s),a(r))+1),b(a(r+1))],{sol:`x = ${b(a(s)>a(r)?s:r)} で最大`});const[o,c]=[i.int(-5,5),i.int(-4,6)],l=o*o-4*c,u=l>0?"2個":l===0?"1個":"0個";return C(i,"QMAXMIN","x軸との共有点の個数は?",`y = ${He(1,o,c)}`,u,["0個","1個","2個","3個"],{sol:`D = ${b(l)} より ${u}`})}),$("QINEQ",5,10,(i,e)=>{let[t,n]=[i.int(-5,4),i.int(-4,6)];t===n&&(n+=2),[t,n]=[Math.min(t,n),Math.max(t,n)];const s=He(1,-(t+n),t*n),r=`${b(t)} < x < ${b(n)}`,a=`x < ${b(t)}, ${b(n)} < x`;if(e<2){const o=e===0?!0:i.chance(.5);return C(i,"QINEQ","2次不等式を解け",`${s} ${o?"<":">"} 0`,o?r:a,[o?a:r,`${b(-n)} < x < ${b(-t)}`,`x < ${b(-n)}, ${b(-t)} < x`,`x < ${b(n)}`,`x > ${b(t)}`],{sol:`(x${Ie(-t)})(x${Ie(-n)}) より ${o?r:a}`})}return he(i,"QINEQ","2次不等式を解け",[["x² + 1 > 0","すべての実数",["解なし","x > 1","x < −1, 1 < x","x ≠ 0"]],["x² + 1 < 0","解なし",["すべての実数","−1 < x < 1","x < −1","x = 0"]],["(x − 2)² > 0","2 以外のすべての実数",["すべての実数","解なし","x > 2","x = 2"]],["(x − 2)² ≦ 0","x = 2",["解なし","すべての実数","x ≦ 2","2 以外のすべての実数"]]])}),$("TRIG",2,8,im),$("TRIGREL",4,9,(i,e)=>{const[t,n,s]=i.pick([[3,4,5],[5,12,13],[8,15,17]]);return e===0?C(i,"TRIGREL","θ が鋭角のとき cos θ は?",`sin θ = ${t}/${s}`,at(n,s),[at(t,s),at(t,n),at(s,n),at(n,t),at(s-t,s)],{sol:`sin²θ + cos²θ = 1 より ${at(n,s)}`}):e===1?C(i,"TRIGREL","θ が鈍角のとき cos θ は?",`sin θ = ${t}/${s}`,`−${n}/${s}`,[at(n,s),`−${t}/${s}`,`−${t}/${n}`,at(t,n)],{sol:`鈍角では cos θ < 0 → −${n}/${s}`}):he(i,"TRIGREL","等しいものは?",[["sin(90° − θ)","cos θ",["sin θ","−cos θ","−sin θ","tan θ"]],["cos(90° − θ)","sin θ",["cos θ","−cos θ","−sin θ","tan θ"]],["sin(180° − θ)","sin θ",["−sin θ","cos θ","−cos θ","tan θ"]],["cos(180° − θ)","−cos θ",["cos θ","sin θ","−sin θ","tan θ"]],["tan(180° − θ)","−tan θ",["tan θ","1/tan θ","−1/tan θ","sin θ"]],["1 + tan²θ","1/cos²θ",["1/sin²θ","cos²θ","sin²θ","1"]]])}),$("SINECOS",5,10,(i,e)=>{if(e===0){const a=i.int(2,8);return C(i,"SINECOS","外接円の半径 R は?",`a = ${a}、A = 30°`,a,[a*2,a/2,a*4,a+1].map(o=>String(o)),{sol:`a/sin A = 2R より R = ${a}`})}if(e===1){const[a,o]=i.pick([[3,4],[2,3],[4,5],[3,5],[5,8],[3,8]]),c=a*a+o*o-a*o;return C(i,"SINECOS","a の長さは?",`b = ${a}、c = ${o}、A = 60°`,zt(c),[zt(a*a+o*o),zt(a*a+o*o+a*o),String(a+o),zt(c+1),String(c)],{sol:`a² = ${a}² + ${o}² − 2·${a}·${o}·cos 60° = ${c}`})}const[t,n]=[i.int(2,6)*2,i.int(3,9)],s=i.pick([30,150,90]),r=s===90?t*n/2:t*n/4;return C(i,"SINECOS","△ABC の面積は?",`b = ${t}、c = ${n}、A = ${s}°`,String(r),[String(t*n),String(t*n/2===r?t*n*2:t*n/2),String(r+1),`${t*n/4}√3`],{sol:`1/2 · ${t} · ${n} · sin ${s}° = ${r}`})}),$("DATA",3,9,(i,e)=>{if(e===0){const t=[[[1,2,3,4,5],3,2],[[2,4,6,8],5,5],[[2,4,4,4,5,5,7,9],5,4],[[3,3,5,7,7],5,3.2],[[1,5,5,9],5,8],[[4,6,8],6,2.6667]],[n,,s]=i.pick(t.filter(r=>Number.isInteger(r[2])));return C(i,"DATA","分散は?",n.join("、"),s,[s+1,s*2,Math.round(Math.sqrt(s)*10)/10===Math.sqrt(s)?Math.sqrt(s):s+2,s-1],{sol:`偏差の2乗の平均 = ${s}`})}if(e===1){const t=i.int(0,2),n=()=>i.next(),s=Array.from({length:16},()=>{const a=.08+n()*.84,o=(n()-.5)*.24;return[a,t===0?Math.min(.95,Math.max(.05,a+o)):t===1?Math.min(.95,Math.max(.05,1-a+o)):.08+n()*.84]}),r=["正の相関","負の相関","相関はほとんどない"][t];return C(i,"DATA","この散布図の相関は?","",r,["正の相関","負の相関","相関はほとんどない","完全な比例"],{fig:op(s),sol:r})}return he(i,"DATA","データの分析",[["標準偏差は分散の何?","正の平方根",["2乗","半分","逆数","2倍"]],["相関係数 r のとりうる範囲は?","−1 ≦ r ≦ 1",["0 ≦ r ≦ 1","−1 < r < 1","r ≧ 0","すべての実数"]],["分散 9 のときの標準偏差は?","3",["81","4.5","9","√3"]],["全データに 5 を足すと分散は?","変わらない",["5 増える","25 増える","5 倍になる"]],["全データを 2 倍すると標準偏差は?","2 倍になる",["4 倍になる","変わらない","2 増える"]],["第1四分位数から第3四分位数までの幅は?","四分位範囲",["範囲","分散","標準偏差","中央値"]]])})];function am(i,e){const t=Math.min(170/i,100/e),n=120-i*t/2,s=70+e*t/2,r=[];for(let a=0;a<=i;a++)r.push(te(n+a*t,s,n+a*t,s-e*t));for(let a=0;a<=e;a++)r.push(te(n,s-a*t,n+i*t,s-a*t));return r.push(Oi(n,s,mn,5),Oi(n+i*t,s-e*t,Vt,5),Yt(n-12,s+4,"A",13,mn),Yt(n+i*t+12,s-e*t-2,"B",13,Vt)),Ht(...r)}const gr=i=>{let e=0;for(let t=1;t<=i;t++)i%t===0&&e++;return e},om=[$("PERM",1,6,(i,e)=>{const t=i.int(4,Tc(e,5,7,8)),n=i.int(2,3);if(e===0)return C(i,"PERM","値を求めよ",`${t}!`,je(t),[je(t-1),je(t)/2,t*t,je(t)+t,je(t+1)]);const s=e===1||i.chance(.5);return C(i,"PERM","値を求めよ",`${ds(t)}${s?"P":"C"}${ds(n)}`,s?Ks(t,n):Be(t,n),[s?Be(t,n):Ks(t,n),t*n,t**n,(s?Ks(t,n):Be(t,n))+t,je(n)])}),$("ARRANGE",3,9,(i,e)=>{const t=i.int(4,6);if(e===0)return i.chance(.5)?C(i,"ARRANGE","並び方は何通り?",`${t}人が円形に並ぶ`,je(t-1),[je(t),je(t-1)/2,t*t,je(t-2)],{unit:"通り",sol:`(${t} − 1)! = ${je(t-1)}通り`}):C(i,"ARRANGE","何通り?",`${t}人から委員長と副委員長を選ぶ`,Ks(t,2),[Be(t,2),t*2,t*t,je(t)],{unit:"通り",sol:`${t} × ${t-1} = ${Ks(t,2)}通り`});if(e===1){const[n,s]=[i.int(2,4),i.int(2,3)];return C(i,"ARRANGE","A から B への最短経路は何通り?","",Be(n+s,s),[n*s,Be(n+s,s)+n,(n+1)*(s+1),2**(n+s),Be(n+s,s)-s],{fig:am(n,s),unit:"通り",sol:`${n+s}C${s} = ${Be(n+s,s)}通り`})}return he(i,"ARRANGE","何通り?",[["a, a, b, b の4文字の並べ方","6通り",["24通り","12通り","4通り","8通り"]],["a, a, a, b, b の5文字の並べ方","10通り",["120通り","20通り","30通り","60通り"]],["3種類の文字から重複を許して4個並べる","81通り",["12通り","64通り","24通り","7通り"]],["6人を3人ずつ A, B の2部屋に分ける","20通り",["10通り","36通り","120通り","9通り"]],["異なる5個の玉でネックレス(じゅず順列)を作る","12通り",["24通り","120通り","60通り","10通り"]],["0, 1, 2, 3 から異なる3個で作る3けたの整数","18通り",["24通り","12通り","6通り","27通り"]]])}),$("PROBABILITY",3,10,(i,e)=>{if(e===0)return he(i,"PROBABILITY","確率は?",[["コインを3回投げて少なくとも1回表","7/8",["1/8","3/8","1/2","3/4"]],["さいころを2回投げて少なくとも1回は6","11/36",["1/36","1/3","25/36","1/6"]],["さいころ2個の目の和が偶数","1/2",["1/4","1/3","5/12","7/12"]],["52枚から1枚引いてハートまたは絵札","11/26",["25/52","1/4","3/13","1/2"]]]);if(e===1){const t=i.int(3,5),n=i.int(1,t-1);return C(i,"PROBABILITY","確率は?",`コインを${t}回投げて表がちょうど${n}回`,at(Be(t,n),2**t),[at(1,2**t),at(n,t),at(Be(t,n)+1,2**t),at(Be(t,n),2**(t-1)),"1/2"],{sol:`${ds(t)}C${ds(n)} × (1/2)${Xe(t)} = ${at(Be(t,n),2**t)}`})}return he(i,"PROBABILITY","確率・期待値",[["さいころ1個の出る目の期待値","7/2",["3","4","21","6"]],["赤3白2から1個ずつ2回(戻さない)。1個目が赤のとき2個目も赤","1/2",["3/5","3/10","2/5","9/25"]],["当たり2本を含む5本のくじを2人が順に引く。2人目が当たる確率","2/5",["1/4","1/5","1/10","1/2"]],["100円が確率1/2、0円が確率1/2 の期待値","50円",["100円","25円","0円","75円"]],["さいころを3回投げて1の目がちょうど1回","25/72",["1/6","5/72","1/2","25/216"]],["P(A) = 1/2、P(A ∩ B) = 1/6 のとき P_A(B)","1/3",["1/12","2/3","1/6","3"]]])}),$("INTEGER",2,8,(i,e)=>{if(e===0){const n=i.pick([12,18,24,36,48,60,72,100]);return C(i,"INTEGER","正の約数の個数は?",String(n),gr(n),[gr(n)+2,gr(n)-2,gr(n)+1,n/2],{unit:"個",sol:`${n}の正の約数は${gr(n)}個`})}if(e===1){const n=i.pick([6,7,12,13,17]),[s,r]=[i.int(3,9),i.int(3,9)];return Si(s,r)!==1?C(i,"INTEGER","余りは?","100 を 7 で割る",2,[1,3,4,5,6]):C(i,"INTEGER","最大公約数は?(互除法)",`${n*s} と ${n*r}`,n,[1,n*2,n+1,Math.abs(n*s-n*r)||n*3,n-1],{sol:`最大公約数 = ${n}`})}const t=i.int(5,31);return i.chance(.5)?C(i,"INTEGER","10進法で表すと?",`${t.toString(2)}₍₂₎`,t,[t+1,t-1,t*2,Number(t.toString(2))%97,t+2]):C(i,"INTEGER","2進法で表すと?",String(t),t.toString(2),[(t+1).toString(2),(t-1).toString(2),(t*2).toString(2),(t+2).toString(2),t.toString(3)],{sol:`${t} = ${t.toString(2)}₍₂₎`})}),$("MODULO",4,9,(i,e)=>{const t=i.pick([5,7]);if(e===0){const[n,s]=[i.int(10,40),i.int(10,40)];return C(i,"MODULO",`${t} で割った余りは?`,`${n} × ${s}`,n*s%t,[0,1,2,3,4,5,6].filter(r=>r<t))}if(e===1){const n=i.int(5,12);let s=1;for(let r=0;r<n;r++)s=s*2%t;return C(i,"MODULO",`${t} で割った余りは?`,`2${Xe(n)}`,s,[0,1,2,3,4,5,6].filter(r=>r<t))}return he(i,"MODULO","整数解 (x, y) の1つは?",[["3x + 5y = 1","(2, −1)",["(1, 1)","(−2, 1)","(3, −2)","(1, −1)"]],["2x + 7y = 1","(4, −1)",["(3, −1)","(−4, 1)","(1, 1)","(2, −1)"]],["5x − 3y = 1","(2, 3)",["(1, 2)","(3, 2)","(2, −3)","(1, 1)"]],["7x + 4y = 1","(−1, 2)",["(1, −2)","(1, 2)","(2, −3)","(−2, 3)"]]])}),$("GEOMETRY",3,9,(i,e)=>{if(e===0)return he(i,"GEOMETRY","三角形の五心",[["3本の中線の交点は?","重心",["内心","外心","垂心","傍心"]],["3つの内角の二等分線の交点は?","内心",["重心","外心","垂心","傍心"]],["3辺の垂直二等分線の交点は?","外心",["重心","内心","垂心","傍心"]],["3頂点から対辺への垂線の交点は?","垂心",["重心","内心","外心","傍心"]],["重心は中線を頂点から何対何に分ける?","2:1",["1:1","1:2","3:1","3:2"]],["内接円の中心は?","内心",["重心","外心","垂心"]]]);if(e===1){const[r,a]=i.pick([[3,2],[4,3],[5,3],[2,1],[5,4]]),o=1,c=(r+a)*o;return C(i,"GEOMETRY","BD の長さは?",`AB = ${r*2}、AC = ${a*2}、BC = ${c}。AD は∠A の二等分線`,r*o,[a*o,c/2,r*o+1,c-r].map(l=>String(l)),{sol:`BD:DC = AB:AC = ${r}:${a} より ${r*o}`})}const[t,n,s]=i.pick([[2,6,3],[3,8,4],[2,9,3],[4,6,3],[3,10,5]]);return i.chance(.5)?C(i,"GEOMETRY","PD の長さは?(方べきの定理)",`PA = ${t}、PB = ${n}、PC = ${s}`,t*n/s,[t+n-s,t*n/s+1,t*n,s].map(String),{sol:`PA·PB = PC·PD より ${t*n/s}`}):Gn("GEOMETRY","三角形はできる?",`3辺 ${t}、${s}、${n}`,"できる","できない",t+s>n&&t+n>s&&s+n>t,"最大辺 < 他の2辺の和 が条件")})];function cm(i){const e=is(4,!1),t=Math.PI/2;return Ht(e.base,e.plot(n=>2*i(n*t)),Yt(e.at(2,0)[0],80,"π",10),Yt(e.at(-2,0)[0],80,"−π",10),Yt(128,e.at(0,2)[1],"1",10))}function lm(i,e){const t=i.int(2,4),n=ht(i,5),s=i.int(-6,6),r=ht(i,9),a=[{coef:n,pow:t},{coef:s,pow:1},{coef:r,pow:0}],o=bn([{coef:t*n,pow:t-1},{coef:s,pow:0}]);return C(i,"DERIV","微分せよ",`f(x) = ${bn(a)}`,o,[bn([{coef:n,pow:t-1},{coef:s,pow:0}]),bn([{coef:t*n,pow:t-1},{coef:s,pow:0},{coef:r,pow:0}]),bn([{coef:t*n,pow:t},{coef:s,pow:0}]),bn([{coef:t*n,pow:t-1},{coef:s,pow:1}]),bn([{coef:t*n,pow:t-1},{coef:-s,pow:0}]),bn([{coef:t*n+1,pow:t-1},{coef:s,pow:0}])],{sol:`f′(x) = ${o}`})}function um(i,e){const t=i.pick(e===0?[2,10]:[2,3,5,10]),n={2:6,3:4,5:3,10:4},s=i.int(e===0?1:-2,n[t]),r=s>=0?String(t**s):`(1/${t**-s})`;return C(i,"LOG","値を求めよ",`log${ds(t)} ${r}`,b(s),[s+1,s-1,-s,s+2,s*2,t**Math.abs(s)].map(b))}const hm=[$("BINOMIAL",2,7,(i,e)=>{const t=i.int(4,6),n=i.int(1,t-1);if(e===0)return C(i,"BINOMIAL",`a${Xe(t-n)}b${Xe(n)} の係数は?`.replace("¹",""),`(a + b)${Xe(t)}`,Be(t,n),[Be(t,n)+t,t,Ks(t,n),Be(t,n)*2,n*t]);const s=i.pick([2,3]);if(e===1)return C(i,"BINOMIAL",`x${Xe(t-n)} の係数は?`.replace("¹",""),`(x + ${s})${Xe(t)}`,Be(t,n)*s**n,[Be(t,n),Be(t,n)*s,s**n,Be(t,n)*s**(t-n)===Be(t,n)*s**n?Be(t,n)*s**n+s:Be(t,n)*s**(t-n),t*s]);const r=i.int(1,4);return C(i,"BINOMIAL","展開せよ",`(x + ${r})³`,`x³ + ${3*r}x² + ${3*r*r}x + ${r**3}`,[`x³ + ${r**3}`,`x³ + ${3*r}x² + ${3*r}x + ${r**3}`,`x³ + ${r}x² + ${r*r}x + ${r**3}`,`x³ + ${3*r}x² + ${3*r*r}x + ${3*r}`,`x³ + ${3*r*r}x² + ${3*r}x + ${r**3}`].filter(a=>a!==`x³ + ${3*r}x² + ${3*r*r}x + ${r**3}`),{sol:`x³ + ${3*r}x² + ${3*r*r}x + ${r**3}`})}),$("COMPLEX",1,6,(i,e)=>{const t=(o,c)=>c===0?b(o):o===0?`${pe(c)}i`:`${b(o)}${c<0?" − ":" + "}${Math.abs(c)===1?"":Math.abs(c)}i`;if(e===0)return he(i,"COMPLEX","値を求めよ",[["i²","−1",["1","i","−i","0"]],["i³","−i",["i","1","−1","0"]],["i⁴","1",["−1","i","−i","4i"]],["√(−9)","3i",["−3","±3","−3i","9i"]],["√(−2) × √(−8)","−4",["4","4i","−4i","16"]]]);const[n,s,r,a]=[ht(i,4),ht(i,4),ht(i,4),ht(i,4)];return e===1?C(i,"COMPLEX","計算せよ",`(${t(n,s)}) + (${t(r,a)})`,t(n+r,s+a),[t(n+r,s-a),t(n-r,s+a),t(n*r,s*a),t(n+a,s+r),t(n+r+1,s+a)]):i.chance(.5)?C(i,"COMPLEX","計算せよ",`(${t(n,s)})(${t(r,a)})`,t(n*r-s*a,n*a+s*r),[t(n*r+s*a,n*a+s*r),t(n*r,s*a),t(n*r-s*a,n*a-s*r),t(n*r-s*a+1,n*a+s*r),t(n*a+s*r,n*r-s*a)]):C(i,"COMPLEX","共役な複素数は?",t(n,s),t(n,-s),[t(-n,s),t(-n,-s),t(s,n),t(n,s+1)],{sol:t(n,-s)})}),$("ROOTS",3,8,(i,e)=>{const[t,n]=[ht(i,7),ht(i,6)],s=`${He(1,-t,n)} = 0 の解を α, β`;if(e===0){const l=i.chance(.5);return C(i,"ROOTS",l?"α + β は?":"αβ は?",s,b(l?t:n),[b(l?-t:-n),b(l?n:t),b(t+n),b(t*n),"0"],{sol:`解と係数の関係より ${b(l?t:n)}`})}if(e===1)return C(i,"ROOTS","α² + β² は?",s,b(t*t-2*n),[b(t*t),b(t*t+2*n),b(t*t-n),b(t*t-4*n),b(2*t)],{sol:`(α + β)² − 2αβ = ${b(t*t-2*n)}`});const[r,a]=[i.int(-5,5),i.int(-3,7)],o=r*r-4*a,c=o>0?"異なる2つの実数解":o===0?"重解":"異なる2つの虚数解";return C(i,"ROOTS","解の種類は?",`${He(1,r,a)} = 0`,c,["異なる2つの実数解","重解","異なる2つの虚数解","解なし"],{sol:`D = ${b(o)} より ${c}`})}),$("REMAINDER",3,8,(i,e)=>{const[t,n,s]=[ht(i,3),ht(i,5),ht(i,6)],r=ht(i,2),a=bn([{coef:1,pow:3},{coef:t,pow:2},{coef:n,pow:1},{coef:s,pow:0}]),o=d=>d**3+t*d*d+n*d+s;if(e<2)return C(i,"REMAINDER",`x${Ie(-r)} で割った余りは?`,`P(x) = ${a}`,b(o(r)),[b(o(-r)),b(s),b(o(r)+1),b(-o(r)),b(1+t+n+s===o(r)?o(r)+3:1+t+n+s)],{sol:`P(${b(r)}) = ${b(o(r))}`});const c=ht(i,3),l=-(c**3+t*c*c+n*c),u=bn([{coef:1,pow:3},{coef:t,pow:2},{coef:n,pow:1},{coef:l,pow:0}]),h=d=>`x${Ie(-d)}`,f=[-3,-2,-1,1,2,3].filter(d=>d**3+t*d*d+n*d+l!==0);return f.length<3?C(i,"REMAINDER","x − 1 で割った余りは?","P(x) = x³ − 2x + 5",4,[5,3,-4,6]):C(i,"REMAINDER","因数であるものは?",`P(x) = ${u}`,h(c),f.map(h),{sol:`P(${b(c)}) = 0 より ${h(c)}`})}),$("POINTS",2,8,(i,e)=>{const[t,n]=[i.int(-4,4),i.int(-4,4)];if(e===0){const[d,g]=i.pick([[3,4],[4,3],[6,8],[5,12],[8,6]]);return C(i,"POINTS","2点間の距離は?",`${Pt(t,n)} と ${Pt(t+d,n+g)}`,Math.hypot(d,g),[d+g,Math.hypot(d,g)+1,Math.abs(d-g)||2,d*g])}const[s,r]=[t+i.int(1,4)*2,n+ht(i,3)*2];if(e===1)return C(i,"POINTS","中点の座標は?",`${Pt(t,n)} と ${Pt(s,r)}`,Pt((t+s)/2,(n+r)/2),[Pt(t+s,n+r),Pt((s-t)/2,(r-n)/2),Pt((n+r)/2,(t+s)/2),Pt((t+s)/2+1,(n+r)/2)],{sol:Pt((t+s)/2,(n+r)/2)});const[a,o]=i.pick([[1,2],[2,1]]),[c,l]=[i.int(-3,3),i.int(-3,3)],[u,h]=[c+3*i.int(1,3),l+3*ht(i,2)],f=(d,g)=>Pt((o*c+a*d)/(a+o),(o*l+a*g)/(a+o));return C(i,"POINTS",`${a}:${o} に内分する点は?`,`A${Pt(c,l)}、B${Pt(u,h)}`,f(u,h),[Pt((a*c+o*u)/3,(a*l+o*h)/3),Pt((c+u)/2,(l+h)/2),Pt(u-c,h-l),Pt((o*c+a*u)/3+1,(o*l+a*h)/3)],{sol:f(u,h)})}),$("LINE",3,9,(i,e)=>{const t=ht(i,4),[n,s]=[ht(i,4),ht(i,4)],r=(h,f)=>`y = ${Nt([[h,"x"],[f,""]])}`;if(e===0)return C(i,"LINE","直線の方程式は?",`点${Pt(n,s)}を通り傾き ${b(t)}`,r(t,s-t*n),[r(t,s+t*n),r(-t,s-t*n),r(t,s),r(t,n-t*s===s-t*n?s+1:n-t*s),r(t,s-t*n+1)],{sol:r(t,s-t*n)});if(e===1){const h=i.chance(.5);return C(i,"LINE",h?"垂直な直線の傾きは?":"平行な直線の傾きは?",r(t,s),h?at(-1,t):b(t),[b(t),b(-t),at(1,t),at(-1,t),b(s===t?t+1:s)],{sol:h?`傾きの積が −1 → ${at(-1,t)}`:`傾きが等しい → ${b(t)}`})}const[a,o]=i.pick([[3,4],[4,3],[5,12],[6,8]]),c=Math.hypot(a,o),l=i.int(1,4),u=l*c-a*n-o*s;return C(i,"LINE","点と直線の距離は?",`点${Pt(n,s)}、直線 ${Nt([[a,"x"],[o,"y"],[u,""]])} = 0`,l,[l*c,l+1,l+2,Math.abs(u)===l?l+3:Math.abs(u)],{sol:`|${a}·${wc(n)} + ${o}·${wc(s)}${Ie(u)}| / ${c} = ${l}`})}),$("CIRCLE",3,8,(i,e)=>{const[t,n]=[ht(i,4),ht(i,4)],s=i.int(2,6),r=`(x${Ie(-t)})² + (y${Ie(-n)})² = ${s*s}`;if(e===0)return C(i,"CIRCLE","円の中心は?",r,Pt(t,n),[Pt(-t,-n),Pt(n,t),Pt(-t,n),Pt(t,-n)],{sol:Pt(t,n)});if(e===1)return C(i,"CIRCLE","円の半径は?",r,s,[s*s,s*2,s+1,s*s*2]);const a=`x² + y²${Ie(-2*t)}x${Ie(-2*n)}y${Ie(t*t+n*n-s*s)} = 0`.replace(/([+−]) 1([xy])/g,"$1 $2");return C(i,"CIRCLE","中心と半径は?",a,`中心${Pt(t,n)} 半径${s}`,[`中心${Pt(-t,-n)} 半径${s}`,`中心${Pt(t,n)} 半径${s*s}`,`中心${Pt(2*t,2*n)} 半径${s}`,`中心${Pt(-t,-n)} 半径${s*s}`],{sol:`中心${Pt(t,n)} 半径${s}`})}),$("RADIAN",1,6,(i,e)=>{const t=[[30,1,6],[45,1,4],[60,1,3],[90,1,2],[120,2,3],[135,3,4],[150,5,6],[180,1,1],[210,7,6],[270,3,2],[300,5,3],[360,2,1]],[n,s,r]=i.pick(t),a=t.map(([,c,l])=>ut(c,l));if(e===0)return C(i,"RADIAN","弧度法で表すと?",`${n}°`,ut(s,r),a,{sol:`${n}° = ${ut(s,r)}`});if(e===1)return C(i,"RADIAN","度数法で表すと?",ut(s,r),n,t.map(c=>c[0]),{unit:"°",sol:`${ut(s,r)} = ${n}°`});const o=i.int(2,6)*r;return C(i,"RADIAN","おうぎ形の弧の長さは?",`半径 ${o}、中心角 ${ut(s,r)}`,ut(o*s,r),[ut(o*o*s,2*r),ut(o*s,2*r),ut(s,r),ut(o*s*2,r),ut(o,1)],{sol:`rθ = ${ut(o*s,r)}`})}),$("TRIGFUNC",3,9,(i,e)=>{if(e===0)return he(i,"TRIGFUNC","値を求めよ",[["sin(7π/6)","−1/2",["1/2","−√3/2","√3/2","−1"]],["cos(2π/3)","−1/2",["1/2","−√3/2","√3/2","0"]],["tan(3π/4)","−1",["1","−√3","√3","0"]],["sin(3π/2)","−1",["1","0","−1/2","1/2"]],["cos(π)","−1",["1","0","−1/2","π"]],["sin(−π/6)","−1/2",["1/2","−√3/2","√3/2","−1"]],["cos(5π/3)","1/2",["−1/2","√3/2","−√3/2","0"]]]);if(e===1){const t=[["y = sin x",Math.sin],["y = cos x",Math.cos],["y = −sin x",r=>-Math.sin(r)],["y = sin 2x",r=>Math.sin(2*r)],["y = −cos x",r=>-Math.cos(r)]],[n,s]=i.pick(t);return C(i,"TRIGFUNC","グラフの式は?","",n,t.map(r=>r[0]),{fig:cm(s),sol:n})}return he(i,"TRIGFUNC","三角関数",[["y = sin 2x の周期","π",["2π","4π","π/2","1/2"]],["y = cos(x/2) の周期","4π",["π","2π","π/2","2"]],["y = tan x の周期","π",["2π","π/2","4π","なし"]],["y = 3 sin x + 1 の最大値","4",["3","1","2","−2"]],["sin 75° (加法定理)","(√6 + √2)/4",["(√6 − √2)/4","(√3 + 1)/2","√3/2","(√2 + 1)/4"]],["cos 75° (加法定理)","(√6 − √2)/4",["(√6 + √2)/4","(√3 − 1)/2","1/4","(√2 − 1)/4"]],["sin θ = 3/5 のとき cos 2θ","7/25",["24/25","−7/25","9/25","16/25"]],["sin 2θ を sin θ, cos θ で表すと","2 sin θ cos θ",["sin²θ − cos²θ","2 sin θ","sin θ cos θ","cos²θ − sin²θ"]],["sin x + √3 cos x の最大値(合成)","2",["1 + √3","√3","4","1"]]])}),$("EXPONENT",1,7,(i,e)=>{if(e===0){const[n,s]=[i.int(2,5),i.int(2,5)],r=i.pick([2,3,5]);return C(i,"EXPONENT","指数法則",`${r}${Xe(n)} × ${r}${Xe(s)} = ${r}▢`,n+s,[n*s,n-s,n+s+1,n**2],{sol:`${r}${Xe(n+s)}`})}if(e===1)return he(i,"EXPONENT","値を求めよ",[["8^(2/3)","4",["16/3","2","64","16"]],["27^(1/3)","3",["9","81","27/3","1/3"]],["4^(3/2)","8",["6","16","2","64"]],["(1/2)⁻³","8",["1/8","−8","−6","6"]],["2⁻²","1/4",["−4","4","−1/4","1/2"]],["5⁰","1",["0","5","1/5","−1"]],["16^(−1/2)","1/4",["−4","4","−8","1/8"]]]);const t=i.int(3,7);return i.chance(.5)?C(i,"EXPONENT","方程式を解け",`2ˣ = ${2**t}`,t,[t+1,t-1,2**t/2,t*2],{pre:"x = ",sol:`x = ${t}`}):C(i,"EXPONENT","不等式を解け",`(1/2)ˣ > 1/${2**t}`,`x < ${t}`,[`x > ${t}`,`x < −${t}`,`x > −${t}`,`x < ${2**t}`],{sol:`底が1より小さいので向きが変わる → x < ${t}`})}),$("LOG",2,8,(i,e)=>e<2?um(i,e):he(i,"LOG","値を求めよ",[["log₂ 6 + log₂ (4/3)","3",["2","4","log₂ 22/3","8"]],["log₃ 54 − log₃ 2","3",["2","27","log₃ 52","4"]],["log₂ 3 × log₃ 8","3",["2","8/3","log₂ 24","6"]],["log₁₀ 2 + log₁₀ 5","1",["log₁₀ 7","10","0","2"]],["log₄ 8","3/2",["2","1/2","2/3","4"]],["log₂ √2","1/2",["2","1","√2","−1/2"]],["2¹⁰ の桁数 (log₁₀ 2 = 0.3010)","4桁",["3桁","5桁","10桁","2桁"]]])),$("DERIV",3,9,(i,e)=>{if(e===0)return lm(i);const[t,n]=[ht(i,3),ht(i,5)],s=ht(i,3);if(e===1)return C(i,"DERIV",`x = ${b(s)} での接線の傾き`,`f(x) = ${He(t,n,0)}`,b(2*t*s+n),[b(t*s*s+n*s),b(2*t*s),b(2*t+n),b(-(2*t*s+n)),b(2*t*s+n+1)],{sol:`f′(x) = ${Nt([[2*t,"x"],[n,""]])} より ${b(2*t*s+n)}`});const r=i.int(1,3);return i.chance(.5)?C(i,"DERIV","極大値をとる x は?",`f(x) = x³ − ${3*r*r}x`,b(-r),[b(r),"0",b(-r*r),b(3*r),b(-3*r)],{pre:"x = ",sol:`f′(x) = 3(x + ${r})(x − ${r}) より x = −${r}`}):C(i,"DERIV","極小値は?",`f(x) = x³ − ${3*r*r}x`,b(-2*r**3),[b(2*r**3),"0",b(-(r**3)),b(r),b(-3*r*r)],{sol:`f(${r}) = ${b(-2*r**3)}`})}),$("INTEGRAL",5,10,(i,e)=>{const[t,n]=[i.int(1,4),ht(i,5)];if(e===0)return C(i,"INTEGRAL","不定積分せよ",`∫ (${Nt([[2*t,"x"],[n,""]])}) dx`,`${Nt([[t,"x²"],[n,"x"]])} + C`,[`${Nt([[2*t,"x²"],[n,"x"]])} + C`,`${Nt([[t,"x²"],[n,""]])} + C`,`${2*t} + C`,`${Nt([[t,"x²"],[-n,"x"]])} + C`,`${Nt([[t,"x"],[n,""]])} + C`],{sol:`${Nt([[t,"x²"],[n,"x"]])} + C`});const s=i.int(1,3);if(e===1)return C(i,"INTEGRAL","定積分の値は?",`∫[0→${s}] 3x² dx`,s**3,[3*s*s,s**3+1,6*s,s*s],{sol:`[x³] = ${s**3}`});const r=i.int(1,3);return C(i,"INTEGRAL","放物線と x軸で囲まれた面積",`y = x(x − ${6*r})`,(6*r)**3/6,[(6*r)**3/3,(6*r)**2,(6*r)**3/6+6,(6*r)**3/12],{sol:`(β − α)³/6 = ${(6*r)**3/6}`})})],wc=i=>i<0?`(${b(i)})`:String(i),fm=[$("NEXT",1,5,(i,e)=>{const t=Tc(e,[[[3,7,11,15,19],"公差 4 の等差数列"],[[2,6,18,54,162],"公比 3 の等比数列"],[[50,44,38,32,26],"公差 −6 の等差数列"],[[1,2,4,8,16],"公比 2 の等比数列"]],[[[1,4,9,16,25],"平方数"],[[1,1,2,3,5,8],"前2項の和(フィボナッチ)"],[[1,3,6,10,15],"三角数(階差が 2, 3, 4, …)"],[[2,3,5,8,12],"階差が 1, 2, 3, 4"]],[[[1,8,27,64,125],"立方数"],[[2,5,10,17,26],"n² + 1"],[[1,2,6,24,120],"n!"],[[1,3,7,15,31],"2ⁿ − 1"],[[0,3,8,15,24],"n² − 1"]]),[n,s]=i.pick(t),r=n[n.length-1],a=n.slice(0,-1);return C(i,"NEXT","次の項は?",`${a.join(", ")}, ▢`,r,[r+1,r-1,r+2,a[a.length-1]*2,r+(r-a[a.length-1])],{sol:`${s} → ${r}`})}),$("ARITHMETIC",1,6,(i,e)=>{const t=ht(i,9),n=ht(i,6),s=i.int(6,12),r=`初項 ${b(t)}、公差 ${b(n)} の等差数列`;if(e===0)return C(i,"ARITHMETIC",`第${s}項は?`,r,b(t+(s-1)*n),[b(t+s*n),b(t*s),b(t+(s-2)*n),b((t+n)*s),b(-(t+(s-1)*n))]);if(e===1)return C(i,"ARITHMETIC",`初項から第${s}項までの和は?`,r,b(s*(2*t+(s-1)*n)/2),[b(s*(2*t+(s-1)*n)),b(s*(t+(s-1)*n)/1),b(s*(2*t+s*n)/2),b(t+(s-1)*n),b(s*(2*t+(s-1)*n)/2+s)],{sol:`n(2a + (n − 1)d)/2 = ${b(s*(2*t+(s-1)*n)/2)}`});const[a,o]=[i.int(2,4),i.int(6,9)];return C(i,"ARITHMETIC","公差は?",`第${a}項が ${b(t+(a-1)*n)}、第${o}項が ${b(t+(o-1)*n)}`,b(n),[b(-n),b(n+1),b(n-1),b(n*2),b((o-a)*n)],{sol:`(${b(t+(o-1)*n)} − ${wc(t+(a-1)*n)}) ÷ ${o-a} = ${b(n)}`})}),$("GEOMETRIC",2,7,(i,e)=>{const t=i.int(1,4),n=i.pick(e===0?[2,3]:[2,3,-2]),s=i.int(4,6),r=`初項 ${t}、公比 ${b(n)} の等比数列`,a=t*(n**s-1)/(n-1);return e===0?C(i,"GEOMETRIC",`第${s}項は?`,r,b(t*n**(s-1)),[b(t*n**s),b(t*n*(s-1)),b(t*n**(s-2)),b(t+n*(s-1)),b(-t*n**(s-1))]):e===1?C(i,"GEOMETRIC",`初項から第${s}項までの和は?`,r,b(a),[b(t*n**s),b(t*n**(s-1)),b(a+t),b(a-1),b(t*(n**(s+1)-1)/(n-1))],{sol:`a(rⁿ − 1)/(r − 1) = ${b(a)}`}):C(i,"GEOMETRIC","公比は?(正の数)",`第2項が ${t*3}、第4項が ${t*27}`,3,[9,2,6,27,4],{sol:"r² = 9 より r = 3"})}),$("SIGMA",3,9,(i,e)=>{const t=i.int(4,Tc(e,10,6,8)),n=a=>`Σ[k=1→${t}] ${a===1?"k":a===2?"k²":""}`;if(e===0)return C(i,"SIGMA","値を求めよ",n(1),t*(t+1)/2,[t*(t+1),t*(t-1)/2,t*t,t*(t+1)/2+t],{sol:`n(n + 1)/2 = ${t*(t+1)/2}`});if(e===1)return C(i,"SIGMA","値を求めよ",n(2),t*(t+1)*(2*t+1)/6,[(t*(t+1)/2)**2,t*(t+1)*(2*t+1)/3,t**3,t*(t+1)*(2*t+1)/6+t],{sol:`n(n + 1)(2n + 1)/6 = ${t*(t+1)*(2*t+1)/6}`});const[s,r]=[i.int(2,4),ht(i,5)];return C(i,"SIGMA","値を求めよ",`Σ[k=1→${t}] (${Nt([[s,"k"],[r,""]])})`,b(s*t*(t+1)/2+r*t),[b(s*t*(t+1)/2+r),b(s*t*(t+1)+r*t),b(s*t*(t+1)/2-r*t),b(s*t*(t+1)/2+r*t+s)],{sol:`${s}·n(n + 1)/2 ${r<0?"−":"+"} ${Math.abs(r)}n = ${b(s*t*(t+1)/2+r*t)}`})}),$("RECURRENCE",5,10,(i,e)=>{const t=i.int(1,4),n=i.int(2,5),s=i.int(4,6);return e===0?C(i,"RECURRENCE",`a${ds(s)} は?`,`a₁ = ${t}、aₙ₊₁ = aₙ + ${n}`,t+(s-1)*n,[t+s*n,t*n**(s-1),t+(s-2)*n,(t+n)*s]):e===1?C(i,"RECURRENCE",`a${ds(s)} は?`,`a₁ = ${t}、aₙ₊₁ = ${n===5?2:n}aₙ`,t*(n===5?2:n)**(s-1),[t*(n===5?2:n)**s,t+(s-1)*n,t*(n===5?2:n)*(s-1),t*(n===5?2:n)**(s-2)]):he(i,"RECURRENCE","一般項 aₙ は?",[["a₁ = 1、aₙ₊₁ = 2aₙ + 1","2ⁿ − 1",["2ⁿ + 1","2ⁿ⁻¹","2n − 1","n²"]],["a₁ = 2、aₙ₊₁ = 3aₙ − 2","3ⁿ⁻¹ + 1",["3ⁿ − 1","2·3ⁿ⁻¹","3n − 1","3ⁿ + 1"]],["a₁ = 1、aₙ₊₁ = aₙ + 2n","n² − n + 1",["n²","2n − 1","n² + n − 1","n(n + 1)/2"]],["a₁ = 3、aₙ₊₁ = aₙ + 4","4n − 1",["4n + 3","3n + 4","3·4ⁿ⁻¹","4n + 1"]],["a₁ = 5、aₙ₊₁ = 2aₙ","5·2ⁿ⁻¹",["5·2ⁿ","2·5ⁿ⁻¹","2n + 3","10n − 5"]]])}),$("INDUCTION",4,8,i=>he(i,"INDUCTION","数学的帰納法・数列",[["帰納法で最初に示すのは?","n = 1 のとき成り立つ",["n = k のとき成り立つ","n = k + 1 のとき成り立つ","すべての n で成り立つ"]],["帰納法の第2段階で仮定するのは?","n = k のとき成り立つ",["n = 1 のとき成り立つ","n = k + 1 のとき成り立つ","n = 0 のとき成り立つ"]],["帰納法の第2段階で示すのは?","n = k + 1 のとき成り立つ",["n = 1 のとき成り立つ","n = k のとき成り立つ","n = 2k のとき成り立つ"]],["階差数列 bₙ を使うと n ≧ 2 で aₙ は?","a₁ + Σ[k=1→n−1] bₖ",["a₁ + Σ[k=1→n] bₖ","Σ[k=1→n] bₖ","a₁ × bₙ","bₙ − bₙ₋₁"]],["和 Sₙ から n ≧ 2 で aₙ を求める式は?","Sₙ − Sₙ₋₁",["Sₙ + Sₙ₋₁","Sₙ₊₁ − Sₙ₋₁","Sₙ/n","Sₙ − S₁"]]])),$("EXPECTATION",3,9,(i,e)=>{if(e===0){const u=[1,2,3],h=i.pick([[1,2,1],[2,1,1],[1,1,2],[1,3,0],[3,0,1]]),f=at(u[0]*h[0]+u[1]*h[1]+u[2]*h[2],4);return C(i,"EXPECTATION","期待値 E(X) は?",`X = 1, 2, 3 の確率が ${h.map(d=>at(d,4)).join(", ")}`,f,["2","3/2","5/2","7/4","9/4","3","1"],{sol:`E(X) = ${f}`})}const[t,n]=[i.int(2,4),ht(i,5)],[s,r]=[i.int(2,6),i.int(1,4)];if(e===1){const u=i.chance(.5);return C(i,"EXPECTATION",u?`E(${t}X${Ie(n)}) は?`:`V(${t}X${Ie(n)}) は?`,`E(X) = ${s}、V(X) = ${r}`,u?b(t*s+n):t*t*r,u?[b(t*s),b(t*t*s+n),b(s+n),b(t*s-n)]:[t*r,t*t*r+n,t*r+n,r,t*t*r+1],{sol:u?`aE(X) + b = ${b(t*s+n)}`:`a²V(X) = ${t*t*r}`})}const[a,o,c]=i.pick([[100,1,2],[180,1,6],[72,1,3],[400,1,5],[50,1,2],[90,1,3]]),l=i.chance(.5);return C(i,"EXPECTATION",l?"平均は?":"分散は?",`二項分布 B(${a}, ${o}/${c})`,at(l?a*o:a*o*(c-o),l?c:c*c),[at(a*o*(c-o),c*c),at(a*o,c),at(a,c*c),String(a),at(a*(c-o),c)],{sol:l?`np = ${at(a*o,c)}`:`np(1 − p) = ${at(a*o*(c-o),c*c)}`})}),$("NORMAL",5,10,(i,e)=>{if(e===0){const[t,n]=[i.int(4,7)*10,i.pick([5,10])],s=i.pick([-2,-1,1,2,3]);return C(i,"NORMAL","標準化した Z の値は?",`平均 ${t}、標準偏差 ${n} の正規分布で X = ${t+s*n}`,b(s),[b(-s),b(s*n),b(s+1),b(t+s*n-t),at(1,s)],{sol:`Z = (X − m)/σ = ${b(s)}`})}return he(i,"NORMAL","統計的な推測",[["正規分布で m − σ ≦ X ≦ m + σ となる確率は約?","68%",["50%","95%","99.7%","34%"]],["正規分布で m − 2σ ≦ X ≦ m + 2σ となる確率は約?","95%",["68%","99.7%","90%","75%"]],["母標準偏差 σ、大きさ n の標本平均の標準偏差は?","σ/√n",["σ/n","σ√n","σ²/n","σ"]],["信頼度95%の信頼区間で使う値は?","1.96",["1.64","2.58","0.95","3"]],["正規分布のグラフが左右対称になる軸は?","x = m (平均)",["x = σ","x = 0","x = m + σ","y = m"]],["母集団の一部を取り出して調べる調査は?","標本調査",["全数調査","追跡調査","面接調査"]],["大きさ 100、母標準偏差 20 の標本平均の標準偏差","2",["0.2","20","200","5"]],["仮説検定で最初に立てる「差がない」とする仮説は?","帰無仮説",["対立仮説","作業仮説","有意水準"]]])})],dm=[$("LIMSEQ",1,6,(i,e)=>{const[t,n,s]=[i.int(1,6),ht(i,5),i.int(1,4)];let r=ht(i,5);return t*r===n*s&&(r=-r),e===0?C(i,"LIMSEQ","極限値は? (n → ∞)",`(${Nt([[t,"n"],[n,""]])})/(${Nt([[s,"n"],[r,""]])})`,at(t,s),[at(n,r),at(s,t)===at(t,s)?"0":at(s,t),"0","∞",at(t+n,s+r)],{sol:`最高次の係数の比 → ${at(t,s)}`}):e===1?he(i,"LIMSEQ","極限は? (n → ∞)",[["(1/2)ⁿ","0",["1/2","1","∞","振動する"]],["2ⁿ","∞",["0","2","1","振動する"]],["(−1)ⁿ","振動する",["0","1","−1","∞"]],["(−1/3)ⁿ","0",["−1/3","振動する","−∞","1"]],["n²/(n + 1)","∞",["1","0","2","1/2"]],["(3ⁿ + 2ⁿ)/3ⁿ","1",["0","5/3","∞","2/3"]]]):he(i,"LIMSEQ","極限値は? (n → ∞)",[["√(n + 1) − √n","0",["1","1/2","∞","√2"]],["√(n² + n) − n","1/2",["0","1","∞","2"]],["(2n² + 1)/(n² − n)","2",["1","∞","0","−1"]],["(1 + 1/n)ⁿ","e",["1","∞","2","0"]],["sin n / n","0",["1","振動する","∞","−1"]]])}),$("SERIES",3,8,(i,e)=>{const[t,n]=i.pick([[1,2],[1,3],[2,3],[1,4],[3,4],[1,5]]),s=i.int(1,5);return e===0?C(i,"SERIES","無限等比級数の和は?",`初項 ${s}、公比 ${t}/${n}`,at(s*n,n-t),[at(s*n,n+t),at(s*t,n),at(s,n-t),"∞",at(s*n,t)],{sol:`a/(1 − r) = ${at(s*n,n-t)}`}):e===1?C(i,"SERIES","無限等比級数の和は?",`初項 ${s}、公比 −${t}/${n}`,at(s*n,n+t),[at(s*n,n-t),at(-s*n,n+t),at(s,n+t),"発散する"],{sol:`a/(1 − r) = ${at(s*n,n+t)}`}):he(i,"SERIES","無限級数",[["無限等比級数が収束する公比 r の条件 (初項 ≠ 0)","−1 < r < 1",["r < 1","−1 ≦ r ≦ 1","r > 0","r ≠ 1"]],["0.999… = 0.9 + 0.09 + … の和","1",["0.9","9/10","0.99","10/9"]],["1 + 1/2 + 1/3 + 1/4 + … は?","発散する",["2 に収束","e に収束","π に収束","1 に収束"]],["Σ aₙ が収束するとき lim aₙ は?","0",["1","∞","決まらない","和と同じ"]]])}),$("LIMFUNC",3,9,(i,e)=>{const t=i.int(1,5);if(e===0)return C(i,"LIMFUNC",`極限値は? (x → ${t})`,`(x² − ${t*t})/(x − ${t})`,2*t,[t,0,t*t,2*t+1],{sol:`x + ${t} → ${2*t}`});const n=i.int(2,6);return e===1?i.chance(.5)?C(i,"LIMFUNC","極限値は? (x → 0)",`sin ${n}x / x`,n,[1,0,at(1,n),n*n],{sol:`sin θ/θ → 1 より ${n}`}):C(i,"LIMFUNC","極限値は? (x → 0)",`sin ${n}x / sin ${n+1}x`,at(n,n+1),[at(n+1,n),"1","0",String(n)],{sol:at(n,n+1)}):he(i,"LIMFUNC","極限値は?",[["(1 − cos x)/x²  (x → 0)","1/2",["0","1","2","∞"]],["(eˣ − 1)/x  (x → 0)","1",["0","e","∞","1/e"]],["log(1 + x)/x  (x → 0)","1",["0","e","∞","1/e"]],["(1 + x)^(1/x)  (x → 0)","e",["1","0","∞","1/e"]],["tan x / x  (x → 0)","1",["0","∞","π","1/2"]],["x sin(1/x)  (x → 0)","0",["1","∞","振動する","−1"]],["1/x  (x → +0)","∞",["0","−∞","1","振動する"]]])}),$("DERIVBASIC",2,7,(i,e)=>{if(e===0)return he(i,"DERIVBASIC","導関数は?",[["(sin x)′","cos x",["−cos x","sin x","−sin x","tan x"]],["(cos x)′","−sin x",["sin x","cos x","−cos x","tan x"]],["(eˣ)′","eˣ",["x eˣ⁻¹","eˣ⁻¹","1/eˣ","log x"]],["(log x)′","1/x",["x","eˣ","log x / x","−1/x²"]],["(tan x)′","1/cos²x",["1/sin²x","−1/cos²x","cos²x","tan²x"]],["(√x)′","1/(2√x)",["2√x","1/√x","√x/2","−1/(2√x)"]],["(1/x)′","−1/x²",["1/x²","log x","−1/x","−2/x³"]],["(aˣ)′","aˣ log a",["x aˣ⁻¹","aˣ","aˣ/log a","aˣ log x"]]]);const t=i.int(2,5);return e===1?i.pick([()=>C(i,"DERIVBASIC","微分せよ",`sin ${t}x`,`${t} cos ${t}x`,[`cos ${t}x`,`−${t} cos ${t}x`,`${t} sin ${t}x`,`cos ${t}x / ${t}`],{sol:`${t} cos ${t}x`}),()=>C(i,"DERIVBASIC","微分せよ",`e^(${t}x)`,`${t} e^(${t}x)`,[`e^(${t}x)`,`${t}x e^(${t}x)`,`e^(${t}x)/${t}`,`${t} eˣ`],{sol:`${t} e^(${t}x)`}),()=>C(i,"DERIVBASIC","微分せよ",`(2x + 1)${Xe(t)}`,`${2*t}(2x + 1)${Xe(t-1)}`.replace("¹",""),[`${t}(2x + 1)${Xe(t-1)}`.replace("¹",""),`${2*t}(2x + 1)${Xe(t)}`,`${t}(2x)${Xe(t-1)}`.replace("¹",""),`2(2x + 1)${Xe(t-1)}`.replace("¹","")],{sol:`${2*t}(2x + 1)${Xe(t-1)}`.replace("¹","")}),()=>C(i,"DERIVBASIC","微分せよ",`log(${t}x)`,"1/x",[`1/(${t}x)`,`${t}/x`,`${t} log x`,`1/${t}`],{sol:`${t}/(${t}x) = 1/x`})])():he(i,"DERIVBASIC","微分せよ",[["x eˣ","(x + 1) eˣ",["x eˣ","eˣ","(x − 1) eˣ","x² eˣ"]],["x log x","log x + 1",["log x","1/x","1","x/log x"]],["x sin x","sin x + x cos x",["cos x","x cos x","sin x − x cos x","sin x + cos x"]],["sin²x","2 sin x cos x",["2 sin x","cos²x","2 cos x","−2 sin x cos x"]],["eˣ sin x","eˣ(sin x + cos x)",["eˣ cos x","eˣ(sin x − cos x)","eˣ sin x","2eˣ sin x"]],["sin x / x","(x cos x − sin x)/x²",["cos x","(sin x − x cos x)/x²","cos x / x","(x cos x + sin x)/x²"]],["log(x² + 1)","2x/(x² + 1)",["1/(x² + 1)","2x","2x log(x² + 1)","x/(x² + 1)"]],["e^(−x²)","−2x e^(−x²)",["e^(−x²)","−x² e^(−x²)","2x e^(−x²)","−2x eˣ"]]])}),$("INTEGBASIC",4,10,(i,e)=>e===0?he(i,"INTEGBASIC","不定積分は? (積分定数は省略)",[["∫ cos x dx","sin x",["−sin x","cos x","−cos x","tan x"]],["∫ sin x dx","−cos x",["cos x","sin x","−sin x","tan x"]],["∫ eˣ dx","eˣ",["x eˣ","eˣ/x","eˣ⁺¹/(x + 1)","log x"]],["∫ 1/x dx","log|x|",["−1/x²","1/x²","x log x","1"]],["∫ 1/cos²x dx","tan x",["−tan x","1/sin x","sin²x","−1/cos x"]],["∫ e^(2x) dx","e^(2x)/2",["2e^(2x)","e^(2x)","e^(2x)/x","x e^(2x)"]],["∫ √x dx","(2/3)x√x",["1/(2√x)","(3/2)x√x","x√x","2√x"]],["∫ sin 2x dx","−cos 2x / 2",["cos 2x / 2","−2 cos 2x","−cos 2x","sin²x / 2"]]]):e===1?he(i,"INTEGBASIC","定積分の値は?",[["∫[0→π] sin x dx","2",["0","1","π","−2"]],["∫[0→π/2] cos x dx","1",["0","π/2","2","−1"]],["∫[1→e] 1/x dx","1",["e","e − 1","0","1/e"]],["∫[0→1] eˣ dx","e − 1",["e","1","e + 1","1/e"]],["∫[0→π] cos x dx","0",["2","1","π","−2"]],["∫[0→1] 1/(1 + x²) dx","π/4",["π/2","1","log 2","1/2"]],["∫[0→1] 1/(1 + x) dx","log 2",["1","1/2","π/4","e"]]]):he(i,"INTEGBASIC","積分の応用",[["∫ x eˣ dx (部分積分)","(x − 1) eˣ",["(x + 1) eˣ","x eˣ","x² eˣ / 2","eˣ"]],["∫ log x dx (部分積分)","x log x − x",["1/x","x log x","(log x)²/2","x log x + x"]],["∫ x cos x dx (部分積分)","x sin x + cos x",["x sin x − cos x","x sin x","−x sin x","x² sin x / 2"]],["y = x (0 ≦ x ≦ 3) を x軸のまわりに回転した体積","9π",["3π","27π","9π/2","27π/2"]],["y = √x (0 ≦ x ≦ 4) を x軸のまわりに回転した体積","8π",["4π","16π","16π/3","2π"]],["y = sin x (0 ≦ x ≦ π) と x軸で囲まれた面積","2",["1","π","π/2","4"]],["∫ 2x(x² + 1)³ dx (置換積分)","(x² + 1)⁴/4",["(x² + 1)⁴","x²(x² + 1)³","(x² + 1)⁴/8","6x(x² + 1)²"]]])),$("CURVES",5,10,(i,e)=>{const t=i.int(1,4);if(e===0)return C(i,"CURVES","変曲点の x 座標は?",`y = x³ − ${3*t}x²`,t,[0,2*t,3*t,-t],{pre:"x = ",sol:`y″ = 6x − ${6*t} = 0 より x = ${t}`});const[n,s]=[ht(i,4),ht(i,4)],r=(a,o)=>`x = ${b(a)}, y = ${b(o)}`;return e===1?C(i,"CURVES","漸近線は?",`y = 1/(x${Ie(-n)})${Ie(s)}`,r(n,s),[r(-n,s),r(s,n),r(n,-s),r(0,0),r(n+1,s),r(-n,-s)],{sol:r(n,s)}):he(i,"CURVES","関数",[["y = 2x + 1 の逆関数","y = (x − 1)/2",["y = 2x − 1","y = (x + 1)/2","y = 1/(2x + 1)","y = x/2 − 1"]],["y = eˣ の逆関数","y = log x",["y = e⁻ˣ","y = 1/eˣ","y = x^e","y = −eˣ"]],["f(x) = x + 1, g(x) = x² のとき g(f(x))","(x + 1)²",["x² + 1","x²(x + 1)","x² + x + 1","2x + 1"]],["f(x) = x + 1, g(x) = x² のとき f(g(x))","x² + 1",["(x + 1)²","x²(x + 1)","x² + x + 1","2x + 1"]],["y″ > 0 の区間でのグラフは?","下に凸",["上に凸","増加","減少","一定"]],["f′(a) = 0 かつ f″(a) < 0 のとき x = a で?","極大",["極小","変曲点","不連続","最小"]],["y = (2x + 1)/(x − 1) の漸近線","x = 1, y = 2",["x = −1, y = 2","x = 1, y = 1","x = 2, y = 1","x = 1, y = −1"]]])})];function pm(i,e){const t=is(5),[n,s]=t.at(0,0),[r,a]=t.at(i,e),o=Math.atan2(a-s,r-n),c=l=>[r-9*Math.cos(o+l),a-9*Math.sin(o+l)];return Ht(t.base,te(n,s,r,a,mn),es([c(.45),[r,a],c(-.45)],mn))}function mm(i){const e=is(5,!1),t=[e.plot(n=>3*Math.sqrt(Math.max(0,1-n*n/16)))+e.plot(n=>-3*Math.sqrt(Math.max(0,1-n*n/16))),e.plot(n=>n>=0?2*Math.sqrt(n):NaN)+e.plot(n=>n>=0?-2*Math.sqrt(n):NaN),e.plot(n=>Math.abs(n)>=2?1.5*Math.sqrt(n*n/4-1):NaN)+e.plot(n=>Math.abs(n)>=2?-1.5*Math.sqrt(n*n/4-1):NaN)];return Ht(e.base,t[i])}const gm=[$("VECTOR",1,6,(i,e)=>{const[t,n,s,r]=[ht(i,5),ht(i,5),ht(i,5),ht(i,5)],a=`a = ${Pt(t,n)}、b = ${Pt(s,r)}`;if(e===0){const o=i.chance(.5),c=o?1:-1;return C(i,"VECTOR",o?"a + b の成分は?":"a − b の成分は?",a,Pt(t+c*s,n+c*r),[Pt(t-c*s,n-c*r),Pt(t*s,n*r),Pt(t+c*r,n+c*s),Pt(t+c*s+1,n+c*r)],{sol:Pt(t+c*s,n+c*r)})}if(e===1){const o=i.int(2,3);return C(i,"VECTOR",`${o}a − b の成分は?`,a,Pt(o*t-s,o*n-r),[Pt(o*t+s,o*n+r),Pt(o*(t-s),o*(n-r)),Pt(t-o*s,n-o*r),Pt(o*t-s,n-r)],{sol:Pt(o*t-s,o*n-r)})}return C(i,"VECTOR","大きさ |a| は?",`a = ${Pt(t,n)}`,zt(t*t+n*n),[String(Math.abs(t)+Math.abs(n)),zt(t*t+n*n+1),String(t*t+n*n),zt(Math.abs(t*n)*2||3)],{sol:`√(${t*t} + ${n*n}) = ${zt(t*t+n*n)}`})}),$("VECREAD",2,6,i=>{const[e,t]=[ht(i,4),ht(i,4)];return C(i,"VECREAD","このベクトルの成分は?","",Pt(e,t),[Pt(t,e),Pt(-e,t),Pt(e,-t),Pt(-e,-t),Pt(t,-e)],{fig:pm(e,t),sol:Pt(e,t)})}),$("DOT",2,8,(i,e)=>{const[t,n,s]=[ht(i,5),ht(i,5),ht(i,5)],r=ht(i,5);if(e===0)return C(i,"DOT","内積 a·b は?",`a = ${Pt(t,n)}、b = ${Pt(s,r)}`,b(t*s+n*r),[b(t*s-n*r),b(t*r+n*s),b((t+n)*(s+r)),b(t*s+n*r+1),b(-(t*s+n*r))]);if(e===1){const a=i.int(1,4),[o,c]=[i.int(1,3),i.int(1,3)];return C(i,"DOT","a ⊥ b となる x は?",`a = ${Pt(o*a,c)}、b = ${Pt(c,"x")}`,b(-o*a),[b(o*a),b(-c),b(c*c),b(-o*a-1),"0"],{pre:"x = ",sol:`a·b = 0 より x = ${b(-o*a)}`})}return he(i,"DOT","内積",[["|a| = 2、|b| = 3、なす角 60° のとき a·b","3",["6","3√3","5","1"]],["|a| = 4、|b| = 2、なす角 120° のとき a·b","−4",["4","−4√3","8","−8"]],["a = (1, 0)、b = (1, 1) のなす角","45°",["30°","60°","90°","0°"]],["a = (1, √3)、b = (√3, 1) のなす角","30°",["45°","60°","90°","0°"]],["|a| = 1、|b| = 2、a·b = 1 のとき |a + b|²","7",["5","9","3","6"]],["a·a は何に等しい?","|a|²",["|a|","0","2|a|","1"]]])}),$("POSITION",4,9,(i,e)=>{if(e===0){const[t,n]=i.pick([[1,2],[2,1],[1,3],[3,1],[2,3]]),s=(r,a)=>`(${pe(r)}a + ${pe(a)}b)/${t+n}`;return C(i,"POSITION",`線分 AB を ${t}:${n} に内分する点の位置ベクトル`,"A(a)、B(b)",s(n,t),[s(t,n),"(a + b)/2",`(${pe(t)}a − ${pe(n)}b)/${t+n}`,`${pe(n)}a + ${pe(t)}b`],{sol:s(n,t)})}return he(i,"POSITION","位置ベクトル",[["△ABC の重心の位置ベクトル","(a + b + c)/3",["(a + b + c)/2","a + b + c","(a + b)/2","(a + b − c)/3"]],["線分 AB の中点の位置ベクトル","(a + b)/2",["(a − b)/2","a + b","(b − a)/2","(a + b)/3"]],["ベクトル AB を位置ベクトルで表すと","b − a",["a − b","a + b","(a + b)/2","ab"]],["3点 A, B, C が一直線上にある条件","AC = k AB となる実数 k がある",["AB·AC = 0","|AB| = |AC|","AB + AC = 0"]],["点 P が直線 AB 上: OP = s a + t b で必要な条件","s + t = 1",["s = t","st = 1","s + t = 0","s − t = 1"]],["線分 AB を 2:1 に外分する点の位置ベクトル","−a + 2b",["2a − b","(a + 2b)/3","(2a + b)/3","a − 2b"]]])}),$("CPLANE",2,8,(i,e)=>{if(e===0){const[t,n,s]=i.pick([[3,4,5],[5,12,13],[6,8,10],[1,1,0],[1,2,0],[2,3,0]]);return C(i,"CPLANE","絶対値は?",`|${t} + ${n===1?"":n}i|`,s?String(s):zt(t*t+n*n),[String(t+n),zt(t*t+n*n+1),String(t*t+n*n),zt(Math.abs(t*t-n*n)||2)],{sol:`√(${t}² + ${n}²) = ${s||zt(t*t+n*n)}`})}return e===1?he(i,"CPLANE","偏角は? (0 ≦ θ < 2π)",[["1 + i","π/4",["π/2","π/3","3π/4","π/6"]],["i","π/2",["π","0","π/4","3π/2"]],["−1","π",["0","π/2","3π/2","−1"]],["1 + √3 i","π/3",["π/6","π/4","2π/3","π/2"]],["−1 + i","3π/4",["π/4","5π/4","π/2","7π/4"]],["√3 + i","π/6",["π/3","π/4","π/2","5π/6"]],["−i","3π/2",["π/2","π","0","7π/4"]]]):he(i,"CPLANE","複素数平面",[["複素数に i をかけると、原点のまわりに?","90° 回転",["180° 回転","45° 回転","実軸対称","2倍に拡大"]],["(1 + i)²","2i",["2","1 + 2i","−2","2 + 2i"]],["(cos θ + i sin θ)ⁿ (ド・モアブル)","cos nθ + i sin nθ",["cosⁿθ + i sinⁿθ","n cos θ + i n sin θ","cos θⁿ + i sin θⁿ"]],["(1 + i)⁴","−4",["4","4i","−4i","2"]],["共役な複素数は、複素数平面で何に関して対称?","実軸",["虚軸","原点","直線 y = x"]],["z の絶対値が 1 のとき z の共役は?","1/z",["z","−z","z²","−1/z"]],["1 の 3乗根のうち虚数のものを ω とすると ω² + ω + 1","0",["1","−1","3","ω"]]])}),$("CONIC",4,10,(i,e)=>{if(e===0){const n=i.int(0,2),s=["楕円","放物線","双曲線","円"];return C(i,"CONIC","この曲線は?","",s[n],s,{fig:mm(n),sol:s[n]})}if(e===1){const[n,s,r]=i.pick([[5,3,4],[5,4,3],[13,12,5],[13,5,12],[10,6,8]]),a=i.int(0,2);return a===0?C(i,"CONIC","楕円の焦点は?",`x²/${n*n} + y²/${s*s} = 1`,`(±${r}, 0)`,[`(0, ±${r})`,`(±${n}, 0)`,`(±${s}, 0)`,`(±${n+s}, 0)`],{sol:`√(${n*n} − ${s*s}) = ${r} より (±${r}, 0)`}):a===1?C(i,"CONIC","楕円の長軸の長さは?",`x²/${n*n} + y²/${s*s} = 1`,2*n,[n,2*s,n*n,n+s],{sol:`2a = ${2*n}`}):C(i,"CONIC","双曲線の漸近線は?",`x²/${n*n} − y²/${s*s} = 1`,`y = ±(${s}/${n})x`,[`y = ±(${n}/${s})x`,`y = ±${s}x`,`y = ±(${s*s}/${n*n})x`,`x = ±${n}`],{sol:`y = ±(${s}/${n})x`})}const t=i.int(1,5);return i.chance(.5)?C(i,"CONIC","放物線の焦点は?",`y² = ${4*t}x`,`(${t}, 0)`,[`(0, ${t})`,`(${4*t}, 0)`,`(−${t}, 0)`,`(${2*t}, 0)`],{sol:`y² = 4px の焦点は (p, 0) → (${t}, 0)`}):C(i,"CONIC","放物線の準線は?",`y² = ${4*t}x`,`x = −${t}`,[`x = ${t}`,`y = −${t}`,`x = −${4*t}`,`x = −${2*t}`],{sol:`x = −p → x = −${t}`})}),$("POLAR",5,10,(i,e)=>e===0?he(i,"POLAR","直交座標で表すと?",[["極座標 (2, π/3)","(1, √3)",["(√3, 1)","(2, √3)","(1, 2)","(√3, 2)"]],["極座標 (2, π/6)","(√3, 1)",["(1, √3)","(2, 1)","(√3, 2)","(1, 1)"]],["極座標 (√2, π/4)","(1, 1)",["(√2, √2)","(2, 2)","(1, √2)","(0, √2)"]],["極座標 (3, π/2)","(0, 3)",["(3, 0)","(0, −3)","(3, 3)","(−3, 0)"]],["極座標 (4, π)","(−4, 0)",["(4, 0)","(0, 4)","(0, −4)","(−4, −4)"]]]):e===1?he(i,"POLAR","極座標 (r, θ) で表すと?",[["直交座標 (0, 3)","(3, π/2)",["(3, 0)","(3, π)","(0, 3)","(9, π/2)"]],["直交座標 (1, 1)","(√2, π/4)",["(1, π/4)","(2, π/4)","(√2, π/2)","(√2, π/3)"]],["直交座標 (−2, 0)","(2, π)",["(−2, 0)","(2, 0)","(2, π/2)","(4, π)"]],["直交座標 (1, √3)","(2, π/3)",["(2, π/6)","(√3, π/3)","(4, π/3)","(2, π/4)"]]]):he(i,"POLAR","どんな図形?",[["x = cos t、y = sin t","円",["楕円","放物線","双曲線","直線"]],["x = 3 cos t、y = 2 sin t","楕円",["円","放物線","双曲線","直線"]],["x = t、y = t²","放物線",["円","楕円","双曲線","直線"]],["x = t + 1、y = 2t","直線",["円","楕円","放物線","双曲線"]],["極方程式 r = 2","円",["直線","放物線","楕円","らせん"]],["極方程式 θ = π/4","直線",["円","放物線","楕円","らせん"]],["極方程式 r = 2 cos θ","円",["直線","放物線","双曲線","楕円"]]]))],Rs={k1:rm,ka:om,k2:hm,kb:fm,k3:[...dm,...Dp],kc:gm},xm=4;function Vi(i){for(let e=1;e<=10;e++)for(;;){const t=i.filter(a=>a.lo<=e&&e<=a.hi),n=i.filter(a=>!t.includes(a));if(t.length>=xm||n.length===0)break;const s=a=>a.lo>e?a.lo-e:e-a.hi,r=n.reduce((a,o)=>s(o)<s(a)?o:a);r.lo>e?r.lo=e:r.hi=e}return i}const _m=[...qp.map((i,e)=>({id:`s${e+1}`,stage:"sho",label:`小${e+1}`,name:`小学${e+1}年`,items:Vi(i)})),...em.map((i,e)=>({id:`c${e+1}`,stage:"chu",label:`中${e+1}`,name:`中学${e+1}年`,items:Vi(i)})),{id:"k1",stage:"ko",label:"数Ⅰ",name:"数学Ⅰ",items:Vi(Rs.k1)},{id:"ka",stage:"ko",label:"数A",name:"数学A",items:Vi(Rs.ka)},{id:"k2",stage:"ko",label:"数Ⅱ",name:"数学Ⅱ",items:Vi(Rs.k2)},{id:"kb",stage:"ko",label:"数B",name:"数学B",items:Vi(Rs.kb)},{id:"k3",stage:"ko",label:"数Ⅲ",name:"数学Ⅲ",items:Vi(Rs.k3)},{id:"kc",stage:"ko",label:"数C",name:"数学C",items:Vi(Rs.kc)}],Zi=12,Rc=1,yf=10;function Iu(i,e){return Math.max(Rc,Math.min(yf,i+(e?1:-1)))}function vm(i,e){return i.hi===i.lo?1:Math.max(0,Math.min(2,Math.round(2*(e-i.lo)/(i.hi-i.lo))))}const Sm=(i,e)=>i.items.filter(t=>t.lo<=e&&e<=t.hi);function Mm(i,e,t,n=[]){const s=Sm(e,t);if(s.length===0)throw new Error(`course ${e.id} has no item at level ${t}`);const r=s.filter(o=>!n.includes(o.id)),a=i.pick(r.length?r:s);return a.make(i,vm(a,t))}const Cc=3e4,Du=1e4,Nu=800,Uu=1e3,Ef=10;function ym(i){return 100+20*(i-1)}function Em(i){return 20*Math.max(0,Math.min(i-1,10))}function bm(i,e,t){return Math.round(Math.floor(Math.max(i,0)/1e3)*Ef*e/t)}function Am(i,e,t){return t?i===e?"S":i>=e-2?"A":i>=e-5?"B":"C":"D"}function Tm(i){switch(i.kind){case"factor":return{kind:"factor",n:i.n,collected:[]};case"reduce":return{kind:"reduce",num:i.num,den:i.den,collected:[]};case"sqrt":return{kind:"sqrt",coef:1,rad:i.rad};case"pair":return{kind:"pair",selected:[]}}}function wm(i,e,t){if(i.kind==="factor"&&e.kind==="factor"){if(e.n%t!==0)return{state:e,result:"miss"};const n=e.n/t;return{state:{kind:"factor",n,collected:[...e.collected,t]},result:n===1?"done":"hit"}}if(i.kind==="reduce"&&e.kind==="reduce"){if(e.num%t!==0||e.den%t!==0)return{state:e,result:"miss"};const n={kind:"reduce",num:e.num/t,den:e.den/t,collected:[...e.collected,t]};return{state:n,result:Si(n.num,n.den)===1?"done":"hit"}}if(i.kind==="sqrt"&&e.kind==="sqrt"){const n=t*t;if(e.rad%n!==0)return{state:e,result:"miss"};const s={kind:"sqrt",coef:e.coef*t,rad:e.rad/n};return{state:s,result:xf(s.rad)?"done":"hit"}}if(i.kind==="pair"&&e.kind==="pair"){if(e.selected.includes(t))return{state:{kind:"pair",selected:e.selected.filter(o=>o!==t)},result:"select"};const n=[...e.selected,t];if(n.length<2)return{state:{kind:"pair",selected:n},result:"select"};const[s,r]=n.map(o=>i.tiles[o]),a=s+r===i.b&&s*r===i.c;return{state:{kind:"pair",selected:a?n:[]},result:a?"done":"miss"}}throw new Error(`tap state ${e.kind} does not match question ${i.kind}`)}const bf=42,$u=2*Math.PI*bf;function Rm(){const i=document.createElement("div");i.className="gauge";const e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"svg");t.setAttribute("viewBox","0 0 100 100");const n=o=>{const c=document.createElementNS(e,"circle");return c.setAttribute("cx","50"),c.setAttribute("cy","50"),c.setAttribute("r",String(bf)),c.setAttribute("class",o),t.appendChild(c),c};n("ring-track");const s=n("ring-arc");s.setAttribute("stroke-dasharray",String($u));const r=document.createElement("div");r.className="secs";const a=document.createElement("div");return a.className="secs-unit",a.textContent="SEC",i.append(t,r,a),{el:i,update(o){const c=Math.max(0,o),l=Math.min(1,c/Cc);s.setAttribute("stroke-dashoffset",String($u*(1-l))),i.dataset.tone=c>15e3?"go":c>7e3?"warn":"danger",r.textContent=c<1e4?(c/1e3).toFixed(1):String(Math.floor(c/1e3)),r.classList.toggle("wide",c>=1e5)},flash(o){i.classList.remove("bonus","penalty","grant"),i.offsetWidth,i.classList.add(o)}}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rl="186",Cm=0,Ou=1,Pm=2,qa=1,Lm=2,Cr=3,xs=0,Rn=1,kn=2,Ni=0,$r=1,Vr=2,Fu=3,Bu=4,Im=5,Zs=100,Dm=101,Nm=102,Um=103,$m=104,Om=200,Fm=201,Bm=202,km=203,Af=204,Tf=205,zm=206,Gm=207,Vm=208,Hm=209,Wm=210,Xm=211,qm=212,Ym=213,Km=214,Pc=0,Lc=1,Ic=2,Hr=3,Dc=4,Nc=5,Uc=6,$c=7,Cl=0,Zm=1,Jm=2,xi=0,wf=1,Rf=2,Cf=3,Pl=4,Pf=5,Lf=6,If=7,Df=300,_s=301,ar=302,Io=303,Do=304,_o=306,ro=1e3,Ii=1001,Oc=1002,an=1003,Qm=1004,sa=1005,pn=1006,No=1007,ps=1008,In=1009,Nf=1010,Uf=1011,Wr=1012,Ll=1013,Mi=1014,di=1015,yi=1016,Il=1017,Dl=1018,Xr=1020,$f=35902,Of=35899,Ff=1021,Bf=1022,Zn=1023,Fi=1026,ms=1027,kf=1028,Nl=1029,vs=1030,Ul=1031,$l=1033,Ya=33776,Ka=33777,Za=33778,Ja=33779,Fc=35840,Bc=35841,kc=35842,zc=35843,Gc=36196,Vc=37492,Hc=37496,Wc=37488,Xc=37489,ao=37490,qc=37491,Yc=37808,Kc=37809,Zc=37810,Jc=37811,Qc=37812,jc=37813,tl=37814,el=37815,nl=37816,il=37817,sl=37818,rl=37819,al=37820,ol=37821,cl=36492,ll=36494,ul=36495,hl=36283,fl=36284,oo=36285,dl=36286,jm=3200,pl=0,t0=1,Qi="",An="srgb",co="srgb-linear",lo="linear",Me="srgb",Uo=7680,e0=519,n0=512,i0=513,s0=514,Ol=515,r0=516,a0=517,Fl=518,o0=519,zf=35044,ku="300 es",pi=2e3,qr=2001;function c0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function uo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function l0(){const i=uo("canvas");return i.style.display="block",i}const zu={};function ho(...i){const e="THREE."+i.shift();console.log(e,...i)}function Gf(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Gt(...i){i=Gf(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function me(...i){i=Gf(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function er(...i){const e=i.join(" ");e in zu||(zu[e]=!0,Gt(...i))}function u0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const h0={[Pc]:Lc,[Ic]:Uc,[Dc]:$c,[Hr]:Nc,[Lc]:Pc,[Uc]:Ic,[$c]:Dc,[Nc]:Hr};class Ms{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gu=1234567;const nr=Math.PI/180,Yr=180/Math.PI;function _i(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function Wt(i,e,t){return Math.max(e,Math.min(t,i))}function Bl(i,e){return(i%e+e)%e}function f0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function d0(i,e,t){return i!==e?(t-i)/(e-i):0}function Or(i,e,t){return(1-t)*i+t*e}function p0(i,e,t,n){return Or(i,e,1-Math.exp(-t*n))}function m0(i,e=1){return e-Math.abs(Bl(i,e*2)-e)}function g0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function x0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function _0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function v0(i,e){return i+Math.random()*(e-i)}function S0(i){return i*(.5-Math.random())}function M0(i){i!==void 0&&(Gu=i);let e=Gu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function y0(i){return i*nr}function E0(i){return i*Yr}function b0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function A0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function T0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function w0(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),f=a((e-n)/2),d=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*u,c*h,c*f,o*l);break;case"YZY":i.set(c*f,o*u,c*h,o*l);break;case"ZXZ":i.set(c*h,c*f,o*u,o*l);break;case"XZX":i.set(o*u,c*g,c*d,o*l);break;case"YXY":i.set(c*d,o*u,c*g,o*l);break;case"ZYZ":i.set(c*g,c*d,o*u,o*l);break;default:Gt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Kn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ye(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Vf={DEG2RAD:nr,RAD2DEG:Yr,generateUUID:_i,clamp:Wt,euclideanModulo:Bl,mapLinear:f0,inverseLerp:d0,lerp:Or,damp:p0,pingpong:m0,smoothstep:g0,smootherstep:x0,randInt:_0,randFloat:v0,randFloatSpread:S0,seededRandom:M0,degToRad:y0,radToDeg:E0,isPowerOfTwo:b0,ceilPowerOfTwo:A0,floorPowerOfTwo:T0,setQuaternionFromProperEuler:w0,normalize:ye,denormalize:Kn},iu=class iu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Wt(this.x,e.x,t.x),this.y=Wt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Wt(this.x,e,t),this.y=Wt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};iu.prototype.isVector2=!0;let gt=iu;class ur{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3],f=r[a+0],d=r[a+1],g=r[a+2],M=r[a+3];if(h!==M||c!==f||l!==d||u!==g){let m=c*f+l*d+u*g+h*M;m<0&&(f=-f,d=-d,g=-g,M=-M,m=-m);let p=1-o;if(m<.9995){const y=Math.acos(m),R=Math.sin(y);p=Math.sin(p*y)/R,o=Math.sin(o*y)/R,c=c*p+f*o,l=l*p+d*o,u=u*p+g*o,h=h*p+M*o}else{c=c*p+f*o,l=l*p+d*o,u=u*p+g*o,h=h*p+M*o;const y=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=y,l*=y,u*=y,h*=y}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+u*h+c*d-l*f,e[t+1]=c*g+u*f+l*h-o*d,e[t+2]=l*g+u*d+o*f-c*h,e[t+3]=u*g-o*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),h=o(r/2),f=c(n/2),d=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"YZX":this._x=f*u*h+l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h-f*d*g;break;case"XZY":this._x=f*u*h-l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h+f*d*g;break;default:Gt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Wt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const su=class su{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=s+c*h+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Wt(this.x,e.x,t.x),this.y=Wt(this.y,e.y,t.y),this.z=Wt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Wt(this.x,e,t),this.y=Wt(this.y,e,t),this.z=Wt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $o.copy(this).projectOnVector(e),this.sub($o)}reflect(e){return this.sub($o.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};su.prototype.isVector3=!0;let L=su;const $o=new L,Vu=new ur,ru=class ru{constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],M=s[0],m=s[3],p=s[6],y=s[1],R=s[4],S=s[7],A=s[2],E=s[5],P=s[8];return r[0]=a*M+o*y+c*A,r[3]=a*m+o*R+c*E,r[6]=a*p+o*S+c*P,r[1]=l*M+u*y+h*A,r[4]=l*m+u*R+h*E,r[7]=l*p+u*S+h*P,r[2]=f*M+d*y+g*A,r[5]=f*m+d*R+g*E,r[8]=f*p+d*S+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,f=o*c-u*r,d=l*r-a*c,g=t*h+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return e[0]=h*M,e[1]=(s*l-u*n)*M,e[2]=(o*n-s*a)*M,e[3]=f*M,e[4]=(u*t-s*c)*M,e[5]=(s*r-o*t)*M,e[6]=d*M,e[7]=(n*c-l*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return er("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Oo.makeScale(e,t)),this}rotate(e){return er("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Oo.makeRotation(-e)),this}translate(e,t){return er("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Oo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ru.prototype.isMatrix3=!0;let qt=ru;const Oo=new qt,Hu=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wu=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function R0(){const i={enabled:!0,workingColorSpace:co,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Me&&(s.r=Ui(s.r),s.g=Ui(s.g),s.b=Ui(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Me&&(s.r=ir(s.r),s.g=ir(s.g),s.b=ir(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Qi?lo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return er("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return er("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[co]:{primaries:e,whitePoint:n,transfer:lo,toXYZ:Hu,fromXYZ:Wu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:An},outputColorSpaceConfig:{drawingBufferColorSpace:An}},[An]:{primaries:e,whitePoint:n,transfer:Me,toXYZ:Hu,fromXYZ:Wu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:An}}}),i}const ue=R0();function Ui(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ir(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Cs;class C0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Cs===void 0&&(Cs=uo("canvas")),Cs.width=e.width,Cs.height=e.height;const s=Cs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Cs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=uo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ui(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ui(t[n]/255)*255):t[n]=Ui(t[n]);return{data:t,width:e.width,height:e.height}}else return Gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let P0=0;class kl{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=_i(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Fo(s[a].image)):r.push(Fo(s[a]))}else r=Fo(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Fo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?C0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Gt("Texture: Unable to serialize Texture."),{})}let L0=0;const Bo=new L;class on extends Ms{constructor(e=on.DEFAULT_IMAGE,t=on.DEFAULT_MAPPING,n=Ii,s=Ii,r=pn,a=ps,o=Zn,c=In,l=on.DEFAULT_ANISOTROPY,u=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=_i(),this.name="",this.source=new kl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Bo).x}get height(){return this.source.getSize(Bo).y}get depth(){return this.source.getSize(Bo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Gt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Gt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Df)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ro:e.x=e.x-Math.floor(e.x);break;case Ii:e.x=e.x<0?0:1;break;case Oc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ro:e.y=e.y-Math.floor(e.y);break;case Ii:e.y=e.y<0?0:1;break;case Oc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Df;on.DEFAULT_ANISOTROPY=1;const au=class au{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],g=c[9],M=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+M)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(l+1)/2,S=(d+1)/2,A=(p+1)/2,E=(u+f)/4,P=(h+M)/4,_=(g+m)/4;return R>S&&R>A?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=E/n,r=P/n):S>A?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=E/s,r=_/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=P/r,s=_/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(h-M)*(h-M)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-M)/y,this.z=(f-u)/y,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Wt(this.x,e.x,t.x),this.y=Wt(this.y,e.y,t.y),this.z=Wt(this.z,e.z,t.z),this.w=Wt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Wt(this.x,e,t),this.y=Wt(this.y,e,t),this.z=Wt(this.z,e,t),this.w=Wt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};au.prototype.isVector4=!0;let be=au;class I0 extends Ms{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new be(0,0,e,t),this.scissorTest=!1,this.viewport=new be(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new on(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new kl(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jn extends I0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Hf extends on{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class D0 extends on{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const go=class go{constructor(e,t,n,s,r,a,o,c,l,u,h,f,d,g,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,u,h,f,d,g,M,m)}set(e,t,n,s,r,a,o,c,l,u,h,f,d,g,M,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new go().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/Ps.setFromMatrixColumn(e,0).length(),r=1/Ps.setFromMatrixColumn(e,1).length(),a=1/Ps.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,d=a*h,g=o*u,M=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+g*l,t[5]=f-M*l,t[9]=-o*c,t[2]=M-f*l,t[6]=g+d*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*u,d=c*h,g=l*u,M=l*h;t[0]=f+M*o,t[4]=g*o-d,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=M+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*u,d=c*h,g=l*u,M=l*h;t[0]=f-M*o,t[4]=-a*h,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=M-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*u,d=a*h,g=o*u,M=o*h;t[0]=c*u,t[4]=g*l-d,t[8]=f*l+M,t[1]=c*h,t[5]=M*l+f,t[9]=d*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,d=a*l,g=o*c,M=o*l;t[0]=c*u,t[4]=M-f*h,t[8]=g*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=d*h+g,t[10]=f-M*h}else if(e.order==="XZY"){const f=a*c,d=a*l,g=o*c,M=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+M,t[5]=a*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=o*u,t[10]=M*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(N0,e,U0)}lookAt(e,t,n){const s=this.elements;return Cn.subVectors(e,t),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),Hi.crossVectors(n,Cn),Hi.lengthSq()===0&&(Math.abs(n.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),Hi.crossVectors(n,Cn)),Hi.normalize(),ra.crossVectors(Cn,Hi),s[0]=Hi.x,s[4]=ra.x,s[8]=Cn.x,s[1]=Hi.y,s[5]=ra.y,s[9]=Cn.y,s[2]=Hi.z,s[6]=ra.z,s[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],M=n[6],m=n[10],p=n[14],y=n[3],R=n[7],S=n[11],A=n[15],E=s[0],P=s[4],_=s[8],T=s[12],I=s[1],B=s[5],F=s[9],V=s[13],N=s[2],G=s[6],nt=s[10],Z=s[14],lt=s[3],J=s[7],K=s[11],tt=s[15];return r[0]=a*E+o*I+c*N+l*lt,r[4]=a*P+o*B+c*G+l*J,r[8]=a*_+o*F+c*nt+l*K,r[12]=a*T+o*V+c*Z+l*tt,r[1]=u*E+h*I+f*N+d*lt,r[5]=u*P+h*B+f*G+d*J,r[9]=u*_+h*F+f*nt+d*K,r[13]=u*T+h*V+f*Z+d*tt,r[2]=g*E+M*I+m*N+p*lt,r[6]=g*P+M*B+m*G+p*J,r[10]=g*_+M*F+m*nt+p*K,r[14]=g*T+M*V+m*Z+p*tt,r[3]=y*E+R*I+S*N+A*lt,r[7]=y*P+R*B+S*G+A*J,r[11]=y*_+R*F+S*nt+A*K,r[15]=y*T+R*V+S*Z+A*tt,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],M=e[7],m=e[11],p=e[15],y=c*d-l*f,R=o*d-l*h,S=o*f-c*h,A=a*d-l*u,E=a*f-c*u,P=a*h-o*u;return t*(M*y-m*R+p*S)-n*(g*y-m*A+p*E)+s*(g*R-M*A+p*P)-r*(g*S-M*E+m*P)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(a*u-o*l)-n*(r*u-o*c)+s*(r*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],M=e[13],m=e[14],p=e[15],y=t*o-n*a,R=t*c-s*a,S=t*l-r*a,A=n*c-s*o,E=n*l-r*o,P=s*l-r*c,_=u*M-h*g,T=u*m-f*g,I=u*p-d*g,B=h*m-f*M,F=h*p-d*M,V=f*p-d*m,N=y*V-R*F+S*B+A*I-E*T+P*_;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/N;return e[0]=(o*V-c*F+l*B)*G,e[1]=(s*F-n*V-r*B)*G,e[2]=(M*P-m*E+p*A)*G,e[3]=(f*E-h*P-d*A)*G,e[4]=(c*I-a*V-l*T)*G,e[5]=(t*V-s*I+r*T)*G,e[6]=(m*S-g*P-p*R)*G,e[7]=(u*P-f*S+d*R)*G,e[8]=(a*F-o*I+l*_)*G,e[9]=(n*I-t*F-r*_)*G,e[10]=(g*E-M*S+p*y)*G,e[11]=(h*S-u*E-d*y)*G,e[12]=(o*T-a*B-c*_)*G,e[13]=(t*B-n*T+s*_)*G,e[14]=(M*R-g*A-m*y)*G,e[15]=(u*A-h*R+f*y)*G,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,f=r*l,d=r*u,g=r*h,M=a*u,m=a*h,p=o*h,y=c*l,R=c*u,S=c*h,A=n.x,E=n.y,P=n.z;return s[0]=(1-(M+p))*A,s[1]=(d+S)*A,s[2]=(g-R)*A,s[3]=0,s[4]=(d-S)*E,s[5]=(1-(f+p))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(g+R)*P,s[9]=(m-y)*P,s[10]=(1-(f+M))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ps.set(s[0],s[1],s[2]).length();const o=Ps.set(s[4],s[5],s[6]).length(),c=Ps.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Xn.copy(this);const l=1/a,u=1/o,h=1/c;return Xn.elements[0]*=l,Xn.elements[1]*=l,Xn.elements[2]*=l,Xn.elements[4]*=u,Xn.elements[5]*=u,Xn.elements[6]*=u,Xn.elements[8]*=h,Xn.elements[9]*=h,Xn.elements[10]*=h,t.setFromRotationMatrix(Xn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=pi,c=!1){const l=this.elements,u=2*r/(t-e),h=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s);let g,M;if(c)g=r/(a-r),M=a*r/(a-r);else if(o===pi)g=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===qr)g=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=pi,c=!1){const l=this.elements,u=2/(t-e),h=2/(n-s),f=-(t+e)/(t-e),d=-(n+s)/(n-s);let g,M;if(c)g=1/(a-r),M=a/(a-r);else if(o===pi)g=-2/(a-r),M=-(a+r)/(a-r);else if(o===qr)g=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};go.prototype.isMatrix4=!0;let Ae=go;const Ps=new L,Xn=new Ae,N0=new L(0,0,0),U0=new L(1,1,1),Hi=new L,ra=new L,Cn=new L,Xu=new Ae,qu=new ur;class Bi{constructor(e=0,t=0,n=0,s=Bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Wt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Xu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qu.setFromEuler(this),this.setFromQuaternion(qu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bi.DEFAULT_ORDER="XYZ";class Wf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $0=0;const Yu=new L,Ls=new ur,bi=new Ae,aa=new L,xr=new L,O0=new L,F0=new ur,Ku=new L(1,0,0),Zu=new L(0,1,0),Ju=new L(0,0,1),Qu={type:"added"},B0={type:"removed"},Is={type:"childadded",child:null},ko={type:"childremoved",child:null};class Ye extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$0++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ye.DEFAULT_UP.clone();const e=new L,t=new Bi,n=new ur,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ae},normalMatrix:{value:new qt}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=Ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(Ku,e)}rotateY(e){return this.rotateOnAxis(Zu,e)}rotateZ(e){return this.rotateOnAxis(Ju,e)}translateOnAxis(e,t){return Yu.copy(e).applyQuaternion(this.quaternion),this.position.add(Yu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ku,e)}translateY(e){return this.translateOnAxis(Zu,e)}translateZ(e){return this.translateOnAxis(Ju,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?aa.copy(e):aa.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(xr,aa,this.up):bi.lookAt(aa,xr,this.up),this.quaternion.setFromRotationMatrix(bi),s&&(bi.extractRotation(s.matrixWorld),Ls.setFromRotationMatrix(bi),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(me("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qu),Is.child=e,this.dispatchEvent(Is),Is.child=null):me("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(B0),ko.child=e,this.dispatchEvent(ko),ko.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qu),Is.child=e,this.dispatchEvent(Is),Is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,e,O0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,F0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ye.DEFAULT_UP=new L(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Pi extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const k0={type:"move"};class zo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const M of e.hand.values()){const m=t.getJointPose(M,n),p=this._getHandJoint(l,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(k0)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Pi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Xf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},oa={h:0,s:0,l:0};function Go(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ae{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=An){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ue.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ue.workingColorSpace){return this.r=e,this.g=t,this.b=n,ue.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ue.workingColorSpace){if(e=Bl(e,1),t=Wt(t,0,1),n=Wt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Go(a,r,e+1/3),this.g=Go(a,r,e),this.b=Go(a,r,e-1/3)}return ue.colorSpaceToWorking(this,s),this}setStyle(e,t=An){function n(r){r!==void 0&&parseFloat(r)<1&&Gt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Gt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Gt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=An){const n=Xf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Gt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}copyLinearToSRGB(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=An){return ue.workingToColorSpace(fn.copy(this),e),Math.round(Wt(fn.r*255,0,255))*65536+Math.round(Wt(fn.g*255,0,255))*256+Math.round(Wt(fn.b*255,0,255))}getHexString(e=An){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ue.workingColorSpace){ue.workingToColorSpace(fn.copy(this),t);const n=fn.r,s=fn.g,r=fn.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ue.workingColorSpace){return ue.workingToColorSpace(fn.copy(this),t),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=An){ue.workingToColorSpace(fn.copy(this),e);const t=fn.r,n=fn.g,s=fn.b;return e!==An?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Wi),this.setHSL(Wi.h+e,Wi.s+t,Wi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Wi),e.getHSL(oa);const n=Or(Wi.h,oa.h,t),s=Or(Wi.s,oa.s,t),r=Or(Wi.l,oa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new ae;ae.NAMES=Xf;class qf extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const qn=new L,Ai=new L,Vo=new L,Ti=new L,Ds=new L,Ns=new L,ju=new L,Ho=new L,Wo=new L,Xo=new L,qo=new be,Yo=new be,Ko=new be;class Dn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),qn.subVectors(e,t),s.cross(qn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){qn.subVectors(s,t),Ai.subVectors(n,t),Vo.subVectors(e,t);const a=qn.dot(qn),o=qn.dot(Ai),c=qn.dot(Vo),l=Ai.dot(Ai),u=Ai.dot(Vo),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(l*c-o*u)*f,g=(a*u-o*c)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ti.x),c.addScaledVector(a,Ti.y),c.addScaledVector(o,Ti.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return qo.setScalar(0),Yo.setScalar(0),Ko.setScalar(0),qo.fromBufferAttribute(e,t),Yo.fromBufferAttribute(e,n),Ko.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(qo,r.x),a.addScaledVector(Yo,r.y),a.addScaledVector(Ko,r.z),a}static isFrontFacing(e,t,n,s){return qn.subVectors(n,t),Ai.subVectors(e,t),qn.cross(Ai).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),qn.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Dn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Ds.subVectors(s,n),Ns.subVectors(r,n),Ho.subVectors(e,n);const c=Ds.dot(Ho),l=Ns.dot(Ho);if(c<=0&&l<=0)return t.copy(n);Wo.subVectors(e,s);const u=Ds.dot(Wo),h=Ns.dot(Wo);if(u>=0&&h<=u)return t.copy(s);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Ds,a);Xo.subVectors(e,r);const d=Ds.dot(Xo),g=Ns.dot(Xo);if(g>=0&&d<=g)return t.copy(r);const M=d*l-c*g;if(M<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Ns,o);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return ju.subVectors(r,s),o=(h-u)/(h-u+(d-g)),t.copy(s).addScaledVector(ju,o);const p=1/(m+M+f);return a=M*p,o=f*p,t.copy(n).addScaledVector(Ds,a).addScaledVector(Ns,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ss{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Yn):Yn.fromBufferAttribute(r,a),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ca.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ca.copy(n.boundingBox)),ca.applyMatrix4(e.matrixWorld),this.union(ca)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_r),la.subVectors(this.max,_r),Us.subVectors(e.a,_r),$s.subVectors(e.b,_r),Os.subVectors(e.c,_r),Xi.subVectors($s,Us),qi.subVectors(Os,$s),os.subVectors(Us,Os);let t=[0,-Xi.z,Xi.y,0,-qi.z,qi.y,0,-os.z,os.y,Xi.z,0,-Xi.x,qi.z,0,-qi.x,os.z,0,-os.x,-Xi.y,Xi.x,0,-qi.y,qi.x,0,-os.y,os.x,0];return!Zo(t,Us,$s,Os,la)||(t=[1,0,0,0,1,0,0,0,1],!Zo(t,Us,$s,Os,la))?!1:(ua.crossVectors(Xi,qi),t=[ua.x,ua.y,ua.z],Zo(t,Us,$s,Os,la))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wi=[new L,new L,new L,new L,new L,new L,new L,new L],Yn=new L,ca=new ss,Us=new L,$s=new L,Os=new L,Xi=new L,qi=new L,os=new L,_r=new L,la=new L,ua=new L,cs=new L;function Zo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){cs.fromArray(i,r);const o=s.x*Math.abs(cs.x)+s.y*Math.abs(cs.y)+s.z*Math.abs(cs.z),c=e.dot(cs),l=t.dot(cs),u=n.dot(cs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Ve=new L,ha=new gt;let z0=0;class Hn extends Ms{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:z0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=zf,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ha.fromBufferAttribute(this,t),ha.applyMatrix3(e),this.setXY(t,ha.x,ha.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ve.fromBufferAttribute(this,t),Ve.applyMatrix3(e),this.setXYZ(t,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ve.fromBufferAttribute(this,t),Ve.applyMatrix4(e),this.setXYZ(t,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ve.fromBufferAttribute(this,t),Ve.applyNormalMatrix(e),this.setXYZ(t,Ve.x,Ve.y,Ve.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ve.fromBufferAttribute(this,t),Ve.transformDirection(e),this.setXYZ(t,Ve.x,Ve.y,Ve.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ye(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Kn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ye(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Kn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ye(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Kn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ye(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Kn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ye(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ye(t,this.array),n=ye(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ye(t,this.array),n=ye(n,this.array),s=ye(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ye(t,this.array),n=ye(n,this.array),s=ye(s,this.array),r=ye(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Yf extends Hn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Kf extends Hn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class fe extends Hn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const G0=new ss,vr=new L,Jo=new L;class hr{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):G0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vr.subVectors(e,this.center);const t=vr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(vr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vr.copy(e.center).add(Jo)),this.expandByPoint(vr.copy(e.center).sub(Jo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let V0=0;const Bn=new Ae,Qo=new Ye,Fs=new L,Pn=new ss,Sr=new ss,Qe=new L;class Ue extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(c0(e)?Kf:Yf)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,t,n){return Bn.makeTranslation(e,t,n),this.applyMatrix4(Bn),this}scale(e,t,n){return Bn.makeScale(e,t,n),this.applyMatrix4(Bn),this}lookAt(e){return Qo.lookAt(e),Qo.updateMatrix(),this.applyMatrix4(Qo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new fe(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){me("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&me('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){me("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Sr.setFromBufferAttribute(o),this.morphTargetsRelative?(Qe.addVectors(Pn.min,Sr.min),Pn.expandByPoint(Qe),Qe.addVectors(Pn.max,Sr.max),Pn.expandByPoint(Qe)):(Pn.expandByPoint(Sr.min),Pn.expandByPoint(Sr.max))}Pn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Qe.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Qe));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Qe.fromBufferAttribute(o,l),c&&(Fs.fromBufferAttribute(e,l),Qe.add(Fs)),s=Math.max(s,n.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&me('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){me("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Hn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let _=0;_<n.count;_++)o[_]=new L,c[_]=new L;const l=new L,u=new L,h=new L,f=new gt,d=new gt,g=new gt,M=new L,m=new L;function p(_,T,I){l.fromBufferAttribute(n,_),u.fromBufferAttribute(n,T),h.fromBufferAttribute(n,I),f.fromBufferAttribute(r,_),d.fromBufferAttribute(r,T),g.fromBufferAttribute(r,I),u.sub(l),h.sub(l),d.sub(f),g.sub(f);const B=1/(d.x*g.y-g.x*d.y);isFinite(B)&&(M.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(B),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(B),o[_].add(M),o[T].add(M),o[I].add(M),c[_].add(m),c[T].add(m),c[I].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let _=0,T=y.length;_<T;++_){const I=y[_],B=I.start,F=I.count;for(let V=B,N=B+F;V<N;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const R=new L,S=new L,A=new L,E=new L;function P(_){A.fromBufferAttribute(s,_),E.copy(A);const T=o[_];R.copy(T),R.sub(A.multiplyScalar(A.dot(T))).normalize(),S.crossVectors(E,T);const B=S.dot(c[_])<0?-1:1;a.setXYZW(_,R.x,R.y,R.z,B)}for(let _=0,T=y.length;_<T;++_){const I=y[_],B=I.start,F=I.count;for(let V=B,N=B+F;V<N;V+=3)P(e.getX(V+0)),P(e.getX(V+1)),P(e.getX(V+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Hn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new L,r=new L,a=new L,o=new L,c=new L,l=new L,u=new L,h=new L;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),M=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Qe.fromBufferAttribute(e,t),Qe.normalize(),e.setXYZ(t,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u);let d=0,g=0;for(let M=0,m=c.length;M<m;M++){o.isInterleavedBufferAttribute?d=c[M]*o.data.stride+o.offset:d=c[M]*u;for(let p=0;p<u;p++)f[g++]=l[d++]}return new Hn(f,u,h)}if(this.index===null)return Gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ue,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=e(f,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=zf,this.updateRanges=[],this.version=0,this.uuid=_i()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const xn=new L;class mi{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ye(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ye(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Kn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Kn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Kn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Kn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ye(t,this.array),n=ye(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ye(t,this.array),n=ye(n,this.array),s=ye(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ye(t,this.array),n=ye(n,this.array),s=ye(s,this.array),r=ye(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ho("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Hn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new mi(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ho("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const jo=new L,H0=new L,W0=new qt;class Ji{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=jo.subVectors(n,t).cross(H0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(jo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||W0.getNormalMatrix(e),s=this.coplanarPoint(jo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let X0=0;class ys extends Ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:X0++}),this.uuid=_i(),this.name="",this.type="Material",this.blending=$r,this.side=xs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Af,this.blendDst=Tf,this.blendEquation=Zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ae(0,0,0),this.blendAlpha=0,this.depthFunc=Hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=e0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Uo,this.stencilZFail=Uo,this.stencilZPass=Uo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Gt(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Gt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ae().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Ji().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new gt().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new gt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class zl extends ys{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ae(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Bs;const Mr=new L,ks=new L,zs=new L,Gs=new gt,yr=new gt,Jf=new Ae,fa=new L,Er=new L,da=new L,th=new gt,tc=new gt,eh=new gt;class Qf extends Ye{constructor(e=new zl){if(super(),this.isSprite=!0,this.type="Sprite",Bs===void 0){Bs=new Ue;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Zf(t,5);Bs.setIndex([0,1,2,0,2,3]),Bs.setAttribute("position",new mi(n,3,0,!1)),Bs.setAttribute("uv",new mi(n,2,3,!1))}this.geometry=Bs,this.material=e,this.center=new gt(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&me('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ks.setFromMatrixScale(this.matrixWorld),Jf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),zs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ks.multiplyScalar(-zs.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;pa(fa.set(-.5,-.5,0),zs,a,ks,s,r),pa(Er.set(.5,-.5,0),zs,a,ks,s,r),pa(da.set(.5,.5,0),zs,a,ks,s,r),th.set(0,0),tc.set(1,0),eh.set(1,1);let o=e.ray.intersectTriangle(fa,Er,da,!1,Mr);if(o===null&&(pa(Er.set(-.5,.5,0),zs,a,ks,s,r),tc.set(0,1),o=e.ray.intersectTriangle(fa,da,Er,!1,Mr),o===null))return;const c=e.ray.origin.distanceTo(Mr);c<e.near||c>e.far||t.push({distance:c,point:Mr.clone(),uv:Dn.getInterpolation(Mr,fa,Er,da,th,tc,eh,new gt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function pa(i,e,t,n,s,r){Gs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(yr.x=r*Gs.x-s*Gs.y,yr.y=s*Gs.x+r*Gs.y):yr.copy(Gs),i.copy(e),i.x+=yr.x,i.y+=yr.y,i.applyMatrix4(Jf)}const Ri=new L,ec=new L,ma=new L,ga=new L;class jf{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,t),Ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ec.copy(e).add(t).multiplyScalar(.5),ma.copy(t).sub(e).normalize(),ga.copy(this.origin).sub(ec);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ma),o=ga.dot(this.direction),c=-ga.dot(ma),l=ga.lengthSq(),u=Math.abs(1-a*a);let h,f,d,g;if(u>0)if(h=a*c-o,f=a*o-c,g=r*u,h>=0)if(f>=-g)if(f<=g){const M=1/u;h*=M,f*=M,d=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ec).addScaledVector(ma,f),d}intersectSphere(e,t){if(e.radius<0)return null;Ri.subVectors(e.center,this.origin);const n=Ri.dot(this.direction),s=Ri.dot(Ri)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,t,n,s,r){const a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,h=e.x-a.x,f=e.y-a.y,d=e.z-a.z,g=t.x-a.x,M=t.y-a.y,m=t.z-a.z,p=n.x-a.x,y=n.y-a.y,R=n.z-a.z,S=Math.abs(c),A=Math.abs(l),E=Math.abs(u);let P,_,T,I,B,F,V,N,G,nt,Z,lt;if(S>=A&&S>=E?(T=c,F=h,G=g,lt=p,c>=0?(P=l,_=u,I=f,B=d,V=M,N=m,nt=y,Z=R):(P=u,_=l,I=d,B=f,V=m,N=M,nt=R,Z=y)):A>=E?(T=l,F=f,G=M,lt=y,l>=0?(P=u,_=c,I=d,B=h,V=m,N=g,nt=R,Z=p):(P=c,_=u,I=h,B=d,V=g,N=m,nt=p,Z=R)):(T=u,F=d,G=m,lt=R,u>=0?(P=c,_=l,I=h,B=f,V=g,N=M,nt=p,Z=y):(P=l,_=c,I=f,B=h,V=M,N=g,nt=y,Z=p)),T===0)return null;const J=P/T,K=_/T,tt=1/T,Et=I-J*F,xt=B-K*F,Jt=V-J*G,Kt=N-K*G,oe=nt-J*lt,Q=Z-K*lt,rt=oe*Kt-Q*Jt,Lt=Et*Q-xt*oe,Xt=Jt*xt-Kt*Et;if(s){if(rt<0||Lt<0||Xt<0)return null}else if((rt<0||Lt<0||Xt<0)&&(rt>0||Lt>0||Xt>0))return null;const Rt=rt+Lt+Xt;if(Rt===0)return null;const ne=tt*(rt*F+Lt*G+Xt*lt);return(Rt>0?ne<0:ne>0)?null:this.at(ne/Rt,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ui extends ys{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=Cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nh=new Ae,ls=new jf,xa=new hr,ih=new L,_a=new L,va=new L,Sa=new L,nc=new L,Ma=new L,sh=new L,ya=new L;class re extends Ye{constructor(e=new Ue,t=new ui){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Ma.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],h=r[c];u!==0&&(nc.fromBufferAttribute(h,e),a?Ma.addScaledVector(nc,u):Ma.addScaledVector(nc.sub(t),u))}t.add(Ma)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xa.copy(n.boundingSphere),xa.applyMatrix4(r),ls.copy(e.ray).recast(e.near),!(xa.containsPoint(ls.origin)===!1&&(ls.intersectSphere(xa,ih)===null||ls.origin.distanceToSquared(ih)>(e.far-e.near)**2))&&(nh.copy(r).invert(),ls.copy(e.ray).applyMatrix4(nh),!(n.boundingBox!==null&&ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ls)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=f.length;g<M;g++){const m=f[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),R=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let S=y,A=R;S<A;S+=3){const E=o.getX(S),P=o.getX(S+1),_=o.getX(S+2);s=Ea(this,p,e,n,l,u,h,E,P,_),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),M=Math.min(o.count,d.start+d.count);for(let m=g,p=M;m<p;m+=3){const y=o.getX(m),R=o.getX(m+1),S=o.getX(m+2);s=Ea(this,a,e,n,l,u,h,y,R,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,M=f.length;g<M;g++){const m=f[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),R=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let S=y,A=R;S<A;S+=3){const E=S,P=S+1,_=S+2;s=Ea(this,p,e,n,l,u,h,E,P,_),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),M=Math.min(c.count,d.start+d.count);for(let m=g,p=M;m<p;m+=3){const y=m,R=m+1,S=m+2;s=Ea(this,a,e,n,l,u,h,y,R,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function q0(i,e,t,n,s,r,a,o){let c;if(e.side===Rn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===xs,o),c===null)return null;ya.copy(o),ya.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ya);return l<t.near||l>t.far?null:{distance:l,point:ya.clone(),object:i}}function Ea(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,_a),i.getVertexPosition(c,va),i.getVertexPosition(l,Sa);const u=q0(i,e,t,n,_a,va,Sa,sh);if(u){const h=new L;Dn.getBarycoord(sh,_a,va,Sa,h),s&&(u.uv=Dn.getInterpolatedAttribute(s,o,c,l,h,new gt)),r&&(u.uv1=Dn.getInterpolatedAttribute(r,o,c,l,h,new gt)),a&&(u.normal=Dn.getInterpolatedAttribute(a,o,c,l,h,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new L,materialIndex:0};Dn.getNormal(_a,va,Sa,f.normal),u.face=f,u.barycoord=h}return u}class Y0 extends on{constructor(e=null,t=1,n=1,s,r,a,o,c,l=an,u=an,h,f){super(null,a,o,c,l,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const us=new hr,K0=new gt(.5,.5),ba=new L;class Gl{constructor(e=new Ji,t=new Ji,n=new Ji,s=new Ji,r=new Ji,a=new Ji){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=pi,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],h=r[5],f=r[6],d=r[7],g=r[8],M=r[9],m=r[10],p=r[11],y=r[12],R=r[13],S=r[14],A=r[15];if(s[0].setComponents(l-a,d-u,p-g,A-y).normalize(),s[1].setComponents(l+a,d+u,p+g,A+y).normalize(),s[2].setComponents(l+o,d+h,p+M,A+R).normalize(),s[3].setComponents(l-o,d-h,p-M,A-R).normalize(),n)s[4].setComponents(c,f,m,S).normalize(),s[5].setComponents(l-c,d-f,p-m,A-S).normalize();else if(s[4].setComponents(l-c,d-f,p-m,A-S).normalize(),t===pi)s[5].setComponents(l+c,d+f,p+m,A+S).normalize();else if(t===qr)s[5].setComponents(c,f,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(e){us.center.set(0,0,0);const t=K0.distanceTo(e.center);return us.radius=.7071067811865476+t,us.applyMatrix4(e.matrixWorld),this.intersectsSphere(us)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(ba.x=s.normal.x>0?e.max.x:e.min.x,ba.y=s.normal.y>0?e.max.y:e.min.y,ba.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ba)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ml extends ys{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const rh=new Ae,gl=new jf,Aa=new hr,Ta=new L;class ah extends Ye{constructor(e=new Ue,t=new ml){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(s),Aa.radius+=r,e.ray.intersectsSphere(Aa)===!1)return;rh.copy(s).invert(),gl.copy(e.ray).applyMatrix4(rh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let g=f,M=d;g<M;g++){const m=l.getX(g);Ta.fromBufferAttribute(h,m),oh(Ta,m,c,s,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let g=f,M=d;g<M;g++)Ta.fromBufferAttribute(h,g),oh(Ta,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function oh(i,e,t,n,s,r,a){const o=gl.distanceSqToPoint(i);if(o<t){const c=new L;gl.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class td extends on{constructor(e=[],t=_s,n,s,r,a,o,c,l,u){super(e,t,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ed extends on{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Kr extends on{constructor(e,t,n=Mi,s,r,a,o=an,c=an,l,u=Fi,h=1){if(u!==Fi&&u!==ms)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new kl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Z0 extends Kr{constructor(e,t=Mi,n=_s,s,r,a=an,o=an,c,l=Fi){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class nd extends on{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class vn extends Ue{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new fe(l,3)),this.setAttribute("normal",new fe(u,3)),this.setAttribute("uv",new fe(h,2));function g(M,m,p,y,R,S,A,E,P,_,T){const I=S/P,B=A/_,F=S/2,V=A/2,N=E/2,G=P+1,nt=_+1;let Z=0,lt=0;const J=new L;for(let K=0;K<nt;K++){const tt=K*B-V;for(let Et=0;Et<G;Et++){const xt=Et*I-F;J[M]=xt*y,J[m]=tt*R,J[p]=N,l.push(J.x,J.y,J.z),J[M]=0,J[m]=0,J[p]=E>0?1:-1,u.push(J.x,J.y,J.z),h.push(Et/P),h.push(1-K/_),Z+=1}}for(let K=0;K<_;K++)for(let tt=0;tt<P;tt++){const Et=f+tt+G*K,xt=f+tt+G*(K+1),Jt=f+(tt+1)+G*(K+1),Kt=f+(tt+1)+G*K;c.push(Et,xt,Kt),c.push(xt,Jt,Kt),lt+=6}o.addGroup(d,lt,T),d+=lt,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Vl extends Ue{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],c=[],l=new L,u=new gt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const d=n+h/t*s;l.x=e*Math.cos(d),l.y=e*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[f]/e+1)/2,u.y=(a[f+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new fe(a,3)),this.setAttribute("normal",new fe(o,3)),this.setAttribute("uv",new fe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vl(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Hl extends Ue{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],d=[];let g=0;const M=[],m=n/2;let p=0;y(),a===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(u),this.setAttribute("position",new fe(h,3)),this.setAttribute("normal",new fe(f,3)),this.setAttribute("uv",new fe(d,2));function y(){const S=new L,A=new L;let E=0;const P=(t-e)/n;for(let _=0;_<=r;_++){const T=[],I=_/r,B=I*(t-e)+e;for(let F=0;F<=s;F++){const V=F/s,N=V*c+o,G=Math.sin(N),nt=Math.cos(N);A.x=B*G,A.y=-I*n+m,A.z=B*nt,h.push(A.x,A.y,A.z),S.set(G,P,nt).normalize(),f.push(S.x,S.y,S.z),d.push(V,1-I),T.push(g++)}M.push(T)}for(let _=0;_<s;_++)for(let T=0;T<r;T++){const I=M[T][_],B=M[T+1][_],F=M[T+1][_+1],V=M[T][_+1];(e>0||T!==0)&&(u.push(I,B,V),E+=3),(t>0||T!==r-1)&&(u.push(B,F,V),E+=3)}l.addGroup(p,E,0),p+=E}function R(S){const A=g,E=new gt,P=new L;let _=0;const T=S===!0?e:t,I=S===!0?1:-1;for(let F=1;F<=s;F++)h.push(0,m*I,0),f.push(0,I,0),d.push(.5,.5),g++;const B=g;for(let F=0;F<=s;F++){const N=F/s*c+o,G=Math.cos(N),nt=Math.sin(N);P.x=T*nt,P.y=m*I,P.z=T*G,h.push(P.x,P.y,P.z),f.push(0,I,0),E.x=G*.5+.5,E.y=nt*.5*I+.5,d.push(E.x,E.y),g++}for(let F=0;F<s;F++){const V=A+F,N=B+F;S===!0?u.push(N,N+1,V):u.push(N+1,N,V),_+=3}l.addGroup(p,_,S===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const wa=new L,Ra=new L,ic=new L,Ca=new Dn;class J0 extends Ue{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(nr*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let g=0;g<c;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:M,b:m,c:p}=Ca;if(M.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),p.fromBufferAttribute(o,l[2]),Ca.getNormal(ic),h[0]=`${Math.round(M.x*s)},${Math.round(M.y*s)},${Math.round(M.z*s)}`,h[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,h[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let y=0;y<3;y++){const R=(y+1)%3,S=h[y],A=h[R],E=Ca[u[y]],P=Ca[u[R]],_=`${S}_${A}`,T=`${A}_${S}`;T in f&&f[T]?(ic.dot(f[T].normal)<=r&&(d.push(E.x,E.y,E.z),d.push(P.x,P.y,P.z)),f[T]=null):_ in f||(f[_]={index0:l[y],index1:l[R],normal:ic.clone()})}}for(const g in f)if(f[g]){const{index0:M,index1:m}=f[g];wa.fromBufferAttribute(o,M),Ra.fromBufferAttribute(o,m),d.push(wa.x,wa.y,wa.z),d.push(Ra.x,Ra.y,Ra.z)}this.setAttribute("position",new fe(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ei{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Gt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const u=n[s],f=n[s+1]-u,d=(a-u)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new gt:new L);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new L,s=[],r=[],a=[],o=new L,c=new Ae;for(let d=0;d<=e;d++){const g=d/e;s[d]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Wt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Wt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Wl extends Ei{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new gt){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Q0 extends Wl{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Xl(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,h){let f=(a-r)/l-(o-r)/(l+u)+(o-a)/u,d=(o-a)/u-(c-a)/(u+h)+(c-o)/h;f*=u,d*=u,s(a,o,f,d)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const ch=new L,lh=new L,sc=new Xl,rc=new Xl,ac=new Xl;class j0 extends Ei{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%r]:(lh.subVectors(s[0],s[1]).add(s[0]),l=lh);const h=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(ch.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=ch),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),d),M=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);M<1e-4&&(M=1),g<1e-4&&(g=M),m<1e-4&&(m=M),sc.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,g,M,m),rc.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,g,M,m),ac.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,g,M,m)}else this.curveType==="catmullrom"&&(sc.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),rc.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),ac.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(sc.calc(c),rc.calc(c),ac.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function uh(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function tg(i,e){const t=1-i;return t*t*e}function eg(i,e){return 2*(1-i)*i*e}function ng(i,e){return i*i*e}function Fr(i,e,t,n){return tg(i,e)+eg(i,t)+ng(i,n)}function ig(i,e){const t=1-i;return t*t*t*e}function sg(i,e){const t=1-i;return 3*t*t*i*e}function rg(i,e){return 3*(1-i)*i*i*e}function ag(i,e){return i*i*i*e}function Br(i,e,t,n,s){return ig(i,e)+sg(i,t)+rg(i,n)+ag(i,s)}class id extends Ei{constructor(e=new gt,t=new gt,n=new gt,s=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new gt){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Br(e,s.x,r.x,a.x,o.x),Br(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class og extends Ei{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Br(e,s.x,r.x,a.x,o.x),Br(e,s.y,r.y,a.y,o.y),Br(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class sd extends Ei{constructor(e=new gt,t=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new gt){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new gt){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cg extends Ei{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rd extends Ei{constructor(e=new gt,t=new gt,n=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new gt){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Fr(e,s.x,r.x,a.x),Fr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class lg extends Ei{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Fr(e,s.x,r.x,a.x),Fr(e,s.y,r.y,a.y),Fr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ad extends Ei{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new gt){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(uh(o,c.x,l.x,u.x,h.x),uh(o,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new gt().fromArray(s))}return this}}var hh=Object.freeze({__proto__:null,ArcCurve:Q0,CatmullRomCurve3:j0,CubicBezierCurve:id,CubicBezierCurve3:og,EllipseCurve:Wl,LineCurve:sd,LineCurve3:cg,QuadraticBezierCurve:rd,QuadraticBezierCurve3:lg,SplineCurve:ad});class ug extends Ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hh[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new hh[s.type]().fromJSON(s))}return this}}class fh extends ug{constructor(e){super(),this.type="Path",this.currentPoint=new gt,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new sd(this.currentPoint.clone(),new gt(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new rd(this.currentPoint.clone(),new gt(e,t),new gt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){const o=new id(this.currentPoint.clone(),new gt(e,t),new gt(n,s),new gt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new ad(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){const l=new Wl(e,t,n,s,r,a,o,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class od extends fh{constructor(e){super(e),this.uuid=_i(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new fh().fromJSON(s))}return this}}function hg(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=cd(i,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=gg(i,e,r,t)),i.length>80*t){o=i[0],c=i[1];let u=o,h=c;for(let f=t;f<s;f+=t){const d=i[f],g=i[f+1];d<o&&(o=d),g<c&&(c=g),d>u&&(u=d),g>h&&(h=g)}l=Math.max(u-o,h-c),l=l!==0?32767/l:0}return Zr(r,a,t,o,c,l,0),a}function cd(i,e,t,n,s){let r;if(s===wg(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=dh(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=dh(a/n|0,i[a],i[a+1],r);return r&&or(r,r.next)&&(Qr(r),r=r.next),r}function Ss(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(or(t,t.next)||Fe(t.prev,t,t.next)===0)){if(Qr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Zr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Mg(i,n,s,r);let o=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(r?dg(i,n,s,r):fg(i)){e.push(c.i,i.i,l.i),Qr(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=pg(Ss(i),e),Zr(i,e,t,n,s,r,2)):a===2&&mg(i,e,t,n,s,r):Zr(Ss(i),e,t,n,s,r,1);break}}}function fg(i){const e=i.prev,t=i,n=i.next;if(Fe(e,t,n)>=0)return!1;const s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,u=Math.min(s,r,a),h=Math.min(o,c,l),f=Math.max(s,r,a),d=Math.max(o,c,l);let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&Pr(s,o,r,c,a,l,g.x,g.y)&&Fe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function dg(i,e,t,n){const s=i.prev,r=i,a=i.next;if(Fe(s,r,a)>=0)return!1;const o=s.x,c=r.x,l=a.x,u=s.y,h=r.y,f=a.y,d=Math.min(o,c,l),g=Math.min(u,h,f),M=Math.max(o,c,l),m=Math.max(u,h,f),p=xl(d,g,e,t,n),y=xl(M,m,e,t,n);let R=i.prevZ,S=i.nextZ;for(;R&&R.z>=p&&S&&S.z<=y;){if(R.x>=d&&R.x<=M&&R.y>=g&&R.y<=m&&R!==s&&R!==a&&Pr(o,u,c,h,l,f,R.x,R.y)&&Fe(R.prev,R,R.next)>=0||(R=R.prevZ,S.x>=d&&S.x<=M&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&Pr(o,u,c,h,l,f,S.x,S.y)&&Fe(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;R&&R.z>=p;){if(R.x>=d&&R.x<=M&&R.y>=g&&R.y<=m&&R!==s&&R!==a&&Pr(o,u,c,h,l,f,R.x,R.y)&&Fe(R.prev,R,R.next)>=0)return!1;R=R.prevZ}for(;S&&S.z<=y;){if(S.x>=d&&S.x<=M&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&Pr(o,u,c,h,l,f,S.x,S.y)&&Fe(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function pg(i,e){let t=i;do{const n=t.prev,s=t.next.next;!or(n,s)&&ud(n,t,t.next,s)&&Jr(n,s)&&Jr(s,n)&&(e.push(n.i,t.i,s.i),Qr(t),Qr(t.next),t=i=s),t=t.next}while(t!==i);return Ss(t)}function mg(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&bg(a,o)){let c=hd(a,o);a=Ss(a,a.next),c=Ss(c,c.next),Zr(a,e,t,n,s,r,0),Zr(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function gg(i,e,t,n){const s=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=cd(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Eg(l))}s.sort(xg);for(let r=0;r<s.length;r++)t=_g(s[r],t);return t}function xg(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function _g(i,e){const t=vg(i,e);if(!t)return e;const n=hd(t,i);return Ss(n,n.next),Ss(t,t.next)}function vg(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,a;if(or(i,t))return t;do{if(or(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,a=t.x<t.next.x?t:t.next,h===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,c=a.x,l=a.y;let u=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&ld(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){const h=Math.abs(s-t.y)/(n-t.x);Jr(t,i)&&(h<u||h===u&&(t.x>a.x||t.x===a.x&&Sg(a,t)))&&(a=t,u=h)}t=t.next}while(t!==o);return a}function Sg(i,e){return Fe(i.prev,i,e.prev)<0&&Fe(e.next,i,i.next)<0}function Mg(i,e,t,n){let s=i;do s.z===0&&(s.z=xl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,yg(s)}function yg(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function xl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Eg(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function ld(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Pr(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&ld(i,e,t,n,s,r,a,o)}function bg(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Ag(i,e)&&(Jr(i,e)&&Jr(e,i)&&Tg(i,e)&&(Fe(i.prev,i,e.prev)||Fe(i,e.prev,e))||or(i,e)&&Fe(i.prev,i,i.next)>0&&Fe(e.prev,e,e.next)>0)}function Fe(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function or(i,e){return i.x===e.x&&i.y===e.y}function ud(i,e,t,n){const s=La(Fe(i,e,t)),r=La(Fe(i,e,n)),a=La(Fe(t,n,i)),o=La(Fe(t,n,e));return!!(s!==r&&a!==o||s===0&&Pa(i,t,e)||r===0&&Pa(i,n,e)||a===0&&Pa(t,i,n)||o===0&&Pa(t,e,n))}function Pa(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function La(i){return i>0?1:i<0?-1:0}function Ag(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&ud(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Jr(i,e){return Fe(i.prev,i,i.next)<0?Fe(i,e,i.next)>=0&&Fe(i,i.prev,e)>=0:Fe(i,e,i.prev)<0||Fe(i,i.next,e)<0}function Tg(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function hd(i,e){const t=_l(i.i,i.x,i.y),n=_l(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function dh(i,e,t,n){const s=_l(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Qr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function _l(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function wg(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Rg{static triangulate(e,t,n=2){return hg(e,t,n)}}class kr{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return kr.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];ph(e),mh(n,e);let a=e.length;t.forEach(ph);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,mh(n,t[c]);const o=Rg.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function ph(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function mh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class fo extends Ue{constructor(e=[new gt(0,-.5),new gt(.5,0),new gt(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Wt(s,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],u=1/t,h=new L,f=new gt,d=new L,g=new L,M=new L;let m=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,d.x=p*1,d.y=-m,d.z=p*0,M.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(M.x,M.y,M.z);break;default:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=M.x,d.y+=M.y,d.z+=M.z,d.normalize(),c.push(d.x,d.y,d.z),M.copy(g)}for(let y=0;y<=t;y++){const R=n+y*u*s,S=Math.sin(R),A=Math.cos(R);for(let E=0;E<=e.length-1;E++){h.x=e[E].x*S,h.y=e[E].y,h.z=e[E].x*A,a.push(h.x,h.y,h.z),f.x=y/t,f.y=E/(e.length-1),o.push(f.x,f.y);const P=c[3*E+0]*S,_=c[3*E+1],T=c[3*E+0]*A;l.push(P,_,T)}}for(let y=0;y<t;y++)for(let R=0;R<e.length-1;R++){const S=R+y*e.length,A=S,E=S+e.length,P=S+e.length+1,_=S+1;r.push(A,E,_),r.push(P,_,E)}this.setIndex(r),this.setAttribute("position",new fe(a,3)),this.setAttribute("uv",new fe(o,2)),this.setAttribute("normal",new fe(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fo(e.points,e.segments,e.phiStart,e.phiLength)}}class Ln extends Ue{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,h=e/o,f=t/c,d=[],g=[],M=[],m=[];for(let p=0;p<u;p++){const y=p*f-a;for(let R=0;R<l;R++){const S=R*h-r;g.push(S,-y,0),M.push(0,0,1),m.push(R/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<o;y++){const R=y+l*p,S=y+l*(p+1),A=y+1+l*(p+1),E=y+1+l*p;d.push(R,S,E),d.push(S,A,E)}this.setIndex(d),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(M,3)),this.setAttribute("uv",new fe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ln(e.width,e.height,e.widthSegments,e.heightSegments)}}class ql extends Ue{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],l=[],u=[];let h=e;const f=(t-e)/s,d=new L,g=new gt;for(let M=0;M<=s;M++){for(let m=0;m<=n;m++){const p=r+m/n*a;d.x=h*Math.cos(p),d.y=h*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,u.push(g.x,g.y)}h+=f}for(let M=0;M<s;M++){const m=M*(n+1);for(let p=0;p<n;p++){const y=p+m,R=y,S=y+n+1,A=y+n+2,E=y+1;o.push(R,S,E),o.push(S,A,E)}}this.setIndex(o),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(l,3)),this.setAttribute("uv",new fe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ql(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Yl extends Ue{constructor(e=new od([new gt(0,.5),new gt(-.5,-.5),new gt(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],a=[];let o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(o,c,u),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new fe(s,3)),this.setAttribute("normal",new fe(r,3)),this.setAttribute("uv",new fe(a,2));function l(u){const h=s.length/3,f=u.extractPoints(t);let d=f.shape;const g=f.holes;kr.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const y=g[m];kr.isClockWise(y)===!0&&(g[m]=y.reverse())}const M=kr.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const y=g[m];d=d.concat(y)}for(let m=0,p=d.length;m<p;m++){const y=d[m];s.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let m=0,p=M.length;m<p;m++){const y=M[m],R=y[0]+h,S=y[1]+h,A=y[2]+h;n.push(R,S,A),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Cg(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const a=t[e.shapes[s]];n.push(a)}return new Yl(n,e.curveSegments)}}function Cg(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class Kl extends Ue{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new L,f=new L,d=[],g=[],M=[],m=[];for(let p=0;p<=n;p++){const y=[],R=p/n,S=a+R*o,A=e*Math.cos(S),E=Math.sqrt(e*e-A*A);let P=0;p===0&&a===0?P=.5/t:p===n&&c===Math.PI&&(P=-.5/t);for(let _=0;_<=t;_++){const T=_/t,I=s+T*r;h.x=-E*Math.cos(I),h.y=A,h.z=E*Math.sin(I),g.push(h.x,h.y,h.z),f.copy(h).normalize(),M.push(f.x,f.y,f.z),m.push(T+P,1-R),y.push(l++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const R=u[p][y+1],S=u[p][y],A=u[p+1][y],E=u[p+1][y+1];(p!==0||a>0)&&d.push(R,S,E),(p!==n-1||c<Math.PI)&&d.push(S,A,E)}this.setIndex(d),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(M,3)),this.setAttribute("uv",new fe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Pg extends Ue{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,s=new L,r=new L;if(e.index!==null){const a=e.attributes.position,o=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){const h=c[l],f=h.start,d=h.count;for(let g=f,M=f+d;g<M;g+=3)for(let m=0;m<3;m++){const p=o.getX(g+m),y=o.getX(g+(m+1)%3);s.fromBufferAttribute(a,p),r.fromBufferAttribute(a,y),gh(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{const a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){const u=3*o+l,h=3*o+(l+1)%3;s.fromBufferAttribute(a,u),r.fromBufferAttribute(a,h),gh(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new fe(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function gh(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(s)===!0?!1:(t.add(n),t.add(s),!0)}function cr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(xh(s))s.isRenderTargetTexture?(Gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(xh(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function _n(i){const e={};for(let t=0;t<i.length;t++){const n=cr(i[t]);for(const s in n)e[s]=n[s]}return e}function xh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Lg(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function fd(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ue.workingColorSpace}const Zl={clone:cr,merge:_n};var Ig=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ti extends ys{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ig,this.fragmentShader=Dg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cr(e.uniforms),this.uniformsGroups=Lg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ae().setHex(s.value);break;case"v2":this.uniforms[n].value=new gt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new be().fromArray(s.value);break;case"m3":this.uniforms[n].value=new qt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ae().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Ng extends ti{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Qa extends ys{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pl,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=Cl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ug extends ys{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $g extends ys{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class vo extends Ye{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ae(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Og extends vo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ae(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const oc=new Ae,_h=new L,vh=new L;class dd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gl,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;_h.setFromMatrixPosition(e.matrixWorld),t.position.copy(_h),vh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){oc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(oc,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===qr||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(oc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ia=new L,Da=new ur,ri=new L;class pd extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ia,Da,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ia,Da,ri.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ia,Da,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ia,Da,ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Yi=new L,Sh=new gt,Mh=new gt;class Tn extends pd{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Yr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(nr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yr*2*Math.atan(Math.tan(nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z)}getViewSize(e,t){return this.getViewBounds(e,Sh,Mh),t.subVectors(Mh,Sh)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(nr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Fg extends dd{constructor(){super(new Tn(90,1,.5,500)),this.isPointLightShadow=!0}}class Bg extends vo{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Fg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Jl extends pd{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class kg extends dd{constructor(){super(new Jl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class md extends vo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.shadow=new kg}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class zg extends vo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Gg extends Ue{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const Vs=-90,Hs=1;class Vg extends Ye{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Tn(Vs,Hs,e,t);s.layers=this.layers,this.add(s);const r=new Tn(Vs,Hs,e,t);r.layers=this.layers,this.add(r);const a=new Tn(Vs,Hs,e,t);a.layers=this.layers,this.add(a);const o=new Tn(Vs,Hs,e,t);o.layers=this.layers,this.add(o);const c=new Tn(Vs,Hs,e,t);c.layers=this.layers,this.add(c);const l=new Tn(Vs,Hs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===pi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===qr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Hg extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class vl extends Zf{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}const ou=class ou{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};ou.prototype.isMatrix2=!0;let yh=ou;const Eh=new L,Na=new L,Ws=new L,Xs=new L,cc=new L,Wg=new L,Xg=new L;class qg{constructor(e=new L,t=new L){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Eh.subVectors(e,this.start),Na.subVectors(this.end,this.start);const n=Na.dot(Na);if(n===0)return 0;let r=Na.dot(Eh)/n;return t&&(r=Wt(r,0,1)),r}closestPointToPoint(e,t,n){const s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=Wg,n=Xg){const s=10000000000000001e-32;let r,a;const o=this.start,c=e.start,l=this.end,u=e.end;Ws.subVectors(l,o),Xs.subVectors(u,c),cc.subVectors(o,c);const h=Ws.dot(Ws),f=Xs.dot(Xs),d=Xs.dot(cc);if(h<=s&&f<=s)return t.copy(o),n.copy(c),t.sub(n),t.dot(t);if(h<=s)r=0,a=d/f,a=Wt(a,0,1);else{const g=Ws.dot(cc);if(f<=s)a=0,r=Wt(-g/h,0,1);else{const M=Ws.dot(Xs),m=h*f-M*M;m!==0?r=Wt((M*d-g*f)/m,0,1):r=0,a=(M*r+d)/f,a<0?(a=0,r=Wt(-g/h,0,1)):a>1&&(a=1,r=Wt((M-g)/h,0,1))}}return t.copy(o).addScaledVector(Ws,r),n.copy(c).addScaledVector(Xs,a),t.distanceToSquared(n)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}function bh(i,e,t,n){const s=Yg(n);switch(t){case Ff:return i*e;case kf:return i*e/s.components*s.byteLength;case Nl:return i*e/s.components*s.byteLength;case vs:return i*e*2/s.components*s.byteLength;case Ul:return i*e*2/s.components*s.byteLength;case Bf:return i*e*3/s.components*s.byteLength;case Zn:return i*e*4/s.components*s.byteLength;case $l:return i*e*4/s.components*s.byteLength;case Ya:case Ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Za:case Ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bc:case zc:return Math.max(i,16)*Math.max(e,8)/4;case Fc:case kc:return Math.max(i,8)*Math.max(e,8)/2;case Gc:case Vc:case Wc:case Xc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Hc:case ao:case qc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Yc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Kc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Zc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Jc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Qc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case jc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case tl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case el:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case nl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case il:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case sl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case rl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case al:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ol:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case cl:case ll:case ul:return Math.ceil(i/4)*Math.ceil(e/4)*16;case hl:case fl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case oo:case dl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Yg(i){switch(i){case In:case Nf:return{byteLength:1,components:1};case Wr:case Uf:case yi:return{byteLength:2,components:1};case Il:case Dl:return{byteLength:2,components:4};case Mi:case Ll:case di:return{byteLength:4,components:1};case $f:case Of:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rl}}));typeof window<"u"&&(window.__THREE__?Gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function gd(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Kg(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),o.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],M=h[d];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++f,h[f]=M)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const M=h[d];i.bufferSubData(l,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Zg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jg=`#ifdef USE_ALPHAHASH
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
#endif`,Qg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ex=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nx=`#ifdef USE_AOMAP
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
#endif`,ix=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sx=`#ifdef USE_BATCHING
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
#endif`,rx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ax=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ox=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lx=`#ifdef USE_IRIDESCENCE
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
#endif`,ux=`#ifdef USE_BUMPMAP
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
#endif`,hx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,px=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,_x=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,vx=`#define PI 3.141592653589793
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
} // validated`,Sx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mx=`vec3 transformedNormal = objectNormal;
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
#endif`,yx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ex=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ax=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tx="gl_FragColor = linearToOutputTexel( gl_FragColor );",wx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rx=`#ifdef USE_ENVMAP
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
#endif`,Cx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Px=`#ifdef USE_ENVMAP
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
#endif`,Lx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ix=`#ifdef USE_ENVMAP
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
#endif`,Dx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ux=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$x=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ox=`#ifdef USE_GRADIENTMAP
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
}`,Fx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Gx=`#ifdef USE_ENVMAP
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
#endif`,Vx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qx=`PhysicalMaterial material;
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
#endif`,Yx=`uniform sampler2D dfgLUT;
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
}`,Kx=`
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
#endif`,Zx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,jx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,t1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,i1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,s1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,r1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,a1=`#if defined( USE_POINTS_UV )
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
#endif`,o1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,c1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,l1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,u1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,h1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f1=`#ifdef USE_MORPHTARGETS
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
#endif`,d1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,m1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,g1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,v1=`#ifdef USE_NORMALMAP
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
#endif`,S1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,M1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,y1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,E1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,b1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,A1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,T1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,w1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,R1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,C1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,P1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,L1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,I1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,D1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,N1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,U1=`float getShadowMask() {
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
}`,$1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,O1=`#ifdef USE_SKINNING
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
#endif`,F1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,B1=`#ifdef USE_SKINNING
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
#endif`,k1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,z1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,G1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,V1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,H1=`#ifdef USE_TRANSMISSION
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
#endif`,W1=`#ifdef USE_TRANSMISSION
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
#endif`,X1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Z1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,J1=`uniform sampler2D t2D;
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
}`,Q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,t_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n_=`#include <common>
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
}`,i_=`#if DEPTH_PACKING == 3200
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
}`,s_=`#define DISTANCE
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
}`,r_=`#define DISTANCE
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
}`,a_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,o_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c_=`uniform float scale;
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
}`,l_=`uniform vec3 diffuse;
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
}`,u_=`#include <common>
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
}`,h_=`uniform vec3 diffuse;
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
}`,f_=`#define LAMBERT
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
}`,d_=`#define LAMBERT
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
}`,p_=`#define MATCAP
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
}`,m_=`#define MATCAP
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
}`,g_=`#define NORMAL
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
}`,x_=`#define NORMAL
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
}`,__=`#define PHONG
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
}`,v_=`#define PHONG
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
}`,S_=`#define STANDARD
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
}`,M_=`#define STANDARD
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
}`,y_=`#define TOON
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
}`,E_=`#define TOON
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
}`,b_=`uniform float size;
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
}`,A_=`uniform vec3 diffuse;
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
}`,T_=`#include <common>
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
}`,w_=`uniform vec3 color;
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
}`,R_=`uniform float rotation;
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
}`,C_=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:Zg,alphahash_pars_fragment:Jg,alphamap_fragment:Qg,alphamap_pars_fragment:jg,alphatest_fragment:tx,alphatest_pars_fragment:ex,aomap_fragment:nx,aomap_pars_fragment:ix,batching_pars_vertex:sx,batching_vertex:rx,begin_vertex:ax,beginnormal_vertex:ox,bsdfs:cx,iridescence_fragment:lx,bumpmap_pars_fragment:ux,clipping_planes_fragment:hx,clipping_planes_pars_fragment:fx,clipping_planes_pars_vertex:dx,clipping_planes_vertex:px,color_fragment:mx,color_pars_fragment:gx,color_pars_vertex:xx,color_vertex:_x,common:vx,cube_uv_reflection_fragment:Sx,defaultnormal_vertex:Mx,displacementmap_pars_vertex:yx,displacementmap_vertex:Ex,emissivemap_fragment:bx,emissivemap_pars_fragment:Ax,colorspace_fragment:Tx,colorspace_pars_fragment:wx,envmap_fragment:Rx,envmap_common_pars_fragment:Cx,envmap_pars_fragment:Px,envmap_pars_vertex:Lx,envmap_physical_pars_fragment:Gx,envmap_vertex:Ix,fog_vertex:Dx,fog_pars_vertex:Nx,fog_fragment:Ux,fog_pars_fragment:$x,gradientmap_pars_fragment:Ox,lightmap_pars_fragment:Fx,lights_lambert_fragment:Bx,lights_lambert_pars_fragment:kx,lights_pars_begin:zx,lights_toon_fragment:Vx,lights_toon_pars_fragment:Hx,lights_phong_fragment:Wx,lights_phong_pars_fragment:Xx,lights_physical_fragment:qx,lights_physical_pars_fragment:Yx,lights_fragment_begin:Kx,lights_fragment_maps:Zx,lights_fragment_end:Jx,lightprobes_pars_fragment:Qx,logdepthbuf_fragment:jx,logdepthbuf_pars_fragment:t1,logdepthbuf_pars_vertex:e1,logdepthbuf_vertex:n1,map_fragment:i1,map_pars_fragment:s1,map_particle_fragment:r1,map_particle_pars_fragment:a1,metalnessmap_fragment:o1,metalnessmap_pars_fragment:c1,morphinstance_vertex:l1,morphcolor_vertex:u1,morphnormal_vertex:h1,morphtarget_pars_vertex:f1,morphtarget_vertex:d1,normal_fragment_begin:p1,normal_fragment_maps:m1,normal_pars_fragment:g1,normal_pars_vertex:x1,normal_vertex:_1,normalmap_pars_fragment:v1,clearcoat_normal_fragment_begin:S1,clearcoat_normal_fragment_maps:M1,clearcoat_pars_fragment:y1,iridescence_pars_fragment:E1,opaque_fragment:b1,packing:A1,premultiplied_alpha_fragment:T1,project_vertex:w1,dithering_fragment:R1,dithering_pars_fragment:C1,roughnessmap_fragment:P1,roughnessmap_pars_fragment:L1,shadowmap_pars_fragment:I1,shadowmap_pars_vertex:D1,shadowmap_vertex:N1,shadowmask_pars_fragment:U1,skinbase_vertex:$1,skinning_pars_vertex:O1,skinning_vertex:F1,skinnormal_vertex:B1,specularmap_fragment:k1,specularmap_pars_fragment:z1,tonemapping_fragment:G1,tonemapping_pars_fragment:V1,transmission_fragment:H1,transmission_pars_fragment:W1,uv_pars_fragment:X1,uv_pars_vertex:q1,uv_vertex:Y1,worldpos_vertex:K1,background_vert:Z1,background_frag:J1,backgroundCube_vert:Q1,backgroundCube_frag:j1,cube_vert:t_,cube_frag:e_,depth_vert:n_,depth_frag:i_,distance_vert:s_,distance_frag:r_,equirect_vert:a_,equirect_frag:o_,linedashed_vert:c_,linedashed_frag:l_,meshbasic_vert:u_,meshbasic_frag:h_,meshlambert_vert:f_,meshlambert_frag:d_,meshmatcap_vert:p_,meshmatcap_frag:m_,meshnormal_vert:g_,meshnormal_frag:x_,meshphong_vert:__,meshphong_frag:v_,meshphysical_vert:S_,meshphysical_frag:M_,meshtoon_vert:y_,meshtoon_frag:E_,points_vert:b_,points_frag:A_,shadow_vert:T_,shadow_frag:w_,sprite_vert:R_,sprite_frag:C_},pt={common:{diffuse:{value:new ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new ae(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},wn={basic:{uniforms:_n([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:_n([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new ae(0)},envMapIntensity:{value:1}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:_n([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new ae(0)},specular:{value:new ae(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:_n([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:_n([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new ae(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:_n([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:_n([pt.points,pt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:_n([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:_n([pt.common,pt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:_n([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:_n([pt.sprite,pt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distance:{uniforms:_n([pt.common,pt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distance_vert,fragmentShader:jt.distance_frag},shadow:{uniforms:_n([pt.lights,pt.fog,{color:{value:new ae(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};wn.physical={uniforms:_n([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new ae(0)},specularColor:{value:new ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const Ua={r:0,b:0,g:0},P_=new Ae,xd=new qt;xd.set(-1,0,0,0,1,0,0,0,1);function L_(i,e,t,n,s,r){const a=new ae(0);let o=s===!0?0:1,c,l,u=null,h=0,f=null;function d(y){let R=y.isScene===!0?y.background:null;if(R&&R.isTexture){const S=y.backgroundBlurriness>0;R=e.get(R,S)}return R}function g(y){let R=!1;const S=d(y);S===null?m(a,o):S&&S.isColor&&(m(S,1),R=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(y,R){const S=d(R);S&&(S.isCubeTexture||S.mapping===_o)?(l===void 0&&(l=new re(new vn(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:cr(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,E,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(P_.makeRotationFromEuler(R.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(xd),l.material.toneMapped=ue.getTransfer(S.colorSpace)!==Me,(u!==S||h!==S.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,h=S.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new re(new Ln(2,2),new ti({name:"BackgroundMaterial",uniforms:cr(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:xs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=ue.getTransfer(S.colorSpace)!==Me,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||h!==S.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,h=S.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,R){y.getRGB(Ua,fd(i)),t.buffers.color.setClear(Ua.r,Ua.g,Ua.b,R,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,R=1){a.set(y),o=R,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:g,addToRenderList:M,dispose:p}}function I_(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(B,F,V,N,G){let nt=!1;const Z=h(B,N,V,F);r!==Z&&(r=Z,l(r.object)),nt=d(B,N,V,G),nt&&g(B,N,V,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(nt||a)&&(a=!1,S(B,F,V,N),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return i.createVertexArray()}function l(B){return i.bindVertexArray(B)}function u(B){return i.deleteVertexArray(B)}function h(B,F,V,N){const G=N.wireframe===!0;let nt=n[F.id];nt===void 0&&(nt={},n[F.id]=nt);const Z=B.isInstancedMesh===!0?B.id:0;let lt=nt[Z];lt===void 0&&(lt={},nt[Z]=lt);let J=lt[V.id];J===void 0&&(J={},lt[V.id]=J);let K=J[G];return K===void 0&&(K=f(c()),J[G]=K),K}function f(B){const F=[],V=[],N=[];for(let G=0;G<t;G++)F[G]=0,V[G]=0,N[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:V,attributeDivisors:N,object:B,attributes:{},index:null}}function d(B,F,V,N){const G=r.attributes,nt=F.attributes;let Z=0;const lt=V.getAttributes();for(const J in lt)if(lt[J].location>=0){const tt=G[J];let Et=nt[J];if(Et===void 0&&(J==="instanceMatrix"&&B.instanceMatrix&&(Et=B.instanceMatrix),J==="instanceColor"&&B.instanceColor&&(Et=B.instanceColor)),tt===void 0||tt.attribute!==Et||Et&&tt.data!==Et.data)return!0;Z++}return r.attributesNum!==Z||r.index!==N}function g(B,F,V,N){const G={},nt=F.attributes;let Z=0;const lt=V.getAttributes();for(const J in lt)if(lt[J].location>=0){let tt=nt[J];tt===void 0&&(J==="instanceMatrix"&&B.instanceMatrix&&(tt=B.instanceMatrix),J==="instanceColor"&&B.instanceColor&&(tt=B.instanceColor));const Et={};Et.attribute=tt,tt&&tt.data&&(Et.data=tt.data),G[J]=Et,Z++}r.attributes=G,r.attributesNum=Z,r.index=N}function M(){const B=r.newAttributes;for(let F=0,V=B.length;F<V;F++)B[F]=0}function m(B){p(B,0)}function p(B,F){const V=r.newAttributes,N=r.enabledAttributes,G=r.attributeDivisors;V[B]=1,N[B]===0&&(i.enableVertexAttribArray(B),N[B]=1),G[B]!==F&&(i.vertexAttribDivisor(B,F),G[B]=F)}function y(){const B=r.newAttributes,F=r.enabledAttributes;for(let V=0,N=F.length;V<N;V++)F[V]!==B[V]&&(i.disableVertexAttribArray(V),F[V]=0)}function R(B,F,V,N,G,nt,Z){Z===!0?i.vertexAttribIPointer(B,F,V,G,nt):i.vertexAttribPointer(B,F,V,N,G,nt)}function S(B,F,V,N){M();const G=N.attributes,nt=V.getAttributes(),Z=F.defaultAttributeValues;for(const lt in nt){const J=nt[lt];if(J.location>=0){let K=G[lt];if(K===void 0&&(lt==="instanceMatrix"&&B.instanceMatrix&&(K=B.instanceMatrix),lt==="instanceColor"&&B.instanceColor&&(K=B.instanceColor)),K!==void 0){const tt=K.normalized,Et=K.itemSize,xt=e.get(K);if(xt===void 0)continue;const Jt=xt.buffer,Kt=xt.type,oe=xt.bytesPerElement,Q=Kt===i.INT||Kt===i.UNSIGNED_INT||K.gpuType===Ll;if(K.isInterleavedBufferAttribute){const rt=K.data,Lt=rt.stride,Xt=K.offset;if(rt.isInstancedInterleavedBuffer){for(let Rt=0;Rt<J.locationSize;Rt++)p(J.location+Rt,rt.meshPerAttribute);B.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Rt=0;Rt<J.locationSize;Rt++)m(J.location+Rt);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let Rt=0;Rt<J.locationSize;Rt++)R(J.location+Rt,Et/J.locationSize,Kt,tt,Lt*oe,(Xt+Et/J.locationSize*Rt)*oe,Q)}else{if(K.isInstancedBufferAttribute){for(let rt=0;rt<J.locationSize;rt++)p(J.location+rt,K.meshPerAttribute);B.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let rt=0;rt<J.locationSize;rt++)m(J.location+rt);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let rt=0;rt<J.locationSize;rt++)R(J.location+rt,Et/J.locationSize,Kt,tt,Et*oe,Et/J.locationSize*rt*oe,Q)}}else if(Z!==void 0){const tt=Z[lt];if(tt!==void 0)switch(tt.length){case 2:i.vertexAttrib2fv(J.location,tt);break;case 3:i.vertexAttrib3fv(J.location,tt);break;case 4:i.vertexAttrib4fv(J.location,tt);break;default:i.vertexAttrib1fv(J.location,tt)}}}}y()}function A(){T();for(const B in n){const F=n[B];for(const V in F){const N=F[V];for(const G in N){const nt=N[G];for(const Z in nt)u(nt[Z].object),delete nt[Z];delete N[G]}}delete n[B]}}function E(B){if(n[B.id]===void 0)return;const F=n[B.id];for(const V in F){const N=F[V];for(const G in N){const nt=N[G];for(const Z in nt)u(nt[Z].object),delete nt[Z];delete N[G]}}delete n[B.id]}function P(B){for(const F in n){const V=n[F];for(const N in V){const G=V[N];if(G[B.id]===void 0)continue;const nt=G[B.id];for(const Z in nt)u(nt[Z].object),delete nt[Z];delete G[B.id]}}}function _(B){for(const F in n){const V=n[F],N=B.isInstancedMesh===!0?B.id:0,G=V[N];if(G!==void 0){for(const nt in G){const Z=G[nt];for(const lt in Z)u(Z[lt].object),delete Z[lt];delete G[nt]}delete V[N],Object.keys(V).length===0&&delete n[F]}}}function T(){I(),a=!0,r!==s&&(r=s,l(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:I,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:P,initAttributes:M,enableAttribute:m,disableUnusedAttributes:y}}function D_(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let f=0;for(let d=0;d<u;d++)f+=l[d];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function N_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==Zn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const _=P===yi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==In&&P!==di&&!_&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Gt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:R,maxFragmentUniforms:S,maxSamples:A,samples:E}}function U_(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Ji,o=new qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,M=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const y=r?0:n,R=y*4;let S=p.clippingState||null;c.value=S,S=u(g,f,R,d);for(let A=0;A!==R;++A)S[A]=t[A];p.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const M=h!==null?h.length:0;let m=null;if(M!==0){if(m=c.value,g!==!0||m===null){const p=d+M*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let R=0,S=d;R!==M;++R,S+=4)a.copy(h[R]).applyMatrix4(y,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}const js=4,$_=6,O_=20,F_=256,br=new Jl,Ah=new ae;let lc=null,uc=0,hc=0,fc=!1;const B_=new L,hs=new L;class Th{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=B_}=r;lc=this._renderer.getRenderTarget(),uc=this._renderer.getActiveCubeFace(),hc=this._renderer.getActiveMipmapLevel(),fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ch(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(lc,uc,hc),this._renderer.xr.enabled=fc,e.scissorTest=!1,qs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_s||e.mapping===ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lc=this._renderer.getRenderTarget(),uc=this._renderer.getActiveCubeFace(),hc=this._renderer.getActiveMipmapLevel(),fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:yi,format:Zn,colorSpace:co,depthBuffer:!1},s=wh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wh(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=k_(r)),this._blurMaterial=G_(r,e,t),this._ggxMaterial=z_(r,e,t)}return s}_compileMaterial(e){const t=new re(new Ue,e);this._renderer.compile(t,br)}_sceneToCubeUV(e,t,n,s,r){const c=new Tn(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Ah),h.toneMapping=xi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new re(new vn,new ui({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,m=M.material;let p=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,p=!0):(m.color.copy(Ah),p=!0);for(let R=0;R<6;R++){const S=R%3;S===0?(c.up.set(0,l[R],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[R],r.y,r.z)):S===1?(c.up.set(0,0,l[R]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[R],r.z)):(c.up.set(0,l[R],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[R]));const A=this._cubeSize;qs(s,S*A,R>2?A:0,A,A),h.setRenderTarget(s),p&&h.render(M,c),h.render(e,c)}h.toneMapping=d,h.autoClear=f,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===_s||e.mapping===ar;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ch()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;qs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,br)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),f=l*1.25,d=h*f,{_lodMax:g}=this,M=this._sizeLods[n],m=3*M*(n>g-js?n-g+js:0),p=4*(this._cubeSize-M);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=g-t,qs(r,m,p,3*M,2*M),s.setRenderTarget(r),s.render(o,br),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,qs(e,m,p,3*M,2*M),s.setRenderTarget(e),s.render(o,br)}_blur(e,t,n,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){const a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;const l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;const u=this._sizeLods[s],h=3*u*(s>this._lodMax-js?s-this._lodMax+js:0),f=4*(this._cubeSize-u);qs(t,h,f,3*u,2*u),a.setRenderTarget(t),a.render(c,br)}}function k_(i){const e=[],t=[];let n=i;const s=i-js+1+$_;for(let r=0;r<s;r++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],h=6,f=6,d=3,g=new Float32Array(d*f*h),M=new Float32Array(d*f*h);for(let p=0;p<h;p++){const y=p%3*2/3-1,R=p>2?0:-1,S=[y,R,0,y+2/3,R,0,y+2/3,R+1,0,y,R,0,y+2/3,R+1,0,y,R+1,0];g.set(S,d*f*p);for(let A=0;A<f;A++){const E=u[A*2]*2-1,P=u[A*2+1]*2-1;p===0?hs.set(1,P,E):p===1?hs.set(-E,1,-P):p===2?hs.set(-E,P,1):p===3?hs.set(-1,P,-E):p===4?hs.set(-E,-1,P):hs.set(E,P,-1),hs.toArray(M,(p*f+A)*d)}}const m=new Ue;m.setAttribute("position",new Hn(g,d)),m.setAttribute("outputDirection",new Hn(M,d)),t.push(new re(m,null)),n>js&&n--}return{lodMeshes:t,sizeLods:e}}function wh(i,e,t){const n=new jn(i,e,t);return n.texture.mapping=_o,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function z_(i,e,t){return new ti({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:F_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:So(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function G_(i,e,t){return new ti({name:"SphericalGaussianBlur",defines:{SAMPLES:O_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:So(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Rh(){return new ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:So(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Ch(){return new ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:So(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function So(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class _d extends jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new td(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new vn(5,5,5),r=new ti({name:"CubemapFromEquirect",uniforms:cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rn,blending:Ni});r.uniforms.tEquirect.value=t;const a=new re(s,r),o=t.minFilter;return t.minFilter===ps&&(t.minFilter=pn),new Vg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function V_(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?a(f):r(f)}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===Io||d===Do)if(e.has(f)){const g=e.get(f).texture;return o(g,f.mapping)}else{const g=f.image;if(g&&g.height>0){const M=new _d(g.height);return M.fromEquirectangularTexture(i,f),e.set(f,M),f.addEventListener("dispose",l),o(M.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const d=f.mapping,g=d===Io||d===Do,M=d===_s||d===ar;if(g||M){let m=t.get(f);const p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new Th(i)),m=g?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{const y=f.image;return g&&y&&y.height>0||M&&y&&c(y)?(n===null&&(n=new Th(i)),m=g?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function o(f,d){return d===Io?f.mapping=_s:d===Do&&(f.mapping=ar),f}function c(f){let d=0;const g=6;for(let M=0;M<g;M++)f[M]!==void 0&&d++;return d===g}function l(f){const d=f.target;d.removeEventListener("dispose",l);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function u(f){const d=f.target;d.removeEventListener("dispose",u);const g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function H_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&er("WebGLRenderer: "+n+" extension not supported."),s}}}function W_(i,e,t,n){const s={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const d in f)e.update(f[d],i.ARRAY_BUFFER)}function l(h){const f=[],d=h.index,g=h.attributes.position;let M=0;if(g===void 0)return;if(d!==null){const y=d.array;M=d.version;for(let R=0,S=y.length;R<S;R+=3){const A=y[R+0],E=y[R+1],P=y[R+2];f.push(A,E,E,P,P,A)}}else{const y=g.array;M=g.version;for(let R=0,S=y.length/3-1;R<S;R+=3){const A=R+0,E=R+1,P=R+2;f.push(A,E,E,P,P,A)}}const m=new(g.count>=65535?Kf:Yf)(f,1);m.version=M;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function X_(i,e,t){let n;function s(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function c(h,f){i.drawElements(n,f,r,h*a),t.update(f,n,1)}function l(h,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,h*a,d),t.update(f,n,d))}function u(h,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,d);let M=0;for(let m=0;m<d;m++)M+=f[m];t.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function q_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:me("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Y_(i,e,t){const n=new WeakMap,s=new be;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let I=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",I)};var d=I;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],R=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),M===!0&&(S=2),m===!0&&(S=3);let A=o.attributes.position.count*S,E=1;A>e.maxTextureSize&&(E=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const P=new Float32Array(A*E*4*h),_=new Hf(P,A,E,h);_.type=di,_.needsUpdate=!0;const T=S*4;for(let B=0;B<h;B++){const F=p[B],V=y[B],N=R[B],G=A*E*4*B;for(let nt=0;nt<F.count;nt++){const Z=nt*T;g===!0&&(s.fromBufferAttribute(F,nt),P[G+Z+0]=s.x,P[G+Z+1]=s.y,P[G+Z+2]=s.z,P[G+Z+3]=0),M===!0&&(s.fromBufferAttribute(V,nt),P[G+Z+4]=s.x,P[G+Z+5]=s.y,P[G+Z+6]=s.z,P[G+Z+7]=0),m===!0&&(s.fromBufferAttribute(N,nt),P[G+Z+8]=s.x,P[G+Z+9]=s.y,P[G+Z+10]=s.z,P[G+Z+11]=N.itemSize===4?s.w:1)}}f={count:h,texture:_,size:new gt(A,E)},n.set(o,f),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const M=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",M),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function K_(i,e,t,n,s){let r=new WeakMap;function a(l){const u=s.render.frame,h=l.geometry,f=e.get(l,h);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function o(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const Z_={[wf]:"LINEAR_TONE_MAPPING",[Rf]:"REINHARD_TONE_MAPPING",[Cf]:"CINEON_TONE_MAPPING",[Pl]:"ACES_FILMIC_TONE_MAPPING",[Lf]:"AGX_TONE_MAPPING",[If]:"NEUTRAL_TONE_MAPPING",[Pf]:"CUSTOM_TONE_MAPPING"};function J_(i,e,t,n,s,r){const a=new jn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new Ue;l.setAttribute("position",new fe([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new fe([0,2,0,0,2,0],2));const u=new Ng({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new re(l,u),f=new Jl(-1,1,1,-1,0,1);let d=null,g=null,M=!1,m,p=null,y=[],R=!1;this.setSize=function(S,A){a.setSize(S,A),o!==null&&o.setSize(S,A),c!==null&&c.setSize(S,A);for(let E=0;E<y.length;E++){const P=y[E];P.setSize&&P.setSize(S,A)}},this.setEffects=function(S){y=S,R=y.length>0&&y[0].isRenderPass===!0;const A=a.width,E=a.height;y.length>0&&o===null&&(o=new jn(A,E,{type:yi,depthBuffer:!1,stencilBuffer:!1}),c=new jn(A,E,{type:yi,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<y.length;P++){const _=y[P];_.setSize&&_.setSize(A,E)}},this.begin=function(S,A){if(M||S.toneMapping===xi&&y.length===0)return!1;if(p=A,A!==null){const E=A.width,P=A.height;(a.width!==E||a.height!==P)&&this.setSize(E,P)}return R===!1&&S.setRenderTarget(a),m=S.toneMapping,S.toneMapping=xi,!0},this.hasRenderPass=function(){return R},this.end=function(S,A){S.toneMapping=m,M=!0;let E=a,P=o;for(let _=0;_<y.length;_++){const T=y[_];T.enabled!==!1&&(T.render(S,P,E,A),T.needsSwap!==!1&&(E=P,P=P===o?c:o))}if(d!==S.outputColorSpace||g!==S.toneMapping){d=S.outputColorSpace,g=S.toneMapping,u.defines={},ue.getTransfer(d)===Me&&(u.defines.SRGB_TRANSFER="");const _=Z_[g];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=E.texture,S.setRenderTarget(p),S.render(h,f),p=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}const vd=new on,Sl=new Kr(1,1),Sd=new Hf,Md=new D0,yd=new td,Ph=[],Lh=[],Ih=new Float32Array(16),Dh=new Float32Array(9),Nh=new Float32Array(4);function fr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Ph[s];if(r===void 0&&(r=new Float32Array(s),Ph[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Ke(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ze(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Mo(i,e){let t=Lh[e];t===void 0&&(t=new Int32Array(e),Lh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Q_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function j_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ke(t,e))return;i.uniform2fv(this.addr,e),Ze(t,e)}}function tv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ke(t,e))return;i.uniform3fv(this.addr,e),Ze(t,e)}}function ev(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ke(t,e))return;i.uniform4fv(this.addr,e),Ze(t,e)}}function nv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ke(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ze(t,e)}else{if(Ke(t,n))return;Nh.set(n),i.uniformMatrix2fv(this.addr,!1,Nh),Ze(t,n)}}function iv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ke(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ze(t,e)}else{if(Ke(t,n))return;Dh.set(n),i.uniformMatrix3fv(this.addr,!1,Dh),Ze(t,n)}}function sv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ke(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ze(t,e)}else{if(Ke(t,n))return;Ih.set(n),i.uniformMatrix4fv(this.addr,!1,Ih),Ze(t,n)}}function rv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function av(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ke(t,e))return;i.uniform2iv(this.addr,e),Ze(t,e)}}function ov(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ke(t,e))return;i.uniform3iv(this.addr,e),Ze(t,e)}}function cv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ke(t,e))return;i.uniform4iv(this.addr,e),Ze(t,e)}}function lv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function uv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ke(t,e))return;i.uniform2uiv(this.addr,e),Ze(t,e)}}function hv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ke(t,e))return;i.uniform3uiv(this.addr,e),Ze(t,e)}}function fv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ke(t,e))return;i.uniform4uiv(this.addr,e),Ze(t,e)}}function dv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Sl.compareFunction=t.isReversedDepthBuffer()?Fl:Ol,r=Sl):r=vd,t.setTexture2D(e||r,s)}function pv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Md,s)}function mv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||yd,s)}function gv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Sd,s)}function xv(i){switch(i){case 5126:return Q_;case 35664:return j_;case 35665:return tv;case 35666:return ev;case 35674:return nv;case 35675:return iv;case 35676:return sv;case 5124:case 35670:return rv;case 35667:case 35671:return av;case 35668:case 35672:return ov;case 35669:case 35673:return cv;case 5125:return lv;case 36294:return uv;case 36295:return hv;case 36296:return fv;case 35678:case 36198:case 36298:case 36306:case 35682:return dv;case 35679:case 36299:case 36307:return pv;case 35680:case 36300:case 36308:case 36293:return mv;case 36289:case 36303:case 36311:case 36292:return gv}}function _v(i,e){i.uniform1fv(this.addr,e)}function vv(i,e){const t=fr(e,this.size,2);i.uniform2fv(this.addr,t)}function Sv(i,e){const t=fr(e,this.size,3);i.uniform3fv(this.addr,t)}function Mv(i,e){const t=fr(e,this.size,4);i.uniform4fv(this.addr,t)}function yv(i,e){const t=fr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ev(i,e){const t=fr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function bv(i,e){const t=fr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Av(i,e){i.uniform1iv(this.addr,e)}function Tv(i,e){i.uniform2iv(this.addr,e)}function wv(i,e){i.uniform3iv(this.addr,e)}function Rv(i,e){i.uniform4iv(this.addr,e)}function Cv(i,e){i.uniform1uiv(this.addr,e)}function Pv(i,e){i.uniform2uiv(this.addr,e)}function Lv(i,e){i.uniform3uiv(this.addr,e)}function Iv(i,e){i.uniform4uiv(this.addr,e)}function Dv(i,e,t){const n=this.cache,s=e.length,r=Mo(t,s);Ke(n,r)||(i.uniform1iv(this.addr,r),Ze(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Sl:a=vd;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Nv(i,e,t){const n=this.cache,s=e.length,r=Mo(t,s);Ke(n,r)||(i.uniform1iv(this.addr,r),Ze(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Md,r[a])}function Uv(i,e,t){const n=this.cache,s=e.length,r=Mo(t,s);Ke(n,r)||(i.uniform1iv(this.addr,r),Ze(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||yd,r[a])}function $v(i,e,t){const n=this.cache,s=e.length,r=Mo(t,s);Ke(n,r)||(i.uniform1iv(this.addr,r),Ze(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Sd,r[a])}function Ov(i){switch(i){case 5126:return _v;case 35664:return vv;case 35665:return Sv;case 35666:return Mv;case 35674:return yv;case 35675:return Ev;case 35676:return bv;case 5124:case 35670:return Av;case 35667:case 35671:return Tv;case 35668:case 35672:return wv;case 35669:case 35673:return Rv;case 5125:return Cv;case 36294:return Pv;case 36295:return Lv;case 36296:return Iv;case 35678:case 36198:case 36298:case 36306:case 35682:return Dv;case 35679:case 36299:case 36307:return Nv;case 35680:case 36300:case 36308:case 36293:return Uv;case 36289:case 36303:case 36311:case 36292:return $v}}class Fv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=xv(t.type)}}class Bv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ov(t.type)}}class kv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const dc=/(\w+)(\])?(\[|\.)?/g;function Uh(i,e){i.seq.push(e),i.map[e.id]=e}function zv(i,e,t){const n=i.name,s=n.length;for(dc.lastIndex=0;;){const r=dc.exec(n),a=dc.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Uh(t,l===void 0?new Fv(o,i,e):new Bv(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new kv(o),Uh(t,h)),t=h}}}class ja{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);zv(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function $h(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Gv=37297;let Vv=0;function Hv(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Oh=new qt;function Wv(i){ue._getMatrix(Oh,ue.workingColorSpace,i);const e=`mat3( ${Oh.elements.map(t=>t.toFixed(4))} )`;switch(ue.getTransfer(i)){case lo:return[e,"LinearTransferOETF"];case Me:return[e,"sRGBTransferOETF"];default:return Gt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Fh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Hv(i.getShaderSource(e),o)}else return r}function Xv(i,e){const t=Wv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const qv={[wf]:"Linear",[Rf]:"Reinhard",[Cf]:"Cineon",[Pl]:"ACESFilmic",[Lf]:"AgX",[If]:"Neutral",[Pf]:"Custom"};function Yv(i,e){const t=qv[e];return t===void 0?(Gt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const $a=new L;function Kv(){ue.getLuminanceCoefficients($a);const i=$a.x.toFixed(4),e=$a.y.toFixed(4),t=$a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lr).join(`
`)}function Jv(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Qv(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Lr(i){return i!==""}function Bh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ml(i){return i.replace(jv,eS)}const tS=new Map;function eS(i,e){let t=jt[e];if(t===void 0){const n=tS.get(e);if(n!==void 0)t=jt[n],Gt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ml(t)}const nS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zh(i){return i.replace(nS,iS)}function iS(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Gh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const sS={[qa]:"SHADOWMAP_TYPE_PCF",[Cr]:"SHADOWMAP_TYPE_VSM"};function rS(i){return sS[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const aS={[_s]:"ENVMAP_TYPE_CUBE",[ar]:"ENVMAP_TYPE_CUBE",[_o]:"ENVMAP_TYPE_CUBE_UV"};function oS(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":aS[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const cS={[ar]:"ENVMAP_MODE_REFRACTION"};function lS(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":cS[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const uS={[Cl]:"ENVMAP_BLENDING_MULTIPLY",[Zm]:"ENVMAP_BLENDING_MIX",[Jm]:"ENVMAP_BLENDING_ADD"};function hS(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":uS[i.combine]||"ENVMAP_BLENDING_NONE"}function fS(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function dS(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=rS(t),l=oS(t),u=lS(t),h=hS(t),f=fS(t),d=Zv(t),g=Jv(r),M=s.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Lr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Lr).join(`
`),p.length>0&&(p+=`
`)):(m=[Gh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lr).join(`
`),p=[Gh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?jt.tonemapping_pars_fragment:"",t.toneMapping!==xi?Yv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,Xv("linearToOutputTexel",t.outputColorSpace),Kv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Lr).join(`
`)),a=Ml(a),a=Bh(a,t),a=kh(a,t),o=Ml(o),o=Bh(o,t),o=kh(o,t),a=zh(a),o=zh(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ku?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ku?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const R=y+m+a,S=y+p+o,A=$h(s,s.VERTEX_SHADER,R),E=$h(s,s.FRAGMENT_SHADER,S);s.attachShader(M,A),s.attachShader(M,E),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function P(B){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(M)||"",V=s.getShaderInfoLog(A)||"",N=s.getShaderInfoLog(E)||"",G=F.trim(),nt=V.trim(),Z=N.trim();let lt=!0,J=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(lt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,A,E);else{const K=Fh(s,A,"vertex"),tt=Fh(s,E,"fragment");me("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+G+`
`+K+`
`+tt)}else G!==""?Gt("WebGLProgram: Program Info Log:",G):(nt===""||Z==="")&&(J=!1);J&&(B.diagnostics={runnable:lt,programLog:G,vertexShader:{log:nt,prefix:m},fragmentShader:{log:Z,prefix:p}})}s.deleteShader(A),s.deleteShader(E),_=new ja(s,M),T=Qv(s,M)}let _;this.getUniforms=function(){return _===void 0&&P(this),_};let T;this.getAttributes=function(){return T===void 0&&P(this),T};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(M,Gv)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vv++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=A,this.fragmentShader=E,this}let pS=0;class mS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new gS(e),t.set(e,n)),n}}class gS{constructor(e){this.id=pS++,this.code=e,this.usedTimes=0}}function xS(i){return i===vs||i===ao||i===oo}function _S(i,e,t,n,s,r){const a=new Wf,o=new mS,c=new Set,l=[],u=new Map,h=n.logarithmicDepthBuffer;let f=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return c.add(_),_===0?"uv":`uv${_}`}function M(_,T,I,B,F,V){const N=B.fog,G=F.geometry,nt=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?B.environment:null,Z=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,lt=e.get(_.envMap||nt,Z),J=lt&&lt.mapping===_o?lt.image.height:null,K=d[_.type];_.precision!==null&&(f=n.getMaxPrecision(_.precision),f!==_.precision&&Gt("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));const tt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Et=tt!==void 0?tt.length:0;let xt=0;G.morphAttributes.position!==void 0&&(xt=1),G.morphAttributes.normal!==void 0&&(xt=2),G.morphAttributes.color!==void 0&&(xt=3);let Jt,Kt,oe,Q;if(K){const Ce=wn[K];Jt=Ce.vertexShader,Kt=Ce.fragmentShader}else{Jt=_.vertexShader,Kt=_.fragmentShader;const Ce=o.getVertexShaderStage(_),_e=o.getFragmentShaderStage(_);o.update(_,Ce,_e),oe=Ce.id,Q=_e.id}const rt=i.getRenderTarget(),Lt=i.state.buffers.depth.getReversed(),Xt=F.isInstancedMesh===!0,Rt=F.isBatchedMesh===!0,ne=!!_.map,We=!!_.matcap,ie=!!lt,ge=!!_.aoMap,Re=!!_.lightMap,ce=!!_.bumpMap&&_.wireframe===!1,$e=!!_.normalMap,Je=!!_.displacementMap,Mn=!!_.emissiveMap,Oe=!!_.metalnessMap,ze=!!_.roughnessMap,O=_.anisotropy>0,cn=_.clearcoat>0,Se=_.dispersion>0,w=_.retroreflectivity>0,x=_.iridescence>0,z=_.sheen>0,q=_.transmission>0,j=O&&!!_.anisotropyMap,ft=cn&&!!_.clearcoatMap,mt=cn&&!!_.clearcoatNormalMap,et=cn&&!!_.clearcoatRoughnessMap,st=x&&!!_.iridescenceMap,_t=x&&!!_.iridescenceThicknessMap,Ot=z&&!!_.sheenColorMap,yt=z&&!!_.sheenRoughnessMap,vt=!!_.specularMap,Ft=!!_.specularColorMap,kt=!!_.specularIntensityMap,Zt=q&&!!_.transmissionMap,U=q&&!!_.thicknessMap,St=!!_.gradientMap,it=!!_.alphaMap,Mt=_.alphaTest>0,Tt=!!_.alphaHash,ct=!!_.extensions;let Bt=xi;_.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Bt=i.toneMapping);const Ut={shaderID:K,shaderType:_.type,shaderName:_.name,vertexShader:Jt,fragmentShader:Kt,defines:_.defines,customVertexShaderID:oe,customFragmentShaderID:Q,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:Rt,batchingColor:Rt&&F._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&F.instanceColor!==null,instancingMorph:Xt&&F.morphTexture!==null,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:ue.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ne,matcap:We,envMap:ie,envMapMode:ie&&lt.mapping,envMapCubeUVHeight:J,aoMap:ge,lightMap:Re,bumpMap:ce,normalMap:$e,displacementMap:Je,emissiveMap:Mn,normalMapObjectSpace:$e&&_.normalMapType===t0,normalMapTangentSpace:$e&&_.normalMapType===pl,packedNormalMap:$e&&_.normalMapType===pl&&xS(_.normalMap.format),metalnessMap:Oe,roughnessMap:ze,anisotropy:O,anisotropyMap:j,clearcoat:cn,clearcoatMap:ft,clearcoatNormalMap:mt,clearcoatRoughnessMap:et,dispersion:Se,retroreflection:w,iridescence:x,iridescenceMap:st,iridescenceThicknessMap:_t,sheen:z,sheenColorMap:Ot,sheenRoughnessMap:yt,specularMap:vt,specularColorMap:Ft,specularIntensityMap:kt,transmission:q,transmissionMap:Zt,thicknessMap:U,gradientMap:St,opaque:_.transparent===!1&&_.blending===$r&&_.alphaToCoverage===!1,alphaMap:it,alphaTest:Mt,alphaHash:Tt,combine:_.combine,mapUv:ne&&g(_.map.channel),aoMapUv:ge&&g(_.aoMap.channel),lightMapUv:Re&&g(_.lightMap.channel),bumpMapUv:ce&&g(_.bumpMap.channel),normalMapUv:$e&&g(_.normalMap.channel),displacementMapUv:Je&&g(_.displacementMap.channel),emissiveMapUv:Mn&&g(_.emissiveMap.channel),metalnessMapUv:Oe&&g(_.metalnessMap.channel),roughnessMapUv:ze&&g(_.roughnessMap.channel),anisotropyMapUv:j&&g(_.anisotropyMap.channel),clearcoatMapUv:ft&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:mt&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:yt&&g(_.sheenRoughnessMap.channel),specularMapUv:vt&&g(_.specularMap.channel),specularColorMapUv:Ft&&g(_.specularColorMap.channel),specularIntensityMapUv:kt&&g(_.specularIntensityMap.channel),transmissionMapUv:Zt&&g(_.transmissionMap.channel),thicknessMapUv:U&&g(_.thicknessMap.channel),alphaMapUv:it&&g(_.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&($e||O),vertexNormals:!!G.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!G.attributes.uv&&(ne||it),fog:!!N,useFog:_.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||G.attributes.normal===void 0&&$e===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Lt,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:xt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Bt,decodeVideoTexture:ne&&_.map.isVideoTexture===!0&&ue.getTransfer(_.map.colorSpace)===Me,decodeVideoTextureEmissive:Mn&&_.emissiveMap.isVideoTexture===!0&&ue.getTransfer(_.emissiveMap.colorSpace)===Me,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===kn,flipSided:_.side===Rn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ct&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&_.extensions.multiDraw===!0||Rt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ut.vertexUv1s=c.has(1),Ut.vertexUv2s=c.has(2),Ut.vertexUv3s=c.has(3),c.clear(),Ut}function m(_){const T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(const I in _.defines)T.push(I),T.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(p(T,_),y(T,_),T.push(i.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function p(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function y(_,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function R(_){const T=d[_.type];let I;if(T){const B=wn[T];I=Zl.clone(B.uniforms)}else I=_.uniforms;return I}function S(_,T){let I=u.get(T);return I!==void 0?++I.usedTimes:(I=new dS(i,T,_,s),l.push(I),u.set(T,I)),I}function A(_){if(--_.usedTimes===0){const T=l.indexOf(_);l[T]=l[l.length-1],l.pop(),u.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function P(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:R,acquireProgram:S,releaseProgram:A,releaseShaderCache:E,programs:l,dispose:P}}function vS(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function SS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Vh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Hh(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,g,M,m,p){let y=i[e];return y===void 0?(y={id:f.id,object:f,geometry:d,material:g,materialVariant:a(f),groupOrder:M,renderOrder:f.renderOrder,z:m,group:p},i[e]=y):(y.id=f.id,y.object=f,y.geometry=d,y.material=g,y.materialVariant=a(f),y.groupOrder=M,y.renderOrder=f.renderOrder,y.z=m,y.group=p),e++,y}function c(f,d,g,M,m,p,y){y.reversedDepth===!0&&(m=-m);const R=o(f,d,g,M,m,p);g.transmission>0?n.push(R):g.transparent===!0?s.push(R):t.push(R)}function l(f,d,g,M,m,p){const y=o(f,d,g,M,m,p);g.transmission>0?n.unshift(y):g.transparent===!0?s.unshift(y):t.unshift(y)}function u(f,d){t.length>1&&t.sort(f||SS),n.length>1&&n.sort(d||Vh),s.length>1&&s.sort(d||Vh)}function h(){for(let f=e,d=i.length;f<d;f++){const g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:h,sort:u}}function MS(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Hh,i.set(n,[a])):s>=r.length?(a=new Hh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function yS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new ae};break;case"SpotLight":t={position:new L,direction:new L,color:new ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new ae,groundColor:new ae};break;case"RectAreaLight":t={color:new ae,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function ES(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let bS=0;function AS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function TS(i){const e=new yS,t=ES(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const s=new L,r=new Ae,a=new Ae;function o(l){let u=0,h=0,f=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let d=0,g=0,M=0,m=0,p=0,y=0,R=0,S=0,A=0,E=0,P=0,_=0,T=0,I=0;l.sort(AS);for(let F=0,V=l.length;F<V;F++){const N=l[F],G=N.color,nt=N.intensity,Z=N.distance;let lt=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===vs?lt=N.shadow.map.texture:lt=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=G.r*nt,h+=G.g*nt,f+=G.b*nt;else if(N.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(N.sh.coefficients[J],nt);I++}else if(N.isSunLight){const J=e.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const K=N.shadow,tt=t.get(N);tt.shadowIntensity=K.intensity,tt.shadowBias=K.bias,tt.shadowNormalBias=K.normalBias,tt.shadowRadius=K.radius,tt.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),n.sunShadow[g]=tt,n.sunShadowMap[g]=lt;const Et=K.getViewportCount();for(let xt=0;xt<Et;xt++)n.sunShadowMatrix[M+xt]=K.getMatrix(xt),n.sunShadowCascade[M+xt]=K._cascadeData[xt];M+=Et,g++}n.sun[d]=J,d++}else if(N.isDirectionalLight){const J=e.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const K=N.shadow,tt=t.get(N);tt.shadowIntensity=K.intensity,tt.shadowBias=K.bias,tt.shadowNormalBias=K.normalBias,tt.shadowRadius=K.radius,tt.shadowMapSize=K.mapSize,n.directionalShadow[m]=tt,n.directionalShadowMap[m]=lt,n.directionalShadowMatrix[m]=N.shadow.matrix,A++}n.directional[m]=J,m++}else if(N.isSpotLight){const J=e.get(N);J.position.setFromMatrixPosition(N.matrixWorld),J.color.copy(G).multiplyScalar(nt),J.distance=Z,J.coneCos=Math.cos(N.angle),J.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),J.decay=N.decay,n.spot[y]=J;const K=N.shadow;if(N.map&&(n.spotLightMap[_]=N.map,_++,K.updateMatrices(N),N.castShadow&&T++),n.spotLightMatrix[y]=K.matrix,N.castShadow){const tt=t.get(N);tt.shadowIntensity=K.intensity,tt.shadowBias=K.bias,tt.shadowNormalBias=K.normalBias,tt.shadowRadius=K.radius,tt.shadowMapSize=K.mapSize,n.spotShadow[y]=tt,n.spotShadowMap[y]=lt,P++}y++}else if(N.isRectAreaLight){const J=e.get(N);J.color.copy(G).multiplyScalar(nt),J.halfWidth.set(N.width*.5,0,0),J.halfHeight.set(0,N.height*.5,0),n.rectArea[R]=J,R++}else if(N.isPointLight){const J=e.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity),J.distance=N.distance,J.decay=N.decay,N.castShadow){const K=N.shadow,tt=t.get(N);tt.shadowIntensity=K.intensity,tt.shadowBias=K.bias,tt.shadowNormalBias=K.normalBias,tt.shadowRadius=K.radius,tt.shadowMapSize=K.mapSize,tt.shadowCameraNear=K.camera.near,tt.shadowCameraFar=K.camera.far,n.pointShadow[p]=tt,n.pointShadowMap[p]=lt,n.pointShadowMatrix[p]=N.shadow.matrix,E++}n.point[p]=J,p++}else if(N.isHemisphereLight){const J=e.get(N);J.skyColor.copy(N.color).multiplyScalar(nt),J.groundColor.copy(N.groundColor).multiplyScalar(nt),n.hemi[S]=J,S++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_FLOAT_1,n.rectAreaLTC2=pt.LTC_FLOAT_2):(n.rectAreaLTC1=pt.LTC_HALF_1,n.rectAreaLTC2=pt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const B=n.hash;(B.sunLength!==d||B.directionalLength!==m||B.pointLength!==p||B.spotLength!==y||B.rectAreaLength!==R||B.hemiLength!==S||B.numSunShadows!==g||B.numDirectionalShadows!==A||B.numPointShadows!==E||B.numSpotShadows!==P||B.numSpotMaps!==_||B.numLightProbes!==I)&&(n.sun.length=d,n.directional.length=m,n.spot.length=y,n.rectArea.length=R,n.point.length=p,n.hemi.length=S,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=P,n.spotShadowMap.length=P,n.spotLightMatrix.length=P+_-T,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=I,B.sunLength=d,B.directionalLength=m,B.pointLength=p,B.spotLength=y,B.rectAreaLength=R,B.hemiLength=S,B.numSunShadows=g,B.numDirectionalShadows=A,B.numPointShadows=E,B.numSpotShadows=P,B.numSpotMaps=_,B.numLightProbes=I,n.version=bS++)}function c(l,u){let h=0,f=0,d=0,g=0,M=0,m=0;const p=u.matrixWorldInverse;for(let y=0,R=l.length;y<R;y++){const S=l[y];if(S.isSunLight){const A=n.sun[h];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(p),h++}else if(S.isDirectionalLight){const A=n.directional[f];A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),f++}else if(S.isSpotLight){const A=n.spot[g];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),g++}else if(S.isRectAreaLight){const A=n.rectArea[M];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(p),a.identity(),r.copy(S.matrixWorld),r.premultiply(p),a.extractRotation(r),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),M++}else if(S.isPointLight){const A=n.point[d];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(p),d++}else if(S.isHemisphereLight){const A=n.hemi[m];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:n}}function Wh(i){const e=new TS(i),t=[],n=[],s=[];function r(f){h.camera=f,t.length=0,n.length=0,s.length=0}function a(f){t.push(f)}function o(f){n.push(f)}function c(f){s.push(f)}function l(){e.setup(t)}function u(f){e.setupView(t,f)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function wS(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Wh(i),e.set(s,[o])):r>=a.length?(o=new Wh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const RS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CS=`uniform sampler2D shadow_pass;
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
}`,PS=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],LS=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Xh=new Ae,Ar=new L,pc=new L;function IS(i,e,t){let n=new Gl;const s=new gt,r=new gt,a=new be,o=new Ug,c=new $g,l={},u=t.maxTextureSize,h={[xs]:Rn,[Rn]:xs,[kn]:kn},f=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:RS,fragmentShader:CS}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ue;g.setAttribute("position",new Hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new re(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qa;let p=this.type;this.render=function(E,P,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Lm&&(Gt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=qa);const T=i.getRenderTarget(),I=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Ni),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const V=p!==this.type;V&&P.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(G=>G.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,G=E.length;N<G;N++){const nt=E[N],Z=nt.shadow;if(Z===void 0){Gt("WebGLShadowMap:",nt,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);const lt=Z.getFrameExtents();s.multiply(lt),r.copy(Z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/lt.x),s.x=r.x*lt.x,Z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/lt.y),s.y=r.y*lt.y,Z.mapSize.y=r.y));const J=i.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=J,Z.map===null||V===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===Cr){if(nt.isPointLight){Gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new jn(s.x,s.y,{format:vs,type:yi,minFilter:pn,magFilter:pn,generateMipmaps:!1}),Z.map.texture.name=nt.name+".shadowMap",Z.map.depthTexture=new Kr(s.x,s.y,di),Z.map.depthTexture.name=nt.name+".shadowMapDepth",Z.map.depthTexture.format=Fi,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=an,Z.map.depthTexture.magFilter=an}else nt.isPointLight?(Z.map=new _d(s.x),Z.map.depthTexture=new Z0(s.x,Mi)):(Z.map=new jn(s.x,s.y),Z.map.depthTexture=new Kr(s.x,s.y,Mi)),Z.map.depthTexture.name=nt.name+".shadowMap",Z.map.depthTexture.format=Fi,this.type===qa?(Z.map.depthTexture.compareFunction=J?Fl:Ol,Z.map.depthTexture.minFilter=pn,Z.map.depthTexture.magFilter=pn):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=an,Z.map.depthTexture.magFilter=an);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==s.x||Z.map.height!==s.y)&&Z.map.setSize(s.x,s.y);const K=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();nt.isPointLight!==!0&&Z.updateMatrices(nt,_);for(let tt=0;tt<K;tt++){const Et=Z.getCamera(tt);if(nt.isPointLight){const xt=Z.camera,Jt=Z.matrix,Kt=nt.distance||xt.far;Kt!==xt.far&&(xt.far=Kt,xt.updateProjectionMatrix()),Ar.setFromMatrixPosition(nt.matrixWorld),xt.position.copy(Ar),pc.copy(xt.position),pc.add(PS[tt]),xt.up.copy(LS[tt]),xt.lookAt(pc),xt.updateMatrixWorld(),Jt.makeTranslation(-Ar.x,-Ar.y,-Ar.z),Xh.multiplyMatrices(xt.projectionMatrix,xt.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(Xh,xt.coordinateSystem,xt.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)i.setRenderTarget(Z.map,tt),i.clear();else{tt===0&&(i.setRenderTarget(Z.map),i.clear());const xt=Z.getViewport(tt);a.set(r.x*xt.x,r.y*xt.y,r.x*xt.z,r.y*xt.w),F.viewport(a)}n=Z.getFrustum(tt),S(P,_,Et,nt,this.type)}Z.isPointLightShadow!==!0&&this.type===Cr&&y(Z,_),Z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(T,I,B)};function y(E,P){const _=e.update(M);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new jn(s.x,s.y,{format:vs,type:yi}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(P,null,_,f,M,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(P,null,_,d,M,null)}function R(E,P,_,T){let I=null;const B=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(B!==void 0)I=B;else if(I=_.isPointLight===!0?c:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const F=I.uuid,V=P.uuid;let N=l[F];N===void 0&&(N={},l[F]=N);let G=N[V];G===void 0&&(G=I.clone(),N[V]=G,P.addEventListener("dispose",A)),I=G}if(I.visible=P.visible,I.wireframe=P.wireframe,T===Cr?I.side=P.shadowSide!==null?P.shadowSide:P.side:I.side=P.shadowSide!==null?P.shadowSide:h[P.side],I.alphaMap=P.alphaMap,I.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,I.map=P.map,I.clipShadows=P.clipShadows,I.clippingPlanes=P.clippingPlanes,I.clipIntersection=P.clipIntersection,I.displacementMap=P.displacementMap,I.displacementScale=P.displacementScale,I.displacementBias=P.displacementBias,I.wireframeLinewidth=P.wireframeLinewidth,I.linewidth=P.linewidth,_.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const F=i.properties.get(I);F.light=_}return I}function S(E,P,_,T,I){if(E.visible===!1)return;if(E.layers.test(P.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&I===Cr)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);const V=e.update(E),N=E.material;if(Array.isArray(N)){const G=V.groups;for(let nt=0,Z=G.length;nt<Z;nt++){const lt=G[nt],J=N[lt.materialIndex];if(J&&J.visible){const K=R(E,J,T,I);E.onBeforeShadow(i,E,P,_,V,K,lt),i.renderBufferDirect(_,null,V,K,E,lt),E.onAfterShadow(i,E,P,_,V,K,lt)}}}else if(N.visible){const G=R(E,N,T,I);E.onBeforeShadow(i,E,P,_,V,G,null),i.renderBufferDirect(_,null,V,G,E,null),E.onAfterShadow(i,E,P,_,V,G,null)}}const F=E.children;for(let V=0,N=F.length;V<N;V++)S(F[V],P,_,T,I)}function A(E){E.target.removeEventListener("dispose",A);for(const _ in l){const T=l[_],I=E.target.uuid;I in T&&(T[I].dispose(),delete T[I])}}}function DS(i,e){function t(){let U=!1;const St=new be;let it=null;const Mt=new be(0,0,0,0);return{setMask:function(Tt){it!==Tt&&!U&&(i.colorMask(Tt,Tt,Tt,Tt),it=Tt)},setLocked:function(Tt){U=Tt},setClear:function(Tt,ct,Bt,Ut,Ce){Ce===!0&&(Tt*=Ut,ct*=Ut,Bt*=Ut),St.set(Tt,ct,Bt,Ut),Mt.equals(St)===!1&&(i.clearColor(Tt,ct,Bt,Ut),Mt.copy(St))},reset:function(){U=!1,it=null,Mt.set(-1,0,0,0)}}}function n(){let U=!1,St=!1,it=null,Mt=null,Tt=null;return{setReversed:function(ct){if(St!==ct){const Bt=e.get("EXT_clip_control");ct?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),St=ct;const Ut=Tt;Tt=null,this.setClear(Ut)}},getReversed:function(){return St},setTest:function(ct){ct?rt(i.DEPTH_TEST):Lt(i.DEPTH_TEST)},setMask:function(ct){it!==ct&&!U&&(i.depthMask(ct),it=ct)},setFunc:function(ct){if(St&&(ct=h0[ct]),Mt!==ct){switch(ct){case Pc:i.depthFunc(i.NEVER);break;case Lc:i.depthFunc(i.ALWAYS);break;case Ic:i.depthFunc(i.LESS);break;case Hr:i.depthFunc(i.LEQUAL);break;case Dc:i.depthFunc(i.EQUAL);break;case Nc:i.depthFunc(i.GEQUAL);break;case Uc:i.depthFunc(i.GREATER);break;case $c:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Mt=ct}},setLocked:function(ct){U=ct},setClear:function(ct){Tt!==ct&&(Tt=ct,St&&(ct=1-ct),i.clearDepth(ct))},reset:function(){U=!1,it=null,Mt=null,Tt=null,St=!1}}}function s(){let U=!1,St=null,it=null,Mt=null,Tt=null,ct=null,Bt=null,Ut=null,Ce=null;return{setTest:function(_e){U||(_e?rt(i.STENCIL_TEST):Lt(i.STENCIL_TEST))},setMask:function(_e){St!==_e&&!U&&(i.stencilMask(_e),St=_e)},setFunc:function(_e,Wn,ni){(it!==_e||Mt!==Wn||Tt!==ni)&&(i.stencilFunc(_e,Wn,ni),it=_e,Mt=Wn,Tt=ni)},setOp:function(_e,Wn,ni){(ct!==_e||Bt!==Wn||Ut!==ni)&&(i.stencilOp(_e,Wn,ni),ct=_e,Bt=Wn,Ut=ni)},setLocked:function(_e){U=_e},setClear:function(_e){Ce!==_e&&(i.clearStencil(_e),Ce=_e)},reset:function(){U=!1,St=null,it=null,Mt=null,Tt=null,ct=null,Bt=null,Ut=null,Ce=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let u={},h={},f={},d=new WeakMap,g=[],M=null,m=!1,p=null,y=null,R=null,S=null,A=null,E=null,P=null,_=new ae(0,0,0),T=0,I=!1,B=null,F=null,V=null,N=null,G=null;const nt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,lt=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(lt=parseFloat(/^WebGL (\d)/.exec(J)[1]),Z=lt>=1):J.indexOf("OpenGL ES")!==-1&&(lt=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),Z=lt>=2);let K=null,tt={};const Et=i.getParameter(i.SCISSOR_BOX),xt=i.getParameter(i.VIEWPORT),Jt=new be().fromArray(Et),Kt=new be().fromArray(xt);function oe(U,St,it,Mt){const Tt=new Uint8Array(4),ct=i.createTexture();i.bindTexture(U,ct),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Bt=0;Bt<it;Bt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(St,0,i.RGBA,1,1,Mt,0,i.RGBA,i.UNSIGNED_BYTE,Tt):i.texImage2D(St+Bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Tt);return ct}const Q={};Q[i.TEXTURE_2D]=oe(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(i.DEPTH_TEST),a.setFunc(Hr),ce(!1),$e(Ou),rt(i.CULL_FACE),ge(Ni);function rt(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function Lt(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function Xt(U,St){return f[U]!==St?(i.bindFramebuffer(U,St),f[U]=St,U===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=St),U===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=St),!0):!1}function Rt(U,St){let it=g,Mt=!1;if(U){it=d.get(St),it===void 0&&(it=[],d.set(St,it));const Tt=U.textures;if(it.length!==Tt.length||it[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,Bt=Tt.length;ct<Bt;ct++)it[ct]=i.COLOR_ATTACHMENT0+ct;it.length=Tt.length,Mt=!0}}else it[0]!==i.BACK&&(it[0]=i.BACK,Mt=!0);Mt&&i.drawBuffers(it)}function ne(U){return M!==U?(i.useProgram(U),M=U,!0):!1}const We={[Zs]:i.FUNC_ADD,[Dm]:i.FUNC_SUBTRACT,[Nm]:i.FUNC_REVERSE_SUBTRACT};We[Um]=i.MIN,We[$m]=i.MAX;const ie={[Om]:i.ZERO,[Fm]:i.ONE,[Bm]:i.SRC_COLOR,[Af]:i.SRC_ALPHA,[Wm]:i.SRC_ALPHA_SATURATE,[Vm]:i.DST_COLOR,[zm]:i.DST_ALPHA,[km]:i.ONE_MINUS_SRC_COLOR,[Tf]:i.ONE_MINUS_SRC_ALPHA,[Hm]:i.ONE_MINUS_DST_COLOR,[Gm]:i.ONE_MINUS_DST_ALPHA,[Xm]:i.CONSTANT_COLOR,[qm]:i.ONE_MINUS_CONSTANT_COLOR,[Ym]:i.CONSTANT_ALPHA,[Km]:i.ONE_MINUS_CONSTANT_ALPHA};function ge(U,St,it,Mt,Tt,ct,Bt,Ut,Ce,_e){if(U===Ni){m===!0&&(Lt(i.BLEND),m=!1);return}if(m===!1&&(rt(i.BLEND),m=!0),U!==Im){if(U!==p||_e!==I){if((y!==Zs||A!==Zs)&&(i.blendEquation(i.FUNC_ADD),y=Zs,A=Zs),_e)switch(U){case $r:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vr:i.blendFunc(i.ONE,i.ONE);break;case Fu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:me("WebGLState: Invalid blending: ",U);break}else switch(U){case $r:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Fu:me("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bu:me("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:me("WebGLState: Invalid blending: ",U);break}R=null,S=null,E=null,P=null,_.set(0,0,0),T=0,p=U,I=_e}return}Tt=Tt||St,ct=ct||it,Bt=Bt||Mt,(St!==y||Tt!==A)&&(i.blendEquationSeparate(We[St],We[Tt]),y=St,A=Tt),(it!==R||Mt!==S||ct!==E||Bt!==P)&&(i.blendFuncSeparate(ie[it],ie[Mt],ie[ct],ie[Bt]),R=it,S=Mt,E=ct,P=Bt),(Ut.equals(_)===!1||Ce!==T)&&(i.blendColor(Ut.r,Ut.g,Ut.b,Ce),_.copy(Ut),T=Ce),p=U,I=!1}function Re(U,St){U.side===kn?Lt(i.CULL_FACE):rt(i.CULL_FACE);let it=U.side===Rn;St&&(it=!it),ce(it),U.blending===$r&&U.transparent===!1?ge(Ni):ge(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const Mt=U.stencilWrite;o.setTest(Mt),Mt&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Mn(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):Lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ce(U){B!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),B=U)}function $e(U){U!==Cm?(rt(i.CULL_FACE),U!==F&&(U===Ou?i.cullFace(i.BACK):U===Pm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Lt(i.CULL_FACE),F=U}function Je(U){U!==V&&(Z&&i.lineWidth(U),V=U)}function Mn(U,St,it){U?(rt(i.POLYGON_OFFSET_FILL),(N!==St||G!==it)&&(N=St,G=it,a.getReversed()&&(St=-St),i.polygonOffset(St,it))):Lt(i.POLYGON_OFFSET_FILL)}function Oe(U){U?rt(i.SCISSOR_TEST):Lt(i.SCISSOR_TEST)}function ze(U){U===void 0&&(U=i.TEXTURE0+nt-1),K!==U&&(i.activeTexture(U),K=U)}function O(U,St,it){it===void 0&&(K===null?it=i.TEXTURE0+nt-1:it=K);let Mt=tt[it];Mt===void 0&&(Mt={type:void 0,texture:void 0},tt[it]=Mt),(Mt.type!==U||Mt.texture!==St)&&(K!==it&&(i.activeTexture(it),K=it),i.bindTexture(U,St||Q[U]),Mt.type=U,Mt.texture=St)}function cn(){const U=tt[K];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Se(){try{i.compressedTexImage2D(...arguments)}catch(U){me("WebGLState:",U)}}function w(){try{i.compressedTexImage3D(...arguments)}catch(U){me("WebGLState:",U)}}function x(){try{i.texSubImage2D(...arguments)}catch(U){me("WebGLState:",U)}}function z(){try{i.texSubImage3D(...arguments)}catch(U){me("WebGLState:",U)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(U){me("WebGLState:",U)}}function j(){try{i.compressedTexSubImage3D(...arguments)}catch(U){me("WebGLState:",U)}}function ft(){try{i.texStorage2D(...arguments)}catch(U){me("WebGLState:",U)}}function mt(){try{i.texStorage3D(...arguments)}catch(U){me("WebGLState:",U)}}function et(){try{i.texImage2D(...arguments)}catch(U){me("WebGLState:",U)}}function st(){try{i.texImage3D(...arguments)}catch(U){me("WebGLState:",U)}}function _t(U){return h[U]!==void 0?h[U]:i.getParameter(U)}function Ot(U,St){h[U]!==St&&(i.pixelStorei(U,St),h[U]=St)}function yt(U){Jt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Jt.copy(U))}function vt(U){Kt.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Kt.copy(U))}function Ft(U,St){let it=l.get(St);it===void 0&&(it=new WeakMap,l.set(St,it));let Mt=it.get(U);Mt===void 0&&(Mt=i.getUniformBlockIndex(St,U.name),it.set(U,Mt))}function kt(U,St){const Mt=l.get(St).get(U);c.get(St)!==Mt&&(i.uniformBlockBinding(St,Mt,U.__bindingPointIndex),c.set(St,Mt))}function Zt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},K=null,tt={},f={},d=new WeakMap,g=[],M=null,m=!1,p=null,y=null,R=null,S=null,A=null,E=null,P=null,_=new ae(0,0,0),T=0,I=!1,B=null,F=null,V=null,N=null,G=null,Jt.set(0,0,i.canvas.width,i.canvas.height),Kt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:Lt,bindFramebuffer:Xt,drawBuffers:Rt,useProgram:ne,setBlending:ge,setMaterial:Re,setFlipSided:ce,setCullFace:$e,setLineWidth:Je,setPolygonOffset:Mn,setScissorTest:Oe,activeTexture:ze,bindTexture:O,unbindTexture:cn,compressedTexImage2D:Se,compressedTexImage3D:w,texImage2D:et,texImage3D:st,pixelStorei:Ot,getParameter:_t,updateUBOMapping:Ft,uniformBlockBinding:kt,texStorage2D:ft,texStorage3D:mt,texSubImage2D:x,texSubImage3D:z,compressedTexSubImage2D:q,compressedTexSubImage3D:j,scissor:yt,viewport:vt,reset:Zt}}function NS(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new gt,u=new WeakMap,h=new Set;let f;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(w,x){return g?new OffscreenCanvas(w,x):uo("canvas")}function m(w,x,z){let q=1;const j=Se(w);if((j.width>z||j.height>z)&&(q=z/Math.max(j.width,j.height)),q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const ft=Math.floor(q*j.width),mt=Math.floor(q*j.height);f===void 0&&(f=M(ft,mt));const et=x?M(ft,mt):f;return et.width=ft,et.height=mt,et.getContext("2d").drawImage(w,0,0,ft,mt),Gt("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ft+"x"+mt+")."),et}else return"data"in w&&Gt("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),w;return w}function p(w){return w.generateMipmaps}function y(w){i.generateMipmap(w)}function R(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(w,x,z,q,j,ft=!1){if(w!==null){if(i[w]!==void 0)return i[w];Gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let mt;q&&(mt=e.get("EXT_texture_norm16"),mt||Gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let et=x;if(x===i.RED&&(z===i.FLOAT&&(et=i.R32F),z===i.HALF_FLOAT&&(et=i.R16F),z===i.UNSIGNED_BYTE&&(et=i.R8),z===i.UNSIGNED_SHORT&&mt&&(et=mt.R16_EXT),z===i.SHORT&&mt&&(et=mt.R16_SNORM_EXT)),x===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(et=i.R8UI),z===i.UNSIGNED_SHORT&&(et=i.R16UI),z===i.UNSIGNED_INT&&(et=i.R32UI),z===i.BYTE&&(et=i.R8I),z===i.SHORT&&(et=i.R16I),z===i.INT&&(et=i.R32I)),x===i.RG&&(z===i.FLOAT&&(et=i.RG32F),z===i.HALF_FLOAT&&(et=i.RG16F),z===i.UNSIGNED_BYTE&&(et=i.RG8),z===i.UNSIGNED_SHORT&&mt&&(et=mt.RG16_EXT),z===i.SHORT&&mt&&(et=mt.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(et=i.RG8UI),z===i.UNSIGNED_SHORT&&(et=i.RG16UI),z===i.UNSIGNED_INT&&(et=i.RG32UI),z===i.BYTE&&(et=i.RG8I),z===i.SHORT&&(et=i.RG16I),z===i.INT&&(et=i.RG32I)),x===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(et=i.RGB8UI),z===i.UNSIGNED_SHORT&&(et=i.RGB16UI),z===i.UNSIGNED_INT&&(et=i.RGB32UI),z===i.BYTE&&(et=i.RGB8I),z===i.SHORT&&(et=i.RGB16I),z===i.INT&&(et=i.RGB32I)),x===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),z===i.UNSIGNED_INT&&(et=i.RGBA32UI),z===i.BYTE&&(et=i.RGBA8I),z===i.SHORT&&(et=i.RGBA16I),z===i.INT&&(et=i.RGBA32I)),x===i.RGB&&(z===i.UNSIGNED_SHORT&&mt&&(et=mt.RGB16_EXT),z===i.SHORT&&mt&&(et=mt.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(et=i.R11F_G11F_B10F)),x===i.RGBA){const st=ft?lo:ue.getTransfer(j);z===i.FLOAT&&(et=i.RGBA32F),z===i.HALF_FLOAT&&(et=i.RGBA16F),z===i.UNSIGNED_BYTE&&(et=st===Me?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&mt&&(et=mt.RGBA16_EXT),z===i.SHORT&&mt&&(et=mt.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&e.get("EXT_color_buffer_float"),et}function A(w,x){let z;return w?x===null||x===Mi||x===Xr?z=i.DEPTH24_STENCIL8:x===di?z=i.DEPTH32F_STENCIL8:x===Wr&&(z=i.DEPTH24_STENCIL8,Gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Mi||x===Xr?z=i.DEPTH_COMPONENT24:x===di?z=i.DEPTH_COMPONENT32F:x===Wr&&(z=i.DEPTH_COMPONENT16),z}function E(w,x){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==an&&w.minFilter!==pn?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function P(w){const x=w.target;x.removeEventListener("dispose",P),T(x),x.isVideoTexture&&u.delete(x),x.isHTMLTexture&&h.delete(x)}function _(w){const x=w.target;x.removeEventListener("dispose",_),B(x)}function T(w){const x=n.get(w);if(x.__webglInit===void 0)return;const z=w.source,q=d.get(z);if(q){const j=q[x.__cacheKey];j.usedTimes--,j.usedTimes===0&&I(w),Object.keys(q).length===0&&d.delete(z)}n.remove(w)}function I(w){const x=n.get(w);i.deleteTexture(x.__webglTexture);const z=w.source,q=d.get(z);delete q[x.__cacheKey],a.memory.textures--}function B(w){const x=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let j=0;j<x.__webglFramebuffer[q].length;j++)i.deleteFramebuffer(x.__webglFramebuffer[q][j]);else i.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)i.deleteFramebuffer(x.__webglFramebuffer[q]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const z=w.textures;for(let q=0,j=z.length;q<j;q++){const ft=n.get(z[q]);ft.__webglTexture&&(i.deleteTexture(ft.__webglTexture),a.memory.textures--),n.remove(z[q])}n.remove(w)}let F=0;function V(){F=0}function N(){return F}function G(w){F=w}function nt(){const w=F;return w>=s.maxTextures&&Gt("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,w}function Z(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function lt(w,x){const z=n.get(w);if(w.isVideoTexture&&O(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&z.__version!==w.version){const q=w.image;if(q===null)Gt("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Gt("WebGLRenderer: Texture marked for update but image is incomplete");else{Lt(z,w,x);return}}else w.isExternalTexture&&(z.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+x)}function J(w,x){const z=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){Lt(z,w,x);return}else w.isExternalTexture&&(z.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+x)}function K(w,x){const z=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){Lt(z,w,x);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+x)}function tt(w,x){const z=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&z.__version!==w.version){Xt(z,w,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+x)}const Et={[ro]:i.REPEAT,[Ii]:i.CLAMP_TO_EDGE,[Oc]:i.MIRRORED_REPEAT},xt={[an]:i.NEAREST,[Qm]:i.NEAREST_MIPMAP_NEAREST,[sa]:i.NEAREST_MIPMAP_LINEAR,[pn]:i.LINEAR,[No]:i.LINEAR_MIPMAP_NEAREST,[ps]:i.LINEAR_MIPMAP_LINEAR},Jt={[n0]:i.NEVER,[o0]:i.ALWAYS,[i0]:i.LESS,[Ol]:i.LEQUAL,[s0]:i.EQUAL,[Fl]:i.GEQUAL,[r0]:i.GREATER,[a0]:i.NOTEQUAL};function Kt(w,x){if(x.type===di&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===pn||x.magFilter===No||x.magFilter===sa||x.magFilter===ps||x.minFilter===pn||x.minFilter===No||x.minFilter===sa||x.minFilter===ps)&&Gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,Et[x.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,Et[x.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,Et[x.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,xt[x.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,xt[x.minFilter]),x.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Jt[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===an||x.minFilter!==sa&&x.minFilter!==ps||x.type===di&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function oe(w,x){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",P));const q=x.source;let j=d.get(q);j===void 0&&(j={},d.set(q,j));const ft=Z(x);if(ft!==w.__cacheKey){j[ft]===void 0&&(j[ft]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),j[ft].usedTimes++;const mt=j[w.__cacheKey];mt!==void 0&&(j[w.__cacheKey].usedTimes--,mt.usedTimes===0&&I(x)),w.__cacheKey=ft,w.__webglTexture=j[ft].texture}return z}function Q(w,x,z){return Math.floor(Math.floor(w/z)/x)}function rt(w,x,z,q){const ft=w.updateRanges;if(ft.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,z,q,x.data);else{ft.sort((Ot,yt)=>Ot.start-yt.start);let mt=0;for(let Ot=1;Ot<ft.length;Ot++){const yt=ft[mt],vt=ft[Ot],Ft=yt.start+yt.count,kt=Q(vt.start,x.width,4),Zt=Q(yt.start,x.width,4);vt.start<=Ft+1&&kt===Zt&&Q(vt.start+vt.count-1,x.width,4)===kt?yt.count=Math.max(yt.count,vt.start+vt.count-yt.start):(++mt,ft[mt]=vt)}ft.length=mt+1;const et=t.getParameter(i.UNPACK_ROW_LENGTH),st=t.getParameter(i.UNPACK_SKIP_PIXELS),_t=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Ot=0,yt=ft.length;Ot<yt;Ot++){const vt=ft[Ot],Ft=Math.floor(vt.start/4),kt=Math.ceil(vt.count/4),Zt=Ft%x.width,U=Math.floor(Ft/x.width),St=kt,it=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Zt),t.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,Zt,U,St,it,z,q,x.data)}w.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,et),t.pixelStorei(i.UNPACK_SKIP_PIXELS,st),t.pixelStorei(i.UNPACK_SKIP_ROWS,_t)}}function Lt(w,x,z){let q=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=i.TEXTURE_3D);const j=oe(w,x),ft=x.source;t.bindTexture(q,w.__webglTexture,i.TEXTURE0+z);const mt=n.get(ft);if(ft.version!==mt.__version||j===!0){if(t.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const it=ue.getPrimaries(ue.workingColorSpace),Mt=x.colorSpace===Qi?null:ue.getPrimaries(x.colorSpace),Tt=x.colorSpace===Qi||it===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let st=m(x.image,!1,s.maxTextureSize);st=cn(x,st);const _t=r.convert(x.format,x.colorSpace),Ot=r.convert(x.type);let yt=S(x.internalFormat,_t,Ot,x.normalized,x.colorSpace,x.isVideoTexture);Kt(q,x);let vt;const Ft=x.mipmaps,kt=x.isVideoTexture!==!0,Zt=mt.__version===void 0||j===!0,U=ft.dataReady,St=E(x,st);if(x.isDepthTexture)yt=A(x.format===ms,x.type),Zt&&(kt?t.texStorage2D(i.TEXTURE_2D,1,yt,st.width,st.height):t.texImage2D(i.TEXTURE_2D,0,yt,st.width,st.height,0,_t,Ot,null));else if(x.isDataTexture)if(Ft.length>0){kt&&Zt&&t.texStorage2D(i.TEXTURE_2D,St,yt,Ft[0].width,Ft[0].height);for(let it=0,Mt=Ft.length;it<Mt;it++)vt=Ft[it],kt?U&&t.texSubImage2D(i.TEXTURE_2D,it,0,0,vt.width,vt.height,_t,Ot,vt.data):t.texImage2D(i.TEXTURE_2D,it,yt,vt.width,vt.height,0,_t,Ot,vt.data);x.generateMipmaps=!1}else kt?(Zt&&t.texStorage2D(i.TEXTURE_2D,St,yt,st.width,st.height),U&&rt(x,st,_t,Ot)):t.texImage2D(i.TEXTURE_2D,0,yt,st.width,st.height,0,_t,Ot,st.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){kt&&Zt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,St,yt,Ft[0].width,Ft[0].height,st.depth);for(let it=0,Mt=Ft.length;it<Mt;it++)if(vt=Ft[it],x.format!==Zn)if(_t!==null)if(kt){if(U)if(x.layerUpdates.size>0){const Tt=bh(vt.width,vt.height,x.format,x.type);for(const ct of x.layerUpdates){const Bt=vt.data.subarray(ct*Tt/vt.data.BYTES_PER_ELEMENT,(ct+1)*Tt/vt.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,ct,vt.width,vt.height,1,_t,Bt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,vt.width,vt.height,st.depth,_t,vt.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,yt,vt.width,vt.height,st.depth,0,vt.data,0,0);else Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,vt.width,vt.height,st.depth,_t,Ot,vt.data):t.texImage3D(i.TEXTURE_2D_ARRAY,it,yt,vt.width,vt.height,st.depth,0,_t,Ot,vt.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{kt&&Zt&&t.texStorage2D(i.TEXTURE_2D,St,yt,Ft[0].width,Ft[0].height);for(let it=0,Mt=Ft.length;it<Mt;it++)vt=Ft[it],x.format!==Zn?_t!==null?kt?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,vt.width,vt.height,_t,vt.data):t.compressedTexImage2D(i.TEXTURE_2D,it,yt,vt.width,vt.height,0,vt.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?U&&t.texSubImage2D(i.TEXTURE_2D,it,0,0,vt.width,vt.height,_t,Ot,vt.data):t.texImage2D(i.TEXTURE_2D,it,yt,vt.width,vt.height,0,_t,Ot,vt.data)}else if(x.isDataArrayTexture)if(kt){if(Zt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,St,yt,st.width,st.height,st.depth),U)if(x.layerUpdates.size>0){const it=bh(st.width,st.height,x.format,x.type);for(const Mt of x.layerUpdates){const Tt=st.data.subarray(Mt*it/st.data.BYTES_PER_ELEMENT,(Mt+1)*it/st.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Mt,st.width,st.height,1,_t,Ot,Tt)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,_t,Ot,st.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,yt,st.width,st.height,st.depth,0,_t,Ot,st.data);else if(x.isData3DTexture)kt?(Zt&&t.texStorage3D(i.TEXTURE_3D,St,yt,st.width,st.height,st.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,_t,Ot,st.data)):t.texImage3D(i.TEXTURE_3D,0,yt,st.width,st.height,st.depth,0,_t,Ot,st.data);else if(x.isFramebufferTexture){if(Zt)if(kt)t.texStorage2D(i.TEXTURE_2D,St,yt,st.width,st.height);else{let it=st.width,Mt=st.height;for(let Tt=0;Tt<St;Tt++)t.texImage2D(i.TEXTURE_2D,Tt,yt,it,Mt,0,_t,Ot,null),it>>=1,Mt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){const it=i.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),st.parentNode!==it){it.appendChild(st),h.add(x),it.onpaint=Mt=>{const Tt=Mt.changedElements;for(const ct of h)Tt.includes(ct.image)&&(ct.needsUpdate=!0)},it.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,st);else{const Tt=i.RGBA,ct=i.RGBA,Bt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Tt,ct,Bt,st)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ft.length>0){if(kt&&Zt){const it=Se(Ft[0]);t.texStorage2D(i.TEXTURE_2D,St,yt,it.width,it.height)}for(let it=0,Mt=Ft.length;it<Mt;it++)vt=Ft[it],kt?U&&t.texSubImage2D(i.TEXTURE_2D,it,0,0,_t,Ot,vt):t.texImage2D(i.TEXTURE_2D,it,yt,_t,Ot,vt);x.generateMipmaps=!1}else if(kt){if(Zt){const it=Se(st);t.texStorage2D(i.TEXTURE_2D,St,yt,it.width,it.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_t,Ot,st)}else t.texImage2D(i.TEXTURE_2D,0,yt,_t,Ot,st);p(x)&&y(q),mt.__version=ft.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function Xt(w,x,z){if(x.image.length!==6)return;const q=oe(w,x),j=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+z);const ft=n.get(j);if(j.version!==ft.__version||q===!0){t.activeTexture(i.TEXTURE0+z);const mt=ue.getPrimaries(ue.workingColorSpace),et=x.colorSpace===Qi?null:ue.getPrimaries(x.colorSpace),st=x.colorSpace===Qi||mt===et?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);const _t=x.isCompressedTexture||x.image[0].isCompressedTexture,Ot=x.image[0]&&x.image[0].isDataTexture,yt=[];for(let ct=0;ct<6;ct++)!_t&&!Ot?yt[ct]=m(x.image[ct],!0,s.maxCubemapSize):yt[ct]=Ot?x.image[ct].image:x.image[ct],yt[ct]=cn(x,yt[ct]);const vt=yt[0],Ft=r.convert(x.format,x.colorSpace),kt=r.convert(x.type),Zt=S(x.internalFormat,Ft,kt,x.normalized,x.colorSpace),U=x.isVideoTexture!==!0,St=ft.__version===void 0||q===!0,it=j.dataReady;let Mt=E(x,vt);Kt(i.TEXTURE_CUBE_MAP,x);let Tt;if(_t){U&&St&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,Zt,vt.width,vt.height);for(let ct=0;ct<6;ct++){Tt=yt[ct].mipmaps;for(let Bt=0;Bt<Tt.length;Bt++){const Ut=Tt[Bt];x.format!==Zn?Ft!==null?U?it&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt,0,0,Ut.width,Ut.height,Ft,Ut.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt,Zt,Ut.width,Ut.height,0,Ut.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?it&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt,0,0,Ut.width,Ut.height,Ft,kt,Ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt,Zt,Ut.width,Ut.height,0,Ft,kt,Ut.data)}}}else{if(Tt=x.mipmaps,U&&St){Tt.length>0&&Mt++;const ct=Se(yt[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,Zt,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(Ot){U?it&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,yt[ct].width,yt[ct].height,Ft,kt,yt[ct].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Zt,yt[ct].width,yt[ct].height,0,Ft,kt,yt[ct].data);for(let Bt=0;Bt<Tt.length;Bt++){const Ce=Tt[Bt].image[ct].image;U?it&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt+1,0,0,Ce.width,Ce.height,Ft,kt,Ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt+1,Zt,Ce.width,Ce.height,0,Ft,kt,Ce.data)}}else{U?it&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Ft,kt,yt[ct]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Zt,Ft,kt,yt[ct]);for(let Bt=0;Bt<Tt.length;Bt++){const Ut=Tt[Bt];U?it&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt+1,0,0,Ft,kt,Ut.image[ct]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Bt+1,Zt,Ft,kt,Ut.image[ct])}}}p(x)&&y(i.TEXTURE_CUBE_MAP),ft.__version=j.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function Rt(w,x,z,q,j,ft){const mt=r.convert(z.format,z.colorSpace),et=r.convert(z.type),st=S(z.internalFormat,mt,et,z.normalized,z.colorSpace),_t=n.get(x),Ot=n.get(z);if(Ot.__renderTarget=x,!_t.__hasExternalTextures){const yt=Math.max(1,x.width>>ft),vt=Math.max(1,x.height>>ft);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,ft,st,yt,vt,x.depth,0,mt,et,null):t.texImage2D(j,ft,st,yt,vt,0,mt,et,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),ze(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,j,Ot.__webglTexture,0,Oe(x)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,j,Ot.__webglTexture,ft),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ne(w,x,z){if(i.bindRenderbuffer(i.RENDERBUFFER,w),x.depthBuffer){const q=x.depthTexture,j=q&&q.isDepthTexture?q.type:null,ft=A(x.stencilBuffer,j),mt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ze(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Oe(x),ft,x.width,x.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe(x),ft,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ft,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,w)}else{const q=x.textures;for(let j=0;j<q.length;j++){const ft=q[j],mt=r.convert(ft.format,ft.colorSpace),et=r.convert(ft.type),st=S(ft.internalFormat,mt,et,ft.normalized,ft.colorSpace);ze(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Oe(x),st,x.width,x.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe(x),st,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,st,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function We(w,x,z){const q=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const j=n.get(x.depthTexture);if(j.__renderTarget=x,(!j.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),q){if(j.__webglInit===void 0&&(j.__webglInit=!0,x.depthTexture.addEventListener("dispose",P)),j.__webglTexture===void 0){j.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Kt(i.TEXTURE_CUBE_MAP,x.depthTexture);const _t=r.convert(x.depthTexture.format),Ot=r.convert(x.depthTexture.type);let yt;x.depthTexture.format===Fi?yt=i.DEPTH_COMPONENT24:x.depthTexture.format===ms&&(yt=i.DEPTH24_STENCIL8);for(let vt=0;vt<6;vt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,yt,x.width,x.height,0,_t,Ot,null)}}else lt(x.depthTexture,0);const ft=j.__webglTexture,mt=Oe(x),et=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,st=x.depthTexture.format===ms?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Fi)ze(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,et,ft,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,st,et,ft,0);else if(x.depthTexture.format===ms)ze(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,et,ft,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,st,et,ft,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ie(w){const x=n.get(w),z=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){const q=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){const j=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",j)};q.addEventListener("dispose",j),x.__depthDisposeCallback=j}x.__boundDepthTexture=q}if(w.depthTexture&&!x.__autoAllocateDepthBuffer)if(z)for(let q=0;q<6;q++)We(x.__webglFramebuffer[q],w,q);else{const q=w.texture.mipmaps;q&&q.length>0?We(x.__webglFramebuffer[0],w,0):We(x.__webglFramebuffer,w,0)}else if(z){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=i.createRenderbuffer(),ne(x.__webglDepthbuffer[q],w,!1);else{const j=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=x.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ft)}}else{const q=w.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),ne(x.__webglDepthbuffer,w,!1);else{const j=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ft)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ge(w,x,z){const q=n.get(w);x!==void 0&&Rt(q.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&ie(w)}function Re(w){const x=w.texture,z=n.get(w),q=n.get(x);w.addEventListener("dispose",_);const j=w.textures,ft=w.isWebGLCubeRenderTarget===!0,mt=j.length>1;if(mt||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=x.version,a.memory.textures++),ft){z.__webglFramebuffer=[];for(let et=0;et<6;et++)if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer[et]=[];for(let st=0;st<x.mipmaps.length;st++)z.__webglFramebuffer[et][st]=i.createFramebuffer()}else z.__webglFramebuffer[et]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer=[];for(let et=0;et<x.mipmaps.length;et++)z.__webglFramebuffer[et]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(mt)for(let et=0,st=j.length;et<st;et++){const _t=n.get(j[et]);_t.__webglTexture===void 0&&(_t.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&ze(w)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let et=0;et<j.length;et++){const st=j[et];z.__webglColorRenderbuffer[et]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[et]);const _t=r.convert(st.format,st.colorSpace),Ot=r.convert(st.type),yt=S(st.internalFormat,_t,Ot,st.normalized,st.colorSpace,w.isXRRenderTarget===!0),vt=Oe(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,yt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.RENDERBUFFER,z.__webglColorRenderbuffer[et])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),ne(z.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ft){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Kt(i.TEXTURE_CUBE_MAP,x);for(let et=0;et<6;et++)if(x.mipmaps&&x.mipmaps.length>0)for(let st=0;st<x.mipmaps.length;st++)Rt(z.__webglFramebuffer[et][st],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,st);else Rt(z.__webglFramebuffer[et],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);p(x)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(mt){for(let et=0,st=j.length;et<st;et++){const _t=j[et],Ot=n.get(_t);let yt=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(yt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(yt,Ot.__webglTexture),Kt(yt,_t),Rt(z.__webglFramebuffer,w,_t,i.COLOR_ATTACHMENT0+et,yt,0),p(_t)&&y(yt)}t.unbindTexture()}else{let et=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(et=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(et,q.__webglTexture),Kt(et,x),x.mipmaps&&x.mipmaps.length>0)for(let st=0;st<x.mipmaps.length;st++)Rt(z.__webglFramebuffer[st],w,x,i.COLOR_ATTACHMENT0,et,st);else Rt(z.__webglFramebuffer,w,x,i.COLOR_ATTACHMENT0,et,0);p(x)&&y(et),t.unbindTexture()}w.depthBuffer&&ie(w)}function ce(w){const x=w.textures;for(let z=0,q=x.length;z<q;z++){const j=x[z];if(p(j)){const ft=R(w),mt=n.get(j).__webglTexture;t.bindTexture(ft,mt),y(ft),t.unbindTexture()}}}const $e=[],Je=[];function Mn(w){if(w.samples>0){if(ze(w)===!1){const x=w.textures,z=w.width,q=w.height;let j=i.COLOR_BUFFER_BIT;const ft=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=n.get(w),et=x.length>1;if(et)for(let _t=0;_t<x.length;_t++)t.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer);const st=w.texture.mipmaps;st&&st.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let _t=0;_t<x.length;_t++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),et){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,mt.__webglColorRenderbuffer[_t]);const Ot=n.get(x[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ot,0)}i.blitFramebuffer(0,0,z,q,0,0,z,q,j,i.NEAREST),c===!0&&($e.length=0,Je.length=0,$e.push(i.COLOR_ATTACHMENT0+_t),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&($e.push(ft),Je.push(ft),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Je)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$e))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),et)for(let _t=0;_t<x.length;_t++){t.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,mt.__webglColorRenderbuffer[_t]);const Ot=n.get(x[_t]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,Ot,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&c){const x=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Oe(w){return Math.min(s.maxSamples,w.samples)}function ze(w){const x=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function O(w){const x=a.render.frame;u.get(w)!==x&&(u.set(w,x),w.update())}function cn(w,x){const z=w.colorSpace,q=w.format,j=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||z!==co&&z!==Qi&&(ue.getTransfer(z)===Me?(q!==Zn||j!==In)&&Gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):me("WebGLTextures: Unsupported texture color space:",z)),x}function Se(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=nt,this.resetTextureUnits=V,this.getTextureUnits=N,this.setTextureUnits=G,this.setTexture2D=lt,this.setTexture2DArray=J,this.setTexture3D=K,this.setTextureCube=tt,this.rebindTextures=ge,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=Mn,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=ze,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function US(i,e){function t(n,s=Qi){let r;const a=ue.getTransfer(s);if(n===In)return i.UNSIGNED_BYTE;if(n===Il)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Dl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===$f)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Of)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Nf)return i.BYTE;if(n===Uf)return i.SHORT;if(n===Wr)return i.UNSIGNED_SHORT;if(n===Ll)return i.INT;if(n===Mi)return i.UNSIGNED_INT;if(n===di)return i.FLOAT;if(n===yi)return i.HALF_FLOAT;if(n===Ff)return i.ALPHA;if(n===Bf)return i.RGB;if(n===Zn)return i.RGBA;if(n===Fi)return i.DEPTH_COMPONENT;if(n===ms)return i.DEPTH_STENCIL;if(n===kf)return i.RED;if(n===Nl)return i.RED_INTEGER;if(n===vs)return i.RG;if(n===Ul)return i.RG_INTEGER;if(n===$l)return i.RGBA_INTEGER;if(n===Ya||n===Ka||n===Za||n===Ja)if(a===Me)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ya)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ya)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ka)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Za)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ja)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fc||n===Bc||n===kc||n===zc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===kc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===zc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Gc||n===Vc||n===Hc||n===Wc||n===Xc||n===ao||n===qc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Gc||n===Vc)return a===Me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Hc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Wc)return r.COMPRESSED_R11_EAC;if(n===Xc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ao)return r.COMPRESSED_RG11_EAC;if(n===qc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Yc||n===Kc||n===Zc||n===Jc||n===Qc||n===jc||n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===al||n===ol)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Yc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Kc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Jc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===tl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===el)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===il)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===rl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===al)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ol)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===cl||n===ll||n===ul)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===cl)return a===Me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ll)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ul)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hl||n===fl||n===oo||n===dl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===hl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===fl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===oo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===dl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const $S=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OS=`
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

}`;class FS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new nd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ti({vertexShader:$S,fragmentShader:OS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new re(new Ln(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class BS extends Ms{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,g=null;const M=typeof XRWebGLBinding<"u",m=new FS,p={},y=t.getContextAttributes();let R=null,S=null;const A=[],E=[],P=new gt;let _=null,T=null;const I=new Tn;I.viewport=new be;const B=new Tn;B.viewport=new be;const F=[I,B],V=new Hg;let N=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let rt=A[Q];return rt===void 0&&(rt=new zo,A[Q]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(Q){let rt=A[Q];return rt===void 0&&(rt=new zo,A[Q]=rt),rt.getGripSpace()},this.getHand=function(Q){let rt=A[Q];return rt===void 0&&(rt=new zo,A[Q]=rt),rt.getHandSpace()};function nt(Q){const rt=E.indexOf(Q.inputSource);if(rt===-1)return;const Lt=A[rt];Lt!==void 0&&(Lt.update(Q.inputSource,Q.frame,l||a),Lt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function Z(){s.removeEventListener("select",nt),s.removeEventListener("selectstart",nt),s.removeEventListener("selectend",nt),s.removeEventListener("squeeze",nt),s.removeEventListener("squeezestart",nt),s.removeEventListener("squeezeend",nt),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",lt);for(let Q=0;Q<A.length;Q++){const rt=E[Q];rt!==null&&(E[Q]=null,A[Q].disconnect(rt))}N=null,G=null,m.reset();for(const Q in p)delete p[Q];if(e.setRenderTarget(R),d=null,f=null,h=null,s=null,S=null,oe.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(P.width,P.height,!1),T!==null){const Q=T.camera;Q.fov=T.fov,Q.zoom=T.zoom,Q.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&Gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&Gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&M&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",nt),s.addEventListener("selectstart",nt),s.addEventListener("selectend",nt),s.addEventListener("squeeze",nt),s.addEventListener("squeezestart",nt),s.addEventListener("squeezeend",nt),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",lt),y.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(P),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Lt=null,Xt=null,Rt=null;y.depth&&(Rt=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Lt=y.stencil?ms:Fi,Xt=y.stencil?Xr:Mi);const ne={colorFormat:t.RGBA8,depthFormat:Rt,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(ne),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new jn(f.textureWidth,f.textureHeight,{format:Zn,type:In,depthTexture:new Kr(f.textureWidth,f.textureHeight,Xt,void 0,void 0,void 0,void 0,void 0,void 0,Lt),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const Lt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,Lt),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new jn(d.framebufferWidth,d.framebufferHeight,{format:Zn,type:In,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),oe.setContext(s),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function lt(Q){for(let rt=0;rt<Q.removed.length;rt++){const Lt=Q.removed[rt],Xt=E.indexOf(Lt);Xt>=0&&(E[Xt]=null,A[Xt].disconnect(Lt))}for(let rt=0;rt<Q.added.length;rt++){const Lt=Q.added[rt];let Xt=E.indexOf(Lt);if(Xt===-1){for(let ne=0;ne<A.length;ne++)if(ne>=E.length){E.push(Lt),Xt=ne;break}else if(E[ne]===null){E[ne]=Lt,Xt=ne;break}if(Xt===-1)break}const Rt=A[Xt];Rt&&Rt.connect(Lt)}}const J=new L,K=new L;function tt(Q,rt,Lt){J.setFromMatrixPosition(rt.matrixWorld),K.setFromMatrixPosition(Lt.matrixWorld);const Xt=J.distanceTo(K),Rt=rt.projectionMatrix.elements,ne=Lt.projectionMatrix.elements,We=Rt[14]/(Rt[10]-1),ie=Rt[14]/(Rt[10]+1),ge=(Rt[9]+1)/Rt[5],Re=(Rt[9]-1)/Rt[5],ce=(Rt[8]-1)/Rt[0],$e=(ne[8]+1)/ne[0],Je=We*ce,Mn=We*$e,Oe=Xt/(-ce+$e),ze=Oe*-ce;if(rt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ze),Q.translateZ(Oe),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Rt[10]===-1)Q.projectionMatrix.copy(rt.projectionMatrix),Q.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const O=We+Oe,cn=ie+Oe,Se=Je-ze,w=Mn+(Xt-ze),x=ge*ie/cn*O,z=Re*ie/cn*O;Q.projectionMatrix.makePerspective(Se,w,x,z,O,cn),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Et(Q,rt){rt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(rt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let rt=Q.near,Lt=Q.far;m.texture!==null&&(m.depthNear>0&&(rt=m.depthNear),m.depthFar>0&&(Lt=m.depthFar)),V.near=B.near=I.near=rt,V.far=B.far=I.far=Lt,(N!==V.near||G!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),N=V.near,G=V.far),V.layers.mask=Q.layers.mask|6,I.layers.mask=V.layers.mask&-5,B.layers.mask=V.layers.mask&-3;const Xt=Q.parent,Rt=V.cameras;Et(V,Xt);for(let ne=0;ne<Rt.length;ne++)Et(Rt[ne],Xt);Rt.length===2?tt(V,I,B):V.projectionMatrix.copy(I.projectionMatrix),T===null&&Q.isPerspectiveCamera&&(T={camera:Q,fov:Q.fov,zoom:Q.zoom}),xt(Q,V,Xt)};function xt(Q,rt,Lt){Lt===null?Q.matrix.copy(rt.matrixWorld):(Q.matrix.copy(Lt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(rt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(rt.projectionMatrix),Q.projectionMatrixInverse.copy(rt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Yr*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(Q){c=Q,f!==null&&(f.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(Q){return p[Q]};let Jt=null;function Kt(Q,rt){if(u=rt.getViewerPose(l||a),g=rt,u!==null){const Lt=u.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let Xt=!1;Lt.length!==V.cameras.length&&(V.cameras.length=0,Xt=!0);for(let ie=0;ie<Lt.length;ie++){const ge=Lt[ie];let Re=null;if(d!==null)Re=d.getViewport(ge);else{const $e=h.getViewSubImage(f,ge);Re=$e.viewport,ie===0&&(e.setRenderTargetTextures(S,$e.colorTexture,$e.depthStencilTexture),e.setRenderTarget(S))}let ce=F[ie];ce===void 0&&(ce=new Tn,ce.layers.enable(ie),ce.viewport=new be,F[ie]=ce),ce.matrix.fromArray(ge.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(ge.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(Re.x,Re.y,Re.width,Re.height),ie===0&&(V.matrix.copy(ce.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Xt===!0&&V.cameras.push(ce)}const Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){h=n.getBinding();const ie=h.getDepthInformation(Lt[0]);ie&&ie.isValid&&ie.texture&&m.init(ie,s.renderState)}if(Rt&&Rt.includes("camera-access")&&M){e.state.unbindTexture(),h=n.getBinding();for(let ie=0;ie<Lt.length;ie++){const ge=Lt[ie].camera;if(ge){let Re=p[ge];Re||(Re=new nd,p[ge]=Re);const ce=h.getCameraImage(ge);Re.sourceTexture=ce}}}}for(let Lt=0;Lt<A.length;Lt++){const Xt=E[Lt],Rt=A[Lt];Xt!==null&&Rt!==void 0&&Rt.update(Xt,rt,l||a)}Jt&&Jt(Q,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),g=null}const oe=new gd;oe.setAnimationLoop(Kt),this.setAnimationLoop=function(Q){Jt=Q},this.dispose=function(){}}}const kS=new Ae,Ed=new qt;Ed.set(-1,0,0,0,1,0,0,0,1);function zS(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,fd(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,R,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),M(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,y,R):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),R=y.envMap,S=y.envMapRotation;R&&(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(kS.makeRotationFromEuler(S)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Ed),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,R){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=R*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function GS(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,A){const E=A.program;n.uniformBlockBinding(S,E)}function l(S,A){let E=s[S.id];E===void 0&&(m(S),E=u(S),s[S.id]=E,S.addEventListener("dispose",y));const P=A.program;n.updateUBOMapping(S,P);const _=e.render.frame;r[S.id]!==_&&(f(S),r[S.id]=_)}function u(S){const A=h();S.__bindingPointIndex=A;const E=i.createBuffer(),P=S.__size,_=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,P,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,E),E}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return me("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const A=s[S.id],E=S.uniforms,P=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let _=0,T=E.length;_<T;_++){const I=E[_];if(Array.isArray(I))for(let B=0,F=I.length;B<F;B++)d(I[B],_,B,P);else d(I,_,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(S,A,E,P){if(M(S,A,E,P)===!0){const _=S.__offset,T=S.value;if(Array.isArray(T)){let I=0;for(let B=0;B<T.length;B++){const F=T[B],V=p(F);g(F,S.__data,I),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(I+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,S.__data)}}function g(S,A,E){typeof S=="number"||typeof S=="boolean"?A[0]=S:S.isMatrix3?(A[0]=S.elements[0],A[1]=S.elements[1],A[2]=S.elements[2],A[3]=0,A[4]=S.elements[3],A[5]=S.elements[4],A[6]=S.elements[5],A[7]=0,A[8]=S.elements[6],A[9]=S.elements[7],A[10]=S.elements[8],A[11]=0):ArrayBuffer.isView(S)?A.set(new S.constructor(S.buffer,S.byteOffset,A.length)):S.toArray(A,E)}function M(S,A,E,P){const _=S.value,T=A+"_"+E;if(P[T]===void 0)return typeof _=="number"||typeof _=="boolean"?P[T]=_:ArrayBuffer.isView(_)?P[T]=_.slice():P[T]=_.clone(),!0;{const I=P[T];if(typeof _=="number"||typeof _=="boolean"){if(I!==_)return P[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(I.equals(_)===!1)return I.copy(_),!0}}return!1}function m(S){const A=S.uniforms;let E=0;const P=16;for(let T=0,I=A.length;T<I;T++){const B=Array.isArray(A[T])?A[T]:[A[T]];for(let F=0,V=B.length;F<V;F++){const N=B[F],G=Array.isArray(N.value)?N.value:[N.value];for(let nt=0,Z=G.length;nt<Z;nt++){const lt=G[nt],J=p(lt),K=E%P,tt=K%J.boundary,Et=K+tt;E+=tt,Et!==0&&P-Et<J.storage&&(E+=P-Et),N.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=E,E+=J.storage}}}const _=E%P;return _>0&&(E+=P-_),S.__size=E,S.__cache={},this}function p(S){const A={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(A.boundary=4,A.storage=4):S.isVector2?(A.boundary=8,A.storage=8):S.isVector3||S.isColor?(A.boundary=16,A.storage=12):S.isVector4?(A.boundary=16,A.storage=16):S.isMatrix3?(A.boundary=48,A.storage=48):S.isMatrix4?(A.boundary=64,A.storage=64):S.isTexture?Gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(A.boundary=16,A.storage=S.byteLength):Gt("WebGLRenderer: Unsupported uniform value type.",S),A}function y(S){const A=S.target;A.removeEventListener("dispose",y);const E=a.indexOf(A.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function R(){for(const S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:c,update:l,dispose:R}}const VS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ai=null;function HS(){return ai===null&&(ai=new Y0(VS,16,16,vs,yi),ai.name="DFG_LUT",ai.minFilter=pn,ai.magFilter=pn,ai.wrapS=Ii,ai.wrapT=Ii,ai.generateMipmaps=!1,ai.needsUpdate=!0),ai}class bd{constructor(e={}){const{canvas:t=l0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=In}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const M=d,m=new Set([$l,Ul,Nl]),p=new Set([In,Mi,Wr,Xr,Il,Dl]),y=new Uint32Array(4),R=new Int32Array(4),S=new L;let A=null,E=null;const P=[],_=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let B=!1,F=null,V=null,N=null,G=null;this._outputColorSpace=An;let nt=0,Z=0,lt=null,J=-1,K=null;const tt=new be,Et=new be;let xt=null;const Jt=new ae(0);let Kt=0,oe=t.width,Q=t.height,rt=1,Lt=null,Xt=null;const Rt=new be(0,0,oe,Q),ne=new be(0,0,oe,Q);let We=!1;const ie=new Gl;let ge=!1,Re=!1;const ce=new Ae,$e=new L,Je=new be,Mn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function ze(){return lt===null?rt:1}let O=n;function cn(v,D){return t.getContext(v,D)}let Se,w,x,z,q,j,ft,mt,et,st,_t,Ot,yt,vt,Ft,kt,Zt,U,St,it,Mt,Tt,ct;try{const v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Rl}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",Wn,!1),O===null){const D="webgl2";if(O=cn(D,v),O===null)throw cn(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Bt()}catch(v){throw t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",Wn,!1),me("WebGLRenderer: "+v.message),v}function Bt(){Se=new H_(O),Se.init(),Mt=new US(O,Se),w=new N_(O,Se,e,Mt),x=new DS(O,Se),w.reversedDepthBuffer&&f&&x.buffers.depth.setReversed(!0),V=O.createFramebuffer(),N=O.createFramebuffer(),G=O.createFramebuffer(),z=new q_(O),q=new vS,j=new NS(O,Se,x,q,w,Mt,z),ft=new V_(I),mt=new Kg(O),Tt=new I_(O,mt),et=new W_(O,mt,z,Tt),st=new K_(O,et,mt,Tt,z),U=new Y_(O,w,j),Ft=new U_(q),_t=new _S(I,ft,Se,w,Tt,Ft),Ot=new zS(I,q),yt=new MS,vt=new wS(Se),Zt=new L_(I,ft,x,st,g,c),kt=new IS(I,st,w),ct=new GS(O,z,w,x),St=new D_(O,Se,z),it=new X_(O,Se,z),z.programs=_t.programs,I.capabilities=w,I.extensions=Se,I.properties=q,I.renderLists=yt,I.shadowMap=kt,I.state=x,I.info=z}M!==In&&(T=new J_(M,t.width,t.height,o,s,r));const Ut=new BS(I,O);this.xr=Ut,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const v=Se.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Se.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return rt},this.setPixelRatio=function(v){v!==void 0&&(rt=v,this.setSize(oe,Q,!1))},this.getSize=function(v){return v.set(oe,Q)},this.setSize=function(v,D,Y=!0){if(Ut.isPresenting){Gt("WebGLRenderer: Can't change size while VR device is presenting.");return}oe=v,Q=D,t.width=Math.floor(v*rt),t.height=Math.floor(D*rt),Y===!0&&(t.style.width=v+"px",t.style.height=D+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,v,D)},this.getDrawingBufferSize=function(v){return v.set(oe*rt,Q*rt).floor()},this.setDrawingBufferSize=function(v,D,Y){oe=v,Q=D,rt=Y,t.width=Math.floor(v*Y),t.height=Math.floor(D*Y),this.setViewport(0,0,v,D)},this.setEffects=function(v){if(M===In){me("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let D=0;D<v.length;D++)if(v[D].isOutputPass===!0){Gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(tt)},this.getViewport=function(v){return v.copy(Rt)},this.setViewport=function(v,D,Y,H){v.isVector4?Rt.set(v.x,v.y,v.z,v.w):Rt.set(v,D,Y,H),x.viewport(tt.copy(Rt).multiplyScalar(rt).round())},this.getScissor=function(v){return v.copy(ne)},this.setScissor=function(v,D,Y,H){v.isVector4?ne.set(v.x,v.y,v.z,v.w):ne.set(v,D,Y,H),x.scissor(Et.copy(ne).multiplyScalar(rt).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(v){x.setScissorTest(We=v)},this.setOpaqueSort=function(v){Lt=v},this.setTransparentSort=function(v){Xt=v},this.getClearColor=function(v){return v.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor(...arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha(...arguments)},this.clear=function(v=!0,D=!0,Y=!0){let H=0;if(v){let W=!1;if(lt!==null){const At=lt.texture.format;W=m.has(At)}if(W){const At=lt.texture.type,Ct=p.has(At),bt=Zt.getClearColor(),It=Zt.getClearAlpha(),$t=bt.r,Qt=bt.g,se=bt.b;Ct?(y[0]=$t,y[1]=Qt,y[2]=se,y[3]=It,O.clearBufferuiv(O.COLOR,0,y)):(R[0]=$t,R[1]=Qt,R[2]=se,R[3]=It,O.clearBufferiv(O.COLOR,0,R))}else H|=O.COLOR_BUFFER_BIT}D&&(H|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(H|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&O.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),F=v},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",Wn,!1),Zt.dispose(),yt.dispose(),vt.dispose(),q.dispose(),ft.dispose(),st.dispose(),Tt.dispose(),ct.dispose(),_t.dispose(),Ut.dispose(),Ut.removeEventListener("sessionstart",lu),Ut.removeEventListener("sessionend",uu),rs.stop()};function Ce(v){v.preventDefault(),ho("WebGLRenderer: Context Lost."),B=!0}function _e(){ho("WebGLRenderer: Context Restored."),B=!1;const v=z.autoReset,D=kt.enabled,Y=kt.autoUpdate,H=kt.needsUpdate,W=kt.type;Bt(),z.autoReset=v,kt.enabled=D,kt.autoUpdate=Y,kt.needsUpdate=H,kt.type=W}function Wn(v){me("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function ni(v){const D=v.target;D.removeEventListener("dispose",ni),Ud(D)}function Ud(v){$d(v),q.remove(v)}function $d(v){const D=q.get(v).programs;D!==void 0&&(D.forEach(function(Y){_t.releaseProgram(Y)}),v.isShaderMaterial&&_t.releaseShaderCache(v))}this.renderBufferDirect=function(v,D,Y,H,W,At){D===null&&(D=Mn);const Ct=W.isMesh&&W.matrixWorld.determinantAffine()<0,bt=Bd(v,D,Y,H,W);x.setMaterial(H,Ct);let It=Y.index,$t=1;if(H.wireframe===!0){if(It=et.getWireframeAttribute(Y),It===void 0)return;$t=2}const Qt=Y.drawRange,se=Y.attributes.position;let Dt=Qt.start*$t,ve=(Qt.start+Qt.count)*$t;At!==null&&(Dt=Math.max(Dt,At.start*$t),ve=Math.min(ve,(At.start+At.count)*$t)),It!==null?(Dt=Math.max(Dt,0),ve=Math.min(ve,It.count)):se!=null&&(Dt=Math.max(Dt,0),ve=Math.min(ve,se.count));const Ge=ve-Dt;if(Ge<0||Ge===1/0)return;Tt.setup(W,H,bt,Y,It);let De,Te=St;if(It!==null&&(De=mt.get(It),Te=it,Te.setIndex(De)),W.isMesh)H.wireframe===!0?(x.setLineWidth(H.wireframeLinewidth*ze()),Te.setMode(O.LINES)):Te.setMode(O.TRIANGLES);else if(W.isLine){let ln=H.linewidth;ln===void 0&&(ln=1),x.setLineWidth(ln*ze()),W.isLineSegments?Te.setMode(O.LINES):W.isLineLoop?Te.setMode(O.LINE_LOOP):Te.setMode(O.LINE_STRIP)}else W.isPoints?Te.setMode(O.POINTS):W.isSprite&&Te.setMode(O.TRIANGLES);if(W.isBatchedMesh)if(Se.get("WEBGL_multi_draw"))Te.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const ln=W._multiDrawStarts,wt=W._multiDrawCounts,gn=W._multiDrawCount,de=It?mt.get(It).bytesPerElement:1,On=q.get(H).currentProgram.getUniforms();for(let ii=0;ii<gn;ii++)On.setValue(O,"_gl_DrawID",ii),Te.render(ln[ii]/de,wt[ii])}else if(W.isInstancedMesh)Te.renderInstances(Dt,Ge,W.count);else if(Y.isInstancedBufferGeometry){const ln=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,wt=Math.min(Y.instanceCount,ln);Te.renderInstances(Dt,Ge,wt)}else Te.render(Dt,Ge)};function cu(v,D,Y,H){F!==null&&v.isNodeMaterial&&F.setObject(H,v),ge===!0&&Ft.setState(v,Y,!1),v.transparent===!0&&v.side===kn&&v.forceSinglePass===!1?(v.side=Rn,v.needsUpdate=!0,na(v,D,H),v.side=xs,v.needsUpdate=!0,na(v,D,H),v.side=kn):na(v,D,H)}this.compile=function(v,D,Y=null){Y===null&&(Y=v),F!==null&&F.renderStart(v,D,Y),E=vt.get(Y),E.init(D),_.push(E),Y.traverseVisible(function(W){W.isLight&&W.layers.test(D.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),v!==Y&&v.traverseVisible(function(W){W.isLight&&W.layers.test(D.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),E.setupLights(),F!==null&&F.updateLights(E.state.lightsArray),Re=this.localClippingEnabled,ge=Ft.init(this.clippingPlanes,Re),ge===!0&&Ft.setGlobalState(this.clippingPlanes,D),F!==null&&kt.render(E.state.shadowsArray,Y,D);const H=new Set;return v.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const At=W.material;if(At)if(Array.isArray(At))for(let Ct=0;Ct<At.length;Ct++){const bt=At[Ct];cu(bt,Y,D,W),H.add(bt)}else cu(At,Y,D,W),H.add(At)}),E=_.pop(),F!==null&&F.renderEnd(),H},this.compileAsync=function(v,D,Y=null){const H=this.compile(v,D,Y);return new Promise(W=>{function At(){if(H.forEach(function(Ct){const It=q.get(Ct).currentProgram;(It===void 0||It.isReady())&&H.delete(Ct)}),H.size===0){W(v);return}setTimeout(At,10)}Se.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let To=null;function Od(v){To&&To(v)}function lu(){rs.stop()}function uu(){rs.start()}const rs=new gd;rs.setAnimationLoop(Od),typeof self<"u"&&rs.setContext(self),this.setAnimationLoop=function(v){To=v,Ut.setAnimationLoop(v),v===null?rs.stop():rs.start()},Ut.addEventListener("sessionstart",lu),Ut.addEventListener("sessionend",uu),this.render=function(v,D){if(D!==void 0&&D.isCamera!==!0){me("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;F!==null&&F.renderStart(v,D);const Y=Ut.enabled===!0&&Ut.isPresenting===!0,H=T!==null&&(lt===null||Y)&&T.begin(I,lt);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Ut.enabled===!0&&Ut.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ut.cameraAutoUpdate===!0&&Ut.updateCamera(D),D=Ut.getCamera()),v.isScene===!0&&v.onBeforeRender(I,v,D,lt),E=vt.get(v,_.length),E.init(D),E.state.textureUnits=j.getTextureUnits(),_.push(E),ce.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),ie.setFromProjectionMatrix(ce,pi,D.reversedDepth),Re=this.localClippingEnabled,ge=Ft.init(this.clippingPlanes,Re),A=yt.get(v,P.length),A.init(),P.push(A),Ut.enabled===!0&&Ut.isPresenting===!0){const Ct=I.xr.getDepthSensingMesh();Ct!==null&&wo(Ct,D,-1/0,I.sortObjects)}wo(v,D,0,I.sortObjects),A.finish(),F!==null&&F.updateLights(E.state.lightsArray),I.sortObjects===!0&&A.sort(Lt,Xt),Oe=Ut.enabled===!1||Ut.isPresenting===!1||Ut.hasDepthSensing()===!1,Oe&&Zt.addToRenderList(A,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ge===!0&&Ft.beginShadows();const W=E.state.shadowsArray;if(kt.render(W,v,D),ge===!0&&Ft.endShadows(),(H&&T.hasRenderPass())===!1){const Ct=A.opaque,bt=A.transmissive;if(E.setupLights(),D.isArrayCamera){const It=D.cameras;if(bt.length>0)for(let $t=0,Qt=It.length;$t<Qt;$t++){const se=It[$t];fu(Ct,bt,v,se)}Oe&&Zt.render(v);for(let $t=0,Qt=It.length;$t<Qt;$t++){const se=It[$t];hu(A,v,se,se.viewport)}}else bt.length>0&&fu(Ct,bt,v,D),Oe&&Zt.render(v),hu(A,v,D)}lt!==null&&Z===0&&(j.updateMultisampleRenderTarget(lt),j.updateRenderTargetMipmap(lt)),H&&T.end(I),v.isScene===!0&&v.onAfterRender(I,v,D),Tt.resetDefaultState(),J=-1,K=null,_.pop(),_.length>0?(E=_[_.length-1],j.setTextureUnits(E.state.textureUnits),ge===!0&&Ft.setGlobalState(I.clippingPlanes,E.state.camera)):E=null,P.pop(),P.length>0?A=P[P.length-1]:A=null,F!==null&&F.renderEnd()};function wo(v,D,Y,H){if(v.visible===!1)return;if(v.layers.test(D.layers)){if(v.isGroup)Y=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(D);else if(v.isLightProbeGrid)E.pushLightProbeGrid(v);else if(v.isLight)E.pushLight(v),v.castShadow&&E.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(ie)){H&&Je.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ce);const Ct=st.update(v),bt=v.material;bt.visible&&A.push(v,Ct,bt,Y,Je.z,null,D)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum(ie))){const Ct=st.update(v),bt=v.material;if(H&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Je.copy(v.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Je.copy(Ct.boundingSphere.center)),Je.applyMatrix4(v.matrixWorld).applyMatrix4(ce)),Array.isArray(bt)){const It=Ct.groups;for(let $t=0,Qt=It.length;$t<Qt;$t++){const se=It[$t],Dt=bt[se.materialIndex];Dt&&Dt.visible&&A.push(v,Ct,Dt,Y,Je.z,se,D)}}else bt.visible&&A.push(v,Ct,bt,Y,Je.z,null,D)}}const At=v.children;for(let Ct=0,bt=At.length;Ct<bt;Ct++)wo(At[Ct],D,Y,H)}function hu(v,D,Y,H){const{opaque:W,transmissive:At,transparent:Ct}=v;E.setupLightsView(Y),ge===!0&&Ft.setGlobalState(I.clippingPlanes,Y),H&&x.viewport(tt.copy(H)),W.length>0&&ea(W,D,Y),At.length>0&&ea(At,D,Y),Ct.length>0&&ea(Ct,D,Y),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function fu(v,D,Y,H){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[H.id]===void 0){const Dt=Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[H.id]=new jn(1,1,{generateMipmaps:!0,type:Dt?yi:In,minFilter:ps,samples:Math.max(4,w.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ue.workingColorSpace})}const At=E.state.transmissionRenderTarget[H.id],Ct=H.viewport||tt;At.setSize(Ct.z*I.transmissionResolutionScale,Ct.w*I.transmissionResolutionScale);const bt=I.getRenderTarget(),It=I.getActiveCubeFace(),$t=I.getActiveMipmapLevel();I.setRenderTarget(At),I.getClearColor(Jt),Kt=I.getClearAlpha(),Kt<1&&I.setClearColor(16777215,.5),I.clear(),Oe&&Zt.render(Y);const Qt=I.toneMapping;I.toneMapping=xi;const se=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),E.setupLightsView(H),ge===!0&&Ft.setGlobalState(I.clippingPlanes,H),ea(v,Y,H),j.updateMultisampleRenderTarget(At),j.updateRenderTargetMipmap(At),Se.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let ve=0,Ge=D.length;ve<Ge;ve++){const De=D[ve],{object:Te,geometry:ln,material:wt,group:gn}=De;if(wt.side===kn&&Te.layers.test(H.layers)){const de=wt.side;wt.side=Rn,wt.needsUpdate=!0,du(Te,Y,H,ln,wt,gn),wt.side=de,wt.needsUpdate=!0,Dt=!0}}Dt===!0&&(j.updateMultisampleRenderTarget(At),j.updateRenderTargetMipmap(At))}I.setRenderTarget(bt,It,$t),I.setClearColor(Jt,Kt),se!==void 0&&(H.viewport=se),I.toneMapping=Qt}function ea(v,D,Y){const H=D.isScene===!0?D.overrideMaterial:null;for(let W=0,At=v.length;W<At;W++){const Ct=v[W],{object:bt,geometry:It,group:$t}=Ct;let Qt=Ct.material;Qt.allowOverride===!0&&H!==null&&(Qt=H),bt.layers.test(Y.layers)&&du(bt,D,Y,It,Qt,$t)}}function du(v,D,Y,H,W,At){F!==null&&W.isNodeMaterial&&F.setObject(v,W),v.onBeforeRender(I,D,Y,H,W,At),v.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),W.onBeforeRender(I,D,Y,H,v,At),W.transparent===!0&&W.side===kn&&W.forceSinglePass===!1?(W.side=Rn,W.needsUpdate=!0,I.renderBufferDirect(Y,D,H,W,v,At),W.side=xs,W.needsUpdate=!0,I.renderBufferDirect(Y,D,H,W,v,At),W.side=kn):I.renderBufferDirect(Y,D,H,W,v,At),v.onAfterRender(I,D,Y,H,W,At)}function na(v,D,Y){D.isScene!==!0&&(D=Mn);const H=q.get(v),W=E.state.lights,At=E.state.shadowsArray,Ct=W.state.version,bt=_t.getParameters(v,W.state,At,D,Y,E.state.lightProbeGridArray),It=_t.getProgramCacheKey(bt);let $t=H.programs;H.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,H.fog=D.fog;const Qt=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;H.envMap=ft.get(v.envMap||H.environment,Qt),H.envMapRotation=H.environment!==null&&v.envMap===null?D.environmentRotation:v.envMapRotation,$t===void 0&&(v.addEventListener("dispose",ni),$t=new Map,H.programs=$t);let se=$t.get(It);if(se!==void 0){if(H.currentProgram===se&&H.lightsStateVersion===Ct)return mu(v,bt),se}else bt.uniforms=_t.getUniforms(v),F!==null&&v.isNodeMaterial&&F.build(v,Y,bt),v.onBeforeCompile(bt,I),se=_t.acquireProgram(bt,It),$t.set(It,se),H.uniforms=bt.uniforms;const Dt=H.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Dt.clippingPlanes=Ft.uniform),mu(v,bt),H.needsLights=zd(v),H.lightsStateVersion=Ct,H.needsLights&&(Dt.ambientLightColor.value=W.state.ambient,Dt.lightProbe.value=W.state.probe,Dt.sunLights.value=W.state.sun,Dt.sunLightShadows.value=W.state.sunShadow,Dt.directionalLights.value=W.state.directional,Dt.directionalLightShadows.value=W.state.directionalShadow,Dt.spotLights.value=W.state.spot,Dt.spotLightShadows.value=W.state.spotShadow,Dt.rectAreaLights.value=W.state.rectArea,Dt.ltc_1.value=W.state.rectAreaLTC1,Dt.ltc_2.value=W.state.rectAreaLTC2,Dt.pointLights.value=W.state.point,Dt.pointLightShadows.value=W.state.pointShadow,Dt.hemisphereLights.value=W.state.hemi,Dt.sunShadowMatrix.value=W.state.sunShadowMatrix,Dt.sunShadowCascade.value=W.state.sunShadowCascade,Dt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Dt.spotLightMatrix.value=W.state.spotLightMatrix,Dt.spotLightMap.value=W.state.spotLightMap,Dt.pointShadowMatrix.value=W.state.pointShadowMatrix),H.lightProbeGrid=E.state.lightProbeGridArray.length>0,H.currentProgram=se,H.uniformsList=null,se}function pu(v){if(v.uniformsList===null){const D=v.currentProgram.getUniforms();v.uniformsList=ja.seqWithValue(D.seq,v.uniforms)}return v.uniformsList}function mu(v,D){const Y=q.get(v);Y.outputColorSpace=D.outputColorSpace,Y.batching=D.batching,Y.batchingColor=D.batchingColor,Y.instancing=D.instancing,Y.instancingColor=D.instancingColor,Y.instancingMorph=D.instancingMorph,Y.skinning=D.skinning,Y.morphTargets=D.morphTargets,Y.morphNormals=D.morphNormals,Y.morphColors=D.morphColors,Y.morphTargetsCount=D.morphTargetsCount,Y.numClippingPlanes=D.numClippingPlanes,Y.numIntersection=D.numClipIntersection,Y.vertexAlphas=D.vertexAlphas,Y.vertexTangents=D.vertexTangents,Y.toneMapping=D.toneMapping}function Fd(v,D){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;S.setFromMatrixPosition(D.matrixWorld);for(let Y=0,H=v.length;Y<H;Y++){const W=v[Y];if(W.texture!==null&&W.boundingBox.containsPoint(S))return W}return null}function Bd(v,D,Y,H,W){D.isScene!==!0&&(D=Mn),j.resetTextureUnits();const At=D.fog,Ct=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?D.environment:null,bt=lt===null?I.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:ue.workingColorSpace,It=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,$t=ft.get(H.envMap||Ct,It),Qt=H.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,se=!!Y.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Dt=!!Y.morphAttributes.position,ve=!!Y.morphAttributes.normal,Ge=!!Y.morphAttributes.color;let De=xi;H.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(De=I.toneMapping);const Te=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ln=Te!==void 0?Te.length:0,wt=q.get(H),gn=E.state.lights;if(ge===!0&&(Re===!0||v!==K)){const Pe=v===K&&H.id===J;Ft.setState(H,v,Pe)}let de=!1;H.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==gn.state.version||wt.outputColorSpace!==bt||W.isBatchedMesh&&wt.batching===!1||!W.isBatchedMesh&&wt.batching===!0||W.isBatchedMesh&&wt.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&wt.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&wt.instancing===!1||!W.isInstancedMesh&&wt.instancing===!0||W.isSkinnedMesh&&wt.skinning===!1||!W.isSkinnedMesh&&wt.skinning===!0||W.isInstancedMesh&&wt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&wt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&wt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&wt.instancingMorph===!1&&W.morphTexture!==null||wt.envMap!==$t||H.fog===!0&&wt.fog!==At||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==Ft.numPlanes||wt.numIntersection!==Ft.numIntersection)||wt.vertexAlphas!==Qt||wt.vertexTangents!==se||wt.morphTargets!==Dt||wt.morphNormals!==ve||wt.morphColors!==Ge||wt.toneMapping!==De||wt.morphTargetsCount!==ln||!!wt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(de=!0):(de=!0,wt.__version=H.version);let On=wt.currentProgram;de===!0&&(On=na(H,D,W),F&&H.isNodeMaterial&&F.onUpdateProgram(H,On,wt));let ii=!1,ki=!1,As=!1;const Ee=On.getUniforms(),ke=wt.uniforms;if(x.useProgram(On.program)&&(ii=!0,ki=!0,As=!0),H.id!==J&&(J=H.id,ki=!0),wt.needsLights){const Pe=Fd(E.state.lightProbeGridArray,W);wt.lightProbeGrid!==Pe&&(wt.lightProbeGrid=Pe,ki=!0)}if(ii||K!==v){x.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),Ee.setValue(O,"projectionMatrix",v.projectionMatrix),Ee.setValue(O,"viewMatrix",v.matrixWorldInverse);const Gi=Ee.map.cameraPosition;Gi!==void 0&&Gi.setValue(O,$e.setFromMatrixPosition(v.matrixWorld)),w.logarithmicDepthBuffer&&Ee.setValue(O,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Ee.setValue(O,"isOrthographic",v.isOrthographicCamera===!0),K!==v&&(K=v,ki=!0,As=!0)}if(wt.needsLights&&(gn.state.sunShadowMap.length>0&&Ee.setValue(O,"sunShadowMap",gn.state.sunShadowMap,j),gn.state.directionalShadowMap.length>0&&Ee.setValue(O,"directionalShadowMap",gn.state.directionalShadowMap,j),gn.state.spotShadowMap.length>0&&Ee.setValue(O,"spotShadowMap",gn.state.spotShadowMap,j),gn.state.pointShadowMap.length>0&&Ee.setValue(O,"pointShadowMap",gn.state.pointShadowMap,j)),W.isSkinnedMesh){Ee.setOptional(O,W,"bindMatrix"),Ee.setOptional(O,W,"bindMatrixInverse");const Pe=W.skeleton;Pe&&(Pe.boneTexture===null&&Pe.computeBoneTexture(),Ee.setValue(O,"boneTexture",Pe.boneTexture,j))}W.isBatchedMesh&&(Ee.setOptional(O,W,"batchingTexture"),Ee.setValue(O,"batchingTexture",W._matricesTexture,j),Ee.setOptional(O,W,"batchingIdTexture"),Ee.setValue(O,"batchingIdTexture",W._indirectTexture,j),Ee.setOptional(O,W,"batchingColorTexture"),W._colorsTexture!==null&&Ee.setValue(O,"batchingColorTexture",W._colorsTexture,j));const zi=Y.morphAttributes;if((zi.position!==void 0||zi.normal!==void 0||zi.color!==void 0)&&U.update(W,Y,On),(ki||wt.receiveShadow!==W.receiveShadow)&&(wt.receiveShadow=W.receiveShadow,Ee.setValue(O,"receiveShadow",W.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&D.environment!==null&&(ke.envMapIntensity.value=D.environmentIntensity),ke.dfgLUT!==void 0&&(ke.dfgLUT.value=HS()),ki){if(Ee.setValue(O,"toneMappingExposure",I.toneMappingExposure),wt.needsLights&&kd(ke,As),At&&H.fog===!0&&Ot.refreshFogUniforms(ke,At),Ot.refreshMaterialUniforms(ke,H,rt,Q,E.state.transmissionRenderTarget[v.id]),wt.needsLights&&wt.lightProbeGrid){const Pe=wt.lightProbeGrid;ke.probesSH.value=Pe.texture,ke.probesMin.value.copy(Pe.boundingBox.min),ke.probesMax.value.copy(Pe.boundingBox.max),ke.probesResolution.value.copy(Pe.resolution)}ja.upload(O,pu(wt),ke,j)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ja.upload(O,pu(wt),ke,j),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Ee.setValue(O,"center",W.center),Ee.setValue(O,"modelViewMatrix",W.modelViewMatrix),Ee.setValue(O,"normalMatrix",W.normalMatrix),Ee.setValue(O,"modelMatrix",W.matrixWorld),H.uniformsGroups!==void 0){const Pe=H.uniformsGroups;for(let Gi=0,Ts=Pe.length;Gi<Ts;Gi++){const xu=Pe[Gi];ct.update(xu,On),ct.bind(xu,On)}}return On}function kd(v,D){v.ambientLightColor.needsUpdate=D,v.lightProbe.needsUpdate=D,v.sunLights.needsUpdate=D,v.sunLightShadows.needsUpdate=D,v.directionalLights.needsUpdate=D,v.directionalLightShadows.needsUpdate=D,v.pointLights.needsUpdate=D,v.pointLightShadows.needsUpdate=D,v.spotLights.needsUpdate=D,v.spotLightShadows.needsUpdate=D,v.rectAreaLights.needsUpdate=D,v.hemisphereLights.needsUpdate=D}function zd(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return nt},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return lt},this.setRenderTargetTextures=function(v,D,Y){const H=q.get(v);H.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),q.get(v.texture).__webglTexture=D,q.get(v.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:Y,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,D){const Y=q.get(v);Y.__webglFramebuffer=D,Y.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(v,D=0,Y=0){lt=v,nt=D,Z=Y;let H=null,W=!1,At=!1;if(v){const bt=q.get(v);if(bt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(O.FRAMEBUFFER,bt.__webglFramebuffer),tt.copy(v.viewport),Et.copy(v.scissor),xt=v.scissorTest,x.viewport(tt),x.scissor(Et),x.setScissorTest(xt),J=-1;return}else if(bt.__webglFramebuffer===void 0)j.setupRenderTarget(v);else if(bt.__hasExternalTextures)j.rebindTextures(v,q.get(v.texture).__webglTexture,q.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Qt=v.depthTexture;if(bt.__boundDepthTexture!==Qt){if(Qt!==null&&q.has(Qt)&&(v.width!==Qt.image.width||v.height!==Qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(v)}}const It=v.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(At=!0);const $t=q.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray($t[D])?H=$t[D][Y]:H=$t[D],W=!0):v.samples>0&&j.useMultisampledRTT(v)===!1?H=q.get(v).__webglMultisampledFramebuffer:Array.isArray($t)?H=$t[Y]:H=$t,tt.copy(v.viewport),Et.copy(v.scissor),xt=v.scissorTest}else tt.copy(Rt).multiplyScalar(rt).floor(),Et.copy(ne).multiplyScalar(rt).floor(),xt=We;if(Y!==0&&(H=V),x.bindFramebuffer(O.FRAMEBUFFER,H)&&x.drawBuffers(v,H),x.viewport(tt),x.scissor(Et),x.setScissorTest(xt),W){const bt=q.get(v.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+D,bt.__webglTexture,Y)}else if(At){const bt=D;for(let It=0;It<v.textures.length;It++){const $t=q.get(v.textures[It]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+It,$t.__webglTexture,Y,bt)}}else if(v!==null&&Y!==0){const bt=q.get(v.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,bt.__webglTexture,Y)}J=-1};function gu(v){const D=q.get(v);return(D.__readFormat!==v.format||D.__readType!==v.type)&&(D.__readFormat=v.format,D.__readType=v.type,D.__formatReadable=w.textureFormatReadable(v.format),D.__typeReadable=w.textureTypeReadable(v.type)),D}this.readRenderTargetPixels=function(v,D,Y,H,W,At,Ct,bt=0){if(!(v&&v.isWebGLRenderTarget)){me("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=q.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Ct!==void 0&&(It=It[Ct]),It){x.bindFramebuffer(O.FRAMEBUFFER,It);try{const $t=v.textures[bt],Qt=$t.format,se=$t.type;v.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+bt);const Dt=gu($t);if(Dt.__formatReadable===!1){me("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Dt.__typeReadable===!1){me("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=v.width-H&&Y>=0&&Y<=v.height-W&&O.readPixels(D,Y,H,W,Mt.convert(Qt),Mt.convert(se),At)}finally{const $t=lt!==null?q.get(lt).__webglFramebuffer:null;x.bindFramebuffer(O.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(v,D,Y,H,W,At,Ct,bt=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=q.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Ct!==void 0&&(It=It[Ct]),It)if(D>=0&&D<=v.width-H&&Y>=0&&Y<=v.height-W){x.bindFramebuffer(O.FRAMEBUFFER,It);const $t=v.textures[bt],Qt=$t.format,se=$t.type;v.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+bt);const Dt=gu($t);if(Dt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Dt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ve=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ve),O.bufferData(O.PIXEL_PACK_BUFFER,At.byteLength,O.STREAM_READ),O.readPixels(D,Y,H,W,Mt.convert(Qt),Mt.convert(se),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);const Ge=lt!==null?q.get(lt).__webglFramebuffer:null;x.bindFramebuffer(O.FRAMEBUFFER,Ge);const De=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await u0(O,De,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ve),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,At),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(ve),O.deleteSync(De),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,D=null,Y=0){const H=Math.pow(2,-Y),W=Math.floor(v.image.width*H),At=Math.floor(v.image.height*H),Ct=D!==null?D.x:0,bt=D!==null?D.y:0;j.setTexture2D(v,0),O.copyTexSubImage2D(O.TEXTURE_2D,Y,0,0,Ct,bt,W,At),x.unbindTexture()},this.copyTextureToTexture=function(v,D,Y=null,H=null,W=0,At=0){let Ct,bt,It,$t,Qt,se,Dt,ve,Ge;const De=v.isCompressedTexture?v.mipmaps[At]:v.image;if(Y!==null)Ct=Y.max.x-Y.min.x,bt=Y.max.y-Y.min.y,It=Y.isBox3?Y.max.z-Y.min.z:1,$t=Y.min.x,Qt=Y.min.y,se=Y.isBox3?Y.min.z:0;else{const ke=Math.pow(2,-W);Ct=Math.floor(De.width*ke),bt=Math.floor(De.height*ke),v.isDataArrayTexture?It=De.depth:v.isData3DTexture?It=Math.floor(De.depth*ke):It=1,$t=0,Qt=0,se=0}H!==null?(Dt=H.x,ve=H.y,Ge=H.z):(Dt=0,ve=0,Ge=0);const Te=Mt.convert(D.format),ln=Mt.convert(D.type);let wt;D.isData3DTexture?(j.setTexture3D(D,0),wt=O.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(j.setTexture2DArray(D,0),wt=O.TEXTURE_2D_ARRAY):(j.setTexture2D(D,0),wt=O.TEXTURE_2D),x.activeTexture(O.TEXTURE0),x.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,D.flipY),x.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),x.pixelStorei(O.UNPACK_ALIGNMENT,D.unpackAlignment);const gn=x.getParameter(O.UNPACK_ROW_LENGTH),de=x.getParameter(O.UNPACK_IMAGE_HEIGHT),On=x.getParameter(O.UNPACK_SKIP_PIXELS),ii=x.getParameter(O.UNPACK_SKIP_ROWS),ki=x.getParameter(O.UNPACK_SKIP_IMAGES);x.pixelStorei(O.UNPACK_ROW_LENGTH,De.width),x.pixelStorei(O.UNPACK_IMAGE_HEIGHT,De.height),x.pixelStorei(O.UNPACK_SKIP_PIXELS,$t),x.pixelStorei(O.UNPACK_SKIP_ROWS,Qt),x.pixelStorei(O.UNPACK_SKIP_IMAGES,se);const As=v.isDataArrayTexture||v.isData3DTexture,Ee=D.isDataArrayTexture||D.isData3DTexture;if(v.isDepthTexture){const ke=q.get(v),zi=q.get(D),Pe=q.get(ke.__renderTarget),Gi=q.get(zi.__renderTarget);x.bindFramebuffer(O.READ_FRAMEBUFFER,Pe.__webglFramebuffer),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,Gi.__webglFramebuffer);for(let Ts=0;Ts<It;Ts++)As&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,q.get(v).__webglTexture,W,se+Ts),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,q.get(D).__webglTexture,At,Ge+Ts)),O.blitFramebuffer($t,Qt,Ct,bt,Dt,ve,Ct,bt,O.DEPTH_BUFFER_BIT,O.NEAREST);x.bindFramebuffer(O.READ_FRAMEBUFFER,null),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(W!==0||v.isRenderTargetTexture||q.has(v)){const ke=q.get(v),zi=q.get(D);x.bindFramebuffer(O.READ_FRAMEBUFFER,N),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,G);for(let Pe=0;Pe<It;Pe++)As?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ke.__webglTexture,W,se+Pe):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ke.__webglTexture,W),Ee?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,zi.__webglTexture,At,Ge+Pe):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,zi.__webglTexture,At),W!==0?O.blitFramebuffer($t,Qt,Ct,bt,Dt,ve,Ct,bt,O.COLOR_BUFFER_BIT,O.NEAREST):Ee?O.copyTexSubImage3D(wt,At,Dt,ve,Ge+Pe,$t,Qt,Ct,bt):O.copyTexSubImage2D(wt,At,Dt,ve,$t,Qt,Ct,bt);x.bindFramebuffer(O.READ_FRAMEBUFFER,null),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Ee?v.isDataTexture||v.isData3DTexture?O.texSubImage3D(wt,At,Dt,ve,Ge,Ct,bt,It,Te,ln,De.data):D.isCompressedArrayTexture?O.compressedTexSubImage3D(wt,At,Dt,ve,Ge,Ct,bt,It,Te,De.data):O.texSubImage3D(wt,At,Dt,ve,Ge,Ct,bt,It,Te,ln,De):v.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,At,Dt,ve,Ct,bt,Te,ln,De.data):v.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,At,Dt,ve,De.width,De.height,Te,De.data):O.texSubImage2D(O.TEXTURE_2D,At,Dt,ve,Ct,bt,Te,ln,De);x.pixelStorei(O.UNPACK_ROW_LENGTH,gn),x.pixelStorei(O.UNPACK_IMAGE_HEIGHT,de),x.pixelStorei(O.UNPACK_SKIP_PIXELS,On),x.pixelStorei(O.UNPACK_SKIP_ROWS,ii),x.pixelStorei(O.UNPACK_SKIP_IMAGES,ki),At===0&&D.generateMipmaps&&O.generateMipmap(wt),x.unbindTexture()},this.initRenderTarget=function(v){q.get(v).__webglFramebuffer===void 0&&j.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?j.setTextureCube(v,0):v.isData3DTexture?j.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?j.setTexture2DArray(v,0):j.setTexture2D(v,0),x.unbindTexture()},this.resetState=function(){nt=0,Z=0,lt=null,x.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ue._getDrawingBufferColorSpace(e),t.unpackColorSpace=ue._getUnpackColorSpace()}}class WS{constructor(e){ot(this,"renderer");ot(this,"world",null);ot(this,"width",1);ot(this,"height",1);ot(this,"last",0);ot(this,"lift",0);ot(this,"liftTarget",0);this.canvas=e,this.renderer=new bd({canvas:e,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),this.renderer.toneMapping=Pl,this.renderer.toneMappingExposure=1.1,window.addEventListener("resize",()=>this.resize()),this.resize(),requestAnimationFrame(t=>this.frame(t))}setWorld(e){this.world&&XS(this.world.scene),this.world=e,this.renderer.toneMappingExposure=e.exposure??1.1,this.applyView()}setLift(e,t=!1){this.liftTarget=e,t&&(this.lift=e)}project(e){const t=e.clone().project(this.world.camera);return{x:(t.x*.5+.5)*this.width,y:(-t.y*.5+.5)*this.height}}resize(){this.width=this.canvas.clientWidth||window.innerWidth,this.height=this.canvas.clientHeight||window.innerHeight,this.renderer.setSize(this.width,this.height,!1),this.applyView()}applyView(){const e=this.world;e&&(e.camera.aspect=this.width/this.height,e.camera.setViewOffset(this.width,this.height,0,this.lift*this.height,this.width,this.height),e.resize(this.width/this.height))}frame(e){requestAnimationFrame(r=>this.frame(r));const t=e/1e3,n=Math.min(t-this.last,.05);this.last=t;const s=this.world;s&&(Math.abs(this.liftTarget-this.lift)>5e-4&&(this.lift+=(this.liftTarget-this.lift)*Math.min(1,n*6),s.camera.setViewOffset(this.width,this.height,0,this.lift*this.height,this.width,this.height)),s.update(n,t),this.renderer.render(s.scene,s.camera))}}function XS(i){i.traverse(e=>{var s;const t=e;(s=t.geometry)==null||s.dispose();const n=Array.isArray(t.material)?t.material:t.material?[t.material]:[];for(const r of n){for(const a of Object.values(r))a instanceof on&&a.dispose();r.dispose()}}),i.environment&&i.environment.dispose()}function Es(i,e,t){const n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);const s=new ed(n);return s.colorSpace=An,s.anisotropy=4,s}let qh=null;function yl(){return qh??(qh=Es(128,128,(i,e,t)=>{const n=i.createRadialGradient(e/2,t/2,0,e/2,t/2,e/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,"rgba(255,255,255,0.45)"),n.addColorStop(.6,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=n,i.fillRect(0,0,e,t)})),qh}function qS(i,e,t=1){const n=new Qf(new zl({map:yl(),color:i,transparent:!0,opacity:t,blending:Vr,depthWrite:!1}));return n.scale.setScalar(e),n}function Ir(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}const ei='"Yusei Magic"',YS=["めあてすばやくせいかくに","九九のひょう","時間割月火水木金国数理社英体音美","校訓挑戦"],KS={morning:{wall:15985364,sky:["#6db8ff","#d8f0ff"],hemi:[14085119,13482128,1.9],sun:16773840,sunPower:1.5,patch:.34,shear:.3,lamps:0,exposure:1.1},noon:{wall:15853778,sky:["#3f9bff","#c4e6ff"],hemi:[14872831,13219212,2],sun:16777215,sunPower:1.3,patch:.26,shear:.12,lamps:0,exposure:1.1},afternoon:{wall:15392710,sky:["#5aa2e8","#ffe2b0"],hemi:[16771528,12097640,1.5],sun:16762986,sunPower:1.9,patch:.4,shear:.62,lamps:0,exposure:1.05},sunset:{wall:14470582,sky:["#4b3a8c","#ff8a4a"],hemi:[14465236,9400156,1.6],sun:16751194,sunPower:1.7,patch:.5,shear:1.05,lamps:0,exposure:1},night:{wall:14210764,sky:["#050a1e","#16224a"],hemi:[10466047,4867128,1],sun:10336511,sunPower:.35,patch:.16,shear:.4,lamps:1,exposure:1}},yn=-4.6,dn={w:4.6,h:1.75,y:1.6},Yh=2.94,ZS=50;class JS{constructor(e,t){ot(this,"scene",new qf);ot(this,"camera",new Tn(ZS,1,.1,60));ot(this,"exposure");ot(this,"dust");ot(this,"dustSeed");ot(this,"puff");ot(this,"puffVel");ot(this,"puffLife",0);ot(this,"patches",[]);ot(this,"secondHand");ot(this,"patchOpacity");ot(this,"shake",0);ot(this,"nod",0);const n=KS[e],s=Ir(11);this.exposure=n.exposure,this.patchOpacity=n.patch,this.scene.background=new ae(n.sky[1]),this.scene.add(new Og(n.hemi[0],n.hemi[1],n.hemi[2]));const r=new md(n.sun,n.sunPower);r.position.set(-5,3.2-n.shear*1.6,2.5),this.scene.add(r);const a=(K,tt)=>new Qa(tt?{color:K,map:tt}:{color:K}),o=a(16777215,Kh(Ir(5),"#b98a55","#8f6538")),c=a(9069112),l=new re(new Ln(14,3.4),a(n.wall));l.position.set(0,1.7,yn);const u=new re(new Ln(14,.82),o);u.position.set(0,.41,yn+.01);const h=Kh(Ir(6),"#a97c4c","#7d5830");h.wrapS=h.wrapT=ro,h.repeat.set(5,3);const f=new re(new Ln(14,9),a(16777215,h));f.rotation.x=-Math.PI/2,f.position.set(0,0,-1);const d=new re(new Ln(14,9),a(15262936));d.rotation.x=Math.PI/2,d.position.set(0,3.4,-1),this.scene.add(l,u,f,d);const g=new re(new Ln(9,3.4),a(n.wall));g.rotation.y=Math.PI/2,g.position.set(-5.2,1.7,-1);const M=g.clone();M.rotation.y=-Math.PI/2,M.position.x=5.2,this.scene.add(g,M);const m=Es(8,128,(K,tt,Et)=>{const xt=K.createLinearGradient(0,0,0,Et);xt.addColorStop(0,n.sky[0]),xt.addColorStop(1,n.sky[1]),K.fillStyle=xt,K.fillRect(0,0,tt,Et)});for(let K=0;K<3;K++){const tt=new re(new Ln(1.7,1.7),new ui({map:m,toneMapped:!1}));tt.rotation.y=Math.PI/2,tt.position.set(-5.18,1.95,-3.4+K*1.95);const Et=new re(new vn(.06,1.8,.07),a(14211280));Et.position.copy(tt.position).setX(-5.15);const xt=new re(new vn(.06,.07,1.8),a(14211280));xt.position.copy(Et.position),this.scene.add(tt,Et,xt)}const p=new re(new vn(dn.w+.16,dn.h+.16,.06),c);p.position.set(0,dn.y,yn+.03);const y=QS(Ir(9)),R=new re(new Ln(dn.w,dn.h),new Qa({map:y}));R.position.set(0,dn.y,yn+.065);const S=new re(new vn(dn.w+.16,.04,.12),c);S.position.set(0,dn.y-dn.h/2-.09,yn+.1),this.scene.add(p,R,S),[16777215,16773280,16756928,16777215,11065599].forEach((K,tt)=>{const Et=new re(new Hl(.011,.011,.08,8),a(K));Et.rotation.z=Math.PI/2+(s()-.5)*.3,Et.position.set(-.5+tt*.13+s()*.03,S.position.y+.032,yn+.11),this.scene.add(Et)});const E=new re(new vn(.16,.05,.07),a(3824282));E.position.set(.45,S.position.y+.045,yn+.11),this.scene.add(E);const P=new re(new Vl(.19,40),new ui({map:tM()}));P.position.set(0,Yh,yn+.03);const _=new re(new ql(.19,.215,40),a(3159100));_.position.copy(P.position);const T=(K,tt,Et,xt)=>{const Jt=new Ln(tt,K);Jt.translate(0,K/2-.02,0);const Kt=new re(Jt,new ui({color:Et}));return Kt.position.copy(P.position).setZ(yn+.035),Kt.rotation.z=-xt,this.scene.add(Kt),Kt},I={morning:8.75,noon:12.5,afternoon:15.25,sunset:17.1,night:21.6};T(.09,.016,2106412,I[e]/12*Math.PI*2),T(.14,.011,2106412,I[e]%1*Math.PI*2),this.secondHand=T(.15,.005,13777466,0),this.scene.add(P,_);const B=t?[[eM(),-.72,.62,.42],[nM(),.74,.62,.5]]:[[iM(),-.72,.6,.3],[sM(),.74,.5,.42]];for(const[K,tt,Et,xt]of B){const Jt=new re(new Ln(Et,xt),new Qa({map:K}));Jt.position.set(tt,Yh,yn+.02),this.scene.add(Jt)}const F=new re(new vn(1.1,.6,.5),o);F.position.set(0,.3,-3.5),this.scene.add(F);const V=a(9080728);for(const K of[-1.05,0,1.05]){const tt=new re(new vn(.66,.035,.46),o);tt.position.set(K,.72,-1.3),this.scene.add(tt);for(const Et of[-1,1])for(const xt of[-1,1]){const Jt=new re(new vn(.03,.72,.03),V);Jt.position.set(K+Et*.3,.36,-1.3+xt*.2),this.scene.add(Jt)}}for(const K of[-1.6,1.6]){const tt=new re(new vn(1.3,.05,.16),new ui({color:n.lamps?16054527:12567240,toneMapped:!n.lamps}));if(tt.position.set(K,3.36,-3.2),this.scene.add(tt),n.lamps){const Et=qS(14674175,2.6,.5);Et.position.copy(tt.position);const xt=new Bg(15265535,14,9,1.6);xt.position.set(K,3.1,-3.2),this.scene.add(Et,xt)}}const N=jS();for(let K=0;K<2;K++){const xt=-1.5+K*1.75,Jt=.5,Kt=n.shear*2.5,oe=new Ue;oe.setAttribute("position",new fe([xt+Kt,Jt,0,xt+Kt+1.5,Jt,0,xt+1.5,Jt+2.5,0,xt,Jt+2.5,0],3)),oe.setAttribute("uv",new fe([0,0,1,0,1,1,0,1],2)),oe.setIndex([0,1,2,0,2,3]);const Q=new re(oe,new ui({map:N,color:n.sun,transparent:!0,opacity:n.patch,blending:Vr,depthWrite:!1}));Q.position.z=yn+.075,this.patches.push(Q),this.scene.add(Q)}const G=140,nt=new Float32Array(G*3);this.dustSeed=new Float32Array(G*3);for(let K=0;K<G*3;K+=3)this.dustSeed.set([(s()-.5)*4.5,.6+s()*2.4,-.8-s()*3.4],K);const Z=new Ue;Z.setAttribute("position",new Hn(nt,3)),this.dust=new ah(Z,new ml({map:yl(),color:n.sun,size:.05,transparent:!0,opacity:.25+n.patch*.6,blending:Vr,depthWrite:!1})),this.scene.add(this.dust);const lt=40,J=new Ue;J.setAttribute("position",new Hn(new Float32Array(lt*3),3)),this.puffVel=new Float32Array(lt*3),this.puff=new ah(J,new ml({map:yl(),color:16777215,size:.09,transparent:!0,opacity:0,depthWrite:!1})),this.puff.frustumCulled=!1,this.scene.add(this.puff)}resize(){this.camera.updateProjectionMatrix()}boardRect(e,t){const n=yn+.065,s=e.project(new L(-4.6/2,dn.y+dn.h/2,n)),r=e.project(new L(dn.w/2,dn.y-dn.h/2,n)),a=Math.max(0,s.x),o=Math.min(t,r.x);return{left:a,top:s.y,width:o-a,height:r.y-s.y}}react(e){if(e==="miss"){this.shake=1;return}e==="correct"&&(this.nod=1);const t=this.puff.geometry.getAttribute("position");for(let n=0;n<t.count;n++)t.setXYZ(n,(Math.random()-.5)*.7,dn.y+(Math.random()-.5)*.3,yn+.15),this.puffVel.set([(Math.random()-.5)*.9,Math.random()*.5,.2+Math.random()*.5],n*3);t.needsUpdate=!0,this.puffLife=e==="correct"?1:.6}update(e,t){const n=new Date;this.secondHand.rotation.z=-((n.getSeconds()+n.getMilliseconds()/1e3)/60)*Math.PI*2;const s=this.dust.geometry.getAttribute("position"),r=s.array;for(let c=0;c<r.length;c+=3){const l=this.dustSeed;r[c]=l[c]+Math.sin(t*.21+c)*.25,r[c+1]=.6+(l[c+1]-.6+t*.035*(1+c%5*.2))%2.4,r[c+2]=l[c+2]+Math.cos(t*.17+c*1.3)*.2}s.needsUpdate=!0;const a=.86+.14*Math.sin(t*.35)*Math.sin(t*.13+1);for(const c of this.patches)c.material.opacity=this.patchOpacity*a;if(this.puffLife>0){this.puffLife=Math.max(0,this.puffLife-e*1.3);const c=this.puff.geometry.getAttribute("position"),l=c.array;for(let u=0;u<l.length;u+=3)l[u]+=this.puffVel[u]*e,l[u+1]+=(this.puffVel[u+1]-.35)*e,l[u+2]+=this.puffVel[u+2]*e;c.needsUpdate=!0,this.puff.material.opacity=this.puffLife*.5}this.shake=Math.max(0,this.shake-e*2.6),this.nod=Math.max(0,this.nod-e*2.2);const o=this.shake*this.shake;this.camera.position.set(Math.sin(t*.33)*.06+(Math.random()-.5)*.09*o,1.25+Math.sin(t*.5)*.012+(Math.random()-.5)*.07*o,-Math.sin(this.nod*Math.PI)*.16),this.camera.lookAt(Math.sin(t*.33)*.02,dn.y,yn)}}function Kh(i,e,t){return Es(256,256,(n,s,r)=>{n.fillStyle=e,n.fillRect(0,0,s,r);const a=6;for(let o=0;o<a;o++){n.globalAlpha=.08+i()*.22,n.fillStyle=t,n.fillRect(0,o*r/a,s,r/a),n.globalAlpha=.5,n.fillRect(0,o*r/a,s,1.5);const c=i()*s;n.fillRect(c,o*r/a,1.5,r/a)}n.globalAlpha=.06;for(let o=0;o<90;o++)n.fillRect(0,i()*r,s,1)})}function QS(i){return Es(1024,268,(e,t,n)=>{e.fillStyle="#1e4a3a",e.fillRect(0,0,t,n);for(let r=0;r<60;r++)e.globalAlpha=.02+i()*.05,e.fillStyle="#e8f4ec",e.beginPath(),e.ellipse(i()*t,i()*n,40+i()*150,8+i()*26,(i()-.5)*.5,0,Math.PI*2),e.fill();const s=e.createRadialGradient(t/2,n/2,n*.3,t/2,n/2,t*.62);s.addColorStop(0,"rgba(0,0,0,0)"),s.addColorStop(1,"rgba(0,0,0,0.32)"),e.globalAlpha=1,e.fillStyle=s,e.fillRect(0,0,t,n)})}function jS(){return Es(128,192,(i,e,t)=>{i.fillStyle="#000",i.fillRect(0,0,e,t),i.filter="blur(3px)",i.fillStyle="#fff";for(let n=0;n<2;n++)for(let s=0;s<3;s++)i.fillRect(8+n*60,8+s*61,52,54)})}function tM(){return Es(256,256,(i,e)=>{i.fillStyle="#fbfbf6",i.fillRect(0,0,e,e),i.translate(e/2,e/2),i.fillStyle="#20242c";for(let t=0;t<12;t++)i.save(),i.rotate(t/12*Math.PI*2),i.fillRect(-3,-e/2+14,6,t%3===0?26:14),i.restore()})}function yo(i,e,t,n){return Es(i,e,s=>{s.fillStyle=t,s.fillRect(0,0,i,e),s.textAlign="center",s.textBaseline="middle",n(s)})}function eM(){return yo(372,252,"#fff6c8",i=>{i.fillStyle="#e8553a",i.font=`400 54px ${ei}`,i.fillText("めあて",186,56),i.fillStyle="#333",i.font=`400 46px ${ei}`,i.fillText("すばやく",186,132),i.fillText("せいかくに",186,196)})}function nM(){return yo(372,300,"#e2f3ff",i=>{i.fillStyle="#2a6fc0",i.font=`400 34px ${ei}`,i.fillText("九九のひょう",186,28),i.font=`400 21px ${ei}`;for(let e=1;e<=9;e++)for(let t=1;t<=9;t++)i.fillStyle=e===t?"#e8553a":"#333",i.fillText(String(e*t),26+(t-1)*40,68+(e-1)*26)})}function iM(){return yo(400,200,"#f6f1e2",i=>{i.strokeStyle="#5a3a1c",i.lineWidth=14,i.strokeRect(7,7,386,186),i.fillStyle="#8a8272",i.font=`400 26px ${ei}`,i.fillText("校訓",60,44),i.fillStyle="#1a1a1a",i.font=`400 104px ${ei}`,i.fillText("挑戦",210,116)})}function sM(){const i="月火水木金",e="国数理社英体音美",t=Ir(21);return yo(300,252,"#ffffff",n=>{n.fillStyle="#333",n.font=`400 26px ${ei}`,n.fillText("時間割",150,22),n.font=`400 24px ${ei}`,n.strokeStyle="#b0b0b0";for(let s=0;s<5;s++){n.fillStyle="#2a6fc0",n.fillText(i[s],42+s*54,58);for(let r=0;r<5;r++){const a=t()<.4?"数":e[Math.floor(t()*e.length)];n.fillStyle=a==="数"?"#e8553a":"#333",n.fillText(a,42+s*54,94+r*32),n.strokeRect(15+s*54,78+r*32,54,32)}}})}pt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new gt},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};wn.line={uniforms:Zl.merge([pt.common,pt.fog,pt.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		float trimSegmentAlpha( const in vec4 start, const in vec4 end ) {

			// compute the interpolation factor needed to trim the segment so it terminates
			// between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column

			// we need different nearEstimate formula for reversed and default depth buffer
			// a is positive with a reversed depth buffer so it can be used for controlling the code flow
			float nearEstimate = ( a > 0.0 ) ? ( - b / ( a + 1.0 ) ) : ( - 0.5 * b / a );

			return ( nearEstimate - start.z ) / ( end.z - start.z );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef USE_DASH

				float lineDistanceStart = dashScale * instanceDistanceStart;
				float lineDistanceEnd = dashScale * instanceDistanceEnd;

			#endif

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( start, end );
					end.xyz = mix( start.xyz, end.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceEnd = mix( lineDistanceStart, lineDistanceEnd, alpha );

					#endif

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( end, start );
					start.xyz = mix( end.xyz, start.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceStart = mix( lineDistanceEnd, lineDistanceStart, alpha );

					#endif

				}

			}

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? lineDistanceStart : lineDistanceEnd;
				vUv = uv;

			#endif

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class Ad extends ti{constructor(e){super({type:"LineMaterial",uniforms:Zl.clone(wn.line.uniforms),vertexShader:wn.line.vertexShader,fragmentShader:wn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0!==this.worldUnits&&(this.needsUpdate=!0),e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Zh=new ss,Oa=new L;class El extends Gg{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new fe(e,3)),this.setAttribute("uv",new fe(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new vl(t,6,1);return this.setAttribute("instanceStart",new mi(n,3,0)),this.setAttribute("instanceEnd",new mi(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new vl(t,6,1);return this.setAttribute("instanceColorStart",new mi(n,3,0)),this.setAttribute("instanceColorEnd",new mi(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Pg(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ss);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Zh.setFromBufferAttribute(t),this.boundingBox.union(Zh))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hr),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Oa.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Oa)),Oa.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Oa));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}const mc=new be,Jh=new L,Qh=new L,en=new be,nn=new be,oi=new be,gc=new L,xc=new Ae,sn=new qg,jh=new L,Fa=new ss,Ba=new hr,ci=new be;let hi,gs;function tf(i,e,t){return ci.set(0,0,-e,1).applyMatrix4(i.projectionMatrix),ci.multiplyScalar(1/ci.w),ci.x=gs/t.width,ci.y=gs/t.height,ci.applyMatrix4(i.projectionMatrixInverse),ci.multiplyScalar(1/ci.w),Math.abs(Math.max(ci.x,ci.y))}function rM(i,e){const t=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let o=0,c=a;o<c;o++){sn.start.fromBufferAttribute(s,o),sn.end.fromBufferAttribute(r,o),sn.applyMatrix4(t);const l=new L,u=new L;hi.distanceSqToSegment(sn.start,sn.end,u,l),u.distanceTo(l)<gs*.5&&e.push({point:u,pointOnLine:l,distance:hi.origin.distanceTo(u),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function aM(i,e,t){const n=e.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,o=i.geometry,c=o.attributes.instanceStart,l=o.attributes.instanceEnd,u=Math.min(o.instanceCount,c.count),h=-e.near;hi.at(1,oi),oi.w=1,oi.applyMatrix4(e.matrixWorldInverse),oi.applyMatrix4(n),oi.multiplyScalar(1/oi.w),oi.x*=r.x/2,oi.y*=r.y/2,oi.z=0,gc.copy(oi),xc.multiplyMatrices(e.matrixWorldInverse,a);for(let f=0,d=u;f<d;f++){if(en.fromBufferAttribute(c,f),nn.fromBufferAttribute(l,f),en.w=1,nn.w=1,en.applyMatrix4(xc),nn.applyMatrix4(xc),en.z>h&&nn.z>h)continue;if(en.z>h){const R=en.z-nn.z,S=(en.z-h)/R;en.lerp(nn,S)}else if(nn.z>h){const R=nn.z-en.z,S=(nn.z-h)/R;nn.lerp(en,S)}en.applyMatrix4(n),nn.applyMatrix4(n),en.multiplyScalar(1/en.w),nn.multiplyScalar(1/nn.w),en.x*=r.x/2,en.y*=r.y/2,nn.x*=r.x/2,nn.y*=r.y/2,sn.start.copy(en),sn.start.z=0,sn.end.copy(nn),sn.end.z=0;const M=sn.closestPointToPointParameter(gc,!0);sn.at(M,jh);const m=Vf.lerp(en.z,nn.z,M),p=m>=-1&&m<=1,y=gc.distanceTo(jh)<gs*.5;if(p&&y){sn.start.fromBufferAttribute(c,f),sn.end.fromBufferAttribute(l,f),sn.start.applyMatrix4(a),sn.end.applyMatrix4(a);const R=new L,S=new L;hi.distanceSqToSegment(sn.start,sn.end,S,R),t.push({point:S,pointOnLine:R,distance:hi.origin.distanceTo(S),object:i,face:null,faceIndex:f,uv:null,uv1:null})}}}class ef extends re{constructor(e=new El,t=new Ad({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,s=new Float32Array(2*t.count);for(let a=0,o=0,c=t.count;a<c;a++,o+=2)Jh.fromBufferAttribute(t,a),Qh.fromBufferAttribute(n,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+Jh.distanceTo(Qh);const r=new vl(s,2,1);return e.setAttribute("instanceDistanceStart",new mi(r,1,0)),e.setAttribute("instanceDistanceEnd",new mi(r,1,1)),this}raycast(e,t){const n=this.material.worldUnits,s=e.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;const r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;hi=e.ray;const a=this.matrixWorld,o=this.geometry,c=this.material;gs=c.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),Ba.copy(o.boundingSphere).applyMatrix4(a);let l;if(n)l=gs*.5;else{const h=Math.max(s.near,Ba.distanceToPoint(hi.origin));l=tf(s,h,c.resolution)}if(Ba.radius+=l,hi.intersectsSphere(Ba)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),Fa.copy(o.boundingBox).applyMatrix4(a);let u;if(n)u=gs*.5;else{const h=Math.max(s.near,Fa.distanceToPoint(hi.origin));u=tf(s,h,c.resolution)}Fa.expandByScalar(u),hi.intersectsBox(Fa)!==!1&&(n?rM(this,t):aM(this,s,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(mc),this.material.uniforms.resolution.value.set(mc.z,mc.w))}}const ka={white:16054258,yellow:16771466,pink:16753585,blue:10475263,green:12120224},oM={white:"#f4f7f2",yellow:"#ffe98a",pink:"#ffa3b1",blue:"#9fd6ff",green:"#b8f0a0"},cM=.7,lM=1.8,nf=32;class uM{constructor(){ot(this,"el");ot(this,"renderer");ot(this,"scene",new qf);ot(this,"camera",new Tn(nf,1,.1,400));ot(this,"spin",new Pi);ot(this,"orient",new Pi);ot(this,"content",new Pi);ot(this,"lineMats",[]);ot(this,"sweeps",[]);ot(this,"cutMat",null);ot(this,"solid",null);ot(this,"radius",1);ot(this,"corners",[]);ot(this,"fitAspect",0);ot(this,"fitDist",10);ot(this,"yaw",.6);ot(this,"yawBase",.6);ot(this,"pitch",.42);ot(this,"shownAt",0);ot(this,"lastDrag",-10);ot(this,"drag",null);ot(this,"raf",0);ot(this,"loop",()=>{if(this.raf=requestAnimationFrame(this.loop),!this.el.isConnected||!this.solid)return;const e=performance.now()/1e3,t=e-this.shownAt;this.resize(),!this.drag&&e-this.lastDrag>2.5&&(this.yaw=this.yawBase+Math.sin(t*.7)*.4),this.spin.rotation.set(this.pitch,this.yaw,0,"XYZ");for(const n of this.sweeps){const s=Math.max(0,Math.min(1,(t-cM)/lM)),r=Math.max(.001,(1-Math.pow(1-s,2))*Math.PI*2);n.edges||(n.mesh.geometry.dispose(),n.mesh.geometry=new fo(n.profile,64,0,r),n.turning.rotation.y=r,s>=1&&(n.turning.visible=!1,n.edges=this.addEdges(n.mesh.geometry,n.part.tone??"white",n.mesh,25)))}this.cutMat&&(this.cutMat.opacity=Math.min(.72,Math.max(0,(t-.5)*1.2))),this.renderer.render(this.scene,this.camera)});this.el=document.createElement("canvas"),this.el.className="solid3d",this.renderer=new bd({canvas:this.el,alpha:!0,antialias:!0}),this.renderer.setClearColor(0,0),this.scene.add(new zg(16777215,1.6));const e=new md(16777215,2.2);e.position.set(-3,6,5),this.scene.add(e),this.orient.add(this.content),this.spin.add(this.orient),this.scene.add(this.spin),this.el.addEventListener("pointerdown",n=>{this.drag={x:n.clientX,y:n.clientY},this.el.setPointerCapture(n.pointerId)}),this.el.addEventListener("pointermove",n=>{this.drag&&(this.yaw+=(n.clientX-this.drag.x)*.012,this.pitch=Math.max(-.2,Math.min(1.3,this.pitch+(n.clientY-this.drag.y)*.008)),this.drag={x:n.clientX,y:n.clientY},this.lastDrag=performance.now()/1e3)});const t=()=>this.drag=null;this.el.addEventListener("pointerup",t),this.el.addEventListener("pointercancel",t)}show(e){var a;this.clear(),this.solid=e,this.shownAt=performance.now()/1e3;const t=((a=e.revolve)==null?void 0:a.axis)==="x";this.yawBase=t?.25:e.revolve?.6:-.6,this.yaw=this.yawBase,this.pitch=e.revolve?.3:.42,t?this.orient.rotation.set(Math.PI,0,-Math.PI/2,"XYZ"):this.orient.rotation.set(0,0,0);const n=pp(e),s=[...(e.segs??[]).flatMap(o=>[o.from,o.to]),...(e.labels??[]).map(o=>o.at)];for(const o of s)o.forEach((c,l)=>(n.min[l]=Math.min(n.min[l],c),n.max[l]=Math.max(n.max[l],c)));const r=new L((n.min[0]+n.max[0])/2,(n.min[1]+n.max[1])/2,(n.min[2]+n.max[2])/2);this.radius=Math.max(.5,new L(...n.max).sub(new L(...n.min)).length()/2),this.corners=[];for(const o of[n.min[0],n.max[0]])for(const c of[n.min[1],n.max[1]])for(const l of[n.min[2],n.max[2]])this.corners.push(new L(o,c,l).sub(r));this.fitAspect=0,this.content.position.copy(r).multiplyScalar(-1);for(const o of e.parts)this.addPart(o,!!e.revolve);for(const o of e.segs??[]){const c=this.addLines([o.from,o.to],o.tone??"white",4,o.dashed);c.material.depthTest=!1,c.renderOrder=5}e.cut&&this.addCut(e.cut);for(const o of e.dots??[]){const c=new re(new Kl(this.radius*.035,12,8),new ui({color:ka.pink}));c.position.set(...o),this.content.add(c)}for(const o of e.labels??[])this.addLabel(o.at,o.text,o.tone??"yellow");this.raf||this.loop()}stop(){cancelAnimationFrame(this.raf),this.raf=0}clear(){this.content.traverse(e=>{var s,r;const t=e;(s=t.geometry)==null||s.dispose();const n=Array.isArray(t.material)?t.material:t.material?[t.material]:[];for(const a of n)(r=a.map)==null||r.dispose(),a.dispose()}),this.content.clear(),this.lineMats.length=0,this.sweeps=[],this.cutMat=null}faceMaterial(e){return new Qa({color:ka[e],transparent:!0,opacity:.34,side:kn,depthWrite:!1})}lineMaterial(e,t,n=!1){const s=new Ad({color:ka[e],linewidth:t,transparent:!0,dashed:n,dashSize:this.radius*.07,gapSize:this.radius*.05});return this.lineMats.push(s),s}addLines(e,t,n,s=!1,r=this.content){const a=new El().setPositions(e.flat()),o=new ef(a,this.lineMaterial(t,n,s));return s&&o.computeLineDistances(),r.add(o),o}addEdges(e,t,n,s=1){const r=new J0(e,s),a=new El().fromEdgesGeometry(r);r.dispose();const o=new ef(a,this.lineMaterial(t,2.6));return n.add(o),o}addPart(e,t){const n=e.tone??"white",s=new Pi;if(s.position.set(...e.at??[0,0,0]),this.content.add(s),e.shape==="lathe"){const o=e.profile.map(([h,f])=>new gt(Math.max(h,1e-4),f)),c=new re(new fo(o,64,0,t?.001:Math.PI*2),this.faceMaterial(n));if(c.rotation.y=Math.PI/2,s.add(c),!t){this.addEdges(c.geometry,n,c,25);return}const l=()=>{const h=new Pi,f=new od(e.profile.map(([g,M])=>new gt(g,M)));h.add(new re(new Yl(f),new ui({color:ka[n],transparent:!0,opacity:.55,side:kn,depthWrite:!1})));const d=[];return e.profile.forEach(([g,M],m)=>{const[p,y]=e.profile[(m+1)%e.profile.length];d.push([g,M,0],[p,y,0])}),this.addLines(d,n,3,!1,h),h};s.add(l());const u=l();s.add(u),this.sweeps.push({mesh:c,turning:u,profile:o,edges:null,part:e});return}let r;if(e.shape==="box"){const[o,c,l]=e.size;r=new vn(o,c,l).translate(o/2,c/2,l/2)}else e.shape==="prism"?r=fM(e.base,e.h,e.lying):r=dM(e.base,e.h,e.apex);const a=new re(r,this.faceMaterial(n));s.add(a),this.addEdges(r,n,s)}addCut(e){const t=[];for(let a=1;a<e.length-1;a++)t.push(...e[0],...e[a],...e[a+1]);const n=new Ue;n.setAttribute("position",new fe(t,3)),this.cutMat=new ui({color:16743062,transparent:!0,opacity:0,side:kn,depthWrite:!1});const s=new re(n,this.cutMat);s.renderOrder=2,this.content.add(s);const r=[];e.forEach((a,o)=>r.push(a,e[(o+1)%e.length])),this.addLines(r,"pink",3.4)}addLabel(e,t,n){const r=document.createElement("canvas"),a=r.getContext("2d");a.font=`64px ${ei}, sans-serif`;const o=Math.ceil(a.measureText(t).width)+24;r.width=o,r.height=88,a.font=`64px ${ei}, sans-serif`,a.textAlign="center",a.textBaseline="middle",a.lineWidth=10,a.strokeStyle="rgba(18, 44, 32, 0.85)",a.strokeText(t,o/2,r.height/2),a.fillStyle=oM[n],a.fillText(t,o/2,r.height/2);const c=new ed(r);c.colorSpace=An;const l=new Qf(new zl({map:c,depthTest:!1,transparent:!0,sizeAttenuation:!1})),u=.1;l.scale.set(u*o/r.height,u,1),l.position.set(...e),l.renderOrder=10,this.content.add(l)}fit(){const e=Math.tan(Vf.degToRad(nf/2)),t=e*this.camera.aspect,n=[-.4,-.2,0,.2,.4].map(r=>this.yawBase+r);let s=0;for(const r of n){const a=hM(this.pitch,r,this.orient.rotation);for(const o of this.corners){const c=o.clone().applyMatrix4(a);s=Math.max(s,c.z+Math.abs(c.y)/e,c.z+Math.abs(c.x)/t)}}return Math.max(s*1.06,.5)}resize(){const e=this.el.clientWidth,t=this.el.clientHeight;if(!e||!t)return;const n=Math.min(window.devicePixelRatio||1,2);(this.el.width!==Math.round(e*n)||this.el.height!==Math.round(t*n))&&(this.renderer.setPixelRatio(n),this.renderer.setSize(e,t,!1));for(const r of this.lineMats)r.resolution.set(e*n,t*n);this.camera.aspect=e/t,this.fitAspect!==this.camera.aspect&&(this.fitAspect=this.camera.aspect,this.fitDist=this.fit());const s=this.fitDist;this.camera.position.set(0,0,s),this.camera.near=s/20,this.camera.far=s*4,this.camera.lookAt(0,0,0),this.camera.updateProjectionMatrix()}}function hM(i,e,t){return new Ae().makeRotationFromEuler(new Bi(i,e,0,"XYZ")).multiply(new Ae().makeRotationFromEuler(t))}function fM(i,e,t=!1){const n=[],s=i.length;for(let r=1;r<s-1;r++){const[a,o,c]=[i[0],i[r],i[r+1]];n.push(a[0],0,a[1],c[0],0,c[1],o[0],0,o[1]),n.push(a[0],e,a[1],o[0],e,o[1],c[0],e,c[1])}for(let r=0;r<s;r++){const[a,o]=[i[r],i[(r+1)%s]];n.push(a[0],0,a[1],o[0],0,o[1],o[0],e,o[1],a[0],0,a[1],o[0],e,o[1],a[0],e,a[1])}if(t)for(let r=0;r<n.length;r+=3)[n[r+1],n[r+2]]=[n[r+2],n[r+1]];return Td(n)}function dM(i,e,t){const n=i.length,[s,r]=t??[i.reduce((o,c)=>o+c[0],0)/n,i.reduce((o,c)=>o+c[1],0)/n],a=[];for(let o=1;o<n-1;o++){const[c,l,u]=[i[0],i[o],i[o+1]];a.push(c[0],0,c[1],u[0],0,u[1],l[0],0,l[1])}for(let o=0;o<n;o++){const[c,l]=[i[o],i[(o+1)%n]];a.push(c[0],0,c[1],l[0],0,l[1],s,e,r)}return Td(a)}function Td(i){const e=new Ue;return e.setAttribute("position",new fe(i,3)),e.computeVertexNormals(),e}let ee=null,gi=null,ji=null,zr=null,po=null;const wd="nr.mute";let Eo=!1;try{Eo=localStorage.getItem(wd)==="1"}catch{}const _c=()=>Eo;function pM(i){Eo=i;try{localStorage.setItem(wd,i?"1":"0")}catch{}gi&&ee&&gi.gain.setTargetAtTime(i?0:1,ee.currentTime,.03)}function mo(){try{if(!ee){ee=new AudioContext,gi=ee.createGain(),gi.gain.value=Eo?0:1;const i=ee.createDynamicsCompressor();gi.connect(i).connect(ee.destination),ji=ee.createGain(),ji.gain.value=.5,ji.connect(gi);const e=ee.createDelay(1);e.delayTime.value=.28;const t=ee.createGain();t.gain.value=.32,zr=ee.createGain(),zr.gain.value=.35,zr.connect(e),e.connect(t).connect(e),e.connect(ji),po=ee.createBuffer(1,ee.sampleRate*.5,ee.sampleRate);const n=po.getChannelData(0);for(let s=0;s<n.length;s++)n[s]=Math.random()*2-1}if(ee.state==="suspended"&&ee.resume(),to!=="none"){const i=to;to="none",bo(i)}}catch{ee=null}}document.addEventListener("visibilitychange",()=>{ee&&(document.hidden?ee.suspend():ee.resume())});function Le(i,e,t={}){if(!ee||!gi)return;const n=t.when??ee.currentTime+(t.at??0),s=ee.createOscillator(),r=ee.createGain();s.type=t.type??"square",s.frequency.setValueAtTime(i,n),t.slideTo&&s.frequency.exponentialRampToValueAtTime(t.slideTo,n+e);const a=t.gain??.08;r.gain.setValueAtTime(1e-4,n),r.gain.exponentialRampToValueAtTime(a,n+(t.attack??.004)),r.gain.exponentialRampToValueAtTime(1e-4,n+e);let o=s.connect(r);if(t.cutoff){const c=ee.createBiquadFilter();c.type="lowpass",c.frequency.value=t.cutoff,o=o.connect(c)}o.connect(t.out??gi),t.echo&&zr&&o.connect(zr),s.start(n),s.stop(n+e+.03)}function Li(i,e={}){if(!ee||!gi||!po)return;const t=e.when??ee.currentTime,n=ee.createBufferSource();n.buffer=po;const s=ee.createBiquadFilter();s.type=e.lowpass?"lowpass":"highpass",s.frequency.value=e.lowpass??e.highpass??6e3;const r=ee.createGain();r.gain.setValueAtTime(e.gain??.05,t),r.gain.exponentialRampToValueAtTime(1e-4,t+i),n.connect(s).connect(r).connect(e.out??gi),n.start(t),n.stop(t+i+.02)}const we={tick:i=>Le(i?1320:880,.04,{gain:i?.07:.045}),hit:i=>{Le(523*Math.pow(2,Math.min(i,14)/12),.12,{type:"triangle",gain:.16}),Li(.03,{gain:.03,highpass:5e3})},select:()=>Le(660,.05,{type:"triangle",gain:.09}),tapUi:()=>Le(740,.05,{type:"sine",gain:.08,slideTo:980}),miss:()=>Le(160,.18,{type:"sawtooth",gain:.09,slideTo:110}),correct:()=>{Le(784,.1,{type:"triangle",gain:.15}),Le(1175,.14,{type:"triangle",gain:.15,at:.07}),Le(1568,.3,{type:"triangle",gain:.13,at:.14,echo:!0})},wrong:()=>{Le(140,.45,{type:"sawtooth",gain:.12}),Le(147,.45,{type:"square",gain:.05}),Li(.2,{gain:.05,lowpass:900})},grant:()=>{Le(660,.07,{type:"sine",gain:.07}),Le(990,.12,{type:"sine",gain:.07,at:.06})},whoosh:()=>Li(.4,{gain:.05,lowpass:1800}),key:()=>Le(1200,.025,{type:"sine",gain:.05}),flip:i=>{Li(.07,{gain:.07,lowpass:3800}),Le(784*Math.pow(2,Math.min(i,12)/12),.09,{type:"triangle",gain:.12})},count:i=>Le(i?1046:523,i?.4:.12,{gain:.1,type:i?"triangle":"square",echo:i}),tally:i=>Le(880+i%8*60,.03,{type:"square",gain:.035}),stamp:()=>{Le(196,.25,{type:"triangle",gain:.2,slideTo:98}),Li(.12,{gain:.08,lowpass:2500})},fanfare:()=>[523,659,784,1046,1319].forEach((i,e)=>Le(i,e===4?.7:.13,{type:"triangle",gain:.14,at:e*.11,echo:e===4}))};function bl(i){var e;try{(e=navigator.vibrate)==null||e.call(navigator,i)}catch{}}const fs=i=>110*Math.pow(2,i/12),mM={cool:{bpm:104,chords:[[0,3,7],[-4,0,3],[3,7,10],[-2,2,5]],step(i,e,t,n){const s=ji;i%2===0&&Le(fs(e[0]-12),n*1.7,{type:"sawtooth",gain:.11,when:t,out:s,cutoff:420});const r=[e[0],e[1],e[2],e[1]+12,e[2],e[1],e[0]+12,e[2]];if(Le(fs(r[i%8]+12),n*.9,{type:"square",gain:.032,when:t,out:s,echo:!0,cutoff:2600}),i===0)for(const a of e)Le(fs(a),n*16,{type:"triangle",gain:.03,when:t,out:s,attack:.4});i%4===0&&Le(120,.16,{type:"sine",gain:.3,when:t,out:s,slideTo:42}),i%8===4&&Li(.14,{gain:.07,when:t,highpass:1800,out:s}),i%2===1&&Li(.03,{gain:.03,when:t,highpass:8e3,out:s})}},light:{bpm:118,chords:[[3,7,10],[0,3,7],[-4,0,3],[-2,2,5]],step(i,e,t,n){const s=ji;(i%8===0||i%8===5)&&Le(fs(e[0]-12),n*2.2,{type:"triangle",gain:.16,when:t,out:s});const a=[e[2],null,e[1],e[2],e[0]+12,null,e[2],null,e[1],e[2],null,e[1],e[0],null,e[1],null][i];if(a!=null&&(Le(fs(a+12),n*1.6,{type:"sine",gain:.09,when:t,out:s,echo:!0}),Le(fs(a+36),n*.5,{type:"sine",gain:.02,when:t,out:s})),i%4===2)for(const o of e)Le(fs(o+12),n*.9,{type:"triangle",gain:.022,when:t,out:s});i%4===0&&Li(.025,{gain:.025,when:t,highpass:7e3,out:s}),i%8===4&&Li(.06,{gain:.035,when:t,highpass:3500,out:s})}}};let sf="none",to="none",rf=0,za=0,Ys=0;function bo(i){if(!ee){to=i;return}if(i===sf||(sf=i,window.clearInterval(rf),i==="none"))return;const e=mM[i],t=60/e.bpm/4;za=0,Ys=ee.currentTime+.08,rf=window.setInterval(()=>{if(!(!ee||ee.state!=="running"))for(Ys<ee.currentTime&&(Ys=ee.currentTime+.05);Ys<ee.currentTime+.25;){const n=Math.floor(za/16)%e.chords.length;e.step(za%16,e.chords[n],Ys,t),za++,Ys+=t}},60)}function jr(i){ji&&ee&&ji.gain.setTargetAtTime(i?.22:.5,ee.currentTime,.2)}const $n=document.getElementById("app"),Al=document.getElementById("fade"),bs=new WS(document.getElementById("stage"));let li=null;const af=()=>li??(li=new uM),Ql=.16;function X(i,e,t){const n=document.createElement(i);return e&&(n.className=e),t!==void 0&&(n.textContent=t),n}function tn(i,e){i.classList.remove(e),i.offsetWidth,i.classList.add(e)}const Un=i=>new Promise(e=>setTimeout(e,i));function Nn(i,e){i.addEventListener("pointerdown",t=>{t.preventDefault(),e()})}let Sn=null,of="";function gM(i){return i.stage==="sho"?Number(i.id[1])<=3?"morning":"noon":i.stage==="chu"?"afternoon":i.id==="k3"||i.id==="kc"?"night":"sunset"}const xM=i=>i.stage==="ko"?"cool":"light";function jl(i,e){const t=`${i}/${e}`;return(!Sn||of!==t)&&(Sn=new JS(i,e),of=t,bs.setWorld(Sn)),Sn}function tu(i,e){let t=0;const n=()=>{if(Sn){const s=Sn.boardRect(bs,window.innerWidth),r=e.getBoundingClientRect(),a=Math.max(s.left,r.left),o=Math.min(s.left+s.width,r.right);i.style.cssText=`left:${a-r.left}px;top:${s.top-r.top}px;width:${o-a}px;height:${s.height}px`}t=requestAnimationFrame(n)};return n(),()=>cancelAnimationFrame(t)}async function ta(i){Al.classList.add("on"),await Un(260),i(),await Un(60),Al.classList.remove("on")}function eu(i){try{return localStorage.getItem(i)}catch{return null}}function nu(i,e){try{localStorage.setItem(i,e)}catch{}}const Rd=i=>Number(eu(`nr.best3.${i.id}`))||0,Cd=i=>Number(eu(`nr.card2.${i.id}`))||0,vc=[["sho","小学校"],["chu","中学校"],["ko","高校"],["card","計算カード"]];let zn=null;function Ao(){zn==null||zn(),jl("noon",!0),bs.setLift(Ql),bo("light"),jr(!1),$n.replaceChildren();const i=X("div","screen title"),e=X("button","icon-btn",_c()?"🔇":"🔊");Nn(e,()=>{mo(),pM(!_c()),e.textContent=_c()?"🔇":"🔊"});const t=X("div","focus board-title");t.append(X("div","logo-sub","小1〜高3の 算数・数学"),X("div","logo-main","黒板ラッシュ"),X("div","logo-tag","学年をえらんで スタート!")),zn=tu(t,i);const n=X("div","panel menu"),s=X("div","tabs"),r=X("div","course-grid");let a=eu("nr.stage")??"sho";vc.some(([c])=>c===a)||(a="sho");const o=()=>{r.replaceChildren(),r.classList.toggle("decks",a==="card"),a==="card"&&Zd.forEach((c,l)=>{const u=X("button","mode-btn course deck st-card");u.style.setProperty("--i",String(l));const h=Cd(c);u.append(yM(X("span","deck-mark"),c.mark),X("span","course-name",c.name),X("span","mode-best",h?Js(h):"まだ")),Nn(u,()=>void Nd(c)),r.append(u)}),_m.filter(c=>c.stage===a).forEach((c,l)=>{const u=X("button",`mode-btn course st-${c.stage}`);u.style.setProperty("--i",String(l));const h=Rd(c);u.append(X("span","course-label",c.label),X("span","course-name",c.name),X("span","mode-best",h?`BEST ${h}`:"まだ")),Nn(u,()=>void Ld(c)),r.append(u)}),tn(r,"deal"),Array.from(s.children).forEach((c,l)=>c.classList.toggle("on",vc[l][0]===a))};for(const[c,l]of vc){const u=X("button",`tab st-${c}`,l);Nn(u,()=>{a!==c&&(mo(),we.tapUi(),a=c,nu("nr.stage",c),o())}),s.append(u)}n.append(s,r),o(),i.append(e,t,X("div","grow"),n),$n.append(i)}function Pd(i,e){const t=X("button","back-btn","←");return t.setAttribute("aria-label","もどる"),Nn(t,()=>{if(document.querySelector(".modal"))return;we.tapUi(),i(!0);const n=X("div","modal"),s=X("div","modal-box"),r=X("div","modal-actions"),a=X("button","mode-btn hero slim","つづける"),o=X("button","mode-btn danger","やめる");Nn(a,()=>{we.tapUi(),n.remove(),i(!1)}),Nn(o,()=>{we.tapUi(),n.remove(),e(),ta(Ao)}),r.append(o,a),s.append(X("div","modal-title","もどりますか?"),X("div","modal-text",`とちゅうでやめると、
この回の記録は消えます。`),r),n.append(s),$n.append(n)}),t}let sr=!1;async function Ld(i){if(sr)return;sr=!0,mo(),we.tapUi(),await ta(()=>{zn==null||zn(),zn=null,$n.replaceChildren(),jl(gM(i),i.stage==="sho"),bo(xM(i)),jr(!1),bs.setLift(Ql,!0)});const e=X("div","screen countdown"),t=X("div","count-num");e.append(X("div","count-mode",i.name),t),$n.append(e);for(const n of["READY","GO!"])t.textContent=n,tn(t,"pop-in"),we.count(n==="GO!"),await Un(n==="GO!"?420:700);sr=!1,new _M(i).start()}class _M{constructor(e){ot(this,"rng",df());ot(this,"index",0);ot(this,"level",Rc);ot(this,"topLevel",Rc);ot(this,"points",0);ot(this,"bonus",0);ot(this,"combo",0);ot(this,"maxCombo",0);ot(this,"results",[]);ot(this,"recent",[]);ot(this,"bank",0);ot(this,"q");ot(this,"tap",null);ot(this,"locked",!0);ot(this,"step",0);ot(this,"lastTick",0);ot(this,"lastFrame",0);ot(this,"root");ot(this,"levelEl",X("div","level"));ot(this,"pips",X("div","pips"));ot(this,"comboEl",X("span","combo"));ot(this,"scoreEl",X("span","score"));ot(this,"gauge",Rm());ot(this,"prompt",X("div","prompt"));ot(this,"focus",X("div","focus"));ot(this,"figEl",X("div","work-fig"));ot(this,"workMain",X("div","work-main"));ot(this,"workSub",X("div","work-sub"));ot(this,"work",X("div","work"));ot(this,"pad",X("div","pad"));ot(this,"stamp",X("div","stamp"));ot(this,"toast",X("div","toast"));ot(this,"padButtons",[]);ot(this,"raf",0);ot(this,"stopBoard");ot(this,"paused",!1);ot(this,"left",!1);this.course=e,this.root=X("div",`screen play st-${e.stage}`);const t=X("div","hud"),n=X("div","hud-mid");n.append(this.levelEl,this.pips);const s=X("div","hud-right");s.append(this.scoreEl,this.comboEl);const r=Pd(o=>this.paused=o,()=>{this.left=!0,cancelAnimationFrame(this.raf),this.stopBoard(),li==null||li.stop()});t.append(r,this.gauge.el,n,s);for(let o=0;o<Zi;o++)this.pips.append(X("span","pip"));this.work.append(this.figEl,this.workMain,this.workSub),this.focus.append(this.prompt,this.work,this.stamp,this.toast);const a=X("div","panel");a.append(this.pad),this.root.append(t,this.focus,X("div","grow"),a),this.stopBoard=tu(this.focus,this.root)}start(){$n.replaceChildren(this.root),this.lastFrame=performance.now();const e=()=>{this.frame(),this.raf=requestAnimationFrame(e)};this.raf=requestAnimationFrame(e),this.showLevel(0),this.showQuestion()}async showQuestion(){this.q=Mm(this.rng,this.course,this.level,this.recent.slice(-3)),this.recent.push(this.q.code),this.tap=this.q.kind==="choice"?null:Tm(this.q),this.step=0,Array.from(this.pips.children).forEach((e,t)=>e.classList.toggle("now",t===this.index)),this.updateHud(),this.stamp.className="stamp",this.prompt.textContent=this.q.prompt,this.renderWork(!1),this.q.body.solid?af().show(this.q.body.solid):li==null||li.stop(),tn(this.work,"chalk-in"),tn(this.prompt,"chalk-in"),this.renderPad(),this.bank+=Cc,this.gauge.update(this.bank),this.gauge.flash("grant"),this.floatText(`+${Cc/1e3}`,"grant"),we.grant(),this.lastTick=Math.ceil(this.bank/500),await Un(400),this.locked=!1}updateHud(){this.scoreEl.textContent=String(this.points+this.bonus),this.comboEl.textContent=this.combo>=2?`${this.combo}れんぞく!`:"",this.combo>=2&&tn(this.comboEl,"pop")}showLevel(e){this.levelEl.replaceChildren(X("span","level-tag","Lv"),X("span","level-num",String(this.level))),this.levelEl.dataset.dir=e>0?"up":e<0?"down":"",e!==0&&tn(this.levelEl,"pop")}frame(){const e=performance.now(),t=Math.min(e-this.lastFrame,100);if(this.lastFrame=e,this.locked||this.paused)return;this.bank-=t,this.gauge.update(this.bank);const n=Math.ceil(this.bank/500);if(n<this.lastTick){this.lastTick=n;const s=this.bank<=5e3;this.bank<=1e4&&(s||n%2===0)&&we.tick(s)}this.bank<=0&&this.fail("timeup")}renderWork(e,t=!1){const n=this.q,s=this.tap,r=this.workMain,a=this.workSub;if(r.replaceChildren(),a.replaceChildren(),r.className=`work-main${t?" done":""}`,a.className="work-sub",n.body.solid){const l=af();l.el.parentElement!==this.figEl&&this.figEl.replaceChildren(l.el)}else this.figEl.innerHTML=n.body.fig??"";if(this.work.classList.toggle("has-fig",!!(n.body.fig||n.body.solid)),this.work.classList.toggle("has-solid",!!n.body.solid),n.kind==="choice")r.append(eo(n.body.text));else if((s==null?void 0:s.kind)==="factor"&&n.kind==="factor")r.textContent=t?ff(s.collected):String(s.n),a.textContent=t?`${n.n} =`:s.collected.length?`${n.n} = ${s.collected.join(" × ")} × …`:"素数ボタンで割っていこう";else if((s==null?void 0:s.kind)==="reduce"&&n.kind==="reduce")r.append(Id(String(s.num),String(s.den))),a.textContent=s.collected.length?s.collected.map(l=>`÷${l}`).join("  "):"分母と分子を同じ数で割ろう";else if((s==null?void 0:s.kind)==="sqrt"&&n.kind==="sqrt")r.textContent=`${s.coef>1?s.coef:""}√${s.rad}`,a.textContent=s.coef>1?`√${n.rad} =`:"平方数をくくり出そう";else if((s==null?void 0:s.kind)==="pair"&&n.kind==="pair"){r.textContent=n.body.text;const l=u=>{const h=s.selected[u];if(h===void 0)return"(x + ▢)";const f=n.tiles[h];return f<0?`(x ${tr} ${-f})`:`(x + ${f})`};a.textContent=`= ${l(0)}${l(1)}`,a.classList.add("slots")}const o=Array.from(r.textContent??"").reduce((l,u)=>l+(/[　-鿿]/.test(u)?1:.56),0),c=o>15;r.classList.toggle("wrap",c),r.style.fontSize=c||n.body.fig||n.body.solid?"":`min(26cqh, ${(88/Math.max(o,1)).toFixed(1)}cqw)`,e&&tn(r,"pop")}renderPad(){const e=this.q;this.pad.replaceChildren(),this.pad.className="pad";let t,n;e.kind==="choice"?(t=e.choices,n=e.choices.map((r,a)=>a),this.pad.classList.add(e.choices.length===2?"yesno":"choices")):e.kind==="pair"?(t=e.tiles.map(jd),n=e.tiles.map((r,a)=>a),this.pad.classList.add("tiles")):e.kind==="sqrt"?(t=e.pad.map(r=>`${r}²`),n=[...e.pad],this.pad.classList.add("squares")):(t=e.pad.map(String),n=[...e.pad],this.pad.classList.add("primes"));const s=Math.max(...t.map(r=>r.length));this.pad.classList.add(s>16?"text-xs":s>10?"text-s":s>5?"text-m":"text-l"),t.some(r=>/[぀-ヿ一-鿿√π°]/.test(r))&&this.pad.classList.add("words"),this.padButtons=t.map((r,a)=>{const o=X("button","key"),c=X("span","key-face");return c.append(eo(r)),o.append(c),o.style.setProperty("--i",String(a)),Nn(o,()=>this.press(n[a],o)),this.pad.append(o),o}),tn(this.pad,"deal")}press(e,t){if(this.locked||this.paused)return;const n=this.q;if(n.kind==="choice"){e===n.answer?(t.classList.add("right"),this.succeed()):(t.classList.add("wrong"),this.fail("wrong"));return}const{state:s,result:r}=wm(n,this.tap,e);if(this.tap=s,r==="miss"){this.bank-=Uu,we.miss(),bl(40),tn(t,"shake-key"),this.gauge.flash("penalty"),this.floatText(`${tr}${(Uu/1e3).toFixed(1)}`,"penalty"),n.kind==="pair"&&this.syncTiles(),this.renderWork(!1);return}if(r==="select"){we.select(),this.syncTiles(),this.renderWork(!1);return}we.hit(this.step++),tn(t,"hit-key"),n.kind==="pair"&&this.syncTiles(),r==="hit"?(this.bank+=Nu,this.gauge.flash("bonus"),this.floatText(`+${(Nu/1e3).toFixed(1)}`,"bonus"),Sn==null||Sn.react("hit"),this.renderWork(!0)):(this.renderWork(!0,!0),this.succeed())}syncTiles(){var t;if(((t=this.tap)==null?void 0:t.kind)!=="pair")return;const e=this.tap.selected;this.padButtons.forEach((n,s)=>n.classList.toggle("selected",e.includes(s)))}floatText(e,t){const n=X("div",`float ${t}`,e);this.gauge.el.append(n),setTimeout(()=>n.remove(),900)}say(e,t){this.toast.textContent=e,this.toast.className=`toast ${t}`,tn(this.toast,"show")}mark(e){this.results.push({q:this.q,ok:e,level:this.level});const t=this.pips.children[this.index];t==null||t.classList.remove("now"),t==null||t.classList.add(e?"ok":"ng")}async succeed(){this.locked=!0,this.combo++,this.maxCombo=Math.max(this.maxCombo,this.combo),this.points+=ym(this.level);const e=Em(this.combo);this.bonus+=e,this.mark(!0),we.correct(),Sn==null||Sn.react("correct"),this.showStamp("ok"),this.updateHud(),tn(this.scoreEl,"pop");const t=this.level;this.level=Iu(this.level,!0),this.topLevel=Math.max(this.topLevel,this.level),this.level>t?(this.showLevel(1),this.say(e?`レベルアップ!  れんぞくボーナス +${e}`:"レベルアップ!","up")):e&&this.say(`れんぞくボーナス +${e}`,"bonus"),await Un(this.q.kind==="choice"?750:950),this.next()}async fail(e){var n;this.locked=!0,this.combo=0,this.mark(!1),e==="wrong"&&(this.bank-=Du,this.gauge.flash("penalty"),this.floatText(`${tr}${Du/1e3}`,"penalty")),this.bank=Math.max(0,this.bank),this.gauge.update(this.bank),we.wrong(),bl([90,40,90]),Sn==null||Sn.react("miss"),tn(this.root,"shake"),this.q.kind==="choice"&&((n=this.padButtons[this.q.answer])==null||n.classList.add("right")),this.showStamp("ng",this.bank<=0?"TIME UP":"×",this.q.solution),this.updateHud();const t=this.level;this.level=Iu(this.level,!1),this.level<t&&this.showLevel(-1),await Un(1900),this.next()}showStamp(e,t,n){if(this.stamp.replaceChildren(),e==="ok")this.stamp.append(SM(this.course.stage==="sho"));else if(this.stamp.append(X("div","stamp-main",t)),n){const s=X("div",`stamp-detail${n.length>22?" long":""}`);s.append(eo(n)),this.stamp.append(s)}this.stamp.className=`stamp show ${e}`}next(){if(!this.left){if(this.index++,this.index<Zi&&this.bank>0){this.showQuestion();return}cancelAnimationFrame(this.raf),this.stopBoard(),li==null||li.stop(),MM({course:this.course,results:this.results,points:this.points,bonus:this.bonus,bank:this.bank,maxCombo:this.maxCombo,topLevel:this.topLevel})}}}function Id(i,e){const t=X("span","frac");return t.append(X("span","num",i),X("span","den",e)),t}const cf=String.raw`\d*√\d+|\d*π|\d+[a-z]?|[a-zπ]`,vM=new RegExp(String.raw`(?<![A-Za-z0-9√π²³.])(${cf})/(${cf})(?![A-Za-z0-9²³⁴(√π^.])`,"g");function eo(i){const e=document.createDocumentFragment();let t=0;for(const n of i.matchAll(vM))e.append(i.slice(t,n.index),Id(n[1],n[2])),t=n.index+n[0].length;return e.append(i.slice(t)),e}function SM(i){const e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"svg");t.setAttribute("viewBox","-60 -60 120 120"),t.setAttribute("class","chalk-mark");let n="";const s=i?2.6:1.08,r=i?4:34,a=i?30:36;for(let c=0;c<=80;c++){const l=c/80,u=l*s*Math.PI*2-Math.PI/2,h=r+(a-r)*l;n+=`${c?"L":"M"}${(Math.cos(u)*h).toFixed(1)} ${(Math.sin(u)*h).toFixed(1)}`}if(i){const l=s*Math.PI*2-Math.PI/2;for(let u=0;u<9;u++){const h=l+u/9*Math.PI*2,f=l+(u+1)/9*Math.PI*2,d=(h+f)/2;n+=`Q${(Math.cos(d)*56).toFixed(1)} ${(Math.sin(d)*56).toFixed(1)} ${(Math.cos(f)*31).toFixed(1)} ${(Math.sin(f)*31).toFixed(1)}`}}const o=document.createElementNS(e,"path");return o.setAttribute("d",n),o.setAttribute("pathLength","1"),t.append(o),t}function MM(i){const{course:e,results:t}=i,n=t.filter(F=>F.ok).length,s=t.length===Zi&&i.bank>0,r=bm(i.bank,n,Zi),a=i.points+i.bonus+r,o=Rd(e),c=a>o;c&&nu(`nr.best3.${e.id}`,String(a));const l=Am(n,Zi,s);bs.setLift(0),jr(!0),$n.replaceChildren();const u=X("div","screen result"),h=X("div","card");h.append(X("div","result-mode",e.name),X("div","result-head",s?"FINISH!":"TIME UP"));const f=X("div",`rank r-${l}`,l),d=X("div","result-count");d.append(X("span","n",String(n)),X("span","of",` / ${Zi}`),X("span","of-label","問正解"));const g=X("div","result-top");g.append(d,f),h.append(g);const M=X("div","strip");for(let F=0;F<Zi;F++){const V=t[F],N=X("span",V?V.ok?"dot ok":"dot ng":"dot");N.append(X("b","",V?V.ok?"○":"×":"・"),X("i","",V?`Lv${V.level}`:"")),M.append(N)}h.append(M,X("div","result-level",`最高レベル ${i.topLevel} / ${yf}`));const m=X("div","rows"),p=(F,V)=>{const N=X("div","row"),G=X("span","row-value","0");return N.append(X("span","row-label",F),X("span","row-detail",V),G),m.append(N),G},y=p("正解","むずかしいほど高得点"),R=p("連続正解ボーナス",`最大 ${i.maxCombo}問れんぞく`),S=p("残り時間",`${Math.floor(Math.max(i.bank,0)/1e3)}秒 × ${Ef} × 正解率 ${n}/${Zi}`);h.append(m);const A=X("div","result-score"),E=X("span","total","0");A.append(X("span","total-label","SCORE"),E);const P=X("div","result-meta",`BEST ${Math.max(o,a)}`);h.append(A,P);const _=t.filter(F=>!F.ok);if(_.length){const F=X("div","missed");F.append(X("div","missed-head","まちがえた問題"));for(const V of _){const N=X("div","missed-item"),G=X("span","missed-a");G.append(eo(V.q.solution)),N.append(X("span","missed-q",[V.q.prompt,V.q.body.text].filter(Boolean).join(" ")),G),F.append(N)}h.append(F)}const T=X("div","actions"),I=X("button","mode-btn hero slim","もう一回");Nn(I,()=>void Ld(e));const B=X("button","mode-btn ghost","学年をえらぶ");Nn(B,()=>{we.tapUi(),ta(Ao)}),T.append(I,B),u.append(h,T),$n.append(u),(async()=>(await Un(350),await Sc(y,i.points,450,E,0),await Sc(R,i.bonus,400,E,i.points),await Sc(S,r,800,E,i.points+i.bonus),E.textContent=String(a),tn(A,"pop"),f.classList.add("show"),we.stamp(),c&&a>0&&(P.textContent="★ BEST 更新!",P.classList.add("new")),(l==="S"||c&&s)&&(we.fanfare(),Dd(u))))()}async function Sc(i,e,t,n,s){const r=performance.now();for(let a=0;;a++){const o=e===0?1:Math.min(1,(performance.now()-r)/t),c=Math.round(e*o);if(i.textContent=String(c),n.textContent=String(s+c),o>=1)return;a%2===0&&we.tally(a),await Un(32)}}function Dd(i){const e=X("div","confetti"),t=["#ffd23d","#ff3d9a","#21e6ff","#7dff6b","#ffffff"];for(let n=0;n<46;n++){const s=X("i");s.style.cssText=`left:${Math.random()*100}%;background:${t[n%t.length]};animation-delay:${Math.random()*.5}s;animation-duration:${1.6+Math.random()*1.4}s;--drift:${(Math.random()-.5)*160}px;--spin:${Math.random()*720-360}deg`,e.append(s)}i.append(e),setTimeout(()=>e.remove(),3600)}async function Nd(i){if(sr)return;sr=!0,mo(),we.tapUi(),await ta(()=>{zn==null||zn(),zn=null,$n.replaceChildren(),jl("morning",!0),bo("light"),jr(!1),bs.setLift(Ql,!0)});const e=X("div","screen countdown"),t=X("div","count-num");e.append(X("div","count-mode",`計算カード ${i.name}`),X("div","count-note",`${i.note}・${Di}まい`),t),$n.append(e);for(const n of["READY","GO!"])t.textContent=n,tn(t,"pop-in"),we.count(n==="GO!"),await Un(n==="GO!"?420:700);sr=!1,new bM(i).start()}function yM(i,e){return e.split(/(÷)/).forEach(t=>t&&i.append(t==="÷"?X("span","div-sign",t):t)),i}function EM(i,e){const t=o=>X("span","fc-n",String(o)),n=o=>X("span",o==="÷"?"fc-op div-sign":"fc-op",o),[s,r]=e;if(i.r!==void 0)return[t(i.a),n("÷"),t(i.b),n("="),s,X("span","fc-word","あまり"),r];const a=o=>i.hide===o?s:t(i[o]);return[a("a"),n(i.op),a("b"),n("="),a("c")]}class bM{constructor(e){ot(this,"cards");ot(this,"index",0);ot(this,"typed",[]);ot(this,"slot",0);ot(this,"elapsed",0);ot(this,"running",!1);ot(this,"streak",0);ot(this,"maxStreak",0);ot(this,"misses",[]);ot(this,"lastFrame",0);ot(this,"raf",0);ot(this,"paused",!1);ot(this,"left",!1);ot(this,"root");ot(this,"timeEl",X("div","cm-time"));ot(this,"countEl",X("div","cm-count"));ot(this,"barFill",X("div","cm-bar-fill"));ot(this,"missEl",X("div","cm-miss"));ot(this,"focus",X("div","focus cards-focus"));ot(this,"stack",X("div","fc-stack"));ot(this,"card",X("div","fc"));ot(this,"face",X("div","fc-face"));ot(this,"cardNo",X("span","fc-no"));ot(this,"stopBoard");ot(this,"onKey",e=>{/^[0-9]$/.test(e.key)?this.press(Number(e.key)):e.key==="Backspace"&&this.erase()});this.deck=e,this.cards=e.draw(df()),this.root=X("div","screen play cardmode st-card");const t=X("div","hud"),n=X("div","cm-clock");n.append(X("span","cm-clock-label","タイム"),this.timeEl);const s=X("div","hud-mid cm-progress"),r=X("div","cm-bar");r.append(this.barFill),s.append(this.countEl,r);const a=Pd(u=>this.paused=u,()=>{this.left=!0,this.running=!1,cancelAnimationFrame(this.raf),this.stopBoard(),window.removeEventListener("keydown",this.onKey)});t.append(a,n,s,this.missEl),this.card.append(X("span","fc-hole"),X("span","fc-ring"),this.cardNo,this.face),this.stack.append(X("div","fc-under u2"),X("div","fc-under u1"),this.card),this.focus.append(this.stack);const o=X("div","pad numpad"),c=(u,h,f)=>{const d=X("button",`key ${h}`);d.append(X("span","key-face",u)),Nn(d,f),o.append(d)};for(const u of[1,2,3,4,5,6,7,8,9])c(String(u),"num",()=>this.press(u));c("けす","erase",()=>this.erase()),c("0","num zero",()=>this.press(0));const l=X("div","panel");l.append(o),this.root.append(t,this.focus,X("div","grow"),l),this.stopBoard=tu(this.focus,this.root)}start(){$n.replaceChildren(this.root),window.addEventListener("keydown",this.onKey),this.showCard(),this.lastFrame=performance.now();const e=()=>{this.frame(),this.raf=requestAnimationFrame(e)};this.raf=requestAnimationFrame(e),this.running=!0}get current(){return this.cards[this.index]}frame(){const e=performance.now(),t=Math.min(e-this.lastFrame,100);this.lastFrame=e,this.running&&!this.paused&&(this.elapsed+=t),this.timeEl.textContent=Js(hf(this.elapsed,this.misses.length))}showCard(){this.typed=Ro(this.current).map(()=>""),this.slot=0,this.card.className="fc",this.cardNo.textContent=String(this.index+1),this.countEl.textContent=`${this.index+1} / ${Di}`,this.barFill.style.width=`${this.index/Di*100}%`,this.missEl.replaceChildren(X("span","cm-miss-label","まちがい"),X("span","cm-miss-n",String(this.misses.length))),this.renderFace()}renderFace(e=!1){const n=Ro(this.current).map((a,o)=>{const c=X("span","fc-slot",e?String(a):this.typed[o]);return!e&&o===this.slot&&c.classList.add("on"),c}),s=EM(this.current,n);this.face.replaceChildren(...s);const r=s.reduce((a,o)=>o.classList.contains("fc-slot")?a+Math.max(1.3,(o.textContent??"").length*.7)+.3:o.classList.contains("fc-word")?a+2.4:a+(o.textContent??"").length*.68+.35,0);this.face.style.fontSize=`min(34cqh, ${(86/r).toFixed(1)}cqw)`}press(e){if(!this.running||this.paused)return;const t=Ro(this.current),n=String(t[this.slot]);this.typed[this.slot]+=String(e),we.key(),this.renderFace(),!(this.typed[this.slot].length<n.length)&&(this.typed[this.slot]!==n?this.miss():this.slot<t.length-1?(this.slot++,this.renderFace()):this.hit())}erase(){!this.running||this.paused||(this.typed[this.slot]===""&&this.slot>0&&this.slot--,this.typed[this.slot]=this.typed[this.slot].slice(0,-1),we.key(),this.renderFace())}flipAway(e){const t=this.card.cloneNode(!0);t.className=`fc ${e} flip-away`,t.style.fontSize=this.face.style.fontSize,this.stack.append(t),setTimeout(()=>t.remove(),420)}hit(){this.streak++,this.maxStreak=Math.max(this.maxStreak,this.streak),we.flip(this.streak),this.card.classList.add("ok"),this.advance("ok")}async miss(){this.running=!1,this.streak=0,this.misses.push({card:this.current,typed:this.typed.join(" あまり ")}),we.miss(),bl([60,30,60]),this.renderFace(!0),this.card.classList.add("ng"),tn(this.card,"shake");const e=X("div","float penalty",`+${no/1e3}秒`);this.timeEl.parentElement.append(e),setTimeout(()=>e.remove(),900),tn(this.timeEl,"penalty-pop"),this.missEl.querySelector(".cm-miss-n").textContent=String(this.misses.length),await Un(850),!this.left&&(this.running=!0,this.advance("ng"))}advance(e){if(!this.left){if(this.flipAway(e),this.index++,this.index<Di){this.showCard();return}this.running=!1,this.barFill.style.width="100%",this.card.classList.add("empty"),window.removeEventListener("keydown",this.onKey),setTimeout(()=>{this.left||(cancelAnimationFrame(this.raf),this.stopBoard(),TM(this.deck,this.elapsed,this.misses,this.maxStreak))},500)}}}function AM(i){const e=i.r!==void 0?` あまり ${i.r}`:"";return`${i.a} ${i.op} ${i.b} = ${i.c}${e}`}function TM(i,e,t,n){const s=hf(e,t.length),r=Cd(i),a=r===0||s<r;a&&nu(`nr.card2.${i.id}`,String(Math.round(s)));const o=t.length===0;bs.setLift(0),jr(!0),$n.replaceChildren();const c=X("div","screen result"),l=X("div","card");l.append(X("div","result-mode",`計算カード ・ ${i.name}`),X("div","result-head","FINISH!"));const u=X("div","result-count card-time"),h=X("span","n","0.0");u.append(h,X("span","of-label","秒"));const f=X("div","rank r-S perfect","満点"),d=X("div","result-top");d.append(u),o&&d.append(f),l.append(d,X("div","result-level",`${Di-t.length} / ${Di} まい正解 ・ さいだい ${n}れんぞく`));const g=X("div","rows"),M=(S,A,E)=>{const P=X("div","row");P.append(X("span","row-label",S),X("span","row-detail",A),X("span","row-value",E)),g.append(P)};M("タイム","ストップウォッチ",Js(e)),M("まちがい",`${t.length}まい × ${no/1e3}秒`,`+${t.length*no/1e3}`),M("1まいあたり","ペナルティこみ・秒",(s/Di/1e3).toFixed(2)),l.append(g);const m=X("div","result-meta",r?`BEST ${Js(Math.min(r,s))}`:"はじめての記録");if(l.append(m),t.length){const S=X("div","missed");S.append(X("div","missed-head","まちがえたカード"));for(const A of t){const E=X("div","missed-item");E.append(X("span","missed-a",AM(A.card)),X("span","missed-q",`こたえた数: ${A.typed}`)),S.append(E)}l.append(S)}const p=X("div","actions"),y=X("button","mode-btn hero slim","もう一回");Nn(y,()=>void Nd(i));const R=X("button","mode-btn ghost","カードをえらぶ");Nn(R,()=>{we.tapUi(),ta(Ao)}),p.append(y,R),c.append(l,p),$n.append(c),(async()=>{await Un(350);const S=performance.now();for(let A=0;;A++){const E=Math.min(1,(performance.now()-S)/900);if(h.textContent=Js(s*(1-Math.pow(1-E,3))),E>=1)break;A%2===0&&we.tally(A),await Un(32)}h.textContent=Js(s),tn(u,"pop"),we.stamp(),o&&f.classList.add("show"),a&&r&&(m.textContent="★ BEST 更新!",m.classList.add("new")),(o||a&&r)&&(we.fanfare(),Dd(c))})()}async function wM(){const i=[document.fonts.load(`400 40px ${ei}`,`${YS.join("")}0123456789`)];await Promise.race([Promise.all(i).catch(()=>{}),Un(2500)]),Ao(),Al.classList.remove("on")}wM();
