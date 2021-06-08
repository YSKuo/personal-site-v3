---
title: "使用 zsh 的 alias 讓指令縮短"
cover: ""
category: "Others"
date: "2020-06-27"
excerpt: "看到有人在 terminal 輸入短短幾個字就完成本來要輸很多字的指令，這篇就來研究一下怎麼達到這樣的效果。"
published: true
featured: false
tags:
  - command line
  - alias
  - terminal
  - git
  - shell
---

## alias 是什麼？

看到有人在 terminal 輸入短短幾個字就完成本來要輸很多字的指令，例如輸入

```
gcam 'message'
```

等同於輸入

```
git commit -a -m 'message'
```

這些縮短指令的東西叫做 `alias`，這個英文單字的意思就是 **化名、假名** 的意思，也就是說可以想成 `git commit -a -m` 這個指令它的化名是 `gcam`，所以呼叫 `gcam` 就等同呼叫 `git commit -a -m`；這好比有個人本名是 `Tony Stark`，而他的化名是 `Iron Man`，所以有事要找這個人的話，除了可用他的本名 `Tony Stark` 叫他以外，也可以用 `Iron Man` 來叫他。

既然是 `alias` 是化名的意思，那也意味著可以自己設定某個指令的 `alias`，隨自己喜歡怎麼叫它就怎麼叫。看到這麼方便省時的方法，當然也想設定一下。

---

## zsh 內建 alias

查資料的時候了解到許多人會安裝 `zsh` 的 shell，就可以直接用一些內建的 alias 而不用自己再設定。

我本來就是用 `zsh` 所以不用再跑安裝這個步驟，然後查了一些資料都指出安裝 `zsh` 後，會有一個文件裡面存放設定好的 alias，這個文件是 `~/.oh-my-zsh/plugins/git/git.plugin.zsh`。

我用 terminal

- 輸入指令

```
open ~/.oh-my-zsh/plugins/git/
```

開啟 `git` 這個資料夾確定 `git.plugin.zsh` 在裡面，然後用 vim 開啟 `git.plugin.zsh`。

```
vim ~/.oh-my-zsh/plugins/git/git.plugin.zsh
```

也確定裡面已經有許多已設定好的 alias

![](https://i.imgur.com/vhjzuCs.png)

但我在 terminal 上輸入該些 alias 仍然無法使用，會出現 `command not found` 的結果。

---

## 讓 alias 變成有效指令

後來再查一些資料，才注意到是 source 沒設定好，導致輸入 alias 時系統找不到源頭，當然就會得到 `command not found` 的結果。

想使用 alias 可以直接輸入 `source ~/.oh-my-zsh/plugins/git/git.plugin.zsh`，這樣做之後可讓輸入的 alias 變成有效指令，但如果關掉 terminal 再次開啟就又無法使用 alias 了，所以要直接到相關文件去加入這個 source，這樣每次開啟 terminal 的時候都可以直接使用 alias。

現在要修改的文件就是 `~/.zshrc`，直接在 teminal 開啟文件編輯器修改

```
vim ~/.zshrc
```

然後在文件中加入

```
source ~/.oh-my-zsh/plugins/git/git.plugin.zsh
```

之後關掉 terminal 再重開就可以使用 zsh 內建的 alias 了。

---

## 常用的 alias

```
alias g='git'
alias ga='git add'
alias gb='git branch'
alias gc='git commit -v'
alias gca='git commit -v -a'
alias gcam='git commit -a -m'
alias gcb='git checkout -b'
alias gcmsg='git commit -m'
alias gco='git checkout'
alias gd='git diff'
alias gl='git pull'
alias glog='git log --oneline --decorate --graph'
alias gloga='git log --oneline --decorate --graph --all'
alias gp='git push'
alias gsb='git status -sb'
alias gst='git status'
```

##### 參考資料

- [Git：使用 zsh 中的 alias 提升效率](https://www.letianbiji.com/git/git-zsh-alias.html)
  [更优雅地使用命令行](https://www.cnblogs.com/xiaohuochai/p/12169113.html)
  [[Mac] 解決 zsh: command not found : XXX](https://medium.com/@frank.yylin/mac-%E8%A7%A3%E6%B1%BA-zsh-command-not-found-xxx-b526b31429f4)
