'use strict';
var expect = require('chai').expect,
    inline = require('./index');

describe('inline-text', () => {
    it('does the thing', () => {
        var baz = `
            b
            az
        `;

        var str = inline`
            foo
            bar ${baz}
            
            2B    9S
        `;
        
        expect(str).to.eql('foo bar b az 2B    9S');
    })
})
