# Salesforce N26 Project:

1. Display the customer’s product information to the agent whilst they’re interacting. 

    a. Customer Card Service visible to Customer service agents
    
   ![image](https://user-images.githubusercontent.com/36527366/212568749-7c086217-8368-4c3b-af1e-e0f04f670e1c.png)

    
    b.  ‘Product__c’ and ‘Home_Country__c’ from the related Contact record to determine the customer’s product and legal country
    
    ![image](https://user-images.githubusercontent.com/36527366/212567404-a83f2363-dc8f-48db-b4fa-160d67ac3ef5.png)

        
    c.  Custom Metadata for 
    
        1.) Cost per Calendar Month
        
        2.) ATM Fee in other currencies
        
        3.) Card Replacement Cost
    
    ![image](https://user-images.githubusercontent.com/36527366/212567622-b60c126c-c8d9-418a-9e2f-0173876dbc74.png)

        
2. N26 External system passes a unique identifier (UUID) that is mapped to every contact
record in Salesforce. API that would be able to return the data for a contact based on the table
below.

    https://login.salesforce.com/services/apexrest/ProductInfoService/*
