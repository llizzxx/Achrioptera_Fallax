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
    $('.second_screen').removeClass('second_screen_2 second_screen_3 white_screen')
    $('.second_screen').addClass('second_screen_1 ligth_blue_screen')
    $('.structure_text_female').addClass('structure_text_hide')
    $('.structure_text_male').addClass('structure_text_hide')
}

function set_state_2() {
    $('#img_female').removeClass('structure_img_female_1 structure_img_female_3')
    $('#img_female').addClass('structure_img_female_2')
    $('#img_male').removeClass('structure_img_male_1 structure_img_male_3')
    $('#img_male').addClass('structure_img_male_2')
    $('.second_screen').removeClass('second_screen_1 second_screen_3 ligth_blue_screen')
    $('.second_screen').addClass('second_screen_2 white_screen')
    $('.structure_text_female').removeClass('structure_text_hide')
    $('.structure_text_male').addClass('structure_text_hide')
}

function set_state_3() {
    $('#img_female').removeClass('structure_img_female_1 structure_img_female_2')
    $('#img_female').addClass('structure_img_female_3')
    $('#img_male').removeClass('structure_img_male_1 structure_img_male_2')
    $('#img_male').addClass('structure_img_male_3')
    $('.second_screen').removeClass('second_screen_1 second_screen_2 ligth_blue_screen')
    $('.second_screen').addClass('second_screen_3 white_screen')
    $('.structure_text_female').addClass('structure_text_hide')
    $('.structure_text_male').removeClass('structure_text_hide')
}






$(document).ready(function() {
    $('.little_white_color_1_position').click(function(event) {
        if(is_state_1_third_screen()) {
            set_state_2_third_screen()
            event.stopPropagation()
        }
    })
    $('.little_white_color_2_position').click(function(event) {
        if(is_state_1_third_screen()) {
            set_state_3_third_screen()
            event.stopPropagation()
        }
    })
    $('.little_white_color_3_position').click(function(event) {
        if(is_state_1_third_screen()) {
            set_state_4_third_screen()
            event.stopPropagation()
        }
    })
    $('.third_screen').click(function() {
        if(!is_state_1_third_screen()) {
            set_state_1_third_screen()
        }
    })
})

function is_state_1_third_screen() {
    return $('.protection_container').hasClass('protection_container_1')
}

function is_state_2_third_screen() {
    return $('.protection_container').hasClass('protection_container_2')
}

function is_state_3_third_screen() {
    return $('.protection_container').hasClass('protection_container_3')
}

function is_state_4_third_screen() {
    return $('.protection_container').hasClass('protection_container_4')
}

function set_state_1_third_screen() {
    $('.third_screen').removeClass('third_screen_state_234 white_screen')
    $('.third_screen').addClass('third_screen_state_1 light_blue_screen')
    $('.little_white_color_position').removeClass('little_white_color_hide')
    $('.protection_info_1').addClass('protection_info_hide')
    $('.protection_info_2').addClass('protection_info_hide')
    $('.protection_info_3').addClass('protection_info_hide')
    $('.protection_container').addClass('protection_container_1')
    $('.protection_container').removeClass('protection_container_2 protection_container_3 protection_container_4')
}

function set_state_2_third_screen() {
    $('.third_screen').removeClass('third_screen_state_1 light_blue_screen')
    $('.third_screen').addClass('third_screen_state_234 white_screen')
    $('.little_white_color_position').addClass('little_white_color_hide')
    $('.protection_info_1').removeClass('protection_info_hide')
    $('.protection_container').addClass('protection_container_2')
    $('.protection_container').removeClass('protection_container_1 rotection_container_3 protection_container_4')
}

function set_state_3_third_screen() {
    $('.third_screen').removeClass('third_screen_state_1 light_blue_screen')
    $('.third_screen').addClass('third_screen_state_234 white_screen')
    $('.little_white_color_position').addClass('little_white_color_hide')
    $('.protection_info_2').removeClass('protection_info_hide')
    $('.protection_container').addClass('protection_container_3')
    $('.protection_container').removeClass('protection_container_1 protection_container_2 protection_container_4')
}

function set_state_4_third_screen() {
    $('.third_screen').removeClass('third_screen_state_1 light_blue_screen')
    $('.third_screen').addClass('third_screen_state_234 white_screen')
    $('.little_white_color_position').addClass('little_white_color_hide')
    $('.protection_info_3').removeClass('protection_info_hide')
    $('.protection_container').addClass('protection_container_4')
    $('.protection_container').removeClass('protection_container_1 protection_container_2 protection_container_3')
}