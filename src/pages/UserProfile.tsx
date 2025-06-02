import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Icon from "@/components/ui/icon";

const UserProfile = () => {
  const [user] = useState({
    name: "Анна Петрова",
    email: "anna.petrova@example.com",
    phone: "+7 (999) 123-45-67",
    libraryCardNumber: "ЧБ-2024-001234",
    registrationDate: "15 марта 2024",
    status: "Активный читатель",
  });

  const [activeBookings] = useState([
    {
      id: "1",
      title: "Война и мир",
      author: "Лев Толстой",
      startDate: "2024-06-01",
      endDate: "2024-06-15",
      status: "Активно",
    },
    {
      id: "2",
      title: "Евгений Онегин",
      author: "Александр Пушкин",
      startDate: "2024-06-10",
      endDate: "2024-06-20",
      status: "Забронировано",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Личный кабинет
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Профиль пользователя */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="User" size={20} />
                <span>Мой профиль</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-gray-600">Имя</p>
                <p className="font-medium">{user.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className="font-medium">{user.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Телефон</p>
                <p className="font-medium">{user.phone}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  Номер читательского билета
                </p>
                <p className="font-mono font-medium">
                  {user.libraryCardNumber}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Дата регистрации</p>
                <p className="font-medium">{user.registrationDate}</p>
              </div>
              <Badge variant="outline" className="bg-green-50 text-green-700">
                {user.status}
              </Badge>
            </CardContent>
          </Card>

          {/* Активные бронирования */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="BookOpen" size={20} />
                <span>Мои бронирования</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeBookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="border rounded-lg p-4 bg-white"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">{booking.title}</h4>
                        <p className="text-gray-600 text-sm">
                          {booking.author}
                        </p>
                      </div>
                      <Badge
                        variant={
                          booking.status === "Активно" ? "default" : "secondary"
                        }
                        className={
                          booking.status === "Активно" ? "bg-orange-500" : ""
                        }
                      >
                        {booking.status}
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-600">
                      <p>
                        Период: {booking.startDate} — {booking.endDate}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {activeBookings.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  <Icon
                    name="BookOpen"
                    size={48}
                    className="mx-auto mb-4 text-gray-300"
                  />
                  <p>У вас пока нет активных бронирований</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
