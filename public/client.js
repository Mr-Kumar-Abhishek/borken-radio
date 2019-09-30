// client-side js
// run by the browser each time your view template is loaded

function set_menus(menu_data){
  for(var i = 0; i < menu_data.length; i++){
    var station_code = menu_data[i].station.shortcode;
    console.log(station_code);
    $("#station-menu").append('<li class="nav-item"><a class="nav-link" href="#">'+ station_code +'</a></li>');
  }
}

function get_data() {
     $.getJSON("https://broken.radio:444/api/nowplaying",function(data) {
        // console.log(data);
        set_menus(data);
     });
}

$(get_data());