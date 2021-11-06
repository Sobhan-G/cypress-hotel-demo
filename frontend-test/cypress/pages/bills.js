/// <reference types="cypress" />




 // elements
 
 const containsbill = 'Bills'
 const createbill = 'h2 > .btn'
 const backbutton = ':nth-child(3) > .btn'
 const Logoutbutton = '.user > .btn'
 const menuButton = 'img'
 const editButton = '.menu > :nth-child(1)'
 const deleteButton = '.menu > :nth-child(2)'
  
 //functions
function containsBills(cy){

    cy.contains(containsbill)

}

function createBill(cy){

    cy.get(createbill).click()

}

function editBill(cy){

    cy.get(menuButton).click()
    cy.get(editButton).click()
    cy.get(editButton).click()
    
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

    