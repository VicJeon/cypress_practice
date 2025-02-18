describe('examples', () => {
    beforeEach(() => {
        cy.visit('/forms')
    });
    it('should allow a user to navigate from page to page', () => {
        cy.getDataTest('nav-why-cypress').click()
        cy.location('pathname').should('equal', '/');
        cy.log('User is on Fundamenals page')

        cy.getDataTest('nav-overview').click()
        cy.location('pathname').should('equal', '/overview');
        cy.log('User is on Overview page')

        cy.getDataTest('nav-fundamentals').click()
        cy.location('pathname').should('equal', '/fundamentals');
        cy.log('User is on Fundamentals page')

        // cy.getDataTest('nav-forms').click()
        // cy.location('pathname').should('equal', '/forms');
        // cy.log('User is on Forms page')

        cy.getDataTest('nav-examples').click()
        cy.location('pathname').should('equal', '/examples');
        cy.log('User is on Examples page')

        cy.getDataTest('nav-component').click()
        cy.location('pathname').should('equal', '/component');
        cy.log('User is on Componenet page')

        cy.getDataTest('nav-best-practices').click()
        cy.location('pathname').should('equal', '/best-practices');
        cy.log('User is on Best Practices page')


    })








})
