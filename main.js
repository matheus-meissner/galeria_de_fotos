$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao_cancelar').click(function() {
        $('form').slideUp();
    })
    
    $('form').on('submit', function(e) {
        e.preventDefault();

        const enderecoDaNovaImagem = $('#endereco_imagem_nova').val();
        const novoItem = $('<li style="display: none"></li>');

        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class="overlay_imagem_link"> 
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereco_imagem_nova').val('');
    })
})

