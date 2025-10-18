import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Результаты проверки УК «Жилсервис»",
};

export default function NewsItemPage() {
  return (
    <div className="space-y-8">
      <Breadcrumbs items={[
        { label: "Новости", href: "/news" },
        { label: "Результаты проверки УК «Жилсервис»" }
      ]} />
      
      {/* Заголовок новости */}
      <header className="space-y-4">
        <div className="flex items-center justify-between">
          <time className="text-sm text-muted-foreground">
            18 октября 2025
          </time>
          <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded">
            Новость
          </span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl font-bold">
          Результаты проверки УК «Жилсервис»
        </h1>
        
        <h2 className="text-xl text-muted-foreground">
          Выявлены нарушения в содержании общего имущества
        </h2>
      </header>

      {/* Изображение новости */}
      <div className="aspect-video bg-muted-foreground/10 rounded-lg flex items-center justify-center">
        <div className="text-center text-muted-foreground">
          <div className="text-6xl mb-4">📰</div>
          <p>Изображение новости</p>
        </div>
      </div>

      {/* Содержание новости */}
      <article className="prose prose-lg max-w-none">
        <p className="text-lg text-muted-foreground mb-6">
          По результатам внеплановой проверки жилищной инспекции в управляющей компании «Жилсервис» 
          выявлены серьёзные нарушения в содержании общего имущества многоквартирных домов.
        </p>

        <h3>Основные нарушения</h3>
        
        <p>
          В ходе проверки инспекторы обнаружили следующие нарушения:
        </p>
        
        <ul>
          <li>Ненадлежащее содержание подъездов и лестничных клеток</li>
          <li>Отсутствие освещения в местах общего пользования</li>
          <li>Неисправность лифтового оборудования</li>
          <li>Нарушение температурного режима в отопительный период</li>
          <li>Несвоевременная уборка придомовой территории</li>
        </ul>

        <h3>Принятые меры</h3>
        
        <p>
          По результатам проверки жилищная инспекция:
        </p>
        
        <ul>
          <li>Выдала предписание об устранении нарушений в срок до 30 дней</li>
          <li>Оштрафовала УК на сумму 50 000 рублей</li>
          <li>Поставила компанию на особый контроль</li>
        </ul>

        <h3>Реакция собственников</h3>
        
        <p>
          Собственники жилья в домах, обслуживаемых УК «Жилсервис», неоднократно жаловались 
          на качество предоставляемых услуг. Многие из них обращались в нашу организацию 
          за правовой поддержкой.
        </p>

        <div className="bg-accent/5 border-l-4 border-accent p-4 my-6">
          <p className="font-medium text-accent mb-2">Справка:</p>
          <p>
            УК «Жилсервис» обслуживает 15 многоквартирных домов в Центральном районе города. 
            Собственники неоднократно жаловались на качество услуг и нарушение договорных обязательств.
          </p>
        </div>

        <h3>Что дальше?</h3>
        
        <p>
          Наша организация продолжает мониторить ситуацию и оказывать правовую поддержку 
          собственникам. Мы готовы помочь в составлении коллективных жалоб и обращений 
          в контролирующие органы.
        </p>

        <p>
          Если вы столкнулись с аналогичными проблемами в своём доме, обращайтесь к нам 
          за консультацией. Мы поможем защитить ваши права как собственника жилья.
        </p>
      </article>

      {/* Форма обратной связи */}
      <section className="mt-12">
        <h3 className="text-xl font-semibold mb-6">Есть вопросы по новости?</h3>
        <ContactForm />
      </section>
    </div>
  );
}
