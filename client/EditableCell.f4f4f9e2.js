import{S as e,i as t,s,j as a,k as n,l,o as i,p as c,h as r,q as u,v as d,e as o,r as h,u as v,n as b,w as f,z as x}from"./client.7237b21f.js";function p(e){let t,s,x,p,k;return{c(){t=a("td"),s=a("div"),x=n(e[2]),this.h()},l(a){t=l(a,"TD",{tabindex:!0,class:!0});var n=i(t);s=l(n,"DIV",{class:!0,innerText:!0,contenteditable:!0});var u=i(s);x=c(u,e[2]),u.forEach(r),n.forEach(r),this.h()},h(){u(s,"class","input svelte-kqu0bh"),u(s,"innertext",e[0]),u(s,"contenteditable",e[1]),u(t,"tabindex","0"),u(t,"class","svelte-kqu0bh"),d(t,"selected",e[1])},m(a,n){o(a,t,n),h(t,s),h(s,x),p||(k=[v(s,"input",e[3]),v(t,"click",e[4])],p=!0)},p(e,[a]){1&a&&u(s,"innertext",e[0]),2&a&&u(s,"contenteditable",e[1]),2&a&&d(t,"selected",e[1])},i:b,o:b,d(e){e&&r(t),p=!1,f(k)}}}function k(e,t,s){let{value:a=""}=t,{isSelected:n}=t;const l=x();let i=a;return e.$$set=e=>{"value"in e&&s(0,a=e.value),"isSelected"in e&&s(1,n=e.isSelected)},[a,n,i,function(e){let t=e.target.innerText;"\n"==t.charAt(t.length-1)&&(t=t.substr(0,t.length-1)),s(0,a=t)},function(){l("clicked")}]}export default class extends e{constructor(e){super(),t(this,e,k,p,s,{value:0,isSelected:1})}}
