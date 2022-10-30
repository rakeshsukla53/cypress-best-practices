describe('going through all the buttons', function () {
  it('find and validate all the buttons', () => {
    cy.visit(
      'https://nicepage.com/st/726103/text-with-two-buttons-website-template',
    )

    cy.get('a[type=button]').each(($button) => {
      const buttonText = $button.text()
      if (buttonText.includes('Windows') || buttonText.includes('Mac')) {
        cy.wrap($button).click()
      }
    })
  })
})
