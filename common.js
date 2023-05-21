window.addEventListener('scroll', event => {
    const current_scroll = document.documentElement.scrollTop
    if (current_scroll < 300) {
        $('.arrow_up').addClass('arrow_up_hide')
    }
    else {
        $('.arrow_up').removeClass('arrow_up_hide')
    }
})

$(document).ready(() => {
	$('.arrow_up').on('click', event => {
        document.documentElement.scrollTop = 0
    })
})

