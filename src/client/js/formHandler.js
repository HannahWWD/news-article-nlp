function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('text')
    // Client.checkForName(formText)
    let sendToServerData = { text: formText.value }

    console.log("::: Form Submitted :::")

    const inputErrorMsg = document.querySelector(".error-msg")
    inputErrorMsg.style.visibility = "hidden"

    if (Client.checkForInput(formText.value)) {

        const postData = Client.postDataToServer('http://localhost:3000/post-data', sendToServerData)

        postData.then(function () {
            console.log("frontend fired");
            Client.updateUI('http://localhost:3000/result')
        })

        /* clear input */
        // formText.value = ""
    } else {
        inputErrorMsg.style.visibility = "visible";

    }

}

export { handleSubmit }
