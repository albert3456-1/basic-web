

let root = document.getElementById("root");
let root2 = document.getElementById("root2");
let postsButton = document.getElementById("posts");
let commentsButton=document.getElementById("comments");

postsButton.addEventListener("click",onButtonClick)
commentsButton=addEventListener("click",onButtonCommentClick)

function onButtonClick(){
    fetch('https://jsonplaceholder.typicode.com/posts/')

    .then((response) => response.json())
    .then((json) => render(json));

}

function onButtonCommentClick(){
    fetch('https://jsonplaceholder.typicode.com/comments')

    .then((response) => response.json())
    .then((json) => rendercomment(json));

}

function render(data) {
    for(let i=0; i<data.length;i++){

        let h2 = document.createElement("h2");
        let p = document.createElement("p");

        h2.innerText=data[i].title;
        p.innerText=data[i].body;

        root.appendChild(h2);
        root.appendChild(p);
    }

}

function rendercomment(data) {
    for(let i=0; i<data.length;i++){

        let h2 = document.createElement("h2");
        let h3 = document.createElement("h3");
        let p = document.createElement("p");

        h2.innerText=data[i].name;
        h3.innerText=data[i].email;
        p.innerText=data[i].body;

        root2.appendChild(h2);
        root2.appendChild(h3);
        root2.appendChild(p);

        
    }

}



