 <reference types="cypress"/>

const { functions } = require("cypress/types/lodash")


 // elements
 // Client
 const containsNc = 'New Client'
 const createClient = 'h2 > .btn'
 const names = ':nth-child(1) > input'
 const email = ':nth-child(2) > input'
 const telephone= ':nth-child(3) > input'   
 const savebutton='.blue'
 const backbutton = '[href="/clients"]'
 const Logoutbutton = '.user > .btn'

 const Name= 'sobhan'
 const Email='gilani.sobhan@gmail,com'
 const Phone='073-5950450'
  
 //functions


 
function ContainsNc(cy){

    cy.contains(containsNc)

}

function CreateClient(cy){

    cy.get(createClient).click()
    cy.get(names)
    cy.get(email)
    cy.get(telephone)
    cy.get(savebutton).click()
    cy.get(backbutton).click()
    cy.get(Logoutbutton).click()

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