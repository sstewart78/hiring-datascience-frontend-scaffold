describe('app-ui: Subheading component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=subheading--primary&args=text;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Subheading!');
    });
});
