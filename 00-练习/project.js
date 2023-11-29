let names=['赵云','黄忠','关羽','张飞','马超','刘备','曹操'];
function getRandom(min,max){
    return Math.floor(Math.random()*(max-min+1)-min);
}
console.log(names[getRandom(0,names.length-1)]);