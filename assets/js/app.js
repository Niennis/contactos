$(document).ready(function(){
  var contacts = $('.contacts');
  var add = $('#addContact');

  add.click(function(){
    var name = $('#name').val();
    var lastName = $('#lastName').val();
    var phone = $('#phone').val();
    var mail = $('#mail').val();
    
  contacts.append('<div class="row contact">' + 
  '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"><h3>' + name + lastName + '</h3></div> </div>' + 
  '<div class="row"><div class="col-lg-6 col-md-6 col-sm-6 col-xs-6"><p>' + phone + '</p><p>' + mail + '</p></div><div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">' + 
  '<i class= "fa fa-trash trash"></i>' + 
  '</div> </div>')


  })

})
