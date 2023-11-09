
//Display current time to HTML id="time"
setInterval (function() {
    const newDate = new Date();
    const hour = newDate.getHours();
    const minute = newDate.getMinutes();
    var ampm = () => hour < 12 ? "AM" : "PM";
    var hour12 = () => hour > 12 ? hour - 12 : hour;
    var hour00 = () => (hour12 < 10 ? "0": "") + hour;
    var minute00 = () => (minute < 10 ? "0" : "") + minute;
    
    $("#time").text(hour00() + ":" + minute00() + " " + ampm())
}, 1000); 