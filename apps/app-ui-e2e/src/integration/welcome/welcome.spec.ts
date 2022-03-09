describe('app-ui: Welcome component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=welcome--primary&args=text;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Welcome!');
    });
});
