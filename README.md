# consoc Keyboard Layout

## Introduction & Merits
not bad on all stats  
ISO 102 angle mod, conventional keyboard  

## Layout



## Heatmap



## Comparison to other layouts

| Layout     | SFBs | SFSs | DSFBs | LSBs | Scissors   | Redir | Rolls | Balance |
| ---------- | ---- | ---- | ----- | ---- | ---------- | ----- | ----- | ------- |
| consoc     | 0.58 | 2.91 | 0.19  | 0.11 | 0.32       | 2.79  | 53.52 | -2.48   |
| consoc_b*  | 0.58 | 2.91 | 0.19  | 0.11 | 0.07       | 2.79  | 53.52 | -2.48   |
| new idea   | 0.61 | 2.74 | 0.19  | 0.20 | 0.55(0.11) | 2.57  | 53.76 | -5.21   |
|            |      |      |       |      |            |       |       |         |
| Really     | 0.68 | 3.16 | 0.38  | 0.13 | 0.08       | 6.81  | 51.61 | +2.00   |
| APTv3      | 0.81 | 3.09 | 0.31  | 0.33 | 0.11       | 5.57  | 49.55 | -3.37   |
| Graphite   | 0.68 | 2.73 | 0.24  | 0.87 | 0.95       | 1.80  | 46.01 | -1.74   |
| Sturdy     | 0.62 | 2.80 | 0.20  | 1.58 | 0.42       | 5.01  | 50.10 | -5.44   |
| Canary     | 0.66 | 3.65 | 0.15  | 1.75 | 0.42       | 6.95  | 50.36 | -6.34   |
| Colemak_dh | 0.91 | 4.24 | 0.41  | 1.27 | 0.15       | 9.22  | 49.20 | -2.93   |
| QWERTY     | 4.38 | 5.45 | 1.43  | 4.55 | 1.46       | 6.22  | 40.76 | +6.69   |
\*benchmark edition: U & apostrophe swapped

## Cyanophage Layout Playground

[cyanophage link](https://cyanophage.github.io/playground.html?layout=fdhwj%2F%27loy%2Cstncp-erai.kmgbz%3Buxq%5Cv%5Eback&mode=iso&lan=english&thumb=l)

[new idea](https://cyanophage.github.io/playground.html?layout=fdhgj%2Furoy%2Cstlcb-enai.kmwpz%3B%27xq%5Cv%5Eback&mode=iso&lan=english&thumb=l)

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

## all thing's done, have fun!
