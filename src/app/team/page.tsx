import { TeamCard } from '@/components/TeamCard';
import { teamMembers } from '@/data/team';
import { SectionTitle } from '@/components/SectionTitle';

export default function TeamPage(){return <div className="mx-auto max-w-6xl px-4 py-14"><SectionTitle title="Наша команда" subtitle="Люди, які створюють звучання FanVox UA"/><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{teamMembers.map(m=><TeamCard key={m.name} member={m}/>)}</div></div>}
