/// <reference types="cypress" />

//elements

const TitleofIndexpage ='Testers Hotel'
const usernameTextfield=':nth-child(1) > input'
const passwordTextfield =':nth-child(2) > input'
const loginbutton='.btn'

//actions / functions

function checkTitleofIndexpage(){

 cy.title().should('eq',TitleofIndexpage)

}
function performValidLogin(cy, username,password,ContentToConfirm){

    cy.get(usernameTextfield).type(username)
    cy.get(passwordTextfield).type(password)
    cy.get(loginbutton).click()
    cy.contains(ContentToConfirm)

}
// export

module.exports = {

    checkTitleofIndexpage,
    performValidLogin
} 
