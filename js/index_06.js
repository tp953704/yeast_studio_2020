$(function(){
    $('.magicpen').on('mousedown',function(){
        $(this).addClass('d-none');
        setInterval(() => {
            $(this).removeClass('d-none');
        }, 2000);
        
    })
    $('.side').on('mouseup',function(){
        console.log(1)
        $(this).find('a').find('span').trigger('click');
    })
    
})