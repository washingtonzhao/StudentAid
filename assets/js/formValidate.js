function validateCheck()
{
    if($('input[name=privacy]:checked').val() == "agree"
    && $('input[name=health]:checked').val() == "agree"
    && $('input[name=risk]:checked').val() == "agree")
    {
        document.getElementById("popup").setAttribute("style","display:none;");
        document.getElementById("overlay").setAttribute("style","display:none");
        sessionStorage.setItem('isshow',1);
    }

    else{
        document.getElementById("error").innerHTML = "Please accept all terms";
    }

}