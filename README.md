# Board game for IKT
A game based on multiverse time travel, with each board affecting the main one.

## How to add changes
### 1. Add the changes to the correct directory
```
./
├── (+)* ideas/
│   └── (+) gameplay/
│       └── (+) idea.txt
├── website/
│   ├── src/
│   │   ├── css/
│   │   │   ├── default.js
│   │   │   └── index.js
│   │   └── js/
│   │       └── mobile.js
│   ├── index.html
│   └── netlify.toml
├── .gitignore
└── README.md
```
<sub>*Directories and files marked with (+) are the new ones, used for the example.</sub>
<br>

### 2. Add the files/directories you changed
This can be done automatically in GitHub Desktop, or using the following command(s):
1. Add each manually (in case you don't want to commit all changes)
```bash
git add ideas/ 
```
2. Add all changes
```bash
git add --all
```

### 3. Write a correct commit message.
Make a short but precise description of what you've done. For example: <br>
"```Created ideas/gameplay, added new idea.```"

### 4. (Optional) Write a longer commit message.
If available on GitHub Desktop, or in another way, you can write a longer commit message as a secondary field. Make it as detailed as possible without making it overly long, like a list of changes.
```
- Added 'ideas' directory
- Added 'ideas/gameplay' directory
- Added 'idea.txt' to 'ideas/gameplay'
- Edited 'idea.txt'
```
### 5. Commit and Push
Commit, and push (using CMD):
```bash
git commit -m "YOUR MESSAGE HERE"
git push
```
Or you can use GitHub desktop.

## Assigned roles
### Bence
- Game Design (Gameplay)
- TBA
  
### Gergo
- Web Dev
- TBA

### Mate
- Project Lead
- Web Dev

### Szabi
- Game Design (Physical)
- TBA
