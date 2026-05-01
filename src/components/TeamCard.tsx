import { TeamMember } from '@/data/team';

export function TeamCard({member}:{member:TeamMember}){return <article className="rounded-2xl border border-black/5 bg-white p-5 shadow-soft"><div className="mb-3 h-14 w-14 rounded-full bg-gradient-to-br from-brandRed to-black"/><h3 className="font-semibold">{member.name}</h3><p className="text-sm text-brandRed">{member.role}</p><p className="mt-2 text-sm text-darkText/75">{member.description}</p></article>}
