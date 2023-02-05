$(document).ready(function(){
    // ######################################################################################### Start Cookie ##################################################################################################

    // var sitename = "unknown-browser";
    // if (navigator.userAgent.indexOf("MSIE") != -1 || navigator.userAgent.indexOf("rv:11.0") != -1) {
    //     sitename = "msie";
    // } else if (navigator.userAgent.indexOf("Edge") != -1) {
    //     sitename = "microsoft-edge";
    // } else if (navigator.userAgent.indexOf("Firefox") != -1) {
    //     sitename = "firefox";
    // } else if (navigator.userAgent.indexOf("Opera") != -1) {
    //     sitename = "opera";
    // } else if (navigator.userAgent.indexOf("Chrome") != -1) {
    //     sitename = "chrome";
    // } else if (navigator.userAgent.indexOf("Safari") != -1) {
    //     sitename = "safari";
    // }
    // console.log(sitename);

    var url_pdpa = "";
    var base = $("base").attr("href");

    $.ajax({
        url: base + "/pdpa/get_cookieconsent",
        async: false,
        success: function(result) {
            var result = JSON.parse(result);
            url_pdpa = result.url_pdpa;
            // console.log(result.token_statuscode);
            // console.log(result.secretkey);
            // console.log(atob($.cookie("KEY")));
            // return false;
            if (typeof $.cookie("CONSENT") === "undefined" || atob($.cookie("KEY")) != result.secretkey) {
                $('.cookieconsent').html(result.html);
                $('.cookieconsent').show();
                // $.removeCookie('CONSENT', { path: '/' });
                // $.removeCookie('KEY', { path: '/' });
            } else {
                $('.cookieconsent').hide();
            }
        }
    });

    $(document).on('click', '.acceptCookie', function() {
        var date = new Date();
        var day = 90;
        var hour = 24;
        var minutes = 60;
        var Accept = $(this).data('accept');
        // var Token = $('#unknows').data('whatis');

        if (Accept == 'Accept') {
            $.ajax({
                url: base + "/pdpa/accept_cookieconsent",
                success: function(result) {
                    var result = JSON.parse(result);
                    if (result.statuscode == 201) {
                        date.setTime(date.getTime() + (day * (hour * minutes * 60 * 1000)));
                        $.cookie('CONSENT', true, {
                            expires: date,
                            path: '/'
                        });
                        $.cookie('KEY', btoa(result.secretkey), {
                            expires: date,
                            path: '/'
                        });
                        $('.cookieconsent').hide();
                    } else {
                        return false;
                    }
                }
            });
        }
    });



    // // GET_menu_policy
    // $.ajax({
    //     url: "http://183.88.224.221/dmcr/api/putApiPDPA.php",
    //     async: false,
    //     success: function (url) {
    //         url_pdpa = url.data[0].url;
    //     }
    // });
    // console.log(url_pdpa);

    var html_menu_policy = '';
    $.ajax({
        url: url_pdpa + "/home/get_menu_policy",
        success: function(result) {
            var result = JSON.parse(result);
            $.each(result, function(key, value) {
                var subject = value['subject'].split("ของ");
                html_menu_policy += '<li class="item">';
                html_menu_policy += ' <a href="javascript:void(0)" ';
                html_menu_policy += ' data-url="' + value['path_policy'] + '" ';
                html_menu_policy += ' data-id="' + value['id'] + '" ';
                html_menu_policy += ' class="link clickPolicy" ';
                html_menu_policy += ' title="' + subject[0] + '">';
                html_menu_policy += subject[0];
                html_menu_policy += ' </a>';
                html_menu_policy += '</li>';
            });
            $('#get_menu_policy').append(html_menu_policy);
        }
    });


    $(document).on('click', '.clickPolicy', function() {
        var path = $('base').attr("href");
        var html_modal = '';
        var urlPolicy = $(this).data('url');
        var idPolicy = $(this).data('id');

        $.ajax({
            url: url_pdpa + "/" + urlPolicy + "/" + idPolicy,
            success: function(data) {
                var data = JSON.parse(data);
                html_modal += '<div class="header">';
                html_modal += '     <h4 class="title">' + data['detail']['subject'] + '</h4>';
                html_modal += '     <p class="desc">';
                html_modal += data['detail']['title'];
                html_modal += '     </p>';
                html_modal += '</div>';

                html_modal += '<div class="content" style="line-height: 25px;">';
                html_modal += data['detail']['html'];
                html_modal += '</div>';
                // console.log(data['detail']['html']);

                if (data['numOfRows']['file'] > 0) {
                    html_modal += '     <div class="footer">';
                    html_modal += '         <h4 class="title">เอกสารแนบ</h4>';
                    $.each(data['file'], function(key, value) {
                        html_modal += '<div>';
                        html_modal += '<a href="' + value.path_download + '"';
                        if (value.file_type.type == '.pdf' || value.file_type.type == '.PDF') {
                            html_modal += 'target="_blank"';
                        }
                        html_modal += '>';
                        html_modal += '     <span class="icon">';
                        html_modal += '         <img src="' + value.path_icon + '" alt="">';
                        html_modal += '     </span>';
                        html_modal += value.name + value.file_type.type;
                        html_modal += '</a>';
                        html_modal += '<br>';

                        html_modal += '<span class="info">Type : ';
                        html_modal += value.file_type.type;
                        html_modal += ' | ';
                        html_modal += 'Size : ';
                        html_modal += value.file_size;
                        html_modal += ' | ';
                        html_modal += 'Download : ';
                        html_modal += value.download;
                        html_modal += '</span>';

                        html_modal += '</div>';
                    });
                    html_modal += '     </div>';
                }
                // console.log(html_modal);
                // return false;
                $('#modal-policy .wrapper').html(html_modal);
                $('#modal-policy').each(function() {
                    $('#modal-policy').modal('show');
                });
            }
        });
        return false;
    });


    // ######################################################################################### End Cookie ##################################################################################################

});