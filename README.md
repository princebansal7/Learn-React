# Learning React From Basics

## Anyone can Understand the folder structure and working of JSX and React from it

### To use these folders locally:

##### (PS: *node js* must be install on your system!)

1. Open any of the subfolder in terminal
2. Give Command

    ```
    npm install
    ```

3. Then

    ```
    npm start
    ```  

4. It's done ! Play around with the files and see working.

##### **Note:** `package.json`  is one of the most important file. One of the main purpose is Here you can see all the related dependencies (i.e, modules) node is going to install when *`npm install`* command executed

<br>

### Point to Remember:

In `ReactDOM.render()` if Multiple html elements or Components are there, they need to be enclosed in either **single jsx fragement** or **single div**

  1. JSX single fragment

    <></>

  2. Single div

   ```
   <div></div>
   ```

### Let's Understand the FOLDER STRUCTURE:

At beginner level you only need to observe two folders.

`public`  and `src`

**public**: folder will be having the main file called ***index.html***
 and in that file `<div=class="root">` is where we will be rendering all of our react code using react and react-dom Modules.

 **src** : folder will be having all the related react components ***(jsx, js files)***.
  in which mainly we'll usually looking at `App.js` file.<br>

### IN FOLDER-16 (``16.mapping-component-practice``): <br/>
  we'll be learning about mapping and creating basic ***``emojipedia``*** like this:

<img align="right" alt="emoji-pedia" width="800" src="./Basics/16.mapping-components-practice/src/images/emojipedia.png">
