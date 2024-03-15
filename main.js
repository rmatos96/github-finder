import './style.css'

addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        inputValue()
    }
})

window.inputValue = async function() {
    const input = document.querySelector('#input')
    const valorInput = input.value
    
    
    const res = await fetch( `https://api.github.com/users/${valorInput}`)

    const data = await res.json()

    if(res.status === 404) {
        document.querySelector('#repository').innerHTML = `
        <h2>Usuário não encontrado</h2>
        `
    } else (
        document.querySelector('#repository').innerHTML = `
        <div class="bg-slate-700 p-8 rounded-2xl flex flex-col items-center justify-center gap-5"> 
            <img class="w-36 h-36 border-4 border-slate-500 rounded-full" src="${data.avatar_url}" alt="${data.login}">
            <h2>${data.login}</h2>
            <p class="flex items-center gap-2">
          <span class="text-white font-bold">${data.location}</span>
        </p>
        <div class="flex gap-1">
          <div class="flex p-1 flex-col">
            <p>Seguidores:</p>
            <p class="bg-slate-400 p-1 rounded-md">${data.followers}</p>
          </div>
          <div class="flex p-1 flex-col">
            <p>Seguindo:</p>
            <p class="bg-slate-400 p-1 rounded-md">${data.following}</p>
          </div>
        </div>
            <a target="_blank" href="https://github.com/${data.login}?tab=repositories">Ver melhores projetos</a>
          </div>
    ` 
    )

    document.querySelector('#input').value = ''

    console.log(data);
}






