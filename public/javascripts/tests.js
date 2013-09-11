test("doit mettre à jour tous les items", function () {
    var inn = new GildedRose();
    deepEqual(extract("quality").from(inn.items), [20, 0, 7, 80, 20, 6, 100]);
});

test("doit mettre à jour tous les items après plusieurs maj", function () {
    var inn = new GildedRose();
    inn.update_quality();
    deepEqual(extract("quality").from(inn.items), [19, 1, 6, 80, 21, 5, 100]);
});


test("doit mettre à jour tous les items après plein de maj", function () {
    var inn = new GildedRose();
    inn.update_quality();
    inn.update_quality();
    inn.update_quality();
    inn.update_quality();
    inn.update_quality();
    inn.update_quality();
    inn.update_quality();
    inn.update_quality();
    inn.update_quality();
    inn.update_quality();
    inn.update_quality();
    inn.update_quality();
    inn.update_quality();
    inn.update_quality();
    inn.update_quality();
    inn.update_quality();
    inn.update_quality();
    inn.update_quality();
    inn.update_quality();
    inn.update_quality();
    deepEqual(extract("quality").from(inn.items), [0,38,0,80,0,0, 100]);
});


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