import { Inter } from "next/font/google";
import { useSelector } from "react-redux";
import { RootState, store } from "stores/store";

const inter = Inter({ subsets: ["latin"] });
const { dispatch } = store;
export default function Home() {
  const count = useSelector((r: RootState) => r.count);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>{count}</div>
      <button onClick={() => {
        dispatch.count.increment(count + 1)
      }}>click</button>
    </main>
  );
}
