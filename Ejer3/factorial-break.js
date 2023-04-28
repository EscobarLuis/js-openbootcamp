function factorial() {
    let fact = 1;
    let i = 1;
    while (true) {
        if (i < 10) {
            fact += fact * i;
            i++
        } else {
            break;
        }
    }
    return fact;
}

exports.factorial = factorial; 
