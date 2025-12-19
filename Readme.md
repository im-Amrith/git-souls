# GitSouls ⚔️
> "YOU DIED" ... no, **"GIT PUSHED"**

GitSouls is a PowerShell integration that turns every `git push` into a Dark Souls / Elden Ring victory event. When your push is successful, a native overlay appears on your screen with the iconic "Victory" sound and aesthetic.

![GitSouls Preview](https://drive.google.com/uc?export=view&id=1Sm13yO5VEfhGrV2312ad3OUxDnXDXBih)


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
   ```
   (If it asks to create a file, select Yes).
2. A text file will open in VS Code. Paste the following code at the bottom of that file:
   ```powershell
   function eldenpush {
    # 1. Run git push safely without crashing PowerShell
    cmd /c "git push $args"

    # 2. If successful (Exit Code 0)
    if ($LASTEXITCODE -eq 0) {
        # Try to find the folder in Documents (Works for Local AND OneDrive)
        $path1 = "$([Environment]::GetFolderPath('MyDocuments'))\GitSouls\GitSouls.exe"
        $path2 = "$HOME\Documents\GitSouls\GitSouls.exe"

        if (Test-Path $path1) { Start-Process $path1 }
        elseif (Test-Path $path2) { Start-Process $path2 }
        else {
            Write-Warning "VICTORY MISSED: Could not find GitSouls."
            Write-Warning "Please move the 'GitSouls' folder to your Documents folder."
        }
    }
   }
   ```
   3. Save the file (Ctrl+S) and close it.
   4. Restart your terminal (close and reopen it).

🎮 Usage
Instead of typing git push, use:

```powershell
   eldenpush
```
Or pass arguments just like normal git:

```powershell
   eldenpush origin main
```
```PowerShell
   eldenpush --force
```
