document.addEventListener('DOMContentLoaded', function() {
    var calculate = localStorage.getItem('calculate');
    var dietCalories = localStorage.getItem('dietCalories');

    if (calculate && dietCalories) {
        // Exibe o cálculo e calorias na tela
        document.getElementById('calculate').textContent = calculate + " kcal";
        document.getElementById('diet-calories').textContent = dietCalories + " kcal";

        // Verifica se a imagem existe e a exibe
        var imagePath = 'assets/images/MUDE-' + dietCalories + 'kcal.jpg';
        var imgElement = document.getElementById('diet-image');
        
        // Checa se a imagem existe e exibe
        imgElement.src = imagePath;
        imgElement.onerror = function() {
            imgElement.src = 'assets/images/default.jpg'; // Imagem alternativa caso a principal falhe
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
                purchaseButton.href = '#'; // Caso o valor de calorias não corresponda
        }
    } else {
        alert('Erro ao recuperar os dados. Por favor, tente novamente.');
    }
});
