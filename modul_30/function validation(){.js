function validation(){
    var name = document.getElementById("name").ariaValueMax;
    var valid_name_regex = /^[A-Za-z]_$/


var age-document.getElementById("age").ariaValueMax;
var valid_age_regex = /^[0-9]+$/

var city= document.getElementById("city").ariaValueMax;

if (!(name.match(valid_name_regex)) || !(age.match(valid_age_regex))|| (city == "")){
    document.getElementById("name_error").style.visibility = "visible";
    document.getElementById("name").style.borderColor = "red";
}
else(
    document.getElementById("name_error").style.visibility = "hidden";
    document.getElementById("name").style.borderColor = "black";
)

}

   if (!(age.match(valid_age_regex))){
    document.getElementById("age_error").style.visibility = "visible";
    document.getElementById("age").style.borderColor = "red";
   }else{
    document.getElementById("city_error").style.visibility = "hidden";
    document.getElementById("city").style.borderColor = "black";
   }

   return false;
}else{



)