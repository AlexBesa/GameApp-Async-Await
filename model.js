var apiURL = "https://games-world.herokuapp.com";

async function getGamesList(){
    try {
        const response = await fetch(apiURL + "/games", {
            method: "GET",
            headers: { "Content-Type": "application/x-www-form-urlencoded" }
        });
        const responseData = await response.json();
        // throw new Error("eroarea mea!")
        console.log("all data is here: ", responseData);
        return responseData;
    }
    catch (error) {
        console.log("There is an error: ", error);
    }
}
// getGamesList(); nu o folosesc aici, am pus pt verificare

async function deleteGame(gameID) {
    try {
        const response = await fetch(apiURL + "/games/" + gameID, { method: "DELETE" });
        const apiresponse = await response.text();
        console.log("api resp", apiresponse);
    }
    catch (error) {
        console.log("The api cannot be deleted: ", error);
    }
}

async function createGameRequest(gameObject){
    try {
        const response = await fetch(apiURL + "/games", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: gameObject
        });
        const createdGame = await response.json();
        console.log("game created successfully in Dom ", createdGame);
        createDomElement(createdGame);
    }
    catch (error) {
        console.log("The game cannot be created: ", error);
    }
}

async function updateGameRequest(updatedGameObj){	
    try {
        const response = await fetch(apiURL + "/games/" + updatedGameObj._id, {
            method: "PUT",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: "title=" + updatedGameObj.title
                + "&description=" + updatedGameObj.description
                + "&imageUrl=" + updatedGameObj.imageUrl
        });
        const updatedGame = await response.json();
        console.log("Status update: Success !!! ", updatedGame);
    }
    catch (error) {
        console.log("The game cannot be updated: ", error);
    }
}
// "application/json"
// {"cheie": "valoare", "cheie2": "valoare2"}

//application/x-www-form-urlencoded
// cheie=valoare&cheie2=valoare2