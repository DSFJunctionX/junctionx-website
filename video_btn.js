document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('.video-hero');
    if (!section) return;

    const video = section.querySelector('video');
    if (!video) return;

    const btn = document.querySelector('.video-sound');

    btn.innerHTML = `
      <!-- mute -->
      <svg class="icon-off" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor"
              d="M11 5 6 9H3v6h3l5 4V5zM20.5 6.9l-1.4 1.4 1.6 1.6-1.6 1.6 1.4 1.4 1.6-1.6 1.6 1.6 1.4-1.4-1.6-1.6 1.6-1.6-1.4-1.4-1.6 1.6-1.6-1.6z"/>
      </svg>
      <!-- unmute -->
      <svg class="icon-on" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M11 5 6 9H3v6h3l5 4V5z"/>
        <path d="M15 9c1.6 1.6 1.6 4.4 0 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        <path d="M19 7c2.6 2.6 2.6 9.4 0 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
    `;
    section.appendChild(btn);

    btn.addEventListener('click', () => {
        const on = video.muted;
        video.muted = !on;
        if (on) video.play().catch(() => { });
        btn.classList.toggle('on', on);
        btn.setAttribute('aria-label', on ? 'Mute video' : 'Unmute video');
        btn.title = on ? 'Mute' : 'Unmute';
    });
});
