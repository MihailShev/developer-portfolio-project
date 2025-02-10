import Swiper from "swiper";
import { Navigation, Keyboard } from "swiper/modules";
import 'swiper/css';

Swiper.use([Navigation, Keyboard]);
const projectsSwiper = new Swiper(".projects-swiper", {
    direction: "horizontal",
    navigation: {
        nextEl: ".projects-swiper-button-next",
        prevEl: ".projects-swiper-button-prev"
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true
    },
    spaceBetween: 100
});