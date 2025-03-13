let friendsList = [];

let friendsListField = document.getElementById('friends-list');

let sorting = document.getElementById('sorting-list');

function add() {
 
    let friendsName = document.getElementById('friends-name').value;

    let friendsNameField = document.getElementById('friends-name');

    if (friendsName == '') {

        alert('Please type a name');

        return;
    }

    if (friendsList.includes(friendsName)) {

        alert('The name was already added');

        return;
    }

    friendsList.push(friendsName);

    friendsListField.innerText = friendsList;

    friendsNameField.value = '';
}

function draw() {
    
    if (friendsList.length < 4) {

        alert('Please add at least 4 friends to draw');

        return;
    }


    for (let i = 0; i < friendsList.length; i++) {

        if (i == friendsList.length - 1) {

            sorting.innerHTML += friendsList[i] + '--->' + friendsList[0] + '<br>';

        } else {

            sorting.innerHTML += friendsList[i] + '--->' + friendsList[i + 1] + '<br>';
        }
    }
}

function restart() {

    friendsList = [];

    friendsListField.innerText = '';

    sorting.innerHTML = '';
}