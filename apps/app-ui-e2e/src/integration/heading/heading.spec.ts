describe('app-ui: Heading component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=heading--primary&args=text;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Heading!');
    });
});
