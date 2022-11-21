/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const obj = {}; // create object to group anagrams in
    // helper prime number finding function
    const isPrime = num => {
        if (num < 2) return false;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    // generate first 26 prime numbers in array
    const alphaPrimes = () => {
        const primes = [];
        let i = 0;
        // find 26 primes
        while (primes.length < 26) {
            if (isPrime(i)) primes.push(i);
            i++;
        }
        return primes;
    }

    const hash = string => {
        const primes = alphaPrimes()
        const alphabet = 'abcdefghijklmnopqrstuvwxyz'
        let product = 1;
        for (let i = 0; i < string.length; i++) {
            product *= primes[alphabet.indexOf(string[i])];
        }
        return product;
    };
    strs.forEach(word => {
        const hashValue = hash(word);
        if (!obj[hashValue]) {
            obj[hashValue] = [];
        }
        obj[hashValue].push(word);
    })
    return Object.values(obj);
};