export const Practices3 = () => {
  const onClickPractice = () => {
    alert(calcTotalFee(100));
  };

  // 「: number」は、number型を返却する
  const calcTotalFee = (num: number): number => {
    let total: number = num * 1.8;
    return total;
  };
  return (
    <div>
      <p>練習問題：変数の型指定</p>
      <button onClick={onClickPractice}>練習3を実行</button>
    </div>
  );
};
