import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border py-6 sm:py-8 mt-12 sm:mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Защита прав собственников жилья</h3>
            <p className="text-muted-foreground text-xs sm:text-sm">
              Общественная организация, защищающая права собственников жилья и оказывающая правовую поддержку.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-3 sm:mb-4 text-sm sm:text-base">Навигация</h4>
            <nav className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <Link href="/" className="block text-muted-foreground hover:text-primary transition-colors">Главная</Link>
              <Link href="/info" className="block text-muted-foreground hover:text-primary transition-colors">Полезная информация</Link>
              <Link href="/news" className="block text-muted-foreground hover:text-primary transition-colors">Новости</Link>
              <Link href="/reports" className="block text-muted-foreground hover:text-primary transition-colors">Отчёты</Link>
              <Link href="/#contact" className="block text-muted-foreground hover:text-primary transition-colors">Обратная связь</Link>
            </nav>
          </div>
          
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-medium mb-3 sm:mb-4 text-sm sm:text-base">Контакты</h4>
            <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
              <p>Телефон: +7 (000) 000-00-00</p>
              <p>Email: info@zashchita-zhilya.ru</p>
              <p>Адрес: г. Москва, ул. Примерная, д. 1</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-6 sm:mt-8 pt-4 sm:pt-6 text-center text-xs sm:text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Защита прав собственников жилья. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}



