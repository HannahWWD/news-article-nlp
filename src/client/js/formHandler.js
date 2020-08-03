function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById('text');
    // Client.checkForName(formText)
    let sendToServerData = { text: formText.value };

    console.log("::: Form Submitted :::");

    // hide error message at the beginning 
    const inputErrorMsg = document.querySelector(".error-msg");
    inputErrorMsg.style.visibility = "hidden";

    if (Client.checkForInput(formText.value)) {

        const postData = Client.postDataToServer('http://localhost:3000/post-data', sendToServerData);

        // post data to server, and then get the analysis result, and update UI
        postData.then(function () {
            console.log("frontend fired");
            Client.updateUI('http://localhost:3000/result')
        })

    } else {
        // if error, displays error messages
        inputErrorMsg.style.visibility = "visible";

    }

}

export { handleSubmit }
