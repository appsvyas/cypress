/// <reference types="Cypress"/>

import pomcreateCommunity from "../../Page_Objects/POM_Create_Community";
import pomloginpage from "../../Page_Objects/POM_LoginPage";

describe('Create_Community&Live_Session', function(){
    const pomcreatecommunity = new pomcreateCommunity();
    const POMloginpage = new pomloginpage();


    before(function(){ });

    beforeEach(function(){
        cy.fixture('signInpage').then(function(data){
            this.data=data;
            POMloginpage.getURL();
            POMloginpage.getEmailTextbox().type(this.data.admin_username);
            POMloginpage.getPasswordTextbox().type(this.data.password);
            POMloginpage.getSigninButton().click();
        })
        cy.fixture('Community_TestData').then(function(data){
            this.communityData = data;
        })
        });

        it('Create_Community_Header', function(){
            pomcreatecommunity.getCommunity().click();
            pomcreatecommunity.getCommunityButton().click();
            pomcreatecommunity.getCommunityHeader().should('have.text',' Create Community');        
        })
        
        it('Creating_Community', function(){
            pomcreatecommunity.getCommunity().click();
            pomcreatecommunity.getCommunityButton().click();
            pomcreatecommunity.getCommunityTitle().type(this.communityData.community_title);
            pomcreatecommunity.getCommunityDescription().type(this.communityData.community_description);
            pomcreatecommunity.getCommunityAcceptButton().click();
            pomcreatecommunity.getCommunity().click({force: true});
            })
        
        it('Create_Community_ColourDropdown', function(){
            pomcreatecommunity.getCommunity().click();
            pomcreatecommunity.getCommunityButton().click();
            pomcreatecommunity.getCommunityColourTitle().should('have.text','Community Color');
            pomcreatecommunity.getCommunityColourDropdown().select('Green');





        })








})