$(document).ready(function() {
    $('#img_female').click(function(event) {
        if(is_state_1()) {
            set_state_2()
            event.stopPropagation()
        }
    })
    $('#img_male').click(function(event) {
        if(is_state_1()) {
            set_state_3()
            event.stopPropagation()
        }
    })
    $('.second_screen').click(function() {
        if(!is_state_1()) {
            set_state_1()
        }
    })
})

function is_state_1() {
    return $('#img_female').hasClass('structure_img_female_1')
}

function is_state_2() {
    return $('#img_female').hasClass('structure_img_female_2')
}

function is_state_3() {
    return $('#img_female').hasClass('structure_img_female_3')
}

function set_state_1() {
    $('#img_female').removeClass('structure_img_female_2 structure_img_female_3')
    $('#img_female').addClass('structure_img_female_1')
    $('#img_male').removeClass('structure_img_male_2 structure_img_male_3')
    $('#img_male').addClass('structure_img_male_1')
}

function set_state_2() {
    $('#img_female').removeClass('structure_img_female_1 structure_img_female_3')
    $('#img_female').addClass('structure_img_female_2')
    $('#img_male').removeClass('structure_img_male_1 structure_img_male_3')
    $('#img_male').addClass('structure_img_male_2')
}

function set_state_3() {
    $('#img_female').removeClass('structure_img_female_1 structure_img_female_2')
    $('#img_female').addClass('structure_img_female_3')
    $('#img_male').removeClass('structure_img_male_1 structure_img_male_2')
    $('#img_male').addClass('structure_img_male_3')
}
