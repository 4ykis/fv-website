export interface TeamMember {
  name: string;
  role: string;
  description: string;
}

export const teamMembers: TeamMember[] = [
  { name: 'Марко Таран', role: 'Voice Actor', description: 'Глибокий тембр та емоційні ролі у драматичних тайтлах.' },
  { name: 'Олена Крилова', role: 'Translator', description: 'Адаптує діалоги так, щоб вони звучали природно українською.' },
  { name: 'Роман Хвиль', role: 'Sound Engineer', description: 'Працює над чистотою голосу, атмосферою та фінальним балансом.' },
  { name: 'Ірина Сойка', role: 'Director', description: 'Керує творчим баченням озвучення та роботою акторського складу.' },
  { name: 'Назар Кобза', role: 'Editor', description: 'Фіналізує релізи, синхронізує таймінги та візуальні вставки.' }
];
