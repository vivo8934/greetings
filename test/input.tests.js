describe('The input function', function(){

  it('should check if input is  correctly', function(){

      assert.equal('Mfundo', inputText('mfundo'));
  });
    it('should check if there is an input', function(){

        assert.equal('Vivo', inputText('vivo'));
    });

});
