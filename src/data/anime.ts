export type AnimeStatus = 'Озвучено' | 'В роботі' | 'Скоро';

export interface AnimeItem {
  slug: string;
  title: string;
  genres: string[];
  episodes: number;
  year: number;
  status: AnimeStatus;
  description: string;
  cast: string[];
  posterGradient: string;
  video: string;
}

export const animeList: AnimeItem[] = [
  { slug: 'tini-nichnoyi-runy', title: 'Тіні Нічної Руни', genres: ['Фентезі', 'Екшн'], episodes: 12, year: 2025, status: 'Озвучено', description: 'Містичний Оріон стикається з древніми символами, що оживають після заходу сонця.', cast: ['Марко Таран', 'Олена Крилова'], posterGradient: 'from-red-600 via-rose-500 to-zinc-900', video: '/videos/placeholder.mp4' },
  { slug: 'kod-golosu', title: 'Код Голосу', genres: ['Кіберпанк', 'Драма'], episodes: 10, year: 2026, status: 'В роботі', description: 'У мегаполісі голоси стали зброєю, а перекладачі керують правдою.', cast: ['Ірина Сойка', 'Роман Хвиль'], posterGradient: 'from-slate-900 via-red-700 to-fuchsia-700', video: '/videos/placeholder.mp4' },
  { slug: 'khvylia-vokalu', title: 'Хвиля Вокалу', genres: ['Музичне', 'Повсякденність'], episodes: 24, year: 2024, status: 'Озвучено', description: 'Юна вокалістка шукає власне звучання у світі студійного продакшну.', cast: ['Софія Лунь', 'Максим Іскра'], posterGradient: 'from-orange-500 via-red-500 to-stone-800', video: '/videos/placeholder.mp4' },
  { slug: 'svitlo-za-kadrom', title: 'Світло за кадром', genres: ['Детектив', 'Трилер'], episodes: 8, year: 2026, status: 'Скоро', description: 'Розслідування зникнення актора приводить команду дубляжу до небезпечної змови.', cast: ['Дмитро Лев', 'Анна Степ'], posterGradient: 'from-zinc-900 via-red-800 to-gray-700', video: '/videos/placeholder.mp4' },
  { slug: 'radio-neon', title: 'Радіо Неон', genres: ['Sci-Fi', 'Романтика'], episodes: 13, year: 2023, status: 'Озвучено', description: 'Піратська хвиля об’єднує два серця в місті неонових частот.', cast: ['Ліза Рубін', 'Олег Сумир'], posterGradient: 'from-red-700 via-pink-600 to-indigo-900', video: '/videos/placeholder.mp4' },
  { slug: 'shtorm-subtytriv', title: 'Шторм Субтитрів', genres: ['Комедія', 'Школа'], episodes: 12, year: 2026, status: 'В роботі', description: 'Клуб перекладу намагається врятувати фестиваль аніме від зриву.', cast: ['Назар Кобза', 'Катя Мрія'], posterGradient: 'from-amber-400 via-red-500 to-zinc-900', video: '/videos/placeholder.mp4' },
  { slug: 'mekhanika-dushu', title: 'Механіка Душі', genres: ['Меха', 'Психологія'], episodes: 16, year: 2025, status: 'Озвучено', description: 'Пілот бойового модуля чує голос штучного інтелекту у власній свідомості.', cast: ['Юлія Ранок', 'Артем Вік'], posterGradient: 'from-zinc-800 via-red-600 to-cyan-700', video: '/videos/placeholder.mp4' },
  { slug: 'ostannia-replika', title: 'Остання Репліка', genres: ['Драма', 'Історія'], episodes: 6, year: 2026, status: 'Скоро', description: 'Старий театр повертається до життя разом із голосами легендарної трупи.', cast: ['Марія Ставр', 'Павло Ритм'], posterGradient: 'from-stone-700 via-red-700 to-black', video: '/videos/placeholder.mp4' }
];
