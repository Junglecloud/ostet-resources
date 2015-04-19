/**
 * numberOfEvenDigits - find the number of even digits in a given integer
 *
 * @param  {integer} n positive integer
 * @return {integer}   number of even digits
 */
function numberOfEvenDigits ( n ) {
    var result = 0;

    while ( n ) {

        if ( n % 2 === 0 ) {
            result++;
        }

        n /= 10;
    }

    return result;
}

module.exports = numberOfEvenDigits;
