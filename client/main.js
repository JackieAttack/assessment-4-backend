const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.querySelector("#fortuneButton")
const shareBtn = document.querySelector('#shareBtn')
const postBoard = document.getElementById("postBoard")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

const inputText = document.getElementById("upliftingWords")

const shareComment = (event) => {
    event.preventDefault();

    postBoard.innerHTML = ``

    let body = {
        postContent: inputText.value
    }
    
    axios.post("http://localhost:4000/api/share", body)
        .then((res) => {
            const newArr = res.data;
            for(i = 0; i < newArr.length; i++) {
                let newPost = document.createElement('div')
                newPost.innerHTML = `<h3>${newArr[i].postContent}  <button id="edit-${newArr[i].id}">edit</button><button id="delete-${newArr[i].id}">delete</button></h3>`
                postBoard.appendChild(newPost)
                let newEditBtn = document.getElementById(`edit-${newArr[i].id}`)
                let newDeleteBtn = document.getElementById(`delete-${newArr[i].id}`)
                newEditBtn.addEventListener("click", editComment)
                newDeleteBtn.addEventListener("click", deleteComment)
            }
        })
        .catch((err) => {
            console.log(err)
        })
}

const deleteComment = (event) => {
    event.preventDefault();

    axios.delete(`http://localhost:4000/api/share/${event.target.id}`)
        .then((res) => {
            postBoard.innerHTML = ``
            const newArr = res.data;
            for(i = 0; i < newArr.length; i++) {
                let newPost = document.createElement('div')
                newPost.innerHTML = `<h3>${newArr[i].postContent}  <button id="edit-${newArr[i].id}">edit</button><button id="delete-${newArr[i].id}">delete</button></h3>`
                postBoard.appendChild(newPost)
                let newEditBtn = document.getElementById(`edit-${newArr[i].id}`)
                let newDeleteBtn = document.getElementById(`delete-${newArr[i].id}`)
                newEditBtn.addEventListener("click", editComment)
                newDeleteBtn.addEventListener("click", deleteComment)
            }
        })

    
}

// const editComment = (event) => {
//     event.preventDefault();


//     body = {
//         postContent: inputText.value
//     }

//     axios.put(`http://localhost:4000/api/share`, body)
//         .then((res) => {
//             postBoard.innerHTML = ``
//             const newArr = res.data;
//             for(i = 0; i < newArr.length; i++) {
//                 let newPost = document.createElement('div')
//                 newPost.innerHTML = `<h3>${newArr[i].postContent}  <button id="edit-${newArr[i].id}">edit</button><button id="delete-${newArr[i].id}">delete</button></h3>`
//                 postBoard.appendChild(newPost)
//                 let newEditBtn = document.getElementById(`edit-${newArr[i].id}`)
//                 let newDeleteBtn = document.getElementById(`delete-${newArr[i].id}`)
//                 newEditBtn.addEventListener("click", editComment)
//                 newDeleteBtn.addEventListener("click", deleteComment)
//             }
//         })
// }

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
shareBtn.addEventListener("click", shareComment)