let mapleader=" "

" plugs
map <Leader>nt :NERDTreeFind<CR>
map <Leader>p :Files<CR>
nmap <Leader>s <Plug>(easymotion-s2)
noremap <silent> <C-b> :NERDTreeToggle<CR>
"fazt accesssss
nmap <Leader>q :q<CR>
nmap <Leader>w :w<CR> 


"tabs navigation
nmap <Leader>h :tabprevious<cr>
nmap <Leader>l :tabnext<cr>

" run current file
nnoremap <Leader>x :!node %<cr>
nnoremap <Leader>ns :!npm start<cr>
"goto code navigation
nmap <silent> gd <Plug>(coc-definition)
nmap <silent> gy <Plug>(coc-type-definition)
nmap <silent> gi <Plug>(coc-implementation)
nmap <silent> gr <Plug>(coc-references)
