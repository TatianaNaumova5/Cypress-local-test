describe('Navigation bar', ()=> {
  beforeEach(()=>{
    cy.visit('/user/login')
    cy.get('#normal_login_email').type(Cypress.env('email'))
    cy.get('#normal_login_password').type(Cypress.env('password'))
    cy.get('.login-form-button').click()
  })

  it('Courses', ()=> {
    cy.get('[data-qa="topmenu-Курсы"]').click()
    cy.location('pathname').should('include', '/course')
    cy.contains('Курсы программирования и тестирования').should('be.visible')
  })

  it('Challenges', ()=> {
    cy.get('[data-qa="topmenu-Задачи"]').click()
    cy.location('pathname').should('include', '/challenge')
    cy.contains('Кодинг задачи').should('be.visible')
  })

  it('Interview Questions', ()=> {
    cy.get('[data-qa="topmenu-Интервью"]').click()
    cy.location('pathname').should('include', '/flash')
    cy.contains('Interview practice cards').should('be.visible')
  })

  it('Diary', ()=> {
    cy.get('[data-qa="topmenu-Дневник"]').click()
    cy.location('pathname').should('include', '/diary')
    cy.contains('Daily reports').should('be.visible')
  })

  it('Groups', ()=> {
    cy.get('[data-qa="topmenu-Группы"]').click()
    cy.location('pathname').should('include', '/group')
    cy.contains('Groups').should('be.visible')
  })
})
