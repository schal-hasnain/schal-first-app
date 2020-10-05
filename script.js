$(function(){
    var tbody = "<tbody></tbody>"
    $("#infoTable").append(tbody);
});
$(function resetclicked(){
    document.getElementById("update").disabled = true;
   $("#reset").click(function handleresetbtn(){
       if(($("#name").val()== "")&&($("#age").val()=="")&&($("#city").val()==""))
       {
           alert("Already Empty!!");
       }
       $("#name").val("");
       $("#age").val("");
       $("#city").val("");
       $( "#male" ).prop( "checked", false );
       $( "#female" ).prop( "checked", false );
       document.getElementById("add").disabled = false;
       document.getElementById("update").disabled = true;
      

   }) 
});
$(function addclicked(){
    $("#add").click(function handleaddbtn(){
        if(($("#name").val()== "")||($("#age").val()=="")||($("#city").val()==""))
        {
            alert("Fill Every Field!!")
            return;
        }
        var name = $("#name").val();
        if ($("#male").prop("checked"))
        {
            var gender = "Male";
        }
        else{
            var gender = "Female";
        }
        var age = $("#age").val();
        var city = $("#city").val();
        var newRow = "<tr><td>" + name + "</td><td>" + gender + "</td><td>"+age+"</td><td>"+city+"</td><td><button onclick = deleteclicked() id=delete>Delete</button><button onclick = updateclicked() id = update1>Update</button></td></tr>";
        $("#infoTable").append(newRow);
    })
    
   
});
function deleteclicked(){
$("#delete").parent().parent().remove();
}
function updateclicked(){
    document.getElementById("add").disabled = true;
    document.getElementById("update").disabled = false;
      
}


