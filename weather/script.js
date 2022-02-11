$(document).ready(function () {
    var lat;
    var lon;

    var iplink = "http://ip-api.com/json";
    $.getJSON(iplink, function (latlon) {
        console.log(latlon);


        $.getJSON("http://api.openweathermap.org/data/2.5/forecast/daily?lat=" + latlon.lat + "&lon=" + latlon.lon + "&units=imperial&appid=37209a9f14db84af946f977790804594", function (data) {
            console.log(data);
            $('#location').html(data.city.name);

            var d = new Date();
            var n = d.getDay();
            var weekday = new Array(7);
            weekday[0] = "Sunday";
            weekday[1] = "Monday";
            weekday[2] = "Tuesday";
            weekday[3] = "Wednesday";
            weekday[4] = "Thursday";
            weekday[5] = "Friday";
            weekday[6] = "Saturday";

            for (var i = 0; i < 6; i++) {
                $('#weather' + i).html(data.list[i].weather[0].description);
                $('#temp' + i).html(Math.round(data.list[i].temp.day) + "&deg;F");
                if (n > 6) {
                    n -= 7;
                }
                $('#date' + i).html(weekday[n]);
                n++;
            }

            var sunny = 'Sun';
            var cloudy = 'Clouds';
            var rainy = 'Rain';
            var snowing = 'Snow';
            var clear = 'Clear';
            var background;

            if (data.list[0].weather[0].main == (sunny)) {
                background = 'url(sun.jpg)';
            } else if (data.list[0].weather[0].main == (cloudy)) {
                background = 'url(cloudy2.jpg)';
            } else if (data.list[0].weather[0].main == (rainy)) {
                background = 'url(rainy.jpg)';
            } else if (data.list[0].weather[0].main == (snowing)) {
                background = 'url(snowing3.jpg)';
            } else if (data.list[0].weather[0].main == (clear)) {
                background = 'url(clear.jpg)';
            }

            $('#back').animate({
                opacity: 0
            }, 0).css({
                'background-image': background
            }).animate({
                opacity: 1
            }, 4000);



            var toggled = false;
            $('.flipswitch-cb').click('toggle', function () {
                if (!toggled) {
                    for (var i = 0; i < 6; i++) {
                        $('#temp' + i).html(Math.round((data.list[i].temp.day - 32) * 5 / 9) + "&deg;C");
                    }
                    toggled = true;
                } else if (toggled) {
                    for (var i = 0; i < 6; i++) {
                        $('#temp' + i).html(Math.round(data.list[i].temp.day) + "&deg;F");
                    }
                    toggled = false;
                }

            });

            $('.1').on('mouseover', function () {
                $('#temp1').css({
                    'opacity': 0
                });
                $('#weather1').css({
                    'opacity': 1
                });


            });
            $('.1').on('mouseout', function () {
                $('#temp1').css({
                    'opacity': 1
                });
                $('#weather1').css({
                    'opacity': 0
                });

            });

            $('.2').on('mouseover', function () {
                $('#temp2').css({
                    'opacity': 0
                });
                $('#weather2').css({
                    'opacity': 1
                });


            });
            $('.2').on('mouseout', function () {
                $('#temp2').css({
                    'opacity': 1
                });
                $('#weather2').css({
                    'opacity': 0
                });

            });

            $('.3').on('mouseover', function () {
                $('#temp3').css({
                    'opacity': 0
                });
                $('#weather3').css({
                    'opacity': 1
                });


            });
            $('.3').on('mouseout', function () {
                $('#temp3').css({
                    'opacity': 1
                });
                $('#weather3').css({
                    'opacity': 0
                });

            });

            $('.4').on('mouseover', function () {
                $('#temp4').css({
                    'opacity': 0
                });
                $('#weather4').css({
                    'opacity': 1
                });


            });
            $('.4').on('mouseout', function () {
                $('#temp4').css({
                    'opacity': 1
                });
                $('#weather4').css({
                    'opacity': 0
                });

            });

            $('.5').on('mouseover', function () {
                $('#temp5').css({
                    'opacity': 0
                });
                $('#weather5').css({
                    'opacity': 1
                });


            });
            $('.5').on('mouseout', function () {
                $('#temp5').css({
                    'opacity': 1
                });
                $('#weather5').css({
                    'opacity': 0
                });

            });

        });
    });

});