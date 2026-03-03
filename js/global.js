// global.js - shared site-wide JavaScript
// includes search functionality and language toggle with translations

// current language state (default: English)
let currentLanguage = localStorage.getItem('siteLanguage') || 'en';

// translation dictionary for common UI elements
const translations = {
    en: {
        'Staff Portal': 'Staff Portal',
        'Student Portal': 'Student Portal',
        'Alumni': 'Alumni',
        'Library': 'Library',
        'About': 'About',
        'Academics': 'Academics',
        'Research': 'Research',
        'People': 'People',
        'News': 'News',
        'Contact': 'Contact',
        'Apply Now': 'Apply Now',
        'Undergraduate': 'Undergraduate',
        'Postgraduate': 'Postgraduate',
        'Explore Programmes': 'Explore Programmes',
        'Discover SU': 'Discover SU',
        'World-Class Research University': 'World-Class Research University',
        'Advancing Knowledge': 'Advancing Knowledge',
        'Shaping Futures': 'Shaping Futures',
        'Join a vibrant Department of Computer Science community': 'Join a vibrant Department of Computer Science community of scholars, innovators, and leaders at one of Africa\'s leading research universities.',
        'Discover your potential at Stellenbosch University': 'Discover your potential at Stellenbosch University.',
        'Explore Stellenbosch University': 'Explore Stellenbosch University',
        'Find what you\'re looking for quickly': 'Find what you\'re looking for quickly',
        'Bachelor\'s degrees across 10 faculties': 'Bachelor\'s degrees across 10 faculties',
        'Masters, PhD & professional degrees': 'Masters, PhD & professional degrees',
        'Cutting-edge research & innovation': 'Cutting-edge research & innovation',
        'Student services & campus community': 'Student services & campus community',
        'Campus Life': 'Campus Life',
        'Stay Informed': 'Stay Informed',
        'Latest News & Events': 'Latest News & Events',
        'View All News': 'View All News',
        'Innovation & Discovery': 'Innovation & Discovery',
        'Research Highlights': 'Research Highlights',
        'All Research': 'All Research',
    },
    af: {
        'Staff Portal': 'Personeelportaal',
        'Student Portal': 'Studenteportaal',
        'Alumni': 'Oud-studente',
        'Library': 'Biblioteek',
        'About': 'Oor ons',
        'Academics': 'Akademies',
        'Research': 'Navorsing',
        'People': 'Mense',
        'News': 'Nuus',
        'Contact': 'Kontak',
        'Apply Now': 'Dien nou in',
        'Undergraduate': 'Voorgraads',
        'Postgraduate': 'Nagraads',
        'Explore Programmes': 'Verken Programmes',
        'Discover SU': 'Ontdek SU',
        'World-Class Research University': 'Wêreldklas Navorsinguniversiteit',
        'Advancing Knowledge': 'Bevorder van Kennis',
        'Shaping Futures': 'Toekoms Vormgewing',
        'Join a vibrant Department of Computer Science community': 'Sluit aan by \'n lewendige gemeenskap van rekenaarwetenskap-geleerdes, innoveerders en leiers by een van Afrika se toonaangewende navorsingstesinstellings.',
        'Discover your potential at Stellenbosch University': 'Ontdek u potensiaal by Stellenbosch Universiteit.',
        'Explore Stellenbosch University': 'Verken Stellenbosch Universiteit',
        'Find what you\'re looking for quickly': 'Vind vinnig wat u soek',
        'Bachelor\'s degrees across 10 faculties': 'Baccalaureusgrade oor 10 fakulteite',
        'Masters, PhD & professional degrees': 'Meesterstitel, PhD & beroepsgrade',
        'Cutting-edge research & innovation': 'Vooruitstrevende navorsing & innovasie',
        'Student services & campus community': 'Studentedienste & kampusgemeenskap',
        'Campus Life': 'Kampuslewe',
        'Stay Informed': 'Bly Ingelicht',
        'Latest News & Events': 'Nuutste Nuus & Geleenthede',
        'View All News': 'Bekyk al die Nuus',
        'Innovation & Discovery': 'Innovasie & Ontdekking',
        'Research Highlights': 'Navorsingshoogtepunte',
        'All Research': 'Alle Navorsing',
    }
};

// list of all top‑level pages for the site; if you add or remove HTML files,
// update this array so they can be searched.
const sitePages = [
    { label: 'Homepage', url: 'homepage.html' },
    { label: 'About', url: 'about-page.html' },
    { label: 'Accessibility', url: 'accessibility.html' },
    { label: 'Alumni', url: 'alumni.html' },
    { label: 'Campus Map', url: 'campus-map.html' },
    { label: 'Contact', url: 'contact-page.html' },
    { label: 'Events', url: 'events.html' },
    { label: 'Faculties', url: 'faculties.html' },
    { label: 'Honours', url: 'honours.html' },
    { label: 'Individual Profile', url: 'individual-profile-page.html' },
    { label: 'Masters', url: 'masters.html' },
    { label: 'Module Detail', url: 'module-detail.html' },
    { label: 'News', url: 'news.html' },
    { label: 'People', url: 'people.html' },
    { label: 'PhD', url: 'phd.html' },
    { label: 'Postgraduate', url: 'postgraduate.html' },
    { label: 'Postgraduate Modules', url: 'postgraduate-modules.html' },
    { label: 'Privacy Policy', url: 'privacy-policy.html' },
    { label: 'Programme Guide', url: 'programme-guide.html' },
    { label: 'Prospective Students', url: 'prospective-students.html' },
    { label: 'Research', url: 'research.html' },
    { label: 'AI Research', url: 'research-subpage-ai.html' },
    { label: 'Short Courses', url: 'short-courses.html' },
    { label: 'Staff', url: 'staff.html' },
    { label: 'Student Resources', url: 'student-resources-portal.html' },
    { label: 'Students', url: 'students.html' },
    { label: 'Sustainability', url: 'sustainability.html' },
    { label: 'Terms of Use', url: 'terms-of-use.html' },
    { label: 'Undergraduate', url: 'undergraduate.html' },
    { label: 'Undergraduate Modules', url: 'undergraduate-modules.html' },
    // add additional pages here as needed
];

function initSearch() {
    const btn = document.getElementById('search-button');
    if (!btn) return; // nothing to do if there is no search icon

    btn.addEventListener('click', () => {
        const query = prompt('Enter page name or keyword to search:');
        if (!query) return;
        const term = query.trim().toLowerCase();

        const matches = sitePages.filter(p =>
            p.label.toLowerCase().includes(term) || p.url.toLowerCase().includes(term)
        );

        if (matches.length === 0) {
            alert(`No pages found matching "${query}"`);
        } else if (matches.length === 1) {
            window.location.href = matches[0].url;
        } else {
            let message = 'Multiple pages found:\n';
            matches.forEach((p, i) => {
                message += `${i + 1}. ${p.label} (${p.url})\n`;
            });
            message += '\nEnter number to open:';
            const choice = prompt(message);
            const idx = parseInt(choice, 10) - 1;
            if (matches[idx]) {
                window.location.href = matches[idx].url;
            }
        }
    });
}

function initLanguageToggle() {
    const langBtn = document.getElementById('language-toggle');
    const langDisplay = document.getElementById('lang-display');
    if (!langBtn || !langDisplay) return;

    // apply translations on page load
    applyTranslations();
    updateLanguageDisplay();

    langBtn.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'en' ? 'af' : 'en';
        localStorage.setItem('siteLanguage', currentLanguage);
        updateLanguageDisplay();
        applyTranslations();
    });
}

function updateLanguageDisplay() {
    const langDisplay = document.getElementById('lang-display');
    if (langDisplay) {
        langDisplay.textContent = currentLanguage === 'en' ? 'Afrikaans' : 'English';
    }
}

function applyTranslations() {
    // translate all text nodes by comparing with translation dictionary
    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );

    let node;
    const nodesToUpdate = [];

    // collect all text nodes
    while (node = walker.nextNode()) {
        const text = node.textContent.trim();
        // check if this text has a translation
        if (text && translations[currentLanguage] && translations[currentLanguage][text]) {
            nodesToUpdate.push({
                node: node,
                text: text
            });
        }
    }

    // update all text nodes
    nodesToUpdate.forEach(item => {
        item.node.textContent = translations[currentLanguage][item.text];
    });

    // also translate common attributes like aria-label, placeholder
    document.querySelectorAll('[aria-label], [title], [placeholder]').forEach(el => {
        if (el.getAttribute('aria-label')) {
            const ariaText = el.getAttribute('aria-label');
            if (translations[currentLanguage][ariaText]) {
                el.setAttribute('aria-label', translations[currentLanguage][ariaText]);
            }
        }
        if (el.getAttribute('title')) {
            const titleText = el.getAttribute('title');
            if (translations[currentLanguage][titleText]) {
                el.setAttribute('title', translations[currentLanguage][titleText]);
            }
        }
        if (el.getAttribute('placeholder')) {
            const placeholderText = el.getAttribute('placeholder');
            if (translations[currentLanguage][placeholderText]) {
                el.setAttribute('placeholder', translations[currentLanguage][placeholderText]);
            }
        }
    });
}

// run on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initSearch();
        initLanguageToggle();
    });
} else {
    initSearch();
    initLanguageToggle();
}
