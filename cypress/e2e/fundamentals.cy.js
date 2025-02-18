describe('fundamentals', () => {
  beforeEach(() => {
    cy.visit('/fundamentals')
  });

  it('should have a correct best heading ', () => {
    cy.get('[data-test = "fundamentals-header"]').contains('Testing Fundamentals');
  });

  it.only('should have a table with 8 rows', () => {
    for (let rows = 1; rows <= 8; rows++) {
      //Row 1
      if (rows === 1) {
        cy.get(`[data-test = "accordion-id-${rows}"]`).within(() => {
          cy.contains('Fundamental 1) Describe blocks').click()
          cy.contains(/Your tests will exist in a describe block/i).should('be.visible')
          cy.get('div[role = "button"]').click()
        });
      }

      //Row 2
      else if (rows === 2) {
        cy.get(`[data-test = "accordion-id-${rows}"]`).within(() => {
          cy.contains('Fundamental 2) It blocks').click()
          cy.contains(/Within your describe block,/i).should('be.visible')
          cy.get('div[role = "button"]').click()
        });
      }

      //Row 3
      else if (rows === 3) {
        cy.get(`[data-test = "accordion-id-${rows}"]`).within(() => {
          cy.contains('Fundamental 3) Commands & interacting with elements').click()
          cy.contains(/Cypress gives you various commands to help you test./i).should('be.visible')
          cy.get('div[role = "button"]').click()
        });
      }

      //Row 4
      else if (rows === 4) {
        cy.get(`[data-test = "accordion-id-${rows}"]`).within(() => {
          cy.contains('Fundamental 4) Getting elements').click()
          cy.contains(/You're often going to want to get an element from the DOM /i).should('be.visible')
          cy.get('div[role = "button"]').click()
        });
      }

      //Row 5
      else if (rows === 5) {
        cy.get(`[data-test = "accordion-id-${rows}"]`).within(() => {
          cy.contains('Fundamental 5) Command chaining & assertions').click()
          cy.contains(/After you get an element, you probably want to do something with that element,/i).should('be.visible')
          cy.get('div[role = "button"]').click()
        });
      }

      //Row 6
      else if (rows === 6) {
        cy.get(`[data-test = "accordion-id-${rows}"]`).within(() => {
          cy.contains('Fundamental 6) Focussing on a single test').click()
          cy.contains(/You can use it.only()/i).should('be.visible')
          cy.get('div[role = "button"]').click()
        });
      }

      //Row 7
      else if (rows === 7) {
        cy.get(`[data-test = "accordion-id-${rows}"]`).within(() => {
          cy.contains('Fundamental 7) beforeEach').click()
          cy.contains(/You can use a beforeEach function to perform certain actions prior to every test/i).should('be.visible')
          cy.get('div[role = "button"]').click()
        });
      }

      //Row 8
      else if (rows === 8) {
        cy.get(`[data-test = "accordion-id-${8}"]`).within(() => {
          cy.contains('Fundamental 8) Custom commands').click()
          cy.contains(/You aren't limited to just the cy.X commands, /i).should('be.visible')
          cy.get('div[role = "button"]').click()
        });
      }
      else {
        console.log('There must be less or more rows in the table. Please check!')
      }
      console.log('The number of rows is correct.')
    };



  });




})