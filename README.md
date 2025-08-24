# consoc Keyboard Layout

## Introduction & Merits
not bad on all stats  
ISO 102 angle mod, conventional keyboard  

## Layout

![layout]()

## Heatmap

![Heatmap1]()
![Heatmap2]()

## Comparison to other layouts

| Layout     | SFBs | DSFBs | LSBs | Scissors | Redir | Rolls | Balance |
| ---------- | ---- | ----- | ---- | -------- | ----- | ----- | ------- |
| 0.1        | 0.60 | 0.31  | 0.14 | 0.11     | 2.06  | 53.21 | -2.55   |
| 0.2        | 0.67 | 0.32  | 0.11 | 0.10     | 2.02  | 53.02 | -2.55   |
| consoc     | 0.65 | 0.21  | 0.06 | 0.06     | 2.79  | 53.49 | -2.57   |
|            |      |       |      |          |       |       |         |
| really?    | 0.68 | 0.38  | 0.13 | 0.08     | 6.81  | 51.61 | +2.00   |
| APTv3      | 0.81 | 0.31  | 0.33 | 0.11     | 5.57  | 49.55 | -3.37   |
| Graphite   | 0.68 | 0.24  | 0.87 | 0.95     | 1.80  | 46.01 | -1.74   |
| Sturdy     | 0.62 | 0.20  | 1.58 | 0.42     | 5.01  | 50.10 | -5.44   |
| Canary     | 0.66 | 0.15  | 1.75 | 0.42     | 6.95  | 50.36 | -6.34   |
| Colemak-dh | 0.91 | 0.41  | 1.27 | 0.15     | 9.22  | 49.20 | -2.93   |

## Cyanophage Layout Playground

0.1 [cyanophage link](https://cyanophage.github.io/playground.html?layout=fdhwp%2Fzrouystncbjelai-kmgv%5C%27q%2C.%3Bx%5Eback&mode=iso&lan=english&thumb=l)

0.2 [cyanophage link](https://cyanophage.github.io/playground.html?layout=ghdwx%2Fqrouycntsbjelai-mkfv%5C%27z%2C.%3Bp%5Eback&mode=iso&lan=english&thumb=l)

1.0 [cyanophage link](https://cyanophage.github.io/playground.html?layout=ghdwz%2Fuloy%2Ccntsb-eraijmkvf%5C%3B%27xq.p%5Eback&mode=iso&lan=english&thumb=l)

p.s. I hate punctuations

## Ascii Version

```
consoc

1  2  3  4  5  6  7  8  9  0  `  =
g  h  d  w  z  /  u  l  o  y  ,  [
c  n  t  s  b  -  e  r  a  i  j  ]
p  m  k  v  f  \  ;  '  x  q  .
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
