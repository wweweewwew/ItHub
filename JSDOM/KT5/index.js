    const monthSelect = document.getElementById('expMonth');
    for(let i = 1; i <= 12; i++) {
        const option = document.createElement('option');
        const value = i.toString().padStart(2, '0');
        option.value = value;
        option.textContent = value;
        monthSelect.appendChild(option);
    }

    const yearSelect = document.getElementById('expYear');
    const currentYear = new Date().getFullYear();
    for(let i = 0; i < 10; i++) {
        const option = document.createElement('option');
        const year = currentYear + i;
        option.value = year.toString().slice(-2);
        option.textContent = year;
        yearSelect.appendChild(option);
    }

    document.getElementById('cardNumber').addEventListener('input', function(e) {
        const value = this.value;
        const errorElement = document.getElementById('cardNumberError');

        const cleanedValue = value.replace(/\D/g, '');

        if (value !== cleanedValue) {
            this.classList.add('error');
            errorElement.style.display = 'block';
        } else {
            this.classList.remove('error');
            errorElement.style.display = 'none';
        }
        this.value = cleanedValue;

        updatePreview();
    });

    const paymentIcons = {
        visa: 'fab fa-cc-visa',
        mastercard: 'fab fa-cc-mastercard',
        amex: 'fab fa-cc-amex'
    };

    document.getElementById('cardForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const cardNumber = document.getElementById('cardNumber').value;
        if (!/^\d{16}$/.test(cardNumber)) {
            document.getElementById('cardNumber').classList.add('error');
            document.getElementById('cardNumberError').style.display = 'block';
            document.getElementById('cardNumberError').textContent = 'Номер карты должен содержать 16 цифр';
            return;
        }
        
        addToTable();
        this.reset();
        clearPreview();
    });

    const formElements = document.querySelectorAll('#cardForm input, #cardForm select');
    for (const element of formElements) {
        if (element.id !== 'cardNumber') {
            element.addEventListener('input', updatePreview);
        }
    }

    function updatePreview() {
        document.getElementById('previewBank').textContent = document.getElementById('bankName').value;
        
        const paymentType  = document.getElementById('paymentSystem').value;
        const paymentIcon = document.getElementById('previewPayment');
        paymentIcon.className = paymentIcons[paymentType] + ' fa-2x';
        
        const cardNumber = document.getElementById('cardNumber').value;
        document.getElementById('previewNumber').textContent = cardNumber.match(/.{1,4}/g)?.join(' ') || '•••• •••• •••• ••••';
        
        document.getElementById('previewHolder').textContent = document.getElementById('cardHolder').value.toUpperCase() || 'ИМЯ ДЕРЖАТЕЛЯ';
        
        const month = document.getElementById('expMonth').value;
        const year = document.getElementById('expYear').value;
        document.getElementById('previewExpiry').textContent = (month && year) ? `${month}/${year}` : 'ММ/ГГ';
    }

    function addToTable() {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${document.getElementById('bankName').value}</td>
            <td>${document.getElementById('paymentSystem').options[document.getElementById('paymentSystem').selectedIndex].text}</td>
            <td>${document.getElementById('cardNumber').value.match(/.{1,4}/g)?.join(' ')}</td>
            <td>${document.getElementById('cardHolder').value.toUpperCase()}</td>
            <td>${document.getElementById('expMonth').value}/${document.getElementById('expYear').value}</td>
        `;
        document.getElementById('cardsTable').appendChild(row);
    }

    function clearPreview() {
        document.getElementById('previewBank').textContent = '';
        document.getElementById('previewPayment').className = '';
        document.getElementById('previewNumber').textContent = '•••• •••• •••• ••••';
        document.getElementById('previewHolder').textContent = 'ИМЯ ДЕРЖАТЕЛЯ';
        document.getElementById('previewExpiry').textContent = 'ММ/ГГ';
    }