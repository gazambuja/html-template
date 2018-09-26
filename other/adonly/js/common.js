$(document).ready(function($){
    equalHeight('.box-advan .item');
    //equalHeight('.box-focus .item');
    $('.list-catalog .data:not(:first)').hide();
    $('h3.title:first').addClass('active');
    $('h3.title').click(function(){$('h3.title').removeClass('active');
        $('.list-catalog .data').slideUp('normal');
        if($(this).next('.data').is(':hidden')==true){$(this).addClass('active');
            $(this).next('.data').slideDown('normal');}
    });
    jQuery('.parSlider').advSlider({
        snapToChildren: true,
        desktopClickDrag: true,
        infiniteSlider: true,
        snapSlideCenter: false,
        autoSlide: true,
        autoSlideTimer: 3000,
        navPrevSelector: jQuery('.btn-prev'),
        navNextSelector: jQuery('.btn-next')
    });
});
function scrollToItem(e, t) {
    $("html, body").animate({
        scrollTop: $(e).offset().top
    }, t);
    $(e).find("h3.title").addClass('active');
    $(e).find(".data").css({display:"block"});
}
function equalHeight(e) {
    minheight = 0;
    $(e).each(function() {
        thisheight = $(this).height();
        if (thisheight > minheight) {
            minheight = thisheight
        }
    });
    $(e).css("min-height", minheight)
}

function changePassword(arg){
    if(arg){
        $("#changePass").stop().show(500);
        $("#changePass input").removeAttr('disabled','disabled');
    }else{
        $("#changePass").stop().hide(500);
        $("#changePass input").attr('disabled','disabled');
    }
}