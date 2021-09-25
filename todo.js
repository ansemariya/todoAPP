

$(document).ready(function () {
 
 
    $.ajax({
           url: 'https://jsonplaceholder.typicode.com/todos',
           type: "get",
           dataType: "json",
        
           success: function(data) {
               drawTable(data);
           }
        });

function drawTable(data) {
   for (var i = 0; i < data.length; i++) {
       drawRow(data[i]);
   }
}

function drawRow(rowData) {
   var row = $("<tr />")
   $("#personDataTable").append(row);
   if(rowData.completed==true){
       row.append($("<td>" + `<input type="checkbox" id="check" name="checkbox" class="nw1" checked="disabled"  >` + rowData.title + "</td>"));   
   }
   else{
        row.append($("<td>" + `<input type="checkbox" id="checks" name="checkboxes" class="nw1" >` + rowData.title + "</td>"));
   }
               if ($('[name="checkbox"]:checked'==true)){
               $('[name="checkbox"]').attr('disabled','disabled');
      
                }

  
    }
   
});

