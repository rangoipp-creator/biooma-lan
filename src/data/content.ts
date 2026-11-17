import {
  AppWindow,
  AudioLines,
  Banknote,
  Blocks,
  Bot,
  Boxes,
  Bug,
  CalendarCheck,
  CalendarClock,
  CreditCard,
  FileSignature,
  Fingerprint,
  Fish,
  FolderOpen,
  Globe,
  Headset,
  Landmark,
  LineChart,
  MessageCircle,
  MessagesSquare,
  Mic,
  PenLine,
  PhoneCall,
  Pill,
  PhoneForwarded,
  Plane,
  Radar,
  Repeat,
  Scale,
  ScanFace,
  Send,
  Server,
  ShieldCheck,
  ShoppingCart,
  Sprout,
  Stamp,
  Store,
  Target,
  TrendingUp,
  UserCheck,
  UtensilsCrossed,
  Video,
  Wallet,
  Wine,
  Workflow,
  type LucideIcon,
} from "lucide-react";

/* ---------------------------------- tones --------------------------------- */

export type Tone = "lavender" | "mint" | "peach" | "sky" | "butter" | "rose" | "aqua";

// Full class strings so Tailwind can detect them statically.
export const toneBg: Record<Tone, string> = {
  lavender: "bg-lavender",
  mint: "bg-mint",
  peach: "bg-peach",
  sky: "bg-sky",
  butter: "bg-butter",
  rose: "bg-rose",
  aqua: "bg-aqua",
};

export const toneDeep: Record<Tone, string> = {
  lavender: "bg-lavender-deep",
  mint: "bg-mint-deep",
  peach: "bg-peach-deep",
  sky: "bg-sky-deep",
  butter: "bg-butter-deep",
  rose: "bg-rose-deep",
  aqua: "bg-aqua-deep",
};

/* ---------------------------------- types --------------------------------- */

export type Vertical = {
  id: string;
  index: string;
  name: string;
  tagline: string;
  detail: string;
  icon: LucideIcon;
  tone: Tone;
  chips?: string[];
};

export type FilterGroup =
  | "agentes"
  | "legaltech"
  | "telefonia"
  | "finanzas"
  | "crm"
  | "erp"
  | "ecommerce"
  | "pagos"
  | "legal"
  | "seguridad"
  | "datos"
  | "comercio"
  | "infra"
  | "operaciones";

export type Product = {
  code: string;
  name: string;
  category: string;
  group: FilterGroup | FilterGroup[];
  icon: LucideIcon;
  description: string;
};

export type Tier = {
  name: string;
  price: string;
  period?: string;
  tagline: string;
  featured: boolean;
  cta: string;
  benefits: string[];
};

export const groupTone: Record<FilterGroup, Tone> = {
  agentes: "sky",
  legaltech: "lavender",
  telefonia: "aqua",
  finanzas: "mint",
  crm: "lavender",
  erp: "mint",
  ecommerce: "peach",
  pagos: "butter",
  legal: "lavender",
  seguridad: "rose",
  datos: "sky",
  comercio: "peach",
  infra: "aqua",
  operaciones: "mint",
};

export function productGroups(p: Product): FilterGroup[] {
  return Array.isArray(p.group) ? p.group : [p.group];
}

/* -------------------------------- verticals ------------------------------- */

export const verticals: Vertical[] = [
  {
    id: "crm",
    index: "01",
    name: "CRM",
    tagline: "Ventas bajo control",
    detail:
      "Pipeline comercial, gestión de contactos, seguimiento automático de oportunidades y reportes en tiempo real. Tu fuerza de ventas, ordenada y medible.",
    icon: Target,
    tone: "lavender",
  },
  {
    id: "erp",
    index: "02",
    name: "ERP",
    tagline: "La empresa en un solo sistema",
    detail:
      "Compras, stock, finanzas, facturación y tableros de gestión integrados. Del depósito al balance sin planillas cruzadas.",
    icon: Boxes,
    tone: "mint",
  },
  {
    id: "turnero",
    index: "03",
    name: "Turnero",
    tagline: "Agenda que se llena sola",
    detail:
      "Reservas online 24/7, recordatorios automáticos por WhatsApp y reprogramación sin fricción. Menos ausentismo, agenda llena.",
    icon: CalendarClock,
    tone: "peach",
  },
  {
    id: "automatizaciones",
    index: "04",
    name: "Automatizaciones",
    tagline: "Procesos que corren solos",
    detail:
      "Flujos entre aplicaciones, IA aplicada a tareas repetitivas e integraciones a medida. Las horas de trabajo manual desaparecen.",
    icon: Workflow,
    tone: "sky",
  },
  {
    id: "pos",
    index: "05",
    name: "Punto de Venta",
    tagline: "Vendé en mostrador y online",
    detail:
      "POS ágil para retail y gastronomía: stock en vivo, multi-sucursal, caja y facturación electrónica. Pensado para el comercio real.",
    icon: ShoppingCart,
    tone: "butter",
  },
  {
    id: "whatsapp",
    index: "06",
    name: "Asistencia WhatsApp",
    tagline: "Todo tu negocio, en un chat",
    detail:
      "Bots de atención 24/7, fichaje de personal con GPS, cobranzas y comunicaciones formales sobre WhatsApp. Sin apps que nadie descarga.",
    icon: MessageCircle,
    tone: "aqua",
    chips: ["Bots 24/7", "Fichaje GPS", "Firma digital"],
  },
  {
    id: "pagos",
    index: "07",
    name: "Plataformas de Pago",
    tagline: "Cobrá por todos los medios",
    detail:
      "Links de pago, QR, tarjetas, transferencias inteligentes, antifraude y conciliación automática. Gateways de pago líderes del mercado, todos bajo tu marca.",
    icon: CreditCard,
    tone: "rose",
    chips: ["Gateway online", "Links de pago", "QR & transferencias"],
  },
];

/* -------------------------------- products -------------------------------- */

export const filterGroups: { id: FilterGroup | "all"; label: string }[] = [
  { id: "all", label: "Todos" },
  { id: "agentes", label: "Agentes de IA" },
  { id: "legaltech", label: "LegalTech · IA" },
  { id: "telefonia", label: "Telefonía · IA" },
  { id: "finanzas", label: "Finanzas · IA" },
  { id: "crm", label: "CRM" },
  { id: "erp", label: "ERP" },
  { id: "ecommerce", label: "Ecommerce" },
  { id: "pagos", label: "Pagos" },
  { id: "legal", label: "Legal & Firma" },
  { id: "seguridad", label: "Seguridad & ID" },
  { id: "datos", label: "Datos & Pricing" },
  { id: "comercio", label: "Comercio" },
  { id: "infra", label: "Infraestructura" },
  { id: "operaciones", label: "Operaciones" },
];

export const products: Product[] = [
  {
    code: "WL-01",
    name: "Fichaje WhatsApp",
    category: "RRHH · WhatsApp",
    group: "operaciones",
    icon: UserCheck,
    description:
      "Control de asistencia por WhatsApp con GPS anti-fraude: fichaje, turnos rotativos, horas extra y score de desempeño con IA. Sin apps ni hardware.",
  },
  {
    code: "WL-02",
    name: "Pasarela de Pagos",
    category: "Pagos online",
    group: "pagos",
    icon: Wallet,
    description:
      "Suite completa de cobros con todos los medios de pago locales: tarjetas, efectivo y transferencias, con antifraude, KYC y 3DS en una única API.",
  },
  {
    code: "WL-03",
    name: "Firma por WhatsApp",
    category: "Firma digital",
    group: "legal",
    icon: PenLine,
    description:
      "Firma de contratos con validez legal directo por WhatsApp: validación de identidad con selfie + DNI y trazabilidad completa en minutos.",
  },
  {
    code: "WL-04",
    name: "Monitor de Precios",
    category: "Pricing inteligente",
    group: ["datos", "ecommerce"],
    icon: TrendingUp,
    description:
      "Monitoreo de precios de la competencia y de cada seller en marketplaces: semáforo de precios, alertas automáticas y consultas por IA.",
  },
  {
    code: "WL-05",
    name: "POS Comercio",
    category: "Punto de venta · Gestión",
    group: "comercio",
    icon: Store,
    description:
      "Punto de venta y gestión para comercios con stock sincronizado en vivo con el mayorista: precios de costo y ventas siempre actualizados.",
  },
  {
    code: "WL-06",
    name: "Identidad Digital",
    category: "KYC · Onboarding",
    group: "seguridad",
    icon: Fingerprint,
    description:
      "Validación automática de identidad: prueba de vida, verificación de documentos oficiales, antecedentes y expediente digital en un solo flujo.",
  },
  {
    code: "WL-07",
    name: "Cobros Inteligentes",
    category: "Cobros B2B",
    group: "pagos",
    icon: Repeat,
    description:
      "Transferencias inteligentes con conciliación automática y aviso instantáneo de cobro, sin contracargos y hasta 10 veces más baratas que tarjetas o QR.",
  },
  {
    code: "WL-08",
    name: "Contratos con IA",
    category: "LegalTech · IA",
    group: "legaltech",
    icon: Scale,
    description:
      "Contratos con normativa argentina vigente redactados por IA en dos minutos. Más de 50 modelos diseñados por abogados, listos en Word.",
  },
  {
    code: "WL-09",
    name: "Cloud VPS",
    category: "Infraestructura",
    group: "infra",
    icon: Server,
    description:
      "Servidores VPS en Argentina con NVMe Gen4, protección anti-DDoS y despliegue en 45 segundos. Baja latencia local y soporte 24/7 en español.",
  },
  {
    code: "WL-10",
    name: "Firma Electrónica",
    category: "Firma digital",
    group: "legal",
    icon: FileSignature,
    description:
      "Firma electrónica por créditos con token SMS o biometría. Un crédito por documento sin importar cuántos firmantes tenga.",
  },
  {
    code: "WL-11",
    name: "Ciber Riesgo",
    category: "Ciberseguridad",
    group: "seguridad",
    icon: ShieldCheck,
    description:
      "Análisis operacional de riesgo cibernético: visibilidad continua de amenazas para priorizar acciones y reducir la exposición del negocio.",
  },
  {
    code: "WL-12",
    name: "Monitoreo de Obras",
    category: "Construcción · Video",
    group: "operaciones",
    icon: Video,
    description:
      "Seguimiento audiovisual de obras: timelapse de larga duración, vuelos con drones y cámaras 24/7 con acceso desde cualquier dispositivo.",
  },
  {
    code: "WL-13",
    name: "CRM Agro",
    category: "CRM · Agronegocios",
    group: "crm",
    icon: Sprout,
    description:
      "Pack digital para el agro: CRM con base de clientes, seguimiento de oportunidades e integración con WhatsApp, más sitio web y catálogo de productos con fichas técnicas.",
  },
  {
    code: "WL-14",
    name: "Central Cloud + IA",
    category: "Telefonía · IA",
    group: "telefonia",
    icon: PhoneCall,
    description:
      "Central telefónica en la nube con IVR, colas, grabación y hasta 80 llamadas concurrentes, más agentes de voz con IA para atender consultas las 24 horas.",
  },
  {
    code: "WL-15",
    name: "Firma Digital Certificada",
    category: "Firma digital · Certificado",
    group: "legal",
    icon: Stamp,
    description:
      "Certificado de firma digital 100% online, con validez legal y fuerza probatoria. Identidad del firmante, integridad del documento y no repudiación, sin trámites presenciales.",
  },
  {
    code: "WL-16",
    name: "Pagos Cross-border",
    category: "Pagos internacionales",
    group: "pagos",
    icon: Globe,
    description:
      "APIs de pagos transfronterizos en tiempo real: conecta rieles locales (Pix, Transferencias 3.0) para enviar y recibir dinero al instante, con liquidación en segundos.",
  },
  {
    code: "WL-17",
    name: "Finanzas por Chat",
    category: "Finanzas · IA",
    group: "finanzas",
    icon: Bot,
    description:
      "Asistente de IA que anota gastos e ingresos por chat: texto, audio o foto del ticket. Categoriza solo, arma presupuestos en PDF, agenda clientes y exporta todo a Excel.",
  },
  {
    code: "WL-18",
    name: "Widgets E-commerce",
    category: "Conversión · Tienda online",
    group: "ecommerce",
    icon: Blocks,
    description:
      "Suite de +50 widgets para tiendas online: popups de salida, prueba social, combos, reseñas, urgencia de stock y estadísticas con IA. Se activa sin código.",
  },
  {
    code: "WL-19",
    name: "Débito Automático",
    category: "Cobranzas recurrentes",
    group: "pagos",
    icon: Landmark,
    description:
      "Plataforma de cobros recurrentes: captura, débito automático y recuperación de pagos rechazados. Links y formularios con validación de medios de pago.",
  },
  {
    code: "WL-20",
    name: "Reservas WhatsApp",
    category: "Reservas · Complejos",
    group: "operaciones",
    icon: CalendarCheck,
    description:
      "Gestión de reservas, clases y torneos por WhatsApp: horarios, stock, cobros con QR y flujo de caja en tiempo real. Pensado para canchas, estudios y espacios.",
  },
  {
    code: "WL-21",
    name: "Suite Gestión + Tienda",
    category: "ERP · E-commerce · Pagos",
    group: ["erp", "ecommerce"],
    icon: AppWindow,
    description:
      "Ecosistema para administrar, vender y cobrar: ERP de finanzas y operaciones, tienda online y pasarela de pagos. Cada módulo funciona solo o integrado.",
  },
  {
    code: "WL-22",
    name: "Comunicaciones Unificadas",
    category: "UCaaS · Contact Center",
    group: "operaciones",
    icon: Headset,
    description:
      "Telefonía en la nube, videoconferencias y contact center omnichanal en una sola plataforma: voz, texto, integraciones con CRM y analítica de atención.",
  },
  {
    code: "WL-23",
    name: "Tesorería Automatizada",
    category: "Cobranzas · Conciliación",
    group: "pagos",
    icon: Banknote,
    description:
      "Cobros por transferencia con alias único por cliente, conciliación automática contra facturas y recordatorios de vencimiento. Se integra a ERP y CRM por API.",
  },
  {
    code: "WL-24",
    name: "Entrevistas con IA",
    category: "RRHH · Talento",
    group: "agentes",
    icon: Mic,
    description:
      "Entrevistas y evaluación de talento con IA: video, voz o WhatsApp, tests cognitivos y perfil 360°. También gestiona onboarding, licencias y clima del equipo.",
  },
  {
    code: "WL-25",
    name: "Drones Agrícolas",
    category: "Agtech · Precisión",
    group: "operaciones",
    icon: Plane,
    description:
      "Aplicaciones aéreas de precisión: fertilizantes, plagas y malezas, con monitoreo multiespectral. Hasta 250 ha por día y menor uso de agroquímicos.",
  },
  {
    code: "WL-26",
    name: "Gestión Documental",
    category: "Documentos · Comercio exterior",
    group: "legal",
    icon: FolderOpen,
    description:
      "Digitalización y gestión documental con firma digital, más conexión remota al sistema aduanero. Pensado para comercio exterior y despachantes.",
  },
  {
    code: "WL-27",
    name: "Gestión Gastronómica",
    category: "Gastronomía · POS",
    group: "comercio",
    icon: UtensilsCrossed,
    description:
      "App para restaurantes y bares: mesas, delivery, takeaway, stock y facturación. Pedidos desde el celular del mozo, QR para comensales y comandas digitales en cocina.",
  },
  {
    code: "WL-28",
    name: "Inbox Omnicanal",
    category: "Soporte · Conversaciones",
    group: "agentes",
    icon: MessagesSquare,
    description:
      "Bandeja única de atención: web, email, WhatsApp, redes y llamadas. Agente de IA, help center y todo el historial del cliente en un solo lugar.",
  },
  {
    code: "WL-29",
    name: "Modelos de Voz a Medida",
    category: "Telefonía · IA",
    group: "telefonia",
    icon: AudioLines,
    description:
      "Entrena un modelo de voz con las reglas y llamadas de tu empresa. Responde más rápido, no se salta políticas críticas y reemplaza solo el LLM del agente.",
  },
  {
    code: "WL-30",
    name: "Triage de Alertas SOC",
    category: "Ciberseguridad · SOC",
    group: "seguridad",
    icon: Radar,
    description:
      "Investiga cada alerta de SIEM de punta a punta y entrega un veredicto auditable en minutos: filtra falsos positivos y explica qué se revisó y por qué.",
  },
  {
    code: "WL-31",
    name: "Pentesting con IA",
    category: "Ciberseguridad ofensiva",
    group: "seguridad",
    icon: Bug,
    description:
      "Pentest híbrido: agentes de IA más especialistas humanos. Encadena vulnerabilidades, genera PoC reproducible y prioriza por impacto real, no por scanner.",
  },
  {
    code: "WL-32",
    name: "Cobranzas con IA",
    category: "Cobranzas · Voz y WhatsApp",
    group: ["agentes", "pagos"],
    icon: PhoneForwarded,
    description:
      "Agentes virtuales que llaman y escriben por WhatsApp 24/7: negocian pagos, priorizan quién va a pagar y ejecutan campañas de cobranza sin un equipo masivo.",
  },
  {
    code: "WL-33",
    name: "Analytics Conversacional",
    category: "Datos · BI con IA",
    group: ["agentes", "datos"],
    icon: LineChart,
    description:
      "Hablá con los números de tu empresa: conectá fuentes, preguntá en lenguaje natural y obtené métricas, tendencias y reportes al instante, también por WhatsApp.",
  },
  {
    code: "WL-34",
    name: "Pagos a Proveedores",
    category: "Tesorería · Cuentas a pagar",
    group: "pagos",
    icon: Send,
    description:
      "Automatizá pagos de facturas, nómina y servicios en un solo flujo, integrado a facturación electrónica. Trazabilidad para proveedores y herramientas de liquidez.",
  },
  {
    code: "WL-35",
    name: "Riesgo Humano",
    category: "Ciberseguridad · Phishing",
    group: ["seguridad", "agentes"],
    icon: Fish,
    description:
      "Simula phishing y QRishing, entrena por perfil y mide quién concentra el riesgo. Un agente prioriza intervenciones; evidencia lista para auditoría y directorio.",
  },
  {
    code: "WL-36",
    name: "Gestión para Farmacias",
    category: "Farmacia · POS",
    group: "comercio",
    icon: Pill,
    description:
      "Software para farmacias: facturación, stock, trazabilidad y validación online de obras sociales. Precios actualizados y factura electrónica ARCA.",
  },
  {
    code: "WL-37",
    name: "Gestión para Vinotecas",
    category: "Vinoteca · POS · Ecommerce",
    group: ["comercio", "ecommerce"],
    icon: Wine,
    description:
      "Caja, stock y tienda online para vinotecas, con el mismo inventario. Escaneás la botella, la ficha se completa y un sommelier IA recomienda desde el mostrador.",
  },
  {
    code: "WL-38",
    name: "ERP Vitivinícola",
    category: "ERP · CRM · Bodegas",
    group: ["erp", "crm"],
    icon: Boxes,
    description:
      "ERP y CRM en la nube para bodegas: vendimia, trazabilidad, laboratorio, envasado, ventas y tienda. Módulos de enoturismo, BI e IA para el sector vitivinícola.",
  },
  {
    code: "WL-39",
    name: "API de Identidad y Fraude",
    category: "KYC · KYB · AML",
    group: "seguridad",
    icon: ScanFace,
    description:
      "Una API para autenticar, verificar y monitorear: biometría, prueba de vida, KYC/KYB y AML en +220 países. Modular, pago por uso y marca blanca.",
  },
];

/* --------------------------------- partners ------------------------------- */

export const tiers: Tier[] = [
  {
    name: "Starter",
    price: "Consultar",
    tagline: "Recién comenzás",
    featured: false,
    cta: "Asesorarme",
    benefits: [
      "Precio mayorista en 5 verticales a elección",
      "Marca blanca opcional, producto por producto",
      "Opción de partner exclusivo de una marca",
      "Kit comercial digital",
      "Soporte por email en el día",
      "Sin permanencia mínima",
    ],
  },
  {
    name: "Partner Pro",
    price: "Consultar",
    tagline: "El motor de tu negocio",
    featured: true,
    cta: "Postularme como Pro",
    benefits: [
      "Todo el catálogo, con marca blanca a elección",
      "Margen mayorista premium de hasta 50%",
      "Partner exclusivo de marca + programa dedicado",
      "Onboarding 1:1, demos y certificación Biooma",
      "Soporte prioritario N2 con SLA",
      "Acceso anticipado a nuevas soluciones",
    ],
  },
  {
    name: "Plus",
    price: "Consultar",
    tagline: "Escala regional",
    featured: false,
    cta: "Hablar con ventas",
    benefits: [
      "Todo lo incluido en Partner Pro",
      "Exclusividad de marca, vertical o zona",
      "Programa de partners para desarrollar esa marca",
      "Leads, enablement y go-to-market conjunto",
      "Account manager dedicado",
      "Influencia directa en el roadmap",
    ],
  },
];

export const perks = [
  "Marca blanca a elección",
  "Partner exclusivo",
  "Margen mayorista",
  "Sin permanencia",
  "Soporte N2",
  "Programa de marca",
  "Kit comercial",
  "Certificación Biooma",
];

export const heroMarquee = [
  "CRM",
  "ERP",
  "Turnero",
  "Automatizaciones",
  "Punto de Venta",
  "WhatsApp",
  "Plataformas de Pago",
  "Partner exclusivo",
];

/** WhatsApp comercial Biooma — +54 9 11 7365-9579 */
export const WHATSAPP_NUMBER = "5491173659579";

export function whatsappUrl(text?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
