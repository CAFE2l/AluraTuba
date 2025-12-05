import { Play, Eye, Clock, ThumbsUp, MoreVertical, CheckCircle } from 'lucide-react'
import type  Video from '../data'  // ADICIONE ESTE IMPORT
import { useState } from 'react'

interface VideoCardProps {
  video: Video
  compact?: boolean
}

export default function VideoCard({ video, compact = false }: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  
  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsLiked(!isLiked)
  }
  
  const handleSave = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsSaved(!isSaved)
  }
  
  if (compact) {
    return (
      <div className="flex gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-colors group">
        <div className="relative flex-shrink-0">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-40 h-24 object-cover rounded-lg group-hover:scale-105 transition-transform"
          />
          <div className="absolute bottom-1 right-1 bg-black/90 text-white text-xs px-1.5 py-0.5 rounded font-mono">
            {video.duration}
          </div>
          {video.isLive && (
            <div className="absolute top-1 left-1 bg-red-600 text-white text-xs px-2 py-0.5 rounded font-bold animate-pulse">
              LIVE
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-medium line-clamp-2 text-sm group-hover:text-blue-600">
            {video.title}
          </h4>
          <div className="flex items-center gap-1 mt-1">
            <p className="text-xs text-gray-500 dark:text-gray-400">{video.channel}</p>
            {video.isVerified && <CheckCircle className="w-3 h-3 text-gray-400" />}
          </div>
          <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mt-2">
            <span className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              {video.views}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {video.timestamp}
            </span>
          </div>
        </div>
      </div>
    )
  }
  
  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden rounded-xl mb-3">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute bottom-2 right-2 bg-black/90 text-white text-xs px-1.5 py-0.5 rounded font-mono">
          {video.duration}
        </div>
        
        {video.isLive && (
          <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded font-bold animate-pulse flex items-center gap-1">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            AO VIVO
          </div>
        )}
        
        {/* Hover Overlay */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity">
            <div className="flex gap-3">
              <button className="p-3 bg-white rounded-full hover:scale-110 transition-transform">
                <Play className="w-6 h-6 text-black ml-0.5" />
              </button>
              <button
                onClick={handleLike}
                className={`p-3 rounded-full hover:scale-110 transition-transform ${
                  isLiked ? 'bg-red-500' : 'bg-white/20'
                }`}
              >
                <ThumbsUp className={`w-6 h-6 ${isLiked ? 'text-white' : 'text-white'}`} />
              </button>
              <button
                onClick={handleSave}
                className={`p-3 rounded-full hover:scale-110 transition-transform ${
                  isSaved ? 'bg-blue-500' : 'bg-white/20'
                }`}
              >
                <Clock className={`w-6 h-6 ${isSaved ? 'text-white' : 'text-white'}`} />
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Video Info */}
      <div className="flex gap-3">
        <div className="relative flex-shrink-0">
          <img
            src={video.channelAvatar}
            alt={video.channel}
            className="w-10 h-10 rounded-full"
          />
          {video.isVerified && (
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center">
              <CheckCircle className="w-2.5 h-2.5 text-white" />
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold line-clamp-2 group-hover:text-blue-600 transition-colors">
            {video.title}
          </h3>
          <div className="flex items-center gap-1 mt-1">
            <p className="text-sm text-gray-600 dark:text-gray-400">{video.channel}</p>
            {video.isVerified && <CheckCircle className="w-4 h-4 text-gray-400" />}
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                {video.views}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {video.timestamp}
              </span>
              <span className="flex items-center gap-1">
                <ThumbsUp className={`w-4 h-4 ${isLiked ? 'text-red-500' : ''}`} />
                {video.likes}
              </span>
            </div>
            <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}