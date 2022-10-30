/// <reference types="cypress" />

describe('using contains instead of get select command', () => {
  it('visit the todo site', () => {

    cy.intercept(
        {
          url: 'https://todomvc.com/learn.json',
          middleware: true,
        },
        (req) => {
          req.on('response', (res) => {
            // delaying by 10 seconds
            res.setDelay(2000)
          })
        }
    )


    // cy.intercept('GET', 'https://todomvc.com/learn.json', () => {
    //   Cypress.Promise.delay(3_0000)
    // })

    // function waitForSomething() {
    //   // return a promise that resolves after 1 second
    //   return new Cypress.Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve('foo')
    //     }, 3000)
    //   })
    // }
    //
    // cy.intercept('https://todomvc.com/learn.json', (req) => {
    //   req.continue((res) => {
    //     // the response will not be sent to the browser until
    //     // 'waitForSomething()' resolves
    //     return waitForSomething()
    //   })
    // }).as('wait')


    cy.visit('https://todomvc.com/examples/vue/')
    const companyName = 'Bread Financial'

    Cypress._.times(10).forEach((number) => {
      cy.get('.new-todo')
        .type(`${companyName}${number}`)
        .type('{enter}')
    })

    // contains already has assertions so we don't need to add another layer
    // contains yields a single element
    // get vs contains

    Cypress._.times(10).forEach((number) => {
      cy.contains(`${companyName}${number}`)
    })

    cy.get('.todo-list')
      .children()
      .should('have.length', 10)
  })
})
