google.maps.event.addDomListener(window, 'load', init);

function init() {
    var mapOptions = {
        zoom: 15,
        center: new google.maps.LatLng(20.99889,105.797884,17),
        styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#65BE3E"},{"visibility":"on"}]}]
    };
    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(20.99889,105.797884,17),
        map: map,
        title: 'Adonly !'
    });
}

function initContact(){
    function validateEmail($email) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if (!emailReg.test($email)) {
            return false;
        } else {
            return true;
        }
    };

    $(function(){
        $('.forme_err').hide();
        $("select").selecter();
        $('#contact').click(function(){
//                            alert(1);
            $('.forme_err').hide();
            var send_to = $('#send_to').val();
            if (send_to == '') {
                swal('','Send To is required');
                return false;
            }
            var f_name = $('#f_name').val();
            if (f_name == '') {
                swal('','Full name is required');
                return false;
            }
            var email = $('#email').val();
            if (email == '') {
                swal('','Email is required');
                return false;
            } else if (!validateEmail(email)) {
                swal('','Mail not properly formatted. For example: example@gmail.com');
                return false;
            }
            var subject = $('#subject').val();
            if (subject == '') {
                swal('','Subject is required');
                return false;
            }
            var content = $('#content').val();
            if (content == '') {
                swal('','Content is required');
                return false;
            }
            var ct_captcha = $('#ct_captcha').val();
            if (ct_captcha == '') {
                swal('','Security Code is required');
                return false;
            }
            var postData = $('#ajaxContact').serializeArray();
            var url_ajax_contact = $('#ajaxContact').attr('action');
            $('#loading').show();
            $("#contact").attr('disabled','disabled');
            $.ajax({
                type: "POST",
                url:  url_ajax_contact,
                data : postData,
                dataType: "json",
                success:function(result){
                    if(result.error == 0){
                        $('#ajaxMsg').removeClass('alert alert-danger').addClass('alert alert-success').html(result.msg);
                        $('#send_to').val('');
                        $('#subject').val('');
                        $('#user_name').val('');
                        $('#f_name').val('');
                        $('#email').val('');
                        $('#content').val('');
                        $('#ct_captcha').val('');
                    }else{
                        $('#ajaxMsg').removeClass('alert alert-success').addClass('alert alert-danger').html(result.msg);
                    }
                    $('#loading').hide();
                    $("#contact").removeAttr('disabled');
                }
            })
        });
    });
}

initContact();
