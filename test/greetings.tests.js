describe('The function for the Massage and language', function(){

  it('should greet mfundo in english', function(){

var checkgreet = greeting('mfundo', "English")
    assert.equal('Hello, Mfundo', checkgreet);

  });
  it('should greet mfundo in IsiXhosa', function(){

var checkgreet = greeting('mfundo', "IsiXhosa")
    assert.equal('Molweni, Mfundo', checkgreet);

});
it('should greet mfundo in Mandarin', function(){

var checkgreet = greeting('mfundo', "Mandarin")
  assert.equal('Ni hao, Mfundo', checkgreet);

});

});
