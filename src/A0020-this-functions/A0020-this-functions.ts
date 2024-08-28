//primeito paramatro dessa função não é um argumento, mas sim um this.
export function funcao(this: Date, name: string, age: number): void {
  console.log(this);
  console.log(name, age);
}

// .call pertmite executarmos nosso this.
funcao.call(new Date(), 'Luiz', 30);
funcao.apply(new Date(), ['Luiz', 30]);
