// Never
// While we can specify the return type as void but in reality the return type below should be never
const generateError = (message: string, code: number): never => {
  throw { message: message, errorCode: code };
};

generateError('Error', 401);

const result = generateError('Error', 401);
// Nothing will be shown in console as it does not print nor return anything
console.log(result);
