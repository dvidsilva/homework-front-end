export default  {
    get(username)  {
        return fetch(`https://api.github.com/users/${username}/repos`)
        .then(function(response) {
            return response.json();
        });
    }
}
