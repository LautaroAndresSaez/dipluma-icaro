
const getAllDividers = (x) => {
    const dividers = [];
    for(let i = 1; i < x; i++ ){
        if(x % i === 0){
            dividers.push(i);
        }
    }
    return dividers;
} 

const getSum = (array) => {
    let sum = 0;
    array.forEach(x => sum + x);
    return sum;
}

const isDeficient = (x) => {
    const dividers = getAllDividers(x);
    const sum = getSum(dividers);
    return sum < x;
}

module.exports = isDeficient;