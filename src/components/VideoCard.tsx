import { MoreVertical } from 'lucide-react';

interface VideoProps {
  id: number;
  title: string;
  channel: string;
  views: string;
  time: string;
  duration: string;
  thumbnail: string;
}

export function VideoCard({ video }: { video: VideoProps }) {
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