function getlocalStorage(key){
    var value = localStorage.getItem(key);
    if (value) {
        $('text${key}').text(value);
    }
}

$ (document).ready(function(){
    $("#today").text(moment().format("dddd, MMMM Do"));
    for (var i = 9; i < 18; i++){
        var row = $('<div data-time=${i} id="${i}" class="row">');
        var column1 = $('div class="col-sm-2"> <p class="hour">' + formatAMPM(i) + '</p>');
        var column2 = $('<div class="col-sm-8 then"><text id=text${1} class="description" placeholder"Add event."><text>');
        var column3 = $('<div class="col-sm-2"><button class="saveBtn" id=${i}><i class="fas fa-save"></i></button>');
        
        row.append(column1)
        row.append(column2)
        row.append(column3)
        $(".container").append(row);

        getlocalStorage(i);
    }

    function formatAMPM(hours) {
        var ampm = hours >= 12? "pm" : "am";
        hours = hours % 12;
        hours = hours ? hours : 12;
        return hours +ampm;
    }
    formatAMPM()

    function colors(){
        var currentTime = new Date().getHours();
        for (var i = 9; i < 18; i++) {
            if ($('#${i}').data("time") == currentTime){
                $('#text${1}').addClass("now");
        }else if (curTime < $('#${1}').data("time")) {
            $('#text${i}').addClass("later");
        }
    }
}

setInterval(function() {
    colors();
}, 1000);

var saveBtn = $('.saveBtn');
saveBtn.on('click', function(){
    var eventId = $(this).attribute('id');
    var eventText = $(this).parent().siblings().childrem('description').value();
    localStorage.setItem(eventId, eventText);

});

})