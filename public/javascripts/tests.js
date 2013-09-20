

test( "hello test", function() {
    ok( 1 == "1", "Passed!" );
});






// extract("nomChamp").from(arrayOfObject);
var extract = function (fieldName) {
    var result = [];
    return {
        from: function (array) {
            $.each(array, function (index, elt) {
                result.push(elt[fieldName]);
            });
            return result;
        }
    }
}