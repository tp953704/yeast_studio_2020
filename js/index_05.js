$(function(){
    $('.content_btn').on('click',function(){
        if($(window).width()<576){
            if($('.js-triggle').hasClass('d-none')){
                $('.area').css('height','120rem');
                $('.js-triggle').removeClass('d-none');
                $('.content_btn').find('.md-txt').html(closetxt);
            }else{
                $('.js-triggle').addClass('d-none');
                $('.area').css('height','0rem');
                $('.content_btn').find('.md-txt').html(opentxt);
                
            }
        }
    })
})