1 // https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/javascript

function rowSumOddNumbers(n) {
    return n ** 3;
}

2 // https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

function likes(names) {
    if (names.length === 0) {
        return "no one likes this";
    } else if (names.length === 1) {
        return `${names[0]} likes this`;
    } else if (names.length === 2) {
        return `${names[0]} and ${names[1]} like this`;
    } else if (names.length === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else {
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }
}

3  // https://www.codewars.com/kata/53369039d7ab3ac506000467/train/javascript

function boolToWord(bool) {
    if (bool) {
        return "Yes";
    } else {
        return "No";
    }
}

4 //   https://www.codewars.com/kata/551f37452ff852b7bd000139/train/javascript

function addBinary(a, b) {

    const sum = a + b;


    return sum.toString(2);
}


console.log(addBinary(1, 1));  // "10"
console.log(addBinary(5, 9));  // "1110"
console.log(addBinary(0, 0));  // "0"
console.log(addBinary(2, 3));  // "101"


5 //   https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript

function abbrevName(name) {

    const parts = name.split(" ");


    const firstInitial = parts[0][0].toUpperCase();
    const secondInitial = parts[1][0].toUpperCase();


    return `${firstInitial}.${secondInitial}`;
}

6 //   https://www.codewars.com/kata/582cb0224e56e068d800003c/train/javascript

function litres(time) {
    return Math.floor(time * 0.5);
}


7   // https://www.codewars.com/kata/5784c89be5553370e000061b/train/javascript

function maxProduct(numbers) {
    let max1 = -Infinity;
    let max2 = -Infinity;
  
    for (let num of numbers) {
      if (num > max1) {
        max2 = max1;
        max1 = num;
      } else if (num > max2) {
        max2 = num;
      }
    }
  
    return max1 * max2;
  }
  
  
8   // https://www.codewars.com/kata/53af2b8861023f1d88000832/train/javascript

function areYouPlayingBanjo(name) {
    if (name[0].toLowerCase() === 'r') {
      return name + " plays banjo";
    } else {
      return name + " does not play banjo";
    }
  }

9    //   https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

function duplicateEncode(word) {

    const lower = word.toLowerCase();
  
  
    const counts = {};
    for (let ch of lower) {
      counts[ch] = (counts[ch] || 0) + 1;
    }
  
  
    let result = "";
    for (let ch of lower) {
      result += counts[ch] === 1 ? "(" : ")";
    }
    
    return result;
  }