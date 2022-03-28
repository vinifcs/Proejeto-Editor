var editorMinhasAnotacoes;

function init(){
   
    ClassicEditor
        .create(document.querySelector('#containerEditorMinhasAnotacoes'))
        .then(editor => {
            window.editor = editor;
            editorMinhasAnotacoes = editor;
    });
}

function clean() {
    editorMinhasAnotacoes.setData('');
};

function save(){

    let texto_capturado = editorMinhasAnotacoes.getData();

    /**
     * GRAVANDO OS DADOS EM UM BANCO
     * 
     * 1) pegar o texto capturado e enviar via POST para um host (ou back-end no servidor)
     * 2) lá no servidor, usando uma linguagem de server-side (PHP, Java, Node, Pyton, C#) gravar o dado recebido em uma tabela de dados MySQL
     * 3) se a gravação for bem sucedida, retornar um alerta para o usuario de que foi gravado com sucesso.
     * 
     * RECUPERANDO OS DADOS
     * 1) ao carregar a página, o script JS, deverá enviar um pedido via GET/POST para o servidor, solicitando o conteúdo do banco de dados
     * 2) do lado do servidor, iremos pesquisar dentro do banco de dados, o conteudo que tem lá
     * 3) o servidor vai retornar o conteudo para o navegador
     * 4) o conteudo recebido do servidor deve ser mostrado dentro do CKEDITOR

    




}