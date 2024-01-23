import { type } from "@testing-library/user-event/dist/type";

//渡すべき引数を指定してあげる
type TodoType = {
  title: string;
  id: number;
  //「？」をつけて、あってもなくてもいいとする
  comleted?: boolean;
};

//受け取る引数(props)の型はTodoType
export const Todo = (props: TodoType) => {
  //初期値設定　「comleted」は存在有無を問わないから
  const { title, id, comleted = false } = props;
  console.log(comleted);
  const message = comleted ? "[完了]" : "[未完了]";
  return (
    <>
      <p>{`${message}</p>${title}(ユーザー：${id})`}</p>
    </>
  );
};
