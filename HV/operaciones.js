function pdf() {
    var doc = new jsPDF();
    doc.text(20, 20, 'This PDF has a title, subject, author, keywords and a creator.');

    var d = new Date();
    var a = d.getFullYear();
    var m = d.getMonth();
    var day = d.getDay();

    // Optional - set properties on the document
    doc.setProperties({
        title: 'Hoja de vida Karen Rodriguez ' + a + '-' + m + '-' + day,
        //subject: 'This is the subject',
        author: 'Karen Rodriguez',
        //keywords: 'generated, javascript, web 2.0, ajax',
        creator: 'Karen Rodriguez'
    });

    // var elementHTML = $('#content').html();
    // var specialElementHandlers = {
    //     '#elementH': function(element, renderer) {
    //         return true;
    //     }
    // };
    // doc.fromHTML(elementHTML, 15, 15, {
    //     'width': 170,
    //     'elementHandlers': specialElementHandlers
    // });

    // Output as Data URI
    doc.save('Hoja de vida Karen Rodriguez ' + a + '-' + m + '-' + day + '.pdf');
}