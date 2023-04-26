describe('Auth', ()=>{
  it('Sign in with valid credentials', ()=>{
cy.visit('https://localcoding.us/user/login')
cy.get('#normal_login_email').type('tatiananaumova5@gmail.com')
    cy.get('#normal_login_password').type('Liev2020!')
    cy.get('.login-form-button').click()
    cy.get('.ant-avatar-square').should('be.visible')
  })

  it('Login with incorrect credentials', () => {
    AuthPage.logIn(Cypress.env('email'), '123456')

    cy.location('pathname').should('include', '/user/login')
    AuthPage.toast.should('be.visible').should('have.text', 'Auth failed')
  })

  it('Log in with not a valid email', () => {
    cy.get('#normal_login_email').type('test')
    cy.get('.ant-form-item-explain-error').should('have.text', "'email' is not a valid email")
  })

  it('Email is "Required"', () => {
    cy.get('#normal_login_email').type('some-text').clear()
    cy.get('.ant-form-item-explain-error').should('have.text', 'Required')
  })

  it('Password is "Required"', () => {
    cy.get('#normal_login_email').type(Cypress.env('email'))
    cy.get('#normal_login_password').type('123456').clear()
    cy.get('.ant-form-item-explain-error').should('have.text', 'Required')
  })
})
