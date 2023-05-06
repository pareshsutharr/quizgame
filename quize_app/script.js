const question = [{
        'que':'which of the following is a markup language',
        'a':'HTML',
        'b':'JAVASCRIPT',
        'c':'CSS',
        'd':'PHP',
        'correct':'a'
    },
    {
        'que':'c language support object oriented',
        'a':'NO',
        'b':'YES',
        'c':'LITTLE BIT',
        'd':'NEVER',
        'correct':'a'
    },
    {
        'que':'how many type of variable in javascript',
        'a':'2',
        'b':'1',
        'c':'3',
        'd':'4',
        'correct':'c'
    },
]

let right = 0,
    wrong = 0;
let index = 0;
let total = question.length
console.log(total)
const quesbox = document.getElementById("quebox")
const ansbox = document.querySelectorAll(".options")
const loadquestion=()=>{
    if (index === total){
        return endquiz();
    }
    reset();
  const data = question[index]
  quesbox.innerText = `${index+1} ) ${data.que}`
  ansbox[0].nextElementSibling.innerText = data.a
  ansbox[1].nextElementSibling.innerText = data.b
  ansbox[2].nextElementSibling.innerText = data.c
  ansbox[3].nextElementSibling.innerText = data.d
}
const submitquiz=()=>{
    const data = question[index];
    const ans = getanswer()
    if(ans === data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadquestion();
    return;
}
const getanswer=()=>{
    let answer;
    ansbox.forEach((input)=>{
   if(input.checked){
    answer = input.value;
   }
    })
    return answer;
}

const reset=()=>{
    ansbox.forEach((input)=>{
        input.checked = false;
    })
}
const endquiz= ()=>{
    document.getElementById("box").innerHTML = `<h3>THANK YOU FOR PLAYING THIS QUIZ GAME</h3>
    ${right}/${total} are correct`;


}

loadquestion();