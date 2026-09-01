import type { DoctorProfile } from "@/schemas/doctor-profile";

export const doctorProfile: DoctorProfile = {
  professionalName: "Dra. Vitória Ruvieri Silveira",
  shortName: "Dra. Vitória",
  crm: "CRM-SP 202273",
  city: "Fernandópolis, SP",
  // Validar com a cliente antes da publicação final. Não publicar RQE sem confirmação formal.
  specialty: "Dermatologia e Medicina Capilar",
  specialtyValidationNote:
    "Validar especialidade, RQE e forma de apresentação profissional com a cliente antes da publicação.",
  tagline:
    "Diagnóstico preciso e cuidado personalizado para a saúde da pele e dos cabelos.",
  institutionalCall:
    "Cuidado médico com escuta, embasamento científico e tecnologias atuais em Fernandópolis.",
  approvedBaseText:
    "Diagnóstico preciso. Tratamentos personalizados, embasamento científico, medicina regenerativa. Resultados que transformam. Devolvendo autoestima através da saúde dos seus cabelos. Tecnologias e tudo de mais inovador você encontra aqui!",
  biography: [
    "Atendimento voltado para dermatologia e medicina capilar, com avaliação individualizada e uma condução cuidadosa de cada queixa.",
    "A proposta é unir escuta, ciência e tecnologia para orientar escolhas terapêuticas com clareza, segurança e respeito ao tempo de cada paciente.",
  ],
  photo: {
    src: "/images/dra-vitoria-ruvieri.jpg",
    alt: "Retrato profissional da Dra. Vitória Ruvieri Silveira",
    fallbackInitials: "VR",
  },
  colors: {
    background: "#fbf7f2",
    foreground: "#2c2523",
    accent: "#8f4657",
    accentSoft: "#ead0d2",
    detail: "#6f7e71",
  },
  address: {
    clinic: "Clínica CEI",
    streetAddress: "Rua Sergipe, 908, Sala 3, Centro",
    city: "Fernandópolis - SP",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Rua%20Sergipe%2C%20908%2C%20Sala%203%2C%20Centro%2C%20Fernand%C3%B3polis%20-%20SP",
    mapEmbedUrl:
      "https://www.google.com/maps?q=Rua%20Sergipe%2C%20908%2C%20Sala%203%2C%20Centro%2C%20Fernand%C3%B3polis%20-%20SP&output=embed",
  },
  availability: {
    whatsappCommercialAvailability: "24 horas, todos os dias",
    displayText:
      "O canal comercial foi informado como disponível 24 horas, todos os dias.",
    note: "O número de WhatsApp deve ser inserido somente após confirmação final.",
  },
  contact: {
    instagramUrl: "https://www.instagram.com/dravitoriaruvieri/",
    whatsappNumber: "",
    email: "",
    schedulingUrl:
      "https://api.whatsapp.com/send?phone=5517997843429&text=Ol%C3%A1%2C%20vim%20do%20Instagram%20e%20gostaria%20de%20agendar%20uma%20consulta.%20",
  },
  officeHours: {
    publicLabel: "",
    items: [],
    showOnSite: false,
  },
  care: {
    eyebrow: "Um cuidado individualizado",
    title: "Avaliação atenta para escolhas mais precisas.",
    description:
      "A jornada começa pela compreensão da história, das queixas e dos objetivos de cada pessoa.",
    paragraphs: [
      "O texto-base aprovado aponta uma prática guiada por diagnóstico preciso, tratamentos personalizados, embasamento científico e uso criterioso de tecnologias.",
      "Na comunicação do site, essa mensagem foi construída sem prometer desfechos clínicos: o foco está em cuidado, orientação médica, autoestima e saúde dos cabelos.",
    ],
  },
  visualHealth: {
    eyebrow: "Pele e saúde capilar",
    title: "Tecnologia e ciência a favor de um cuidado mais claro.",
    description:
      "Uma apresentação visual leve, sem imagens invasivas, para reforçar investigação, prevenção e acompanhamento.",
    image: {
      src: "/images/foto.jpg",
      alt: "Dra. Vitória durante procedimento de cuidado capilar em consultório",
      fallbackInitials: "VR",
    },
    topics: [
      {
        label: "01",
        title: "Investigação",
        description:
          "Leitura cuidadosa dos sinais da pele e do couro cabeludo antes de qualquer conduta.",
      },
      {
        label: "02",
        title: "Personalização",
        description:
          "Planejamento ajustado à história, rotina e necessidades apresentadas em consulta.",
      },
      {
        label: "03",
        title: "Acompanhamento",
        description:
          "Orientação contínua para decisões mais seguras ao longo do tratamento médico.",
      },
    ],
  },
  differentials: [
    {
      icon: "heartPulse",
      title: "Cuidado individualizado",
      description:
        "Escuta, avaliação e comunicação pensadas para acolher a história de cada paciente.",
    },
    {
      icon: "microscope",
      title: "Embasamento científico",
      description:
        "Condutas orientadas por critérios médicos, evidências e atualização profissional.",
    },
    {
      icon: "sparkles",
      title: "Tecnologia com propósito",
      description:
        "Recursos e abordagens atuais usados de forma criteriosa, conforme indicação médica.",
    },
  ],
  services: [],
  testimonials: [],
  faq: [],
  sections: {
    hero: true,
    care: true,
    visualHealth: true,
    differentials: true,
    location: true,
    availability: false,
    services: false,
    testimonials: false,
    faq: false,
    finalCta: false,
  },
};
