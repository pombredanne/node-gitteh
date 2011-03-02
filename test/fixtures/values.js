module.exports.REPO_PATH = require("path").join(__dirname, "gitrepo");

module.exports.FIRST_COMMIT = {
	id: "ca1f3314acd24c4551da8c26adaf562272db1d19",
	message: "First commit.\n",
	shortMessage: "First commit.",
	authorName: "Sam Day",
	authorEmail: "sam.c.day@gmail.com",
	committerName: "Sam Day",
	committerEmail: "sam.c.day@gmail.com",
	time: new Date("Mon Feb 28 14:59:45 2011 +1000"),
	parents: [],
	tree: "3020f22e8b22650f524523710f3c211f214f8e75"
};

module.exports.SECOND_COMMIT = {
	id: "91ef0fd7ea773461d4d57dc1e5675a9bc83d6081",
	message: "Second commit, woohoo\\!\n",
	shortMessage: "Second commit, woohoo\\!",
	authorName: "Sam Day",
	authorEmail: "sam.c.day@gmail.com",
	committerName: "Sam Day",
	committerEmail: "sam.c.day@gmail.com",
	time: new Date("Wed Mar 2 08:57:26 2011 +1000"),
	parents: ["ca1f3314acd24c4551da8c26adaf562272db1d19"],
	tree: "6a670a961ede0d6965e5326797e074d26ecee235"
};

module.exports.THIRD_COMMIT = {
	id: "46d47fb28223a7f29df5d2072eb05e380985a477",
	message: "Third commit.\nThis one spans\na few lines.\n",
	shortMessage: "Third commit.",
	authorName: "Sam Day",
	authorEmail: "sam.c.day@gmail.com",
	committerName: "Sam Day",
	committerEmail: "sam.c.day@gmail.com",
	time: new Date("Wed Mar 2 09:31:08 2011 +1000"),
	parents: ["91ef0fd7ea773461d4d57dc1e5675a9bc83d6081"],
	tree: "6cd2ee6530e7f104040569bd7bf516f90e86e747"
};

module.exports.FOURTH_COMMIT = {
	id: "bae21d9853dc927b3784420144afd9082d768024",
	message: "Fourth commit.\n",
	shortMessage: "Fourth commit.",
	authorName: "Sam Day",
	authorEmail: "sam.c.day@gmail.com",
	committerName: "Sam Day",
	committerEmail: "sam.c.day@gmail.com",
	time: new Date("Wed Mar 2 09:31:45 2011 +1000"),
	parents: ["91ef0fd7ea773461d4d57dc1e5675a9bc83d6081"],
	tree: "e51d4f52d0b38a9052c6cebaa1b49a0b75e8d82e"
};

module.exports.FIFTH_COMMIT = {
	id: "38042ca303189a2e6955b92d53aab7d642cc82c2",
	message: "Merge branch 'test'\n",
	shortMessage: "Merge branch 'test'",
	authorName: "Sam Day",
	authorEmail: "sam.c.day@gmail.com",
	committerName: "Sam Day",
	committerEmail: "sam.c.day@gmail.com",
	time: new Date("Wed Mar 2 09:31:57 2011 +1000"),
	parents: ["46d47fb28223a7f29df5d2072eb05e380985a477", "bae21d9853dc927b3784420144afd9082d768024"],
	tree: "98695ebf529d456e0e2cbf16ff6e06b0bfe3e843"
};
module.exports.FIRST_COMMIT_TREE = {
	id: "3020f22e8b22650f524523710f3c211f214f8e75",
	
	entries: [
		{
			filename: "file.txt",
			attributes: 33188 // Note, this is 100644 in octal.
		}
	]
}