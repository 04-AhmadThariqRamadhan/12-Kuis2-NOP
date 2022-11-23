Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
describe('empty spec', () => {
  //TEST CASE 1
  it('passes (error, form admin tidak ada yang diisi)' , () => {

    // Login Website
    cy.visit('http://localhost/project_uas/admin/index.php?halaman=admin')
    cy.get(':nth-child(1) > .form-control').type('wibi')
    cy.get(':nth-child(2) > .form-control').type('12345')
    cy.get('.btn').click()

    // Kategori Adimin
    cy.get('[href="index.php?halaman=admin"]').click()
    cy.get('.text').click()

    // Isi form data Admin
    cy.get('form > .btn').click()
  })

  //TEST CASE 2
  it('passes (error, form admin pada bagian email kurang "@")', () => {

    // Login Website
    cy.visit('http://localhost/project_uas/admin/index.php?halaman=admin')
    cy.get(':nth-child(1) > .form-control').type('wibi')
    cy.get(':nth-child(2) > .form-control').type('12345')
    cy.get('.btn').click()

    // Kategori Adimin
    cy.get('[href="index.php?halaman=admin"]').click()
    cy.get('.text').click()

    // Isi form data Admin
    cy.get(':nth-child(2) > .form-control').type('Ahmad Thariq')
    cy.get(':nth-child(3) > :nth-child(1) > .form-group > .form-control').type('2041720200#student.polinema.ac.id')
    cy.get(':nth-child(3) > :nth-child(2) > .form-group > .form-control').type('081233385547')
    cy.get(':nth-child(4) > :nth-child(1) > .form-group > .form-control').type('eriq')
    cy.get(':nth-child(4) > :nth-child(2) > .form-group > .form-control').type('2041720200')
    cy.get('form > .btn').click()
  })

  //TEST CASE 3
  it('passes (correct, form admin baru berhasil dibuat)', () => {

    // Login Website
    cy.visit('http://localhost/project_uas/admin/index.php?halaman=admin')
    cy.get(':nth-child(1) > .form-control').type('wibi')
    cy.get(':nth-child(2) > .form-control').type('12345')
    cy.get('.btn').click()

    // Kategori Adimin
    cy.get('[href="index.php?halaman=admin"]').click()
    cy.get('.text').click()

    // Isi form data Admin
    cy.get(':nth-child(2) > .form-control').type('Ahmad Thariq')
    cy.get(':nth-child(3) > :nth-child(1) > .form-group > .form-control').type('2041720200@student.polinema.ac.id')
    cy.get(':nth-child(3) > :nth-child(2) > .form-group > .form-control').type('081233385547')
    cy.get(':nth-child(4) > :nth-child(1) > .form-group > .form-control').type('eriq')
    cy.get(':nth-child(4) > :nth-child(2) > .form-group > .form-control').type('2041720200')
    cy.get('form > .btn').click()
  })
})