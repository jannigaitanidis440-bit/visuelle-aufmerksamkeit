/* experiment1.js – Veränderungsblindheit (Screens 5–7) */
let e1Running=false, e1Interval=null, e1ShowB=false, e1Solved=false, e1Tries=0;

function startExp1() {
  e1Solved=false; e1ShowB=false; e1Tries=0;
  document.getElementById('hintText1').textContent='Schau genau hin – klicke auf die Veränderung!';
  document.getElementById('wrongFb1').style.display='none';
  document.getElementById('changeElem').style.opacity='1';
  document.getElementById('correctMarker').style.display='none';
  if (e1Interval) clearInterval(e1Interval);
  e1Running = true;
  playSFX('tension');
  e1Interval = setInterval(()=>{
    if (!e1Running) return;
    const ov = document.getElementById('flashOverlay');
    ov.style.opacity='0.88';
    setTimeout(()=>{
      e1ShowB = !e1ShowB;
      document.getElementById('changeElem').style.opacity = e1ShowB ? '0' : '1';
      ov.style.opacity='0';
    }, 200);
  }, 1900);
}

function stopExp1() { e1Running=false; if(e1Interval) clearInterval(e1Interval); }

function handleExp1Click(e) {
  if (e1Solved) return;
  e1Tries++;
  const cont = document.getElementById('expContainer');
  const rect  = cont.getBoundingClientRect();
  const relX  = (e.clientX-rect.left)/rect.width;
  const relY  = (e.clientY-rect.top)/rect.height;
  // Ripple
  const fb = document.getElementById('clickFb1');
  fb.style.left=(e.clientX-rect.left)+'px'; fb.style.top=(e.clientY-rect.top)+'px';
  fb.classList.remove('show'); void fb.offsetWidth; fb.classList.add('show');
  // Correct zone: linkes Fenster Haus links
  if (relX>=0.03 && relX<=0.22 && relY>=0.28 && relY<=0.65) {
    e1Solved=true; stopExp1(); playSFX('correct');
    document.getElementById('changeElem').style.opacity='0';
    document.getElementById('correctMarker').style.display='block';
    document.getElementById('hintText1').innerHTML='✅ Richtig! Das linke Fenster des Hauses hat sich verändert!';
    document.getElementById('wrongFb1').style.display='none';
    setTimeout(()=>goTo(7), 1400);
  } else {
    playSFX('wrong');
    const w = document.getElementById('wrongFb1');
    w.style.display='block';
    w.textContent = e1Tries < 3 ? 'Fast! Schau nochmal genau hin.' : 'Tipp: Die Veränderung passiert ganz links im Bild, beim Haus. 🏠';
  }
}
