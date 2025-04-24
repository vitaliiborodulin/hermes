$('#myfile').change(function() {
    if ($(this).val() != '') $(this).prev().text('Выбрано фото: ' + $(this)[0].files.length);
    else $(this).prev().text('Выберите несколько фото');
});