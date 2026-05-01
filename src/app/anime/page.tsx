'use client';
import { AnimeCard } from '@/components/AnimeCard';
import { SearchFilters } from '@/components/SearchFilters';
import { SectionTitle } from '@/components/SectionTitle';
import { animeList } from '@/data/anime';
import { useMemo, useState } from 'react';

export default function AnimeListPage(){const [search,setSearch]=useState('');const [status,setStatus]=useState('');const [genre,setGenre]=useState('');const genres=Array.from(new Set(animeList.flatMap(a=>a.genres)));const filtered=useMemo(()=>animeList.filter(a=>a.title.toLowerCase().includes(search.toLowerCase())&&(!status||a.status===status)&&(!genre||a.genres.includes(genre))),[search,status,genre]);return <div className="mx-auto max-w-6xl px-4 py-14"><SectionTitle title="Каталог аніме" subtitle="Фільтруй релізи за жанром, статусом та назвою"/><SearchFilters search={search} status={status} genre={genre} genres={genres} onSearch={setSearch} onStatus={setStatus} onGenre={setGenre}/><div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{filtered.map(a=><AnimeCard key={a.slug} anime={a}/>)}</div></div>}
