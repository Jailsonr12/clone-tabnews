function status(request, response) {
  response.status(200).json({ chave: "Vocẽ é um aluno acima da media" });
}

export default status;
