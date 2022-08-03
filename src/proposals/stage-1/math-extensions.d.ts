interface Math {
  readonly DEG_PER_RAD: number;
  readonly RAD_PER_DEG: number;
  clamp(x: number, lower: number, upper: number): number;
  degrees(radians: number): number;
  fscale(
    x: number,
    inLow: number,
    inHigh: number,
    outLow: number,
    outHigh: number,
  ): number;
  radians(degrees: number): number;
  scale(
    x: number,
    inLow: number,
    inHigh: number,
    outLow: number,
    outHigh: number,
  ): number;
}
