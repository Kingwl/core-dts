function myTag(strings: TemplateStringsArray, ...values: string[]) {
  return String.cooked(
    strings,
    ...values.map((value) => String(value).toUpperCase()),
  );
}

myTag`hello ${'world'}`; // "hello WORLD"
