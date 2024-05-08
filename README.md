#13Chlg - eCommerce

#Description: Work on this project was implemented at the request of the client, whose user story stated the following: “AS A manager at an internet retail company I WANT a back end for my e-commerce website that uses the latest technologies SO THAT my company can compete with other e-commerce companies.”

##Acceptance Criteria, GIVEN a functional Express.js API:

WHEN I add my database name, PostgreSQL username, and PostgreSQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the PostgreSQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database

Screencastify Link: https://watch.screencastify.com/v/BTNmmfWaB88KdRuqglr4

Github Repo Link: https://github.com/vicduar/eCommerce-ORM13.git

##Installation: The project was created using VS Code editor where Node .js, Sequelize, dotenv, and PostgresSQL were used. It was then uploaded to a Github repository. The server/database was initiated in the terminal using Node. It was videotaped on Screencastify.

##Usage: Open the terminal. Since there is already a package.json file, the next step is to enter “npm i” into the terminal to load all necessary files to the project. Next, the command “npm start” is used to start/connect to the server. Insomnia with JSON format was then used to execute the functional piece of the project where tags, products, and categories can be “Get”, “Post”, “Put”, and “Deleted.” With each of these functions, the list of each may be visualized to have successfully executed/been completed.


##Usage: Open the terminal. Since there is already a package.json file, the next step is to enter “npm i” into the terminal to load all necessary files to the project. Next, the command “npm start” is used to start/connect to the server. Insomnia with JSON format was then used to execute the functional piece of the project where tags, products, and categories can be “Get”, “Post”, “Put”, and “Deleted.” With each of these functions, the list of each may be visualized to have successfully executed.


References 

Github (2024). A free webservice for storing and deploying websites. Multiple pages retrieved and utilized from www.github.com May 5-7, 2024.

Meyers, M. (2024, May 5-7). Tutoring session via Www.zoom.us . Denver University Bootcamp.

W3Schools (2024, May 5-7). The world’s largest web developer site. Multiple pages retrieved from www.w3schools.com April 25-29, 2024.

##License This project is licensed under the MIT license.
