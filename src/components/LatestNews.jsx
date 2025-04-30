import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
           <p className="text-base-100 bg-secondary px-3 py-2 rounded-sm">Latest</p>
           <Marquee className='flex gap-5' pauseOnHover={true} speed={60}>

           <p className="font-bold">Lorem ipsum,expedita! Iure commodi laboriosam veritatis quia.</p>
           <p className="font-bold">Lorem ipsum,expedita! Iure commodi laboriosam veritatis quia.</p>
           <p className="font-bold">Lorem ipsum,expedita! Iure commodi laboriosam veritatis quia.</p>
           </Marquee>
        </div>
    );
};

export default LatestNews;