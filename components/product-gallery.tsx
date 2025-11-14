'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Maximize2, Play } from 'lucide-react';

interface ProductGalleryProps {
  images: string[];
  videos: string[];
  productName: string;
}

export function ProductGallery({ images, videos, productName }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });

  const allMedia = [
    ...images.map(img => ({ type: 'image' as const, src: img })),
    ...videos.map(vid => ({ type: 'video' as const, src: vid })),
  ];

  const currentMedia = allMedia[selectedIndex];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPos({ x, y });
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Main Gallery */}
      <div className="relative bg-card border border-border rounded-lg overflow-hidden group">
        <div
          className="relative w-full aspect-square bg-muted flex items-center justify-center"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setIsZoomed(false)}
        >
          {currentMedia?.type === 'image' ? (
            <Image
              src={currentMedia.src || "/placeholder.svg"}
              alt={productName}
              fill
              className={`object-cover transition-transform duration-300 ${
                isZoomed ? 'scale-200' : 'scale-100'
              }`}
              style={isZoomed ? { transformOrigin: `${zoomPos.x}% ${zoomPos.y}%` } : undefined}
            />
          ) : (
            <video
              src={currentMedia.src}
              className="w-full h-full object-cover"
              controls
            />
          )}

          {/* Zoom Button */}
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="absolute top-4 right-4 p-2 bg-primary text-primary-foreground rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Maximize2 size={20} />
          </button>

          {/* Navigation Arrows */}
          {allMedia.length > 1 && (
            <>
              <button
                onClick={() => setSelectedIndex(prev => (prev - 1 + allMedia.length) % allMedia.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-foreground rounded-lg hover:bg-primary transition-colors opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => setSelectedIndex(prev => (prev + 1) % allMedia.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-foreground rounded-lg hover:bg-primary transition-colors opacity-0 group-hover:opacity-100"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          {/* Media Type Badge */}
          {currentMedia?.type === 'video' && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <Play size={60} className="text-primary fill-primary" />
            </div>
          )}
        </div>
      </div>

      {/* Thumbnails */}
      {allMedia.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {allMedia.map((media, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              className={`relative flex-shrink-0 w-20 h-20 rounded-lg border-2 overflow-hidden transition-all ${
                idx === selectedIndex ? 'border-primary' : 'border-border hover:border-primary/50'
              }`}
            >
              {media.type === 'image' ? (
                <Image
                  src={media.src || "/placeholder.svg"}
                  alt={`${productName} - ${idx}`}
                  fill
                  className="object-cover"
                />
              ) : (
                <>
                  <video src={media.src} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <Play size={16} className="text-primary fill-primary" />
                  </div>
                </>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
