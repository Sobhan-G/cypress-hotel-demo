/// <reference types="cypress" />




 // elements
 
 const containsClients = 'Clients'
 const createclient = 'h2 > .btn'
 const creatclientButton= 'h2 > .btn'
 const backbutton = ':nth-child(3) > .btn'
 const Logoutbutton = '.user > .btn'
  
 //functions
function containsclient(cy){

    cy.contains(containsClients)

}

function createclient(cy){

    cy.get(createclient).click()

}

function Backbutton(cy){

    cy.get(backbutton).click()

}
function Logout (cy){

    cy.get(Logoutbutton).click()
    
    
}



    // export

   /* module.exports = {

        checkdashboardpage,
        performLogout
    } 
    */
