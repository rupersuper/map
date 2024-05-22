import ErrorRepository from "../app";

test("Проверка получения кода ошибки #404", () => {
  const errorRepository = new ErrorRepository();
  errorRepository.errors.set(404, "Not Found");
  expect(errorRepository.translate(404)).toBe("Not Found");
});

test("Проверка получения кода ошибки #200", () => {
  const errorRepository = new ErrorRepository();
  errorRepository.errors.set(200, "OK");
  expect(errorRepository.translate(200)).toBe("OK");
});

test("Проверка отсутствия описания ошибки", () => {
  const errorRepository = new ErrorRepository();
  expect(errorRepository.translate(418)).toBe("Unknown error");
});
