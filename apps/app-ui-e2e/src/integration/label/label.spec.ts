describe('app-ui: Label component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=label--primary&args=text;htmlFor;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Label!');
    });
});
