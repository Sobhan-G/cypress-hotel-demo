/// <reference types="cypress" />



 // elements

 const containsNR = 'Rooms'
 const createroom = 'h2 > .btn'
 const menubutton =':nth-child(1) > .action > img'
 const deletebutton ='.menu > :nth-child(2)'
 const editbutton ='.menu > :nth-child(1)'
 const backbutton = ':nth-child(3) > .btn'
 const Logoutbutton = '.user > .btn'
  
 //functions
function containsinrooms(cy){

    cy.contains(containsNR)

}

function btncreateroom(cy){

    cy.get(btncreateroom).click()

}

function deleteroom(cy){

    cy.get(menubutton).click()
    cy.get(deletebutton).click()

}
function editroom(cy){

    cy.get(menubutton).click()
    cy.get(editbutton).click()
    
}
function backbtn(cy){

    cy.get(backbutton).click()
    
    
}
function logout(cy){

    cy.get(Logoutbutton ).click()
    
}