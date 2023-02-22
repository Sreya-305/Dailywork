/* Local Storage  */
localStorage.setItem("Name","Sreya");
localStorage.setItem("Age","20");
localStorage.setItem("Colour","Black");
localStorage.setItem("branch","Cse");

console.log(`The value at branch is ${localStorage.getItem("branch")}`);
//localStorage.clear();
localStorage.getItem("Name");
localStorage.removeItem("branch");
console.log("Length of the storage :"+ localStorage.length);

console.log(localStorage.key(1));
console.log(localStorage.key(0));

/*Session Storage */
sessionStorage.setItem("Name","Sreya");
sessionStorage.setItem("Age","20");
sessionStorage.setItem("Colour","Black");
sessionStorage.setItem("branch","Cse");

sessionStorage.removeItem("colour");
//sessionStorage.clear();


/* Cookies */
document.cookie = "username=sreya_jamma";
document.cookie = "name=Sreya";
document.cookie = "name=Sreya Jamma; expires=" + new Date(2023,3,23).toUTCString();
console.log(document.cookie);
// Deleting a cookie
//document.cookie = "name=Sreya Jamma; expires=" + new Date(2022,3,23).toUTCString();

