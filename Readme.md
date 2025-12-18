# GitSouls ⚔️
> "YOU DIED" ... no, **"GIT PUSHED"**

GitSouls is a PowerShell integration that turns every `git push` into a Dark Souls / Elden Ring victory event. When your push is successful, a native overlay appears on your screen with the iconic "Victory" sound and aesthetic.

![GitSouls Preview](https://github.com/user-attachments/assets/placeholder-image) 
*(Add a screenshot of your app here)*

## ✨ Features
- **Immersive Overlay:** A transparent, click-through overlay that fades in over your screen.
- **Victory Sound:** Plays the "Enemy Felled" / Victory sound effect.
- **Git Integration:** Only triggers when a `git push` is actually successful.
- **Smart Detection:** Doesn't trigger if the repo is already "Up-to-date".

## 📦 Installation (For Users)

### Step 1: Download
1. Go to the [Releases Page](../../releases) of this repository.
2. Download `GitSouls-Release.zip`.
3. Unzip the file. You should see a folder named `GitSouls` containing `GitSouls.exe`.

### Step 2: Place the Folder
Move the **entire** `GitSouls` folder into your **Documents** folder.
- ✅ `C:\Users\YourName\Documents\GitSouls\`
- ❌ `C:\Downloads\GitSouls\`

### Step 3: Configure PowerShell
1. Open PowerShell and run:
   ```powershell
   code $PROFILE