let mapleader=" "

nnoremap <Leader>n :call OpenTerminal()<CR>
nnoremap <Leader>ww :e ~/Workspace/notes/index.md<CR>

" plugs
map <Leader>nt :NERDTreeFind<CR>
map <Leader>p :Files<CR>
nmap <Leader>s <Plug>(easymotion-s2)
noremap <silent> <C-b> :NERDTreeToggle<CR>
"fazt accesssss
nmap <Leader>q :q<CR>
nmap <Leader>w :w<CR> 

nmap <Leader>v :vsplit<CR>
nmap <Leader>fs :CocCommand prettier.formatFile<CR> :w<CR>
"tabs navigation
nmap <Leader>h :tabprevious<cr>
nmap <Leader>l :tabnext<cr>

" run current file
nnoremap <Leader>x :!node %<cr>
nnoremap <Leader>ns :!npm start<cr>
"goto code navigation
nmap <silent> gd <Plug>(coc-definition)
"nmap <silent> gy <Plug>(coc-type-definition)
"nmap <silent> gi <Plug>(coc-implementation)
"nmap <silent> gr <Plug>(coc-references)

" use alt+hjkl
tnoremap <A-h> <C-\><C-n><C-w>h
tnoremap <A-j> <C-\><C-n><C-w>j
tnoremap <A-k> <C-\><C-n><C-w>k
tnoremap <A-l> <C-\><C-n><C-w>l

nnoremap <A-h> <C-w>h
nnoremap <A-j> <C-w>j
nnoremap <A-k> <C-w>k
nnoremap <A-l> <C-w>l
