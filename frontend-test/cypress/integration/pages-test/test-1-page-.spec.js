/// <reference types="cypress" />

import * as indexfunc from '../../pages/indexpage'
import * as dashboardfunc from '../../pages/dashboard'
import * as targets from '../../targets/targets'



// testcase1-pages

describe('perfom a valid login and create a room', function(){

   

    it('testcase-1-pages', function(){

        cy.visit(targets.base_url)
        cy.wait(1000)
        indexfunc.checkTitleofIndexpage(cy)
        cy.wait(1000)    
        indexfunc.performValidLogin(cy,targets.username,targets.password,'Tester Hotel Overview')

        

      // skriv kod för att skapa ett nytt rum sen logga ut 

        //cy.wait(2000)
        //dashboardfunc.performLogout(cy, 'Login')

     
    })

})