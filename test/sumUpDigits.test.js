var sumUpDigits = require( '../lib/sumUpDigits' ),

    chai = require( 'chai' ),
    expect = chai.expect;

describe( 'sumUpDigits', function () {

    it( "should return 5 for \"2 apples, 12 oranges\"", function () {
        expect( sumUpDigits( "2 apples, 12 oranges" ) ).to.be.equal( 5 );
    });

    it( "should return 3 for \"1 heart, 1 mind, 1 soul\"", function () {
        expect( sumUpDigits( "1 heart, 1 mind, 1 soul" ) ).to.be.equal( 3 );
    });

});
