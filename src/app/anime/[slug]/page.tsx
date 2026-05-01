import { notFound } from 'next/navigation';
import { animeList } from '@/data/anime';
import { VideoPlayer } from '@/components/VideoPlayer';

export default async function AnimeDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const anime = animeList.find((a) => a.slug === slug);
  if (!anime) return notFound();
  return <div className="mx-auto max-w-6xl px-4 py-14"><div className="grid gap-8 lg:grid-cols-[320px_1fr]"><div className={`h-[440px] rounded-2xl bg-gradient-to-br ${anime.posterGradient} p-4 text-white`}>POSTER</div><div><h1 className="text-4xl font-black">{anime.title}</h1><p className="mt-3 text-darkText/75">{anime.description}</p><div className="mt-4 flex flex-wrap gap-2">{anime.genres.map(g=><span key={g} className="rounded-full bg-white px-3 py-1 text-sm shadow">{g}</span>)}</div><ul className="mt-4 space-y-1 text-sm"><li>Рік: {anime.year}</li><li>Статус: <span className="text-brandRed">{anime.status}</span></li><li>Епізоди: {anime.episodes}</li></ul><h3 className="mt-5 font-semibold">Акторський склад</h3><ul className="list-disc pl-5 text-darkText/80">{anime.cast.map(c=><li key={c}>{c}</li>)}</ul></div></div><div className="mt-10"><VideoPlayer title={anime.title} posterGradient={anime.posterGradient} video={anime.video}/></div></div>;
}
