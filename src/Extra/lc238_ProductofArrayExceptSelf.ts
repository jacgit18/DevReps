let Thenums = [1, 2, 3, 4];

const ProductofArray = (nums) => {
  let MyN = nums.length;

  let MyOutput = new Array(MyN);

  MyOutput[0] = 1;

  for (let i = 1; i < MyN; i++) {
    MyOutput[i] = nums[i - 1] * MyOutput[i - 1];
    console.log(MyOutput[i]);
  }

  console.log(" ");

  let R = 1;
  for (let i = MyN - 1; i >= 0; i--) {
    MyOutput[i] =  MyOutput[i] * R;
    R = R * nums[i];
    // console.log(R);
  }

  console.log(MyOutput);
};

ProductofArray(Thenums);

//Map version
// var squareNumbers = numberArray.map(number => number*number);
// console.log(squareNumbers);



const ProductofArray2  = (nums) => {
    let MyN = nums.length;
    let Myleft = new Array(MyN);

    let Myright = new Array(MyN);
    let MyOutput = new Array(MyN);

    Myleft[0] = 1;
    Myright[MyN -1] = 1;

   
console.log("Forward ");

for (let i = 1; i < MyN; i++){
    Myleft[i] = nums[i-1] * Myleft[i-1];
    console.log(Myleft)
}


console.log("Backwards ");

for (let i = MyN - 2; i >= 0; i--){
    Myright[i] = nums[i+1] * Myright[i+1];
    console.log(Myright)
}


for (let i = 0; i < MyN; i++){

        MyOutput[i] = Myleft[i] * Myright[i];
    
}
console.log(" ");

console.log(MyOutput);

}

ProductofArray2(Thenums);
