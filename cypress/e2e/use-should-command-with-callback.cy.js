/// <reference types="cypress" />

describe('use should with a callback', () => {
  it('visit the todo site', () => {

    cy.visit('http://time-time.net/timer/digital-clock.php')

    // it will keep retrying
    // cy.get('div[id=timenow]').should('contain.text', '2:32')

    // this is not recommended
    cy.get('div[id=timenow]').then(($time) => {
      expect($time.text()).contains('2:33')
    })

  })
})
