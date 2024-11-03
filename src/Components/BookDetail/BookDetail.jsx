import { useLoaderData, useParams } from "react-router-dom";
import { addToStoreWishList, adToStoreReadList } from "../../Utility/addToDb";


const BookDetail = () => {

    const {bookId} = useParams();
    const id = parseInt(bookId)
    // console.log(bookId)

    const data = useLoaderData();
    console.log(data);

    const book = data.find(book => book.bookId === id)
    console.log(book)

    const {image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating} = book;



    const handleMarkAsRead = (id) => {
        adToStoreReadList(id);
    }

    const handleWishList = (id) => {
        addToStoreWishList(id);
    }
    

    return (
        <div className="hero bg-base-200 py-10 px-4 md:px-8 lg:px-16">
        <div className="hero-content flex-col lg:flex-row gap-8">
          <div className="lg:w-[30%]">
            <img src={image} className="h-[500px] lg:w-full  rounded-lg shadow-2xl  " />
          </div>
      
          <div className="flex flex-col gap-4 lg:w-[70%]">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{bookName}</h1>
      
            <p className="text-lg md:text-xl text-gray-800 font-semibold">By: {author}</p>
      
            <div className="border-2 w-full md:w-3/4"></div>
      
            <p className="text-lg md:text-xl text-gray-800 font-semibold">{category}</p>
      
            <div className="border-2 w-full md:w-3/4"></div>
      
            <div>
                <span className="font-bold text-black text-lg md:text-xl">Review: </span>
                <div>{review}</div> 
            </div>

      
            <p className="flex gap-4 md:gap-8 items-center text-black font-bold">
              <span>Tag</span>
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="font-medium text-green-600 bg-green-50 p-2 md:p-3 rounded-3xl text-sm md:text-base"
                >
                  #{tag}
                </div>
              ))}
            </p>
      
            <div className="border-2 w-full md:w-3/4"></div>
      
            <div className="flex flex-col md:flex-row md:w-3/4 justify-between gap-4">
              <div className="flex flex-col text-gray-500 font-medium gap-4">
                <span>Number of Pages:</span>
                <span>Publisher:</span>
                <span>Year of Publishing:</span>
                <span>Rating:</span>
              </div>
      
              <div className="flex flex-col gap-4">
                <p className="font-bold text-black flex justify-between">{totalPages}</p>
                <p className="font-bold text-black flex justify-between">{publisher}</p>
                <p className="font-bold text-black flex justify-between">{yearOfPublishing}</p>
                <p className="font-bold text-black flex justify-between">{rating}</p>
              </div>
            </div>
            <div className=" flex justify-between  gap-5 ">
                <button onClick={() => handleMarkAsRead(bookId)} className="btn btn-accent w-1/2 btn-outline   hover:scale-105">Mark as Read</button>
                <button onClick={() => handleWishList(bookId)} className="btn btn-accent w-1/2 bg-sky-500 hover:bg-green-500 hover:scale-105">Add to WishList</button>
            </div>
          </div>
        </div>
      </div>
      
    );
};

export default BookDetail;