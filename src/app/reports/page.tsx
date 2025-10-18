import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "Отчёты об оказанной помощи",
};

type ReportItem = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  image: string;
  category: string;
};

const reports: ReportItem[] = [
  {
    id: "uk-dispute-resolution",
    title: "Решение спора с УК «Домком»",
    subtitle: "Помогли собственникам добиться перерасчёта за некачественные услуги",
    description: "Коллективно обратились в суд от имени 25 собственников многоквартирного дома. Суд обязал УК произвести перерасчёт за период с января по март 2024 года в размере 150 000 рублей.",
    date: "2025-10-18",
    image: "/images/court-case.jpg",
    category: "Судебные споры"
  },
  {
    id: "tariff-consultation",
    title: "Консультации по тарифам ЖКУ",
    subtitle: "Провели 50 бесплатных консультаций для собственников",
    description: "В рамках проекта «Правовая грамотность» наши юристы провели 50 бесплатных консультаций по вопросам тарифов на коммунальные услуги. Помогли разобраться с расчётами и оспорить завышенные тарифы.",
    date: "2025-10-18",
    image: "/images/consultation-session.jpg",
    category: "Консультации"
  },
  {
    id: "meeting-organization",
    title: "Организация общего собрания",
    subtitle: "Помогли провести собрание собственников в доме на ул. Центральной",
    description: "Помогли собственникам многоквартирного дома организовать и провести общее собрание для выбора новой управляющей компании. Собрание прошло успешно, новая УК выбрана.",
    date: "2025-10-18",
    image: "/images/meeting.jpg",
    category: "Управление домом"
  },
  {
    id: "repair-fund-control",
    title: "Контроль фонда капремонта",
    subtitle: "Проверили расходование средств фонда в 5 домах",
    description: "Провели проверку расходования средств фонда капитального ремонта в 5 многоквартирных домах. Выявили нарушения в 2 домах, помогли собственникам обратиться в контролирующие органы.",
    date: "2025-10-18",
    image: "/images/repair-inspection.jpg",
    category: "Капитальный ремонт"
  },
  {
    id: "legal-documents",
    title: "Составление правовых документов",
    subtitle: "Помогли составить 30 жалоб и обращений",
    description: "Помогли собственникам составить жалобы в жилищную инспекцию, прокуратуру и другие контролирующие органы. Всего составлено 30 документов, по 25 из них получены положительные ответы.",
    date: "2025-10-18",
    image: "/images/documents.jpg",
    category: "Документооборот"
  },
  {
    id: "uk-change-support",
    title: "Смена управляющей компании",
    subtitle: "Помогли сменить УК в доме на ул. Парковой",
    description: "Помогли собственникам многоквартирного дома сменить недобросовестную управляющую компанию. Провели все необходимые процедуры, новая УК начала работу с 1 февраля 2024 года.",
    date: "2025-10-18",
    image: "/images/uk-change.jpg",
    category: "Управление домом"
  }
];

export default function ReportsPage() {
  return (
    <div className="space-y-8">
      <Breadcrumbs items={[{ label: "Отчёты об оказанной помощи" }]} />
      
      {/* Hero секция */}
      <section className="py-12 bg-gradient-to-b from-primary/5 to-transparent rounded-2xl">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Отчёты об оказанной помощи
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Здесь мы рассказываем о конкретных делах, в которых помогли собственникам жилья 
            отстоять свои права и решить проблемы с ЖКХ.
          </p>
        </div>
      </section>

      {/* Статистика */}
      <section className="bg-primary text-primary-foreground rounded-2xl py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-center mb-6">Наша помощь в цифрах</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold mb-1">200+</div>
              <div className="text-sm opacity-90">Консультаций</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">50+</div>
              <div className="text-sm opacity-90">Решённых споров</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">30+</div>
              <div className="text-sm opacity-90">Составленных документов</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">15+</div>
              <div className="text-sm opacity-90">Домов под контролем</div>
            </div>
          </div>
        </div>
      </section>

      {/* Фильтры по категориям */}
      <section className="space-y-6">
        <div className="flex flex-wrap gap-2">
          <button className="btn-primary">Все дела</button>
          <button className="btn-secondary">Судебные споры</button>
          <button className="btn-secondary">Консультации</button>
          <button className="btn-secondary">Управление домом</button>
          <button className="btn-secondary">Капитальный ремонт</button>
          <button className="btn-secondary">Документооборот</button>
        </div>
      </section>

      {/* Список отчётов */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.map((report) => (
          <article key={report.id} className="bg-secondary rounded-lg overflow-hidden">
            <div className="aspect-video bg-muted-foreground/10 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <div className="text-4xl mb-2">✅</div>
                <p className="text-sm">Изображение дела</p>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                  {report.category}
                </span>
                <time className="text-xs text-muted-foreground">
                  {new Date(report.date).toLocaleDateString("ru-RU")}
                </time>
              </div>
              
              <h2 className="text-lg font-semibold mb-2">
                {report.title}
              </h2>
              
              <h3 className="text-sm text-muted-foreground mb-3">
                {report.subtitle}
              </h3>
              
              <p className="text-sm text-muted-foreground">
                {report.description}
              </p>
            </div>
          </article>
        ))}
      </section>

      {/* Призыв к действию */}
      <section className="bg-secondary rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Нужна помощь?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Если у вас есть проблемы с управляющей компанией или вопросы по жилищному праву, 
          обращайтесь к нам. Мы поможем защитить ваши права.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/#contact" className="btn-primary">
            Получить консультацию
          </a>
          <a href="tel:+70000000000" className="btn-secondary">
            Позвонить нам
          </a>
        </div>
      </section>
    </div>
  );
}
