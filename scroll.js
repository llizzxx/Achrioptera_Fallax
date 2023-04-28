const root = document.documentElement

function get_current_screen() {
    const screen_height = window.innerHeight
    return Math.ceil(root.scrollTop / screen_height);
}

function go_to_screen(screen) {
    const screen_height = window.innerHeight
    root.scrollTop = screen_height * screen
}

function select_move_direction(event) {
    event.preventDefault()
    const current_screen = get_current_screen()
    if (event.deltaY > 0) {
        go_to_screen(current_screen + 1) 
    }
    else if (event.deltaY < 0) {
        go_to_screen(current_screen - 1)
    }
}

window.addEventListener('wheel', select_move_direction, { passive: false })
