import { Search, BookOpen, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-blue-800" />
            <h1 className="text-xl font-bold text-gray-900">BookSpace</h1>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Поиск книг по названию или автору..."
                className="pl-10 bg-gray-50 border-gray-200"
              />
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <User className="h-4 w-4 mr-2" />
              Вход
            </Button>
            <Button size="sm" className="bg-blue-800 hover:bg-blue-900">
              Мои бронирования
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
