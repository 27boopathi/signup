$(document).ready(function () {
  $("#btn").click(function () {
    var name=$('#name').val();
    var mail=$('#mail').val();
    var phone=$('#phone').val();
    var password=$('#password').val();
    var cpassword=$('#cpassword').val();

    if(name==""||name==null){
      alert("enter the name first");


    }console.log(name);
if(mail==""){
alert("mail is required");
}console.log(mail);
if (!ValidateEmail($("#mail").val())) {
          alert("Invalid email address.");
      }

if(phone.length!==10){
alert("enter  10 digit");
}
if(password==""||cpassword==""){
alert("enter the passwords");
}
if(password!==cpassword){
alert("password and comfirm password not match");
}
  });



});function login() {
  var username=$('#username').val();
  var userpassword=$('#userpassword').val();
  console.log("login");

  if(username==""||userpassword==""){
    alert("enter the username and password");
  }
  if($('#username').val()=="boopathi" && $('#userpassword').val()=="1234"){

      window.location.replace("profile.html");
    }
      else {
        alert("incorrect username and password");
      }

  }
  function profile()
  {
    var empname=$('#empname').val();
    var empid=$('#empid').val();
    var empphone=$('#empphone').val();
    var addr=$('#empaddr').val();
    var salary=$('#empsal').val();
var crosspay=salary*12;
console.log(crosspay);
$("#detailss").append('<tr><td>'+empname+'<td>')
$("#detailss").append('<td>'+empid+'<td>')
$("#detailss").append('<td>'+empphone+'<td>')
$("#detailss").append('<td>'+addr+'<td>')
$("#detailss").append('<td>'+salary+'<td>')
$("#detailss").append('<td>'+crosspay+'<td></tr><br/>');
}function ValidateEmail(mail) {
    var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return expr.test(mail);
};
