const SCREENS = {
  home_zero: {
    id:'home_zero', title:'New User — Zero Balance', pillar:'home',
    ctx:{ label:'HOME STATE 1', title:'New User, Zero Balance', subtitle:'Primary job: Get first load. Make it feel easy and safe.', hero:'"Paisa yahan lao. Free mein. Safe hai."', channels:['inapp','push'] }
  },
  home_rewards: {
    id:'home_rewards', title:'Active — Rewards Challenge', pillar:'home',
    ctx:{ label:'HOME STATE 2', title:'Active User, Rewards Live', subtitle:'Primary job: Drive to 5-txn completion.', hero:'"Karo 5 txn. Pao ₹25. Seedha Spice account mein."', channels:['inapp','push'] }
  },
  home_funded: {
    id:'home_funded', title:'Funded — No Savings', pillar:'home',
    ctx:{ label:'HOME STATE 3', title:'Funded User, No Savings', subtitle:'Primary job: Introduce first savings product.', hero:'"Paisa mat baithne do. Yahan raho — toh badhta hai."', channels:['inapp','banner'] }
  },
  home_saver: {
    id:'home_saver', title:'Active Saver', pillar:'home',
    ctx:{ label:'HOME STATE 4', title:'Active Saver, Full Engagement', subtitle:'Surface weekly Hisaab, reinforce streak, upsell next product.', hero:'"Roz ₹50 bachao. Saal mein ₹18,000 — aur interest alag."', channels:['inapp','banner'] }
  },
  speed_processing: {
    id:'speed_processing', title:'Transaction Processing', pillar:'speed',
    ctx:{ label:'PILLAR 1 — SPEED', title:'"Sabse Fast UPI. Blink Mein Done."', subtitle:'Make speed visible. Every transaction is a proof point.', hero:'"Bheja. Aaya. Pata bhi nahi chala."', channels:['inapp'] }
  },
  speed_success: {
    id:'speed_success', title:'Transaction Success', pillar:'speed',
    ctx:{ label:'PILLAR 1 — SPEED', title:'Transaction Success Screen', subtitle:'The transaction time is the most powerful organic sharing trigger. Users will screenshot this.', hero:'"0 second wait. 100% pakka."', channels:['inapp','whatsapp'] }
  },
  speed_stats: {
    id:'speed_stats', title:'Weekly Speed Stats', pillar:'speed',
    ctx:{ label:'PILLAR 1 — SPEED', title:'Weekly Speed Summary', subtitle:'Celebrates user activity, anchors speed claim week over week.', hero:'"UPI jo daudta hai aapke saath."', channels:['inapp','push'] }
  },
  rewards_progress: {
    id:'rewards_progress', title:'5-5-50 Progress', pillar:'rewards',
    ctx:{ label:'PILLAR 2 — REWARDS', title:'5-5-50 Challenge Progress', subtitle:'Progress bar in terracotta. Always visible first 5 days.', hero:'"Karo 5 txn. Pao ₹25. Seedha Spice account mein."', channels:['inapp','push'] }
  },
  rewards_milestone: {
    id:'rewards_milestone', title:'Reward Milestone!', pillar:'rewards',
    ctx:{ label:'PILLAR 2 — REWARDS', title:'5th Transaction — Milestone', subtitle:'Full-screen celebratory treatment. Clean animation, no clutter.', hero:'"₹25 aa rahe hain aapke Spice account mein."', channels:['inapp','whatsapp'] }
  },
  rewards_ledger: {
    id:'rewards_ledger', title:'Rewards Ledger', pillar:'rewards',
    ctx:{ label:'PILLAR 2 — REWARDS', title:'Passbook — Rewards Tab', subtitle:'Positioned as income, not a promotional section.', hero:'"Har payment pe kuch na kuch milta hai."', channels:['inapp'] }
  },
  bank_onboard: {
    id:'bank_onboard', title:'Post-KYC Account Ready', pillar:'bank',
    ctx:{ label:'PILLAR 3 — BANK EQUIVALENCE', title:'Post-KYC Onboarding', subtitle:'Must feel like a bank account opening, not a wallet confirmation.', hero:'"Bank account ki taakat. Aapki bhasha mein. Aapki jeb mein."', channels:['inapp'] }
  },
  bank_carousel: {
    id:'bank_carousel', title:'4 Wajah Carousel', pillar:'bank',
    ctx:{ label:'PILLAR 3 — BANK EQUIVALENCE', title:'"4 Wajah" Feature Parity', subtitle:'In-app story carousel. Also suitable for WhatsApp forward.', hero:'"Bank jaisa — par use bhatar."', channels:['inapp','whatsapp'] }
  },
  bank_interest: {
    id:'bank_interest', title:'Interest in Rupees', pillar:'bank',
    ctx:{ label:'PILLAR 3 — BANK EQUIVALENCE', title:'Interest in Rupees, Not %', subtitle:'Never show "6.5% p.a." — always convert to real rupees.', hero:'"Paisa mat baithne do. Yahan raho — toh badhta hai."', channels:['inapp','push'] }
  },
  load_empty: {
    id:'load_empty', title:'Zero Balance Invitation', pillar:'load',
    ctx:{ label:'PILLAR 4 — LOAD MONEY', title:'Empty Wallet State', subtitle:'Not a warning. An invitation. Warm and possibility-oriented.', hero:'"Free mein lao. Free mein nikalo. Yahan safe hai."', channels:['inapp','push','sms'] }
  },
  load_first: {
    id:'load_first', title:'First Load Celebration', pillar:'load',
    ctx:{ label:'PILLAR 4 — LOAD MONEY', title:'After First Load', subtitle:'The true onboarding moment. The user has committed real money.', hero:'"Pehla paisa aa gaya."', channels:['inapp','whatsapp'] }
  },
  load_options: {
    id:'load_options', title:'Load Money Options', pillar:'load',
    ctx:{ label:'PILLAR 4 — LOAD MONEY', title:'Three Loading Moments', subtitle:'Bank Transfer, Adhikari Cash Load, UPI Collect.', hero:'"Kahin se bhi lao. Free mein."', channels:['inapp'] }
  },
  save_daily: {
    id:'save_daily', title:'Roz ki Bachat Nudge', pillar:'save',
    ctx:{ label:'PILLAR 5 — SAVE & GROW', title:'Daily Micro-Savings Nudge', subtitle:'Bottom sheet after incoming payment. Make saving the default.', hero:'"Roz ₹50 bachao. Saal mein ₹18,000."', channels:['inapp'] }
  },
  save_hisaab: {
    id:'save_hisaab', title:'Hafte ka Hisaab', pillar:'save',
    ctx:{ label:'PILLAR 5 — SAVE & GROW', title:'Weekly Hisaab — The Anchor', subtitle:'The single most important recurring screen. Converts passive users into active savers.', hero:'"Aaya. Gaya. Bacha. Sab clear."', channels:['inapp','push'] }
  },
  save_journey: {
    id:'save_journey', title:'90-Day Savings Arc', pillar:'save',
    ctx:{ label:'PILLAR 5 — SAVE & GROW', title:'Savings Progression Journey', subtitle:'Day 1 → Day 7 → Day 30 → Day 90. Each message builds on previous.', hero:'"Roz thodi bachat. Saal mein bahut."', channels:['inapp','push','whatsapp'] }
  },
  channels_push: {
    id:'channels_push', title:'Push Notifications', pillar:'channels',
    ctx:{ label:'CHANNEL STRATEGY', title:'Push Notifications', subtitle:'Time-sensitive triggers, milestone alerts. Max 2 per day.', hero:'Personalised rupee amounts + single CTA rule.', channels:['push'] }
  },
  channels_whatsapp: {
    id:'channels_whatsapp', title:'WhatsApp Messages', pillar:'channels',
    ctx:{ label:'CHANNEL STRATEGY', title:'WhatsApp Communications', subtitle:'Cashback confirmations, Adhikari voice. Event-triggered.', hero:'Agent voice, conversational format.', channels:['whatsapp'] }
  },
  channels_sms: {
    id:'channels_sms', title:'SMS Messages', pillar:'channels',
    ctx:{ label:'CHANNEL STRATEGY', title:'SMS Communications', subtitle:'Lapsed users, app update, first load prompt. Max 2/week.', hero:'Short, action-oriented, with link.', channels:['sms'] }
  },
  // NEW STRATEGY QUESTIONS
  core_q1_bank: {
    id:'core_q1_bank', title:'Q1: Bank Positioning', pillar:'core_strategy',
    ctx:{ 
      label:'CORE STRATEGY: Q1', 
      title:'Positioning as a Bank for Savings', 
      subtitle:'Establishing absolute trust through institutional backing (Yes Bank / RBI) while offering better functional utility than a traditional bank.', 
      hero:'"Spice Account ek dum bank jaisa hai, infact bank se behatar hai."', 
      channels:['inapp'] 
    }
  },
  core_q2_wealth: {
    id:'core_q2_wealth', title:'Q2: Wealth Cross-sell', pillar:'core_strategy',
    ctx:{ 
      label:'CORE STRATEGY: Q2', 
      title:'Wallet → Cross-sell Flow', 
      subtitle:'Using loss aversion and frictionless UX to move idle wallet money into high-yield wealth products.', 
      hero:'"Aapka paisa khaali baitha hai. Isse kaam pe lagayein."', 
      channels:['inapp', 'push'] 
    }
  },
  core_q3_p2pm: {
    id:'core_q3_p2pm', title:'Q3: P2PM Daily Earnings', pillar:'core_strategy',
    ctx:{ 
      label:'CORE STRATEGY: Q3', 
      title:'Convincing the Self-Employed', 
      subtitle:'Focusing strictly on utility for shopkeepers: Audio alerts, instant reconciliation (Hisaab), and free cash liquidity via Adhikaris.', 
      hero:'"Din bhar QR se payment lo. Sham ko Adhikari se cash lo. Bilkul free."', 
      channels:['inapp', 'whatsapp'] 
    }
  },
  core_q4_aob: {
    id:'core_q4_aob', title:'Q4: Post-AOB Activation', pillar:'core_strategy',
    ctx:{ 
      label:'CORE STRATEGY: Q4', 
      title:'Ensuring Transactions Post-AOB', 
      subtitle:'Using top and middle real estate smartly to drive a 5-step transaction journey, unlocking cross-sells naturally.', 
      hero:'"Apna account fully activate karein — bas 5 aasaan steps."', 
      channels:['inapp', 'sms'] 
    }
  }
};

const PILLAR_SCREENS = {
  home: ['home_zero','home_rewards','home_funded','home_saver'],
  speed: ['speed_processing','speed_success','speed_stats'],
  rewards: ['rewards_progress','rewards_milestone','rewards_ledger'],
  bank: ['bank_onboard','bank_carousel','bank_interest'],
  load: ['load_empty','load_first','load_options'],
  save: ['save_daily','save_hisaab','save_journey'],
  channels: ['channels_push','channels_whatsapp','channels_sms'],
  core_strategy: ['core_q1_bank', 'core_q2_wealth', 'core_q3_p2pm', 'core_q4_aob']
};
