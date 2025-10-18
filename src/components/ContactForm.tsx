"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log("Отправка формы:", formData);
    alert("Спасибо за обращение! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="card">
      <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-primary">Обратная связь</h3>
      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2 text-foreground">
              Имя *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-2 sm:px-3 py-2 text-sm sm:text-base border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              placeholder="Ваше имя"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2 text-foreground">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-2 sm:px-3 py-2 text-sm sm:text-base border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              placeholder="your@email.com"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2 text-foreground">
            Телефон
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-2 sm:px-3 py-2 text-sm sm:text-base border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
            placeholder="+7 (000) 000-00-00"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2 text-foreground">
            Сообщение *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={3}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-2 sm:px-3 py-2 text-sm sm:text-base border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
            placeholder="Опишите вашу проблему или вопрос..."
          />
        </div>
        
        <button
          type="submit"
          className="btn-primary w-full text-sm sm:text-base"
        >
          Отправить сообщение
        </button>
      </form>
    </div>
  );
}
