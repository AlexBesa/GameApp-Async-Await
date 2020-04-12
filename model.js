var apiURL = "https://games-world.herokuapp.com";

function getGamesList(){
    return fetch(apiURL + "/games", {
        method: "GET",
        headers: {"Content-Type": "application/x-www-form-urlencoded"}
    })
    .then(response => response.json())
    .then(responseData => {
        // throw new Error("eroarea mea!")
        for(var i = 0; i < responseData.length; i++) {         
            createDomElement(responseData[i]);
            console.log("all data is here: ",responseData)
        }
    }).catch(error => {console.log("There is an error: ",error)});
}
getGamesList();

function deleteGame(gameID) {
    return fetch(apiURL + "/games/" + gameID, {method: "DELETE"})
    .then(response => response.text())
    .then(apiresponse => {
        console.log("api resp",apiresponse)
    })
    .catch(error =>{console.log("The api cannot be deleted: ",error)});
}

function createGameRequest(gameObject){
    return fetch(apiURL + "/games", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: gameObject
    })
    .then(response => response.json())
    .then(function(createdGame){
        console.log("game created successfully in Dom ",createdGame);
        createDomElement(createdGame);
    })
    .catch(error =>{console.log("The game cannot be created: ",error)});
}

function updateGameRequest(updatedGameObj){	
    return fetch(apiURL + "/games/" + updatedGameObj._id, {
        method: "PUT",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body:"title=" + updatedGameObj.title 
            +"&description=" + updatedGameObj.description 
            +"&imageUrl=" + updatedGameObj.imageUrl
    })
    .then(response => response.json())
    .then(updatedGame => {console.log("Status update: Success !!! ",updatedGame)})
    .catch(error =>{console.log("The game cannot be updated: ",error)});
}

// function updateGameRequest(updatedGameObj, callbackUpdateGame, gameContainerDiv){
// 	console.log("Here is updated updatedGameObj: ", updatedGameObj);	
//     fetch(apiURL + "/games/" + updatedGameObj._id, {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/x-www-form-urlencoded"
//         },
//         body:"title=" + updatedGameObj.title 
//             +"&description=" + updatedGameObj.description 
//             +"&imageUrl=" + updatedGameObj.imageUrl
//         }).then(function(response){
//                 return response.json();
//         }).then(function(updatedGame){
//                 // console.log(updatedGame);
//                 gameContainerDiv.classList.remove('grayed-out');
//                 // grayed-out is indicating that the function is unavailable at a given time
//                 // it's used until user receive the response from 'server'
//                 callbackUpdateGame(updatedGame);
//         });
// }



// "application/json"
// {"cheie": "valoare", "cheie2": "valoare2"}

//application/x-www-form-urlencoded
// cheie=valoare&cheie2=valoare2



// async function getGamesList(){
//     try {
//         const response = await fetch(apiURL + "/games", {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/x-www-form-urlencoded"
//             }
//         });
//         const responseData = await response.json();
//         // throw new Error("eroarea mea!")
//         for (var i = 0; i < responseData.length; i++) {
//             console.log("all data is here: ", responseData);
//             createDomElement(responseData[i]);
//             console.log("responseData id: ", responseData[i]);
//         }
//     }
//     catch (error) {
//         console.log("There is an error: ", error);
//     }
// }
// getGamesList();

// async function deleteGame(gameID) {
//     try {
//         const response = await fetch(apiURL + "/games/" + gameID, {
//             method: "DELETE"
//         });
//         const apiresponse = await response.text();
//         console.log("api resp", apiresponse);
//     }
//     catch (error) {
//         console.log("The api cannot be deleted: ", error);
//     }
// }



// async function createGameRequest(gameObject){
//     try {
//         const response = await fetch(apiURL + "/games", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/x-www-form-urlencoded"
//             },
//             body: gameObject
//         });
//         const createdGame = await response.json();
//         console.log("game created successfully in Dom ", createdGame);
//         createDomElement(createdGame);
//     }
//     catch (error) {
//         console.log("The game cannot be created: ", error);
//     }
// }
// async function updateGameRequest(updatedGameObj){	
//     try {
//         const response = await fetch(apiURL + "/games/" + updatedGameObj._id, {
//             method: "PUT",
//             headers: {
//                 "Content-Type": "application/x-www-form-urlencoded"
//             },
//             body: "title=" + updatedGameObj.title
//                 + "&description=" + updatedGameObj.description
//                 + "&imageUrl=" + updatedGameObj.imageUrl
//         });
//         const updatedGame = await response.json();
//         //console.log("~~~~~~updated game",updatedGame);
//         console.log("Status update: Success !!! ", updatedGame);
//     }
//     catch (error) {
//         console.log("The game cannot be updated: ", error);
//     }
// }