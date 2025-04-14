First make sure MySQL Works and has a database named: CSCI 61

Run the ff commands in MySQL:

CREATE TABLE Users (Username VARCHAR(255) NOT NULL, Password VARCHAR(255) NOT NULL, PRIMARY KEY (Username));
INSERT INTO Users (Username, Password) VALUES ('mariamakiling', 'calamba_LAGUNA');
INSERT INTO Users (Username, Password) VALUES ('IgnatiusLOYOLA', 'admaioremDEIgloriam');

Once done, you may run the node server:

node index.js

and in another terminal, you may the run the my-react-app:

cd my-react-app
npm start