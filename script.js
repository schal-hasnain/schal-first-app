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
        var newRow = "<tr><td>" + name + "</td><td>" + gender + "</td><td>"+age+"</td><td>"+city+"</td><td><button onclick = deleteclicked() id=delete>Delete</button><button type=button class='btn btn-success btn-edit'>Update</button></td></tr>";
        $("#infoTable").append(newRow);
    })
    
   
});
function deleteclicked(){
$("#delete").parent().parent().remove();
}
var req_tr=null;
$(document).on('click', '.btn-edit', function(){
    document.getElementById("add").disabled = true;
    document.getElementById("update").disabled = false;
    req_tr = $(this).closest('tr');
    var new_name = $(req_tr).find('td:eq(0)').text();
    var new_gender = $(req_tr).find('td:eq(1)').text();
    var new_age = $(req_tr).find('td:eq(2)').text();
    var new_city = $(req_tr).find('td:eq(3)').text();
    $("#name").val(new_name);
    $("#age").val(new_age);
    $("#city").val(new_city);
    if (new_gender == "Male")
    {
        $( "#male" ).prop( "checked", true );
    }
    else{
        $( "#female" ).prop( "checked", true );
    }
    $("#update").click(function updatebtnhandle(){
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
        if(req_tr)
        {
        $(req_tr).find('td:eq(0)').text(name);
        $(req_tr).find('td:eq(1)').text(gender);
        $(req_tr).find('td:eq(2)').text(age);
        $(req_tr).find('td:eq(3)').text(city);
        alert("Record Updated !!");
        req_tr = null;
        }
    });

});
     





