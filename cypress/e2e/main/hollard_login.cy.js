/// <refereance types="cypress" />

// import { describe, it } from "mocha";
import { email } from "../../fixtures/data";
import { password } from "../../fixtures/data";

describe('Login Functionality', function() {
    it('Login Test Using Hollard Application', function() {
        cy.visit('sbxhollard.npontu.com');
        cy.get('input[id="logi"]').type(email);
        cy.get('input[id="password"]').type(password);
        cy.get('button[type="submit"].btn').click();
        cy.get('a[href="https://sbxhollard.npontu.com/logout"]').click();
    })
})