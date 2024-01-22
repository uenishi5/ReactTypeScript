export const Practices4 = () => {
  const onClickPractice = () => {
    calcTotalFee(100);
  };

  //「const calcTotalFee = (num) => {」とすると、暗黙的な宣言を許可しないためエラーが出る
  //tsconfig.jsonで「"noImplicitAny":true」と宣言すると、暗黙的変換を許可する
  const calcTotalFee = (num: number) => {
    const total = num * 1.8;
    alert(total);
  };
  // "strict": true,
  return (
    <div>
      <p>練習問題：設定ファイルをイジる</p>
      <button onClick={onClickPractice}>練習4を実行</button>
    </div>
  );
};
