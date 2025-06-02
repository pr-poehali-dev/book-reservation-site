import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import BookingModal from "@/components/BookingModal";
import Icon from "@/components/ui/icon";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Данные книг (в реальном приложении загружались бы из API)
  const books = [
    {
      id: "1",
      title: "Война и мир",
      author: "Лев Толстой",
      genre: "Исторический роман",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
      available: true,
      description:
        "Эпический роман о русском обществе в эпоху наполеоновских войн.",
      fullDescription:
        "«Война и мир» — роман-эпопея Льва Николаевича Толстого, описывающий русское общество в эпоху войн против Наполеона в 1805—1812 годах. Это произведение является одним из самых известных в мировой литературе.",
      pages: 1300,
      year: 1869,
      publisher: "Русский вестник",
      isbn: "978-5-17-123456-7",
      language: "Русский",
      reviews: [
        {
          author: "Мария К.",
          rating: 5,
          text: "Потрясающее произведение! Глубина характеров поражает.",
        },
        {
          author: "Сергей П.",
          rating: 4,
          text: "Длинно, но очень интересно. Рекомендую.",
        },
      ],
    },
    {
      id: "2",
      title: "Преступление и наказание",
      author: "Фёдор Достоевский",
      genre: "Психологический роман",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop",
      available: true,
      description: "Психологический роман о студенте Раскольникове.",
      fullDescription:
        "Роман Фёдора Михайловича Достоевского, впервые опубликованный в 1866 году в журнале «Русский вестник». Одно из самых известных произведений мировой литературы.",
      pages: 671,
      year: 1866,
      publisher: "Русский вестник",
      isbn: "978-5-17-123456-8",
      language: "Русский",
      reviews: [
        {
          author: "Анна Р.",
          rating: 5,
          text: "Глубокий психологический анализ. Классика!",
        },
      ],
    },
  ];

  const book = books.find((b) => b.id === id);

  if (!book) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Книга не найдена
          </h1>
          <Button onClick={() => navigate("/")}>
            <Icon name="ArrowLeft" size={16} className="mr-2" />
            Вернуться к каталогу
          </Button>
        </div>
      </div>
    );
  }

  const handleBooking = () => {
    setIsModalOpen(true);
  };

  const handleConfirmBooking = (bookingData: any) => {
    console.log("Booking confirmed:", bookingData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <Button
          variant="outline"
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <Icon name="ArrowLeft" size={16} className="mr-2" />
          Назад к каталогу
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Изображение книги */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-auto rounded-lg shadow-lg"
                />

                <div className="mt-6 space-y-4">
                  <Button
                    onClick={handleBooking}
                    disabled={!book.available}
                    className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300"
                    size="lg"
                  >
                    {book.available ? (
                      <>
                        <Icon name="Calendar" size={16} className="mr-2" />
                        Забронировать
                      </>
                    ) : (
                      <>
                        <Icon name="Clock" size={16} className="mr-2" />
                        Недоступна
                      </>
                    )}
                  </Button>

                  <div className="flex items-center justify-center space-x-2">
                    <Icon
                      name="Star"
                      size={16}
                      className="text-yellow-400 fill-current"
                    />
                    <span className="font-semibold">{book.rating}</span>
                    <span className="text-gray-500">
                      ({book.reviews?.length || 0} отзывов)
                    </span>
                  </div>

                  <Badge
                    variant={book.available ? "default" : "secondary"}
                    className={`w-full justify-center ${book.available ? "bg-green-500" : ""}`}
                  >
                    {book.available ? "Доступна" : "Недоступна"}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Информация о книге */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {book.title}
              </h1>
              <p className="text-xl text-gray-600 mb-4">Автор: {book.author}</p>
              <Badge variant="outline" className="mb-4">
                {book.genre}
              </Badge>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Описание</h3>
                <p className="text-gray-700 leading-relaxed">
                  {book.fullDescription}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Характеристики</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Страниц</p>
                    <p className="font-medium">{book.pages}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Год издания</p>
                    <p className="font-medium">{book.year}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Издательство</p>
                    <p className="font-medium">{book.publisher}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">ISBN</p>
                    <p className="font-medium font-mono">{book.isbn}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Язык</p>
                    <p className="font-medium">{book.language}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Рейтинг</p>
                    <p className="font-medium flex items-center">
                      <Icon
                        name="Star"
                        size={14}
                        className="text-yellow-400 fill-current mr-1"
                      />
                      {book.rating}/5
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Отзывы */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Отзывы читателей</h3>
                <div className="space-y-4">
                  {book.reviews?.map((review, index) => (
                    <div key={index} className="border-b pb-4 last:border-b-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="font-medium">{review.author}</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Icon
                              key={i}
                              name="Star"
                              size={12}
                              className={
                                i < review.rating
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300"
                              }
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700">{review.text}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Модальное окно бронирования */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        book={book}
        onConfirm={handleConfirmBooking}
      />
    </div>
  );
};

export default BookDetails;
