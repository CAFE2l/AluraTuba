import React from 'react';
import { Home, Compass, MonitorPlay, Clock, PlaySquare, ThumbsUp, Flame, Music2, Gamepad2, Trophy } from 'lucide-react';

interface SidebarItemProps {
  // Alterado para React.ElementType para aceitar ícones sem erro
  icon: React.ElementType; 
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

export function Sidebar({ isOpen }: SidebarProps) {
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