var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// *** Generic Classes - How to create generic classes
// *** In the below example, we can have a generic class storage and can store different type of
// *** data such as text, numbers.
// *** In addition to the generic class, we could also have generics in methods of the class
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    };
    DataStorage.prototype.getItem = function () {
        return __spreadArray([], this.data, true);
    };
    return DataStorage;
}());
var textStroage = new DataStorage();
textStroage.addItem('Arsenal');
textStroage.addItem('Everton');
textStroage.addItem('Newcastle');
textStroage.removeItem('Everton');
console.log(textStroage.getItem());
// Note: it does not work well with objects as they are references
// Any removal will only remove the last item
// To include object, we need to input more logic in the getter and setter
// const objStorage = new DataStorage<object>();
// objStorage.addItem({ name: 'Manu' });
// objStorage.addItem({ name: 'Chelsea' });
// objStorage.removeItem({ name: 'Manu' });
// console.log(objStorage.getItem());
