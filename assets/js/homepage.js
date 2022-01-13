// function to search GitHub users and list ofo all their repos tallying open issues for each one 
var getUserRepos = function(){
    // format the github api url 
    var apiUrl = "https://api.github.com/users/" + user + "/repos";

    // make a request to the url 
    fetch(apiUrl).then(function(response){
        response.json().then(function(data){
            console.log(data);
        });
    });
}

getUserRepos();