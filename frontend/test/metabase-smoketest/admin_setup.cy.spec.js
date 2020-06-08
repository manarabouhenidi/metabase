import { restore, USERS, signInAsAdmin } from "__support__/cypress";

describe("smoketest > admin_setup", () => {
  before(restore);
  before(signInAsAdmin);

  it("should have admin changes reflected with the user account", () => {
    cy.visit("/")

    // *******************************
    // *** Admin > Successful Setup **
    // ********************************

    // =================
    // should add a new database
    // *** I don't have any faux databases to hook up to. Are there some in the system already?
    // *** Should eventually include BigQuery, Druid, Google Analytics, H2, MongoDB, MySQL/Maria DB, PostgreSQL, Presto, Amazon Redshift, Snowflake, Spark SQL, SQLite, SQL Server
    // =================

    // Navigate to page
    
    cy.get(".Nav")
      .children()
      .last()
      .children()
      .last()
      .click();
    cy.findByText("Admin").click();

    cy.contains("Metabase Admin");
    cy.contains("dashboard").should("not.exist");

    cy.findByText("Databases").click();
    
    cy.contains("Sample Dataset");
    cy.contains("Updates").should("not.exist");
    
    cy.findByText("Add database").click();

    cy.contains("Automatically run queries when doing simple filtering and summarizing");

    // Adds new database

    // cy.findByText("H2").click();
    // cy.findByText("PostgreSQL").click();
    // cy.findByLabelText("Name").type("Postgre Database");
    // cy.findByLabelText("Host").type("");
    // cy.findByLabelText("Port").type("");
    // cy.findByLabelText("Database name").type("");
    // cy.findByLabelText("Database username").type("");
    // cy.findByLabelText("Database password").type("");
    // // *** check that toggles are correct
    // cy.findByLabelText("Additional JDBC connection string options").type("");
    // cy.findByText("Save").click();

    // =================
    // should setup email (maybe using something like maildev)
    // =================

    cy.findByText("Settings").click();
    cy.findByText("Email").click();

    cy.contains("Email address you want to use as the sender of Metabase.")
    cy.contains("Sample Database").should("not.exist");

    // Email info
    // cy.findByLabelText("SMTP HOST").type("smtp.gmail.com");
    // cy.findByLabelText("SMTP PORT").type("465");
    // cy.findByText("SSL").click();
    // cy.findByLabelText("SMTP USERNAME").type(""); // *** enter email here
    // cy.findByLabelText("SMTP PASSWORD").type(""); // *** enter password here
    // cy.findByLabelText("FROM ADDRESS").type("metabase@metabase.com");
    // cy.findByText("Save changes").click();

    // =================
    // should setup Slack
    // =================

    cy.findByText("Slack").click();

    cy.contains("Answers sent right to your Slack #channels");
    cy.contains("metabase@metabase.com").should("not.exist");

    // cy.findByText("Create a Slack Bot User for MetaBot").click();

    // cy.contains("Sign in to your workspace");
    // cy.url().should("not.include", "admin");

    // cy.findByText("Save changes").click();

    // =================
    // should create new groups
    // =================

    cy.findByText("People").click();

    cy.contains("2 other groups");

    cy.findAllByText("Groups")
      .first()
      .click();
    
    cy.contains("You can use groups to control your users' access to your data.");
    cy.contains("All Users");
    cy.contains("Slack").should("not.exist");

    // Creates new group

    cy.findByText("Create a group").click();
    cy.get("input").type("Marketing");
    cy.findByText("Add").click();
    cy.findByText("Marketing").click();

    cy.contains("A group is only as good as its members.");
    
    // Adds user as member

    cy.findByText("Add members").click();
    cy.get("input").type("T");
    cy.findByText(USERS.normal.first_name + " " + USERS.normal.last_name).click();
    cy.findByText("Add").click();
    
    cy.contains(USERS.normal.username)
    cy.contains("A group is only as good as its members.").should("not.exist");

    
    // Adds self as member
    
    cy.findByText("Add members").click();
    cy.get("input").type("T");
    cy.findByText(USERS.admin.first_name + " " + USERS.admin.last_name).click();
    cy.findByText("Add").click();
    
    cy.contains(USERS.admin.username)

    // Check member count

    cy.findAllByText("People")
      .last()
      .click();
    
    cy.contains("3 other groups");
    
    cy.findAllByText("Groups")
      .first()
      .click();
    
    cy.contains("Marketing");
    cy.get("td")
      .eq("-2")
      .contains("2");

    // =================
    // should create new users in different groups
    // =================
    // =================
    // should set up custom maps
    // =================


    // ********************************
    // * Data Model Changes Reflected *
    // *********************************

    // =================
    // should sign in as new user
    // =================
    // =================
    // should change password as user
    // =================
    // =================
    // should check table names as user
    // =================
    // =================
    // should rename a table as admin
    // =================
    // =================
    // should add a description to a table as admin
    // =================
    // =================
    // should change a column name as admin
    // =================
    // =================
    // should change a column's visibility (and have it be reflected in notebook editor) as admin
    // =================
    // =================
    // should change a columns formatting (and have it be reflected in notebook editor) as admin
    // =================
    // =================
    // should configure a foreign key to show the name (and have it be reflected in notebook editor) as admin
    // =================
    // =================
    // should hide a table (and have it be reflected in the notebook editor) as admin
    // =================
    // =================
    // should see changes to visibility, formatting, and foreign key mapping as user
    // =================


    // *********************************
    // ** Permission Changes Reflected *
    // *********************************
    
    // =================
    // should check current permissions as user
    // =================
    // =================
    // should modify user permissions for data access and SQL queries, both on a database/schema level as well as at a table level as admin
    // =================
    // =================
    // should modify Collection permissions for top-level collections and sub-collections as admin
    // =================
    // =================
    // should no longer be able to access tables or questions that have been restricted as user
    // =================
    // =================
    // should be able to view collections I have access to, but not ones that I don't (even with URL) as user
    // =================
    // =================
    // should deactivate a user admin and subsequently user should be unable to login
    // =================
  });
});