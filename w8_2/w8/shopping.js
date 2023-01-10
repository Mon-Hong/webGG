window.onload = pageLoad;

function pageLoad(){
	var xhr = new XMLHttpRequest();
    xhr.open("GET","cloth.json");

    xhr.onload = function()
    {
        var jsondata = JSON.parse(xhr.responseText);
        console.log(jsondata);
        showData(jsondata);
    };


    xhr.onerror = function() 
    {
        alert("ERROR!");
    };

    xhr.send();

}

function showData(data){
	
    var showdiv = document.querySelectorAll("#layer div");
    var keys = Object.keys(data);

    for (var i = 0; i < keys.length;i++)
    {
        
        var temp = document.createElement("p");
        var pic = document.createElement("img")

        pic.src = "pic/" + data[keys[i]].pic ;
        temp.innerHTML = "<br>" + data[keys[i]].brandname + "<br>"+ "Price : " + data[keys[i]].price;

        showdiv[i].appendChild(pic);
        showdiv[i].appendChild(temp);

    }
}

