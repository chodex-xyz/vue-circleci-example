// https://docs.cypress.io/api/introduction/api.html

describe("My Second Test", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Welcome to Your Vue.js App");
  });

  // it("should fail", () => {
  //   cy.visit("/");
  //   cy.contains("h1", "NOT FOUND");
  // });
});
