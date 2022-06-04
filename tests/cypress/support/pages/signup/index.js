import { elSignup } from "./elemets";

class SignupPage{

    go(){

        cy.visit('/signup');
        cy.get(elSignup.assertSignupPage).should('have.text', 'Faça seu cadastro');
    }

    fillForm(user){
        cy.get('input[placeholder="Nome"]').type(user.name);
        // cy.get('input[placeholder="E-mail"]').type(user.email);

        // cy.get('input[placeholder="Senha"]').type(user.password);
    }

    submit(){
        cy.get('button[type="submit"]').click()
    }
}

export default new SignupPage()