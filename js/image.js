
// Add Hotels
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

function readHotelParkingURL(input){
if(input.files && input.files[0]){
var reader = new FileReader();
reader.onload = function(e){
document.getElementById('hotelparkingImage').setAttribute('src', e.target.result);
document.getElementById('hotelparkingImage').style.display = 'block';
};
reader.readAsDataURL(input.files[0]);
}
}

function readCitizenshipImageURL(input){
if(input.files && input.files[0]){
var reader = new FileReader();
reader.onload = function(e){
document.getElementById('CitizenshipImageURL').setAttribute('src', e.target.result);
document.getElementById('CitizenshipImageURL').style.display = 'block';
};
reader.readAsDataURL(input.files[0]);
}
}

function readRegisteredDocumentImageURL(input){
if(input.files && input.files[0]){
var reader = new FileReader();
reader.onload = function(e){
document.getElementById('RegisteredDocumentImageURL').setAttribute('src', e.target.result);
document.getElementById('RegisteredDocumentImageURL').style.display = 'block';
};
reader.readAsDataURL(input.files[0]);
}
}
// Add Hotels ends


// Add hall
function readHoteHallURL(input){
if(input.files && input.files[0]){
var reader = new FileReader();
reader.onload = function(e){
document.getElementById('hotelHallImage1').setAttribute('src', e.target.result);
document.getElementById('hotelHallImage1').style.display = 'block';
};
reader.readAsDataURL(input.files[0]);
}
}

function readHotelHallImage2URL(input){
if(input.files && input.files[0]){
var reader = new FileReader();
reader.onload = function(e){
document.getElementById('hotelHallImage2').setAttribute('src', e.target.result);
document.getElementById('hotelHallImage2').style.display = 'block';
};
reader.readAsDataURL(input.files[0]);
}
}

function readHotelHallImage3URL(input){
if(input.files && input.files[0]){
var reader = new FileReader();
reader.onload = function(e){
document.getElementById('hotelHallImage3').setAttribute('src', e.target.result);
document.getElementById('hotelHallImage3').style.display = 'block';
};
reader.readAsDataURL(input.files[0]);
}
}
    
// Add hall ends

// Add Menu
function hotelMenuImage1(input){
if(input.files && input.files[0]){
var reader = new FileReader();
reader.onload = function(e){
document.getElementById('hotelMenuImage-1').setAttribute('src', e.target.result);
document.getElementById('hotelMenuImage-1').style.display = 'block';
};
reader.readAsDataURL(input.files[0]);
}
}

// Add Menu ends

// Add restaurants

function hotelRestaurantImage1(input){
if(input.files && input.files[0]){
var reader = new FileReader();
reader.onload = function(e){
document.getElementById('hotelRestaurantImage-1').setAttribute('src', e.target.result);
document.getElementById('hotelRestaurantImage-1').style.display = 'block';
};
reader.readAsDataURL(input.files[0]);
}
}
function hotelRestaurantImage2(input){
if(input.files && input.files[0]){
var reader = new FileReader();
reader.onload = function(e){
document.getElementById('hotelRestaurantImage-2').setAttribute('src', e.target.result);
document.getElementById('hotelRestaurantImage-2').style.display = 'block';
};
reader.readAsDataURL(input.files[0]);
}
}

function hotelRestaurantImage3(input){
if(input.files && input.files[0]){
var reader = new FileReader();
reader.onload = function(e){
document.getElementById('hotelRestaurantImage-3').setAttribute('src', e.target.result);
document.getElementById('hotelRestaurantImage-3').style.display = 'block';
};
reader.readAsDataURL(input.files[0]);
}
}
    
// Add restaurants ends

// Add Room
function hotelRoomImage1(input){
    if(input.files && input.files[0]){
    var reader = new FileReader();
    reader.onload = function(e){
    document.getElementById('hotelRoomImage-1').setAttribute('src', e.target.result);
    document.getElementById('hotelRoomImage-1').style.display = 'block';
    };
    reader.readAsDataURL(input.files[0]);
    }
    }
    function hotelRoomImage2(input){
    if(input.files && input.files[0]){
    var reader = new FileReader();
    reader.onload = function(e){
    document.getElementById('hotelRoomImage-2').setAttribute('src', e.target.result);
    document.getElementById('hotelRoomImage-2').style.display = 'block';
    };
    reader.readAsDataURL(input.files[0]);
    }
    }
    
    function hotelRoomImage3(input){
    if(input.files && input.files[0]){
    var reader = new FileReader();
    reader.onload = function(e){
    document.getElementById('hotelRoomImage-3').setAttribute('src', e.target.result);
    document.getElementById('hotelRoomImage-3').style.display = 'block';
    };
    reader.readAsDataURL(input.files[0]);
    }
    }
// Add Room ends
function hotelRoomImage1(input){
    if(input.files && input.files[0]){
    var reader = new FileReader();
    reader.onload = function(e){
    document.getElementById('hotelRoomImage-1').setAttribute('src', e.target.result);
    document.getElementById('hotelRoomImage-1').style.display = 'block';
    };
    reader.readAsDataURL(input.files[0]);
    }
    }
    function hotelRoomImage2(input){
    if(input.files && input.files[0]){
    var reader = new FileReader();
    reader.onload = function(e){
    document.getElementById('hotelRoomImage-2').setAttribute('src', e.target.result);
    document.getElementById('hotelRoomImage-2').style.display = 'block';
    };
    reader.readAsDataURL(input.files[0]);
    }
    }
    
    function hotelRoomImage3(input){
    if(input.files && input.files[0]){
    var reader = new FileReader();
    reader.onload = function(e){
    document.getElementById('hotelRoomImage-3').setAttribute('src', e.target.result);
    document.getElementById('hotelRoomImage-3').style.display = 'block';
    };
    reader.readAsDataURL(input.files[0]);
    }
    }
// Add Table
function hotelTableImage1(input){
    if(input.files && input.files[0]){
    var reader = new FileReader();
    reader.onload = function(e){
    document.getElementById('hotelTableImage-1').setAttribute('src', e.target.result);
    document.getElementById('hotelTableImage-1').style.display = 'block';
    };
    reader.readAsDataURL(input.files[0]);
    }
    }
    function hotelTableImage2(input){
    if(input.files && input.files[0]){
    var reader = new FileReader();
    reader.onload = function(e){
    document.getElementById('hotelTableImage-2').setAttribute('src', e.target.result);
    document.getElementById('hotelTableImage-2').style.display = 'block';
    };
    reader.readAsDataURL(input.files[0]);
    }
    }
    
    function hotelTableImage3(input){
    if(input.files && input.files[0]){
    var reader = new FileReader();
    reader.onload = function(e){
    document.getElementById('hotelTableImage-3').setAttribute('src', e.target.result);
    document.getElementById('hotelTableImage-3').style.display = 'block';
    };
    reader.readAsDataURL(input.files[0]);
    }
    }
// Add Table Ends