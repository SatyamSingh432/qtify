import { Card } from './Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Carousel.css';
import { SliderButton } from './SliderButton';

const Carousel = ({ name, albums }) => {
    return (
        <div className='swiper'>
            <Swiper
                slidesPerView={10}
                spaceBetween={10}
                navigation={{
                    nextEl: `#${name.split(' ').join('')}-right`,
                    prevEl: `#${name.split(' ').join('')}-left`,
                }}
                modules={[Pagination, Navigation]}
                className='mySwiper'
            >
                {albums.map((album) => (
                    <SwiperSlide key={album.id}>
                        <Card
                            noOfFollows={
                                album.follows !== undefined
                                    ? `${album.follows} Follows`
                                    : `${album.likes} Likes`
                            }
                            key={album.id}
                            albumImage={album.image}
                            albumName={album.title}
                            numOfSongs={album.songs?.length}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <SliderButton direction='left' name={name} />
            <SliderButton direction='right' name={name} />
        </div>
    );
};

export { Carousel };
