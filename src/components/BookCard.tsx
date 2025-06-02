import { Calendar, Clock, Star } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  genre: string;
  rating: number;
  image: string;
  available: boolean;
  description: string;
  onBook: (bookId: string) => void;
}

const BookCard = ({
  id,
  title,
  author,
  genre,
  rating,
  image,
  available,
  description,
  onBook,
}: BookCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-2 right-2">
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                available
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {available ? "Доступна" : "Забронирована"}
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4">
        <div className="space-y-3">
          <div>
            <h3 className="font-bold text-lg text-gray-900 leading-tight">
              {title}
            </h3>
            <p className="text-gray-600 text-sm">Автор: {author}</p>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-500">
            <span className="bg-gray-100 px-2 py-1 rounded">{genre}</span>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>{rating}</span>
            </div>
          </div>

          <p className="text-gray-600 text-sm line-clamp-2">{description}</p>

          <div className="pt-2">
            <Button
              onClick={() => onBook(id)}
              disabled={!available}
              className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300"
            >
              {available ? (
                <>
                  <Calendar className="h-4 w-4 mr-2" />
                  Забронировать
                </>
              ) : (
                <>
                  <Clock className="h-4 w-4 mr-2" />
                  Недоступна
                </>
              )}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookCard;
