"echo "(>^.^<)"

set number  "show line numbers
set noswapfile "disable the swap files
set ignorecase "ignorecase in search
set incsearch "show search result as you tipe
set nohlsearch "highligth all results
set mouse=a "gaa

"some coc server have issues with backup
set nobackup
set nowritebackup
set updatetime=300

set showcmd
set ruler
set encoding=utf-8
set showmatch
set sw=4
set relativenumber
set noshowmode
so ~/.vim/maps.vim
so ~/.vim/plugins.vim

set termguicolors
"colorscheme nord
colorscheme dracula
"colorscheme gruvbox
let g:gruvbox_contrast_dark="hard"
syntax enable

let g:NERDTreeQuitOnOpen=1
let g:NERDTreeShowHidden = 1 
let g:NERDTreeMinimalUI = 1
let g:NERDTreeIgnore = []
let g:NERDTreeStatusline = ''

" Automaticaly close nvim if NERDTree is only thing left open
autocmd bufenter * if (winnr("$") == 1 && exists("b:NERDTree") &&  b:NERDTree.isTabTree()) | q | endif

"-- FOLDING --
set foldmethod=syntax "syntax highlighting items specify folds
set foldcolumn=1 "defines 1 col at window left, to indicate folding
let javaScript_fold=1 "activate folding by JS syntax
set foldlevelstart=0 "start file with all folds opened


"fzf preview ops, <c-p> to show/hide preview
let g:fzf_preview_window = ['right:50%', 'ctrl-p']


let g:lightline = { 'colorscheme': 'jellybeans' }

 
let g:fzf_action = {
  \ 'ctrl-t': 'tab split',
  \ 'ctrl-s': 'split',
  \ 'ctrl-v': 'vsplit'
  \}

"requires silversearcher-ag
let $FZF_DEFAULT_COMMAND = 'ag -g ""'

"open new split panes to right and below
set splitright
set splitbelow
tnoremap <Esc> <C-\><C-n>
au BufEnter * if &buftype == 'terminal' | :startinsert | endif
function! OpenTerminal()
    split term://bash
    resize 10
endfunction
