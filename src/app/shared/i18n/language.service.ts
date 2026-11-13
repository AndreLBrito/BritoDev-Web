import { DOCUMENT } from '@angular/common';
import { effect, inject, Injectable, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export type SupportedLanguage = 'pt-BR' | 'es' | 'en';
type Page = 'home' | 'notFound';

const siteOrigin = 'https://britodev.com.br';
const languagePaths: Record<SupportedLanguage, string> = {
  'pt-BR': '/pt-br/',
  es: '/es/',
  en: '/en/',
};

const portuguese = {
  'language.label': 'Selecionar idioma',
  'language.portuguese': 'Português',
  'language.spanish': 'Español',
  'language.english': 'English',
  'nav.skip': 'Ir para o conteúdo',
  'nav.open': 'Abrir menu',
  'nav.close': 'Fechar menu',
  'nav.main': 'Navegação principal',
  'nav.services': 'Serviços',
  'nav.process': 'Como trabalho',
  'nav.projects': 'Projetos',
  'nav.about': 'Sobre',
  'nav.contact': 'Contato profissional',
  'hero.availability': 'Atendimento a projetos sob demanda',
  'hero.eyebrow': 'Desenvolvimento sob demanda em C#/.NET e web',
  'hero.title': 'Software com',
  'hero.titleAccent': 'rigor técnico.',
  'hero.descriptionBefore':
    'Sou André Brito, desenvolvedor back-end com experiência profissional desde 2017. Na',
  'hero.descriptionAfter':
    'desenvolvo sites, sistemas, APIs e integrações alinhados às necessidades de cada operação.',
  'hero.primaryAction': 'Solicitar uma avaliação',
  'hero.secondaryAction': 'Examinar projetos técnicos',
  'hero.professionalInfo': 'Informações profissionais',
  'hero.location': 'Espírito Santo · trabalho remoto',
  'hero.audience': 'Empresas e times de tecnologia',
  'hero.visualLabel': 'Foto de André Brito e tecnologias principais',
  'hero.photoAlt': 'André Brito, desenvolvedor de software e fundador da BritoDev',
  'hero.status': 'status: disponível para avaliação_',
  'hero.summaryLabel': 'Resumo de atuação',
  'hero.proofExperienceTitle': 'Desde 2017',
  'hero.proofExperienceText': 'experiência profissional',
  'hero.proofSystemsTitle': 'ERP e APIs',
  'hero.proofSystemsText': 'sistemas e integrações de negócio',
  'hero.proofDemandTitle': 'Sob demanda',
  'hero.proofDemandText': 'análise, entrega e manutenção',
  'services.eyebrow': 'Escopo de atuação',
  'services.title': 'Soluções digitais com responsabilidade técnica.',
  'services.description':
    'Desenvolvimento orientado por requisitos, escopo definido e decisões compatíveis com a realidade técnica e operacional de cada projeto.',
  'services.webTitle': 'Sites institucionais e aplicações web',
  'services.webDescription':
    'Interfaces responsivas para apresentação institucional, captação de oportunidades e apoio a processos internos.',
  'services.webItem1': 'Navegação responsiva e acessível',
  'services.webItem2': 'Estrutura preparada para manutenção',
  'services.apiTitle': 'APIs e sistemas de negócio',
  'services.apiDescription':
    'APIs REST, módulos de ERP e aplicações em C#/.NET para processos comerciais e dados.',
  'services.apiItem1': 'Regras de negócio e integrações',
  'services.apiItem2': 'Bancos relacionais e autenticação',
  'services.automationTitle': 'Automação e integração de processos',
  'services.automationDescription':
    'Rotinas e serviços para centralizar operações, conectar sistemas e reduzir trabalho manual.',
  'services.automationItem1': 'Processos conectados',
  'services.automationItem2': 'Execução controlada e rastreável',
  'services.maintenanceTitle': 'Manutenção e evolução de sistemas',
  'services.maintenanceDescription':
    'Sustentação, correção e modernização em .NET, Delphi e Lazarus para equipes parceiras.',
  'services.maintenanceItem1': 'Correção e refatoração de código legado',
  'services.maintenanceItem2': 'Testes e evolução incremental',
  'services.audiencesLabel': 'Públicos atendidos',
  'services.businessTag': 'Para negócios',
  'services.businessTitle': 'Pequenas empresas e profissionais',
  'services.businessText':
    'Presença digital e ferramentas adequadas ao processo e à capacidade de investimento.',
  'services.techTag': 'Para parceiros tech',
  'services.techTitle': 'Software houses e agências',
  'services.techText':
    'Capacidade técnica adicional para integrações, sustentação e demandas especializadas.',
  'process.eyebrow': 'Como trabalho',
  'process.title': 'Um processo objetivo, com decisões verificáveis.',
  'process.lead':
    'O trabalho começa pela compreensão do problema, das restrições e dos critérios de aceite. Tecnologia e arquitetura são definidas a partir desse contexto.',
  'process.diagnoseTitle': 'Diagnosticar',
  'process.diagnoseText':
    'Contexto, objetivo, sistemas existentes, restrições e critérios de aceite.',
  'process.planTitle': 'Planejar',
  'process.planText':
    'Escopo, prioridades, riscos, escolhas técnicas e etapas de execução documentadas.',
  'process.implementTitle': 'Implementar',
  'process.implementText':
    'Desenvolvimento incremental, código revisável, testes aplicáveis e validação contínua.',
  'process.evolveTitle': 'Evoluir',
  'process.evolveText':
    'Entrega documentada, acompanhamento técnico e manutenção orientada por prioridade.',
  'process.note':
    'Escopo, decisões e andamento são comunicados de forma direta, com registro do que influencia prazo, custo e manutenção.',
  'projects.eyebrow': 'Projetos selecionados',
  'projects.title': 'Evidência técnica em repositórios públicos.',
  'projects.description':
    'Implementações que demonstram decisões de arquitetura, segurança, testes, observabilidade e experiência de uso.',
  'projects.all': 'Todos no GitHub',
  'projects.taskflowTag': 'Full stack · Kanban colaborativo',
  'projects.taskflowText':
    'Aplicação Kanban para workspaces, quadros, tarefas, comentários, membros e permissões, com auditoria, métricas e testes automatizados.',
  'projects.taskflowTech': 'Tecnologias do TaskFlow',
  'projects.exploreRepository': 'Explorar repositório',
  'projects.pricewiseTag': 'Full stack · Monitoramento de preços',
  'projects.webExperience': 'Interface e experiência de uso',
  'projects.webFeatures': 'Produtos · lojas · histórico · alertas',
  'projects.apiProcessing': 'Regras, segurança e processamento',
  'projects.apiFeatures': 'Autenticação · preços · notificações',
  'projects.pricewiseText':
    'Solução dividida em dois repositórios com responsabilidades distintas: a aplicação web apresenta e valida as interações do usuário, enquanto a API concentra dados, regras de negócio, autenticação e tarefas em segundo plano.',
  'projects.frontend': 'Front-end',
  'projects.frontendText':
    'Interface React para consulta, administração, histórico e configuração de alertas.',
  'projects.backend': 'Back-end',
  'projects.backendText':
    'API .NET responsável por persistência, cache, segurança e processamento agendado.',
  'projects.pricewiseTech': 'Tecnologias da solução PriceWise',
  'projects.pricewiseRepos': 'Repositórios da solução PriceWise',
  'projects.webRepository': 'Repositório Web',
  'projects.apiRepository': 'Repositório API',
  'projects.otherLabel': 'Outros experimentos públicos',
  'projects.otherTag': 'Repositórios complementares',
  'projects.otherTitle': 'Exemplos em Lazarus e outros experimentos',
  'projects.otherText':
    'Exemplos e experimentos usados para registrar soluções, validar abordagens e manter referências técnicas.',
  'projects.viewExamples': 'Ver exemplos',
  'about.eyebrow': 'Experiência profissional',
  'about.title': 'Atuação em sistemas de negócio e back-end .NET.',
  'about.lead':
    'Sou André Lucas de Brito, desenvolvedor back-end em Cariacica, Espírito Santo. Atuo profissionalmente desde 2017, com experiência em sistemas ERP, APIs REST, regras de negócio, integrações e bancos de dados relacionais.',
  'about.text':
    'Trabalhei com Pascal e Lazarus entre 2017 e 2020 e com C#/.NET entre 2020 e 2025 na Tecnobyte. Desde 2026, também desenvolvo projetos independentes sob demanda. A BritoDev reúne essa experiência para atender negócios e equipes de tecnologia com comunicação direta e critérios técnicos claros.',
  'about.communicationTitle': 'Comunicação objetiva',
  'about.communicationText': 'Contexto, riscos, decisões e andamento apresentados sem ambiguidade.',
  'about.qualityTitle': 'Qualidade verificável',
  'about.qualityText':
    'Legibilidade, testes, observabilidade e revisão aplicados conforme o risco do projeto.',
  'about.maintenanceTitle': 'Manutenção sustentável',
  'about.maintenanceText':
    'Soluções proporcionais ao problema e preparadas para correção e evolução.',
  'about.cardLabel': 'Resumo técnico de André Brito',
  'about.codeLabel': 'Resumo profissional em formato de código',
  'about.codeClarity': 'clareza',
  'about.codeTests': 'testes',
  'about.codeObservability': 'observabilidade',
  'about.stackLabel': 'Tecnologias principais',
  'contact.eyebrow': 'Contato profissional',
  'contact.title': 'Descreva a necessidade técnica ou operacional.',
  'contact.text':
    'Compartilhe o contexto do projeto para uma avaliação inicial de escopo, riscos e próximos passos.',
  'contact.channel': 'Canal principal',
  'contact.emailAction': 'Enviar e-mail',
  'contact.linkedinAction': 'Contato pelo LinkedIn',
  'contact.location': 'Espírito Santo · atendimento remoto',
  'contact.briefLabel': 'Informações úteis para iniciar uma conversa',
  'contact.briefTag': 'Informações para avaliação',
  'contact.briefTitle': 'Inclua, se possível:',
  'contact.briefItem1': 'Problema ou objetivo principal',
  'contact.briefItem2': 'Sistema ou processo existente',
  'contact.briefItem3': 'Resultado esperado',
  'contact.briefItem4': 'Prazo, integrações e restrições relevantes',
  'contact.emailSubject': 'Contato pelo site BritoDev',
  'footer.tagline':
    'Desenvolvimento de software com clareza técnica e responsabilidade de entrega.',
  'footer.navLabel': 'Contato e redes profissionais',
  'footer.credit': 'Desenvolvido por André Brito.',
  'footer.backToTop': 'Voltar ao topo',
  'notFound.title': 'Página não encontrada',
  'notFound.text': 'O endereço informado não corresponde a uma página disponível.',
  'notFound.action': 'Voltar para a página inicial',
  'meta.homeTitle': 'BritoDev | Desenvolvimento de software e integrações',
  'meta.notFoundTitle': 'Página não encontrada | BritoDev',
  'meta.description':
    'Desenvolvimento de sites, sistemas, APIs, automações e integrações com experiência em C#/.NET, Delphi e Lazarus.',
  'meta.socialDescription':
    'Desenvolvimento de software para empresas, profissionais, software houses e agências.',
  'meta.organizationDescription':
    'Desenvolvimento de sites, sistemas, APIs, automações e integrações.',
  'meta.jobTitle': 'Desenvolvedor de software',
  'meta.integrations': 'Integrações',
} as const;

export type TranslationKey = keyof typeof portuguese;
type TranslationDictionary = Record<TranslationKey, string>;

const spanish: TranslationDictionary = {
  'language.label': 'Seleccionar idioma',
  'language.portuguese': 'Português',
  'language.spanish': 'Español',
  'language.english': 'English',
  'nav.skip': 'Ir al contenido',
  'nav.open': 'Abrir menú',
  'nav.close': 'Cerrar menú',
  'nav.main': 'Navegación principal',
  'nav.services': 'Servicios',
  'nav.process': 'Cómo trabajo',
  'nav.projects': 'Proyectos',
  'nav.about': 'Sobre mí',
  'nav.contact': 'Contacto profesional',
  'hero.availability': 'Atención a proyectos bajo demanda',
  'hero.eyebrow': 'Desarrollo bajo demanda en C#/.NET y web',
  'hero.title': 'Software con',
  'hero.titleAccent': 'rigor técnico.',
  'hero.descriptionBefore':
    'Soy André Brito, desarrollador back-end con experiencia profesional desde 2017. En',
  'hero.descriptionAfter':
    'desarrollo sitios, sistemas, API e integraciones alineados con las necesidades de cada operación.',
  'hero.primaryAction': 'Solicitar una evaluación',
  'hero.secondaryAction': 'Examinar proyectos técnicos',
  'hero.professionalInfo': 'Información profesional',
  'hero.location': 'Espírito Santo · trabajo remoto',
  'hero.audience': 'Empresas y equipos de tecnología',
  'hero.visualLabel': 'Foto de André Brito y tecnologías principales',
  'hero.photoAlt': 'André Brito, desarrollador de software y fundador de BritoDev',
  'hero.status': 'estado: disponible para evaluación_',
  'hero.summaryLabel': 'Resumen de experiencia',
  'hero.proofExperienceTitle': 'Desde 2017',
  'hero.proofExperienceText': 'experiencia profesional',
  'hero.proofSystemsTitle': 'ERP y API',
  'hero.proofSystemsText': 'sistemas e integraciones de negocio',
  'hero.proofDemandTitle': 'Bajo demanda',
  'hero.proofDemandText': 'análisis, entrega y mantenimiento',
  'services.eyebrow': 'Ámbito de actuación',
  'services.title': 'Soluciones digitales con responsabilidad técnica.',
  'services.description':
    'Desarrollo orientado por requisitos, alcance definido y decisiones compatibles con la realidad técnica y operativa de cada proyecto.',
  'services.webTitle': 'Sitios institucionales y aplicaciones web',
  'services.webDescription':
    'Interfaces adaptables para presentación institucional, captación de oportunidades y apoyo a procesos internos.',
  'services.webItem1': 'Navegación adaptable y accesible',
  'services.webItem2': 'Estructura preparada para mantenimiento',
  'services.apiTitle': 'API y sistemas de negocio',
  'services.apiDescription':
    'API REST, módulos ERP y aplicaciones en C#/.NET para procesos comerciales y datos.',
  'services.apiItem1': 'Reglas de negocio e integraciones',
  'services.apiItem2': 'Bases de datos relacionales y autenticación',
  'services.automationTitle': 'Automatización e integración de procesos',
  'services.automationDescription':
    'Rutinas y servicios para centralizar operaciones, conectar sistemas y reducir el trabajo manual.',
  'services.automationItem1': 'Procesos conectados',
  'services.automationItem2': 'Ejecución controlada y trazable',
  'services.maintenanceTitle': 'Mantenimiento y evolución de sistemas',
  'services.maintenanceDescription':
    'Soporte, corrección y modernización en .NET, Delphi y Lazarus para equipos asociados.',
  'services.maintenanceItem1': 'Corrección y refactorización de código heredado',
  'services.maintenanceItem2': 'Pruebas y evolución incremental',
  'services.audiencesLabel': 'Públicos atendidos',
  'services.businessTag': 'Para negocios',
  'services.businessTitle': 'Pequeñas empresas y profesionales',
  'services.businessText':
    'Presencia digital y herramientas adecuadas al proceso y a la capacidad de inversión.',
  'services.techTag': 'Para socios tecnológicos',
  'services.techTitle': 'Empresas de software y agencias',
  'services.techText':
    'Capacidad técnica adicional para integraciones, soporte y demandas especializadas.',
  'process.eyebrow': 'Cómo trabajo',
  'process.title': 'Un proceso objetivo, con decisiones verificables.',
  'process.lead':
    'El trabajo comienza con la comprensión del problema, las restricciones y los criterios de aceptación. La tecnología y la arquitectura se definen a partir de ese contexto.',
  'process.diagnoseTitle': 'Diagnosticar',
  'process.diagnoseText':
    'Contexto, objetivo, sistemas existentes, restricciones y criterios de aceptación.',
  'process.planTitle': 'Planificar',
  'process.planText':
    'Alcance, prioridades, riesgos, decisiones técnicas y etapas de ejecución documentadas.',
  'process.implementTitle': 'Implementar',
  'process.implementText':
    'Desarrollo incremental, código revisable, pruebas aplicables y validación continua.',
  'process.evolveTitle': 'Evolucionar',
  'process.evolveText':
    'Entrega documentada, seguimiento técnico y mantenimiento orientado por prioridades.',
  'process.note':
    'El alcance, las decisiones y el progreso se comunican de forma directa, registrando lo que influye en el plazo, el costo y el mantenimiento.',
  'projects.eyebrow': 'Proyectos seleccionados',
  'projects.title': 'Evidencia técnica en repositorios públicos.',
  'projects.description':
    'Implementaciones que demuestran decisiones de arquitectura, seguridad, pruebas, observabilidad y experiencia de uso.',
  'projects.all': 'Todos en GitHub',
  'projects.taskflowTag': 'Full stack · Kanban colaborativo',
  'projects.taskflowText':
    'Aplicación Kanban para espacios de trabajo, tableros, tareas, comentarios, miembros y permisos, con auditoría, métricas y pruebas automatizadas.',
  'projects.taskflowTech': 'Tecnologías de TaskFlow',
  'projects.exploreRepository': 'Explorar repositorio',
  'projects.pricewiseTag': 'Full stack · Monitoreo de precios',
  'projects.webExperience': 'Interfaz y experiencia de uso',
  'projects.webFeatures': 'Productos · tiendas · historial · alertas',
  'projects.apiProcessing': 'Reglas, seguridad y procesamiento',
  'projects.apiFeatures': 'Autenticación · precios · notificaciones',
  'projects.pricewiseText':
    'Solución dividida en dos repositorios con responsabilidades distintas: la aplicación web presenta y valida las interacciones del usuario, mientras que la API concentra datos, reglas de negocio, autenticación y tareas en segundo plano.',
  'projects.frontend': 'Front-end',
  'projects.frontendText':
    'Interfaz React para consulta, administración, historial y configuración de alertas.',
  'projects.backend': 'Back-end',
  'projects.backendText':
    'API .NET responsable de persistencia, caché, seguridad y procesamiento programado.',
  'projects.pricewiseTech': 'Tecnologías de la solución PriceWise',
  'projects.pricewiseRepos': 'Repositorios de la solución PriceWise',
  'projects.webRepository': 'Repositorio Web',
  'projects.apiRepository': 'Repositorio API',
  'projects.otherLabel': 'Otros experimentos públicos',
  'projects.otherTag': 'Repositorios complementarios',
  'projects.otherTitle': 'Ejemplos en Lazarus y otros experimentos',
  'projects.otherText':
    'Ejemplos y experimentos utilizados para registrar soluciones, validar enfoques y mantener referencias técnicas.',
  'projects.viewExamples': 'Ver ejemplos',
  'about.eyebrow': 'Experiencia profesional',
  'about.title': 'Experiencia en sistemas de negocio y back-end .NET.',
  'about.lead':
    'Soy André Lucas de Brito, desarrollador back-end en Cariacica, Espírito Santo. Trabajo profesionalmente desde 2017, con experiencia en sistemas ERP, API REST, reglas de negocio, integraciones y bases de datos relacionales.',
  'about.text':
    'Trabajé con Pascal y Lazarus entre 2017 y 2020 y con C#/.NET entre 2020 y 2025 en Tecnobyte. Desde 2026, también desarrollo proyectos independientes bajo demanda. BritoDev reúne esta experiencia para atender a negocios y equipos tecnológicos con comunicación directa y criterios técnicos claros.',
  'about.communicationTitle': 'Comunicación objetiva',
  'about.communicationText': 'Contexto, riesgos, decisiones y progreso presentados sin ambigüedad.',
  'about.qualityTitle': 'Calidad verificable',
  'about.qualityText':
    'Legibilidad, pruebas, observabilidad y revisión aplicadas según el riesgo del proyecto.',
  'about.maintenanceTitle': 'Mantenimiento sostenible',
  'about.maintenanceText':
    'Soluciones proporcionales al problema y preparadas para su corrección y evolución.',
  'about.cardLabel': 'Resumen técnico de André Brito',
  'about.codeLabel': 'Resumen profesional en formato de código',
  'about.codeClarity': 'claridad',
  'about.codeTests': 'pruebas',
  'about.codeObservability': 'observabilidad',
  'about.stackLabel': 'Tecnologías principales',
  'contact.eyebrow': 'Contacto profesional',
  'contact.title': 'Describa la necesidad técnica u operativa.',
  'contact.text':
    'Comparta el contexto del proyecto para una evaluación inicial del alcance, los riesgos y los próximos pasos.',
  'contact.channel': 'Canal principal',
  'contact.emailAction': 'Enviar correo',
  'contact.linkedinAction': 'Contacto por LinkedIn',
  'contact.location': 'Espírito Santo · atención remota',
  'contact.briefLabel': 'Información útil para iniciar una conversación',
  'contact.briefTag': 'Información para evaluación',
  'contact.briefTitle': 'Incluya, si es posible:',
  'contact.briefItem1': 'Problema u objetivo principal',
  'contact.briefItem2': 'Sistema o proceso existente',
  'contact.briefItem3': 'Resultado esperado',
  'contact.briefItem4': 'Plazo, integraciones y restricciones relevantes',
  'contact.emailSubject': 'Contacto desde el sitio BritoDev',
  'footer.tagline': 'Desarrollo de software con claridad técnica y responsabilidad en la entrega.',
  'footer.navLabel': 'Contacto y redes profesionales',
  'footer.credit': 'Desarrollado por André Brito.',
  'footer.backToTop': 'Volver arriba',
  'notFound.title': 'Página no encontrada',
  'notFound.text': 'La dirección indicada no corresponde a una página disponible.',
  'notFound.action': 'Volver a la página de inicio',
  'meta.homeTitle': 'BritoDev | Desarrollo de software e integraciones',
  'meta.notFoundTitle': 'Página no encontrada | BritoDev',
  'meta.description':
    'Desarrollo de sitios, sistemas, API, automatizaciones e integraciones con experiencia en C#/.NET, Delphi y Lazarus.',
  'meta.socialDescription':
    'Desarrollo de software para empresas, profesionales, empresas de software y agencias.',
  'meta.organizationDescription':
    'Desarrollo de sitios, sistemas, API, automatizaciones e integraciones.',
  'meta.jobTitle': 'Desarrollador de software',
  'meta.integrations': 'Integraciones',
};

const english: TranslationDictionary = {
  'language.label': 'Select language',
  'language.portuguese': 'Português',
  'language.spanish': 'Español',
  'language.english': 'English',
  'nav.skip': 'Skip to content',
  'nav.open': 'Open menu',
  'nav.close': 'Close menu',
  'nav.main': 'Main navigation',
  'nav.services': 'Services',
  'nav.process': 'How I work',
  'nav.projects': 'Projects',
  'nav.about': 'About',
  'nav.contact': 'Professional contact',
  'hero.availability': 'Available for on-demand projects',
  'hero.eyebrow': 'On-demand C#/.NET and web development',
  'hero.title': 'Software with',
  'hero.titleAccent': 'technical rigor.',
  'hero.descriptionBefore':
    'I am André Brito, a back-end developer with professional experience since 2017. At',
  'hero.descriptionAfter':
    'I build websites, systems, APIs, and integrations aligned with each operation’s needs.',
  'hero.primaryAction': 'Request an assessment',
  'hero.secondaryAction': 'Explore technical projects',
  'hero.professionalInfo': 'Professional information',
  'hero.location': 'Espírito Santo · remote work',
  'hero.audience': 'Companies and technology teams',
  'hero.visualLabel': 'Photo of André Brito and main technologies',
  'hero.photoAlt': 'André Brito, software developer and founder of BritoDev',
  'hero.status': 'status: available for assessment_',
  'hero.summaryLabel': 'Experience summary',
  'hero.proofExperienceTitle': 'Since 2017',
  'hero.proofExperienceText': 'professional experience',
  'hero.proofSystemsTitle': 'ERP and APIs',
  'hero.proofSystemsText': 'business systems and integrations',
  'hero.proofDemandTitle': 'On demand',
  'hero.proofDemandText': 'analysis, delivery, and maintenance',
  'services.eyebrow': 'Areas of expertise',
  'services.title': 'Digital solutions with technical accountability.',
  'services.description':
    'Requirements-driven development with a defined scope and decisions suited to each project’s technical and operational reality.',
  'services.webTitle': 'Business websites and web applications',
  'services.webDescription':
    'Responsive interfaces for company presentation, lead generation, and internal process support.',
  'services.webItem1': 'Responsive and accessible navigation',
  'services.webItem2': 'Maintainable structure',
  'services.apiTitle': 'APIs and business systems',
  'services.apiDescription':
    'REST APIs, ERP modules, and C#/.NET applications for business processes and data.',
  'services.apiItem1': 'Business rules and integrations',
  'services.apiItem2': 'Relational databases and authentication',
  'services.automationTitle': 'Process automation and integration',
  'services.automationDescription':
    'Routines and services that centralize operations, connect systems, and reduce manual work.',
  'services.automationItem1': 'Connected processes',
  'services.automationItem2': 'Controlled and traceable execution',
  'services.maintenanceTitle': 'System maintenance and evolution',
  'services.maintenanceDescription':
    'Support, fixes, and modernization in .NET, Delphi, and Lazarus for partner teams.',
  'services.maintenanceItem1': 'Legacy code fixes and refactoring',
  'services.maintenanceItem2': 'Testing and incremental evolution',
  'services.audiencesLabel': 'Clients served',
  'services.businessTag': 'For businesses',
  'services.businessTitle': 'Small businesses and professionals',
  'services.businessText':
    'A digital presence and tools suited to the process and investment capacity.',
  'services.techTag': 'For technology partners',
  'services.techTitle': 'Software companies and agencies',
  'services.techText':
    'Additional technical capacity for integrations, support, and specialized demands.',
  'process.eyebrow': 'How I work',
  'process.title': 'An objective process with verifiable decisions.',
  'process.lead':
    'The work starts by understanding the problem, constraints, and acceptance criteria. Technology and architecture are defined from that context.',
  'process.diagnoseTitle': 'Diagnose',
  'process.diagnoseText': 'Context, goals, existing systems, constraints, and acceptance criteria.',
  'process.planTitle': 'Plan',
  'process.planText':
    'Documented scope, priorities, risks, technical choices, and execution stages.',
  'process.implementTitle': 'Implement',
  'process.implementText':
    'Incremental development, reviewable code, appropriate tests, and continuous validation.',
  'process.evolveTitle': 'Evolve',
  'process.evolveText':
    'Documented delivery, technical follow-up, and priority-driven maintenance.',
  'process.note':
    'Scope, decisions, and progress are communicated directly, with a record of what affects schedule, cost, and maintenance.',
  'projects.eyebrow': 'Selected projects',
  'projects.title': 'Technical evidence in public repositories.',
  'projects.description':
    'Implementations that demonstrate architecture, security, testing, observability, and user experience decisions.',
  'projects.all': 'View all on GitHub',
  'projects.taskflowTag': 'Full stack · Collaborative Kanban',
  'projects.taskflowText':
    'A Kanban application for workspaces, boards, tasks, comments, members, and permissions, with auditing, metrics, and automated tests.',
  'projects.taskflowTech': 'TaskFlow technologies',
  'projects.exploreRepository': 'Explore repository',
  'projects.pricewiseTag': 'Full stack · Price tracking',
  'projects.webExperience': 'Interface and user experience',
  'projects.webFeatures': 'Products · stores · history · alerts',
  'projects.apiProcessing': 'Rules, security, and processing',
  'projects.apiFeatures': 'Authentication · prices · notifications',
  'projects.pricewiseText':
    'A solution split into two repositories with distinct responsibilities: the web application presents and validates user interactions, while the API handles data, business rules, authentication, and background jobs.',
  'projects.frontend': 'Front-end',
  'projects.frontendText':
    'React interface for browsing, administration, history, and alert configuration.',
  'projects.backend': 'Back-end',
  'projects.backendText':
    '.NET API responsible for persistence, caching, security, and scheduled processing.',
  'projects.pricewiseTech': 'PriceWise solution technologies',
  'projects.pricewiseRepos': 'PriceWise solution repositories',
  'projects.webRepository': 'Web repository',
  'projects.apiRepository': 'API repository',
  'projects.otherLabel': 'Other public experiments',
  'projects.otherTag': 'Additional repositories',
  'projects.otherTitle': 'Lazarus examples and other experiments',
  'projects.otherText':
    'Examples and experiments used to document solutions, validate approaches, and maintain technical references.',
  'projects.viewExamples': 'View examples',
  'about.eyebrow': 'Professional experience',
  'about.title': 'Experience in business systems and .NET back-end development.',
  'about.lead':
    'I am André Lucas de Brito, a back-end developer based in Cariacica, Espírito Santo. I have worked professionally since 2017, with experience in ERP systems, REST APIs, business rules, integrations, and relational databases.',
  'about.text':
    'I worked with Pascal and Lazarus from 2017 to 2020 and with C#/.NET from 2020 to 2025 at Tecnobyte. Since 2026, I have also developed independent projects on demand. BritoDev brings this experience together to serve businesses and technology teams with direct communication and clear technical criteria.',
  'about.communicationTitle': 'Objective communication',
  'about.communicationText': 'Context, risks, decisions, and progress presented without ambiguity.',
  'about.qualityTitle': 'Verifiable quality',
  'about.qualityText':
    'Readability, testing, observability, and review applied according to project risk.',
  'about.maintenanceTitle': 'Sustainable maintenance',
  'about.maintenanceText':
    'Solutions proportional to the problem and prepared for fixes and evolution.',
  'about.cardLabel': 'Technical summary of André Brito',
  'about.codeLabel': 'Professional summary in code format',
  'about.codeClarity': 'clarity',
  'about.codeTests': 'testing',
  'about.codeObservability': 'observability',
  'about.stackLabel': 'Main technologies',
  'contact.eyebrow': 'Professional contact',
  'contact.title': 'Describe your technical or operational need.',
  'contact.text':
    'Share the project context for an initial assessment of scope, risks, and next steps.',
  'contact.channel': 'Primary channel',
  'contact.emailAction': 'Send an email',
  'contact.linkedinAction': 'Contact via LinkedIn',
  'contact.location': 'Espírito Santo · remote service',
  'contact.briefLabel': 'Useful information to start a conversation',
  'contact.briefTag': 'Assessment information',
  'contact.briefTitle': 'If possible, include:',
  'contact.briefItem1': 'Main problem or goal',
  'contact.briefItem2': 'Existing system or process',
  'contact.briefItem3': 'Expected outcome',
  'contact.briefItem4': 'Timeline, integrations, and relevant constraints',
  'contact.emailSubject': 'Contact from the BritoDev website',
  'footer.tagline': 'Software development with technical clarity and delivery accountability.',
  'footer.navLabel': 'Contact and professional networks',
  'footer.credit': 'Developed by André Brito.',
  'footer.backToTop': 'Back to top',
  'notFound.title': 'Page not found',
  'notFound.text': 'The address provided does not match an available page.',
  'notFound.action': 'Return to the home page',
  'meta.homeTitle': 'BritoDev | Software development and integrations',
  'meta.notFoundTitle': 'Page not found | BritoDev',
  'meta.description':
    'Websites, systems, APIs, automations, and integrations backed by experience in C#/.NET, Delphi, and Lazarus.',
  'meta.socialDescription':
    'Software development for companies, professionals, software firms, and agencies.',
  'meta.organizationDescription': 'Websites, systems, APIs, automations, and integrations.',
  'meta.jobTitle': 'Software developer',
  'meta.integrations': 'Integrations',
};

const dictionaries: Record<SupportedLanguage, TranslationDictionary> = {
  'pt-BR': portuguese,
  es: spanish,
  en: english,
};

const languageStorageKey = 'britodev-language';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly document = inject(DOCUMENT);
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);
  private readonly currentPage = signal<Page>('home');
  private readonly selectedLanguage = signal<SupportedLanguage>(this.getInitialLanguage());

  readonly language = this.selectedLanguage.asReadonly();

  constructor() {
    effect(() => {
      const language = this.selectedLanguage();
      const page = this.currentPage();
      this.applyDocumentLanguage(language, page);
    });
  }

  t(key: TranslationKey): string {
    return dictionaries[this.selectedLanguage()][key];
  }

  setLanguage(language: SupportedLanguage): void {
    this.selectedLanguage.set(language);
    try {
      localStorage.setItem(languageStorageKey, language);
    } catch {
      // The language still changes when storage is unavailable.
    }
  }

  pathForLanguage(language: SupportedLanguage): string {
    return languagePaths[language];
  }

  currentPath(): string {
    return this.pathForLanguage(this.selectedLanguage());
  }

  localizedAnchor(fragment: string): string {
    return `${this.currentPath()}#${fragment}`;
  }

  languageFromPath(path: string): SupportedLanguage | null {
    const firstSegment = path.split(/[?#]/, 1)[0].split('/').filter(Boolean)[0]?.toLowerCase();
    if (firstSegment === 'pt-br') return 'pt-BR';
    if (firstSegment === 'es') return 'es';
    if (firstSegment === 'en') return 'en';
    return null;
  }

  setPage(page: Page): void {
    this.currentPage.set(page);
  }

  emailHref(): string {
    return `mailto:contato@britodev.com.br?subject=${encodeURIComponent(this.t('contact.emailSubject'))}`;
  }

  private getInitialLanguage(): SupportedLanguage {
    try {
      const savedLanguage = localStorage.getItem(languageStorageKey);
      if (this.isSupportedLanguage(savedLanguage)) {
        return savedLanguage;
      }
    } catch {
      // Fall back to browser language detection.
    }

    const browserLanguages =
      typeof navigator === 'undefined'
        ? []
        : navigator.languages.length > 0
          ? navigator.languages
          : [navigator.language];
    for (const language of browserLanguages) {
      const normalizedLanguage = language.toLowerCase();
      if (normalizedLanguage.startsWith('pt')) return 'pt-BR';
      if (normalizedLanguage.startsWith('es')) return 'es';
      if (normalizedLanguage.startsWith('en')) return 'en';
    }

    return 'en';
  }

  private isSupportedLanguage(language: string | null): language is SupportedLanguage {
    return language === 'pt-BR' || language === 'es' || language === 'en';
  }

  private applyDocumentLanguage(language: SupportedLanguage, page: Page): void {
    const canonicalUrl = `${siteOrigin}${this.pathForLanguage(language)}`;
    this.document.documentElement.lang = language;
    this.title.setTitle(this.t(page === 'home' ? 'meta.homeTitle' : 'meta.notFoundTitle'));

    const description = page === 'home' ? this.t('meta.description') : this.t('notFound.text');
    this.meta.updateTag({ content: description, name: 'description' });
    this.meta.updateTag({ content: this.t('meta.socialDescription'), property: 'og:description' });
    this.meta.updateTag({ content: this.title.getTitle(), property: 'og:title' });
    this.meta.updateTag({ content: canonicalUrl, property: 'og:url' });
    this.meta.updateTag({ content: this.getOpenGraphLocale(language), property: 'og:locale' });
    this.meta.updateTag({ content: this.t('hero.photoAlt'), property: 'og:image:alt' });
    this.meta.updateTag({ content: this.t('meta.socialDescription'), name: 'twitter:description' });
    this.meta.updateTag({ content: this.title.getTitle(), name: 'twitter:title' });
    this.meta.updateTag({ content: this.t('hero.photoAlt'), name: 'twitter:image:alt' });
    this.updateCanonical(canonicalUrl);
    this.updateStructuredData();
  }

  private updateCanonical(url: string): void {
    const canonical = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    canonical?.setAttribute('href', url);
  }

  private getOpenGraphLocale(language: SupportedLanguage): string {
    if (language === 'pt-BR') return 'pt_BR';
    if (language === 'es') return 'es_ES';
    return 'en_US';
  }

  private updateStructuredData(): void {
    const element = this.document.getElementById('structured-data');
    if (!element) return;

    const language = this.selectedLanguage();
    const canonicalUrl = `${siteOrigin}${this.pathForLanguage(language)}`;
    const description =
      this.currentPage() === 'home' ? this.t('meta.description') : this.t('notFound.text');

    element.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': 'https://britodev.com.br/#organization',
          name: 'BritoDev',
          url: 'https://britodev.com.br/',
          description: this.t('meta.organizationDescription'),
          email: 'contato@britodev.com.br',
          founder: { '@id': 'https://britodev.com.br/#andre-brito' },
          sameAs: ['https://github.com/AndreLBrito', 'https://www.linkedin.com/in/andrel-brito'],
        },
        {
          '@type': 'Person',
          '@id': 'https://britodev.com.br/#andre-brito',
          name: 'André Brito',
          jobTitle: this.t('meta.jobTitle'),
          url: canonicalUrl,
          image: 'https://britodev.com.br/images/andre-brito.jpg',
          email: 'contato@britodev.com.br',
          worksFor: { '@id': 'https://britodev.com.br/#organization' },
          knowsAbout: [
            'C#',
            '.NET',
            'Angular',
            'Delphi',
            'Lazarus',
            'APIs',
            this.t('meta.integrations'),
          ],
          sameAs: ['https://github.com/AndreLBrito', 'https://www.linkedin.com/in/andrel-brito'],
        },
        {
          '@type': 'WebPage',
          '@id': `${canonicalUrl}#webpage`,
          url: canonicalUrl,
          name: this.title.getTitle(),
          description,
          inLanguage: language,
          about: { '@id': 'https://britodev.com.br/#organization' },
        },
      ],
    });
  }
}
