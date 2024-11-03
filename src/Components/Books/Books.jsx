import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {

    const [books , setBooks] = useState([]);

    useEffect( () => {
         fetch('../../../public/data/booksData.json')
         .then(res => res.json())
         .then(data => setBooks(data))
        //  console.log(books)
    } ,[])

    return (
        <div className="py-10">
            <h2 className="text-2xl md:text-4xl xl:text-6xl font-bold text-center">Books</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 place-items-center ">
                {
                    books.map(book => <Book key={book.bookId} book={book} ></Book>)
                }
            </div>
            
        </div>
    );
};

export default Books;