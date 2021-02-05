export ZSH="/home/j_vierrh/.oh-my-zsh"
ZSH_THEME="random"

ZSH_THEME_RANDOM_CANDIDATES=("agnoster" "sonicradish" "geoffgarside" "robbyrussell" "sorin" "smt")
plugins=(git nvm fzf)

source $ZSH/oh-my-zsh.sh
[ -f ~/.fzf.zsh ] && source ~/.fzf.zsh
