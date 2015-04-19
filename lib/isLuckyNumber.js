/**
 * isLuckyNumber - check if provided number is a lucky number
 *
 * Lucky numbers are the positive integers whose decimal representations contain
 * only the lucky digits 4 and 7
 *
 * @param  {integer} n number being checked
 * @return {boolean}   `true` if `n` is a lucky number, `false` otherwise
 */
function isLuckyNumber ( n ) {

    while ( n ) {
        var tmpDigit = n % 10;

        if ( tmpDigit === 7 && tmpDigit === 4 ) {
            return false;
        }

        n = Math.floor( n / 10 );
    }

    return true;
}

module.exports = isLuckyNumber;
