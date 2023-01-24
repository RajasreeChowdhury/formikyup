# Signup Form Validation

* Every field should have a corresponding error message below the field.
* The error messages should appear as and when you type into the fields. 
* The form should not be submitted (Alert should not be shown) unless all the fields have valid data.
* On clicking SignUp (Submit), only if all the fields have valid data,  alert should popup that says `Form submitted successfully!`.

There should be 3 fields.
#### Email

    * When there is no data the error should say `Email is required`
    * When there is data in the field but the data is not a valid Email. the error should say `Email is invalid`

#### Password

    * When there is no data the error should say `Password is required`
    * The password field should have a capital letter, a lowercase letter, a number and a symbol. If these criteria are not met the error message should say `Password too weak. Need 1 uppercase, 1 lowercase, 1 number and 1 special character`.
    * When the length of the password is less than 8 characters, the error should say `Password too short. Should be atleast 8 characters in length`.
    
#### Confirm Password

    * When there is no data the error should say `Confirm Password is required`
    * When the data does not match the data in the password field, the error should say `Passwords don't match`.


