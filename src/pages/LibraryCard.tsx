import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Icon from "@/components/ui/icon";

const LibraryCard = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    birthDate: "",
    passportSeries: "",
    passportNumber: "",
  });

  const [hasCard, setHasCard] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Library card application:", formData);
    setHasCard(true);
  };

  if (hasCard) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />

        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="CheckCircle" size={32} className="text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Заявка принята!
            </h1>
            <p className="text-gray-600">
              Ваш читательский билет будет готов в течение 3 рабочих дней
            </p>
          </div>

          <Card>
            <CardHeader className="text-center">
              <CardTitle>Ваш читательский билет</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold">Городская библиотека</h3>
                    <p className="text-blue-100 text-sm">Читательский билет</p>
                  </div>
                  <Icon name="BookOpen" size={24} />
                </div>

                <div className="space-y-2">
                  <p className="font-semibold">
                    {formData.firstName} {formData.lastName}
                  </p>
                  <p className="text-blue-100 text-sm">Номер: ЧБ-2024-001235</p>
                  <p className="text-blue-100 text-sm">
                    Действителен до: 02.06.2025
                  </p>
                </div>
              </div>

              <div className="text-center space-y-4">
                <Badge variant="outline" className="bg-green-50 text-green-700">
                  Заявка обрабатывается
                </Badge>
                <p className="text-sm text-gray-600">
                  Уведомление о готовности билета придет на указанный email
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Оформление читательского билета
          </h1>
          <p className="text-gray-600">
            Заполните форму для получения читательского билета библиотеки
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Icon name="CreditCard" size={20} />
              <span>Заявка на читательский билет</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Имя *
                  </label>
                  <Input
                    required
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    placeholder="Введите имя"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Фамилия *
                  </label>
                  <Input
                    required
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    placeholder="Введите фамилию"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  <Icon name="Mail" size={16} className="inline mr-1" />
                  Email *
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
                  <Icon name="Phone" size={16} className="inline mr-1" />
                  Телефон *
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

              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  <Icon name="MapPin" size={16} className="inline mr-1" />
                  Адрес проживания *
                </label>
                <Input
                  required
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  placeholder="Улица, дом, квартира"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  <Icon name="Calendar" size={16} className="inline mr-1" />
                  Дата рождения *
                </label>
                <Input
                  type="date"
                  required
                  value={formData.birthDate}
                  onChange={(e) =>
                    setFormData({ ...formData, birthDate: e.target.value })
                  }
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Серия паспорта *
                  </label>
                  <Input
                    required
                    value={formData.passportSeries}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        passportSeries: e.target.value,
                      })
                    }
                    placeholder="1234"
                    maxLength={4}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Номер паспорта *
                  </label>
                  <Input
                    required
                    value={formData.passportNumber}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        passportNumber: e.target.value,
                      })
                    }
                    placeholder="567890"
                    maxLength={6}
                  />
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-700">
                  <Icon name="Info" size={16} className="inline mr-1" />
                  Читательский билет оформляется бесплатно и действителен в
                  течение 1 года
                </p>
              </div>

              <Button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600"
              >
                <Icon name="CreditCard" size={16} className="mr-2" />
                Оформить читательский билет
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LibraryCard;
