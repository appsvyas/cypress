/// <reference types="Cypress"/>

import pomloginpage from "../../Page_Objects/POM_LoginPage";
import pomusersTab from "../../Page_Objects/POM_Users";

describe('Invite_Users',function(){
    
    const POMloginpage = new pomloginpage();
    const Useractions = new pomusersTab();

    beforeEach(function(){
        cy.fixture('signInpage').then(function(data){
            this.data=data;
            POMloginpage.getURL();
            POMloginpage.getEmailTextbox().type(this.data.admin_username);
            POMloginpage.getPasswordTextbox().type(this.data.password);
            POMloginpage.getSigninButton().click();
        })
        
     });

     /*it('User_Button_Verification', function(){
         Useractions.getUserButton().should('have.text','Users');
         Useractions.getUserButton().should('be.visible');

     })

     it('Invite_Users_Button_Text', function(){
        Useractions.getUserButton().click();
        Useractions.getInviteUserButton().should('have.text','Invite a User')
        }) */

     it('Selecting_MentorOption', function(){
         Useractions.getUserButton().click();
         Useractions.getInviteUserButton().click();
         Useractions.getUserInviteMentor().click();
         })
    


     





})