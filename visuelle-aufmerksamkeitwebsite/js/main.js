/* main.js – Navigation, Progress, Audio */
const SCREENS = [
  { id:'s0',  label:'Intro',                     tag:'intro', pct:0   },
  { id:'s1',  label:'Kap. 1 – Einstiegsfrage',   tag:'kap1',  pct:8   },
  { id:'s2',  label:'Kap. 1 – Interessant!',     tag:'kap1',  pct:16  },
  { id:'s3',  label:'Kap. 1 – Zwei Arten',       tag:'kap1',  pct:24  },
  { id:'s4',  label:'Kap. 1 – Überleitung',      tag:'kap1',  pct:30  },
  { id:'s5',  label:'Kap. 2 – Aufgabe',          tag:'kap2',  pct:36  },
  { id:'s6',  label:'Kap. 2 – Experiment',       tag:'kap2',  pct:42  },
  { id:'s7',  label:'Kap. 2 – Erklärung',        tag:'kap2',  pct:50  },
  { id:'s8',  label:'Kap. 3 – Aufgabe',          tag:'kap3',  pct:56  },
  { id:'s9',  label:'Kap. 3 – Animation',        tag:'kap3',  pct:60  },
  { id:'s10', label:'Kap. 3 – Eingabe',          tag:'kap3',  pct:64  },
  { id:'s11', label:'Kap. 3 – Erklärung',        tag:'kap3',  pct:70  },
  { id:'s12', label:'Kap. 4 – Wissenstest',      tag:'kap4',  pct:76  },
  { id:'s13', label:'Kap. 4 – Frage 1',          tag:'kap4',  pct:80  },
  { id:'s14', label:'Kap. 4 – Frage 2',          tag:'kap4',  pct:86  },
  { id:'s15', label:'Kap. 4 – Frage 3',          tag:'kap4',  pct:92  },
  { id:'s16', label:'Kap. 4 – Reflexion',        tag:'kap4',  pct:96  },
  { id:'s17', label:'Geschafft!',                tag:'outro', pct:100 },
];
const ACCENT_MAP = { intro:'#c8f04a', kap1:'#c8f04a', kap2:'#4af0c8', kap3:'#4af0c8', kap4:'#f0a84a', outro:'#888' };
let currentIdx = 0;

/* ── AUDIO ── */
const VO_MAP = {
  s2:'audio/voiceover/02_interessant.wav', s3:'audio/voiceover/03_arten.wav',
  s4:'audio/voiceover/04_ueberleitung.wav', s5:'audio/voiceover/05_exp1_aufgabe.wav',
  s7:'audio/voiceover/07_exp1_erklaerung.wav', s8:'audio/voiceover/08_exp2_aufgabe_intro.wav',
  s11:'audio/voiceover/11_exp2_erklaerung.wav', s15:'audio/voiceover/15_frage3.wav',
  s16:'audio/voiceover/16_reflexion.wav',
};
let currentVO = null;
let bgMusic   = null;

function playVO(id) {
  if (currentVO) { currentVO.pause(); currentVO.currentTime = 0; }
  const src = VO_MAP[id]; if (!src) return;
  currentVO = new Audio(src); currentVO.volume = 0.95;
  currentVO.play().catch(()=>{});
}

const SFX_FILES = { click:'audio/sfx/click.mp3', correct:'audio/sfx/correct.mp3', wrong:'audio/sfx/wrong.mp3', transition:'audio/sfx/transition.mp3', finish:'audio/sfx/finish.mp3', surprise:'audio/sfx/surprise.mp3', tension:'audio/sfx/tension.mp3', motivation:'audio/sfx/motivation.mp3', thinking:'audio/sfx/thinking.mp3' };
const SFX_CACHE = {};
function playSFX(name) {
  if (!SFX_FILES[name]) return;
  if (!SFX_CACHE[name]) SFX_CACHE[name] = new Audio(SFX_FILES[name]);
  const a = SFX_CACHE[name]; a.currentTime = 0; a.play().catch(()=>{});
}
function startBG(src, vol=0.12) {
  if (bgMusic) { bgMusic.pause(); }
  bgMusic = new Audio(src); bgMusic.loop = true; bgMusic.volume = vol;
  bgMusic.play().catch(()=>{});
}
function stopBG() { if (bgMusic) { bgMusic.pause(); bgMusic = null; } }

/* ── NAVIGATION ── */
function goTo(idx) {
  if (idx < 0 || idx >= SCREENS.length) return;
  document.getElementById(SCREENS[currentIdx].id)?.classList.remove('active');
  currentIdx = idx;
  const cfg = SCREENS[idx];
  document.getElementById(cfg.id)?.classList.add('active');
  document.getElementById('progressFill').style.width = cfg.pct + '%';
  document.getElementById('progressFill').style.background = ACCENT_MAP[cfg.tag]||'#c8f04a';
  document.getElementById('progressLabel').textContent = cfg.label;
  document.getElementById('progressPct').textContent   = cfg.pct + '%';
  if (idx > 0) playSFX('transition');
  playVO(cfg.id);
  // Special hooks
  if (cfg.id === 's0')  startBG('audio/sfx/background_music.wav');
  if (cfg.id === 's6')  startExp1();
  if (cfg.id === 's9')  startExp2();
  if (cfg.id === 's12') startCountdown();
  if (cfg.id === 's17') { stopBG(); launchConfetti(); playSFX('finish'); }
  window.scrollTo({ top:0, behavior:'smooth' });
}
function next() { goTo(currentIdx + 1); }

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById(SCREENS[0].id)?.classList.add('active');
});
