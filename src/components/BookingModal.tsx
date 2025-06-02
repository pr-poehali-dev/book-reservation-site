import { useState } from "react";
import { Calendar, User, Mail, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  book: {
    id: string;
    title: string;
    author: string;
    image: string;
  } | null;
  onConfirm: (bookingData: any) => void;
}

const BookingModal = ({
  isOpen,
  onClose,
  book,
  onConfirm,
}: BookingModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    startDate: "",
    endDate: "",
  });

  if (!isOpen || !book) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirm({ ...formData, bookId: book.id });
    onClose();
    setFormData({ name: "", email: "", phone: "", startDate: "", endDate: "" });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-md bg-white">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-xl">Бронирование книги</CardTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-8 w-8"
          >
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>

        <CardContent>
          <div className="flex items-center space-x-3 mb-6 p-3 bg-gray-50 rounded-lg">
            <img
              src={book.image}
              alt={book.title}
              className="w-12 h-16 object-cover rounded"
            />
            <div>
              <h4 className="font-semibold text-sm">{book.title}</h4>
              <p className="text-gray-600 text-xs">{book.author}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                <User className="h-4 w-4 inline mr-1" />
                Ваше имя
              </label>
              <Input
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Введите ваше имя"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                <Mail className="h-4 w-4 inline mr-1" />
                Email
              </label>
              <Input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                <Phone className="h-4 w-4 inline mr-1" />
                Телефон
              </label>
              <Input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                placeholder="+7 (999) 123-45-67"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  <Calendar className="h-4 w-4 inline mr-1" />
                  Дата начала
                </label>
                <Input
                  type="date"
                  required
                  value={formData.startDate}
                  onChange={(e) =>
                    setFormData({ ...formData, startDate: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  <Calendar className="h-4 w-4 inline mr-1" />
                  Дата окончания
                </label>
                <Input
                  type="date"
                  required
                  value={formData.endDate}
                  onChange={(e) =>
                    setFormData({ ...formData, endDate: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="flex space-x-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1"
              >
                Отмена
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-orange-500 hover:bg-orange-600"
              >
                Забронировать
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingModal;
