# fancySearch

## Section 1 - Command Description

`fancySearch` is a simplified command-line tool built with Node.js. It combines ideas from the Linux `grep` and `head` commands. The tool searches a text file for a word and displays only the first requested number of matching lines. The search is not affected by uppercase or lowercase letters.

### How to Run It

The command uses this format:

```bash
node fancysearch.js <filename> <searchWord> <numberOfLines>
```

Example:

```bash
node fancysearch.js sample.txt error 2
```

This example searches `sample.txt` for lines containing the word `error` and displays the first two matches.

### Commands Combined

The tool combines simplified versions of:

- `grep`, which searches a file for matching text.
- `head`, which displays only the first requested number of results.

The program also checks for missing arguments, a missing file, and searches with no matching lines.

## Section 2 - AI-Assisted Programming

I asked AI to suggest test scenarios and possible edge cases for my command. AI suggested testing a normal search with multiple matches, a search with no matches, a missing file, and a missing command-line argument.

AI helped me understand error messages and identify where changes were needed. For example, it explained that underscores left in the starter code were being treated as undefined variables. It also helped me understand that JavaScript belongs in the code editor while the `node` command belongs in the terminal. During testing, AI helped me add clearer messages for a missing file, no matching lines, and missing input.

I had to work independently by creating the files in Codio, entering the changes, running each command, checking the actual output, and taking the required screenshots. I also had to make sure the filename and command syntax matched throughout the project.

One thing AI initially got wrong or missed was that the first starter version did not include all of the required edge-case handling. It also did not make the difference between the code editor and terminal clear enough at first. I found those problems while testing and then made the needed changes in Codio.
