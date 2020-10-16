//challenges

passWordValueCheck = [6, 12, 13, 32, 34];


var userPass = (x) =>{
  "use strict"
    $("#g").fadeIn(30000, function(){
      var name = $("#name").val();
      this.name = name;
    var dis = document.getElementById("dis");
    var pass = document.getElementById("pass");
    if(name.length == passWordValueCheck[0]){
    dis.innerHTML = 'Good Combination';
    if(name == "" || name == null){
    pass.innerHTML = 'empty';
}
}
else if(name.length == passWordValueCheck[1]){
dis.innerHTML = 'Execellent Combination';
pass.innerHTML = 'name';

}
else if(name.length == passWordValueCheck[2]){
dis.innerHTML = 'Execellent Combination';
pass.innerHTML = 'name';
}
else if(name.length > passWordValueCheck[3]){
dis.innerHTML = 'Execellent Combination';
pass.innerHTML = 'name';
}

else if(name.length == passWordValueCheck[3]){
dis.innerHTML = 'Awesome Combination';
pass.innerHTML = 'name';
}
else if(name.length == passWordValueCheck[4]){
dis.innerHTML = 'Breathe taking Combination';
pass.innerHTML = 'name';
}
else if(name.length > passWordValueCheck[4]){
dis.innerHTML = 'Execellent Combination';
pass.innerHTML = 'name';
}



else{
	dis.innerHTML = "Password not secure";
	pass.innerHTML = name;
}

 
  

  })  
}

var x = document.getElementById("name");

userPass(x);

 
 
  
  
  








