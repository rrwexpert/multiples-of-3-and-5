//
// Brian T Nguyen
// Display the sum of multiples numbers of 3 or 5 of a number less then specified limit
//


function isMultiplesOf(num, ofNum) {
    if (num % ofNum === 0)
        return true;
    else
        return false;
}

function sumOfMultiplesOf(n1, n2, limit) {
    var m = Math.min(n1,n2); //determine the smaller numbeer
    var sum = 0;

    for (var i = m; i < limit; i++ ) {
        if (isMultiplesOf(i, n1) || isMultiplesOf(i, n2)) {
            sum += i;
        }
    }

    return sum;
}

function sumOfMultiplesNumber()
{
    var limit = document.getElementById("inputValue").value;
    var sum = 0;
    var m = Math.min(3,5); //determine the smaller numbeer
    var message = "If we list all the natural numbers below " + limit + " that are multiples of 3 or 5, we get ";
 
    sum = sumOfMultiplesOf(3, 5, limit);

    document.getElementById("sumOfMultipleOf3And5").innerHTML = "The sum = " +  sum;

    if (sum === 0) {
        mssage += ' nothing. The sum = 0';
    }
    else {
        for (var i = m; i < limit; i++ ) {
            if (i % 3 === 0 || i % 5 === 0) {
                if (i === limit -1) {
                    message = message + i + ".";
                }
                else {
                    message = message + i + ", ";
                }
            }
        }

        message = message + ' The sum = ' + sum.toString();
    }
 
    document.getElementById("outputValue").innerHTML = message;
    
    // DEBUGGING:
    //console.log(message);
}