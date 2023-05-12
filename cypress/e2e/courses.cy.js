describe('Courses', () => {
  beforeEach(() => {
    cy.visit('/course')
  })

  it('Verify topmenu Courses open new page', () => {
    cy.get('[data-qa="topmenu-Курсы"] > a').click()
  })

  it('Verify h1 "Курсы программирования и тестирования"')
  cy.location('pathname').should('eq', '/course')
  cy.get('h1').should('have.text', 'Курсы программирования и тестирования')
})

it('Verification of courses items', () => {
  cy.get('.card-title')
    .children()
    .each($el => {
      let array = $el.prop('href').split('/') //href was divided by split

      console.log(array, 'element')
      console.log(array[array.length - 1], 'href')
      cy.visit(`/course/${array[array.length - 1]}`)
      cy.location('pathname').should('include', array[array.length - 1])

      //cy.contains( $el.text())
      cy.get('h1').should('contain', $el.text().trim())
      //cy.get('h1').should('have.text', $el.text().trim())
    })
})

//it('Verification the text of courses icons ', () => {
//     let array = [
//         '5ff2005cacc2d5003ae26bc7',
//         '635c05ba659f6d77abf1f4e7',
//         '5d1cbf67086fc30038bf1859',
//         '5f533d699a51f5003cb0fcab',
//         '5fcc749061045d003aa18fba',
//         '5f449251891af4003c44e957',
//         '5f70329bbed3ac003cb1b06c',
//         '6257846e1224311e20f842e9',
//         '6328727967177736dffed1fb',
//         '5c140b2b42f6ea23059cbe8f',
//         '5d1cbad8086fc30038bf1856',
//         '5e8f4bf674a4cd003c2a713c',
//         '60a6b63cbcf8d3003ab76b9a',
//         '62d182a3f64df852198549f8',
//         '63fcf9dbc8dc3fbc269c32c9'
//     ]
//     cy.get('[alt="course preview"]').each((card, i) => {
//         cy.visit(`/course${array[i]}`)
//         console.log(card.text())
//         cy.location('pathname').should('include', array[i])
