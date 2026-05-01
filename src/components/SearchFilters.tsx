'use client';

import { AnimeStatus } from '@/data/anime';

interface Props {
  search: string;
  status: string;
  genre: string;
  genres: string[];
  onSearch: (v: string) => void;
  onStatus: (v: string) => void;
  onGenre: (v: string) => void;
}

export function SearchFilters({ search, status, genre, genres, onSearch, onStatus, onGenre }: Props) {
  return <div className="grid gap-3 rounded-2xl bg-white p-4 shadow-soft md:grid-cols-3"><input value={search} onChange={(e)=>onSearch(e.target.value)} placeholder="Пошук за назвою" className="rounded-lg border p-2"/><select value={status} onChange={(e)=>onStatus(e.target.value)} className="rounded-lg border p-2"><option value="">Всі статуси</option>{(['Озвучено','В роботі','Скоро'] as AnimeStatus[]).map(s=><option key={s}>{s}</option>)}</select><select value={genre} onChange={(e)=>onGenre(e.target.value)} className="rounded-lg border p-2"><option value="">Всі жанри</option>{genres.map(g=><option key={g}>{g}</option>)}</select></div>;
}
