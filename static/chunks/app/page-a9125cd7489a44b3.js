(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{8866:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>H});var i=n(5155);let o=(0,n(5902).A)({palette:{primary:{main:"#4b2862"},secondary:{main:"#E5D753"},custom:{background:"#fffcff",yellow:"#E5D753",grey:"#6F8695",lightRed:"#F87575"}}});var r=n(9687),a=n(3854),s=n(2269),l=n(5299),d=n.n(l);let c={title:"stride run club",buttons:{joinUs:"Join us"},nav:{home:"Home",about:"About",contact:"Contact",register:"Register",announcements:"Announcements"}};var m=n(8461),u=n(2115),h=n(6766);let x=e=>{let{onClick:t}=e;return(0,i.jsxs)(s.A,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"56px",paddingInline:2,borderBottom:1,borderColor:"divider","& img":{borderRadius:"50%"}},className:d().className,onClick:t,children:[(0,i.jsx)(h.default,{src:"/stride.jpeg",width:36,height:36,alt:"Stride logo"}),(0,i.jsxs)(s.A,{sx:{typography:"title"},children:[" ",c.title]}),(0,i.jsx)(m.A,{variant:"text",children:c.buttons.joinUs})]})};var b=n(4742),g=n(6523),p=n(8847),A=n(2647),f=n(2334),j=function(e){return e[e.Home=0]="Home",e[e.Register=1]="Register",e[e.Announcements=2]="Announcements",e}({});let v=e=>{let{onChange:t,value:n}=e;return(0,i.jsxs)(b.A,{showLabels:!0,value:n,sx:{position:"absolute",bottom:0,left:0,right:0,boxShadow:2},onChange:(e,n)=>{null==t||t(n)},children:[(0,i.jsx)(g.A,{label:c.nav.home,icon:(0,i.jsx)(p.A,{})}),(0,i.jsx)(g.A,{label:c.nav.register,icon:(0,i.jsx)(A.A,{})}),(0,i.jsx)(g.A,{label:c.nav.announcements,icon:(0,i.jsx)(f.A,{})})]})},y=e=>{let{children:t}=e;return(0,i.jsx)(s.A,{sx:{flex:"0 0 100%",overflowY:"auto",height:"100%"},children:t})},w=()=>(0,i.jsx)("div",{children:"Landing"});n(1368);let S=JSON.parse('[{"id":"1a2b3c4d-5678-90ab-cdef-1234567890ab","title":"Welcome to Our Platform","content":"We are excited to have you here. Stay tuned for updates!","timestamp":1710585600000},{"id":"2b3c4d5e-6789-01bc-defa-2345678901bc","title":"New Feature Released","content":"We have added a new feature to improve your experience.","timestamp":1710672000000},{"id":"3c4d5e6f-7890-12cd-efab-3456789012cd","title":"Scheduled Maintenance","content":"Our platform will undergo maintenance on March 20, 2025.","timestamp":1710758400000},{"id":"3c4d5e6f-7890-12cd-efab-3456189212cd","title":"Scheduled Maintenance","content":"Our platform will undergo maintenance on March 20, 2025.","timestamp":1710758410001}]');class C{static getAllAnnouncements(e,t){return e&&t?JSON.parse(e(t,"utf8")):S}static addAnnouncement(e,t,n,i){throw Error("addAnnouncement can only be used in a Node.js environment")}static cleanOldAnnouncements(e,t,n,i){throw Error("cleanOldAnnouncements can only be used in a Node.js environment")}static formatTimestamp(e){return new Date(e).toLocaleString("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})}}var N=n(7020),R=n(4059),k=n(7239),O=n(3339),E=n(9670);let W=()=>{let[e,t]=(0,u.useState)([]);return(0,u.useEffect)(()=>{t(C.getAllAnnouncements().sort((e,t)=>t.timestamp-e.timestamp))},[]),(0,i.jsxs)(N.A,{maxWidth:"md",sx:{mt:4,mb:4,display:"flex",flexDirection:"column",gap:3},children:[e.map(e=>(0,i.jsxs)(R.A,{sx:{boxShadow:4,borderRadius:2},children:[(0,i.jsx)(k.A,{title:e.title,subheader:C.formatTimestamp(e.timestamp),sx:{pb:0},slotProps:{title:{sx:{fontWeight:"bold",color:"primary.main",typography:"h6",fontSize:"1rem"}},subheader:{sx:{color:"text.secondary",typography:"subtitle2"}}}}),(0,i.jsx)(O.A,{children:(0,i.jsx)(E.A,{variant:"body2",color:"text.primary",children:e.content})})]},e.id)),0===e.length&&(0,i.jsx)(s.A,{textAlign:"center",mt:4,sx:{padding:4,border:"1px solid",borderColor:"divider",borderRadius:2,backgroundColor:"background.default"},children:(0,i.jsx)(E.A,{variant:"body1",color:"textSecondary",children:"No announcements available at the moment."})})]})},_=()=>(0,i.jsx)("div",{children:"Registration"});var D=n(3665);function H(){let[e,t]=(0,u.useState)(j.Announcements),n=e=>{e===j.Announcements&&t(e)},l={[j.Home]:(0,i.jsx)(w,{}),[j.Register]:(0,i.jsx)(_,{}),[j.Announcements]:(0,i.jsx)(W,{})};return(0,i.jsxs)(r.A,{theme:o,children:[(0,i.jsx)(a.Ay,{}),(0,i.jsxs)(s.A,{sx:{maxWidth:"600px",margin:"0 auto",width:"100%",height:"100svh",boxShadow:8,position:"relative",overflow:"hidden"},children:[(0,i.jsx)(x,{onClick:()=>n(j.Register)}),(0,i.jsx)(D.Ay,{index:e,onChangeIndex:e=>{e===j.Announcements&&t(e)},style:{height:"calc(100vh - 112px)"},containerStyle:{display:"flex",height:"100%"},children:Object.keys(j).map(e=>(0,i.jsx)(y,{children:l[Number(e)]},e))}),(0,i.jsx)(v,{onChange:n,value:e})]})]})}},8907:(e,t,n)=>{Promise.resolve().then(n.bind(n,8866))}},e=>{var t=t=>e(e.s=t);e.O(0,[990,787,441,684,358],()=>t(8907)),_N_E=e.O()}]);