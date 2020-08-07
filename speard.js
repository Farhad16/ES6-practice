const ages1 = [15, 17, 22, 26];
const ages2 = [23, 25, 26, 29];
const ages3 = [31, 36, 37, 38, 41];

//general way of concat

const allAges = ages1.concat(ages2).concat([5]).concat(ages3);
console.log(allAges);

// way of concat array as list 

const allAges2 = [ages1, ages2, [5], ages3];
console.log(allAges2);

// es6 spread operator 

const allAges3 = [...ages1, ...ages2, 5, ...ages3];
console.log(allAges3);

const business = 640;
const minister = 450;
const bcs = 350;

const combine = [business, minister, bcs]
const max = Math.max(...combine)
console.log(max);