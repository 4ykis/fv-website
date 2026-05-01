'use client';

import { useState } from 'react';

export function VideoPlayer({ title, posterGradient, video }: { title: string; posterGradient: string; video: string }) {
  const [episode, setEpisode] = useState(1);
  return <div className="space-y-4"><div className="overflow-hidden rounded-2xl bg-black shadow-soft"><video key={episode} controls className="aspect-video w-full" poster={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1280' height='720'%3E%3Crect width='100%25' height='100%25' fill='%23050505'/%3E%3C/svg%3E`}><source src={video} type="video/mp4" />Ваш браузер не підтримує відео.</video></div><p className="text-sm text-darkText/70">Якщо відео не відтворюється, використовується тестовий плейсхолдер для {title}.</p><div className="flex flex-wrap gap-2">{[1,2,3,4,5].map(ep=><button key={ep} onClick={()=>setEpisode(ep)} className={`rounded-lg px-3 py-1.5 text-sm ${episode===ep?'bg-brandRed text-white':'bg-white'}`}>Епізод {ep}</button>)}</div></div>;
}
