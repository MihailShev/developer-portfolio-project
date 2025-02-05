import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import 'swiper/css';

Swiper.use([Navigation]);
const projectsSwiper = new Swiper(".projects-swiper", {
    direction: "horizontal",
    navigation: {
        nextEl: ".projects-swiper-button-next",
        prevEl: ".projects-swiper-button-prev"
    },
    spaceBetween: 100
});