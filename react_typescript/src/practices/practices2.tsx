export const Practices2 = () => {
  const onClickPractice = () => {
    alert(calcTotalFee(100));
  };

  // 「: number」は、number型を返却する
  const calcTotalFee = (num: number) : number => {
    const total = num * 1.8;
    return total;
  };
  return (
    <div>
      <p>練習問題：返却値の型指定</p>
      <button onClick={onClickPractice}>練習2を実行</button>
    </div>
  );
};
