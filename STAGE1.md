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

## J-4 - オブジェクト型 -
ファイル名：j-4.html
```html:j-4.html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <title>JavaScript J-4</title>
  </head>
  <body>
    <main>
      <h1>JavaScriptでのデータ型の種類と使い方2</h1>

      <h2>オブジェクト型</h2>

      <p>
       オブジェクト型には以下のものが含まれます。
      </p>

      <ul>
        <li>プリミティブ型以外のデータ</li>
        <li>オブジェクト</li>
        <li>配列</li>
        <li>関数</li>
        <li>正規表現</li>
        <li>Data など...</li>
      </ul>

      <p>
        基本的にプリミティブ型出ないものは、全てオブジェクト型です。<br>
        <br>
        オブジェクト型のデータに対し<code>typeof</code>演算子を使用すると、配列だろうがオブジェクトだろうが<code>object</code>と表示されます。<br>
        そのため、基本的に<code>typeof</code>演算子は対象のデータがプリミティブ型かオブジェクト型かを判別するために使用されます。<br>
        <br>
        オブジェクト型にもリテラルを持つものがあります。
      </p>

      <ul>
        <li>オブジェクトリテラル</li>
        <li>配列リテラル</li>
        <li>正規表現リテラル</li>
      </ul>

      <p>それぞれについて解説していきます。</p>

      <h3>オブジェクトリテラル</h3>

      <p>
        オブジェクトリテラルは、<code>{ key : value }</code>の形式で書かれます。<code>{}</code>は空のオブジェクトを示します。<br>
        例えば、objという名前のオブジェクトを生成し、keyという名前のプロパティを設定した場合、keyの値を取得するには<code>obj[key]</code>もしくは<code>obj.key</code>と書きます。
      </p>

      <script>
        // 変数宣言でオブジェクトを初期化、プロパティも設定するパターン
        const me = {name: "Natsumi",age: 33};
        
        // 変数meをコピーしてnameプロパティを書き換えるパターン
        // ...はスプレッド構文といって、配列やオブジェクトの中身を一個づつ取り出せる、みたいな機能
        // ↓みたいにコピーする際に使う
        let husband = { ...me,name: "Taiki"};

        // 変数宣言時は空のオブジェクトを生成し、あとからプロパティを設定するパターン
        let son = {};
        son.name = "Ritta";
        son.age = 2023 - 2019; // プロパティの値は計算結果でもOK

        // こちらも空のオブジェクトを生成する方法
        let daughter = new Object();
        const key1 = "name";

        // プロパティの名前を定数や変数にして、↓のように書くことでもプロパティを設定、更新できる
        daughter[key1] = "Wako";
        daughter["age"] = 1;

        // プロパティの値にオブジェクトを設定することも可能
        me.family = {
          husband: husband,
          son: son,
          daughter: daughter
        }

        // console.logにオブジェクトを渡すと、綺麗に表示してくれる
        console.log(me);

        const description_obj = `私の名前は${me.name}で、旦那の名前は${husband.name}です。年齢は${husband.age}です。\n息子の名前は${son["name"]}、娘の名前は${daughter[key1]}です。`
      </script>
      <button type="button" onclick="alert(description_obj)">オブジェクトリテラルの確認</button>

      <!-- ここから補足情報 アコーディオン形式で表示非表示を切り替えられるようにする-->
      <div calss="accordion">
        <div class="option">
          <input type="checkbox" id="toggle1" class="toggle">
          <label class="title" for="toggle1">オブジェクト指向プログラミングについて</label>
          <div class="content">
            <p>
              「オブジェクト」という言葉がいっぱい出てきて混乱しているかもしれません。上記のセクションではオブジェクト型のうち、オブジェクトを表すオブジェクトリテラルについて説明しました。うん、わからん。<br>
              Javascriptでは、「オブジェクト」という言葉の意味として広義の意味と狭義の意味があります。
            </p>
            <ul>
              <li>広義のオブジェクト・・・データの大元がObjectクラスのインスタンスであるもの。</li>
              <li>狭義のオブジェクト・・・一般的には「連想配列」と呼ばれるもの。JavaScriptでは{ key: value }の形で書かれるプロパティの集まり。</li>
            </ul>
            <p>
              「データ型の種類としてプリミティブ型とオブジェクト型の２つがある」← この「オブジェクト型」は広義の意味でのオブジェクトです。
              専門用語で言うと、基底クラスがObjectクラスであるクラスから作られたインスタンスのことをオブジェクト(広義)と呼びます。<br>
              基底クラスがObjectクラスのインスタンスであるものは全てオブジェクト型です。
            </p>
            <p>
              ここで、「クラス」と「インスタンス」について説明します。どちらもオブジェクト指向プログラミングにおける用語です。<br>
              クラスとは、データの集まりを構造として表した設計図で、インスタンスはその設計図を元に生成した実体です。JavaScript風にいうと、プロパティの名前だけ定義したのがクラス、そのプロパティに値をセットして変数に格納したのがインスタンスです。
            </p>
            <p>
              ObjectクラスというのはJavaScriptの仕様として用意されているもので、配列とか連想配列とか独自のデータ構造とかを使いたいな、って思った時に、それ用のリテラルを使うことで、勝手に実行環境がうまい具合にObjectクラスを使って操作してくれるようになっています。<br>
              なので、ここではObjectっていう名前の機能がなんかあって、それがプリミティブじゃないデータ全ての元になってるんだな、という解釈でいいです。<br>
              この「全ての元」というのを「基底」クラスといいます。JavaScriptで使用できる全てのクラスは、Objectクラスが基底クラスになっています。
            </p>
            <p>
              なおこの先、JavaScriptが(プログラミング言語として)様々な機能を開発者に使ってもらうために事前に用意した「クラス」がいっぱい出てきます。<br>
              例えば配列を表す<code>Arrayクラス</code>などがありますが、これらも大元はObjectクラスなので、オブジェクトと呼びます。Arrayクラスから作られたArrayオブジェクト、って感じですね。
              この言い方だと、下の狭義のオブジェクトとは違う、広義のオブジェクトとしての意味合いで使われる言葉となります。
            </p>
            <p>
              狭義の意味でのオブジェクトとしては、オブジェクトリテラルで書かれたものは一般的には「連想配列」と呼ばれるもので、これを狭義のオブジェクトといいます。<br>
              なので、中括弧<code>{}</code>で囲まれているデータがあったらオブジェクト(=連想配列)だ、と思ってもらえればOKです。<br>
              上記の話と合わせると狭義のオブジェクトとは、Objectクラスに自分の好きな名前のプロパティをつけて生成したインスタンス(JavaScriptが事前に用意したクラスじゃない自分独自のもの)のことで、
              広義のオブジェクトとは、狭義のものに加えてJavaScriptが用意したArrayクラスなどから生成したインスタンスも含めたもの、ということになります。
            </p>
          </div>
        </div>
      </div>
      <!-- アコーディオン終わり-->

      <h3>配列リテラル</h3>

      <p>
        配列リテラルは、<code>[1,2,3]</code>の形式で書かれます。<code>[]</code>は空の配列を示します。<br>
        このリテラルで作成されるのはArrayオブジェクトです。<br>
        要素の位置のことをインデックス(添字)といいます。インデックスは0始まりなので、配列の最後の要素のインデックスは<code>配列の全要素数 - 1</code>です。<br>
        <code>arr[n]</code>という構文で要素を取得出来ますが、この書き方で取得できるのはn+1番目の要素になります。<code>array = [1,2,3]</code>という配列から2がほしい場合は、<code>array[1]</code>と書きます。<br>
        このインデックスと要素数のズレは忘れないようにしましょう。<br>
        配列の要素として設定できる値は、プリミティブ型、オブジェクト型なんでも格納できます。複数のデータ型を混ぜても大丈夫です。ただ、配列というのは基本繰り返しで使いたいので、データ型は揃えといたほうが使い勝手はいいです。(あえて混ぜたいならOK)<br>
      </p>

      <p>
        JavaScriptでは、Arrayクラスとして便利なプロパティ、メソッドが用意されています。よく使うものは下記です。
      </p>

      <dl>
        <dt>lengthプロパティ</dt>
        <dd>配列の要素数が設定されています。長さとも言います。<code>array = [1,2,3]</code>であれば<code>array.length = 3</code>です。</dd>
        <dt>unshiftメソッド</dt>
        <dd>
          配列の最初に1つまたは複数の要素を追加します。メソッドの引数に追加したい値を指定します。複数をまとめて追加する場合は、カンマで区切ります。戻り値に追加後のlengthプロパティの値が返却されます。
          <br><code>array = [1,2,3]</code>であれば<code>len = array.unshift(-1,0)</code>とすることで<code>array = [-1,0,1,2,3]</code>となり、<code>len == 5</code>になります。
        </dd>
        <dt>pushメソッド</dt>
        <dd>
          配列の最後に1つまたは複数の要素を追加します。メソッドの引数に追加したい値を指定します。複数をまとめて追加する場合は、カンマで区切ります。戻り値に追加後のlengthプロパティの値が返却されます。
          <br><code>array = [1,2,3]</code>であれば<code>len = array.push(4,5,6)</code>とすることで<code>array = [1,2,3,4,5,6]</code>となり、<code>len == 6</code>になります。
        </dd>
        <dt>shiftメソッド</dt>
        <dd>
          配列の最初の要素を削除します。戻り値に削除後のlengthプロパティの値が返却されます。
          <br><code>array = [1,2,3]</code>であれば<code>len = array.shift()</code>とすることで<code>array = [2,3]</code>となり、<code>len == 2</code>になります。
        </dd>
        <dt>popメソッド</dt>
        <dd>
          配列の最後の要素を削除します。戻り値に削除後のlengthプロパティの値が返却されます。
          <br><code>array = [1,2,3]</code>であれば<code>len = array.pop()</code>とすることで<code>array = [1,2]</code>となり、<code>len == 2</code>になります。
        </dd>
        <dt>sliceメソッド</dt>
        <dd>
          第一引数で指定したインデックスから、第二引数で指定したインデックスまでの値をもつ配列を取得します。わかりにくいですが、第一引数以上、第二引数未満の配列を取得します。戻り値として新しい配列が返却されるので、元の配列は何も更新されません。
          <br><code>array = [1,2,3,4,5]</code>であれば<code>s1 = array.slice(1,3)</code>とすることで<code>s1 = [2,3]</code>となります。arrayに変化はありません。
        </dd>
        <dt>spliceメソッド</dt>
        <dd>
          sliceの逆で、指定した範囲の値を削除した配列を取得します。引数もslice同様で、元の配列は変更されません。
          <br><code>array = [1,2,3,4,5]</code>であれば<code>s2 = array.splice(1,3)</code>とすることで<code>s2 = [1,4,5]</code>となります。arrayに変化はありません。
        </dd>
      </dl>

      <script>
        // 空のArrayオブジェクトを生成
        let array1 = [];

        // こちらも空のArrayオブジェクトを生成する書き方
        const array2 = new Array();

        // 値を持った配列を作る場合は初期化で設定する
        let array3 = [1, 2, 3];

        // new演算子での初期化
        const array4 = new Array(1, 2, 3);

        console.log("↓↓↓初期化時の配列↓↓↓")
        console.log(array1, array2 ,array3, array4);

        // 配列の要素を追加する場合は、値が設定されていないインデックスを指定して値を代入すればOK
        // lengthプロパティで配列の長さを取得できるので、array3の最後の要素を取得する場合はlenght -1を指定する
        array1[0] = array3[array3.length - 1];

        // 配列に設定出来るデータは何でもOK。meは↑で宣言したもの。
        array1.unshift(-1,"てすと",me);

        // スプラウト構文を使うことで配列の中身を一つずつ取り出して引数にセットできる
        array1.push(...array4);

        // 空の配列を代入することで全要素削除出来る
        array3 = [];

        // array1の3番目の要素から5番目の要素までを取得(array1の中身は変わらない)
        array3 = array1.slice(2,5);

        console.log("↓↓↓更新後の配列↓↓↓")
        console.log(array1, array2 ,array3, array4);
      </script>

      <h3>正規表現リテラル</h3>

      <p>
        正規表現リテラルは、<code>/~~~/g</code>の形式で書かれます。~~の部分に正規表現パターンを記入します。正規表現の詳しい書き方は割愛しますが、例として、文字列が郵便番号の形式となっているかを調べる場合は、<br>
        <code>pattern = /^\d{3}-?\d{4}$/g;</code><br>
        と書くことで、変数patternに格納された正規表現リテラルを利用してチェック出来たりします。
      </p>

      <h2>プリミティブ型のラッパークラス</h2>

      <p>
        データ型にはプリミティブ型とオブジェクト型がある、という説明をずっとしてきましたが、実はJavaScriptで扱うデータは全てオブジェクトで出来ています。<br>
        未定義、存在がないことを示す<code>undefined</code>と<code>null</code>以外のプリミティブ型には全て「ラッパークラス」というクラスが用意されており、プリミティブ型の初期化時に内部的にラッパーオブジェクトが作成されています。<br>
        ラッパークラスは、string型なら<code>Stringクラス</code>、number型なら<code>Numberクラス</code>がラッパークラスになります。そのため、初期化時にnew演算子を使用して、<br>
        <br>
        <code>str = new String('文字列です。');</code><br>
        <br>
        と書くこともできます。ただ、わざわざこんな書き方をしなくてもいいようにプリミティブ型の説明で書いたような簡単な書き方で正常に動くようにしてくれているのです。<br>
        <br>
        前項で使用した<code>lengthプロパティ</code>ですが、じつはObjectクラスのプロパティです。JavaScriptのオブジェクトは全てObjectクラスを基底クラスとしているため、<br>
        <br>
        <code>len = "文字列です。".length</code><br>
        <br>
        と書いて、文字列の長さを取得できたりします。これは文字列を自動的にStringクラスのインスタンスに変換し、インスタンスプロパティであるlengthを取得しているのです。<br>
        この仕組みを理解していると、データに対して色々と操作できるので頭の片隅にでも入れておいてください。
      </p>

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

    /*アコーディオン全体*/
    .accordion {
        margin: 3em auto;
        max-width: 60vw;
    }

    /*チェックボックスを非表示*/
    .toggle {
        display: none;
    }

    /*ボックス全体の装飾*/
    .option {
        position: relative;
        margin-bottom: 1em;
    }

    .title, .content {
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        transform: translateZ(0);
        transition: all 0.3s;
    }

    .title {
        border: solid 1px #ccc;
        padding: 1em;
        display: block;
        color: #333;
        font-weight: bold;
    }

    /*右側のマーク*/
    .title::after,
    .title::before {
        content: "";
        position: absolute;
        right: 1.25em;
        top: 1.25em;
        width: 2px;
        height: 0.75em;
        background-color: #999;
        transition: all 0.3s;
    }

    /*右側のマーク*/
    .title::after {
        transform: rotate(90deg);
    }

    /*文章を非表示にする*/
    .content {
        max-height: 0;
        overflow: hidden;
        border: solid 1px #ccc;
        padding: 0;
    }

    /*文章の装飾*/
    .content p + ul + li {
        margin: 0;
        padding: 0.5em 1em 1em;
        font-size: 0.9em;
        line-height: 1.5;
    }

    /*クリックすると要素が開く*/
    .toggle:checked + .title + .content {
        max-height: 500px;
        overflow: scroll;
        transition: all 1.5s;
    }

    /* スクロールバーを非表示にする */
    .content::-webkit-scrollbar {
      display: none;
    }

    .toggle:checked + .title::before {
        transform: rotate(90deg) !important;
    }  
  </style>
</html>
```