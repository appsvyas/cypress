class pomcreateCommunity{
    getCommunity(){
        return cy.contains('Communities');
    }
    getCommunityButton(){
        return cy.get('[data-testid="create-a-community-button"]')
    }
    getCommunityHeader(){
        return cy.get('[data-testid="create-community"]')
    }
    getCommunityTitle(){
        return cy.get('[data-testid="create-community-title-input"]');
    }
    getCommunityDescription(){
        return cy.get('[data-testid="create-community-description-input"]');
    }
    getCommunityCancelButton(){
        return cy.get('[data-testid="create-community-cancel-button"]');
    }
    getCommunityAcceptButton(){
        return cy.get('[data-testid="create-community-button"]');
    }
    getCommunityColourDropdown(){
        return cy.get('[data-testid="create-community-color-input"]');
     }
     getCommunityColourTitle(){
         return cy.get('[data-testid="create-community-color"]');
     }


}
export default pomcreateCommunity