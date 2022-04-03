function display1() {
    j = document.getElementById('first1');
    if (j.style.display === 'none') {
        j.style.display = 'block';

    }
    else {
        j.style.display = 'none';

    }
}

function display2() {
    k = document.getElementById('sec2');
    j = document.getElementById('first1');
    if (k.style.display === 'none') {
        k.style.display = 'block';
        j.style.display = 'none'

    }
    else {
        k.style.display = 'none';
        j.style.display = 'block';

    }
}

function display3() {
    o = document.getElementById('forth');
    k = document.getElementById('sec2');
    if (o.style.display === 'none') {
        o.style.display = 'block';
        k.style.display = 'none'

    }
    else {
        o.style.display = 'none';
        k.style.display = 'block';

    }
}

$(document).ready(function () {
    $(".tab").click(function () {
        $(".tab").removeClass("active");
        $(this).addClass("active");
    });
});