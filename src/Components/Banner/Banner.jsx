import React from "react";
import BannerImg from '../../assets/books.jpg'

const Banner = () => {
  return (
    <div className="hero bg-base-200 p-10 rounded-2xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={BannerImg}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="text-center">
          <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
          <p className="py-6">
          "Discover a curated selection of books to inspire, entertain, and refresh your reading list. Whether you're looking to dive into a new genre, explore bestsellers, or find hidden literary gems, these books are perfect for giving your bookshelf a fresh look.
          </p>
          <button className="btn bg-green-400">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
