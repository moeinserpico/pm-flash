$(function () {

  var loadPartPurchaseForm =function () {
    var btn=$(this);
    $.ajax({
      url: btn.attr("data-url"),
      type: 'get',
      dataType: 'json',
      beforeSend: function () {
        //alert(btn.attr("data-url"));
        $("#modal-partPurchase").modal({backdrop: 'static', keyboard: false});
      },
      success: function (data) {
        $("#modal-partPurchase .modal-content").html(data.html_partPurchase_form);
        $('#id_purchaseDateOrdered').pDatepicker({
          format: 'YYYY-MM-DD',

          autoClose:true,
          initialValueType: 'gregorian'
                    });//id_dateCompleted
        $('#id_purchaseDateRecieved').pDatepicker({
          format: 'YYYY-MM-DD',

          autoClose:true,
          initialValueType: 'gregorian'
                    });//id_dateCompleted
        $('#id_purchaseDateofExpire').pDatepicker({
          format: 'YYYY-MM-DD',

          autoClose:true,
          initialValueType: 'gregorian'
                    });//id_dateCompleted
        $(".selectpicker").selectpicker();
      }
    });




};

//$("#modal-company").on("submit", ".js-company-create-form",
var savePartPurchaseForm= function () {

   var form = $(this).parent();
   $.ajax({
     async: true,
     url: form.attr("action"),
     data: form.serialize(),
     type: form.attr("method"),
     dataType: 'json',
     success: function (data) {
       if (data.form_is_valid) {
         alert("!23");
         //alert("Company created!");  // <-- This is just a placeholder for now for testing
         $("#tbody_partPurchase").empty();
         $("#tbody_partPurchase").html(data.html_partPurchase_list);
         $("#tbody_partStock").empty();
         console.log(data);
         $("#tbody_partStock").html(data.html_partStock_list);
         $("#modal-partPurchase").modal("hide");
         //console.log(data.html_wo_list);
       }
       else {

         $("#partPurchase-table tbody").html(data.html_partPurchase_list);
         $("#modal-partPurchase .modal-content").html(data.html_partPurchase_form);
       }
     }
   });
   return false;
 };
 var deletePartPurchaseForm= function (event) {
   console.log(event.target.className);
   if(event.target.className=="btn btn-danger")
   {

    var form = $(this);


    $.ajax({
      async: true,
      url: form.attr("data-url"),
      data: form.serialize(),
      type: 'post',
      dataType: 'json',
      success: function (data) {
        if (data.form_is_valid) {
          //alert("Company created!");  // <-- This is just a placeholder for now for testing
          $("#tbody_partPurchase").empty();
          $("#tbody_partPurchase").html(data.html_partPurchase_list);
          $("#modal-partPurchase").modal("hide");
          //console.log(data.html_wo_list);
        }
        else {

          $("#partPurchase-table tbody").html(data.html_partPurchase_list);
          $("#modal-partPurchase .modal-content").html(data.html_partPurchase_form);
        }
      }
    });
  }
    return false;
  };

 // Create book
$(".js-create-partPurchase").unbind();
$(".js-create-partPurchase").click(loadPartPurchaseForm);
//$("#task-submit").on("", ".js-task-create-form", saveTaskForm);
//s$("#task-submit").on("click",function(){alert("32132");});
//$("#task-table").on("load",initLoad);
// Update book
$("#partPurchase-table").on("click", ".js-update-partPurchase", loadPartPurchaseForm);

$("#modal-partPurchase").on("submit", ".js-partPurchase-update-form", loadPartPurchaseForm);
// Delete book
$("#partPurchase-table").on("click", ".js-delete-partPurchase", loadPartPurchaseForm);
$("#modal-partPurchase").on("click", ".js-partPurchase-delete-form", deletePartPurchaseForm);

});
