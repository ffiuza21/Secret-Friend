friendsList = [];
let friendsListField = document.getElementById('friends-list');
let sorting = document.getElementById('sorting-list');

function add() {
    let friendsName = document.getElementById('friends-name').value;
    
    if (friendsName == '') {
        alert('Please type a name');
        return;
    }

    friendsList.push(friendsName);
    friendsListField.innerText = friendsList;

    // add clear field when a name is added
    // add spaces between names on friend's list field
}

function draw() {
    for (let i = 0; i < friendsList.length; i++) {
        sorting.innerHTML += `<p>${friendsList[i]} ---> </p>`;
    }

    




}




function restart() {
    friendsList = [];
    friendsListField.innerText = '';







}