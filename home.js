async function inithome(){
    try{
        const configresponse = await fetch('config.json');
        const config = await configresponse.json();
        const activetheme = config.theme || 'default';
        document.body.setAttribute('th-theme', activetheme);
        renderusers(config.users);
    }
    catch(error)
    {

    }
}
function renderusers(users)
{
    const container = document.createElement('div');
    const title = document.createElement('h2');
    title.textContent = 'Users';
    title.classList.add('m-auto','text-center');
    document.getElementById('container').appendChild(title);
    for (const[id,user] of Object.entries(users))
    {
        const link = document.createElement('a');
        link.textContent = user;
        link.href = 'index.html#'+id;
        link.classList.add('th-accent-text','text-decoration-none');
        const element = document.createElement('h2');
        element.classList.add('m-auto','text-center','w-50')
        element.appendChild(link);
        container.appendChild(element);
    }
    document.getElementById('container').appendChild(container);
}