import React, { createContext, useState, useContext, ReactNode } from "react";

type Language = "en" | "es";

// Define a type for the translation dictionaries
interface TranslationDict {
  [key: string]: string;
}

interface Translations {
  en: TranslationDict;
  es: TranslationDict;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const translations: Translations = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.about": "About Me",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.education": "Education",

    // Home
    "home.greeting": "Hello, I'm",
    "home.role": "Graphic Designer & Community Manager",
    "home.description":
      "Creating visual stories and building digital communities for brands.",
    "home.download": "Download Portfolio",

    // About
    "about.title": "About Me",
    "about.p1":
      "Hello! I'm Sofia Costacaro, a 19-year-old passionate graphic designer and community manager with a keen eye for visual storytelling and digital engagement.",
    "about.p2":
      "Currently studying Graphic Design at Universidad de Palermo in Buenos Aires, I'm developing my skills while working as a Community Manager for two exciting brands.",
    "about.p3":
      "When I'm not designing or managing social media campaigns, you can find me exploring art exhibitions, photographing urban landscapes, and collecting design inspiration.",

    // Skills
    "skills.title": "Skills",
    "skills.designSoftware": "Design Software",
    "skills.designSkills": "Design Skills",
    "skills.specialties": "Specialties",
    "skills.other": "Other Skills",

    // Skills specifics
    "skills.photoshop": "Adobe Photoshop",
    "skills.illustrator": "Adobe Illustrator",
    "skills.indesign": "Adobe InDesign",
    "skills.figma": "Figma",
    "skills.typography": "Typography",
    "skills.colorTheory": "Color Theory",
    "skills.composition": "Composition",
    "skills.brandId": "Brand Identity",
    "skills.printDesign": "Print Design",
    "skills.digitalDesign": "Digital Design",
    "skills.photography": "Photography",
    "skills.uiux": "UI/UX Design",
    "skills.motion": "Motion Graphics",

    // Projects
    "projects.title": "Projects",
    "projects.behance": "Behance",
    "projects.preview": "Preview",

    // Project specifics
    "projects.bloom.title": "Bloom Cafe Brand Identity",
    "projects.bloom.description":
      "Complete branding package for an organic cafe, including logo, menu design, and packaging.",
    "projects.nature.title": "Nature Magazine Layout",
    "projects.nature.description":
      "Editorial design for a special issue about environmental conservation.",
    "projects.harmony.title": "Harmony Music App UI",
    "projects.harmony.description":
      "User interface design for a music streaming application with a focus on accessibility.",
    "projects.fashion.title": "Sustainable Fashion Campaign",
    "projects.fashion.description":
      "Visual campaign for a clothing brand highlighting sustainable practices.",

    // Project tags
    "projects.tag.branding": "Branding",
    "projects.tag.typography": "Typography",
    "projects.tag.print": "Print Design",
    "projects.tag.editorial": "Editorial",
    "projects.tag.layout": "Layout Design",
    "projects.tag.ui": "UI/UX",
    "projects.tag.app": "App Design",
    "projects.tag.digital": "Digital",
    "projects.tag.campaign": "Campaign",
    "projects.tag.photography": "Photography",

    // Experience
    "experience.title": "Professional Experience",
    "experience.responsibilities": "Key Responsibilities:",
    "experience.cm.title": "Community Manager",
    "experience.vitec.description":
      "Handling digital presence and community engagement for a technology solutions company that sells computers, focusing on B2B communication and professional networking.",
    "experience.flora.description":
      "Managing social media presence, creating engaging content, and building community engagement strategies for this jewelry brand that specializes in handcrafted pieces.",
    "experience.resp.1": "Creating and scheduling social media content",
    "experience.resp.2": "Community interaction and customer engagement",
    "experience.resp.3": "Content strategy development",
    "experience.resp.4": "Performance analytics and reporting",
    "experience.resp.5": "Managing professional social media presence",
    "experience.resp.6": "Developing content for tech-focused audience",
    "experience.resp.7": "B2B community engagement strategies",
    "experience.resp.8": "Digital campaign management",

    // Education
    "education.title": "Education",
    "education.degree": "Bachelor of Graphic Design",
    "education.university": "Universidad de Palermo, Buenos Aires",
    "education.degree.desc":
      "Currently pursuing a degree in Graphic Design, focusing on visual communication, digital media, and brand identity design.",
    "education.highschool": "High School Diploma",
    "education.highschool.institution": "Secondary School",
    "education.highschool.desc":
      "Graduated with focus on arts and communication.",

    // Footer
    "footer.text": "Portfolio ©{year}",
  },
  es: {
    // Navbar
    "nav.home": "Inicio",
    "nav.about": "Sobre Mí",
    "nav.skills": "Habilidades",
    "nav.projects": "Proyectos",
    "nav.experience": "Experiencia",
    "nav.education": "Educación",

    // Home
    "home.greeting": "Hola, soy",
    "home.role": "Diseñadora Gráfica y Community Manager",
    "home.description":
      "Creando historias visuales y construyendo comunidades digitales para marcas.",
    "home.download": "Descargar Portfolio",

    // About
    "about.title": "Sobre Mí",
    "about.p1":
      "¡Hola! Soy Sofia Costacaro, una apasionada diseñadora gráfica y community manager de 19 años con un ojo agudo para la narración visual y el engagement digital.",
    "about.p2":
      "Actualmente estudio Diseño Gráfico en la Universidad de Palermo en Buenos Aires, desarrollando mis habilidades mientras trabajo como Community Manager para dos marcas emocionantes.",
    "about.p3":
      "Cuando no estoy diseñando o gestionando campañas en redes sociales, me puedes encontrar explorando exposiciones de arte, fotografiando paisajes urbanos y recopilando inspiración de diseño.",

    // Skills
    "skills.title": "Habilidades",
    "skills.designSoftware": "Software de Diseño",
    "skills.designSkills": "Habilidades de Diseño",
    "skills.specialties": "Especialidades",
    "skills.other": "Otras Habilidades",

    // Skills specifics
    "skills.photoshop": "Adobe Photoshop",
    "skills.illustrator": "Adobe Illustrator",
    "skills.indesign": "Adobe InDesign",
    "skills.figma": "Figma",
    "skills.typography": "Tipografía",
    "skills.colorTheory": "Teoría del Color",
    "skills.composition": "Composición",
    "skills.brandId": "Identidad de Marca",
    "skills.printDesign": "Diseño de Impresión",
    "skills.digitalDesign": "Diseño Digital",
    "skills.photography": "Fotografía",
    "skills.uiux": "Diseño UI/UX",
    "skills.motion": "Gráficos en Movimiento",

    // Projects
    "projects.title": "Proyectos",
    "projects.behance": "Behance",
    "projects.preview": "Vista Previa",

    // Project specifics
    "projects.bloom.title": "Identidad de Marca Bloom Cafe",
    "projects.bloom.description":
      "Paquete completo de branding para un café orgánico, incluyendo logo, diseño de menú y empaque.",
    "projects.nature.title": "Maquetación de Revista Nature",
    "projects.nature.description":
      "Diseño editorial para una edición especial sobre conservación ambiental.",
    "projects.harmony.title": "Interfaz de App Harmony Music",
    "projects.harmony.description":
      "Diseño de interfaz de usuario para una aplicación de streaming musical con enfoque en accesibilidad.",
    "projects.fashion.title": "Campaña de Moda Sostenible",
    "projects.fashion.description":
      "Campaña visual para una marca de ropa destacando prácticas sostenibles.",

    // Project tags
    "projects.tag.branding": "Branding",
    "projects.tag.typography": "Tipografía",
    "projects.tag.print": "Diseño de Impresión",
    "projects.tag.editorial": "Editorial",
    "projects.tag.layout": "Diseño de Maquetación",
    "projects.tag.ui": "UI/UX",
    "projects.tag.app": "Diseño de Apps",
    "projects.tag.digital": "Digital",
    "projects.tag.campaign": "Campaña",
    "projects.tag.photography": "Fotografía",

    // Experience
    "experience.title": "Experiencia Profesional",
    "experience.responsibilities": "Responsabilidades Principales:",
    "experience.cm.title": "Community Manager",
    "experience.vitec.description":
      "Gestión de presencia digital y engagement comunitario para una empresa de soluciones tecnológicas que vende computadoras, enfocado en comunicación B2B y networking profesional.",
    "experience.flora.description":
      "Gestión de redes sociales, creación de contenido atractivo y desarrollo de estrategias de engagement comunitario para esta marca de joyería que se especializa en piezas artesanales.",
    "experience.resp.1":
      "Creación y programación de contenido para redes sociales",
    "experience.resp.2":
      "Interacción con la comunidad y engagement de clientes",
    "experience.resp.3": "Desarrollo de estrategia de contenidos",
    "experience.resp.4": "Análisis de rendimiento y reportes",
    "experience.resp.5": "Gestión de presencia profesional en redes sociales",
    "experience.resp.6": "Desarrollo de contenido para audiencia tecnológica",
    "experience.resp.7": "Estrategias de engagement comunitario B2B",
    "experience.resp.8": "Gestión de campañas digitales",

    // Education
    "education.title": "Educación",
    "education.degree": "Licenciatura en Diseño Gráfico",
    "education.university": "Universidad de Palermo, Buenos Aires",
    "education.degree.desc":
      "Actualmente cursando la carrera de Diseño Gráfico, con enfoque en comunicación visual, medios digitales y diseño de identidad de marca.",
    "education.highschool": "Diploma de Escuela Secundaria",
    "education.highschool.institution": "Escuela Secundaria",
    "education.highschool.desc":
      "Graduada con enfoque en artes y comunicación.",

    // Footer
    "footer.text": "Portafolio ©{year}",
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en"); // Default to English

  // Function to get translation
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
