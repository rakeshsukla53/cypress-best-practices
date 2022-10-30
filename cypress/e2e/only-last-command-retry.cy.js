/// <reference types="cypress" />

describe('the last command is retried in cypress', () => {
  it('visit the todo site', () => {
    cy.intercept(
      {
        url: 'https://todomvc.com/learn.json',
        middleware: true,
      },
      (req) => {
        req.on('response', (res) => {
          // delaying by 10 seconds
          res.setDelay(3000)
        })
      },
    )

    cy.visit('https://todomvc.com/examples/vue/')

    // this is much better
    cy.get('.quote.speech-bubble p').should(
      'contain.text',
      'Vue.js provides efficient MVVM data bindings with a simple',
    )

    // this is not recommended
    cy.get('.quote.speech-bubble')
      .should('exist')
      .find('p')
      .should(
        'contain.text',
        'Vue.js provides efficient MVVM data bindings with a simple',
      )

    // this is not recommended
    cy.get('.quote.speech-bubble')
      .find('p')
      .should(
        'contain.text',
        'Vue.js provides efficient MVVM data bindings with a simple',
      )
  })
})
