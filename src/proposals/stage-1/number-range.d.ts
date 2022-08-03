interface RangeOptions<T extends number | bigint> {
  step?: T;
  inclusive: boolean;
}

interface NumberConstructor {
  range(
    start: number,
    end: number,
    options?: RangeOptions<number>,
  ): Iterable<number>;
  range(start: number, end: number, step?: number): Iterable<number>;
}

interface BigIntConstructor {
  range(
    start: bigint,
    end: bigint,
    options?: RangeOptions<bigint>,
  ): Iterable<bigint>;
  range(start: bigint, end: bigint, step?: bigint): Iterable<bigint>;
}
