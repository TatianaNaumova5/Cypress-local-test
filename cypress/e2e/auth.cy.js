import SignInPage  from '../pages/sign-in.page';
import ProfilePage from '../pages/profile-page';
describe('Auth', () => {
  beforeEach(() => {
    SignInPage.open()
  })

  it('Sign in with valid credentials', () => {
    SignInPage.inputEmail.type(Cypress.env('email'))
    SignInPage.inputPassword.type(Cypress.env('password'))
    SignInPage.buttonSubmit.click()
    cy.get('.ant-avatar-square').should('be.visible');
  })

  it('Check if the placeholder contain input Email', () => {
    SignInPage.inputEmail.should('be.visible');
  })

  it('Sign in form validation', () => {
    SignInPage.inputEmail.should('have.value', '')
    SignInPage.inputPassword.should('have.value', '')
    cy.get('.login-form-button').should('be.disabled');

    SignInPage.inputPassword.type('test')
    cy.get('#normal_login_password_help').should('not.exist')
    cy.get('.login-form-button').should('be.disabled');

    SignInPage.inputEmail.type('test')
    cy.get('#normal_login_email_help')
      .should('have.text', "'email' is not a valid email")
      .should('be.visible')
    cy.get('.login-form-button').should('be.disabled');

    SignInPage.inputEmail.type('@')
    cy.get('#normal_login_email_help')
      .should('have.text', "'email' is not a valid email")
      .should('be.visible')
    cy.get('.login-form-button').should('be.disabled');

    SignInPage.inputEmail.type('example')
    cy.get('#normal_login_email_help')
      .should('have.text', "'email' is not a valid email")
      .should('be.visible')
    cy.get('.login-form-button').should('be.disabled');

    SignInPage.inputEmail.type('.')
    cy.get('#normal_login_email_help')
      .should('have.text', "'email' is not a valid email")
      .should('be.visible')
    cy.get('.login-form-button').should('be.disabled');

    SignInPage.inputEmail.type('com')
    cy.get('#normal_login_email_help').should('not.exist')
    cy.get('.login-form-button').should('be.enabled');

    SignInPage.inputEmail.clear()
    cy.get('#normal_login_email_help').should('have.text', 'Required').should('be.visible')
    cy.get('.login-form-button').should('be.disabled');

    SignInPage.inputPassword.clear()
    cy.get('#normal_login_password_help').should('have.text', 'Required').should('be.visible')
    cy.get('.login-form-button').should('be.disabled');
  })

  it('Check if the placeholder contain input Password', () => {
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

  it('Verification of text ', ()=>{
    cy.get('#normal_login > div:nth-child(5) > div > div');
    cy.get('body').should('contain', 'Нет аккаунта?' );
    cy.get('body').should('contain', 'Забыли пароль?')
      .should('exist')
      .should('be.visible');
  })


  it('Verification of registration link', () => {
    cy.contains('a', 'Зарегистрируйтесь')
      .should('exist')
      .should('have.text', 'Зарегистрируйтесь')
      .should('be.visible')
      cy.contains('a', 'Зарегистрируйтесь').click()
    cy.get('#root > div').should('be.visible')
  });

  it('Verification  of Reset password link', ()=>{
    cy.get('a[href="/user/password/reset"]')
      .should('exist')
      .should('have.text', "Сбросьте его")
      .should('be.visible');
    cy.get('a[href="/user/password/reset"]').click();
    cy.get('#root > div').should('be.visible');
  })

  it('Login with incorrect credentials has massage "Auth failed"', () => {
    SignInPage.inputEmail.type(Cypress.env('email'))
    SignInPage.inputPassword.type('123123')
    SignInPage.buttonSubmit.click()
    cy.get('.ant-notification-notice-message')
      .should('have.text', 'Auth failed')
      .should('be.visible');
  })

  it('Log in with not a valid email', () => {
    SignInPage.inputEmail.type('someEmail')
    SignInPage.inputPassword.type(Cypress.env('password'))
    cy.get('.ant-form-item-explain-error').should('have.text', "'email' is not a valid email");
  })

  it('Email is "Required"', () => {
    SignInPage.inputEmail.type('some-text').clear()
    cy.get('.ant-form-item-explain-error').should('have.text', 'Required');
  })

  it('Password is "Required"', () => {
    SignInPage.inputEmail.type(Cypress.env('email'))
    SignInPage.inputPassword.type('123456').clear()
    cy.get('.ant-form-item-explain-error').should('have.text', 'Required');
  })
})
