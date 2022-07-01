const defaults = {
    target: ['.js-swiper-case'],
};

class Slider {
    /**
     * @param {typeof defaults} options
     */
    constructor(options) {
        /** @type {typeof defaults} */
        this.options = { ...defaults, ...options };
        /** @type {typeof Swiper} */
        this.swiper = null;
        /** @type {HTMLElement} */
        this.target = document.querySelector(this.options.target);

        this.init();
    }

    init() {
        const counter = document.querySelector('.case__fraction');
        const updateCounter = (swiper) => {
            counter.innerHTML = `${swiper.realIndex + 1}/${
                swiper.slides.length
            }`;
        };
        /** @type {import('swiper').SwiperOptions} */
        const swiperOptions = {
            loop: false,
            speed: 500,
            allowTouchMove: true,
            slidesPerView: 'auto',
            centeredSlides: false,
            spaceBetween: 6,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
                renderBullet: (index, className) => {
                    const displayIndex = index + 1;
                    return `<p class="case-bullet ${className}">Case${displayIndex}</p>`;
                },
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            on: {
                init(swiper) {
                    updateCounter(swiper);
                },
                slideChange(swiper) {
                    updateCounter(swiper);
                },
            },
            breakpoints: {
                769: {
                    slidesPerView: 1,
                    centeredSlides: true,
                    spaceBetween: 0,
                },
            },
        };
        this.swiper = new Swiper(this.target, swiperOptions);
    }
}

new Slider();
