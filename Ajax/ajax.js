//Asynchronus Java Script1 ANd XML
//Ajax - A techni1qu

// Step one - create an 1object of X1MLHttpRequest
const xhr = new XMLHttpRequest();    //object making
const url = "https://api.github.com/users"

//readyState = 0
// step two - to open the portal of application b/w client and server

xhr.open('GET', url)

// readyState = 1
// Step 3 - perform action over request state change 
xhr.onreadystatechange = ()=>{
    // readyState = 2 => 3 => 4
    if (xhr.readyState == 4 && xhr.status == 200 ) 
    {
    // I will get the response from the server -> responseText
    //Send the request1
        const jsonRes = xhr.responseText
        const res = JSON.parse(jsonRes)
        // console.log(xhr.responseText);
        // const userImage = document.createElement('img')
        // userImage.setAttribute('src'.res[0].avatar_url)
        // const userName = document.textContent = res[0].avatar('h4')
        // userName.textContent = res[0].login
        // console.log(userName);
        console.log(res);

        let output = ''
        // p1 -> res[0].login | p2 -> res[0].avatar_url
        for(let i=0; i < res.length; i++) {
            output += `
                <div>
                    <img src="${res[i].avatar_url}" /> <br />
                    <p class="lead">${res[i].login}</p>
                </div>
            `
        }
        document.getElementById('myDiv').innerHTML = output
        console.log(output);
    }
}
xhr.send()
