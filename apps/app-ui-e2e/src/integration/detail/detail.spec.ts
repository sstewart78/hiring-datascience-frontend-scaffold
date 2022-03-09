describe('app-ui: Detail component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=detail--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Detail!');
    });
});
