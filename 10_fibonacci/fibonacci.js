const fibonacci = function(n) {
    if (typeof n === "string") {
        n = parseInt(n);
    }

    if (n < 0) return "OOPS";
    
    // fib(0) = 0, fib(1) = 1
    const sequence = [0, 1];

    if (n < 2) return sequence[n];    

    // if n > 1 fib(n) = fib(n-1) + fib(n-2)
    for (let i = 2; i <= n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }

    return sequence.at(-1);
};

// Do not edit below this line
module.exports = fibonacci;
