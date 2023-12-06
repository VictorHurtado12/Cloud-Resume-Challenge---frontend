function visitorCounter() {
    fetch("https://5m3vqxt7qc.execute-api.us-east-1.amazonaws.com/visitorCounter")
        .then(response => response.text())
        .then((body) => {
            document.getElementById("visitor-counter").textContent = body;
        });
}