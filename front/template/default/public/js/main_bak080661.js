$(document).ready(function() {
    $('#modalformalert').each(function() {
        $('#modalformalert').modal('show');
    });
    // var wframe = $('.frame-output .title').width();
    // $('.frame-output .title p').css('font-size',wframe / 24);
    // $('.frame-output .desc p').css('font-size',wframe / 28);
    // $('.frame-output .footer p').css('font-size',wframe / 40);
    // $('.frame-output .footer strong').css('font-size',wframe / 40);
    // var wframe = $('.frame-layout').width();
    // var hframe = $('.frame-layout').height();


    // $('.percircle').percircle();


    $('.datepicker').datepicker({
        dateFormat: 'dd-mm-yy',
        showOn: 'focus',
        buttonImage: '../img/calendar/calendar.gif',
        buttonImageOnly: true,
        dayNamesMin: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
        monthNamesShort: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'],
        changeMonth: true,
        changeYear: true,
        beforeShow: function() {
            dateBefore = null;
            if (jQuery(this).val() != "") {
                var arrayDate = jQuery(this).val().split("-");
                arrayDate[2] = parseInt(arrayDate[2]) - 543;
                jQuery(this).val(arrayDate[0] + "-" + arrayDate[1] + "-" + arrayDate[2]);
            }
            setTimeout(function() {
                $.each(jQuery(".ui-datepicker-year option"), function(j, k) {
                    var textYear = parseInt(jQuery(".ui-datepicker-year option").eq(j).val()) + 543;
                    jQuery(".ui-datepicker-year option").eq(j).text(textYear);
                });
            }, 50);

        },
        onSubmit: function() {
            alert("test");
        },
        onChangeMonthYear: function() {
            setTimeout(function() {
                $.each(jQuery(".ui-datepicker-year option"), function(j, k) {
                    var textYear = parseInt(jQuery(".ui-datepicker-year option").eq(j).val()) + 543;
                    jQuery(".ui-datepicker-year option").eq(j).text(textYear);
                });
            }, 50);
        },
        onClose: function() {
            if (dateBefore == null) {
                dateBefore = jQuery(this).val();
            }

            if (jQuery(this).val() != "" && jQuery(this).val() == dateBefore) {
                var arrayDate = dateBefore.split("-");
                arrayDate[2] = parseInt(arrayDate[2]) + 543;
                jQuery(this).val(arrayDate[0] + "-" + arrayDate[1] + "-" + arrayDate[2]);

            }
        },
        onSelect: function(dateText, inst) {
            dateBefore = jQuery(this).val();
            var arrayDate = dateText.split("-");
            arrayDate[2] = parseInt(arrayDate[2]) + 543;
            jQuery(this).val(arrayDate[0] + "-" + arrayDate[1] + "-" + arrayDate[2]);
        }
    });



    $('.select-control').select2({
        minimumResultsForSearch: Infinity
    });


    $('.tab-collapse').tabCollapse();
    $('.tab-collapse-sm').tabCollapse({
        tabsClass: 'visible-lg visible-md visible-sm hidden-xs',
        accordionClass: 'visible-xs'
    });


    $("[data-fancybox]").fancybox({
        thumbs: false,
        slideShow: false,
        fullScreen: false
    });


    $('.top-graphic .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        center: false,
        smartSpeed: 1500,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
    });
    // $('.top-graphic').delay(800)
    //         .animate({
    //             "opacity":"1"
    //     }, {
    //           queue: true,
    //           duration: 800    
    // });

    var frameListItems = $('.frame-list .owl-carousel .item').length;
    $('.frame-list .owl-carousel').owlCarousel({
        items: frameListItems > 5,
        loop: false,
        margin: 5,
        nav: true,
        dots: false,
        center: false,
        smartSpeed: 600,
        autoplay: false,
        navText: ['<span class="fa fa-angle-double-left" aria-hidden="true"></span>', '<span class="fa fa-angle-double-right" aria-hidden="true"></span>'],
        responsive: {
            0: {
                items: 2,
                items: frameListItems > 2
            },
            576: {
                items: 3,
                items: frameListItems > 3
            },
            768: {
                items: 6,
                items: frameListItems > 6
            }
        }
    });

    var frameLaySeItems = $('.frame-layout-select .owl-carousel .item').length;
    $('.frame-layout-select .owl-carousel').owlCarousel({
        items: 6,
        loop: frameLaySeItems > 6,
        margin: 20,
        nav: true,
        dots: false,
        center: false,
        smartSpeed: 600,
        autoplay: false,
        navText: ['<span class="fa fa-angle-double-left" aria-hidden="true"></span>', '<span class="fa fa-angle-double-right" aria-hidden="true"></span>'],
        responsive: {
            0: {
                items: 2,
                loop: frameLaySeItems > 2,
                margin: 10
            },
            576: {
                items: 4,
                loop: frameLaySeItems > 4,
                margin: 10
            },
            993: {
                items: 6,
                loop: frameLaySeItems > 6
            }
        }
    });


    $(window).scroll(function() {
        if ($(window).scrollTop() > $('.site-header-topbar').height()) {
            $('.site-header').addClass('tiny');
        } else {
            $('.site-header').removeClass('tiny');
        }
    });


    $('.btn-mobile').click(function() {
        $('.site-header-main .main-menu').toggleClass('open');
        $('.site-header').toggleClass('position');
        $(this).toggleClass('close');
    });


    $('.sidemenu-mobile .link').click(function() {
        $('.default-sidebar').addClass('open');
        $('.site-container').css('z-index', '100');
    });
    $('.default-sidebar .header .link-close').click(function() {
        $('.default-sidebar').removeClass('open');
        $('.site-container').css('z-index', '50');
    });


    $('.wg-news .slide .owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        nav: false,
        dots: true,
        smartSpeed: 1200,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
    });

    $('.wg-issue .slide .owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        nav: false,
        dots: true,
        smartSpeed: 1200,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
    });

	//var lenBanner = $('.wg-banner-slider li').length;
	//if(lenBanner > 5){
	//	$bannerLoop = true;
	//}else{
	//	$bannerLoop = false;
	//}
    $('.wg-banner-slider .slide .owl-carousel').owlCarousel({
        loop: false,
        margin: 0,
        items: 1,
        nav: false,
        dots: true,
        smartSpeed: 1200,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
    });



    //---------- main-page
    $('.wg-news-pin .owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        items: 1,
        nav: false,
        dots: true,
        smartSpeed: 1200,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
    });
    $('.wg-issue .owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        nav: false,
        dots: true,
        smartSpeed: 1200,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
    });
    var wgtcItems = $('.wg-tcnews .owl-carousel .item').length;
    $('.wg-tcnews .owl-carousel').owlCarousel({
        loop: wgtcItems > 3,
        margin: 0,
        items: 3,
        nav: false,
        dots: true,
        smartSpeed: 1200,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                loop: wgtcItems > 1
            },
            768: {
                items: 2,
                loop: wgtcItems > 2
            },
            1200: {
                items: 3,
                loop: wgtcItems > 3
            }
        }
    });
    var wgdItemsInfog = $('.wg-doc-slide .wg-doc.type2 .owl-carousel .item').length;
    $('.wg-doc-slide .wg-doc.type2 .owl-carousel').owlCarousel({
        loop: wgdItemsInfog > 1,
        margin: 10,
        items: 1,
        nav: false,
        dots: true,
        smartSpeed: 1200,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });
    var wgdItems = $('.wg-doc .owl-carousel .item').length;
    $('.wg-doc .owl-carousel').owlCarousel({
        loop: wgdItems > 4,
        margin: 10,
        items: 4,
        nav: false,
        dots: true,
        smartSpeed: 1200,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2,
                loop: wgdItems > 4
            },
            767: {
                items: 4,
                loop: wgdItems > 4
            },
            1200: {
                items: 4,
                loop: wgdItems > 4
            }
        }
    });
    $('.wg-bannerslide .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        items: 1,
        nav: false,
        dots: true,
        smartSpeed: 1200,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
    });


    $(".mcscroll").mCustomScrollbar({
        axis: "y",
        scrollButtons: {
            enable: true
        }
    });


    $('.wg-vdo .slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.wg-vdo .slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        asNavFor: '.wg-vdo .slider-for',
        dots: true,
        arrows: false,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 575,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }]
    });


    $('.gallery-detail .slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.gallery-detail .slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        asNavFor: '.gallery-detail .slider-for',
        dots: true,
        arrows: false,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 575,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }]
    });


    $('.news-pin .owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        items: 1,
        nav: false,
        dots: true,
        smartSpeed: 1200,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
    });

    var nrItems = $('.news-relate .owl-carousel .item').length;
    $('.news-relate .owl-carousel').owlCarousel({
        loop: nrItems > 4,
        margin: 20,
        items: 4,
        nav: false,
        dots: true,
        smartSpeed: 1200,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                loop: nrItems > 1
            },
            576: {
                items: 2,
                loop: nrItems > 2
            },
            768: {
                items: 2,
                loop: nrItems > 2
            },
            992: {
                items: 4,
                loop: nrItems > 4
            }
        }
    });

    var ilItems = $('.information .owl-carousel .item').length;
    $('.information-list .owl-carousel').owlCarousel({
        loop: ilItems > 5,
        margin: 0,
        items: 5,
        slideBy: 5,
        nav: false,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        dots: true,
        smartSpeed: 300,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                loop: ilItems > 1
            },
            576: {
                items: 2,
                loop: ilItems > 2
            },
            767: {
                items: 3,
                loop: ilItems > 3
            },
            1200: {
                items: 5,
                loop: ilItems > 5
            }
        }
    });

    var wgbItems = $('.wg-banner .owl-carousel .item').length;
    $('.wg-banner .owl-carousel').owlCarousel({
        loop: wgbItems > 3,
        margin: 20,
        items: 3,
        nav: false,
        dots: true,
        smartSpeed: 1200,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                loop: wgbItems > 1
            },
            576: {
                items: 2,
                loop: wgbItems > 2
            },
            767: {
                items: 3,
                loop: wgbItems > 3
            }
        }
    });


    $('.intro-img .slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        vertical: false,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1200
    });


    $('.wg-tc .slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        vertical: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 800
    });

    $('.wg-ia .slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        vertical: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 800
    });

    var rpDgItems = $('.reportDe-gallery .owl-carousel .item').length;
    $('.reportDe-gallery .owl-carousel').owlCarousel({
        loop: rpDgItems > 4,
        margin: 20,
        items: 4,
        nav: false,
        dots: true,
        smartSpeed: 1200,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                loop: rpDgItems > 1
            },
            576: {
                items: 2,
                loop: rpDgItems > 2
            },
            768: {
                items: 2,
                loop: rpDgItems > 2
            },
            992: {
                items: 4,
                loop: rpDgItems > 4
            }
        }
    });

    var newgItems = $('.news-gallery .owl-carousel .item').length;
    $('.news-gallery .owl-carousel').owlCarousel({
        loop: newgItems > 4,
        margin: 20,
        items: 4,
        nav: false,
        dots: true,
        smartSpeed: 1200,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                loop: newgItems > 1
            },
            576: {
                items: 2,
                loop: newgItems > 2
            },
            768: {
                items: 2,
                loop: newgItems > 2
            },
            992: {
                items: 4,
                loop: newgItems > 4
            }
        }
    });

    var boardgItems = $('.board-gallery .owl-carousel .item').length;
    $('.board-gallery .owl-carousel').owlCarousel({
        loop: boardgItems > 4,
        margin: 20,
        items: 4,
        nav: false,
        dots: true,
        smartSpeed: 1200,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                loop: boardgItems > 1
            },
            576: {
                items: 2,
                loop: boardgItems > 2
            },
            768: {
                items: 2,
                loop: boardgItems > 2
            },
            992: {
                items: 4,
                loop: boardgItems > 4
            }
        }
    });

    var wgRssListItems = $('.wg-rss-list .owl-carousel .item').length;
    $('.wg-rss-list .owl-carousel').owlCarousel({
        loop: wgRssListItems > 4,
        margin: 20,
        items: 4,
        nav: false,
        dots: true,
        smartSpeed: 1200,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                loop: wgRssListItems > 1
            },
            576: {
                items: 2,
                loop: wgRssListItems > 2
            },
            768: {
                items: 3,
                loop: wgRssListItems > 3
            },
            992: {
                items: 4,
                loop: wgRssListItems > 4
            }
        }
    });

    $('.login-form').delay(1000).animate({
        opacity: 1
    }, 800);


    // var fixedBreak = $('.fixed-break').offset();
    // $(window).scroll(function() {
    //     if($(window).scrollTop() >= fixedBreak) { 
    //         $('.fixed-break').addClass('fixed');
    //     }
    //     else{
    //         $('.fixed-break').removeClass('fixed');
    //     }
    // });


    $('.sitemap-list').isotope({
        itemSelector: '.item',
        percentPosition: true,
        layoutMode: 'fitRows',
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.item'
        }
        // getSortData: {
        //     number: '.number parseInt'
        // },
        // sortBy : 'number'
    });

    var defaultW = $('.default-wrapper').height();
    $('.default-body').css('min-height', defaultW - 80);


    $('.dot-overflow').dotdotdot();
    $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        $('.dot-overflow').dotdotdot();
    });
    $('.site-header-topbar .nav-size a').on('shown.bs.tab', function(e) {
        $('.dot-overflow').dotdotdot();
    });


    var frameEx = $('.frame-ex').height();
    $('.frame-form').css('min-height', frameEx);


    jQuery(function() {
        var classFontSize = new Array();
        var txtFontSize = new Array();
        var nameClassFont = new Array();

        nameClassFont.push('.wg-news-pin .item-list .date');
        nameClassFont.push('.wg-news-pin .item-list .title');
        nameClassFont.push('.wg-news-pin .item-list .desc');
        nameClassFont.push('.wg-news-list .item-list .date');
        nameClassFont.push('.wg-news-list .item-list .title');
        nameClassFont.push('.wg-news-list .item-list .desc');

        nameClassFont.push('.wg-tc .item-list .title');

        nameClassFont.push('.wg-tcnews .item-list .date');
        nameClassFont.push('.wg-tcnews .item-list .title');

        nameClassFont.push('.wg-newstab .item-list .title');
        nameClassFont.push('.wg-newstab .item-list .desc');

        nameClassFont.push('.wg-ia .item-list .title');

        nameClassFont.push('.wg-rss-list .title');
        nameClassFont.push('.wg-rss-list .desc');

        nameClassFont.push('.wg-beach .item-list .title');
        nameClassFont.push('.wg-beach .item-list .desc');

        nameClassFont.push('.wg-vote .desc');
        nameClassFont.push('.wg-vote .radio-control .txt');

        nameClassFont.push('.download-list .title');
        nameClassFont.push('.download-list .info');

        nameClassFont.push('.news-pin .item-list .date');
        nameClassFont.push('.news-pin .item-list .title');
        nameClassFont.push('.news-pin .item-list .desc');
        nameClassFont.push('.news-list .item-list .date');
        nameClassFont.push('.news-list .item-list .title');
        nameClassFont.push('.news-list .item-list .desc');

        nameClassFont.push('.wg-banner .item-list .title');
        nameClassFont.push('.wg-banner .item-list .desc');

        nameClassFont.push('.information-list-1 .item-list .title');

        nameClassFont.push('.filter .form-default > .control-label');

        nameClassFont.push('.doc-list .item-list .title');
        nameClassFont.push('.doc-list .item-list .desc');

        nameClassFont.push('.detail-doc .info .control-label');
        nameClassFont.push('.detail-doc .info .desc');

        nameClassFont.push('.multi-list .item-list .title');

        nameClassFont.push('.contact-header .com-address .title h2');
        nameClassFont.push('.contact-header .com-address .title p');
        nameClassFont.push('.contact-header .address-info .inner');
        nameClassFont.push('.contact-header .complaint .desc');
        nameClassFont.push('.contact-list .wrapper a');

        nameClassFont.push('.breadcrumb > li, .breadcrumb > li a');

        nameClassFont.push('.login-form .footer a');
        nameClassFont.push('.login-form .regis p');

        nameClassFont.push('.register-side .inner .title');
        nameClassFont.push('.register-side .inner .desc');
        nameClassFont.push('.register-step1 .editor-content p');
        nameClassFont.push('.register-step3 .title');
        nameClassFont.push('.register-step3 .desc');

        nameClassFont.push('.profile-info .desc');
        nameClassFont.push('.profile .member-info .control-label');
        nameClassFont.push('.profile .member-info span');
        nameClassFont.push('.forum-list.-manage .item-list .title');
        nameClassFont.push('.forum-list.-manage .item-list .info');
        nameClassFont.push('.forum-list .item-list .title');
        nameClassFont.push('.forum-list .item-list .desc');
        nameClassFont.push('.forum-list .item-list .info li');

        nameClassFont.push('.publish-list .title');
        nameClassFont.push('.publish-list .desc');
        nameClassFont.push('.publish-list .info li');

        nameClassFont.push('.bookingList .title');
        nameClassFont.push('.bookingList .desc');

        nameClassFont.push('.information-detail .table th');
        nameClassFont.push('.information-detail .table td');

        nameClassFont.push('.report-list .item-list .title');
        nameClassFont.push('.report-list .item-list .desc');
        nameClassFont.push('.report-list .item-list .info');

        nameClassFont.push('.questionare-list .title');
        nameClassFont.push('.questionare-list .desc');
        nameClassFont.push('.questionare-list .action .help-block');
        nameClassFont.push('.questionare-detail .header .title');
        nameClassFont.push('.questionare-detail .header .desc');
        nameClassFont.push('.questionare-detail .control-label');

        nameClassFont.push('.radio-filter h3');
        nameClassFont.push('.radio-filter p');
        nameClassFont.push('.radio-list .item-list .title');
        nameClassFont.push('.radio-list .item-list .desc');

        nameClassFont.push('.vdo-pin .title');
        nameClassFont.push('.vdo-pin .desc');
        nameClassFont.push('.vdo-list .date');
        nameClassFont.push('.vdo-list .title');
        nameClassFont.push('.vdo-list .desc');

        nameClassFont.push('.station-detail .comment-list .title');
        nameClassFont.push('.station-detail .comment-list .date');
        nameClassFont.push('.station-detail .editor-content p');

        nameClassFont.push('.campaign-select .control-label');
        nameClassFont.push('#uploadFile');

        nameClassFont.push('.clip-list .item-list .title');
        nameClassFont.push('.clip-list .item-list .desc');

        nameClassFont.push('.gallery-list .item-list .title');
        nameClassFont.push('.gallery-list .item-list .desc');

        nameClassFont.push('');
        nameClassFont.push('');
        nameClassFont.push('');
        nameClassFont.push('');
        nameClassFont.push('');
        nameClassFont.push('');
        nameClassFont.push('');
        nameClassFont.push('');

        for (var i = 0; i < nameClassFont.length; i++) {
            classFontSize.push(nameClassFont[i]);
            txtFontSize.push(parseInt($(nameClassFont[i]).css('font-size')));
        }

        $('a.fzSmall').click(function() {
            for (var i = 0; i < classFontSize.length; i++) {
                $(classFontSize[i]).css("font-size", txtFontSize[i] + "px");
            }
            $(this).addClass('active');
            $('a.fzMedium').removeClass('active');
            $('a.fzLarge').removeClass('active');
        });

        $('a.fzMedium').click(function() {
            for (var i = 0; i < classFontSize.length; i++) {
                $(classFontSize[i]).css("font-size", (txtFontSize[i] + parseInt(2)) + "px");
            }
            $(this).addClass('active');
            $('a.fzSmall').removeClass('active');
            $('a.fzLarge').removeClass('active');
        });

        $('a.fzLarge').click(function() {
            for (var i = 0; i < classFontSize.length; i++) {
                $(classFontSize[i]).css("font-size", (txtFontSize[i] + parseInt(4)) + "px");
            }
            $(this).addClass('active');
            $('a.fzSmall').removeClass('active');
            $('a.fzMedium').removeClass('active');
        });
    });

});


jQuery().ready(function() {});