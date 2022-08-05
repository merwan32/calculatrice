const acBtn = document.querySelectorAll('.btns button');
const watch = document.querySelector('.watch');
const screen = document.querySelector('.screen');
let x  = 0;
let y = 0 ;
let a ='';
const bton  = document.querySelector('.bton');
const body = document.querySelector('.box');
const bn = document.querySelector('.bn');
let dark = true;

bton.onclick=()=>{
    if (dark) {
        body.style.background = 'white';
        bn.style.marginLeft = '28px';
        bton.style.border = 'black 2px solid';
        bn.style.background = 'black';
        screen.style.color = 'black';
        watch.style.color = 'black';
        dark = false;
    } else {
        body.style.background = 'black';
        bn.style.marginLeft = '0px';
        screen.style.color = 'white';
        watch.style.color = 'white';
        dark = true;
        bn.style.background = 'white';
        bton.style.border = 'white 2px solid';
    }
}


acBtn[0].onclick = ()=>{
    watch.innerHTML = '0';
    screen.innerHTML = '';
    a = '';
    x = 0;
    y = 0;
}

zActive = false;
acBtn[1].onclick = ()=>{
    if (a == '') {
        if (x > 0) {
            watch.innerHTML = -x;
        } else {
            watch.innerHTML =  -x;
        }
        x = -x;
    } else if(zActive ){
        if (z > 0) {
            watch.innerHTML = -z;
        } else {
            watch.innerHTML =  -z;
        }
        z = -z;
    }else{
        if (y > 0) {
            watch.innerHTML = -y;
        } else {
            watch.innerHTML =  -y;
        }
        y = -y;
    }
}

acBtn[3].onclick = ()=>{
    if (screen.innerHTML == '') {
        screen.innerHTML = watch.innerHTML + ' ÷ ';
    }else {
        if (a == '/') {
            screen.innerHTML = x/y + ' ÷ ';
            x = x/y;
        } else if (a == '*') {
            screen.innerHTML = x*y + ' ÷ ';
            x = x*y;
        } else if (a == '-') {
            screen.innerHTML = x-y + ' ÷ ';
            x= x-y;
        } else {
            screen.innerHTML = x+y + ' ÷ ';
            x= x+y;
        }
    }
    watch.innerHTML = '0';
    a = '/';
}

acBtn[7].onclick = ()=>{
    if (screen.innerHTML == '') {
        screen.innerHTML = watch.innerHTML + ' x ';
    }else {
        if (a == '/') {
            screen.innerHTML = x/y + ' x ';
            x = x/y;
        } else if (a == '*') {
            screen.innerHTML = x*y + ' x ';
            x= x*y;
        } else if (a == '-') {
            screen.innerHTML = x-y + ' x ';
            x = x-y;
        } else {
            screen.innerHTML = x+y + ' x ';
            x= x+y;
        }
    } 
    watch.innerHTML = '0';
    a = '*';
}

acBtn[11].onclick = ()=>{
    if (screen.innerHTML == '') {
        screen.innerHTML = watch.innerHTML + ' - ';
    }else {
        if (a == '/') {
            screen.innerHTML = x/y + ' - ';
            x= x/y;
        } else if (a == '*') {
            screen.innerHTML = x*y + ' - ';
            x=x*y;
        } else if (a == '-') {
            screen.innerHTML = x-y + ' - ';
            x= x-y;
        } else {
            screen.innerHTML = x+y + ' - ';
            x= x+y;
        }
    } 
    watch.innerHTML = '0';
    a = '-';
}

acBtn[15].onclick = ()=>{
    if (screen.innerHTML == '') {
        screen.innerHTML = watch.innerHTML + ' + ';
    }else {
        if (a == '/') {
            screen.innerHTML = x/y + ' + ';
            x= x/y;
        } else if (a == '*') {
            screen.innerHTML = x*y + ' + ';
            x= x*y;
        } else if (a == '-') {
            screen.innerHTML = x-y + ' + ';
            x=x-y;
        } else {
            screen.innerHTML = x+y + ' + ';
            x=x+y;
        }
    } 
    watch.innerHTML = '0';
    a = '+';
}


acBtn[18].onclick = ()=>{
    if (a != '') {
        zActive = true;
        if (a == '/') {
            screen.innerHTML = x + ' ÷ ' + y +' =';
            watch.innerHTML = x / y;
            z= x/y;
        } else if (a == '*') {
            screen.innerHTML = x + ' x ' + y +' =';
            watch.innerHTML = x * y;
            z= x*y;
        } else if (a == '-') {
            screen.innerHTML = x + ' - '+ y +' =';
            watch.innerHTML = x - y;
            z= x-y;
        } else {
            screen.innerHTML = x +' + '+ y +' =';
            watch.innerHTML = x + y;
            z= x+y;
        }
    } 
}


acBtn[4].onclick = ()=>{
    if (watch.innerHTML == '0') {
        watch.innerHTML = '7';
    } else {
        watch.innerHTML += '7';
    }
    if (a == '') {
        x = parseFloat(watch.innerHTML) ;
    } else {
        y = parseFloat(watch.innerHTML) ;
    }
}
acBtn[5].onclick = ()=>{
    if (watch.innerHTML == '0') {
        watch.innerHTML = '8';
    } else {
        watch.innerHTML += '8';
    }
    if (a == '') {
        x = parseFloat(watch.innerHTML) ;
    } else {
        y = parseFloat(watch.innerHTML) ;
    }
}
acBtn[6].onclick = ()=>{
    if (watch.innerHTML == '0') {
        watch.innerHTML = '9';
    } else {
        watch.innerHTML += '9';
    }
    if (a == '') {
        x = parseFloat(watch.innerHTML) ;
    } else {
        y = parseFloat(watch.innerHTML) ;
    }
}
acBtn[8].onclick = ()=>{
    if (watch.innerHTML == '0') {
        watch.innerHTML = '4';
    } else {
        watch.innerHTML += '4';
    }
    if (a == '') {
        x = parseFloat(watch.innerHTML) ;
    } else {
        y = parseFloat(watch.innerHTML) ;
    }
}
acBtn[9].onclick = ()=>{
    if (watch.innerHTML == '0') {
        watch.innerHTML = '5';
    } else {
        watch.innerHTML += '5';
    }
    if (a == '') {
        x = parseFloat(watch.innerHTML) ;
    } else {
        y = parseFloat(watch.innerHTML) ;
    }
}
acBtn[10].onclick = ()=>{
    if (watch.innerHTML == '0') {
        watch.innerHTML = '6';
    } else {
        watch.innerHTML += '6';
    }
    if (a == '') {
        x = parseFloat(watch.innerHTML) ;
    } else {
        y = parseFloat(watch.innerHTML) ;
    }
}
acBtn[12].onclick = ()=>{
    if (watch.innerHTML == '0') {
        watch.innerHTML = '1';
    } else {
        watch.innerHTML += '1';
    }
    if (a == '') {
        x = parseFloat(watch.innerHTML) ;
    } else {
        y = parseFloat(watch.innerHTML) ;
    }
}
acBtn[13].onclick = ()=>{
    if (watch.innerHTML == '0') {
        watch.innerHTML = '2';
    } else {
        watch.innerHTML += '2';
    }
    if (a == '') {
        x = parseFloat(watch.innerHTML) ;
    } else {
        y = parseFloat(watch.innerHTML) ;
    }
}
acBtn[14].onclick = ()=>{
    if (watch.innerHTML == '0') {
        watch.innerHTML = '3';
    } else {
        watch.innerHTML += '3';
    }
    if (a == '') {
        x = parseFloat(watch.innerHTML) ;
    } else {
        y = parseFloat(watch.innerHTML) ;
    }
}

acBtn[16].onclick = ()=>{
    if (watch.innerHTML == '0') {
        watch.innerHTML = '0';
    } else {
        watch.innerHTML += '0';
    }
    if (a == '') {
        x = parseFloat(watch.innerHTML) ;
    } else {
        y = parseFloat(watch.innerHTML) ;
    }
}
acBtn[17].onclick = ()=>{
        watch.innerHTML += '.';
        if (a == '') {
            x = parseFloat(watch.innerHTML);
        } else {
            y = parseFloat(watch.innerHTML);
        }
}