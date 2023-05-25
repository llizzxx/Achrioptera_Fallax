// СКРОЛЛ
import {Direction, default_scroll_function, get_current_screen, set_scroll_listeners} from './scroll.js'

function scroll_function(direction) {
    const current_state = get_current_state()
    const isFiveScreen = get_current_screen() === 5
    const isDefaultOnFiveScreen = (current_state === 1 && direction === Direction.UP) || (current_state === 4 && direction === Direction.DOWN)
    const isDefault = !isFiveScreen || isDefaultOnFiveScreen
    if (isDefault) {
        default_scroll_function(direction)
    }
    else {
        if (direction === Direction.UP) {
            set_state(current_state - 1)
        }
        else if (direction === Direction.DOWN) {
            set_state(current_state + 1) 
        }
    }
}

set_scroll_listeners(scroll_function)

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

