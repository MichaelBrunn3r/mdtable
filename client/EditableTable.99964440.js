import{S as t,i as l,s as e,c as s,a as n,m as r,t as a,b as o,d as c,e as f,f as h,g as i,h as u,j as g,k as p,l as m,o as v,p as d,q as $,r as E,u as b,v as w,w as x,x as T,y,z as B}from"./client.f86b0492.js";import A from"./EditableCell.4dfc325c.js";function D(t,l,e){const s=t.slice();return s[6]=l[e],s[8]=e,s}function I(t,l,e){const s=t.slice();return s[9]=l[e],s[10]=l,s[11]=e,s}function j(t,l,e){const s=t.slice();return s[9]=l[e],s[12]=l,s[8]=e,s}function k(t){let l,e,f;function h(l){t[4].call(null,l,t[9],t[12],t[8])}let i={isHeader:"true"};return void 0!==t[9]&&(i.value=t[9]),l=new A({props:i}),x.push((()=>T(l,"value",h))),{c(){s(l.$$.fragment)},l(t){n(l.$$.fragment,t)},m(t,e){r(l,t,e),f=!0},p(s,n){t=s;const r={};!e&&1&n&&(e=!0,r.value=t[9],y((()=>e=!1))),l.$set(r)},i(t){f||(a(l.$$.fragment,t),f=!0)},o(t){o(l.$$.fragment,t),f=!1},d(t){c(l,t)}}}function q(t){let l,e,f;function h(l){t[5].call(null,l,t[9],t[10],t[11])}let i={};return void 0!==t[9]&&(i.value=t[9]),l=new A({props:i}),x.push((()=>T(l,"value",h))),{c(){s(l.$$.fragment)},l(t){n(l.$$.fragment,t)},m(t,e){r(l,t,e),f=!0},p(s,n){t=s;const r={};!e&&2&n&&(e=!0,r.value=t[9],y((()=>e=!1))),l.$set(r)},i(t){f||(a(l.$$.fragment,t),f=!0)},o(t){o(l.$$.fragment,t),f=!1},d(t){c(l,t)}}}function O(t){let l,e,s,n=t[6],r=[];for(let l=0;l<n.length;l+=1)r[l]=q(I(t,n,l));const c=t=>o(r[t],1,1,(()=>{r[t]=null}));return{c(){l=f("tr");for(let t=0;t<r.length;t+=1)r[t].c();e=h(),this.h()},l(t){l=i(t,"TR",{class:!0});var s=u(l);for(let t=0;t<r.length;t+=1)r[t].l(s);e=g(s),s.forEach(p),this.h()},h(){m(l,"class","svelte-2x7i0m")},m(t,n){v(t,l,n);for(let t=0;t<r.length;t+=1)r[t].m(l,null);d(l,e),s=!0},p(t,s){if(2&s){let o;for(n=t[6],o=0;o<n.length;o+=1){const c=I(t,n,o);r[o]?(r[o].p(c,s),a(r[o],1)):(r[o]=q(c),r[o].c(),a(r[o],1),r[o].m(l,e))}for(B(),o=n.length;o<r.length;o+=1)c(o);$()}},i(t){if(!s){for(let t=0;t<n.length;t+=1)a(r[t]);s=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)o(r[t]);s=!1},d(t){t&&p(l),E(r,t)}}}function z(t){let l,e,s,n,r,c,x,T,y,A,I,q,z,C,H,N,R=t[0],U=[];for(let l=0;l<R.length;l+=1)U[l]=k(j(t,R,l));const V=t=>o(U[t],1,1,(()=>{U[t]=null}));let L=t[1],S=[];for(let l=0;l<L.length;l+=1)S[l]=O(D(t,L,l));const Y=t=>o(S[t],1,1,(()=>{S[t]=null}));return{c(){l=f("div"),e=f("div"),s=f("table"),n=f("thead"),r=f("tr");for(let t=0;t<U.length;t+=1)U[t].c();c=h(),x=f("tbody");for(let t=0;t<S.length;t+=1)S[t].c();T=h(),y=f("button"),A=f("i"),I=h(),q=f("button"),z=f("i"),this.h()},l(t){l=i(t,"DIV",{class:!0});var a=u(l);e=i(a,"DIV",{class:!0});var o=u(e);s=i(o,"TABLE",{});var f=u(s);n=i(f,"THEAD",{});var h=u(n);r=i(h,"TR",{class:!0});var m=u(r);for(let t=0;t<U.length;t+=1)U[t].l(m);m.forEach(p),h.forEach(p),c=g(f),x=i(f,"TBODY",{class:!0});var v=u(x);for(let t=0;t<S.length;t+=1)S[t].l(v);v.forEach(p),f.forEach(p),T=g(o),y=i(o,"BUTTON",{type:!0,class:!0});var d=u(y);A=i(d,"I",{class:!0}),u(A).forEach(p),d.forEach(p),o.forEach(p),I=g(a),q=i(a,"BUTTON",{id:!0,type:!0,class:!0});var $=u(q);z=i($,"I",{class:!0}),u(z).forEach(p),$.forEach(p),a.forEach(p),this.h()},h(){m(r,"class","svelte-2x7i0m"),m(x,"class","svelte-2x7i0m"),m(A,"class","far fa-plus-square"),m(y,"type","button"),m(y,"class","btn svelte-2x7i0m"),m(e,"class","wrapper-vertical svelte-2x7i0m"),m(z,"class","far fa-plus-square"),m(q,"id","btn-add-col"),m(q,"type","button"),m(q,"class","btn svelte-2x7i0m"),m(l,"class","wrapper-horizontal svelte-2x7i0m")},m(a,o){v(a,l,o),d(l,e),d(e,s),d(s,n),d(n,r);for(let t=0;t<U.length;t+=1)U[t].m(r,null);d(s,c),d(s,x);for(let t=0;t<S.length;t+=1)S[t].m(x,null);d(e,T),d(e,y),d(y,A),d(l,I),d(l,q),d(q,z),C=!0,H||(N=[b(y,"click",t[2]),b(q,"click",t[3])],H=!0)},p(t,[l]){if(1&l){let e;for(R=t[0],e=0;e<R.length;e+=1){const s=j(t,R,e);U[e]?(U[e].p(s,l),a(U[e],1)):(U[e]=k(s),U[e].c(),a(U[e],1),U[e].m(r,null))}for(B(),e=R.length;e<U.length;e+=1)V(e);$()}if(2&l){let e;for(L=t[1],e=0;e<L.length;e+=1){const s=D(t,L,e);S[e]?(S[e].p(s,l),a(S[e],1)):(S[e]=O(s),S[e].c(),a(S[e],1),S[e].m(x,null))}for(B(),e=L.length;e<S.length;e+=1)Y(e);$()}},i(t){if(!C){for(let t=0;t<R.length;t+=1)a(U[t]);for(let t=0;t<L.length;t+=1)a(S[t]);C=!0}},o(t){U=U.filter(Boolean);for(let t=0;t<U.length;t+=1)o(U[t]);S=S.filter(Boolean);for(let t=0;t<S.length;t+=1)o(S[t]);C=!1},d(t){t&&p(l),E(U,t),E(S,t),H=!1,w(N)}}}function C(t,l,e){let{header:s=["Tables","Are","Cool"]}=l,{rows:n=[["1","2","3"],["4","5","6"],["7","8","9"]]}=l;return t.$$set=t=>{"header"in t&&e(0,s=t.header),"rows"in t&&e(1,n=t.rows)},[s,n,function(){let t=new Array(s.length);t.fill(""),n.push(t),e(1,n)},function(){s.push(""),e(0,s);for(let t=0;t<n.length;t++)n[t].push("");e(1,n)},function(t,l,n,r){n[r]=t,e(0,s)},function(t,l,s,r){s[r]=t,e(1,n)}]}export default class extends t{constructor(t){super(),l(this,t,C,z,e,{header:0,rows:1})}}