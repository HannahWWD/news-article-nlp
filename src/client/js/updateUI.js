const updateUI = async (url) => {
    // get data from local server
    const request = await fetch(url);

    try {
        const serverReturnData = await request.json();
        console.log(serverReturnData);

        // elements that pending to update
        const agreement= document.getElementById("agreement");
        const subjectivity = document.getElementById("subjectivity");
        const confidence = document.getElementById("confidence");
        const irony = document.getElementById("irony")

        // update elements
        agreement.innerHTML = serverReturnData.agreement;
        subjectivity.innerHTML = serverReturnData.subjectivity;
        confidence.innerHTML = serverReturnData.confidence;
        irony.innerHTML = serverReturnData.irony;

        return serverReturnData;

    } catch (error) {
        console.log("error: ", error);
    }

}

export { updateUI }
