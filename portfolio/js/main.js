(function () {
    'use strict';

    // Global Constants
    const DOM = {
        preloader: document.getElementById('preloader'),
        navbar: document.getElementById('navbar'),
        scrollProgress: document.getElementById('scroll-progress'),
        mobileMenuBtn: document.getElementById('mobile-menu-btn'),
        mobileMenu: document.getElementById('mobile-menu'),
        typewriter: document.getElementById('typewriter'),
        navLinks: document.querySelectorAll('.nav-link'),
        sections: document.querySelectorAll('section[id]')
    };

    // --- Initialization ---
    document.addEventListener('DOMContentLoaded', () => {
        initAOS();
        initTypewriter();
        initTabs();
        initFilters();
        initMobileMenu();

        // Hide Preloader
        if (DOM.preloader) {
            setTimeout(() => {
                DOM.preloader.classList.add('hidden');
            }, 500);
        }

        // Scroll Handler (Optimized)
        let isTicking = false;
        window.addEventListener('scroll', () => {
            if (!isTicking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    isTicking = false;
                });
                isTicking = true;
            }
        });
    });

    // --- Core Functions ---
    function initAOS() {
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 1000,
                easing: 'ease-out-cubic',
                once: true,
                offset: 50
            });
        }
    }

    function initTypewriter() {
        if (!DOM.typewriter) return;

        const roles = [
            "Data-Driven Problem Solver",
            "Creative AI Engineer",
            "Insightful Researcher",
            "Machine Learning Specialist"
        ];
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 100;

        function type() {
            const currentRole = roles[roleIndex];

            if (isDeleting) {
                charIndex--;
                typeSpeed = 50;
            } else {
                charIndex++;
                typeSpeed = 100;
            }

            DOM.typewriter.textContent = currentRole.substring(0, charIndex);

            if (!isDeleting && charIndex === currentRole.length) {
                isDeleting = true;
                typeSpeed = 2000;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
            }
            setTimeout(type, typeSpeed);
        }
        setTimeout(type, 500);
    }

    function handleScroll() {
        const currentScroll = window.scrollY;

        // Navbar Effect
        if (currentScroll > 50) {
            DOM.navbar.classList.add('scrolled');
        } else {
            DOM.navbar.classList.remove('scrolled');
        }

        // Progress Bar
        if (DOM.scrollProgress) {
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (currentScroll / height) * 100;
            DOM.scrollProgress.style.width = `${scrolled}%`;
        }

        // Active Link Highlighting
        let currentSectionId = '';
        DOM.sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (currentScroll >= sectionTop - 200) {
                currentSectionId = section.getAttribute('id');
            }
        });

        DOM.navLinks.forEach(link => {
            // Matias style: simple color change
            link.classList.remove('text-primary');
            link.classList.add('text-white');

            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.remove('text-white');
                link.classList.add('text-primary');
            }
        });
    }

    function initMobileMenu() {
        if (DOM.mobileMenuBtn && DOM.mobileMenu) {
            DOM.mobileMenuBtn.addEventListener('click', () => {
                DOM.mobileMenu.classList.toggle('hidden');
            });
            DOM.mobileMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    DOM.mobileMenu.classList.add('hidden');
                });
            });
        }
    }

    function initTabs() {
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                if (btn.classList.contains('redirect-to-skills')) {
                    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
                    return;
                }

                const tabId = btn.dataset.tab;
                tabBtns.forEach(b => {
                    b.classList.remove('active', 'text-primary', 'shadow-matias', 'bg-gradient-to-br', 'from-[#1e2024]', 'to-[#23272b]');
                    b.classList.add('text-text-body'); // Inactive style
                });

                // Add active Matias styles
                btn.classList.add('active', 'text-primary', 'shadow-matias', 'bg-gradient-to-br', 'from-[#1e2024]', 'to-[#23272b]');
                btn.classList.remove('text-text-body');

                tabContents.forEach(content => content.classList.add('hidden'));
                document.getElementById(tabId)?.classList.remove('hidden');
            });
        });
    }

    function initFilters() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.dataset.filter;

                // Update buttons
                filterBtns.forEach(b => {
                    b.classList.remove('active', 'text-primary', 'shadow-matias', 'bg-gradient-to-br', 'from-[#1e2024]', 'to-[#23272b]');
                    b.classList.add('text-text-body');
                });
                btn.classList.add('active', 'text-primary', 'shadow-matias', 'bg-gradient-to-br', 'from-[#1e2024]', 'to-[#23272b]');
                btn.classList.remove('text-text-body');

                // Filter logic
                projectCards.forEach(card => {
                    const category = card.dataset.category;
                    if (filter === 'all' || category === filter) {
                        card.style.display = 'block';
                        setTimeout(() => card.style.opacity = '1', 50);
                    } else {
                        card.style.opacity = '0';
                        setTimeout(() => card.style.display = 'none', 300);
                    }
                });
            });
        });
    }

    // Counter Animation (Simple Version)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.counter');
                counters.forEach(counter => {
                    const target = parseInt(counter.dataset.target);
                    counter.textContent = target; // Instant update for now, or add animation logic back
                });
            }
        });
    }, { threshold: 0.5 });

    const aboutSection = document.getElementById('about');
    if (aboutSection) observer.observe(aboutSection);

})();