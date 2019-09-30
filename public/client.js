// client-side js
// run by the browser each time your view template is loaded

function set_menus(menu_data){
  for(var i = 0; i < menu_data.length; i++){
    console.log(menu_data[i].station.shortcode);
  }
}

function get_data() {
     $.getJSON("https://broken.radio:444/api/nowplaying",function(data) {
        // console.log(data);
        set_menus(data);
     });
}

$(get_data());