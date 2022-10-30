# cypress-best-practices


# How Cypress Intercept Works
https://slides.com/bahmutov/how-cy-intercept-works
https://docs.cypress.io/api/commands/intercept#Interception-lifecycle

**Step 1** 

![](../../../../../var/folders/jg/dmx_y5jx4_l01ygkm3f4f4w40000gq/T/TemporaryItems/NSIRD_screencaptureui_56YS6U/Screen Shot 2022-10-29 at 8.59.31 PM.png)


**Step 2**

![](../../../Desktop/Screen Shot 2022-10-29 at 9.01.12 PM.png)

# Add as much/many assertions as possible 

Retry Ability - https://docs.cypress.io/guides/core-concepts/retry-ability#Disable-retry

https://docs.cypress.io/guides/core-concepts/retry-ability#Alternate-commands-and-assertions

# Cypress is asynchronous and use the following three methods to access return values of the cypress commands 

* Using Closures
* Using Variables
* Using Aliases

# Cypress is only retrying the last command before assertions 

For a variety of implementation reasons, Cypress commands only retry the last command before the assertion. In our test

# cy.get and cy.contains

instead of cy.get(selector).should('contain', text) or cy.get(selector).contains(text) chain, 
we recommend using cy.contains(selector, text) which is retried automatically as a single command

# Use .should() with a callback

# Use aliases

# use of recurse function to retry the cypress commands 

https://github.com/bahmutov/cypress-recurse
another example of cypress commands - https://www.youtube.com/watch?v=s2_467yUF2Y








