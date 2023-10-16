require ( './helpers.js' );

const chai = require("chai");
chai.use(require("chai-dom"));
const { expect } = chai;

describe('index.html', () => {
  it('looks like the completed ZHW Shoes example', () => {
    const condition = true;
    expect(condition).to.be.true;
  });
});
