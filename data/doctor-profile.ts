import type { DoctorProfile } from "@/schemas/doctor-profile";

const locations = [
  {
    clinic: "Clínica Integratto",
    streetAddress: "Rua Espírito Santo, 1273, Centro",
    city: "Fernandópolis - SP",
    postalCode: "CEP 15600-046",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Cl%C3%ADnica%20Integratto%20Rua%20Esp%C3%ADrito%20Santo%201273%20Centro%20Fernand%C3%B3polis%20SP",
    mapEmbedUrl:
      "https://www.google.com/maps?q=Cl%C3%ADnica%20Integratto%20Rua%20Esp%C3%ADrito%20Santo%201273%20Centro%20Fernand%C3%B3polis%20SP&output=embed",
  },
  {
    clinic: "Atendimentos em São José do Rio Preto",
    streetAddress: "Rua Pernambuco, 3341. Redentora.",
    city: "São José do Rio Preto - SP",
    postalCode: "",
    phone: "(17) 3232 0177",
    whatsapp: "(17) 99771 2522",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Rua%20Pernambuco%203341%20Redentora%20S%C3%A3o%20Jos%C3%A9%20do%20Rio%20Preto%20SP",
    mapEmbedUrl:
      "https://www.google.com/maps?q=Rua%20Pernambuco%203341%20Redentora%20S%C3%A3o%20Jos%C3%A9%20do%20Rio%20Preto%20SP&output=embed",
  },
] as const;

export const doctorProfile: DoctorProfile = {
  professionalName: "Dra. Flávia Maia",
  shortName: "Dra. Flávia Maia",
  crm: "CRM-SP 206251",
  rqe: "RQE 135687",
  city: "Fernandópolis e São José do Rio Preto, SP",
  specialty: "Reumatologia",
  specialtyValidationNote: "",
  tagline: "Medicina com ciência e escuta para quem convive com dor.",
  institutionalCall: "Medicina com ciência e escuta para quem convive com dor.",
  approvedBaseText:
    "Uma avaliação individualizada ajuda a compreender a dor, a funcionalidade, a rotina e os sinais clínicos antes de definir caminhos de cuidado.",
  biography: [
    "A atuação em reumatologia exige tempo para escutar, investigar e conectar sintomas que muitas vezes atravessam a vida diária por meses ou anos.",
    "A proposta do atendimento é unir ciência, comunicação clara e acompanhamento cuidadoso para pessoas que convivem com dor crônica, fadiga e doenças reumatológicas.",
  ],
  photo: {
    src: "/images/flaviamaia.png",
    alt: "Retrato profissional da Dra. Flávia Maia",
    fallbackInitials: "FM",
  },
  colors: {
    background: "#11100f",
    foreground: "#f7f1e8",
    accent: "#c99a68",
    accentSoft: "#ead7bd",
    detail: "#b89156",
    gold: "#d2ad72",
  },
  address: locations[0],
  locations,
  availability: {
    whatsappCommercialAvailability: "",
    displayText: "",
    note: "Telefone e WhatsApp devem ser inseridos somente após confirmação final.",
  },
  contact: {
    instagramUrl: "https://www.instagram.com/dra.flaviamaia/",
    whatsappNumber: "",
    email: "",
    schedulingUrl:
      "https://l.instagram.com/?u=https%3A%2F%2Fwww.doctoralia.com.br%2Fflavia-maia%2Freumatologista%2Ffernandopolis%3Fsaasonly%3Dtrue%26utm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAadukMILm6fjmoBIiA1lnJ1iLecJ0eLEVpC8JTx8sNuXTzlhqrUh7F6SmM1_IA_aem_SuweIHaHdDRoodHuEPc94g&e=AUC2zVkX5STeFWS4T5GCbMJ5E5UIjX8_caMB-JaW-WOCmtj0iF-swCDcxg8X-P7OYcDSIRKWEW3uvs8KFDUWzbxAfc7oHsKp0JbkZpzVOlilXsLAhZ-iZ8rgyGE7EkA9PLSrsV81TBEDBmmbUpC7Q5Y",
  },
  officeHours: {
    publicLabel: "",
    items: [],
    showOnSite: false,
  },
  care: {
    eyebrow: "Cuidado que começa pela escuta",
    title: "Uma avaliação individualizada para compreender a dor em contexto.",
    description:
      "Dor, fadiga e doenças autoimunes pedem uma escuta clínica atenta, capaz de considerar história, exames, rotina, funcionalidade e impacto emocional.",
    paragraphs: [
      "Na consulta reumatológica, a investigação começa pelo modo como os sintomas aparecem, evoluem e interferem no movimento, no descanso e nas atividades de cada pessoa.",
      "Esse olhar individualizado permite organizar hipóteses, orientar exames quando necessários e construir uma condução médica coerente com cada quadro.",
      "A comunicação é pensada para trazer clareza, sem promessas simplistas, respeitando a complexidade de condições crônicas e autoimunes.",
    ],
  },
  visualHealth: {
    eyebrow: "Percurso clínico",
    title: "Ciência, vínculo e acompanhamento com serenidade.",
    description:
      "A identidade visual evita imagens invasivas e traduz o cuidado reumatológico por formas orgânicas, linhas suaves e uma atmosfera de alívio.",
    image: {
      src: "/images/dra-flavia-maia-placeholder.svg",
      alt: "Arte abstrata com curvas orgânicas inspiradas em movimento articular",
      fallbackInitials: "FM",
    },
    topics: [
      {
        label: "01",
        title: "Escuta",
        description:
          "Compreensão da história, dos sintomas e do impacto da dor na rotina.",
      },
      {
        label: "02",
        title: "Investigação",
        description:
          "Avaliação clínica criteriosa para orientar hipóteses e próximos passos.",
      },
      {
        label: "03",
        title: "Continuidade",
        description:
          "Acompanhamento pensado para quadros crônicos, autoimunes e funcionais.",
      },
    ],
  },
  careAreas: [
    {
      title: "Dor crônica",
      description:
        "Avaliação de sintomas persistentes, limitações funcionais e fatores associados.",
    },
    {
      title: "Fibromialgia e fadiga crônica",
      description:
        "Cuidado atento a dor difusa, cansaço persistente, sono e qualidade de vida.",
    },
    {
      title: "Artrose",
      description:
        "Acompanhamento de dor articular, rigidez e impacto nas atividades diárias.",
    },
    {
      title: "Artrite reumatoide",
      description:
        "Investigação e seguimento de inflamação articular e manifestações sistêmicas.",
    },
    {
      title: "Doenças autoimunes",
      description:
        "Avaliação de condições reumatológicas autoimunes com abordagem criteriosa.",
    },
  ],
  credentials: {
    education: [
      "Médica pelo Centro Universitário de Votuporanga.",
      "Clínica Médica pela Santa Casa de Misericórdia de São Carlos.",
      "Reumatologista pelo Hospital de Base de São José do Rio Preto/FAMERP.",
    ],
    experience: [
      "Hospital de Base de São José do Rio Preto.",
      "Médica assistente do CEDMAC no Hospital de Base.",
      "Ambulatório de Especialidades em Fernandópolis e Votuporanga.",
    ],
  },
  differentials: [
    {
      icon: "heartPulse",
      title: "Escuta clínica",
      description:
        "Tempo e atenção para compreender sintomas, rotina e necessidades reais.",
    },
    {
      icon: "microscope",
      title: "Confiança científica",
      description:
        "Condutas orientadas por avaliação médica, evidências e formação especializada.",
    },
    {
      icon: "sparkles",
      title: "Cuidado humano",
      description:
        "Comunicação clara e acolhedora para lidar com condições complexas sem pressa.",
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
