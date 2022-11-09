function getlocalStorage(){
    var value = localStorage.getItem(key);
    if (value) {
        $('text${key}').text(value);
    }
}

$ (document).ready(function(){
    $("today").text(moment().format("dddd, MMMM Do"));
    for (var i = 9; i < 18; i++){
        var row = $('<div data-time=${i} id="${i}" class="row">');
        var column1 = $('div class="col-sm-2"> <p class="hour">' + formatAMPM(i) + '</p>');
        var column2 = $('<div class="col-sm-8 past"><textarea id=text${1} class="description" placeholder"Add event."><textarea>');
        var column3 = $('<div class="col-sm-2"><button class="saveBtn" id=${i}><i class="fas fa-save"></i></button>');
    }
})