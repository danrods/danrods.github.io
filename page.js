$(document).ready(function() {
    $('#resume').click(function(){
      $("#modalHeader").html("Resume");	
      $("#modalSrc").attr('src',"resume.pdf");
      $("#dialog").modal();
    }); 

    $('#research').click(function(){
      $("#modalHeader").html("Research Proposal");	
      $("#modalSrc").attr('src',"research.pdf");
      $("#dialog").modal();
    }); 

    $('#pressRelease').click(function(){
      $("#modalHeader").html("Press Release");	
      $("#modalSrc").attr('src',"pressRelease.pdf");
      $("#dialog").modal();
    }); 

    $('#litReview').click(function(){
      $("#modalHeader").html("Literature Review");	
      $("#modalSrc").attr('src',"litReview.pdf");
      $("#dialog").modal();
    }); 

    $('.modal').on('show.bs.modal', function () {
       $(this).find('.modal-body').css({
              width:'auto', //probably not needed
              height:'auto', //probably not needed 
              'max-height':'100%'
       });
});



 }); 