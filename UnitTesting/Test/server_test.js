const mocha = require('mocha')
const expect = require('chai').expect
const request = require('request')

// from our client side we were using jQuery to make request from our server and test
// for node.js to node.js we will be required to use the module 'request'
let server;
const app = require('../server')
describe('server testing', () => {
    before((done) => {
       server = app.listen(4444, done)
    })
    it('rates should be correct', (done) => {
        request.get('http://localhost:4444/rate', (err,resp,body) => {
            let rates = JSON.parse(body)
            expect(rates.fixed).to.equal(50)
            // to make our asynchronous function into synchronous function we will use a done() callback function
            done()
        })
    })

    after(() => {
        server.close()
    })
})