function shortenUrl() {
    // Validate if the link exists
    let url = document.getElementById("input-url").value;
    if(!url) {
        alert("You must place an URL to shorten");
        return;
    }

    // Shorten the URL

    // Headers
    let headers = {
        "Content-Type": "application/json",
        "apiKey": "f43fdff381b84d8888504362f590b11a"
    }

    // Data
    let linkRequest = {
        destination: url,
        domain: { fullName: "rebrand.ly" }
    }

    fetch("https://api.rebrandly.com/v1/links", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(linkRequest)
    })
    .then(response => response.json())
    .then(json => {
        let inputUrl = document.getElementById("input-url");
        inputUrl.value = json.shortUrl;
    })
}

function copyUrl() {
    let inputUrl = document.getElementById("input-url");

    inputUrl.select();
    inputUrl.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(inputUrl.value);

    alert(`URL copied: ${inputUrl.value}`)
}