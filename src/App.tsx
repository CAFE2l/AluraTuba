import { useState, useEffect, useRef } from 'react';
import { 
  Search, Bell, Moon, Sun, Menu, Mic, Home, 
  PlaySquare, Clock, ThumbsUp, MoreVertical, Compass, 
  MonitorPlay, Gamepad2, Trophy, Flame, Music2, X, 
  User, History, TrendingUp, Film, Music, GamepadIcon,
  ChevronLeft, ChevronRight, Settings, HelpCircle,
  Heart, Download, Share2, Flag
} from 'lucide-react';

// --- TIPOS E INTERFACES ---
interface Video {
  id: number;
  title: string;
  channel: string;
  views: string;
  time: string;
  duration: string;
  thumbnail: string;
  subscribers: string;
  description: string;
  category: string;
  likes?: string;
  comments?: string;
  tags?: string[];
}

interface UserProfile {
  name: string;
  email: string;
  avatar: string;
  subscriptions: number;
  playlists: number;
}

// --- DADOS MOCKADOS ---
const CATEGORIES = [
  { name: "Tudo", icon: Flame },
  { name: "Programação", icon: MonitorPlay },
  { name: "React", icon: TrendingUp },
  { name: "Next.js", icon: TrendingUp },
  { name: "Front-end", icon: MonitorPlay },
  { name: "Tailwind CSS", icon: MonitorPlay },
  { name: "Podcasts", icon: Mic },
  { name: "Games", icon: GamepadIcon },
  { name: "Live", icon: Flame },
  { name: "Música", icon: Music },
  { name: "Filmes", icon: Film },
  { name: "Esportes", icon: Trophy },
];

const VIDEOS: Video[] = [
  {
    id: 1,
    title: "Como criar um clone do YouTube com React e Tailwind - Tutorial Completo 2024",
    channel: "Alura Front-end",
    views: "125 mil",
    time: "há 2 dias",
    duration: "14:20",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    subscribers: "1.2M",
    description: "Aprenda a criar um clone moderno do YouTube usando React, TypeScript e Tailwind CSS. Implementaremos funcionalidades como dark mode, sidebar responsiva e sistema de busca.",
    category: "Programação",
    likes: "12K",
    comments: "850",
    tags: ["React", "Tailwind", "TypeScript", "Frontend"]
  },
  {
    id: 2,
    title: "TypeScript Masterclass - Do Básico ao Avançado em 1 Hora",
    channel: "Dev Super Rápido",
    views: "85 mil",
    time: "há 5 horas",
    duration: "10:05",
    thumbnail: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80",
    subscribers: "850K",
    description: "Curso intensivo de TypeScript cobrindo tipos, interfaces, generics e práticas avançadas.",
    category: "Programação",
    likes: "8.5K",
    comments: "420",
    tags: ["TypeScript", "JavaScript", "Web Development"]
  },
  {
    id: 3,
    title: "Setup Gamer Profissional 2024 - Tour Completo pelo Escritório",
    channel: "Tech Lifestyle",
    views: "2.1 mi",
    time: "há 1 semana",
    duration: "25:12",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    subscribers: "3.5M",
    description: "Conheça o setup mais moderno para streamers e gamers profissionais em 2024.",
    category: "Games",
    likes: "210K",
    comments: "12.5K",
    tags: ["Gaming", "Setup", "Streaming"]
  },
  {
    id: 4,
    title: "Rust vs Go: Benchmark Completo e Qual Escolher para Backend?",
    channel: "Compilado TV",
    views: "45 mil",
    time: "há 3 dias",
    duration: "18:30",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    subscribers: "320K",
    description: "Análise detalhada comparando Rust e Go para desenvolvimento backend em 2024.",
    category: "Programação",
    likes: "4.2K",
    comments: "380",
    tags: ["Rust", "Go", "Backend", "Performance"]
  },
  {
    id: 5,
    title: "Next.js 14 - Novidades, Server Actions e App Router Tutorial",
    channel: "Codar é Vida",
    views: "300 mil",
    time: "há 1 mês",
    duration: "45:00",
    thumbnail: "https://images.unsplash.com/photo-1618477247222-ac5912453634?w=800&q=80",
    subscribers: "1.8M",
    description: "Tutorial completo das novas features do Next.js 14 incluindo Server Actions e App Router.",
    category: "Next.js",
    likes: "28K",
    comments: "1.2K",
    tags: ["Next.js", "React", "Fullstack"]
  },
  {
    id: 6,
    title: "Lofi Hip Hop Radio 📚 - beats to relax/study to [24/7 LIVE]",
    channel: "Lofi Girl",
    views: "Live",
    time: "agora",
    duration: "LIVE",
    thumbnail: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?w=800&q=80",
    subscribers: "12.5M",
    description: "Transmissão ao vivo 24/7 de música lofi para estudar, trabalhar e relaxar.",
    category: "Música",
    likes: "125K",
    comments: "8.4K",
    tags: ["Lofi", "Music", "Study", "Relax"]
  },
  {
    id: 7,
    title: "C# e .NET 8 - Curso Completo para Iniciantes 2024",
    channel: "Balta.io",
    views: "15 mil",
    time: "há 4 dias",
    duration: "1:20:00",
    thumbnail: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?w=800&q=80",
    subscribers: "950K",
    description: "Curso completo de C# e .NET 8 para quem está começando na programação.",
    category: "Programação",
    likes: "1.5K",
    comments: "210",
    tags: ["C#", ".NET", "Backend", "Tutorial"]
  },
  {
    id: 8,
    title: "WASM é o Futuro? JavaScript vai Morrer? Análise Profunda",
    channel: "Mano Deyvin",
    views: "500 mil",
    time: "há 2 semanas",
    duration: "12:45",
    thumbnail: "https://images.unsplash.com/photo-1627398242450-270170589295?w=800&q=80",
    subscribers: "2.4M",
    description: "Discussão profunda sobre WebAssembly e seu impacto no ecossistema JavaScript.",
    category: "Programação",
    likes: "42K",
    comments: "3.8K",
    tags: ["WASM", "JavaScript", "Web", "Future"]
  },
  {
    id: 9,
    title: "React Performance Optimization - Técnicas Avançadas",
    channel: "Frontend Masters",
    views: "89 mil",
    time: "há 1 dia",
    duration: "22:15",
    thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
    subscribers: "780K",
    description: "Técnicas avançadas para otimizar performance em aplicações React.",
    category: "React",
    likes: "7.8K",
    comments: "520",
    tags: ["React", "Performance", "Optimization"]
  },
  {
    id: 10,
    title: "Tailwind CSS v4 - Novidades e Práticas Recomendadas",
    channel: "Tailwind Labs",
    views: "156 mil",
    time: "há 3 dias",
    duration: "16:40",
    thumbnail: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&q=80",
    subscribers: "890K",
    description: "Primeiras impressões do Tailwind CSS v4 e melhores práticas.",
    category: "Tailwind CSS",
    likes: "14K",
    comments: "890",
    tags: ["Tailwind", "CSS", "Frontend"]
  },
];

// --- COMPONENTES AUXILIARES ---

// 1. Header melhorado
interface HeaderProps {
  darkMode: boolean;
  toggleTheme: () => void;
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleSearch: () => void;
}

function Header({ 
  darkMode, 
  toggleTheme, 
  toggleSidebar, 
  isSidebarOpen,
  searchQuery, 
  setSearchQuery, 
  handleSearch 
}: HeaderProps) {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
    if (e.key === 'Escape' && showSearchBar) {
      setShowSearchBar(false);
    }
  };

  useEffect(() => {
    if (showSearchBar && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearchBar]);

  return (
    <header className="fixed top-0 left-0 right-0 h-14 bg-white/95 dark:bg-[#0f0f0f]/95 backdrop-blur-sm flex items-center justify-between px-4 z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleSidebar}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors duration-200"
          aria-label={isSidebarOpen ? "Recolher menu" : "Expandir menu"}
        >
          <Menu className="w-6 h-6" />
        </button>
        
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="relative">
            <img 
              src="../src/assets/imagens/Logo.png" 
              alt="Logo" 
              className="h-8 w-auto"
            />
          </div>
          <span className="hidden md:inline text-lg font-bold bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
           
          </span>
        </div>
      </div>

      {/* Barra de pesquisa responsiva */}
      <div className={`${showSearchBar ? 'absolute left-4 right-4 md:static' : 'hidden md:flex'} flex-1 max-w-2xl mx-4`}>
        <div className="flex w-full group">
          <div className="relative flex-1">
            <input 
              ref={searchInputRef}
              type="text" 
              placeholder="Pesquisar vídeos, canais..." 
              className="w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-l-full px-6 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-transparent transition-all pr-12"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button 
                onClick={handleSearch}
                className="p-1.5 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>
          <button 
            onClick={handleSearch}
            className="bg-gray-100 dark:bg-gray-800 border border-l-0 border-gray-300 dark:border-gray-700 rounded-r-full px-6 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors font-medium"
          >
            Pesquisar
          </button>
        </div>
        <button 
          onClick={() => setShowSearchBar(false)}
          className="md:hidden ml-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex items-center gap-2">
        <button 
          onClick={() => setShowSearchBar(true)}
          className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
        >
          <Search className="w-6 h-6" />
        </button>
        
        <button 
          onClick={toggleTheme}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors relative group"
          aria-label={darkMode ? "Modo claro" : "Modo escuro"}
        >
          {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            {darkMode ? "Modo claro" : "Modo escuro"}
          </div>
        </button>
        
        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full hidden sm:block transition-colors relative group">
          <Bell className="w-6 h-6" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-600 rounded-full border-2 border-white dark:border-[#0f0f0f] animate-pulse"></span>
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            Notificações
          </div>
        </button>
        
        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full hidden sm:block transition-colors group relative">
          <Settings className="w-6 h-6" />
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            Configurações
          </div>
        </button>
        
        <div className="relative group">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-sm font-medium ml-2 cursor-pointer hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg">
            G
          </div>
          <div className="absolute right-0 top-10 bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-4 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white">
                G
              </div>
              <div>
                <p className="font-semibold">Gabriel Silva</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">gabriel@email.com</p>
              </div>
            </div>
            <div className="space-y-2">
              <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2">
                <User className="w-4 h-4" /> Seu canal
              </button>
              <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2">
                <Settings className="w-4 h-4" /> Configurações
              </button>
              <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2">
                <HelpCircle className="w-4 h-4" /> Ajuda
              </button>
              <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
              <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-red-600 dark:text-red-400">
                Sair
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

// 2. SidebarItem melhorado
interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  notification?: boolean;
  onClick?: () => void;
}

function SidebarItem({ icon: Icon, label, active = false, notification = false, onClick }: SidebarItemProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-4 px-3 py-2.5 rounded-lg cursor-pointer transition-all duration-200 group relative ${
        active 
          ? 'bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 font-bold border-l-4 border-red-600 dark:border-red-500' 
          : 'hover:bg-gray-100 dark:hover:bg-gray-800'
      }`}
    >
      <div className="relative">
        <Icon className={`w-5 h-5 ${active ? 'text-red-600 dark:text-red-400' : 'text-gray-900 dark:text-white'}`} />
        {notification && (
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-600 rounded-full border border-white dark:border-gray-800"></span>
        )}
      </div>
      <span className={`text-sm ${active ? 'text-red-600 dark:text-red-400' : 'text-gray-900 dark:text-white'} flex-1 text-left`}>
        {label}
      </span>
      {active && (
        <div className="w-1.5 h-1.5 bg-red-600 dark:bg-red-400 rounded-full animate-pulse"></div>
      )}
    </button>
  );
}

// 3. Sidebar melhorada
interface SidebarProps {
  isOpen: boolean;
}

function Sidebar({ isOpen }: SidebarProps) {
  const [activeItem, setActiveItem] = useState('Início');

  const mainItems = [
    { icon: Home, label: 'Início', notification: false },
    { icon: Compass, label: 'Shorts', notification: true },
    { icon: MonitorPlay, label: 'Inscrições', notification: false },
    { icon: History, label: 'Histórico', notification: false },
  ];

  const libraryItems = [
    { icon: PlaySquare, label: 'Seus vídeos' },
    { icon: Clock, label: 'Assistir mais tarde' },
    { icon: ThumbsUp, label: 'Gostei' },
    { icon: Download, label: 'Downloads' },
  ];

  const exploreItems = [
    { icon: Flame, label: 'Em alta' },
    { icon: Music, label: 'Música' },
    { icon: GamepadIcon, label: 'Jogos' },
    { icon: Trophy, label: 'Esportes' },
    { icon: Film, label: 'Filmes' },
  ];

  return (
    <aside 
      className={`h-full flex-shrink-0 bg-white dark:bg-[#0f0f0f] transition-all duration-300 ease-in-out overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 ${
        isOpen 
          ? 'w-64 translate-x-0 opacity-100' 
          : 'w-0 -translate-x-full opacity-0 overflow-hidden'
      }`}
    >
      <div className="p-4">
        {/* Navegação Principal */}
        <div className="space-y-1 mb-6">
          {mainItems.map((item) => (
            <SidebarItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              active={activeItem === item.label}
              notification={item.notification}
              onClick={() => setActiveItem(item.label)}
            />
          ))}
        </div>

        {/* Biblioteca */}
        <div className="mb-6">
          <h3 className="px-3 py-2 text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Biblioteca
          </h3>
          <div className="space-y-1">
            {libraryItems.map((item) => (
              <SidebarItem
                key={item.label}
                icon={item.icon}
                label={item.label}
                active={activeItem === item.label}
                onClick={() => setActiveItem(item.label)}
              />
            ))}
          </div>
        </div>

        {/* Explorar */}
        <div className="mb-6">
          <h3 className="px-3 py-2 text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Explorar
          </h3>
          <div className="space-y-1">
            {exploreItems.map((item) => (
              <SidebarItem
                key={item.label}
                icon={item.icon}
                label={item.label}
                active={activeItem === item.label}
                onClick={() => setActiveItem(item.label)}
              />
            ))}
          </div>
        </div>

        {/* Inscrições */}
        <div>
          <div className="flex items-center justify-between px-3 py-2">
            <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Inscrições
            </h3>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
          <div className="space-y-2">
            {[
              { name: 'Alura', color: 'bg-blue-500' },
              { name: 'DevSuperior', color: 'bg-green-500' },
              { name: 'Rocketseat', color: 'bg-purple-500' },
              { name: 'Filipe Deschamps', color: 'bg-red-500' },
            ].map((channel) => (
              <div key={channel.name} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer group">
                <div className={`w-6 h-6 rounded-full ${channel.color} flex items-center justify-center text-white text-xs font-bold`}>
                  {channel.name.charAt(0)}
                </div>
                <span className="text-sm text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {channel.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

// 4. VideoCard melhorado com mais funcionalidades
interface VideoCardProps {
  video: Video;
  onVideoClick?: (video: Video) => void;
}

function VideoCard({ video, onVideoClick }: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    if (onVideoClick) {
      onVideoClick(video);
    }
  };

  return (
    <div 
      className="group cursor-pointer flex flex-col gap-3 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowMenu(false);
      }}
      onClick={handleClick}
    >
      {/* Thumbnail com overlay */}
      <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className={`w-full h-full object-cover transition-all duration-500 ${
            isHovered ? 'scale-110 brightness-110' : ''
          }`}
          loading="lazy"
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Duração/LIVE */}
        <div className={`absolute bottom-2 right-2 px-2 py-1 rounded text-xs font-semibold ${
          video.duration === 'LIVE' 
            ? 'bg-red-600 text-white animate-pulse' 
            : 'bg-black/90 text-white'
        }`}>
          {video.duration === 'LIVE' ? (
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
              {video.duration}
            </span>
          ) : video.duration}
        </div>
        
        {/* Menu de opções no hover */}
        {isHovered && (
          <div className="absolute top-2 right-2 flex gap-1 animate-fadeIn">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setShowMenu(!showMenu);
              }}
              className="p-2 bg-black/80 hover:bg-black text-white rounded-full backdrop-blur-sm"
            >
              <MoreVertical className="w-4 h-4" />
            </button>
            <button 
              onClick={(e) => e.stopPropagation()}
              className="p-2 bg-black/80 hover:bg-black text-white rounded-full backdrop-blur-sm"
            >
              <Clock className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
      
      {/* Informações do vídeo */}
      <div className="flex gap-3 items-start">
        {/* Avatar do canal */}
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 flex-shrink-0 overflow-hidden group-hover:ring-2 group-hover:ring-blue-500 dark:group-hover:ring-blue-400 transition-all duration-300 shadow-lg">
          <img 
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${video.channel}&size=40&backgroundColor=3b82f6`} 
            alt={`Avatar de ${video.channel}`}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Detalhes */}
        <div className="flex flex-col flex-1 min-w-0">
          <h3 className="text-sm font-bold line-clamp-2 leading-snug mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
            {video.title}
          </h3>
          
          <div className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors mb-1">
            <span>{video.channel}</span>
            <div className="w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center" title="Canal verificado">
              <svg viewBox="0 0 24 24" className="w-2 h-2 fill-white">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
            </div>
          </div>
          
          <div className="text-xs text-gray-600 dark:text-gray-400 flex items-center gap-2">
            <span>{video.views} visualizações</span>
            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
            <span>{video.time}</span>
          </div>
          
          {/* Tags */}
          {video.tags && video.tags.length > 0 && isHovered && (
            <div className="flex flex-wrap gap-1 mt-2 animate-fadeIn">
              {video.tags.slice(0, 2).map((tag, index) => (
                <span 
                  key={index} 
                  className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-xs text-gray-600 dark:text-gray-400 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Menu dropdown */}
      {showMenu && (
        <div className="absolute right-0 top-12 z-10 bg-white dark:bg-gray-800 rounded-lg shadow-2xl w-64 py-2 border border-gray-200 dark:border-gray-700 animate-scaleIn origin-top-right">
          <button className="w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-3 text-sm">
            <Clock className="w-4 h-4" /> Assistir mais tarde
          </button>
          <button className="w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-3 text-sm">
            <PlaySquare className="w-4 h-4" /> Adicionar à playlist
          </button>
          <button className="w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-3 text-sm">
            <Download className="w-4 h-4" /> Download
          </button>
          <button className="w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-3 text-sm">
            <Share2 className="w-4 h-4" /> Compartilhar
          </button>
          <div className="border-t border-gray-200 dark:border-gray-700 my-1"></div>
          <button className="w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-3 text-sm text-red-600 dark:text-red-400">
            <Flag className="w-4 h-4" /> Denunciar
          </button>
        </div>
      )}
    </div>
  );
}

// 5. Modal de Vídeo (Simplificado para preview)
interface VideoModalProps {
  video: Video | null;
  isOpen: boolean;
  onClose: () => void;
}

function VideoModal({ video, isOpen, onClose }: VideoModalProps) {
  if (!isOpen || !video) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-4xl overflow-hidden animate-scaleIn relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-video bg-black">
          <img 
            src={video.thumbnail} 
            alt={video.title}
            className="w-full h-full object-cover"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6">
          <h2 className="text-xl font-bold mb-2">{video.title}</h2>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600"></div>
              <div>
                <p className="font-semibold">{video.channel}</p>
                <p className="text-sm text-gray-500">{video.subscribers} inscritos</p>
              </div>
              <button className="ml-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold">
                Inscrever-se
              </button>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center gap-2">
                <ThumbsUp className="w-4 h-4" /> {video.likes}
              </button>
              <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <p className="font-semibold mb-2">Descrição</p>
            <p className="text-sm">{video.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- APP PRINCIPAL ---
export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tudo');
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const categoriesRef = useRef<HTMLDivElement>(null);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      console.log('Buscando:', searchQuery);
      // Implementar lógica de busca aqui
    }
  };

  const handleVideoClick = (video: Video) => {
    setSelectedVideo(video);
    setIsVideoModalOpen(true);
  };

  const filteredVideos = selectedCategory === 'Tudo' 
    ? VIDEOS 
    : VIDEOS.filter(video => 
        video.category === selectedCategory || 
        video.tags?.includes(selectedCategory)
      );

  const scrollCategories = (direction: 'left' | 'right') => {
    if (categoriesRef.current) {
      const scrollAmount = 200;
      categoriesRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-[#0f0f0f] text-gray-900 dark:text-white transition-colors duration-300 font-sans antialiased">
        
        <Header 
          darkMode={darkMode} 
          toggleTheme={toggleTheme} 
          toggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSearch={handleSearch}
        />

        <div className="flex pt-14 h-screen overflow-hidden">
          
          <Sidebar isOpen={isSidebarOpen} />

          <main className="flex-1 overflow-y-auto bg-white dark:bg-[#0f0f0f] p-4 sm:p-6 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700">
            
            {/* Filtros de categorias com scroll */}
            <div className="sticky top-0 z-10 bg-white/95 dark:bg-[#0f0f0f]/95 backdrop-blur-sm py-4 mb-6 -mx-4 px-4 border-b border-gray-200 dark:border-gray-800">
              <div className="relative">
                <button 
                  onClick={() => scrollCategories('left')}
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center z-20 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <div 
                  ref={categoriesRef}
                  className="flex gap-3 overflow-x-auto scrollbar-hide px-10 py-1"
                >
                  {CATEGORIES.map((cat) => (
                    <button 
                      key={cat.name}
                      onClick={() => setSelectedCategory(cat.name)}
                      className={`flex items-center gap-2 whitespace-nowrap px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                        selectedCategory === cat.name 
                          ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-lg shadow-red-500/25' 
                          : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white'
                      }`}
                    >
                      <cat.icon className="w-4 h-4" />
                      {cat.name}
                    </button>
                  ))}
                </div>
                
                <button 
                  onClick={() => scrollCategories('right')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center z-20 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Info da categoria selecionada */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold mb-2">
                {selectedCategory === 'Tudo' ? 'Recomendados para você' : selectedCategory}
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                {selectedCategory === 'Tudo' 
                  ? 'Os vídeos mais populares hoje' 
                  : `Vídeos sobre ${selectedCategory.toLowerCase()}`
                }
              </p>
            </div>

            {/* Grid de Vídeos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
              {filteredVideos.map((video) => (
                <VideoCard 
                  key={video.id} 
                  video={video} 
                  onVideoClick={handleVideoClick}
                />
              ))}
            </div>

            {/* Mensagem se não houver vídeos */}
            {filteredVideos.length === 0 && (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 rounded-full flex items-center justify-center mb-4">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Nenhum vídeo encontrado</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
                  Não encontramos vídeos para "{selectedCategory}". Tente outra categoria ou pesquise por termos diferentes.
                </p>
                <button 
                  onClick={() => setSelectedCategory('Tudo')}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  Ver todos os vídeos
                </button>
              </div>
            )}
          </main>
        </div>

        {/* Modal de Vídeo */}
        <VideoModal 
          video={selectedVideo}
          isOpen={isVideoModalOpen}
          onClose={() => setIsVideoModalOpen(false)}
        />
      </div>
    </div>
  );
}