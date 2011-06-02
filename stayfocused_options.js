stayfocused = {};

stayfocused.save_options = function() {
    // allowed urls
    var el_entries = document.getElementById('stayfocused_allowed_urls');
    var entries = el_entries.value;
    localStorage["stayfocused_ALLOWED_URLS"] = entries.split(" ").join("");
    
    // delay seconds
    var el_delay_seconds = document.getElementById('stayfocused_delay_seconds');
    var delay_seconds = el_delay_seconds.value;
    var delay_seconds = parseInt(delay_seconds, 10);
    localStorage["stayfocused_DELAY_SECONDS"] = delay_seconds;
    
    // on or off
    var el_on_or_off = document.getElementById('stayfocused_on_or_off');
    if (el_on_or_off.checked) {
        var on_or_off = "on";
    } else {
        var on_or_off = "off";
    }
    localStorage["stayfocused_ON_OR_OFF"] = on_or_off
    
};

stayfocused.load_options = function() {
    // load allowed urls
    if (localStorage.stayfocused_ALLOWED_URLS) {
        var entries = localStorage.stayfocused_ALLOWED_URLS.split(",").join(", ");
    } else {
        var entries = '';
    }
    var el_entries = document.getElementById('stayfocused_allowed_urls');
    el_entries.value = entries;
    
    // delay seconds
    if (localStorage.stayfocused_DELAY_SECONDS) {
        var delay_seconds = localStorage.stayfocused_DELAY_SECONDS;
    } else {
        var delay_seconds = 30;
    }
    var el_delay_seconds = document.getElementById('stayfocused_delay_seconds');
    el_delay_seconds.value = delay_seconds;

    // extension status
    var el_on_or_off = document.getElementById('stayfocused_on_or_off');
    if (localStorage.stayfocused_ON_OR_OFF && localStorage.stayfocused_ON_OR_OFF != "off") {
        el_on_or_off.checked = true;
    } else {
        el_on_or_off.checked = false;
    }
};