// СКРОЛЛ
import {default_scroll, get_current_screen} from './scroll.js'

function scroll(event) {
    const current_state = get_current_state()
    const isFiveScreen = get_current_screen() === 5
    const isDefaultOnFiveScreen = (current_state === 1 && event.deltaY < 0) || (current_state === 4 && event.deltaY > 0)
    const isDefault = !isFiveScreen || isDefaultOnFiveScreen
    if (isDefault) {
        default_scroll(event)
    }
    else {
        event.preventDefault()
        if (event.deltaY > 0) {
            // ВНИЗ
            set_state(current_state + 1) 
        }
        else if (event.deltaY < 0) {
            // ВВЕРХ
            set_state(current_state - 1)
        }
    }
}

window.addEventListener('wheel', scroll, { passive: false })

function get_current_state() {
    return $('.world_map').hasClass('world_map_hide') ? ($('.africa_map').hasClass('africa_map_hide') ? ($('.madagascar_map').hasClass('madagascar_map_logo') ? 4 : 3) : 2) : 1
}

function set_state(state) {
    switch(state) {
        case 1:
            $('.world_map').removeClass('world_map_hide')
            $('.africa_map').removeClass('africa_map_hide')
            $('.madagascar_map').removeClass('madagascar_map_logo')
            $('.fifth_screen_text').addClass('fifth_screen_text_hide')
            break
        case 2:
            $('.world_map').addClass('world_map_hide')
            $('.africa_map').removeClass('africa_map_hide')
            $('.madagascar_map').removeClass('madagascar_map_logo')
            $('.fifth_screen_text').addClass('fifth_screen_text_hide')
            break
        case 3:
            $('.world_map').addClass('world_map_hide')
            $('.africa_map').addClass('africa_map_hide')
            $('.madagascar_map').removeClass('madagascar_map_logo')
            $('.fifth_screen_text').addClass('fifth_screen_text_hide')
            break
        case 4:
            $('.world_map').addClass('world_map_hide')
            $('.africa_map').addClass('africa_map_hide')
            $('.madagascar_map').addClass('madagascar_map_logo')
            $('.fifth_screen_text').removeClass('fifth_screen_text_hide')
            break
    }
}

