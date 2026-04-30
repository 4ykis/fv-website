import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2 font-black tracking-tight text-white">
      <span className="rounded bg-brandRed px-3 py-1 text-xl">FAN</span>
      <span className="text-2xl text-brandRed">Vox UA</span>
    </Link>
  );
}
