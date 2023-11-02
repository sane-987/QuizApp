# QuizApp
Mutli Language QuizApp
The repository has two seperate workspaces for backend and frontend


## Setting Up Backend Requisite:
#### The backend is built using NodeJs, MySQL, Sequelize ORM
You can setup backend workspace using the following command <br/>
npm i -y <br/>
This will install the required packages for the project.

### Setting up the MySQL database:
You should have mysql installed locally on your system..

Tables required : 
### Database Name : QuizApp(create database QuizApp)
#### Table Names : 
##### users(id int primary key auto_increment, email varchar(20), username varchar(20), password varchar(255));
##### Tests(testid int primary key, testtype enum('marathi', 'english', 'hindi', testscore int);
##### quiz(quizid int primary key auto_increment, testid int foreign key references Tests(testid), question varchar(100), choices varchar(45), answer varchar(20), points int);
##### UserScore(id int primary key auto_increment, testid int foreign key references Tests(testid), username varchar(20), score int);

### Sequelize Modelling
Sequelize has been used as ORM for database modelling.
We can use sequelize-auto for generating DB table models

#### Install sequeliz-auto : npm i -g sequelize-auto
For generating models : you can refer the ![sequelize-auto](https://github.com/sequelize/sequelize-auto) github link




## Setting Up Fronend:
The Frontend is built using ReactJs.<br/>

You can setup the frontend workspace locally using the following command : <br/>
npm i -y <br/>
This will get installed required packages.<br/>





















