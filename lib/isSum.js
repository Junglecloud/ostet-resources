/**
 * isSum - check if it is a continuously sum of integers from `1` to `n`
 *
 * @param  {integer} value integer being checked
 * @return {boolean}       `true` if `value` is equal to sum of all integers
 * from `1` up to `n`, false otherwise
 */
function isSum ( value ) {

    var i = 1;

    while ( value ) {
        value -= i;
        i++;
    }

    if ( ! value ) {
        return true;
    }

    return false;
}


module.exports = isSum;
