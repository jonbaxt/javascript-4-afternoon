function counterFactory(value) {
    // Code here
    return {
      inc: function() {
        ++value;
        return value;
      },
      dec: function() {
        --value;
        return value;
      }
    };
  }
  
  let counter = counterFactory(10);
  console.log(counter.dec())
  counter.inc() // 11
  counter.inc() // 12
  counter.inc() // 13
  counter.dec() // 12