"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border shadow-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <Image
            src="/logo.png"
            alt="Защита прав собственников жилья"
            width={60}
            height={60}
            className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
            priority
            sizes="(max-width: 640px) 48px, 64px"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink href="/" active={pathname === "/"}>Главная</NavLink>
          <NavLink href="/info" active={pathname?.startsWith("/info")}>Полезная информация</NavLink>
          <NavLink href="/news" active={pathname?.startsWith("/news")}>Новости</NavLink>
          <NavLink href="/reports" active={pathname?.startsWith("/reports")}>Отчёты</NavLink>
          <NavLink href="/#contact" active={false}>Обратная связь</NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Открыть меню"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="px-4 py-4 space-y-3">
            <NavLink href="/" active={pathname === "/"} onClick={() => setIsMenuOpen(false)}>Главная</NavLink>
            <NavLink href="/info" active={pathname?.startsWith("/info")} onClick={() => setIsMenuOpen(false)}>Полезная информация</NavLink>
            <NavLink href="/news" active={pathname?.startsWith("/news")} onClick={() => setIsMenuOpen(false)}>Новости</NavLink>
            <NavLink href="/reports" active={pathname?.startsWith("/reports")} onClick={() => setIsMenuOpen(false)}>Отчёты</NavLink>
            <NavLink href="/#contact" active={false} onClick={() => setIsMenuOpen(false)}>Обратная связь</NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, active, children, onClick }: { href: string; active?: boolean; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block transition-colors hover:text-primary ${
        active ? "text-primary font-medium" : "text-muted-foreground"
      }`}
    >
      {children}
    </Link>
  );
}



