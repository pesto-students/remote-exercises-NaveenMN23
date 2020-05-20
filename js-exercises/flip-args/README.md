# Instructions

Create a function that invokes `func` with arguments reversed.

```js
var flipped = flipArgs(function() {
  return _.toArray(arguments);
});
 
flipped('a', 'b', 'c', 'd');
// => ['d', 'c', 'b', 'a']
```

# Requirements

### **What are some good real-life use cases for such a function?**
1. When we need to display the contact in phone, if we want to display the last name followed by first name, then we need this
2. When we need to display the top paid employees by their monthly (say.1000) and annual (say.12000) then we need this


### **What test cases can you add to the test file?**

*Add the relevant test-cases in the test file*


# Restrictions
- Don't use any libraries