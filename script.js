document.addEventListener('DOMContentLoaded', function () {
    // Botão de cálculo e elementos de carregamento
    var calculateButton = document.getElementById('calculateButton');
    var loadingScreen = document.getElementById('loadingScreen');
    var progressBarFill = document.getElementById('progressBarFill');

    if (calculateButton) {
        calculateButton.addEventListener('click', function (e) {
            e.preventDefault(); // Evita o comportamento padrão do formulário
            console.log('Botão Calcular clicado');

            // Capturar os valores do formulário
            var weight = parseFloat(document.getElementById('weight').value);
            var height = parseFloat(document.getElementById('height').value);
            var age = parseInt(document.getElementById('age').value);
            var activity = parseFloat(document.getElementById('activity').value);

            console.log('Valores capturados:', { weight, height, age, activity });

            // Verificar se todos os valores foram preenchidos corretamente
            if (weight && height && age && activity) {
                console.log('Todos os campos foram preenchidos corretamente');

                // Fórmula de Harris-Benedict para mulheres
                var bmr = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
                var get = bmr * activity; // Gasto Energético Total

                // Armazenar o GET no localStorage
                localStorage.setItem('getResult', get.toFixed(2));
                console.log('GET calculado e armazenado:', get);

                // Cálculo do déficit calórico
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

                // Determinar o plano recomendado
                var dietCalories = Math.round((get - deficit) / 100) * 100;

                // Ajustar para os limites de 1200 e 2100 kcal
                if (dietCalories < 1200) {
                    dietCalories = 1200;
                } else if (dietCalories > 2100) {
                    dietCalories = 2100;
                }

                console.log('Plano recomendado calculado:', dietCalories);

                // Armazenar o plano de dieta no localStorage
                localStorage.setItem('dietCalories', dietCalories);

                // Mostrar a tela de carregamento
                loadingScreen.style.display = 'flex';

                // Animação da barra de progresso
                var progress = 0;
                var interval = setInterval(function () {
                    progress += 2.5; // Incrementa 2.5% a cada 100ms (4 segundos totais)
                    progressBarFill.style.width = progress + '%';

                    if (progress >= 100) {
                        clearInterval(interval);
                        // Redirecionar para a página de resultados
                        console.log('Redirecionando para resultado.html');
                        window.location.href = 'resultado.html';
                    }
                }, 100);
            } else {
                alert('Por favor, preencha todos os campos corretamente.');
            }
        });
    }

    // Exibir os resultados na página de resultados
    if (window.location.pathname.includes('resultado.html')) {
        console.log('Página de resultados carregada');
        var getResult = localStorage.getItem('getResult');
        var dietCalories = localStorage.getItem('dietCalories');

        if (getResult) {
            // Exibir apenas o valor do GET
            document.getElementById('get-result').textContent = `Seu gasto energético total é de ${getResult} kcal`;
        } else {
            alert('Erro ao recuperar os dados. Por favor, tente novamente.');
        }

        // Redirecionar para a URL do plano correspondente
        var purchaseButton = document.getElementById('purchase-button');
        switch (dietCalories) {
            case '1200':
                purchaseButton.href = 'https://pay.hotmart.com/J94228920E?off=6gi9ap4b&checkoutMode=10';
                break;
            case '1300':
                purchaseButton.href = 'https://pay.hotmart.com/E94277222V?off=quxdeonb&checkoutMode=10';
                break;
            case '1400':
                purchaseButton.href = 'https://pay.hotmart.com/S94278980V?off=b8qa24bp&checkoutMode=10';
                break;
            case '1500':
                purchaseButton.href = 'https://pay.hotmart.com/X94514490P?off=1tqmkmy4&checkoutMode=10';
                break;
            case '1600':
                purchaseButton.href = 'https://pay.hotmart.com/L94514697U?off=xbgznulx&checkoutMode=10';
                break;
            case '1700':
                purchaseButton.href = 'https://pay.hotmart.com/K94514843P?off=zens5kg9&checkoutMode=10';
                break;
            case '1800':
                purchaseButton.href = 'https://pay.hotmart.com/P94531606S?off=ngcvyt5s&checkoutMode=10';
                break;
            case '1900':
                purchaseButton.href = 'https://pay.hotmart.com/Q94531691C?off=e4km9yv8&checkoutMode=10';
                break;
            case '2000':
                purchaseButton.href = 'https://pay.hotmart.com/G94531836C?off=scoatfjs&checkoutMode=10';
                break;
            case '2100':
                purchaseButton.href = 'https://pay.hotmart.com/J94531923W?off=3dvn84ki&checkoutMode=10';
                break;
            default:
                purchaseButton.href = '#';
        }

        // Configurar o botão para o padrão
        purchaseButton.textContent = "Adquirir Plano Alimentar";
    }
});
