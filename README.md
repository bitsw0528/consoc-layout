# nearly? Keyboard Layout

## Introduction & Merits
good on all stats  
ISO 102 angle mod  
got it's name because 'nearly' types so smooth in this layout  
special thanks to ‘really?’ keyboard layout  
if there's final version I'll name it 'nearest', why? type it out!  

## Layout



## Heatmap



## Comparison to other layouts

| Layout     | SFBs | DSFBs | LSBs | Scissors | Redir | Rolls | Balance |
| ---------- | ---- | ----- | ---- | -------- | ----- | ----- | ------- |
| nearly?    | 0.65 | 0.20  | 0.06 | 0.07     | 2.79  | 49.98 | -2.57   |
|            |      |       |      |          |       |       |         |
| really?    | 0.68 | 0.38  | 0.13 | 0.08     | 6.81  | 51.61 | +2.00   |
| APTv3      | 0.81 | 0.31  | 0.33 | 0.11     | 5.57  | 49.55 | -3.37   |
| Graphite   | 0.68 | 0.24  | 0.87 | 0.95     | 1.80  | 46.01 | -1.74   |
| Sturdy     | 0.62 | 0.20  | 1.58 | 0.42     | 5.01  | 50.10 | -5.44   |
| Canary     | 0.66 | 0.15  | 1.75 | 0.42     | 6.95  | 50.36 | -6.34   |
| Colemak-dh | 0.91 | 0.41  | 1.27 | 0.15     | 9.22  | 49.20 | -2.93   |

*Balance: e.g. L49%,R51% -> -1.00
all data from ISO 102 keyboard simulation*

## Cyanophage Layout Playground

https://cyanophage.github.io/playground.html?layout=ghdwz%2Furo%2Cycntsb-elaijmkvf%5C%3B%27xq.p%5Eback&mode=iso&lan=english&thumb=l

## Ascii Version

```
nearly?

1  2  3  4  5  6  7  8  9  0  `  =
g  h  d  w  z  /  u  r  o  ,  y  [
c  n  t  s  b  -  e  l  a  i  j  ]
p  m  k  v  f  \  ;  '  x  q  .
```

## Attachments

.bundle : OSX keyboard layout file

.ts : keybr.com custom keyboard layout file (ignore if 'q' displayed the wrong place, a keybr.com side bug)

## OSX system customized keyboard install instruction

**finder.app** : tool bar : Go : Go To Folder:

```
~/Library/Keyboard Layouts
```

add file I attached in the repository:

**CONSOC.bundle** (in github this one: CONSOC.bundle.zip)

Log out or restart mac, remember to save your clipboard

in **System Settings.app** : Keyboard : Text Input : Edit : left bottom corner '+'

now CONSOC layout should be in the place, add it, and all done!

## keybr.com offline practice setup instruction

follow the instructions below first:

https://github.com/aradzie/keybr.com/blob/master/docs/getting_started.md

**finder.app** : tool bar : Go : Go To Folder:

```
~/keybr.com/packages/keybr-keyboard/lib: 
```

in **layout.ts** add:

```
static readonly EN_CONSOC_ISO = new Layout(
    /* id= */ "en-consoc-iso",
    /* xid= */ 0xab,
    /* name= */ "CONSOC",
    /* family= */ "consoc",
    /* language= */ Language.EN,
    /* emulate= */ true,
    /* geometries= */ new Enum(
      Geometry.ISO_102,
    ),
  );
```

and

```
Layout.EN_CONSOC_ISO,
```

in **load.ts** add:

```
import { LAYOUT_EN_CONSOC_ISO } from "./layout/en_consoc_iso.ts";
```

and

```
[Layout.EN_CONSOC_ISO, LAYOUT_EN_CONSOC_ISO],
```

in subfolder **layout** add file I attached in the repository:

**en_consoc_iso.ts**

*restart server to take effect use control⌃ + C to terminate keybr.com server if you're already running it*

in **terminal.app** run commands:

```
npm run compile
npm run build-dev
npm start
```

in **safari.app** visit website:

http://localhost:3000

## that's all, have fun!
