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
        cy.fixture('user_data').then(function(data){
            this.userdata=data;
        })
        
     });

     

     it('User_Button_Verification', function(){
         Useractions.getUserButton().should('have.text','Users');
         Useractions.getUserButton().should('be.visible');

     })

     it('Invite_Users_Button_Text', function(){
        Useractions.getUserButton().click();
        Useractions.getInviteUserButton().should('have.text','Invite a User')
        }) 

     it('Select_ModeratorOption', function(){
         Useractions.getUserButton().click();
         Useractions.getInviteUserButton().click();
         Useractions.getUserInviteModerator().click();
         Useractions.getUserModeratorTitle().should('have.text','Invite a Moderator');
         Useractions.getUserModeratorBodyText().should('include.text','The Moderator will receive an email invitation.');
         Useractions.getUserModeratorEmailHeader().should('have.text','Email');
         Useractions.getUserModeratorSendInvitation().should('have.text','Send Invitation');
         Useractions.getUserModeratorSendInvitation().should('be.disabled');
         Useractions.getUserModeratorCloseButtonText().should('have.text','Close');
        })

    it('Sending_Mailto_Moderator', function(){
        Useractions.getUserButton().click();
        Useractions.getInviteUserButton().click();
        Useractions.getUserInviteModerator().click();
        Useractions.getUserModeratorEmailTextbox().type(this.userdata.user_moderator_email);
        Useractions.getUserModeratorSendInvitation().click();
        Useractions.getUserModeratorEmailSuccessMessage().should('include.text','Success');
        Useractions.getUserModeratorEmailSuccessBodyMessage().should('include.text',this.userdata.user_moderator_email);
        })
    
 

     





})