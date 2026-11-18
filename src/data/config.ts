/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * CLICAÊ — Configurações Centralizadas da Marca, Projetos e Conteúdo
 * Modifique este arquivo para atualizar dados de contato, redes sociais,
 * novos projetos no portfólio e segmentos demonstrativos.
 */

export interface ProjectItem {
  id: string;
  name: string;
  category: string;
  segment: string;
  description: string;
  highlight: string;
  image: string;
  // Vídeo demonstrativo opcional armazenado em /video/
  videoUrl?: string;
  // O link real da página. Se não houver URL definitiva ainda, pode ser vazio ou link demonstrativo
  url?: string;
  tags: string[];
  features: string[];
  clientQuote?: string;
  brandColors: {
    primary: string;
    secondary: string;
    accent: string;
    bg: string;
  };
}

export interface DemoSegment {
  id: string;
  label: string;
  title: string;
  handle: string;
  category: string;
  bio: string;
  theme: {
    bg: string;
    cardBg: string;
    text: string;
    primary: string;
    accent: string;
    border: string;
  };
  actions: {
    iconName: 'whatsapp' | 'menu' | 'calendar' | 'map' | 'music' | 'shopping' | 'instagram' | 'star' | 'file';
    title: string;
    subtitle?: string;
    badge?: string;
    url?: string;
    isPrimary?: boolean;
  }[];
  mediaPreview?: {
    type: 'banner' | 'gallery' | 'audio' | 'schedule';
    title: string;
    items?: string[];
  };
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  accentColor: string;
  iconName: 'utensils' | 'palette' | 'link' | 'shopping' | 'calendar' | 'sparkles';
  quoteSegment: string;
  quoteFeatures: string[];
}

export const SITE_CONFIG = {
  brand: {
    name: 'CLICAÊ',
    logoUrl: '/imagem/logo.jpeg',
    domain: 'clicae.com.br',
    domainUrl: 'https://clicae.com.br',
    tagline: 'Muito mais que um link na bio.',
    positioning: 'Páginas de bio 100% personalizadas para marcas, negócios e profissionais.',
    instagramHandle: '@clicaebio',
    instagramUrl: 'https://instagram.com/clicaebio',
    email: 'clicae.bio@gmail.com',
    // Número do WhatsApp comercial (código do país + DDD + número)
    // Deixe vazio ou configure seu número real de atendimento
    whatsappNumber: '5511999999999',
    whatsappDefaultMessage: 'Olá! Conheci o Clicaê pelo site e gostaria de saber mais sobre uma página personalizada para minha marca.',
  },

  hero: {
    titleLine1: 'Sua marca é única.',
    titleLine2: 'Sua bio também deveria ser.',
    subtitle: 'Transformamos o link da sua bio em uma experiência digital exclusiva. Um espaço feito para apresentar sua marca, destacar seus serviços e conectar seus clientes a tudo que importa.',
    ctaPrimary: 'Quero minha bio personalizada',
    ctaSecondary: 'Ver demonstração',
  },

  problem: {
    title: 'Sua marca merece mais que uma lista de links.',
    subtitle: 'Veja a diferença entre um agregador de botões cinza e uma bio com a identidade, sofisticação e estratégia que seu negócio merece.',
    generic: {
      title: 'Página Genérica de Links',
      subtitle: 'Plataformas convencionais (Linktree, Beacons)',
      points: [
        'Layout padronizado e engessado',
        'Pouca ou nenhuma identidade visual própria',
        'Personalização limitada a cores básicas',
        'Experiência idêntica à de milhares de perfis',
        'Sensação amadora de "lista de botões soltos"',
      ],
    },
    clicae: {
      title: 'Página Exclusiva Clicaê',
      subtitle: 'Mini-site com a essência da sua marca',
      points: [
        'Design 100% exclusivo e sob medida',
        'Identidade visual respeitada e valorizada',
        'Fotos, vídeos, áudios e microinterações',
        'Experiência profissional, fluida e responsiva',
        'Todos os seus canais estratégicos em um só lugar',
      ],
    },
  },

  howItWorks: {
    title: 'Sua identidade. Nossa criatividade.',
    subtitle: 'Um processo simples, ágil e colaborativo do primeiro contato até o lançamento oficial.',
    steps: [
      {
        number: '01',
        title: 'Conhecemos sua marca',
        description: 'Entendemos seu negócio, seu público, sua identidade visual (logos, cores, tipografia) e quais informações precisam de mais destaque.',
        detail: 'Briefing rápido sem burocracia.',
      },
      {
        number: '02',
        title: 'Criamos sua experiência',
        description: 'Desenvolvemos uma página exclusiva com visual personalizado, elementos interativos, organização estratégica e foco em conversão.',
        detail: 'Design artesanal, sem templates genéricos.',
      },
      {
        number: '03',
        title: 'Sua nova bio entra no ar',
        description: 'Você recebe o endereço exclusivo da sua página pronto para divulgar no Instagram, WhatsApp, materiais impressos, QR Codes e onde mais quiser.',
        detail: 'Pronta para encantar seus clientes.',
      },
    ],
  },

  // Projetos reais e destaques do portfólio
  projects: [
    {
      id: 'onze-lounge',
      name: 'Onze Lounge',
      category: 'Bares & Gastronomia',
      segment: 'Lounge & Gastrobar',
      description: 'Página personalizada para o estabelecimento, reunindo acessos como cardápio digital dinâmico, reservas de mesas, redes sociais, localização e destaques de drinks autorais.',
      highlight: 'Cardápio digital integrado e reservas instantâneas em ambiente sofisticado.',
      image: '/imagem/onze_lounge.jpg',
      videoUrl: '/video/ONZExCLICAE.mp4',
      // Campo de URL configurável para quando o cliente fornecer o domínio final
      url: '',
      tags: ['Cardápio Digital', 'Reservas', 'Localização Waze/Maps', 'Programação Musical', 'Galeria de Drinks'],
      features: [
        'Acesso instantâneo ao Menu Gastronômico e Carta de Coquetéis',
        'Botão direto para reserva de camarotes e mesas',
        'Localização exata com 1 clique para rotas via GPS',
        'Destaque para a agenda de atrações e DJs do fim de semana',
        'Design escuro sofisticado alinhado ao ambiente físico do lounge',
      ],
      clientQuote: 'Nossos clientes agora encontram o cardápio e reservam camarote em segundos direto da bio do Instagram.',
      brandColors: {
        primary: '#E5A93C', // Dourado âmbar sofisticado
        secondary: '#1A1D2E',
        accent: '#FF684F',
        bg: '#0F111A',
      },
    },
    {
      id: 'dj-hirla',
      name: 'DJ Hirla',
      category: 'Música & Entretenimento',
      segment: 'Artista & DJ',
      description: 'Experiência digital com identidade visual inspirada na artista, destaque para sua apresentação, momentos dos shows, sets exclusivos e botão direto para solicitação de orçamento.',
      highlight: 'Apresentação imersiva com sets ao vivo, agenda de turnê e contratação direta.',
      image: '/imagem/dj_hirla.jpg',
      videoUrl: '', // Insira '/video/dj_hirla.mp4' quando adicionar seu vídeo
      url: '',
      tags: ['Sets Spotify & Soundcloud', 'Agenda de Shows', 'Press Kit Oficial', 'Solicitar Orçamento', 'Galeria de Fotos'],
      features: [
        'Player de áudio e atalhos rápidos para sets no Spotify e Soundcloud',
        'Agenda atualizada de apresentações e festivais',
        'Acesso ao Press Kit profissional e mapa de palco / rider técnico',
        'Canal expresso para contratação de shows e eventos corporativos',
        'Estética visual eletrizante com neon azul, magenta e tipografia marcante',
      ],
      clientQuote: 'Minha bio virou meu press kit móvel. Produtores de eventos elogiam a agilidade e o visual da página.',
      brandColors: {
        primary: '#2457FF', // Azul elétrico
        secondary: '#EC4899', // Magenta vibrante
        accent: '#06B6D4',
        bg: '#0B0D19',
      },
    },
    {
      id: 'studio-aura',
      name: 'Studio Aura Estética',
      category: 'Beleza & Estética',
      segment: 'Clínica Dermatológica & Bem-Estar',
      description: 'Presença digital requintada com vitrine de procedimentos corporais e faciais, fotos antes/depois, endereço físico com mapa e agendamento direto com a recepção.',
      highlight: 'Experiência minimalista e acolhedora com catálogo de procedimentos e agendamento.',
      image: '/imagem/hero_atmosphere.jpg',
      videoUrl: '', // Insira '/video/studio_aura.mp4' quando adicionar seu vídeo
      url: '',
      tags: ['Procedimentos', 'Agendamento WhatsApp', 'Antes & Depois', 'Localização Privilegiada', 'Dúvidas Frequentes'],
      features: [
        'Guia completo de tratamentos faciais e corporais explicados',
        'Botão direto de agendamento com mensagem contextualizada',
        'Apresentação da equipe médica e certificações',
        'Espaço elegante que transmite higiene, conforto e luxo discreto',
      ],
      clientQuote: 'A taxa de pacientes que entram em contato direto pelo link da bio aumentou consideravelmente.',
      brandColors: {
        primary: '#D97706',
        secondary: '#292524',
        accent: '#F43F5E',
        bg: '#141417',
      },
    },
  ] as ProjectItem[],

  // Demonstração interativa por segmentos (Não imagine. Experimente.)
  demoSegments: [
    {
      id: 'gastronomia',
      label: 'Bares e restaurantes',
      title: 'Maison Noir Bistro',
      handle: '@maisonnoir.bistro',
      category: 'Alta Gastronomia & Coquetelaria',
      bio: 'Cozinha autoral, vinhos selecionados e ambiente intimista. Terça a Domingo a partir das 19h.',
      theme: {
        bg: '#0E1017',
        cardBg: '#181B26',
        text: '#F5F6FA',
        primary: '#EAB308',
        accent: '#FF684F',
        border: 'rgba(234, 179, 8, 0.25)',
      },
      actions: [
        {
          iconName: 'menu',
          title: 'Cardápio Digital & Vinhos',
          subtitle: 'Veja pratos do chef e sobremesas',
          badge: 'Atualizado hoje',
          isPrimary: true,
        },
        {
          iconName: 'calendar',
          title: 'Reservar Mesa / Aniversários',
          subtitle: 'Confirmação rápida por WhatsApp',
          badge: 'Garante seu lugar',
        },
        {
          iconName: 'map',
          title: 'Como Chegar (Waze / Maps)',
          subtitle: 'Av. Paulista, 1500 — Jardins',
        },
        {
          iconName: 'star',
          title: 'Avaliações no Google (4.9 ★)',
          subtitle: 'Mais de 420 clientes satisfeitos',
        },
      ],
      mediaPreview: {
        type: 'banner',
        title: 'Prato em Destaque: Risoto Trufado com Filé Mignon',
      },
    },
    {
      id: 'lojas',
      label: 'Lojas e boutiques',
      title: 'Verve Streetwear',
      handle: '@verve.concept',
      category: 'Moda Urbana & Design',
      bio: 'Peças limitadas com corte oversized e matérias-primas premium. Entregas para todo o Brasil.',
      theme: {
        bg: '#0F1216',
        cardBg: '#1B2129',
        text: '#F5F6FA',
        primary: '#FF684F',
        accent: '#2457FF',
        border: 'rgba(255, 104, 79, 0.3)',
      },
      actions: [
        {
          iconName: 'shopping',
          title: 'Drop 04 — Nova Coleção',
          subtitle: 'Poucas unidades restantes',
          badge: 'Frete Grátis > R$299',
          isPrimary: true,
        },
        {
          iconName: 'whatsapp',
          title: 'Atendimento Personalizado no WhatsApp',
          subtitle: 'Tire dúvidas sobre tamanhos e caimento',
        },
        {
          iconName: 'file',
          title: 'Guia de Medidas & Tecidos',
          subtitle: 'Saiba como escolher sua peça ideal',
        },
        {
          iconName: 'instagram',
          title: 'Feed de Looks & Tendências',
          subtitle: 'Veja como nossos clientes usam',
        },
      ],
      mediaPreview: {
        type: 'gallery',
        title: 'Drop Limitado de Inverno',
      },
    },
    {
      id: 'artistas',
      label: 'DJs e artistas',
      title: 'LUMINA Live',
      handle: '@luminamusic',
      category: 'DJ & Produtora Musical',
      bio: 'Melodic House & Techno. Resident @ Boiler Club. Sets lançados pela Afterlife e Anjunadeep.',
      theme: {
        bg: '#0A0B1A',
        cardBg: '#151733',
        text: '#F5F6FA',
        primary: '#2457FF',
        accent: '#D946EF',
        border: 'rgba(36, 87, 255, 0.35)',
      },
      actions: [
        {
          iconName: 'music',
          title: 'Ouvir Novo Set (Spotify & SoundCloud)',
          subtitle: 'Live Sunset Sessions #42',
          badge: 'Ouça Agora',
          isPrimary: true,
        },
        {
          iconName: 'calendar',
          title: 'Agenda de Turnê & Próximas Datas',
          subtitle: 'SP, RJ, Floripa e Curitiba',
        },
        {
          iconName: 'whatsapp',
          title: 'Contratação & Shows (Booking)',
          subtitle: 'Fale com a assessoria oficial',
        },
        {
          iconName: 'file',
          title: 'Press Kit & Rider Técnico',
          subtitle: 'Fotos em alta resolução e mapa',
        },
      ],
      mediaPreview: {
        type: 'audio',
        title: 'Now Playing: Mirage (Extended Mix)',
      },
    },
    {
      id: 'profissionais',
      label: 'Profissionais e serviços',
      title: 'Dr. Lucas Silveira',
      handle: '@drlucassilveira',
      category: 'Direito Empresarial & Startups',
      bio: 'Assessoria jurídica para rodadas de investimento, contratos estratégicos e governança corporativa.',
      theme: {
        bg: '#0C1017',
        cardBg: '#161D29',
        text: '#F5F6FA',
        primary: '#38BDF8',
        accent: '#2457FF',
        border: 'rgba(56, 189, 248, 0.25)',
      },
      actions: [
        {
          iconName: 'whatsapp',
          title: 'Agendar Consulta Estratégica',
          subtitle: 'Atendimento presencial e online',
          badge: 'Online agora',
          isPrimary: true,
        },
        {
          iconName: 'file',
          title: 'Áreas de Atuação & Cases',
          subtitle: 'M&A, Contratos e Proteção de Ativos',
        },
        {
          iconName: 'star',
          title: 'Artigos & Análises Jurídicas',
          subtitle: 'Publicações no LinkedIn e portais',
        },
        {
          iconName: 'map',
          title: 'Endereço do Escritório',
          subtitle: 'Vila Olímpia — São Paulo/SP',
        },
      ],
      mediaPreview: {
        type: 'banner',
        title: 'Mais de 180 empresas atendidas com excelência',
      },
    },
    {
      id: 'beleza',
      label: 'Beleza e estética',
      title: 'Glow Lab Dermocosmética',
      handle: '@glowlab.estetica',
      category: 'Estética Facial & Harmonização',
      bio: 'Procedimentos seguros e naturais para realçar sua melhor versão. Especialistas em Rejuvenescimento.',
      theme: {
        bg: '#140E14',
        cardBg: '#231623',
        text: '#F5F6FA',
        primary: '#F472B6',
        accent: '#FF684F',
        border: 'rgba(244, 114, 182, 0.3)',
      },
      actions: [
        {
          iconName: 'calendar',
          title: 'Avaliação Estética Individual',
          subtitle: 'Reserve seu horário com nossa especialista',
          badge: 'Agenda aberta',
          isPrimary: true,
        },
        {
          iconName: 'file',
          title: 'Catálogo de Procedimentos 2026',
          subtitle: 'Harmonização, Botox, Fios e Bioestimuladores',
        },
        {
          iconName: 'instagram',
          title: 'Resultados e Depoimentos Reais',
          subtitle: 'Veja histórias de transformação',
        },
        {
          iconName: 'whatsapp',
          title: 'Falar com a Recepção no WhatsApp',
          subtitle: 'Tire dúvidas e consulte formas de pagamento',
        },
      ],
      mediaPreview: {
        type: 'gallery',
        title: 'Espaço Premium com tecnologia de ponta',
      },
    },
  ] as DemoSegment[],

  // Possibilidades (Bento grid de recursos)
  possibilities: [
    {
      id: 'whatsapp',
      title: 'WhatsApp e contato direto',
      description: 'Botões com mensagens pré-configuradas para seu cliente iniciar a conversa já informando o serviço desejado.',
      tag: 'Mais conversão',
    },
    {
      id: 'redes',
      title: 'Instagram e redes sociais',
      description: 'Integração visual com seus perfis no Instagram, TikTok, YouTube, LinkedIn, Spotify e outras plataformas.',
      tag: 'Conexão omnicanal',
    },
    {
      id: 'catalogos',
      title: 'Catálogos e cardápios digitais',
      description: 'Apresentação interativa e agradável dos seus produtos ou pratos, sem a necessidade de baixar PDFs pesados.',
      tag: 'Praticidade',
    },
    {
      id: 'agendamentos',
      title: 'Agendamentos e reservas',
      description: 'Direcionamento direto para sistemas de reserva de mesas, consultas, horários em salões ou reuniões online.',
      tag: 'Zero atrito',
    },
    {
      id: 'midias',
      title: 'Galerias de fotos e vídeos',
      description: 'Espaço para exibir seu trabalho, bastidores, fotos em alta resolução e vídeos promocionais com reprodução leve.',
      tag: 'Engajamento visual',
    },
    {
      id: 'localizacao',
      title: 'Localização e rotas (Waze/Maps)',
      description: 'Seu cliente clica e já abre a rota no GPS do smartphone para chegar diretamente à sua loja física ou clínica.',
      tag: 'Tráfego físico',
    },
    {
      id: 'avaliacoes',
      title: 'Avaliações no Google',
      description: 'Destaque para sua pontuação de estrelas e depoimentos reais para gerar confiança imediata em novos clientes.',
      tag: 'Prova social',
    },
    {
      id: 'eventos',
      title: 'Divulgação de eventos e datas',
      description: 'Apresentação de datas de shows, workshops, inaugurações e festas com links para compra de ingressos.',
      tag: 'Agenda em tempo real',
    },
    {
      id: 'formularios',
      title: 'Formulários de contato e orçamento',
      description: 'Capte dados estratégicos dos interessados para sua equipe comercial responder com proposta personalizada.',
      tag: 'Geração de leads',
    },
    {
      id: 'custom',
      title: 'Botões e seções 100% personalizados',
      description: 'Qualquer elemento que faça sentido para o seu negócio: tocador de música, simuladores, cupons de desconto e muito mais.',
      tag: 'Sem limites',
    },
  ],

  // Perguntas Frequentes (FAQ)
  faq: [
    {
      question: 'O que é o Clicaê?',
      answer: 'O Clicaê é um serviço especializado no design e desenvolvimento de páginas de bio totalmente personalizadas. Diferente de plataformas padronizadas com botões genéricos, criamos uma presença digital exclusiva que funciona como um mini-site da sua marca, reunindo seus contatos, produtos, redes e serviços com visual profissional.',
    },
    {
      question: 'Qual a diferença entre o Clicaê e o Linktree?',
      answer: 'Plataformas convencionais como o Linktree oferecem modelos pré-moldados e botões genéricos que deixam todos os perfis parecidos. O Clicaê não é uma ferramenta de montagem amadora: nossa equipe cria um design exclusivo e artesanal, respeitando a identidade visual, as cores, tipografia, fotos e necessidades estratégicas de cada marca.',
    },
    {
      question: 'Posso usar minha identidade visual?',
      answer: 'Sim, totalmente! Essa é a essência do Clicaê. Aplicamos seu logotipo, sua paleta de cores exata, suas fontes, fotos do seu negócio, ilustrações e elementos visuais próprios para que a página seja uma extensão autêntica da sua marca.',
    },
    {
      question: 'Posso adicionar fotos e vídeos?',
      answer: 'Com certeza. Sua página Clicaê pode incluir banners promocionais, galerias de imagens em alta resolução, vídeos de apresentação leves, carrosséis de produtos e reprodutores de áudio ou sets musicais.',
    },
    {
      question: 'Funciona no Instagram?',
      answer: 'Perfeitamente! A página é concebida especificamente mobile-first para o navegador embutido do Instagram e de outros aplicativos como TikTok e WhatsApp. Ela abre de forma instantânea, rápida e limpa em qualquer smartphone.',
    },
    {
      question: 'Posso solicitar alterações?',
      answer: 'Sim. Durante o processo de criação você tem etapas de alinhamento e revisão para garantir que o resultado fique impecável. Também oferecemos suporte para atualização de dados como cardápios, links e novos telefones conforme a evolução do seu negócio.',
    },
    {
      question: 'Como faço para contratar?',
      answer: 'É muito simples: basta clicar no botão "Quero minha bio personalizada" ou entrar em contato pelo nosso WhatsApp. Nossa equipe conversará rapidamente sobre seu negócio, entenderá suas necessidades e dará início à criação da sua página exclusiva.',
    },
  ],

  // Serviços oferecidos pela CLICAÊ (editável conforme novos formatos de projeto)
  services: [
    {
      id: 'bio-personalizada',
      number: '01',
      title: 'Bio Personalizada & Mini-Site',
      subtitle: 'Central de Conexões',
      description: 'Uma página sob medida para o link da sua bio no Instagram, reunindo WhatsApp, redes sociais, rotas no mapa e ações principais com a estética da sua marca.',
      highlights: [
        'Identidade visual e tipografia exclusivas',
        'Botões estratégicos com foco em conversão',
        'Carregamento instantâneo no navegador do Instagram',
      ],
      accentColor: '#2457FF',
      iconName: 'link',
      quoteSegment: 'Outros Serviços',
      quoteFeatures: ['WhatsApp Direto', 'Localização (Waze/Maps)'],
    },
    {
      id: 'cardapio-digital',
      number: '02',
      title: 'Cardápios para Restaurantes & Bares',
      subtitle: 'Gastronomia & Hospitalidade',
      description: 'Cardápio digital elegante e interativo com fotos dos pratos, carta de drinks, categorias organizadas e QR Code para mesas — sem PDFs pesados ou difíceis de ler no celular.',
      highlights: [
        'Navegação fluida por categorias (entradas, drinks, pratos)',
        'Integração com reserva de mesas e localização Waze/Maps',
        'Pronto para usar na bio e em QR Codes nas mesas',
      ],
      accentColor: '#E5A93C',
      iconName: 'utensils',
      quoteSegment: 'Bares & Restaurantes',
      quoteFeatures: ['Cardápio / Catálogo', 'Agendamentos / Reservas', 'Localização (Waze/Maps)'],
    },
    {
      id: 'portfolio-artistico',
      number: '03',
      title: 'Portfólio Artístico & Press Kit',
      subtitle: 'DJs, Músicos & Criativos',
      description: 'Experiência visual marcante para artistas, fotógrafos, designers e DJs apresentarem trabalhos, sets, vídeos de palco, agenda de shows e canal direto para contratação.',
      highlights: [
        'Galeria visual em alta definição e vídeos em destaque',
        'Atalhos para Spotify, SoundCloud, YouTube e Rider Técnico',
        'Canal expresso para orçamentos e booking',
      ],
      accentColor: '#EC4899',
      iconName: 'palette',
      quoteSegment: 'DJs & Artistas',
      quoteFeatures: ['Player / Sets Musicais', 'Fotos & Vídeos', 'WhatsApp Direto'],
    },
    {
      id: 'catalogo-digital',
      number: '04',
      title: 'Vitrines & Catálogos de Produtos',
      subtitle: 'Lojas & Boutiques',
      description: 'Exposição visual pensada para destacar lançamentos, coleções e peças selecionadas, direcionando clientes interessados diretamente para o fechamento no WhatsApp.',
      highlights: [
        'Destaque para coleções, drops e peças em promoção',
        'Guia de tamanhos, informações técnicas e fotos reais',
        'Mensagem pré-pronta para agilizar pedidos no WhatsApp',
      ],
      accentColor: '#FF684F',
      iconName: 'shopping',
      quoteSegment: 'Lojas & Moda',
      quoteFeatures: ['Cardápio / Catálogo', 'Fotos & Vídeos', 'WhatsApp Direto'],
    },
    {
      id: 'agendamento-servicos',
      number: '05',
      title: 'Páginas de Agendamento & Clínicas',
      subtitle: 'Saúde, Estética & Profissionais',
      description: 'Apresentação profissional de serviços e procedimentos com credibilidade, avaliações de clientes no Google, localização do consultório e agendamento em poucos cliques.',
      highlights: [
        'Descrição clara de procedimentos e especialidades',
        'Botão direto para agenda ou recepção via WhatsApp',
        'Destaque para endereço, estacionamento e avaliações',
      ],
      accentColor: '#38BDF8',
      iconName: 'calendar',
      quoteSegment: 'Clínicas & Beleza',
      quoteFeatures: ['Agendamentos / Reservas', 'Avaliações no Google', 'Localização (Waze/Maps)'],
    },
    {
      id: 'eventos-lancamentos',
      number: '06',
      title: 'Páginas para Eventos & Lançamentos',
      subtitle: 'Festas, Workshops & Estreias',
      description: 'Convites digitais e hotsites rápidos para divulgar line-ups, programação, compra de ingressos, confirmação de presença e orientações de chegada ao local.',
      highlights: [
        'Line-up, horários e atrações organizados em um só lugar',
        'Links diretos para ingressos, listas e VIP',
        'Rota rápida para o evento no Google Maps e Waze',
      ],
      accentColor: '#A855F7',
      iconName: 'sparkles',
      quoteSegment: 'Outros Serviços',
      quoteFeatures: ['Fotos & Vídeos', 'Localização (Waze/Maps)', 'WhatsApp Direto'],
    },
  ] as ServiceItem[],
};

/**
 * Monta o link do WhatsApp com mensagem codificada para envio
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const phone = SITE_CONFIG.brand.whatsappNumber.replace(/\D/g, '');
  const message = customMessage || SITE_CONFIG.brand.whatsappDefaultMessage;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
