describe('Profile', () => {
  beforeEach(() => {
    cy.loginByCredentials(Cypress.env('email'), Cypress.env('password'))
    //cy.visit(`/profile/${Cypress.env('userId')}`)
    //cy.loginByToken()
    // cy.visit('/user/login')
    // cy.get('#normal_login_email').type(Cypress.env('email'))
    // cy.get('#normal_login_password').type(Cypress.env('password'))
    // cy.get('.login-form-button').click()
  })

  it('Sign out', () => {
    cy.get('a >.ms-2').click()
    cy.get('[data-qa="logout"]').click()

    cy.location('pathname').should('eq', '/')
  })
})


