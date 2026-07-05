# Visuelle Aufmerksamkeit – Lernmodul
## Hochschule Furtwangen | Fakultät Digitale Medien
## Veranstaltung: E-Learning & Online-Learning

---

## Projektstruktur

```
visuelle-aufmerksamkeit/
├── index.html                    ← Hauptdatei (hier öffnen!)
├── README.md                     ← Diese Datei
│
├── css/
│   └── style.css                 ← Alle Styles
│
├── js/
│   ├── main.js                   ← Navigation, Progress, Audio-Manager
│   ├── experiment1.js            ← Veränderungsblindheit (Kap. 2)
│   ├── experiment2.js            ← Unaufmerksamkeitsblindheit (Kap. 3)
│   └── quiz.js                   ← Wissenstest (Kap. 4)
│
├── audio/
│   ├── voiceover/                ← Sprechertexte (MP3) → HIER EINFÜGEN
│   │   ├── 00_intro.mp3
│   │   ├── 01_einstiegsfrage.mp3
│   │   ├── 02_aufmerksamkeit.mp3
│   │   ├── 03_arten.mp3
│   │   ├── 04_uebergang_kap2.mp3
│   │   ├── 05_experiment1_aufgabe.mp3
│   │   ├── 06_experiment1_aufloesung.mp3
│   │   ├── 07_uebergang_kap3.mp3
│   │   ├── 08_experiment2_aufgabe.mp3
│   │   ├── 09_experiment2_aufloesung.mp3
│   │   ├── 10_uebergang_kap4.mp3
│   │   ├── 11_quiz.mp3
│   │   ├── 12_reflexion.mp3
│   │   └── 13_abschluss.mp3
│   │
│   └── sfx/                      ← Sound-Effekte → HIER EINFÜGEN
│       ├── background_music.mp3  ← Ruhige Hintergrundmusik (loop)
│       ├── click.mp3             ← Button-Klick
│       ├── correct.mp3           ← Richtige Antwort
│       ├── wrong.mp3             ← Falsche Antwort
│       ├── transition.mp3        ← Übergang zwischen Screens
│       └── finish.mp3            ← Abschluss-Sound
│
└── images/                       ← (optional, für spätere Erweiterungen)
    └── hfu-logo.png              ← HFU Logo für Abspann

```

---

## Voiceover-Texte (für ElevenLabs / TTS)

### 00 – Intro
"Willkommen! In diesem Lernmodul wirst du zwei faszinierende Phänomene der visuellen Aufmerksamkeit selbst erleben. Du wirst überrascht sein, wie leicht dein Gehirn dich täuschen kann. Bist du bereit?"

### 01 – Einstiegsfrage
"Bevor wir anfangen – eine kurze Frage an dich: Was schätzt du? Wie viele Dinge kannst du gleichzeitig wirklich bewusst wahrnehmen? Tippe auf deine Antwort!"

### 02 – Was ist Aufmerksamkeit?
"Aufmerksamkeit ist der Prozess, der dazu führt, dass bestimmte sensorische Informationen selektiv gegenüber anderen verarbeitet werden. Schon William James beschrieb 1890: Aufmerksamkeit bedeutet, die Inbesitznahme eines einzigen Gedankengangs durch das Bewusstsein – in klarer und lebhafter Weise."

### 03 – Zwei Arten der Aufmerksamkeit
"Wir können unsere Aufmerksamkeit auf zwei verschiedene Arten einsetzen: offen – also mit einer Bewegung des Blicks – oder verdeckt, ohne dass wir unseren Blick verändern. Stell dir vor, du bist auf einer Party und redest mit jemandem, beobachtest aber gleichzeitig unauffällig eine andere Person. Dein Blick bleibt beim Gesprächspartner – deine Aufmerksamkeit ist woanders."

### 04 – Übergang Kapitel 2
"Gleich wirst du selbst merken, wie leicht dein Gehirn etwas übersehen kann – selbst wenn es direkt vor dir passiert. Bereit für Experiment Nummer 1?"

### 05 – Experiment 1 Aufgabe
"Schau aufmerksam auf das Bild. Es wird kurz flackern – und dabei verändert sich etwas. Kannst du entdecken, was anders wird? Klicke auf die Stelle, an der du die Veränderung bemerkst!"

### 06 – Experiment 1 Auflösung
"Das linke Fenster des Hauses verschwand bei jedem Bildwechsel. Hast du es schnell gefunden? Die meisten Menschen brauchen deutlich länger als erwartet – und das liegt nicht daran, dass sie unaufmerksam sind. Es liegt an einem grundlegenden Mechanismus unseres Gehirns."

### 07 – Übergang Kapitel 3
"Im zweiten Experiment geht es um ein noch erstaunlicheres Phänomen: Unaufmerksamkeitsblindheit. Du wirst gleich eine Aufgabe bekommen – und dabei etwas komplett übersehen. Vorbereitet sein hilft übrigens nicht immer!"

### 08 – Experiment 2 Aufgabe
"Deine Aufgabe: Zähle, wie oft die weißen Punkte aufleuchten. Konzentriere dich voll darauf. Bist du bereit?"

### 09 – Experiment 2 Auflösung
"Wenn wir unsere Aufmerksamkeit voll auf eine Aufgabe richten, können wir offensichtliche Dinge komplett übersehen – selbst wenn sie direkt vor uns sind. Genau das haben Daniel Simons und Christopher Chabris 1999 in einem berühmten Experiment gezeigt: Fast die Hälfte aller Versuchspersonen übersah einen Mann im Gorillakostüm, der mitten durch eine Szene lief."

### 10 – Übergang Kapitel 4
"Sehr gut! Du hast beide Experimente erlebt. Jetzt geht es darum zu überprüfen, was du gelernt hast. Drei Fragen – du schaffst das!"

### 11 – Quiz
"Erste Frage: Was beschreibt der Begriff Veränderungsblindheit? Denke an das Experiment zurück, das du gerade erlebt hast."

### 12 – Reflexion
"Nimm dir einen Moment. Denke an deinen Alltag. In welcher Situation hast du selbst schon erlebt, dass du etwas Offensichtliches übersehen hast? Und was könnte das über das menschliche Wahrnehmungssystem verraten?"

### 13 – Abschluss
"Herzlichen Glückwunsch! Du hast beide Phänomene der visuellen Aufmerksamkeit selbst erlebt und die Theorie dahinter kennen gelernt. Denk beim nächsten Mal daran – dein Gehirn sieht nicht alles, was es zu sehen gibt."

---

## Empfohlene kostenlose Audio-Quellen

### Voiceover (TTS):
- **ElevenLabs** (elevenlabs.io) – Deutsche Stimmen, sehr natürlich
- **Microsoft Azure TTS** – Kostenlos bis 500.000 Zeichen/Monat
- **Google TTS** – Einfach über Google Translate

### Hintergrundmusik (lizenzfrei):
- **pixabay.com/music** – Suche: "ambient focus" oder "calm instrumental"
- **freemusicarchive.org**

### Sound-Effekte (lizenzfrei):
- **freesound.org** – click, correct, wrong, transition
- **zapsplat.com**

---

## So öffnest du das Projekt in VS Code

1. Ordner `visuelle-aufmerksamkeit` in VS Code öffnen
2. Extension **"Live Server"** installieren (falls noch nicht vorhanden)
3. Rechtsklick auf `index.html` → **"Open with Live Server"**
4. Browser öffnet automatisch auf `localhost:5500`

> ⚠️ Direkt per Doppelklick öffnen funktioniert nicht, weil Audio-Dateien über HTTP geladen werden müssen!

---

## Quellenangaben

- Goldstein, E. B. & Cacciamani, L. (2023). *Wahrnehmungspsychologie: Der Grundkurs*. Berlin: Springer.
- Mack, A. & Rock, I. (1998). *Inattentional Blindness*. Cambridge, MA: MIT Press.
- Rensink, R. A., O'Regan, J. K. & Clark, J. J. (1997). To see or not to see. *Psychological Science, 8*(5), 368–373.
- Simons, D. J. & Chabris, C. F. (1999). Gorillas in our midst. *Perception, 28*(9), 1059–1074.
