$(document).ready(function () {
  $("#btn").click(function () {
    var name=$('#name').val();
    var phone=$(#phone).val();

    var pat=/^[w-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;
    if(name==""||name==null){
      alert("enter the name first");
    }

    if(phone==""){
      alert("enter the phone Number")
    }
    if(phone.length!==10)
    {
      alert("enter the correct phone number");
    }

  });
});
var password=$(#password).val();
var cpassword=$(#cpassword).val();
