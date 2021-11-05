/// <reference types="cypress" />

//elements

const checkTitledashboardpage ='Testers Hotel'
const logoutbutton = ('.user > .btn')
//const usernameTextfield=':nth-child(1) > input'
//const passwordTextfield =':nth-child(2) > input'
//const loginbutton='.btn'

//actions / functions

function checkdashboardpage(cy){

  cy.title().should('eq',checkTitledashboardpage)

}
function performLogout (cy, ContentToConfirm){

   cy.get(logoutbutton).click()
    
   cy.contains(ContentToConfirm)

}
    // export

 module.exports = {

    checkdashboardpage,
    performLogout
} 
