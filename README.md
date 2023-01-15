# Salesforce N26 Project:

1. We’re new to Lightning, and starting to make the most of component’s flexibility to
show our customer service agents the most important information as, and when, they
need it. This might be displaying the customer’s other open issues as they’re talking to
them. For this task, we’d like you to display the customer’s product information to the
agent whilst they’re interacting. This Lightning component (or Lightning web
component, if you prefer) should:
a. Be visible to the agent on the Case page layout
b. Use two custom fields (‘Product__c’ and ‘Home_Country__c’) from the related
Contact record to determine the customer’s product and legal country
c. Use the values in these fields to display the matching product information
The product information to be displayed can be found in the tables given at the end.
Each column in the tables below corresponds to a value in the ‘Home_Country__c’ field,
and each row relates to a specific ‘Product__c’.
Please note that this is subject to change and new factors, such as length of contract or
special packages, could influence any costs and fees. Modifying the existing product
information, or adding entirely new products, should be as simple as possible.
2. N26 also uses an external system, where the customer data is shown from Salesforce.
The team would need a mechanism to connect to Salesforce and get the relevant
information.
External system passes a unique identifier (UUID) that is mapped to every contact
record in Salesforce.
Design an API that would be able to return the data for a contact based on the table
below.

● Please provide your solutions in a GitHub repository
● Write meaningful tests.
● Comment where appropriate.
● Keep in mind that Salesforce daily limits must not be exceeded.
● N26 follows standards of keeping code clean, adhering to OOP principles .