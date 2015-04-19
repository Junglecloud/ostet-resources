var numberOfEvenDigits = require( '../lib/numberOfEvenDigits' ),

    chai = require( 'chai' ),
    expect = chai.expect;

describe( 'numberOfEvenDigits', function () {

    it( "should return 2 for 1010", function () {
        expect( numberOfEvenDigits( 1010 ) ).to.be.equal( 2 );
    });

    it( "should return 1 for 123", function () {
        expect( numberOfEvenDigits( 123 ) ).to.be.equal( 1 );
    });

});
