//   document.addEventListener('DOMContentLoaded', () => {
//     const header = document.querySelector('header');
//     const btn = document.querySelector('.hamburger');
//     const drawer = document.getElementById('mobile-drawer');
//       if (!header || !btn || !drawer) return;

//     const setTop = () => {
//         document.documentElement.style.setProperty('--header-h', header.offsetHeight + 'px');
//     };
//     setTop(); window.addEventListener('resize', setTop);

//     if (!btn || !drawer) return;

//       const close = () => {
//           document.body.classList.remove('nav-open');
//           btn.setAttribute('aria-expanded', 'false');
//       };

//       const BP = 900;
//       const mq = window.matchMedia(`(min-width:${BP}px)`);
//       const onBpChange = e => { if (e.matches) close(); };
//       mq.addEventListener('change', onBpChange);

//       window.addEventListener('resize', () => { if (window.innerWidth >= BP) close(); });
//       window.addEventListener('orientationchange', () => setTimeout(() => {
//           setTop(); if (window.innerWidth >= BP) close();
//       }, 200));

//     btn.addEventListener('click', () => {
//       const open = header.classList.toggle('nav-open');
//     btn.setAttribute('aria-expanded', open ? 'true' : 'false');
//     document.body.classList.toggle('menu-open', open);
//     });

//     drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
//         header.classList.remove('nav-open');
//     btn.setAttribute('aria-expanded', 'false');
//     document.body.classList.remove('menu-open');
//     }));

//     document.addEventListener('keydown', e => {
//       if (e.key === 'Escape') {
//         header.classList.remove('nav-open');
//     btn.setAttribute('aria-expanded', 'false');
//     document.body.classList.remove('menu-open');
//       }
//     });
//   });

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
        document.body.classList.remove('nav-open');   // <-- единый стейт
        btn.setAttribute('aria-expanded', 'false');
    };

    btn.addEventListener('click', () => {
        const open = document.body.classList.toggle('nav-open'); // <-- body.nav-open
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
