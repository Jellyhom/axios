var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var input = [1, 2];
function f(_a) {
    var a = _a[0], b = _a[1];
    console.log(a, b);
}
f(input);
var o = { a: 1, b: 2, c: 3 };
var a = o.a, b = o.b;
var c = o.a, r = __rest(o, ["a"]);
var t = r.b + r.c;
console.log(t);
