function factorial() {
    let fact = 1;
    let i = 1;
    while (i < 10) {
        fact += fact * i;
        i++;
    }
    return fact;
}

exports.factorial = factorial;
    
