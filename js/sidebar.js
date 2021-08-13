function openNav(){
document.getElementById('main').style.marginLeft= '300px';
document.getElementById('sidebar').style.width = '300px'
}

function closeNav(){
document.getElementById('sidebar').style.width = '0';
document.getElementById('main').style.marginLeft= '0';
}

function openNavMobile(){
document.getElementById('sidebar').style.width = '100%';
}