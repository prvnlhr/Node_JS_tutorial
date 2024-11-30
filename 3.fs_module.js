const fs = require("fs");

//|> Reading file : This will read the file synchronously
const content1 = fs.readFileSync("./folder1/folder2/folder3/file.txt", "utf8");

// |> Writing File : This will read the file synchronously

fs.writeFileSync("./folder1/folder2/folder3/file.txt", "New written text");

//|> To append to existing file's content
fs.appendFileSync(
  "./folder1/folder2/folder3/file.txt",
  " " + " newly appended text"
);

//|> working with dir'ss

//|> 1. make new dir. , fs.mkdir or fs.mkdirSync
fs.mkdir("./new_dir", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("dir created successfully");
  }
});

// |> 2. remove dir.  , fs.rmdir or fs.rmdirSync
fs.rmdir("./new_dir", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("dir created successfully");
  }
});
