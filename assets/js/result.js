document.addEventListener('DOMContentLoaded', function() {
    var getResult = localStorage.getItem('getResult');
    var dietCalories = localStorage.getItem('dietCalories');

    if (getResult && dietCalories) {
        document.getElementById('get-result').textContent = getResult;
        document.getElementById('diet-calories').textContent = dietCalories + " kcal";
        document.getElementById('diet-image').src = 'assets/images/MUDE-' + dietCalories + 'kcal.jpg';

       var purchaseButton = document.getElementById('purchase-button');
        switch (dietCalories) {
            case '1200':
                purchaseButton.href = 'https://pay.hotmart.com/J94228920E?checkoutMode=10&bid=1721781289333';
                break;
            case '1300':
                purchaseButton.href = 'https://pay.hotmart.com/E94277222V?checkoutMode=10&bid=1721839006371';
                break;
            case '1400':
                purchaseButton.href = 'https://pay.hotmart.com/S94278980V?checkoutMode=10&_gl=1*1oodc2w*_gcl_aw*R0NMLjE3MTUzNjc4MDYuQ2p3S0NBandpX2V4QmhBOEVpd0Ffa1UxTXVwRGxjUm1TR19BeEN3X0JyUThEMERwVGh1cU81SHBZa3lxSklJa0xVcEJZZk1RZnhuUHVSb0NMOHdRQXZEX0J3RQ..*_gcl_au*MTM3NjEyODYyNi4xNzE0ODQ0NTA4*_ga*MjEwMjIwNjUyOC4xNzE1MzY3Nzkz*_ga_GQH2V1F11Q*MTcyMTgzODY0Mi4yMjEuMS4xNzIxODM5MDQ0LjIyLjAuMA..&bid=1721839067208';
                break;
            case '1500':
                purchaseButton.href = 'https://pay.hotmart.com/X94514490P?checkoutMode=10&_gl=1*1ejhzgx*_gcl_aw*R0NMLjE3MTUzNjc4MDYuQ2p3S0NBandpX2V4QmhBOEVpd0Ffa1UxTXVwRGxjUm1TR19BeEN3X0JyUThEMERwVGh1cU81SHBZa3lxSklJa0xVcEJZZk1RZnhuUHVSb0NMOHdRQXZEX0J3RQ..*_gcl_au*MTM3NjEyODYyNi4xNzE0ODQ0NTA4*_ga*MjEwMjIwNjUyOC4xNzE1MzY3Nzkz*_ga_GQH2V1F11Q*MTcyMTgzODY0Mi4yMjEuMS4xNzIxODM5MTI1LjIuMC4w&bid=1721839183569';
                break;
            case '1600':
                purchaseButton.href = 'https://pay.hotmart.com/L94514697U?checkoutMode=10&_gl=1*1qd0ay9*_gcl_aw*R0NMLjE3MTUzNjc4MDYuQ2p3S0NBandpX2V4QmhBOEVpd0Ffa1UxTXVwRGxjUm1TR19BeEN3X0JyUThEMERwVGh1cU81SHBZa3lxSklJa0xVcEJZZk1RZnhuUHVSb0NMOHdRQXZEX0J3RQ..*_gcl_au*MTM3NjEyODYyNi4xNzE0ODQ0NTA4*_ga*MjEwMjIwNjUyOC4xNzE1MzY3Nzkz*_ga_GQH2V1F11Q*MTcyMTgzODY0Mi4yMjEuMS4xNzIxODM5MjMyLjExLjAuMA..&bid=1721839235404';
                break;
            case '1700':
                purchaseButton.href = 'https://pay.hotmart.com/K94514843P?checkoutMode=10&_gl=1*1y26pm0*_gcl_aw*R0NMLjE3MTUzNjc4MDYuQ2p3S0NBandpX2V4QmhBOEVpd0Ffa1UxTXVwRGxjUm1TR19BeEN3X0JyUThEMERwVGh1cU81SHBZa3lxSklJa0xVcEJZZk1RZnhuUHVSb0NMOHdRQXZEX0J3RQ..*_gcl_au*MTM3NjEyODYyNi4xNzE0ODQ0NTA4*_ga*MjEwMjIwNjUyOC4xNzE1MzY3Nzkz*_ga_GQH2V1F11Q*MTcyMTgzODY0Mi4yMjEuMS4xNzIxODM5MjU3LjYwLjAuMA..&bid=1721839265229';
                break;
            case '1800':
                purchaseButton.href = 'https://pay.hotmart.com/P94531606S?checkoutMode=10&_gl=1*1dfjmw3*_gcl_aw*R0NMLjE3MTUzNjc4MDYuQ2p3S0NBandpX2V4QmhBOEVpd0Ffa1UxTXVwRGxjUm1TR19BeEN3X0JyUThEMERwVGh1cU81SHBZa3lxSklJa0xVcEJZZk1RZnhuUHVSb0NMOHdRQXZEX0J3RQ..*_gcl_au*MTM3NjEyODYyNi4xNzE0ODQ0NTA4*_ga*MjEwMjIwNjUyOC4xNzE1MzY3Nzkz*_ga_GQH2V1F11Q*MTcyMTgzODY0Mi4yMjEuMS4xNzIxODM5MjgyLjM1LjAuMA..&bid=1721839286596';
                break;
            case '1900':
                purchaseButton.href = 'https://pay.hotmart.com/Q94531691C?checkoutMode=10&_gl=1*eh9zcm*_gcl_aw*R0NMLjE3MTUzNjc4MDYuQ2p3S0NBandpX2V4QmhBOEVpd0Ffa1UxTXVwRGxjUm1TR19BeEN3X0JyUThEMERwVGh1cU81SHBZa3lxSklJa0xVcEJZZk1RZnhuUHVSb0NMOHdRQXZEX0J3RQ..*_gcl_au*MTM3NjEyODYyNi4xNzE0ODQ0NTA4*_ga*MjEwMjIwNjUyOC4xNzE1MzY3Nzkz*_ga_GQH2V1F11Q*MTcyMTgzODY0Mi4yMjEuMS4xNzIxODM5MzAxLjE2LjAuMA..&bid=1721839305325';
                break;
            case '2000':
                purchaseButton.href = 'https://pay.hotmart.com/G94531836C?checkoutMode=10&_gl=1*h3d8yr*_gcl_aw*R0NMLjE3MTUzNjc4MDYuQ2p3S0NBandpX2V4QmhBOEVpd0Ffa1UxTXVwRGxjUm1TR19BeEN3X0JyUThEMERwVGh1cU81SHBZa3lxSklJa0xVcEJZZk1RZnhuUHVSb0NMOHdRQXZEX0J3RQ..*_gcl_au*MTM3NjEyODYyNi4xNzE0ODQ0NTA4*_ga*MjEwMjIwNjUyOC4xNzE1MzY3Nzkz*_ga_GQH2V1F11Q*MTcyMTgzODY0Mi4yMjEuMS4xNzIxODM5MzI0LjYwLjAuMA..&bid=1721839332655';
                break;
            case '2100':
                purchaseButton.href = 'https://pay.hotmart.com/J94531923W?checkoutMode=10&_gl=1*1hogf6q*_gcl_aw*R0NMLjE3MTUzNjc4MDYuQ2p3S0NBandpX2V4QmhBOEVpd0Ffa1UxTXVwRGxjUm1TR19BeEN3X0JyUThEMERwVGh1cU81SHBZa3lxSklJa0xVcEJZZk1RZnhuUHVSb0NMOHdRQXZEX0J3RQ..*_gcl_au*MTM3NjEyODYyNi4xNzE0ODQ0NTA4*_ga*MjEwMjIwNjUyOC4xNzE1MzY3Nzkz*_ga_GQH2V1F11Q*MTcyMTgzODY0Mi4yMjEuMS4xNzIxODM5MzQ2LjM4LjAuMA..&bid=1721839350455';
                break;
            default:
                purchaseButton.href = '#'; // fallback in case dietCalories is not recognized
        }
    } else {
        alert('Erro ao recuperar os dados. Por favor, tente novamente.');
    }
});
