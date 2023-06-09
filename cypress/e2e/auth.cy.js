import SignInPage  from '../pages/sign-in.page';
import ProfilePage from '../pages/profile-page';
describe('Auth', () => {
  beforeEach(() => {
    SignInPage.open()
  })
  it('Sign in with valid credentials', () => {
    cy.get('#normal_login_email').type(Cypress.env('email'))
    cy.get('#normal_login_password').type(Cypress.env('password'))
    cy.get('.login-form-button').click()
    cy.get('.ant-avatar-square').should('be.visible')
    cy.get('.ant-avatar-square').should('be.visible');
  })

  it('Check if the placeholder contain input Email', () => {
    cy.get('#normal_login_email').should('be.visible')
    cy.get('#normal_login_email').should('be.visible');
  })

  it('Sign in form validation', () => {
    cy.get('#normal_login_email').should('have.value', '')
    cy.get('#normal_login_password').should('have.value', '')
    cy.get('.login-form-button').should('be.disabled')
    cy.get('.login-form-button').should('be.disabled');

    cy.get('#normal_login_password').type('test')
    cy.get('#normal_login_password_help').should('not.exist')
    cy.get('.login-form-button').should('be.disabled')
    cy.get('.login-form-button').should('be.disabled');

    cy.get('#normal_login_email').type('test')
    cy.get('#normal_login_email_help')
      .should('have.text', "'email' is not a valid email")
      .should('be.visible')
    cy.get('.login-form-button').should('be.disabled')
    cy.get('.login-form-button').should('be.disabled');

    cy.get('#normal_login_email').type('@')
    cy.get('#normal_login_email_help')
      .should('have.text', "'email' is not a valid email")
      .should('be.visible')
    cy.get('.login-form-button').should('be.disabled')
    cy.get('.login-form-button').should('be.disabled');

    cy.get('#normal_login_email').type('example')
    cy.get('#normal_login_email_help')
      .should('have.text', "'email' is not a valid email")
      .should('be.visible')
    cy.get('.login-form-button').should('be.disabled')
    cy.get('.login-form-button').should('be.disabled');

    cy.get('#normal_login_email').type('.')
    cy.get('#normal_login_email_help')
      .should('have.text', "'email' is not a valid email")
      .should('be.visible')
    cy.get('.login-form-button').should('be.disabled')
    cy.get('.login-form-button').should('be.disabled');

    cy.get('#normal_login_email').type('com')
    cy.get('#normal_login_email_help').should('not.exist')
    cy.get('.login-form-button').should('be.enabled')
    cy.get('.login-form-button').should('be.enabled');

    cy.get('#normal_login_email').clear()
    cy.get('#normal_login_email_help').should('have.text', 'Required').should('be.visible')
    cy.get('.login-form-button').should('be.disabled')
    cy.get('.login-form-button').should('be.disabled');

    cy.get('#normal_login_password').clear()
    cy.get('#normal_login_password_help').should('have.text', 'Required').should('be.visible')
    cy.get('.login-form-button').should('be.disabled')
    cy.get('.login-form-button').should('be.disabled');
  })

  it('Check if the placeholder contain input Password', () => {
    cy.get('#normal_login_password').should('be.visible')
    cy.get('#normal_login_password').should('be.visible');
  })

  it('Verification of logo', () => {
    cy.get('.site-name')
      .should('exist')
      .should('be.visible')
      .should('have.text', 'Local Coding');
    cy.get('.site-name').click();
    cy.get('#root').should('be.visible');
  });

  it('Login with incorrect credentials has massage "Auth failed"', () => {
    cy.get('#normal_login_email').type(Cypress.env('email'))
    cy.get('#normal_login_password').type('123123')
    cy.get('.login-form-button').click()
    cy.get('.ant-notification-notice-message')
      .should('have.text', 'Auth failed')
      .should('be.visible')
      .should('be.visible');
  })

  it('Log in with not a valid email', () => {
    cy.get('#normal_login_email').type('someEmail')
    cy.get('#normal_login_password').type('Liev2020!')
    cy.get('.ant-form-item-explain-error').should('have.text', "'email' is not a valid email")
    cy.get('#normal_login_password').type(Cypress.env('password'))
    cy.get('.ant-form-item-explain-error').should('have.text', "'email' is not a valid email");
  })

  it('Email is "Required"', () => {
    cy.get('#normal_login_email').type('some-text').clear()
    cy.get('.ant-form-item-explain-error').should('have.text', 'Required')
    cy.get('.ant-form-item-explain-error').should('have.text', 'Required');
  })

  it('Password is "Required"', () => {
    cy.get('#normal_login_email').type(Cypress.env('email'))
    cy.get('#normal_login_password').type('123456').clear()
    cy.get('.ant-form-item-explain-error').should('have.text', 'Required')
    cy.get('.ant-form-item-explain-error').should('have.text', 'Required');
  })
})
