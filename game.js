function num()
{
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number1").value;
    mutiplicend=parseInt(number1)*parseInt(number2);

    localStorage.setItem("Number 1 is - ", number1);
    localStorage.setItem("Number 2 is - ", number2);

    question_num = "<h4>"+ number1 + "X" + number2 +"</h4>";
    input_box="<br>Answer : <input type='text' id='check_input'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    final_div= question_num + input_box + check_button;
    document.getElementById("output").innerHTML = final_div;

    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}
