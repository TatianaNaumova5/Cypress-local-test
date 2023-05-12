// import MainPage from '../pages/app/main.page'
// import CoursesPage from '../pages/app/courses.page'
// import InterviewQuestionsPage from '../pages/app/interview-questions.page'
// import DiaryPage from '../pages/app/diary.page'
// import GroupsPage from '../pages/app/groups.page'
// import ChallengesPage from '../pages/app/challenges.page'
// import LogoPage from '../pages/app/logo.page'
//
// describe('Navigation', () => {
//   beforeEach(() => {
//     cy.login(Cypress.env('email'), Cypress.env('password'))
//     MainPage.open()
//   })
//
//   it('Courses', () => {
//     MainPage.navbar.linkCourses.click()
//     CoursesPage.path.should('include', '/course')
//     CoursesPage.header.should('be.visible')
//   })
//
//   it('Interview Questions', () => {
//     MainPage.navbar.linkInterviewQuestions.click()
//     InterviewQuestionsPage.path.should('include', '/flash')
//     InterviewQuestionsPage.header.should('be.visible')
//   })
//
//   it('Diary', () => {
//     MainPage.navbar.linkDiary.click()
//     DiaryPage.path.should('include', '/diary')
//     DiaryPage.header.should('be.visible')
//   })
//
//   it('Groups', () => {
//     MainPage.navbar.linkGroups.click()
//     GroupsPage.path.should('include', '/group')
//     GroupsPage.header.should('be.visible')
//   })
//
//   it('Challenges', () => {
//     MainPage.navbar.linkChallenges.click()
//     ChallengesPage.path.should('include', '/challenge')
//     ChallengesPage.header.should('be.visible')
//   })
//
//   it('Go to main page through logo', () => {
//     MainPage.navbar.linkGoToMainPageThroughLogo.click()
//     LogoPage.path.should('include', '/')
//     LogoPage.header.should('be.visible')
//   })
// })
