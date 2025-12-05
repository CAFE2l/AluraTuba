import { Search, Bell, User, Moon, Sun, Menu } from 'lucide-react'
import { useState } from 'react'
import Button from './Button'

interface HeaderProps {
  darkMode: boolean
  onToggleDarkMode: () => void
  onSearch: (query: string) => void
}

export default function Header({ darkMode, onToggleDarkMode, onSearch }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchQuery)
  }
  
  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 px-4 py-3">
      <div className="flex items-center justify-between gap-4">
        {/* Logo e Menu Mobile */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg lg:hidden"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AluraTube
            </h1>
          </div>
        </div>
        
        {/* Barra de Pesquisa */}
        <form onSubmit={handleSearch} className="flex-1 max-w-2xl hidden md:block">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar vídeos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </form>
        
        {/* Ações do Usuário */}
        <div className="flex items-center gap-2">
          {/* Pesquisa Mobile */}
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg md:hidden">
            <Search className="w-5 h-5" />
          </button>
          
          {/* Tema */}
          <button
            onClick={onToggleDarkMode}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            title={darkMode ? 'Modo Claro' : 'Modo Escuro'}
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          
          {/* Notificações */}
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg relative">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
              3
            </span>
          </button>
          
          {/* Botão Entrar */}
          <Button variant="outline" className="hidden sm:flex">
            <User className="w-4 h-4 mr-2" />
            Entrar
          </Button>
          
          {/* Avatar */}
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center cursor-pointer">
            <span className="text-white font-semibold">C</span>
          </div>
        </div>
      </div>
      
      {/* Menu Mobile */}
      {showMobileMenu && (
        <div className="mt-3 md:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar vídeos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>
      )}
    </header>
  )
}