import { Search, Bell, Moon, Sun, Menu, Mic, PlaySquare } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleTheme: () => void;
  toggleSidebar: () => void;
}

export function Header({ darkMode, toggleTheme, toggleSidebar }: HeaderProps) {
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
          <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold shadow-sm">
            <PlaySquare size={20} fill="white" stroke="white" />
          </div>
          <span className="text-xl font-bold tracking-tighter hidden sm:block">AluraTube</span>
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