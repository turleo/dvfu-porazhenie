function updateFefuInfo() {
    const currentYear = new Date().getFullYear();

    // https://www.dvfu.ru/about/history/
    const startYear = new Date(1899, 7, 9);

    var fefuAge = (Date.now() - startYear) / 1000 / 60 / 60 / 24 / 365;

    document.getElementById("year-number").textContent = currentYear;

    document.getElementById("fefu-age").textContent = fefuAge.toFixed(10);
}

updateFefuInfo();

setInterval(updateFefuInfo, 1);
