(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[688],{5990:function(e,n,t){Promise.resolve().then(t.bind(t,4532)),Promise.resolve().then(t.bind(t,5868))},8870:function(e,n,t){"use strict";t.d(n,{P:function(){return c},g:function(){return i}});var r=t(4829);let o="".concat("https://portfolio-p0da.onrender.com","/api/v1"),a="".concat(o,"/github/:category"),s="".concat(o,"/github/:category/content"),c=async e=>{let n=a.replace(":category",e),t=await r.Z.get(n);return console.log(t),t.data},i=async(e,n)=>{let t=s.replace(":category",e),o=new URLSearchParams({fileName:n}).toString(),a=await r.Z.get("".concat(t,"?").concat(o)),c=a.data;return c}},4532:function(e,n,t){"use strict";t.r(n);var r=t(7437),o=t(8870),a=t(2265),s=t(3473),c=t(7750),i=t.n(c);n.default=function(e){let{fileName:n,category:t}=e,[c,l]=(0,a.useState)(""),[u,d]=(0,a.useState)(!1),h=(0,a.useCallback)(()=>{(0,o.g)(t,n).then(e=>{l(e),d(!0)})},[n,t]);return(0,a.useEffect)(()=>{h()},[h]),u&&(0,r.jsx)(s.U,{className:i().markdown,children:c})}},5868:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return w}});var r=t(7437),o=t(2265),a=t(4275),s=t.n(a),c=t(6500),i=t(7812),l=t(5908),u=t(4404),d=t(6110),h=t(2653),x=t(5266),p=t(9299),f=t(2502),m=t(7780),g=t(2513),j=t(4989),b=t(3226),Z=t(9050);let y=[{name:"Home",href:"/"},{name:"About",href:"/about"},{name:"Blogs",href:"/blogs"},{name:"Projects",href:"/projects"},{name:"Contact",href:"/contact"}];var k=t(4033);function v(e){let{window:n}=e,[t,a]=o.useState(!1),s=(0,k.useRouter)(),v=e=>{s.push(e)},w=()=>{a(e=>!e)},C=(0,r.jsxs)(i.Z,{onClick:w,sx:{textAlign:"center"},children:[(0,r.jsx)(b.Z,{variant:"h6",sx:{my:2},children:"Nhan Nguyen"}),(0,r.jsx)(u.Z,{}),(0,r.jsx)(x.Z,{children:y.map(e=>{let{name:n,href:t}=e;return(0,r.jsx)(p.ZP,{disablePadding:!0,children:(0,r.jsx)(f.Z,{sx:{textAlign:"center"},children:(0,r.jsx)(m.Z,{primary:n,onClick:()=>v(t)})})},n)})})]});return(0,r.jsxs)(i.Z,{sx:{display:"flex"},children:[(0,r.jsx)(l.ZP,{}),(0,r.jsx)(c.Z,{component:"nav",children:(0,r.jsxs)(j.Z,{children:[(0,r.jsx)(h.Z,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:w,sx:{mr:2,display:{sm:"none"}},children:(0,r.jsx)(g.Z,{})}),(0,r.jsx)(b.Z,{variant:"h6",component:"div",sx:{flexGrow:1,display:{xs:"none",sm:"block"}},children:"Nhan Nguyen"}),(0,r.jsx)(i.Z,{sx:{display:{xs:"none",sm:"block"}},children:y.map(e=>{let{name:n,href:t}=e;return(0,r.jsx)(Z.Z,{sx:{color:"#fff"},onClick:()=>v(t),children:n},n)})})]})}),(0,r.jsx)("nav",{children:(0,r.jsx)(d.ZP,{container:void 0!==n?()=>n().document.body:void 0,variant:"temporary",open:t,onClose:w,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:240}},children:C})})]})}v.propTypes={window:s().func};var w=v},7750:function(e){e.exports={markdown:"GithubContent_markdown__kh57X"}}},function(e){e.O(0,[49,829,473,971,596,744],function(){return e(e.s=5990)}),_N_E=e.O()}]);