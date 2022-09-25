function read_file(filename) {
  var response = '';
  $.ajax({ type: "GET",   
           url: filename,   
           async: false,
           success : function(text)
           {
               response = text;
           }
  });
  return response
}