describe('Courses', ()=>{
    cy.visit('https://localcoding.us/user/login')
    cy.get('#normal_login_email').type('tatiananaumova5@gmail.com')
    cy.get('#normal_login_password').type('Liev2020!')
    cy.get('[type="submit"]').click()
    cy.get('[data-qa="topmenu-Курсы"]').click()
    cy.location('pathname').should('include','/course')
  })
  it('QA Manual', ()=>{
    cy.visit('/course/')
  })
