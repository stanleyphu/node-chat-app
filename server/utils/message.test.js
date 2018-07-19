var expect = require('expect');

var { generateMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        // store res in variable
        let from = 'testUser';
        let text = 'test message';
        let message = generateMessage(from, text);

        // assert from match
        // assert text match
        expect(message).toInclude({from, text});
        
        // assert createdAt is a number
        expect(message.createdAt).toBeA('number');
    });
});