$(function(){
    // setInterval(function(){ 
    //     $('.line-bottom').toggleClass('move')
    //   }, 1000);
    $('.js-FK_a').on('click',function(){
        var lineBottom = $('.line-bottom').offset().left;
        var $that = $(this);
        var clickBottom = $that.offset().left;
        var $distance = clickBottom-lineBottom+8;
        $('.line-bottom').addClass('move')
        $('.move').css('transform','translate3d('+$distance+'px, 0, 0)');
        setTimeout(()=>{
            $that.siblings('a').find('span').trigger('click');
        },800);
    })
})