$(window).scroll(function(){
    var scrollval = $(this).scrollTop();

    $('.pain').css('left','-'+(scrollval/20)+'%');
    $('.boxtext').css('left','-'+(140+(scrollval/5.3))+'%');
});

$(function(){
    $(".glitch-img").mgGlitch({
      destroy: false,
      glitch: true,
      scale: true,
      blend: true,
      blendModeType: 'hue',
      glitch1TimeMin: 200,
      glitch1TimeMax: 400,
      glitch2TimeMin: 10,
      glitch2TimeMax: 100,
    });
  });

  $(document).ready(function () {
    var delay = 2000;
    $('.btn-default').click(function (e) {
        e.preventDefault();
        var name = $('#name').val();
        if (name == '') {
            $('.message_box').html(
                '<span style="color:white;">Enter Your Name!</span>'
            );
            $('#name').focus();
            return false;
        }

        var email = $('#email').val();
        if (email == '') {
            $('.message_box').html(
                '<span style="color:white;">Enter Email Address!</span>'
            );
            $('#email').focus();
            return false;
        }
        if ($("#email").val() != '') {
            if (!isValidEmailAddress($("#email").val())) {
                $('.message_box').html(
                    '<span style="color:white;">Provided email address is incorrect!</span>'
                );
                $('#email').focus();
                return false;
            }
        }

        var phone = $('#phone').val();
        if (phone == '') {
            $('.message_box').html(
                '<span style="color:white;">Enter Your Mobile Number</span>'
            );
            $('#phone').focus();
            return false;
        }

        $.ajax
            ({
                type: "POST",
                url: "ajax.php",
                data: "name=" + name + "&email=" + email + "&phone=" + phone,
                beforeSend: function () {
                    $('.message_box').html(
                        '<div class="spinner-border text-light" role="status"> <span class="sr-only">Loading...</span> </div>'
                    );
                },
                success: function (data) {
                    setTimeout(function () {
                        $('.message_box').html(data);
                    }, delay);
                }
            });
    });

});

//Email Validation Function 
function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
};

