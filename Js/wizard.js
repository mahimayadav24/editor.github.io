

function mymove() {
    x = document.getElementById('first-wizard');
    y = document.getElementById('first-wizard1');
    if (x.style.display === 'block') {
        x.style.display = 'none';
        y.style.display = 'block';
    }
    else {
        x.style.display = 'block';
        y.style.display = 'none';

    }
}

function mybackmove() {
    x = document.getElementById('first-wizard');
    y = document.getElementById('first-wizard1');
    if (x.style.display === 'none') {
        x.style.display = 'block';
        y.style.display = 'none';
    }
    else {
        x.style.display = 'none';
        y.style.display = 'block';

    }
}

function myforthwizard() {
    t = document.getElementById('first-wizard2');
    y = document.getElementById('first-wizard1');
    if (y.style.display === 'block') {
        y.style.display = 'none';
        t.style.display = 'block';
    }
    else {
        y.style.display = 'block';
        t.style.display = 'none';

    }
}

function mybackmoves() {
    t = document.getElementById('first-wizard2');
    y = document.getElementById('first-wizard1');
    if (y.style.display === 'block') {
        y.style.display = 'none';
        t.style.display = 'block';
    }
    else {
        y.style.display = 'block';
        t.style.display = 'none';

    }
}






