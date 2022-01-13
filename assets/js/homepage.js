// create variables to select from index.html
var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");

var formSubmitHandler = function(event){
    event.preventDefault();
    console.log(event);
}

// function to search GitHub users and list ofo all their repos tallying open issues for each one 
var getUserRepos = function(){
    // format the github api url 
    var apiUrl = "https://api.github.com/users/" + user + "/repos";
    
    // make a request to the url 
    fetch(apiUrl).then(function(response){
        console.log(response)
        response.json().then(function(data){
            console.log(data);
        });
    });
}

// add event listener to forms 
userFormEl.addEventListener("submit", formSubmitHandler)
