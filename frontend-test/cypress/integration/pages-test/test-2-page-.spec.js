/// <reference types="cypress" />

import * as indexfunc from '../../pages/indexpage'
import * as c from '../../pages/dashboard'
import * as c from '../../pages/bills'
import * as c from '../../pages/clients'
import * as c from '../../pages/hotel-overview'
import * as c from '../../pages/reservations'
import * as c from '../../pages/rooms'
import * as c from '../../pages/newbill'
import * as c from '../../pages/newclient'
import * as c from '../../pages/newreservation'
import * as c from '../../pages/newroom'
import * as targets from '../../targets/targets'



// testcase2-pages



describe('perfom a valid login and creat a new Client', function(){

   

    it('testcase-2-pages', function(){

        cy.visit(targets.base_url)
        cy.wait(1000)
        indexfunc.checkTitleofIndexpage(cy)
        cy.wait(1000)    
        indexfunc.performValidLogin(cy,targets.username,targets.password,'Tester Hotel Overview')
        cy.wait(1000)
        cy.get(createClient).click()
        cy.get(names).type(Name)
        cy.get(email).type(Email)
        cy.get(telephone).type(Phone)
        cy.get(savebutton).click()
        cy.wait(1000)
        cy.get(backbutton).click()
        cy.get(Logoutbutton).click()
        

     
    })

})