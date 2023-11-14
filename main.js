// original length = 24
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
// after pop = 23
secretMessage.pop();
// after push = 25
secretMessage.push('to', 'Program')
// replace 'easily' [7] with 'right'
secretMessage[7] = 'right'
// after shift = 24
secretMessage.shift()
// after unshift = 25
secretMessage.unshift('Programming')
// replace 'get'[6], 'right'[7], 'the'[8], 'first'[9], 'time'[10] with 'know'
secretMessage.splice(6, 5, 'know')
// join secret message strings, with space as a seperator
console.log(secretMessage.join(' '));
