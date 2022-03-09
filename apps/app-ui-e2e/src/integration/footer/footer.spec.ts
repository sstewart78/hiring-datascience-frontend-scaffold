describe('app-ui: Footer component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=footer--primary&args=text;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Footer!');
    });
});
