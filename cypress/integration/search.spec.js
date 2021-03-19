describe("List", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/api/character").as("getCharacters");
    cy.intercept("GET", "**/api/character/*").as("getCharacter");
    cy.intercept("GET", "**/api/character/?name=Rick").as("getRickCharacter");
    cy.intercept("GET", "**/api/character/?name=Summer").as(
      "getSummerCharacter"
    );
    cy.visit("/");
    cy.wait("@getCharacters");
  });

  it("should show Rick data", () => {
    cy.contains("Rick and Morty").should("be.visible");

    cy.get("[name=search]").click().type("Rick");
    cy.get("button[type=submit]").click();
    cy.wait("@getRickCharacter");

    cy.contains("Resultados para Rick").should("be.visible");
    cy.contains("Cool Rick").should("be.visible").click();

    cy.url().should("contain", "/character/");
    cy.wait("@getCharacter");

    cy.contains("Regresar").should("be.visible").click();
    cy.url().should("contain", "/");
    cy.wait("@getCharacters");
  });

  it("should show Summer data", () => {
    cy.contains("Rick and Morty").should("be.visible");

    cy.get("[name=search]").click().type("Summer");
    cy.get("button[type=submit]").click();
    cy.wait("@getSummerCharacter");

    cy.contains("Resultados para Summer").should("be.visible");
    cy.contains("Mechanical Summer").should("be.visible").click();

    cy.url().should("contain", "/character/");
    cy.wait("@getCharacter");

    cy.contains("Regresar").should("be.visible").click();
    cy.url().should("contain", "/");
    cy.wait("@getCharacters");
  });
});
