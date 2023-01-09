
// ymaps.ready(init);
// function init() {
//   var myMap = new ymaps.Map("map", {
//     center: [7.8381452, 98.29717508],
//     zoom: 15,
//     behaviors: ["drag"],
//   });
//   var myPlacemark = new ymaps.Placemark(
//     [7.83814381, 98.29881076],
//     {},
//     {
//       preset: "islands#redHomeIcon",
//     }
//   );
//   myMap.geoObjects.add(myPlacemark);
// }
// // 7.83824199890253,98.2987783468867
// // 7.83814381, 98.29881076
// // 'islands#blueHotelIcon'
let map_container = document.getElementById('map_container');
    let options_map = {
        once: true,//запуск один раз, и удаление наблюдателя сразу
        passive: true,
        capture: true
    };
    map_container.addEventListener('click', start_lazy_map, options_map);
    map_container.addEventListener('mouseover', start_lazy_map, options_map);
    map_container.addEventListener('touchstart', start_lazy_map, options_map);
    map_container.addEventListener('touchmove', start_lazy_map, options_map);

    let map_loaded = false;
    function start_lazy_map() {
        if (!map_loaded) {
            let map_block = document.getElementById('ymap_lazy');
            map_loaded = true;
            map_block.setAttribute('src', map_block.getAttribute('data-src'));
            map_block.removeAttribute('data_src');
            console.log('YMAP LOADED');
        }
    }