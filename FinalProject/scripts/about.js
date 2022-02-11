$(document).ready(function () {
    var time = {
        months: [{x:'Jan'},
                 {x:'Feb'},
                 {x:'Mar'},
                 {x:'Apr'},
                 {x:'May'},
                 {x:'Jun'},
                 {x:'Jul'},
                 {x:'Aug'},
                 {x:'Sep'}, 
                 {x:'Oct'},
                 {x:'Nov'},
                 {x:'Dec'}]
    };
    var money = {
        moneypoints: [{x:0}, 
                      {x:3000}, 
                      {x:3500}, 
                      {x:4000},
                      {x:4500},
                      {x:5000}, 
                      {x:7800},
                      {x:10000},
                      {x:15000}, 
                      {x:20000},
                      {x:24800}, 
                      {x:30000}]  
    };

    base();
    text();
    labels(time);
    lines(money);
    connections();
    points();
});


var base = function() {
    var c = document.getElementById("canvas");
    var cc = c.getContext("2d");
    var gradient = cc.createLinearGradient(0,0,800,600);
    gradient.addColorStop(0.0, '#D6AA5C');
    gradient.addColorStop(0.2, '#E0D6AC');
    gradient.addColorStop(0.8, '#E0D6AC');
    gradient.addColorStop(1, '#D6AA5C');
    cc.fillStyle = gradient;
    cc.fillRect(70, 65, 650, 420);
};

var text = function() {
    var c = document.getElementById('canvas');
    var cc = c.getContext('2d');
    cc.font = '30px serif';
    cc.strokeText('Kickstarter Funding', 275, 40);

    cc.save();
    cc.rotate(300.03);
    cc.strokeText('Total Amount',-340, 25);
    cc.restore();


};

var labels = function(time) {
    var c = document.getElementById('canvas');
    var cc = c.getContext('2d');
    cc.fillStyle = "#000000";
    cc.font = '10px serif';
    var xPos = 75;
    var yPos = 500;
    var xInc = 55;

    for(var i = 0; i < 12; i++) {
        var txt = time.months[i].x
        cc.fillText(txt, xPos, yPos);
        xPos += xInc;
    }
};

var lines = function(money) {
    var c = document.getElementById('canvas');
    var cc = c.getContext('2d');
    var startX = 70;
    var endX = 720;
    var yPos = 449;
    var yInc = -35
    cc.font = '12px serif';
    for(var i = 0; i < 12; i++) {
        cc.strokeStyle = '#e8e8e8'; 
        cc.moveTo(startX, yPos);
        cc.lineTo(endX, yPos);
        cc.stroke();
        //labels next to lines
        var txt = money.moneypoints[i].x
        cc.textAlign = 'right';
        cc.fillText(txt, startX - 5, yPos + 35);
        yPos += yInc;
    }
};

var connections = function() {
    var c = document.getElementById('canvas');
    var cc = c.getContext('2d');
    cc.beginPath();
    cc.strokeStyle = '#8C5430'; 
    cc.moveTo(73, 485);
    cc.lineTo(138, 440);
    cc.lineWidth = 2;
    cc.stroke();
    cc.closePath();

};

var points = function() {
    var c = document.getElementById('canvas');
    var cc = c.getContext('2d');
    var pointX;
    var pointY;

    cc.strokeStyle = '#8C5430';
    var point1 = function() {
        pointX = 73;
        pointY = 485;
        cc.beginPath();
        cc.fillStyle = '#888';
        cc.arc(pointX,pointY,8,0,2*Math.PI);
        cc.fill();
        cc.stroke();  
    };

    var point2 = function() {
        pointX = 138;
        pointY = 440;
        cc.beginPath();
        cc.fillStyle = '#888';
        cc.arc(pointX,pointY,8,0,2*Math.PI);
        cc.fill();
        cc.stroke(); 
    }

    point1();
    point2();
};


