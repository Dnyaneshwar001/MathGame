var playing=false;
var score=0;
var action;
var time;
var correctAns;
//var wrongAns;
document.getElementById("button").onclick=function(){
    if(playing==true)
    {
        location.reload();

    }
    else
    {
       
        playing=true;
        score=0;
        document.getElementById("scorevalue").innerHTML=score;


      show("time");
      time=60;
      document.getElementById("timevalue").innerHTML=time;

      hide("gameover");

        document.getElementById("button").innerHTML="Reset Game";

        startcount();
        generateQA();

    }
    
}

for(i=1;i<5;i++)
{
    document.getElementById("box"+i).onclick=function()
{
    if(playing==true)
    {
        if(this.innerHTML==correctAns)
        {
            score++;
            document.getElementById("scorevalue").innerHTML=score;

            hide("wrong");
            show("correct");

            setTimeout(function()
            {
                hide("correct");
            },1000)
            generateQA();

            
        }
        else
        {
            hide("correct");
            show("wrong");
            
            score--;
            document.getElementById("scorevalue").innerHTML=score;

            setTimeout(function()
            {
                hide("wrong");
            },1000)
        }




    }
}

}





function startcount()
{
    action=setInterval(function()
    {
        time -=1;
        document.getElementById("timevalue").innerHTML=time;
        if(time ==0)
        {
        
            stopcount(); 
            show("gameover");

            document.getElementById("gameover").innerHTML="<p>GAME OVER</p><p>YOUR SCORE IS "+score +". </p>"
            hide("time");
            hide("correct");
            hide("wrong");
            playing=false;
            document.getElementById("button").innerHTML="Start Game";
        }
       
    },
    1000);
}

function stopcount()
{
    clearInterval(action);
}

function hide(ID)
{
document.getElementById(ID).style.display="none";
}

function show(ID)
{
document.getElementById(ID).style.display="block";
}

function generateQA()
{
    var x=1+Math.round(9*Math.random());
    var y=1+Math.round(9*Math.random());
     correctAns=x*y;
   document.getElementById("Quebox").innerHTML=x+"x"+y;
   var correctPos=1+Math.round(3*Math.random());
   document.getElementById("box"+correctPos).innerHTML=correctAns;

    var answers=[correctAns];
   for(i=1;i<5;i++)
   {
    if( i != correctPos)
    {
        var  wrongAns;
        do{
            wrongAns= (1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));
        }while(answers.indexOf(wrongAns)>-1)
       
    document.getElementById("box"+i).innerHTML=wrongAns;
    answers.push(wrongAns);
    }
   }

}