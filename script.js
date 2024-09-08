function trocar() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector(".foto-perfil")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "Imagens/ARTE-4.png")
  } else {
    // set tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "Imagens/ARTE-5.png")
  }
}