export const Constants={
    API_URL:'https://localhost:5006',
    API_URL_TICKET:'http://localhost:5005',
    API_URLUSER:'http://localhost:5000',
    
    NOMENCLADORES:{
        TIPO_SUSTP:'/api/TipoSustP'
    },
    TABLAS:{
        SUSTP:'/api/SustP',
        EMPRESA:'/api/Empresa',
        MUNICIPIO:'/api/Municipio',
        PROVINCIA:'/api/Provincia',
        RESPONSABLE:'/api/Responsable',
        Carretera:'/api/Carretera',
        Informacion:'/api/ITraslado',
        FERROCARRIL:'/api/Ferrocarril',
        EXPEDIENTE:'/api/ExpSustP',
        PLANTILLA:'/api/PlantillaE'
    },
    EcommerceDetail: {
    id: 1,
    title: 'Desarrollo de Tienda E-commerce Premium',
    category: 'Desarrollo Web',
    description: 'Tienda online completa con carrito de compras, pasarela de pago integrada, panel de administración y diseño responsive optimizado para SEO. Ideal para negocios que buscan expandir su presencia online.',
    featuredImage: 'assets/img/sale.webp',
    price: 100,
    discountPrice: 150,
    discount: 20,
    stock: 5,
    reviews: 42,
    images: [
      'assets/img/ee1.webp',
      'assets/img/ee2.webp',
      'assets/img/ee3.webp',
      'assets/img/ee4.webp'
    ],
    features: [
      { 
        icon: 'fas fa-shopping-cart', 
        title: 'Carrito de Compras', 
        description: 'Sistema completo con gestión de inventario en tiempo real' 
      },
      { 
        icon: 'fas fa-credit-card', 
        title: 'Pasarela de Pago', 
        description: 'Integración con MercadoPago, PayPal y tarjetas de crédito' 
      },
      { 
        icon: 'fas fa-mobile-alt', 
        title: 'Diseño Responsive', 
        description: 'Adaptado perfectamente a todos los dispositivos móviles' 
      },
      { 
        icon: 'fas fa-chart-line', 
        title: 'Analíticas Avanzadas', 
        description: 'Panel con métricas de ventas y comportamiento de usuarios' 
      },
      { 
        icon: 'fas fa-truck', 
        title: 'Gestión de Envíos', 
        description: 'Integración con principales empresas de logística' 
      },
      { 
        icon: 'fas fa-shield-alt', 
        title: 'Seguridad SSL', 
        description: 'Protección de datos y transacciones con certificado SSL' 
      }
    ],
    seller: {
      name: 'DevBazaar',
      avatar: 'assets/svg/iconbrand-2.svg',
      rating: 4.8,
      reviews: 128
    },
    reviewsList: [
      {
        user: {
          name: 'María López',
          avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
        },
        rating: 5,
        content: 'Excelente servicio! Mi tienda online quedó mejor de lo que esperaba. El equipo fue muy profesional y resolvieron todas mis dudas rápidamente.',
        date: '2023-10-15'
      },
      {
        user: {
          name: 'Carlos Mendoza',
          avatar: 'https://randomuser.me/api/portraits/men/22.jpg'
        },
        rating: 4,
        content: 'Buen trabajo en general, aunque hubo algunos retrasos en la entrega. La funcionalidad de la tienda es impecable y las ventas han aumentado un 40%.',
        date: '2023-09-28'
      }
    ]
  },
  CatalogAppDetail: {
  id: 3,
  title: 'Desarrollo de Aplicación de Catálogo Digital',
  category: 'Soluciones Digitales',
  description: 'Catálogo interactivo para mostrar productos o servicios con filtros avanzados, búsqueda inteligente y diseño adaptable. Ideal para minoristas, distribuidores y empresas que necesitan exhibir sus ofertas de manera profesional y accesible.',
  featuredImage: 'assets/img/catalog-hero.webp',
  price: 850,
  discountPrice: 650,
  discount: 24,
  stock: 12,
  reviews: 31,
  images: [
    'assets/img/catalog1.webp',
    'assets/img/catalog2.webp',
    'assets/img/catalog3.webp',
    'assets/img/catalog4.webp'
  ],
  features: [
    { 
      icon: 'fas fa-th-large', 
      title: 'Vistas Personalizables', 
      description: 'Muestra tus productos en cuadrícula, lista o tarjetas según preferencia' 
    },
    { 
      icon: 'fas fa-filter', 
      title: 'Filtros Avanzados', 
      description: 'Permite filtrar por categoría, precio, características y disponibilidad' 
    },
    { 
      icon: 'fas fa-search', 
      title: 'Búsqueda Inteligente', 
      description: 'Búsqueda predictiva con sugerencias y corrección ortográfica' 
    },
    { 
      icon: 'fas fa-sync-alt', 
      title: 'Sincronización en Tiempo Real', 
      description: 'Actualización automática de inventario y precios' 
    },
    { 
      icon: 'fas fa-mobile-alt', 
      title: 'Diseño Mobile-First', 
      description: 'Experiencia optimizada para dispositivos móviles' 
    },
    { 
      icon: 'fas fa-chart-line', 
      title: 'Analítica de Productos', 
      description: 'Seguimiento de productos más vistos y buscados' 
    }
  ],
  seller: {
    name: 'DevBazaar',
    avatar: 'assets/svg/iconbrand-2.svg',
    rating: 4.8,
    reviews: 156
  },
  reviewsList: [
    {
      user: {
        name: 'Moda Express',
        avatar: 'assets/img/reviewer-fashion.webp'
      },
      rating: 5,
      content: 'Nuestro catálogo digital aumentó las ventas online en un 40%. Los clientes pueden filtrar por talla, color y estilo fácilmente.',
      images: [
        'assets/img/review-catalog1.webp'
      ],
      date: '2023-11-18'
    },
    {
      user: {
        name: 'Suministros Industriales Pro',
        avatar: 'assets/img/reviewer-industrial.webp'
      },
      rating: 4,
      content: 'Perfecto para nuestro extenso catálogo de 5000+ productos. La búsqueda por referencia de producto ahorra mucho tiempo a nuestros clientes.',
      images: [],
      date: '2023-10-30'
    }
  ]
},
  ReservationAppDetail: {
  id: 1,
  title: 'Desarrollo de Sistema de Reservas Premium',
  category: 'Aplicaciones Empresariales',
  description: 'Solución completa para gestión de reservas con calendario en tiempo real, confirmación automática, recordatorios y pagos integrados. Ideal para restaurantes, hoteles, clínicas y servicios que requieren gestión de citas.',
  featuredImage: 'assets/img/reservation-hero.webp',
  price: 1200,
  discountPrice: 900,
  discount: 25,
  stock: 8,
  reviews: 36,
  images: [
    'assets/img/reservation1.webp',
    'assets/img/reservation2.webp',
    'assets/img/reservation3.webp',
    'assets/img/reservation4.webp'
  ],
  features: [
    { 
      icon: 'fas fa-calendar-check', 
      title: 'Calendario Inteligente', 
      description: 'Visualización de disponibilidad en tiempo real con prevención de conflictos' 
    },
    { 
      icon: 'fas fa-sync-alt', 
      title: 'Sincronización Automática', 
      description: 'Integración con Google Calendar, Outlook y Apple Calendar' 
    },
    { 
      icon: 'fas fa-mobile-alt', 
      title: 'App Móvil Nativa', 
      description: 'Aplicaciones iOS y Android para clientes y administradores' 
    },
    { 
      icon: 'fas fa-bell', 
      title: 'Recordatorios Automáticos', 
      description: 'Notificaciones por email y SMS para reducir no-shows' 
    },
    { 
      icon: 'fas fa-credit-card', 
      title: 'Pagos Integrados', 
      description: 'Sistema de cobro con reserva o depósito seguro' 
    },
    { 
      icon: 'fas fa-chart-pie', 
      title: 'Reportes Avanzados', 
      description: 'Métricas de ocupación, rendimiento y tendencias' 
    }
  ],
  seller: {
    name: 'DevBazaar',
    avatar: 'assets/svg/iconbrand-2.svg',
    rating: 4.9,
    reviews: 142
  },
  reviewsList: [
    {
      user: {
        name: 'Roberto Martínez',
        avatar: 'assets/img/reviewer1.webp'
      },
      rating: 5,
      content: 'Transformó completamente nuestro restaurante! Las reservas se organizan solas y los recordatorios redujeron las ausencias en un 70%. La integración con nuestro POS fue perfecta.',
      images: [
        'assets/img/review-res1.webp',
        'assets/img/review-res2.webp'
      ],
      date: '2023-11-10'
    },
    {
      user: {
        name: 'Clínica Dental Sonrisa',
        avatar: 'assets/img/reviewer2.webp'
      },
      rating: 4,
      content: 'Excelente para gestionar nuestras citas. Los pacientes pueden elegir su horario y especialista directamente desde la app. Solo añadiría más opciones de personalización.',
      images: [],
      date: '2023-10-22'
    }
  ]
},
CustomAppDetail: {
  id: 5,
  title: 'Desarrollo de Aplicaciones Personalizadas',
  category: 'Soluciones Empresariales',
  description: 'Software a medida diseñado específicamente para resolver tus desafíos únicos. Desde aplicaciones web hasta móviles y de escritorio, creamos soluciones que se integran perfectamente con tus procesos y escalan con tu negocio.',
  featuredImage: 'assets/img/custom-hero.webp',
  price: 0, // Normalmente se cotiza por proyecto
  discountPrice: 0,
  discount: 0,
  stock: 0, // Servicio continuo
  reviews: 47,
  images: [
    'assets/img/custom1.webp',
    'assets/img/custom2.webp',
    'assets/img/custom3.webp',
    'assets/img/custom4.webp'
  ],
  features: [
    { 
      icon: 'fas fa-pencil-ruler', 
      title: 'Diseño Personalizado', 
      description: 'Soluciones creadas desde cero para tus necesidades específicas' 
    },
    { 
      icon: 'fas fa-cogs', 
      title: 'Integración Total', 
      description: 'Conectamos con tus sistemas existentes (ERP, CRM, bases de datos)' 
    },
    { 
      icon: 'fas fa-layer-group', 
      title: 'Arquitectura Escalable', 
      description: 'Diseñado para crecer con tu negocio y manejar mayores cargas' 
    },
    { 
      icon: 'fas fa-mobile-alt', 
      title: 'Multiplataforma', 
      description: 'Desarrollo para web, móvil (iOS/Android) y escritorio según necesidades' 
    },
    { 
      icon: 'fas fa-shield-alt', 
      title: 'Seguridad Robustecida', 
      description: 'Protección de datos y cumplimiento de normativas sectoriales' 
    },
    { 
      icon: 'fas fa-headset', 
      title: 'Soporte Continuo', 
      description: 'Mantenimiento, actualizaciones y soporte técnico permanente' 
    }
  ],
  seller: {
    name: 'DevBazaar',
    avatar: 'assets/svg/iconbrand-2.svg',
    rating: 4.7,
    reviews: 189
  },
  reviewsList: [
    {
      user: {
        name: 'Logística Global S.A.',
        avatar: 'assets/img/reviewer-logistics.webp'
      },
      rating: 5,
      content: 'La aplicación a medida revolucionó nuestra gestión de flotas. Ahora optimizamos rutas en tiempo real y redujimos costos operativos en un 25%.',
      images: [
        'assets/img/review-custom1.webp'
      ],
      date: '2023-12-05'
    },
    {
      user: {
        name: 'Centro Médico Avanzado',
        avatar: 'assets/img/reviewer-medical.webp'
      },
      rating: 5,
      content: 'Sistema de gestión de pacientes completamente adaptado a nuestra clínica. Cumple con todas las normativas HIPAA y ha mejorado nuestra eficiencia un 40%.',
      images: [],
      date: '2023-11-20'
    }
  ],
  pricingModel: "Personalizado", // Campo adicional para indicar que el precio es variable
  hasFixedPrice: false // Indica que no tiene precio fijo
},
RepairServiceDetail : {
  id: 7,
  title: 'Servicio Técnico Especializado en Reparaciones',
  category: 'Soporte Técnico',
  description: 'Soluciones rápidas y confiables para reparación de dispositivos electrónicos, equipos informáticos y electrodomésticos. Diagnóstico gratuito, repuestos originales y garantía en todas nuestras reparaciones.',
  featuredImage: 'assets/img/repair-hero.webp',
  price: 0, // Varía según el problema
  discountPrice: 0,
  discount: 0,
  serviceFee: 25, // Costo base de diagnóstico
  stock: 0, // Servicio ilimitado
  reviews: 68,
  images: [
    'assets/img/repair1.webp',
    'assets/img/repair2.webp',
    'assets/img/repair3.webp',
    'assets/img/repair4.webp'
  ],
  features: [
    { 
      icon: 'fas fa-tools', 
      title: 'Reparaciones Express', 
      description: 'Soluciones en menos de 24 horas para problemas comunes' 
    },
    { 
      icon: 'fas fa-shield-alt', 
      title: 'Garantía de Servicio', 
      description: '90 días de garantía en todas las reparaciones realizadas' 
    },
    { 
      icon: 'fas fa-microchip', 
      title: 'Repuestos Originales', 
      description: 'Componentes de calidad con certificación del fabricante' 
    },
    { 
      icon: 'fas fa-home', 
      title: 'Servicio a Domicilio', 
      description: 'Reparaciones in situ para equipos difíciles de transportar' 
    },
    { 
      icon: 'fas fa-laptop-medical', 
      title: 'Diagnóstico Gratuito', 
      description: 'Evaluación profesional sin costo para identificar el problema' 
    },
    { 
      icon: 'fas fa-headset', 
      title: 'Asesoría Técnica', 
      description: 'Recomendaciones para prevenir futuros problemas' 
    }
  ],
  services: [
    {
      name: "Reparación de laptops",
      priceRange: "$50 - $200",
      description: "Cambio de pantallas, teclados, fuentes de poder y más"
    },
    {
      name: "Reparación de smartphones",
      priceRange: "$30 - $150",
      description: "Cambio de pantallas, baterías, puertos de carga"
    },
    {
      name: "Reparación de electrodomésticos",
      priceRange: "$60 - $300",
      description: "Lavadoras, neveras, microondas, aires acondicionados"
    },
    {
      name: "Reparación de consolas",
      priceRange: "$40 - $180",
      description: "PS5, Xbox Series X, Nintendo Switch"
    }
  ],
  seller: {
    name: 'DevBazaar',
    avatar: 'assets/svg/iconbrand-2.svg',
    rating: 4.8,
    reviews: 215
  },
  reviewsList: [
    {
      user: {
        name: 'Carlos Rodríguez',
        avatar: 'assets/img/reviewer-client1.webp'
      },
      rating: 5,
      content: 'Salvaron mi laptop con solo 1 día de reparación cuando otros decían que no tenía solución. Precio justo y garantía incluida!',
      images: [
        'assets/img/review-repair1.webp'
      ],
      date: '2023-12-15'
    },
    {
      user: {
        name: 'Restaurante La Tradición',
        avatar: 'assets/img/reviewer-restaurant.webp'
      },
      rating: 5,
      content: 'Repararon nuestra cámara frigorífica en menos de 4 horas evitando pérdidas de miles de dólares en alimentos. Servicio de emergencia excepcional!',
      images: [],
      date: '2023-11-28'
    }
  ],
  pricingModel: "Variable por servicio",
  hasFixedPrice: false,
  emergencyService: true,
  warrantyPeriod: 90 // días de garantía
},
MaintenanceServiceDetail : {
  id: 8,
  title: 'Servicio de Mantenimiento Preventivo y Correctivo',
  category: 'Soporte Técnico',
  description: 'Planes de mantenimiento personalizados para maximizar la vida útil y rendimiento de tus equipos. Evita fallos costosos con nuestro servicio profesional que incluye limpieza, diagnóstico, optimización y reportes detallados.',
  featuredImage: 'assets/img/maintenance-hero.webp',
  price: 0, // Varía según el plan
  discountPrice: 0,
  discount: 0,
  serviceFee: 40, // Costo base de evaluación
  stock: 0, // Servicio ilimitado
  reviews: 52,
  images: [
    'assets/img/maintenance1.webp',
    'assets/img/maintenance2.webp',
    'assets/img/maintenance3.webp',
    'assets/img/maintenance4.webp'
  ],
  features: [
    { 
      icon: 'fas fa-calendar-alt', 
      title: 'Mantenimiento Programado', 
      description: 'Visitas periódicas según tus necesidades (semanal, mensual, trimestral)' 
    },
    { 
      icon: 'fas fa-laptop-medical', 
      title: 'Diagnóstico Profesional', 
      description: 'Evaluación completa de hardware y software para detectar problemas potenciales' 
    },
    { 
      icon: 'fas fa-wind', 
      title: 'Limpieza Profunda', 
      description: 'Eliminación de polvo y suciedad que afectan rendimiento y refrigeración' 
    },
    { 
      icon: 'fas fa-sync-alt', 
      title: 'Actualizaciones', 
      description: 'Actualización de software, drivers y sistemas de seguridad' 
    },
    { 
      icon: 'fas fa-chart-line', 
      title: 'Optimización', 
      description: 'Ajustes para mejorar rendimiento y eficiencia energética' 
    },
    { 
      icon: 'fas fa-file-alt', 
      title: 'Reportes Detallados', 
      description: 'Documentación completa del estado de los equipos y recomendaciones' 
    }
  ],
  maintenancePlans: [
    {
      name: "Plan Básico",
      price: "$80/equipo",
      frequency: "Trimestral",
      includes: [
        "Limpieza externa e interna",
        "Diagnóstico básico",
        "Actualización de drivers",
        "Reporte de estado"
      ],
      bestFor: "Equipos personales o de bajo uso"
    },
    {
      name: "Plan Profesional",
      price: "$150/equipo",
      frequency: "Mensual",
      includes: [
        "Limpieza profunda completa",
        "Diagnóstico avanzado",
        "Optimización de rendimiento",
        "Actualizaciones de seguridad",
        "Reporte detallado con recomendaciones",
        "Prioridad en soporte"
      ],
      bestFor: "Equipos de trabajo críticos"
    },
    {
      name: "Plan Empresarial",
      price: "Personalizado",
      frequency: "Personalizada",
      includes: [
        "Mantenimiento completo",
        "Monitoreo remoto 24/7",
        "Respuesta rápida garantizada",
        "Soporte prioritario 24/7",
        "Repuestos con descuento",
        "Informes ejecutivos mensuales"
      ],
      bestFor: "Flotas de equipos empresariales"
    }
  ],
  seller: {
    name: 'DevBazaar',
    avatar: 'assets/svg/iconbrand-2.svg',
    rating: 4.9,
    reviews: 203
  },
  reviewsList: [
    {
      user: {
        name: 'Escuela Técnica Nacional',
        avatar: 'assets/img/reviewer-school.webp'
      },
      rating: 5,
      content: 'Con el mantenimiento preventivo redujimos las fallas en nuestros laboratorios de computación en un 75%. Los reportes mensuales nos ayudan a planificar mejoras.',
      images: [
        'assets/img/review-maintenance1.webp'
      ],
      date: '2023-12-10'
    },
    {
      user: {
        name: 'Estudio Creativo Digital',
        avatar: 'assets/img/reviewer-studio.webp'
      },
      rating: 4,
      content: 'Nuestras estaciones de trabajo para diseño gráfico funcionan como nuevas después de cada mantenimiento. El tiempo de renderizado mejoró un 15%.',
      images: [],
      date: '2023-11-15'
    }
  ],
  pricingModel: "Planes y personalizado",
  hasFixedPrice: false,
  warrantyPeriod: 30, // días de garantía para el servicio
  benefits: [
    "Reduce costos de reparaciones mayores",
    "Extiende la vida útil de tus equipos",
    "Previene pérdida de datos",
    "Mejora rendimiento y eficiencia",
    "Reduce tiempo de inactividad"
  ]
},
UtilitiesServiceDetail : {
  id: 10,
  title: 'Paquete Premium de Utilidades y Herramientas',
  category: 'Software y Soporte',
  description: 'Colección esencial de herramientas, drivers y software para optimizar y mantener tu sistema funcionando perfectamente. Todo lo que necesitas en un solo paquete para maximizar el rendimiento de tus dispositivos.',
  featuredImage: 'assets/img/utilities-hero.webp',
  price: 49.99,
  discountPrice: 39.99,
  discount: 20,
  subscriptionPeriod: 'anual', // mensual, anual, vitalicio
  stock: 0, // Servicio digital ilimitado
  reviews: 87,
  images: [
    'assets/img/utilities1.webp',
    'assets/img/utilities2.webp',
    'assets/img/utilities3.webp',
    'assets/img/utilities4.webp'
  ],
  features: [
    { 
      icon: 'fas fa-sync-alt', 
      title: 'Actualizaciones Automáticas', 
      description: 'Mantén todos tus drivers y software siempre actualizados sin esfuerzo' 
    },
    { 
      icon: 'fas fa-tools', 
      title: 'Kit de Herramientas', 
      description: 'Suite completa para reparación, optimización y mantenimiento del sistema' 
    },
    { 
      icon: 'fas fa-shield-alt', 
      title: 'Seguridad Integrada', 
      description: 'Herramientas anti-malware y protección en tiempo real' 
    },
    { 
      icon: 'fas fa-broom', 
      title: 'Limpieza Avanzada', 
      description: 'Libera espacio y elimina archivos innecesarios con un clic' 
    },
    { 
      icon: 'fas fa-rocket', 
      title: 'Optimización Máxima', 
      description: 'Mejora el rendimiento de tu sistema y tiempos de arranque' 
    },
    { 
      icon: 'fas fa-cloud-download-alt', 
      title: 'Biblioteca de Software', 
      description: 'Acceso a cientos de programas esenciales y especializados' 
    }
  ],
  includedSoftware: [
    {
      category: "Drivers",
      items: ["Controladores gráficos", "Audio", "Red", "Impresora", "Dispositivos USB"]
    },
    {
      category: "Herramientas de Sistema",
      items: ["Desfragmentador", "Gestor de discos", "Monitor de recursos", "Editor de registro"]
    },
    {
      category: "Productividad",
      items: ["Suite ofimática", "Editores PDF", "Gestores de archivos", "Herramientas de backup"]
    },
    {
      category: "Seguridad",
      items: ["Antivirus", "Anti-malware", "Firewall", "Eliminador de bloatware"]
    }
  ],
  seller: {
    name: 'DevBazaar',
    avatar: 'assets/svg/iconbrand-2.svg',
    rating: 4.8,
    reviews: 327
  },
  reviewsList: [
    {
      user: {
        name: 'Ana Torres',
        avatar: 'assets/img/reviewer-ana.webp'
      },
      rating: 5,
      content: 'Increíble paquete! Actualicé todos los drivers de mi PC vieja y ahora funciona como nueva. Las herramientas de optimización son excelentes.',
      images: [
        'assets/img/review-util1.webp'
      ],
      date: '2023-12-12'
    },
    {
      user: {
        name: 'CyberCafé Central',
        avatar: 'assets/img/reviewer-cyber.webp'
      },
      rating: 4,
      content: 'Indispensable para mantener nuestros 20 equipos actualizados y seguros. Ahorramos horas de trabajo manual cada semana.',
      images: [],
      date: '2023-11-30'
    }
  ],
  supportedOS: ["Windows 10/11", "macOS 10.15+", "Linux (Ubuntu, Fedora)"],
  licenseType: "Suscripción",
  updatesPolicy: "Actualizaciones gratuitas durante el periodo de suscripción"
}

}