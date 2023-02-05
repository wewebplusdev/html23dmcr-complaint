$(document).ready(function(){
    // ######################################################################################### Start Cookie ##################################################################################################

    var sitename = "unknown-browser";
    if (navigator.userAgent.indexOf("MSIE") != -1 || navigator.userAgent.indexOf("rv:11.0") != -1) {
        sitename = "msie";
    } else if (navigator.userAgent.indexOf("Edge") != -1) {
        sitename = "microsoft-edge";
    } else if (navigator.userAgent.indexOf("Firefox") != -1) {
        sitename = "firefox";
    } else if (navigator.userAgent.indexOf("Opera") != -1) {
        sitename = "opera";
    } else if (navigator.userAgent.indexOf("Chrome") != -1) {
        sitename = "chrome";
    } else if (navigator.userAgent.indexOf("Safari") != -1) {
        sitename = "safari";
    }
    

    var pdpa_key = 'complaint';
    var pdpa_secretkey = 'nF94nUO0oF53o0kaoF5apaEwnJ14MUNhoKE3oxkcoJSaoUEjnJ14o3OwoH93C0kfoKWaqKDznKE4oaOcoJS3oRkjoJ1ao3EwnH94C3O5oJI3n0k0oJIapaEwnJI4pj%3Q%3Q';
    
    var PATH_AUTH_SITE = '/api2/authSite';
    var PATH_TOKEN = '/api2/generateAccessToken';
    var PATH_GET_COOKIECONSENT = '/cookieconsent/viewcookieconsent';
    var PATH_ACCEPT = '/api2/inlogAccept';
    var URL_PDPA = "";
    var ACCESS_TOKEN = "";
    var client_ip = "";
    var client_ip_router = "";
    var client_time = "";
    var PDPA_EXPIRE = 0;
    var URL_GET_URLPDPA = "https://www.dmcr.go.th/api/putApiPDPA.php";
    var base = $("base").attr("href");

    if (typeof $.cookie("CONSENT") === "undefined" || atob($.cookie("KEY")) != pdpa_secretkey) {
        (async () => {
            const data_get_urlpdpa = await get_url_pdpa();
            if (data_get_urlpdpa.Result == true) {
                URL_PDPA = data_get_urlpdpa.data[0].url;
                PDPA_EXPIRE = data_get_urlpdpa.data[0].expire;
                client_ip = data_get_urlpdpa.data[0].ip;
                client_ip_router = data_get_urlpdpa.data[0].ip_router;
                client_time = data_get_urlpdpa.data[0].time;
                const data_get_menu_polic_all = await get_menu_polic_all();
                const data_get_authorization = await getAuthorization();
                // console.log(data_get_authorization);
                if (data_get_authorization.status == true) {
                    const data_get_access_token = await getAccessToken();
                    ACCESS_TOKEN = data_get_access_token.access_token;
                    if (data_get_access_token.statuscode == 200 || data_get_access_token.statuscode == 201) {
                        const data_get_cookie_consent = await getCookieConsent();
                        if (typeof $.cookie("CONSENT") === "undefined" || atob($.cookie("KEY")) != pdpa_secretkey) {
                            $('.cookieconsent').html(data_get_cookie_consent);
                            $('.cookieconsent').show();
                            $.removeCookie('CONSENT', { path: '/' });
                            $.removeCookie('KEY', { path: '/' });
                        } else {
                            $('.cookieconsent').hide();
                        }
                    }else{
                        $('.cookieconsent').hide();
                    }
                }else{
                    $('.cookieconsent').hide();                    
                    $('#get_menu_policy').hide();
                    $('#modal-html-policy').hide();
                }
            }else{
                $('.cookieconsent').hide();
            }
        })().catch(() => {});
    } else {
        $('.cookieconsent').hide();
        (async () => {
            const data_get_urlpdpa = await get_url_pdpa();
            if (data_get_urlpdpa.Result == true) {
                URL_PDPA = data_get_urlpdpa.data[0].url;
                PDPA_EXPIRE = data_get_urlpdpa.data[0].expire;
                client_ip = data_get_urlpdpa.data[0].ip;
                client_ip_router = data_get_urlpdpa.data[0].ip_router;
                client_time = data_get_urlpdpa.data[0].time;
                const data_get_menu_polic_all = await get_menu_polic_all();
            }
        })().catch(() => {});
    }

    async function get_url_pdpa() {  
        const settings = {
            "url": URL_GET_URLPDPA,
            "async": "false",
        };
        const result = await $.ajax(settings);
        return result;
    }

    async function getAuthorization() {  
        const settings = {
            "url": URL_PDPA + PATH_AUTH_SITE,
            "method": "POST",
            "timeout": 0,
            "data": {
                "Authorization": "Basic " + btoa(pdpa_key + ":" + pdpa_secretkey),
                "baseSite": base
            },
        };
        const result = await $.ajax(settings);
        return result;
    }

    async function getAccessToken() {  
        const settings = {
            "url": URL_PDPA + PATH_TOKEN,
            "method": "POST",
            "timeout": 0,
            "data": {
                "ip": client_ip,
                "iprouter": client_ip_router,
                "time": client_time,
                "browser": sitename,
                "Authorization": "Basic " + btoa(pdpa_key + ":" + pdpa_secretkey)
            },
        };
        const result = await $.ajax(settings);
        return result;
    }

    async function getCookieConsent() {  
        const settings = {
            "url": URL_PDPA + PATH_GET_COOKIECONSENT,
            "method": "POST",
            "timeout": 0,
            "data": {
                "actoken": ACCESS_TOKEN,
                "secretkey": pdpa_secretkey
            },
        };
        const result = await $.ajax(settings);
        return result;
    }

    $(document).on('click', '.acceptCookie', function() {
        var date = new Date();
        var day = PDPA_EXPIRE;
        var hour = 24;
        var minutes = 60;
        var Accept = $(this).data('accept');
        // var Token = $('#unknows').data('whatis');
        if (Accept == 'Accept') {
            (async () => {
                const result = await accept_cookieconsent(Accept);
                if (result.statuscode == 201) {
                    date.setTime(date.getTime() + (day * (hour * minutes * 60 * 1000)));
                    $.cookie('CONSENT', true, {
                        expires: date,
                        path: '/'
                    });
                    $.cookie('KEY', btoa(pdpa_secretkey), {
                        expires: date,
                        path: '/'
                    });
                    $('.cookieconsent').hide();
                } else {
                    return false;
                }
            })().catch(() => {});
        }
    });
    
    async function accept_cookieconsent(Accept) {  
        const settings = {
            "url": URL_PDPA + PATH_ACCEPT,
            "method": "POST",
            "timeout": 0,
            "data": {
                "ip": client_ip,
                "iprouter": client_ip_router,
                "time": client_time,
                "browser": sitename,
                "actoken": ACCESS_TOKEN,
                "baseSite": base,
                "Authorization": "Basic " + btoa(pdpa_key + ":" + pdpa_secretkey),
                "statusAccept": Accept
            }
        };
        const result = await $.ajax(settings);
        return result;
    }

    // ######################################################################################### End Cookie ##################################################################################################

    async function get_menu_polic_all() {  
        var html_menu_policy = ''; 
        var html_menu_policy_modal = '';
        $.ajax({
            url: URL_PDPA + "/home/get_menu_polic_all",
            success: function(result) {
                var result = JSON.parse(result);
                // console.log(result);
                $.each(result, function( key, value ) {
                    // console.log(value);
                    var subject = value.list['subject'].split("ของ");
                    html_menu_policy += '<li class="item">';
                    html_menu_policy += ' <a href="javascript:void(0)" ';
                    html_menu_policy += ' data-url="' + value.list['path_policy'] + '" ';
                    html_menu_policy += ' data-id="' + value.list['id'] + '" ';
                    html_menu_policy += ' class="link clickPolicy" ';
                    html_menu_policy += ' data-toggle="modal" data-target="#policy_modal_' + value.list['id'] + '" ';
                    html_menu_policy += ' title="' + subject[0] + '">';
                    html_menu_policy += subject[0];
                    html_menu_policy += ' </a>';
                    html_menu_policy += '</li>';

                    html_menu_policy_modal += '<div class="modal fade policy" id="policy_modal_' + value.list['id'] + '" role="dialog">';
                    html_menu_policy_modal += '    <div class="modal-dialog">';
                    html_menu_policy_modal += '        <div class="modal-content">';
                    html_menu_policy_modal += '            <div class="modal-body">';
                    html_menu_policy_modal += '                <button type="button" class="close" data-dismiss="modal" aria-label="Close"></button>';
                    html_menu_policy_modal += '                <div class="wrapper">';
                    html_menu_policy_modal += '                 <div class="header">';
                    html_menu_policy_modal += '                     <h4 class="title">' + value.list['subject'] + '</h4>';
                    html_menu_policy_modal += '                     <p class="desc">';
                    html_menu_policy_modal +=                           value.list['title'];
                    html_menu_policy_modal += '                     </p>';
                    html_menu_policy_modal += '                 </div>';

                    html_menu_policy_modal += '                 <div class="content" style="line-height: 25px;">';
                    html_menu_policy_modal +=                       value.list['html'];
                    html_menu_policy_modal += '                 </div>';

                    if (value.file_numOfRows > 0) {
                    html_menu_policy_modal += '     <div class="footer">';
                    html_menu_policy_modal += '         <h4 class="title">เอกสารแนบ</h4>';
                        $.each(value.file, function( key_file, value_file ) {
                            // console.log(value_file);
                            html_menu_policy_modal += '<div>';
                            html_menu_policy_modal += '<a href="' + value_file.path_download + '"';
                            if (value_file.file_type.type == '.pdf' || value_file.file_type.type == '.PDF') {
                                html_menu_policy_modal += 'target="_blank"';
                            }
                            html_menu_policy_modal += '>';
                            html_menu_policy_modal += '     <span class="icon">';
                            html_menu_policy_modal += '         <img src="' + value_file.path_icon + '" alt="">';
                            html_menu_policy_modal += '     </span>';
                            html_menu_policy_modal += value_file.name + value_file.file_type.type;
                            html_menu_policy_modal += '</a>';
                            html_menu_policy_modal += '<br>';
        
                            html_menu_policy_modal += '<span class="info">Type : ';
                            html_menu_policy_modal += value_file.file_type.type;
                            html_menu_policy_modal += ' | ';
                            html_menu_policy_modal += 'Size : ';
                            html_menu_policy_modal += value_file.file_size;
                            html_menu_policy_modal += ' | ';
                            html_menu_policy_modal += 'Download : ';
                            html_menu_policy_modal += value_file.download;
                            html_menu_policy_modal += '</span>';
        
                            html_menu_policy_modal += '</div>';
                        });
                    html_menu_policy_modal += '     </div>';
                }

                html_menu_policy_modal += '                </div>';
                html_menu_policy_modal += '            </div>';
                html_menu_policy_modal += '        </div>';
                html_menu_policy_modal += '    </div>';
                html_menu_policy_modal += '</div>';
                });
                $('#get_menu_policy').html(html_menu_policy);
                $('#modal-html-policy').html(html_menu_policy_modal);
            }
        });
    }


});