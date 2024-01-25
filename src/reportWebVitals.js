Ticket Title: Write Test Cases for reportWebVitals.js

Ticket Description:

We need to ensure the efficient performance of our "reportWebVitals.js" file. Writing a series of test cases will enable us to assert whether the functionalities are working as expected. This will be very crucial in ensuring the performance and responsiveness of our webpage.

Instructions: 

1. Write a test case to check if the `reportWebVitals` function is defined.
2. Write a test case to verify if the `onPerfEntry` is a function when it's passed as an argument to `reportWebVitals`.
3. Write a test case to confirm that `getCLS`, `getFID`, `getFCP`, `getLCP`, `getTTFB` are called when `reportWebVitals` is invoked with a function as an argument.
4. Write a test to confirm that `getCLS`, `getFID`, `getFCP`, `getLCP`, `getTTFB` are not called when `reportWebVitals` is invoked without a function as an argument.
5. Write a test case to ensure that all the methods are imported from the 'web-vitals' package.

Acceptance Criteria:

The tests should

1. Confirm whether the `reportWebVitals` function is defined.
2. Confirm whether `onPerfEntry` is a function or not.
3. Confirm that the methods `getCLS`, `getFID`, `getFCP`, `getLCP`, `getTTFB` are being called by `reportWebVitals`.
4. Confirm that `getCLS`, `getFID`, `getFCP`, `getLCP`, `getTTFB` are not being called when `reportWebVitals` is invoked with non-functional arguments.
5. Confirm the import of all methods from the 'web-vitals' package.

Resources:

The original file is located at the file path "src/reportWebVitals.js".