call plug#begin('~/.vim/plugged')

"themes
Plug 'dracula/vim'
Plug 'kjwon15/vim-transparent'
Plug 'itchyny/lightline.vim'
Plug 'morhetz/gruvbox'

"Languaje client intellisense
Plug 'neoclide/coc.nvim', {'branch': 'release'}
let g:coc_global_extensions = [
    \'coc-snippets', 
    \'coc-css', 
    \'coc-html', 
    \'coc-json', 
    \'coc-prettier', 
    \'coc-tsserver',
    \'coc-python',
    \'coc-emmet',
    \'coc-tabnine'] 


"IDE 
Plug 'easymotion/vim-easymotion' 
Plug 'mg979/vim-visual-multi'

"Syntax
Plug 'pangloss/vim-javascript'
Plug 'sheerun/vim-polyglot'

"Fila Explorer with Icons 
Plug 'scrooloose/nerdtree' 
"File Search 

Plug 'junegunn/fzf', { 'dir': '~/.fzf', 'do': './install --all' }
Plug 'junegunn/fzf.vim'
call plug#end()
