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
    ).as('wait')

    cy.visit('https://todomvc.com/examples/vue/')

    cy.wait('@wait').then((_) => {
      cy.get('.quote.speech-bubble p').should(
        'contain.text',
        'Vue.js provides efficient MVVM data bindings with a simple',
      )
    })
  })
})
