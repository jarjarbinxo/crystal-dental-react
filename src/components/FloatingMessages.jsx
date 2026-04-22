import { useEffect, useState, useCallback } from 'react';

const MESSAGES = [
  { text: 'أفضل عيادة أسنان في الكويت ⭐⭐⭐⭐⭐', name: 'نورة م.' },
  { text: 'تبييض مذهل من جلسة واحدة ✨', name: 'سارة ع.' },
  { text: 'أطفالي ما يخافون من الطبيب هنا 😊', name: 'فاطمة خ.' },
  { text: 'تقويم شفاف غيّر شكل ابتسامتي 🥰', name: 'خلود ر.' },
  { text: 'علاج العصب جلسة وحدة، ما توقعت! 👏', name: 'عبدالله ن.' },
  { text: 'النظافة والاحترافية درجة أولى 👌', name: 'ريم ف.' },
  { text: 'استقبال رائع وجو مريح جداً 💚', name: 'محمد ب.' },
  { text: 'الدكتورة ماهرة وطاقم متميز ❤️', name: 'منى ك.' },
  { text: 'Best dental experience I\'ve ever had! 🤩', name: 'Sarah M.' },
  { text: 'My smile is completely transformed ✨', name: 'Ahmed K.' },
  { text: 'So gentle — I felt nothing at all 😊', name: 'Lara T.' },
  { text: 'One visit root canal, truly impressive 👏', name: 'Hassan N.' },
  { text: 'The whitening results are unbelievable 🌟', name: 'Maya R.' },
  { text: 'My kids actually love coming here 💚', name: 'Nadia S.' },
  { text: 'Crystal clear results every single time ⭐', name: 'Omar F.' },
];

let uid = 0;

export default function FloatingMessages() {
  const [bubbles, setBubbles] = useState([]);

  const spawn = useCallback(() => {
    const msg      = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
    const id       = uid++;
    const left     = 8 + Math.random() * 68;
    const duration = 11 + Math.random() * 7;
    const drift    = (Math.random() - 0.5) * 48;

    setBubbles(prev => [...prev, { id, text: msg.text, name: msg.name, left, duration, drift }]);
    setTimeout(() => setBubbles(prev => prev.filter(b => b.id !== id)), (duration + 1.2) * 1000);
  }, []);

  useEffect(() => {
    // Stagger the first few so the screen isn't empty on load
    setTimeout(spawn, 300);
    setTimeout(spawn, 1400);
    setTimeout(spawn, 2600);

    let timer;
    const schedule = () => {
      timer = setTimeout(() => { spawn(); schedule(); }, 2200 + Math.random() * 2400);
    };
    schedule();
    return () => clearTimeout(timer);
  }, [spawn]);

  return (
    <div className="float-msg-layer">
      {bubbles.map(b => (
        <div
          key={b.id}
          className="float-bubble"
          style={{
            left: `${b.left}%`,
            '--dur':   `${b.duration}s`,
            '--drift': `${b.drift}px`,
          }}
        >
          <span className="bubble-name">{b.name}</span>
          <span className="bubble-text" dir="auto">{b.text}</span>
          <span className="bubble-tick">✓✓</span>
        </div>
      ))}
    </div>
  );
}
