import HomePageObjects from "../Page_Objects/Home_Page";
import RegistrationPageObjects from "../Page_Objects/RegistrationPage";
const homePage = new HomePageObjects
const registerPage = new RegistrationPageObjects

context('Home page and User accounts functionalities', ()=>{
     beforeEach(() => {
        cy.visit('https://parabank.parasoft.com/parabank/admin.htm')

    })

describe('Validating the logo functionality', ()=>{

   
})

})