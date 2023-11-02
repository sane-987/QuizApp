# QuizApp
Mutli Language QuizApp
The repository has two seperate workspaces for backend and frontend


##Setting Up Backend:
You can setup backend workspace using the following command
npm i -y
This will install the required packages for the project.

###Setting up the MySQL database:
You should have mysql installed locally on your system..

Tables required : 
### Database Name : QuizApp
#### Table Names : 
##### users(id int primary key auto_increment, email varchar(20), username varchar(20), password varchar(255));
##### Tests(testid int primary key, testtype enum('marathi', 'english', 'hindi', testscore int);
##### quiz(quizid int primary key auto_increment, testid int foreign key references Tests(testid), question varchar(100), choices varchar(45), answer varchar(20), points int);
##### UserScore(id int primary key auto_increment, testid int foreign key references Tests(testid), username varchar(20), score int);


## Setting Up Fronend:
