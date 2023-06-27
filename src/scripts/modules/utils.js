export function utils() {
    /**
     * Открытие закрытие каталога
     */
    $('.btn.openMenuCatalog').on('click', () => {
        if ($('.catalog-menu').hasClass('show')) {
            $('.catalog-menu').removeClass('show');
            $('body').removeClass('fixed');
        } else {
            $('.catalog-menu').addClass('show');
            $('body').addClass('fixed');

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
        if (menu.hasClass('show')) {
            menu.removeClass('show')
            $(this).removeClass('hide')
            burgerText.text('меню')
        } else {
            burgerText.text('Скрыть')
            menu.addClass('show')
            $(this).addClass('hide')
        }

    })

    /**
     * Кнопка открытия аккардиона вакансий
     */
    $('.open-accordion.job').on('click', function () {
        if ($(this).hasClass('collapsed')) {
            $(this).text('Показать еще')
        } else {
            $(this).text('Скрыть')
        }
    })

    /**
     * Переключение картинок карточки товара
     * @param img
     */
    function changeImage(img) {

    }

    $('.photos .item-p').on('click', function () {
        const src = $(this).find('img').attr('src')
        changeImage(src)
    })

    document.ready(() => {

    })
}
