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
