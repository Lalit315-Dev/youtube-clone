## New Points learned in this project
1. module.exports, exports
2. How does require work
3. server events, app.listen() return Node HTTP server. There are two events on the returned server. They are 'close' and 'error'.
4. common middlewares used while setting up app (cors, cookie-parser, express.json, express.static, express.urlencoded)
5. slice vs splice -> slice doesn't modify original array and ending range is exclusive where as splice modifies the original array and ending range is exclusive
 Ex: arr = [10,20,30,40,50,60] 
     arr2 = arr.slice(1,4)  // output : arr = [10,20,30,40,50,60] , arr1 = [20,30,40]
     arr3 = arr.splice(1,4) // output : arr = [10,60] , arr2 = [20,30,40,50]
6. All the primitive data types (string, number, boolean, undefined, null, symbol) are pass by value and reference data types (object) is pass by reference is js
