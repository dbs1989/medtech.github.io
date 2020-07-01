const commentsDiv = document.getElementById("comments")
const url = 'http://localhost:3000/comments'
fetch(url)
.then(response => response.json())
.then(function(data) {
    console.log(data)
    const comments = data;
    comments.forEach(element => {
        let html = `<div class="comment"><div class="comment-username">${element.name}</div>`
        html += `<div class="comment-message">${element.message}</div>`
        html += `<div class="comment-date">${formatDate(element.createdAt)}</div></div><br>`
        commentsDiv.innerHTML += html

    });
});


function formatDate(dateUnformatted){
    let date = new Date(dateUnformatted)
    date.setUTCHours(2)
    let datetime = date.getHours() + ":" + (date.getMinutes()<10?'0':'') + date.getMinutes() + ":" +  (date.getSeconds()<10?'0':'') + date.getSeconds();
    datetime +=  ` ${date.toLocaleDateString()}`
    return datetime;
}


function addComment() {
    const nameInput = document.getElementById('name').value
    const commentTextArea = document.getElementById('new-comment').value;
    const object = {
        name: nameInput,
        message: commentTextArea
    }
    fetch(url, {
        method: 'post',
        body: JSON.stringify(object),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        console.log(data)
        window.location.reload();
    });
}

function jump(h){
    var url = location.href;              
    location.href = "#"+h;                
    history.replaceState(null,null,url);   
}
