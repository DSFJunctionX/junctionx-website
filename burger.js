document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const btn = document.querySelector('.hamburger');
    const drawer = document.getElementById('mobile-drawer');
    if (!header || !btn || !drawer) return;

    const BP = 900;

    const setTop = () =>
        document.documentElement.style.setProperty('--header-h', header.offsetHeight + 'px');
    setTop(); window.addEventListener('resize', setTop);

    const close = () => {
        document.body.classList.remove('nav-open');
        btn.setAttribute('aria-expanded', 'false');
    };

    btn.addEventListener('click', () => {
        const open = document.body.classList.toggle('nav-open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    const mq = window.matchMedia(`(min-width:${BP}px)`);
    const onBpChange = e => { if (e.matches) close(); };
    (mq.addEventListener ? mq.addEventListener('change', onBpChange)
        : mq.addListener(onBpChange)); // Safari fallback

    window.addEventListener('resize', () => { if (innerWidth >= BP) close(); });
    window.addEventListener('orientationchange', () => setTimeout(() => {
        setTop(); if (innerWidth >= BP) close();
    }, 150));

    drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
});
