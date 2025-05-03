const tw = (strings: TemplateStringsArray, ...values: never[]): string =>
    String.raw({ raw: strings }, ...values);

export { tw };
