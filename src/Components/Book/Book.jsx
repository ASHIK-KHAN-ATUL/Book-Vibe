import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, author, bookName, category, image, rating, tags } = book;

  return (
    <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-xl p-6">
                <figure className="bg-sky-100 py-8 px-20 rounded-xl">
                    <img className="  h-[166px]  " src={image} alt={bookName}  />
                </figure>
                <div className="mt-6 flex flex-col space-y-4">
                    <div className="card-actions justify-start text-green-500 font-bold ">
                        {
                            tags.map((tag , idx) => <button key={idx} className="btn transition duration-1000 ease-in-out  bg-green-50 hover:bg-red-50 rounded-3xl">{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title font-bold">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p className="font-medium">By : {author}</p>

                    <div className="border-b-2 border-dashed border-gray-500"></div>

                    <div className="flex justify-between text-xl font-semibold">           
                        <p>{category}</p>
                        <div className="flex gap-3 justify-center items-center"> 
                            <p>{rating}</p>
                            <div className="rating">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-300" />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
    </Link>
  );
};

export default Book;
