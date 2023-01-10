window.onload = loginLoad;
function loginLoad()
{
	let clickButton = document.getElementById("myLogin");
    clickButton.onsubmit = checkLogin;	
}

function checkLogin()
{
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย

	const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const username = urlParams.get('username');
    const password = urlParams.get('password1');

    let username1 = document.forms["myLogin"]["username"].value;
    let password1 = document.forms["myLogin"]["password"].value;

    if(username1 == username && password1 == password)
    {
       
        alert("เข้าสู่ระบบสำเร็จ");
        
        var ImgABC = document.getElementById("abc"); 
        ImgABC.src = "Attack-On-Titan-Eren-Yeager-PNG-HD.png";
    }
    else
    {
        alert("Username หรือ Password ไม่ถูกต้อง!");
        var ImgABC = document.getElementById("abc"); 
        ImgABC.src = "Akame-Ga-Kill-PNG-Picture.png";
        return false;
    }
}


			