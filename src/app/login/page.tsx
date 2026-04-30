'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [remember, setRemember] = useState(true);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    localStorage.setItem('fanvox_auth', JSON.stringify({ loggedIn: true, remember }));
    router.push('/anime');
  }

  return <div className="mx-auto flex min-h-[70vh] max-w-md items-center px-4"><form onSubmit={onSubmit} className="w-full rounded-2xl bg-white p-6 shadow-soft"><h1 className="mb-4 text-2xl font-bold">Вхід до FanVox UA</h1><label className="mb-3 block text-sm">Email<input type="email" required className="mt-1 w-full rounded-lg border p-2"/></label><label className="mb-3 block text-sm">Пароль<input type="password" required className="mt-1 w-full rounded-lg border p-2"/></label><div className="mb-4 flex items-center justify-between text-sm"><label className="flex items-center gap-2"><input type="checkbox" checked={remember} onChange={(e)=>setRemember(e.target.checked)}/>Запам'ятати мене</label><button type="button" className="text-brandRed">Забули пароль?</button></div><button className="w-full rounded-lg bg-brandRed py-2 font-semibold text-white">Увійти</button></form></div>;
}
