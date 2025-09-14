# consoc Keyboard Layout

## Introduction & Merits

solid across all metrics  
ISO 102 conventional keyboard  
developed by the Concorde Society  

## Layout



## Heatmap



## Comparison to other layouts

| Layout  | SFBs | SFSs | LSFSs | LSBs | Scissors | Redir | Rolls | Balance |
| ------- | ---- | ---- | ----- | ---- | -------- | ----- | ----- | ------- |
| consoc  | 0.53 | 2.86 | 0.19  | 0.11 | 0.07     | 2.75  | 53.72 | -2.00   |
|         |      |      |       |      |          |       |       |         |
| Really  | 0.68 | 3.16 | 0.38  | 0.13 | 0.08     | 6.81  | 51.61 | +2.00   |
| APTv3   | 0.81 | 3.09 | 0.31  | 0.33 | 0.11     | 3.60  | 49.55 | -3.37   |
| Gallium | 0.64 | 2.74 | 0.24  | 0.96 | 0.95     | 1.93  | 46.07 | -1.66   |
| Sturdy  | 0.62 | 2.80 | 0.20  | 1.58 | 0.42     | 2.85  | 50.10 | -5.44   |
| Canary  | 0.66 | 3.65 | 0.15  | 1.75 | 0.42     | 3.39  | 50.36 | -6.34   |
| Cmk_DH  | 0.91 | 4.24 | 0.41  | 1.27 | 0.15     | 5.33  | 49.20 | -2.93   |
| QWERTY  | 4.38 | 5.45 | 1.43  | 4.55 | 1.46     | 6.22  | 40.76 | +6.69   |

\*double tap space bar for period, type only ellipses using 'full stop' key  
\*apostrophe and U swapped by default for greater comfort  

## Cyanophage Layout Playground

[cyanophage link](https://cyanophage.github.io/playground.html?layout=fdhwj%2F%27loy%2Cstncp-erai.kmgbz%3Buxq%5Cv%5Eback&mode=iso&lan=english&thumb=l)

## Ascii Version

```
consoc

1  2  3  4  5  6  7  8  9  0  `  =
 f  d  h  w  j  /  '  l  o  y  ,  [
  s  t  n  c  b  -  e  r  a  i  .  ]
v  k  m  g  p  z  ;  u  x  q  \
```

## Attachments

press the green 'Code' button on top, then 'Download ZIP'  
the Attachments are for OSX users only

## OSX system keyboard install

double click **CONSOC.bundle.zip** to extract the file, then double click on this **CONSOC.bundle** to call keyboard installer, click either icons to automatically install the layout

or in **finder.app** : tool bar : Go : Go To Folder (command⌘ + shift⇧ + G in finder.app):

```
~/Library/Keyboard Layouts
```

add file I attached in the repository: **CONSOC.bundle** (in github this one: CONSOC.bundle.zip)

---

Log out or restart mac, remember to save your clipboard

in **System Settings.app** : Keyboard : Text Input : Edit : left bottom corner '+'

now CONSOC layout should be in the place, add it, and all done!

## keybr.com personal configuration

uncheck box **'Prefere natural words' 'Colored keys' 'Highlight keys'**

check box **'Sort letters in the order of keyboard keys'**

drag slider to the right **'Add words to lessons'**

manually adjust the **“Unlock more letters”** slider and the **“Unlock the next key only when the previous keys are also above the target speed”** checkbox to set the right number of keys for practice.

be aware that the Consoc layout puts extra strain on the ring and pinky fingers, so expect some overload and discomfort before you are fully adapted.

## keybr.com offline practice setup

follow [this instruction](https://github.com/aradzie/keybr.com/blob/master/docs/getting_started.md) to setup keybr.com self host server before configuration :

---

**finder.app** : tool bar : Go : Go To Folder (or command⌘ + shift⇧ + G in finder.app):

```
~/keybr.com/packages/keybr-keyboard/lib
```

replace the original **layout.ts** with the one in **Attachments**

replace the original **load.ts** with the one in **Attachments**

---

in subfolder **layout** add file I attached in the repository:

**en_consoc_iso.ts**

---

**finder.app** : tool bar : Go : Go To Folder (or command⌘ + shift⇧ + G in finder.app):

```
～/keybr.com/packages/keybr-keyboard/lib/geometry
```

replace the original **iso_102.ts** with the one in **Attachments**

---

```
~/keybr.com/packages/keybr-pages-browser/lib
```

replace the original **Template.tsx** with the one in **Attachments**

---

```
~/.local/state/keybr
```

replace the original **database.sqlite** with the one in **Attachments**  

---

in **terminal.app** run commands (command⌘ + space, type 'terminal', then enter⏎):

**replace 'user' with your custom name e.g. name='Jenny'**

```
sqlite3 ~/.local/state/keybr/database.sqlite \
"UPDATE user_external_id SET name='user' WHERE user_id=1;"
```

---

**finder.app** : tool bar : Go : Go To Folder (or command⌘ + shift⇧ + G in finder.app):

```
~/keybr.com/root/public
```

add your own avatar and rename it **avatar.png**

---

in **terminal.app** run commands (command⌘ + space, type 'terminal', then enter⏎):

```
npm run compile
npm run build-dev
npm start
```

*everytime you make change to files, restart server to take effect use control⌃ + C to terminate keybr.com server if you're already running it*

---

in **safari.app** visit website:

http://localhost:3000

personally I'd use safari 'hide distracting items' to hide the sidebar, now it should be looking much nicer~

---

if you accidentally logged out your account, and visiting http://localhost:3000/login/xyz doesn't work, first in **terminal.app** the one running the server, use control⌃ + C to terminate keybr.com

enter these commands to create a new access token and restart server:

```
sqlite3 ~/.local/state/keybr/database.sqlite \
"INSERT OR REPLACE INTO user_login_request (id, email, access_token, created_at) VALUES (1, 'user@localhost', 'xyz', 9999999999999);"
```

```
npm start
```

then visit http://localhost:3000/login/xyz to login again

## all thing's done, have fun!
