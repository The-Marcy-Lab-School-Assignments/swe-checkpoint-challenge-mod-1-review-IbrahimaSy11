# Short Responses

For this assessment, aim to write a response with the following qualities:

- [ ] Addresses all parts of the prompt
- [ ] Accurately uses relevant technical terminology
- [ ] Is free of grammar and spelling mistakes
- [ ] Is easy to comprehend

For each prompt below, write your response in the space provided. Aim to answer each prompt in 2-5 concise sentences. Make sure to preview your markdown to check how it is rendered before submitting.

## Prompt 1

Consider the code below which has a bug. Instead of printing the correct letter grade, it always prints `"Your grade is: undefined"`.

```js
const getLetterGrade = (score) => {
  let letter;
  if (score >= 90) {
    let letter = "A";
  } else if (score >= 80) {
    let letter = "B";
  } else if (score >= 70) {
    let letter = "C";
  } else {
    let letter = "F";
  }

  return "Your grade is: " + letter;
};

console.log(getLetterGrade(95)); // This should print "Your grade is: A"
console.log(getLetterGrade(82)); // This should print "Your grade is: B"
console.log(getLetterGrade(74)); // This should print "Your grade is: C"
console.log(getLetterGrade(65)); // This should print "Your grade is: F"
```

**Part A**: Explain why this bug is occurring. Use proper technical terminology.

**Part B**: Then, explain how you would fix it.

### Response 1

**Part A:**

The issue comes from using let again inside each if and else if block. When you do that, you are not updating the original letter variable. Instead, you are creating a new block-scoped variable with the same name. Because of that, the outer letter never gets a value, so by the time the function returns, it is still undefined.

**Part B:**

The fix is simple: remove the let inside the conditional statements. That way, you are assigning a value to the original letter variable instead of creating a new one. Once you do that, the function will return the correct grade.

Correct version:

```js
const getLetterGrade = (score) => {
  let letter;
  if (score >= 90) {
    letter = "A";
  } else if (score >= 80) {
    letter = "B";
  } else if (score >= 70) {
    letter = "C";
  } else {
    letter = "F";
  }

  return "Your grade is: " + letter;
};
```

---

## Prompt 2

Read the following code:

```js
const originalSettings = { volume: 50, brightness: 80 };
const newSettings = originalSettings;
newSettings.volume = 75;
console.log(originalSettings.volume);
```

**Part A:** What will be logged to the console? Why does this happen? Be sure to use precise technical terminology in your answer.

**Part B:** How would you modify the code so that changing `newSettings.volume` does NOT affect `originalSettings.volume`? Write the corrected code below your explanation.

### Response 2

**Part A:**

The console will log 75.
This happens because originalSettings and newSettings are not two separate objects. They are two references pointing to the same object in memory. In JavaScript, objects are stored by reference, not by value. So when you update newSettings.volume, you are modifying the exact same object that originalSettings is pointing to. That is why the change shows up on both.

**Part B:**

To prevent changes in newSettings from affecting originalSettings, you need to create a true copy of the object instead of copying the reference. You can do this using the spread operator, which creates a shallow clone.

**Corrected Code:**

```js
const originalSettings = { volume: 50, brightness: 80 };
const newSettings = { ...originalSettings }; // create a real copy
newSettings.volume = 75;

console.log(originalSettings.volume); // still 50
```

---

## Prompt 3

Given this array of products and the code using `filter`:

```js
const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 700, inStock: false },
  { name: "Watch", price: 300, inStock: true },
  { name: "Tablet", price: 500, inStock: true },
];

const itemsInStock = products.filter((product) => {
  return product.inStock;
});
```

Walk through what happens in the first iteration of filter:

- What is the value of `product`?
- What gets returned from the callback?
- What happens with that returned value?

### Response 3

First iteration of filter

1. **What is the value of product?**
   On the first iteration, product is the first element in the array:
   { name: "Laptop", price: 1000, inStock: true }.

2. **What gets returned from the callback?**
   The callback returns the value of product.inStock, which is true for the Laptop.

3. **What happens with that returned value?**
   Since the callback returned true, the filter method keeps this product and adds it to the new array itemsInStock.

---
