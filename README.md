# angular-crud-demo

This is another demo CRUD angular project.

Features:
1. View movie information in a table.
2. Sort the table.
3. Add/Edit/Delete movie item.

Used:
Angular.js, Angular-strap

You can run this project simply using any server.

I used simplehttpserver (https://www.npmjs.com/package/simplehttpserver)

Install using npm

  <code>  npm install simplehttpserver -g </code>

Usage

Open command prompt. Go to the repo folder & run

 <code> simplehttpserver </code>
 
 http://localhost:8000   .........Gooo!

TIPS:

In order to sort, please click at the headers. After every click the sorting direction toggles between 'asc' to 'desc'

Table can not sorted by ACTORS since this is not a primitive value, but an array..
In order to edit/add actors use comma separated strings at the modal. Example: Brad pit, Leo DiCaprio, Mr.X
