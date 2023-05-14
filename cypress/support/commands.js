import SignInPage from '../pages/sign-in.page';
Cypress.Commands.add('loginByCredentials', (email, password) => {
  SignInPage.open
  // cy.visit('/user/login')
  // cy.get('#normal_login_email').type(email)
  // cy.get('#normal_login_password').type(password)
  // cy.get('.login-form-button').click()
})

Cypress.Commands.add('loginByToken', () => {
  cy.visit('/')
  window.localStorage.setItem('token', Cypress.env('token'))
  window.localStorage.setItem('token', Cypress.env('userId'))
  window.localStorage.setItem('lang', 'en')
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
