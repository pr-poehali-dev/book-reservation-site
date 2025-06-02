import { useState } from "react";
import Header from "@/components/Header";
import BookCard from "@/components/BookCard";
import BookingModal from "@/components/BookingModal";

const Index = () => {
  const [selectedBook, setSelectedBook] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mock data для демонстрации
  const books = [
    {
      id: "1",
      title: "Мастер и Маргарита",
      author: "Михаил Булгаков",
      genre: "Классика",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
      available: true,
      description:
        "Роман о добре и зле, любви и предательстве, вере и безверии.",
    },
    {
      id: "2",
      title: "Война и мир",
      author: "Лев Толстой",
      genre: "Эпопея",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      available: false,
      description:
        "Великая эпопея о русском обществе в эпоху наполеоновских войн.",
    },
    {
      id: "3",
      title: "Преступление и наказание",
      author: "Фёдор Достоевский",
      genre: "Психологический роман",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
      available: true,
      description: "История студента Раскольникова и его внутренней борьбы.",
    },
    {
      id: "4",
      title: "Анна Каренина",
      author: "Лев Толстой",
      genre: "Роман",
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=400&fit=crop",
      available: true,
      description: "Трагическая история любви и человеческих отношений.",
    },
    {
      id: "5",
      title: "Евгений Онегин",
      author: "Александр Пушкин",
      genre: "Роман в стихах",
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=400&fit=crop",
      available: true,
      description: "Энциклопедия русской жизни начала XIX века.",
    },
    {
      id: "6",
      title: "Отцы и дети",
      author: "Иван Тургенев",
      genre: "Социальный роман",
      rating: 4.4,
      image:
        "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=300&h=400&fit=crop",
      available: false,
      description: "Конфликт поколений и идеологий в России XIX века.",
    },
  ];

  const handleBooking = (bookId: string) => {
    const book = books.find((b) => b.id === bookId);
    if (book) {
      setSelectedBook(book);
      setIsModalOpen(true);
    }
  };

  const handleConfirmBooking = (bookingData: any) => {
    console.log("Booking confirmed:", bookingData);
    // Здесь будет логика отправки данных на сервер
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Откройте мир книг
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Бронируйте любимые книги онлайн и наслаждайтесь чтением. Удобно,
            быстро и всегда доступно.
          </p>
          <div className="flex justify-center space-x-4">
            <span className="bg-blue-700 px-4 py-2 rounded-full text-sm">
              📚 {books.filter((b) => b.available).length} книг доступно
            </span>
            <span className="bg-orange-500 px-4 py-2 rounded-full text-sm">
              ⭐ Рейтинг 4.7/5
            </span>
          </div>
        </div>
      </section>

      {/* Books Catalog */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Популярные книги
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Откройте для себя лучшие произведения русской и мировой литературы
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book) => (
              <BookCard key={book.id} {...book} onBook={handleBooking} />
            ))}
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        book={selectedBook}
        onConfirm={handleConfirmBooking}
      />
    </div>
  );
};

export default Index;
