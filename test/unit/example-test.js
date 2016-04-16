'use strict'

/*
 * Mocha is a test framework.
 * A good pattern to define tests is:
 * ```
 * describe('ClassName', () => {
 *   describe('#methodName', () => {
 *     it('should return always 1', () => {
 *       const c1 = new ClassName()
 *       expect(c1.methodName()).to.equals(1)
 *     })
 *   })
 * })
 * ```
 * https://mochajs.org/#getting-started
 */

/*
 * Chai is an assertion library.
 * You can use things like:
 * ```
 *  expect(a).to.equals(5)
 *  expect(b).to.be.a('string')
 *  expect(c).to.be.an('object')
 * ```
 * http://chaijs.com/api/bdd/
 */

/*
 * chai-string is just a chai plugin that will make it easy to work with strings
 * ```
 * expect('great').to.startsWith('gr')
 * expect('abccba').to.be.palindrome();
 * ```
 * http://chaijs.com/plugins/chai-string/
 */

 // ------------------

/*
 * Pretend that Person is something you want to test,
 * defined on your project files, and imported here
 * ```
 * const Person = require('../../src/person.js')
 * ```
 */
