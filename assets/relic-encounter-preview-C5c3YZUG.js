import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{Dn as t,En as n,sn as r}from"./items-D-h_MkD6.js";import{Eh as i,Md as a,Sc as o,Uc as s,Wc as c,vg as l,wb as u}from"./GameContext-x1xVvHKP.js";import{F as d,i as f}from"./index-Dl6IlfBt.js";import{c as p,t as m}from"./frontlineSkillDescription-XPBjq_VJ.js";import{n as h}from"./useMonsterIntel-BAObSmZf.js";import{n as g}from"./MonsterIntelGate-OvxxpetA.js";function _(e){let t=e.battlefield;if(!t)return null;let n=[],r=t=>Number.isInteger(t.x)&&Number.isInteger(t.y)&&t.x>=0&&t.y>=0&&t.x<e.mapW&&t.y<e.mapH,a=e=>e.replace(/^[^\p{L}\p{N}]+/u,``),o={...e,battlefield:{...t,objects:[]}},l=new Set;for(let s of t.tiles){let t=s.position,u=`${t.x},${t.y}`;if(!r(t)||s.type===`normal`||l.has(u)||i(e,t.x,t.y)!==s.type)continue;l.add(u);let d=a(c(o,t)),f=n.find(e=>e.kind===s.type&&e.label===d);f?f.positions.push({...t}):n.push({id:s.id,kind:s.type,label:d,positions:[{...t}]})}for(let i of t.objects){if(!r(i.position)||i.hp<=0||s(e,i.position)!==i)continue;let t=i.interactionEffect?` · Break ${i.interactionEffect.breakPower}`:``;n.push({id:i.id,kind:i.type,...i.iconKind?{iconKind:i.iconKind}:{},label:a(c(e,i.position))+t,positions:[{...i.position}]})}return n.length?{entries:n,hasExplosives:n.some(e=>e.kind===`explosive`)}:null}var v=e(t(),1),y=e=>`<linearGradient id="${e}" x1="0" x2="1"><stop offset="0" stop-color="#6f7a86"/><stop offset=".45" stop-color="#f4f7fb"/><stop offset=".6" stop-color="#c2cbd4"/><stop offset="1" stop-color="#55606c"/></linearGradient>`,b=e=>`<linearGradient id="${e}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffe9a8"/><stop offset=".5" stop-color="#d9a441"/><stop offset="1" stop-color="#7d5216"/></linearGradient>`,x=e=>`<g transform="rotate(${e} 32 32)">
  <path d="M32 7 L35.2 12.5 L35.2 39 L28.8 39 L28.8 12.5 Z" fill="url(#sn-steel)" stroke="#1d2228" stroke-width="1.1" stroke-linejoin="round"/>
  <path d="M32 11 L32 38" stroke="#7e8996" stroke-width=".9"/>
  <rect x="22.5" y="38.6" width="19" height="4.2" rx="2" fill="url(#sn-gold)" stroke="#3a2608" stroke-width=".9"/>
  <rect x="30.2" y="42.6" width="3.6" height="9.6" rx="1.2" fill="#4a2a18" stroke="#1e1008" stroke-width=".7"/>
  <path d="M30.4 45 H33.6 M30.4 47.6 H33.6 M30.4 50.2 H33.6" stroke="#8a5a32" stroke-width=".7"/>
  <circle cx="32" cy="54.6" r="2.9" fill="url(#sn-gold)" stroke="#3a2608" stroke-width=".8"/>
</g>`,S={normal:`<svg viewBox="0 0 64 64" aria-hidden="true"><defs>${y(`sn-steel`)}${b(`sn-gold`)}
    <radialGradient id="sn-n-bg" cx=".45" cy=".35" r=".75"><stop offset="0" stop-color="#4a3a26"/><stop offset=".7" stop-color="#1c1610"/><stop offset="1" stop-color="#0d0a07"/></radialGradient>
    <linearGradient id="sn-n-rim" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f1cf86"/><stop offset=".5" stop-color="#9c6a2a"/><stop offset="1" stop-color="#5a3812"/></linearGradient></defs>
    <circle cx="32" cy="32" r="29" fill="url(#sn-n-bg)" stroke="url(#sn-n-rim)" stroke-width="3.2"/>
    <circle cx="32" cy="32" r="24.5" fill="none" stroke="#c9a15a" stroke-opacity=".45" stroke-width=".8"/>
    ${x(-42)}${x(42)}
  </svg>`,elite:`<svg viewBox="0 0 64 64" aria-hidden="true"><defs>
    <linearGradient id="sn-e-shield" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5a2a24"/><stop offset="1" stop-color="#1b0d0c"/></linearGradient>
    <linearGradient id="sn-e-rim" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f3f6fa"/><stop offset=".5" stop-color="#8e99a6"/><stop offset="1" stop-color="#434c57"/></linearGradient>
    <linearGradient id="sn-e-iron" x1="0" x2="1"><stop offset="0" stop-color="#3a414b"/><stop offset=".45" stop-color="#b8c1cc"/><stop offset=".62" stop-color="#7d8792"/><stop offset="1" stop-color="#2c323a"/></linearGradient>
    <linearGradient id="sn-e-horn" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#9a8058"/><stop offset="1" stop-color="#fbf1d8"/></linearGradient>
    <radialGradient id="sn-e-eye"><stop offset="0" stop-color="#ffe0a0"/><stop offset=".4" stop-color="#ff5a24"/><stop offset="1" stop-color="#ff5a24" stop-opacity="0"/></radialGradient></defs>
    <path d="M32 3 L56 10 C56 34 48 50 32 61 C16 50 8 34 8 10 Z" fill="url(#sn-e-shield)" stroke="url(#sn-e-rim)" stroke-width="3" stroke-linejoin="round"/>
    <path d="M32 8 L51.5 13.6 C51 33 44 46 32 55.5 C20 46 13 33 12.5 13.6 Z" fill="none" stroke="#d7a0a0" stroke-opacity=".3" stroke-width=".8"/>
    <path d="M22 28 C14 25 11 18 13 10 C15.5 16 19 19.5 25 21.5 Z" fill="url(#sn-e-horn)" stroke="#3b2c18" stroke-width=".9"/>
    <path d="M42 28 C50 25 53 18 51 10 C48.5 16 45 19.5 39 21.5 Z" fill="url(#sn-e-horn)" stroke="#3b2c18" stroke-width=".9"/>
    <path d="M19 42 C19 26 24.5 18.5 32 18.5 C39.5 18.5 45 26 45 42 L45 46 L38.5 49 L32 50.5 L25.5 49 L19 46 Z" fill="url(#sn-e-iron)" stroke="#14181d" stroke-width="1.1" stroke-linejoin="round"/>
    <path d="M32 19 V50" stroke="#e7edf3" stroke-opacity=".5" stroke-width="1"/>
    <path d="M22.5 34.5 L30 36 L32 38 L34 36 L41.5 34.5 L40.8 38.2 L34.2 39.6 L32 41.6 L29.8 39.6 L23.2 38.2 Z" fill="#120808"/>
    <ellipse cx="27" cy="37" rx="5" ry="2.8" fill="url(#sn-e-eye)"/><ellipse cx="37" cy="37" rx="5" ry="2.8" fill="url(#sn-e-eye)"/>
    <circle cx="22.5" cy="44" r="1" fill="#e6ebf0"/><circle cx="41.5" cy="44" r="1" fill="#e6ebf0"/>
  </svg>`,miniboss:`<svg viewBox="0 0 64 64" aria-hidden="true"><defs>
    <linearGradient id="sn-m-shield" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8a1c14"/><stop offset="1" stop-color="#260806"/></linearGradient>
    <linearGradient id="sn-m-rim" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffe9a8"/><stop offset=".5" stop-color="#d9a441"/><stop offset="1" stop-color="#7d5216"/></linearGradient>
    <linearGradient id="sn-m-iron" x1="0" x2="1"><stop offset="0" stop-color="#2c2a2e"/><stop offset=".45" stop-color="#a7a2a8"/><stop offset=".62" stop-color="#6b666e"/><stop offset="1" stop-color="#1e1c20"/></linearGradient>
    <linearGradient id="sn-m-horn" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#7a1a10"/><stop offset=".6" stop-color="#c9a070"/><stop offset="1" stop-color="#fff2d6"/></linearGradient>
    <radialGradient id="sn-m-eye"><stop offset="0" stop-color="#fff2b0"/><stop offset=".4" stop-color="#ff3a14"/><stop offset="1" stop-color="#ff3a14" stop-opacity="0"/></radialGradient></defs>
    <path d="M32 -1 L35.5 3.8 L28.5 3.8 Z M59.5 6 L62.5 13 L55.5 11.8 Z M4.5 6 L1.5 13 L8.5 11.8 Z" fill="#e2b04e" stroke="#5a3a10" stroke-width=".6"/>
    <path d="M32 3 L56 10 C56 34 48 50 32 61 C16 50 8 34 8 10 Z" fill="url(#sn-m-shield)" stroke="url(#sn-m-rim)" stroke-width="3.2" stroke-linejoin="round"/>
    <path d="M32 8 L51.5 13.6 C51 33 44 46 32 55.5 C20 46 13 33 12.5 13.6 Z" fill="none" stroke="#ffd27a" stroke-opacity=".5" stroke-width=".8"/>
    <path d="M22 28 C12 25 9 16 12 7 C14.5 14 19 19 25 21.5 Z" fill="url(#sn-m-horn)" stroke="#3b1408" stroke-width=".9"/>
    <path d="M42 28 C52 25 55 16 52 7 C49.5 14 45 19 39 21.5 Z" fill="url(#sn-m-horn)" stroke="#3b1408" stroke-width=".9"/>
    <path d="M19 42 C19 26 24.5 18.5 32 18.5 C39.5 18.5 45 26 45 42 L45 46 L38.5 49 L32 50.5 L25.5 49 L19 46 Z" fill="url(#sn-m-iron)" stroke="#0e0c0e" stroke-width="1.1" stroke-linejoin="round"/>
    <path d="M32 19 V50" stroke="#f0d79e" stroke-opacity=".55" stroke-width="1.1"/>
    <path d="M26 21.5 L32 18.5 L38 21.5 L32 24.5 Z" fill="#e2b04e" stroke="#5a3a10" stroke-width=".5"/>
    <path d="M22.5 34.5 L30 36 L32 38 L34 36 L41.5 34.5 L40.8 38.2 L34.2 39.6 L32 41.6 L29.8 39.6 L23.2 38.2 Z" fill="#120606"/>
    <ellipse cx="27" cy="37" rx="5.6" ry="3.2" fill="url(#sn-m-eye)"/><ellipse cx="37" cy="37" rx="5.6" ry="3.2" fill="url(#sn-m-eye)"/>
    <circle cx="22.5" cy="44" r="1.1" fill="#e2b04e"/><circle cx="41.5" cy="44" r="1.1" fill="#e2b04e"/>
  </svg>`,boss:`<svg viewBox="0 0 64 64" aria-hidden="true"><defs>${b(`sn-b-gold`)}
    <radialGradient id="sn-b-bg" cx=".5" cy=".45" r=".6"><stop offset="0" stop-color="#7a1a14"/><stop offset=".7" stop-color="#2a0807"/><stop offset="1" stop-color="#120303"/></radialGradient>
    <linearGradient id="sn-b-bone" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff6e2"/><stop offset=".6" stop-color="#d9c6a0"/><stop offset="1" stop-color="#8a7350"/></linearGradient>
    <linearGradient id="sn-b-horn" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#2a0a08"/><stop offset=".6" stop-color="#6b1a12"/><stop offset="1" stop-color="#c0402a"/></linearGradient>
    <radialGradient id="sn-b-eye"><stop offset="0" stop-color="#fff2b0"/><stop offset=".35" stop-color="#ff3a1a"/><stop offset="1" stop-color="#ff3a1a" stop-opacity="0"/></radialGradient></defs>
    <path d="M32 2 L38 9 L47 5 L48 14 L57 15 L53 23 L61 29 L54 34 L58 43 L49 44 L48 53 L40 50 L32 60 L24 50 L16 53 L15 44 L6 43 L10 34 L3 29 L11 23 L7 15 L16 14 L17 5 L26 9 Z"
      fill="url(#sn-b-bg)" stroke="url(#sn-b-gold)" stroke-width="2.4" stroke-linejoin="round"/>
    <path d="M20 26 C11 22 9 12 13 5 C14.5 12 18 16 24 18 Z" fill="url(#sn-b-horn)" stroke="#120303" stroke-width=".9"/>
    <path d="M44 26 C53 22 55 12 51 5 C49.5 12 46 16 40 18 Z" fill="url(#sn-b-horn)" stroke="#120303" stroke-width=".9"/>
    <path d="M23 18 L25.5 12 L28.5 16 L32 10 L35.5 16 L38.5 12 L41 18 Z" fill="url(#sn-b-gold)" stroke="#3a2608" stroke-width=".8" stroke-linejoin="round"/>
    <circle cx="32" cy="13.4" r="1.3" fill="#ff5a3a"/>
    <path d="M18.5 34 C18.5 23.5 24.5 18 32 18 C39.5 18 45.5 23.5 45.5 34 C45.5 39.5 43 42.5 40 43.5 L40 49 L35.5 49 L34.5 46.4 L33 49 L31 49 L29.5 46.4 L28.5 49 L24 49 L24 43.5 C21 42.5 18.5 39.5 18.5 34 Z" fill="url(#sn-b-bone)" stroke="#2a1a0c" stroke-width="1.1" stroke-linejoin="round"/>
    <path d="M21.5 31.5 C22.5 28 27.5 28 29.5 31 C29.5 35 26.5 37 24 36.5 C22 36 21 34 21.5 31.5 Z" fill="#1a0505"/>
    <path d="M42.5 31.5 C41.5 28 36.5 28 34.5 31 C34.5 35 37.5 37 40 36.5 C42 36 43 34 42.5 31.5 Z" fill="#1a0505"/>
    <circle cx="25.6" cy="32.6" r="3.6" fill="url(#sn-b-eye)"/><circle cx="38.4" cy="32.6" r="3.6" fill="url(#sn-b-eye)"/>
    <path d="M32 37 L34 41.5 L30 41.5 Z" fill="#2a0d08"/>
    <path d="M26 44 V47.5 M29 44.5 V48 M35 44.5 V48 M38 44 V47.5" stroke="#5a4428" stroke-width=".8"/>
  </svg>`,side:`<svg viewBox="0 0 64 64" aria-hidden="true"><defs>
    <linearGradient id="sn-s-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#245566"/><stop offset="1" stop-color="#0b1a20"/></linearGradient>
    <linearGradient id="sn-s-rim" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#bff0f5"/><stop offset=".5" stop-color="#4f9fb0"/><stop offset="1" stop-color="#1f5260"/></linearGradient>
    <linearGradient id="sn-s-paper" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fbf0d4"/><stop offset="1" stop-color="#cfae70"/></linearGradient>
    <linearGradient id="sn-s-roll" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e9cf95"/><stop offset=".5" stop-color="#fff4da"/><stop offset="1" stop-color="#a07d40"/></linearGradient></defs>
    <path d="M32 2.5 L61.5 32 L32 61.5 L2.5 32 Z" fill="url(#sn-s-bg)" stroke="url(#sn-s-rim)" stroke-width="2.6" stroke-linejoin="round"/>
    <path d="M32 8.5 L55.5 32 L32 55.5 L8.5 32 Z" fill="none" stroke="#9fe0ea" stroke-opacity=".35" stroke-width=".8"/>
    <rect x="21" y="19" width="22" height="26" fill="url(#sn-s-paper)" stroke="#5a4020" stroke-width=".9"/>
    <rect x="18.5" y="15.5" width="27" height="5" rx="2.5" fill="url(#sn-s-roll)" stroke="#5a4020" stroke-width=".9"/>
    <rect x="18.5" y="43.5" width="27" height="5" rx="2.5" fill="url(#sn-s-roll)" stroke="#5a4020" stroke-width=".9"/>
    <path d="M24.5 25.5 H39.5 M24.5 29.5 H37 M24.5 33.5 H39 M24.5 37.5 H33" stroke="#8a6a3a" stroke-width="1.1" stroke-linecap="round"/>
    <path d="M37.5 41 L36 51 L39.5 48.5 L42 51.5 L42.5 41.5 Z" fill="#2f8f9c" stroke="#0f3a42" stroke-width=".7"/>
    <circle cx="40" cy="40.5" r="4.4" fill="#b8322a" stroke="#4a0e0a" stroke-width=".9"/><circle cx="40" cy="40.5" r="2" fill="none" stroke="#f08a70" stroke-width=".7"/>
  </svg>`,story:`<svg viewBox="0 0 64 64" aria-hidden="true"><defs>
    <linearGradient id="sn-t-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2e3b48"/><stop offset="1" stop-color="#0e141a"/></linearGradient>
    <linearGradient id="sn-t-page" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff7e2"/><stop offset="1" stop-color="#d8bd88"/></linearGradient></defs>
    <path d="M32 3 L57 17.5 V46.5 L32 61 L7 46.5 V17.5 Z" fill="url(#sn-t-bg)" stroke="#a8b6c4" stroke-width="2.4" stroke-linejoin="round"/>
    <path d="M32 22 C26 18.5 19 18.5 13.5 20.5 V44 C19 42 26 42 32 45.5 Z" fill="url(#sn-t-page)" stroke="#4a3818" stroke-width=".9"/>
    <path d="M32 22 C38 18.5 45 18.5 50.5 20.5 V44 C45 42 38 42 32 45.5 Z" fill="url(#sn-t-page)" stroke="#4a3818" stroke-width=".9"/>
    <path d="M17 26 C21 25 25 25 28.5 26.5 M17 30 C21 29 25 29 28.5 30.5 M17 34 C21 33 25 33 28.5 34.5 M35.5 26.5 C39 25 43 25 47 26 M35.5 30.5 C39 29 43 29 47 30 M35.5 34.5 C39 33 43 33 47 34" stroke="#9a7a48" stroke-width=".9" fill="none"/>
    <path d="M32 22 V45.5" stroke="#7a5a28" stroke-width="1.2"/>
    <path d="M32 12 L33.4 15.6 L37 16 L34.2 18.3 L35.1 22 L32 20 L28.9 22 L29.8 18.3 L27 16 L30.6 15.6 Z" fill="#ffe08a"/>
  </svg>`,quest:`<svg viewBox="0 0 64 64" aria-hidden="true"><defs>${b(`sn-q-gold`)}
    <linearGradient id="sn-q-cloth" x1="0" x2="1"><stop offset="0" stop-color="#8a1e1a"/><stop offset=".5" stop-color="#c8392c"/><stop offset="1" stop-color="#6a1410"/></linearGradient></defs>
    <circle cx="32" cy="32" r="29" fill="#16110c" stroke="#c4a46a" stroke-width="2.4" stroke-dasharray="5 3"/>
    <path d="M22 12 V54" stroke="url(#sn-q-gold)" stroke-width="3" stroke-linecap="round"/>
    <circle cx="22" cy="11" r="2.6" fill="url(#sn-q-gold)"/>
    <path d="M23.5 14 C31 11 37 18 46 14 V34 C37 38 31 31 23.5 34 Z" fill="url(#sn-q-cloth)" stroke="#3a0806" stroke-width=".9"/>
    <path d="M30 20 L32 24 L36 24.4 L33 27 L34 31 L30 28.8 L26.5 31 L27.5 27 L24.5 24.4 L28.5 24 Z" fill="#ffd27a" opacity=".9"/>
  </svg>`},C=u();function w({type:e,miniboss:t=!1}){let n=e===`elite`&&t?`miniboss`:e;return(0,C.jsx)(`span`,{className:`stage-node-icon stage-node-emblem`,"data-stage-node-art":n,"aria-hidden":!0,dangerouslySetInnerHTML:{__html:S[n]}})}function T({defId:e,count:t,boss:i,stageId:s,rank:c=i?`boss`:`normal`,compact:u=!1}){let _=n(),y=l[e],b=y?o({defId:e,hp:y.baseHp,maxHp:y.baseHp},s?{id:s}:void 0):[],x=a(e),[S,T]=(0,v.useState)(!1),E=h(e),D=E.name?y?.name??_(`미확인 적`):`???`,O=(0,C.jsxs)(C.Fragment,{children:[E.role?(0,C.jsxs)(`p`,{children:[_(y?.role??`전투원`),E.stats&&(0,C.jsx)(`span`,{children:_(y?.damageType===`magic`?`마법`:`물리`)})]}):(0,C.jsx)(g,{intel:E,what:`역할`}),!E.skills&&(0,C.jsx)(g,{intel:E,what:`기술`}),E.skills&&b.map(e=>(0,C.jsxs)(`section`,{className:`stage-enemy-skill`,"data-stage-skill":e.id,children:[(0,C.jsxs)(`h4`,{children:[(0,C.jsx)(d,{kind:e.kind,size:24}),(0,C.jsx)(`span`,{children:f(e.name)})]}),(0,C.jsx)(`small`,{children:p(e)}),(0,C.jsx)(`p`,{children:m(e)})]},e.id))]});return(0,C.jsxs)(`article`,{className:`stage-enemy-card${i?` is-boss`:``}${u?` is-compact`:``}`,"data-enemy-id":e,"data-enemy-rank":c,"data-monster-intel-tier":E.tier,children:[(0,C.jsxs)(`div`,{className:`stage-enemy-card__portrait`,"data-monster-intel-hidden":!E.art,children:[x&&!S?(0,C.jsx)(`img`,{className:`stage-enemy-art`,src:x,alt:E.name?_(`{name} 일러스트`,{name:y?.name??_(`적`)}):_(`미확인 몬스터`),draggable:!1,decoding:`async`,onError:()=>T(!0)}):(0,C.jsxs)(`span`,{className:`stage-enemy-art-fallback`,children:[(0,C.jsx)(w,{type:i?`boss`:`normal`}),(0,C.jsx)(`small`,{children:_(`그림 준비 중`)})]}),(0,C.jsxs)(`span`,{className:`stage-enemy-count`,"aria-label":_(`{n}명 등장`,{n:t}),children:[`×`,t]}),(0,C.jsx)(`span`,{className:`stage-enemy-boss-label`,children:_(r[c])})]}),(0,C.jsxs)(`div`,{className:`stage-enemy-card__copy`,children:[(0,C.jsx)(`h3`,{children:D}),u?(0,C.jsxs)(`details`,{children:[(0,C.jsx)(`summary`,{"aria-label":_(`{name} 기술 정보`,{name:D}),children:_(`기술 정보`)}),O]}):O]})]})}export{w as n,_ as r,T as t};