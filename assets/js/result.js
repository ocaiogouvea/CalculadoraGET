document.addEventListener('DOMContentLoaded', function() {
    var calculate = localStorage.getItem('calculate');
    var dietCalories = localStorage.getItem('dietCalories');

    if (calculate && dietCalories) {
        // Exibe o cálculo e calorias na tela
        document.getElementById('get-result').textContent = calculate + " kcal";  // Corrigi para get-result
        document.getElementById('diet-calories').textContent = dietCalories + " kcal";

        // Exibe a imagem correspondente às calorias
        var imagePath = 'assets/images/MUDE-' + dietCalories + 'kcal.jpg';
        var imgElement = document.getElementById('diet-image');
        imgElement.src = imagePath;
        imgElement.onerror = function() {
            imgElement.src = 'assets/images/default.jpg'; // Exibe uma imagem padrão se a imagem não for encontrada
        };

        // Atualiza o botão de compra com o link correto
        var purchaseButton = document.getElementById('purchase-button');
        switch (dietCalories) {
            case '1200':
                purchaseButton.href = 'https://www.nutripalomandrade.com/Cardapio1200';
                break;
            case '1300':
                purchaseButton.href = 'https://www.nutripalomandrade.com/Cardapio1300';
                break;
            case '1400':
                purchaseButton.href = 'https://www.nutripalomandrade.com/Cardapio1400';
                break;
            case '1500':
                purchaseButton.href = 'https://www.nutripalomandrade.com/Cardapio1500';
                break;
            case '1600':
                purchaseButton.href = 'https://www.nutripalomandrade.com/Cardapio1600';
                break;
            case '1700':
                purchaseButton.href = 'https://www.nutripalomandrade.com/Cardapio1700';
                break;
            case '1800':
                purchaseButton.href = 'https://www.nutripalomandrade.com/Cardapio1800';
                break;
            case '1900':
                purchaseButton.href = 'https://www.nutripalomandrade.com/Cardapio1900';
                break;
            case '2000':
                purchaseButton.href = 'https://www.nutripalomandrade.com/Cardapio2000';
                break;
            case '2100':
                purchaseButton.href = 'https://www.nutripalomandrade.com/Cardapio2100';
                break;
            default:
                purchaseButton.href = '#'; // Fallback no caso de erro
        }
    } else {
        alert('Erro ao recuperar os dados. Por favor, tente novamente.');
    }
});
