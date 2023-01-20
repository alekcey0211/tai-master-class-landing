export const getJson = async (filePath: string) => {
  return JSON.parse(await Deno.readTextFile(filePath));
};
