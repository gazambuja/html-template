(function () {
    $.ajaxSetup({
        headers: {
            "X-CSRFToken": $("[name=csrfmiddlewaretoken]").val()
        }
    });

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(e.target),
            category_id = target.data('id'),
            platform = target.data('platform'),
            content_id = target.attr('aria-controls');

        get_templates('#' + content_id, {
            limit: 12,
            offset: 0,
            category_id: category_id,
            platform: platform
        });
    });

    get_templates = function (element, data, options) {
        if ($(element + ' > .list').hasClass('has_data')) {
            return;
        } else {
            $(element + ' > .list').addClass('has_data');
        }

        $.ajax({
            url: '/du-an/',
            type: 'get',
            dataType: 'json',
            data: data,
            success: function (data) {
                if (data != '') {
                    var html = '';
                    data.forEach(function (item) {
                        html = html + category_item_html(item, options);
                    });

                    $(element + ' > .list').html(html).addClass('has_data');
                } else {
                    $(element + ' > .list').html('<div class ="text-center" style = "margin-bottom: 25px;">Hiện tại chưa có template nào cho chuyên mục này. Vui lòng quay lại sau!</div>');
                }
            }
        });
    };

    category_item_html = function (data, options) {
        var column = typeof options === 'object' && options.column || 3,
            url = "/du-an/" + data.slug + "-" + data.id;

        return '<div class="col-md-' + column + '">' +
            '<a href="' + url + '">' +
            '<div class="blue-box--template-item">' +
            '<div class="blue-card">' +
            '<div class="blue-card--content blue-box--shadow">' +
            '<div class="blue-box--template-item--img">' +
            '<img src="' + data.thumb_small + '" alt="' + data.title + '" />' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<h4 class="blue-box--template-item--title">' + data.title + '</h4>' +
            '</div>' +
            '</a>' +
            '</div>';
    };

    scroll_to_top = function () {
        $("html, body").animate({scrollTop: 0}, "100");
    };

    scroll_to_element = function (element) {
        $('html, body').animate({
            scrollTop: $(element).offset().top
        }, 2000);
    };

    $(window).scroll(function () {
        if ($(this).scrollTop() > 670) {

        } else {

        }
    });

    $('.btn_contact').click(function () {
        scroll_to_element('#contact');

        return false;
    });

    $('.btn_send_contact').click(function () {
        var name = $('#name').val(),
            email = $('#email').val(),
            phone = $('#phone').val(),
            address = $('#address').val(),
            content = $('#content').val();

        $.ajax({
            url: '/contact/',
            type: 'post',
            dataType: 'json',
            data: {
                name: name,
                email: email,
                phone: phone,
                address: address,
                content: content
            },
            beforeSend: function () {
                $('#blue-mask').show();
            },
            success: function (data) {
                $('#blue-mask').hide();
                if (data.status == 201) {
                    alert('Bạn đã gửi thông tin thành công. Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất. Xin cảm ơn!');
                } else {
                    alert('Có lỗi xảy ra!')
                }
            }
        });

        return false;
    });

    $('.btn_send_contact_modal').click(function () {
        var name = $('#modal-name').val(),
            phone = $('#modal-phone').val();

        $.ajax({
            url: '/contact/',
            type: 'post',
            dataType: 'json',
            data: {
                name: name,
                email: '',
                phone: phone,
                address: 'No.',
                content: 'No.'
            },
            beforeSend: function () {
                $('#blue-mask').show();
            },
            success: function (data) {
                $('#contact-box').modal('hide');
                $('#blue-mask').hide();
                if (data.status == 201) {
                    alert('Bạn đã gửi thông tin thành công. Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất. Xin cảm ơn!');
                } else {
                    alert('Có lỗi xảy ra!')
                }
            }
        });

        return false;
    });

    $(document).on('click', '.btn_project_viewmore', function () {
        var $this = $(this),
            limit = 8,
            page = parseInt($this.data('page')),
            category_id = $this.data('id'),
            platform = $this.data('platform'),
            content_id = $this.attr('aria-controls');


        $.ajax({
            url: '/du-an/',
            type: 'get',
            dataType: 'json',
            data: {
                limit: limit,
                offset: limit * page,
                category_id: category_id,
                platform: platform
            },
            success: function (data) {
                if (data != '') {
                    var html = '';
                    data.forEach(function (item) {
                        html = html + category_item_html(item);
                    });

                    var target = $('#' + content_id + ' > .list');

                    target.append(html);

                    page = page + 1;

                    $this.data('page', page);
                } else {
                    $this.hide();
                }
            }
        });

        return false;
    });

})($);
