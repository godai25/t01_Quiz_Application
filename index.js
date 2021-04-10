// クイズ オブジェクト生成
const quiz = [
  {
    question :'ゲーム市場、最も売れたゲーム機の次の内どれ？',
    answers  : [
      'スーパーファミコン',
      'プレイステーション2',
      'ニンテンドースイッチ',
      'ニンテンドーDS'
    ],
    correct : 'ニンテンドーDS'
  },
  {
    question :'糸井重里が企画に関わった、任天堂の看板ゲームと言えば？',
    answers  : [
      'MOTHER2',
      'スーパーマリオブラザーズ3',
      'スーパードンキーコング',
      '星のカービィ'
    ],
    correct : 'MOTHER2'
  },
  {
    question :'ファイナルファンタジーⅣの主人公の名前は？',
    answers  : [
      'フリオニール',
      'クラウド',
      'ディーダ',
      'セシル'
    ],
    correct : 'セシル'
  }
];
const quizLength = quiz.length;
let quizIndex = 0;

// 正解数
let score = 0;  

// ボタンオブジェクトを配列で生成
const $button = document.getElementsByTagName('button');
const btnLength = $button.length;

// クイズの問題文をセットする
const setupQuiz = () =>{
  // 表示
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  // ボタンを配列に入れる
  let btnIndex = 0;
  while(btnIndex < btnLength){
    $button[btnIndex].textContent = quiz[quizIndex].answers[btnIndex];
    btnIndex++;
  }
}

setupQuiz();

const clickHandler = (e) =>{
  if (quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解');
  }

  // 次の問題へ
  quizIndex++;
  if (quizIndex < quizLength){
    // 問題数があればこちらを実行
    setupQuiz();
  } else {
    // 問題数がなければこちらを実行
    window.alert('終了! あなたの正解数は'+score+ '/'+ quizLength + 'です！');
  }

}

// ボタンをクリックしたら正誤判定
btnIndex = 0;
while(btnIndex < btnLength){
  $button[btnIndex].addEventListener('click', (e)=>{
    clickHandler(e);
  });
  btnIndex++;
}

