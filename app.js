const follow = document.querySelector('.btn.f-btn')

follow.addEventListener('click',() =>{
    follow.classList.toggle('hide')
    if (follow.classList.contains('hide')){
        follow.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg> Followed'
    }else{
        follow.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg> Follow'
    }
    
})

follow.addEventListener('click',() => {
    const scc = document.querySelector('.success')
    scc.fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
  });


