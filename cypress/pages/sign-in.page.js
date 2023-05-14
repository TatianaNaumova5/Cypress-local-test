class SignInPage {
  get inputEmail() {cy.get('#normal_login_email')}

  get inputPassword() {cy.get('#normal_login_password')}

  get buttonSubmit() {cy.get('.ant-avatar-square')}

  get labelValidationEmail() {return cy.get('#normal_login_email_help')}

  get labelValidationPassword() {return cy.get('#normal_login_password_help')}

  open(){
    return  cy.visit('/user/login')
  }

  signIn(email, password){
    this.inputEmail.type(email)
    this.inputPassword.type(password)
    this.buttonSubmit.click()
  }
}
export default new SignInPage()
