class HomePageObjects{

    //Captures the parabank logo    
parabankLogo(){
    return cy.get('#topPanel')
}

//Captures the caption Text beneath the parabank logo
captionText(){
    return cy.get('.caption')
    
}

//Captures the image to the left of the parabank logo element
pageRefreshLogo(){
    return cy.get('.admin')
    
}

//Captures the title ontop of the navigation links
solutionsHeading(){
    return cy.get('.Solutions')
}

//Captures the About Us navigation link
aboutUsNavLink(){
    return cy.get('.leftmenu > :nth-child(2) > a')
    
}

//Captures the Services navigation link
servicesNavLink(){
    return cy.get('.leftmenu > :nth-child(3) > a')
    
}

//Captures the products link
productsNavLink(){
    return cy.contains('a', 'Products')
    
}

//Captures the Locations link
locationsNavLink(){
    return cy.contains('a','Locations')
    
}

//Captures the Admin Page link
adminPageNavLink(){
    return cy.contains('a', 'Admin Page')
    
}

//Captures the title element ontop of login form
loginFormTitle(){
    return cy.get('h2')
    
}

loginForm(){
    // Capture the form element
cy.get('form').first().within(() => {
    // Assert the presence of input fields
    cy.get('input[name="username"]').should('exist');
    cy.get('input[name="password"]').should('exist');
  
    // Assert the presence of a submit button
    cy.get('button[type="submit"]').should('exist');
  });
     
}

//Captures the username title field
userNameFieldTitle(){
    return cy.get(':nth-child(1) > b')
    
}

//Captures the username input field and type in data
userNameInputField(value){
    return  cy.get('input[name="username"]').type(value)
}

//Captures the password field title
passwordFieldTitle(){
    return cy.get('') 
    
}

//Capturs the password input field element
passwordInputField(value){
    return  cy.get('input[name="password"]').type(value)
}

//Captures the Login button element
loginButton(){
    return cy.get('input[type="submit"]').eq(0).click()
}

//Captures the Register link
registerLink(){
    return cy.contains('Register')
    
}

parabankLogo(){
    return cy.get('.logo')
}

AtmServicesVerification(){
    return cy.get('.captionone')
}

topTableColumnTwo(){
    return cy.get('ul.services')

   
}
topTableColumnThree(){
    return cy.get('ul.servicestwo')
}

topReadMore(){
    return cy.contains('a', 'Read More')
}

bottomTableColumnTwo(){
    return cy.get('ul.events')
}
    

bottomReadMore(){
    return cy.get('#rightPanel > :nth-child(7) > a')
}


} export default HomePageObjects