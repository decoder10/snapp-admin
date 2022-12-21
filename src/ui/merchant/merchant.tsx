import React, { FC } from 'react';
//
// type Item = {
//   pos: number;
//   startPos: number;
// };
//
// let positioner: any;
// let items: Item[];
//
// function generateRandom(min = 1, max = 600) {
//   // find diff
//   const difference = max - min;
//
//   // generate random number
//   let rand = Math.random();
//
//   // multiply with difference
//   rand = Math.floor(rand * difference);
//
//   // add with min value
//   rand = rand + min;
//
//   return rand;
// }
//
// const createArr = (count: number): Item[] => {
//   const arr = [];
//   for (let i = 0; i < count; i++) {
//     const obj: Item = { pos: -generateRandom() * 10, startPos: -generateRandom() * 10 };
//     arr.push(obj);
//   }
//   return arr;
// };
//
// const reset = (item: Item, i: number): number => {
//   if ((item?.pos as number) < 1200) {
//     const x = i % 2 === 0 ? 10 : 5;
//     item.pos += x as number;
//   } else {
//     item.pos = item.startPos;
//   }
//   return item.pos as number;
// };

const Merchant: FC = () => {
  // const [isRun, setIsRun] = useState<boolean>(false);
  // const [linePosition, setLinePosition] = useState<number>(0);
  // const matrix = {
  //   width: 1830,
  //   height: 970,
  //   background: 'black',
  //   overflow: 'hidden',
  // };
  //
  // const runner = (): void => {
  //   if (isRun) {
  //     clearInterval(positioner);
  //   } else {
  //     positioner = setInterval(() => {
  //       setLinePosition(prev => prev + 10);
  //     }, 10);
  //   }
  //   setIsRun(!isRun);
  // };
  //
  // useEffect(() => {
  //   if (linePosition > 1200) {
  //     // items = createArr(300);
  //     setLinePosition(-generateRandom());
  //   }
  // }, [linePosition]);
  //
  // useEffect(() => {
  //   runner();
  //   items = createArr(200);
  //   console.log(33, items);
  // }, []);
  //
  // return (
  //   <div style={{ ...matrix, ...{ position: 'relative' } }}>
  //     {items?.length &&
  //       items.map((item, index) => {
  //         return (
  //           <div
  //             style={{
  //               position: 'absolute',
  //               top: reset(item, index),
  //               left: index * 10,
  //               color: 'green',
  //               writingMode: 'vertical-rl',
  //               textOrientation: 'upright',
  //               fontWeight: 700,
  //               fontSize: 25,
  //               opacity: 0.8,
  //               // transition: 'all 0.1s linear',
  //             }}
  //           >
  //             <span style={{ color: 'green' }}>snapp</span>.^..%........*.
  //             <span style={{ color: 'green' }}>snapp</span>.$.
  //             <span style={{ color: 'green' }}>snapp</span>
  //             <span style={{ opacity: 0.8, color: 'greenyellow' }}>{generateRandom()}</span>.#.
  //           </div>
  //         );
  //       })}
  //   </div>
  // );
  return <div>Merchant</div>;
};

export default Merchant;
