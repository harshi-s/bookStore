import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { FaStar } from 'react-icons/fa6';

import { Avatar } from 'flowbite-react';
import profileImg from '../../../assets/profile.jpg'

export const Reviews = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
        <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>
            Customers Review
        </h2>

        <div>
            <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
            clickable: true,
            }}
            breakpoints={{
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
            }}
            modules={[Pagination]}
            className="mySwiper"
            >
                <SwiperSlide className='shadow-xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                    <div className='space-y-6'>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>

                        {/* text  */}
                        <div className='mt-7'>
                            <p className='mb-5'>
                            "1984" by George Orwell
"A chilling and thought-provoking novel that feels more relevant today than ever before. Orwell’s vision of a dystopian future is both unsettling and incredibly impactful."                            </p>
                            <Avatar img={profileImg} rounded bordered className='w-10 mb-4'/>
                            <h5 className='text-lg font-medium'>John, 45</h5>
                            
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='shadow-xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                    <div className='space-y-6'>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>

                        {/* text  */}
                        <div className='mt-7'>
                            <p className='mb-5'>
                            "Pride and Prejudice" by Jane Austen
"A delightful mix of romance and social commentary, with rich characters and witty dialogue. Austen’s sharp observations of society are still relatable, even centuries later."                             </p>
                            <Avatar img={profileImg} rounded bordered className='w-10 mb-4'/>
                            <h5 className='text-lg font-medium'>Olivia, 29</h5>
                        </div>
                    </div>
                </SwiperSlide>                
                <SwiperSlide className='shadow-xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                    <div className='space-y-6'>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>

                        {/* text  */}
                        <div className='mt-7'>
                            <p className='mb-5'>
                            "To Kill a Mockingbird" by Harper Lee
"A beautifully written and deeply moving story. The themes of racism and justice are still powerful today, and the character of Atticus Finch is unforgettable."                            </p>
                            <Avatar img={profileImg} rounded bordered className='w-10 mb-4'/>
                            <h5 className='text-lg font-medium'>Liam, 40</h5>
        
                        </div>
                    </div>
                </SwiperSlide>                
                <SwiperSlide className='shadow-xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                    <div className='space-y-6'>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>

                        {/* text  */}
                        <div className='mt-7'>
                            <p className='mb-5'>
                            "The Great Gatsby" by F. Scott Fitzgerald
"A timeless classic that beautifully captures the glamour and tragedy of the Roaring Twenties. Fitzgerald’s prose is poetic, making this a must-read for any literature lover" </p>
                            <Avatar img={profileImg} rounded bordered className='w-10 mb-4'/>
                            <h5 className='text-lg font-medium'>Emma, 32    </h5>
                        </div>
                    </div>
                </SwiperSlide>                
                <SwiperSlide className='shadow-xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                    <div className='space-y-6'>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>

                        {/* text  */}
                        <div className='mt-7'>
                            <p className='mb-5'>
                            "The Catcher in the Rye" by J.D. Salinger
"A book that speaks to the alienation and confusion of adolescence. Holden Caulfield’s voice is raw and relatable, though his cynicism can be overwhelming."                            </p>
                            <Avatar img={profileImg} rounded bordered className='w-10 mb-4'/>
                            <h5 className='text-lg font-medium'>Sophia, 25</h5>
        
                        </div>
                    </div>
                </SwiperSlide>               
                <SwiperSlide className='shadow-xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                    <div className='space-y-6'>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>

                        {/* text  */}
                        <div className='mt-7'>
                            <p className='mb-5'>
                            "Harry Potter and the Sorcerer's Stone" by J.K. Rowling
"A magical adventure that draws you in from the first page. Harry’s journey is filled with heart, humor, and excitement, making it a perfect read for all ages."                            </p>
                            <Avatar img={profileImg} rounded bordered className='w-10 mb-4'/>
                            <h5 className='text-lg font-medium'>Ava, 19</h5>
                          
                        </div>
                    </div>
                </SwiperSlide>                
                <SwiperSlide className='shadow-xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                    <div className='space-y-6'>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>

                        {/* text  */}
                        <div className='mt-7'>
                            <p className='mb-5'>
                            "The Fault in Our Stars" by John Green
"A heartbreaking yet beautifully written story about love, loss, and hope. The characters are so real and their journey stays with you long after you finish the book."                             </p>
                            <Avatar img={profileImg} rounded bordered className='w-10 mb-4'/>
                            <h5 className='text-lg font-medium'>Chloe, 22</h5>
                            
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}
