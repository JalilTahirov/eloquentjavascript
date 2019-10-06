
### function expressin  (functions as values)
```
let launchMissiles = function() {
  missileSystem.launch("now");
};

if (safeMode) {
  launchMissiles = function() {/* do nothing */};
}
```

### function declaration
```
doit();

function doit(){
  console.log(" do it declared later");
}
```

### Arrow functions
```
const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
      result *= base;
    }
    return result;
  };
```
### Closure
> A function that references bindings from local scopes around it is called a closure. This behavior not only frees you from having to worry about lifetimes of bindings but also makes it possible to use function values in some creative ways.

```
function multiplier(factor) {
  return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));
// → 10

```
