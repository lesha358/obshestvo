import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "Полезная информация",
};

type Article = {
  id: string;
  title: string;
  subtitle: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
};

const articles: Article[] = [
  {
    id: "uk-responsibilities",
    title: "Обязанности управляющей компании",
    subtitle: "Что должна делать УК по закону",
    excerpt: "Подробный разбор обязанностей управляющей компании перед собственниками жилья согласно Жилищному кодексу РФ.",
    date: "2025-10-18",
    image: "/images/uk-duties.jpg",
    category: "Права собственников"
  },
  {
    id: "tariff-disputes",
    title: "Споры по тарифам ЖКУ",
    subtitle: "Как оспорить завышенные тарифы",
    excerpt: "Пошаговая инструкция по оспариванию завышенных тарифов на коммунальные услуги и защите своих прав.",
    date: "2025-10-18",
    image: "/images/tariffs.jpg",
    category: "Тарифы и расчёты"
  },
  {
    id: "general-meeting",
    title: "Общее собрание собственников",
    subtitle: "Правила проведения и голосования",
    excerpt: "Как правильно организовать и провести общее собрание собственников жилья в многоквартирном доме.",
    date: "2025-10-18",
    image: "/images/meeting.jpg",
    category: "Управление домом"
  },
  {
    id: "repair-fund",
    title: "Фонд капитального ремонта",
    subtitle: "Права и обязанности собственников",
    excerpt: "Всё о фонде капитального ремонта: формирование, использование средств и контроль за их расходованием.",
    date: "2025-10-18",
    image: "/images/repair-fund.jpg",
    category: "Капитальный ремонт"
  }
];

export default function InfoPage() {
  return (
    <div className="space-y-8">
      <Breadcrumbs items={[{ label: "Полезная информация" }]} />
      
      {/* Hero секция */}
      <section className="py-12 bg-gradient-to-b from-primary/5 to-transparent rounded-2xl">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Полезная информация
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Правовые статьи, инструкции и рекомендации для собственников жилья. 
            Узнайте о своих правах и способах их защиты.
          </p>
        </div>
      </section>

      {/* Фильтры по категориям */}
      <section className="space-y-6">
        <div className="flex flex-wrap gap-2">
          <button className="btn-primary">Все статьи</button>
          <button className="btn-secondary">Права собственников</button>
          <button className="btn-secondary">Тарифы и расчёты</button>
          <button className="btn-secondary">Управление домом</button>
          <button className="btn-secondary">Капитальный ремонт</button>
        </div>
      </section>

      {/* Список статей */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map((article) => (
          <article key={article.id} className="bg-secondary rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-muted-foreground/10 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <div className="text-4xl mb-2">📄</div>
                <p className="text-sm">Изображение статьи</p>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                  {article.category}
                </span>
                <time className="text-xs text-muted-foreground">
                  {new Date(article.date).toLocaleDateString("ru-RU")}
                </time>
              </div>
              
              <h2 className="text-xl font-semibold mb-2">
                <Link href={`/info/${article.id}`} className="hover:text-primary transition-colors">
                  {article.title}
                </Link>
              </h2>
              
              <h3 className="text-sm text-muted-foreground mb-3">
                {article.subtitle}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4">
                {article.excerpt}
              </p>
              
              <Link 
                href={`/info/${article.id}`} 
                className="text-primary text-sm font-medium hover:underline"
              >
                Читать полностью →
              </Link>
            </div>
          </article>
        ))}
      </section>

      {/* Пагинация */}
      <section className="flex justify-center">
        <div className="flex items-center space-x-2">
          <button className="btn-secondary" disabled>← Предыдущая</button>
          <span className="px-4 py-2 text-sm text-muted-foreground">Страница 1 из 1</span>
          <button className="btn-secondary" disabled>Следующая →</button>
        </div>
      </section>
    </div>
  );
}
