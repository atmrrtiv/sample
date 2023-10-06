

<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>サンプル</title>
  
  
  
<script>



function clickBtn0(){



//セレクトの結果を取得＞関数に格納＞正誤判定＞正誤を関数に格納（正答率も）＞出力

//選択肢で選んだ回答　随時追加
var anslis = [
String(document.form1.q1.selectedIndex),
String(document.form1.q2.selectedIndex)
]

//問題の正解 随時追加
var correct = [1,3];

var seigo="";
var scr=0;

for (let i = 0; i < anslis.length; i++) {
let j=i+1;
if (anslis[i] == correct[i]) {
scr=scr+1
 seigo =seigo+ '問'+j+ ' 正解<br>'  ;
}else{
    seigo =seigo + '問'+j+ ' 不正解<br>';
};
}


scr= scr/anslis.length *100;

seigo="正答率 "+scr+"%"+" <br>"+ seigo ;




	document.getElementById("span0").innerHTML= seigo;
}


//ひたすらボタンを置いていく

function clickBtn1(){
if(String(document.form1.q1.selectedIndex)==0){
document.getElementById("span1").innerHTML=
"回答を選んでください"
}else{
document.getElementById("span1").innerHTML=
 "答えと解説";
}
}

function clickBtn2(){
if(String(document.form1.q2.selectedIndex)==0){
document.getElementById("span2").innerHTML=
"回答を選んでください"
}else{
document.getElementById("span2").innerHTML=
 "答えと解説";
}
}




</script>  

  
</head>
<body>
<h1>タイトル</h1>
<form name="form1">
<h3>■問1</h3>
<P>誕生日</P>
	<select name="q1">
	    <option >未選択</option>
	    <option >7月26日</option>
	    <option >8月1日</option>
	    <option >2月10日</option>	
	</select>
<br><br>
<input type="button" value="答え" onclick="clickBtn1()"/>
<p> <span id="span1"></span></p>
<br>


<h3>■問2</h3>
<P>楽器</P>	
	<select name="q2">
	    <option >未選択</option>
	    <option >ラッパ</option>
	    <option >フルート</option>
	    <option >サックス</option>
	    <option >トロンボーン</option>	    
	</select>	
<br><br>
<input type="button" value="答え" onclick="clickBtn2()"/>
<p> <span id="span2"></span></p>
</form>
<br>
<input type="button" value="結果を見る" onclick="clickBtn0()"/>



<p>結果 <br> <span id="span0"></span></p>


<footer>
  <address>
    このサイトに関するお問い合わせ先： <br>
    <a href="a">ヘッダーリンク</a>
  </address>

</footer>


</body>
</html>


