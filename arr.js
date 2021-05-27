const arr = ['富士','鷹','茄子'];

arr[2] = 'ズッキーニ';

console.log(`今年の初夢は${arr[2]}でした。`);

const alph = ['a','b', 'e', 'shu', 'he', 'i'];

for (let i = 0; i < alph.length; i++) {
    console.log(`配列の${i+1}番目は${alph[i]}です。`);
}

// for of文(index使わないとき)
for (const text of alph) {
    console.log(text);
}

// pushメソッド
const items = [
    'ひのきの棒',
    'とがった骨',
    'しあわせの帽子',
    'こんぼう',
    'のこぎり'
];
console.log(items);
items.push('てつの鎧');
console.log(items);

// sliceメソッド
const smap = [
    '中居',
    '木村',
    '稲垣',
    '草薙',
    '香取',
    '森'
];
console.log(smap);
const newMap = smap.slice(2,5);
// 2と5を含む
console.log(newMap);

// concatメソッド
const first = [1, 2, 3];
const second = [4, 5, 6];
console.log(first.concat(second));

// 多次元配列

const A = [
    ['□','■','□'],
    ['□','□','■'],
    ['■','□','■'],
    ['■','■','■']
];

console.table(A);
A[3][0] = '□';
console.table(A);

// 九九表
const kuku = [];
for (let i = 0; i < 9; i++){
    kuku.push([]);
    for( let j = 0; j < 9; j++){
        kuku[i].push((i+1)*(j+1));
    }
}
console.table(kuku);

// 実践問題
const array = [5, 4, 3, 2];
const value = 6;
let flag = false;

for (let num of array) {
    if (num === value){
        flag = true;
        break;
    }
}

if (flag) {
    console.log('YES');
} else {
    console.log('NO');
}

// reversメソッド　(slice()なしだと元も変わってしまう)
const arry = [1, 2, 3];
const reversed = arry.slice().reverse();
console.log(arry);
console.log(reversed)

// map関数
const mapArr = [1, 2, 3, 4, 5];

const f = (x) => {
    return 100 * x;
};
const mapped = mapArr.map(f);
console.log(mapped);

// 上級実践問題
console.log('1000までの素数出力')
for (let i = 2; i < 1000; i++) {
    for (let j = 2; j <= i; j++) {
        if (j === i ) {
            console.log(i);
        }
        if (i % j === 0){
            break;
        }
    }
}

console.log('ソート関数の作成');

const smallsort = (A) => {
    let arrLength = A.length;
    for (let i = 0; i <  arrLength; i++) {
        let min = i;
        for (let j = i + 1; j < arrLength; j++) {
            if (A[min] > A[j]) {
                min = j;
            }
        }
        [A[i],A[min]] = [A[min], A[i]];
        // この処理できる
        // let tmp = A[i];
        // A[i] = A[min];
        // A[min] = tmp;
        
    }
    return A;
}

const nums = [1, 2, 4, 9, 2, 8, 5];

const sorted = smallsort(nums);
console.log(sorted);