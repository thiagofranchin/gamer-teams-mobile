export class AppError {
  message: string;

  // Constructor roda no momento que a classe é instanciada
  constructor(message: string) {
    this.message = message;
  }
}
