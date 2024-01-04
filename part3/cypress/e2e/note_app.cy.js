// This file tests the Note App.
describe('Note App', () => {
    // Before each test, reset the database and create a new user.
    beforeEach(() => {
        cy.visit('http://localhost:3000')

        cy.request('POST', 'http://localhost:3001/api/testing/reset')
        
        const user = {
            name: 'Fernando',
            username: 'Frnn',
            password: '12345'
        }

        cy.request('POST', 'http://localhost:3001/api/users', user)
    }) 

    // Test that the frontpage can be opened.
    it('frontpage can be opened', () => { 
        cy.contains('Notes')
    })

    // Test that the login form can be opened.
    it('login form can be opened', () => {
        cy.contains('Show login').click()
    })

    // Test that a user can write in the inputs and login.
    it('user can write in the inputs and login', () => {
        cy.contains('Show login').click()
        cy.get('[placeholder="Username"]').type('Frnn')
        cy.get('[placeholder="Password"]').type('12345')
        cy.get('#form-login-button').click()
        cy.contains('New note')
    })

    // Test the functionality of the Note App when a user is logged in.
    describe('when user logged in', () => {
        // Before each test, log in the user.
        beforeEach(() => {
            cy.contains('Show login').click()
            cy.get('[placeholder="Username"]').type('Frnn')
            cy.get('[placeholder="Password"]').type('12345')
            cy.get('#form-login-button').click()
            cy.contains('New note')
        })

        // Test that a new note can be created.
        it('a new note can be created', () => {
            const noteContent = 'a note created by cypress'
            cy.contains('New note').click()
            cy.get('input').type(noteContent)
            cy.contains('save').click()
            cy.contains(noteContent)
        })
    })
})