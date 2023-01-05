const stringLength =(string) => {
    let stringcount = string.length;
    if(stringcount >=1 && stringcount <= 10){

    let count = 0;

    for(let char of string) {
        count++;
    }

    return count;
}
else {
    return 'please enter string with length between 1 and 10';
}
}
  module.exports = stringLength