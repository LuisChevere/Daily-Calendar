function getlocalStorage(){
    var value = localStorage.getItem(key);
    if (value) {
        $('text${key}').text(value);
    }
}

