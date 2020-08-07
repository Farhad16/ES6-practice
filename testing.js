function simpleCheck() {
    var count = 0;
    if (count == 0) {
        console.log("count ", count)
        count++;
    } else
        return 3 + 2;
}

const result = simpleCheck()
console.log(result);
console.log(result);