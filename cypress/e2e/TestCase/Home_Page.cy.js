import HomePageObjects from "../Page_Objects/Home_Page";
import RegistrationPageObjects from "../Page_Objects/RegistrationPage";
const homePage = new HomePageObjects
const registerPage = new RegistrationPageObjects

context('Home page and User accounts functionalities', ()=>{
     beforeEach(() => {
        cy.visit('https://parabank.parasoft.com/parabank/admin.htm')

    })

describe('Validating the logo functionality', ()=>{

    it('Home Page', ()=>{
        homePage.solutionsHeading().should('have.text', 'Solutions')
        cy.fixture('parabank').then((data)=>{
          homePage.userNameInputField(data.firstName)
          homePage.passwordInputField(data.userPassword)
          homePage.registerLink().click()
          registerPage.signupHeading()
          registerPage.notificationMessage()
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





          homePage.userNameInputField(data.firstName)
          homePage.passwordInputField(data.userPassword)
          homePage.registerLink().click()
          registerPage.signupHeading()
          registerPage.notificationMessage()
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
          registerPage.registerButt
          


        })
        
      
        
      
        

        
    })
})

})