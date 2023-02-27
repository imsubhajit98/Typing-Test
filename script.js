const setOfWords=["My name is Subhajit Guchhait and i am a web developer.","I hope you are doing well.","This project based on simple html, css and javascript.","you can check your typing text thought this website without ant cost.","How is working plese rate and try to solve more better."]

const msg=document.getElementById('msg');
const typeWords=document.getElementById('mywords');
const btn1=document.getElementById('btn1');
const btn2=document.getElementById('btn2');
let startTime,endTime;

playGame=()=>{
    let randomNumber=Math.floor(Math.random()*setOfWords.length);
    msg.innerText=setOfWords[randomNumber];
    let date=new Date();
    startTime=date.getTime();
    console.log(startTime)
    btn1.innerText="Done"
}

endPlay=()=>{
    let date=new Date();
    endTime=date.getTime();
    let totalTime=(endTime-startTime)/1000;
    console.log(totalTime);

    let totalStr=typeWords.value;
    let wordCount=wordCounter(totalStr);

    let speed=Math.round((wordCount/totalTime)*60);
    let finalMsg=`You typed at ${speed} words per minutes. `;

    finalMsg+=compareWords(msg.innerText,totalStr);
    msg.innerText=finalMsg;
}

const compareWords=(str1,str2)=>{
    let word1=str1.split(" ");
    let word2=str2.split(" ");
    let count=0;

    //arrayName the forEach then it will take whole function with value and index no. of that array
    word1.forEach(function(item, index){
        if(item==word2[index]){
            count++;
        }
    })

    let errorWords=(word1.length- count);
    return (`${count} count of ${word1.length} words are the total number of error are ${errorWords}`)
}


const wordCounter=(str)=>{
    let response=str.split(" ").length;
    console.log(response);
    return response;

}

btn1.addEventListener('click',function (){
    if(this.innerText=='Start'){
        typeWords.disabled=false;
        playGame();
    }else if(this.innerText=="Done"){
        typeWords.disabled=true;
        btn1.innerText="Start"
        endPlay();
    }
})

btn2.addEventListener('click',()=>{
    window.location.reload();
})

