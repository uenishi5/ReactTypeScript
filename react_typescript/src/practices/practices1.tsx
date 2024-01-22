export const Practices1 = () => {
  const onClickPractice = () => {
    calcTotalFee(100);
  };

  const calcTotalFee = (num: number) => {
    const total = num * 1.8;
    alert(total);
  };
  return (
    <div>
      <p>練習問題：引数の型指定</p>
      <button onClick={onClickPractice}>練習1を実行</button>
    </div>
  );
};
