// function printLabel(labelObj: { label: string }) {
//   console.log(labelObj.label)
// }
function printLabel(labelObj) {
    console.log(labelObj.label);
}
var obj = { size: 10, label: 'size 10 object' };
printLabel(obj);
function createSquare(config) {
    var newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: 'black' });
var p1 = { x: 10, y: 10 };
var s = [1, 2, 3, 4];
var ro = s;
s[0] = 0;
console.log(ro);
