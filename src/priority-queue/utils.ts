export interface PriorityQueueObject<T> {
  priority: number;
  value: T;
}

export function getComparatorFunction<T>() {
  return function finalComparatorFunction(
    x: PriorityQueueObject<T>,
    y: PriorityQueueObject<T>,
  ) {
    return x.priority - y.priority;
  };
}

// export function getUpdatedComparatorFunction<T>(
//   comparatorFunction?: (x: T, y: T) => number,
// ) {
//   let updatedComparatorFunction: (x: T, y: T) => number;
//   if (!comparatorFunction) {
//     updatedComparatorFunction = function (x: T, y: T): number {
//       return ((x as unknown) as number) - ((y as unknown) as number);
//     };
//   } else {
//     updatedComparatorFunction = comparatorFunction;
//   }

//   return function finalComparatorFunction(
//     x: PriorityQueueObject<T>,
//     y: PriorityQueueObject<T>,
//   ): number {
//     return updatedComparatorFunction(x.priority, y.priority);
//   };
// }
