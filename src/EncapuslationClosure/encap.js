function outerFun(outVar) {
    return function innFun(innvar) {
        console.log("test 1 " + outVar);
        console.log('test 2 ' + innvar);
    }
}

// const newFunction = outerFun('out');
// console.log(newFunction);
// console.log(newFunction('in'));


function secretVar(){
    let private1 = "big secret ";
    return function(){
        return private1
    }
}
// acts a private method or vairiabe
console.log(secretVar())
const newFunction2 = secretVar();
console.log(newFunction2())


function secretVar2(){
    let private = "best secret ";
    return function(){
        console.log("new stuff")
    }
}
// const newFunction3 = secretVar2();
// newFunction3()


