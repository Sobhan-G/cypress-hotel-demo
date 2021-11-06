/// <reference types="cypress" />




 // elements
 
 const containsresevation = 'Reservations'
 const createresevation = 'h2 > .btn'
 const backbtn = ':nth-child(3) > .btn'
 const Logoutbtn = '.user > .btn'
 const menuBtn = 'img'
 const editButn = '.menu > :nth-child(1)'
 const deleteButn = '.menu > :nth-child(2)'
  
 //functions
function containsResevation(cy){

    cy.contains(containsresevation)

}

function createResevation(cy){

    cy.get(createresevation).click()

}

function editResevation(cy){

    cy.get(menuBtn).click()
    cy.get(editButn).click()
    cy.get(deleteButn).click()
    
}



function Backbutton(cy){

    cy.get(backbutton).click()

}
function Logout (cy){

    cy.get(Logoutbutton).click()
    
    
}

    // export

    // export

   /* module.exports = {

        checkdashboardpage,
        performLogout
    } 
    */

    