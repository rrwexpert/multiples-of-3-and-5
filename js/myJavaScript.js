//
// Brian T Nguyen
//


function isMultiplesOf(num, ofNum) {
    if (num % ofNum === 0)
        return true;
    else
        return false;
}

function sumOfMultiplesOf(num, ofNum) {
    var i = 0;
    var sum = 0;

    for (i = 0; i < num; i++ ) {
        if (isMultiplesOf(i, ofNum)) {
            sum += i;
        }
    }

    return sum;
}

function sumOfMultiplesNumber()
{
    var upperBoundNumber = document.getElementById("inputValue").value;
    var listOfMultiplesOfNumber = [3,5];
    var sumOfMultiplesOfNumbers = 0;

    for ( i = 0; i < listOfMultiplesOfNumber.length; i++) {
        sumOfMultiplesOfNumbers += sumOfMultiplesOf(upperBoundNumber, listOfMultiplesOfNumber[i] );
    }

    document.getElementById("outputValue").innerHTML = "Sum of multiples numbers of 3 or 5 below " + upperBoundNumber + " = " + sumOfMultiplesOfNumbers.toString();
    
    // DEBUGGING:
    //console.log("Sum of multiples numbers of 3 or 5 below " + upperBoundNumber + " = " + sumOfMultiplesOfNumbers);

}