/* experiment2.js – Unaufmerksamkeitsblindheit (Screens 8–11) */
let e2Frame=null, e2Running=false, e2Start=null;
const E2_DURATION=20000;
const DOTS=[];
let cW=600,cH=320;
const REDX={x:-80,y:0,vx:7.5,vy:1.8,visible:false,done:false}; // one-time triangle
let whiteFlashCount=0;

function initDots(w,h){
  DOTS.length=0;
  for(let i=0;i<23;i++){
    DOTS.push({x:Math.random()*w,y:Math.random()*h,r:i<14?13:11,white:i<14,
      vx:(Math.random()-.5)*3.4,vy:(Math.random()-.5)*3.4,flash:false,ft:0});
  }
}

function startExp2(){
  const cv=document.getElementById('exp2Canvas'); if(!cv)return;
  cW=cv.offsetWidth||600; cH=Math.round(cW*(320/600));
  cv.width=cW; cv.height=cH;
  initDots(cW,cH);
  REDX.x=-80; REDX.y=cH*0.38; REDX.visible=false; REDX.done=false;
  e2Running=true; e2Start=null; whiteFlashCount=0;
  document.getElementById('exp2TimerFill').style.width='0%';
  if(e2Frame) cancelAnimationFrame(e2Frame);
  e2Frame=requestAnimationFrame(e2Loop);
  startBG('audio/sfx/background_music.mp3',0.10);
}

function stopExp2(){e2Running=false; if(e2Frame) cancelAnimationFrame(e2Frame);}

function e2Loop(ts){
  if(!e2Running)return;
  if(!e2Start) e2Start=ts;
  const el=ts-e2Start;
  const cv=document.getElementById('exp2Canvas'); if(!cv)return;
  const ctx=cv.getContext('2d');
  ctx.fillStyle='#161616'; ctx.fillRect(0,0,cW,cH);
  // subtle grid
  ctx.strokeStyle='rgba(255,255,255,0.025)'; ctx.lineWidth=1;
  for(let gx=0;gx<cW;gx+=40){ctx.beginPath();ctx.moveTo(gx,0);ctx.lineTo(gx,cH);ctx.stroke();}
  for(let gy=0;gy<cH;gy+=40){ctx.beginPath();ctx.moveTo(0,gy);ctx.lineTo(cW,gy);ctx.stroke();}
  // random flash
  if(Math.random()<0.04){const d=DOTS[Math.floor(Math.random()*DOTS.length)];d.flash=true;d.ft=10;if(d.white)whiteFlashCount++;}
  // dots
  DOTS.forEach(d=>{
    d.x+=d.vx; d.y+=d.vy;
    if(d.x<d.r||d.x>cW-d.r){d.vx*=-1;d.x=Math.max(d.r,Math.min(cW-d.r,d.x));}
    if(d.y<d.r||d.y>cH-d.r){d.vy*=-1;d.y=Math.max(d.r,Math.min(cH-d.r,d.y));}
    if(d.ft>0)d.ft--; else d.flash=false;
    ctx.beginPath(); ctx.arc(d.x,d.y,d.r,0,Math.PI*2);
    if(d.white){ctx.fillStyle=d.flash?'#ffffff':'rgba(255,255,255,0.82)';ctx.shadowColor=d.flash?'#fff':'transparent';ctx.shadowBlur=d.flash?18:0;}
    else{ctx.fillStyle=d.flash?'#666':'rgba(55,55,55,0.9)';ctx.shadowBlur=0;}
    ctx.fill(); ctx.shadowBlur=0;
  });
  // Grey triangle after 8s – only once
  if(el>=4500&&!REDX.visible&&!REDX.done){REDX.visible=true;REDX.x=-60;REDX.y=cH*0.38;}
  if(REDX.visible){
    REDX.x+=REDX.vx;
    REDX.y+=REDX.vy;
    ctx.save();
    ctx.globalAlpha=0.65;
    ctx.fillStyle='#999999';
    const s=17; // smaller than white dots
    ctx.beginPath();
    ctx.moveTo(REDX.x, REDX.y-s);
    ctx.lineTo(REDX.x+s, REDX.y+s);
    ctx.lineTo(REDX.x-s, REDX.y+s);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
    // Stop after it exits screen - no loop
    if(REDX.x>cW+60){
      REDX.visible=false;
      REDX.done=true;
    }
  }
  // timer
  const pct=Math.min(el/E2_DURATION,1);
  const tb=document.getElementById('exp2TimerFill');
  if(tb)tb.style.width=(pct*100)+'%';
  if(el>=E2_DURATION){stopExp2();document.getElementById('exp2AnswerSection').style.display='flex';return;}
  e2Frame=requestAnimationFrame(e2Loop);
}

function submitExp2(){
  stopExp2();
  document.getElementById('exp2AnswerSection').style.display='flex';
}

function confirmExp2Answer(){
  // Store answer silently, move to yes/no screen
  goTo(10);
}

function handleYesNo(saw){
  document.getElementById('yesNoSection').style.display='none';
  const r=document.getElementById('yesNoResponse');
  r.style.display='flex';
  playSFX('surprise');
  if(saw){
    r.innerHTML=`<div class="fact-box b2"><span class="fi">👁️</span><p><strong>Gut beobachtet!</strong> Du hast das graue Dreieck wahrgenommen – das ist seltener als man denkt. Viele sind so fokussiert auf das Zählen, dass sie es komplett übersehen.</p></div>`;
  } else {
    r.innerHTML=`<div class="fact-box b2"><span class="fi">🦍</span><p><strong>Klassisch!</strong> Du hast das rote X <em>nicht</em> gesehen – obwohl es deutlich sichtbar über den Bildschirm gewandert ist. Das ist <span class="hl2">Unaufmerksamkeitsblindheit</span> in Aktion!</p></div>`;
  }
  setTimeout(()=>{document.getElementById('yesNoContinue').style.display='inline-block';},800);
}
