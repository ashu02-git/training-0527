const numbers = [1, -22, 30, -4, 5, 6, 29, 12, 3]

let print = (answer) => {
    return console.log(answer);
}
print('使用配列');
print(numbers);

// numbers の個数を表示
print('numbers の個数を表示');
print(numbers.length + '個');

// 30 は何番目
print('30 は何番目');
print(numbers.indexOf(30) + 1 +'番目');

// 10 以上の数をリスト表示
print('10 以上の数をリスト表示');
let over10 = numbers.filter(x => x >= 10);
print(over10);

// 最初に数字を追加してリスト表示
print('最初に数字(28)を追加してリスト表示');
let addHead = numbers.slice();
addHead.unshift(28);
print(addHead);

// 最後に数字を追加してリスト表示
print('最後に数字(28)を追加してリスト表示');
let addEnd = numbers.slice();
addEnd.push(28);
print(addEnd);

// 3 番目から 5 番目の数をリスト表示
print('3 番目から 5 番目の数をリスト表示');
print(numbers.slice(2,5));

// 逆順でリスト表示
print('逆順でリスト表示');
print(numbers.slice().reverse());

// すべてに 2 をかけてリスト表示
print('すべてに 2 をかけてリスト表示');
print(numbers.map(x => x * 2));

// 先頭の要素を削除してリスト表示
print('先頭の要素を削除してリスト表示');
print(numbers.slice(1));

// 最後の要素を削除してリスト表示
print('最後の要素を削除してリスト表示');
print(numbers.slice(0,-1));

// すべてを足した値を表示
print('すべてを足した値を表示');
const sumNum = (x, y) => {
    return x + y;
};
const reduced = numbers.reduce(sumNum);
print(reduced);

// 最初に出てくる 5 以上の値を表示
print(' 最初に出てくる 5 以上の値を表示示');
let value = numbers.find(function(value, index, array) {
    return (value > 5);
});
print(value);

// すべて-50 以上(true/false)
print('すべて-50 以上(true/false)');
let boolOver = numbers.every(function(value, index, array) {
    return (value >= -50);
});
print(boolOver);

// -50 は存在する(true/false)
print('-50 は存在する(true/false)');
let boolExist = numbers.some(function(value, index, array) {
    return (value === -50);
});
print(boolExist);

// 大きい順にリスト表示
print('大きい順にリスト表示');
const bigger = (a, b) => {
    return b - a;
};
print(numbers.slice().sort(bigger));

// 小さい順にリスト表示
print('小さい順にリスト表示');
const smaller = (a, b) => {
    return a - b;
};
print(numbers.slice().sort(smaller));