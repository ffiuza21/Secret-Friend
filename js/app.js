friendsList = [];
let friendsListField = document.getElementById('friends-list');
let sorting = document.getElementById('sorting-list');

function add() {
 
    let friendsName = document.getElementById('friends-name').value;
    let friendsNameField = document.getElementById('friends-name');

    if (friendsName == '') {
        alert('Please type a name');
        return;
    }

    friendsList.push(friendsName);
    friendsListField.innerText = friendsList;
    friendsNameField.value = '';
}

drawn = [];

function randomDrawn() {
    
    for (let i = 0; i < friendsList.length; i++) {
        let sorteado = friendsList[parseInt(Math.random() * friendsList.length)];
        if (!drawn.includes(sorteado)) {
        drawn.push(sorteado);
        }else {
            friendsList[parseInt(Math.random() * friendsList.length)];
        }
           
    }
}
// loop nao esta sorteando valored diferentes do que ja esta no array drawn


function draw() {
    
randomDrawn();

    for (let i = 0; i < friendsList.length; i++) {
        sorting.innerHTML += `<p>${friendsList[i]} ---> ${drawn[i]}</p>`;
    }

   



}




function restart() {
    friendsList = [];
    friendsListField.innerText = '';







}