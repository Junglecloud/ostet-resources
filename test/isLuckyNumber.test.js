var isLuckyNumber = require( '../lib/isLuckyNumber' ),

    chai = require( 'chai' ),
    expect = chai.expect;

describe( 'isLuckyNumber', function () {

    function expectToBeLucky ( number ) {
        it( "should return `true` for " + number, function () {
            expect( isLuckyNumber( number ) ).to.be.equal( true );
        });
    }

    function expectToDontBeLucky ( number ) {
        it( "should return `false` for " + number, function () {
            expect( isLuckyNumber( number ) ).to.be.equal( false );
        });
    }

    [
        47, 74, 4, 7, 447, 7447, 774, 474, 4777, 777774
    ].forEach( expectToBeLucky );

    [
        2, 5, 6, 8, 10, 11, 12, 13, 14, 16, 7777741
    ].forEach( expectToDontBeLucky );

});
