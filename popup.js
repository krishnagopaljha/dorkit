document.getElementById('search-btn').addEventListener('click', function () {
    // Collecting user inputs
    let searchTerm = document.getElementById('search-term').value;
    let site = document.getElementById('site').value;
    let inurl = document.getElementById('inurl').value;
    let intext = document.getElementById('intext').value;
    let intitle = document.getElementById('intitle').value;
    let filetype = document.getElementById('filetype').value;
    let ext = document.getElementById('ext').value;
    let cache = document.getElementById('cache').value;
    let link = document.getElementById('link').value;
    let related = document.getElementById('related').value;

    // Building the query string
    let query = `https://www.google.com/search?q=`;

    if (site) query += `site:${site} `;
    if (inurl) query += `inurl:${inurl} `;
    if (intext) query += `intext:${intext} `;
    if (intitle) query += `intitle:${intitle} `;
    if (filetype) query += `filetype:${filetype} `;
    if (ext) query += `ext:${ext} `;
    if (cache) query += `cache:${cache} `;
    if (link) query += `link:${link} `;
    if (related) query += `related:${related} `;
    
    query += searchTerm;

    // If the query is valid, open it in a new tab
    if (query.trim() !== "https://www.google.com/search?q=") {
        chrome.tabs.create({ url: query });
    } else {
        alert("Please enter at least one search parameter.");
    }
});
