// variables to reference to dom
var issueContainerEl = document.querySelector("#issues-container");
var limitWarningEl = document.querySelector("#limit-warning");

// fetch GitHub Repo Issues/ Pull Requests 
var getRepoIssues = function(repo){
    var apiUrl = "https://api.github.com/repos/" + repo + "/issues?direction=asc";

    fetch(apiUrl).then(function(response){
        // request was sucessful
        if (response.ok){
            response.json().then(function(data){
                // pass response data to dom function
                displayIssues(data);

                // check if api has paginated issues 
                if (response.headers.get("Link")){
                    displayWarning(repo);
                }
            });
        } else{
            alert("There was a problem with your request!")
        }
    });
};


// display GitHub issues to the DOM 
var displayIssues = function(issues){
    if (issues.length === 0){
        issueContainerEl.textContent = "This repo has no open issues";
        return;
    }
    for (var i = 0; i < issues.length; i++){
        issueContainerEl.appendChild(issueEl)

        // create a container for issues list 
        var issueEl = document.createElement("a");
        issueEl.classList = "list-item flex-row justify-space-between align-center";
        issueEl.setAttribute("href", issues[i].html_url);
        issueEl.setAttribute("target", "_blank");

        // create span to hold issue title
        var titleEl = document.createElement("span");
        titleEL.textContent = issues[i].title;

        // append to container
        issueEl.appendChild(titleEl);

        // create a tytpe element 
        var typeEl = document.createElement("span");

        // check if type is an issue or pull request 
        if (issues[i].pull_request){
            typeEl.textContent = "(Pull Request)";
        } else {
            typeEl.textContent = "(Issue)"
        }

        // append to container
        issueEl.appendChild(typeEl);
    }

}

// function to display warning if repo has more than 30 issues
var displayWarning = function(repo){
    // add text to warning contianer 
    limitWarningEl.textContent = "To see more than 30 issues, visit ";

    // create link element 
    var linkEl = document.createElement("a");
    linkEl.textContent = "GitHub.com";
    linkEl.setAttribute("href", "https://github.com/" + repo + "/issues");
    linkEl.setAttribute("target", "_blank");

    // append to warning container
    limitWarningEl.appendChild
};

getRepoIssues("facebook/react");