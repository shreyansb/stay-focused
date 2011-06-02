var stayfocused = {};

stayfocused.DEFAULT_DELAY_SECONDS = 20 // *1000 for milliseconds used by js

if (localStorage.stayfocused_DELAY_SECONDS) {
    stayfocused.PAUSE = localStorage.stayfocused_DELAY_SECONDS*1000;
} else {
    stayfocused.PAUSE = stayfocused.DEFAULT_DELAY_SECONDS*1000; 
}

if (localStorage.stayfocused_ALLOWED_URLS) {
    var allowed_urls = localStorage.stayfocused_ALLOWED_URLS;
} else {
    var allowed_urls = ["venmo.com", 
                        "devvenmo.com", 
                        "google.com", 
                        "stackoverflow.com", 
                        "s-static.ak.fbcdn.net", 
                        "asana.com", 
                        "assistly.com", 
                        "venmohelp.com", 
                        "amazonaws.com", 
                        "amazon.com", 
                        "facebook.com",
                        "secure.linkpt.net", 
                        "braintreepaymentgateway.com", 
                        "mongodb.org", 
                        "myclientline.net",
                        "dropbox.com",
                        "screencast.com",
                        "djangoproject.com"];
}


stayfocused.delay_page_load = function() {    
    if (localStorage.stayfocused_ON_OR_OFF && localStorage.stayfocused_ON_OR_OFF != "off") {
        var on_or_off = 1;
    } else {
        var on_or_off = 0;
    }
    on_or_off = 1;

    if (on_or_off) {
        var host = location.href;
        var num_allowed = allowed_urls.length;
        var allowed = 0;
        for (i=0; i<num_allowed; i++) {
            reg_exp = "^.*"+allowed_urls[i]+".*$";
            if (host.match(reg_exp)) {
                allowed = 1;
                break;
            }
        }

        if (!allowed) {
            console.log("not an important page: pausing pageload for "+ (stayfocused.PAUSE/1000) +" seconds");
            console.log(host);
            var date = new Date();
            var curDate;
            do { curDate = new Date(); }
            while ( curDate-date < stayfocused.PAUSE);
        }
    }
};

stayfocused.delay_page_load();