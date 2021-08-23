
function categorySelect(){
var e = document.getElementById("menuCategory");
var strUser = e.value;
console.log(strUser);
if(strUser == 'food'){
document.getElementById('food-sub-category').style.display = 'block';
document.getElementById('drinks-sub-category').style.display = 'none';
}else{
document.getElementById('drinks-sub-category').style.display = 'block';
document.getElementById('food-sub-category').style.display = 'none';
}
}
