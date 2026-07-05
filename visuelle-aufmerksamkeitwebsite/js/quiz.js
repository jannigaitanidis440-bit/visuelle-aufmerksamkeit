/* quiz.js – Wissenstest & Countdown & Konfetti */

// ── COUNTDOWN (Screen 5.0) ──
function startCountdown(){
  const wrap=document.getElementById('countdownWrap');
  const num=document.getElementById('countdownNum');
  const startBtn=document.getElementById('quizStartBtn');
  if(!wrap||!num)return;
  wrap.style.display='flex'; startBtn.style.display='none';
  playSFX('motivation');
  let count=3;
  num.textContent=count;
  const iv=setInterval(()=>{
    count--;
    if(count>0){num.style.animation='none';void num.offsetWidth;num.style.animation='countPop 0.4s ease';num.textContent=count;}
    else{clearInterval(iv);wrap.style.display='none';startBtn.style.display='inline-block';}
  },900);
}

// ── QUIZ DATA (exakt wie im Drehbuch) ──
const QUIZ=[
  { q:'Was beschreibt Veränderungsblindheit?',
    opts:['A) Man sieht keine Farben mehr','B) Man übersieht Veränderungen bei kurzer Unterbrechung des Blicks','C) Man kann sich nichts merken','D) Man sieht Dinge doppelt'],
    correct:1,
    okText:'Richtig! Veränderungsblindheit beschreibt die Schwierigkeit, Veränderungen in einer Szene zu entdecken, wenn diese während einer kurzen Unterbrechung auftreten. (Rensink et al., 1997 / Goldstein & Cacciamani, 2023, S. 161)',
    badText:'Leider falsch. Richtig wäre B: Man übersieht Veränderungen bei kurzer Unterbrechung des Blicks. (Rensink et al., 1997 / Goldstein & Cacciamani, 2023, S. 161)' },
  { q:'Welche Forscher führten das berühmte Gorilla-Experiment durch?',
    opts:['A) Rensink & Posner','B) Broadbent & Cherry','C) Simons & Chabris','D) Treisman & Gelade'],
    correct:2,
    okText:'Genau! Simons & Chabris (1999) zeigten, dass fast 50% der Versuchspersonen einen Mann im Gorillakostüm übersahen, weil sie auf das Zählen von Ballwechseln fokussiert waren.',
    badText:'Leider falsch. Richtig wäre C: Simons & Chabris (1999). Sie führten das berühmte Gorilla-Experiment durch. (Goldstein & Cacciamani, 2023, S. 160)' },
  { q:'Eine Fahrerin schaut kurz auf ihr Navi und übersieht dabei einen Fußgänger. Welches Phänomen erklärt das?',
    opts:['A) Veränderungsblindheit','B) Unaufmerksamkeitsblindheit','C) Schlechtes Sehvermögen','D) Reaktionsverzögerung'],
    correct:1,
    okText:'Richtig! Die Fahrerin hat ihre Aufmerksamkeit vollständig auf das Navi gerichtet – der Fußgänger liegt außerhalb ihres Aufmerksamkeits-Spotlights. Das ist Unaufmerksamkeitsblindheit im Alltag.',
    badText:'Leider falsch. Richtig wäre B: Unaufmerksamkeitsblindheit. Die Fahrerin ist so fokussiert auf das Navi, dass sie den Fußgänger nicht wahrnimmt.' },
];

let answered=[false,false,false];

function initQuiz(){
  answered=[false,false,false];
  QUIZ.forEach((q,i)=>{
    const qEl=document.getElementById('quizQ'+i);
    const optsEl=document.getElementById('quizOpts'+i);
    const fb=document.getElementById('quizFb'+i);
    const nb=document.getElementById('quizNext'+i);
    if(qEl) qEl.textContent=q.q;
    if(optsEl){ optsEl.innerHTML='';
      q.opts.forEach((opt,j)=>{
        // Staggered appearance
        const btn=document.createElement('button');
        btn.className='quiz-opt'; btn.textContent=opt;
        btn.style.opacity='0'; btn.style.transform='translateX(-10px)';
        btn.style.transition=`opacity 0.3s ${j*0.15}s, transform 0.3s ${j*0.15}s`;
        btn.onclick=()=>answerQuiz(i,j);
        optsEl.appendChild(btn);
        setTimeout(()=>{btn.style.opacity='1';btn.style.transform='translateX(0)';},50);
      });
    }
    if(fb){fb.className='quiz-feedback';fb.textContent='';}
    if(nb) nb.style.display='none';
  });
}

function answerQuiz(qIdx,optIdx){
  if(answered[qIdx])return;
  answered[qIdx]=true;
  const q=QUIZ[qIdx];
  const opts=document.getElementById('quizOpts'+qIdx);
  const fb=document.getElementById('quizFb'+qIdx);
  const nb=document.getElementById('quizNext'+qIdx);
  Array.from(opts.children).forEach((btn,j)=>{
    btn.disabled=true;
    if(q.correct===j) btn.classList.add('correct');
    else if(j===optIdx) btn.classList.add('wrong');
  });
  const ok=optIdx===q.correct;
  playSFX(ok?'correct':'wrong');
  fb.className='quiz-feedback show '+(ok?'ok':'bad');
  fb.textContent=(ok?'✅ ':'❌ ')+(ok?q.okText:q.badText);
  if(nb) nb.style.display='inline-block';
}

// ── CONFETTI ──
function launchConfetti(){
  const colors=['#c8f04a','#4af0c8','#f0a84a','#ffffff','#f06060','#a84af0'];
  for(let i=0;i<80;i++){
    setTimeout(()=>{
      const el=document.createElement('div');
      el.className='confetti-piece';
      el.style.left=Math.random()*100+'vw';
      el.style.background=colors[Math.floor(Math.random()*colors.length)];
      el.style.animationDuration=(Math.random()*2+1.5)+'s';
      el.style.animationDelay='0s';
      el.style.width=el.style.height=(Math.random()*10+6)+'px';
      el.style.borderRadius=Math.random()>0.5?'50%':'2px';
      document.body.appendChild(el);
      setTimeout(()=>el.remove(),4000);
    },i*30);
  }
}
