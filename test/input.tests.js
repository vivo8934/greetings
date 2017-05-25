describe('The input function', function(){

    it('should check if there is an input', function(){

        assert.equal('Vivo', inputText('vivo'));
        assert.equal('Vivo', inputText('Vivo'));

    });

});
