// describe('Verify valid Github user', () => {
//   it('Should verify that a valid user returns all the repos', () => {
//     cy.visit('127.0.0.1:3000');
//     cy.get('[data-cy="header"]').should('have.text', 'Get Github Repos');
//     cy.get('[data-cy="username"]').type('michael-nishiguchi');

//     cy.get('[data-cy="submit"]').click();
//     cy.get('[data-cy="repo-amount"]').invoke('text').should('match', /^Found \d+ Repos$/); // allow for any number of repos

//     //verify if each line has a link to the repo and a non-empty description
//     cy.get('[data-cy="repo-list"]')
//     .find('li')
//     .each(($li) => {
//       cy.wrap($li).find('a').should('have.attr', 'href');
//       cy.wrap($li).find('p').should('not.be.empty')

//     });
//   });
// });

describe('Verify blank Github user', () => {
  it('Should verify that a invalid user returns no results', () => {
    cy.visit('127.0.0.1:3000');
    cy.get('[data-cy="username"]').clear();
    cy.get('[data-cy="submit"]').type('{enter}');
    cy.get('[data-cy="message"]').should('have.text', 'Github User Not Found')
    cy.get('[data-cy="repo-amount"]').should('not.exist'); 
  });
});
