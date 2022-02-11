$(document).ready(function() {
    $('#content1').hide();
    $('#content1').fadeIn('slow', function() {
        $('#content1').fadeOut('fast', function() {
            $('#content1').fadeIn('fast');
        });
    });
    $('#content2').css({'background-color': '#000', 'color': '#f00', 'width': '100px'});

    $('#content2').on('click', function() {
        $('#content2').fadeOut('slow');
    });

    $('#content3').on('dbclick', function() {
        $('#content4').toggle();
    });

    var fourBig = false;
    $('#content4').on('click', function() {
        if (fourBig) {
            $(this).height('50px');
            $(this).width('50px');
            fourBig=false;
        }else{
            $(this).height('150px');
            $(this).width('150px');
            fourBig = true;
        }
    });

    $('#content5').on('mouseover', function() {
        $(this).html('Hi');
    });
    $('#content5').on('mouseout', function() {
        $(this).html('Bye');
    });

    $('#content6').on('click', function() {
        $('#content1').show();
        $('#content2').show();
        $('#content2').width('50px');
        $('#content4').width('50px').height('50px');
    });

});