// client-side js
// run by the browser each time your view template is loaded

function get_data() {
     $.getJSON("https://broken.radio:444/api/nowplaying",function(data) {
        console.log(data);
     });
}

$(get_data());