/// <reference types="cypress" />

import { recurse } from 'cypress-recurse'

describe('use should with a callback', () => {
  it('visit the todo site', () => {
    cy.visit('http://time-time.net/timer/digital-clock.php')

    // it will keep retrying
    // cy.get('div[id=timenow]').should('contain.text', '2:32')

    recurse(
      () => cy.reload().get('div[id=timenow]'),
      ($time) => {
        expect($time.text()).contains('3:27')
      },
        {
        limit: 100, timeout: 30000, delay: 500
        }
    )

    // this is not recommended
    // cy.get('div[id=timenow]').should(($time) => {
    //   expect($time.text()).contains('2:33')
    // })
  })
})
