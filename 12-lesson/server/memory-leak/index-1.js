let newObj1, newObj2;

function circularObjects() {
  // If objects were previously created, break their references
  if (newObj1) {
    newObj1.child = null;
  }
  if (newObj2) {
    newObj2.parent = null;
  }

  // Create new objects with circular references
  newObj1 = {};
  newObj2 = {};
  debugger;

  newObj1.child = newObj2;
  newObj2.parent = newObj1;
}
let i = 0;
while(i++ < 100) {
    setInterval(circularObjects, 100);

}