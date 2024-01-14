//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

// const dog_names = ''
// for (let i = 0; i < dog_string.length; i++) {
// };
// console.log (dog_string)

function findWords(dog_string, dog_names){
    let found = false;

    for (let i = 0; i < dog_names.length; i++) {
        if (dog_string.toLowerCase().includes(dog_names[i].toLowerCase())) {
            console.log("Matched " + dog_names[i]);
            found = true;
        }
    }
    if (!found) {
        console.log("No Matches");
    }
}

findWords(dog_string, dog_names);

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
const arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
for (let i = 0; i < arr.length; i++){
    // for (i + 1) % 2 === 0 && ()
    arr.splice(0, 1, "even index");
    console.log(arr)
    }
}
replaceEvens(arr)
// console.log(arr)
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]
