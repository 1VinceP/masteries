DROP TABLE IF EXISTS Stuff;

CREATE TABLE IF NOT EXISTS Stuff
( 
    id SERIAL PRIMARY KEY,
    title VARCHAR(100),
    info VARCHAR(300)
);

INSERT INTO Stuff
    ( title, info )
    VALUES
        ( 'Thing One', 'The first thing' ),
        ( 'Thing Two', 'The second thing' ),
        ( 'Thing Three', 'The third thing' );


-- A DataType is a very important structure in a database. It defines the type of each value.
-- If you set your title to the datatype of "number", then the database won't allow you to input
--      any value that isn't a number. Not only will the database not accept your value, but it
--      but it will also throw an error alerting you of your mistake.
-- I have experienced this error most commonly when attempting to insert a string into a VARCHAR column
--      that wouldn't allow as many characters as my string had. I fixed this either by adjusting the length
--      of my input, or the max length of the VARCHAR as opposed to changing the datatype to TEXT as that
--      dataype is more memory heavy.