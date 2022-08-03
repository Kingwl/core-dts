interface CodePointInfo {
  codePoint: number;
  position: number;
}

interface String {
  codePoints(): Iterable<CodePointInfo>;
}
