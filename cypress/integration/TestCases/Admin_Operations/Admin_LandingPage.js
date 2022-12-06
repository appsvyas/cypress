/// <reference types="Cypress"/>

import pomloginpage from "../../Page_Objects/POM_LoginPage";


describe('Admin_After_Login',function(){
    const POMloginpage = new pomloginpage();


    before(function(){
});
    beforeEach(function(){
        cy.fixture('signInpage').then(function(data){
            this.data=data;
        })
        cy.visit("https://selfsea-admin-staging.sidebench.dev/");
        
       })

    it('Admin_Leftside_Menubar',function(){
        POMloginpage.getEmailTextbox().type(this.data.admin_username)
        POMloginpage.getPasswordTextbox().type(this.data.password)
        POMloginpage.getSigninButton().click();
        cy.get('.accordion').find('[type="button"]').then(function(values){
            const b = values.text();
            cy.log(b);
            
            
        })
       

    });
    

    
});