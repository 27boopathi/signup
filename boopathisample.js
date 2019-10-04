$("t1").append('+empname+')
$("t2").append('+empid+');console.log(crosspay);
$("t3").append('+empphone+');
$("t4").append('+addr+');
$("t5").append('+salary+');console.log(crosspay);
$("t6").append('+crosspay+');


<td id="t1"></td>
<td id="t2"></td>
<td id="t3"></td>
<td id="t4"></td>
<td id="t4"></td>
<td id="t5"></td>
<td id="t6"></td>


$("#t1").html('<tr><td>'+empname+'<td>')
$("#t2").html('<td>'+empid+'<td>')
$("#t3").html('<td>'+empphone+'<td>')
$("#t4").html('<td>'+addr+'<td>')
$("#t5").html('<td>'+salary+'<td>')
$("#t6").html('<td>'+crosspay+'<td></tr>');

$("t1").append(''+empname+' ')
$("t2").append(' '+empid+' ')
$("t3").append(' '+empphone+' ')
$("t4").append(' '+addr+' ')
$("t5").append(' '+salary+' ')
$("t6").append(' '+crosspay+' ');
 }




 $("#detailss").append('<td>'+empname+'<td>');
 $("#detailss").append('<td>'+empid+'<td>');
 $("#detailss").append('<td>'+empphone+'<td>');
 $("#detailss").append('<td>'+addr+'<td>');
 $("#detailss").append('<td>'+salary+'<td>');
 $("#detailss").append('<td>'+crosspay+'<td>');
