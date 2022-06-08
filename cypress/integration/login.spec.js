
context('Login to easyFx', () => {
  before(() => {
    cy.visit('')
  })

  it('I am on the login page of easyFx', () => {
    cy.get('h1').contains('login').should('be.visible')
  })

  it('Error message for required fields that are not filled in ', () => {
    cy.get('#BtnLogin').click()
    cy.get('#ClientID-error')
    cy.get('#UserID-error').should('have.text', 'Required')
    cy.get('#Password-error').should('have.text', 'Required')
  })

  it('Enter ClientID', () => {
    cy.get('#ClientID').clear().type('0000')
  })

  it('Enter userID', () => {
    cy.get('#UserID').clear().type('12345678')
  })

  it('Enter Password', () => {
    cy.get('#Password').clear().type('invalidpassword')
  })

})