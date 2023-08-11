## RandomPasswordGenerator
Week 3 homework, Random Password Generator.

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria

COMPLETED ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

WHEN prompted for password criteria
THEN I select which criteria to include in the password

COMPLETED ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ (However the password Length is asked at the beginning of the prompt and afterward
the criteria is outlined and chosen.)

WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters

COMPLETED ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

COMPLETED^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected

If less than 8 or more than 128 characters are selected the "Generated Password" box instead writes 'ERROR' and the prompt comes up explaining what your issue is, However for the specific number of characters required Im not sure how to make it so that it will give you an 
error if you dont choose atleast 1 

BUT, for the most part COMPLETED^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

WHEN all prompts are answered
THEN a password is generated that matches the selected criteria

Completed^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

WRITTEN ON THE PAGE AS REQUESTED INSIDE THE BOX = COMPLETED^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^6
```