import Link from 'next/link';
import { AnimeItem } from '@/data/anime';

export function AnimeCard({ anime }: { anime: AnimeItem }) {
  return <article className="group overflow-hidden rounded-2xl bg-white shadow-soft"><div className={`h-44 bg-gradient-to-br ${anime.posterGradient} p-3 text-xs text-white/80`}>EP {anime.episodes}</div><div className="space-y-3 p-4"><h3 className="text-lg font-semibold">{anime.title}</h3><p className="line-clamp-2 text-sm text-darkText/70">{anime.description}</p><div className="flex flex-wrap gap-2">{anime.genres.map(g=><span key={g} className="rounded-full bg-lightBg px-2 py-1 text-xs">{g}</span>)}</div><div className="flex items-center justify-between"><span className="text-sm font-medium text-brandRed">{anime.status}</span><Link className="rounded-lg bg-softBlack px-3 py-1.5 text-sm text-white hover:bg-brandRed" href={`/anime/${anime.slug}`}>Дивитися</Link></div></div></article>;
}
