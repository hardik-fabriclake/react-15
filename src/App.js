Ticket Title: Write Test Cases for src/App.js

Ticket Description:

As a part of our ongoing effort to improve code quality and catch potential issues early, we need test cases written for the code in src/App.js. Please include test for the following cases:

1. "App" Component is rendered properly: Check if the App component is rendering without crashing. Should check the complete structure including "header", "p", "img", "a".

2. "Logo" is displayed correctly: Validate that the logo is being rendered and that it is using the correct source file (logo.svg).

3. Static text is present and correct: Validate the static text, "Edit src/App.js and save to reload" is present in the paragraph tag.

4. Link component: Check if the Learn React link is functioning as expected, leading to the correct URL (https://reactjs.org) and opening in a new browser window/tab.

5. 'App-link' & 'App-header' being used correctly: Validate that these classes are present in respective hierarchy.

The test cases should be written in a new file, 'App.test.js', inside the 'src' directory.

Deliverables:
1. App.test.js file containing all the test cases.
2. Documented results of running these test cases.
3. If any bugs are identified while writing these test cases, please log separate tickets for them and do not include the fixes in this change.

Acceptance Criteria:
1. All test cases should execute successfully.
2. No modifying of the existing file src/App.js
3. All deliverables are completed and test results are documented.
4. If bugs are found, separate tickets have been logged.