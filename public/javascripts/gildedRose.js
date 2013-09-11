function Item(name, sell_in, quality, update) {
    this.name = name;
    this.sell_in = sell_in;
    this.quality = quality;
    this.update = update;
}

function GildedRose() {
    this.items = [];
    this.init();
}

GildedRose.prototype.init = function () {
    this.items.push(new Item('+5 Dexterity Vest', 10, 20, Item.prototype.update_by_default));
    this.items.push(new Item('Aged Brie', 2, 0, Item.prototype.update_agedBrie));
    this.items.push(new Item('Elixir of the Mongoose', 5, 7, Item.prototype.update_by_default));
    this.items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80, Item.prototype.update_Sulfuras));
    this.items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20, Item.prototype.update_BackstagePasses));
    this.items.push(new Item('Conjured Mana Cake', 3, 6, Item.prototype.update_by_default));
}


GildedRose.prototype.update_quality = function () {
    $.each(this.items, function(index, item) { item.update() });
}


Item.prototype.update_agedBrie = function() {
        if (this.quality < 50) {
            this.quality = this.quality + 1
        }
        this.sell_in = this.sell_in - 1;
        if (this.sell_in < 0) {
            if (this.quality < 50) {
                this.quality = this.quality + 1
            }
        }
}

Item.prototype.update_BackstagePasses = function() {
    if (this.quality < 50) {
        this.quality = this.quality + 1
        if (this.sell_in < 11) {
            if (this.quality < 50) {
                this.quality = this.quality + 1
            }
        }
        if (this.sell_in < 6) {
            if (this.quality < 50) {
                this.quality = this.quality + 1
            }
        }
    }
    this.sell_in = this.sell_in - 1;
    if (this.sell_in < 0) {
        this.quality = this.quality - this.quality
    }
}

Item.prototype.update_Sulfuras = function() {

}

Item.prototype.update_by_default = function() {
    if (this.quality > 0) {
        this.quality = this.quality - 1
    }
    this.sell_in = this.sell_in - 1;
    if (this.sell_in < 0) {
        if (this.quality > 0) {
            this.quality = this.quality - 1
        }
    }
}