var login=0;
function showProduct()
{
    var home=document.getElementById("HOME");
    var product=document.getElementById("PRODUCTS");
    home.style.display="none";
    product.style.display="block";
}
function showHome()
{
    var home=document.getElementById("HOME");
    var product=document.getElementById("PRODUCTS");
    home.style.display="block";
    product.style.display="none";
}

function checkRegister(name,date,gender,number,email,password)        //kiem tra thong tin vua nhap truoc khi dang ky 
{
    var ReportRe=document.getElementById("ReportRegister");
    
    if ((checkName()==true)&&(checkDateBirth()==true)&&(checkNumber()==true)&&(checkEmail()==true)&&(checkPassRegisterA()==true))
    {
        register(name,date,gender,number,email,password);
        ReportRe.innerHTML="Đăng ký thành công";
    }
    else
    {
        checkName();
        checkDateBirth();
        checkNumber();
        checkPassRegisterA();
        checkEmail();
        ReportRe.style.color="red";
        ReportRe.innerHTML="Vui lòng hoàn thành các yêu cầu ở trên để đăng ký !"
    }
}
if (localStorage.getItem("LocalListAccount")==null)
{
var ListAccount=[{"name":"ADMIN","date":"","gender":"","number":"01234567", "email":"JewelHearts@gmail.com","pass":"admin"}];
localStorage.setItem("LocalListAccount",JSON.stringify(ListAccount));
}

function register(name,date,gender,number,email,password)   //luu thong tin tai khoan vao LocalStorage
{ 
    var nameValue=name.value;
    var dateValue=date.value;
    var genderValue='';
    for (let i=0;i<gender.length;i++)
    {
        if (gender.item(i).checked)
        {
            genderValue=gender.item(i).value; 
        }
    }
    var numberValue=number.value;
    var emailValue=email.value;
    var passValue=password.value;
    var ListAccount=JSON.parse(localStorage.getItem("LocalListAccount"));
    ListAccount.push({
        "name":nameValue,
        "date":dateValue,
        "gender":genderValue,
        "number":numberValue,
        "email":emailValue,
        "pass":passValue
    })
    localStorage.setItem("LocalListAccount",JSON.stringify(ListAccount));
}

function LogInOut()           // dung de dang nhap va dang xuat
{
    var UN=document.getElementById("NameUser");
    var titleAdmin =document.getElementById("admin");
    var Icon=document.getElementById("user");
    if (login===0)
    {
        openLogin();
    }
    else
    {
        login=0;
        Icon.innerHTML='<img src="images/account.svg" height="40px" width="40px">';
        UN.innerHTML="";
        titleAdmin.style.display="block"
    }
}

function checkLog()
{
    var UN=document.getElementById("NameUser");
    var i=checkUserName();
    var Icon=document.getElementById("user");
    checkPass();
    if (checkPass()==true)
    { 
        closeLogin();
        Icon.innerHTML="hehe";
        var ListAccount=JSON.parse(localStorage.getItem("LocalListAccount"));
        UN.innerHTML=ListAccount[i].name;
        login=1;
        Icon.innerHTML='<img src="images/logout.png" height="35px" width="40px" style="margin-top:5px">';
    }
 }
 
 function AddCart(){
    if (login==0)
    {
        alert("Đăng nhập để có thể mua hàng");
    }
    else 
    {
        alert("Add product to cart successfully");
        document.getElementById("ProductWindow").style.display = "none";
        document.getElementById("Number").value = "1";
    }
}

 // js của login box -
 function hideImage()
{
    var kq='<img src="images/hide.svg" id="hideImage" width="30px" height="30px">';
    return kq;
}

function showImage()            
{
    var kq='<img src="images/show.svg" id="hideImage" width="30px" height="30px">';
    return kq;
}

function hidePass(btnPass)         //an hien mk
{
    const ipnElement=document.getElementById("ipnPass");
    const currentType=ipnElement.getAttribute("type");
    if (currentType==="password") {
        ipnElement.setAttribute("type","text");
       btnPass.innerHTML=showImage();
    }
    else 
    {
        ipnElement.setAttribute("type","password");
       btnPass.innerHTML=hideImage();
    }
}

function checkUserName()
{
    const userName=document.getElementById("UserName");
    let ErrorUN=document.getElementById("ErrorUN");
    let userNameValue=userName.value;
    if (userNameValue=="")
    {
        ErrorUN.setAttribute("style","color:red;margin-left:10px;font-family: Verdana;font-size:14px")
        ErrorUN.innerHTML="Username không được để trống !";
        return false;
    }
    else 
    {
        var ListAccount=JSON.parse(localStorage.getItem("LocalListAccount"));
        for (var i=0;i<ListAccount.length;i++)
        {
            if ((ListAccount[i].number==userNameValue)||(ListAccount[i].email==userNameValue))
            {
                ErrorUN.setAttribute("style","color:green;margin-left:10px;font-family: Verdana;font-size:14px")
                ErrorUN.innerHTML="";
                return i;
                break;
            }
        }
        ErrorUN.setAttribute("style","color:red;margin-left:10px;font-family: Verdana;font-size:14px")
        ErrorUN.innerHTML="Username không tồn tại  !";
        return false;
    }
}

function checkPass()
{
    var passWord=document.getElementById("ipnPass");
    let ErrorP=document.getElementById("ErrorP");
    let passValue=passWord.value;
    if (passValue=="")
    {
        ErrorP.setAttribute("style","color:red;margin-left:10px;font-family: Verdana;font-size:14px")
        ErrorP.innerHTML="Password không được để trống !";
        return false;
    }
    else 
    {
        checkUserName();
        if (checkUserName()===false)
        {
            return false;
        }
        else
        {
            var ListAccount=JSON.parse(localStorage.getItem("LocalListAccount"));
            var i=checkUserName();
                if (ListAccount[i].pass==passValue)
                { 
                    ErrorP.innerHTML="";
                    return true;
                }
                else 
                {
                    ErrorP.setAttribute("style","color:red;margin-left:10px;font-family: Verdana;font-size:14px")
                    ErrorP.innerHTML="Password không chính xác!";
                    return false;
                }

            }
        }
}

// -js của login box
// js của register box --
function checkName()
{
    var name=document.getElementById("name");
    var ErrorN=document.getElementById("ErrorN");
    var nameValue=name.value;
    if (nameValue=="")
    {
        ErrorN.setAttribute("style","color:red;margin-left:10px;font-family: Verdana;font-size:14px;float:left")
        ErrorN.innerHTML="Họ và tên không được để trống !";
        return false;
    }
    else 
    {
        ErrorN.setAttribute("style","color:green;margin-left:10px;font-family: Verdana;font-size:14px;float:left")
        ErrorN.innerHTML="Họ và tên được chấp nhận !";
        return true;
    }
}

function maxDateBirth()            // điều chỉnh ngày lớn nhất
{
    var dateBirth=document.getElementById("Dayofbirth");
    var today = new Date();
    var date=parseInt(today.getDate());
    date>9?date=String(date):date="0"+String(date);
    var maxdate =today.getFullYear() +'-'+(today.getMonth()+1)+'-'+ date ;
    dateBirth.setAttribute("max",maxdate); 
}

function checkDateBirth()
{
    //var today = new Date();
    //var date=parseInt(today.getDate());
    //date>9?date=String(date):date="0"+String(date);
    //var mdate =today.getFullYear() +'-'+(today.getMonth()+1)+'-'+ date ;
    var dateBirth=document.getElementById("Dayofbirth");
    var ErrorBD=document.getElementById("ErrorBD");
    var dateBValue=dateBirth.value;
    //var mindate= String(parseInt(today.getFullYear()-18)+'-'+(today.getMonth()+1)+'-'+ date) 
    if (dateBValue=="")
    {
        ErrorBD.setAttribute("style","color:red;margin-left:10px;font-family: Verdana;font-size:14px;float:left")
        ErrorBD.innerHTML="Ngày sinh không được để trống !";
        return false;
    }
    else 
    {
        ErrorBD.setAttribute("style","color:green;margin-left:10px;font-family: Verdana;font-size:14px;float:left")
        ErrorBD.innerHTML="Ngày sinh được chấp nhận !";
        return true;
    }
}

function checkNumber()           
{
    var phone=document.getElementById("Phone");
    var ErrorNumber=document.getElementById("ErrorNumber");
    var phoneValue=phone.value;
    if (phoneValue=="")
    {
        ErrorNumber.setAttribute("style","color:red;margin-left:10px;font-family: Verdana;font-size:14px;float:left")
        ErrorNumber.innerHTML="Số điện thoại không được để trống !";
        return false;
    }
    else 
    {
        var ListAccount=JSON.parse(localStorage.getItem("LocalListAccount"));
        for (var i=0;i<ListAccount.length;i++)
        {
            if (ListAccount[i].number==phoneValue)
            {
                ErrorNumber.setAttribute("style","color:red;margin-left:10px;font-family: Verdana;font-size:14px;float:left");
                ErrorNumber.innerHTML="Số điện thoại đã tồn tại !";
                return false;
            }
        }
        ErrorNumber.setAttribute("style","color:green;margin-left:10px;font-family: Verdana;font-size:14px;float:left");
        ErrorNumber.innerHTML="Số điện thoại được chấp nhận !";
        return true;
    }
}

function checkEmail()
{
    var email=document.getElementById("Email");
    var ErrorE=document.getElementById("ErrorE");
    var emailValue=email.value;
    if (emailValue=="")
    {
        ErrorE.setAttribute("style","color:red;margin-left:10px;font-family: Verdana;font-size:14px;float:left")
        ErrorE.innerHTML="Email không được để trống !";
        return false;
    }
    else if(emailValue.indexOf("@gmail.com")==-1)
    {
        ErrorE.setAttribute("style","color:red;margin-left:10px;font-family: Verdana;font-size:14px;float:left")
        ErrorE.innerHTML="Email cần có '@gmail.com' !";
        return false;
    }
    else 
    {
        var ListAccount=JSON.parse(localStorage.getItem("LocalListAccount"));
        for (var i=0;i<ListAccount.length;i++)
        {
            if (ListAccount[i].email==emailValue)
            {
                ErrorE.setAttribute("style","color:red;margin-left:10px;font-family: Verdana;font-size:14px;float:left");
                ErrorE.innerHTML="Email đã tồn tại !";
                return false;
            }
        }
        ErrorE.setAttribute("style","color:green;margin-left:10px;font-family: Verdana;font-size:14px;float:left")
        ErrorE.innerHTML="Email được chấp nhận !";
        return true;
    }
}

function checkPassRegister(){
    var passR=document.getElementById("Password");
    var ErrorPR=document.getElementById("ErrorPR");
    var passRValue=passR.value;
    if (passRValue=="")
    {
        ErrorPR.setAttribute("style","color:red;margin-left:10px;font-family: Verdana;font-size:14px;float:left")
        ErrorPR.innerHTML="Mật khẩu không được để trống !";
    }
    else if (passRValue.length<6&&passRValue.length>0)
    {
        ErrorPR.setAttribute("style","color:red;margin-left:10px;font-family: Verdana;font-size:14px;float:left")
        ErrorPR.innerHTML="Mật khẩu tối thiểu 6 kí tự";
    }
    else 
    {
        ErrorPR.setAttribute("style","color:green;margin-left:10px;font-family: Verdana;font-size:14px;float:left")
        ErrorPR.innerHTML="Mật khẩu được chấp nhận !";
        return 1;
    }
}

function checkPassRegisterA()
{
    checkPassRegister();
    if (checkPassRegister()==1)
    {
        var passRA=document.getElementById("Password-again");
        var ErrorPRA=document.getElementById("ErrorPR-A");
        var passRAValue=passRA.value;
        var passR=document.getElementById("Password");
        var passRValue=passR.value;
        if (passRAValue==passRValue)
        {
            ErrorPRA.setAttribute("style","color:green;margin-left:10px;font-family: Verdana;font-size:14px;float:left")
            ErrorPRA.innerHTML="Mật khẩu khớp!";
            return true;
        }
        else if (passRAValue=="")
        {
            ErrorPRA.setAttribute("style","color:red;margin-left:10px;font-family: Verdana;font-size:14px;float:left")
            ErrorPRA.innerHTML="Mật khẩu nhập lại không được để trống";
            return false;
        }
        else 
        {
            ErrorPRA.setAttribute("style","color:red;margin-left:10px;font-family: Verdana;font-size:14px;float:left")
            ErrorPRA.innerHTML="Mật khẩu không khớp !";
            return false;
        }
    }
}

function openLogin()
{
    var modal=document.getElementById("modal-background");
    modal.style.display="block";
}

function closeLogin()
{
    var modal=document.getElementById("modal-background");
    modal.style.display="none";
}

function rotate()
{
    var khung=document.getElementById("khung");
    
    khung.style.transform="rotateY(180deg)";
    setTimeout(function()
    {var khunglogin=document.getElementById("khunglogin");
    khunglogin.style.display="none";},1000);
}

function rotate1()
{
    var khung=document.getElementById("khung");
    var khunglogin=document.getElementById("khunglogin");
    khung.style.transform="none";
    khunglogin.style.display="block";
} 

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function chuyenSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
        slides[slideIndex-1].style.display ="block";
        dots[slideIndex-1].className += " active";
}
