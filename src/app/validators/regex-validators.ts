export const validationPatters = {
  email:
    /^(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6}$/,
  lebanese_number:
    /^((?:\+961|00961)([1-9]|70|71|76|78|79|81)|(0[1-9]|70|71|76|78|79|81))[\s+-]*\d{6}$/,
};