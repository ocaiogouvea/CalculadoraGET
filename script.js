/* =====================================================
   Calculadora de calorias · Paloma Andrade
   Fórmula, faixas de déficit e links de checkout
   mantidos exatamente como na versão original
   ===================================================== */
(function () {

    /* ---------- Links de checkout por plano (inalterados) ---------- */
    var CHECKOUT = {
        '1200': 'https://pay.hotmart.com/J94228920E?off=y0dj6gdn&checkoutMode=10&bid=1740603694437',
        '1300': 'https://pay.hotmart.com/E94277222V?off=0bijp2gt&checkoutMode=10&bid=1740603875554',
        '1400': 'https://pay.hotmart.com/S94278980V?off=nbuumi9z&checkoutMode=10&bid=1740603764267',
        '1500': 'https://pay.hotmart.com/X94514490P?off=pklek34t&checkoutMode=10&bid=1740603769901',
        '1600': 'https://pay.hotmart.com/L94514697U?off=m5xs47ls&checkoutMode=10&bid=1740603776455',
        '1700': 'https://pay.hotmart.com/K94514843P?off=hiyhe97y&checkoutMode=10&bid=1740603787400',
        '1800': 'https://pay.hotmart.com/P94531606S?off=0kwh208h&checkoutMode=10&bid=1740603799223',
        '1900': 'https://pay.hotmart.com/Q94531691C?off=kw1fy07y&checkoutMode=10&bid=1740603809354',
        '2000': 'https://pay.hotmart.com/G94531836C?off=i23dtfu1&checkoutMode=10&bid=1740603820177',
        '2100': 'https://pay.hotmart.com/J94531923W?off=6rfpdpul&checkoutMode=10&bid=1740603827987'
    };

    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    function fmt(n) { return Math.round(n).toLocaleString('pt-BR'); }
    function track(name, data) { try { if (window.fbq) fbq('trackCustom', name, data || {}); } catch (e) {} }

    /* =====================================================
       PÁGINA DA CALCULADORA
       ===================================================== */
    var form = document.getElementById('calorieForm');
    if (form) {
        var loadingScreen = document.getElementById('loadingScreen');
        var progressBarFill = document.getElementById('progressBarFill');
        var loadingText = document.getElementById('loadingText');
        var optionsBox = document.getElementById('activityOptions');

        var rules = {
            weight: { min: 35, max: 250 },
            height: { min: 120, max: 220 },
            age: { min: 15, max: 90 }
        };

        function checkField(id) {
            var el = document.getElementById(id);
            var v = parseFloat(String(el.value).replace(',', '.'));
            var ok = !isNaN(v) && v >= rules[id].min && v <= rules[id].max;
            el.closest('.field').classList.toggle('invalid', !ok);
            return ok ? v : null;
        }

        // Limpa o erro assim que a pessoa corrige
        ['weight', 'height', 'age'].forEach(function (id) {
            document.getElementById(id).addEventListener('input', function () {
                this.closest('.field').classList.remove('invalid');
            });
        });
        optionsBox.addEventListener('change', function () { optionsBox.classList.remove('invalid'); });

        form.addEventListener('submit', function (e) {
            e.preventDefault();

            var weight = checkField('weight');
            var height = checkField('height');
            var age = checkField('age');
            var checked = form.querySelector('input[name="activity"]:checked');
            var activity = checked ? parseFloat(checked.value) : null;
            optionsBox.classList.toggle('invalid', !activity);

            if (!(weight && height && age && activity)) {
                var firstError = form.querySelector('.field.invalid input') || (activity ? null : optionsBox);
                if (firstError) firstError.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
                return;
            }

            // Fórmula de Harris-Benedict para mulheres (original)
            var bmr = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
            var get = bmr * activity; // Gasto Energético Total

            localStorage.setItem('getResult', get.toFixed(2));

            // Cálculo do déficit calórico (original)
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
            if (dietCalories < 1200) dietCalories = 1200;
            else if (dietCalories > 2100) dietCalories = 2100;

            localStorage.setItem('dietCalories', dietCalories);
            track('CalculouCalorias', { plano: dietCalories });

            // Tela de carregamento com etapas (4 segundos, como antes)
            var steps = ['Calculando seu gasto diário...', 'Aplicando o déficit calórico...', 'Separando o seu cardápio...'];
            loadingScreen.style.display = 'flex';
            document.body.style.overflow = 'hidden';

            var progress = 0;
            var interval = setInterval(function () {
                progress += 2.5;
                progressBarFill.style.width = progress + '%';
                var idx = progress < 34 ? 0 : progress < 67 ? 1 : 2;
                if (loadingText.textContent !== steps[idx]) loadingText.textContent = steps[idx];

                if (progress >= 100) {
                    clearInterval(interval);
                    // Leva as UTMs junto para a página de resultado
                    window.location.href = 'resultado.html' + window.location.search;
                }
            }, 100);
        });

        // Se a pessoa voltar pelo botão "voltar" do navegador, esconde o loading
        window.addEventListener('pageshow', function () {
            loadingScreen.style.display = 'none';
            progressBarFill.style.width = '0%';
            document.body.style.overflow = '';
        });
    }

    /* =====================================================
       PÁGINA DE RESULTADO
       (roda antes do script de UTM para ele já encontrar o link certo)
       ===================================================== */
    var purchaseButton = document.getElementById('purchase-button');
    if (purchaseButton) {
        var getResult = parseFloat(localStorage.getItem('getResult'));
        var dietCalories = localStorage.getItem('dietCalories');

        if (!getResult || !CHECKOUT[dietCalories]) {
            window.location.replace('index.html' + window.location.search);
            return;
        }

        var diet = parseInt(dietCalories, 10);
        var deficitShown = Math.round(getResult) - diet;

        // Links de compra (botão principal + barra fixa)
        document.querySelectorAll('.js-checkout').forEach(function (a) {
            a.href = CHECKOUT[dietCalories];
            a.textContent = 'Quero meu cardápio de ' + fmt(diet) + ' kcal';
            a.addEventListener('click', function () { track('CliqueCheckout', { plano: diet }); });
        });
        document.querySelectorAll('.js-plan').forEach(function (el) { el.textContent = fmt(diet); });

        // Se o gasto for muito baixo e o plano ficar no piso de 1.200, esconde a linha de déficit
        if (deficitShown <= 0) {
            document.getElementById('deficitRow').style.display = 'none';
        }

        // Números da conta com contagem
        var targets = [
            [document.getElementById('get-result'), Math.round(getResult)],
            [document.getElementById('deficit-result'), Math.max(deficitShown, 0)],
            [document.getElementById('diet-result'), diet]
        ];
        if (reduceMotion) {
            targets.forEach(function (t) { t[0].textContent = fmt(t[1]); });
        } else {
            var start = null, dur = 1400;
            var ease = function (t) { return 1 - Math.pow(1 - t, 3); };
            var step = function (ts) {
                if (!start) start = ts;
                var p = Math.min((ts - start - 450) / dur, 1);
                if (p < 0) p = 0;
                targets.forEach(function (t) { t[0].textContent = fmt(t[1] * ease(p)); });
                if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
        }

        // Barra fixa aparece depois que a pessoa passa da conta
        var sticky = document.getElementById('stickyBar');
        var mainBtn = purchaseButton;
        var onScroll = function () {
            var r = mainBtn.getBoundingClientRect();
            var btnVisible = r.top < window.innerHeight && r.bottom > 0;
            sticky.classList.toggle('show', window.scrollY > 380 && !btnVisible);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }
})();
