<reference types="cypress"/>


 // elements
 
 const containsNR = 'New Reservation'
 const startdate=':nth-child(1) > input'
 const enddate =':nth-child(2) > input'
 const Chooseclient= ':nth-child(3) > select'   
 const Chooserooms= ':nth-child(4) > select'
 const amountbill= ':nth-child(5) > select'   
 const savebutton='.blue'
 const backbutton = '[href="/reservations"]'
 const Logoutbutton = '.user > .btn'

 
 //functions


 
function ContainsNr(cy){

    cy.contains(containsNR)

}

function newreservation(cy){

    cy.get(startdate)
    cy.get(enddate)
    cy.get(Chooseclient)
    cy.get(Chooserooms)
    cy.get(amountbill)
    

}


function Backbutton(cy){

    cy.get(backbutton).click()


}

function Logout (cy){

    cy.get(Logoutbutton).click()
    
    
}

function Savebutton(cy){

    cy.get(savebutton).click()


}