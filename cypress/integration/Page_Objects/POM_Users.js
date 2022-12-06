class pomusersTab{
    getUserButton(){
        return cy.get('[data-testid="users"]');
    }
    getInviteUserButton(){
        return cy.contains('Invite a User');
    }
    getUserList(){
        return cy.get('.show dropdown').find('button[type="button"]')
    }
    getUserButtonDropDown(){
        return cy.get('div[aria-labelledby="react-aria7117882057-7"]').find('.dropdown-item')
    }
    getUserInviteMentor(){
        return cy.contains('Invite a Mentor');
    }
    getUserInviteModerator(){
        return cy.contains('Invite a Moderator');
    }
    getUserModeratorTitle(){
        return cy.get('[data-testid="invite_heading"]');
    }
    getUserModeratorBodyText(){
        return cy.get('[data-testid="invite-user"]');
    }
    getUserModeratorEmailHeader(){
        return cy.get('label');
    }
    getUserModeratorSendInvitation(){
        return cy.get('[data-testid="inviteUserBtn"]');
    }
    getUserModeratorCloseButtonText(){
        return cy.get('.InviteUser_inviteuser_close__c_OGh');
    }
    getUserModeratorEmailTextbox(){
        return cy.get('[data-testid="inviteEmail"]');
    }
    getUserModeratorEmailSuccessMessage(){
        return cy.get('.modal-header');
    }
    getUserModeratorEmailSuccessBodyMessage(){
        return cy.get('.mt-5');
    }







}
export default pomusersTab