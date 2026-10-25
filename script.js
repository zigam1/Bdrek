(function () {
  const gate = document.getElementById('gate');
  const hacked = document.getElementById('hacked');
  const logEl = document.getElementById('log');
  const banner = document.getElementById('banner');
  const bar = document.querySelector('#bar span');
  const reveal = document.getElementById('reveal');

  const lines = [
    '> initializing connection...',
    '> bypassing firewall.............. OK',
    '> accessing device storage........ OK',
    '> reading contacts................ OK',
    '> copying photos.................. 38%',
    '> copying photos.................. 71%',
    '> copying photos.................. 100%',
    '> uploading to remote server...',
    '> root access granted',
    '> SYSTEM COMPROMISED'
  ];

  function startHack() {
    gate.style.display = 'none';
    hacked.classList.add('on');
    let i = 0;
    const timer = setInterval(() => {
      logEl.textContent += lines[i] + '\n';
      bar.style.width = ((i + 1) / lines.length * 100) + '%';
      i++;
      if (i >= lines.length) {
        clearInterval(timer);
        setTimeout(() => banner.classList.add('on'), 500);
      }
    }, 450);
  }

  document.getElementById('allow').addEventListener('click', startHack);
  // "Block" does the same, so the prank always lands
  document.getElementById('block').addEventListener('click', startHack);

  // Reveal button: tap the top-left corner 5 times or press Escape
  let taps = 0;
  const showReveal = () => { reveal.style.display = 'inline-block'; banner.classList.add('on'); };
  hacked.addEventListener('click', (e) => {
    if (e.clientX < 80 && e.clientY < 80 && ++taps >= 5) showReveal();
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') showReveal(); });

  reveal.addEventListener('click', () => location.reload());
})();
