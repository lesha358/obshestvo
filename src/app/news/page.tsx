import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "Новости",
};

type NewsItem = {
  id: string;
  title: string;
  subtitle: string;
  excerpt: string;
  date: string;
  image: string;
};

const news: NewsItem[] = [
  {
    id: "uk-inspection-results",
    title: "Результаты проверки УК «Жилсервис»",
    subtitle: "Выявлены нарушения в содержании общего имущества",
    excerpt: "По результатам внеплановой проверки жилищной инспекции в УК «Жилсервис» выявлены нарушения в содержании общего имущества многоквартирных домов.",
    date: "2025-10-18",
    image: "/images/inspection.jpg"
  },
  {
    id: "tariff-changes",
    title: "Изменения в тарифах на ЖКУ с февраля",
    subtitle: "Новые тарифы утверждены правительством",
    excerpt: "С 1 февраля 2024 года вступают в силу новые тарифы на коммунальные услуги. Рассказываем, что изменилось и как это повлияет на платёжки.",
    date: "2025-10-18",
    image: "/images/tariffs.jpg"
  },
  {
    id: "repair-fund-update",
    title: "Обновление программы капремонта",
    subtitle: "Новые правила использования средств фонда",
    excerpt: "Правительство утвердило изменения в программе капитального ремонта. Теперь собственники смогут лучше контролировать расходование средств.",
    date: "2025-10-18",
    image: "/images/repair-program.jpg"
  },
  {
    id: "legal-consultation",
    title: "Бесплатные консультации для собственников",
    subtitle: "Юристы организации проведут приём",
    excerpt: "В рамках проекта «Правовая поддержка» наши юристы проведут бесплатные консультации для собственников жилья по вопросам ЖКХ.",
    date: "2025-10-18",
    image: "/images/consultation.jpg"
  }
];

export default function NewsPage() {
  return (
    <div className="space-y-8">
      <Breadcrumbs items={[{ label: "Новости" }]} />
      
      {/* Hero секция */}
      <section className="py-12 gradient-light rounded-2xl border border-red-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Новости
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Актуальные новости о деятельности нашей организации, изменениях в жилищном законодательстве 
            и важных событиях в сфере ЖКХ.
          </p>
        </div>
      </section>

      {/* Список новостей */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {news.map((item) => (
          <article key={item.id} className="card overflow-hidden">
            <div className="aspect-video bg-gray-50 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-200 mb-4">
              <div className="text-center text-muted-foreground">
                <div className="text-4xl mb-2">📰</div>
                <p className="text-sm">Изображение новости</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between mb-3">
              <time className="text-xs text-muted-foreground">
                {new Date(item.date).toLocaleDateString("ru-RU")}
              </time>
              <span className="text-xs bg-red-100 text-primary px-2 py-1 rounded">
                Новость
              </span>
            </div>
            
            <h2 className="text-xl font-semibold mb-2">
              <Link href={`/news/${item.id}`} className="hover:text-primary transition-colors">
                {item.title}
              </Link>
            </h2>
            
            <h3 className="text-sm text-muted-foreground mb-3">
              {item.subtitle}
            </h3>
            
            <p className="text-sm text-muted-foreground mb-4">
              {item.excerpt}
            </p>
            
            <Link 
              href={`/news/${item.id}`} 
              className="text-primary text-sm font-medium hover:underline"
            >
              Читать полностью →
            </Link>
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



