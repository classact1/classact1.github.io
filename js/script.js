$(document).ready(function () {
    
    $(document).on('click', 'a.goto', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 50
        }, 1500, 'easeInOutExpo');
    });
    
    $(window).scroll(function () {
        
            var scrollTop = $(window).scrollTop();
            if (scrollTop > 50) {
                $('.navbar').css({padding: "7px 0"});
            }
            else {
                $('.navbar').css({padding: "25px 0"});   
            }
        
        
    });
    
    $('body').scrollspy({ 
        target: '.navbar',
        offset: 62
    });
    
})



