# cs-mocha-chai-quiz

Hello there. It's time to practice writing tests. Yay.

So far in the CS curriculum, you have primarily been the consumers of tests. You've been writing functions that are supposed to pass the tests that came pre-packaged with the repo.

Here, we're going to do things backwards. This repo comes pre-packaged with two functions-- areaCalc() and pokeSort(), but no tests. Your job is to write a test suite that tests both of these functions.

You don't have to understand the inner workings of each of these functions. The first function, areaCalc(), simply calculates the area of a triangle given three lengths using Heron's formula. The second function, pokeSort(), sorts an array of pokemon objects either by weight, name, or id. Both files which contain these functions have a console.log in them, so you can run each file (either using `command-i` or in your terminal) to see what they output for an answer.

As you are writing your tests, keep in mind that these functions may not be perfect. Did they take into account empty inputs, or invalid arguments? Maybe you should test those.

### Starting out

1. This repo does not come pre-packaged with any testing libraries. You will have to use Node Package Manager (NPM) to get Mocha and Chai.

2. Refer to the tests in the CS-Curriculum Exercises curriculum as you write your own tests. We don't expect that you can write tests from scratch right now.

3. In the CS-Curriculum exercises, look at the package.json file, as well as one of the src files where you wrote your solutions. Looking at these should help you figure out how everything is wired up.
