import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

export default function Brand1Slider() {
    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={6}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination-banner'
                }}
                navigation={{
                    prevEl: ".swiper-button-prev-customers",
                    nextEl: ".swiper-button-next-customers",
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    575: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    767: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    991: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1199: {
                        slidesPerView: 6,
                        spaceBetween: 30,
                    },
                    1350: {
                        slidesPerView: 6,
                        spaceBetween: 30,
                    },
                }}
                className="swiper-wrapper wow animate__animated animate__fadeIn"  style={{display:'flex', justifyContent: 'center', alignItems:'center'}}
            >

                <div className="brand-logo">
                    
                <SwiperSlide><img src="/assets/imgs/slider/logo/borosil.jpg" style={{           }} alt="brand" />
                </SwiperSlide>
                <SwiperSlide><img src="/assets/imgs/slider/logo/electroline.png" style={{           }} alt="brand" />
                </SwiperSlide>
                <SwiperSlide><img src="/assets/imgs/slider/logo/elpro.png" style={{         }} alt="brand" />

                </SwiperSlide>
                <SwiperSlide><img src="/assets/imgs/slider/logo/Grundfos.png" style={{         }}  alt="brand" />
                </SwiperSlide>
                <SwiperSlide><img src="/assets/imgs/slider/logo/gursoy.png" style={{         }} alt="brand" />
                </SwiperSlide>
                <SwiperSlide><img src="/assets/imgs/slider/logo/ingersoll.png" style={{        }} alt="brand" />
                </SwiperSlide>
                <SwiperSlide><img src="/assets/imgs/slider/logo/electroline.png" style={{        }} alt="brand" />
                </SwiperSlide>
                <SwiperSlide><img src="/assets/imgs/slider/logo/elpro.png" style={{         }} alt="brand" />
                </SwiperSlide>
                </div>
            </Swiper>
        </>
    )
}
