call plug#begin('~/.vim/plugged')

"temas
Plug 'dracula/vim'
Plug 'itchyny/lightline.vim'
"LPlug 'morhetz/gruvbox'
 
"Languaje client intellisense
Plug 'neoclide/coc.nvim', {'branch': 'release'}
let g:coc_global_extensions = [
	\'coc-fzf-preview', 
	\'coc-tabnine', 
	\'coc-snippets', 
	\'coc-css', 
	\'coc-html', 
	\'coc-json', 
	\'coc-prettier', 
	\'coc-tsserver'] 

"IDE 
Plug 'easymotion/vim-easymotion' 
Plug 'terryma/vim-multiple-cursors'
Plug 'scrooloose/nerdcommenter'
Plug 'jiangmiao/auto-pairs' "auto pairs for [ { ( 


"Syntax
Plug 'pangloss/vim-javascript'
Plug 'jelera/vim-javascript-syntax'
Plug 'elzr/vim-json'
Plug 'sheerun/vim-polyglot' "better syntax support


"Fila Explorer with Icons 
Plug 'scrooloose/nerdtree' 
Plug 'ryanoasis/vim-devicons'
"File Search 
Plug 'junegunn/fzf', { 'dir': '~/.fzf', 'do': './install --all' }
Plug 'junegunn/fzf.vim', { 'commit': '23dda8602f138a9d75dd03803a79733ee783e356' }
Plug 'airblade/vim-rooter'
call plug#end()
