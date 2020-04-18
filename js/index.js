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
        console.log(1)
    })
    $('.burger').on('click',function(){
        let $parent = $('.mobile_menu').parent();
        $parent.toggleClass('d-none');
        $('.BG').toggleClass('d-none');
    })
    $('.mobile_menu_1').find('span').on('click',function(){
        let $parent = $('.mobile_menu').parent();
        $parent.toggleClass('d-none');
        $('.BG').toggleClass('d-none');
    })
    
})
const phoneonoff=($dom,opentxt,closetxt)=>{
    console.log($(window).width())
    if($(window).width()<576){
        console.log($dom)
        if($dom.hasClass('d-none')){
            $dom.removeClass('d-none');
            $('.content_btn').find('.md-txt').html(closetxt);
        }else{
            $dom.addClass('d-none');
            $('.content_btn').find('.md-txt').html(opentxt);
            
        }
    }
}