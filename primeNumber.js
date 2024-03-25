function isPrime(n) {
      if (n < 2) {
          return false  
      }
      for (let i = 2; i < n; i++) {
            if (n % i) {
                return false  
            }
            return true
      }
}


console.log(isPrime(10))
console.log(isPrime(15))
console.log(isPrime(45))