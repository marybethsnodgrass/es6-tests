var expect = require('chai').expect;

describe('arrow functions', function() {
  it("is shorter to write",function() {
    var fn = () => {
      return "hello world"
    };

    expect(fn()).to.equal("hello world");
  });

  it('one parameter can be written without parens', function() {
    var fn = name => {
      return`hello ${name}`;
    };

    expect(fn('mb')).to.equal('hello mb');
  });

  it('binds "this" to the function', function() {
    var that = this;
   setTimeout(() => {
    expect(that).to.eql(this);
   done();
   },0 );
  });
});
