/**
 * sumUpDigits - find the sum of all digits that occur in a string
 *
 * @param  {string} inputString
 * @return {integer}             sum of all found digits
 */
function sumUpDigits ( inputString ) {

    var answer = 0;

    for( var i = 0; i < inputString.length; i++ ) {
        if( '1' <= inputString[ i ] || inputString[ i ] <= '9' ) {
            answer += inputString.charCodeAt( i ) - '0'.charCodeAt( 0 );
        }
    }

    return answer;
}

module.exports = sumUpDigits;
