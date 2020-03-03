class SortedList {
  
  constructor() {
    this.items = [],
    this.length = 0
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a,b) => a - b)
    this.length = this.items.length
  }

  get(pos) {
    
  if (pos > this.items.length ) {
  throw new Error("OutOfBounds");   
  }
  return this.items.indexOf(pos);
  }

  max() {
    if (this.length === 0) {
        throw new Error("EmptySortedList");
    } 
    // this.items.sort((a,b) => a - b)
    return this.items[Number(this.items.length) - 1];
  }

  min() {
    if (this.length === 0) {
        throw new Error();
    } else {
      // this.items.sort((a, b) => a - b);
      return this.items[0]
    }
  }

  sum() {
    if (this.items.length > 0) {
      return this.items.reduce((a, b) => a + b, 0);
    }
    return 0
  }

  avg() {
   if (this.items.length > 0) {
     let sum = this.items.reduce((a, b) => a + b, 0);
     let den = this.items.length;
     return sum / den;
   }
        throw new Error();

  }
}

module.exports = SortedList;