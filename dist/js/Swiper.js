var swiper = new Swiper('.swiper-container', {
    effect: 'cube', // 设置为截断效果
    slidesPerView: 1,
    loop: true,
    spaceBetween: 1000, // 调整为合适的负值，确保当前图片之外的图片不可见
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    cubeEffect: {
        slideShadows: true, // 设置为true以显示幻灯片的阴影
        shadow: true, // 设置为true以显示容器的阴影
        shadowOffset: 20, // 设置阴影的偏移量
        shadowScale: 0.94, // 设置阴影的缩放比例
    },
});
