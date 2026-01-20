# consoc Keyboard Layout

## Introduction

This new approach challenges the traditional assumption that both strong in-rolls and vowel-hand-dominant rolling must be prioritized, as well as the community belief that high roll frequency is inherently unsalvageable due to its correlation with redirects.

Additionally, with the new **consoc** core layout structure, it achieves exceptional scores across most metrics in common benchmarks.

The layout adheres to the ISO 102 conventional keyboard standard and includes dedicated symbol layers optimized for efficient symbol entry and numpad-style usage.

Developed by the Concorde Society, this work is released under the Creative Commons Zero v1.0 Universal license.

## Layout



\*suggest remapping Tab to Delete and using it with the left pinky.

## Heatmap



## Comparison to other layouts

| Layout  | SFBs | SFSs | LSFSs | LSBs | Scissors | Redir | Rolls | Balance |
| ------- | ---- | ---- | ----- | ---- | -------- | ----- | ----- | ------- |
| consoc  | 0.52 | 2.85 | 0.19  | 0.06 | 0.12     | 2.75  | 53.74 | -2.00   |
|         |      |      |       |      |          |       |       |         |
| Really  | 0.68 | 3.16 | 0.38  | 0.13 | 0.08     | 6.81  | 51.61 | +2.00   |
| APTv3   | 0.81 | 3.09 | 0.31  | 0.33 | 0.11     | 3.60  | 49.55 | -3.37   |
| Gallium | 0.64 | 2.74 | 0.24  | 0.96 | 0.95     | 1.93  | 46.07 | -1.66   |
| Sturdy  | 0.62 | 2.80 | 0.20  | 1.58 | 0.42     | 2.85  | 50.10 | -5.44   |
| Canary  | 0.66 | 3.65 | 0.15  | 1.75 | 0.42     | 3.39  | 50.36 | -6.34   |
| Cmk_DH  | 0.91 | 4.24 | 0.41  | 1.27 | 0.15     | 5.33  | 49.20 | -2.93   |
| QWERTY  | 4.38 | 5.45 | 1.43  | 4.55 | 1.46     | 6.22  | 40.76 | +6.69   |

\*double-tap the space bar to insert a period; use the “full stop” key only for ellipses.  
\*the apostrophe and U keys should be swapped for comfort; the raw layout favors benchmark scores.  

## Cyanophage Layout Playground

[cyanophage link](https://cyanophage.github.io/playground.html?layout=fdhwj%2Fuloy%2Cstncb-erai.kmgpz%3B%27xq%5Cv%5Eback&mode=iso&lan=english&thumb=l)

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

below avatar the left icon **'sun/moon'** chose a custom theme, right icon **'enter full screen'** creates a more immersive environment

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

change layout to **Consoc** and Geometry to **ISO 102**

# all thing's done, have fun!

---

## keybr.com error Q&A

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

---

if server terminated improperly, restarting it may run into a "server currently unavailable" error on browser, run:

```
npm rebuild
npm start
```

this should solve the server problem

---

if port conflict happens, in:

```
~/Users/bitsw/keybr.com/
```

change http://localhost:3000/ to e.g. port 5173: http://localhost:5173/ , and add

```
SERVER_PORT=5173
SERVER_PORT_WS=5174
```

save, then npm start

if cannot connect to server via http://localhost:... try 127.0.0.1:... , if this works, in safari>privacy>clear website data cleanup localhost's cache, and revisit localhost

---

if your proxy is set global mode, and cannot establish connection to server:

```
unset http_proxy https_proxy HTTP_PROXY HTTPS_PROXY
npm start
```

---

if process keeps restarting, endlessly printing status in terminal, first kill all related keybr.com process in activity monitor, than restart server again.

---

## For users switching from keybr.com to monkeytype

>[!suggest]
>Create the web app using a Dock shortcut.
>The configuration is downloaded together with the profile, so make modifications beforehand using the provided links.
>Before creating the web app, disable all extensions to prevent them from appearing in the web app top bar.
>Then go to Share → Add to Dock.
>Finally, log in to the account again and upload the background image.

---

at https://monkeytype.com/settings?highlight=theme

| background  | #dbe6bc |
| ----------- | ------- |
| sub alt     | #7a9c6c |
| main        | #4b6242 |
| sub         | #748263 |
| caret       | #374434 |
| text        | #374434 |
| error       | #d99b7a |
| extra error | #d99b7a |

or use the link https://monkeytype.com?customTheme=eyJjIjpbIiNkYmU2YmMiLCIjNGI2MjQyIiwiIzM3NDQzNCIsIiM3NDgyNjMiLCIjN2E5YzZjIiwiIzM3NDQzNCIsIiNkOTliN2EiLCIjZDk5YjdhIiwiI2NhNDc1NCIsIiM3ZTJhMzMiXSwiaSI6IiIsInMiOiJjb3ZlciIsImYiOlswLDEsMSwxXX0=

---

at https://monkeytype.com/settings?highlight=importexportSettings

import

```
{"theme":"serika_dark","themeLight":"serika","themeDark":"serika_dark","autoSwitchTheme":false,"customTheme":true,"customThemeColors":["#dbe6bc","#4b6242","#374434","#748263","#7a9c6c","#374434","#d99b7a","#d99b7a","#ca4754","#7e2a33"],"favThemes":[],"showKeyTips":true,"smoothCaret":"medium","codeUnindentOnBackspace":false,"quickRestart":"esc","punctuation":false,"numbers":false,"words":50,"time":30,"mode":"time","quoteLength":[1],"language":"english_10k","fontSize":3,"freedomMode":false,"difficulty":"normal","blindMode":false,"quickEnd":false,"caretStyle":"underline","paceCaretStyle":"default","flipTestColors":true,"layout":"default","funbox":[],"confidenceMode":"off","indicateTypos":"off","compositionDisplay":"replace","timerStyle":"mini","liveSpeedStyle":"off","liveAccStyle":"off","liveBurstStyle":"off","colorfulMode":false,"randomTheme":"off","timerColor":"main","timerOpacity":"1","stopOnError":"letter","showAllLines":false,"keymapMode":"off","keymapStyle":"staggered","keymapLegendStyle":"lowercase","keymapLayout":"overrideSync","keymapShowTopRow":"layout","keymapSize":1,"fontFamily":"Ubuntu_Mono","smoothLineScroll":false,"alwaysShowDecimalPlaces":true,"alwaysShowWordsHistory":false,"singleListCommandLine":"on","capsLockWarning":true,"playSoundOnError":"off","playSoundOnClick":"off","soundVolume":0.5,"startGraphsAtZero":true,"showOutOfFocusWarning":true,"paceCaret":"off","paceCaretCustomSpeed":100,"repeatedPace":true,"accountChart":["on","on","on","on"],"minWpm":"off","minWpmCustomSpeed":100,"highlightMode":"letter","typingSpeedUnit":"wpm","ads":"result","hideExtraLetters":false,"strictSpace":false,"minAcc":"off","minAccCustom":90,"monkey":false,"repeatQuotes":"off","oppositeShiftMode":"off","customBackground":"","customBackgroundSize":"cover","customBackgroundFilter":[0,1,1,1],"customLayoutfluid":["qwerty","dvorak","colemak"],"customPolyglot":["english","spanish","french","german"],"monkeyPowerLevel":"off","minBurst":"off","minBurstCustomSpeed":100,"burstHeatmap":false,"britishEnglish":true,"lazyMode":false,"showAverage":"off","showPb":false,"tapeMode":"off","tapeMargin":50,"maxLineWidth":0,"playTimeWarning":"off"}
```

| quick restart              | esc         |
| -------------------------- | ----------- |
| british english            | on          |
| language                   | english 10k |
| stop on error              | letter      |
| caret style                | _           |
| always show decimal places | on          |
| font size                  | 3           |
| font family                | Ubuntu Mono |
| flip test colors           | on          |

---

at https://monkeytype.com/settings?highlight=customBackgroundSize

upload background image bg-garden.png in **Attachments**

## all set, enjoy!
