export function map() {
    ymaps.ready(init);

    function init() {
        // Создание карты.
        let center = [53.50425306146371, 49.300817274648665]
        let myMap = new ymaps.Map("map", {
            center: center,
            zoom: 13,
        });

        let placemark = new ymaps.Placemark(center, {}, {
            iconLayout: "default#image",
            iconImageHref: '/src/images/logos/map.svg',
            iconImageSize: [34, 30],
            iconImageOffset: [-17, -30]
        })

        myMap.geoObjects.add(placemark)
        myMap.controls.remove('geolocationControl'); // удаляем геолокацию
        myMap.controls.remove('searchControl'); // удаляем поиск
        myMap.controls.remove('trafficControl'); // удаляем контроль трафика
        myMap.controls.remove('typeSelector'); // удаляем тип
        myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
        {
            myMap.controls.remove('rulerControl'); // удаляем контрол правил
            myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
        }
    }
}
