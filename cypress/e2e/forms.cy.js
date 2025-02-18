describe('overview', () => {
    beforeEach(() => {
        cy.visit('/forms')
    });

    it('should contain the correct heading', () => {
        cy.contains('Testing Forms')
    });

    it.skip('should allow a user to successfully subscribe with their email', () => {
        const email = 'user_one@abc.com'
        cy.getDataTest('subscribe-form').find('input').as('subscribe-input')
        cy.get('@subscribe-input').type(email)
        cy.getDataTest('subscribe-button').click();
        cy.contains(`Successfully subbed: ${email}!`).should('exist');
        cy.wait(3000);
        cy.contains(`Successfully subbed: ${email}!`).should('not.exist')
    });

    it('should not allow a user to subscribe with invalid email', () => {
        const email = 'user_one@abc'
        cy.getDataTest('subscribe-form').find('input').as('subscribe-input')
        cy.get('@subscribe-input').type(email)
        cy.getDataTest('subscribe-button').click();
        cy.contains(`Invalid email: ${email}!`).should('exist')
        cy.wait(3000);
        cy.contains(`Invalid email: ${email}!`).should('not.exist')
    });

    it('should throw an error message when no email is entered', () => {
        cy.getDataTest('subscribe-button').click();
        cy.contains('fail!').should('exist')
        cy.wait(3000);
    });





})