#### Describe:

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: pickANum(0);
Expected Output: [0]

Test: "It should replace numbers that contain a "1" with "Beep"
Code: beepBoop(1);
Expected Output: [0, "Beep"]

Test: "It should replace numbers that contain a "2" with "Boop"
Code: beepBoop(2);
Expected Output: [0, "Beep", "Boop"]

Test: "It should replace numbers that contain a "3" with "Won't you be my neighbor?"
Code: beepBoop(3);
Expected Output:[0, "Beep", "Boop", "Won't you be my neighbor?"]

Test: "It should replace numbers that contain "1" "2" or "3" based off inputted number"
Code:pickANum(15)
Expected Output:[0, 'Beep!', 'Boop!', "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Boop!', "Won't you be my neighbor?", 'Beep!', 'Beep!']

Test:
Code:
Expected Output:

**Create a web application that takes a number from the user and returns a list of values from 0 to the user's inputted number with the following substitutions made within the returned list:

For numbers that contain a 1, all digits are replaced with "Beep!"
For example, all digits of the number 109, 11, or 1 would be replaced with "Beep!"
For numbers that contain a 2, all digits are replaced with "Boop!"
For example, all digits of the number 2, 24, or 2099 would be replaced with "Boop!"
For numbers that contain a 3, all digits are replaced with "Won't you be my neighbor?"
For example, all digits of the number 39, 3, or 8763 would be replaced with "Won't you be my neighbor?"

# Mr. Roboger's Neighborhood
By Ravin Fisher

### This is to practice loops and arrays

#### Technologies Used
* HTML
* CSS
* Javascript

### Description
This is an application that you input a number and it should provide a result

### Setup/Installation Requirements
* Clone this repository to your desktop
* Navigate to the top of the repository
* Open index.html in your browser

### Known Bugs
Submit will not work

### License
_[MIT](LICENSE)_
Copyright (c) 2023 Ravin Fisher