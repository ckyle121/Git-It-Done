// function to search GitHub users and list ofo all their repos tallying open issues for each one 
var getUserRepos = function(){
    fetch("https://api.github.com/users/octocat/repos");
};

getUserRepos();