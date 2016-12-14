export default  {
    get(username)  {
        return fetch(`https://api.github.com/users/${username}/repos`)
        .then(r => r.json());
    }
}
