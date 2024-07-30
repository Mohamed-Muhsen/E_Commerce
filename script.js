const bar = document.querySelector('#bar');
const close = document.querySelector('#close');
const nav = document.querySelector('#navbar');
if(bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active');
    })
} document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.fa-times-circle').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const row = button.closest('tr');
            row.remove();
            updateCartTotals();
        });
    });

    document.querySelectorAll('#cart input[type="number"]').forEach(input => {
        input.addEventListener('change', function() {
            const row = input.closest('tr');
            const price = parseFloat(row.querySelector('td:nth-child(4)').textContent.replace('$', ''));
            const quantity = parseInt(input.value);
            const subtotal = price * quantity;
            row.querySelector('td:nth-child(6)').textContent = `$${subtotal.toFixed(2)}`;
            updateCartTotals();
        });
    });

    function updateCartTotals() {
        let cartSubtotal = 0;
        document.querySelectorAll('#cart tbody tr').forEach(row => {
            const subtotal = parseFloat(row.querySelector('td:nth-child(6)').textContent.replace('$', ''));
            cartSubtotal += subtotal;
        });

        const cartSubtotalElement = document.querySelector('#subtotal table tr:nth-child(1) td:nth-child(2)');
        const totalElement = document.querySelector('#subtotal table tr:nth-child(3) td:nth-child(2)');

        cartSubtotalElement.textContent = `$${cartSubtotal.toFixed(2)}`;
        totalElement.textContent = `$${cartSubtotal.toFixed(2)}`;

        if (document.querySelectorAll('#cart tbody tr').length === 0) {
            cartSubtotalElement.textContent = '$0.00';
            totalElement.textContent = '$0.00';
        }
    }

    updateCartTotals();
});
var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");
smallimg[0].onclick = function () {
    MainImg.src = smallimg[0].src;
}
smallimg[1].onclick = function () {
    MainImg.src = smallimg[1].src;
}
smallimg[2].onclick = function () {
    MainImg.src = smallimg[2].src;
}
smallimg[3].onclick = function () {
    MainImg.src = smallimg[3].src;
}