document.addEventListener('DOMContentLoaded', function() {
    var calculate = localStorage.getItem('getResult');
    var dietCalories = localStorage.getItem('dietCalories');

    if (getResult && dietCalories) {
        document.getElementById('get-result').textContent = getResult;
        document.getElementById('diet-calories').textContent = dietCalories + " kcal";
        document.getElementById('diet-image').src = 'assets/images/MUDE-' + dietCalories + 'kcal.jpg';

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
                purchaseButton.href = '#'; // Fallback in case dietCalories is not recognized
        }
    } else {
        alert('Erro ao recuperar os dados. Por favor, tente novamente.');
    }
});
