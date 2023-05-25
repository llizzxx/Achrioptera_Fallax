export function get_current_screen() {
    const screen_height = window.innerHeight
    return Math.ceil(document.documentElement.scrollTop / screen_height)
}

export function go_to_screen(screen) {
    const screen_height = window.innerHeight
    document.documentElement.scrollTop = screen_height * screen
}

export const Direction = {
    UP: 'up',
    DOWN: 'down'
}

export function default_scroll_function(direction) {
    const current_screen = get_current_screen()
    if (direction === Direction.UP) {
        go_to_screen(current_screen - 1)
    }
    else if (direction === Direction.DOWN) {
        go_to_screen(current_screen + 1) 
    }
}

function wheel_listener(event, scroll_function) {
    event.preventDefault()

    if (event.deltaY < 0) {
        scroll_function(Direction.UP)
    }
    else if (event.deltaY > 0) {
        scroll_function(Direction.DOWN)
    }
}

function keydown_listener(event, scroll_function) {
    const upCodes = ['ArrowUp', 'PageUp'];
    const downCodes = ['ArrowDown', 'PageDown', 'Space'];

    if (upCodes.includes(event.code)) {
        event.preventDefault()

        if (!event.repeat) {
            scroll_function(Direction.UP)
        }
    }
    else if (downCodes.includes(event.code)) {
        event.preventDefault()

        if (!event.repeat) {
            scroll_function(Direction.DOWN)
        } 
    }
}

function touchstart_listener(touchstart_event, scroll_function) {
    if (touchstart_event.touches.length > 1) {
        return
    }

    const touch_start_Y = touchstart_event.changedTouches[0].screenY

    const touchend_listener = touchend_event => {
        window.removeEventListener('touchend', touchend_listener)

        if (touchend_event.touches.length > 1) {
            return
        }

        const touch_end_Y = touchend_event.changedTouches[0].screenY
        
        if (touch_end_Y > touch_start_Y) {
            scroll_function(Direction.UP)
        }
        else if (touch_end_Y < touch_start_Y) {
            scroll_function(Direction.DOWN)
        }   
    }

    window.addEventListener('touchend', touchend_listener)
}

export function set_scroll_listeners(scroll_function) {
    window.addEventListener('wheel', event => wheel_listener(event, scroll_function), { passive: false })
    window.addEventListener('keydown', event => keydown_listener(event, scroll_function))
    window.addEventListener('touchstart', event => touchstart_listener(event, scroll_function))
    window.addEventListener('touchmove', event => event.preventDefault(), { passive: false })
}

