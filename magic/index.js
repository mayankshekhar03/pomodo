var len = 25 * 60 * 1000; // default 25 minitues in milisecs
var breakt = 5 * 60 * 1000; // breaktime
var pause = true;
var breaktime = false;
var now = 0;


function timer(length) {
    x = setInterval(function() {
    if(breaktime){
        var distance = breakt - now;
    }else{
        var distance = len - now;
    }
    
    var minutes = Math.floor(distance / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    $('#time').text(minutes + ' : ' + seconds);
    now += 1000;
    if (distance <= 0) {
        if (breaktime) {
            breaktime = false;
            clearInterval(x);
            $('#des').text('Session: ');
            timer(len);
            now = 0;
        }else{
            breaktime = true;
            clearInterval(x);
            $('#des').text('Break: ');
            timer(breakt);
            now = 0;
        }
    }
}, 1000);
}

$(document).ready(function(){
    $('#time').text('25');
    $('#des').text('Session: ');
    $('#timer').click(function(){
        if(pause){
            pause = false;
            if(breaktime)
                timer(breakt);
            else
                timer(len);
        }else{
            pause = true;
            clearInterval(x);
        }
    });
    $('#plus').click(function(){
        if (pause){
            len += 60000;
            var l = Math.floor(len / (1000 * 60));
            $('#len').text(l);
            if(!breaktime){
                $('#time').text(l);
            }
        }
    });
    $('#minus').click(function(){
        if (pause){
            if (len > 1)
                len -= 60000;
            var l = Math.floor(len / (1000 * 60));
            $('#len').text(l);
            if(!breaktime){
                $('#time').text(l);
            }
        }
    });
    $('#bplus').click(function(){
        if (pause){
            breakt += 60000;
            var b = Math.floor(breakt / (1000 * 60));
            $('#breakt').text(b);
            if(breaktime){
                $('#time').text(b);
            }
        }
    });
    $('#bminus').click(function(){
        if (pause){
            if (breakt > 1)
                breakt -= 60000;
            var b = Math.floor(breakt / (1000 * 60));
            $('#breakt').text(b);
            if(breaktime){
                $('#time').text(b);
            }
        }
    });
});