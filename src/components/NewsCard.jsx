import React from 'react';
import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from 'react-icons/fa';
import { format } from 'date-fns';

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    image_url,
    details,
    rating,
    total_view,
    tags,
    others,
  } = news;

  return (
    <div className="card bg-base-100 shadow-md mb-6  rounded-xl">
      <div className="flex items-center justify-between p-4 border-b border-gray-100 border-dashed">
        <div className="flex items-center gap-3">
          <img src={author?.img} alt={author?.name} className="w-10 h-10 rounded-full object-cover" />
          <div>
            <p className="font-semibold">{author?.name}</p>
            <p className="text-sm text-gray-500">{format(new Date(author?.published_date), 'yyyy-MM-dd')}</p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-500 text-xl">
          <FaRegBookmark className="cursor-pointer hover:text-blue-400" />
          <FaShareAlt className="cursor-pointer hover:text-blue-400" />
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <img src={image_url} alt="news" className="rounded-lg mb-4 w-full max-h-60 object-cover" />
        <p className="text-sm text-accent mb-2">
          {details.length > 200 ? `${details.slice(0, 200)}...` : details}
        </p>
        <a href="#" className="text-orange-300 font-semibold">Read More</a>
      </div>

      <div className="flex justify-between items-center p-4 border-t  border-gray-100 border-dashed">
        <div className="flex items-center text-orange-500 gap-1">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={i < rating.number ? 'text-orange-400' : 'text-gray-300'} />
          ))}
          <span className="ml-2 text-sm text-gray-600">{rating.number.toFixed(1)}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-500 text-sm">
          <FaEye /> {total_view}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
