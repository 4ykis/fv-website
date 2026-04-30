import Link from 'next/link';
import { Logo } from './Logo';

const nav = [
  { href: '/', label: 'Головна' },
  { href: '/about', label: 'Про нас' },
  { href: '/team', label: 'Команда' },
  { href: '/anime', label: 'Аніме' }
];

export function Header() {
  return <header className="sticky top-0 z-50 border-b border-white/10 bg-softBlack/95 backdrop-blur"><div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3"><Logo /><nav className="hidden gap-6 md:flex">{nav.map(i=><Link key={i.href} href={i.href} className="text-sm text-white/80 hover:text-white">{i.label}</Link>)}</nav><Link href="/login" className="rounded-lg border border-brandRed px-4 py-2 text-sm text-white hover:bg-brandRed">Увійти</Link></div></header>;
}
