// Contenido bilingüe del portafolio. Edita aquí los textos.
export type Lang = 'es' | 'en';

type Bi = { es: string; en: string };

export type Project = {
  repo: string; // nombre exacto del repositorio en GitHub
  title: Bi;
  desc: Bi;
  stack: string[];
  // Se usan si la API de GitHub no responde durante el build.
  fallback: { language: string; pushed: string };
  // Proyectos con group 'store' se muestran juntos como comparación.
  group?: 'store';
  variant?: Bi;
};

export const projects: Project[] = [
  {
    repo: 'Tienda_Tecnologia_Monolitica',
    title: { es: 'Tienda tecnológica con Flask y Jinja2', en: 'Tech store with Flask and Jinja2' },
    desc: {
      es: 'La misma tienda como una sola aplicación Flask con plantillas Jinja2: CRUD, subida de imágenes y control dinámico de stock, con interfaz responsive en Bootstrap 5.',
      en: 'The same store as a single Flask application with Jinja2 templates: CRUD, image upload and dynamic stock control, with a responsive Bootstrap 5 interface.',
    },
    stack: ['Flask', 'Jinja2', 'Bootstrap 5', 'SQLite'],
    fallback: { language: 'Python', pushed: '2026-03-13' },
    group: 'store',
    variant: { es: 'Monolito', en: 'Monolith' },
  },  {
    repo: 'Tienda_Tecnologia_Microservicios',
    title: { es: 'Tienda tecnológica con React y Flask', en: 'Tech store with React and Flask' },
    desc: {
      es: 'CRUD de productos con frontend en React y API REST en Flask, comunicados por HTTP. Incluye subida de imágenes y una arquitectura por capas: modelos, controladores y rutas.',
      en: 'Product CRUD with a React frontend and a Flask REST API talking over HTTP. Includes image upload and a layered architecture: models, controllers and routes.',
    },
    stack: ['React', 'Flask', 'SQLAlchemy', 'SQLite', 'REST', 'Bootstrap'],
    fallback: { language: 'Python', pushed: '2026-03-13' },
    group: 'store',
    variant: { es: 'Frontend y API separados', en: 'Separate frontend and API' },
  },  {
    repo: 'Api-Rest-Laravel-Docker',
    title: { es: 'API REST con Laravel y Docker', en: 'REST API with Laravel and Docker' },
    desc: {
      es: 'API REST de productos (CRUD, versión v1) en Laravel y MySQL, orquestada con Docker Compose junto a phpMyAdmin. Servicios aislados en una red interna y datos persistentes.',
      en: 'Products REST API (CRUD, v1) in Laravel and MySQL, orchestrated with Docker Compose alongside phpMyAdmin. Isolated services on an internal network with persistent data.',
    },
    stack: ['Laravel', 'PHP', 'MySQL', 'Docker Compose', 'Apache'],
    fallback: { language: 'PHP', pushed: '2026-04-20' },
  },  {
    repo: 'Sistema-Generacion-Tokens-Acceso',
    title: { es: 'Sistema de acceso con tokens', en: 'Token-based access system' },
    desc: {
      es: 'Inicio de sesión con token, recuperación de contraseña y gestión de usuarios, construido con Web Components (Lit) y Vite.',
      en: 'Token login, password recovery and user management, built with Web Components (Lit) and Vite.',
    },
    stack: ['Lit', 'Web Components', 'JavaScript', 'Vite'],
    fallback: { language: 'JavaScript', pushed: '2023-10-30' },
  },  {
    repo: 'Proyectos-JS',
    title: { es: 'Catálogo de mini proyectos en JavaScript', en: 'Collection of small JavaScript projects' },
    desc: {
      es: '14 aplicaciones pequeñas en HTML, CSS y JavaScript puro: calculadora, relojes analógico y digital, cronómetro, menús, contador de Navidad y más.',
      en: '14 small apps in plain HTML, CSS and JavaScript: calculator, analog and digital clocks, stopwatch, menus, Christmas countdown and more.',
    },
    stack: ['HTML', 'CSS', 'JavaScript'],
    fallback: { language: 'JavaScript', pushed: '2023-11-29' },
  },
];

type Job = {
  role: Bi;
  company: string;
  period: Bi;
  points: Bi[];
};

export const jobs: Job[] = [
  {
    role: { es: 'Analista Programador', en: 'Programmer Analyst' },
    company: 'Sistran Colombia S.A',
    period: { es: 'abr 2026 – nov 2026', en: 'Apr 2026 – Nov 2026' },
    points: [
      {
        es: 'Participé en la adaptación del componente de facturación electrónica de SBS Seguros, integrando al proveedor Estupendo con C#, .NET Framework y .NET 8.',
        en: 'Took part in adapting the electronic invoicing component for SBS Seguros, integrating the Estupendo provider with C#, .NET Framework and .NET 8.',
      },
      {
        es: 'Construí desde cero el XML de factura electrónica bajo UBL 2.1 y los requisitos de la DIAN, con mapeo de DTO y validación de XML y JSON.',
        en: 'Built the electronic invoice XML from scratch under UBL 2.1 and DIAN requirements, with DTO mapping and XML and JSON validation.',
      },
      {
        es: 'Desarrollé librerías y workers con APIs REST y RabbitMQ: procesamiento asíncrono, consulta de estados, manejo de excepciones y reintentos.',
        en: 'Developed libraries and workers with REST APIs and RabbitMQ: asynchronous processing, status queries, exception handling and retries.',
      },
      {
        es: 'Escribí procedimientos almacenados y scripts T-SQL en SQL Server para extraer y validar datos según las reglas de negocio de cada modalidad de facturación.',
        en: 'Wrote stored procedures and T-SQL scripts in SQL Server to extract and validate data under the business rules of each invoicing mode.',
      },
      {
        es: 'Creé herramientas en PowerShell para instalar, configurar y desinstalar aplicaciones, servicios de Windows y sitios en IIS. Hice pruebas de integración y depuré con logs; control de cambios con Git y Azure DevOps.',
        en: 'Created PowerShell tools to install, configure and uninstall applications, Windows services and IIS sites. Ran integration tests and debugged with logs; version control with Git and Azure DevOps.',
      },
    ],
  },
  {
    role: { es: 'Estudiante de Programación', en: 'Programming Trainee' },
    company: 'Sistran Colombia S.A',
    period: { es: 'nov 2024 – oct 2025', en: 'Nov 2024 – Oct 2025' },
    points: [
      {
        es: 'Desarrollo con enfoque en APIs REST y automatizaciones en N8N para optimizar procesos.',
        en: 'Development focused on REST APIs and N8N automations to streamline processes.',
      },
      {
        es: 'Gestión de Git con ramas, merges y pull requests para mantener la trazabilidad del código.',
        en: 'Git workflow with branches, merges and pull requests to keep code traceable.',
      },
      {
        es: 'Automatización de pruebas en C# con Selenium WebDriver, integrada con Azure DevOps: ejecución iterativa de casos y reportes automáticos.',
        en: 'Test automation in C# with Selenium WebDriver, integrated with Azure DevOps: iterative test-case runs and automatic reports.',
      },
      {
        es: 'Administración de casos de prueba, historias de usuario, tareas y bugs en Azure DevOps.',
        en: 'Management of test cases, user stories, tasks and bugs in Azure DevOps.',
      },
    ],
  },
  {
    role: { es: 'Practicante de Gobierno de Datos', en: 'Data Governance Intern' },
    company: 'Banco Popular S.A',
    period: { es: 'dic 2023 – jun 2024', en: 'Dec 2023 – Jun 2024' },
    points: [
      {
        es: 'Actualicé archivos de datos de referencia y mantuve la calidad de los datos siguiendo reglas establecidas.',
        en: 'Updated reference data files and maintained data quality following established rules.',
      },
      {
        es: 'Preparé informes de calidad de datos con tableros de control y apoyé la actualización del modelo de gobierno de información.',
        en: 'Prepared data quality reports with dashboards and supported updates to the information governance model.',
      },
      {
        es: 'Ejecuté pruebas de calidad sobre datos críticos del negocio junto a líderes de dominio.',
        en: 'Ran quality tests on business-critical data together with domain leads.',
      },
    ],
  },
];

export const education: { title: Bi; place: Bi; when: Bi }[] = [
  {
    title: { es: 'Ingeniería de Sistemas', en: 'Systems Engineering' },
    place: { es: 'Corporación Universitaria Minuto de Dios', en: 'Corporación Universitaria Minuto de Dios' },
    when: { es: 'En curso, octavo semestre', en: 'In progress, eighth semester' },
  },
  {
    title: { es: 'Tecnólogo en Análisis y Desarrollo de Software', en: 'Technologist in Software Analysis and Development' },
    place: { es: 'SENA', en: 'SENA' },
    when: { es: '2024', en: '2024' },
  },
  {
    title: { es: 'Técnico en Programación de Software', en: 'Technician in Software Programming' },
    place: { es: 'SENA', en: 'SENA' },
    when: { es: '2022', en: '2022' },
  },
];

export const skills: { label: Bi; items: Bi }[] = [
  { label: { es: 'Lenguajes', en: 'Languages' }, items: { es: 'C#, Java, JavaScript, HTML, CSS', en: 'C#, Java, JavaScript, HTML, CSS' } },
  { label: { es: 'Frameworks', en: 'Frameworks' }, items: { es: '.NET, Angular', en: '.NET, Angular' } },
  { label: { es: 'Bases de datos', en: 'Databases' }, items: { es: 'SQL Server, MySQL', en: 'SQL Server, MySQL' } },
  {
    label: { es: 'Integración', en: 'Integration' },
    items: { es: 'APIs REST, RabbitMQ, PowerShell', en: 'REST APIs, RabbitMQ, PowerShell' },
  },
  {
    label: { es: 'Pruebas y automatización', en: 'Testing and automation' },
    items: { es: 'Selenium WebDriver, Azure DevOps, N8N', en: 'Selenium WebDriver, Azure DevOps, N8N' },
  },
  {
    label: { es: 'Herramientas', en: 'Tools' },
    items: { es: 'Git, GitHub, Visual Studio, Excel', en: 'Git, GitHub, Visual Studio, Excel' },
  },
  {
    label: { es: 'En proyectos personales', en: 'In personal projects' },
    items: { es: 'Python (Flask), PHP (Laravel), React, Docker', en: 'Python (Flask), PHP (Laravel), React, Docker' },
  },
  {
    label: { es: 'Metodologías', en: 'Methodologies' },
    items: { es: 'Scrum, casos de prueba, trazabilidad', en: 'Scrum, test cases, traceability' },
  },
  {
    label: { es: 'Habilidades blandas', en: 'Soft skills' },
    items: {
      es: 'Resolución de problemas, orientación a resultados, adaptabilidad, empatía y colaboración',
      en: 'Problem solving, results orientation, adaptability, empathy and collaboration',
    },
  },
];

// Textos de la interfaz.
export const ui = {
  es: {
    htmlLang: 'es',
    locale: 'es_CO',
    title: 'Andrés Bohórquez, desarrollador backend en C# y .NET',
    description:
      'Portafolio de Andrés Bohórquez: desarrollador backend en C# y .NET con experiencia en facturación electrónica, APIs REST, RabbitMQ y SQL Server. Proyectos, experiencia y contacto.',
    skip: 'Saltar al contenido',
    nav: { projects: 'Proyectos', experience: 'Experiencia', education: 'Formación', skills: 'Habilidades', contact: 'Contacto' },
    switchTo: 'English',
    switchLabel: 'View this page in English',
    theme: 'Cambiar entre tema claro y oscuro',
    role: 'Desarrollador backend en C# y .NET',
    summary:
      'Construyo integraciones y servicios empresariales: facturación electrónica con la DIAN, APIs REST, colas con RabbitMQ y procedimientos en SQL Server. Estudio Ingeniería de Sistemas, octavo semestre.',
    ctaProjects: 'Ver proyectos',
    ctaCv: 'Descargar hoja de vida',
    stampRing: 'DESARROLLADOR BACKEND · C# · .NET · SQL SERVER · ',
    projectsTitle: 'Proyectos',
    projectsIntro: 'Una selección de mis repositorios públicos en GitHub.',
    pairTitle: 'Una tienda, dos arquitecturas',
    pairText:
      'Construí el mismo CRUD de productos dos veces: primero como una aplicación Flask que renderiza sus propias vistas, y después separando un frontend en React de una API REST.',
    cvSpanish: '',
    viewCode: 'Ver código en GitHub',
    updated: 'Actualizado',
    moreOnGithub: 'Ver todos mis repositorios en GitHub',
    experienceTitle: 'Experiencia',
    educationTitle: 'Formación',
    skillsTitle: 'Habilidades',
    contactTitle: 'Contacto',
    contactText: 'Estoy disponible para nuevas oportunidades como desarrollador. Escríbeme o revisa mi código.',
    emailLabel: 'Correo',
    footer: 'Bogotá, Colombia',
  },
  en: {
    htmlLang: 'en',
    locale: 'en_US',
    title: 'Andrés Bohórquez, backend developer in C# and .NET',
    description:
      'Portfolio of Andrés Bohórquez: backend developer in C# and .NET with experience in electronic invoicing, REST APIs, RabbitMQ and SQL Server. Projects, experience and contact.',
    skip: 'Skip to content',
    nav: { projects: 'Projects', experience: 'Experience', education: 'Education', skills: 'Skills', contact: 'Contact' },
    switchTo: 'Español',
    switchLabel: 'Ver esta página en español',
    theme: 'Switch between light and dark theme',
    role: 'Backend developer in C# and .NET',
    summary:
      'I build enterprise integrations and services: electronic invoicing for Colombia’s tax authority (DIAN), REST APIs, RabbitMQ queues and SQL Server procedures. Systems Engineering student, eighth semester.',
    ctaProjects: 'View projects',
    ctaCv: 'Download CV',
    stampRing: 'BACKEND DEVELOPER · C# · .NET · SQL SERVER · ',
    projectsTitle: 'Projects',
    projectsIntro: 'A selection of my public repositories on GitHub.',
    pairTitle: 'One store, two architectures',
    pairText:
      'I built the same product CRUD twice: first as a Flask app that renders its own views, then split into a React frontend and a REST API.',
    cvSpanish: ' (en español)',
    viewCode: 'View code on GitHub',
    updated: 'Updated',
    moreOnGithub: 'See all my repositories on GitHub',
    experienceTitle: 'Experience',
    educationTitle: 'Education',
    skillsTitle: 'Skills',
    contactTitle: 'Contact',
    contactText: 'I am available for new opportunities as a developer. Write to me or browse my code.',
    emailLabel: 'Email',
    footer: 'Bogotá, Colombia',
  },
} as const;
