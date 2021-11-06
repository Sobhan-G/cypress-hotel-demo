/// <reference types="cypress" />

//elements

const checkTitledashboardpage ='Testers Hotel'
const logoutbutton = ('.user > .btn')
const roomspabutton = (':nth-child(1) > .btn')
const billpabutton = (':nth-child(3) > .btn')
const clientpabutton = ('.blocks > :nth-child(2) > .btn')
const reservationpabutton = (':nth-child(4) > .btn')


//actions / functions

function checkdashboardpage(cy){

  cy.title().should('eq',checkTitledashboardpage)

}



function performLogout (cy, ContentToConfirm){

   cy.get(logoutbutton).click()
    
   cy.contains(ContentToConfirm)

}
    // export

 /*module.exports = {

    checkdashboardpage,
    performLogout
    
} 
*/
