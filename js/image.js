function readFrontURL(input){
if(input.files && input.files[0]){
var reader = new FileReader();
reader.onload = function(e){
document.getElementById('frontImage').setAttribute('src', e.target.result);
document.getElementById('frontImage').style.display = 'block';
};
reader.readAsDataURL(input.files[0]);
}
}

function readBackURL(input){
if(input.files && input.files[0]){
var reader = new FileReader();
reader.onload = function(e){
document.getElementById('backImage').setAttribute('src', e.target.result);
document.getElementById('backImage').style.display = 'block';
};
reader.readAsDataURL(input.files[0]);
}
}

function readSideURL(input){
if(input.files && input.files[0]){
var reader = new FileReader();
reader.onload = function(e){
document.getElementById('sideImage').setAttribute('src', e.target.result);
document.getElementById('sideImage').style.display = 'block';
};
reader.readAsDataURL(input.files[0]);
}
}