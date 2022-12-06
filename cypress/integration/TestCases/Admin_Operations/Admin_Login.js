/// <reference types="Cypress"/>

import pomloginpage from "../../Page_Objects/POM_LoginPage";



describe('SignIn&Logout_Validations', function(){
    const POMloginpage = new pomloginpage();
    
beforeEach(function(){
    cy.fixture('signInpage').then(function(data){
        this.data=data;
    cy.visit("https://selfsea-admin-staging.sidebench.dev/");
    })
    });

it('SignIn_Admin', function(){
    POMloginpage.getEmailTextbox().type(this.data.admin_username);
    POMloginpage.getPasswordTextbox().type(this.data.password);
    POMloginpage.getSigninButton().click();
    POMloginpage.getLogoutButton().click();
    
})


it('UI_Validations_In_SignInpage',function(){
    POMloginpage.getEmailTextbox().type('{enter}');
    POMloginpage.getPasswordTextbox().type('{enter}');
    POMloginpage.getEmailTextbox().click();
    POMloginpage.getPleaseEnterValidEmail().should('have.text','please enter a valid email address');
    POMloginpage.getSigninButton().should('be.disabled');
    })

it('User_Not_Found',function(){
    POMloginpage.getEmailTextbox().type(this.data.userNotFound);
    POMloginpage.getPasswordTextbox().type(this.data.password);
    POMloginpage.getSigninButton().click();
    POMloginpage.getEmailCombinationNotValid().should('have.text','This email/password combination is not valid. Please try using a different email or resetting your password');
})
})