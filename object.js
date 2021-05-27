// オブジェクト定義
const downtown = {
    name: 'ダウンタウン',
    boke: '松本人志',
    tsukkomi: '浜田雅功',
    // メソッド(functionまたは省略表記で定義。アロー関数は避ける)
    method () {
        // thisはメゾットを持つオブジェクト自身と紐づいている
        console.log(this);
    }
}

const chidori = {
    name: '千鳥',
    boke: '大悟',
    tsukkomi: 'ノブ'
}

console.log(downtown.boke);
console.log(downtown['tsukkomi']);

console.log(downtown);
downtown.manager = '藤原寛';

console.log(downtown);

// テンプレートリテラル
const introduce = (combi) => {
    console.log(`コンビ名は${combi.name}です。ボケは${combi.boke}、ツッコミは${combi.tsukkomi}です。`);
}

introduce(downtown);
introduce(chidori);

// 　メソッド呼出
downtown.method();

// 練習問題（introduceメソッドを作成）
console.log('練習問題');

const practice = {
    name: '麒麟',
    boke: '川島',
    tsukkomi: '田村',
    intro () {
        return console.log(`コンビ名は${this.name}です。ボケは${this.boke}、ツッコミは${this.tsukkomi}です。`);        
    }
}
practice.intro();

// 入れ子型
const yoshimoto = {
    downtown1: {
        name: 'ダウンタウン',
        boke: '松本人志',
        tsukkomi: '浜田雅功'
    },
    chidori1: {
        name: '千鳥',
        boke: '大悟',
        tsukkomi: 'ノブ'
    },
    kirin1: {
        name: '麒麟',
        boke: '川島',
        tsukkomi: '田村'
    }
}
console.log(yoshimoto.kirin1.boke);
