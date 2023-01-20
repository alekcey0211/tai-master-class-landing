export const getJson = async (filePath: string) => {
  return JSON.parse(await Deno.readTextFile(filePath));
};

export const setJson = async (filePath: string, data: string) => {
  await Deno.writeTextFile(filePath, data);
};
