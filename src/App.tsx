import { useState } from 'react';
import { 
  Search, Bell, Moon, Sun, Menu, Mic, Home, 
  PlaySquare, Clock, ThumbsUp, MoreVertical, Compass, 
  MonitorPlay, Gamepad2, Trophy, Flame, Music2} from 'lucide-react';

// --- DADOS (Simulando o arquivo src/data/index.ts) ---
const CATEGORIES = [
  "Tudo", "Programação", "React", "Next.js", "Front-end", 
  "Tailwind CSS", "Podcasts", "Games", "Live", "Música"
];

const VIDEOS = [
  {
    id: 1,
    title: "Como criar um clone do YouTube com React e Tailwind",
    channel: "Alura Front-end",
    views: "125 mil",
    time: "há 2 dias",
    duration: "14:20",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80"
  },
  {
    id: 2,
    title: "Entendendo TypeScript em 10 minutos",
    channel: "Dev Super Rápido",
    views: "85 mil",
    time: "há 5 horas",
    duration: "10:05",
    thumbnail: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80"
  },
  {
    id: 3,
    title: "Setup de Programação 2024 - Tour pelo Escritório",
    channel: "Tech Lifestyle",
    views: "2.1 mi",
    time: "há 1 semana",
    duration: "25:12",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
  },
  {
    id: 4,
    title: "Rust vs Go: Qual escolher para Backend?",
    channel: "Compilado TV",
    views: "45 mil",
    time: "há 3 dias",
    duration: "18:30",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"
  },
  {
    id: 5,
    title: "Apredendo Next.js 14 do Zero",
    channel: "Codar é Vida",
    views: "300 mil",
    time: "há 1 mês",
    duration: "45:00",
    thumbnail: "https://images.unsplash.com/photo-1618477247222-ac5912453634?w=800&q=80"
  },
  {
    id: 6,
    title: "Música Lofi para programar e relaxar",
    channel: "Lofi Girl",
    views: "Live",
    time: "agora",
    duration: "LIVE",
    thumbnail: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?w=800&q=80"
  },
  {
    id: 7,
    title: "Curso de C# e .NET Completo",
    channel: "Balta.io",
    views: "15 mil",
    time: "há 4 dias",
    duration: "1:20:00",
    thumbnail: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?w=800&q=80"
  },
  {
    id: 8,
    title: "O fim do Javascript? Conheça o WASM",
    channel: "Mano Deyvin",
    views: "500 mil",
    time: "há 2 semanas",
    duration: "12:45",
    thumbnail: "https://images.unsplash.com/photo-1627398242450-270170589295?w=800&q=80"
  }
];

// --- COMPONENTES (Integrados aqui para funcionar o Preview) ---

// 1. Header
interface HeaderProps {
  darkMode: boolean;
  toggleTheme: () => void;
  toggleSidebar: () => void;
}

function Header({ darkMode, toggleTheme, toggleSidebar }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 h-14 bg-white dark:bg-[#0f0f0f] flex items-center justify-between px-4 z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleSidebar}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
        >
          <Menu className="w-6 h-6" />
        </button>
        <div className="flex items-center gap-1 cursor-pointer">
          
          <img src="../src/assets/imagens/Logo.png"/>
        </div>
      </div>

      <div className="hidden md:flex flex-1 max-w-2xl mx-4">
        <div className="flex w-full group focus-within:shadow-sm">
          <input 
            type="text" 
            placeholder="Pesquisar" 
            className="w-full bg-transparent border border-gray-300 dark:border-gray-700 rounded-l-full px-4 py-2 focus:outline-none focus:border-blue-500 dark:bg-[#121212] transition-colors"
          />
          <button className="bg-gray-100 dark:bg-gray-800 border border-l-0 border-gray-300 dark:border-gray-700 rounded-r-full px-5 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            <Search className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
        </div>
        <button className="ml-4 p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          <Mic className="w-5 h-5" />
        </button>
      </div>

      <div className="flex items-center gap-2">
        <button onClick={toggleTheme} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
          {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full hidden sm:block transition-colors relative">
          <Bell className="w-6 h-6" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full border-2 border-white dark:border-[#0f0f0f]"></span>
        </button>
        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-medium ml-2 cursor-pointer hover:bg-purple-700 transition-colors">
          G
        </div>
      </div>
    </header>
  );
}

// 2. Sidebar
interface SidebarItemProps {
  icon: React.ElementType; // Usando React.ElementType para evitar erro de tipo
  label: string;
  active?: boolean;
}

function SidebarItem({ icon: Icon, label, active = false }: SidebarItemProps) {
  return (
    <div className={`flex items-center gap-4 px-3 py-2 rounded-lg cursor-pointer transition-colors ${active ? 'bg-gray-100 dark:bg-gray-800 font-bold' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}>
      <Icon className={`w-5 h-5 ${active ? 'text-red-600' : 'text-gray-900 dark:text-white'}`} />
      <span className="text-sm truncate dark:text-white">{label}</span>
    </div>
  );
}

interface SidebarProps {
  isOpen: boolean;
}

function Sidebar({ isOpen }: SidebarProps) {
  return (
    <aside className={`w-60 hover:overflow-y-auto overflow-y-hidden pb-4 flex-shrink-0 bg-white dark:bg-[#0f0f0f] hidden md:block transition-all duration-300 ease-in-out ${isOpen ? 'translate-x-0 w-60 opacity-100' : '-ml-60 w-0 opacity-0'}`}>
      <div className="p-3 space-y-1">
        <SidebarItem icon={Home} label="Início" active />
        <SidebarItem icon={Compass} label="Shorts" />
        <SidebarItem icon={MonitorPlay} label="Inscrições" />
      </div>
      <div className="border-t border-gray-200 dark:border-gray-800 my-2" />
      <div className="p-3 space-y-1">
        <h3 className="px-3 py-2 text-base font-semibold flex items-center gap-2">
          Você <span className="text-xs font-normal text-gray-500">&gt;</span>
        </h3>
        <SidebarItem icon={Clock} label="Histórico" />
        <SidebarItem icon={PlaySquare} label="Seus vídeos" />
        <SidebarItem icon={ThumbsUp} label="Gostei" />
      </div>
      <div className="border-t border-gray-200 dark:border-gray-800 my-2" />
      <div className="p-3 space-y-1">
        <h3 className="px-3 py-2 text-base font-semibold">Explorar</h3>
        <SidebarItem icon={Flame} label="Em alta" />
        <SidebarItem icon={Music2} label="Música" />
        <SidebarItem icon={Gamepad2} label="Jogos" />
        <SidebarItem icon={Trophy} label="Esportes" />
      </div>
    </aside>
  );
}

// 3. VideoCard
interface VideoProps {
  id: number;
  title: string;
  channel: string;
  views: string;
  time: string;
  duration: string;
  thumbnail: string;
}

function VideoCard({ video }: { video: VideoProps }) {
  return (
    <div className="group cursor-pointer flex flex-col gap-2">
      {/* Thumbnail */}
      <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200 ease-out" 
          loading="lazy"
        />
        <span className="absolute bottom-1.5 right-1.5 bg-black/80 text-white text-xs font-medium px-1.5 py-0.5 rounded">
          {video.duration}
        </span>
      </div>
      
      {/* Info */}
      <div className="flex gap-3 items-start">
        <div className="w-9 h-9 rounded-full bg-gray-200 dark:bg-gray-700 flex-shrink-0 mt-0.5 overflow-hidden border border-transparent group-hover:border-gray-300 dark:group-hover:border-gray-600 transition-colors">
          <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${video.channel}`} alt="Avatar" className="w-full h-full" />
        </div>
        <div className="flex flex-col flex-1">
          <h3 className="text-sm font-bold line-clamp-2 leading-snug mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {video.title}
          </h3>
          <div className="text-xs text-gray-600 dark:text-gray-400 flex items-center hover:text-gray-900 dark:hover:text-gray-200 transition-colors">
            {video.channel}
            <div className="w-3 h-3 ml-1 bg-gray-500 rounded-full flex items-center justify-center" title="Verificado">
              <svg viewBox="0 0 24 24" className="w-2 h-2 fill-white"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            </div>
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">
            {video.views} visualizações • {video.time}
          </div>
        </div>
        <div className="flex-shrink-0">
          <button className="p-1 -mr-1 rounded-full opacity-0 group-hover:opacity-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
            <MoreVertical className="w-4 h-4 text-gray-900 dark:text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

// --- APP PRINCIPAL ---

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-[#0f0f0f] text-gray-900 dark:text-white transition-colors duration-200 font-sans">
        
        <Header 
          darkMode={darkMode} 
          toggleTheme={toggleTheme} 
          toggleSidebar={toggleSidebar} 
        />

        <div className="flex pt-14 h-screen overflow-hidden">
          
          <Sidebar isOpen={isSidebarOpen} />

          <main className="flex-1 overflow-y-auto bg-white dark:bg-[#0f0f0f] p-4 sm:p-6 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700">
            
            {/* Filtros */}
            <div className="sticky top-0 z-10 bg-white/95 dark:bg-[#0f0f0f]/95 backdrop-blur-sm py-2 mb-4 -mx-4 px-4 border-b border-transparent">
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {CATEGORIES.map((cat, index) => (
                  <button 
                    key={index}
                    className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      index === 0 
                        ? 'bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200' 
                        : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid de Vídeos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-4 gap-y-8">
              {VIDEOS.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>

          </main>
        </div>
      </div>
    </div>
  );
}