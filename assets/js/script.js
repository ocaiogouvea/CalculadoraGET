document.addEventListener('DOMContentLoaded', function() {
    var calculateButton = document.getElementById('calculate');
    var submitLeadButton = document.getElementById('submitLead');
    var closeLeadModal = document.querySelector('.close');

    if (calculateButton) {
        calculateButton.addEventListener('click', function() {
            var weight = parseFloat(document.getElementById('weight').value);
            var height = parseFloat(document.getElementById('height').value);
            var age = parseInt(document.getElementById('age').value);
            var activity = parseFloat(document.getElementById('activity').value);

            if (weight && height && age && activity) {
                var bmr = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
                var get = bmr * activity;
                localStorage.setItem('calculate', get.toFixed(2));
                document.getElementById('leadModal').style.display = 'flex'; // Exibe o modal
            } else {
                alert('Por favor, preencha todos os campos corretamente.');
            }
        });
    }

    if (submitLeadButton) {
        submitLeadButton.addEventListener('click', function() {
            var weight = parseFloat(document.getElementById('weight').value);
            var height = parseFloat(document.getElementById('height').value);
            var age = parseInt(document.getElementById('age').value);
            var activity = parseFloat(document.getElementById('activity').value);

            if (weight && height && age && activity) {
                var bmr = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
                var get = bmr * activity;

                localStorage.setItem('calculate', get.toFixed(2));

                var deficit;
                if (get <= 1800) {
                    deficit = 350;
                } else if (get <= 2200) {
                    deficit = 500;
                } else if (get <= 2650) {
                    deficit = 550;
                } else {
                    deficit = get - 2100;
                }

                var dietCalories = Math.round((get - deficit) / 100) * 100;

                if (dietCalories < 1200) {
                    dietCalories = 1200;
                } else if (dietCalories > 2100) {
                    dietCalories = 2100;
                }

                localStorage.setItem('dietCalories', dietCalories);

                window.location.href = 'resultado.html';
            } else {
                alert('Por favor, preencha todos os campos.');
            }
        });
    }

    // Para resultado.html
    if (window.location.pathname.includes('resultado.html')) {
        var calculateButton = localStorage.getItem('calculate');
        var dietCalories = localStorage.getItem('dietCalories');

        if (getResult && dietCalories) {
            document.getElementById('calculate').textContent = calculate;
            document.getElementById('diet-calories').textContent = dietCalories + " kcal";
            document.getElementById('diet-image').src = 'assets/images/MUDE-' + dietCalories + 'kcal.jpg';

            var purchaseButton = document.getElementById('purchase-button');
            switch(dietCalories) {
                case '1200':
                    purchaseButton.href = 'https://pay.hotmart.com/J94228920E?checkoutMode=10';
                    break;
                case '1300':
                    purchaseButton.href = 'https://go.hotmart.com/M89424841Y?dp=1';
                    break;
                case '1400':
                    purchaseButton.href = 'https://go.hotmart.com/M89424841Y?dp=1';
                    break;
                case '1500':
                    purchaseButton.href = 'https://pay.hotmart.com/K15000000E?checkoutMode=10';
                    break;
                case '1600':
                    purchaseButton.href = 'https://pay.hotmart.com/K16000000E?checkoutMode=10';
                    break;
                case '1700':
                    purchaseButton.href = 'https://pay.hotmart.com/K17000000E?checkoutMode=10';
                    break;
                case '1800':
                    purchaseButton.href = 'https://pay.hotmart.com/K18000000E?checkoutMode=10';
                    break;
                case '1900':
                    purchaseButton.href = 'https://pay.hotmart.com/K19000000E?checkoutMode=10';
                    break;
                case '2000':
                    purchaseButton.href = 'https://pay.hotmart.com/K20000000E?checkoutMode=10';
                    break;
                case '2100':
                    purchaseButton.href = 'https://pay.hotmart.com/K21000000E?checkoutMode=10';
                    break;
                default:
                    purchaseButton.href = '#'; // fallback in case dietCalories is not recognized
            }
        } else {
            alert('Erro ao recuperar os dados. Por favor, tente novamente.');
        }
    }
});
