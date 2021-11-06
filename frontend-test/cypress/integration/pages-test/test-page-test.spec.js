/// <reference types="cypress" />

import * as indexfunc from '../../pages/indexpage'
import * as dashboardfunc from '../../pages/dashboard'
import * as targets from '../../targets/targets'



// testcase1-pages

describe('perfom a valid login ', function(){

   

    it('testcase-test-pages', function(){

        cy.visit(targets.base_url)
        cy.wait(2000)
        indexfunc.checkTitleofIndexpage(cy)
        cy.wait(3000)    
        indexfunc.performValidLogin(cy,targets.username,targets.password,'Tester Hotel Overview')
        cy.wait(2000)
        dashboardfunc.performLogout(cy, 'Login')
     
    })

})