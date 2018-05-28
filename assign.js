function change()
{
    var image_url=prompt("enter the image_url","");
    var name=prompt("enter the name of author","");
    var caption=prompt("enter the caption","");
    var date=prompt("enter the days");
  $t1=$("#my_card").clone();
        $("#div1",$t1).text(name);
        $("#div2",$t1).text(caption);
        $("#div3",$t1).attr("src",image_url);
        $("#div4",$t1).text(date+" days ago");
        $t1.appendTo("#r2");
}