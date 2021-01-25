var randomWord = "https://random-word-api.herokuapp.com/word?number=1"

async function getData(){
    try{
    let response = await fetch(randomWord)
    let responseData = await response.json()
    console.log(responseData)
    let word = responseData[0]
    console.log(word)
    giphy = "https://api.giphy.com/v1/gifs/search?api_key=ltOBEM4fiY70r6KfVi23Umyxsd5VqM7J&q=" +word+ "&limit=1&offset=0&rating=g&lang=en"
    console.log(giphy)
    var data1 = await fetch(giphy)
    result = await data1.json()
    console.log(result)
    if(result.data.length === 0)
    {
    console.log("no giphy found for this word")
    alert("no giphy found for this word")
    }
    else
    {
    let gip = result.data[0].embed_url
    window.open(gip)
    }
    }
    catch(error){
        console.log(error)
    }
    
}

getData()
