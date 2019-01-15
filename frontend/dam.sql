-- -- STUDENT
-- insert into students values (null,"Petre Cosmin","petrecosmin@stud.ase.ro","pass100");
-- insert into students values (null,"Niculae Andreea","niculaeandreea@stud.ase.ro","pass200");
-- insert into students values (null,"Paun Corina","pauncorina@stud.ase.ro","pass300");
-- insert into students values (null,"Olariu Mihai","olariumihai@stud.ase.ro","pass400");
-- insert into students values (null,"Parvu Adela","parvuadela@stud.ase.ro","pass500");
-- insert into students values (null,"Hiru Larisa","hirularisa@stud.ase.ro","pass600");
-- insert into students values (null,"Dinca Dan Mihai","dincadan@stud.ase.ro","pass700");
-- insert into students values (null,"Tanase Steluta","tanasesteluta@stud.ase.ro","pass800");
-- insert into students values (null,"Mihaila Tudor Marcel","mihailatudor@stud.ase.ro","pass900");

-- -- TEACHERS

-- insert into teachers values (null,"Zamfirescu Catalin","zamfirescucatalin@prof.ase.ro","pass001");
-- insert into teachers values (null,"Catrinescu Madalina","catrinescumadalina@prof.ase.ro","pass002");
-- insert into teachers values (null,"Borsec Adrian","borsecadrian@prof.ase.ro","pass003");
-- insert into teachers values (null,"Maus Andreea-Elena","mausandreea@prof.ase.ro","pass004");
-- insert into teachers values (null,"Monitorus Sebastian","monitorussebastian@prof.ase.ro","pass005");
-- insert into teachers values (null,"Cablu Cristian","cablucristian@prof.ase.ro","pass006");
-- insert into teachers values (null, "Dop Corina","dopcorina@prof.ase.ro","pass007");
-- insert into teachers values (null,"Castovici Monica","castovicimonica@prof.ase.ro","pass008");
-- insert into teachers values (null,"Butonel Marius","butonelmarius@prof.ase.ro","pass009");

-- -- QUIZES

-- insert into quizzes values (null,"Java Programming Basics Assignment","This quiz contains questions from courses 1 to 4. It's 10% from the laboratory grade.",280,1,1,1234,1);
-- insert into quizzes values (null,"Java Assignment Intermediate","For the second grade you must take this quiz. It's 20% from the laboratory grade",280,1,1,2345,1);
insert into quizzes values (null,"C and C++ Quiz","After the last workshop, this quiz is available to test your knowledge and new informations about C and C++.",200,1,0,3456,1);

-- -- QUESTIONS 

-- insert into questions values (null,"An object could be...",1);
-- insert into questions values (null,"What is an assignment statement?",1);
-- insert into questions values (null,"Which of the following is not a Java keyword?",1);
-- insert into questions values (null,"If you want your condition to depend upon two conditions BOTH being true, what is the proper notation to put between the two Boolean statements?",1);
-- insert into questions values (null,"OOP means...",1);
-- insert into questions values (null,"Choose the appropriate data type for this field: isStudent",1);
-- insert into questions values (null,"A UML Association is:",1);

-- insert into questions values (null,"Who is known as the founder of Java?",2);
-- insert into questions values (null,"We can provide explicit security by:",2);
-- insert into questions values (null,"System.out.println(12>>2); What is the output?",2);
-- insert into questions values (null,"Which of the following classes are available in the java.lang package? ",2);
-- insert into questions values (null,"What programming language is considered to be the first OOP language? ",2);
-- insert into questions values (null,"Which Man class properly represents the relationship `Man has a best friend who is a <Dog>`",2);
-- insert into questions values (null,"What Java keyword do you use to define a class?",2);

insert into questions values (null,"In C, parameters are always...",3);
insert into questions values (null,"Suppose a C program has floating constant 1.414, what's the best way to convert this as `float` data type?",3);
insert into questions values (null,"Which of the following functions from “stdio.h” can be used in place of printf()?",3);
insert into questions values (null,"Which of the following statement is correct for switch controlling expression?",3);
insert into questions values (null,"Which of the following is correct with respect to “Jump Statements” in C?",3);


-- -- ANSWERS

-- insert into answers values (null,"Anything",1,1);
-- insert into answers values (null,"An algorithm",0,1);
-- insert into answers values (null,"A data container",0,1);
-- insert into answers values (null,"A program",0,1);

-- insert into answers values (null,"Adding a number to an int",0,2);
-- insert into answers values (null,"Assigning a multiplication",0,2);
-- insert into answers values (null,"Assigning a name to a variable",0,2);
-- insert into answers values (null,"Assigning a value to a variable",1,2);

-- insert into answers values (null,"static",0,3);
-- insert into answers values (null,"try...catch",0,3);
-- insert into answers values (null,"Bool",1,3);
-- insert into answers values (null,"Integer",1,3);

-- insert into answers values (null,"!",0,4);
-- insert into answers values (null,"&&",1,4);
-- insert into answers values (null,"||",0,4);
-- insert into answers values (null,"$",0,4);

-- insert into answers values (null,"Being objective about what you develop",0,5);
-- insert into answers values (null,"Writing the algorithm before writing your program and having a test plan",0,5);
-- insert into answers values (null,"Designing applications based on the objects discovered analysing the problem",1,5);
-- insert into answers values (null,"Writing a program composed of Java classes",0,5);

-- insert into answers values (null,"double",0,6);
-- insert into answers values (null,"boolean",1,6);
-- insert into answers values (null,"string",0,6);
-- insert into answers values (null,"int",0,6);

-- insert into answers values (null,"implemented as a Java attribute member",1,7);
-- insert into answers values (null,"implemented as a Java method",1,7);
-- insert into answers values (null,"implemented as a Java Class",0,7);
-- insert into answers values (null,"implemented as a Java library",0,7);

-- insert into answers values (null,"James Gosling",1,8);
-- insert into answers values (null,"E.K. Brukle",0,8);
-- insert into answers values (null,"Bradley Cooper Jr.",0,8);
-- insert into answers values (null,"Nicholas Cage",0,8);

-- insert into answers values (null,"Bytecode verifier",0,9);
-- insert into answers values (null,"Crypography",1,9);
-- insert into answers values (null,"Using acronyms and strong passwords",0,9);
-- insert into answers values (null,"SSL and JAAS",1,9);

-- insert into answers values (null,"12",0,10);
-- insert into answers values (null,"6",0,10);
-- insert into answers values (null,"2",0,10);
-- insert into answers values (null,"3",1,10);

-- insert into answers values (null,"Vector",0,11);
-- insert into answers values (null,"Stack",0,11);
-- insert into answers values (null,"Object",1,11);
-- insert into answers values (null,"Random",0,11);

-- insert into answers values (null,"Smalltalk",0,12);
-- insert into answers values (null,"simula",1,12);
-- insert into answers values (null,"PerfectCode",0,12);
-- insert into answers values (null,"C++",0,12);

-- insert into answers values (null,"class Man {private DogBestFriend;}",0,13);
-- insert into answers values (null,"class Man {private BestFriend;}",0,13);
-- insert into answers values (null,"class Man {private Dog;}",1,13);
-- insert into answers values (null,"class Man extends Dog",0,13);

-- insert into answers values (null,"define",0,14);
-- insert into answers values (null,"new",0,14);
-- insert into answers values (null,"import",0,14);
-- insert into answers values (null,"class",1,14);

insert into answers values (null,"passed by value",1,15);
insert into answers values (null,"passed by reference",0,15);
insert into answers values (null,"non-pointer var are passed by value and pointers by reference",0,15);
insert into answers values (null,"passed by value result",0,15);

insert into answers values (null,"(float)1.414",0,16);
insert into answers values (null,"float(1.414)",0,16);
insert into answers values (null,"1.414f",1,16);
insert into answers values (null,"1.414 itself of float data type, nothing else required",0,16);

insert into answers values (null,"fputs() with FILE stream as stdout",0,17);
insert into answers values (null,"fprintf() with FILE stream as stdout",1,17);
insert into answers values (null,"fwrite() with FILE stream as stdout",0,17);
insert into answers values (null,"There are no functions like printf() in `stdio.h`",0,17);

insert into answers values (null,"Only int can be used in `switch` expressions",0,18);
insert into answers values (null,"Both int and char can be used in `switch`",1,18);
insert into answers values (null,"Int,char and float can be used in `switch`",0,18);
insert into answers values (null,"`switch` can be empty as well",0,18);

insert into answers values (null,"goto",0,19);
insert into answers values (null,"continue",0,19);
insert into answers values (null,"return",0,19);
insert into answers values (null,"All of the above",1,19);

