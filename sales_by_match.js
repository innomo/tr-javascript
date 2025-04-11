function sockMerchant(n, ar) {
    let pairs = 0;
  
    while (ar.length > 0) {
      let sock = ar[0];
      ar.splice(0, 1); // remove first element
  
      let matchIndex = ar.indexOf(sock);
      if (matchIndex !== -1) {
        pairs++;
        ar.splice(matchIndex, 1); // remove the matched sock
      }
    }
  
    return pairs;
  }

const n = 9;
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

console.log(sockMerchant(n, ar)); 