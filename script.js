function fetchProfile(){
    const username = document.getElementById('username').value;
    if(username){
        showData(username)
    }
    else{
       alert("enter the username first..🙄")
    }
}

function showData(username){
    const githubToken = "YOUR-GITHUB-TOKEN";
    const apiurl = `https://api.github.com/users/${username}`;

fetch(apiurl)
.then(response => {

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    //  Parse the response data as JSON
    return response.json();
})
.then(data => {
    const profileDiv = document.getElementById('profile');
    profileDiv.innerHTML = `
        <h2>${data.name}</h2>
        <p><strong>Login:</strong> ${data.login}</p>
        <p><strong>Location:</strong> ${data.location || 'N/A'}</p>
        <p><strong>Followers:</strong> ${data.followers}</p>
        <p><strong>Following:</strong> ${data.following}</p>
        <p><strong>Public Repositories:</strong> ${data.public_repos}</p>
        <img src="${data.avatar_url}" alt="User Avatar" width="200">
    `;
})
.catch(error => {
    //Display an error message if something went wrong
    const profileDiv = document.getElementById('profile');
    profileDiv.innerHTML = `<p>Error: ${error.message}</p>`;
});
}