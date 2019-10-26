# Genetics Algorithms

In this Javascript / NodeJS project you can find a genetic algorithm that solves the challenge for guessing a string.

The only feedback that receives this algorithm is the amount of characters that are wrong in each try.

    Goal String = 'Wonderwall!';

Try:

    Propose String = 'aUxksjlw.aw!';

Only one character is right, the last


## Installing dependencies

In order to run the program you must install the NodeJS compiler.

[https://nodejs.org/en/download/](https://nodejs.org/en/download/)

## Running the program

For executing the program you must type in your Mac OSX terminal or in the Windows command line:

    node main.js

## Example

In this example we are trying to guess the next string using a genetic algorithm:

    To be or not to be!

Each time that a generation is created we improve the results and we're getting a lower cost, reducing the error.

### Results after each generation:

    Generation: 0 
    Cost: 91568 4^Ý®)2§Vìy!"ÀIz
    ...

    Generation: 1000 
    Cost: 19692 Jf%U;¡p!GAP\M
    ...
    
    Generation: 1501 
    Cost: 3833 Mlss"cz'wn aU.~]1
    ...

    Generation: 1901
    Cost: 33 So cd or pot!qm"de#
    ...

    Generation: 2000
    Cost: 2 Tobe or not to bd!
    ...
    
    Generation: 2014
    Cost: 0 To be or not to be!
    ...

## References

Genetic Algorithms with Python:
[Chapter 1 - Book](https://www.amazon.com/Genetic-Algorithms-Python-Clinton-Sheppard/dp/1540324001)

Machine Learning: Introduction to Genetic Algorithms
[Blog](https://burakkanber.com/blog/machine-learning-genetic-algorithms-part-1-javascript/)
