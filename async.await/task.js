var url = "https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple"
// fetch(url)
// .then(data => data.json())
// .then(result => console.log(result))
// .catch(err => console.log(err) )



async function opentdb(){
    try{
        let data = await fetch(url)
        let result = await data.json()
        console.log(result)
        let noQuests = result.results.length
        //console.log(noQuests)
        // let i = 0
        // let score = 0
        // console.log(score)
        // while(i<noQuests)
        // {
        //     console.log(result.results[i])
        //     console.log(result.results[i])
        //     let ans = prompt("Enter your choice")
        //     if(ans == result.results[i].correct_answer){
        //         score = score + 10
        //     }
        //     else{
        //         score = score + 0
        //     }
        //     console.log("score after question " + (i+1) + " is " + score)
        //     i++
        // }
        document.onkeydown =  (e) => {
            if(e.key == "F5")
            {
                e.preventDefault()
            }
        }
        var div_container = document.createElement('div')
        div_container.classList.add('container','d-flex', 'align-items-center', 'justify-content-center')
        var div_row = document.createElement('div')
        div_row.classList.add('row','text-center')
        var outerQuestions = document.createElement('div')
        outerQuestions.setAttribute("id","oQ")
        outerQuestions.classList.add("col-12", "mb-3",'p-0', "topic",'bg-light')
        var questions = document.createElement('div')
        questions.setAttribute("id","qu")
        questions.classList.add("topic",'bg-info','pl-2')
        outerQuestions.append(questions)
        var livescore = document.createElement('div')
        livescore.classList.add("col-12", "mb-3", "ml-3", "topic")
        var div1 = document.createElement('div')
        div1.classList.add("col-12", "mb-3", "ml-3", "topic")
        var div_btn1 = document.createElement('div')
        div_btn1.classList.add("col-12","m-2")
        var choice1 = document.createElement('button')
        choice1.type = 'button'
        choice1.classList.add("btn", "btn-info")
        choice1.setAttribute("id", "option1")
        var br1 = document.createElement('br')
        div_btn1.append(choice1)
        var div_btn2 = document.createElement('div')
        div_btn2.classList.add("col-12","m-2")
        var choice2 = document.createElement('button')
        choice2.type = 'button'
        choice2.classList.add("btn", "btn-info")
        choice2.setAttribute("id", "option2")
        var br2 = document.createElement('br')
        div_btn2.append(choice2)
        var div_btn3 = document.createElement('div')
        div_btn3.classList.add("col-12","m-2")
        var choice3 = document.createElement('button')
        choice3.type = 'button'
        choice3.classList.add("btn", "btn-info")
        choice3.setAttribute("id", "option3")
        var br3 = document.createElement('br')
        div_btn3.append(choice3)
        var div_btn4 = document.createElement('div')
        div_btn4.classList.add("col-12","m-2")
        var choice4 = document.createElement('button')
        choice4.type = 'button'
        choice4.classList.add("btn", "btn-info")
        choice4.setAttribute("id", "option4")
        var br4 = document.createElement('br')
        div_btn4.append(choice4)

        let score = 0
        let i = 0
        function changeQuestions(){
            
            if(i==0 || i==2 || i==4 || i==8 || i==6)
            {
            questions.innerHTML = i+1 + "/10"
            questions.style.textAlign = 'left'
            questions.style.width = `${(i+1)*10}%`
            livescore.innerHTML = score
            div1.innerHTML = result.results[i].question
            choice1.innerHTML = result.results[i].correct_answer
            choice2.innerHTML = result.results[i].incorrect_answers[0]
            choice3.innerHTML = result.results[i].incorrect_answers[1]
            choice4.innerHTML = result.results[i].incorrect_answers[2]
            div_row.append(outerQuestions,livescore,div1,div_btn1,br1,div_btn2,br2,div_btn3,br3,div_btn4,br4)
            div_container.append(div_row)
            document.body.appendChild(div_container)
            document.getElementById("option3").removeEventListener("click", correct)
            document.getElementById("option1").removeEventListener("click", wrong)
            document.getElementById("option2").removeEventListener("click", wrong)
            document.getElementById("option4").removeEventListener("click", wrong)
            document.getElementById("option1").addEventListener("click", correct)
            document.getElementById("option2").addEventListener("click", wrong)
            document.getElementById("option3").addEventListener("click", wrong)
            document.getElementById("option4").addEventListener("click", wrong)
            // let a = document.querySelectorAll('#option2, #option3, #option4')
            // let alength = a.length
            // for(let j=0; j<alength; j++)
            // {
            //     a[j].addEventListener('click',wrong)
            // }
            }
            else
            if(i==1 || i==3 || i==7 || i==5 ||  i==9)
            {
            questions.innerHTML = i+1 + "/10"
            questions.style.textAlign = 'left'
            questions.style.width = `${(i+1)*10}%`
            livescore.innerHTML = score
            div1.innerHTML = result.results[i].question
            choice1.innerHTML = result.results[i].incorrect_answers[1]
            choice2.innerHTML = result.results[i].incorrect_answers[0]
            choice3.innerHTML = result.results[i].correct_answer
            choice4.innerHTML = result.results[i].incorrect_answers[2]
            div_row.append(questions,livescore,div1,div_btn1,br1,div_btn2,br2,div_btn3,br3,div_btn4,br4)
            div_container.append(div_row)
            document.body.appendChild(div_container)
            document.getElementById("option1").removeEventListener("click", correct)
            document.getElementById("option2").removeEventListener("click", wrong)
            document.getElementById("option3").removeEventListener("click", wrong)
            document.getElementById("option4").removeEventListener("click", wrong)
            document.getElementById("option3").addEventListener("click", correct)
            document.getElementById("option1").addEventListener("click", wrong)
            document.getElementById("option2").addEventListener("click", wrong)
            document.getElementById("option4").addEventListener("click", wrong)
            // let a = document.querySelectorAll('#option2, #option1, #option4')
            // let alength = a.length
            // for(let j=0; j<alength; j++)
            // {
            //     a[j].addEventListener('click',wrong)
            // }
            }
            else
            if(i>9)
            {
            // document.getElementById("option1").removeEventListener("click", correct)
            // document.getElementById("option2").removeEventListener("click", wrong)
            // document.getElementById("option3").removeEventListener("click", wrong)
            // document.getElementById("option4").removeEventListener("click", wrong)
            localStorage.setItem('score', score)
            localStorage.setItem('i',i)
            window.close('game.html')
            window.open("end.html")
            }
        }

        changeQuestions()

        function correct(){
            score+=10
            console.log(score)
            i++
            changeQuestions()
            
        }
        function wrong(){
            score+=0
            console.log(score)
            i++
            changeQuestions()
            
        }

    }
    catch(err){
        console.log(err)
    }
}

opentdb()


