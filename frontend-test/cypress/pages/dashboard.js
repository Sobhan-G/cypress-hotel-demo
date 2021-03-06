/// <reference types="cypress" />

//elements

const checkTitledashboardpage ='Testers Hotel'
const logoutbutton = ('.user > .btn')


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
