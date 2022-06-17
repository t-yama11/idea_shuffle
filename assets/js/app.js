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

    const text_list = [text_1.value, text_2.value, text_3.value, text_4.value];

    generateTable(table, thread, tbody);

    let num = 3;
    row = generateConbinationRow(text_list, num);
    tbody.appendChild(row);
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
    // [] 少なくとも入力した文字列が2つ以上の組み合わせを対象とする.
        // [] 1つ以上の組み合わせを対象とする.
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

// インデックスリストから組み合わせを作る関数
function generateConbination(idx_list, text_list, seperator) {
    let conbi = "";

    for (var i = 0; i < idx_list.length; i++) {
        if (idx_list[i] == 1) {
            conbi += text_list[i] + seperator;
        }

    }
    return conbi;
}
// 数字を2進数に変換して, リストに格納する関数
function generateBinaryListFromDecimal(num) {
    binary_list = [];

    for (var i = 0; i < 4; i++) {
        flag = num % 2;
        binary_list.unshift(flag);

        num = num / 2;
    }

    return binary_list;
}