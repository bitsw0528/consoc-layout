# consoc Keyboard Layout

## Introduction & Merits
not bad on all stats  
ISO 102 angle mod, conventional keyboard  

## Layout

![layout](https://github.com/user-attachments/assets/d064525c-24c4-44d0-bff2-3c74d3f10dd7)

## Heatmap

![Heatmap1](https://github.com/user-attachments/assets/cc852164-8880-4e8b-a9e4-5605be38caa7)
![Heatmap2](https://github.com/user-attachments/assets/b7b01fc8-72f0-47ca-98a1-92ad9e73f0a2)

## Comparison to other layouts

| Layout     | SFBs | SFSs | DSFBs | LSBs | Scissors | Redir | Rolls | Balance |
| ---------- | ---- | ---- | ----- | ---- | -------- | ----- | ----- | ------- |
| 0.1        | 0.65 | 3.03 | 0.21  | 0.06 | 0.06     | 2.79  | 53.49 | -2.57   |
| 0.2        | 0.60 | 3.03 | 0.31  | 0.14 | 0.11     | 2.06  | 53.21 | -2.55   |
| 0.3        | 0.66 | 3.06 | 0.20  | 0.06 | 0.30     | 2.75  | 53.33 | -2.48   |
| 1.0        | 0.58 | 2.90 | 0.20  | 0.11 | 0.31     | 2.79  | 53.52 | -2.48   |
| 1.0b*      | 0.58 | 2.90 | 0.20  | 0.11 | 0.05     | 2.79  | 53.52 | -2.48   |
|            |      |      |       |      |          |       |       |         |
| Really     | 0.68 | 3.16 | 0.38  | 0.13 | 0.08     | 6.81  | 51.61 | +2.00   |
| APTv3      | 0.81 | 3.09 | 0.31  | 0.33 | 0.11     | 5.57  | 49.55 | -3.37   |
| Graphite   | 0.68 | 2.73 | 0.24  | 0.87 | 0.95     | 1.80  | 46.01 | -1.74   |
| Sturdy     | 0.62 | 2.80 | 0.20  | 1.58 | 0.42     | 5.01  | 50.10 | -5.44   |
| Canary     | 0.66 | 3.65 | 0.15  | 1.75 | 0.42     | 6.95  | 50.36 | -6.34   |
| Colemak-dh | 0.91 | 4.24 | 0.41  | 1.27 | 0.15     | 9.22  | 49.20 | -2.93   |
| QWERTY     | 4.38 | 5.45 | 1.43  | 4.55 | 1.46     | 6.22  | 40.76 | +6.69   |

\*benchmark edition: U & apostrophe swapped

## Cyanophage Layout Playground

0.1 [cyanophage link](https://cyanophage.github.io/playground.html?layout=ghdwz%2Fuloy%2Ccntsb-eraijmkvf%5C%3B%27xq.p%5Eback&mode=iso&lan=english&thumb=l)

0.2 [cyanophage link](https://cyanophage.github.io/playground.html?layout=fdhwp%2Fzrouystncbjelai-kmgv%5C%27q%2C.%3Bx%5Eback&mode=iso&lan=english&thumb=l)

0.3 [cyanophage link](https://cyanophage.github.io/playground.html?layout=ghdwz%2F%27loy%2Ccntsb-erai.mkvfj%3Buxq%5Cp%5Eback&mode=iso&lan=english&thumb=l)

1.0 [cyanophage link](https://cyanophage.github.io/playground.html?layout=fdhgz%5C%27loy%2Cstncp-erai.kmwbj%3Buxq%2Fv%5Eback&mode=iso&lan=english&thumb=l)

## Ascii Version

```
consoc
0.1
1  2  3  4  5  6  7  8  9  0  `  =
g  h  d  w  z  /  u  l  o  y  ,  [
c  n  t  s  b  -  e  r  a  i  j  ]
p  m  k  v  f  \  ;  '  x  q  .

0.2
1  2  3  4  5  6  7  8  9  0  `  =
f  d  h  w  p  /  z  r  o  u  y  [
s  t  n  c  b  j  e  l  a  i  -  ]
x  k  m  g  v  \  '  q  ,  .  ;

0.3
1  2  3  4  5  6  7  8  9  0  `  =
g  h  d  w  z  /  '  l  o  y  ,  [
c  n  t  s  b  -  e  r  a  i  .  ]
p  m  k  v  f  j  ;  u  x  q  \

1.0
1  2  3  4  5  6  7  8  9  0  `  =
f  d  h  g  z  \  '  l  o  y  ,  [
s  t  n  c  b  -  e  r  a  i  .  ]
v  k  m  w  p  j  ;  u  x  q  /
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

**en_consoc1.0_iso.ts**      **en_consoc0.1_iso.ts**      **en_consoc0.2_iso.ts**

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

personally I'd use safari 'hide distracting items' to hide the info sidebar, now it should be looking much nicer~

## all thing's done, have fun!
