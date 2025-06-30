import Button from "@/components/ui/Button";
import { Mail, Github, Linkedin } from "lucide-react";
import './globals.css';

export default function HomePage() {
  return (
      <main className="flex flex-col items-center px-4 md:px-16 py-10 space-y-20">
        {/* Hero Section */}
        <section className="text-center space-y-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold">Привет! Я Frontend-разработчик</h1>
          <p className="text-lg text-gray-600">
            Специализируюсь на создании современных веб-приложений с использованием React, Next.js и TypeScript.
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="default" className="rounded-xl px-6 py-2">Связаться со мной</Button>
            <Button variant="outline" className="rounded-xl px-6 py-2">Посмотреть проекты</Button>
          </div>
        </section>

        {/* About Me */}
        <section className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold">Обо мне</h2>
          <p className="text-gray-700">
            Я — разработчик интерфейсов с опытом в создании удобных, адаптивных и производительных веб-приложений.
            Участвую в реальных проектах, люблю чистую архитектуру, семантичную верстку и эффективные UI-решения.
          </p>
        </section>

        {/* Tech Stack */}
        <section className="max-w-4xl w-full space-y-6">
          <h2 className="text-3xl font-semibold text-center">Мои технологии</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 text-center text-sm text-gray-700">
            <div>React</div>
            <div>Next.js</div>
            <div>TypeScript</div>
            <div>Tailwind CSS</div>
            <div>JavaScript</div>
            <div>HTML / CSS</div>
            <div>Git</div>
            <div>Figma</div>
            <div>REST API</div>
            <div>Jest</div>
            <div>Node.js</div>
            <div>Vite / Webpack</div>
          </div>
        </section>

        {/* Projects */}
        <section className="max-w-5xl w-full space-y-6">
          <h2 className="text-3xl font-semibold text-center">Проекты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Проект 1 */}
            <div className="border p-4 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">MyMoney</h3>
              <p className="text-gray-600">Финансовый трекер с аналитикой и рекомендациями по тратам.</p>
              <a href="#" className="text-blue-500 hover:underline text-sm">Подробнее →</a>
            </div>
            {/* Проект 2 */}
            <div className="border p-4 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">Findealer</h3>
              <p className="text-gray-600">Платформа для инвестиций и бизнес-идей с интеграцией Telegram-бота.</p>
              <a href="#" className="text-blue-500 hover:underline text-sm">Подробнее →</a>
            </div>
          </div>
        </section>

        {/* Experience / Education */}
        <section className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold">Опыт и обучение</h2>
          <ul className="space-y-2 text-gray-700">
            <li>• Проекты на фрилансе (React, Next.js, Telegram-боты)</li>
            <li>• Курс по фронтенду от [название], завершен в 2024</li>
            <li>• Самостоятельное изучение TypeScript, React Hooks, архитектуры SPA</li>
          </ul>
        </section>

        {/* Contact */}
        <section className="max-w-2xl text-center space-y-6">
          <h2 className="text-3xl font-semibold">Связаться со мной</h2>
          <p className="text-gray-600">Открыт к новым предложениям и сотрудничеству.</p>
          <div className="flex gap-4 justify-center">
            <a href="mailto:your.email@example.com" className="flex items-center gap-2 text-blue-600 hover:underline">
              <Mail size={18} /> your.email@example.com
            </a>
            <a href="https://github.com/yourusername" target="_blank" className="flex items-center gap-2 text-gray-700 hover:text-black">
              <Github size={18} /> GitHub
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" className="flex items-center gap-2 text-blue-700 hover:underline">
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-sm text-gray-500 text-center pt-10 border-t w-full">
          © {new Date().getFullYear()} Твое Имя. Все права защищены.
        </footer>
      </main>
  );
}