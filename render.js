// Phone screen renderers
function balanceCard(amt, sub) {
  return `<div class="balance-card"><div class="balance-label">Spice UPI Balance</div><div class="balance-amount">₹${amt}</div><div class="balance-sub">${sub}</div></div>`;
}
function quickActions() {
  return `<div class="quick-actions"><button class="qa-btn"><span class="qa-icon">📤</span>Bhejo</button><button class="qa-btn"><span class="qa-icon">📥</span>Mangao</button><button class="qa-btn"><span class="qa-icon">📱</span>Recharge</button><button class="qa-btn"><span class="qa-icon">💡</span>Bills</button></div>`;
}
function nudge(cls, title, text, cta) {
  return `<div class="nudge-card ${cls}"><div class="nudge-title">${title}</div><div class="nudge-text">${text}</div>${cta?`<button class="nudge-cta">${cta}</button>`:''}</div>`;
}
function progressDots(filled, total) {
  let d=''; for(let i=0;i<total;i++) d+=`<span class="dot ${i<filled?'filled':''}"></span>`; return `<div class="progress-dots">${d}</div>`;
}

const R = {
  home_zero() {
    return balanceCard('0.00','Paisa yahan lao — safe hai') + quickActions() +
      nudge('teal','Paisa yahan lao.','Free mein. Kahin se bhi.\nBank se. Cash se. Jaise chahein.\nYahan se seedha kisi ko bhi bhejo.','Pehla Paisa Daalein') +
      nudge('','Zero lag. Zero wait.','Aapka naya UPI — blink mein complete.','Try Karo');
  },
  home_rewards() {
    return balanceCard('1,250','Aaj ki Kamai — ₹450') + quickActions() +
      `<div class="nudge-card terracotta"><div class="nudge-title">5-5-50 Challenge</div>${progressDots(3,5)}<div class="nudge-text">3 of 5 transactions done<br>₹25 cashback — 2 transactions door.</div><button class="nudge-cta">Abhi Bhejo</button></div>` +
      nudge('','Spice UPI ready hai.','India ka sabse fast UPI experience.','');
  },
  home_funded() {
    return balanceCard('3,450','Interest: ₹8 is mahine') + quickActions() +
      nudge('teal','₹3,450 yahan baithe hain.','Inhe badhao — ₹240 extra saal mein,\nguarantee ke saath.','Savings Shuru Karein') +
      nudge('','Paisa mat baithne do.','FD mein lagao. Bank se better return. 2 minutes mein.','FD Shuru Karein');
  },
  home_saver() {
    return balanceCard('5,200','Bachat: ₹12,400 | Interest earned: ₹340') + quickActions() +
      `<div class="nudge-card teal"><div class="nudge-title">Is hafte ₹1,200 bacha 🎉</div><div class="nudge-text">Accha chal raha hai. Pichle hafte se ₹300 zyada.</div><button class="nudge-cta">Hisaab Dekho</button></div>` +
      nudge('gold','Dhanteras aa raha hai.','₹100 ka sona abhi lo — ₹10 se shuru.','Sona Kharido');
  },
  speed_processing() {
    return `<div class="txn-screen"><div class="txn-label">Bhej rahe hain...</div><div class="txn-timer timer-counting" id="live-timer">0.0s</div><div class="txn-label" style="color:var(--teal);font-weight:600">Spice UPI — India ka fastest</div></div>`;
  },
  speed_success() {
    return `<div class="txn-screen"><div class="txn-done">Done. ✓</div><div class="txn-amount">₹500 — Ramesh ji ko mila.</div><div class="txn-speed">0.8 seconds mein.</div><div style="margin-top:24px"><button class="txn-btn primary">View Receipt</button><button class="txn-btn secondary">Send Again</button></div></div>`;
  },
  speed_stats() {
    return `<div class="screen-header"><div class="screen-header-title">📊 Your UPI Stats</div></div>` +
      `<div class="hisaab-card"><div class="hisaab-row"><div class="hisaab-col"><div class="hisaab-label">Payments</div><div class="hisaab-value blue">47</div></div><div class="hisaab-col"><div class="hisaab-label">Avg Speed</div><div class="hisaab-value" style="color:var(--terracotta)">0.9s</div></div><div class="hisaab-col"><div class="hisaab-label">Received</div><div class="hisaab-value green">32</div></div></div><div class="hisaab-insight">Is Hafte 47 payments kiye — Average 0.9 seconds mein.<br>Spice UPI pe — India ka fastest 🚀</div></div>`;
  },
  rewards_progress() {
    return balanceCard('1,250','5-5-50 Challenge Active!') + quickActions() +
      `<div class="nudge-card terracotta"><div class="nudge-title">5-5-50 Challenge</div>${progressDots(4,5)}<div class="nudge-text">4 of 5 done.<br><strong>One more and ₹25 is yours.</strong></div><button class="nudge-cta">Send Another</button></div>`;
  },
  rewards_milestone() {
    return `<div class="celebrate"><div class="celebrate-emoji">🎉</div><h2>5 transactions. Done.</h2><p>₹25 aa rahe hain aapke Spice account mein.</p><p style="font-weight:700;color:var(--teal)">Aaj hi. Seedha yahan.</p><button class="txn-btn primary" style="margin-top:20px">Check Balance</button><p style="margin-top:16px;font-size:12px;color:var(--gray-500)">Savings goal set karein — aur ₹25 milenge.</p></div>`;
  },
  rewards_ledger() {
    return `<div class="screen-header"><div class="screen-header-title">🏆 Aapki Rewards</div></div>` +
      `<div class="ledger-row"><div class="ledger-left"><div class="ledger-icon" style="background:#E8F5E9">💰</div><div><div class="ledger-name">Cashback — 5-txn challenge</div><div class="ledger-date">12 Jun 2026</div></div></div><div class="ledger-amount credit">+₹25</div></div>` +
      `<div class="ledger-row"><div class="ledger-left"><div class="ledger-icon" style="background:#E8F5E9">🎯</div><div><div class="ledger-name">Savings Goal Bonus</div><div class="ledger-date">28 Jun 2026</div></div></div><div class="ledger-amount credit">+₹25</div></div>` +
      `<div class="hisaab-card" style="margin-top:12px"><div style="text-align:center"><div class="hisaab-label">Total Rewards This Year</div><div class="hisaab-value green" style="font-size:28px">₹50</div></div></div>` +
      nudge('teal','Aur kamao!','7-day streak banao — Spice Points kamao.','How to Earn More');
  },
  bank_onboard() {
    return `<div class="onboard-screen"><div class="onboard-icon">🏦</div><h2>Aapka Spice UPI Account ready hai.</h2><p>Yeh sirf wallet nahi hai.<br>Yeh aapka pehla real UPI account hai — jahan paisa aata hai, rukta hai, aur badhta hai.</p><button class="txn-btn primary" style="margin-top:24px;background:var(--white);color:var(--teal)">Apna Account Explore Karein</button></div>`;
  },
  bank_carousel() {
    const slides = [
      {bg:'var(--teal)',h:'Bank account? Abhi aapke haath mein hai.',p:'Spice UPI Account — digital bank.\nBina branch. Bina line. Bina wait.'},
      {bg:'var(--terracotta)',h:'Interest? Yahan bhi milta hai.',p:'Paisa rakho — paisa badhao.\nRoz thoda. Saal mein bahut.'},
      {bg:'var(--teal-light)',h:'Passbook? Yeh raha.',p:'Hafte ka Hisaab — Aaya, Gaya, Bacha.\nSab ek jagah. Sab clear.'},
      {bg:'var(--terracotta-dark)',h:'Bank manager? Aapka Adhikari hai na.',p:'Koi bhi sawaal, koi bhi pareshaani — woh hain.'}
    ];
    let html = `<div class="screen-header"><div class="screen-header-title">4 Wajah</div></div><div class="story-carousel" id="storyCarousel">`;
    slides.forEach(s => { html += `<div class="story-slide" style="background:${s.bg};color:#fff"><h3>${s.h}</h3><p>${s.p}</p></div>`; });
    html += `</div><div class="story-dots">${slides.map((_,i)=>`<div class="story-dot ${i===0?'active':''}" data-i="${i}"></div>`).join('')}</div>`;
    return html;
  },
  bank_interest() {
    return `<div class="screen-header"><div class="screen-header-title">💰 Interest — Real Rupees</div></div>` +
      `<div class="nudge-card teal"><div class="nudge-title">Aapke ₹1,000 pe</div><div class="nudge-text" style="font-size:28px;font-weight:900;margin:8px 0">₹8 is mahine</div><div class="nudge-text">Kuch kiye bina. Apne aap.</div></div>` +
      `<div class="hisaab-card"><div class="hisaab-row"><div class="hisaab-col"><div class="hisaab-label">Wallet Float</div><div class="hisaab-value blue">₹8/mo</div></div><div class="hisaab-col"><div class="hisaab-label">FD (Suryoday)</div><div class="hisaab-value green">₹65/yr</div></div><div class="hisaab-col"><div class="hisaab-label">Gold</div><div class="hisaab-value" style="color:var(--gold)">↑ Market</div></div></div></div>` +
      nudge('','Aapke ₹3,450 yahan hain.','Inhe FD mein lagao.\n₹240 extra — guarantee ke saath.\n2 minutes mein shuru karein.','FD Shuru Karein');
  },
  load_empty() {
    return `<div class="balance-card" style="background:var(--gray-100);color:var(--black);text-align:center;padding:32px 20px"><div style="font-size:48px;margin-bottom:12px">💳</div><div style="font-size:18px;font-weight:700">Paisa yahan lao.</div><div style="font-size:14px;color:var(--gray-500);margin-top:8px">Free mein. Kahin se bhi.<br>Bank se. Cash se. Jaise chahein.</div><button class="txn-btn primary" style="margin-top:16px">Pehla Paisa Daalein</button></div>` + quickActions() +
      nudge('teal','₹100 bhi daalein','Safar shuru ho jaata hai.\nFree mein. Jab chahein nikaalein.','Paisa Daalein');
  },
  load_first() {
    return `<div class="celebrate"><div class="celebrate-emoji">🎊</div><h2>Pehla paisa aa gaya!</h2><p>₹500 safe hai — Spice UPI mein.</p><p style="color:var(--teal);font-weight:600">Free mein aaya. Free mein jaayega.</p><div style="text-align:left;margin:20px auto;max-width:240px"><p>Ab yahan se:</p><p>✅ Kisi ko bhi bhejo</p><p>✅ Bills pay karo</p><p>✅ Bachat shuru karo</p></div><button class="txn-btn primary">Explore Karein</button></div>`;
  },
  load_options() {
    return `<div class="screen-header"><div class="screen-header-title">💰 Paisa Daalein</div></div>` +
      `<div class="savings-product"><div class="sp-icon">🏦</div><div class="sp-info"><div class="sp-name">Bank se Add Karein</div><div class="sp-desc">Apne bank se seedha — 10 sec mein. Free.</div></div><div class="sp-amount">→</div></div>` +
      `<div class="savings-product"><div class="sp-icon">🧑‍💼</div><div class="sp-info"><div class="sp-name">Adhikari Cash Load</div><div class="sp-desc">Cash hai? Adhikari ke paas jao.</div></div><div class="sp-amount">→</div></div>` +
      `<div class="savings-product"><div class="sp-icon">🔄</div><div class="sp-info"><div class="sp-name">Auto-Save (Coming Soon)</div><div class="sp-desc">Jo paisa aaya — seedha yahan aaye.</div></div><div class="sp-amount" style="color:var(--gray-300)">→</div></div>`;
  },
  save_daily() {
    return balanceCard('2,450','₹800 aaya aaj') + quickActions() +
      `<div class="nudge-card" style="background:var(--cream)"><div class="nudge-title">₹800 aaya.</div><div class="nudge-text">₹50 Roz ki Bachat mein daalein?<br>Mahine mein ₹1,500 — apne aap.</div><div style="display:flex;gap:8px;margin-top:10px"><button class="nudge-cta" style="background:var(--teal);color:#fff">Haan, Daalein</button><button class="nudge-cta outline" style="border-color:var(--gray-300);color:var(--gray-500)">Baad Mein</button></div></div>`;
  },
  save_hisaab() {
    return `<div class="screen-header"><div class="screen-header-title">📒 Hafte ka Hisaab</div></div><div style="padding:0 16px;font-size:12px;color:var(--gray-500);margin-bottom:8px">5 May — 11 May 2026</div>` +
      `<div class="hisaab-card"><div class="hisaab-row"><div class="hisaab-col"><div class="hisaab-label">Aaya</div><div class="hisaab-value green">₹8,500</div></div><div class="hisaab-col"><div class="hisaab-label">Gaya</div><div class="hisaab-value red">₹6,200</div></div><div class="hisaab-col"><div class="hisaab-label">Bacha</div><div class="hisaab-value blue">₹2,300</div></div></div><div style="display:flex;gap:4px;margin:8px 0"><div style="flex:85;height:10px;background:var(--green);border-radius:5px"></div><div style="flex:62;height:10px;background:var(--terracotta);border-radius:5px"></div></div><div class="hisaab-insight">₹2,300 bacha is hafte. Pichle hafte se ₹400 zyada.<br>Isse FD mein rakhein? 🎯</div></div>` +
      nudge('teal','₹2,300 bacha hai.','FD mein lagao — ₹160 extra, guarantee ke saath.','FD Mein Rakhein');
  },
  save_journey() {
    const steps = [
      {day:'Day 1',icon:'📥',title:'₹2,000 aaya aaj.',text:'Yahan safe hai.',color:'var(--teal)'},
      {day:'Day 7',icon:'📊',title:'Pehle hafte mein ₹8,500 aaya.',text:'Roz ki Bachat shuru karo — ₹50 roz.\nMahine mein ₹1,500 apne aap.',color:'var(--teal-light)'},
      {day:'Day 30',icon:'🎯',title:'Pehle mahine mein ₹3,200 bachaaya.',text:'Aise hi chala toh saal mein ₹38,400.',color:'var(--terracotta)'},
      {day:'Day 90',icon:'🏆',title:'3 mahine mein ₹9,600 bachaaya.',text:'FD mein lagao — ₹670 extra.\nBank se better. Guarantee ke saath.',color:'var(--gold)'}
    ];
    return `<div class="screen-header"><div class="screen-header-title">📈 Savings Journey</div></div>` +
      steps.map(s=>`<div class="nudge-card" style="border-left:4px solid ${s.color}"><div style="font-size:11px;font-weight:700;color:${s.color};margin-bottom:4px">${s.icon} ${s.day}</div><div class="nudge-title">${s.title}</div><div class="nudge-text">${s.text}</div></div>`).join('');
  },
  channels_push() {
    return `<div class="screen-header"><div class="screen-header-title">🔔 Push Notifications</div></div>` +
      channelCard('push','D+1 — Post Install','Spice UPI ready hai.\nIndia ka sabse fast UPI experience.\nApna pehla payment karo — 2 seconds mein dekho.','Send ₹1 Now') +
      channelCard('push','Mid-Challenge','3 of 5 ho gaye.\n₹25 cashback — sirf 2 transactions door.','Abhi Bhejo') +
      channelCard('push','Monday Hisaab','Hafte ka Hisaab ready hai.\nAaya: ₹8,500  Gaya: ₹6,200  Bacha: ₹2,300','Dekho');
  },
  channels_whatsapp() {
    return `<div class="screen-header"><div class="screen-header-title">💬 WhatsApp</div></div>` +
      channelCard('whatsapp','Post First Transaction','Ramesh ji,\n\nAapne Spice UPI pe pehla payment kiya.\n₹500 — sirf 0.8 seconds mein.\n\nAage bhi aise hi rahega. Promise.\n\n— Spice UPI Team','') +
      channelCard('whatsapp','Reward Received','Ramesh ji,\n\n₹25 aapke Spice UPI account mein aa gaye.\n\nYeh aapka reward hai — 5 transactions complete karne ka.\n\nSavings goal set karein — aur ₹25 milenge.\n\n— Spice UPI Team','') +
      channelCard('whatsapp','Adhikari — Post Cash Load','Ramesh ji,\n\nAapka ₹2,000 Spice UPI Account mein aa gaya.\n\nAb yeh paisa:\n  ✅ Safe hai\n  ✅ Kahin bhi bhej sakte ho — free mein\n  ✅ Thoda interest bhi milega\n\n— Aapka Adhikari, Spice UPI','');
  },
  channels_sms() {
    return `<div class="screen-header"><div class="screen-header-title">📱 SMS</div></div>` +
      channelCard('sms','App Update','Spice UPI naya ho gaya.\nFaster payments. Better savings. Naya look.\nUpdate karo: spiceupi.app/update\nPehle txn pe ₹10 tak cashback.','') +
      channelCard('sms','First Load Prompt (D+5)','Spice UPI account ready hai. Paisa nahi aaya abhi tak.\nFree mein load karein — bank se ya Adhikari ke zariye.\nPehle load pe ₹10 cashback.','') +
      channelCard('sms','Reactivation','Spice UPI pe ₹25 cashback wait kar raha hai.\n5 transactions karo — seedha account mein.\nspiceupi.app/open','');
  },
  
  // --- NEW CORE STRATEGY SCREENS ---
  core_q1_bank() {
    return `<div class="nudge-card" style="background:#E8F5E9; color:#1B5E20; border:1px solid #A5D6A7; margin:16px 16px 0; display:flex; align-items:center; gap:12px;">
      <div style="font-size:24px;">🛡️</div>
      <div><div style="font-size:12px; font-weight:800; text-transform:uppercase; letter-spacing:0.5px; margin-bottom:2px">Bank-Grade Security</div><div style="font-size:11px; opacity:0.9">Powered by Yes Bank Escrow Account<br>NPCI & RBI Licensed PPI Wallet</div></div>
    </div>` +
    balanceCard('3,450', 'Safe. Secure. Always yours.') + quickActions() +
    `<div class="nudge-card teal">
      <div class="nudge-title">Bank se behatar. Digital Bank jaisa.</div>
      <div class="nudge-text" style="margin-top:8px;">
        <ul style="list-style:none; padding:0; margin:0; line-height:1.6">
          <li>✅ Apna paisa free mein add karein</li>
          <li>✅ Cash free mein nikaalein (Adhikari via)</li>
          <li>✅ Kisi ko bhi UPI bhejien</li>
        </ul>
      </div>
    </div>`;
  },

  core_q2_wealth() {
    return `<div class="alert-strip" style="background:#FFF3E0; border-color:#FFB74D; color:#E65100; margin-top:16px;">
      <span style="font-size:18px">📉</span>
      <div>Aapka ₹5,000 pichle 15 din se khali hai. Isne ₹12 interest kho diya.</div>
    </div>` +
    balanceCard('5,000', 'Aaj ki Kamai — ₹1,200') + quickActions() +
    `<div class="screen-header"><div class="screen-header-title">💸 Paisa Kaam Pe Lagayein</div></div>` +
    `<div class="savings-product" style="border-left:4px solid var(--teal)">
      <div class="sp-icon" style="background:#E0F2F1">🏦</div>
      <div class="sp-info"><div class="sp-name">Bachat Khata (Suryoday)</div><div class="sp-desc">7% Guarantee. Bank se zyada.</div></div>
      <button class="nudge-cta" style="margin:0; padding:6px 12px; font-size:11px">Save ₹500</button>
    </div>` +
    `<div class="savings-product" style="border-left:4px solid var(--gold)">
      <div class="sp-icon" style="background:#FFF8E1"> ط </div>
      <div class="sp-info"><div class="sp-name">Sona (Jar)</div><div class="sp-desc">₹10 se shuru karein.</div></div>
      <button class="nudge-cta" style="margin:0; padding:6px 12px; font-size:11px">Buy Sona</button>
    </div>`;
  },

  core_q3_p2pm() {
    return `<div class="nudge-card terracotta" style="margin-top:16px; display:flex; align-items:center; gap:12px;">
      <div style="font-size:28px">🔊</div>
      <div><div class="nudge-title">Har Payment ki Awaaz</div><div class="nudge-text">Voice alerts on hain. Hisaab pakka.</div></div>
    </div>` +
    balanceCard('8,400', 'Din bhar mein 42 payments aaye') +
    `<div class="hisaab-card">
      <div class="hisaab-row">
        <div class="hisaab-col"><div class="hisaab-label">Aaj Aaya (QR)</div><div class="hisaab-value green">₹3,200</div></div>
        <div class="hisaab-col"><div class="hisaab-label">Aaj Gaya (Suppliers)</div><div class="hisaab-value red">₹1,500</div></div>
      </div>
      <div class="hisaab-insight">Din bhar QR se payment lo. Sham ko apne Adhikari se Cash nikaal lo. <strong style="color:var(--teal)">Bilkul free.</strong></div>
    </div>`;
  },

  core_q4_aob() {
    return `<div class="nudge-card" style="background:var(--black); color:var(--white); margin-top:16px;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
        <div class="nudge-title" style="margin:0">Activation Journey</div>
        <div style="font-size:12px; font-weight:700; color:var(--gold)">2 / 5 Done</div>
      </div>
      ${progressDots(2,5)}
    </div>` +
    `<div class="screen-header"><div class="screen-header-title">Next Steps</div></div>` +
    `<div class="savings-product" style="opacity:0.5"><div class="sp-icon">✅</div><div class="sp-info"><div class="sp-name">1. Add Money</div><div class="sp-desc">Done!</div></div></div>` +
    `<div class="savings-product" style="opacity:0.5"><div class="sp-icon">✅</div><div class="sp-info"><div class="sp-name">2. Send / Rec Money</div><div class="sp-desc">Done!</div></div></div>` +
    `<div class="savings-product" style="border:1.5px solid var(--teal)"><div class="sp-icon">📷</div><div class="sp-info"><div class="sp-name">3. Scan and Pay</div><div class="sp-desc">Kisi bhi QR pe pay karein</div></div><button class="nudge-cta" style="margin:0; padding:6px 12px; font-size:11px">Pay</button></div>` +
    `<div class="savings-product"><div class="sp-icon">🎯</div><div class="sp-info"><div class="sp-name">4. Goal Save</div><div class="sp-desc">Roz ₹50 ki bachat</div></div></div>` +
    `<div class="savings-product"><div class="sp-icon">💡</div><div class="sp-info"><div class="sp-name">5. Cross-sell</div><div class="sp-desc">Koi bhi bill pay karein</div></div></div>`;
  }
};

function channelCard(type, title, body, cta) {
  return `<div class="channel-card"><div class="channel-header ${type}">${type==='push'?'🔔':type==='whatsapp'?'💬':'📱'} ${title}</div><div class="channel-body">${body}</div>${cta?`<div class="channel-cta-row"><span class="channel-cta-btn">${cta}</span></div>`:''}</div>`;
}
