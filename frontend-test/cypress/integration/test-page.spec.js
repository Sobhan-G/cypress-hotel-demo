/// <reference types="cypress" />

import * as indexfunc from '../pages/indexpage'


// testcase1-pages

describe('perfom a valid login and create a room', function(){

    beforeEach(() => {

        cy.visit('http://localhost:3000')
        cy.wait(3000)
        indexfunc.checkTitleofIndexpage(cy)
        cy.wait(3000)



    })


    it('testcase-1-pages', function(){


        indexfunc.performValidLogin(cy, 'tester01','GteteqbQQgSr88SwNExUQv2ydb7xuf8c','Tester Hotel Overview')

     
    })

})