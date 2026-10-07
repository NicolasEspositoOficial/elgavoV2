import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      nav: {
        home: "INICIO",
        methodology: "METODOLOGÍA",
        pricing: "PRECIOS",
        program: "PROGRAMA",
        contact: "CONTACTO",
        login: "INICIAR SESIÓN"
      },
      hero: {
        subtitle: "ESCUCHA, REPITE Y APRENDE",
        description: "No se trata de memorizar frases. Se trata de entender cómo funciona el inglés, reconocerlo cuando suena rápido y usarlo para contar lo que pasó, lo que pasa y lo que quieres que pase.",
        btnPrimary: "CONSULTA POR WHATSAPP",
        btnSecondary: "CONOCE LA HISTORIA"
      },
      heroStats: {
        stat1: "SONIDO",
        stat2: "PALABRA",
        stat3: "IDEA",
        stat4: "ESTRUCTURA",
        stat5: "INTENCIÓN",
        stat6: "DISCURSO",
        stat7: "FLUIDEZ"
      },
      teacherInfo: {
        subtitle: "INTRODUCCIÓN · POR QUÉ EXISTE ESTE PROYECTO",
        title: "\"ME GUSTA ENSEÑAR.\"",
        col1_1: "Hay algo que siempre he tenido claro: ",
        col1_bold1: "me gusta enseñar",
        col1_2: ". Me gusta cuando una persona que llevaba años diciendo “yo soy malo para el inglés” de repente entiende algo, lo pronuncia bien, arma una frase y se da cuenta de que, de pronto, eso que parecía tan complicado no era tan complicado. ",
        col1_bold2: "Ese momento me parece una chimba.",
        col1_h4: "Y PRECISAMENTE POR ESO, NACE",
        col2: "Si por mí fuera, yo enseñaría todo esto gratis. Porque el conocimiento, cuando uno lo comparte, crece. Quiero que esto llegue al que empieza desde cero, al que lleva años estudiando, al que necesita inglés para trabajar, viajar o estudiar y al que simplemente quiere aprender algo nuevo.",
        col3_bold: "Quiero que usted entienda cómo funciona el inglés.",
        col3: "Una cosa es aprenderse cien frases de memoria y otra muy diferente es entender por qué funcionan. Una cosa es repetir una palabra y otra poder reconocerla cuando alguien la dice rápido.",
        banner_subtitle: "EL SISTEMA DETRÁS DEL IDIOMA",
        banner_title: "DEL SONIDO A LA FLUIDEZ",
        banner_desc: "THE NEW E.R.A. organiza el aprendizaje de forma progresiva: primero entiendes cómo suena el idioma, luego cómo se forman las palabras y las ideas, después cómo se relacionan los verbos, el tiempo, las posibilidades y las intenciones.",
        banner_quote: "\"La ortografía te dice cómo se escribe. La pronunciación te dice cómo suena. La gramática te dice cómo funciona. El uso te dice cuándo lo diría una persona.\"",
        tag1: "Fonética",
        tag2: "Gramática",
        tag3: "Uso real",
        tag4: "Speaking",
        tag5: "Fluidez"
      },
      modalities: {
        subtitle: "APRENDE A TU RITMO",
        title: "MODALIDADES DE APRENDIZAJE",
        desc: "Elige según tu objetivo, disponibilidad y nivel. La recomendación se hace de forma personalizada por WhatsApp.",
        mod1_title: "CLASES PARTICULARES",
        mod1_desc: "Sesiones 1 a 1, personalizadas, enfocadas en tus objetivos y con horarios flexibles.",
        mod2_title: "PLANES MENSUALES",
        mod2_desc: "Combos de horas con continuidad, seguimiento y un proceso sostenido durante el mes.",
        mod3_title: "CURSO INTENSIVO",
        mod3_desc: "Más horas y mayor ritmo de trabajo para avanzar con una ruta estructurada.",
        mod4_title: "MASTER CLASSES",
        mod4_desc: "Grupos pequeños para pronunciation, speaking y práctica especializada.",
        btn_info: "MÁS INFORMACIÓN"
      },
      cta: {
        interactive_subtitle: "HISTORIAS INTERACTIVAS",
        interactive_title1: "ENTIENDE. DECIDE.",
        interactive_title2: "HABLA.",
        interactive_desc: "Una demostración de cómo la página puede convertir el contenido en práctica. El estudiante toma decisiones y la conversación cambia según su respuesta.",
        tag1: "Contexto real",
        tag2: "Decisiones A/B",
        tag3: "Vocabulario útil",
        tag4: "Comunicación natural",
        live_scenario: "LIVE SCENARIO · LONDON",
        scenario_question: "Llegas a un concierto en Londres. Alguien te pregunta: \"Can I help you?\"",
        scenario_btn_a: "A) \"Where is the entrance?\"",
        scenario_btn_b: "B) \"I'm looking for my friends.\"",
        scenario_footer: "Elige una opción para continuar.",
        closing_subtitle: "MI APORTE · DESDE LO QUE SÉ Y DESDE LAS GANAS DE SEGUIR ENSEÑANDO",
        closing_title: "\"EL CONOCIMIENTO NO SIRVE DE MUCHO CUANDO UNO SE LO GUARDA.\"",
        closing_desc: "THE NEW E.R.A. busca compartir una manera de entender el inglés. No para repetir sin pensar, sino para reconocer el sistema, usarlo con intención y llevarlo a conversaciones reales.",
        closing_welcome: "WELCOME!",
        contact_title: "¿LISTO PARA EMPEZAR?",
        contact_desc: "Escríbeme y conversamos sobre tu objetivo, tu nivel y la modalidad que mejor se adapte a ti."
      },
      footer: {
        desc: "La nueva era del aprendizaje. Entiende el sistema, domina la fluidez y comunícate con seguridad.",
        nav_title: "NAVEGACIÓN",
        nav_home: "Inicio",
        nav_methodology: "Metodología",
        nav_program: "Programa",
        nav_pricing: "Precios",
        legal_title: "LEGAL",
        legal_terms: "Términos y Condiciones",
        legal_privacy: "Política de Privacidad",
        rights: "Todos los derechos reservados."
      },
      login: {
        title: "INICIAR SESIÓN",
        subtitle: "BIENVENIDO DE VUELTA A LA NUEVA E.R.A.",
        email_label: "Correo Electrónico",
        email_placeholder: "tu@correo.com",
        password_label: "Contraseña",
        password_placeholder: "••••••••",
        btn_submit: "ENTRAR",
        forgot_password: "¿Olvidaste tu contraseña?",
        no_account: "¿No tienes una cuenta?",
        register_link: "Regístrate aquí",
        back_home: "← Volver al inicio"
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: "HOME",
        methodology: "METHODOLOGY",
        pricing: "PRICING",
        program: "PROGRAM",
        contact: "CONTACT",
        login: "LOG IN"
      },
      hero: {
        subtitle: "LISTEN, REPEAT AND LEARN",
        description: "It's not about memorizing phrases. It's about understanding how English works, recognizing it when spoken fast, and using it to tell what happened, what happens, and what you want to happen.",
        btnPrimary: "WHATSAPP CONSULTATION",
        btnSecondary: "DISCOVER THE STORY"
      },
      heroStats: {
        stat1: "SOUND",
        stat2: "WORD",
        stat3: "IDEA",
        stat4: "STRUCTURE",
        stat5: "INTENTION",
        stat6: "SPEECH",
        stat7: "FLUENCY"
      },
      teacherInfo: {
        subtitle: "INTRODUCTION · WHY THIS PROJECT EXISTS",
        title: "\"I LIKE TEACHING.\"",
        col1_1: "There's something I've always been clear about: ",
        col1_bold1: "I like teaching",
        col1_2: ". I love it when someone who spent years saying 'I'm bad at English' suddenly understands something, pronounces it well, builds a sentence, and realizes that what seemed so complicated suddenly wasn't. ",
        col1_bold2: "That moment is awesome.",
        col1_h4: "AND THAT IS EXACTLY WHY IT WAS BORN:",
        col2: "If it were up to me, I'd teach all of this for free. Because knowledge grows when you share it. I want this to reach the person starting from scratch, the one who has been studying for years, the one who needs English for work, travel or study, and the one who simply wants to learn something new.",
        col3_bold: "I want you to understand how English works.",
        col3: "It's one thing to memorize a hundred phrases, and quite another to understand why they work. It's one thing to repeat a word, and another to be able to recognize it when someone says it fast.",
        banner_subtitle: "THE SYSTEM BEHIND THE LANGUAGE",
        banner_title: "FROM SOUND TO FLUENCY",
        banner_desc: "THE NEW E.R.A. organizes learning progressively: first you understand how the language sounds, then how words and ideas are formed, then how verbs, tense, possibilities, and intentions relate to each other.",
        banner_quote: "\"Spelling tells you how it's written. Pronunciation tells you how it sounds. Grammar tells you how it works. Usage tells you when a person would say it.\"",
        tag1: "Phonetics",
        tag2: "Grammar",
        tag3: "Real usage",
        tag4: "Speaking",
        tag5: "Fluency"
      },
      topicsGrid: {
        subtitle: "THE E.R.A · 9 CAPÍTULOS ESENCIALES",
        title1: "UN CAMINO, NO NUEVE TEMAS",
        title2: "AISLADOS",
        desc: "Cada capítulo prepara el terreno para el siguiente. Del sonido a la palabra; de la palabra a la idea; de la idea a la estructura; y de la estructura a la comunicación natural.",
        t1_title: "FONÉTICA Y SONIDO",
        t1_desc: "IPA, vocales, consonantes, schwa, terminaciones, word stress, sentence stress, linking y entonación.",
        t2_title: "SUSTANTIVOS Y DETERMINANTES",
        t2_desc: "Contables e incontables, plurales, artículos, demostrativos, posesivos y cuantificadores.",
        t3_title: "PRONOMBRES",
        t3_desc: "Personales, objeto, posesivos, reflexivos, relativos, indefinidos y concordancia.",
        t4_title: "VERBOS",
        t4_desc: "To be, regulares, irregulares, auxiliares, modales, phrasal verbs, gerundios, infinitivos y participios.",
        t5_title: "TIEMPOS VERBALES",
        t5_desc: "Presente, pasado, futuro, perfectos, continuos, used to, would y señales temporales.",
        t6_title: "ADJETIVOS Y ADVERBIOS",
        t6_desc: "Comparativos, superlativos, frecuencia, grado, too/enough, so/such y orden natural.",
        t7_title: "PREPOSICIONES Y CONECTORES",
        t7_desc: "Lugar, tiempo, movimiento y conectores para relacionar ideas con lógica y fluidez.",
        t8_title: "ESTRUCTURAS AVANZADAS",
        t8_desc: "Pasiva, causativas, reported speech, condicionales, wish / if only y cambios de perspectiva.",
        t9_title: "INGLÉS REAL Y FLUIDEZ",
        t9_desc: "Phrasal verbs, collocations, idioms, slang, false friends, connected speech, ritmo y uso natural."
      },
      topicsGrid: {
        subtitle: "THE E.R.A · 9 ESSENTIAL CHAPTERS",
        title1: "ONE PATH, NOT NINE ISOLATED",
        title2: "TOPICS",
        desc: "Each chapter paves the way for the next. From sound to word; from word to idea; from idea to structure; and from structure to natural communication.",
        t1_title: "PHONETICS AND SOUND",
        t1_desc: "IPA, vowels, consonants, schwa, endings, word stress, sentence stress, linking, and intonation.",
        t2_title: "NOUNS AND DETERMINERS",
        t2_desc: "Countable and uncountable, plurals, articles, demonstratives, possessives, and quantifiers.",
        t3_title: "PRONOUNS",
        t3_desc: "Personal, object, possessive, reflexive, relative, indefinite, and agreement.",
        t4_title: "VERBS",
        t4_desc: "To be, regular, irregular, auxiliary, modal, phrasal verbs, gerunds, infinitives, and participles.",
        t5_title: "VERB TENSES",
        t5_desc: "Present, past, future, perfect, continuous, used to, would, and time markers.",
        t6_title: "ADJECTIVES AND ADVERBS",
        t6_desc: "Comparatives, superlatives, frequency, degree, too/enough, so/such, and natural order.",
        t7_title: "PREPOSITIONS AND CONNECTORS",
        t7_desc: "Place, time, movement, and connectors to link ideas logically and fluently.",
        t8_title: "ADVANCED STRUCTURES",
        t8_desc: "Passive voice, causatives, reported speech, conditionals, wish / if only, and perspective shifts.",
        t9_title: "REAL ENGLISH AND FLUENCY",
        t9_desc: "Phrasal verbs, collocations, idioms, slang, false friends, connected speech, rhythm, and natural usage."
      },
      modalities: {
        subtitle: "LEARN AT YOUR OWN PACE",
        title: "LEARNING MODALITIES",
        desc: "Choose according to your goal, availability, and level. Recommendations are personalized via WhatsApp.",
        mod1_title: "PRIVATE LESSONS",
        mod1_desc: "1-on-1 sessions, personalized, focused on your goals with flexible schedules.",
        mod2_title: "MONTHLY PLANS",
        mod2_desc: "Hour packages with continuity, tracking, and a sustained process throughout the month.",
        mod3_title: "INTENSIVE COURSE",
        mod3_desc: "More hours and a faster work pace to advance with a structured path.",
        mod4_title: "MASTER CLASSES",
        mod4_desc: "Small groups for pronunciation, speaking, and specialized practice.",
        btn_info: "MORE INFORMATION"
      },
      cta: {
        interactive_subtitle: "INTERACTIVE STORIES",
        interactive_title1: "UNDERSTAND. DECIDE.",
        interactive_title2: "SPEAK.",
        interactive_desc: "A demonstration of how the website can turn content into practice. The student makes decisions and the conversation changes based on their response.",
        tag1: "Real context",
        tag2: "A/B Decisions",
        tag3: "Useful vocabulary",
        tag4: "Natural communication",
        live_scenario: "LIVE SCENARIO · LONDON",
        scenario_question: "You arrive at a concert in London. Someone asks you: \"Can I help you?\"",
        scenario_btn_a: "A) \"Where is the entrance?\"",
        scenario_btn_b: "B) \"I'm looking for my friends.\"",
        scenario_footer: "Choose an option to continue.",
        closing_subtitle: "MY CONTRIBUTION · FROM WHAT I KNOW AND MY DESIRE TO KEEP TEACHING",
        closing_title: "\"KNOWLEDGE ISN'T WORTH MUCH IF YOU KEEP IT TO YOURSELF.\"",
        closing_desc: "THE NEW E.R.A. seeks to share a way of understanding English. Not to repeat without thinking, but to recognize the system, use it with intention, and take it to real conversations.",
        closing_welcome: "WELCOME!",
        contact_title: "READY TO START?",
        contact_desc: "Write to me and we can chat about your goals, your level, and the modality that best suits you."
      },
      cta: {
        interactive_subtitle: "INTERACTIVE STORIES",
        interactive_title1: "UNDERSTAND. DECIDE.",
        interactive_title2: "SPEAK.",
        interactive_desc: "A demonstration of how the website can turn content into practice. The student makes decisions and the conversation changes based on their response.",
        tag1: "Real context",
        tag2: "A/B Decisions",
        tag3: "Useful vocabulary",
        tag4: "Natural communication",
        live_scenario: "LIVE SCENARIO · LONDON",
        scenario_question: "You arrive at a concert in London. Someone asks you: \"Can I help you?\"",
        scenario_btn_a: "A) \"Where is the entrance?\"",
        scenario_btn_b: "B) \"I'm looking for my friends.\"",
        scenario_footer: "Choose an option to continue.",
        closing_subtitle: "MY CONTRIBUTION · FROM WHAT I KNOW AND MY DESIRE TO KEEP TEACHING",
        closing_title: "\"KNOWLEDGE ISN'T WORTH MUCH IF YOU KEEP IT TO YOURSELF.\"",
        closing_desc: "THE NEW E.R.A. seeks to share a way of understanding English. Not to repeat without thinking, but to recognize the system, use it with intention, and take it to real conversations.",
        closing_welcome: "WELCOME!",
        contact_title: "READY TO START?",
        contact_desc: "Write to me and we can chat about your goals, your level, and the modality that best suits you."
      },
      footer: {
        desc: "The new era of learning. Understand the system, master fluency, and communicate with confidence.",
        nav_title: "NAVIGATION",
        nav_home: "Home",
        nav_methodology: "Methodology",
        nav_program: "Program",
        nav_pricing: "Pricing",
        legal_title: "LEGAL",
        legal_terms: "Terms and Conditions",
        legal_privacy: "Privacy Policy",
        rights: "All rights reserved."
      },
      login: {
        title: "LOG IN",
        subtitle: "WELCOME BACK TO THE NEW E.R.A.",
        email_label: "Email Address",
        email_placeholder: "you@email.com",
        password_label: "Password",
        password_placeholder: "••••••••",
        btn_submit: "ENTER",
        forgot_password: "Forgot your password?",
        no_account: "Don't have an account?",
        register_link: "Sign up here",
        back_home: "← Back to home"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es", // Idioma principal por defecto
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;