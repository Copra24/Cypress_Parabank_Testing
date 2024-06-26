import HomePageObjects from "../Page_Objects/Home_Page";
import RegistrationPageObjects from "../Page_Objects/RegistrationPage";
const homePage = new HomePageObjects
const registerPage = new RegistrationPageObjects

context('Home page and User accounts functionalities', ()=>{
     beforeEach(() => {
        cy.visit('https://parabank.parasoft.com/parabank/admin.htm')

    })

describe('Validating the logo functionality and pages', ()=>{

    it('Verifying the logo element is clickable and  clicking on the logo redirects to the expected URL', ()=>{
        //getst the logo element, hovers on it and clicks
        homePage.parabankLogo()
        .trigger('mouseover')
        .should('have.css', 'cursor', 'pointer')
        .click()
        cy.wait(1000)
        homePage.AtmServicesVerification()
        .should("be.visible")

    })


   //Validating the Top table Elements
    it('Verifying the second column of box contains 5 elements', ()=>{
        homePage.parabankLogo()
        .click()
        homePage.topTableColumnTwo()
        .find('li')
        .should('have.length', 5);

    })


    it('Verifying the elements within the second column are displayed as expected', ()=>{
        homePage.parabankLogo()
        .click()

        //Captures the **ATM Services** heading and asserts its display
        homePage.topTableColumnTwo()
        .find('li')
        .eq(0)
        .should('have.text', 'ATM Services')
        .should('have.css', 'text-decoration', 'underline solid rgb(172, 150, 1)')
        .trigger('mouseover')
        .should('have.css', 'cursor', 'auto')

        //Captures the **Withdraw Funds** heading and asserts its display
        homePage.topTableColumnTwo()
        .find('li')
        .eq(1)
        .should('have.text', 'Withdraw Funds')
        .trigger('mouseover')
        .should('have.css', 'cursor', 'auto')

        //Captures the **Transfer Funds** heading and asserts its display
        homePage.topTableColumnTwo()
        .find('li')
        .eq(2)
        .should('have.text', 'Transfer Funds')
        .trigger('mouseover')
        .should('have.css', 'cursor', 'auto')

        //Captures the **Check Balances** heading and asserts its display
        homePage.topTableColumnTwo()
        .find('li')
        .eq(3)
        .should('have.text', 'Check Balances')
        .trigger('mouseover')
        .should('have.css', 'cursor', 'auto')

        //Captures the **Make Deposits** heading and asserts its display
        homePage.topTableColumnTwo()
        .find('li')
        .eq(4)
        .should('have.text', 'Make Deposits')
        .trigger('mouseover')
        .should('have.css', 'cursor', 'auto')
        


    })


   
    it('Verifying the Third column of box contains 4 elements', ()=>{
        homePage.parabankLogo()
        .click()
        homePage.topTableColumnThree()
        .find('li')
        .should('have.length', 4);

    })


    it('Verifying the elements within the second column are displayed as expected', ()=>{
        homePage.parabankLogo()
        .click()

        //Captures the **Online Services** heading and asserts its display
        homePage.topTableColumnThree()
        .find('li')
        .eq(0)
        .should('have.text', 'Online Services')
        .should('have.css', 'text-decoration', 'underline solid rgb(172, 150, 1)')
        .trigger('mouseover')
        .should('have.css', 'cursor', 'auto')

        //Captures the **Bill Pay** heading and asserts its display
        homePage.topTableColumnThree()
        .find('li')
        .eq(1)
        .should('have.text', 'Bill Pay')
        .trigger('mouseover')
        .should('have.css', 'cursor', 'auto')

        //Captures the **Account History** heading and asserts its display
        homePage.topTableColumnThree()
        .find('li')
        .eq(2)
        .should('have.text', 'Account History')
        .trigger('mouseover')
        .should('have.css', 'cursor', 'auto')

        //Captures the **Transfer Funds** heading and asserts its display
        homePage.topTableColumnThree()
        .find('li')
        .eq(3)
        .should('have.text', 'Transfer Funds')
        .trigger('mouseover')
        .should('have.css', 'cursor', 'auto')
       
        
    
    })

   
   //Asserting url is rendered as expected after clicking
   it('Verifying clicking on first READMORE, will redirect to expected url', ()=>{
    homePage.parabankLogo()
    .click()
    homePage.topReadMore()
    .click()
    cy.url()
    .should('eq', 'https://parabank.parasoft.com/parabank/services.htm')

})

      
    
   //Validating the Bootom table Elements
       
   it('Verifying the second column of box contains 4 elements', ()=>{
    homePage.parabankLogo()
    .click()
    homePage.bottomTableColumnTwo()
    .find('li')
    .should('have.length', 4);

})
       
       
it('Verifying the elements within the second column are displayed as expected', ()=>{
    homePage.parabankLogo()
    .click()

    //Gets the current date 
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    //Captures the **Current date** heading and asserts its display
    homePage.bottomTableColumnTwo()
    .find('li')
    .eq(0)
    .should('have.text', today)
    .trigger('mouseover')
    .should('have.css', 'cursor', 'auto')

    //Captures the **ParaBank Is Now Re-Opened** heading and asserts its display
    homePage.bottomTableColumnTwo()
    .find('li')
    .eq(1)
    .should('have.text', 'ParaBank Is Now Re-Opened')
    .should('have.css', 'text-decoration', 'none solid rgb(95, 122, 119)')
    .trigger('mouseover')
    .should('have.css', 'cursor', 'auto')

    //Captures the **New! Online Bill Pay** heading and asserts its display
    homePage.bottomTableColumnTwo()
    .find('li')
    .eq(2)
    .should('have.text', 'New! Online Bill Pay')
    .should('have.css', 'text-decoration', 'none solid rgb(95, 122, 119)')
    .trigger('mouseover')
    .should('have.css', 'cursor', 'auto')

    //Captures the **New! Online Account Transfers** heading and asserts its display
    homePage.bottomTableColumnTwo()
    .find('li')
    .eq(3)
    .should('have.text', 'New! Online Account Transfers')
    .should('have.css', 'text-decoration', 'none solid rgb(95, 122, 119)')
    .trigger('mouseover')
    .should('have.css', 'cursor', 'auto')
    

})
       
 //Validating the Bottom Read More Element
 //Asserting url is rendered as expected after clicking on element
 it('Verifying clicking on bottom READMORE will redirect to expected url', ()=>{
    homePage.parabankLogo()
    .click()
    homePage.bottomReadMore()
    .click()
    cy.url()
    .should('eq', 'https://parabank.parasoft.com/parabank/news.htm')

})

        
        
})



describe('Validating the Registeration link', ()=>{

    beforeEach(() => {
        registerPage.registerUrl()
    });
    
    it('Verifying clicking on the Register link navigates to Registration page', ()=>{
        registerPage.signupHeading()
        

    })

    it.only('Verifying if user account will be created when all fields are entered with valid information', ()=>{

        cy.fixture('parabank').then((data)=>{
                 registerPage.firstName()
                 registerPage.firstNameInputField(data.firstName)
                 registerPage.lastName()
                 registerPage.lastNameInputField(data.lastName)
                 registerPage.address()
                 registerPage.addressInputField(data.address)
                 registerPage.city()
                 registerPage.cityInputField(data.city)
                 registerPage.state()
                 registerPage.stateInputField(data.state)
                 registerPage.zipCode()
                 registerPage.zipCodeInputField(data.zipCode)
                 registerPage.phoneNumber()
                 registerPage.phoneNumberInputField(data.phoneNumber)
                 registerPage.sSN()
                 registerPage.sSnInputField(data.SSN)
                 registerPage.userName()
                 registerPage.userNameInputField(data.userName)
                 registerPage.password()
                 registerPage.passwordInputField(data.userPassword)
                 registerPage.confirmPassword()
                 registerPage.confirmPasswordInputField(data.userConfirmPassword)
                 registerPage.registerButton()

                 registerPage.WelcomeMassage()
                 .should('have.text','Welcome' + data.userName) 

                //ACCOUNT SUCESSFULLY CREATED MESSAGE SHOULD BE DIPLAYED HERE************
       
       
       
               })
       

    })

    it('Verifying form will submit when First name field is obmitted while other fields are filled out correctly', ()=>{

        cy.fixture('parabank').then((data)=>{
                
         //*****  Last field is obmitted
                //registerPage.firstName()
                //registerPage.firstNameInputField(data.firstName)

                 registerPage.lastName()
                 registerPage.lastNameInputField(data.lastName)
                 registerPage.address()
                 registerPage.addressInputField(data.address)
                 registerPage.city()
                 registerPage.cityInputField(data.city)
                 registerPage.state()
                 registerPage.stateInputField(data.state)
                 registerPage.zipCode()
                 registerPage.zipCodeInputField(data.zipCode)
                 registerPage.phoneNumber()
                 registerPage.phoneNumberInputField(data.phoneNumber)
                 registerPage.sSN()
                 registerPage.sSnInputField(data.SSN)
                 registerPage.userName()
                 registerPage.userNameInputField(data.userName)
                 registerPage.password()
                 registerPage.passwordInputField(data.userPassword)
                 registerPage.confirmPassword()
                 registerPage.confirmPasswordInputField(data.userConfirmPassword)
                 //clicks on register button
                 registerPage.registerButton()
                 
                 //Asserts First name required error message is displayed
                 registerPage.firstNameRequiredError()
    
                 
                })
       

    })



    it('Verifying form will submit when Last name field is obmitted while other fields are filled out correctly', ()=>{

        cy.fixture('parabank').then((data)=>{

                 registerPage.firstName()
                 registerPage.firstNameInputField(data.firstName)

         //*****  Last field is obmitted
                 //registerPage.lastName()
                 //registerPage.lastNameInputField(data.lastName)

                 registerPage.address()
                 registerPage.addressInputField(data.address)
                 registerPage.city()
                 registerPage.cityInputField(data.city)
                 registerPage.state()
                 registerPage.stateInputField(data.state)
                 registerPage.zipCode()
                 registerPage.zipCodeInputField(data.zipCode)
                 registerPage.phoneNumber()
                 registerPage.phoneNumberInputField(data.phoneNumber)
                 registerPage.sSN()
                 registerPage.sSnInputField(data.SSN)
                 registerPage.userName()
                 registerPage.userNameInputField(data.userName)
                 registerPage.password()
                 registerPage.passwordInputField(data.userPassword)
                 registerPage.confirmPassword()
                 registerPage.confirmPasswordInputField(data.userConfirmPassword)
                 //clicks on register button
                 registerPage.registerButton()
                 
                 //Asserts Last name required error message is displayed
                 registerPage.lastNameRequiredError()
    
                 
                })
       

    })


    it('Verifying form will submit when Address field is obmitted while other fields are filled out correctly', ()=>{

        cy.fixture('parabank').then((data)=>{

                 registerPage.firstName()
                 registerPage.firstNameInputField(data.firstName)
                 registerPage.lastName()
                 registerPage.lastNameInputField(data.lastName)

          //*****  Address field is obmitted
                 //registerPage.address()
                // registerPage.addressInputField(data.address)

                 registerPage.city()
                 registerPage.cityInputField(data.city)
                 registerPage.state()
                 registerPage.stateInputField(data.state)
                 registerPage.zipCode()
                 registerPage.zipCodeInputField(data.zipCode)
                 registerPage.phoneNumber()
                 registerPage.phoneNumberInputField(data.phoneNumber)
                 registerPage.sSN()
                 registerPage.sSnInputField(data.SSN)
                 registerPage.userName()
                 registerPage.userNameInputField(data.userName)
                 registerPage.password()
                 registerPage.passwordInputField(data.userPassword)
                 registerPage.confirmPassword()
                 registerPage.confirmPasswordInputField(data.userConfirmPassword)
                 //clicks on register button
                 registerPage.registerButton()
                 
                 //Asserts address  required error message is displayed
                 registerPage.addressRequiredError()
    
                 
                })
       

    })


    it('Verifying form will submit when City field is obmitted while other fields are filled out correctly', ()=>{

        cy.fixture('parabank').then((data)=>{

                 registerPage.firstName()
                 registerPage.firstNameInputField(data.firstName)
                 registerPage.lastName()
                 registerPage.lastNameInputField(data.lastName)
                 registerPage.address()
                 registerPage.addressInputField(data.address)

         //*****  City field is obmitted
                 // registerPage.city()
                 //registerPage.cityInputField(data.city)

                 registerPage.state()
                 registerPage.stateInputField(data.state)
                 registerPage.zipCode()
                 registerPage.zipCodeInputField(data.zipCode)
                 registerPage.phoneNumber()
                 registerPage.phoneNumberInputField(data.phoneNumber)
                 registerPage.sSN()
                 registerPage.sSnInputField(data.SSN)
                 registerPage.userName()
                 registerPage.userNameInputField(data.userName)
                 registerPage.password()
                 registerPage.passwordInputField(data.userPassword)
                 registerPage.confirmPassword()
                 registerPage.confirmPasswordInputField(data.userConfirmPassword)
                 //clicks on register button
                 registerPage.registerButton()
                 
                 //Asserts City  required error message is displayed
                 registerPage.cityRequiredError()
    
                 
                })
       

    })


    
    it('Verifying form will submit when State field is obmitted while other fields are filled out correctly', ()=>{

        cy.fixture('parabank').then((data)=>{

                 registerPage.firstName()
                 registerPage.firstNameInputField(data.firstName)
                 registerPage.lastName()
                 registerPage.lastNameInputField(data.lastName)
                 registerPage.address()
                 registerPage.addressInputField(data.address)
                 registerPage.city()
                 registerPage.cityInputField(data.city)

            //*****  State field is obmitted
                 //registerPage.state()
                // registerPage.stateInputField(data.state)

                 registerPage.zipCode()
                 registerPage.zipCodeInputField(data.zipCode)
                 registerPage.phoneNumber()
                 registerPage.phoneNumberInputField(data.phoneNumber)
                 registerPage.sSN()
                 registerPage.sSnInputField(data.SSN)
                 registerPage.userName()
                 registerPage.userNameInputField(data.userName)
                 registerPage.password()
                 registerPage.passwordInputField(data.userPassword)
                 registerPage.confirmPassword()
                 registerPage.confirmPasswordInputField(data.userConfirmPassword)
                 //clicks on register button
                 registerPage.registerButton()
                 
                 //Asserts State  required error message is displayed
                 registerPage.stateRequiredError()
    
                 
                })
       

    })


    
    it('Verifying form will submit when Zipcode field is obmitted while other fields are filled out correctly', ()=>{

        cy.fixture('parabank').then((data)=>{

                 registerPage.firstName()
                 registerPage.firstNameInputField(data.firstName)
                 registerPage.lastName()
                 registerPage.lastNameInputField(data.lastName)
                 registerPage.address()
                 registerPage.addressInputField(data.address)
                 registerPage.city()
                 registerPage.cityInputField(data.city)
                 registerPage.state()
                 registerPage.stateInputField(data.state)

            //*****  Zipcode field is obmitted
               //registerPage.zipCode()
                //registerPage.zipCodeInputField(data.zipCode)

                 registerPage.phoneNumber()
                 registerPage.phoneNumberInputField(data.phoneNumber)
                 registerPage.sSN()
                 registerPage.sSnInputField(data.SSN)
                 registerPage.userName()
                 registerPage.userNameInputField(data.userName)
                 registerPage.password()
                 registerPage.passwordInputField(data.userPassword)
                 registerPage.confirmPassword()
                 registerPage.confirmPasswordInputField(data.userConfirmPassword)
                 //clicks on register button
                 registerPage.registerButton()
                 
                 //Asserts Zipcode required error message is displayed
                 registerPage.zipCodeRequiredError()
    
                 
                })
       

    })



    it('Verifying form will submit when Zipcode field is obmitted while other fields are filled out correctly', ()=>{

        cy.fixture('parabank').then((data)=>{

                 registerPage.firstName()
                 registerPage.firstNameInputField(data.firstName)
                 registerPage.lastName()
                 registerPage.lastNameInputField(data.lastName)
                 registerPage.address()
                 registerPage.addressInputField(data.address)
                 registerPage.city()
                 registerPage.cityInputField(data.city)
                 registerPage.state()
                 registerPage.stateInputField(data.state)
                 registerPage.zipCode()
                 registerPage.zipCodeInputField(data.zipCode)
                 
            //*****  Phone number field is obmitted
                 //registerPage.phoneNumber()
                 //registerPage.phoneNumberInputField(data.phoneNumber)

                 registerPage.sSN()
                 registerPage.sSnInputField(data.SSN)
                 registerPage.userName()
                 registerPage.userNameInputField(data.userName)
                 registerPage.password()
                 registerPage.passwordInputField(data.userPassword)
                 registerPage.confirmPassword()
                 registerPage.confirmPasswordInputField(data.userConfirmPassword)
                 //clicks on register button
                 registerPage.registerButton()

                 //ACCOUNT SUCESSFULLY CREATED MESSAGE SHOULD BE DIPLAYED HERE************
                 
                 
    
                 
                })
       

    })



    it('Verifying form will submit when SSN field is obmitted while other fields are filled out correctly', ()=>{

        cy.fixture('parabank').then((data)=>{

                 registerPage.firstName()
                 registerPage.firstNameInputField(data.firstName)
                 registerPage.lastName()
                 registerPage.lastNameInputField(data.lastName)
                 registerPage.address()
                 registerPage.addressInputField(data.address)
                 registerPage.city()
                 registerPage.cityInputField(data.city)
                 registerPage.state()
                 registerPage.stateInputField(data.state)
                 registerPage.zipCode()
                 registerPage.zipCodeInputField(data.zipCode)
                 registerPage.phoneNumber()
                 registerPage.phoneNumberInputField(data.phoneNumber)

        //*****  SSN field is obmitted
                //registerPage.sSN()
                //registerPage.sSnInputField(data.SSN)

                 registerPage.userName()
                 registerPage.userNameInputField(data.userName)
                 registerPage.password()
                 registerPage.passwordInputField(data.userPassword)
                 registerPage.confirmPassword()
                 registerPage.confirmPasswordInputField(data.userConfirmPassword)
                 //clicks on register button
                 registerPage.registerButton()
                 
                 //Asserts SNN required error message is displayed
                 registerPage.ssnCodeRequiredError()
    
                 
                })
       

    })



    
    it('Verifying form will submit when Username field is obmitted while other fields are filled out correctly', ()=>{

        cy.fixture('parabank').then((data)=>{

                 registerPage.firstName()
                 registerPage.firstNameInputField(data.firstName)
                 registerPage.lastName()
                 registerPage.lastNameInputField(data.lastName)
                 registerPage.address()
                 registerPage.addressInputField(data.address)
                 registerPage.city()
                 registerPage.cityInputField(data.city)
                 registerPage.state()
                 registerPage.stateInputField(data.state)
                 registerPage.zipCode()
                 registerPage.zipCodeInputField(data.zipCode)
                 registerPage.phoneNumber()
                 registerPage.phoneNumberInputField(data.phoneNumber)
                registerPage.sSN()
                registerPage.sSnInputField(data.SSN)

          //*****  Username field is obmitted
                //  registerPage.userName()
                //  registerPage.userNameInputField(data.userName)

                 registerPage.password()
                 registerPage.passwordInputField(data.userPassword)
                 registerPage.confirmPassword()
                 registerPage.confirmPasswordInputField(data.userConfirmPassword)
                 //clicks on register button
                 registerPage.registerButton()
                 
                 //Asserts Username required error message is displayed
                 registerPage.userNameRequiredError()
    
                 
                })
       

    })



    it('Verifying form will submit when Password field is obmitted while other fields are filled out correctly', ()=>{

        cy.fixture('parabank').then((data)=>{

                 registerPage.firstName()
                 registerPage.firstNameInputField(data.firstName)
                 registerPage.lastName()
                 registerPage.lastNameInputField(data.lastName)
                 registerPage.address()
                 registerPage.addressInputField(data.address)
                 registerPage.city()
                 registerPage.cityInputField(data.city)
                 registerPage.state()
                 registerPage.stateInputField(data.state)
                 registerPage.zipCode()
                 registerPage.zipCodeInputField(data.zipCode)
                 registerPage.phoneNumber()
                 registerPage.phoneNumberInputField(data.phoneNumber)
                 registerPage.sSN()
                 registerPage.sSnInputField(data.SSN)
                 registerPage.userName()
                 registerPage.userNameInputField(data.userName)
          
          //*****  Password field is obmitted
                //  registerPage.password()
                //  registerPage.passwordInputField(data.userPassword)

                 registerPage.confirmPassword()
                 registerPage.confirmPasswordInputField(data.userConfirmPassword)
                 //clicks on register button
                 registerPage.registerButton()
                 
                 //Asserts Password required error message is displayed
                 registerPage.passwordRequiredError()
    
                 
                })
       

    })




    it('Verifying form will submit when Confirm Password field is obmitted while other fields are filled out correctly', ()=>{

        cy.fixture('parabank').then((data)=>{

                 registerPage.firstName()
                 registerPage.firstNameInputField(data.firstName)
                 registerPage.lastName()
                 registerPage.lastNameInputField(data.lastName)
                 registerPage.address()
                 registerPage.addressInputField(data.address)
                 registerPage.city()
                 registerPage.cityInputField(data.city)
                 registerPage.state()
                 registerPage.stateInputField(data.state)
                 registerPage.zipCode()
                 registerPage.zipCodeInputField(data.zipCode)
                 registerPage.phoneNumber()
                 registerPage.phoneNumberInputField(data.phoneNumber)
                 registerPage.sSN()
                 registerPage.sSnInputField(data.SSN)
                 registerPage.userName()
                 registerPage.userNameInputField(data.userName)
                 registerPage.password()
                 registerPage.passwordInputField(data.userPassword)
          
         //*****  Confirm Password field is obmitted
                 //  registerPage.confirmPassword()
                 //  registerPage.confirmPasswordInputField(data.userConfirmPassword)

                 //clicks on register button
                 registerPage.registerButton()
                 
                 //Asserts Confirm Password required error message is displayed
                 registerPage.confirmPasswordRequiredError()
    
                 
                })
       

    })






})

})