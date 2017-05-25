describe('The Radio Btn function', function() {

  it('should check the choice of Radio button', function() {

    assert.equal('Hello', ValueFromRadioBtn('English'));
     assert.equal('Ni hao', ValueFromRadioBtn('Mandarin'));
     assert.equal('Molweni', ValueFromRadioBtn('IsiXhosa'));
  });

});
