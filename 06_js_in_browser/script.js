console.log("Hello from script.js in browser environment");
console.log(window);
console.log(document.getElementById("heading"));
//?Example 1: Highlighting Text on Button Click
document.getElementById("highlight-btn").addEventListener("click", function() {
    document.querySelector('#highlighting-text').classList.toggle('highlight');});
//?Example 2: Changing Text on Button Click

document.getElementById("click-btn").addEventListener("click", function() {
    document.getElementById("txt-2").innerHTML = "You clicked the button!";
});
//? Example 3: highlight the first city in the list
document.getElementById('btn-3').addEventListener('click', function(){
    document.getElementById('city-list').firstElementChild.classList.toggle('highlight');
    if( document.getElementById('btn-3').innerText==="de-highlight"){
         document.getElementById('btn-3').innerText="Highlight the first city";
    }
    else{
        document.getElementById('btn-3').innerText="de-highlight";
    }
})
//? Example 4: creating a list of items dynamically
document.getElementById('btn-4').addEventListener('click', function(){
    let new_item = document.createElement('li');
    new_item.innerText="Item 4";
    document.getElementById('new-list-1').appendChild(new_item);
});
//? Example 5:  Remove last element from the list
document.getElementById('btn-5').addEventListener('click', function(){
    let list = document.getElementById('new-list-2');
    list.removeChild(list.lastElementChild);
});
//? Example 6: handling the form submission
document.getElementById('user-form').addEventListener('submit', function(event){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    console.log("Hello World!");
    event.preventDefault(); // Prevent the default form submission behavior
    console.log("Form submitted with Name:", name, "and Email:", email);
     document.getElementById('name').value='';
     document.getElementById('email').value='';
});