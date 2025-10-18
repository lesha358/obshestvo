import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero секция */}
      <section className="py-8 sm:py-12 lg:py-16 gradient-light rounded-2xl border border-red-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Текст слева */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
                Защита прав собственников жилья
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8">
                Мы помогаем собственникам жилья отстаивать свои права, решать споры с управляющими компаниями 
                и получать качественные коммунальные услуги.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
                <Link href="/info" className="btn-primary text-center">
                  Полезная информация
                </Link>
                <Link href="#contact" className="btn-secondary text-center">
                  Получить помощь
                </Link>
              </div>
            </div>
            
            {/* Логотип справа */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="bg-white rounded-2xl p-2 sm:p-4 shadow-lg border border-red-100">
                <Image
                  src="/logo-large.png"
                  alt="Защита прав собственников жилья"
                  width={600}
                  height={240}
                  className="h-32 sm:h-40 lg:h-48 w-auto object-contain"
                  priority
                  sizes="(max-width: 768px) 200px, (max-width: 1200px) 300px, 400px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* О нашей деятельности */}
      <section className="space-y-6 sm:space-y-8">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">О нашей деятельности</h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto px-4">
            Наша организация специализируется на защите прав собственников жилья. Мы оказываем 
            консультационную помощь, помогаем в решении споров с управляющими компаниями и 
            контролируем качество предоставляемых коммунальных услуг.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="card text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <span className="text-primary text-lg sm:text-xl">⚖️</span>
            </div>
            <h3 className="font-semibold mb-2 text-sm sm:text-base">Правовая поддержка</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Консультации по жилищному праву, помощь в составлении документов и представление интересов в суде.
            </p>
          </div>
          
          <div className="card text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <span className="text-primary text-lg sm:text-xl">🏠</span>
            </div>
            <h3 className="font-semibold mb-2 text-sm sm:text-base">Контроль УК</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Мониторинг работы управляющих компаний, контроль качества услуг и соблюдения договоров.
            </p>
          </div>
          
          <div className="card text-center sm:col-span-2 lg:col-span-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <span className="text-primary text-lg sm:text-xl">📋</span>
            </div>
            <h3 className="font-semibold mb-2 text-sm sm:text-base">Образование</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Проведение семинаров и консультаций по жилищному законодательству для собственников.
            </p>
          </div>
        </div>
      </section>

      {/* Статистика */}
      <section className="gradient-red text-primary-foreground rounded-2xl py-8 sm:py-12 shadow-lg">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6 sm:mb-8">Наши достижения</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">500+</div>
              <div className="text-xs sm:text-sm opacity-90">Консультаций</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">150+</div>
              <div className="text-xs sm:text-sm opacity-90">Решённых споров</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">50+</div>
              <div className="text-xs sm:text-sm opacity-90">УК под контролем</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">3+</div>
              <div className="text-xs sm:text-sm opacity-90">Года работы</div>
            </div>
          </div>
        </div>
      </section>

      {/* Контакты и карта */}
      <section id="contact" className="space-y-6 sm:space-y-8">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center">Контакты</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Контактная информация */}
          <div className="space-y-4 sm:space-y-6">
            <div className="card">
              <h3 className="font-semibold mb-3 sm:mb-4 text-primary text-sm sm:text-base">Как с нами связаться</h3>
              <div className="space-y-2 sm:space-y-3 text-muted-foreground text-sm sm:text-base">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <span className="text-primary text-base sm:text-lg">📞</span>
                  <span>+7 (000) 000-00-00</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <span className="text-primary text-base sm:text-lg">✉️</span>
                  <span>info@zashchita-zhilya.ru</span>
                </div>
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <span className="text-primary text-base sm:text-lg">📍</span>
                  <span>г. Москва, ул. Примерная, д. 1<br />Офис 101</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <span className="text-primary text-base sm:text-lg">🕒</span>
                  <span>Пн-Пт: 9:00 - 18:00</span>
                </div>
              </div>
            </div>
            
            <ContactForm />
          </div>
          
          {/* Карта */}
          <div className="card">
            <h3 className="font-semibold mb-3 sm:mb-4 text-primary text-sm sm:text-base">Мы на карте</h3>
            <div className="bg-gray-50 rounded-lg h-48 sm:h-64 flex items-center justify-center border-2 border-dashed border-gray-200">
              <div className="text-center text-muted-foreground">
                <div className="text-3xl sm:text-4xl mb-2">🗺️</div>
                <p className="text-sm sm:text-base">Интерактивная карта</p>
                <p className="text-xs sm:text-sm">(будут подключены Яндекс.Карты)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}