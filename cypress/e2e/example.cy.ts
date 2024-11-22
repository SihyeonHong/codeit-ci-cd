describe("Next.js Base Page Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it('Verify that the text "Get started by" exists on the base path', () => {
    cy.contains("Get started by").should("exist");
  });

  it('Verify that the "Learn" is an anchor with the correct href attribute on the base path', () => {
    cy.contains("a", "Learn")
      .should("have.attr", "href")
      .and("match", /^https:\/\/nextjs\.org\/learn/);
  });
});
