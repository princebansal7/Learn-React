# Learning React From Basics

#### *Understand the folder structure and working of JSX and React*

##### PS: *`Node.js`* must be installed on your system!!
- ##### Here is the link for `nvm` commands: <a href="https://github.com/princebansal7/Learn-JavaScript#readme" target="_blank">click</a>
### 1. To use these folders locally:


1. After downloading this Repo go to **Basics** folder, there are ordered sub-folders for learning essential concepts of React.
2. Now open that particular subfolder *(you want to learn)* in terminal *(preferably VS code)*
    
   eg: `% cd /Basics/1.introduction-to-jsx/`
3. Then use command to install node_modules

    ```shell
    npm install
    ```

4. Then

    ```shell
    npm start
    ```  

5. It's done ! Play around with the files. I've added brief comments for everything in orderely manner.

6. **node_modules** folder takes a lot of space, so to remove this folder use the below commands, it will locate *node_modules* folder recursively and deletes them. 
  
   NOTE: Using ``npm install`` we can get **node_modules** anytime we want.
   
   - Print out a list of directories to be deleted:
  
      ```bash
      find . -name 'node_modules' -type d -prune
      ```
   - Deletes *node_modules* from the current working directory:

      ```bash
      find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +
      ```


#### **Note:** `package.json`  is one of the most important file. As one of the main purpose is Here you can see all the related dependencies & modules which **node** is going to install. Also **`npm install`** command uses this `package.json` to download the essential modules and related dependencies to run React project.


<br>

### 2. Key Points:

- To learn about **JavaScript ES6** concepts and methods: <a href="https://github.com/princebansal7/Web-Development-Concepts/tree/main/javascript-es6" target="_blank">Click here</a>
- **Let's Understand the FOLDER STRUCTURE:**

  At beginner level you only need to observe two folders
  `public`  and `src`

    - **`public`** : folder will be having the main file called ***index.html***
    and in that file `<div class="root">` is where React will be rendering all of the code using `react` and `react-dom` Modules.

   - **`src`** : folder will be having all the related react components ***(jsx, js files)***.
      in which mainly we'll be looking at *App.js* file and *index.js* file (starting point of project)<br>
   - Further addition of related files and functional components, we will be learning as we go folder-by-folder in order.
   - Still majorly all the components (functional or class based) they usually resides in `components` folder which we keep inside `src` folder.
- `ReactDOM.render()` or Any Component in React returns only a single html element.
- if Multiple html elements or Components are there to be returned, they need to be enclosed in either **jsx fragement** or **single div**

  - JSX fragments

    ```html
      <React.Fragment></React.Fragment>

      <></>
      ```

  - Single div

    ```html
    <div></div>
    ```
- React version 18 and above doesn't support ``ReactDOM.render()``, so now it's done using ``createRoot()`` after importing ``import ReactDOM from "react-dom/client";``
  
  - Old way:
    ```jsx
    import React from "react";
    import ReactDOM from "react-dom";
    import App from "./components/App";

    ReactDOM.render(<App />, document.getElementById("root"));
    ```
  - New way:
      ```jsx
      import React from "react";
      import ReactDOM from "react-dom/client";
      import App from "./components/App";

      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(<App />);
      ```
- React newer version implementation starts from folder-15 (main changes will be done only in ``index.js``)


- **From Folder-16:**
  
    We'll be learning about **mapping** and creating basic ***``emojipedia``*** like this (ES6 Concepts must):
  <img align="right" alt="emoji-pedia" width="800" src="./images/emojipedia-mbp.png">

  <img align="right" alt="emoji-pedia" width="800" src="./images/emojipedia-mbp2.png">
  &nbsp 

