var naming = require('../../lib/bem-naming');

describe('original', function () {
    describe('isElem', function () {
        it('should detect elem', function () {
            naming.isElem('block__elem').should.be.true;
        });
    });
});
