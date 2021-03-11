$(document).ready(function(){
    $('.header__block a').click(function(){
        $('.popup').addClass('open');
    });

    $('.popup__close').click(function(){
        $('.popup').removeClass('open');
    });

    $('.list__btns a').click(function(){
        $('.error').addClass('active');
    });

    $('.popup__close').click(function(){
        $('.error').removeClass('active');
    });

    $('.arrears-btn').click(function(){
        $('.arrears').addClass('active');
    });

    $('.popup__close').click(function(){
        $('.arrears').removeClass('active');
    });

    function calcCount() {
        var show = true;
        var countbox = ".association__titles";
        $(window).on("scroll load resize", function () {
            if (!show) return false;
            var w_top = $(window).scrollTop(); 
            var e_top = $(countbox).offset().top; 
            var w_height = $(window).height(); 
            var d_height = $(document).height(); 
         if (w_height + 500 >= e_top || d_height + 500 >= e_top) {   
        
            $('.number').css('opacity', '1');
            $('.number').spincrement({
                thousandSeparator: "",
                duration: 1200,
                thousandSeparator: ','
            });
             
            show = false;
        }
    });

    }

    calcCount();
});

