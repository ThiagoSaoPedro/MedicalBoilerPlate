import type { DoctorProfile } from "@/schemas/doctor-profile";

export const doctorProfile: DoctorProfile = {
  professionalName: "Dr. Rafael Almeida Cardoso",
  shortName: "Dr. Rafael",
  crm: "CRM-SP 145890",
  city: "São Paulo, SP",
  specialty: "Cardiologia Clínica e Preventiva",
  specialtyValidationNote:
    "Informações fictícias para demonstração. Substitua por CRM, RQE e especialidade confirmados antes da publicação.",
  tagline:
    "Cuidado cardiológico claro, preventivo e atento ao ritmo de vida de cada paciente.",
  institutionalCall:
    "Avaliação cardiovascular completa, escuta cuidadosa e acompanhamento próximo para decisões mais seguras sobre a saúde do coração.",
  approvedBaseText:
    "Cardiologia com foco em prevenção, diagnóstico preciso e acompanhamento contínuo. Um cuidado humano para proteger o coração em todas as fases da vida.",
  biography: [
    "O Dr. Rafael Almeida Cardoso atua em cardiologia clínica com foco em prevenção, investigação de sintomas e acompanhamento de fatores de risco cardiovascular.",
    "Sua abordagem combina conversa detalhada, análise criteriosa de exames e orientação prática para que cada paciente compreenda melhor sua saúde e participe das decisões de cuidado.",
  ],
  photo: {
    src: "/images/medico.jpg",
    alt: "Retrato profissional do Dr. Rafael Almeida Cardoso",
    fallbackInitials: "RA",
  },
  colors: {
    background: "#f6f8f9",
    foreground: "#15212a",
    accent: "#9f1d35",
    accentSoft: "#f0d8de",
    detail: "#1f6370",
  },
  address: {
    clinic: "Instituto CardioVita",
    streetAddress: "Av. Paulista, 1842, 12º andar, Bela Vista",
    city: "São Paulo - SP",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Av.%20Paulista%2C%201842%2C%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP",
    mapEmbedUrl:
      "https://www.google.com/maps?q=Av.%20Paulista%2C%201842%2C%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP&output=embed",
  },
  availability: {
    whatsappCommercialAvailability: "Segunda a sexta, das 8h às 18h",
    displayText:
      "A equipe comercial responde solicitações de consulta, retornos e dúvidas administrativas em horário comercial.",
    note: "Informe o número de WhatsApp definitivo antes da publicação.",
  },
  contact: {
    instagramUrl: "https://www.instagram.com/drrafaelcardio/",
    whatsappNumber: "5511999990000",
    email: "contato@drrafaelcardio.com.br",
    schedulingUrl:
      "https://api.whatsapp.com/send?phone=5511999990000&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20cardiol%C3%B3gica.",
  },
  officeHours: {
    publicLabel: "Atendimento com hora marcada",
    items: ["Segunda a sexta, das 8h às 18h", "Sábados alternados pela manhã"],
    showOnSite: true,
  },
  care: {
    eyebrow: "Cardiologia preventiva",
    title: "Cuidado para entender riscos, sintomas e próximos passos.",
    description:
      "Uma jornada de avaliação cardiovascular pensada para unir prevenção, clareza e acompanhamento responsável.",
    paragraphs: [
      "A consulta parte da história clínica, rotina, antecedentes familiares, pressão arterial, exames prévios e objetivos de saúde do paciente.",
      "A comunicação evita alarmismo e promessas: o foco está em explicar riscos, organizar prioridades e acompanhar mudanças possíveis com consistência.",
    ],
  },
  visualHealth: {
    eyebrow: "Saúde do coração",
    title: "Prevenção cardiovascular com método, dados e escuta.",
    description:
      "A seção visual reforça a ideia de precisão clínica, monitoramento e cuidado contínuo.",
    image: {
      src: "/images/medico.jpg",
      alt: "Cardiologista em retrato profissional com estetoscópio",
      fallbackInitials: "RA",
    },
    topics: [
      {
        label: "01",
        title: "Estratificação de risco",
        description:
          "Análise de pressão, colesterol, histórico familiar, hábitos e exames para entender o risco cardiovascular.",
      },
      {
        label: "02",
        title: "Investigação de sintomas",
        description:
          "Avaliação cuidadosa de dor no peito, palpitações, falta de ar, tonturas e cansaço aos esforços.",
      },
      {
        label: "03",
        title: "Plano de acompanhamento",
        description:
          "Orientações práticas, metas realistas e seguimento para prevenção e controle de condições crônicas.",
      },
    ],
  },
  differentials: [
    {
      icon: "heartPulse",
      title: "Prevenção personalizada",
      description:
        "Condutas ajustadas ao perfil de risco, histórico familiar, rotina e exames de cada paciente.",
    },
    {
      icon: "microscope",
      title: "Decisões baseadas em dados",
      description:
        "Integração de avaliação clínica e exames complementares para orientar próximos passos com clareza.",
    },
    {
      icon: "sparkles",
      title: "Linguagem acessível",
      description:
        "Explicações objetivas sobre diagnóstico, prevenção e tratamento, sem perder o rigor técnico.",
    },
  ],
  services: [
    {
      title: "Consulta cardiológica",
      description:
        "Avaliação clínica completa para prevenção, sintomas cardiovasculares e acompanhamento de rotina.",
    },
    {
      title: "Controle de pressão arterial",
      description:
        "Investigação, orientação e seguimento para hipertensão e fatores associados.",
    },
    {
      title: "Check-up cardiovascular",
      description:
        "Organização de exames e metas preventivas conforme idade, histórico e perfil de risco.",
    },
  ],
  testimonials: [],
  faq: [
    {
      question: "Quando procurar um cardiologista?",
      answer:
        "É indicado buscar avaliação diante de sintomas como dor no peito, palpitações, falta de ar, pressão alta ou histórico familiar de doença cardiovascular.",
    },
    {
      question: "A consulta serve para prevenção?",
      answer:
        "Sim. A cardiologia preventiva ajuda a identificar fatores de risco e organizar cuidados antes que problemas maiores apareçam.",
    },
    {
      question: "Quais exames podem ser solicitados?",
      answer:
        "A indicação depende da avaliação clínica. Podem ser considerados exames laboratoriais, eletrocardiograma, teste ergométrico, ecocardiograma ou monitorizações.",
    },
  ],
  sections: {
    hero: true,
    care: true,
    visualHealth: true,
    differentials: true,
    location: true,
    availability: true,
    services: true,
    testimonials: false,
    faq: true,
    finalCta: true,
  },
};
