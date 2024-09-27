# JavaScript Document


# Table of contents

1. [What Is JavaScript](#what-is-javascript)
2. [VSCode Install](#vscode-install)
3. [Comments](#comments)
4. [Variables](#variables)
5. [const & let](#const--let)
6. [Data Types](#data-types)
7. [Operators](#operators)
8. [Functions](#functions)
9. [Strings](#strings)
10. [Arrays](#arrays)
11. [Loop](#loop)

# What Is JavaScript
>JavaScript is a programming language used to make web pages interactive. It runs in the browser and allows things like clicking buttons, typing in forms, and updating content without reloading the page. JavaScript is essential for modern websites, making them dynamic and responsive. It can be used for both the frontend (what users see) and backend (server-side) of web development. With JavaScript, you can create features like sliders, animations, and pop-ups. It's a key tool for web developers, enabling the creation of engaging and interactive online experiences.


# VSCode Install
- Step 1:-Open Terminal in Linux or use the shortcut (Ctrl + Alt + T).
- Step 2:-Check if the system is up-to-date using the following command:

    
                $ sudo apt update
- Step 6. After updating the system, install VS Code using the following command:

  
           $ sudo apt install code .
           or 
           sudo snap install code  --classic

- Step 6. Open VS Code.          

- Step 6:- Create a new file.
## ➡️    What is HTML?:-

- HTML (HyperText Markup Language) is the standard markup language used to create web pages. It defines the structure and content of a webpage using various tags. These tags organize text, images, videos, links, and other elements on the page.
## ➡️ How HTML is Used in JavaScript:
- JavaScript is used alongside HTML to make web pages interactive and dynamic. While HTML defines the structure, JavaScript can manipulate that structure in real-time based on user interactions or other conditions.        
                                 

##  HTML to JavaScript connected.
     </ Body>
       <script src=”index.js”></script>

### HTML Code:-
             <!DOCTYPE html>
              <html lang="en">
              <head>
                 <meta charset="UTF-8">
                 <meta name="viewport" content="width=device-width, initial-scale=1.0">
                 <title>Document</title>
              </head>
                      <body>
    
                      </body>
                    <script src="index.js">

                  </script>
                        </html>

### JS Code:-
       console.log("Hello");

### Output:-
    Hello
# Comments
- In JavaScript, comments are used to explain code and make it more readable. Single-line comments start with `//`, while multi-line comments are enclosed between `/*` and `*/`. Comments are ignored by the JavaScript engine and help with code documentation and debugging.
# Variables
- In JavaScript, a variable is used to store data that can be used and manipulated throughout your code. Variables are declared using the let, const, or var keywords.
# Example :-
             let age = 25;
             let Name = Ram;
             console.log(age);
             console.log(Name);
# Output :-
           25
           Ram
# const & let
          
- **let** :-  Declares variables that can be reassigned and is function-scoped or global if declared outside a function. It is more flexible but can lead to scope issues and unintended behavior in modern code.
# Example :- 
              const a = 552;
              console.log(a);
# Output :-
           552  
- **const** : Declares variables with a constant value that cannot be reassigned. It is block-scoped, meaning the variable is limited to the block in which it's defined. Ideal for values that should remain unchanged.
# Example :- 
              const a = 5.234;
              console.log(a);
# Output :-
           5.234              
# Data Types
- In JavaScript, there are several rules and best practices for using conditional statements to ensure your code is clean, readable, and effective. Here are some key rules:
# example :-
      let age = 20; 
     if (age >= 18) {
     console.log("You are eligible to vote.");
     } else {
     console.log("You are not eligible to vote.");
     }
# Output :-
        You are eligible to vote.
  

# Operators
- In JavaScript, operators are special symbols used to perform operations on variables and values. Here are the main types of operators:
  
       Arithmetic Operators
- Used for performing mathematical operations.  
# Example :- 
              const a = 5.234;
              console.log(a);
# Output :-
           5.234      
-  Addition (+): Adds two values.
  
## Example :- 
              let a = 2;
              let b = 5;
              console.log("a + b = " a + b);
## Output :-
           a + b = 6
-  Subtraction (-): Subtracts one value from another.
  
# Example :- 
             let a = 8;
              let b = 5;
              console.log("a - b = " a - b);
# Output :-
            a + b = 3
- Multiplication (*): Multiplies two values.

# Example :- 
              let a = 2;
              let b = 5;
              console.log("a * b = " a * b);
# Output :-
           a * b = 10
-  Division (/): Divides one value by another. 
# Example :- 
               let a = 10;
              let b = 5;
              console.log("a / b = " a / b);
# Output :-
           a / b = 2
 
  
# Functions 
- A function is a piece of code that can be defined once and executed whenever needed. It can take inputs, perform operations, and return an output.
# Example :- 
               function greet() {
              console.log("hello);
               }

    // Calling the function with and without arguments
      function greet()


# Output :-
           hello

# Strings 
- Strings can be created using single quotes ('), double quotes ("), or backticks (`) for template literals.
# Example :- 
               let a = 'Hello, world!';
               let b = "Hello, world!";
               let c = `Hello, world!`;
               console.log(a);
                console.log(b);
                 console.log(c);
# Output :-
           Hello, world!
           Hello, world!
           Hello, world!



# Arrays
- In JavaScript, an array is a special type of object used to store a collection of values. Arrays can hold elements of any type and are indexed from 0. They offer methods for adding, removing, and accessing elements, making them essential for handling lists and collections of data.
# Example :- 
               let name = "Himanshu kumar";
               let age = 25;
              let message = `Hello`;
              console.log(name); 
              console.log(age); 
             console.log(message); 

# Output :-
          Himanshu kumar
          25
          Hello

# Loop 
- In JavaScript, loops are used to execute a block of code repeatedly based on a condition. They help in iterating over data structures like arrays and objects or performing tasks multiple times. Here are the main types of loops:
            1. for Loop   
            2. while Loop
            3. do while Loop
## 1. for Loop :- 
-    A for loop is used to run a block of code multiple times. It’s useful when you know in advance how many times you want the loop to run.
# Example :- 
              for (let i = 0; i < 5; i++) {
            console.log(i);
            }


# Output :-
          0
          1
          2
          3
          4  

## 2. while Loop :- 
-  The while loop is used to execute a block of code as long as a specified condition remains true. It checks the condition before executing the code block.
# Example :- 
              let i = 0;
              while (i < 5) {
               console.log(i);
              i++;
                 }



# Output :-
          0
          1
          2
          3
          4      
## 3. do while Loop:- 
-  The do...while loop is similar to the while loop, but it guarantees that the code block will be executed at least once because the condition is checked after the code block has been executed.
# Example :- 
             let i = 0;
                do {
           console.log(i); 
                 i++;
             } while (i < 5);

                 
 # Output :-
          0
          1
          2
          3
          4                               

# Conclusion :-
>JavaScript is a versatile and essential programming language used for creating interactive and dynamic content on websites. It allows developers to enhance user experiences through features like form validation, animations, and asynchronous data loading. With its widespread support across browsers and integration with various frameworks and libraries, JavaScript is a fundamental tool for modern web development. Its ability to interact with HTML and CSS makes it indispensable for building responsive and engaging web applications.

# Reference Link                                
## [JavaScript Link:-](https://www.semrush.com/blog/javascript-cheat-sheet/?kw=&cmp=IN_SRCH_DSA_Blog_EN&label=dsa_pagefeed&Network=g&Device=c&utm_content=676232809830&kwid=dsa-2185834088336&cmpid=18364821001&agpid=153934787429&BU=Core&extid=118827657104&adpos=&gad_source=1&gclid=Cj0KCQjw28W2BhC7ARIsAPerrcIX3tfqw8PpYa8y-0piTm6h1LXgIWuVanDTx5NLXMHTyVo0lUX9zVwaAvxrEALw_wcB)

## Thank You