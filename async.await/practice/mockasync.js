var url = "https://600ae0be778d1a00177949a3.mockapi.io/users";

// async function getData(){
//     let data = await fetch(url)
//     let result = await data.json()
//     console.log(result)
// }
// getData()

async function createData(){
    let details = {
        name : "Ratan",
        email : "newemail@gmail.com"
    }
    let data = await fetch(url,
        {
            method: "POST",
            body: JSON.stringify(details),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
    let result = await data.json()
    console.log(result)
}

createData()

// async function updateData(){
//     let details = {
//         name : "Ratan1",
//         email : "2newemail@gmail.com"
//     }
//     let data = await fetch(url + "/6",
//         {
//             method: "PUT",
//             body: JSON.stringify(details),
//             headers: {
//                 "Content-type": "application/json; charset=UTF-8",
//             },
//         })
//     let result = await data.json()
//     console.log(result)
// }

// updateData()

// async function deleteData(){
//     let data = await fetch(url + "/6",
//         {
//             method: "DELETE",
//         })
//     let result = await data.json()
//     console.log(result)
// }

// deleteData()


// you havent used try catch
//use that to deal with errors CATCH