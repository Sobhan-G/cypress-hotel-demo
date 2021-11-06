<reference types="cypress"/>


 // elements
 
 const containsNB = 'New Bill'
 const amount = 'input' 
 const savebutton='.blue'
 const paidbox='.checkbox' 
 const backbutton = '[href="/bills"]'
 const Logoutbutton = '.user > .btn'

 
 //functions


 
function ContainsNb(cy){

    cy.contains(containsNb)

}

function newbill(cy){

    cy.get(amount)
    cy.get(paidbox).click()

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