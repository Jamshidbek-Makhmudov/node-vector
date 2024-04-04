function generatePrimes(start, end) {
    const primes = [];

    //Function to check if a number is prime or not
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    // Generate primes within the range
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}


console.time("PRIMES COUNT TIME:");
const primes = generatePrimes(0, 10_000_000);
console.timeEnd("PRIMES COUNT TIME:");

//PRIMES COUNT TIME:: 1:06.696 (m:ss.mmm)
