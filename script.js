//go through numbers 1 through 100

for(i=1; i < 101; i++){
    
    if((i % 3 == 0) && (i % 5 != 0)){
    //if the number is a multiple of 3, it will print "Fizz."
        console.log("Fizz");
    }

    else if((i % 5 == 0) && (i % 3 !=0)){
    //if the number is a multiple of 5, it will print "Buzz."
        console.log("Buzz");
    }

    else if((i % 3 == 0) && (i % 5 == 0)){
    //if the number is both a multiple of 3 & 5, it will print "FizzBuzz."
        console.log("FizzBuzz");
    }

    else{
        console.log(i);
    }

}