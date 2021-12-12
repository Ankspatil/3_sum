function fun(a) {
    a =parseInt ( document.getElementById("num1").value);
    return function (b) {
        b = parseInt(document.getElementById("num2") .value);
        return function (c) {
            c = parseInt(document.getElementById("num3").value);
            document.getElementById('bsp').innerHTML = a + b + c ;
            
            
        }
    }
}
outer(a)(b)(c); 