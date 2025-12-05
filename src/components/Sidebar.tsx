import { Home, Compass, Clock, ThumbsUp, Video, Music, Gamepad2, BookOpen, TrendingUp, Download, Users } from 'lucide-react'
import { useState } from 'react'
import { categories } from '../data'

interface SidebarProps {
  selectedCategory: string
  onCategorySelect: (categoryId: string) => void
}

export default function Sidebar({ selectedCategory, onCategorySelect }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  
  const menuItems = [
    { icon: Home, label: 'Início', id: 'home' },
    { icon: Compass, label: 'Explorar', id: 'explore' },
    { icon: Users, label: 'Inscrições', id: 'subscriptions' },
    { icon: Clock, label: 'Histórico', id: 'history' },
  ]
  
  const libraryItems = [
    { icon: Video, label: 'Seus vídeos', id: 'videos' },
    { icon: ThumbsUp, label: 'Gostei', id: 'liked' },
    { icon: Download, label: 'Downloads', id: 'downloads' },
  ]
  
  return (
    <aside className={`hidden lg:flex flex-col h-[calc(100vh-68px)] sticky top-[68px] border-r border-gray-200 dark:border-gray-800 transition-all duration-300 ${
      isCollapsed ? 'w-20' : 'w-64'
    }`}>
      <div className="flex-1 overflow-y-auto py-4 px-3">
        {/* Menu Principal */}
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onCategorySelect(item.id)}
              className={`flex items-center gap-4 w-full p-3 rounded-lg transition-colors ${
                selectedCategory === item.id
                  ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-semibold'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
              } ${isCollapsed ? 'justify-center' : ''}`}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {!isCollapsed && <span className="text-sm">{item.label}</span>}
            </button>
          ))}
        </nav>
        
        <div className="h-px bg-gray-200 dark:bg-gray-800 my-4" />
        
        {/* Biblioteca */}
        <div className={`${isCollapsed ? 'px-0' : 'px-3'} mb-3`}>
          {!isCollapsed && (
            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
              Biblioteca
            </h3>
          )}
          <nav className="space-y-1">
            {libraryItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onCategorySelect(item.id)}
                className={`flex items-center gap-4 w-full p-3 rounded-lg transition-colors ${
                  selectedCategory === item.id
                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                } ${isCollapsed ? 'justify-center' : ''}`}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                {!isCollapsed && <span className="text-sm">{item.label}</span>}
              </button>
            ))}
          </nav>
        </div>
        
        <div className="h-px bg-gray-200 dark:bg-gray-800 my-4" />
        
        {/* Categorias */}
        <div className={`${isCollapsed ? 'px-0' : 'px-3'} mb-3`}>
          {!isCollapsed && (
            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
              Categorias
            </h3>
          )}
          <div className="space-y-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategorySelect(category.id)}
                className={`flex items-center gap-3 w-full p-2 rounded-lg transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                } ${isCollapsed ? 'justify-center' : ''}`}
              >
                <span className="text-lg">{category.icon}</span>
                {!isCollapsed && (
                  <span className="text-sm">{category.name}</span>
                )}
              </button>
            ))}
          </div>
        </div>
        
        <div className="h-px bg-gray-200 dark:bg-gray-800 my-4" />
        
        {/* Explorar */}
        <div className={`${isCollapsed ? 'px-0' : 'px-3'}`}>
          {!isCollapsed && (
            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
              Explorar
            </h3>
          )}
          <div className="space-y-1">
            {[
              { icon: Music, label: 'Música', id: 'music' },
              { icon: Gamepad2, label: 'Games', id: 'games' },
              { icon: BookOpen, label: 'Aprendizado', id: 'learning' },
              { icon: TrendingUp, label: 'Em Alta', id: 'trending' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => onCategorySelect(item.id)}
                className={`flex items-center gap-4 w-full p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 ${
                  isCollapsed ? 'justify-center' : ''
                }`}
              >
                <item.icon className="w-5 h-5" />
                {!isCollapsed && <span className="text-sm">{item.label}</span>}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Botão para recolher/expandir */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-800">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-sm text-gray-600 dark:text-gray-400"
        >
          {isCollapsed ? '▶' : '◀'} {!isCollapsed && 'Recolher'}
        </button>
      </div>
    </aside>
  )
}