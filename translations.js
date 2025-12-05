const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact"
    },
    // Header
    header: {
      subtitle: "AI & Machine Learning Student | Deep Learning Enthusiast"
    },
    // Home page
    welcome: {
      title: "Welcome to My Portfolio",
      description: "Explore my work, skills, and journey in Artificial Intelligence and Machine Learning."
    },
    aboutPreview: {
      title: "About Me",
      description: "I'm an engineering student in ENSICAEN, specializing in Artificial Intelligence and Machine Learning, with a strong focus on Deep Learning, Computer Vision and Video Games. I enjoy building neural networks, experimenting with cutting-edge models, and applying AI to real‑world problems.",
      button: "Learn More About Me →"
    },
    projectsPreview: {
      title: "Featured Projects & Experiences",
      description: "A selection of my academic projects and professional experiences.",
      viewAll: "View all →",
      viewDetails: "View Details",
      button: "View All Projects & Experiences →"
    },
    skillsPreview: {
      title: "Skills Overview",
      button: "View All Skills →"
    },
    contact: {
      title: "Contact",
      email: "Email:",
      github: "GitHub:",
      linkedin: "LinkedIn:",
      phone: "Phone:",
      location: "Location:"
    },
    footer: {
      copyright: "© 2025 Oussama Aqebli. All rights reserved."
    }
  },
  fr: {
    // Navigation
    nav: {
      home: "Accueil",
      about: "À propos",
      projects: "Projets",
      skills: "Compétences",
      contact: "Contact"
    },
    // Header
    header: {
      subtitle: "Étudiant en IA & Machine Learning | Passionné de Deep Learning"
    },
    // Home page
    welcome: {
      title: "Bienvenue sur mon Portfolio",
      description: "Découvrez mon travail, mes compétences et mon parcours en Intelligence Artificielle et Machine Learning."
    },
    aboutPreview: {
      title: "À propos de moi",
      description: "Je suis étudiant en ingénierie à l'ENSICAEN, spécialisé en Intelligence Artificielle et Machine Learning, avec un fort intérêt pour le Deep Learning, la Vision par Ordinateur et les Jeux Vidéo. J'aime construire des réseaux de neurones, expérimenter avec des modèles de pointe et appliquer l'IA à des problèmes réels.",
      button: "En savoir plus sur moi →"
    },
    projectsPreview: {
      title: "Projets & Expériences en vedette",
      description: "Une sélection de mes projets académiques et expériences professionnelles.",
      viewAll: "Voir tout →",
      viewDetails: "Voir les détails",
      button: "Voir tous les projets & expériences →"
    },
    skillsPreview: {
      title: "Aperçu des compétences",
      button: "Voir toutes les compétences →"
    },
    contact: {
      title: "Contact",
      email: "Email :",
      github: "GitHub :",
      linkedin: "LinkedIn :",
      phone: "Téléphone :",
      location: "Localisation :"
    },
    footer: {
      copyright: "© 2025 Oussama Aqebli. Tous droits réservés."
    }
  }
};

// Language switcher functionality
function setLanguage(lang) {
  localStorage.setItem('preferredLanguage', lang);
  document.documentElement.lang = lang;
  
  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const keys = key.split('.');
    let value = translations[lang];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    if (value !== undefined) {
      if (element.tagName === 'INPUT' && element.type === 'submit') {
        element.value = value;
      } else {
        element.textContent = value;
      }
    }
  });
  
  // Update language switcher button
  const langBtn = document.getElementById('lang-switcher');
  if (langBtn) {
    langBtn.textContent = lang === 'en' ? 'FR' : 'EN';
    langBtn.setAttribute('data-lang', lang === 'en' ? 'fr' : 'en');
  }
}

function initLanguage() {
  const savedLang = localStorage.getItem('preferredLanguage') || 'en';
  setLanguage(savedLang);
}

// Initialize on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLanguage);
} else {
  initLanguage();
}

