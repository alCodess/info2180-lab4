window.addEventListener("load", function () {
    const searchBtn = document.getElementById("search-btn");
    const queryInput = document.getElementById("query");
    const result = document.getElementById("result");

    searchBtn.addEventListener("click", function () {
        const query = encodeURIComponent(queryInput.value.trim());

        fetch("superheroes.php?query=" + query)
            .then(response => response.text())
            .then(data => {
                result.innerHTML = data;
            })
            .catch(error => {
                console.error("Error:", error);
            });
    });
});