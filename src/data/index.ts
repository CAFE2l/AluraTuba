
export default interface Video {
  id: number
  title: string
  channel: string
  channelAvatar: string
  views: string
  timestamp: string
  duration: string
  thumbnail: string
  likes: string
  description: string
  category: string
  tags: string[]
  subscribers: string
  isLive?: boolean
  isVerified?: boolean
}

export interface Category {
  id: string
  name: string
  icon: string
}

// Categorias para a barra de filtros
export const categories: Category[] = [
  { id: 'all', name: 'Todos', icon: '📺' },
  { id: 'frontend', name: 'Frontend', icon: '🎨' },
  { id: 'backend', name: 'Backend', icon: '⚙️' },
  { id: 'react', name: 'React', icon: '⚛️' },
  { id: 'typescript', name: 'TypeScript', icon: '📘' },
  { id: 'nextjs', name: 'Next.js', icon: '🚀' },
  { id: 'tailwind', name: 'Tailwind', icon: '🎨' },
  { id: 'nodejs', name: 'Node.js', icon: '🟢' },
  { id: 'aws', name: 'AWS', icon: '☁️' },
  { id: 'devops', name: 'DevOps', icon: '🐳' },
  { id: 'mobile', name: 'Mobile', icon: '📱' },
  { id: 'ia', name: 'Inteligência Artificial', icon: '🧠' },
]

// Dados de vídeos mockados
export const videos: Video[] = [
  {
    id: 1,
    title: 'React 18: Novidades e Conceitos Avançados com TypeScript',
    channel: 'Alura',
    channelAvatar: 'https://ui-avatars.com/api/?name=Alura&background=3b82f6&color=fff',
    views: '1.2M',
    timestamp: '2 dias atrás',
    duration: '24:18',
    thumbnail: 'https://picsum.photos/seed/react18/320/180',
    likes: '45K',
    description: 'Aprenda as principais novidades do React 18 e como usar TypeScript para melhorar sua produtividade e segurança no código.',
    category: 'react',
    tags: ['react', 'typescript', 'frontend'],
    subscribers: '1.5M',
    isVerified: true,
  },
  {
    id: 2,
    title: 'Next.js 14 - App Router na Prática | Tutorial Completo',
    channel: 'Rocketseat',
    channelAvatar: 'https://ui-avatars.com/api/?name=Rocketseat&background=8257e5&color=fff',
    views: '850K',
    timestamp: '1 semana atrás',
    duration: '42:30',
    thumbnail: 'https://picsum.photos/seed/nextjs14/320/180',
    likes: '32K',
    description: 'Domine o novo App Router do Next.js 14 com server components, loading states e rotas dinâmicas.',
    category: 'nextjs',
    tags: ['nextjs', 'react', 'fullstack'],
    subscribers: '2.1M',
    isVerified: true,
    isLive: true,
  },
  {
    id: 3,
    title: 'TypeScript do Zero ao Avançado | 5 Projetos Reais',
    channel: 'Fireship',
    channelAvatar: 'https://ui-avatars.com/api/?name=Fireship&background=f97316&color=fff',
    views: '2.1M',
    timestamp: '3 dias atrás',
    duration: '38:45',
    thumbnail: 'https://picsum.photos/seed/typescript/320/180',
    likes: '78K',
    description: 'Curso intensivo de TypeScript com projetos práticos que você pode adicionar ao seu portfólio.',
    category: 'typescript',
    tags: ['typescript', 'javascript', 'webdev'],
    subscribers: '3.4M',
    isVerified: true,
  },
  {
    id: 4,
    title: 'Tailwind CSS: Design System Profissional',
    channel: 'Tailwind Labs',
    channelAvatar: 'https://ui-avatars.com/api/?name=Tailwind&background=0ea5e9&color=fff',
    views: '560K',
    timestamp: '5 dias atrás',
    duration: '29:22',
    thumbnail: 'https://picsum.photos/seed/tailwind/320/180',
    likes: '21K',
    description: 'Crie um design system completo e reutilizável usando Tailwind CSS e React.',
    category: 'tailwind',
    tags: ['tailwind', 'css', 'design'],
    subscribers: '850K',
    isVerified: true,
  },
  {
    id: 5,
    title: 'Node.js + Express + TypeScript API REST Completa',
    channel: 'Node.js University',
    channelAvatar: 'https://ui-avatars.com/api/?name=Node.js&background=22c55e&color=fff',
    views: '720K',
    timestamp: '2 semanas atrás',
    duration: '51:15',
    thumbnail: 'https://picsum.photos/seed/nodeapi/320/180',
    likes: '28K',
    description: 'Construa uma API REST completa com autenticação JWT, upload de arquivos e deploy na AWS.',
    category: 'nodejs',
    tags: ['nodejs', 'backend', 'api'],
    subscribers: '1.1M',
  },
  {
    id: 6,
    title: 'AWS para Desenvolvedores Frontend - EC2, S3, CloudFront',
    channel: 'AWS Developers',
    channelAvatar: 'https://ui-avatars.com/api/?name=AWS&background=ff9900&color=fff',
    views: '430K',
    timestamp: '1 mês atrás',
    duration: '36:40',
    thumbnail: 'https://picsum.photos/seed/awsfrontend/320/180',
    likes: '15K',
    description: 'Aprenda a deployar e escalar aplicações frontend usando os serviços da AWS.',
    category: 'aws',
    tags: ['aws', 'devops', 'cloud'],
    subscribers: '2.8M',
    isVerified: true,
  },
  {
    id: 7,
    title: 'Docker & Kubernetes para Desenvolvedores Web',
    channel: 'DevOps Academy',
    channelAvatar: 'https://ui-avatars.com/api/?name=DevOps&background=6366f1&color=fff',
    views: '310K',
    timestamp: '3 semanas atrás',
    duration: '47:55',
    thumbnail: 'https://picsum.photos/seed/docker/320/180',
    likes: '12K',
    description: 'Containerize suas aplicações e gerencie com Kubernetes em produção.',
    category: 'devops',
    tags: ['docker', 'kubernetes', 'devops'],
    subscribers: '650K',
  },
  {
    id: 8,
    title: 'React Native + Expo - App Completo do Zero',
    channel: 'Mobile Masters',
    channelAvatar: 'https://ui-avatars.com/api/?name=Mobile&background=8b5cf6&color=fff',
    views: '890K',
    timestamp: '4 dias atrás',
    duration: '33:20',
    thumbnail: 'https://picsum.photos/seed/reactnative/320/180',
    likes: '34K',
    description: 'Crie um app completo com React Native, Expo, TypeScript e Firebase.',
    category: 'mobile',
    tags: ['reactnative', 'mobile', 'expo'],
    subscribers: '950K',
    isVerified: true,
  },
  {
    id: 9,
    title: 'Vue.js 3 Composition API + TypeScript',
    channel: 'Vue School',
    channelAvatar: 'https://ui-avatars.com/api/?name=Vue.js&background=41b883&color=fff',
    views: '520K',
    timestamp: '6 dias atrás',
    duration: '27:10',
    thumbnail: 'https://picsum.photos/seed/vuejs/320/180',
    likes: '19K',
    description: 'Aprenda Vue.js 3 com Composition API e TypeScript para construir apps escaláveis.',
    category: 'frontend',
    tags: ['vue', 'typescript', 'frontend'],
    subscribers: '1.2M',
    isVerified: true,
  },
  {
    id: 10,
    title: 'Python + FastAPI - Criando APIs Modernas',
    channel: 'Python Pro',
    channelAvatar: 'https://ui-avatars.com/api/?name=Python&background=3776ab&color=fff',
    views: '680K',
    timestamp: '1 semana atrás',
    duration: '40:30',
    thumbnail: 'https://picsum.photos/seed/fastapi/320/180',
    likes: '26K',
    description: 'Desenvolva APIs rápidas e modernas com Python e FastAPI.',
    category: 'backend',
    tags: ['python', 'fastapi', 'backend'],
    subscribers: '1.8M',
  },
  {
    id: 11,
    title: 'GraphQL vs REST - Qual Escolher em 2024?',
    channel: 'Prisma',
    channelAvatar: 'https://ui-avatars.com/api/?name=Prisma&background=0c344b&color=fff',
    views: '950K',
    timestamp: '2 dias atrás',
    duration: '22:45',
    thumbnail: 'https://picsum.photos/seed/graphql/320/180',
    likes: '41K',
    description: 'Comparação detalhada entre GraphQL e REST para ajudar na escolha da melhor arquitetura.',
    category: 'backend',
    tags: ['graphql', 'rest', 'api'],
    subscribers: '1.3M',
    isVerified: true,
  },
  {
    id: 12,
    title: 'Inteligência Artificial para Devs com OpenAI API',
    channel: 'AI Developers',
    channelAvatar: 'https://ui-avatars.com/api/?name=AI+Devs&background=10b981&color=fff',
    views: '1.5M',
    timestamp: 'Ontem',
    duration: '55:20',
    thumbnail: 'https://picsum.photos/seed/ai/320/180',
    likes: '67K',
    description: 'Integre IA em suas aplicações usando a API da OpenAI (ChatGPT, DALL-E, Whisper).',
    category: 'ia',
    tags: ['ai', 'openai', 'javascript'],
    subscribers: '2.5M',
    isVerified: true,
    isLive: true,
  },
]

// Funções auxiliares
export function getVideosByCategory(categoryId: string): Video[] {
  if (categoryId === 'all') return videos
  return videos.filter(video => video.category === categoryId)
}

export function getTrendingVideos(): Video[] {
  return [...videos]
    .sort((a, b) => {
      const aViews = parseFloat(a.views.replace('M', '000').replace('K', ''))
      const bViews = parseFloat(b.views.replace('M', '000').replace('K', ''))
      return bViews - aViews
    })
    .slice(0, 6)
}

export function getLiveVideos(): Video[] {
  return videos.filter(video => video.isLive)
}

export function getRecommendedVideos(): Video[] {
  return [...videos].sort(() => Math.random() - 0.5).slice(0, 8)
}