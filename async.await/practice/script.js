var randomWord = "https://random-word-api.herokuapp.com/word?number=1"
//var giphy = "https://api.giphy.com/v1/gifs/search?api_key=ltOBEM4fiY70r6KfVi23Umyxsd5VqM7J&q=smiley&limit=1&offset=0&rating=g&lang=en"
// fetch(giphy)
// .then(data=>{
//     return data.json()
// })
// .then(result=>{
//     let gip = result.data[0].embed_url
//     window.open(gip)
// })
// .catch(error=>{
//     console.log(error)
// })
fetch(randomWord)
.then(data=>{
    return data.json()
})
.then(data1=>{
    let word = data1[0]
    console.log(word)
    giphy = "https://api.giphy.com/v1/gifs/search?api_key=ltOBEM4fiY70r6KfVi23Umyxsd5VqM7J&q=" +word+ "&limit=1&offset=0&rating=g&lang=en"
    console.log(giphy)
    return(fetch(giphy))
})
.then(data2=>{
    return data2.json()
})
.then(result=>{
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
})
.catch(error=>{
    console.log(error)
})