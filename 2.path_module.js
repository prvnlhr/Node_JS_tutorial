const path = require("path");

//|> Joins one or more path segments into a single path, using the appropriate platform-specific separator (e.g., "\" on Windows and "/" on Unix-like systems).
const filePath = path.join("/folder1", "/folder2", "/folder3/", "/file.txt"); // \folder1\folder2\folder3\file.txt

const absolutePath = path.resolve("./folder1/folder2/folder3/file.txt"); //D:\Web_development\Projects\node-js-tutorials\folder1\folder2\folder3\file.txt

const basename = path.basename("./folder1/folder2/folder3/file.txt"); //file.txt;

const dirName = path.dirname("./folder1/folder2/folder3/file.txt"); // ./folder1/folder2/folder3

const extName = path.extname("./folder1/folder2/folder3/file.txt"); // .txt

//|> It resolves .. and . segments and removes any redundant slashes.
const normalizedPath1 = path.normalize("./folder1///folder2/folder3/file.txt"); // folder1\folder2\folder3\file.txt
const normalizedPath2 = path.normalize("./folder1/folder2/../folder3/file.txt"); // folder1\folder3\file.txt

const relativePath = path.relative(
  __dirname,
  "./folder1/folder2/folder3/file.txt"
); // folder1\folder2\folder3\file.txt

// |> Returns an object from a path string - the opposite of format().
const parsedPath = path.parse("./folder1/folder2/folder3/file.txt");

/*{
  root: '',
  dir: './folder1/folder2/folder3',
  base: 'file.txt',
  ext: '.txt',
  name: 'file'
}
*/
