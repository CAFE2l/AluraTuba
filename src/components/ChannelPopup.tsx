import { X, Bell, Check } from 'lucide-react';
import Button from './Button';
// Interface mantida no mesmo arquivo para evitar erros de importação
export interface Video {
  id: number;
  title: string;
  channel: string;
  views: string;
  time: string;
  duration: string;
  thumbnail: string;
  subscribers: string;
  description: string;
  category?: string;
}

interface ChannelPopupProps {
  video: Video;
  onClose: () => void;
  onSubscribe?: () => void;
}

export function ChannelPopup({ video, onClose, onSubscribe }: ChannelPopupProps) {
  const handleSubscribe = () => {
    if (onSubscribe) {
      onSubscribe();
    }
    // Aqui você pode adicionar lógica de inscrição
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={handleOutsideClick}
    >
      {/* Card do Popup com animação */}
      <div 
        className="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-scaleIn relative border border-gray-200 dark:border-gray-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabeçalho com gradiente */}
        <div className="h-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 relative">
          {/* Botão Fechar */}
          <button 
            onClick={onClose}
            className="absolute top-3 right-3 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Fechar popup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-6 pb-6 -mt-10">
          {/* Área do perfil do canal */}
          <div className="flex justify-between items-end mb-4">
            {/* Avatar do canal */}
            <div className="relative">
              <div className="w-20 h-20 rounded-full border-4 border-white dark:border-gray-900 bg-gradient-to-br from-gray-300 to-gray-400 overflow-hidden shadow-lg">
                <img 
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${video.channel}&backgroundColor=3b82f6&radius=50`} 
                  alt={`Avatar do canal ${video.channel}`}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Badge verificado */}
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full border-2 border-white dark:border-gray-900 flex items-center justify-center">
                <Check className="w-3 h-3 text-white" />
              </div>
            </div>
            
            {/* Botão de inscrição */}
            <Button 
              onClick={handleSubscribe}
              className="mb-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Inscrever-se
            </Button>
          </div>

          {/* Informações do canal */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                {video.channel}
              </h2>
              <span className="text-xs font-medium px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full">
                VERIFICADO
              </span>
            </div>
            
            <div className="flex items-center gap-4 text-sm">
              <span className="text-gray-600 dark:text-gray-400 font-medium">
                {video.subscribers} inscritos
              </span>
              {video.category && (
                <span className="text-gray-500 dark:text-gray-500">
                  • {video.category}
                </span>
              )}
            </div>
          </div>

          {/* Descrição */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Sobre o canal
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {video.description}
            </p>
          </div>

          {/* Estatísticas do vídeo atual */}
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 mb-6">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Vídeo em destaque
            </h3>
            <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">
              {video.title}
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-500">
              <span>{video.views} visualizações</span>
              <span>•</span>
              <span>{video.time}</span>
            </div>
          </div>

          {/* Botões de ação */}
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              className="flex-1 rounded-full border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Ver canal
            </Button>
            <Button 
              variant="outline"
              onClick={handleSubscribe}
              className="flex items-center justify-center gap-2 rounded-full border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Bell className="w-4 h-4" />
              Notificações
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}