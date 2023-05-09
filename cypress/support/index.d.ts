declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Sign in using email & password
     * @example
     * cy.login('foo@bar.com', '123456')
     */
    login(email: string, password: string): Chainable<any>
  }
}
