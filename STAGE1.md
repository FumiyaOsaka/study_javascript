# STAGE1
STAGE1ではJavascriptの基本的な構文について学びます。一部アルゴリズムの復習も兼ねてます。  
下記に書いてあるソースコードを模写して、javascriptはjsフォルダに、htmlはルートフォルダに格納してコミットしてください。  
その他必要なCSSや画像ファイルなど（これらの付属ファイルを総称してアセットと呼びます）は各フォルダに格納してください。

## J-1 - Hello World! -
ファイル名：j-1.html
```html:j-1.html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <title>JavaScript J-1</title>
  </head>
  <body>
    <p>
      この下に JavaScript を使って文字列を出力します。    
    </p>
    <script>
      // ←こう書くと、この行はコメントになります。
      // scriptタグ内はJavaScriptの構文として解釈されるので、HTMLタグを書いてもエラーになります。
      // ↓の文は、()内の文字をHTMLファイル内に記入する、という命令文です。
      document.write("<p>Hello World!</p>");    
    </script>
  </body>
</html>
```

## J-2 - 別ファイルへの記述 -
ファイル名：j-2.js
```js:j-2.js
// constは「定数」を宣言するときのキーワードです。
const JS_TEXT = "これは外部javascriptファイルで定義した定数です。";

// letは「変数」を宣言するときのキーワードです。
let str1 = "これは";

let str2 = "外部javascriptファイルで定義した";

let str3 = "変数です。";

// 文字列同士を結合したい場合は"+"を使います。
let var_text = str1 + str2 + str3;

// console.logは、このjavascriptが実行された環境に文字を出力する命令文です。
console.log(var_text); 
```

ファイル名：j-2.html
```html:j-2.html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <title>JavaScript J-2</title>
    <!-- ↓のscriptタグで作成したj-2.jsファイルを読み込んでいます。 -->
    <script src="./js/J-2.js"></script>
    <script>
      const HTML_TEXT = "これはHTMLで定義した定数です。"
    </script>
  </head>
  <body>
    <p>
      JavascriptのログはF12を押してディベロッパーツールから確認します。
    </p>
    <script>
      console.log(HTML_TEXT);
      console.log(JS_TEXT);
    </script>
  </body>
</html>
```

## J-3 - さまざまなデータ型 - 
ファイル名：j-3.html
```html:j-3.html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <title>JavaScript J-3</title>
  </head>
  <body>
    <main>
      <h1>JavaScriptでのデータ型の種類と使い方</h1>
      <h2>プリミティブ型とオブジェクト型</h2>
      <p>
        Javascriptで扱うデータはプリミティブ型とオブジェクト型があります。<br>
        今回はプリミティブ型を学習します。プリミティブとは「基本」といった意味があり、数値や真偽値といったものです。<br>
        プリミティブ型には以下7種類の型があります。
      </p>
      <ul>
        <li>Boolean型</li>
        <li>Number型</li>
        <li>BigInt型</li>
        <li>String型</li>
        <li>Symbol型</li>
        <li>Null型</li>
        <li>Undefined型</li>
      </ul>
      <h2>リテラル</h2>
      <p>
        「リテラル(Literal)」とは、プログラム上で数値や文字列など、データの値を直接記述できるように構文として定義されたものです。<br>
        Symbol型とUndefined型以外のプリミティブ型には、リテラルが用意されています。<br><br>
        他のプログラム言語では、変数に値を格納する時に、この変数は〇〇型だよ、という宣言を書く必要があるのですが、JavaScriptは動的型付け言語であり、
        変数に格納する値がどのリテラルで記述されているかで自動的に型を決める、という動きをします。
      </p>
      <h3>Boolean型</h3>
      <p>
        Boolean型とは、<code>true</code>と<code>false</code>の2つの真偽値を扱うデータ型です。<br>
        <code>true</code>が「真」を表すリテラル、<code>false</code>が「偽」を表すリテラルです。<br>
      </p>
      <script>
        const sin = true;
        const gi = false;
        // これからtypeof演算子というのを使います。typeof演算子とは、対象のデータ型を確認するために用意された機能です。
      </script>
      <button type="button" onclick="alert('変数sinの値は' + sin + 'で、データ型は' + typeof sin + 'です。')">Boolean型の確認</button>
      <h3>Number型</h3>
      <p>
        Number型とは、数値を扱うためのデータ型です。JavaScriptのNumber型では、整数も少数も同じNumber型として扱われます。<br>
        扱うことの出来る最大値は2の53乗-1です。これは、Number型が64bitの浮動小数点型フォーマットであるからで、52bit分を数値データとし、残りを符号と指数部として使うためです。<br>
        数値同士を四則演算用の演算子(+,-,*,/)で繋ぐことで計算をすることが出来ますが、小数点の出る割り算は10進数の計算結果と違う場合があるので、誤差が許容できない場合は他の方法で頑張りましょう。(詳しくは浮動小数点の勉強をしてください)
      </p>
      <script>
        const num1 = 2134;
        const num2 = 89083289;
        const multipul = num1 * num2;
      </script>
      <button type="button" onclick="alert('数値1は' + num1 + 'で、数値2は' + num2 + '、掛け算の結果は、' + multipul + '、データ型は' + typeof multipul + 'です。')">Number型の確認</button>
      <h3>BigInt型</h3>
      <p>
        BigInt型はNumber型で取り扱うことの出来ない大きな数値を扱うためのデータ型です。ES2020で追加されました。Number型との互換性はなく、相互に代入や計算、等値比較などは行うことが出来ません。<br>
        <code>200n</code>などのように数字の後ろに<code>n</code>をつけて表現する数値リテラルがあります。
      </p>
      <script>
        const big_num = 300n;
      </script>
      <button type="button" onclick="alert('変数big_numの値は' + big_num + 'で、データ型は' + typeof big_num + 'です。')">BigInt型の確認</button>
      <h3>String型</h3>
      <p>
        テキストを表す連続した文字である文字列を扱うためのデータ型です。<br>
        <code>"Natsumi"</code>のように、<code>'(シングルクオーテーション)</code>もしくは<code>"(ダブルクオーテーション)</code> で囲んだ範囲が文字列リテラルとなります。<br>
        改行を含む場合は<code>`(バッククオーテーション)</code>で囲みます。バッククオートはテンプレートリテラルと呼ばれ、<code>${}</code>の中にJavaScriptの式や変数を書くことで値が展開出来たりします。非常に便利なので覚えましょう。
      </p>
      <script>
        const str1 = "ぶどう";
        const str2 = 'りんご';
        const str_message = `変数str1は${str1}で、変数str2は${str2}です。\n変数str1のデータ型は${typeof str1}です。`;
      </script>
      <button type="button" onclick="alert(str_message)">String型の確認</button>
      <h3>Symbol型</h3>
      <p>
        Symbol型とは、「シンボル値」という固有の識別子を表現する値で、オブジェクトのプロパティキーとして使われたりするそうです。<br>
        あまり使わないので、こういうものがあるのか、程度でいいと思います。
      </p>
      <h3>Null型</h3>
      <p>
        Null型とは、値が存在しないことを意味するデータ型です。Null型のリテラルは<code>null</code>です。<br>
        ただ、nullをtypeof演算子で調べるとObjectとなります。これは歴史経緯からなるバグだそうです。なので、nullであるかどうかは条件分岐などでの比較でしか判定できません。<br>
        JavaScriptでは後述のUndefinedのほうが、存在しない値として利用されることが多いですが、たまに見る（なにかの処理の結果、nullになるなど）ので、覚えておきましょう。
      </p>
      <script>
        const null_obj = null;
        const null_message = `変数null_objの値は${null_obj}で、データ型は${typeof null_obj}です。`;
      </script>
      <button type="button" onclick="alert(null_message)">Null型の確認</button>
      <h3>Undefined型</h3>
      <p>
        Undefined型とは、値が未定義であることを意味するデータ型です。宣言のみが行われた変数(値を代入しないで名前だけつけた状態)や、オブジェクト内の存在しないプロパティへアクセスした場合などに割り当てられます。<br>
        <code>undefined</code>というリテラルは存在しません。大抵はtypeof演算子の結果か、エラーメッセージでしか見ることはないです。(自分で書くことはない)
      </p>
      <script>
        let new_object;
        const unde_message = `変数new_objectは${typeof new_object}です。`;
      </script>
      <button type="button" onclick="alert(unde_message)">Undefined型の確認</button>
    </main>
  </body>
  <style>
    * {
      padding: 0.5em;
    }
    html {
      background-color: beige;
    }
    body {
      background-color: white;
      max-width: 820px;
      width: calc(100% - 200px);
      margin: 0 auto;
    }
    h1 {
      text-align: center;
    }
    ul {
      padding-left: 2em;
    }
    li {
      padding: 0;
    }
    code {
      color: blue;
      font-size: larger;
    }
  </style>
</html>
```