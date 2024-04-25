class RegistrationPageObjects{

    //Captures the title on Registration page    
signupHeading(){
    return cy.get('.title').should('have.text', 'Signing up is easy!')
}

//Captures notification message
notificationMessage(){
    return cy.get('#rightPanel')
    .find('p')
    .eq(0)
    .should('have.text', 'If you have an account with us you can sign-up for free instant online access. You will have to provide some personal information.')

}

//Captures and asserts the first name title element
firstName(){
    return cy.get(':nth-child(1) > [align="right"] > b').should('have.text', 'First Name:')
    
}

//Captures the first name input field
firstNameInputField(value){
    return cy.get('input[name ="customer.firstName"]').type(value)
}

//Captures and asserts the last name title element
lastName(){
    return cy.get(':nth-child(2) > [align="right"]').should('have.text', 'Last Name:')
    
}

//Captures the last name input field
lastNameInputField(value){
    return cy.get('input[name ="customer.lastName"]').type(value)
}

//Captures and asserts the address field title element
address(){
    return cy.get(':nth-child(3) > [align="right"] > b').should('have.text', 'Address:')
    
}

//Captures the address input field
addressInputField(value){
    return cy.get('input[name ="customer.address.street"]').type(value)
}

//Captures and asserts the city title element
city(){
    return cy.get(':nth-child(4) > [align="right"] > b').should('have.text', 'City:')
    
}

//Captures the city input field
cityInputField(value){
    return cy.get('input[name ="customer.address.city"]').type(value)
}

//Captures and asserts the State title element
state(){
    return cy.get(':nth-child(5) > [align="right"] > b').should('have.text', 'State:')
    
}

//Captures the State input field
stateInputField(value){
    return cy.get('input[name ="customer.address.state"]').type(value)
}

//Captures and asserts the Zip Code title element
zipCode(){
    return cy.get(':nth-child(6) > [align="right"] > b').should('have.text', 'Zip Code:')
    
}

//Captures the Zip Code input field
zipCodeInputField(value){
    return cy.get('input[name ="customer.address.zipCode"]').type(value)
}

//Captures and asserts the Phone Number title element
phoneNumber(){
    return cy.get(':nth-child(7) > [align="right"] > b').should('have.text', 'Phone #:')
    
}

//Captures the Phone Number input field
phoneNumberInputField(value){
    return cy.get('input[name ="customer.phoneNumber"]').type(value)
}

//Captures and asserts the SSN title element
sSN(){
    return cy.get(':nth-child(8) > [align="right"] > b').should('have.text', 'SSN:')
    
}

//Captures the SSN input field
sSnInputField(value){
    return cy.get('input[name ="customer.ssn"]').type(value)
}

//Captures and asserts the Username title element
userName(){
    return cy.get(':nth-child(10) > [align="right"]').should('have.text', 'Username:')
    
}

//Captures the Username input field
userNameInputField(value){
    return cy.get('input[name ="customer.username"]').type(value)
}


//Captures and asserts the Password title element
password(){
    return cy.get(':nth-child(11) > [align="right"] > b').should('have.text', 'Password:')
    
}

//Captures the Password input field
passwordInputField(value){
    return cy.get('input[name ="customer.password"]').type(value)
}

//Captures and asserts the Confirm Password title element
confirmPassword(){
    return cy.get(':nth-child(12) > [align="right"] > b').should('have.text', 'Confirm:')
    
}

//Captures the Confirm Password input field
confirmPasswordInputField(value){
    return cy.get('input[name ="repeatedPassword"]').type(value)
}

//Captures the submit button element
registerButton(){
    return cy.get('input[value ="Register"').click() 
}



    

} export default RegistrationPageObjects