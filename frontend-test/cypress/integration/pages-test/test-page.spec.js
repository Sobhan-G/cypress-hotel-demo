/// <reference types="cypress" />

import * as indexfunc from '../../pages/indexpage'
import * as dashboardfunc from '../../pages/dashboard'


// testcase1-pages

describe('perfom a valid login ', function(){

   //  beforeEach(() => {

        


    //})


    it('testcase-1-pages', function(){

        cy.visit('http://localhost:3000')
        cy.wait(2000)
        indexfunc.checkTitleofIndexpage(cy)
        cy.wait(3000)    
        indexfunc.performValidLogin(cy, 'tester01','GteteqbQQgSr88SwNExUQv2ydb7xuf8c','Tester Hotel Overview')
        cy.wait(2000)
        dashboardfunc.performLogout(cy, 'Login')
     
    })

})