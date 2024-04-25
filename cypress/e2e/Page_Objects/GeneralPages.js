class GeneralPages{
footerHomeNav(){
    return cy.contains('a','Home').should('have.text', 'Home')
}

footerCopyrightNav(){
    return cy.get('.copyright').should('have.text', '© Parasoft. All rights reserved.')
}

footerContactUsNav(){
    return cy.contains('a','Contact Us').should('have.text', 'Contact Us')
}

footerSiteMapNav(){
    return cy.contains('a','Site Map').should('have.text', 'Site Map')
}

footerForumNav(){
    return cy.contains('a','Forum').should('have.text', 'Forum')
}










    

} export default GeneralPages