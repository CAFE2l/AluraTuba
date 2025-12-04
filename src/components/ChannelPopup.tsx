import { X, Bell } from 'lucide-react';
import { Button } from './Button';
import { Video } from '../data/index';

interface ChannelPopupProps {
  video: Video;
  onClose: () => void;
}

export function ChannelPopup({ video, onClose }: ChannelPopupProps) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* O Card do Pop-up */}
      <div className="bg-white dark:bg-[#1e1e1e] rounded-2xl w-full max-w-md shadow-2xl overflow-hidden transform transition-all scale-100 relative">
        
        {/* Capa do Canal (simulada com gradiente) */}
        <div className="h-24 bg-gradient-to-r from-blue-500 to-purple-600"></div>
        
        {/* Botão Fechar */}
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="px-6 pb-6 -mt-12">
          <div className="flex justify-between items-end mb-4">
            {/* Foto do Canal */}
            <div className="w-24 h-24 rounded-full border-4 border-white dark:border-[#1e1e1e] bg-gray-200 overflow-hidden shadow-md">
              <img 
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${video.channel}`} 
                alt={video.channel} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Botão Inscrever-se */}
            <Button className="mb-2 bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 rounded-full">
              Inscrever-se
            </Button>
          </div>

          <div className="space-y-1">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-1">
              {video.channel}
              <div className="w-4 h-4 bg-gray-500 rounded-full flex items-center justify-center" title="Verificado">
                <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-white"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              </div>
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
              {video.subscribers} inscritos
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            {video.description}
          </p>

          <div className="mt-6 flex gap-2">
            <Button variant="outline" className="flex-1 rounded-full text-sm h-9">
              Ver canal
            </Button>
            <Button variant="outline" className="flex-1 rounded-full text-sm h-9">
              <Bell className="w-4 h-4 mr-2" />
              Vídeos
            </Button>
          </div>
        </div>
      </div>
      
      {/* Clica fora para fechar */}
      <div className="absolute inset-0 -z-10" onClick={onClose}></div>
    </div>
  );
}