export async function loadComponent( element, path){
    const response = await fetch(path);
    const html = await response.text();
    element.innerHTML = html;
}