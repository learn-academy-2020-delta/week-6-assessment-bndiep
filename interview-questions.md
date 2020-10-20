# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: The name of the foreign key is animal_id and is part of the Sightings model.

  Researched answer: An association is the connectiom between two Active Record models. When creating the Sightings model, we must include the foreign key because Sightings belongs_to the model Animal and Animal has_many Sightings. We use a foreign key becuase it makes common operations simpler and easier in our code by telling Rails that there is a connection between Animal and Sightings. The belongs_to association sets up a one-to-one connection with the Animal model.



2. Which RESTful routes must always be passed params? Why?

  Your answer: The update and delete routes need to be passed params because the user must select a specific item to edited or destroyed.

  Researched answer: The RESTful routes that require params to be passed are show, edit, update, and destroy. These routes select for a specific ID that will be found do be displayed or modified (either updated or destroyed). Show and edit are associated with the HTTP verb GET. Update is associated with the HTTP verb put or patch. Destroy is associated with the HTTP verb DELETE.



3. Name three rails generator commands. What is created by each?

  Your answer: (1) rails generate model - Creates the model/tables within the schema.
  (2) rails generate controller - Creates the controller class that holds the controller methods to access specific routes.
  (3) rails generate resource - It creates the models for the schema and the controller (without having to do the above commands).

  Researched answer: (1) rails generate - Gives a list of available generators such as assets, channel, controller, generator, etc.
  (2) rails generate controller ControllerName action1 action2 - Used to make your own controller with expecting parameters. It creates the controller file, a view file, a functional test file, a helper for the view, a JS file, and a stylesheet file.
  (3) rails generate model ModelName column_1_name:columnType column_2_name:columnType - Creates data models. It creates the model file and a migration file which describes the changes being made to the schema.
  (4) rails generate initializer - Invoke a new generator.
  (5) rails generate scaffold - Generate major pieces of an application. Easy way to automatically create the models, views, and controllers for a new resource or the basic structure of a Rails project. It also includes a new route and a migration to prepare the database. Adds a unique property to a field.
  (6) rails generate migration AddFieldToModel field:type - Add a column to an existing model.
  (7) rails generate rspec:model spec_file_name - Create a new Rspec file in the models folder.
  (8) rails generate rspec:view file_name index edit new show - Creates specific views for index, edit, new, and show routes.


4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /users          
-> index, displays all the users in a hash
method="GET"    /users/1  
-> show, displays the user with the id of 1
method="GET"    /users/new
-> new, return an HTML form to create a new user
method="GET"    /users/edit/1    
-> edit, return an HTML form to edit a user
method="POST"   /users/       
-> create, creates a new user once form is submitted
method="PUT"    /users/1      
-> update, updates a user of id 1 once form is submitted
method="DELETE" /users/1      
-> destroy, delete the user with id 1


5. As a developer, you want to make an application that will help you manage your to do list. For the MVP, you want to create just the user's view. Create 10 user stories that will help you get your application started. 

(1) As a user, I can title my to do list.
(2) As a user, I can add a task to the todo list.
(3) As a user, I can add a time/due date that the task must be completed.
(4) As a user, I can mark that a task has been completed.
(5) As a user, I can undo a task that was accidentally marked completed.
(6) As a user, I can remove a task from the to do list.
(7) As a user, I can view to lists that have been completed in the past.
(8) As a user, I can sort the list by due date.
(9) As a user, I can add a subtask to a general task.
(10) As a user, I can update the task name (or due date).