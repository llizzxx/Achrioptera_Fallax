export function get_current_screen() {
    const screen_height = window.innerHeight
    return Math.ceil(document.documentElement.scrollTop / screen_height);
}

export function go_to_screen(screen) {
    const screen_height = window.innerHeight
    document.documentElement.scrollTop = screen_height * screen
}

export function default_scroll(event) {
    event.preventDefault()
    const current_screen = get_current_screen()
    if (event.deltaY > 0) {
        go_to_screen(current_screen + 1) 
    }
    else if (event.deltaY < 0) {
        go_to_screen(current_screen - 1)
    }
}

