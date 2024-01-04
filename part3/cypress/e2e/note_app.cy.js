describe('Note App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    }) 

    it('frontpage can be opened', () => { 
        cy.contains('Notes')
    })

    it('login form can be opened', () => {
        cy.contains('Show login').click()
    })

    it('user can write in the inputs and login', () => {
        cy.contains('Show login').click()
        cy.get('[placeholder="Username"]').type('Frnn')
        cy.get('[placeholder="Password"]').type('12345')
        cy.get('#form-login-button').click()
        cy.contains('New note')
    })

    describe('when user logged in', () => {
        beforeEach(() => {
            cy.contains('Show login').click()
            cy.get('[placeholder="Username"]').type('Frnn')
            cy.get('[placeholder="Password"]').type('12345')
            cy.get('#form-login-button').click()
            cy.contains('New note')
        })

        it('a new note can be created', () => {
            const noteContent = 'a note created by cypress'
            cy.contains('New note').click()
            cy.get('input').type(noteContent)
            cy.contains('save').click()
            cy.contains(noteContent)
        })
    })
})