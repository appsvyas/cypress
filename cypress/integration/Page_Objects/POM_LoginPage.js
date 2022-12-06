class pomloginpage{
    getEmailTextbox(){
        return cy.get('#email');
    }
    getPasswordTextbox(){
        return cy.get('#password');
    }
    getSigninButton(){
       return cy.get('.PrimaryButton_primaryBtn__B9RN9');
    }
    getLogoutButton(){
        return cy.get('.SideNavMenu_logout_button__IB0sI > a');
    }
    getPleaseEnterValidEmail(){
        return cy.get(':nth-child(1) > .form-group > div > .text-danger');
    }
    getEmailCombinationNotValid(){
        return cy.get('.text-danger');
    }
    getURL(){
        return cy.visit("https://selfsea-admin-staging.sidebench.dev/");
    }






}

export default pomloginpage
 