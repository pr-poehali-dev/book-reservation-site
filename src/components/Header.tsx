import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Icon name="BookOpen" size={24} className="text-orange-500" />
            <span className="text-xl font-bold text-gray-900">БиблиоТека</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Каталог
            </Link>
            <Link
              to="/library-card"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Читательский билет
            </Link>
            <Link
              to="/profile"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Личный кабинет
            </Link>
          </nav>

          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              <Icon name="Search" size={16} className="mr-2" />
              Поиск
            </Button>
            <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
              <Icon name="User" size={16} className="mr-2" />
              Войти
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
