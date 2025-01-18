document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.swiper', {
        loop: true, // Бесконечная прокрутка
        slidesPerView: 'auto', // Показывать 2 карточки + часть следующей
        spaceBetween: 24, // Отступы между слайдами
        // centeredSlides: true, // Центрируем активный слайд
        grabCursor: true, // Курсор в виде "руки"

        // Автопрокрутка
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            reverseDirection: true
        },

        // Стрелки управления
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // Точки навигации
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Адаптивность
        breakpoints: {
            320: {
                slidesPerView: 1.1, // 1 карточка + кусок следующей
                spaceBetween: 16,
            },
            768: {
                slidesPerView: 1.5, // 1.5 карточки
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 2.2, // 2 карточки + кусок третьей
                spaceBetween: 24,
            }
        }
    });
});
