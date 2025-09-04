// scripts/app.js
document.addEventListener('DOMContentLoaded', () => {
  const card = document.getElementById('card');
  const flipBtn = document.getElementById('flipCardBtn');
  const photo = document.getElementById('photo');
  const turnBtn = document.getElementById('turnPhotoBtn');

  // Helpers
  const need = (el, name) => {
    if (!el) throw new Error(`[UI] Element met id="${name}" niet gevonden. Check je HTML-IDs.`);
    return el;
  };
  const togglePressed = (btn) => {
    const pressed = btn.getAttribute('aria-pressed') === 'true';
    btn.setAttribute('aria-pressed', String(!pressed));
  };

  try {
    need(card, 'card');
    need(flipBtn, 'flipCardBtn');
    need(photo, 'photo');
    need(turnBtn, 'turnPhotoBtn');
  } catch (e) {
    console.error(e.message);
    return; // voorkom verdere fouten
  }

  // Kaart omdraaien (voor ↔ achter)
  flipBtn.addEventListener('click', () => {
    card.classList.toggle('is-flipped');
    togglePressed(flipBtn);
  });

  // Foto draaien (voor ↔ achter)
  turnBtn.addEventListener('click', () => {
    photo.classList.toggle('is-turned');
    togglePressed(turnBtn);
  });

  // Optioneel: foto ook laten draaien bij klikken op de foto zelf
  photo.addEventListener('click', () => {
    photo.classList.toggle('is-turned');
    togglePressed(turnBtn);
  });

  // Toetsenbordtoegang
  document.addEventListener('keydown', (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
      if (document.activeElement === flipBtn) { e.preventDefault(); flipBtn.click(); }
      if (document.activeElement === turnBtn) { e.preventDefault(); turnBtn.click(); }
    }
  });

  console.log('[UI] Buttons gekoppeld en klaar ✅');
});
