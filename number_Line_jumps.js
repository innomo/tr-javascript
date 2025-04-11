function kangaroo(x1, v1, x2, v2) {
    if (v1 === v2) {
      return x1 === x2 ? "YES" : "NO";
    }
  
    const noOfjumps = (x2 - x1) / (v1 - v2);
  
    if (noOfjumps >= 0 && Number.isInteger(noOfjumps)) {
      return "YES";
    } else {
      return "NO";
    }
  }
  
console.log(kangaroo(0, 3, 4, 2)); 
console.log(kangaroo(0, 2, 5, 3));
