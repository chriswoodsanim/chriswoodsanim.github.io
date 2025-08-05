//gsap.to('h1', {keyframes: { x: [0, 0, 0], y: [0, 200, 0], opacity: [0, 1, 1], ease: "power3.out"}, duration: 2})

gsap.set('h1', {opacity: 0})
gsap.to('h1', { duration: 1.5, y: 400, opacity: 1, ease: 'elastic', delay: 0.1})
gsap.to('h1', { duration: 0.5, y: 0, ease: 'power1.inOut', delay: 1.75})

gsap.set('h3', {opacity: 0})
gsap.to('h3', { duration: 1.5, y: 400, opacity: 1, ease: 'elastic', delay: 0.12})
gsap.to('h3', { duration: 0.5, y: 0, ease: 'power1.inOut', delay: 1.78})

gsap.from('.container', { duration: 0.5, y: 400, ease: 'power1', opacity: 0, delay: 2, stagger: 0.1})

