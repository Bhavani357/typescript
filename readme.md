## TypeScript 
* Source: hitesh choudhary utube channel
### Installation 

* official website: `typescriptlang.org` 
* check node version: `node -v`
* `npm install -g typescript` 
* check : `tsc -v`

* file extension is : `name.ts`  
* if you use jsx syntax file extension is: `name.tsx` we use these file extension in react app
### code running 
* we can't run the typescript code directly.first we have to convert typescript code into javascript (`tsc fileName`) then run that javascript file 

* See tsConfig file for more details and setup in **typescriptlang.org**

### Types 

### Documentation guidlines 
* Docs > everydaytypes
* `https://www.typescriptlang.org/docs/handbook/2/everyday-types.html`

### Syntax 

`let variableName: type = value`

```typescript
    // string
    let greetings: string = "Hello world!!"
    greetings.toLowerCase()
    console.log(greetings);

    // number

    // first way
    let userId: number = 345627
    // second way 
    let age = 23.3 
    age.toFixed()


    // boolean
    let isLoggedIn: boolean = false


```

* typescript does `static Checking`
* typescript is a **development tool**. your project still runs js

### Types: 
* number,string,boolean,null,undefined,void,object,array,tuples,any never,unkonwn

### initialize typescript 
 ##### open utuntu terminal & run below codes
* 1) `tsc --init`
* 2) `npm init -y`
* 3) `mkdir src dist`
* 4) create a ts file in src folder and write code
* 5) open tsconfig file and enable `"outDir": "./dist", `
<!-- * run a file using `tsc src/index.ts`  -->

* 6) running on watch mode : `tsc -w`
* 7) add js file path to html file `<script src = './dist/index.js'>`
* 8) right click on html file then click on open with live server option. or 
* 9) another way to run : `npm i lite-server` 
* in package.json file `scripts{"start":"lite-server"}`
* `npm start`

* if you want to grow your code vertically not horizontally go to `view >word wrap option in that file` you can show these options in vscode header

### Praveen
I modified readme file