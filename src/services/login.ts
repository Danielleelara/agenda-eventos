type Request = {
  email: string;
  password: string;
};

export const signIn = async ({
  email,
  password,
}: Request): Promise<{ token: string }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email !== "student@ae.com" || password != "123456") {
        return reject(new Error("Usuário inválido"));
      }
      resolve({
        token: "ABC",
      });
    }, 3000);
  });
};
