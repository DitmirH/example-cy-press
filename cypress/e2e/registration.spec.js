
context('Register for an account', () => {
    before(() => {
      cy.visit('https://www.easyfx.com/signup')
    })
  
    it('I Click on the personal account creation', () => {
      cy.get('h1').should('have.text','let’s get started')
      cy.get('.choose-button').contains('personal').click()
      cy.get('select').select('Dr',{force:true})
      cy.get('#PersonalFullName_FirstName').clear().type('first').click()
      cy.get('#PersonalFullName_MiddleName').clear().type('middle').click()
      cy.get('#PersonalFullName_LastName').clear().type('last').click()
      cy.get('button').contains('next').click()
    })

    it('Select Nationality', () => {
      cy.get('select').select('Honduran',{force:true})
    })

    
  
  })