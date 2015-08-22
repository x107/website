$(document).ready(function (){
  var data ={"csharp":[
                {"type":"array",
                "title":"declare arrays",
                "code":"Int[] list = new Int[10];"},

                {"type":"classes",
                "title":"class constructor",
                "code":"public class Shape(){};"}

            ]};


  $('.title').text(data.csharp[0].title);
  $('.code').text(data.csharp[0].code);
  $('.title2').text(data.csharp[1].title);
  $('.code2').text(data.csharp[1].code);
  // $('.code').text(json[0].topic.arrays.code);
  // $('.title2').text(json[0].topic.classes.title);
  // $('.code2').text(json[0].topic.classes.code);

  //add codes
  $('.submit').click(function(){
    data.csharp[0].title = "clicked";
    location.reload();
  });
});
