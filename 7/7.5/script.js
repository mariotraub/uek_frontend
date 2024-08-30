"use strict";
fetch("http://10.69.4.3/challenges/1", {
    method: "POST",
})
    .then(response => createComment(response.headers.get("Authorization")));
function createComment(token) {
    fetch("http://10.69.4.3/comments", {
        method: "POST",
        body: JSON.stringify({
            "message": `Hello World!`,
            "username": "Mario"
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": `${token}`,
            "Credentials": "include"
        }
    });
}
