import {
  createBrowserRouter,
  RouterProvider,
  Link,
  useParams,
} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/books">
        <button className="text-4xl text-blue-500 hover:underline">
          BookList
        </button>
      </Link>
    </div>
  );
}

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=react")
      .then((response) => {
        setBooks(response.data.items || []);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 ">
      {books.map((book) => (
        <div key={book.id}>
          <h2>{book.volumeInfo.title}</h2>
          <p>{book.volumeInfo.authors?.join(", ")}</p>
          <img
            src={book.volumeInfo.imageLinks?.thumbnail}
            alt={book.volumeInfo.title}
          />
          <Link to={`/books/${book.id}`}>
            <button className="text-blue-500 hover:underline mb-5">
              Lihat Detail
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}

function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then((response) => {
        setBook(response.data);
      })
      .catch((error) => {
        console.error("Error fetching book details:", error);
      });
  }, [id]);

  if (!book) return <div>Loading...</div>;
  console.log(book);
  return (
    <div>
      <h2>{book.volumeInfo.title}</h2>
      <p>{book.volumeInfo.authors?.join(", ")}</p>
      <img
        src={book.volumeInfo.imageLinks?.thumbnail}
        alt={book.volumeInfo.title}
      />
      <p>{book.volumeInfo.description}</p>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/books",
    element: <Books />,
  },
  {
    path: "/books/:id",
    element: <BookDetail />,
  },
]);

function BookVerse() {
  return <RouterProvider router={router} />;
}

export default BookVerse;
