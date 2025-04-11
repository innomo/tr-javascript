function bonAppetit(bill, k, b) {
    let totalShared = 0;
  
    for (let i = 0; i < bill.length; i++) {
      if (i !== k) {
        totalShared += bill[i];
      }
    }
  
    const anna = totalShared / 2;
  
    if (b === anna) {
      console.log("Bon Appetit");
    } else {
      console.log(b - anna);
    }
  }
  
bonAppetit([3, 10, 2, 9], 1, 12);
bonAppetit([3, 10, 2, 9], 1, 7);
