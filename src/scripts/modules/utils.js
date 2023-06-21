export function utils() {
    $('.btn.catalog').on('click', () => {

        if ($('.catalog-menu').hasClass('show')) {
            $('.catalog-menu').removeClass('show');
        } else {
            $('.catalog-menu').addClass('show');
        }
    })
}
