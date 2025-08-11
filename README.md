# CONSOC Keyboard Layout

## Introduction & Merits
minimal hand movement  
hand & finger balance  
preserve ⌃ + X/C/V operations' convenience  
optimized after Gallium & Graphite 

## Requirements

only OSX support currently, ISO 101 namely EN_UK keyboard

## Layout

![CONSOC](https://github.com/user-attachments/assets/f5b8ddcd-99b5-48e8-94bc-b35987040dd1)

## Heatmap

![Layout1](https://github.com/user-attachments/assets/ce01eb81-54a4-44ec-a62c-c192d63dd035)
![Heatmap1](https://github.com/user-attachments/assets/25448445-3d1c-4dc5-b50d-8ce6d07c01b9)

## Comparison to other layouts

| Layout     | SFBs | DSFBs | LSBs | Scissors | Redir | Balance |
| ---------- | ---- | ----- | ---- | -------- | ----- | ------- |
| CONSOC     | 0.63 | 0.23  | 0.78 | 0.57     | 1.93  | -1.66%  |
| CONSOC-alt | 0.82 | 0.43  | 0.15 | 0.11     | 5.24  | -3.26%  |
|            |      |       |      |          |       |         |
| Gallium    | 0.64 | 0.24  | 0.96 | 0.41     | 1.93  | -1.66%  |
| Graphite   | 0.68 | 0.24  | 0.87 | 0.95     | 1.80  | -1.74%  |
| Colemak-dh | 0.91 | 0.41  | 1.27 | 0.15     | 9.22  | -2.93%  |
| Canary     | 0.66 | 0.15  | 1.75 | 0.42     | 3.39  | -6.33%  |
| Dvorak     | 1.87 | 0.45  | 0.80 | 0.08     | 1.55  | -4.82%  |

*Balance: e.g. L49%,R51% -> -1.00%
all data from ISO 102 keyboard simulation*

## Cyanophage Layout Playground

https://cyanophage.github.io/playground.html?layout=bldwjzfou%2C.nrtsgyhaei%3Bxmcv%5Ckp%27%2F-q%5Eback&mode=iso&lan=english&thumb=l

## Ascii Version

```
1  2  3  4  5  6  7  8  9  0  \  =
b  l  d  w  j  z  f  o  u  ,  .  [
n  r  t  s  g  y  h  a  e  i  ;  ]
q  x  m  c  v  `  k  p  '  /  -
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

then at location:

```
Your-Macbook-Pro/Macintosh\ HD/Users/you/keybr.com/packages/keybr-keyboard/lib: 
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

## Another story...

you might wonder why I listed 'CONSOC-alt' layout there, it's a long story.
when I switched to iso keyboard from ansi, I discovered gallium gains a status leap while graphite on the other hand decreased. That's why I decided to create my personal layout, combining both layouts. And I encountered 'really?', same as it's name, it gave me a painful punch, 

optimized after really

Heatmap:

![Layout2](https://github.com/user-attachments/assets/58982b7d-ed08-45af-9fbf-a68488f5ef67)
![Heatmap2](https://github.com/user-attachments/assets/417634db-10f6-4314-a0fd-8bd3a9dd4000)

Comparison to other layouts:

| Layout     | SFBs | DSFBs | LSBs | Scissors | Redir | Balance |
| ---------- | ---- | ----- | ---- | -------- | ----- | ------- |
| CONSOC-alt | 0.82 | 0.43  | 0.15 | 0.11     | 5.24  | -3.26%  |
| really?    | 0.68 | 0.38  | 0.13 | 0.08     | 4.92  | +2.01%  |
|            |      |       |      |          |       |         |
| Colemak-dh | 0.91 | 0.41  | 1.27 | 0.15     | 9.22  | -2.93%  |
| Canary     | 0.66 | 0.15  | 1.75 | 0.42     | 3.39  | -6.33%  |
| Dvorak     | 1.87 | 0.45  | 0.80 | 0.08     | 1.55  | -4.82%  |

Cyanophage Layout Playground:
https://cyanophage.github.io/playground.html?layout=wghcqzlouy%27dtnsvxraei%3Bmpfj%5C.k%2C%2F-b%5Eback&mode=iso&lan=english&thumb=l

I haven't built layout file to support this one, but you can try **ukelele.app** to create your own. Afterall I perfere lower Redir for silk touch and this layout is only theoretically efficient, on a normal iso keyboard, where left hand low row is easier to reach than right hand side, this layout CONSOC-alt is all what I can do.

After several weeks, I'm now back on CONSOC layout, knowing that's what suits me best afterall.

## that's all, have fun!
