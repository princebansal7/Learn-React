# Learning React From Basics

#### *Anyone can Understand the folder structure and working of JSX and React from it*

### 1. To use these folders locally:

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

### 2. Points to Remember:

- In `ReactDOM.render()` if Multiple html elements or Components are there, they need to be enclosed in either **single jsx fragement** or **single div**

  - JSX single fragment

    ```
      <> </>
      ```

  - Single div

    ```
    <div></div>
    ```
- React version 18 and above doesn't support ``ReactDOM.render()``, so now it's done using ``createRoot()`` after importing ``import ReactDOM from "react-dom/client";``
  
  - Old way:
    ```
    import React from "react";
    import ReactDOM from "react-dom";
    import App from "./components/App";

    ReactDOM.render(<App />, document.getElementById("root"));
    ```
  - New way:
      ```
      import React from "react";
      import ReactDOM from "react-dom/client";
      import App from "./components/App";

      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(<App />);
      ```
- React newer version implementation is done from folder-15 (main changes will be done only in ``index.js``)

- **Let's Understand the FOLDER STRUCTURE:**

  At beginner level you only need to observe two folders
  `public`  and `src`

    - **public** : folder will be having the main file called ***index.html***
    and in that file `<div=class="root">` is where we will be rendering all of our react code using react and react-dom Modules.

   - **src** : folder will be having all the related react components ***(jsx, js files)***.
      in which mainly we'll usually looking at `App.js` file.<br>

- **In Folder-16 (``16.mapping-component-practice``):**
  
    We'll be learning about mapping and creating basic ***``emojipedia``*** like this:

  <img align="right" alt="emoji-pedia" width="800" src="./Basics/16.mapping-components-practice/src/images/emojipedia.png">
