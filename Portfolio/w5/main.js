var textnum=0;
function postFunction()
{


    if(textnum == 0)
    {
    var textforpost  = document.getElementById("text1").value;
    document.getElementById("topic1").innerText = textforpost;
    
    textnum++;
    }


    else if(textnum  == 1)
    {

    var textforpost = document.getElementById("text1").value;
    document.getElementById("comment1").innerText = textforpost;
    textnum++; 

    }


    else if(textnum == 2)
    {

    var textforpost = document.getElementById("text1").value;
    document.getElementById("comment2").innerText = textforpost;
    textnum++; 

    }

}


function clearFunction()
{

    document.getElementById("text1").innerText = ("");
    document.getElementById("topic1").innerText = ("");
    document.getElementById("comment1").innerText = ("");
    document.getElementById("comment2").innerText = ("");

    const textarea = document.getElementById('text1');
    textarea.value = '';

    textnum = 0;

}




