export function utils() {
    /**
     * Открытие закрытие каталога
     */
    $('.btn.catalog').on('click', () => {
        if ($('.catalog-menu').hasClass('show')) {
            $('.catalog-menu').removeClass('show');
        } else {
            $('.catalog-menu').addClass('show');
        }
    })

    /**
     * Уведомление о cookie
     */
    function checkCookies() {
        let cookieDate = localStorage.getItem('cookieDate');
        let cookieNotification = $('.cookie-notification')
        let cookieBtn = cookieNotification.find('.acceptCookie');

        if (!cookieDate || (+cookieDate + 31536000000) < Date.now()) {
            cookieNotification.addClass('show');
        }

        cookieBtn.on('click', function () {
            localStorage.setItem('cookieDate', Date.now());
            cookieNotification.removeClass('show');
        })
    }

    checkCookies();

    /**
     * Мобильное меню
     */

    $('.burger-menu').on('click', function () {
        const menu = $('.mobile-menu')
        const burgerText = $(this).find('p')
        if(menu.hasClass('show')){
            menu.removeClass('show')
            $(this).removeClass('hide')
            burgerText.text('меню')
        } else {
            burgerText.text('Скрыть')
            menu.addClass('show')
            $(this).addClass('hide')
        }

    })
}
