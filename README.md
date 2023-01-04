# react-dates DateRangePicker focus bug

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To see the bug happen, execute the following steps:

1. Clone this repository
2. `cd` into the cloned repository
3. Execute `npm install`
4. Start the application using `npm start`
5. Open `localhost:3000` in your web browser.
6. Input "2/24/2001" into the start date.
7. Input "2/25/2022" into the end date.
8. Click back into the start date field, positioning the cursor right after "24".
9. Delete the "4" using the backspace key.

## Actual
Notice that your cursor has now jumped to the end of the End Date input.

## Expected
In this scenario, my cursor should still be in the Start Date input. It should be right after the "2" which represents the day and before the /.