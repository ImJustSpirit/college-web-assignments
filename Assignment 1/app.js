var r = document.querySelector(':root');

function myFunction_set() {
    var rs = getComputedStyle(r);
    if(rs.getPropertyValue('--background') == 'white') {
        r.style.setProperty('--background', 'black');
        r.style.setProperty('--text', 'white');
        r.style.setProperty('--grey', '#5A5A5A');
    } else {
        r.style.setProperty('--background', 'white');
        r.style.setProperty('--text', 'black');
        r.style.setProperty('--grey', '#A5A5A5');
    }
}