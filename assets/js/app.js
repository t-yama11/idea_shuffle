function viewCombinationTable() {
    // テーブルの作成.
    let table = document.createElement('table');
    let thread = document.createElement('thread');
    let tbody = document.createElement('tbody');

    // 各テキストボックスの情報を取得.
    const text_1 = document.getElementById('text_1');
    const text_2 = document.getElementById('text_2');
    const text_3 = document.getElementById('text_3');
    const text_4 = document.getElementById('text_4');

    // 組み合わせを求めるテキスト要素群.
    const text_list = [text_1.value, text_2.value, text_3.value, text_4.value];

    // 表のヘッダーの作成.
    generateTable(table, thread, tbody);

    // テキスト要素が2つ以上となる組み合わせを求める
    for (var num = 1; num < 16; num++) {
        if (is_two_or_more_elements_of_a_idea(num)) {
            row = generateConbinationRow(text_list, num);
            tbody.appendChild(row);
        }
    }
}

function generateTable(table, thread, tbody) {
    // [] 表のレイアウトを整える.
    table.appendChild(thread);
    table.appendChild(tbody);

    document.getElementById('body').appendChild(table);

    // headerの作成
    let row_1 = document.createElement('tr');
    let head_1 = document.createElement('th');
    let head_2 = document.createElement('th');

    head_1.innerHTML = '組み合わせ';
    head_2.innerHTML = '評価';

    row_1.appendChild(head_1);
    row_1.appendChild(head_2);
    thread.appendChild(row_1);
}

function generateConbinationRow(text_list, num) {
    // [ok] テキストボックスに入力した文字列を表に挿入する.
    // [ok] テキストボックスに入力した文字列の組み合わせを作る.
    // [] 少なくとも入力した文字列が2つ以上の組み合わせを作成する(num が2の冪乗でないとき).
        // [ok] 1つ以上の組み合わせを作成する(num が0でないとき).
        // [ok] 全ての組み合わせを作成する.
    separator = ', '

    let row = document.createElement('tr');
    let data_1 = document.createElement('td');
    let data_2 = document.createElement('td');

    // 組み合わせを作るテキスト, セパレータの繰り返し
    let idx_list = generateBinaryListFromDecimal(num);
    data_1.innerHTML = generateConbination(idx_list, text_list, separator);
    data_2.innerHTML = 'Hello';

    row.appendChild(data_1);
    row.appendChild(data_2);
    return row;
}

// インデックスリストから組み合わせを作る関数.
function generateConbination(idx_list, text_list, seperator) {
    let conbi = "";

    // テキスト要素とseparatorを結合させて, アイデアの候補を作成.
    for (var i = 0; i < idx_list.length; i++) {
        if (idx_list[i] === 1) {
            conbi += text_list[i] + seperator;
        }

    }
    return conbi;
}
// 数字を2進数に変換して, リストに格納する関数.
function generateBinaryListFromDecimal(num) {
    binary_list = [];
    
    // どのテキスト要素を選択するかを決める,判定リストを作成.
    // アイデアの候補を作成するため, リストの要素が1の場合にはその要素に対応する
    // テキスト要素を選択する.
    for (var i = 0; i < 4; i++) {
        flag = Math.trunc(num % 2);
        binary_list.unshift(flag);

        num = Math.trunc(num / 2);
    }
    return binary_list;
}

function is_two_or_more_elements_of_a_idea(num) {
    // num が２の冪乗である場合, numを2進数に変換すると, ある一つのビット値のみが1となる.
    // numの2進数化 → bit値が1の場合には, それに対応するテキスト要素をアイデア候補の作成のために使用.
    // → 現在, テキスト要素数が2以上となる場合を対象. → numが2の冪乗でない場合 
    // = numに対して底が2の対数を取ったときの値が整数ではない.
    flag = Number.isInteger(Math.log2(num));
    
    if (flag == 1) {
        return 0;
    }else {
        return 1;
    }
}