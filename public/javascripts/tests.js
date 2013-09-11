

test( "doit mettre à jour tous les items", function() {
    deepEqual(extract("quality").from(items), [20, 0, 7, 80, 20, 6]);
});





//get values instead of keys
var extract = function (fieldName) {
    var result = [];
    return {
        from: function(array) {
            $.each(array, function (index, elt) {
                result.push(elt[fieldName]);
            });
            return result;
        }
    }
}