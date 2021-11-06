<reference types="cypress"/>


 // elements
 
 const containsnroom = 'New Room'
 const roomcategory  = ':nth-child(1) > select'
 const number =  ':nth-child(2) > input'
 const floor =  ':nth-child(3) > input'
 const availablebox = '.checkbox'
 const price = ':nth-child(5) > input'
 const balcony = '[value="balcony"]'
 const ensuite = '[value="ensuite"]'
 const seaview = '[value="sea_view"]'
 const penthouse = '[value="penthouse"]'
 const savebutton='.blue'
 const backbutton = '[href="/rooms"]'
 const Logoutbutton = '.user > .btn'

 
 //functions


 
function Containsroomnr(cy){

    cy.contains(containsnroom)

}

function NewRooms(cy){

    cy.get(roomcategory)
    cy.get(number)
    cy.get(floor)
    cy.get(availablebox).click()
    cy.get(price)
    cy.get(balcony).click()
    cy.get(ensuite).click()
    cy.get(seaview).click()
    cy.get(penthouse).click()
  

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