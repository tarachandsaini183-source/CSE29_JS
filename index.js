function calculateResult(){
    let n=document.getElementById("subjects").value;
    let i;
    let total=0;
    for(i=0;i<n;i++){
        let x=parseFloat((prompt("enter the marks of subject "+(i+1)+" : ")));
        total+=x;
    }
    let average=total/n;
    let grade;
    if(average>=90){
        grade="A+";
    }
    else if(average>=80){
        grade="A";
    }
    else if(average>=70){
        grade="B";
    }
    else if(average>=60){
        grade="C";
    }
    else if(average>=50){
        grade="D";
    }
    else{
        grade="F";
    }
    let result=document.getElementById("result");
    result.innerHTML="Total Marks: "+total+"<br>Average Marks: "+average+"<br>Grade: "+grade;
}