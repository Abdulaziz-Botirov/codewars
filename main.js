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


10  // https://www.codewars.com/kata/53670c5867e9f2222f000225/train/javascript

function isOrthogonal(a, b) {

  if (a.length !== b.length) return false;
  let dot = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
  }

  return dot === 0;
}

11 // https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

function arrayDiff(a, b) {
  return a.filter(x => !b.includes(x));
}

12 // https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript

function reverseWords(str) {
  return str
    .split(" ")
    .map(word =>
      word.split("").reverse().join("")
    )
    .join(" ");
}

13 // https://www.codewars.com/kata/5265326f5fda8eb1160004c8/train/javascript

function spinWords(str) {
  return str
    .split(" ")
    .map(word =>
      word.length >= 5
        ? word.split("").reverse().join("")
        : word
    )
    .join(" ");
}
function numberToString(num) {
  return num.toString();
}

14 // https://www.codewars.com/kata/5af15a37de4c7f223e00012d/train/javascript

function menFromBoys(arr) {
  const uniq = [...new Set(arr)];

  const evens = uniq
    .filter(x => x % 2 === 0)
    .sort((a, b) => a - b);

  const odds = uniq
    .filter(x => Math.abs(x % 2) === 1) 
    .sort((a, b) => b - a);

  return evens.concat(odds);
}

15 // https://www.codewars.com/kata/551b4501ac0447318f0009cd/train/javascript

function booleanToString(b){
  return b + "";
}