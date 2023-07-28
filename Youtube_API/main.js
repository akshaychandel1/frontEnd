document.getElementById('search-btn').addEventListener('click',() => {
    const text = document.getElementById('search-text').value
    const url = `https://www.googleapis.com/youtub/v3/search?key=AIzaSyB3LkS1ru9KjWLNC7RyrXZeHreSY3hs6M&part=snippet&q=${text}`
    const xhr = new XMLHttpRequest()
    xhr.open('GET',url)
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) 
        {
           const response = JSON.parse(xhr.responseText)
           let output = ''
           for (let i = 0; i < response.items.length; i++) 
           {
                output += `
                <div style="width: 23%; margin:10px;">
                <img src="${response.item[i].snippet.thumbnails.high.url}" >
                <h4>${response.item[i].snippet.title}</h4>
                <p>$
                </div>
                ` 
           }
           console.log(response)    
        }
    }
})