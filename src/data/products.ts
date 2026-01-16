import type { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    title: 'Sofá Retrátil Suede Muito Confortável - Estrutura Reforçada',
    description:
      'Sofá retrátil em suede, cor cinza. Muito confortável e espaçoso. Estrutura forte e mecanismo funcionando. ⚠️ Possui detalhes estéticos nos braços (fiapos puxados por gatos), mas não interfere no conforto.',
    price: 500,
    available: true,
    media: [
      { type: 'image', src: '/assets/20260113_192454.jpg' },
      { type: 'image', src: '/assets/20260113_192500.jpg' },
      { type: 'image', src: '/assets/20260113_192529.jpg' },
      { type: 'image', src: '/assets/20260113_192603.jpg' },
      { type: 'image', src: '/assets/20260113_192610.jpg' },
    ],
  },
  {
    id: '2',
    title: 'Televisão Smart LG 49 Polegadas',
    description:
      'Televisão Smart LG 49 polegadas modelo 49UJ6565. Possui uma linha vertical no canto direito da tela, mas que não afeta a qualidade da imagem.',
    price: 800,
    available: true,
    media: [
      { type: 'video', src: '/assets/20260113_192638.mp4' },
      { type: 'image', src: '/assets/20260113_192654.jpg' },
      { type: 'image', src: '/assets/20260113_192702.jpg' },
    ],
  },
  {
    id: '3',
    title: 'Armário aberto estilo closet com design industrial',
    description:
      'Armário estilo closet aberto, super moderno e prático. Estrutura de metal preto reforçada. Módulos com cabideiros, prateleiras e 4 gavetas grandes. Perfeito para visualizar e organizar todas as roupas e sapatos.',
    price: 900,
    available: true,
    media: [
      { type: 'image', src: '/assets/20260113_192808.jpg' },
      { type: 'image', src: '/assets/20260113_192828.jpg' },
      { type: 'image', src: '/assets/20260113_192831.jpg' },
    ],
  },
  {
    id: '4',
    title: 'Geladeira Electrolux Frost Free DFN41 - 371L - 220V',
    description:
      'geladeira Electrolux Frost Free Duplex (2 portas), modelo DFN41 na cor branca. Produto em excelente estado de funcionamento, gela muito bem e possui painel Blue Touch externo para controle fácil de temperatura. ⚠️ Atenção, algumas peças de acrílico precisam ser trocadas!',
    price: 1000,
    available: true,
    media: [
      { type: 'image', src: '/assets/20260113_192954.jpg' },
      { type: 'image', src: '/assets/20260113_193007.jpg' },
      { type: 'image', src: '/assets/20260113_193136.jpg' },
    ],
  },
  {
    id: '5',
    title: 'Cortina com varão',
    description:
      'Cortina branca de ilhós, super conservada. Tecido leve que deixa o ambiente claro e aconchegante, mas consegue segurar bem o sol. Acompanha o varão e suportes.',
    price: 100,
    available: true,
    media: [{ type: 'image', src: '/assets/20260113_200424.jpg' }],
  },
  {
    id: '6',
    title: 'Cama Box Solteiro Ortobom - Colchão Pró-Saúde + Base Branca',
    description:
      'Cama completa (Box + Colchão) em ótimo estado. Marca: Ortobom (Linha Pró-Saúde Firme). Base branca em corino (fácil limpeza). Colchão de espuma firme e confortável. Pés prateados. Medidas: 1,88m x 0,88m x 18cm de altura',
    price: 1800,
    available: true,
    media: [
      { type: 'image', src: '/assets/20260113_200446.jpg' },
      { type: 'image', src: '/assets/20260113_200455.jpg' },
      { type: 'image', src: '/assets/20260113_200516.jpg' },
    ],
  },
  {
    id: '7',
    title: 'Guarda-Roupa Moderno com Porta de Espelho - Branco e Madeira',
    description:
      'Guarda-roupa branco com detalhe amadeirado, super conservado. Porta inteira de espelho. Sistema de correr (não ocupa espaço). Interno completo com prateleiras e cabideiro. Ideal para quarto de solteiro ou casal compacto.',
    price: 300,
    available: true,
    media: [
      { type: 'image', src: '/assets/20260113_200624.jpg' },
      { type: 'image', src: '/assets/20260113_200646.jpg' },
      { type: 'image', src: '/assets/20260113_200701.jpg' },
    ],
  },
  {
    id: '8',
    title: 'Cômoda Branca com Tampo de Vidro e Organizador de Joias/Make',
    description:
      'Cômoda branca linda, estilo penteadeira/organizador. Tampo de vidro transparente. 1ª gaveta com divisórias para acessórios/joias. + 4 gavetões espaçosos para roupas. Design moderno e clean.',
    price: 500,
    available: true,
    media: [
      { type: 'image', src: '/assets/20260113_200717.jpg' },
      { type: 'image', src: '/assets/20260113_200725.jpg' },
      { type: 'image', src: '/assets/20260113_200735.jpg' },
    ],
  },
  {
    id: '9',
    title: 'Rack Branco Moderno com Detalhe Amadeirado - 2 Portas',
    description:
      'Rack moderno em ótimo estado! Cor branca com detalhe em madeira. 2 portas laterais + nichos para eletrônicos. Design clean que combina com tudo.',
    price: 300,
    available: true,
    media: [{ type: 'image', src: '/assets/IMG-20260113-WA0023.jpeg' }],
  },
  // {
  //   id: '8',
  //   title: 'Outros Móveis',
  //   description: 'Diversos outros itens de decoração e mobília para sua casa.',
  //   price: 0,
  //   available: true,
  //   media: [
  //     { type: 'image', src: '/assets/20260113_200424.jpg' },
  //     { type: 'image', src: '/assets/20260113_200446.jpg' },
  //     { type: 'image', src: '/assets/20260113_200455.jpg' },
  //     { type: 'image', src: '/assets/20260113_200516.jpg' },
  //     { type: 'image', src: '/assets/20260113_200624.jpg' },
  //     { type: 'image', src: '/assets/20260113_200646.jpg' },
  //     { type: 'image', src: '/assets/20260113_200701.jpg' },
  //     { type: 'image', src: '/assets/20260113_200717.jpg' },
  //     { type: 'image', src: '/assets/20260113_200725.jpg' },
  //     { type: 'image', src: '/assets/20260113_200735.jpg' },
  //     { type: 'image', src: '/assets/IMG-20260113-WA0023.jpeg' },
  //   ],
  // },
];
