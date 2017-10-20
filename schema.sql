To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console.

3. Run "source schema.sql"

*/

-- Create the database day_planner_db and specified it for use.
CREATE DATABASE friends_db;
USE friends_db;

-- Create the table plans.
CREATE TABLE activeFriends
(
id int NOT NULL AUTO_INCREMENT,
name varchar(255) NOT NULL,
photo varchar(255) NOT NULL,
score1 int (1) NOT NULL,
score2 int (1) NOT NULL,
score3 int (1) NOT NULL,
score4 int (1) NOT NULL,
score5 int (1) NOT NULL,
score6 int (1) NOT NULL,
score7 int (1) NOT NULL,
score8 int (1) NOT NULL,
score9 int (1) NOT NULL,
score10 int (1) NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO activeFriends (name, photo, score1, score2, score3, score4, score5, score6, score7, score8, score9, score10);
VALUES ("Jeffry", "https://www.pexels.com/photo/brown-beige-and-white-giraffe-under-white-clouds-39504/", 1, 2, 3, 4, 5, 5, 4, 3, 2, 1);

VALUES VALUES ("Tony", "https://www.pexels.com/photo/tiger-lying-down-during-daytime-162332/", 5, 5, 5, 5, 5, 5, 5, 5, 5, 5);
("Laughing C.", "https://www.pexels.com/photo/cow-on-field-248167/", 1, 5, 2, 4, 3, 3, 4, 2, 5, 1);
("Spud Mckenzie", "https://www.pexels.com/photo/white-dog-terrier-jumping-near-grass-field-during-daytime-159692/", 5 ,4 , 3, 2, 1, 1, 2, 3, 4, 5);
("Minnie Mouse", "https://www.pexels.com/photo/animal-cute-little-mouse-301448/", 3, 3, 3, 3, 3, 3, 3, 3, 3, 3);
("Quicky", "https://www.pexels.com/photo/garden-animal-cute-grass-104373/",5, 3, 1, 1, 2, 2, 3, 3, 4, 4)
