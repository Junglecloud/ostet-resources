var isSum = require( '../lib/isSum' ),

    chai = require( 'chai' ),
    expect = chai.expect;

describe( 'isSum', function () {

    function xit ( number, expects ) {
        it( "should return "+ expects +" for " + number, function () {
            expect( isSum( number ) ).to.be.equal( expects );
        });
    }

    xit( 1, true ); // 1
    xit( 2, false );
    xit( 3, true ); // 1 + 2
    xit( 4, false );
    xit( 5, false );
    xit( 6, true ); // 1 + 2 + 3
    xit( 7, false );
    xit( 8, false );
    xit( 9, false );
    xit( 10, true ); // 1 + 2 + 3 + 4

});
