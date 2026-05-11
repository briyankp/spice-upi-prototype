import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Home, BookOpen, QrCode, User, Send, Plus, Smartphone, MoreHorizontal,
  ChevronRight, Shield, TrendingUp, Bell, Star, PiggyBank, Building2,
  CheckCircle, Zap, Gift, RefreshCw, Coins, Lock, Award
} from "lucide-react";

// ── PALETTE 1 ────────────────────────────────────────────────────
const C = {
  teal:"#015C57", tealD:"#013d39", tealL:"#CCE0DE", tealXL:"#EAF2F1",
  terra:"#FF5205", terraL:"#FFF0EB",
  amber:"#E7A669", amberL:"#FBF0E2",
  grn:"#2C6E49",  grnL:"#E5F0E9",
  blk:"#080809",  cream:"#EDE7E3",
  gray:"#979DA1", grayL:"#F4F3F1",
  bg:"#FFFAF3",   wht:"#FFFFFF",
  gold:"#8B6A2E", goldL:"#FDF5E8",
};

// ── ICONS ─────────────────────────────────────────────────────────
const SpiceIcon = ({s=20}) => (
  <svg width={s} height={s} viewBox="0 0 20 20" fill="none">
    <rect width="20" height="20" rx="5" fill={C.terra}/>
    <rect x="2" y="2" width="16" height="5" rx="2" fill="#FF9933"/>
    <rect x="2" y="7.5" width="16" height="5" fill={C.wht}/>
    <rect x="2" y="13" width="16" height="5" rx="2" fill="#138808"/>
    <circle cx="10" cy="10" r="2.2" fill="none" stroke="#000080" strokeWidth="1"/>
  </svg>
);

const Logo = ({sz=14}) => (
  <div style={{display:"flex",alignItems:"center",gap:5}}>
    <SpiceIcon s={sz+4}/>
    <span style={{fontWeight:900,color:C.teal,fontSize:sz,letterSpacing:-0.4}}>Spice</span>
    <span style={{fontWeight:700,color:C.blk,fontSize:sz,letterSpacing:-0.4}}>UPI</span>
  </div>
);

// ── PHONE SHELL ───────────────────────────────────────────────────
const Phone = ({children,bg=C.bg,h=600,w=270}) => (
  <div style={{width:w+18,flexShrink:0}}>
    <div style={{background:"#1C1C1E",borderRadius:42,padding:9,boxShadow:"0 20px 60px rgba(0,0,0,0.22)"}}>
      <div style={{height:24,background:bg,borderRadius:"33px 33px 0 0",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <div style={{width:68,height:8,background:"#1C1C1E",borderRadius:5}}/>
      </div>
      <div style={{width:w,height:h,background:bg,overflow:"hidden",position:"relative",display:"flex",flexDirection:"column"}}>
        {children}
      </div>
      <div style={{height:18,background:bg,borderRadius:"0 0 33px 33px",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <div style={{width:60,height:4,background:C.cream,borderRadius:2}}/>
      </div>
    </div>
  </div>
);

// ── APP CHROME ────────────────────────────────────────────────────
const StatusBar = ({light=false}) => (
  <div style={{height:32,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 14px",flexShrink:0}}>
    <span style={{fontSize:11,fontWeight:700,color:light?"rgba(255,255,255,0.9)":C.blk}}>9:41</span>
    <div style={{display:"flex",gap:4,alignItems:"center"}}>
      {[3,5,7].map((h,i)=><div key={i} style={{width:3,height:h,background:light?"rgba(255,255,255,0.7)":C.blk,borderRadius:1}}/>)}
      <div style={{width:13,height:7,border:`1.5px solid ${light?"rgba(255,255,255,0.6)":C.blk}`,borderRadius:2,marginLeft:3,position:"relative"}}>
        <div style={{position:"absolute",inset:"1px 1px 1px 2px",background:light?"rgba(255,255,255,0.6)":C.blk,borderRadius:1}}/>
      </div>
    </div>
  </div>
);

const AppBar = () => (
  <div style={{height:48,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 14px",borderBottom:`1px solid ${C.cream}`,flexShrink:0,background:C.bg}}>
    <Logo sz={13}/>
    <div style={{display:"flex",gap:10}}>
      <Bell size={16} color={C.gray}/>
      <div style={{width:26,height:26,borderRadius:"50%",background:C.tealXL,display:"flex",alignItems:"center",justifyContent:"center"}}>
        <User size={13} color={C.teal}/>
      </div>
    </div>
  </div>
);

const BottomNav = ({active="home"}) => {
  const items = [
    {id:"home",icon:Home,label:"Home"},
    {id:"bachat",icon:PiggyBank,label:"Bachat"},
    {id:"qr",center:true},
    {id:"passbook",icon:BookOpen,label:"Passbook"},
    {id:"you",icon:User,label:"You"},
  ];
  return (
    <div style={{height:54,background:C.bg,borderTop:`1px solid ${C.cream}`,display:"flex",alignItems:"center",flexShrink:0}}>
      {items.map((item,i) => item.center ? (
        <div key={i} style={{flex:1,display:"flex",justifyContent:"center"}}>
          <div style={{width:44,height:44,borderRadius:"50%",background:C.terra,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:`0 2px 10px ${C.terra}66`}}>
            <QrCode size={20} color={C.wht}/>
          </div>
        </div>
      ) : (
        <div key={i} style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:2}}>
          <item.icon size={18} color={active===item.id?C.terra:C.gray}/>
          <span style={{fontSize:9,color:active===item.id?C.terra:C.gray,fontWeight:active===item.id?700:400}}>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

// ── REUSABLE ──────────────────────────────────────────────────────
const Btn = ({children,bg=C.grn,color=C.wht,full=false,sm=false,style:s={}}) => (
  <button style={{padding:sm?"6px 12px":"9px 16px",background:bg,color,border:"none",borderRadius:9,fontSize:sm?10:12,fontWeight:700,cursor:"pointer",width:full?"100%":"auto",...s}}>
    {children}
  </button>
);

const Tag = ({children,color=C.teal,bg=C.tealXL}) => (
  <span style={{fontSize:9.5,fontWeight:700,color,background:bg,padding:"2px 8px",borderRadius:5,letterSpacing:0.2}}>{children}</span>
);

const Card = ({children,style:s={}}) => (
  <div style={{background:C.wht,borderRadius:14,padding:14,border:`1px solid ${C.cream}`,...s}}>
    {children}
  </div>
);

const Annotation = ({label,color=C.teal,children}) => (
  <div style={{background:"var(--color-background-secondary)",borderRadius:12,padding:"12px 14px",borderLeft:`3px solid ${color}`}}>
    <div style={{fontSize:9.5,fontWeight:700,color,textTransform:"uppercase",letterSpacing:0.4,marginBottom:6}}>{label}</div>
    <div style={{fontSize:11,color:"var(--color-text-secondary)",lineHeight:1.65}}>{children}</div>
  </div>
);

const Divider = ({label}) => (
  <div style={{display:"flex",alignItems:"center",gap:8,margin:"8px 0"}}>
    <div style={{flex:1,height:1,background:"var(--color-border-tertiary)"}}/>
    <span style={{fontSize:9.5,color:"var(--color-text-secondary)",fontWeight:600,letterSpacing:0.3}}>{label}</span>
    <div style={{flex:1,height:1,background:"var(--color-border-tertiary)"}}/>
  </div>
);

// ═══════════════════════════════════════════════════════════════
// Q1 — BANK POSITIONING
// ═══════════════════════════════════════════════════════════════

// Real estate zone A: Top banner (above balance)
const RealEstateA_Trust = () => (
  <div style={{margin:"8px 12px 0",background:`linear-gradient(135deg,${C.tealD},${C.teal})`,borderRadius:12,padding:"10px 12px",display:"flex",alignItems:"center",gap:10}}>
    <div style={{width:32,height:32,borderRadius:8,background:"rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
      <Shield size={16} color={C.wht}/>
    </div>
    <div style={{flex:1}}>
      <div style={{fontSize:10.5,fontWeight:800,color:C.wht,marginBottom:1}}>Yes Bank Escrow • RBI Licensed • NPCI Certified</div>
      <div style={{fontSize:9.5,color:"rgba(255,255,255,0.7)"}}>Aapka paisa bank jaisa safe — guarantee ke saath</div>
    </div>
    <ChevronRight size={14} color="rgba(255,255,255,0.6)"/>
  </div>
);

// Real estate zone B: FD carousel banner (Palette 4 layout)
const RealEstateB_FDCarousel = () => (
  <div style={{margin:"0 12px"}}>
    <div style={{background:C.teal,borderRadius:14,padding:"12px 14px",display:"flex",alignItems:"center",gap:10,position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",right:-12,top:-12,width:72,height:72,borderRadius:"50%",background:"rgba(255,255,255,0.05)"}}/>
      <div style={{flex:1}}>
        <div style={{fontSize:11,fontWeight:800,color:C.wht,marginBottom:2}}>₹1,000 FD mein lock karo,</div>
        <div style={{fontSize:10,color:"rgba(255,255,255,0.75)",marginBottom:3}}>aur pao 8% guaranteed returns</div>
        <div style={{fontSize:9,color:C.amber,fontWeight:700}}>In partnership with Suryoday Bank</div>
      </div>
      <div style={{width:42,height:42,borderRadius:"50%",background:"rgba(255,165,0,0.2)",border:"1.5px solid rgba(255,165,0,0.3)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:22}}>🪙</div>
      <div style={{width:26,height:26,borderRadius:"50%",background:C.terra,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
        <ChevronRight size={13} color={C.wht}/>
      </div>
    </div>
  </div>
);

const Q1_Screen_Home = () => (
  <Phone h={600}>
    <StatusBar/>
    <AppBar/>
    <div style={{flex:1,overflowY:"auto",background:C.bg,display:"flex",flexDirection:"column",gap:0}}>
      <RealEstateA_Trust/>
      <div style={{margin:"8px 12px 0",background:C.teal,borderRadius:14,padding:"14px 16px"}}>
        <div style={{fontSize:10,color:"rgba(255,255,255,0.6)"}}>Aaj tak ka total balance</div>
        <div style={{fontSize:26,fontWeight:900,color:C.wht,letterSpacing:-1}}>₹11,050</div>
        <div style={{fontSize:9.5,color:C.amber,marginBottom:10}}>+ ₹124 aaj add hue</div>
        <div style={{display:"flex",gap:6}}>
          <Btn bg={C.terra} sm full style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:4}}>
            <QrCode size={11}/> Show QR
          </Btn>
          <Btn bg="rgba(255,255,255,0.15)" color={C.wht} sm full style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:4}}>
            <Send size={11}/> Send Money
          </Btn>
        </div>
      </div>
      <div style={{margin:"8px 12px 0",background:C.wht,borderRadius:12,padding:"10px 12px",display:"flex",justifyContent:"space-between",alignItems:"center",border:`1px solid ${C.cream}`}}>
        <div>
          <div style={{fontSize:11,fontWeight:700,color:C.blk}}>Recent Transactions</div>
          <div style={{fontSize:9.5,color:C.gray}}>5 payments · ₹94 added</div>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:3}}>
          <div style={{display:"flex"}}>
            {[C.terra,C.teal,C.amber].map((col,i)=>(
              <div key={i} style={{width:22,height:22,borderRadius:"50%",background:col,border:`2px solid ${C.wht}`,marginLeft:i>0?-6:0}}/>
            ))}
          </div>
          <span style={{fontSize:9,color:C.gray}}>+2</span>
          <ChevronRight size={13} color={C.gray}/>
        </div>
      </div>
      <div style={{display:"flex",justifyContent:"space-around",padding:"10px 12px 6px"}}>
        {[{icon:Plus,label:"Add Money"},{icon:Smartphone,label:"Mobile Recharge"},{icon:Building2,label:"Bank Transfer"},{icon:MoreHorizontal,label:"More Options"}].map((a,i)=>(
          <div key={i} style={{display:"flex",flexDirection:"column",alignItems:"center",gap:3}}>
            <div style={{width:42,height:42,background:C.grayL,borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center"}}><a.icon size={17} color={C.blk}/></div>
            <span style={{fontSize:8.5,color:C.gray,textAlign:"center",maxWidth:52,lineHeight:1.2}}>{a.label}</span>
          </div>
        ))}
      </div>
      <RealEstateB_FDCarousel/>
      <div style={{margin:"10px 12px 4px",fontSize:11,fontWeight:700,color:C.blk}}>Paise बचत plans</div>
      <div style={{margin:"0 12px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
        {[
          {label:"Roz ki Bachat",sub:"₹50 se start karein",emoji:"🪴",bg:C.tealXL},
          {label:"Emergency Fund",sub:"Zarurat ke time ready",emoji:"🏺",bg:C.terraL},
        ].map((p,i)=>(
          <Card key={i} style={{padding:"10px 12px",border:`1px solid ${C.cream}`}}>
            <div style={{fontSize:10,fontWeight:700,color:C.blk,marginBottom:1}}>{p.label}</div>
            <div style={{fontSize:9,color:C.gray,marginBottom:6}}>{p.sub}</div>
            <div style={{height:36,background:p.bg,borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20}}>{p.emoji}</div>
          </Card>
        ))}
      </div>
      <div style={{margin:"8px 12px 12px",background:C.wht,borderRadius:12,padding:"10px 12px",border:`1px solid ${C.cream}`}}>
        <div style={{fontSize:10,fontWeight:700,color:C.blk,marginBottom:6}}>Hafte ka हिसाब</div>
        <div style={{display:"flex",justifyContent:"space-between"}}>
          {[{l:"Aaya",v:"₹6,500",c:C.blk},{l:"• Gaya",v:"₹2,120",c:C.terra},{l:"• Bacha",v:"₹4,380",c:C.teal}].map((x,i)=>(
            <div key={i}>
              <div style={{fontSize:9,color:C.gray}}>{x.l}</div>
              <div style={{fontSize:12,fontWeight:800,color:x.c}}>{x.v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <BottomNav/>
  </Phone>
);

const Q1_Screen_TrustModal = () => (
  <Phone h={600}>
    <StatusBar light/>
    <div style={{flex:1,background:C.teal,display:"flex",flexDirection:"column",padding:"20px 20px 0"}}>
      <div style={{width:56,height:56,borderRadius:16,background:"rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:16}}>
        <Shield size={28} color={C.wht}/>
      </div>
      <div style={{fontSize:11,fontWeight:700,color:"rgba(255,255,255,0.6)",letterSpacing:1,marginBottom:6}}>AAPKA PAISA 100% SAFE HAI</div>
      <div style={{fontSize:20,fontWeight:900,color:C.wht,lineHeight:1.3,marginBottom:20}}>Spice UPI Account —<br/>Bank se bhi better.</div>

      {[
        {icon:Building2, title:"Yes Bank Escrow Account", sub:"Spice UPI ke peeche Yes Bank ka escrow account hai. Aapka paisa bank-grade vault mein safe hai."},
        {icon:Award,     title:"RBI + NPCI Licensed PPI Wallet", sub:"Spice UPI ek RBI-regulated PPI wallet hai — NPCI certified. Bilkul bank ki tarah."},
        {icon:Coins,     title:"Sab Kuch Bilkul Free", sub:"Paisa add karo, nikalo, bhejo, bachao — koi bhi charge nahi. Ek dum bank ke behatar."},
      ].map((row,i)=>(
        <div key={i} style={{display:"flex",gap:12,marginBottom:14,alignItems:"flex-start"}}>
          <div style={{width:36,height:36,borderRadius:10,background:"rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
            <row.icon size={17} color={C.wht}/>
          </div>
          <div>
            <div style={{fontSize:12,fontWeight:700,color:C.wht,marginBottom:2}}>{row.title}</div>
            <div style={{fontSize:10.5,color:"rgba(255,255,255,0.7)",lineHeight:1.5}}>{row.sub}</div>
          </div>
        </div>
      ))}

      <div style={{marginTop:"auto",paddingBottom:24}}>
        <div style={{background:"rgba(255,255,255,0.1)",borderRadius:12,padding:"12px 14px",marginBottom:12}}>
          <div style={{fontSize:11,fontWeight:800,color:C.wht,textAlign:"center"}}>
            "Bank khata ki taakat. Bina branch. Bina line. Bilkul free."
          </div>
        </div>
        <Btn full bg={C.terra}>Apna Account Explore Karein</Btn>
      </div>
    </div>
  </Phone>
);

const Q1_Screen_BankComparison = () => {
  const rows = [
    {bank:"Savings Account",    bankCharge:null,        spice:"Aaj ki Kamai Balance — FREE",            type:"parity"},
    {bank:"Cash Deposit",       bankCharge:"₹ Charged", spice:"Adhikari se seedha account mein — FREE", type:"better"},
    {bank:"Cash Withdrawal",    bankCharge:"₹ Charged", spice:"Adhikari se — kabhi bhi — FREE",         type:"better"},
    {bank:"Fund Transfer / UPI",bankCharge:"₹ Charged", spice:"Kisi ko bhi, 24x7 — FREE",              type:"better"},
    {bank:"FD / RD",            bankCharge:null,        spice:"Better returns — Suryoday Bank ke saath",type:"better"},
    {bank:"Branch / Agent",     bankCharge:"Travel",    spice:"Adhikari — ghar ke paas — FREE",         type:"better"},
    {bank:"Not in any Bank",    bankCharge:null,        spice:"Roz ki Bachat — daily auto-save — FREE", type:"exclusive"},
    {bank:"Not in any Bank",    bankCharge:null,        spice:"Emergency Fund sub-wallet — FREE",       type:"exclusive"},
    {bank:"Not in any Bank",    bankCharge:null,        spice:"Goal Savings (set & forget) — FREE",     type:"exclusive"},
  ];
  const typeColor = {parity:C.teal, better:C.grn, exclusive:C.terra};
  return (
    <Phone h={600}>
      <StatusBar/>
      <AppBar/>
      <div style={{flex:1,overflowY:"auto",background:C.bg,padding:"12px"}}>
        <div style={{fontSize:13,fontWeight:800,color:C.blk,marginBottom:6}}>Bank vs Spice UPI Account</div>
        <div style={{display:"flex",gap:10,marginBottom:10,flexWrap:"wrap"}}>
          {[{t:"parity",l:"Same as bank"},{t:"better",l:"Better than bank"},{t:"exclusive",l:"Only in SpiceUPI"}].map(({t,l})=>(
            <div key={t} style={{display:"flex",alignItems:"center",gap:3}}>
              <div style={{width:7,height:7,borderRadius:2,background:typeColor[t]}}/>
              <span style={{fontSize:9,color:C.gray}}>{l}</span>
            </div>
          ))}
        </div>
        <Card style={{padding:0,overflow:"hidden"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",background:C.teal}}>
            <div style={{padding:"8px 10px",fontSize:10,fontWeight:700,color:"rgba(255,255,255,0.75)"}}>Bank</div>
            <div style={{padding:"8px 10px",fontSize:10,fontWeight:700,color:C.wht,borderLeft:"1px solid rgba(255,255,255,0.2)"}}>SpiceUPI Account</div>
          </div>
          {rows.map((r,i)=>(
            <div key={i} style={{display:"grid",gridTemplateColumns:"1fr 1fr",background:r.type==="exclusive"?C.terraL:i%2===0?C.wht:C.bg,borderTop:`1px solid ${C.cream}`}}>
              <div style={{padding:"8px 10px",display:"flex",flexDirection:"column",justifyContent:"center",gap:3}}>
                <span style={{fontSize:10,color:r.type==="exclusive"?C.terra:C.gray,fontStyle:r.type==="exclusive"?"italic":"normal",fontWeight:r.type==="exclusive"?600:400}}>{r.bank}</span>
                {r.bankCharge && (
                  <span style={{fontSize:8,fontWeight:700,color:C.terra,background:C.terraL,padding:"1px 6px",borderRadius:4,alignSelf:"flex-start"}}>{r.bankCharge}</span>
                )}
              </div>
              <div style={{padding:"8px 10px",borderLeft:`1px solid ${C.cream}`,display:"flex",alignItems:"center"}}>
                <span style={{fontSize:10,fontWeight:700,color:typeColor[r.type],lineHeight:1.5}}>
                  {r.spice.includes("FREE") ? (
                    <>
                      {r.spice.replace(" — FREE","")}{" "}
                      <span style={{display:"inline-block",fontSize:8.5,fontWeight:800,color:C.wht,background:C.grn,padding:"1px 5px",borderRadius:4,verticalAlign:"middle"}}>FREE</span>
                    </>
                  ) : r.spice}
                </span>
              </div>
            </div>
          ))}
        </Card>
        <div style={{marginTop:8,background:C.teal,borderRadius:12,padding:"10px 14px",textAlign:"center"}}>
          <div style={{fontSize:11,fontWeight:800,color:C.wht}}>"Bank jaisa. Par use bhatar."</div>
          <div style={{fontSize:9.5,color:"rgba(255,255,255,0.65)",marginTop:2}}>Sab kuch free. Sab kuch digital.</div>
        </div>
      </div>
      <BottomNav/>
    </Phone>
  );
};

// ═══════════════════════════════════════════════════════════════
// Q2 — WALLET → WEALTH CROSSSELL
// ═══════════════════════════════════════════════════════════════

const RealEstateB_WealthNudge = ({bal="3,840"}) => (
  <div style={{margin:"0 12px",background:C.amberL,borderRadius:14,padding:"12px 14px",border:`1.5px solid ${C.amber}`}}>
    <div style={{display:"flex",alignItems:"center",gap:10}}>
      <div style={{width:34,height:34,borderRadius:10,background:C.amber,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
        <PiggyBank size={17} color={C.wht}/>
      </div>
      <div style={{flex:1}}>
        <div style={{fontSize:11,fontWeight:800,color:C.blk}}>₹{bal} yahan baithe hain.</div>
        <div style={{fontSize:10,color:C.gray}}>FD mein lagao — <strong style={{color:C.grn}}>₹267 extra</strong>, guarantee ke saath</div>
      </div>
      <Btn sm bg={C.grn}>Lagao</Btn>
    </div>
  </div>
);

const Q2_Screen_WealthFlow = () => (
  <Phone h={600}>
    <StatusBar/>
    <AppBar/>
    <div style={{flex:1,overflowY:"auto",background:C.bg,display:"flex",flexDirection:"column",gap:0}}>
      {/* ZONE A — wealth upsell */}
      <div style={{margin:"8px 12px 0",background:`linear-gradient(135deg,${C.grn},#1a4a2e)`,borderRadius:12,padding:"10px 12px",display:"flex",alignItems:"center",gap:10}}>
        <TrendingUp size={18} color={C.wht}/>
        <div style={{flex:1}}>
          <div style={{fontSize:10.5,fontWeight:800,color:C.wht}}>Paisa sirf rakho mat — badhao bhi.</div>
          <div style={{fontSize:9.5,color:"rgba(255,255,255,0.7)"}}>FD • RD • Digital Gold — sab ek jagah</div>
        </div>
        <ChevronRight size={14} color="rgba(255,255,255,0.6)"/>
      </div>
      {/* Balance */}
      <div style={{margin:"10px 12px 0",background:C.teal,borderRadius:14,padding:"14px 16px"}}>
        <div style={{fontSize:10,color:"rgba(255,255,255,0.6)"}}>Aaj ki Kamai</div>
        <div style={{fontSize:26,fontWeight:900,color:C.wht,letterSpacing:-1}}>₹3,840</div>
        <div style={{display:"flex",gap:6,marginTop:8}}>
          <Btn bg={C.terra} sm full style={{flex:1}}>Show QR</Btn>
          <Btn bg="rgba(255,255,255,0.15)" color={C.wht} sm full style={{flex:1}}>Send Money</Btn>
        </div>
      </div>
      {/* ZONE B — idle balance nudge */}
      <div style={{height:10}}/>
      <RealEstateB_WealthNudge/>
      {/* Wealth products */}
      <div style={{margin:"10px 12px 0",fontSize:11,fontWeight:700,color:C.blk}}>Paise Badhao</div>
      <div style={{margin:"6px 12px",display:"flex",flexDirection:"column",gap:8}}>
        {[
          {icon:Building2,label:"Fixed Deposit",sub:"₹267 extra on ₹3,840",badge:"7% return",c:C.gold,f:C.goldL},
          {icon:RefreshCw, label:"Recurring Deposit",sub:"₹500/month se shuru",badge:"Guaranteed",c:C.teal,f:C.tealXL},
          {icon:Star,      label:"Digital Gold",sub:"₹10 se shuru karein",badge:"Live price",c:C.amber,f:C.amberL},
        ].map((p,i)=>(
          <Card key={i} style={{padding:"10px 12px",display:"flex",alignItems:"center",gap:10}}>
            <div style={{width:36,height:36,borderRadius:10,background:p.f,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
              <p.icon size={17} color={p.c}/>
            </div>
            <div style={{flex:1}}>
              <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:2}}>
                <span style={{fontSize:12,fontWeight:700,color:C.blk}}>{p.label}</span>
                <span style={{fontSize:8.5,fontWeight:700,background:p.f,color:p.c,padding:"1px 6px",borderRadius:4}}>{p.badge}</span>
              </div>
              <div style={{fontSize:10,color:C.gray}}>{p.sub}</div>
            </div>
            <Btn sm bg={C.grn}>Shuru</Btn>
          </Card>
        ))}
      </div>
    </div>
    <BottomNav active="bachat"/>
  </Phone>
);

const Q2_Screen_PostTxnNudge = () => (
  <Phone h={600}>
    <StatusBar light/>
    <div style={{flex:1,background:C.teal,display:"flex",flexDirection:"column",alignItems:"center",padding:"28px 20px 20px"}}>
      <div style={{width:52,height:52,borderRadius:"50%",background:"rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:14}}>
        <CheckCircle size={26} color={C.wht}/>
      </div>
      <div style={{fontSize:14,color:"rgba(255,255,255,0.65)",marginBottom:4}}>Done.</div>
      <div style={{fontSize:20,fontWeight:800,color:C.wht,textAlign:"center",marginBottom:20}}>₹850 bheja — 0.8s mein.</div>

      {/* Inline wealth nudge on success screen */}
      <div style={{width:"100%",background:"rgba(255,255,255,0.12)",borderRadius:14,padding:"14px",border:"1px solid rgba(255,255,255,0.2)",marginBottom:14}}>
        <div style={{fontSize:10,color:"rgba(255,255,255,0.6)",marginBottom:6}}>Is hafte ₹3,840 aaya hai.</div>
        <div style={{fontSize:13,fontWeight:800,color:C.wht,marginBottom:2}}>₹500 FD mein lagaoge?</div>
        <div style={{fontSize:10.5,color:"rgba(255,255,255,0.7)",marginBottom:12}}>₹35 extra milega — guarantee ke saath. Bank se better.</div>
        <div style={{display:"flex",gap:8}}>
          <Btn bg={C.grn} full style={{flex:1}}>Haan, lagao</Btn>
          <Btn bg="rgba(255,255,255,0.1)" color="rgba(255,255,255,0.7)" style={{flex:0.6,textAlign:"center"}}>Baad mein</Btn>
        </div>
      </div>
      <Btn full bg={C.terra} style={{marginTop:"auto"}}>Wapas Home</Btn>
    </div>
  </Phone>
);

const Q2_Screen_Hisaab = () => (
  <Phone h={600}>
    <StatusBar/>
    <AppBar/>
    <div style={{flex:1,overflowY:"auto",background:C.bg,padding:"12px",display:"flex",flexDirection:"column",gap:10}}>
      <div style={{fontSize:14,fontWeight:800,color:C.blk}}>Hafte ka Hisaab</div>
      <Card>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:12}}>
          {[{l:"Aaya",v:"₹8,500",c:C.teal},{l:"Gaya",v:"₹5,200",c:C.terra},{l:"Bacha",v:"₹3,300",c:C.grn}].map((x,i)=>(
            <div key={i} style={{flex:1,textAlign:"center",borderRight:i<2?`1px solid ${C.cream}`:"none"}}>
              <div style={{fontSize:10,color:C.gray}}>{x.l}</div>
              <div style={{fontSize:17,fontWeight:900,color:x.c}}>{x.v}</div>
            </div>
          ))}
        </div>
        {/* Bar chart */}
        <div style={{display:"flex",flexDirection:"column",gap:4}}>
          {[{l:"Aaya",w:"100%",c:C.teal},{l:"Gaya",w:"61%",c:C.terra},{l:"Bacha",w:"39%",c:C.grn}].map((b,i)=>(
            <div key={i} style={{display:"flex",alignItems:"center",gap:6}}>
              <span style={{width:36,fontSize:9,color:C.gray}}>{b.l}</span>
              <div style={{height:7,borderRadius:4,background:b.c,width:b.w,transition:"width 0.4s"}}/>
            </div>
          ))}
        </div>
      </Card>
      {/* Crosssell nudge in hisaab */}
      <Card style={{background:C.grnL,border:`1.5px solid ${C.grn}`}}>
        <div style={{fontSize:12,fontWeight:800,color:C.blk,marginBottom:4}}>₹3,300 bacha is hafte.</div>
        <div style={{fontSize:11,color:C.gray,marginBottom:10}}>FD mein lagao — <strong style={{color:C.grn}}>₹231 extra</strong>, guarantee ke saath. Bank se better.</div>
        <Btn full bg={C.grn}>FD Shuru Karein</Btn>
      </Card>
      <Card style={{background:C.goldL,border:`1.5px solid ${C.amber}`}}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <Star size={18} color={C.gold}/>
          <div style={{flex:1}}>
            <div style={{fontSize:11,fontWeight:700,color:C.blk}}>Ya sone mein bachao?</div>
            <div style={{fontSize:10,color:C.gray}}>₹10 se shuru. Jab chahein nikaalein.</div>
          </div>
          <Btn sm bg={C.amber}>Gold Lo</Btn>
        </div>
      </Card>
    </div>
    <BottomNav active="passbook"/>
  </Phone>
);

// ═══════════════════════════════════════════════════════════════
// Q3 — DAILY EARNINGS INTO WALLET
// ═══════════════════════════════════════════════════════════════

// Zone A strip for Q3 — earnings identity
const RealEstateA_EarningsRoute = () => (
  <div style={{margin:"8px 12px 0",background:`linear-gradient(135deg,${C.terra},#d94400)`,borderRadius:12,padding:"10px 12px",display:"flex",alignItems:"center",gap:10}}>
    <Coins size={17} color={C.wht}/>
    <div style={{flex:1}}>
      <div style={{fontSize:10.5,fontWeight:800,color:C.wht}}>Aaj ki kamai — seedha yahan aaye</div>
      <div style={{fontSize:9.5,color:"rgba(255,255,255,0.75)"}}>QR lagao. Adhikari se cash daalein. Sab free.</div>
    </div>
    <ChevronRight size={14} color="rgba(255,255,255,0.6)"/>
  </div>
);

// Screen 1 — Earnings Home: QR receive prominent + today hisaab
const Q3_Screen_EarningsHome = () => (
  <Phone h={600}>
    <StatusBar/>
    <AppBar/>
    <div style={{flex:1,overflowY:"auto",background:C.bg,display:"flex",flexDirection:"column",gap:0}}>
      <RealEstateA_EarningsRoute/>
      <div style={{margin:"8px 12px 0",background:C.teal,borderRadius:14,padding:"14px 16px"}}>
        <div style={{fontSize:10,color:"rgba(255,255,255,0.6)"}}>Aaj ki Kamai</div>
        <div style={{display:"flex",alignItems:"baseline",gap:8}}>
          <div style={{fontSize:26,fontWeight:900,color:C.wht,letterSpacing:-1}}>₹1,050</div>
          <div style={{fontSize:11,color:C.amber}}>+ ₹320 aaj</div>
        </div>
        <div style={{fontSize:9.5,color:"rgba(255,255,255,0.55)",marginBottom:10}}>Yahin aati hai aapki roz ki kamai</div>
        <div style={{background:"rgba(255,255,255,0.12)",borderRadius:10,padding:"10px 12px"}}>
          <div style={{fontSize:10.5,fontWeight:700,color:C.wht,marginBottom:2}}>Customer se payment lein</div>
          <div style={{fontSize:9.5,color:"rgba(255,255,255,0.6)",marginBottom:8}}>UPI ID: rohit@spiceupi</div>
          <div style={{display:"flex",gap:6}}>
            <Btn bg={C.terra} sm full style={{flex:1}}>QR Dikhao</Btn>
            <Btn bg="rgba(255,255,255,0.15)" color={C.wht} sm full style={{flex:1}}>WhatsApp karo</Btn>
          </div>
        </div>
      </div>
      {/* Zone B — Aaj ka Hisaab live */}
      <div style={{margin:"8px 12px 0",background:C.terraL,borderRadius:14,padding:"12px 14px",border:`1.5px solid ${C.terra}`}}>
        <div style={{fontSize:10,fontWeight:700,color:C.terra,marginBottom:6}}>Aaj ka Hisaab</div>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
          {[{l:"Aaya",v:"₹1,050",c:C.grn},{l:"Gaya",v:"₹400",c:C.terra},{l:"Bacha",v:"₹650",c:C.teal}].map((x,i)=>(
            <div key={i} style={{textAlign:"center"}}>
              <div style={{fontSize:9.5,color:C.gray}}>{x.l}</div>
              <div style={{fontSize:15,fontWeight:900,color:x.c}}>{x.v}</div>
            </div>
          ))}
        </div>
        <div style={{display:"flex",gap:3}}>
          {[{l:"Aaya",w:"100%",c:C.grn},{l:"Gaya",w:"38%",c:C.terra}].map((b,i)=>(
            <div key={i} style={{display:"flex",alignItems:"center",gap:4,flex:1}}>
              <span style={{fontSize:8,color:C.gray,width:28}}>{b.l}</span>
              <div style={{height:5,borderRadius:3,background:b.c,width:b.w,flex:1}}/>
            </div>
          ))}
        </div>
      </div>
      {/* Load routes */}
      <div style={{margin:"10px 12px 4px",fontSize:11,fontWeight:700,color:C.blk}}>Kamai Yahan Lao</div>
      <div style={{margin:"0 12px 12px",display:"flex",flexDirection:"column",gap:7}}>
        {[
          {icon:User,     label:"Adhikari se Cash Load",  sub:"Cash hai? Adhikari ke paas jao — free",    badge:"Zero charge", c:C.teal,  f:C.tealXL},
          {icon:Building2,label:"Bank se UPI Transfer",   sub:"10 seconds mein — automatic",              badge:"Instant",     c:C.grn,   f:C.grnL},
          {icon:QrCode,   label:"QR se Direct Receive",   sub:"Customer seedha yahan bheje",              badge:"Free",        c:C.terra, f:C.terraL},
        ].map((r,i)=>(
          <Card key={i} style={{padding:"9px 11px",display:"flex",alignItems:"center",gap:9}}>
            <div style={{width:34,height:34,borderRadius:9,background:r.f,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
              <r.icon size={15} color={r.c}/>
            </div>
            <div style={{flex:1}}>
              <div style={{display:"flex",alignItems:"center",gap:5,marginBottom:1}}>
                <span style={{fontSize:11,fontWeight:700,color:C.blk}}>{r.label}</span>
                <Tag color={r.c} bg={r.f}>{r.badge}</Tag>
              </div>
              <div style={{fontSize:9,color:C.gray}}>{r.sub}</div>
            </div>
            <ChevronRight size={13} color={C.gray}/>
          </Card>
        ))}
      </div>
    </div>
    <BottomNav/>
  </Phone>
);

// Screen 2 — QR Receive + Voice Alert on payment
const Q3_Screen_QRReceive = () => (
  <Phone h={600}>
    <StatusBar light/>
    <div style={{flex:1,background:C.teal,display:"flex",flexDirection:"column"}}>
      <div style={{padding:"10px 16px 14px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <Logo sz={12}/>
        <Bell size={16} color="rgba(255,255,255,0.7)"/>
      </div>
      {/* QR code area */}
      <div style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",padding:"0 20px"}}>
        <div style={{fontSize:11,fontWeight:700,color:"rgba(255,255,255,0.7)",marginBottom:4}}>Payment Receive Karein</div>
        <div style={{fontSize:13,fontWeight:900,color:C.wht,marginBottom:16}}>rohit@spiceupi</div>
        {/* QR box */}
        <div style={{background:C.wht,borderRadius:16,padding:14,marginBottom:14}}>
          <div style={{width:120,height:120,display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:2}}>
            {Array.from({length:49},(_,i)=>{
              const corners=[0,1,2,3,4,5,6,7,13,14,21,28,35,42,43,44,45,46,47,48];
              const inner=[8,9,10,11,15,16,17,18,23,24,25,26,30,31,32,33,37,38,39,40];
              const filled=corners.includes(i)||inner.includes(i)||(i%3===0&&!corners.includes(i));
              return <div key={i} style={{background:filled?"#080809":"transparent",borderRadius:1}}/>;
            })}
          </div>
        </div>
        <div style={{fontSize:10,color:"rgba(255,255,255,0.6)",marginBottom:20}}>Customer apna UPI app khole aur scan kare</div>

        {/* Voice alert toggle */}
        <div style={{width:"100%",background:"rgba(255,255,255,0.12)",borderRadius:12,padding:"12px 14px",border:"1px solid rgba(255,255,255,0.2)",marginBottom:12}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <div style={{display:"flex",alignItems:"center",gap:8}}>
              <div style={{width:32,height:32,borderRadius:8,background:"rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <Bell size={15} color={C.wht}/>
              </div>
              <div>
                <div style={{fontSize:11,fontWeight:700,color:C.wht}}>Voice Alert</div>
                <div style={{fontSize:9.5,color:"rgba(255,255,255,0.6)"}}>Payment aane par awaaz aayegi</div>
              </div>
            </div>
            <div style={{width:36,height:20,borderRadius:10,background:C.grn,display:"flex",alignItems:"center",padding:"2px 3px",justifyContent:"flex-end"}}>
              <div style={{width:16,height:16,borderRadius:"50%",background:C.wht}}/>
            </div>
          </div>
        </div>

        {/* Payment received toast — simulated */}
        <div style={{width:"100%",background:C.grn,borderRadius:12,padding:"12px 14px",border:`1px solid ${C.grnL}`}}>
          <div style={{display:"flex",alignItems:"center",gap:8}}>
            <CheckCircle size={18} color={C.wht}/>
            <div>
              <div style={{fontSize:11,fontWeight:800,color:C.wht}}>₹320 mila!</div>
              <div style={{fontSize:9.5,color:"rgba(255,255,255,0.8)"}}>Ramu Kirana · abhi · Voice alert bheja</div>
            </div>
          </div>
        </div>
      </div>
      <BottomNav/>
    </div>
  </Phone>
);

// Screen 3 — Passbook / P2PM Transaction History
const Q3_Screen_Passbook = () => {
  const txns = [
    {name:"Suresh — Customer",  amt:"+₹480", time:"Aaj 3:12 PM",  type:"in",  via:"QR"},
    {name:"Ramu Kirana",        amt:"+₹320", time:"Aaj 11:45 AM", type:"in",  via:"QR"},
    {name:"Supplier — Ramesh",  amt:"-₹850", time:"Aaj 9:20 AM",  type:"out", via:"UPI"},
    {name:"Ghar ka kiraya",     amt:"-₹300", time:"Kal 8:00 PM",  type:"out", via:"UPI"},
    {name:"Deepak — Customer",  amt:"+₹150", time:"Kal 5:30 PM",  type:"in",  via:"QR"},
    {name:"Petrol",             amt:"-₹200", time:"Kal 2:10 PM",  type:"out", via:"Scan"},
  ];
  return (
    <Phone h={600}>
      <StatusBar/>
      <AppBar/>
      <div style={{flex:1,overflowY:"auto",background:C.bg,display:"flex",flexDirection:"column"}}>
        {/* Summary strip */}
        <div style={{margin:"8px 12px",background:C.teal,borderRadius:14,padding:"12px 14px"}}>
          <div style={{fontSize:10,fontWeight:700,color:"rgba(255,255,255,0.65)",marginBottom:6}}>Is hafte ka hisaab</div>
          <div style={{display:"flex",justifyContent:"space-between"}}>
            {[{l:"Aaya",v:"₹8,500",c:C.wht},{l:"Gaya",v:"₹5,200",c:C.amber},{l:"Bacha",v:"₹3,300",c:C.grnL}].map((x,i)=>(
              <div key={i} style={{textAlign:"center"}}>
                <div style={{fontSize:9,color:"rgba(255,255,255,0.55)"}}>{x.l}</div>
                <div style={{fontSize:14,fontWeight:800,color:x.c}}>{x.v}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Filter chips */}
        <div style={{display:"flex",gap:6,padding:"4px 12px 8px",overflowX:"auto"}}>
          {["Sab","Aaya (In)","Gaya (Out)","QR","UPI"].map((f,i)=>(
            <div key={i} style={{padding:"4px 10px",borderRadius:16,background:i===0?C.teal:C.grayL,flexShrink:0}}>
              <span style={{fontSize:10,fontWeight:i===0?700:400,color:i===0?C.wht:C.gray}}>{f}</span>
            </div>
          ))}
        </div>
        {/* Transactions */}
        <div style={{padding:"0 12px",display:"flex",flexDirection:"column",gap:6}}>
          <div style={{fontSize:10,fontWeight:700,color:C.gray,marginBottom:2}}>Aaj</div>
          {txns.map((t,i)=>(
            <div key={i}>
              {i===3 && <div style={{fontSize:10,fontWeight:700,color:C.gray,marginTop:6,marginBottom:6}}>Kal</div>}
              <Card style={{padding:"9px 11px",display:"flex",alignItems:"center",gap:10}}>
                <div style={{width:32,height:32,borderRadius:"50%",background:t.type==="in"?C.grnL:C.terraL,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                  {t.type==="in"
                    ? <ChevronRight size={14} color={C.grn} style={{transform:"rotate(-90deg)"}}/>
                    : <Send size={13} color={C.terra}/>
                  }
                </div>
                <div style={{flex:1}}>
                  <div style={{fontSize:11,fontWeight:600,color:C.blk}}>{t.name}</div>
                  <div style={{display:"flex",gap:5,alignItems:"center",marginTop:1}}>
                    <span style={{fontSize:9,color:C.gray}}>{t.time}</span>
                    <span style={{fontSize:8.5,fontWeight:600,background:C.grayL,color:C.gray,padding:"0px 5px",borderRadius:3}}>{t.via}</span>
                  </div>
                </div>
                <div style={{fontSize:13,fontWeight:800,color:t.type==="in"?C.grn:C.blk}}>{t.amt}</div>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <BottomNav active="passbook"/>
    </Phone>
  );
};

// Screen 4 — Cash Load + Cash Withdrawal (Adhikari)
const Q3_Screen_CashServices = () => (
  <Phone h={600}>
    <StatusBar/>
    <AppBar/>
    <div style={{flex:1,overflowY:"auto",background:C.bg,display:"flex",flexDirection:"column",padding:"12px",gap:10}}>
      <div style={{fontSize:13,fontWeight:800,color:C.blk,marginBottom:2}}>Cash — Yahan Bhi Chalta Hai</div>
      <div style={{fontSize:10.5,color:C.gray,marginBottom:4}}>Digital aur cash — dono free. Adhikari ke zariye.</div>

      {/* Cash Load card */}
      <Card style={{border:`1.5px solid ${C.tealL}`}}>
        <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}>
          <div style={{width:38,height:38,borderRadius:10,background:C.tealXL,display:"flex",alignItems:"center",justifyContent:"center"}}>
            <Plus size={18} color={C.teal}/>
          </div>
          <div>
            <div style={{fontSize:12,fontWeight:800,color:C.teal}}>Cash Load — FREE</div>
            <div style={{fontSize:10,color:C.gray}}>Adhikari ke paas jao, cash do</div>
          </div>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:6}}>
          {["Ghar ke paas Adhikari dhundho","Cash amount batao","10 seconds mein account mein","Zero loading charge — kabhi bhi"].map((s,i)=>(
            <div key={i} style={{display:"flex",gap:8,alignItems:"center"}}>
              <div style={{width:18,height:18,borderRadius:"50%",background:C.teal,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                <span style={{fontSize:9,fontWeight:800,color:C.wht}}>{i+1}</span>
              </div>
              <span style={{fontSize:10.5,color:C.blk}}>{s}</span>
            </div>
          ))}
        </div>
        <Btn full bg={C.teal} style={{marginTop:10}}>Adhikari Dhundho</Btn>
      </Card>

      {/* Cash Withdrawal card */}
      <Card style={{border:`1.5px solid ${C.grnL}`}}>
        <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}>
          <div style={{width:38,height:38,borderRadius:10,background:C.grnL,display:"flex",alignItems:"center",justifyContent:"center"}}>
            <Coins size={18} color={C.grn}/>
          </div>
          <div>
            <div style={{fontSize:12,fontWeight:800,color:C.grn}}>Cash Withdrawal — FREE</div>
            <div style={{fontSize:10,color:C.gray}}>Account se cash — kabhi bhi</div>
          </div>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:6}}>
          {["Adhikari ke paas jao","Withdrawal amount request karo","OTP verify karo — 30 seconds","Cash haath mein — zero charge"].map((s,i)=>(
            <div key={i} style={{display:"flex",gap:8,alignItems:"center"}}>
              <div style={{width:18,height:18,borderRadius:"50%",background:C.grn,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                <span style={{fontSize:9,fontWeight:800,color:C.wht}}>{i+1}</span>
              </div>
              <span style={{fontSize:10.5,color:C.blk}}>{s}</span>
            </div>
          ))}
        </div>
        <Btn full bg={C.grn} style={{marginTop:10}}>Cash Nikaalo</Btn>
      </Card>

      {/* Promise strip */}
      <div style={{background:C.teal,borderRadius:12,padding:"10px 14px",textAlign:"center"}}>
        <div style={{fontSize:11,fontWeight:800,color:C.wht}}>"Paisa aao, paisa jao — sab free."</div>
        <div style={{fontSize:9.5,color:"rgba(255,255,255,0.65)",marginTop:2}}>Zero loading · Zero withdrawal · Zero transfer charges</div>
      </div>
    </div>
    <BottomNav/>
  </Phone>
);

// ═══════════════════════════════════════════════════════════════
// Q4 — POST-AOB TRANSACTIONS
// ═══════════════════════════════════════════════════════════════

// Reusable nudge card component (in-app nudge / carousel card style)
const NudgeCard = ({title,body,cta,ctaBg=C.grn,icon:Icon,iconBg=C.tealXL,iconColor=C.teal,tag,tagColor=C.terra}) => (
  <div style={{background:C.wht,borderRadius:14,padding:"14px",border:`1px solid ${C.cream}`,marginBottom:0}}>
    <div style={{display:"flex",alignItems:"flex-start",gap:10}}>
      <div style={{width:38,height:38,borderRadius:10,background:iconBg,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
        <Icon size={18} color={iconColor}/>
      </div>
      <div style={{flex:1}}>
        {tag && <div style={{fontSize:8.5,fontWeight:700,color:tagColor,background:`${tagColor}18`,padding:"2px 7px",borderRadius:4,display:"inline-block",marginBottom:4}}>{tag}</div>}
        <div style={{fontSize:12,fontWeight:800,color:C.blk,marginBottom:3}}>{title}</div>
        <div style={{fontSize:10.5,color:C.gray,lineHeight:1.5,marginBottom:10}}>{body}</div>
        <Btn bg={ctaBg} sm>{cta}</Btn>
      </div>
    </div>
  </div>
);

// Screen 1 — Activation Journey home (Zone A + B)
const Q4_Screen_ActivationJourney = () => {
  const steps = [
    {n:1,label:"Add Money",    icon:Plus,       desc:"Pehla paisa daalein — ₹100 bhi chalega",done:true, cta:"Done ✓"},
    {n:2,label:"Send/Receive", icon:Send,       desc:"Kisi ko bhejo ya receive karo via UPI",  done:true, cta:"Done ✓"},
    {n:3,label:"Scan & Pay",   icon:QrCode,     desc:"Kisi bhi QR pe scan karo — instantly",  done:false,cta:"Karein →"},
    {n:4,label:"Goal Save",    icon:PiggyBank,  desc:"Roz ki Bachat ya Emergency Fund banao",  done:false,cta:"Set Karo →"},
    {n:5,label:"Cross Sell",   icon:TrendingUp, desc:"FD, RD, Gold — wallet se seedha invest", done:false,cta:"Dekhein →"},
  ];
  return (
    <Phone h={600}>
      <StatusBar/>
      <AppBar/>
      <div style={{flex:1,overflowY:"auto",background:C.bg,padding:"12px",display:"flex",flexDirection:"column",gap:10}}>
        {/* Zone A — activation progress bar */}
        <div style={{background:C.teal,borderRadius:14,padding:"12px 14px"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
            <div style={{fontSize:12,fontWeight:700,color:C.wht}}>Aapka Safar</div>
            <div style={{fontSize:10,color:"rgba(255,255,255,0.6)"}}>2 / 5 complete</div>
          </div>
          <div style={{display:"flex",gap:3,marginBottom:6}}>
            {steps.map((s,i)=>(
              <div key={i} style={{flex:1,height:5,borderRadius:3,background:s.done?"rgba(255,255,255,0.9)":"rgba(255,255,255,0.2)"}}/>
            ))}
          </div>
          <div style={{fontSize:9.5,color:"rgba(255,255,255,0.65)"}}>5-5-50 Challenge: 5 txn karo → ₹25 cashback</div>
        </div>
        {/* Zone B — next best action */}
        <div style={{background:C.terraL,borderRadius:14,padding:"12px 14px",border:`1.5px solid ${C.terra}`}}>
          <div style={{fontSize:9.5,fontWeight:700,color:C.terra,marginBottom:4}}>NEXT STEP</div>
          <div style={{fontSize:13,fontWeight:800,color:C.blk,marginBottom:2}}>Scan & Pay karein abhi</div>
          <div style={{fontSize:10.5,color:C.gray,marginBottom:10}}>Kisi bhi QR pe scan karo — 2 seconds mein ho jaata hai.</div>
          <Btn full bg={C.terra}>Scan Karo</Btn>
        </div>
        {/* Steps list */}
        {steps.map((step,i)=>(
          <Card key={i} style={{padding:"9px 11px",display:"flex",alignItems:"center",gap:9,opacity:step.done?0.55:1,border:step.done?`1px solid ${C.cream}`:`1.5px solid ${C.tealL}`}}>
            <div style={{width:30,height:30,borderRadius:"50%",background:step.done?C.grnL:C.tealXL,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
              {step.done ? <CheckCircle size={15} color={C.grn}/> : <step.icon size={14} color={C.teal}/>}
            </div>
            <div style={{flex:1}}>
              <div style={{display:"flex",alignItems:"center",gap:5,marginBottom:1}}>
                <span style={{fontSize:11,fontWeight:700,color:C.blk}}>{step.n}. {step.label}</span>
                {!step.done && <Tag color={C.terra} bg={C.terraL}>+₹ reward</Tag>}
              </div>
              <div style={{fontSize:9,color:C.gray}}>{step.desc}</div>
            </div>
            <span style={{fontSize:10,fontWeight:700,color:step.done?C.grn:C.teal,whiteSpace:"nowrap"}}>{step.cta}</span>
          </Card>
        ))}
      </div>
      <BottomNav/>
    </Phone>
  );
};

// Screen 2 — Specific nudges per use-case (in-app notification carousel)
const Q4_Screen_NudgesPerUseCase = () => {
  const [active, setActive] = useState(0);
  const nudges = [
    {
      usecase:"1. Add Money",
      color:C.teal, bg:C.tealXL,
      phone:(
        <div style={{flex:1,background:C.bg,display:"flex",flexDirection:"column"}}>
          <AppBar/>
          {/* in-app banner nudge */}
          <div style={{position:"relative",flex:1,overflow:"hidden"}}>
            <div style={{position:"absolute",top:8,left:8,right:8,background:C.wht,borderRadius:14,padding:"12px",boxShadow:"0 6px 20px rgba(0,0,0,0.12)",border:`1px solid ${C.cream}`,zIndex:10}}>
              <div style={{display:"flex",gap:9,alignItems:"flex-start"}}>
                <div style={{width:30,height:30,borderRadius:8,background:C.teal,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                  <Plus size={15} color={C.wht}/>
                </div>
                <div style={{flex:1}}>
                  <div style={{fontSize:10,fontWeight:700,color:C.teal,marginBottom:1}}>SPICEUPI · now</div>
                  <div style={{fontSize:11,fontWeight:800,color:C.blk,marginBottom:2}}>Aapka account khaali hai.</div>
                  <div style={{fontSize:10,color:C.gray,marginBottom:8}}>₹100 bhi daalein — safar shuru ho jaata hai. Free mein. Kabhi bhi nikaalein.</div>
                  <Btn bg={C.grn} sm>Paisa Daalein</Btn>
                </div>
              </div>
            </div>
            <div style={{marginTop:90,padding:"8px 12px",display:"flex",flexDirection:"column",gap:8}}>
              <div style={{background:C.teal,borderRadius:12,padding:"12px 14px",opacity:0.3}}>
                <div style={{fontSize:10,color:"rgba(255,255,255,0.7)"}}>Aaj tak ka total balance</div>
                <div style={{fontSize:22,fontWeight:900,color:C.wht}}>₹0</div>
              </div>
              <div style={{background:C.grayL,borderRadius:12,padding:"10px",height:60,opacity:0.2}}/>
            </div>
          </div>
          <BottomNav/>
        </div>
      )
    },
    {
      usecase:"2. Send / Receive Money",
      color:C.grn, bg:C.grnL,
      phone:(
        <div style={{flex:1,background:C.bg,display:"flex",flexDirection:"column"}}>
          <AppBar/>
          <div style={{position:"relative",flex:1}}>
            <div style={{position:"absolute",top:8,left:8,right:8,background:C.wht,borderRadius:14,padding:"12px",boxShadow:"0 6px 20px rgba(0,0,0,0.12)",border:`1px solid ${C.cream}`,zIndex:10}}>
              <div style={{display:"flex",gap:9,alignItems:"flex-start"}}>
                <div style={{width:30,height:30,borderRadius:8,background:C.grnL,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                  <Send size={14} color={C.grn}/>
                </div>
                <div style={{flex:1}}>
                  <div style={{fontSize:10,fontWeight:700,color:C.grn,marginBottom:1}}>SPICEUPI · now</div>
                  <div style={{fontSize:11,fontWeight:800,color:C.blk,marginBottom:2}}>Pehla transfer karo — ₹1 bhi chalega.</div>
                  <div style={{fontSize:10,color:C.gray,marginBottom:8}}>Kisi bhi UPI handle pe bhejo — 2 seconds mein. Free mein. 24x7.</div>
                  <div style={{display:"flex",gap:6}}>
                    <Btn bg={C.grn} sm>Send Karo</Btn>
                    <Btn bg={C.tealXL} color={C.teal} sm>QR Se Lein</Btn>
                  </div>
                </div>
              </div>
            </div>
            <div style={{marginTop:90,padding:"8px 12px",opacity:0.25,display:"flex",flexDirection:"column",gap:7}}>
              <div style={{background:C.teal,borderRadius:12,padding:"12px 14px",height:70}}/>
              <div style={{background:C.grayL,borderRadius:12,padding:"10px",height:50}}/>
            </div>
          </div>
          <BottomNav/>
        </div>
      )
    },
    {
      usecase:"3. Scan & Pay",
      color:C.terra, bg:C.terraL,
      phone:(
        <div style={{flex:1,background:C.bg,display:"flex",flexDirection:"column"}}>
          <AppBar/>
          <div style={{position:"relative",flex:1}}>
            <div style={{position:"absolute",top:8,left:8,right:8,background:C.wht,borderRadius:14,padding:"12px",boxShadow:"0 6px 20px rgba(0,0,0,0.12)",border:`1.5px solid ${C.terraL}`,zIndex:10}}>
              <div style={{display:"flex",gap:9,alignItems:"flex-start"}}>
                <div style={{width:30,height:30,borderRadius:8,background:C.terraL,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                  <QrCode size={14} color={C.terra}/>
                </div>
                <div style={{flex:1}}>
                  <div style={{fontSize:10,fontWeight:700,color:C.terra,marginBottom:1}}>SCAN & PAY CHALLENGE</div>
                  <div style={{fontSize:11,fontWeight:800,color:C.blk,marginBottom:2}}>Pehla QR scan karo aaj.</div>
                  <div style={{fontSize:10,color:C.gray,marginBottom:6}}>Kisi bhi dukaan ka QR — petrol pump, kirana, medical. 2 seconds mein done.</div>
                  {/* Progress pip */}
                  <div style={{display:"flex",gap:4,marginBottom:8}}>
                    {[1,2,3,4,5].map(n=><div key={n} style={{flex:1,height:4,borderRadius:2,background:n<=2?C.terra:C.cream}}/>)}
                  </div>
                  <div style={{fontSize:9,color:C.gray,marginBottom:8}}>2/5 txn ho gaye — ₹25 cashback 3 txn door</div>
                  <Btn bg={C.terra} sm>Scan Karo</Btn>
                </div>
              </div>
            </div>
            <div style={{marginTop:120,padding:"8px 12px",opacity:0.2,display:"flex",flexDirection:"column",gap:7}}>
              <div style={{background:C.teal,borderRadius:12,height:70}}/>
              <div style={{background:C.grayL,borderRadius:12,height:50}}/>
            </div>
          </div>
          <BottomNav/>
        </div>
      )
    },
    {
      usecase:"4. Goal Save",
      color:"#2C5F3E", bg:"#E5F0E9",
      phone:(
        <div style={{flex:1,background:C.bg,display:"flex",flexDirection:"column"}}>
          <AppBar/>
          <div style={{position:"relative",flex:1}}>
            <div style={{position:"absolute",top:8,left:8,right:8,background:C.wht,borderRadius:14,padding:"12px",boxShadow:"0 6px 20px rgba(0,0,0,0.12)",border:`1.5px solid ${C.grnL}`,zIndex:10}}>
              <div style={{display:"flex",gap:9,alignItems:"flex-start"}}>
                <div style={{width:30,height:30,borderRadius:8,background:C.grnL,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                  <PiggyBank size={14} color={C.grn}/>
                </div>
                <div style={{flex:1}}>
                  <div style={{fontSize:10,fontWeight:700,color:C.grn,marginBottom:1}}>SAVINGS CHALLENGE · +₹25</div>
                  <div style={{fontSize:11,fontWeight:800,color:C.blk,marginBottom:2}}>₹500 aaya. ₹50 bachao?</div>
                  <div style={{fontSize:10,color:C.gray,marginBottom:8}}>Roz ki Bachat mein daalein — mahine mein ₹1,500 apne aap. Pata bhi nahi chalta.</div>
                  <div style={{display:"flex",gap:6}}>
                    <Btn bg={C.grn} sm>Haan, Daalein</Btn>
                    <Btn bg={C.grayL} color={C.gray} sm>Baad Mein</Btn>
                  </div>
                </div>
              </div>
            </div>
            <div style={{marginTop:110,padding:"8px 12px",opacity:0.2,display:"flex",flexDirection:"column",gap:7}}>
              <div style={{background:C.teal,borderRadius:12,height:70}}/>
              <div style={{background:C.grayL,borderRadius:12,height:50}}/>
            </div>
          </div>
          <BottomNav/>
        </div>
      )
    },
    {
      usecase:"5. Cross Sell (FD / Gold / RD)",
      color:C.gold, bg:C.goldL,
      phone:(
        <div style={{flex:1,background:C.bg,display:"flex",flexDirection:"column"}}>
          <AppBar/>
          <div style={{flex:1,overflowY:"auto",padding:"8px 12px",display:"flex",flexDirection:"column",gap:8}}>
            <div style={{fontSize:11,fontWeight:700,color:C.blk}}>Paise Badhao</div>
            {/* Carousel-style product cards */}
            {[
              {icon:Building2, label:"Fixed Deposit",      sub:"₹3,840 pe ₹267 extra — guaranteed", badge:"8% return", c:C.gold,  f:C.goldL},
              {icon:RefreshCw, label:"Recurring Deposit",  sub:"₹500/month — saal mein ₹6,500+",   badge:"Guaranteed",c:C.teal,  f:C.tealXL},
              {icon:Star,      label:"Digital Gold",       sub:"₹10 se shuru — jab chahein nikaalein",badge:"Live price",c:C.amber, f:C.amberL},
            ].map((p,i)=>(
              <Card key={i} style={{padding:"10px 12px",display:"flex",alignItems:"center",gap:10,border:`1.5px solid ${p.f}`}}>
                <div style={{width:36,height:36,borderRadius:10,background:p.f,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                  <p.icon size={16} color={p.c}/>
                </div>
                <div style={{flex:1}}>
                  <div style={{display:"flex",alignItems:"center",gap:5,marginBottom:2}}>
                    <span style={{fontSize:11,fontWeight:700,color:C.blk}}>{p.label}</span>
                    <Tag color={p.c} bg={p.f}>{p.badge}</Tag>
                  </div>
                  <div style={{fontSize:9.5,color:C.gray}}>{p.sub}</div>
                </div>
                <Btn sm bg={C.grn}>Shuru</Btn>
              </Card>
            ))}
            <div style={{background:C.teal,borderRadius:12,padding:"10px 12px",textAlign:"center",marginTop:4}}>
              <div style={{fontSize:10.5,fontWeight:800,color:C.wht}}>Bank se zyada return — guarantee ke saath.</div>
              <div style={{fontSize:9.5,color:"rgba(255,255,255,0.65)",marginTop:2}}>Suryoday Bank · Jar · Fixerra ke saath</div>
            </div>
          </div>
          <BottomNav active="bachat"/>
        </div>
      )
    },
  ];

  return (
    <Phone h={600}>
      <StatusBar/>
      <div style={{flex:1,background:C.bg,display:"flex",flexDirection:"column"}}>
        {/* Use-case selector tabs */}
        <div style={{display:"flex",overflowX:"auto",gap:5,padding:"8px 10px",borderBottom:`1px solid ${C.cream}`,flexShrink:0}}>
          {nudges.map((n,i)=>(
            <button key={i} onClick={()=>setActive(i)} style={{
              padding:"5px 10px",borderRadius:8,border:"none",cursor:"pointer",flexShrink:0,
              background:active===i?nudges[i].color:"transparent",
              fontWeight:active===i?700:400,fontSize:10,
              color:active===i?C.wht:C.gray,
            }}>{n.usecase}</button>
          ))}
        </div>
        {nudges[active].phone}
      </div>
    </Phone>
  );
};

// Screen 3 — 5-5-50 Challenge
const Q4_Screen_5550Challenge = () => (
  <Phone h={600}>
    <StatusBar light/>
    <div style={{flex:1,background:C.tealD,display:"flex",flexDirection:"column",padding:"20px"}}>
      <div style={{width:48,height:48,borderRadius:14,background:"rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:12}}>
        <Gift size={24} color={C.wht}/>
      </div>
      <Tag color={C.terra} bg={C.terraL} style={{display:"inline-block",marginBottom:8}}>5-5-50 CHALLENGE</Tag>
      <div style={{fontSize:20,fontWeight:900,color:C.wht,lineHeight:1.3,marginBottom:6}}>₹50 pao —<br/>sirf 5 din mein.</div>
      <div style={{fontSize:11,color:"rgba(255,255,255,0.65)",marginBottom:16}}>5 txns in 5 days + 1 savings goal = ₹50 account mein.</div>
      {[
        {task:"5 UPI transactions karo",reward:"₹25",days:"5 din mein",n:1},
        {task:"1 savings goal set karo", reward:"₹25",days:"30 din mein",n:2},
      ].map((c,i)=>(
        <div key={i} style={{background:"rgba(255,255,255,0.1)",borderRadius:12,padding:"12px 14px",marginBottom:8,display:"flex",justifyContent:"space-between",alignItems:"center",border:"1px solid rgba(255,255,255,0.15)"}}>
          <div>
            <div style={{fontSize:11,fontWeight:700,color:C.wht,marginBottom:1}}>{c.n}. {c.task}</div>
            <div style={{fontSize:9.5,color:"rgba(255,255,255,0.5)"}}>{c.days}</div>
          </div>
          <div style={{textAlign:"right"}}>
            <div style={{fontSize:20,fontWeight:900,color:C.amber}}>{c.reward}</div>
            <div style={{fontSize:9,color:"rgba(255,255,255,0.45)"}}>cashback</div>
          </div>
        </div>
      ))}
      <div style={{background:"rgba(255,255,255,0.08)",borderRadius:12,padding:"10px 12px",textAlign:"center",marginBottom:14}}>
        <div style={{fontSize:11,fontWeight:800,color:C.wht}}>Seedha aapke Spice account mein. Real cash. Not points.</div>
      </div>
      <Btn full bg={C.terra} style={{marginTop:"auto"}}>Challenge Shuru Karein</Btn>
    </div>
  </Phone>
);


// ═══════════════════════════════════════════════════════════════
// TABS
// ═══════════════════════════════════════════════════════════════

const TABS = [
  {
    id:"q1", label:"Q1 · Bank Positioning",
    color:C.teal, bg:C.tealXL,
    headline:"How to position the wallet akin to Bank for Savings",
    subline:"Text · Visuals · Graphic UI · Features",
    screens:[
      {title:"Home Screen — 2 Real Estate Zones", tag:"Zone A + Zone B", comp:Q1_Screen_Home, note:"Zone A (top, before balance): Trust strip — Yes Bank Escrow, RBI, NPCI. Zone B (mid-page): Feature parity card showing the 4 free actions. Both zones rotate by context."},
      {title:"Trust / Safety Full Screen", tag:"On tap of Zone A", comp:Q1_Screen_TrustModal, note:"Tapping Zone A opens this — the full trust statement. Yes Bank escrow, RBI PPI license, NPCI certification, free everything. This is the 'why should I trust this' answer."},
      {title:"Bank vs SpiceUPI Comparison", tag:"Positioning reference", comp:Q1_Screen_BankComparison, note:"Side-by-side table positioning Spice against a bank. Every row says the same thing: bank feature exists here, and it's better. Tone: factual confidence, not boast."},
    ],
  },
  {
    id:"q2", label:"Q2 · Wallet → Wealth",
    color:C.grn, bg:C.grnL,
    headline:"How to ensure users start using wallet money for wealth crosssell",
    subline:"Textual nudges · Visuals · GUI · Features",
    screens:[
      {title:"Home — Idle Balance Nudge", tag:"Zone A + Zone B", comp:Q2_Screen_WealthFlow, note:"Zone A becomes a wealth prompt when balance is idle >7 days. Zone B shows the specific idle amount with rupee returns — never percentages. 'FD mein lagao — ₹267 extra' is more compelling than '7% p.a.'"},
      {title:"Transaction Success → Crosssell", tag:"Post-txn nudge", comp:Q2_Screen_PostTxnNudge, note:"Every transaction success screen is a crosssell moment. The user has just demonstrated they are active. Offer FD with a specific amount. Choices: Haan (commit) or Baad mein (defer, not dismiss)."},
      {title:"Hafte ka Hisaab → Invest Nudge", tag:"Passbook — weekly", comp:Q2_Screen_Hisaab, note:"The Hisaab surface is the highest-intent moment for crosssell. User can see exactly how much they saved — then offer FD and Gold as the next logical step. Specific ₹ amounts throughout."},
    ],
  },
  {
    id:"q3", label:"Q3 · Daily Earnings Flow",
    color:C.terra, bg:C.terraL,
    headline:"Convince self-employed micro-business to bring daily earnings into wallet",
    subline:"QR receive · Voice alert · Passbook · Cash load & withdrawal",
    screens:[
      {title:"Home — Earnings Identity", tag:"Zone A + Zone B", comp:Q3_Screen_EarningsHome, note:"Zone A: 'Aaj ki kamai — seedha yahan aaye'. Zone B: live Aaj ka Hisaab (Aaya/Gaya/Bacha updated in real time). Three load routes below — QR, Bank transfer, Adhikari cash — all FREE."},
      {title:"QR Receive + Voice Alert", tag:"P2PM receive flow", comp:Q3_Screen_QRReceive, note:"QR screen with Voice Alert toggle — 'Payment aane par awaaz aayegi'. P2PM users like kirana/auto drivers need audible confirmation when serving customers. Payment received toast shown in green. UPI ID prominently displayed."},
      {title:"Passbook — P2PM History", tag:"Transaction history", comp:Q3_Screen_Passbook, note:"Passbook redesigned for P2PM — filters by Aaya/Gaya/QR/UPI. Weekly Aaya-Gaya-Bacha summary at top. Each transaction shows channel (QR / UPI / Scan). Separates business income from personal spending visually."},
      {title:"Cash Load + Withdrawal", tag:"Adhikari cash services", comp:Q3_Screen_CashServices, note:"Both cash load and cash withdrawal in one screen — both FREE. 4-step flows for each. The promise strip at bottom: 'Zero loading · Zero withdrawal · Zero transfer charges'. This is the core differentiator for cash-economy users."},
    ],
  },
  {
    id:"q4", label:"Q4 · Post-AOB Transactions",
    color:"#7A5C1E", bg:C.goldL,
    headline:"Drive each of the 5 use-cases post onboarding with specific nudges",
    subline:"Add Money · Send/Receive · Scan & Pay · Goal Save · Cross Sell",
    screens:[
      {title:"Activation Journey — Home", tag:"Zone A + Zone B", comp:Q4_Screen_ActivationJourney, note:"Zone A: progress bar showing 2/5 steps done. Zone B: always shows the single 'Next Step' with one CTA. Steps list below with reward tags on incomplete steps. Completed steps fade — celebrate progress clearly."},
      {title:"Nudges Per Use-Case", tag:"5 specific in-app nudges", comp:Q4_Screen_NudgesPerUseCase, note:"Each of the 5 use-cases gets its own specific in-app nudge — shown as a banner on the home screen. Select a use-case using the tab bar at the top. Each nudge has a specific ₹ amount, one CTA, and a distinct visual treatment. Scan & Pay nudge shows the 5-5-50 progress bar inline."},
      {title:"5-5-50 Challenge", tag:"Rewards activation", comp:Q4_Screen_5550Challenge, note:"₹25 for 5 txns in 5 days + ₹25 for 1 savings goal = ₹50 total. Real cash, not points. Shown on D+1 post-install and resurfaces via push notification after each completed step."},
    ],
  },
];

// ═══════════════════════════════════════════════════════════════
// SCREEN VIEWER
// ═══════════════════════════════════════════════════════════════
const ScreenViewer = ({screens,color,bg}) => {
  const [idx,setIdx] = useState(0);
  const s = screens[idx];
  return (
    <div style={{display:"flex",gap:24,alignItems:"flex-start",flexWrap:"wrap"}}>
      {/* Screen selector */}
      <div style={{display:"flex",flexDirection:"column",gap:6,width:180,flexShrink:0}}>
        {screens.map((sc,i)=>(
          <button key={i} onClick={()=>setIdx(i)} style={{
            textAlign:"left",padding:"8px 10px",borderRadius:9,cursor:"pointer",
            background:i===idx?bg:"transparent",border:i===idx?`1px solid ${color}20`:"1px solid transparent",
          }}>
            <div style={{fontSize:11,fontWeight:i===idx?700:400,color:i===idx?color:"var(--color-text-secondary)",lineHeight:1.3,marginBottom:2}}>{sc.title}</div>
            <span style={{fontSize:9,background:i===idx?`${color}15`:C.grayL,color:i===idx?color:C.gray,padding:"1px 6px",borderRadius:4,fontWeight:600}}>{sc.tag}</span>
          </button>
        ))}
      </div>
      {/* Phone */}
      <s.comp/>
      {/* Annotation */}
      <div style={{flex:1,minWidth:200,display:"flex",flexDirection:"column",gap:12,paddingTop:8}}>
        <div>
          <div style={{fontSize:15,fontWeight:800,color:"var(--color-text-primary)",marginBottom:4}}>{s.title}</div>
          <Tag color={color} bg={bg}>{s.tag}</Tag>
        </div>
        <Annotation label="What this screen does" color={color}>{s.note}</Annotation>
        {/* Real estate callout if applicable */}
        {s.note.includes("Zone A") && (
          <Annotation label="Real Estate Zones" color={C.gray}>
            <strong>Zone A</strong> — Strip above balance. Rotates by context: trust, earnings, rewards, wealth. Always 1 message, 1 CTA.<br/><br/>
            <strong>Zone B</strong> — Mid-page card. Deeper narrative: idle balance nudge, activation progress, hisaab insight. Personalised by user state.
          </Annotation>
        )}
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════
// MAIN APP
// ═══════════════════════════════════════════════════════════════
function SpiceUPIPositioning() {
  const [tab,setTab] = useState("q1");
  const activeTab = TABS.find(t=>t.id===tab);

  return (
    <div style={{padding:"20px 24px",minHeight:"100vh"}}>
      {/* Header */}
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:20,paddingBottom:14,borderBottom:"0.5px solid var(--color-border-tertiary)"}}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <Logo sz={15}/>
          <span style={{fontSize:11,color:"var(--color-text-secondary)"}}>Core Positioning Prototype · FY 26-27</span>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:6}}>
          <div style={{width:6,height:6,borderRadius:"50%",background:C.terra}}/>
          <div style={{width:6,height:6,borderRadius:"50%",background:C.teal}}/>
          <div style={{width:6,height:6,borderRadius:"50%",background:C.amber}}/>
          <span style={{fontSize:9.5,color:"var(--color-text-secondary)",marginLeft:4}}>Two real estate zones on every home screen</span>
        </div>
      </div>

      {/* Tabs */}
      <div style={{display:"flex",gap:4,marginBottom:20,flexWrap:"wrap"}}>
        {TABS.map(t=>(
          <button key={t.id} onClick={()=>setTab(t.id)} style={{
            padding:"8px 14px",borderRadius:10,cursor:"pointer",border:"none",
            background:tab===t.id?t.bg:"var(--color-background-secondary)",
            boxShadow:tab===t.id?`0 0 0 1.5px ${t.color}30`:"none",
          }}>
            <span style={{fontSize:12,fontWeight:tab===t.id?700:400,color:tab===t.id?t.color:"var(--color-text-secondary)"}}>{t.label}</span>
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div style={{marginBottom:20}}>
        <div style={{fontSize:16,fontWeight:800,color:"var(--color-text-primary)",marginBottom:4}}>{activeTab.headline}</div>
        <div style={{fontSize:11,color:"var(--color-text-secondary)",marginBottom:20}}>{activeTab.subline}</div>
        <ScreenViewer screens={activeTab.screens} color={activeTab.color} bg={activeTab.bg}/>
      </div>

      {/* Footer */}
      <div style={{marginTop:24,paddingTop:12,borderTop:"0.5px solid var(--color-border-tertiary)",fontSize:10,color:"var(--color-text-secondary)",display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:4}}>
        <span>4 questions · 9 screens · 2 real estate zones · Palette 1 · SpiceUPI FY 26-27</span>
        <span>Zone A = above balance · Zone B = mid-page card</span>
      </div>
    </div>
  );
}

window.mountReactApp = () => {
  const container = document.getElementById("react-root");
  if (!container.hasChildNodes()) {
    const root = createRoot(container);
    root.render(<SpiceUPIPositioning />);
  }
};
